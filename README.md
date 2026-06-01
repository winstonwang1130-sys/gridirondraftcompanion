# GridironDraftCompanion.com

Free Fantasy Football Draft Cheat Sheet Generator & Team Strategy Guides for the 2026 season.

## Quick Start

Open `index.html` in a browser, or serve locally:

```bash
# With Node.js (if npm available)
npx serve .

# With Python
python -m http.server 8080
```

Then visit `http://localhost:8080`

## Site Structure

```
├── index.html              # Home — Cheat Sheet Generator + SEO content
├── about.html              # About Us
├── contact.html            # Contact form
├── privacy.html            # Privacy Policy (AdSense required)
├── blog/
│   ├── index.html          # Team Strategy Guide listing
│   └── *-2026.html         # 8 NFL team fantasy guides
├── css/styles.css          # Full responsive stylesheet
├── js/
│   ├── player-data.js      # 82-player rankings + scoring adjustments
│   ├── cheat-sheet.js      # Tool logic + PDF export
│   └── main.js             # Navigation + shared UI
├── robots.txt
└── sitemap.xml
```

## AdSense Integration

1. Apply for Google AdSense at https://adsense.google.com
2. Uncomment the AdSense script in `index.html` `<head>`
3. Replace `ca-pub-XXXXXXXX` with your publisher ID
4. Replace ad placeholder `<div>` elements with actual AdSense ad units:
   - `#ad-banner-1` — Horizontal banner below the tool form
   - `#ad-sidebar-1` — Sticky vertical rectangle on blog pages

## Deployment

Deploy to any static host:

- **Netlify / Vercel:** Drag-and-drop the folder or connect a Git repo
- **GitHub Pages:** Push to `gh-pages` branch
- **Cloudflare Pages:** Connect repo, no build step needed

Point your domain (e.g. `GridironDraftCompanion.com`) to the host.

## Customization

- **Email:** Update `hello@gridirondraftcompanion.com` in contact.html and privacy.html
- **Rankings:** Edit `js/player-data.js` to update player ADP values
- **More articles:** Copy any blog article template and add to `blog/index.html` + `sitemap.xml`

## License

MIT
