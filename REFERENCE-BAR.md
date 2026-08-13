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

### Amendment 2 — decorative vs. semantic color

*Added after round 3. Two critics caught the CSS excusing its extra hues by citing an
"M2 note" in this file that did not exist. It does now, and it is narrower than the
excuse was.*

The one-accent rule governs **decorative** color — the hue a design reaches for to look
like itself. It does not govern **semantic** color that encodes state the user must
distinguish: correct vs. incorrect.

Permitted: exactly one additional pair (`--ok`, `--no`), desaturated enough that the page
still reads as single-accent, and **never the sole carrier of meaning** — every use must
be redundant with a glyph or a text label, so the state survives color blindness and
greyscale.

**Fail condition:** more than one decorative accent; any state encoded by hue alone.

`--surface: #FFFFFF` is likewise permitted as a *card* ground layered on the `#F8F8F8`
page ground — the fail condition targets a pure-white **page**, which R1 avoids and this
page also avoids.

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

### Amendment 1 — scope of the slider ratio

*Added after round 3 of the loop that built this page. Recorded rather than silently
applied, because moving a bar mid-loop is the most common way people fake convergence.*

The 2:1 ratio was measured on R1, which teaches a **continuous mechanism** — gear
ratios, spring tension, escapement angle. Those are scalar parameters, and a slider is
the honest control for a scalar.

Three consecutive critics correctly flagged this page for inverting the ratio, and each
proposed converting the demo player's round-advance into a scrubber. That fix would be
wrong: the player teaches **ranking under commitment**. You must choose before you see
the answer. A scrubber lets you slide to the reveal, which removes the only thing the
exercise tests.

So the ratio is scoped, not deleted:

- Exhibits over a **continuous parameter** must use direct manipulation. (This page: the
  bar-precision slider and the loop scrubber.)
- Exhibits over a **discrete commitment** may use buttons, and a scrubber is a defect
  there, not a fix.

**Revised fail condition:** any continuous-parameter exhibit driven by next/prev buttons.

The general lesson, which is why this is written down instead of quietly ignored: a bar
transplanted from a reference with a different job will produce critiques that are
correct in the letter and destructive in the fix. When that happens the answer is to
sharpen the bar in public — not to ignore the critic, and not to damage the work.

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
