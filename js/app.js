/* The Gauntlet Loop — interactive explainer
   No framework, no build step. Runs from file:// or GitHub Pages. */

(function () {
  'use strict';

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function el(tag, cls, txt) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  }
  /* M4 — honor prefers-reduced-motion for scripted scrolling too, not just CSS */
  function softScroll(node, block) {
    if (!node || !node.scrollIntoView) return;
    var reduce = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    node.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: block || 'start' });
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }

  /* ==========================================================
     Exhibit 1 — what a bar's precision does to a critique
     ========================================================== */

  var BAR_LEVELS = [
    {
      bar: '"Make it good."',
      critique: 'This could be stronger. Consider tightening it up and making the messaging land harder.',
      verdict: 'Nothing here can be acted on. The builder rewrites at random and the next critique is identical.',
      grade: 'low'
    },
    {
      bar: '"Make it look professional."',
      critique: 'The tone feels slightly off for the category, and the layout could be more refined.',
      verdict: 'Still unactionable. "Refined" has no failing condition, so no change can ever satisfy it.',
      grade: 'low'
    },
    {
      bar: '"Match a premium DTC brand."',
      critique: 'It does not read as premium yet. The typography and spacing feel a little generic.',
      verdict: 'Directionally real, but the builder must guess which premium brand, and which part of it.',
      grade: 'mid'
    },
    {
      bar: 'A specific competitor page, linked.',
      critique: 'Their headline names the product category in the first three words. Ours reaches it at word seven.',
      verdict: 'Now it bites. There is a thing to compare against and a gap you can see. The builder knows what to change.',
      grade: 'mid'
    },
    {
      bar: 'That page, plus five measured criteria.',
      critique: 'Bar item 1 requires the category inside three words; this headline reaches it at word seven. Feed attention is ~1.7s. Lead with the noun.',
      verdict: 'Fully actionable, and checkable. A second critic reading the same bar produces the same critique — which is what makes the loop converge.',
      grade: 'high'
    }
  ];

  function mountBarSlider() {
    var root = $('#ex-bar');
    if (!root) return;
    var input = $('input', root);
    var barTxt = $('[data-slot="bar"]', root);
    var out = $('.bar-demo-out', root);
    var crit = $('[data-slot="critique"]', root);
    var verd = $('[data-slot="verdict"]', root);

    function draw() {
      var lv = BAR_LEVELS[Number(input.value)];
      barTxt.textContent = lv.bar;
      crit.textContent = lv.critique;
      verd.textContent = lv.verdict;
      out.setAttribute('data-grade', lv.grade);
    }
    input.addEventListener('input', draw);
    draw();
  }

  /* ==========================================================
     Exhibit 2 — the loop, one step at a time
     ========================================================== */

  var LOOP_STEPS = [
    { n: 'Step 1', t: 'State the goal', d: 'What to make. Not how to make it.',
      narr: 'You describe the outcome and stop. Prescribing the architecture caps the result at your own idea of it.' },
    { n: 'Step 2', t: 'Set a real bar', d: 'An artifact you can point at.',
      narr: 'A reference the agent can actually open and measure. This is the step people skip, and skipping it is why their loops never converge.' },
    { n: 'Step 3', t: 'Decompose', d: 'Smallest separately improvable pieces.',
      narr: 'The lead agent splits the goal so each piece can be improved without waiting on the others. Three small loops beat one big one.' },
    { n: 'Step 4', t: 'Build', d: 'One builder per piece.',
      narr: 'The builder produces a real artifact. Not a plan for an artifact — the thing itself, inspectable.' },
    { n: 'Step 5', t: 'Critique cold', d: 'Fresh context. One gap only.',
      narr: 'A separate agent that never saw the build compares it to the bar and names the single largest gap. Fresh context is what stops it from defending its own earlier choices.' },
    { n: 'Step 6', t: 'Fix one thing', d: 'Then score, then repeat.',
      narr: 'The builder addresses that one gap. Score falls, and the loop runs again — until the gap is inside tolerance or the budget runs out.' }
  ];

  function mountLoopStepper() {
    var root = $('#ex-loop');
    if (!root) return;
    var stage = $('.loop-stage', root);
    var narr = $('.loop-narr', root);
    var scrub = $('input[type="range"]', root);
    var counter = $('[data-slot="count"]', root);

    LOOP_STEPS.forEach(function (s) {
      var node = el('div', 'loop-node');
      node.appendChild(el('div', 'n', s.n));
      node.appendChild(el('div', 't', s.t));
      node.appendChild(el('div', 'd', s.d));
      stage.appendChild(node);
    });
    var nodes = $$('.loop-node', stage);

    function draw() {
      var i = Number(scrub.value);
      nodes.forEach(function (n, k) { n.setAttribute('data-on', k <= i ? '1' : '0'); });
      narr.textContent = LOOP_STEPS[i].narr;
      counter.textContent = LOOP_STEPS[i].t.toLowerCase() + ' · ' + (i + 1) + ' / ' + LOOP_STEPS.length;
    }

    /* clicking a step is a shortcut to scrubbing to it */
    nodes.forEach(function (n, k) {
      n.addEventListener('click', function () { scrub.value = String(k); draw(); });
    });

    scrub.addEventListener('input', draw);
    draw();
  }

  /* ==========================================================
     Artifact renderers
     ========================================================== */

  var MOBILE_TRUNCATE = 125; /* Meta mobile caption cutoff — see ad-creative round 4 */

  function renderAd(a) {
    var box = el('div');
    var v = el('div', 'visual-ph');
    v.appendChild(el('span', 'tag', 'Visual · ' + a.format));
    v.appendChild(document.createTextNode(a.visual));
    box.appendChild(v);
    box.appendChild(el('div', 'ad-headline', a.headline));

    var body = el('div', 'ad-body');
    if (a.body.length > MOBILE_TRUNCATE) {
      body.appendChild(document.createTextNode(a.body.slice(0, MOBILE_TRUNCATE)));
      var more = el('span');
      more.style.color = 'var(--ink-faint)';
      more.textContent = '… more';
      body.appendChild(more);
      var hidden = el('span');
      hidden.style.color = 'var(--ink-faint)';
      hidden.style.opacity = '0.55';
      hidden.textContent = a.body.slice(MOBILE_TRUNCATE);
      body.appendChild(hidden);
    } else {
      body.textContent = a.body;
    }
    box.appendChild(body);
    box.appendChild(el('span', 'ad-cta', a.cta));

    var cc = el('div', 'charcount');
    cc.textContent = a.body.length + ' chars · mobile truncates at ~' + MOBILE_TRUNCATE +
      (a.body.length > MOBILE_TRUNCATE ? ' — greyed text is below the fold for 61% of traffic' : ' — full caption visible');
    box.appendChild(cc);
    return box;
  }

  function renderHero(a) {
    var box = el('div');
    if (a.eyebrow) box.appendChild(el('span', 'hero-eyebrow', a.eyebrow));
    box.appendChild(el('div', 'hero-headline', a.headline));
    box.appendChild(el('div', 'hero-sub', a.subhead));

    var ctas = el('div', 'hero-ctas');
    ctas.appendChild(el('span', 'ad-cta', a.cta));
    if (a.secondaryCta) {
      var s = el('span', 'ad-cta', a.secondaryCta);
      s.style.background = 'transparent';
      ctas.appendChild(s);
    }
    box.appendChild(ctas);

    if (a.proof && a.proof.length) {
      var pr = el('div', 'hero-proof');
      a.proof.forEach(function (p) { pr.appendChild(el('span', 'chip', p)); });
      box.appendChild(pr);
    }
    if (a.layoutNote) {
      var v = el('div', 'visual-ph');
      v.style.marginTop = '1.1rem';
      v.style.marginBottom = '0';
      v.appendChild(el('span', 'tag', 'Layout'));
      v.appendChild(document.createTextNode(a.layoutNote));
      box.appendChild(v);
    }
    return box;
  }

  function renderSeo(a) {
    var box = el('div');
    box.appendChild(el('div', 'seo-h1', a.h1));
    box.appendChild(el('div', 'seo-intro', a.intro));

    if (a.facets && a.facets.length) {
      var f = el('div', 'seo-facets');
      a.facets.forEach(function (x) { f.appendChild(el('span', 'chip', x)); });
      box.appendChild(f);
    }
    (a.sections || []).forEach(function (s) {
      var sec = el('div', 'seo-section');
      sec.appendChild(el('h5', null, s.h2));
      sec.appendChild(el('p', null, s.copy));
      box.appendChild(sec);
    });
    if (a.internalLinks && a.internalLinks.length) {
      var L = el('div', 'seo-links');
      a.internalLinks.forEach(function (t) {
        var link = el('a', null, t);
        link.href = '#';
        link.addEventListener('click', function (e) { e.preventDefault(); });
        L.appendChild(link);
      });
      box.appendChild(L);
    }
    if (a.schemaNote) box.appendChild(el('div', 'seo-schema', a.schemaNote));
    return box;
  }

  var RENDERERS = { ad: renderAd, hero: renderHero, seo: renderSeo };

  var CHROME = {
    ad:   'meta ads manager · preview',
    hero: 'harborline.com/foulweather-shell',
    seo:  'harborline.com/collections/mens-rain-jackets'
  };

  /* ==========================================================
     The player
     ========================================================== */

  function Player(root) {
    this.root = root;
    this.demos = window.GAUNTLET_DEMOS || {};
    this.order = ['ad-creative', 'landing-hero', 'seo-category'].filter(function (s) {
      return !!this.demos[s];
    }, this);
    this.slug = this.order[0];
    this.reset();
    this.buildChrome();
    this.draw();
  }

  Player.prototype.reset = function () {
    this.i = 0;
    this.phase = 'ask';
    this.picks = [];
  };

  Player.prototype.demo = function () { return this.demos[this.slug]; };
  Player.prototype.round = function () { return this.demo().rounds[this.i]; };

  Player.prototype.buildChrome = function () {
    var self = this;
    var tabs = $('.seg', this.root);
    this.order.forEach(function (slug) {
      var b = el('button', null, self.demos[slug].title);
      b.setAttribute('role', 'tab');
      b.setAttribute('data-slug', slug);
      b.addEventListener('click', function () {
        if (self.slug === slug) return;
        self.slug = slug;
        self.reset();
        self.draw();
      });
      tabs.appendChild(b);
    });
    this.tabs = $$('button', tabs);
    this.stage = $('[data-slot="stage"]', this.root);
  };

  Player.prototype.draw = function () {
    var self = this;
    var d = this.demo();

    this.tabs.forEach(function (t) {
      t.setAttribute('aria-selected', t.getAttribute('data-slug') === self.slug ? 'true' : 'false');
    });

    var s = this.stage;
    s.innerHTML = '';

    /* --- goal card --- */
    var g = el('div', 'goalcard');
    var dl = el('dl');
    dl.appendChild(el('dt', null, 'Goal'));
    dl.appendChild(el('dd', null, d.goal));
    dl.appendChild(el('dt', null, 'The bar'));
    var bd = el('dd');
    bd.appendChild(document.createTextNode(d.bar));
    var ul = el('ul');
    d.barDetail.forEach(function (x) { ul.appendChild(el('li', null, x)); });
    bd.appendChild(ul);
    dl.appendChild(bd);
    g.appendChild(dl);
    s.appendChild(g);

    if (this.phase === 'done') { this.drawDone(s); return; }

    s.appendChild(this.buildMeter());

    /* --- artifact --- */
    var r = this.round();
    var art = el('div', 'artifact');
    var chrome = el('div', 'artifact-chrome');
    chrome.appendChild(el('span', 'dot'));
    chrome.appendChild(el('span', 'dot'));
    chrome.appendChild(el('span', null, CHROME[r.artifact.kind] || ''));
    var badge = el('span', null, 'round ' + r.n + ' / ' + d.rounds.length);
    badge.style.marginLeft = 'auto';
    chrome.appendChild(badge);
    art.appendChild(chrome);

    var inner = el('div', 'artifact-inner');
    inner.appendChild((RENDERERS[r.artifact.kind] || renderAd)(r.artifact));
    art.appendChild(inner);
    s.appendChild(art);

    /* --- quiz --- */
    s.appendChild(this.buildQuiz(r));
  };

  Player.prototype.buildMeter = function () {
    var d = this.demo(), self = this;
    var max = Math.max.apply(null, d.rounds.map(function (r) { return r.gapScore; }));
    var wrap = el('div', 'meter');
    var track = el('div', 'meter-track');

    var pending = [];
    d.rounds.forEach(function (r, k) {
      var b = el('div', 'meter-bar');
      var revealed = k < self.i || (k === self.i && self.phase !== 'ask');
      /* start collapsed, then grow on the next frame so the declared
         transition on .meter-bar actually fires (M4) */
      b.style.height = '3px';
      if (revealed) pending.push([b, Math.max(6, (r.gapScore / max) * 46) + 'px']);
      b.setAttribute('data-state', k < self.i ? 'done' : (k === self.i ? 'now' : 'todo'));
      b.title = revealed ? 'Round ' + r.n + ' — gap ' + r.gapScore : 'Round ' + r.n + ' — not reached';
      track.appendChild(b);
    });
    wrap.appendChild(track);

    if (pending.length && window.requestAnimationFrame) {
      window.requestAnimationFrame(function () {
        pending.forEach(function (p) { p[0].style.height = p[1]; });
      });
    } else {
      pending.forEach(function (p) { p[0].style.height = p[1]; });
    }

    var lab = el('div', 'meter-labels');
    lab.appendChild(el('span', null, 'gap score'));
    var cur = this.round();
    lab.appendChild(el('span', null,
      this.phase === 'ask' ? 'round ' + cur.n + ' — score hidden until you commit'
                           : 'round ' + cur.n + ' — gap ' + cur.gapScore));
    wrap.appendChild(lab);
    return wrap;
  };

  Player.prototype.buildQuiz = function (r) {
    var self = this;
    var q = el('div', 'quiz');

    if (this.phase === 'reveal') {
      var picked = this.picks[this.i];
      var right = r.choices.filter(function (c) { return c.correct; })[0];
      var ok = picked === right.id;
      var vb = el('div', 'verdict-banner');
      vb.setAttribute('data-v', ok ? 'right' : 'wrong');
      vb.innerHTML = ok
        ? '<b>That was the largest gap.</b> All four were real flaws — you ranked them the way the critic did.'
        : '<b>Real flaw, but not the largest.</b> The one you picked was genuine; it was just smaller. Ranking is the skill.';
      q.appendChild(vb);
    } else {
      q.appendChild(el('div', 'quiz-prompt', 'Which is the single largest gap against the bar?'));
      q.appendChild(el('div', 'quiz-hint',
        'All four are real flaws. The critic names only one — the one whose absence caps everything downstream.'));
    }

    r.choices.forEach(function (c, k) {
      var b = el('button', 'choice');
      b.setAttribute('type', 'button');
      /* Amendment 2: state is never carried by hue alone — the key slot
         swaps to a glyph on reveal so it survives greyscale. */
      var key = String.fromCharCode(65 + k);
      if (self.phase === 'reveal') {
        key = c.correct ? '✓ largest'
            : (self.picks[self.i] === c.id ? '✕ yours' : '– smaller');
      }
      var head = el('span');
      head.appendChild(el('span', 'k', key));
      head.appendChild(document.createTextNode(c.text));
      b.appendChild(head);
      b.appendChild(el('span', 'why', c.why));

      if (self.phase === 'reveal') {
        b.disabled = true;
        b.setAttribute('data-revealed', '1');
        if (c.correct) b.setAttribute('data-verdict', 'right');
        else if (self.picks[self.i] === c.id) b.setAttribute('data-verdict', 'wrong');
        else b.setAttribute('data-verdict', 'muted');
      } else {
        b.addEventListener('click', function () {
          self.picks[self.i] = c.id;
          self.phase = 'reveal';
          self.draw();
          var node = $('.critic-note', self.stage);
          softScroll(node, 'center');
        });
      }
      q.appendChild(b);
    });

    if (this.phase === 'reveal') {
      var note = el('div', 'critic-note');
      note.appendChild(el('span', 'lbl', 'What the critic actually wrote'));
      note.appendChild(el('div', 'txt', r.critique.text));
      var ev = el('div', 'ev');
      ev.innerHTML = '<b>' + esc(r.critique.metric) + '</b> — ' + esc(r.critique.evidence);
      note.appendChild(ev);
      q.appendChild(note);

      var adv = el('div', 'advance');
      adv.appendChild(el('span', 'fixnote', r.fixNote));
      var last = this.i === this.demo().rounds.length - 1;
      var btn = el('button', 'btn', last ? 'See the result' : 'Run round ' + (r.n + 1) + ' →');
      btn.addEventListener('click', function () {
        if (last) { self.phase = 'done'; }
        else { self.i++; self.phase = 'ask'; }
        self.draw();
        softScroll(self.root, 'start');
      });
      adv.appendChild(btn);
      q.appendChild(adv);
    }
    return q;
  };

  Player.prototype.drawDone = function (s) {
    var self = this, d = this.demo();
    var first = d.rounds[0].gapScore, last = d.rounds[d.rounds.length - 1].gapScore;
    var correct = d.rounds.filter(function (r, k) {
      var right = r.choices.filter(function (c) { return c.correct; })[0];
      return self.picks[k] === right.id;
    }).length;

    var card = el('div', 'done-card');
    card.appendChild(el('div', 'big', first + ' → ' + last));
    card.appendChild(el('div', 'sub', 'gap score across ' + d.rounds.length + ' rounds, one fix each'));

    var line = el('div', 'score-line');
    line.innerHTML = 'You matched the critic on <b>' + correct + ' of ' + d.rounds.length + '</b> rounds. ' +
      (correct >= 4
        ? 'You are ranking gaps, not just spotting them — that is the part that makes a loop converge.'
        : 'Worth noticing: the flaws are easy to see and hard to order. Ordering them is the whole job.');
    card.appendChild(line);

    var again = el('button', 'btn btn--ghost', 'Run it again');
    again.style.marginTop = '1.2rem';
    again.addEventListener('click', function () { self.reset(); self.draw(); });
    card.appendChild(again);

    s.appendChild(card);
  };

  /* ==========================================================
     Deep links from the prose into a specific round
     ========================================================== */

  Player.prototype.jumpTo = function (slug, roundN) {
    if (!this.demos[slug]) return;
    this.slug = slug;
    this.reset();
    this.i = Math.max(0, Math.min(roundN - 1, this.demos[slug].rounds.length - 1));
    /* everything before the target is treated as already run */
    for (var k = 0; k < this.i; k++) {
      var right = this.demos[slug].rounds[k].choices.filter(function (c) { return c.correct; })[0];
      this.picks[k] = right.id;
    }
    this.draw();
    softScroll(this.root, 'start');
  };

  function mountJumps(player) {
    $$('[data-jump]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var parts = btn.getAttribute('data-jump').split(':');
        player.jumpTo(parts[0], Number(parts[1]));
      });
    });
  }

  /* ==========================================================
     Rule flippers — each rule shows the failure it prevents
     ========================================================== */

  function mountRules() {
    $$('[data-rule]').forEach(function (li) {
      var on = $('[data-face="on"]', li);
      var off = $('[data-face="off"]', li);
      if (!on || !off) return;

      var btn = el('button', 'rule-flip', 'Without this rule →');
      btn.type = 'button';
      btn.setAttribute('aria-expanded', 'false');
      var flipped = false;

      btn.addEventListener('click', function () {
        flipped = !flipped;
        on.hidden = flipped;
        off.hidden = !flipped;
        li.setAttribute('data-flipped', flipped ? '1' : '0');
        btn.textContent = flipped ? '← With it' : 'Without this rule →';
        btn.setAttribute('aria-expanded', flipped ? 'true' : 'false');
      });
      li.appendChild(btn);
    });
  }

  /* ==========================================================
     Self-loop section (populated after the app critiques itself)
     ========================================================== */

  function mountSelf() {
    var root = $('#self-loop');
    if (!root) return;
    var data = window.GAUNTLET_SELF;
    if (!data || !data.rounds || !data.rounds.length) { root.style.display = 'none'; return; }

    var body = $('[data-slot="self-body"]', root);
    var rounds = data.rounds;
    var max = Math.max.apply(null, rounds.map(function (r) { return r.gapScore; }));

    /* gap track — one segment per round, all visible at once */
    var track = el('div', 'self-track');
    var segs = rounds.map(function (r) {
      var seg = el('div', 'self-seg');
      var fill = el('div', 'self-fill');
      fill.style.height = ((r.gapScore / max) * 100) + '%';
      seg.appendChild(fill);
      seg.appendChild(el('span', 'self-num', String(r.gapScore)));
      track.appendChild(seg);
      return seg;
    });
    body.appendChild(track);

    var scrub = el('input');
    scrub.type = 'range';
    scrub.min = '0';
    scrub.max = String(rounds.length - 1);
    scrub.step = '1';
    scrub.value = '0';
    scrub.setAttribute('aria-label', 'Scrub through the rounds of this page’s own loop');

    var row = el('div', 'slider-row');
    row.style.marginTop = '0.9rem';
    row.appendChild(el('span', 'ends', 'round 1'));
    row.appendChild(scrub);
    row.appendChild(el('span', 'ends', 'round ' + rounds.length));
    body.appendChild(row);

    var panel = el('div', 'self-panel');
    var pHead = el('div', 'self-head');
    var pCrit = el('div', 'self-crit');
    var pFix = el('div', 'self-fix');
    panel.appendChild(pHead);
    panel.appendChild(pCrit);
    panel.appendChild(pFix);
    body.appendChild(panel);

    function draw() {
      var i = Number(scrub.value), r = rounds[i];
      segs.forEach(function (s, k) { s.setAttribute('data-on', k <= i ? '1' : '0'); });
      pHead.textContent = 'Round ' + r.n + ' · gap ' + r.gapScore +
        (i === rounds.length - 1 ? ' · stop condition met' : '');
      pCrit.textContent = r.critique;
      pFix.textContent = r.fix ? '→ ' + r.fix : '';
    }
    segs.forEach(function (s, k) {
      s.addEventListener('click', function () { scrub.value = String(k); draw(); });
    });
    scrub.addEventListener('input', draw);
    draw();
  }

  /* ==========================================================
     Theme toggle
     ========================================================== */

  function mountTheme() {
    var btn = $('[data-act="theme"]');
    if (!btn) return;
    var saved = null;
    try { saved = localStorage.getItem('gl-theme'); } catch (e) {}
    if (saved) document.documentElement.setAttribute('data-theme', saved);

    btn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme');
      var isDark = cur ? cur === 'dark'
        : !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
      var next = isDark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('gl-theme', next); } catch (e) {}
    });
  }

  /* ========================================================== */

  document.addEventListener('DOMContentLoaded', function () {
    mountBarSlider();
    mountLoopStepper();
    mountTheme();
    mountSelf();
    mountRules();
    var p = $('#player');
    if (p && window.GAUNTLET_DEMOS) mountJumps(new Player(p));
  });
})();
