# Muhammad Tayyab — Portfolio

**Live site:** [tayyab-portfolio1.netlify.app](https://tayyab-portfolio1.netlify.app)

A personal portfolio site built to showcase three areas of work: motion graphic design & short-form video editing, mobile app development, and agentic AI (in progress). Built from scratch with plain HTML, CSS, and JavaScript — no frameworks, no build step.

![Status](https://img.shields.io/badge/status-live-brightgreen)
![Made with](https://img.shields.io/badge/made%20with-HTML%20%7C%20CSS%20%7C%20JS-informational)

---

## ✨ Features

- **Hero section** with animated gradient name, discipline badges, and a direct WhatsApp CTA
- **Animated constellation background** — a lightweight canvas particle-network effect that runs behind the whole page
- **About** section with bio, quick-fact chips, and a pull quote
- **Motion & Video** — a grid of short-form video edits pulling live YouTube thumbnails
- **Mobile Apps** — project cards linking to real GitHub repos (Sanitary App, ConvertIT)
- **Agentic AI** — an honest "in progress" section for CrewAI / LangChain / OpenAI SDK work, framed as active learning rather than hidden
- **Contact** — a message form (mailto fallback) plus direct email, GitHub, and WhatsApp links
- Fully responsive, with a mobile nav toggle and active-link highlighting on scroll
- Respects `prefers-reduced-motion` throughout

## 🛠 Tech Stack

- HTML5 (semantic markup)
- CSS3 (custom properties / design tokens, no framework)
- Vanilla JavaScript (canvas animation, IntersectionObserver, form handling)
- Fonts: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (display) + [Inter](https://fonts.google.com/specimen/Inter) (body), via Google Fonts
- Hosted on [Netlify](https://netlify.com), auto-deployed from this repo's `main` branch

## 📁 Project Structure

```
portfolio/
├── index.html          # All page markup and sections
├── css/
│   └── style.css       # Design tokens, layout, and component styles
├── js/
│   └── script.js       # Nav toggle, particle background, active-link scroll, contact form
└── assets/
    └── images/
        └── profile.png # Profile photo
```

## 🚀 Running Locally

No build tools or dependencies required — it's static HTML/CSS/JS.

```bash
git clone https://github.com/TAYYAB-s1/Portfolio.git
cd Portfolio
```

Then just open `index.html` in your browser, or serve it locally:

```bash
# Python
python3 -m http.server 8000

# or Node
npx serve .
```

Visit `http://localhost:8000`.

## 🌐 Deployment

This site is connected to **Netlify** with auto-publishing enabled — every push to `main` redeploys the live site automatically. No CI config needed for a static site like this.

## 🎨 Design Notes

Color-coding is used functionally, not just decoratively — each discipline has its own accent color used consistently across icons, tags, and section eyebrows:

| Discipline        | Accent Color |
|-------------------|--------------|
| Motion & Video     | Pink `#EC4899` |
| Mobile Apps        | Blue `#3B82F6` |
| Agentic AI         | Purple `#8B5CF6` |

## 📬 Contact

- Email: [tayyabshahbaz2005@gmail.com](mailto:tayyabshahbaz2005@gmail.com)
- WhatsApp: [+92 316 4837466](https://wa.me/923164837466)
- GitHub: [@tayyabtt1](https://github.com/tayyabtt1)

---

© 2026 Muhammad Tayyab. All rights reserved.
