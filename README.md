# Anitej Chander Sood — Portfolio

Personal portfolio website. Interactive, professional, and a touch of personality.

**Live at:** [anitej.online](https://anitej.online)

![Uptime](https://img.shields.io/uptimerobot/status/m802907586-cd0c75503b185949c25b62b2?label=Status)
![Uptime](https://img.shields.io/uptimerobot/ratio/m802907586-cd0c75503b185949c25b62b2?label=Uptime)

<img src="assets/preview.avif" alt="Preview Image" width="600" />

---

## Stack

Built with vanilla HTML, CSS, and JavaScript

| Layer | Detail |
|---|---|
| Markup | Semantic HTML5 |
| Styling | Custom CSS with CSS variables, responsive grid, dark/light theme |
| Scripting | Vanilla JS — scroll effects, interactive terminal, theme toggle, Pacman easter egg |
| Fonts | Playfair Display (headings) · Schibsted Grotesk (body) |
| Images | Compressed JPG/AVIF via [Squoosh](https://squoosh.app) |
| SEO | Schema.org JSON-LD, OpenGraph, Twitter Cards, sitemap, robots.txt |
| Performance | Audited with Google Lighthouse — 90+ across all categories |
| Hosting | Vercel + Custom domain via [anitej.online](https://anitej.online) |
| Monitoring | UptimeRobot (multi-region: Asia + US), status page, uptime API badge |

---

## Features

- **Dark / Light theme** — persisted via localStorage
- **Interactive terminal** — type commands like `help`, `skills`, `projects`, `resume`, `pacman`
- **Pacman easter egg** — playable retro game launched from the terminal
- **Cursor glow + tilt effects** — pointer-aware interactions on cards
- **Side navigation** — scroll-aware active state with section highlighting
- **Fully responsive** — optimised layouts from mobile to ultrawide
- **Hero cutout portrait** — transparent PNG with neon drop-shadow overlay
- **Clipboard email** — secure copy-to-clipboard instead of mailto links




## Project Structure

```
anitej.online/
├── index.html          # Main single-page portfolio
├── 404.html            # Custom AI-themed 404 page
├── styles.css          # All styles, variables, and media queries
├── script.js           # All interactivity (terminal, animations, cursor)
├── robots.txt          # Search engine directives
├── sitemap.xml         # Sitemap for SEO
├── vercel.json         # Vercel routing & redirects
├── status/
│   └── index.html      # Live uptime status page
└── assets/
    ├── profile.avif              # Main profile photo
    ├── hero-cutout.png         # Transparent hero portrait
    ├── traveller.avif            # Who Am I card
    ├── conference.avif           # Who Am I card
    ├── normal_guy.avif           # Who Am I card
    ├── favicon.avif            # Browser tab icon
    ├── preview.avif            # Social sharing preview
    ├── logo-linkedin.svg       # LinkedIn icon
    ├── logo-mail.svg           # Email icon
    └── Anitej_Chander_Sood_Resume.pdf
```

---

## Running Locally

No build step required — just open the file.

```bash
git clone https://github.com/AnitejSood/AnitejSood.github.io.git
cd AnitejSood.github.io
open index.html
```

Or serve it locally:

```bash
npx serve .
```

---

## Monitoring

- **Uptime Monitoring** — Tracked via UptimeRobot (Asia + US regions)
- **Real-time Alerts** — Email and push notifications enabled
- **Status Page** — [/status](https://anitej.online/status)
- **Performance Monitoring** — Vercel Speed Insights (real user metrics)

Primary monitoring on Asia region for majority user experience, with a secondary US monitor for global availability checks.

---

## License

This project is licensed under the [MIT License](LICENSE). 
<br><br>
<img src="assets/favicon.avif" alt="Logo" width="120" /> <br>
[![License](https://img.shields.io/github/license/anitejcsood/anitejcsood.github.io)](LICENSE) [![Security](https://img.shields.io/badge/Security-Policy-blue)](SECURITY.md)<br>
Feel free to take inspiration. <br>Happy Coding!
