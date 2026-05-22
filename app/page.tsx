// Drop-in replacement for app/page.tsx in the janne-landing repo.
// This is a Server Component — no "use client" needed (only CSS animations).

const FN = {
  bg: '#f4f1ea',
  paper: '#fbf8f1',
  ink: '#1a1815',
  inkSoft: '#54504a',
  sage: '#6b7a5a',
  sageDeep: '#3f4a35',
  terra: '#b87544',
  rule: 'rgba(26,24,21,0.14)',
  serif: '"Instrument Serif", "Times New Roman", serif',
  sans: '"Geist", system-ui, sans-serif',
  mono: '"Geist Mono", ui-monospace, monospace',
};

const styles = `
  .fn-root{background:${FN.bg};color:${FN.ink};font-family:${FN.sans};font-size:15px;line-height:1.5;letter-spacing:-0.005em;width:100%;min-height:100vh;overflow-x:hidden}
  .fn-root *{box-sizing:border-box}

  /* nav */
  .fn-nav{display:flex;align-items:center;justify-content:space-between;padding:28px 64px;border-bottom:1px solid ${FN.rule}}
  .fn-nav-brand{font-family:${FN.serif};font-size:22px;display:flex;align-items:center;gap:8px}
  .fn-nav-brand .leaf{display:inline-block;color:${FN.sage};font-size:18px;transform:translateY(-1px)}
  .fn-nav-links{display:flex;gap:32px;align-items:center}
  .fn-nav-links a{font-family:${FN.mono};font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:${FN.ink};text-decoration:none;position:relative;padding-bottom:2px}
  .fn-nav-links a::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:${FN.ink};transform:scaleX(0);transform-origin:left;transition:transform .35s ease}
  .fn-nav-links a:hover::after{transform:scaleX(1)}
  .fn-nav-cta{font-family:${FN.serif};font-size:17px;font-style:italic;color:${FN.ink};text-decoration:none;border-bottom:1px solid ${FN.ink};padding-bottom:2px}

  /* hero */
  .fn-hero{padding:80px 64px 100px;position:relative}
  .fn-hero-grid{display:grid;grid-template-columns:1fr 380px;gap:60px;align-items:stretch}
  .fn-hero-title{font-family:${FN.serif};font-size:116px;line-height:0.96;letter-spacing:-0.035em;margin:0;color:${FN.ink};font-weight:400}
  .fn-hero-title .swap{display:inline-block;position:relative;color:${FN.terra};font-style:italic;min-width:1ch}
  .fn-hero-title .swap-rotor{display:inline-grid;grid-template-rows:1fr;height:1em;overflow:hidden;vertical-align:baseline}
  .fn-hero-title .swap-rotor>span{grid-row:1;grid-column:1;opacity:0;transform:translateY(100%);animation:fn-rotor 12s infinite;animation-fill-mode:both}
  .fn-hero-title .swap-rotor>span:nth-child(2){animation-delay:3s}
  .fn-hero-title .swap-rotor>span:nth-child(3){animation-delay:6s}
  .fn-hero-title .swap-rotor>span:nth-child(4){animation-delay:9s}
  @keyframes fn-rotor{
    0%{transform:translateY(100%);opacity:0}
    4%,22%{transform:translateY(0);opacity:1}
    28%,100%{transform:translateY(-100%);opacity:0}
  }
  .fn-hero-sub{font-family:${FN.serif};font-size:26px;line-height:1.32;font-style:italic;color:${FN.inkSoft};margin:36px 0 0;max-width:560px;font-weight:400}
  .fn-hero-body{margin-top:28px;max-width:480px;font-size:16px;line-height:1.55;color:${FN.ink}}
  .fn-hero-cta{display:inline-flex;align-items:center;gap:14px;margin-top:36px;padding:16px 28px;background:${FN.ink};color:${FN.paper};text-decoration:none;border-radius:999px;font-family:${FN.sans};font-size:14px;font-weight:500;letter-spacing:-0.005em;transition:transform .2s,background .2s}
  .fn-hero-cta:hover{transform:translateY(-2px);background:${FN.terra}}
  .fn-hero-cta .arrow{font-family:${FN.serif};font-size:20px}

  .fn-hero-photo{align-self:stretch;display:flex;flex-direction:column}
  .fn-hero-photo img{width:100%;flex:1;min-height:480px;object-fit:cover;border-radius:2px;display:block;filter:saturate(.88) sepia(.08) brightness(1.02);object-position:55% 50%}

  /* manifesto */
  .fn-manifesto{padding:120px 64px;background:${FN.paper};border-top:1px solid ${FN.rule};border-bottom:1px solid ${FN.rule}}
  .fn-manifesto-grid{display:grid;grid-template-columns:1.05fr 1fr;gap:80px;align-items:start}
  .fn-manifesto-kicker{font-family:${FN.serif};font-style:italic;font-size:22px;color:${FN.sageDeep};margin-bottom:24px;font-weight:400}
  .fn-manifesto h2{font-family:${FN.serif};font-size:64px;line-height:1.08;letter-spacing:-0.02em;margin:0 0 20px;color:${FN.ink};font-weight:400;max-width:580px}
  .fn-manifesto h2 em{font-style:italic;color:${FN.terra}}
  .fn-manifesto-foot{font-family:${FN.sans};font-size:16px;line-height:1.55;color:${FN.inkSoft};max-width:520px;margin:0}
  .fn-manifesto-body{margin-top:18px}
  .fn-manifesto-body p{font-family:${FN.sans};font-size:18px;line-height:1.6;color:${FN.ink};margin:0 0 16px;max-width:520px;letter-spacing:-0.005em}
  .fn-manifesto-pull{font-family:${FN.serif};font-style:italic;font-size:30px;line-height:1.32;color:${FN.sageDeep};border-left:2.5px solid ${FN.sage};padding:8px 0 8px 28px;margin:36px 0 0;font-weight:400;letter-spacing:-0.01em;max-width:540px}

  /* steps */
  .fn-steps{padding:120px 64px}
  .fn-steps-head{margin-bottom:64px}
  .fn-steps-head h2{font-family:${FN.serif};font-size:80px;line-height:1;letter-spacing:-0.025em;margin:0;max-width:880px;font-weight:400}
  .fn-steps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border-top:1px solid ${FN.rule}}
  .fn-step{padding:36px 28px 36px 0;border-right:1px solid ${FN.rule}}
  .fn-step:last-child{border-right:0;padding-right:0}
  .fn-step:not(:first-child){padding-left:28px}
  .fn-step-num{font-family:${FN.serif};font-size:96px;line-height:1;color:${FN.sage};margin-bottom:24px;letter-spacing:-0.04em;font-weight:400}
  .fn-step-kicker{font-family:${FN.mono};font-size:10.5px;color:${FN.inkSoft};letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px}
  .fn-step-title{font-family:${FN.serif};font-size:32px;line-height:1.15;letter-spacing:-0.015em;margin:0 0 14px;color:${FN.ink};font-weight:400}
  .fn-step-body{font-size:15px;line-height:1.6;color:${FN.inkSoft}}

  /* guarantee */
  .fn-guarantee{padding:140px 64px;text-align:center;background:${FN.bg}}
  .fn-guarantee .stamp{display:inline-block;border:2px solid ${FN.terra};color:${FN.terra};padding:10px 26px 12px;border-radius:6px;font-family:${FN.serif};font-style:italic;font-size:24px;font-weight:400;transform:rotate(-2deg);margin-bottom:48px}
  .fn-guarantee p{font-family:${FN.serif};font-size:64px;line-height:1.12;letter-spacing:-0.022em;margin:0 auto;max-width:1080px;color:${FN.ink};font-weight:400}
  .fn-guarantee p em{font-style:italic;color:${FN.sageDeep}}
  .fn-guarantee .signoff{margin-top:36px;font-family:${FN.serif};font-style:italic;font-size:22px;color:${FN.sageDeep};font-weight:400}

  /* testimonials */
  .fn-test{padding:120px 64px}
  .fn-test-head{margin-bottom:64px}
  .fn-test-head h2{font-family:${FN.serif};font-size:72px;line-height:1;letter-spacing:-0.025em;margin:0;font-weight:400}
  .fn-test-grid{display:grid;grid-template-columns:1.1fr 1fr 1fr;gap:48px}
  .fn-quote{padding-top:36px;border-top:1px solid ${FN.rule};position:relative}
  .fn-quote .mark{position:absolute;top:-22px;left:-4px;font-family:${FN.serif};font-size:80px;line-height:1;color:${FN.terra}}
  .fn-quote-text{font-family:${FN.serif};font-size:24px;line-height:1.32;color:${FN.ink};letter-spacing:-0.01em;margin:0;font-weight:400}
  .fn-quote-by{margin-top:24px;font-family:${FN.mono};font-size:10.5px;color:${FN.inkSoft};letter-spacing:0.1em;text-transform:uppercase}

  /* about */
  .fn-about{padding:120px 64px;background:${FN.paper};border-top:1px solid ${FN.rule};border-bottom:1px solid ${FN.rule}}
  .fn-about-grid{display:grid;grid-template-columns:480px 1fr;gap:80px;align-items:start}
  .fn-about-photo{position:relative}
  .fn-about-photo img{width:100%;height:560px;object-fit:cover;display:block;filter:saturate(.92) sepia(.04) brightness(1.01);object-position:50% 22%}
  .fn-about-tagline{margin-top:28px;display:flex;align-items:baseline;justify-content:center;gap:14px;font-family:${FN.serif};font-style:italic;font-size:24px;color:${FN.sageDeep};letter-spacing:-0.005em}
  .fn-about-tagline .dash{font-style:normal;color:${FN.sage};opacity:.7}
  .fn-about-tagline .swap-rotor{display:inline-grid;grid-template-rows:1fr;height:1.3em;overflow:hidden;vertical-align:baseline;text-align:center}
  .fn-about-tagline .swap-rotor>span{grid-row:1;grid-column:1;justify-self:center;opacity:0;transform:translateY(100%);animation:fn-rotor 16s infinite;animation-fill-mode:both;white-space:nowrap}
  .fn-about-tagline .swap-rotor>span:nth-child(2){animation-delay:4s}
  .fn-about-tagline .swap-rotor>span:nth-child(3){animation-delay:8s}
  .fn-about-tagline .swap-rotor>span:nth-child(4){animation-delay:12s}
  .fn-about h2{font-family:${FN.serif};font-size:88px;line-height:0.95;letter-spacing:-0.03em;margin:0 0 36px;color:${FN.ink};font-weight:400}
  .fn-about h2 em{font-style:italic;color:${FN.terra}}
  .fn-about-body{font-family:${FN.serif};font-size:22px;line-height:1.42;color:${FN.ink};margin-bottom:24px;max-width:560px;font-weight:400}
  .fn-about-body.small{font-size:17px;color:${FN.inkSoft};font-family:${FN.sans};line-height:1.6}

  /* contact */
  .fn-contact{padding:160px 64px 140px;text-align:center;position:relative}
  .fn-contact h2{font-family:${FN.serif};font-size:220px;line-height:0.85;letter-spacing:-0.045em;margin:0 0 36px;color:${FN.ink};font-weight:400}
  .fn-contact h2 em{font-style:italic;color:${FN.sage}}
  .fn-contact-sub{font-family:${FN.serif};font-size:28px;font-style:italic;color:${FN.inkSoft};max-width:620px;margin:0 auto 48px;line-height:1.4;font-weight:400}
  .fn-contact-cta{display:inline-flex;align-items:center;gap:18px;padding:22px 36px;background:${FN.ink};color:${FN.paper};text-decoration:none;border-radius:999px;font-family:${FN.sans};font-size:16px;font-weight:500;transition:transform .2s,background .2s}
  .fn-contact-cta:hover{transform:translateY(-3px);background:${FN.terra}}
  .fn-contact-cta .arrow{font-family:${FN.serif};font-size:24px}
  .fn-contact-meta{margin-top:36px;display:flex;justify-content:center;gap:24px;font-family:${FN.mono};font-size:10.5px;color:${FN.inkSoft};letter-spacing:0.1em;text-transform:uppercase}
  .fn-contact-meta span{display:inline-flex;align-items:center;gap:8px}
  .fn-contact-meta .dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:${FN.sage}}

  /* footer */
  .fn-footer{padding:48px 64px;border-top:1px solid ${FN.rule};display:flex;justify-content:space-between;align-items:center;font-family:${FN.mono};font-size:10.5px;color:${FN.inkSoft};letter-spacing:0.08em;text-transform:uppercase}
  .fn-footer a{color:${FN.ink};text-decoration:none;border-bottom:1px solid ${FN.rule}}

  /* responsive */
  @media (max-width: 900px) {
    .fn-nav{padding:20px 24px}
    .fn-nav-links{gap:18px}
    .fn-hero{padding:48px 24px 64px}
    .fn-hero-grid{grid-template-columns:1fr;gap:40px}
    .fn-hero-title{font-size:64px}
    .fn-hero-sub{font-size:20px}
    .fn-hero-photo img{min-height:360px}
    .fn-manifesto{padding:72px 24px}
    .fn-manifesto-grid{grid-template-columns:1fr;gap:32px}
    .fn-manifesto h2{font-size:38px}
    .fn-manifesto-pull{font-size:22px}
    .fn-steps{padding:72px 24px}
    .fn-steps-head h2{font-size:48px}
    .fn-steps-grid{grid-template-columns:1fr;border-top:0}
    .fn-step{border-right:0;border-top:1px solid ${FN.rule};padding:32px 0 !important}
    .fn-step-num{font-size:64px;margin-bottom:16px}
    .fn-step-title{font-size:24px}
    .fn-guarantee{padding:80px 24px}
    .fn-guarantee p{font-size:36px}
    .fn-test{padding:72px 24px}
    .fn-test-head h2{font-size:48px}
    .fn-test-grid{grid-template-columns:1fr;gap:32px}
    .fn-quote-text{font-size:20px}
    .fn-about{padding:72px 24px}
    .fn-about-grid{grid-template-columns:1fr;gap:40px}
    .fn-about h2{font-size:56px}
    .fn-about-body{font-size:18px}
    .fn-about-photo img{height:420px}
    .fn-contact{padding:96px 24px 72px}
    .fn-contact h2{font-size:96px}
    .fn-contact-sub{font-size:20px}
    .fn-footer{padding:32px 24px;flex-direction:column;gap:16px;text-align:center}
  }
`;

