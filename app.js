const PAGE_SIZE = 24;
const SAVED_STORAGE_KEY = "interface-index:saved";

const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const categoryFilters = document.querySelector("#categoryFilters");
const resourceGrid = document.querySelector("#resourceGrid");
const resultCount = document.querySelector("#resultCount");
const loadMoreWrap = document.querySelector("#loadMoreWrap");
const loadMoreButton = document.querySelector("#loadMoreButton");
const remainingCount = document.querySelector("#remainingCount");
const emptyState = document.querySelector("#emptyState");
const savedToggle = document.querySelector("#savedToggle");
const savedCount = document.querySelector("#savedCount");

let catalog = null;
let activeCategory = "all";
let savedOnly = false;
let visibleLimit = PAGE_SIZE;
let savedUrls = loadSavedUrls();

function loadSavedUrls() {
  try {
    return new Set(JSON.parse(localStorage.getItem(SAVED_STORAGE_KEY) || "[]"));
  } catch {
    return new Set();
  }
}

function saveSavedUrls() {
  try {
    localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify([...savedUrls]));
  } catch {
    // Browsing still works when storage is unavailable or blocked.
  }
}

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function getInitials(name) {
  const cleanName = name.replace(/\([^)]*\)/g, "").trim();
  const words = cleanName.split(/[\s/·-]+/).filter(Boolean);
  if (words.length > 1) return `${words[0][0]}${words[1][0]}`.toUpperCase();
  return cleanName.slice(0, 2).toUpperCase();
}

function iconSvg(kind) {
  if (kind === "arrow") {
    return '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 12 12 4M5 4h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  if (kind === "star") {
    return '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m10 2.4 2.3 4.7 5.2.8-3.8 3.7.9 5.2-4.6-2.5-4.6 2.5.9-5.2-3.8-3.7 5.2-.8L10 2.4Z"/></svg>';
  }
  return '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 3.5h10v13l-5-3.1-5 3.1v-13Z"/></svg>';
}

function createFilterButton(id, label) {
  const button = makeElement("button", "filter-chip", label);
  button.type = "button";
  button.dataset.category = id;
  button.setAttribute("aria-pressed", String(activeCategory === id && !savedOnly));
  button.addEventListener("click", () => {
    activeCategory = id;
    savedOnly = false;
    visibleLimit = PAGE_SIZE;
    render();
  });
  return button;
}

function renderFilters() {
  categoryFilters.replaceChildren();
  categoryFilters.append(createFilterButton("all", "All resources"));
  for (const category of catalog.categories) {
    categoryFilters.append(createFilterButton(category.id, category.title));
  }
  savedToggle.setAttribute("aria-pressed", String(savedOnly));
  savedCount.textContent = String(savedUrls.size);
}

function matchesSearch(resource, query) {
  if (!query) return true;
  const haystack = [
    resource.name,
    resource.description,
    resource.details,
    resource.categoryName,
    resource.subcategory,
    resource.url,
  ].join(" ").toLowerCase();
  return haystack.includes(query);
}

function getFilteredResources() {
  const query = searchInput.value.trim().toLowerCase();
  const resources = catalog.resources.filter((resource) => {
    if (activeCategory !== "all" && resource.category !== activeCategory) return false;
    if (savedOnly && !savedUrls.has(resource.url)) return false;
    return matchesSearch(resource, query);
  });

  if (sortSelect.value === "az") resources.sort((a, b) => a.name.localeCompare(b.name));
  if (sortSelect.value === "za") resources.sort((a, b) => b.name.localeCompare(a.name));
  return resources;
}

