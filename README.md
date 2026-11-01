# DSA App (TAE-II Application Development)

A small web app: double-click the DSA icon to open the website with a cover page, search bar, and PDF / Web page / Video views.

## Files
- index.html - page structure
- style.css - design
- script.js - double-click, search, PDF/Web page/Video buttons
- manifest.json - makes the site installable with the DSA icon
- sw.js - service worker (offline use)
- icon.svg, icon-180.png, icon-192.png, icon-512.png - DSA logo

## Deploy on GitHub Pages
1. Create a new public repository on GitHub (for example `dsa-app`).
2. Upload all files in this folder to the repository root (index.html must be at the top level).
3. Go to Settings > Pages. Under Build and deployment choose "Deploy from a branch", branch `main`, folder `/ (root)`, then Save.
4. After about a minute the site is live at `https://YOUR-USERNAME.github.io/dsa-app/`.
