# Nool — Handloom Cotton Storefront

A static e-commerce storefront prototype. No backend, no build step — just HTML, CSS and JavaScript.

## Structure
```
nool-project/
├── index.html          Main page (structure/markup only)
├── css/
│   └── styles.css      All styles — theme colors, layout, components
├── js/
│   └── script.js       App logic — product data, cart, search, checkout
├── assets/
│   └── images/         Product photos + logo
└── README.md
```

## Run it
Just open `index.html` in a browser — no server or build tools needed.
For best results (and so the browser doesn't block local file requests), serve it with a simple local server:
```
# Python
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy for free
- **GitHub Pages**: push this folder to a repo, enable Pages on the `main` branch.
- **Netlify / Vercel**: drag-and-drop this folder or connect the GitHub repo.

## Tech
HTML5, CSS3 (Grid/Flexbox/custom properties), vanilla JavaScript (ES6+), localStorage for cart persistence. No frameworks, no dependencies.
