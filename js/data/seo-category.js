window.GAUNTLET_DEMOS = window.GAUNTLET_DEMOS || {};
window.GAUNTLET_DEMOS['seo-category'] = {
  slug: 'seo-category',
  title: 'SEO category page',
  goal: 'Build the Harborline collection page that should rank for "men\'s waterproof rain jackets".',
  bar: 'The three pages currently ranking top-3 for that query, none of which are brand-first.',
  barDetail: [
    'B1 — Intro answers the query\'s actual intent: people typing this are comparison shopping across brands, not looking for one brand.',
    'B2 — Facets use the words buyers use (rating, length, hood, price), never internal taxonomy.',
    'B3 — Mid-page content resolves a buying decision. All three ranking pages tell you when NOT to buy.',
    'B4 — Internal links pass authority down to money pages with descriptive anchors, not sideways to About.',
    'B5 — Schema markup emits ItemList + Product + Offer, so the SERP entry renders price and stars.'
  ],
  rounds: [
    {
      n: 1,
      artifact: {
        kind: 'seo',
        h1: 'Men\'s Waterproof Rain Jackets',
        intro: 'Harborline builds technical outerwear and sells it direct. Every shell in this collection uses a 3-layer laminate, fully taped seams, and a 20k/20k waterproof-breathable rating. No wholesale, no middle layer of markup. The jacket you receive was specified by the people who make it. Browse the collection below.',
        facets: [
          'Shell Class: 2L / 2.5L / 3L',
          'Seam Construction: Taped / Welded',
          'Product Family',
          'Colorway',
          'Availability'
        ],
        sections: [
          {
            h2: 'About Harborline Rain Jackets',
            copy: 'Founded in 2019, Harborline makes rain shells, deck boots, and dry bags for the North Atlantic coast. We test on working water before anything ships.'
          },
          {
            h2: 'Men\'s Waterproof Rain Jackets',
            copy: 'Our men\'s waterproof rain jackets are built for wet weather. Waterproof rain jackets for men need to keep water out, and a good men\'s rain jacket does exactly that in sustained rain.'
          },
          {
            h2: 'Care and Warranty',
            copy: 'Wash warm, tumble dry low to reactivate the DWR. Reproof annually. Every shell carries a three-year construction warranty covering seams, zips, and delamination.'
          }
        ],
        internalLinks: [
          'About Harborline',
          'Our Story',
          'Journal: Notes from the Yard',
          'Contact & Wholesale'
        ],
        schemaNote: 'Organization + WebPage, inherited from the site template. No ItemList, no per-product Offer.'
      },
      gapScore: 36,
      choices: [
        {
          id: 'r1a',
          text: 'The intro is a company statement. Someone searching this query has not chosen a brand yet and gets no help choosing one here.',
          correct: true,
          why: 'This is the gap that decides whether the page is relevant to the query at all. The searcher is mid-comparison across Grundéns, Stutterheim, and everyone else; the intro answers a question nobody asked ("who is Harborline"). Every other flaw here degrades a page that already ranks. This one prevents ranking.'
        },
        {
          id: 'r1b',
          text: 'The facets are internal taxonomy. "Shell Class: 2L / 2.5L / 3L" is warehouse language, not shopper language.',
          correct: false,
          why: 'Real, and it costs conversions — but a facet only matters to someone who clicked through and stayed. The intent mismatch upstream means far fewer people ever reach the facet rail. Fix relevance first, then fix the filtering.'
        },
        {
          id: 'r1c',
          text: 'Every internal link points sideways to About, Our Story, and Journal. No authority reaches a product page.',
          correct: false,
          why: 'A genuine equity leak, and worth fixing. But internal link changes move rankings over weeks or months of recrawl. The intro decides in one crawl whether this page is topically about the query.'
        },
        {
          id: 'r1d',
          text: 'Schema is the site-wide Organization + WebPage default. No ItemList or Offer means no price or stars in the SERP.',
          correct: false,
          why: 'True and cheap to fix, which makes it tempting. But rich results amplify a ranking you already hold; they do not create one. This is the smallest of the four by a wide margin.'
        }
      ],
      critique: {
        text: 'The intro sells the brand to people who have not yet decided they want a brand. Nothing in it acknowledges that the searcher is holding three other tabs open.',
        metric: 'B1 — query intent in the intro',
        evidence: 'Harborline splits 55% actual boaters / 45% coastal-aesthetic buyers, and competes head-on with Grundéns and Stutterheim. The intro names none of that trade-off.'
      },
      fixNote: 'Round 2 rewrites the intro to frame the category as a three-way choice. Nothing else changes.'
    },

    {
      n: 2,
      artifact: {
        kind: 'seo',
        h1: 'Men\'s Waterproof Rain Jackets',
        intro: 'Most men shopping this category are choosing between three things: a commercial fishing shell, a fashion rain coat, and a technical shell. This collection is the third. The Foulweather Shell is $285, 3-layer, 20k/20k, fully taped. If you want lighter, cheaper, or more town-facing, the sections below say so.',
        facets: [
          'Shell Class: 2L / 2.5L / 3L',
          'Seam Construction: Taped / Welded',
          'Product Family',
          'Colorway',
          'Availability'
        ],
        sections: [
          {
            h2: 'About Harborline Rain Jackets',
            copy: 'Founded in 2019, Harborline makes rain shells, deck boots, and dry bags for the North Atlantic coast. We test on working water before anything ships.'
          },
          {
            h2: 'Men\'s Waterproof Rain Jackets',
            copy: 'Our men\'s waterproof rain jackets are built for wet weather. Waterproof rain jackets for men need to keep water out, and a good men\'s rain jacket does exactly that in sustained rain.'
          },
          {
            h2: 'Care and Warranty',
            copy: 'Wash warm, tumble dry low to reactivate the DWR. Reproof annually. Every shell carries a three-year construction warranty covering seams, zips, and delamination.'
          }
        ],
        internalLinks: [
          'About Harborline',
          'Our Story',
          'Journal: Notes from the Yard',
          'Contact & Wholesale'
        ],
        schemaNote: 'Organization + WebPage, inherited from the site template. No ItemList, no per-product Offer.'
      },
      gapScore: 30,
      choices: [
        {
          id: 'r2a',
          text: 'The mid-page sections restate the H1 in different word orders. "Waterproof rain jackets for men need to keep water out" teaches nothing.',
          correct: false,
          why: 'Correctly identified as filler, and it will be the next fix. But mid-page copy is read by people who already stayed on the page. The facet rail is what they touch in the first five seconds, and right now it speaks a language they do not.'
        },
        {
          id: 'r2b',
          text: 'The facets are internal taxonomy. Nobody filters by "Seam Construction: Welded"; they filter by price, length, and hood.',
          correct: true,
          why: 'The intro now earns the click, so the next bottleneck moves downstream to the first interaction. With 61% of traffic on mobile, the facet drawer is the whole navigation surface — a shopper who cannot filter to "under $200" has no second move but back. Vocabulary mismatch here voids the intro\'s work.'
        },
        {
          id: 'r2c',
          text: 'The internal links still route authority to About and Journal, and one of them offers Wholesale on a brand that sells direct only.',
          correct: false,
          why: 'Both true — the wholesale link is a factual error against a direct-only brand. But it is a single stale anchor plus a slow-moving equity problem, while the facets block the primary path to purchase today.'
        },
        {
          id: 'r2d',
          text: 'Schema is unchanged: no ItemList, no Offer, so competitors show price and stars in the SERP and this page shows a blue line.',
          correct: false,
          why: 'Still real, still the smallest. Rich results raise click-through on an existing position by a few points. The facet rail decides whether the click converts at all once it lands.'
        }
      ],
      critique: {
        text: 'Facet labels are drawn from the PIM, not from what buyers type. "Shell Class" and "Seam Construction" are attributes the warehouse tracks; length, hood, and price are attributes buyers choose on.',
        metric: 'B2 — facet vocabulary',
        evidence: '61% of traffic is mobile, where the facet drawer is the only navigation. There is no price facet at all on a page whose lead SKU is $285 against a $190 average order value.'
      },
      fixNote: 'Round 3 replaces every facet label with buyer vocabulary and adds a price band. Copy and links untouched.'
    },

    {
      n: 3,
      artifact: {
        kind: 'seo',
        h1: 'Men\'s Waterproof Rain Jackets',
        intro: 'Most men shopping this category are choosing between three things: a commercial fishing shell, a fashion rain coat, and a technical shell. This collection is the third. The Foulweather Shell is $285, 3-layer, 20k/20k, fully taped. If you want lighter, cheaper, or more town-facing, the sections below say so.',
        facets: [
          'Price: under $150 / $150–250 / $250+',
          'Waterproof rating: 10k / 20k',
          'Length: hip / thigh',
          'Hood: fixed / packable',
          'Pit zips: yes / no',
          'Lining: unlined / wool'
        ],
        sections: [
          {
            h2: 'About Harborline Rain Jackets',
            copy: 'Founded in 2019, Harborline makes rain shells, deck boots, and dry bags for the North Atlantic coast. We test on working water before anything ships.'
          },
          {
            h2: 'Men\'s Waterproof Rain Jackets',
            copy: 'Our men\'s waterproof rain jackets are built for wet weather. Waterproof rain jackets for men need to keep water out, and a good men\'s rain jacket does exactly that in sustained rain.'
          },
          {
            h2: 'Care and Warranty',
            copy: 'Wash warm, tumble dry low to reactivate the DWR. Reproof annually. Every shell carries a three-year construction warranty covering seams, zips, and delamination.'
          }
        ],
        internalLinks: [
          'About Harborline',
          'Our Story',
          'Journal: Notes from the Yard',
          'Contact & Wholesale'
        ],
        schemaNote: 'Organization + WebPage, inherited from the site template. No ItemList, no per-product Offer.'
      },
      gapScore: 25,
      choices: [
        {
          id: 'r3a',
          text: 'The three mid-page sections are keyword restatement and boilerplate. None of them helps anyone decide anything.',
          correct: true,
          why: 'This is now the largest gap and the one holding the ceiling down. All three reference pages carry mid-page content that resolves a purchase decision, which is what makes them worth ranking above a bare product grid. Here the second section is a keyword loop and the other two could sit on any page on the site.'
        },
        {
          id: 'r3b',
          text: 'The new facet set has no size filter, on a brand whose returns are mostly a sizing problem.',
          correct: false,
          why: 'A real omission with real cost — a 14% return rate concentrated on shell sizing is money leaving the building. But a size facet trims returns after purchase; the missing mid-page content is why fewer people get to purchase.'
        },
        {
          id: 'r3c',
          text: 'The internal links still point at About, Our Story, Journal, and a Wholesale page that contradicts a direct-only brand.',
          correct: false,
          why: 'Real, and it will be worth fixing once there is a page worth linking from. Linking authority out of a thin page mostly moves thinness around. Give the page substance first, then wire it.'
        },
        {
          id: 'r3d',
          text: 'Schema is still the template default, so nothing in this collection is machine-readable as a product with a price.',
          correct: false,
          why: 'Unchanged and still smallest. Structured data describes what the page contains; right now what it contains is three paragraphs of nothing. Marking that up faithfully would not help.'
        }
      ],
      critique: {
        text: 'The mid-page content is filler. Section two says "waterproof rain jackets for men need to keep water out," which is the definition of the noun, not a reason to buy.',
        metric: 'B3 — mid-page content that earns the ranking',
        evidence: 'All three reference pages devote their mid-page to resolving the buying decision. This page devotes it to the company\'s 2019 founding date and a wash-care note.'
      },
      fixNote: 'Round 4 replaces the three sections with technical content that explains the specs. Facets, links, schema untouched.'
    },

    {
      n: 4,
      artifact: {
        kind: 'seo',
        h1: 'Men\'s Waterproof Rain Jackets',
        intro: 'Most men shopping this category are choosing between three things: a commercial fishing shell, a fashion rain coat, and a technical shell. This collection is the third. The Foulweather Shell is $285, 3-layer, 20k/20k, fully taped. If you want lighter, cheaper, or more town-facing, the sections below say so.',
        facets: [
          'Price: under $150 / $150–250 / $250+',
          'Waterproof rating: 10k / 20k',
          'Length: hip / thigh',
          'Hood: fixed / packable',
          'Pit zips: yes / no',
          'Lining: unlined / wool'
        ],
        sections: [
          {
            h2: 'What 20k/20k actually measures',
            copy: 'The first number is hydrostatic head in millimetres: a 20,000mm column of water sits on the fabric before it wets through. The second is breathability, grams of vapour passed per square metre per day. Most town rain coats test between 5k and 10k on both.'
          },
          {
            h2: '3-layer versus 2.5-layer construction',
            copy: 'A 3-layer shell bonds face fabric, membrane, and a knit backer into one piece. A 2.5-layer prints a raised pattern instead of that backer. The 2.5 is lighter and cheaper; it also abrades against a pack strap and delaminates sooner.'
          },
          {
            h2: 'Why taped seams fail first',
            copy: 'A stitched seam is a line of holes through the membrane. Tape covers them, but heat and detergent lift the tape edges over years. Fully taped means every seam, including the pocket bags most makers skip.'
          }
        ],
        internalLinks: [
          'About Harborline',
          'Our Story',
          'Journal: Notes from the Yard',
          'Contact & Wholesale'
        ],
        schemaNote: 'Organization + WebPage, inherited from the site template. No ItemList, no per-product Offer.'
      },
      gapScore: 24,
      choices: [
        {
          id: 'r4a',
          text: 'The new sections explain the specs but never resolve the decision. Nothing tells a shopper when the $285 shell is the wrong buy, and nothing addresses fit.',
          correct: true,
          why: 'The gap barely moved because the fix answered the letter of the critique and not the bar. Substantive is not the same as decisive: three sections of construction theory serve the 55% who already know they want a technical shell and abandon the 45% coastal buyers. The bar\'s pages all name the case for not buying.'
        },
        {
          id: 'r4b',
          text: 'Section two argues 3-layer is better and section three argues fully taped is better — the page is now technically literate advocacy for its own SKU.',
          correct: false,
          why: 'A fair read, and it is a symptom of the same root cause: the content is oriented toward justifying one product rather than resolving a choice. It is scored lower only because it names the tone rather than the missing content.'
        },
        {
          id: 'r4c',
          text: 'The links still include a Wholesale page on a brand founded to sell direct with no wholesale channel.',
          correct: false,
          why: 'A factual contradiction with the business and an easy delete. But it is one anchor. The mid-page is three sections and the page\'s whole claim to the ranking.'
        },
        {
          id: 'r4d',
          text: 'The intro promises "the sections below say so" about lighter and cheaper options, and the sections never say so.',
          correct: false,
          why: 'Sharp catch — the intro now writes a cheque the body does not cash. It is the same gap seen from the top of the page, and smaller only because it describes a broken promise rather than the content that would keep it.'
        }
      ],
      critique: {
        text: 'Specs are not a decision. The page explains hydrostatic head to somebody who has not been told which of these jackets to buy, or when to buy none of them.',
        metric: 'B3 — mid-page content that earns the ranking',
        evidence: '14% return rate, mostly sizing on the shell, and 45% of the customer base buys for coastal aesthetic rather than working water. Neither group is addressed anywhere on the page.'
      },
      fixNote: 'Round 5 swaps two of the three sections for decision content: when not to buy, and how it fits. Same section count.'
    },

    {
      n: 5,
      artifact: {
        kind: 'seo',
        h1: 'Men\'s Waterproof Rain Jackets',
        intro: 'Most men shopping this category are choosing between three things: a commercial fishing shell, a fashion rain coat, and a technical shell. This collection is the third. The Foulweather Shell is $285, 3-layer, 20k/20k, fully taped. If you want lighter, cheaper, or more town-facing, the sections below say so.',
        facets: [
          'Price: under $150 / $150–250 / $250+',
          'Waterproof rating: 10k / 20k',
          'Length: hip / thigh',
          'Hood: fixed / packable',
          'Pit zips: yes / no',
          'Lining: unlined / wool'
        ],
        sections: [
          {
            h2: 'When $285 is the wrong jacket',
            copy: 'If the wettest thing you do is walk to the ferry, a 10k/10k shell at half the price will not fail you. Buy the 20k/20k when you are out in sustained rain for hours, or when wind is driving it sideways. Otherwise you are paying for headroom.'
          },
          {
            h2: '3-layer versus 2.5-layer construction',
            copy: 'A 3-layer shell bonds face fabric, membrane, and a knit backer into one piece. A 2.5-layer prints a raised pattern instead of that backer. The 2.5 is lighter and cheaper; it also abrades against a pack strap and delaminates sooner.'
          },
          {
            h2: 'Sizing, which is what we get returned for',
            copy: 'Fourteen percent of orders come back and most of those are the shell fitting wrong. It is cut trim through the chest to sit under a PFD. If you plan to wear a heavy midlayer under it, take one size up. Shoulder measurements are on every product page.'
          }
        ],
        internalLinks: [
          'About Harborline',
          'Our Story',
          'Journal: Notes from the Yard',
          'Contact & Wholesale'
        ],
        schemaNote: 'Organization + WebPage, inherited from the site template. No ItemList, no per-product Offer.'
      },
      gapScore: 11,
      choices: [
        {
          id: 'r5a',
          text: 'Four links, all lateral. Nothing on this page passes authority to the Foulweather Shell, the Slipway Boot, or any filtered view a buyer would land on.',
          correct: true,
          why: 'The page now deserves to rank, which finally makes its outbound links the binding constraint. It is spending every internal link on About and Journal while the $285 shell carries the margin and the $165 boot carries the volume. A page with earned authority and no path to a money page banks nothing.'
        },
        {
          id: 'r5b',
          text: 'The sizing section quotes the 14% return rate on the page. That is a number better fixed than published.',
          correct: false,
          why: 'A genuine judgement call — naming your own return rate can read as a warning. It is defensible here because the section resolves it with an instruction, and either way it is one sentence against a structural link problem.'
        },
        {
          id: 'r5c',
          text: 'Three prose sections now sit between the shopper and the grid on a page where 61% of traffic is mobile.',
          correct: false,
          why: 'Real, and worth a layout pass — mid-page content usually belongs below the first product rows on mobile. But this is placement of content that already works, whereas the links are broken wherever they sit.'
        },
        {
          id: 'r5d',
          text: 'Schema is still Organization + WebPage. Six facets and a full spec discussion, none of it machine-readable.',
          correct: false,
          why: 'Now genuinely worth doing — for the first time the page has content that structured data could describe honestly. It is still second, because rich results are a click-through multiplier and the internal links are how the page\'s new authority reaches anything that takes money.'
        }
      ],
      critique: {
        text: 'The page has earned authority and then routes all of it to About, Our Story, and a Wholesale page that should not exist on a direct-only brand.',
        metric: 'B4 — internal links to money pages',
        evidence: 'The shell is the margin SKU at $285 and the boot is the best-selling SKU at $165. Neither is linked from the page built to rank for the category.'
      },
      fixNote: 'Round 6 replaces the link block with descriptive anchors to the two money SKUs, a cross-sell, and two filtered views. Copy untouched.'
    },

    {
      n: 6,
      artifact: {
        kind: 'seo',
        h1: 'Men\'s Waterproof Rain Jackets',
        intro: 'Most men shopping this category are choosing between three things: a commercial fishing shell, a fashion rain coat, and a technical shell. This collection is the third. The Foulweather Shell is $285, 3-layer, 20k/20k, fully taped. If you want lighter, cheaper, or more town-facing, the sections below say so.',
        facets: [
          'Price: under $150 / $150–250 / $250+',
          'Waterproof rating: 10k / 20k',
          'Length: hip / thigh',
          'Hood: fixed / packable',
          'Pit zips: yes / no',
          'Lining: unlined / wool'
        ],
        sections: [
          {
            h2: 'When $285 is the wrong jacket',
            copy: 'If the wettest thing you do is walk to the ferry, a 10k/10k shell at half the price will not fail you. Buy the 20k/20k when you are out in sustained rain for hours, or when wind is driving it sideways. Otherwise you are paying for headroom.'
          },
          {
            h2: '3-layer versus 2.5-layer construction',
            copy: 'A 3-layer shell bonds face fabric, membrane, and a knit backer into one piece. A 2.5-layer prints a raised pattern instead of that backer. The 2.5 is lighter and cheaper; it also abrades against a pack strap and delaminates sooner.'
          },
          {
            h2: 'Sizing, which is what we get returned for',
            copy: 'Fourteen percent of orders come back and most of those are the shell fitting wrong. It is cut trim through the chest to sit under a PFD. If you plan to wear a heavy midlayer under it, take one size up. Shoulder measurements are on every product page.'
          }
        ],
        internalLinks: [
          'Foulweather Shell — 3-layer, 20k/20k, $285',
          'Slipway Boot — wool-lined vulcanized deck boot, $165',
          'Tidepack 25L dry bag, $78',
          'Rain shells under $250',
          'Shell sizing and shoulder measurements'
        ],
        schemaNote: 'Organization + WebPage, inherited from the site template. No ItemList, no per-product Offer.'
      },
      gapScore: 6,
      choices: [
        {
          id: 'r6a',
          text: 'Schema is still the site template. No ItemList, no Product, no Offer, so the SERP entry renders as a plain blue link next to competitors showing price and stars.',
          correct: true,
          why: 'Last one standing, and now the largest by default. Everything above it is a one-point trim; this is the only remaining item the bar scores as structural. It also finally makes sense to fix: there is real content, real prices, and a real link graph for the markup to describe.'
        },
        {
          id: 'r6b',
          text: 'Still no size facet, on the page that now openly admits sizing drives a 14% return rate.',
          correct: false,
          why: 'The mid-page content raised the cost of this omission by naming it — the page tells you sizing matters and then gives you no way to filter by it. Real, but it trims returns rather than winning the ranking, and one facet is a smaller lift than the whole structured-data layer.'
        },
        {
          id: 'r6c',
          text: 'Three of the five new anchors are product names. A category page usually wants more anchors to filtered views than to individual SKUs.',
          correct: false,
          why: 'Reasonable and worth a second pass — filtered views scale, SKUs churn. But the links now reach the $285 margin SKU and the $165 volume SKU, which is the outcome the bar asks for. The ratio is a refinement.'
        },
        {
          id: 'r6d',
          text: 'The intro still leads with a three-way framing before naming a single product a shopper can click.',
          correct: false,
          why: 'A fair note on pacing — the comparison framing earns the click but delays the first scannable product reference. Smallest of the four: it costs a little dwell time on a page that now answers the query.'
        }
      ],
      critique: {
        text: 'The page ranks on merit and then presents itself in search as a bare title and URL, while the reference pages all render price and review stars.',
        metric: 'B5 — schema markup for rich results',
        evidence: 'All three top-3 pages emit ItemList wrapping Product with Offer and AggregateRating. This page emits Organization and WebPage from the site template, unchanged since round 1.'
      },
      fixNote: 'Below the ship threshold. Schema goes out as one ticket: ItemList of Product + Offer, one anchor to the sizing guide, nothing else touched.'
    }
  ]
};
