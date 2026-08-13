window.GAUNTLET_DEMOS = window.GAUNTLET_DEMOS || {};

window.GAUNTLET_DEMOS['ad-creative'] = {
  slug: 'ad-creative',
  title: 'Ad creative variants',
  goal: 'Produce a paid social creative for the Foulweather Shell ($285) that a cold, mobile-first audience will click.',
  bar: 'The three highest-ROAS outerwear ads running in the Meta ad library, torn down frame by frame.',
  barDetail: [
    'The first three words establish what is being sold. Feed attention is ~1.7 seconds.',
    'The visual carries the message with sound off and captions truncated.',
    'The single largest purchase objection is handled inside the creative, not on the landing page.',
    'Price is either stated, or withheld for a reason you can articulate.',
    'The creative is native to the placement — not a billboard resized.'
  ],

  rounds: [
    {
      n: 1,
      gapScore: 36,
      artifact: {
        kind: 'ad',
        platform: 'Meta Feed',
        format: '16:9',
        visual: 'Wide landscape shot: figure on a rocky shoreline at dusk, back to camera, gray sky. Jacket occupies roughly 18% of the frame.',
        headline: 'Weather Is Not a Problem',
        body: 'Built for the days most gear stays home. Three-layer construction, fully taped seams, 20k/20k waterproof rating. Engineered on the North Atlantic.',
        cta: 'Shop Now'
      },
      choices: [
        {
          id: 'a',
          text: 'The CTA "Shop Now" is generic and does no persuasive work.',
          correct: false,
          why: 'True, and worth fixing eventually. But CTA text moves click-through at the margin — a few percent. It cannot rescue an ad where the viewer never learned what product is for sale. Fix comprehension first, then optimize the button.'
        },
        {
          id: 'b',
          text: 'The headline never says what is being sold.',
          correct: true,
          why: '"Weather Is Not a Problem" would fit an insurance ad, a tire ad, or a smart thermostat. Bar item 1 gives you three words and 1.7 seconds to establish the category. This ad spends both on a mood. Every other flaw here is downstream: better price framing, better CTA, and better proof all assume the viewer knows they are looking at a rain shell. They do not.'
        },
        {
          id: 'c',
          text: 'The body copy leads with specs instead of a benefit.',
          correct: false,
          why: 'A genuine problem — "20k/20k" means nothing to the 45% of the customer base buying for coastal aesthetics. But spec-forward copy still communicates *jacket*. It underperforms; it does not fail outright. Ranked below the headline for that reason.'
        },
        {
          id: 'd',
          text: 'Price is absent, so unqualified clicks will burn budget.',
          correct: false,
          why: 'Real, and it comes back as the dominant gap in round 5 — at $285 against a $58 CAC, price is a qualification tool. But price only filters people who already understand the offer. It is the right critique two moves from now, not this move.'
        }
      ],
      critique: {
        text: 'The headline never names the category. A cold viewer finishes this ad without knowing a jacket was for sale.',
        metric: 'Bar item 1 — first three words establish the product',
        evidence: 'Feed attention averages ~1.7s. "Weather Is Not a Problem" spends all of it without naming a product class.'
      },
      fixNote: 'Round 2 rewrites the headline to name the product in the first three words.'
    },

    {
      n: 2,
      gapScore: 28,
      artifact: {
        kind: 'ad',
        platform: 'Meta Feed',
        format: '16:9',
        visual: 'Wide landscape shot: figure on a rocky shoreline at dusk, back to camera, gray sky. Jacket occupies roughly 18% of the frame.',
        headline: 'A Rain Shell for Actual Rain',
        body: 'Built for the days most gear stays home. Three-layer construction, fully taped seams, 20k/20k waterproof rating. Engineered on the North Atlantic.',
        cta: 'Shop Now'
      },
      choices: [
        {
          id: 'a',
          text: 'The 16:9 visual letterboxes on mobile and the jacket is too small to read.',
          correct: true,
          why: '61% of Harborline traffic is mobile. A 16:9 asset in a feed built for 4:5 loses roughly 45% of its vertical real estate to empty bars, and the jacket — already 18% of the frame — drops to under 10% of screen. Bar item 2 says the visual must carry the message alone. Right now it carries a gray sky. This is the largest remaining gap because it wastes the majority of every impression.'
        },
        {
          id: 'b',
          text: 'The body copy still opens with specs rather than the objection.',
          correct: false,
          why: 'Still true and still queued — it becomes the dominant gap in round 3. But copy is read second. On a feed placement the image is processed before the caption, so a failing image caps how many people ever reach the copy at all.'
        },
        {
          id: 'c',
          text: 'There is no proof point or social validation anywhere in the creative.',
          correct: false,
          why: 'A legitimate absence. Note though that bar item 3 asks for the *largest objection* handled, not for testimonials generally — and Harborline\'s largest objection is sizing, not credibility. Chasing generic social proof here would have burned a round on the wrong problem.'
        },
        {
          id: 'd',
          text: '"Actual" is doing sarcastic work that clashes with the understated brand voice.',
          correct: false,
          why: 'A fair voice note — BRAND.md says understated, closer to a spec sheet. But this is a word-level polish item worth maybe one gap point. Spending a round on it while 45% of the ad is empty letterbox would be exactly the mistake the loop exists to prevent.'
        }
      ],
      critique: {
        text: 'The asset is 16:9 in a 4:5 placement. Nearly half of every mobile impression is empty bar, and the product reads at under 10% of screen.',
        metric: 'Bar item 2 — the visual carries the message alone',
        evidence: '61% of traffic is mobile (BRAND.md). 16:9 in a 4:5 feed slot forfeits ~45% of vertical space.'
      },
      fixNote: 'Round 3 reshoots to 4:5 and brings the jacket to the front of the frame.'
    },

    {
      n: 3,
      gapScore: 22,
      artifact: {
        kind: 'ad',
        platform: 'Meta Feed',
        format: '4:5',
        visual: 'Vertical crop, chest-up: shoulder and hood of the shell in driving rain, water beading and sheeting off the taped seam. Jacket fills roughly 70% of the frame.',
        headline: 'A Rain Shell for Actual Rain',
        body: 'Built for the days most gear stays home. Three-layer construction, fully taped seams, 20k/20k waterproof rating. Engineered on the North Atlantic.',
        cta: 'Shop Now'
      },
      choices: [
        {
          id: 'a',
          text: 'The creative still does not show a price.',
          correct: false,
          why: 'Holding steady as a real gap, and it does become the top critique in round 5. But bar item 3 outranks bar item 4 here for a measurable reason: sizing drives a 14% return rate, which destroys contribution margin *after* the sale. Price only affects who clicks.'
        },
        {
          id: 'b',
          text: 'The body copy opens with waterproof specs when the actual objection is sizing.',
          correct: true,
          why: 'Harborline\'s return rate is 14%, "mostly sizing on the shell" (BRAND.md). That is the single largest thing standing between an impression and a profitable order — and the copy spends its opening on a 20k/20k rating that resolves an objection nobody had. Nobody returns this jacket because it leaked. Bar item 3 asks for the largest objection handled inside the creative; this creative handles a different one confidently.'
        },
        {
          id: 'c',
          text: 'The headline and visual now say the same thing, which is redundant.',
          correct: false,
          why: 'A sharp observation, and in a mature account you would test a headline that adds a second idea. But redundancy between image and headline is a *reinforcement* pattern, not a defect — it is how the reference ads survive sound-off, caption-truncated delivery. Low priority, and arguably not a flaw.'
        },
        {
          id: 'd',
          text: 'The CTA is still "Shop Now".',
          correct: false,
          why: 'Third round in a row this has been correctly identified and correctly deprioritized. It finally becomes worth fixing in round 6, once the sizing angle exists for it to compound. Fixed earlier, it would have been "Shop Now" → "Buy Now" — motion without progress.'
        }
      ],
      critique: {
        text: 'The copy answers waterproofing, an objection nobody has. The objection that costs money is sizing.',
        metric: 'Bar item 3 — largest objection handled in the creative',
        evidence: '14% return rate, mostly sizing on the shell (BRAND.md). Zero returns cite leakage.'
      },
      fixNote: 'Round 4 adds a sizing guarantee to the body copy.'
    },

    {
      n: 4,
      gapScore: 20,
      artifact: {
        kind: 'ad',
        platform: 'Meta Feed',
        format: '4:5',
        visual: 'Vertical crop, chest-up: shoulder and hood of the shell in driving rain, water beading and sheeting off the taped seam. Jacket fills roughly 70% of the frame.',
        headline: 'A Rain Shell for Actual Rain',
        body: 'Built for the days most gear stays home. Three-layer construction, fully taped seams, 20k/20k waterproof rating. Engineered on the North Atlantic. Sizing runs true — and if it does not, returns are free both ways.',
        cta: 'Shop Now'
      },
      choices: [
        {
          id: 'a',
          text: 'The sizing line sits at the end of the caption, past where mobile truncates.',
          correct: true,
          why: 'This is why the score barely moved: 22 → 20. The previous critique was correct and the builder implemented it faithfully — but placed the fix at character 186, and Meta truncates mobile captions behind "... more" at roughly 125. For 61% of the audience the fix does not exist. **A correct fix in the wrong position scores nearly the same as no fix.** This plateau is the most instructive round in the loop: it is the round where you learn that the critic must check whether a change actually shipped to the eye, not just to the file.'
        },
        {
          id: 'b',
          text: 'The body copy is now too long at 210 characters.',
          correct: false,
          why: 'Close, and it shares a root cause with the right answer — but it misdiagnoses the fix. Trimming to fit would likely cut the *sizing* line, since it was appended last. Length is the symptom; position is the disease. Acting on this critique would have made round 5 worse.'
        },
        {
          id: 'c',
          text: '"Sizing runs true" is a claim without evidence behind it.',
          correct: false,
          why: 'Legitimate — an unsupported claim is weaker than "runs true for 86% of buyers." Worth a later round. But an unseen claim and an unsupported claim are not the same order of problem: one is weak, the other is invisible.'
        },
        {
          id: 'd',
          text: 'Free returns both ways is expensive at a $190 average order value.',
          correct: false,
          why: 'A real business objection, and the kind of thing a good critic flags. It is out of scope for a creative critique though — the critic\'s job is the gap against the bar, not repricing the returns policy. Scope discipline is part of what keeps the loop converging.'
        }
      ],
      critique: {
        text: 'The sizing fix landed at character 186. Mobile truncates near 125. The change is real in the file and absent on the screen.',
        metric: 'Bar item 2 — survives caption truncation',
        evidence: 'Meta mobile caption truncation ~125 chars; 61% of traffic is mobile.'
      },
      fixNote: 'Round 5 moves sizing into the opening line and burns it into the image.'
    },

    {
      n: 5,
      gapScore: 9,
      artifact: {
        kind: 'ad',
        platform: 'Meta Feed',
        format: '4:5',
        visual: 'Vertical crop, chest-up: shoulder and hood of the shell in driving rain, water sheeting off the taped seam. Lower third carries a single burned-in line: "True to size. Free returns both ways."',
        headline: 'A Rain Shell for Actual Rain',
        body: 'True to size, with free returns both ways — so the only thing you risk is the weather. Three-layer, fully taped, 20k/20k.',
        cta: 'Shop Now'
      },
      choices: [
        {
          id: 'a',
          text: 'The specs are now crammed into a trailing fragment.',
          correct: false,
          why: 'Stylistically true, and the fragment is ugly. But it is at the end of the caption on purpose now — the loop has learned that trailing position means low visibility, and specs are the right thing to spend low visibility on. This is the fix working as intended, not a regression.'
        },
        {
          id: 'b',
          text: 'Still no price, which lets unqualified clicks through at $58 CAC.',
          correct: true,
          why: 'Its turn finally arrives. With comprehension, framing, and the sizing objection all handled, price is now the largest remaining gap — and bar item 4 is explicit that you either state it or can articulate why not. At $285 with a $58 CAC and a $190 AOV, every click from someone expecting a $90 jacket is pure loss. Note how long this critique waited: it was *correct* in round 1 and still wrong to act on, because fixing it then would have qualified traffic for an offer nobody could identify.'
        },
        {
          id: 'c',
          text: 'The burned-in text will hurt reach under text-overlay rules.',
          correct: false,
          why: 'Outdated — Meta retired the 20% text rule in 2021. Worth flagging that a critic operating on stale platform knowledge produces confident, specific, wrong critiques. The remedy is a bar built from ads *currently running*, which is exactly what this loop\'s reference is.'
        },
        {
          id: 'd',
          text: 'The image now duplicates the caption\'s sizing message.',
          correct: false,
          why: 'Duplication is deliberate here, for the same reason as round 3: sound-off and truncated delivery means redundancy is insurance. The loop already resolved this question once. A critic re-litigating a settled decision is noise.'
        }
      ],
      critique: {
        text: 'No price anywhere. At $285 against a $58 CAC, every click from a $90-jacket shopper is unrecoverable spend.',
        metric: 'Bar item 4 — state the price or justify withholding it',
        evidence: 'CAC $58 and climbing; AOV $190; product is $285 (BRAND.md).'
      },
      fixNote: 'Round 6 states the price and points the CTA at the sizing angle.'
    },

    {
      n: 6,
      gapScore: 5,
      artifact: {
        kind: 'ad',
        platform: 'Meta Feed',
        format: '4:5',
        visual: 'Vertical crop, chest-up: shoulder and hood of the shell in driving rain, water sheeting off the taped seam. Lower third carries a single burned-in line: "True to size. Free returns both ways."',
        headline: 'A Rain Shell for Actual Rain',
        body: '$285. True to size, with free returns both ways — so the only thing you risk is the weather. Three-layer, fully taped, 20k/20k.',
        cta: 'Find Your Size'
      },
      choices: [
        {
          id: 'a',
          text: 'Nothing significant remains — the gap is inside tolerance.',
          correct: true,
          why: 'Gap score 5, under the stop threshold of 8. Every bar item is satisfied: the category lands in three words, the visual survives sound-off and truncation, the sizing objection is handled in the first line *and* burned into the image, the price qualifies the click, and the CTA compounds the sizing angle instead of saying "Shop Now." The remaining points are preference, not gap. **Knowing when to stop is part of the method** — a loop with no stop condition will happily spend your budget rewriting a finished ad.'
        },
        {
          id: 'b',
          text: 'The price should be tested against a monthly-payment framing.',
          correct: false,
          why: 'This is a test idea, not a gap. The distinction matters: the loop closes gaps against a known bar, and terminates. Hypotheses that require live traffic to resolve belong in an experiment roadmap, not in another round of critique.'
        },
        {
          id: 'c',
          text: 'The headline has not changed since round 2 and may be stale.',
          correct: false,
          why: 'Change for its own sake. The headline was fixed in round 2 and no subsequent critique found fault with it — that is the system working. A critic who invents work to justify another round is the failure mode this stop condition guards against.'
        },
        {
          id: 'd',
          text: 'The brand name never appears in the creative.',
          correct: false,
          why: 'Genuinely arguable, and a brand-awareness campaign would score this differently. Under *this* bar — direct-response creative judged on qualified clicks — the logo is on the jacket in-frame and the landing page carries the name. Worth about two gap points, which is why the total sits at 5 rather than 3.'
        }
      ],
      critique: {
        text: 'Gap 5, below the stop threshold of 8. The loop terminates.',
        metric: 'Stop condition',
        evidence: 'All five bar items satisfied. Remaining deltas are preference, not measurable gap.'
      },
      fixNote: 'Loop complete. 36 → 5 across six rounds.'
    }
  ]
};
