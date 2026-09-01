import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import CountUp from '../components/CountUp.jsx';
import CtaBand from '../components/CtaBand.jsx';

const SECTORS = [
  { h: 'Agritech & Food Systems', p: 'Machinery, inputs, and platforms that make farming more productive and dignified.' },
  { h: 'Fintech', p: 'Financial infrastructure and services that expand access and resilience.' },
  { h: 'Healthtech', p: 'Tools that improve care, reach, and outcomes across the continent.' },
  { h: 'Climate Action', p: 'Clean energy and climate-smart solutions for a sustainable economy.' },
  { h: 'Creative Tech', p: 'African creativity amplified by technology and global reach.' },
];

const SUPPORT = [
  { h: 'Structured follow-on capital', p: 'We keep mapping the next grant, round, and instrument before you need it.' },
  { h: 'Hands-on investor reporting', p: 'We manage reporting on your behalf, so your investors see momentum — not noise.' },
  { h: 'Extended operator network', p: 'Our partners get access to operators, advisors, and peers who have been where they&rsquo;re going.' },
];

export default function Impact() {
  usePageMeta(
    'Impact — Miriyari Ltd | Funding That Lands, Growth That Lasts',
    'Miriyari\'s impact: $80K+ raised for a partner in 12 months, results-first partnerships, and purpose-built companies like BEYI Group and AFRIINNOX across Africa.'
  );

  return (
    <>
      {/* ================= PAGE HERO ================= */}
      <section className="page-hero">
        <div className="container">
          <Reveal as="p" className="breadcrumb">Impact &amp; partnerships</Reveal>
          <Reveal as="h1">Funding that lands. Growth that lasts.</Reveal>
          <Reveal as="p" className="lead">We measure ourselves the way founders do &mdash; in capital raised, milestones hit, and companies that grow resilient and stay.</Reveal>
        </div>
      </section>

      {/* ================= RESULT STATS ================= */}
      <section className="stats">
        <div className="container">
          <div className="stat reveal"><CountUp to={80} prefix="$" suffix="K+" /><span>Raised for one partner</span><span className="k">Grants &amp; opportunities in 12 months</span></div>
          <div className="stat reveal"><CountUp to={48} suffix="h" /><span>Capital desk response</span><span className="k">Every application reviewed within 48 hours</span></div>
          <div className="stat reveal"><CountUp to={0} /><span>Upfront fees</span><span className="k">We charge when we deliver results</span></div>
          <div className="stat reveal"><CountUp to={5} suffix="+" /><span>Sectors we back</span><span className="k">Agritech · Fintech · Healthtech · Climate · Creative tech</span></div>
        </div>
      </section>

      {/* ================= IMPACT STORY ================= */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="reveal">
              <p className="eyebrow">The results-first model</p>
              <h2 style={{ marginTop: '.9rem' }}>Partnerships built to deliver &mdash; not bill</h2>
              <p className="lead">When a founder partners with Miriyari, they don&rsquo;t buy our time. They bet on our outcomes. That&rsquo;s why our grant partnerships carry no charge until results are delivered &mdash; and why our partners stay.</p>
              <p className="muted" style={{ marginTop: '1rem' }}>One Rwandan technology company raised <b>$80,000+</b> through grants and opportunities within 12 months of partnering with us. Their founders built. Our capital desk found, applied, and pitched.</p>
            </div>
            <div className="reveal">
              <div className="quote-card">
                <blockquote>
                  Our job was to strengthen the product and grow the customer base. <b>They focused on finding opportunities.</b> When we got selected, we went and pitched &mdash; they would even pitch for us.
                </blockquote>
                <div className="quote-meta">
                  <div className="avatar">F</div>
                  <div>
                    <b>Founder, Rwandan technology company</b>
                    <span>Miriyari grant partner since August 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PARTNER SPOTLIGHT ================= */}
      <section className="section" style={{ background: 'var(--mist)' }}>
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow center">Partner spotlight</p>
            <h2>Purpose-built companies we back</h2>
            <p>We believe innovative African solutions should not be limited by a lack of access to capital.</p>
          </div>
          <div className="grid grid-2">
            <article className="card reveal">
              <span className="num">AGRITECH</span>
              <h3>BEYI Group &mdash; modernising rice farming</h3>
              <p>A Rwandan agritech company manufacturing locally developed rice planting machinery &mdash; affordable, solar-and-electric-powered, and designed to replace hours of manual labour in flooded marshlands.</p>
              <p style={{ marginTop: '.9rem' }}>BEYI provides planting and machine rental services to farmers, making mechanised rice farming more accessible &mdash; and its clean-energy technology supports more sustainable agriculture.</p>
              <p style={{ marginTop: '.9rem' }}><b style={{ color: 'var(--blue)' }}>The partnership:</b> Miriyari supports BEYI in accessing the funding and investment needed to strengthen operations, develop its technology, and bring its solutions to more farmers.</p>
              <div className="card-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', marginTop: '1.2rem', fontWeight: 600, fontSize: '.9rem', color: 'var(--blue)' }}>Kigali, Rwanda</div>
            </article>
            <article className="card reveal" style={{ transitionDelay: '.1s' }}>
              <span className="num">TECHNOLOGY</span>
              <h3>AFRIINNOX Ltd &mdash; a structured funding pipeline</h3>
              <p>A Rwandan technology company that turned a constant search for grants into a structured, repeatable funding pipeline with Miriyari&rsquo;s capital desk.</p>
              <p style={{ marginTop: '.9rem' }}>The partnership covers continuous grant opportunity sourcing, application management, and pitch support &mdash; letting the founding team stay focused on product and customers.</p>
              <p style={{ marginTop: '.9rem' }}><b style={{ color: 'var(--blue)' }}>The result:</b> $80,000+ raised through grants and opportunities in 12 months &mdash; with no charge until results were delivered.</p>
              <div className="card-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', marginTop: '1.2rem', fontWeight: 600, fontSize: '.9rem', color: 'var(--blue)' }}>Kigali, Rwanda</div>
            </article>
          </div>
        </div>
      </section>

      {/* ================= SECTORS ================= */}
      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow center">Who we back</p>
            <h2>Technology-driven, impact-focused, SDG-aligned</h2>
            <p>We partner with companies building solutions aligned with the UN Sustainable Development Goals &mdash; across Africa and beyond.</p>
          </div>
          <div className="grid grid-3">
            {SECTORS.map((s, i) => (
              <div className="card tint reveal" key={s.h} style={{ transitionDelay: `${i * 0.06}s` }}>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
            <div className="card reveal" style={{
              transitionDelay: '.3s',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              background: 'linear-gradient(160deg,var(--navy),var(--navy-deep))',
              borderColor: 'rgba(255,255,255,.1)',
            }}>
              <h3 style={{ color: '#fff' }}>Building in another sector?</h3>
              <p style={{ color: 'rgba(255,255,255,.7)' }}>If your company is tech-driven and impact-focused, we want to hear from you.</p>
              <Link className="btn btn-gold btn-sm" style={{ alignSelf: 'flex-start', marginTop: '1rem' }} to="/contact">Apply for partnership</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ONGOING SUPPORT ================= */}
      <section className="section" style={{ background: 'var(--mist)' }}>
        <div className="container container-narrow">
          <div className="section-head center reveal">
            <p className="eyebrow center">Beyond the first cheque</p>
            <h2>We stay close after the capital lands</h2>
          </div>
          <div className="grid grid-3">
            {SUPPORT.map((s, i) => (
              <div className="card reveal" key={s.h} style={{ transitionDelay: `${i * 0.08}s` }}>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <CtaBand
        title="Ready to unlock transformative capital?"
        text="Share your ambition. We secure the grants, investor connections, and capital that turn it into resilient growth."
      >
        <Link className="btn btn-gold" to="/contact">Become our Grant Partner</Link>
        <Link className="btn btn-outline" to="/contact">Apply for Investment</Link>
        <a className="btn btn-outline" href="https://www.injizaa.com" target="_blank" rel="noopener">Join Injizaa.com</a>
      </CtaBand>
    </>
  );
}
