window.GAUNTLET_DEMOS = window.GAUNTLET_DEMOS || {};

window.GAUNTLET_DEMOS['landing-hero'] = {
  slug: 'landing-hero',
  title: 'Landing page hero',
  goal: 'Write the above-the-fold hero for the Foulweather Shell landing page — the $285 rain shell, the SKU that carries Harborline’s margin.',
  bar: 'The hero sections of three real high-converting DTC outerwear landing pages, reduced to five checkable properties.',
  barDetail: [
    'B1 — Price and the primary purchase objection both appear above the fold. All three references state price inside the first viewport and answer the objection (fit, returns, warranty) in the same block.',
    'B2 — At least one proof point carries a number a shopper can compare: a rating, a lab measure, a duration. No testimonial quotes above the fold.',
    'B3 — The headline names the product category. A cold visitor can say what is for sale in under 2 seconds without scrolling.',
    'B4 — One primary CTA above the fold. No competing secondary button of equal visual weight.',
    'B5 — Mobile-first. Everything above the fold renders and is reachable at 375px wide, with no hover-dependent content. 61% of Harborline traffic is mobile.'
  ],

  rounds: [

    {
      n: 1,
      gapScore: 36,
      artifact: {
        kind: 'hero',
        eyebrow: 'New for autumn',
        headline: 'Built for the worst day out there',
        subhead: 'Three-layer construction, fully taped seams, made in limited runs.',
        cta: 'Shop the collection',
        secondaryCta: 'Explore Harborline',
        proof: [
          'Three-layer construction',
          'Fully taped seams',
          'Made in limited runs'
        ],
        layoutNote: 'Full-bleed autoplaying video of a hull in chop, headline centered over it. Proof points sit in a three-column row that reveals its detail copy on hover. Both CTAs side by side, equal weight. At 375px the video fills the viewport and both CTAs land below the fold.'
      },
      choices: [
        {
          id: 'r1a',
          text: 'The price never appears above the fold. A $285 item is being sold with no number on screen.',
          correct: false,
          why: 'Real, and it becomes the top gap one round from now. But price is an objection a visitor raises only after they know what they are being asked to buy. Right now the page has not established that it is selling a jacket at all, so there is nothing for $285 to attach to. Fix identification before you fix pricing.'
        },
        {
          id: 'r1b',
          text: 'Nothing above the fold says what the product is. “Built for the worst day out there” over a boat video could be a shell, a boot, a dry bag, or the boat.',
          correct: true,
          why: 'This one dominates because it invalidates every other element on the page. B3 asks a cold visitor to identify the category in under 2 seconds; here the eyebrow says a season, the headline says a mood, and the subhead lists construction details that describe the boot and the dry bag equally well. “Foulweather Shell” does not rescue it either — to a non-boater, and 45% of the customer base is the coastal-aesthetic buyer, “shell” reads as hardware. Everything else on this list is a conversion leak. This is a comprehension failure, and comprehension gates conversion.'
        },
        {
          id: 'r1c',
          text: 'Two CTAs of equal visual weight compete above the fold.',
          correct: false,
          why: 'A genuine B4 violation and it survives every round of this loop, which is exactly why it is worth ranking honestly. It costs you a fraction of the clicks you already earned. The headline problem costs you the clicks before they exist. Split-attention only matters once attention has been captured.'
        },
        {
          id: 'r1d',
          text: 'None of the three proof points carries a number. “Three-layer,” “fully taped,” “limited runs” are all unmeasured claims.',
          correct: false,
          why: 'True against B2, and it matters a lot against Grundéns, who compete on stated specs. But unmeasured proof is still proof — it is weak evidence for a claim the visitor already understands. Here the visitor does not yet understand the claim. Proof for an unidentified product is noise.'
        }
      ],
      critique: {
        text: 'A cold visitor cannot name the product category from anything above the fold. Eyebrow gives a season, headline gives a mood, subhead gives construction details that would fit any of the three SKUs.',
        metric: 'B3 — category named in the headline, identifiable in under 2 seconds',
        evidence: 'The word “rain”, “jacket”, or “shell” appears nowhere above the fold; 45% of the customer base are coastal-aesthetic buyers with no boating vocabulary to fall back on.'
      },
      fixNote: 'Round 2 rewrote the headline to name the category outright. Nothing else on the page moved.'
    },

    {
      n: 2,
      gapScore: 29,
      artifact: {
        kind: 'hero',
        eyebrow: 'New for autumn',
        headline: 'The Foulweather Shell: a 3-layer rain jacket for open water',
        subhead: 'Three-layer construction, fully taped seams, made in limited runs.',
        cta: 'Shop the collection',
        secondaryCta: 'Explore Harborline',
        proof: [
          'Three-layer construction',
          'Fully taped seams',
          'Made in limited runs'
        ],
        layoutNote: 'Full-bleed autoplaying video of a hull in chop, headline centered over it. Proof points sit in a three-column row that reveals its detail copy on hover. Both CTAs side by side, equal weight. At 375px the video fills the viewport and both CTAs land below the fold.'
      },
      choices: [
        {
          id: 'r2a',
          text: 'The sizing objection is unaddressed. 14% of orders come back, mostly sizing on this exact SKU, and nothing above the fold speaks to fit or returns.',
          correct: false,
          why: 'This is the correct answer one round early. The objection you are trying to defuse is “$285 is a lot to risk on a fit I cannot check” — and the $285 is not on the page yet. Reassurance with no stated price is reassurance about an amount the visitor is still guessing at, and guesses on a technical shell run high. Put the number down first, then catch it.'
        },
        {
          id: 'r2b',
          text: 'The proof points still carry no comparable number, so the shell reads as equivalent to any $120 rain jacket.',
          correct: false,
          why: 'Real B2 gap, and the commodity-equivalence framing is exactly right. But it only bites once the visitor knows they are being asked for $285 — spec proof exists to justify a premium, and no premium has been named. The proof gap is downstream of the price gap by construction.'
        },
        {
          id: 'r2c',
          text: 'There is no price above the fold. The visitor now knows it is a rain jacket but has to reach the PDP to learn it costs $285.',
          correct: true,
          why: 'B1 is the largest live gap and this half of it comes first. The shell is $285 against a $190 AOV — it is 1.5x the average order, which means price is not a detail here, it is the decision. Hiding it defers the decision to a second page, and on 61% mobile traffic that second page costs a tap and a load on a connection you do not control. Worse, with CAC at $58 and climbing, every visitor who bounces after the price reveal was paid for at full price and disqualified at the wrong step. Stating $285 in the hero costs you the wrong-fit visitors before they cost you anything.'
        },
        {
          id: 'r2d',
          text: 'A full-bleed autoplaying video is the heaviest possible thing to put above the fold for a mobile-majority audience.',
          correct: false,
          why: 'A legitimate B5 concern and it becomes the top gap in round 5. But it degrades an experience rather than withholding a fact. A slow hero that eventually tells the truth outperforms a fast hero that hides the price — latency annoys, missing information stalls.'
        }
      ],
      critique: {
        text: 'The hero sells a $285 product without stating $285. Price discovery is deferred to the PDP, which is one tap and one page load away from a mobile-majority audience.',
        metric: 'B1 — price above the fold',
        evidence: '$285 against a $190 average order value; 61% mobile traffic; $58 CAC on every visitor who bounces at the deferred reveal.'
      },
      fixNote: 'Round 3 put $285 into the subhead. No other copy moved.'
    },

    {
      n: 3,
      gapScore: 27,
      artifact: {
        kind: 'hero',
        eyebrow: 'New for autumn',
        headline: 'The Foulweather Shell: a 3-layer rain jacket for open water',
        subhead: 'Three-layer construction, fully taped seams, made in limited runs. $285.',
        cta: 'Shop the collection',
        secondaryCta: 'Explore Harborline',
        proof: [
          'Three-layer construction',
          'Fully taped seams',
          'Made in limited runs'
        ],
        layoutNote: 'Full-bleed autoplaying video of a hull in chop, headline centered over it. Proof points sit in a three-column row that reveals its detail copy on hover. Both CTAs side by side, equal weight. At 375px the video fills the viewport and both CTAs land below the fold.'
      },
      choices: [
        {
          id: 'r3a',
          text: 'The proof points next to the price are three unmeasured claims. $285 is being asked for on the strength of “fully taped seams.”',
          correct: false,
          why: 'The gap got sharper this round — an unpriced claim is vague, a priced claim with no measure is a challenge the visitor can refuse. Still second. Weak proof loses the shopper who is comparing; the unanswered fit objection loses the shopper who already wants it. The second group is larger and further down the funnel.'
        },
        {
          id: 'r3b',
          text: 'The price is now on the page but sits at the end of a sentence, inside a run of construction details, with no visual weight of its own.',
          correct: false,
          why: 'Real and worth fixing, and it is part of why this round barely moved the score. But it is a typographic placement problem inside an element that now exists. The gap that matters is not where $285 sits — it is that nothing anywhere above the fold answers the objection $285 raises.'
        },
        {
          id: 'r3c',
          text: '“Shop the collection” sends a visitor who just read about one specific jacket to a browse page.',
          correct: false,
          why: 'A real leak, and on 61% mobile it is a real extra tap. But Harborline sells three SKUs — the collection page puts the shell one tap away with intent intact. Costly, recoverable, and small next to an objection that stops the tap from happening at all.'
        },
        {
          id: 'r3d',
          text: 'Stating $285 without answering the fit risk it creates. 14% of orders return, mostly sizing on this shell, and the hero offers no exchange or returns terms.',
          correct: true,
          why: 'This is why the score barely moved after adding the price: half of B1 is worse than none of it. Price alone converts a browsing visitor into a deciding visitor, and a deciding visitor immediately asks the question the return data already answers — 14% come back, and the reason is sizing on this exact SKU. The company knows the objection precisely enough to quantify it and still does not preempt it. A visitor who cannot try on a $285 shell and sees no exchange terms resolves the uncertainty by leaving, which is the only free option available to them. The reference pages all pair the price with the risk-reversal in the same block for exactly this reason: the two elements only work together.'
        }
      ],
      critique: {
        text: 'Price appears with nothing to catch it. The hero names $285 and then goes silent on the one objection the company can already quantify.',
        metric: 'B1 — primary objection answered in the same block as the price',
        evidence: '14% return rate, driven mostly by sizing on the Foulweather Shell specifically; no exchange, returns, or fit language anywhere above the fold.'
      },
      fixNote: 'Round 4 added the exchange terms to the same line as the price. Nothing else changed.'
    },

    {
      n: 4,
      gapScore: 13,
      artifact: {
        kind: 'hero',
        eyebrow: 'New for autumn',
        headline: 'The Foulweather Shell: a 3-layer rain jacket for open water',
        subhead: 'Three-layer construction, fully taped seams, made in limited runs. $285, with free sizing exchanges — one swap, prepaid label, no restocking fee.',
        cta: 'Shop the collection',
        secondaryCta: 'Explore Harborline',
        proof: [
          'Three-layer construction',
          'Fully taped seams',
          'Made in limited runs'
        ],
        layoutNote: 'Full-bleed autoplaying video of a hull in chop, headline centered over it. Proof points sit in a three-column row that reveals its detail copy on hover. Both CTAs side by side, equal weight. At 375px the video fills the viewport and both CTAs land below the fold.'
      },
      choices: [
        {
          id: 'r4a',
          text: 'Not one proof point carries a number. The hero asks $285 against Grundéns and offers “three-layer, taped, limited” — three claims a $99 jacket also makes.',
          correct: true,
          why: 'With price and fit risk both handled, the only unanswered question left above the fold is whether the thing is actually better, and B2 asks for exactly one comparable number to settle it. Harborline has one and is not using it: the shell is rated 20k/20k. That single figure is the difference between a premium claim and a premium argument — it is checkable, it is the number Grundéns shoppers already know how to read, and it is the only element on this page that a competitor cannot copy by rewriting their headline. “Three-layer construction” appears twice on this page, in the subhead and again in the proof row, and adds nothing either time. The hero currently spends its entire proof budget restating adjectives.'
        },
        {
          id: 'r4b',
          text: 'The proof row hides its detail copy behind hover, which does not exist on a phone.',
          correct: false,
          why: 'A hard B5 failure, top of the list next round, and correctly identified as fatal on touch. Ranked below the proof-content gap only because of ordering: fixing the delivery of three unmeasured claims delivers three unmeasured claims. Get the content worth showing, then make sure it shows.'
        },
        {
          id: 'r4c',
          text: '“Explore Harborline” still sits beside the primary CTA at equal weight, pointing away from the highest-margin SKU on the site.',
          correct: false,
          why: 'Persistent, genuine, and the last thing this loop fixes. It taxes a converted visitor. The proof gap decides whether the visitor converts. A tax on a sale you made beats a lost sale, every time.'
        },
        {
          id: 'r4d',
          text: 'The eyebrow spends the first line on “New for autumn,” a seasonality frame, for a product 55% of buyers use as working gear year-round.',
          correct: false,
          why: 'A real mismatch with the customer split and a wasted line in the most-read position on the page. But it is a line the visitor skims past on the way to a headline that now works. Small, and small in a place that already does its job.'
        }
      ],
      critique: {
        text: 'The proof row contains no measurable claim. The shell has a spec that settles the price question outright and the hero omits it in favor of restating the subhead.',
        metric: 'B2 — one proof point carrying a comparable number',
        evidence: 'The shell is 20k/20k — 20,000mm water column, 20,000g breathability. That figure appears nowhere; “three-layer construction” appears twice.'
      },
      fixNote: 'Round 5 replaced the three proof points with measured ones, led by 20k/20k. Copy elsewhere untouched.'
    },

    {
      n: 5,
      gapScore: 9,
      artifact: {
        kind: 'hero',
        eyebrow: 'New for autumn',
        headline: 'The Foulweather Shell: a 3-layer rain jacket for open water',
        subhead: 'Three-layer construction, fully taped seams, made in limited runs. $285, with free sizing exchanges — one swap, prepaid label, no restocking fee.',
        cta: 'Shop the collection',
        secondaryCta: 'Explore Harborline',
        proof: [
          '20k/20k — 20,000mm water column, 20,000g breathability',
          '3-layer laminate, every seam taped',
          'Sold direct. No wholesale markup.'
        ],
        layoutNote: 'Full-bleed autoplaying video of a hull in chop, headline centered over it. Proof points sit in a three-column row that reveals its detail copy on hover. Both CTAs side by side, equal weight. At 375px the video fills the viewport and both CTAs land below the fold.'
      },
      choices: [
        {
          id: 'r5a',
          text: 'Two equal-weight CTAs still compete, and one of them leads away from the product.',
          correct: false,
          why: 'The B4 violation has been standing since round 1 and it is finally close to the top. Still not there: a split CTA misdirects visitors who reached the buttons. The layout problem determines whether the majority of visitors reach the buttons at all. Fix reach before you fix aim.'
        },
        {
          id: 'r5b',
          text: 'At 375px the video fills the viewport, both CTAs fall below the fold, and the new 20k/20k proof only reveals itself on hover — which touch devices do not have.',
          correct: true,
          why: 'B5 is not a polish item, it is a coverage item, and this hero currently fails it three ways at once for 61% of traffic. The proof point that took a full round to earn is behind an interaction that does not exist on a phone. The CTA is below a fold occupied entirely by decorative video. And the video itself is the heaviest asset on the page, loading first on the slowest connections. Every previous round improved what the page says; none of it reaches the majority of the people it is said to. This is the largest gap on the page by simple arithmetic — it is the only remaining defect that discounts every other fix by 61%.'
        },
        {
          id: 'r5c',
          text: '“Shop the collection” still routes a decided visitor to a browse page instead of the shell.',
          correct: false,
          why: 'Real, and it is now costing more than it used to — the visitor arriving at that button is far more qualified than the round-1 visitor was. But it is one extra tap inside the funnel, whereas the hover-locked proof and below-fold CTA are a wall in front of it.'
        },
        {
          id: 'r5d',
          text: 'The third proof point, “Sold direct. No wholesale markup,” is a business-model claim sitting in a row reserved for product evidence.',
          correct: false,
          why: 'A fair objection — it dilutes a row that just got its first real number, and it argues price rather than performance. But it is the third of three, it is true, and it supports the $285 indirectly. A weak item in a strong row is a rounding error next to a row nobody on a phone can open.'
        }
      ],
      critique: {
        text: 'The hero’s content is now correct and largely unreachable on mobile: hover-gated proof, below-fold CTAs, and a full-bleed video occupying the entire first viewport at 375px.',
        metric: 'B5 — mobile-first, no hover dependency, above-fold content reachable at 375px',
        evidence: '61% of Harborline traffic is mobile; the 20k/20k proof point and both CTAs are unreachable in the first viewport on every one of those sessions.'
      },
      fixNote: 'Round 6 rebuilt the above-fold layout for 375px: static first frame, proof always visible, primary CTA inside the first viewport. Copy unchanged.'
    },

    {
      n: 6,
      gapScore: 5,
      artifact: {
        kind: 'hero',
        eyebrow: 'New for autumn',
        headline: 'The Foulweather Shell: a 3-layer rain jacket for open water',
        subhead: 'Three-layer construction, fully taped seams, made in limited runs. $285, with free sizing exchanges — one swap, prepaid label, no restocking fee.',
        cta: 'Shop the collection',
        secondaryCta: 'Explore Harborline',
        proof: [
          '20k/20k — 20,000mm water column, 20,000g breathability',
          '3-layer laminate, every seam taped',
          'Sold direct. No wholesale markup.'
        ],
        layoutNote: 'Static first frame of the hull image; the video loads only after first interaction. At 375px the headline, the price-and-exchange line, the three proof points as a stacked single column with detail always visible, and both CTAs all render inside the first viewport. No hover state carries content. Both CTAs still side by side at equal weight, splitting the tap row.'
      },
      choices: [
        {
          id: 'r6a',
          text: '“New for autumn” is still the first line a visitor reads, framing a piece of working gear as a seasonal drop.',
          correct: false,
          why: 'Genuinely off-voice — 55% of buyers are working boaters who do not buy foul-weather gear by season, and the line occupies the most-read position on the page. It is a tone cost, not a conversion cost. Nobody leaves over an eyebrow; they leave over a button that sends them somewhere else.'
        },
        {
          id: 'r6b',
          text: '“Shop the collection” puts a browse page between a decided visitor and the shell.',
          correct: false,
          why: 'The closest call in this round, and it is fixed by the same edit as the winner. Ranked second because the collection page still points at a catalog of three items with buying intent intact — it costs a tap. “Explore Harborline” costs the session.'
        },
        {
          id: 'r6c',
          text: 'Two CTAs of equal visual weight sit above the fold, and the second one, “Explore Harborline,” leads away from the only high-margin SKU on the page.',
          correct: true,
          why: 'B4 is unambiguous: one primary CTA, no equal-weight competitor. This has been the smallest live gap since round 1, which is precisely why it is the one still standing — and now that everything above it is fixed, it is the largest remaining. The cost is concrete: the shell carries the margin, the boot is the volume seller, and the second button routes qualified shell traffic into a catalog where the cheaper SKU wins. On the freshly-fixed 375px layout it is worse, not better — side-by-side buttons in a single tap row halve the target width for 61% of visitors, so the mobile fix made the split-CTA problem more expensive.'
        },
        {
          id: 'r6d',
          text: 'The third proof point argues the business model rather than the product.',
          correct: false,
          why: 'Still true, still the weakest line in the proof row. But the row leads with 20k/20k and the visitor reads it top-down; a soft third item is absorbed. It costs nothing measurable, and the loop should end on the gap that does.'
        }
      ],
      critique: {
        text: 'Two primary CTAs remain, and the newly mobile-first layout makes it worse: side-by-side buttons in one tap row halve the target on the 61% of sessions that are touch.',
        metric: 'B4 — single primary CTA above the fold',
        evidence: '“Explore Harborline” carries equal visual weight and routes traffic off the $285 margin SKU toward the $165 boot, which is already the volume seller.'
      },
      fixNote: 'Next revision collapses both buttons into one — “Add to cart — $285” — and demotes “Explore Harborline” to a footer link. Nothing else changes.'
    }

  ]
};
