import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { CheckIcon } from '../components/icons.jsx';

const CHECKLIST = [
  { b: 'Proven cross-border funding expertise', s: 'Structured capital raising across African markets and beyond.' },
  { b: 'Deep network of aligned investors & grant makers', s: 'A curated, verified network curated around fit, not volume.' },
  { b: 'End-to-end support', s: 'From diligence and data rooms to post-investment reporting.' },
  { b: 'Grants and capital secured at every growth stage', s: 'Pre-seed, seed, and scaling — the right instrument for the right moment.' },
];

export default function About() {
  usePageMeta(
    'About — Miriyari Ltd | Unlocking Africa\'s Next Wave of Scale-ups',
    'Miriyari is a business and investment facilitation firm aligning purposeful founders with the capital, intelligence, and partnerships needed to drive resilient growth across Africa.'
  );

  return (
    <>
      {/* ================= PAGE HERO ================= */}
      <section className="page-hero">
        <div className="container">
          <Reveal as="p" className="breadcrumb">About Miriyari</Reveal>
          <Reveal as="h1">Unlocking Africa&rsquo;s next wave of scale-ups</Reveal>
          <Reveal as="p" className="lead">Miriyari is a business and investment facilitation firm committed to aligning purposeful founders with the capital, intelligence, and partnerships needed to drive resilient growth.</Reveal>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="reveal">
              <p className="eyebrow">Who we are</p>
              <h2 style={{ marginTop: '.9rem' }}>We bridge the gap between capital and ideas</h2>
              <p className="lead">Our team has launched, scaled, and funded ventures across fintech, climate, health, and creative tech. That experience shapes how we work: we blend investor empathy with founder realities, and we stay tactical from day one.</p>
              <Link className="btn btn-solid" style={{ marginTop: '1.8rem' }} to="/services">See how we help</Link>
            </div>
            <div className="reveal">
              <ul className="checklist">
                {CHECKLIST.map((item) => (
                  <li key={item.b}>
                    <CheckIcon />
                    <span><b>{item.b}</b><span>{item.s}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION / VISION / APPROACH ================= */}
      <section className="section" style={{ background: 'var(--mist)' }}>
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow center">What drives us</p>
            <h2>Mission, vision, and approach</h2>
          </div>
          <div className="grid grid-3">
            <article className="card reveal">
              <span className="num">01 &mdash; OUR MISSION</span>
              <h3>Bridge the funding gap</h3>
              <p>To bridge the gap between businesses and investment, enabling African entrepreneurs to access the investment that powers sustainable growth.</p>
            </article>
            <article className="card reveal" style={{ transitionDelay: '.08s' }}>
              <span className="num">02 &mdash; OUR VISION</span>
              <h3>Fuel Africa&rsquo;s tech-driven future</h3>
              <p>To become the leading fuel for Africa&rsquo;s tech-driven businesses &mdash; the trusted partner in funds and investment that fuels long-term economic growth.</p>
            </article>
            <article className="card reveal" style={{ transitionDelay: '.16s' }}>
              <span className="num">03 &mdash; OUR APPROACH</span>
              <h3>Accessible, strategic, growth-driven</h3>
              <p>We believe investment should be accessible, strategic, and growth-driven. Through trusted relationships and data-backed insights, we connect opportunity with potential &mdash; one partnership at a time.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow center">Our promise</p>
            <h2>We are not about chance &mdash; we are about strategy, trust, and impact</h2>
            <p>Every connection we create and every investment we make is designed to generate real value for businesses and communities.</p>
          </div>
          <div className="grid grid-3">
            <div className="card tint reveal">
              <h3>Strategy</h3>
              <p>No spray-and-pray. Every application, introduction, and investment is chosen deliberately against a founder&rsquo;s stage, sector, and goals.</p>
            </div>
            <div className="card tint reveal" style={{ transitionDelay: '.08s' }}>
              <h3>Trust</h3>
              <p>We protect our partners&rsquo; time and our investors&rsquo; attention. Verified partners only &mdash; on both sides of the table.</p>
            </div>
            <div className="card tint reveal" style={{ transitionDelay: '.16s' }}>
              <h3>Impact</h3>
              <p>We measure success in resilient companies, created jobs, and sustainable growth &mdash; aligned with the UN SDGs we back every day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="section" style={{ background: 'var(--mist)' }}>
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow center">Our team</p>
            <h2>The people behind the capital</h2>
            <p>A lean, senior team &mdash; operators who have built, funded, and scaled ventures across the continent.</p>
          </div>
          <div className="team">
            <div className="member reveal">
              <div className="avatar">EN</div>
              <h3>Eric Nshuti</h3>
              <div className="role">Chief Executive Officer</div>
              <p>Leads Miriyari&rsquo;s strategy, partnerships, and capital desk &mdash; aligning every engagement with growth and impact.</p>
            </div>
            <div className="member reveal" style={{ transitionDelay: '.1s' }}>
              <div className="avatar">JD</div>
              <h3>Jean Damascene</h3>
              <div className="role">Founder</div>
              <p>Founded Miriyari on a conviction that African founders deserve strategic capital partnerships &mdash; not just introductions.</p>
            </div>
            <div className="member reveal" style={{ transitionDelay: '.2s' }}>
              <div className="avatar">YI</div>
              <h3>Yves Isite</h3>
              <div className="role">Chief Technology Officer</div>
              <p>Leads product and technology &mdash; including Injizaa.com, our digital bridge between investors and investees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <CtaBand
        title="Let&rsquo;s build the next chapter together"
        text="We&rsquo;re building a trusted network across Africa, connecting ambitious founders with transformative capital opportunities that drive sustainable growth."
      >
        <Link className="btn btn-gold" to="/contact">Start a conversation</Link>
        <a className="btn btn-outline" href="https://www.injizaa.com" target="_blank" rel="noopener">Join Injizaa.com</a>
      </CtaBand>
    </>
  );
}
