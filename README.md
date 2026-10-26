# UI Resources — Interface Index

A curated field guide to 129 UI and front-end resources for modern web projects, covering component libraries, design inspiration, type, motion, visual effects, data visualization, icons, and more.

The repository includes a GitHub Pages-ready interactive showcase and a complete Markdown directory. This is an independent link catalog; the resources themselves are maintained by their respective owners.

[![GitHub stars](https://img.shields.io/github/stars/Chidori42/ui_resources?style=social)](https://github.com/Chidori42/ui_resources/stargazers)
[![Showcase deployment](https://github.com/Chidori42/ui_resources/actions/workflows/pages.yml/badge.svg?branch=main)](https://github.com/Chidori42/ui_resources/actions/workflows/pages.yml)

If this index helps with a project, [leave the repository a star](https://github.com/Chidori42/ui_resources).

## Contents

- [Getting started](#getting-started)
- [Quick picks](#quick-picks)
- [Component libraries and building blocks](#component-libraries-and-building-blocks)
- [Design inspiration and prompt libraries](#design-inspiration-and-prompt-libraries)
- [Fonts and typography](#fonts-and-typography)
- [Animation and interaction](#animation-and-interaction)
- [Design presentation and mockups](#design-presentation-and-mockups)
- [CSS and visual effects](#css-and-visual-effects)
- [Charts and data visualization](#charts-and-data-visualization)
- [Icon libraries](#icon-libraries)
- [Adding a resource](#adding-a-resource)

## Getting started

The repository includes a no-build, responsive showcase page and a Markdown directory. No npm install is needed.

1. **Publish online:** select **Settings → Pages → Build and deployment → GitHub Actions**. Then run **Publish interface index** once from the Actions tab. The showcase will be available at `https://chidori42.github.io/ui_resources/`; later pushes to `main` deploy automatically.
2. **Preview locally:** from the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000`.
3. **Explore this directory:** choose a category below or use the [quick picks](#quick-picks). Open each resource's own setup guide for framework and installation details.
4. **Update the showcase data:** after editing a resource table, run `python3 scripts/build_catalog.py` to regenerate `catalog.json` and the browser-ready `catalog.js` from this README.
5. Review each resource's current license, pricing, compatibility, and accessibility guidance before adopting it in a project.

## Quick picks

| If you need… | Start with… |
| --- | --- |
| React components you can adapt in your project | [HeroUI](https://heroui.com/en/docs/react/components/), [shadcn/ui](https://ui.shadcn.com/docs/components), [React Bits](https://reactbits.dev/), or [Vengeance UI](https://www.vengenceui.com/) |
| Angular components | [Hell's Kitchen UI](https://hellskitchen-ui.org/docs/component/) |
| Accessible, unstyled React primitives | [Radix UI](https://www.radix-ui.com/primitives) |
| Website and design-system references | [Refero Styles](https://styles.refero.design/) or [Webzooo](https://webzooo.com/) |
| Mobile and web product flows | [Mobbin](https://mobbin.com/) or [Refero Styles](https://styles.refero.design/) |
| Website inspiration galleries | [Land-book](https://land-book.com/), [Siteinspire](https://www.siteinspire.com/), or [Httpster](https://httpster.net/) |
| Immersive website showcases | [FunTech Experience 2026](https://experience2026.funtech.inc/) |
| Product launch page references | [Shopify Editions: Winter '26](https://www.shopify.com/editions/winter2026) |
| Font libraries | [Fontshare](https://www.fontshare.com/), [Google Fonts](https://fonts.google.com/), or [Font Squirrel](https://www.fontsquirrel.com/) |
| Font pairing and typography references | [Fontpair](https://fontpair.co/), [Fontjoy](https://fontjoy.com/), or [Typewolf](https://www.typewolf.com/) |
| Device mockups and product previews | [LS Graphics](https://www.ls.graphics/), [Mockuuups Studio](https://mockuuups.studio/), or [Previewed](https://previewed.app/) |
| Design asset marketplaces | [UI8](https://ui8.net/) or [Craftwork](https://craftwork.design/) |
| Explore community component collections | [21st.dev](https://21st.dev/), [OpenSource UI](https://opensourceui.in/), or [Uiverse](https://uiverse.io/) |
| Copy ready-made page sections | [shadcnblocks](https://www.shadcnblocks.com/), [blocks.so](https://blocks.so/), or [Spectrum UI](https://ui.spectrumhq.in/) |
| AI interface components | [Beautiful UI](https://www.beautifului.dev/), [AICSS](https://www.aicss.dev/), or [Thinking Orbs](https://www.thinkingorbs.com/) |
| Animated React components | [Motion Primitives](https://motion-primitives.com/), [React Bits](https://reactbits.dev/), or [Componentry](https://componentry.dev/) |
| JavaScript animation | [GSAP](https://gsap.com/), [Anime.js](https://animejs.com/), or [Motion](https://motion.dev/) |
| Interactive animation assets | [Rive](https://rive.app/) or [LottieFiles](https://lottiefiles.com/) |
| Smooth scrolling | [Lenis](https://lenis.dev/) |
| SVG backgrounds and patterns | [Haikei](https://haikei.app/) or [fffuel](https://www.fffuel.co/) |
| General-purpose charts | [Apache ECharts](https://echarts.apache.org/en/index.html) or [Chart.js](https://www.chartjs.org/) |
| React charts | [Recharts](https://recharts.org/) or [Nivo](https://nivo.rocks/) |
| Custom visualizations | [D3](https://d3js.org/) or [visx](https://visx.airbnb.tech/) |
| Chart examples and themes | [ECharts examples](https://echarts.apache.org/examples) and its [theme builder](https://echarts.apache.org/en/theme-builder.html) |
| UI icons | [Lucide](https://lucide.dev/), [Heroicons](https://heroicons.com/), or [Phosphor](https://phosphoricons.com/) |
| Brand logos as icons | [Simple Icons](https://simpleicons.org/) |

## Component libraries and building blocks

Ready-made components and lower-level primitives for building application interfaces. Framework and styling requirements differ, so check the linked setup guide before choosing one.

| Resource | What it offers | Stack / format |
| --- | --- | --- |
| [Hairline (Stage listing)](https://getstage.co/component-libraries/hairline) | Interactive isometric SVG illustrations for product interfaces, prototypes, and empty states. The listing describes React and plain JavaScript usage. | React, JavaScript, SVG |
| [Hell's Kitchen UI](https://hellskitchen-ui.org/docs/component/) | Small, composable Angular components with built-in animation and editable CSS-token theming. The project currently describes itself as MIT-licensed. | Angular 19+, standalone components |
| [HeroUI](https://heroui.com/en/docs/react/components/) | A broad React component set covering common controls, forms, navigation, overlays, and data display. | React |
| [Unlumen UI](https://ui.unlumen.com/) | Animated React components and primitives designed for shadcn-based projects, with source that can be adapted. | React, Tailwind CSS, shadcn/ui |
| [OriginKit](https://www.originkit.dev/) | Animated components and templates with source delivery for several workflows, including React, Next.js, Vite, and Framer. | React, Next.js, Vite, Framer |
| [React Bits](https://reactbits.dev/) | Copyable animated React components, text effects, backgrounds, and micro-interactions. Components are available in JavaScript or TypeScript with CSS or Tailwind styling. | React, CSS, Tailwind CSS |
| [Pioneer UI](https://www.pioneerui.com/docs/components) | Copy-and-install animated interface pieces such as hero sections, cards, backgrounds, buttons, and text effects. | React, Tailwind CSS, Framer Motion; shadcn CLI |
| [Aceternity UI](https://ui.aceternity.com/) | Copyable React components, page blocks, and templates with animated effects. | React, Tailwind CSS, Motion |
| [Magic UI](https://magicui.design/) | Open-source animated components and visual effects designed to pair with shadcn/ui. | React, TypeScript, Tailwind CSS, Motion |
| [Vengeance UI](https://www.vengenceui.com/) | Open-source React components and blocks focused on hover effects, animated tooltips, and scroll-driven layouts, with a shadcn-compatible registry. | React, Next.js, shadcn/ui |
| [Forge UI](https://forgeui.in/) | Copy-paste shadcn/ui components, blocks, and full-page templates for SaaS and web applications. | React, Next.js, Tailwind CSS, Motion, GSAP |
| [Uilora](https://www.uilora.com/) | Copyable components, layouts, and interactive patterns for web and React Native, with a command-line installer and component playground. | React, Next.js, React Native, Expo, TypeScript, Tailwind CSS |
| [Uiverse](https://uiverse.io/) | Community-built open-source UI elements with code to copy as HTML/CSS, Tailwind, React, or into Figma. | HTML/CSS, Tailwind CSS, React, Figma |

### Component collections and themed systems

| Resource | What it offers | Stack / format |
| --- | --- | --- |
| [21st.dev](https://21st.dev/) | A searchable marketplace of community-made components, blocks, and templates, with prompt, CLI, and AI-agent workflows. | React, TypeScript, Tailwind CSS, shadcn registry |
| [OpenSource UI](https://opensourceui.in/) | Copy-ready React components, widgets, and device mockups with live previews. | React, Next.js, TypeScript, Tailwind CSS |
| [Spectrum UI](https://ui.spectrumhq.in/) | An open-source collection of animated components and page blocks, with copyable source, shadcn CLI, and MCP support. | React, Next.js, Tailwind CSS, Motion, TypeScript |
| [8bitcn](https://www.8bitcn.com/) | Retro-styled, pixel-inspired components distributed through a shadcn-compatible registry. | React, Tailwind CSS, shadcn/ui |
| [Kokonut UI](https://kokonutui.com/) | Components, dashboard patterns, and larger page templates with animated treatments; the catalog includes free and Pro content. | React, Next.js, Tailwind CSS, Motion, shadcn CLI |
| [Origin UI](https://originui.com/) | A large open-source collection of copy-and-paste React components for application interfaces. | React, Tailwind CSS |

### Website blocks and page sections

| Resource | What it offers | Stack / format |
| --- | --- | --- |
| [shadcnblocks](https://www.shadcnblocks.com/) | Components, page blocks, templates, themes, and tools built around shadcn/ui, with both free and paid offerings. | React, Next.js, Tailwind CSS, shadcn/ui; also Vue blocks |
| [blocks.so](https://blocks.so/) | Accessible, customizable, open-source interface blocks that can be copied or installed from a registry. | React, Tailwind CSS, shadcn CLI |

### Animated and interactive components

| Resource | What it offers | Stack / format |
| --- | --- | --- |
| [Motion Primitives](https://motion-primitives.com/) | An open-source, copy-and-install kit of animated interface components and effects. | React, Tailwind CSS, Motion |
| [NumberFlow](https://number-flow.barvian.me/vanilla) | Animated number displays that smoothly update changing values and support locale-aware formatting. | JavaScript and framework integrations |
| [Fancy Components](https://www.fancycomponents.dev/) | Playful, copyable components and micro-interactions, including text effects, physics experiments, and image interactions. | React, TypeScript, Tailwind CSS, Motion |
| [Amicro](https://amicro.vercel.app/) | A browsable collection of micro-interactions and transition components, with individual install commands. | React, Motion |
| [Painterly (Stage listing)](https://getstage.co/component-libraries/painterly) | Artistic, canvas-based loading animations packaged as components. | React, Canvas |
| [Bencho](https://bencho.dev/) | Live interactive components and UI blocks that can be explored, adjusted, and copied into a project. | React; review each component's dependencies |
| [Skiper UI](https://skiper-ui.com/) | Uncommon animated components and blocks, distributed through a shadcn-compatible registry; some items are premium. | React, Next.js, Tailwind CSS, Framer Motion, GSAP |
| [Thinking Orbs](https://www.thinkingorbs.com/) | Animated status indicators for AI states such as working, searching, listening, and composing. | React, JavaScript, SwiftUI |
| [ObsidianUI](https://www.obsidianui.dev/) | Animated and interactive components, blocks, and templates with editable source. | React, TypeScript, Tailwind CSS, Motion |
| [Componentry](https://componentry.dev/) | A growing library of animated React components with editable code and CLI or MCP installation workflows. | React; shadcn CLI, MCP |
| [Arc](https://uiarc.dev/) | React components and larger blocks with motion, keyboard behavior, reduced-motion support, and AI-readable docs. | React, TypeScript, CSS Modules; shadcn CLI, MCP |

### AI interface components

| Resource | What it offers | Stack / format |
| --- | --- | --- |
| [Beautiful UI](https://www.beautifului.dev/) | Copy-ready interface blocks for AI chat, reasoning, tool activity, approvals, and agent status. | React, TypeScript, shadcn/ui registry |
| [AICSS](https://www.aicss.dev/) | Copy-and-paste components for AI interfaces, including thinking states, tool calls, streaming text, and structured outputs. | React, Vue, Svelte |

### Component research and references

| Resource | What it offers | Best for |
| --- | --- | --- |
| [The Component Gallery](https://component.gallery/) | A framework-independent reference library comparing interface patterns across design systems. | Researching component conventions before choosing or designing an implementation |

### Additional foundations

These foundations complement the component collections above. Use source-first components when you want to own and adapt the code, or headless primitives when you want to build your own visual system.

| Resource | What it offers | Stack / format |
| --- | --- | --- |
| [shadcn/ui](https://ui.shadcn.com/docs/components) | A customizable set of components and patterns that you add to your codebase, with documentation for installation, theming, and the CLI. | React, Tailwind CSS |
| [Radix UI Primitives](https://www.radix-ui.com/primitives) | Unstyled React building blocks with accessibility and interaction behavior handled, ready for your own visual design. | React |
| [Headless UI](https://headlessui.com/) | Unstyled, accessible interactive components intended to work well with Tailwind CSS. | React, Vue |
| [Base UI](https://base-ui.com/) | Unstyled, composable React components for teams building their own accessible design system. | React; works with CSS, Tailwind, and CSS-in-JS |
| [coss/ui](https://coss.com/ui) | A source-first React design system built on Base UI, with styled primitives and higher-level patterns. It is the ongoing evolution of Origin UI. | React, Base UI, Tailwind CSS v4; currently in active development |
| [Ark UI](https://ark-ui.com/) | Headless components with interaction behavior for building a custom design system across several frameworks. | React, Solid, Vue, Svelte |

### Framework component systems

These libraries provide styled components and broader design-system conventions.

| Resource | What it offers | Stack / format |
| --- | --- | --- |
| [Material UI](https://mui.com/material-ui/) | A comprehensive component library implementing Google's Material Design. | React |
| [Ant Design](https://ant.design/) | A broad React design system with components and companion tools for application development. | React |
| [Mantine](https://mantine.dev/) | A large React component and hooks library for building customizable web applications. | React |
| [Chakra UI](https://chakra-ui.com/) | Accessible React components and design-system tools including tokens and component recipes. | React |
| [daisyUI](https://daisyui.com/) | A Tailwind CSS plugin that provides semantic classes and CSS component styles with theme options. | Tailwind CSS |
| [Bootstrap](https://getbootstrap.com/docs/5.3/components/) | A mature responsive UI toolkit with documented components and layout utilities. | HTML, CSS, JavaScript |

## Design inspiration and prompt libraries

Use these when you need product UI references, visual direction, website examples, or a starting prompt.

### Product and interface research

| Resource | What it offers | Best for |
| --- | --- | --- |
| [Refero Styles](https://styles.refero.design/) | A searchable gallery of product-site design systems with colors, typography, spacing, components, and AI-readable `DESIGN.md` files. | Turning a visual reference into a design brief |
| [Webzooo](https://webzooo.com/) | A website gallery organized around color, palettes, and hex values, with industry filters and design details. | Finding real-world examples for a color direction |
| [Mobbin](https://mobbin.com/) | A searchable reference library of shipped app and website screens, with interface examples added over time. | Studying product patterns, screens, and user flows |

### Website inspiration galleries

| Resource | What it offers | Best for |
| --- | --- | --- |
| [Land-book](https://land-book.com/) | A curated website gallery with filters for industry, style, page type, typography, color, and platform. | Finding landing-page and portfolio references by visual treatment |
| [Siteinspire](https://www.siteinspire.com/) | A showcase of web design organized by styles, types, subjects, and platforms. | Browsing polished website examples by category |
| [Httpster](https://httpster.net/) | A website gallery with filters for visual styles, site types, and motion or interaction patterns. | Exploring contemporary web design and interaction ideas |
| [Awwwards](https://www.awwwards.com/) | A showcase and awards directory for notable websites and digital experiences. | Studying highly art-directed web work |
| [Dribbble](https://dribbble.com/) | A creative community where designers share web, product, mobile, and motion design work. | Quick visual exploration and designer portfolios |
| [Behance](https://www.behance.net/) | A portfolio platform for publishing and discovering creative projects, including digital and UI design. | Reviewing full design case studies and visual portfolios |

### Interactive website showcases

| Resource | What it offers | Best for |
| --- | --- | --- |
| [FunTech Experience 2026](https://experience2026.funtech.inc/) | An immersive, AI-crafted brand experience with a sequence of interactive 3D scenes. | Studying narrative-led, experimental web experiences and rich motion design |
| [Shopify Editions: Winter '26](https://www.shopify.com/editions/winter2026) | A visually rich product launch page presenting Shopify's Winter '26 commerce updates through themed sections and interactive media. | Exploring long-form product storytelling and ecommerce feature showcases |

### AI design prompts

| Resource | What it offers | Best for |
| --- | --- | --- |
| [MotionSites](https://motionsites.ai/) | Ready-to-use prompts and examples for landing pages, site sections, and animated backgrounds. | Prompt-driven website exploration |
| [GetLayers AI](https://www.getlayers.ai/) | Prompt templates for cinematic websites, 3D scenes, gradients, and interactive page sections. | Art-directed AI website concepts and visual scenes |

## Fonts and typography

Find typefaces for web and product interfaces, check how font families pair, and learn the licensing and delivery requirements before using fonts in a project.

### Font libraries and catalogs

| Resource | What it offers | Best for |
| --- | --- | --- |
| [Fontshare](https://www.fontshare.com/) | A searchable collection of typefaces from the Indian Type Foundry, with previews and downloads. | Exploring contemporary fonts; review the license for each font and intended use |
| [Google Fonts](https://fonts.google.com/) | A large catalog of open-source font families with specimens, language filters, and web embedding options. | Finding and serving open-source fonts in websites and apps |
| [Font Squirrel](https://www.fontsquirrel.com/) | A curated font catalog plus a webfont generator and image-based font matcher. | Finding fonts marked for commercial use or identifying fonts from images; verify each font's license |
| [Bunny Fonts](https://fonts.bunny.net/) | A hosted web-font catalog with a CSS API that is compatible with the Google Fonts CSS API and is presented as privacy-first. | Serving web fonts with a privacy-focused provider or switching from the Google Fonts CSS endpoint |
| [The League of Moveable Type](https://www.theleagueofmoveabletype.com/) | An open-source type foundry publishing a catalog of fonts and typography learning resources. | Open-source font families and foundational typography education |

### Foundries and font marketplaces

| Resource | What it offers | Best for |
| --- | --- | --- |
| [Adobe Fonts](https://fonts.adobe.com/) | A browsable font library integrated with Adobe Creative Cloud, with desktop activation and hosted web projects. | Creative Cloud workflows; check subscription terms and note that font files cannot be self-hosted through the service |
| [MyFonts](https://www.myfonts.com/) | A marketplace for browsing and licensing typefaces from independent designers and foundries. | Finding and purchasing a specific commercial font family |
| [Pangram Pangram Foundry](https://pangrampangram.com/) | An independent type foundry with commercial font families, font trials, and educational resources. | Exploring distinctive display and text families before purchasing a license |

### Font pairing and typography references

| Resource | What it offers | Best for |
| --- | --- | --- |
| [Fontpair](https://fontpair.co/) | Curated type pairings, previews, and typography inspiration. | Comparing headline and body font combinations |
| [Fontjoy](https://fontjoy.com/) | A font pairing tool that generates combinations and lets you lock or manually choose families. | Quickly exploring contrasting font combinations |
| [Typewolf](https://www.typewolf.com/) | Typography inspiration, font lists, site examples, and learning resources. | Researching typefaces in use and exploring alternatives by classification |

## Animation and interaction

Tools for animating interface elements and coordinating scroll, gesture, SVG, or timeline effects.

### Code-driven motion

| Resource | What it offers | Best for |
| --- | --- | --- |
| [GSAP](https://gsap.com/) | A JavaScript animation platform with timeline control and tools for scroll-linked, SVG, and text animation. | Detailed, sequenced web animation |
| [Lenis](https://lenis.dev/) | A smooth-scrolling library designed to coordinate scroll behavior with page animations. | Scroll feel and scroll-synced experiences |
| [Anime.js](https://animejs.com/) | A JavaScript animation engine with keyframes, easing, staggering, scroll observation, and SVG utilities. | Flexible DOM and SVG animation |
| [Motion](https://motion.dev/) | An open-source animation library for React, JavaScript, and Vue, including layout, gesture, and scroll animations. | Motion built into interactive interfaces |
| [AutoAnimate](https://auto-animate.formkit.com/) | A small, zero-configuration utility that adds transitions when elements are added, removed, or moved. | Adding simple interface motion without building timelines |
| [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) | A scroll-triggered animation library configured with HTML data attributes. | Applying simple reveal effects as content enters the viewport |

### Interactive and authored animation

| Resource | What it offers | Best for |
| --- | --- | --- |
| [Rive](https://rive.app/) | A design and animation tool with state machines and runtimes for interactive assets in apps and websites. | Responsive illustrations and UI animations driven by interaction or data |
| [Theatre.js](https://www.theatrejs.com/) | A JavaScript animation library with an in-browser timeline and graph editor. | Keyframed motion design, including Three.js scenes and UI interactions |
| [LottieFiles](https://lottiefiles.com/) | A library and toolset for creating, finding, and deploying lightweight Lottie animations. | Adding prepared vector animations to apps, websites, and presentations |

## Design presentation and mockups

Use these tools to turn static screens into polished product previews, motion pieces, or interactive 3D scenes.

### Mockup libraries and product showcases

| Resource | What it offers | Best for |
| --- | --- | --- |
| [LS Graphics](https://www.ls.graphics/) | A catalog of device, brand, print, and animated mockups, plus illustrations and an in-browser editor for static, live, and 3D scenes. | High-quality mockup assets and polished product presentations; check free and subscription usage terms |
| [Mockuuups Studio](https://mockuuups.studio/) | A searchable mockup library with a drag-and-drop generator, Figma plugin, desktop app, and Adobe Express integration. | Quickly placing app screens into device and lifestyle scenes |
| [Mockup World](https://www.mockupworld.co/) | A curated directory of downloadable mockups organized by devices, print, packaging, apparel, and more. | Finding free mockup files for common product and branding work; check each creator's license |
| [Previewed](https://previewed.app/) | A browser-based mockup generator for device scenes, app store screenshots, 3D renders, and promo animations. | Creating app store visuals and 2D or 3D device presentations |
| [Animos](https://animos.app/) | Browser-based motion templates: add your images or videos, adjust a template, and export a showcase as MP4 or WebM. | Animated portfolio pieces, product previews, and launch posts |
| [Shots](https://shots.so/) | Device and browser mockups with image and video effects for design showcases. | Social posts, landing-page visuals, and app previews |
| [Rotato](https://rotato.app/) | A 3D mockup tool for placing product screens into device scenes and exporting images or movies. | Polished phone and device presentations |

### Design asset marketplaces

| Resource | What it offers | Best for |
| --- | --- | --- |
| [UI8](https://ui8.net/) | A design marketplace covering mockups, 3D assets, UI kits, templates, icons, illustrations, and fonts. | Browsing and licensing reusable visual assets across product design and presentations |
| [Craftwork](https://craftwork.design/) | A marketplace for mockups, 3D models, illustrations, UI components, templates, fonts, and other design packs. | Finding coordinated asset packs from independent designers |

### 3D and motion design

| Resource | What it offers | Best for |
| --- | --- | --- |
| [Spline](https://spline.design/) | A browser-based 3D design tool for creating interactive scenes for websites and apps. | Interactive 3D product views and web scenes |
| [Jitter](https://jitter.video/) | A browser-based motion design editor with templates for animated graphics and videos. | Fast motion graphics and product-content exports |

## CSS and visual effects

### CSS effects and gradients

| Resource | What it offers | Notes |
| --- | --- | --- |
| [Aether CSS](https://aethercss.lovable.app/) | Live-preview generators for liquid glass, glassmorphism, and neumorphism styles, with CSS output. | The site's liquid-glass mode is marked experimental and currently limited to Chromium-based desktop browsers. |
| [Animista](https://animista.net/) | A playground of pre-made CSS animations that you can tune and export as CSS. | Useful for quick keyframe effects; review performance and reduced-motion behavior before shipping. |
| [CSS Gradient](https://cssgradient.io/) | A visual editor and gallery for CSS linear and radial gradients. | Copy generated CSS or use the examples as a starting point. |

### SVG backgrounds and decorative assets

| Resource | What it offers | Notes |
| --- | --- | --- |
| [Haikei](https://haikei.app/) | Generators for editable SVG backgrounds and shapes, including waves, blobs, grids, and gradients. | Export SVG or PNG for use in design tools or web projects. |
| [Hero Patterns](https://heropatterns.com/) | Repeatable SVG background patterns with adjustable colors and opacity. | The site lists a CC BY 4.0 license; follow its attribution terms. |
| [SVG Backgrounds](https://www.svgbackgrounds.com/) | A catalog of background and website graphics with copyable CSS and SVG options. | Its free graphics require attribution; check each asset's terms. |
| [fffuel](https://www.fffuel.co/) | A collection of color tools and SVG generators for textures, backgrounds, gradients, and shapes. | Useful for adding editable decorative graphics to a page. |

## Charts and data visualization

### Charting libraries

| Resource | What it offers | Best for |
| --- | --- | --- |
| [Apache ECharts](https://echarts.apache.org/en/index.html) | An open-source JavaScript visualization library with many chart types and Canvas or SVG rendering. | Interactive charts, dashboards, and data-heavy displays |
| [Chart.js](https://www.chartjs.org/) | A flexible JavaScript chart library with responsive, animated Canvas charts and common chart types. | Straightforward charts with a relatively small setup |
| [Plotly.js](https://plotly.com/javascript/) | A declarative JavaScript chart library with statistical, scientific, financial, map, and 3D chart types. | Analytical, scientific, and interactive charts |
| [Recharts](https://recharts.org/) | A composable chart library built with React and D3, using React components and SVG. | Building charts directly from React components |
| [Nivo](https://nivo.rocks/) | A collection of data-visualization components built on D3 and React, with many chart types. | A broad range of React charts and data displays |
| [D3](https://d3js.org/) | Low-level JavaScript tools for mapping data to custom visual elements, layouts, shapes, and interactions. | Bespoke visualizations with fine-grained control |
| [visx](https://visx.airbnb.tech/) | Reusable low-level React visualization components that combine D3 utilities with React rendering. | Custom React charts built from smaller primitives |
| [ApexCharts](https://apexcharts.com/) | An interactive JavaScript charting suite with chart types, maps, stock charts, and a chart editor. | Dashboards and interactive charts with companion visualization tools |
| [Highcharts](https://www.highcharts.com/) | A broad charting library with integrations for JavaScript and several front-end frameworks. | Business and analytics charts; review the license for your use case |
| [Bklit UI](https://bklit.com/) | Open-source chart components and utilities with a playground for adjusting chart styling and exporting code. | React, shadcn registry; charts and data visualization |
| [Evil Charts](https://evilcharts.com/) | Animated, design-focused chart components offered with both Recharts and Apache ECharts implementations. | React, shadcn/ui, Recharts, Apache ECharts |
| [Liveline](https://benji.org/liveline) | A real-time, animated line chart component with smooth interpolation and candlestick and multi-series modes. | React, Canvas |
| [Victory](https://nearform.com/open-source/victory/) | Composable React components for charting and data visualization. | Advanced charts built from reusable React components |
| [Observable Plot](https://observablehq.com/plot/) | A concise, declarative JavaScript API for exploratory data visualization, built by the D3 team. | Quickly composing analytical charts from marks, scales, and transforms |
| [Vega-Lite](https://vega.github.io/vega-lite/) | A high-level JSON grammar for creating interactive graphics from data. | Declarative chart specifications, layered views, and analysis |
| [TradingView Lightweight Charts](https://www.tradingview.com/lightweight-charts/) | A compact, Canvas-based chart library with streaming updates and styling controls. | Responsive financial and time-series charts |

### Examples and theming

| Resource | What it offers | Best for |
| --- | --- | --- |
| [Apache ECharts examples](https://echarts.apache.org/examples) | Interactive examples across ECharts chart types and features. | Finding a chart pattern and its configuration |
| [Apache ECharts theme builder](https://echarts.apache.org/en/theme-builder.html) | A visual tool for adjusting ECharts theme settings. | Matching charts to an application's visual system |

## Icon libraries

### General-purpose UI icons

| Resource | What it offers | Best for |
| --- | --- | --- |
| [Lucide](https://lucide.dev/) | A consistent, customizable SVG icon set with packages for popular development environments. | Interface icons that can be styled to match a design system |
| [Heroicons](https://heroicons.com/) | Hand-crafted SVG icons from the Tailwind CSS team, with React and Vue libraries. | A clean outline or solid style in React and Vue projects |
| [Tabler Icons](https://tabler.io/icons) | A large, customizable open-source set available as SVG, HTML, and React components, with outline and filled variants. | Broad coverage and a consistent line-icon style |
| [Phosphor](https://phosphoricons.com/) | A flexible icon family with six weights, from thin through duotone, and framework packages. | Switching icon weight or tone while keeping one visual family |
| [Iconoir](https://iconoir.com/) | An open-source icon set available in SVG and packages for React, React Native, Vue, Flutter, Framer, and CSS. | Projects that need one icon family across multiple platforms |
| [Google Material Symbols](https://fonts.google.com/icons) | Google's Material icon set, available as a variable font and customizable through axes such as weight and fill. | Material-style interfaces and adjustable icon-font styling |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | A large open-source icon library usable as SVG files, sprites, or web fonts, with or without Bootstrap. | General UI icons across web stacks |
| [Remix Icon](https://remixicon.com/) | An open-source set of vector icons with consistent line and filled styles. | Matching outline and solid icon treatments |
| [Material Design Icons](https://pictogrammers.com/library/mdi/) | A community-maintained library of icons inspired by Material Design, with tools and packages for developers. | A broad Material-style icon vocabulary |
| [Font Awesome](https://fontawesome.com/icons) | A widely used icon collection with web packages and both free and paid offerings. | Projects that want a large icon catalog and framework integrations |
| [Octicons](https://primer.style/octicons/) | GitHub's handcrafted icon set, documented as part of the Primer design system. | Interfaces that follow GitHub's visual language |

### Search across icon sets

| Resource | What it offers | Best for |
| --- | --- | --- |
| [Iconify](https://iconify.design/) | A unified way to browse and use icons from hundreds of open-source icon sets. Individual sets have their own licenses, so check the license for each set you use. | Searching across multiple icon families without changing tools |

### Brand logos

| Resource | What it offers | Best for |
| --- | --- | --- |
| [Simple Icons](https://simpleicons.org/) | A searchable collection of SVG icons for popular brands, often with their brand color. | Product integrations, technology lists, and social or partner marks; follow each brand's usage guidelines |

## Adding a resource

To keep the catalog useful, add resources under the closest category and include:

- The resource name linked to its official site or documentation.
- A plain-language summary of what it does and when it is useful.
- Its main framework or format, where relevant.
- Any important compatibility, accessibility, licensing, or experimental-feature note that is clearly documented by the source.

This repository indexes third-party resources and does not redistribute their code or assets. Each resource's own license and terms apply.
# ui_resources
# ui_resources
