# CLAUDE.md — Liquid Affiliate Program Landing Page

## Project Overview
This is the Liquid Affiliate Program marketing landing page. A polished, animated single-page site targeting publishers, creators, and traders who want to earn fee share by referring users to liquid.trade.

Art style: **Premium · Liquid glass · Sleek · Polished · Dark**

## Tech Stack
| Layer | Tool |
|-------|------|
| Build | Vite 5 |
| UI Framework | React 18 |
| Styling | Tailwind CSS + custom CSS |
| Animation | Framer Motion |
| Icons | lucide-react |
| Components | @radix-ui (accordion) + hand-rolled |

## Project Structure
```
/
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css           # Global styles + CSS vars (Liquid brand tokens)
│   ├── lib/
│   │   └── utils.js        # cn() helper
│   ├── hooks/
│   │   └── useScrollReveal.js
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx         # Hero with animated headline + radial glow
│       ├── ProofBar.jsx     # Auto-scrolling proof ticker
│       ├── TwoTracks.jsx    # Revenue Share vs Liquid Select cards
│       ├── HowItWorks.jsx   # 3-step process with UI mockups
│       ├── LiquidSelect.jsx # Premium Select program section
│       ├── FAQ.jsx          # Accordion FAQ
│       ├── FooterCTA.jsx    # Final CTA section
│       └── Footer.jsx       # Multi-column site footer
├── public/
│   └── favicon.svg
├── CLAUDE.md
├── package.json
├── vite.config.js
├── tailwind.config.js
└── vercel.json
```

## Brand Tokens
- Accent (teal): `#1ECFB3`
- Background: `#080808`
- Card background: `#111111`
- Border: `rgba(255,255,255,0.07)`

## Running Locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
```

## Copy Source
All copy comes from `Website Copy.pdf`. Do not deviate from the exact copy.

## Deploy
- GitHub: https://github.com/Fabian-n8n/Liquidsite
- Vercel: connected to repo, auto-deploy on push to main
