/* The loop that built this page.
   Four rounds, each critiqued by a fresh agent that had not seen the build.
   Scored against REFERENCE-BAR.md. Stop condition: gap <= 8. */

window.GAUNTLET_SELF = {
  rounds: [
    {
      n: 1,
      gapScore: 21,
      critique: 'M3, interaction density. The page ran 22 paragraphs against 3 interactive elements — 7.3 paragraphs each against the bar\'s 1.7 — and the back half contained one uninterrupted run of 12 paragraphs with nothing to touch, against a fail condition of 3. Everything interactive was front-loaded; the second half was an article wearing an explainer\'s clothes.',
      fix: 'Gave every principle a control: three deep-links that open the exact round being described, and seven rule flippers that swap each rule for the failure it prevents. Longest run fell from 12 to 3.'
    },
    {
      n: 2,
      gapScore: 15,
      critique: 'M3 again, but composition rather than count. Of 20 controls, exactly one was direct manipulation and 19 were buttons — the bar requires sliders to outnumber buttons roughly 2:1, and names the reason: direct manipulation beats clicking "next". The loop diagram was the literal anti-pattern, a six-state mechanism whose only affordance was a button labelled "Next step".',
      fix: 'Replaced the diagram\'s prev/next buttons with a scrubber, and made each step clickable as a shortcut. The page\'s central mechanism went from clicking to dragging.'
    },
    {
      n: 3,
      gapScore: 12,
      critique: 'The same slider-to-button ratio, now aimed at the demo player — the critic proposed replacing the round-advance button with a scrubber. Correct against the letter of the bar, and destructive: the player teaches ranking under commitment, so a scrubber that slides to the answer removes the only thing it tests. The bar had been transplanted from a reference that teaches a continuous mechanism.',
      fix: 'Amended the bar in public rather than ignoring the critic or damaging the work: the slider rule now scopes to continuous-parameter exhibits, and discrete commitments may use buttons. Also closed three unambiguous fails — a sub-floor body size at the mobile breakpoint, a CSS comment citing an exemption that did not exist, and transitions that never fired because the nodes were rebuilt.'
    },
    {
      n: 4,
      gapScore: 6,
      critique: 'Inside the stop threshold of 8. Every fail condition in the bar is clear. The residual points are a three-hue grade stripe already redundant with adjacent prose, a dark-mode heading relationship the bar only specifies for light, and a sentence rhythm shorter than the reference\'s — preference, not gap.',
      fix: 'Loop terminated. 21 → 6 across four rounds. The one residual the critic named as a genuine fail — body copy under 1.125rem in three components — was closed anyway, because it cost one line each.'
    }
  ]
};
