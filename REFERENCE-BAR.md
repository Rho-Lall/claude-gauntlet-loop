# The Bar

Concrete reference standard for this app. Every number below was extracted from a
real page, not invented. Critic agents score against **these values**, never against
adjectives like "clean" or "polished."

## References

| # | Page | Why it's the bar |
|---|------|------------------|
| R1 | `ciechanow.ski/mechanical-watch` | The standard for teaching a mechanism through direct manipulation. |
| R2 | `ncase.me/trust` | The standard for making a concept *playable* rather than readable. |
| R3 | `pudding.cool/2018/02/waveforms` | The standard for pacing an explainer that has a lot to cover. |

Raw artifacts live in the scratchpad; measurements below are reproducible from them.

---

## M1 — Typography (from R1's `base.css`)

| Property | Reference value | Rule for us |
|---|---|---|
| Body size | `1.2em` | Body copy ≥ `1.125rem`. Never 16px default. |
| Body line-height | `1.6em` | `1.6` on all prose. |
| Measure | `max-width: 44rem` + `3rem` side padding | Prose column 42–46rem. Never full-bleed text. |
| Heading font | Inter, `weight 600` | One display face, semibold. Never 700+ for headings. |
| Heading scale | h1 `1.8em`, h2 `1.5em`, h3 `1.3em` | Ratio ≈1.2. **A flat or exaggerated scale is a fail.** |
| `<strong>` | `font-weight: 500` | Emphasis is 500, not 700. Bold is a whisper, not a shout. |
| Paragraph rhythm | `padding: 0.7em 0` | Vertical rhythm from one unit, consistently. |

**Fail condition:** heading sizes that don't form a ~1.2 ratio, or body text under 1.125rem.

## M2 — Color (from R1 + R2)

| Role | Reference value |
|---|---|
| Page ground | `#F8F8F8` (R1) — off-white, never pure `#fff` |
| Body text | `#444` (R1) / `#333` (R2) — never pure `#000` |
| Heading text | `#535353` (R1) — *lighter* than body, not darker |
| Link | `#0181eb`, hover `#2794ee`, visited `#356082` |
| Accent | R2 uses exactly **one** (`#dd4040`, hover `#ee5151`) |
| Code ground | `#eaeaea`, radius `0.4em` |

**Fail condition:** more than one accent hue; pure black text; pure white ground.

## M3 — Interaction density (measured from R1's DOM)

Counted directly out of the fetched HTML:

- **8,202 words** across **156 paragraphs** → median **49.5 words per paragraph**
- **92** interactive figure containers (`.drawer_container`)
- **63** slider assemblies

Derived:

- **One interactive element per ~1.7 paragraphs**
- **One interactive element per ~89 words**
- Sliders outnumber buttons ~2:1 — **direct manipulation beats clicking "next"**

**Fail condition:** more than 3 consecutive paragraphs with nothing to touch. This is
the single most important metric — it is what separates an explainer from an article.

## M4 — Motion (from R1 + R2)

| Kind | Reference value |
|---|---|
| Hover / color | `0.15s` (R1), `transform 0.1s ease-out` (R2) |
| State change | `0.5s ease-in-out` (R2) |
| Radius | `0.4em` inline, `10px` figures, `40px` pills (R2) |

**Fail condition:** any transition >0.5s, or motion without a state change behind it.

## M5 — Copy voice (from R1's prose)

R1 opens: *"a mechanical watch"* — names the thing, then takes it apart. Observable traits:

- Second person, present tense
- Median sentence ~20 words; paragraphs ~50 words
- Concrete nouns over abstractions
- Zero marketing adjectives. No "powerful," "seamless," "revolutionary."

**Fail condition:** any sentence that would survive being pasted into a SaaS landing page.

---

## Scoring

Critic scores each metric 0–10, reports **only the single largest gap**, and names the
specific reference value that was missed. A critique that cannot cite a number from
this file is not a valid critique.

Gap score = sum of (10 − score) across M1–M5. Target: **≤ 8 total.**