function createResourceCard(resource, index) {
  const article = makeElement("article", `resource-card resource-card--${resource.category}`);
  const heading = makeElement("div", "resource-card__head");
  const categoryName = makeElement("span", "resource-card__category", resource.subcategory || resource.categoryName);
  categoryName.title = resource.subcategory || resource.categoryName;

  const isSaved = savedUrls.has(resource.url);
  const saveButton = makeElement("button", "resource-card__save");
  saveButton.type = "button";
  saveButton.innerHTML = iconSvg("bookmark");
  saveButton.setAttribute("aria-pressed", String(isSaved));
  saveButton.setAttribute("aria-label", `${isSaved ? "Remove" : "Save"} ${resource.name} ${isSaved ? "from" : "to"} your saved resources`);
  saveButton.title = isSaved ? "Remove from saved resources" : "Save for later";
  saveButton.addEventListener("click", () => {
    if (savedUrls.has(resource.url)) savedUrls.delete(resource.url);
    else savedUrls.add(resource.url);
    saveSavedUrls();
    render();
  });
  heading.append(categoryName, saveButton);

  const visual = makeElement("div", "resource-card__art");
  visual.setAttribute("aria-hidden", "true");
  visual.append(makeElement("span", "resource-card__art-grid"));
  visual.append(makeElement("span", "resource-card__art-index", `FIELD NOTE  /  ${String(index + 1).padStart(3, "0")}`));
  visual.append(makeElement("span", "resource-card__art-mark", getInitials(resource.name)));
  visual.append(makeElement("span", "resource-card__art-spark", "✳"));
  visual.append(makeElement("span", "resource-card__art-type", resource.categoryName));

  const body = makeElement("div", "resource-card__body");
  const title = makeElement("h3", "resource-card__name");
  const titleLink = makeElement("a", "", resource.name);
  titleLink.href = resource.url;
  titleLink.target = "_blank";
  titleLink.rel = "noreferrer";
  title.append(titleLink);

  const description = makeElement("p", "resource-card__description", resource.description);
  const detail = makeElement("p", "resource-card__detail", resource.details || resource.subcategory || resource.categoryName);
  const footer = makeElement("div", "resource-card__footer");
  let domain = resource.url;
  try {
    domain = new URL(resource.url).hostname.replace(/^www\./, "");
  } catch {
    // The resource link remains available even if a future entry has an unusual URL.
  }
  footer.append(makeElement("span", "resource-card__domain", domain));
  const visitLink = makeElement("a", "resource-card__visit");
  visitLink.href = resource.url;
  visitLink.target = "_blank";
  visitLink.rel = "noreferrer";
  visitLink.append(document.createTextNode("Visit"));
  const arrow = makeElement("span", "", "↗");
  arrow.setAttribute("aria-hidden", "true");
  visitLink.append(arrow);
  footer.append(visitLink);

  body.append(title, description, detail, footer);
  article.append(heading, visual, body);
  return article;
}

function render() {
  if (!catalog) return;
  renderFilters();
  const resources = getFilteredResources();
  const visibleResources = resources.slice(0, visibleLimit);
  resourceGrid.replaceChildren(...visibleResources.map((resource) =>
    createResourceCard(resource, catalog.resources.indexOf(resource)),
  ));

  const savedLabel = savedOnly ? " saved" : "";
  const queryLabel = searchInput.value.trim() ? " matching your search" : "";
  resultCount.textContent = `Showing ${visibleResources.length} of ${resources.length}${savedLabel} resource${resources.length === 1 ? "" : "s"}${queryLabel}`;
  const hasResults = resources.length > 0;
  emptyState.hidden = hasResults;
  resourceGrid.hidden = !hasResults;
  loadMoreWrap.hidden = resources.length <= visibleResources.length;
  remainingCount.textContent = `${resources.length - visibleResources.length} more in this view`;
}

function setActiveCategory(categoryId) {
  activeCategory = categoryId;
  savedOnly = false;
  visibleLimit = PAGE_SIZE;
  render();
}

savedToggle.addEventListener("click", () => {
  savedOnly = !savedOnly;
  if (savedOnly) activeCategory = "all";
  visibleLimit = PAGE_SIZE;
  render();
});

searchInput.addEventListener("input", () => {
  visibleLimit = PAGE_SIZE;
  render();
});

sortSelect.addEventListener("change", () => {
  visibleLimit = PAGE_SIZE;
  render();
});

loadMoreButton.addEventListener("click", () => {
  visibleLimit += PAGE_SIZE;
  render();
});

document.querySelector("#clearFilters").addEventListener("click", () => {
  searchInput.value = "";
  sortSelect.value = "curated";
  setActiveCategory("all");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !event.metaKey && !event.ctrlKey && !event.altKey) {
    const active = document.activeElement;
    if (active !== searchInput && !["INPUT", "TEXTAREA", "SELECT"].includes(active?.tagName)) {
      event.preventDefault();
      searchInput.focus();
    }
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    searchInput.blur();
    visibleLimit = PAGE_SIZE;
    render();
  }
});

function initializeCatalog() {
  try {
    catalog = window.INTERFACE_INDEX;
    if (!catalog?.resources?.length) throw new Error("Generated catalog data is missing.");
    const catalogUrls = new Set(catalog.resources.map((resource) => resource.url));
    savedUrls = new Set([...savedUrls].filter((url) => catalogUrls.has(url)));
    saveSavedUrls();
    const count = catalog.resources.length;
    document.querySelector("#heroResourceCount").textContent = String(count);
    document.querySelector("#heroCategoryCount").textContent = String(catalog.categories.length).padStart(2, "0");
    document.querySelector("#heroRange").textContent = `001—${String(count).padStart(3, "0")}`;
    render();
  } catch (error) {
    resultCount.textContent = "The index could not load. Run the local server from the project root and try again.";
    resourceGrid.hidden = true;
    console.error(error);
  }
}

initializeCatalog();
