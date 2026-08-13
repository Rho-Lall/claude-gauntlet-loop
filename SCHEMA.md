# Demo data contract

Each demo is one gauntlet loop, written to `js/data/<slug>.js` as a single global:

```js
window.GAUNTLET_DEMOS = window.GAUNTLET_DEMOS || {};
window.GAUNTLET_DEMOS['<slug>'] = { /* Demo */ };
```

## Demo

```ts
{
  slug: string,
  title: string,            // "Ad creative variants"
  goal: string,             // one sentence, what the builder was told to make
  bar: string,              // one sentence, what the reference was
  barDetail: string[],      // 3-5 concrete, checkable statements from the reference
  rounds: Round[]           // 5-6 rounds, ordered
}
```

## Round

```ts
{
  n: number,
  artifact: Artifact,       // see kinds below — what the builder produced this round
  gapScore: number,         // starts 30-40, ends 3-8, monotonically decreasing
  choices: Choice[],        // exactly 4, presented in fixed order
  critique: {
    text: string,           // the real critic's note: the ONE largest gap
    metric: string,         // which bar item it cites, e.g. "M3 interaction density"
    evidence: string        // the specific number or reference fact that was missed
  },
  fixNote: string           // one line: what the next round changed in response
}
```

## Choice

```ts
{
  id: string,
  text: string,             // a critique the user might pick
  correct: boolean,         // exactly ONE per round is true
  why: string               // if wrong: why it's real but NOT the largest gap.
                            // if right: why this one dominates the others.
}
```

**The distractors carry the teaching.** All four choices must name a genuine flaw. Three
are simply smaller than the fourth. A distractor that is obviously wrong teaches nothing —
the skill being taught is *ranking* gaps, not spotting them.

## Artifact kinds

```ts
// kind: 'ad'
{ kind:'ad', platform:string, format:string, visual:string,
  headline:string, body:string, cta:string }

// kind: 'hero'
{ kind:'hero', eyebrow:string|null, headline:string, subhead:string,
  cta:string, secondaryCta:string|null, proof:string[], layoutNote:string }

// kind: 'seo'
{ kind:'seo', h1:string, intro:string, facets:string[],
  sections:{h2:string, copy:string}[], internalLinks:string[], schemaNote:string }
```

`visual` and `layoutNote` are rendered as labeled placeholders, not images.

## Rules

- Round 1 must be *plausibly competent* — the kind of thing a good first draft looks like.
  If round 1 is a strawman, the loop teaches nothing.
- Each round's artifact must visibly answer the previous round's critique. A reader should
  be able to diff them by eye.
- Gap score must fall every round, but not linearly — real loops plateau then break through.
- No round may fix more than one thing. The loop's whole claim is that one gap at a time
  beats a laundry list.
