#!/usr/bin/env python3
"""Build the static showcase data from the categorized tables in README.md."""

from __future__ import annotations

import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
README = ROOT / "README.md"
OUTPUT = ROOT / "catalog.json"
SCRIPT_OUTPUT = ROOT / "catalog.js"

CATEGORY_MAP = {
    "Component libraries and building blocks": ("components", "Components"),
    "Design inspiration and prompt libraries": ("inspiration", "Inspiration"),
    "Fonts and typography": ("typography", "Type"),
    "Animation and interaction": ("motion", "Motion"),
    "Design presentation and mockups": ("presentation", "Presentation"),
    "CSS and visual effects": ("visual-effects", "Visual effects"),
    "Charts and data visualization": ("charts", "Charts & data"),
    "Icon libraries": ("icons", "Icons"),
}
LINK_PATTERN = re.compile(r"^\[([^\]]+)\]\((https?://[^)]+)\)")


def clean_markdown(value: str) -> str:
    value = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", value)
    value = re.sub(r"[`*_~]", "", value)
    return re.sub(r"\s+", " ", html.unescape(value)).strip()


def main() -> None:
    source = README.read_text(encoding="utf-8")
    categories: list[dict] = []
    active_category: dict | None = None
    subcategory = ""

    for line in source.splitlines():
        if line.startswith("## "):
            heading = line[3:].strip()
            mapped = CATEGORY_MAP.get(heading)
            if mapped:
                category_id, title = mapped
                active_category = {"id": category_id, "title": title, "resources": []}
                categories.append(active_category)
            else:
                active_category = None
            subcategory = ""
            continue

        if active_category and line.startswith("### "):
            subcategory = line[4:].strip()
            continue

        if not active_category or not line.startswith("|") or "---" in line:
            continue

        cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
        if len(cells) < 2:
            continue
        match = LINK_PATTERN.match(cells[0])
        if not match:
            continue

        name, url = match.groups()
        item = {
            "name": clean_markdown(name),
            "url": url.strip(),
            "description": clean_markdown(cells[1]),
            "details": clean_markdown(cells[2]) if len(cells) > 2 else "",
            "category": active_category["id"],
            "categoryName": active_category["title"],
            "subcategory": subcategory,
        }
        active_category["resources"].append(item)

    categories = [category for category in categories if category["resources"]]
    resources = [item for category in categories for item in category["resources"]]
    if not resources:
        raise SystemExit("No linked resource rows were found in README.md")

    payload = {
        "repository": "Chidori42/ui_resources",
        "generatedFrom": "README.md",
        "categories": categories,
        "resources": resources,
    }
    serialized = json.dumps(payload, ensure_ascii=False, indent=2)
    OUTPUT.write_text(serialized + "\n", encoding="utf-8")
    SCRIPT_OUTPUT.write_text(f"window.INTERFACE_INDEX = {serialized};\n", encoding="utf-8")
    print(f"Generated {len(resources)} resources across {len(categories)} categories -> {OUTPUT.name}, {SCRIPT_OUTPUT.name}")


if __name__ == "__main__":
    main()
