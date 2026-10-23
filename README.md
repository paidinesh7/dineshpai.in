# dineshpai.in — Personal Website & Interactive Projects

Personal website, essays, investment thesis, portfolio directory, and interactive public utilities for **Dinesh Pai** (`https://dineshpai.in`).

---

## 🏗️ Architecture & Key Pages

- **[`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro)**: Shared layout with warm-paper editorial theme (`#f6f4ef` light / `#121110` dark), responsive single-row mobile header (`Thesis`, `Data`, `Investments`, theme toggle), optional reading progress bar, and footer (`RSS`, `LLMs.txt`).
- **[`src/pages/index.astro`](src/pages/index.astro)**: Homepage featuring:
  - Bio & single-line contact strip (`dinesh@zerodha.com · X (@dineshpaii) · LinkedIn`)
  - 2-column overview cards (**Notes on the next decade** → `/thesis`, **Investments** → `/portfolio`)
  - Featured interactive hook for **Governor for a Term** (`/mint-street/mint_street_simple.html` & `/mint-street/`)
  - **Recent Writing** (latest 5 essays from `src/content/blog/`)
  - **Projects & Experiments** (**Governor for a Term**, **Before You Invest**, **Curated Reads**, **Notes from the Field**)
  - **The Weekly Signal** (`weeklySignals` array in `src/pages/index.astro`)
  - **Podcasts & Discussions** (`podcasts` array in `src/pages/index.astro`)
- **[`src/pages/thesis.astro`](src/pages/thesis.astro)**: *Notes on the next decade* — 6-section interactive briefing with CSS bar charts, 100-household dot grids, strictly left-aligned financial tables, and the **Leave a note** form at the bottom.
- **[`src/pages/portfolio.astro`](src/pages/portfolio.astro)**: Filterable directory of 27 Rainmatter portfolio companies across Fintech, Climate, Health, and Deeptech.
- **[`src/pages/data.astro`](src/pages/data.astro)** & **[`public/data-decks/`](public/data-decks/)**: Interactive **Data & Visual Briefs** hub showcasing 6 verified 16:9 slide decks (`fii-dii-ownership.html`, `foreign-bank-nbfc-deals.html`, `yes-bank-at1-bonds.html`, `nifty-corrections.html`, `capital-gains-stt.html`, `jio-platforms-drhp.html`) with category filter pills, embedded responsive slide viewers (`?embed=1`), native parent-level slide controls, full-screen flipbook mode, and vertical scroll/PDF mode (`?mode=scroll`).
- **[`src/pages/blog/index.astro`](src/pages/blog/index.astro)** & **[`src/pages/blog/[slug].astro`](src/pages/blog/[slug].astro)**: Chronological essay archive and individual essay template.
- **[`src/pages/good-reads.astro`](src/pages/good-reads.astro)** & **[`src/pages/notes.astro`](src/pages/notes.astro)**: Searchable curated library (`src/data/goodReads.ts`) and field notes.

---

## 🎮 Standalone Interactive Projects (`public/`)

1. **Governor for a Term — The Central Bank Game (`/mint-street/`)**
   - **Simple Edition (Default CTA):** [`public/mint-street/mint_street_simple.html`](public/mint-street/mint_street_simple.html) — 5-minute, 10-turn RBI monetary policy simulation across 8 Indian economic eras.
   - **Full Desk Mode:** [`public/mint-street/index.html`](public/mint-street/index.html) (and [`public/mint-street/mint_street_central_bank_game.html`](public/mint-street/mint_street_central_bank_game.html)).
2. **Before You Invest (`/before-you-invest/`)**
   - **Spec Sheet & Calculators:** [`public/before-you-invest/index.html`](public/before-you-invest/index.html) & [`public/before-you-invest/i18n.js`](public/before-you-invest/i18n.js) — 13 Indian retail financial products stripped down to ownership, FY 2025–26 taxation, post-tax rupee math, side-by-side comparison, and 5 languages (`English`, `हिन्दी`, `ಕನ್ನಡ`, `தமிழ்`, `తెలుగు`).

---

## 📬 Reader Notes & 6:00 PM Email Digest

- Reader notes submitted on `/thesis` post to `ntfy.sh/dpai_thesis_notes_7f3a9c2e8b1d4f6a`.
- [`/home/dinesh/Context/execution/triggers/send_website_notes_digest.py`](/home/dinesh/Context/execution/triggers/send_website_notes_digest.py) syncs new notes into `/home/dinesh/Context/data/website_notes/notes.json` and emails a daily digest at **6:00 PM IST** to `dinesh@zerodha.com`.

---

## 📱 Mobile & Editorial Guardrails

- **Anti-AI Copywriting:** Keep all prose direct, plain, and first-person. Avoid em-dash chains and "not X, but Y" filler.
- **Mobile Inputs (`16px` Floor):** All `<input>`, `<textarea>`, and `<select>` elements must use `text-base sm:text-sm` (or `font-size: 16px` on mobile) so iOS Safari never auto-zooms on focus.
- **Tables & Charts:** Always keep `.data-table` inside `.overflow-x-auto` (`min-width: 480px` on `<= 640px`) and keep `.bars` right padding `>= 92px` so bar labels never clip on narrow screens.

---

## 🚀 Build & Deploy

```bash
npm --prefix /home/dinesh/Context/projects/website run build
git -C /home/dinesh/Context/projects/website add -A
git -C /home/dinesh/Context/projects/website commit -m "Describe change"
git -C /home/dinesh/Context/projects/website push origin master
```
*(Note: `npm run build` automatically runs `astro build && node scripts/generate-llms.mjs` to keep `/llms.txt` and `/llms-full.txt` in sync.)*
