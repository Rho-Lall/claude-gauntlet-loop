# The Gauntlet Loop

An interactive explainer for the gauntlet loop method, with three e-commerce demos you
play yourself. Static site — no build step, no dependencies, no API keys.

## Run it locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

It also works by opening `index.html` directly from disk.

## Deploy to GitHub Pages

Settings → Pages → Source: **Deploy from a branch** → branch `main`, folder `/ (root)`.

Nothing to configure beyond that. All paths are relative, so it works at both
`user.github.io/repo/` and a custom domain.

## What's here

| File | What it is |
|---|---|
| `index.html` | The page. Four exhibits and the demo player. |
| `css/app.css` | Every value traces to `REFERENCE-BAR.md`. |
| `js/app.js` | Exhibits, artifact renderers, and the quiz player. |
| `js/data/ad-creative.js` | Loop 1 — paid social creative, 6 rounds. |
| `js/data/landing-hero.js` | Loop 2 — landing page hero, 6 rounds. |
| `js/data/seo-category.js` | Loop 3 — SEO category page, 6 rounds. |
| `js/data/self.js` | The loop that built this page, 4 rounds. |
| `REFERENCE-BAR.md` | **The bar.** Measured values plus two amendments. |
| `BRAND.md` | Harborline — the fictional brand the demos critique. |
| `SCHEMA.md` | Data contract for the demo files. |

## How it was built

The method was applied to itself:

1. A bar was extracted from `ciechanow.ski/mechanical-watch`, `ncase.me/trust`, and
   `pudding.cool/waveforms` by fetching them and measuring — type scale, color values,
   and interaction density counted out of the DOM. Results in `REFERENCE-BAR.md`.
2. The three demo datasets were built by parallel builder agents against `SCHEMA.md`.
3. The page design was critiqued by four separate agents, each with fresh context and no
   knowledge of the build. Gap score went **21 → 15 → 12 → 6**, stopping at the bar's
   own threshold of 8.

Round 3 is worth reading in `REFERENCE-BAR.md`: the critic correctly flagged a bar
violation whose obvious fix would have destroyed the app's teaching mechanic. The bar was
amended in public rather than ignored, and the amendment says why.

## Adding a fourth demo

Write `js/data/<slug>.js` following `SCHEMA.md`, add a `<script>` tag in `index.html`,
and add the slug to the `order` array in `js/app.js`. If the artifact needs a new shape,
add a renderer to the `RENDERERS` map.

Harborline is fictional. Its numbers are invented but internally consistent, which is
what lets the critiques cite evidence instead of taste.
