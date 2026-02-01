# Applied AI Society Documentation

The official documentation site for the Applied AI Society, built with [Docusaurus](https://docusaurus.io/).

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The site will be available at `http://localhost:3000`.

## Project Structure

```
applied-ai-society/
├── docs/                    # Documentation content
│   ├── case-studies/        # Real-world AI implementation case studies
│   ├── playbooks/           # Guides for practitioners and community builders
│   ├── tools/               # Recommended tools and technology stack
│   └── principles/          # Core principles and philosophy
├── src/
│   ├── css/                 # Custom styling
│   └── pages/               # Custom pages (homepage, events)
├── static/                  # Static assets
├── docusaurus.config.js     # Docusaurus configuration
└── sidebars.js              # Sidebar navigation config
```

## Color Palette

The site uses the Applied AI Society brand colors:

- **Primary Orange**: `#E67B35`
- **Amber/Gold**: `#D4A017` / `#E8B923`
- **Cream Background**: `#FAF7F1`
- **Olive Green (accent)**: `#5B6E4D`
- **Dark Text**: `#1A1A1A`

## Adding New Documentation

When you create a new `.md` or `.mdx` file in the `docs/` folder, it **won't automatically appear** in the sidebar. You must manually add it to `sidebars.ts`:

1. Create your doc file in the appropriate folder (e.g., `docs/playbooks/chapter-leader/my-new-doc.md`)
2. Open `sidebars.ts`
3. Add the doc path to the relevant `items` array:
   ```typescript
   items: [
     'playbooks/chapter-leader/existing-doc',
     'playbooks/chapter-leader/my-new-doc',  // Add your new doc here
   ],
   ```
4. Restart the dev server if needed

## Building for Production

```bash
npm run build
```

This generates static content in the `build` directory.

## Contributing

We're building in public. Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## Links

- Website: [appliedaisociety.org](https://appliedaisociety.org)
- GitHub: [github.com/applied-ai-society](https://github.com/applied-ai-society)
