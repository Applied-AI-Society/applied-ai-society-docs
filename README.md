# Applied AI Society Documentation

The official public documentation site for the Applied AI Society, built with [Docusaurus 3.9](https://docusaurus.io/).

**Live**: [docs.appliedaisociety.org](https://docs.appliedaisociety.org)

## Quick Start

```bash
npm install
npm start    # Dev server at http://localhost:3000
npm run build  # Production build (runs prebuild checks first)
```

## Documentation Structure

```
docs/
├── philosophy/           # Canon (8 tenets), principles (5 operating rules)
├── case-studies/         # Real-world AI implementation case studies
├── playbooks/
│   ├── chapter-leader/   # Running events, partnerships, tools, content, CRM
│   │   └── event-recaps/ # Post-event write-ups (Applied AI Live #1, etc.)
│   ├── presenter/        # Guest speaker prep and presenting guide
│   ├── practitioner/     # Guides for applied AI engineers doing client work
│   └── business-owner/   # Resources for operators looking to implement AI
├── truth-management/     # Framework: principles, processes, tools
├── brand/                # Visual identity, colors, fonts, AI generation guide
└── code-of-conduct.md
```

### Adding New Documentation

New `.md` or `.mdx` files do NOT auto-appear in the sidebar. You must add them to `sidebars.ts`. The prebuild step (`scripts/check-sidebar.sh`) will warn about any docs missing from the sidebar during `npm run build`.

## Prebuild Scripts

Two scripts run automatically before every build (`npm run build`):

1. **`scripts/generate-recent-updates.sh`**: Reads `git log` to find the 4 most recently created/modified docs. Writes `src/data/recentUpdates.json` which powers the homepage "Recently Created or Updated" section. No manual updates needed.

2. **`scripts/check-sidebar.sh`**: Scans `docs/` for any `.md`/`.mdx` files not referenced in `sidebars.ts` and prints warnings.

## Project Structure

```
src/
  components/           # RecentlyUpdated, HomepageFeatures, etc.
  css/custom.css        # Brand-themed Docusaurus overrides
  data/                 # Generated JSON (gitignored)
  pages/                # Custom pages (homepage)
static/img/             # Brand assets (logos, backgrounds, elements)
scripts/
  generate-recent-updates.sh  # Auto-populate recent updates from git
  check-sidebar.sh            # Warn about docs not in sidebar
docs/                   # All documentation content
sidebars.ts             # Sidebar navigation config
docusaurus.config.ts    # Docusaurus configuration
```

## Features

- **Local search** via `@easyops-cn/docusaurus-search-local` (no external service)
- **Auto-generated "Recently Created or Updated"** section on homepage
- **Sidebar completeness check** at build time
- Brand-themed light/dark mode

## Asset CDN

Other repos (slides, remotion) reference brand assets via `docs.appliedaisociety.org/img/` URLs. All assets in `static/img/` are served at these URLs. Do not move or rename assets without checking cross-repo references.

## Links

- Website: [appliedaisociety.org](https://appliedaisociety.org)
- Portal: [portal.appliedaisociety.org](https://portal.appliedaisociety.org)
- GitHub: [github.com/Applied-AI-Society](https://github.com/Applied-AI-Society)