export const metadata = {
  title: 'Janne — More of the work that actually matters.',
  description:
    "I help small business founders in wellness, movement, and sustainability get their time back. Less admin. More of the work you built this for.",
};

export default function Page() {
  return (
    <div className="fn-root">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* nav */}
      <nav className="fn-nav">
        <div className="fn-nav-brand">
          <span className="leaf">❋</span>
          <span>Janne</span>
        </div>
        <div className="fn-nav-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="fn-nav-cta">Book a call →</a>
      </nav>

      {/* hero */}
      <section className="fn-hero">
        <div className="fn-hero-grid">
          <div>
            <h1 className="fn-hero-title">
              Take back<br />your{' '}
              <span className="swap">
                <span className="swap-rotor">
                  <span>time.</span>
                  <span>evenings.</span>
                  <span>Sundays.</span>
                  <span>headspace.</span>
                </span>
              </span>
            </h1>
            <p className="fn-hero-sub">
              Imagine taking a week off. Your business still runs.
            </p>
            <p className="fn-hero-body">
              I help small business founders in wellness, movement, and sustainability take back control of their operations — so they can focus on the work they actually built this for.
            </p>
            <a href="#contact" className="fn-hero-cta">
              Book a free call <span className="arrow">→</span>
            </a>
          </div>

          <div className="fn-hero-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/janne2.jpg" alt="Janne working by the pool" />
          </div>
        </div>
      </section>

      {/* manifesto */}
      <section className="fn-manifesto">
        <div className="fn-manifesto-grid">
          <div>
            <div className="fn-manifesto-kicker">— the honest part —</div>
            <h2>Your business only works because <em>you&apos;re</em> personally holding it together.</h2>
            <p className="fn-manifesto-foot">If you step away, things fall apart — and you know it.</p>
          </div>
          <div className="fn-manifesto-body">
            <p>Your days get eaten by the operational work that shouldn&apos;t need you — chasing things, managing tools, keeping all the moving parts in line.</p>
            <p>Meanwhile, the work you actually want to be doing waits.</p>
            <blockquote className="fn-manifesto-pull">
              &ldquo;I&apos;m tired of being the bottleneck in my own business.&rdquo; — every founder I&apos;ve ever worked with.
            </blockquote>
          </div>
        </div>
      </section>

      {/* steps */}
      <section className="fn-steps" id="services">
        <div className="fn-steps-head">
          <h2>What changes,<br />in three steps.</h2>
        </div>
        <div className="fn-steps-grid">
          <div className="fn-step">
            <div className="fn-step-num">01</div>
            <div className="fn-step-kicker">Map what&apos;s broken</div>
            <h3 className="fn-step-title">I come in, figure out what&apos;s eating your time.</h3>
            <p className="fn-step-body">I run the day-to-day while we figure out what to fix. No long discovery decks, no hour-long status meetings — I&apos;m in your inbox by the end of week one, already pulling on threads and quietly clearing things off your plate.</p>
          </div>
          <div className="fn-step">
            <div className="fn-step-num">02</div>
            <div className="fn-step-kicker">Build what fixes it</div>
            <h3 className="fn-step-title">We build the automations and systems that take it off your plate.</h3>
            <p className="fn-step-body">Workflows, tools, processes — whatever is creating the most friction. We build the smallest thing that ends the chaos, then iterate.</p>
          </div>
          <div className="fn-step">
            <div className="fn-step-num">03</div>
            <div className="fn-step-kicker">Systems in place</div>
            <h3 className="fn-step-title">You have a set of systems that actually work — and you understand how they run.</h3>
            <p className="fn-step-body">From here we keep building, or you take it forward. Your call. Nothing locked, nothing proprietary, nothing only I can touch.</p>
          </div>
        </div>
      </section>

      {/* guarantee */}
      <section className="fn-guarantee">
        <div className="stamp">A real promise ✶</div>
        <p>Your evenings back in <em>1 month</em> — or get your money back.</p>
        <div className="signoff">— really. one month.</div>
      </section>

      {/* testimonials */}
      <section className="fn-test">
        <div className="fn-test-head">
          <h2>What people say.</h2>
        </div>
        <div className="fn-test-grid">
          <figure className="fn-quote">
            <div className="mark">&ldquo;</div>
            <p className="fn-quote-text">Janne is one of the most caring people you&apos;ll find. She guides you through the process — not just showing you what to do, but helping you understand how and why it works. I strongly recommend her.</p>
            <figcaption className="fn-quote-by">— Fernando</figcaption>
          </figure>
          <figure className="fn-quote">
            <div className="mark">&ldquo;</div>
            <p className="fn-quote-text">What Janne puts together is well-structured and accessible for everyone. You feel at ease immediately. Because of the work we did together, I kept going — and I&apos;m even inspired to take it further myself.</p>
            <figcaption className="fn-quote-by">— Lisa</figcaption>
          </figure>
          <figure className="fn-quote">
            <div className="mark">&ldquo;</div>
            <p className="fn-quote-text">The best thing I could have done for myself — what a fantastic experience. Janne put this together really well. I barely dared to do it at first. By the end I was completely free. What a liberation.</p>
            <figcaption className="fn-quote-by">— Jess Witkamp</figcaption>
          </figure>
        </div>
      </section>

      {/* about */}
      <section className="fn-about" id="about">
        <div className="fn-about-grid">
          <div className="fn-about-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/janne.jpg" alt="Janne" />
            <div className="fn-about-tagline">
              <span className="dash">—</span>
              <span className="swap-rotor">
                <span>operations manager</span>
                <span>AI automator</span>
                <span>executive assistant</span>
                <span>project manager</span>
              </span>
              <span className="dash">—</span>
            </div>
          </div>
          <div>
            <h2>Hi, I&apos;m <em>Janne</em>.</h2>
            <p className="fn-about-body">
              I step into your business, look at how your operations actually work, and build the systems that make the chaos disappear — so you can focus on what you actually built this for.
            </p>
            <p className="fn-about-body">
              I only work with businesses I&apos;m genuinely behind. If your work helps people or the planet, we&apos;re probably a good fit.
            </p>
            <p className="fn-about-body small">
              (I also get unreasonably excited about finding a smarter way to do something that used to take three hours — must be the Dutchy inside.)
            </p>
            <p className="fn-about-body small">
              Based between Europe and Southeast Asia. Fully remote.
            </p>
          </div>
        </div>
      </section>

      {/* contact */}
      <section className="fn-contact" id="contact">
        <h2>Let&apos;s <em>talk</em>.</h2>
        <p className="fn-contact-sub">Free 30-minute call. We look at what&apos;s eating your time and whether I can fix it.</p>
        <a
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Me4I9T7NBe9xr8snXg2RgEj5tbbXRpPhKxMD7ztKvSgZVSUD6E2kaH8CWZFDnYOEAc2Bc-TiQ"
          className="fn-contact-cta"
        >
          Schedule a free call <span className="arrow">→</span>
        </a>
        <div className="fn-contact-meta">
          <span><span className="dot"></span>30 minutes</span>
          <span><span className="dot"></span>Free</span>
          <span><span className="dot"></span>No pitch</span>
        </div>
      </section>

      {/* footer */}
      <footer className="fn-footer">
        <div>❋ &nbsp;Janne &nbsp;·&nbsp; © 2026</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="https://www.linkedin.com/in/janne-t-64698013b">LinkedIn</a>
          <a href="mailto:jmtiktak@gmail.com">jmtiktak@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}
