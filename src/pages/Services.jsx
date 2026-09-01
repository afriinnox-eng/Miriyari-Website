import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { ArrowIcon, CheckIcon, CoinIcon, UsersIcon, TrendIcon } from '../components/icons.jsx';

const CAPITAL_SOLUTIONS = [
  { h: 'Grant opportunity sourcing', p: 'We actively identify and pursue the grants that match your product and stage — continuously, not on demand.' },
  { h: 'Injizaa.com partner circle', p: 'Warm introductions to purpose-aligned investors across Africa and beyond — through our own platform.' },
  { h: 'Founder capital desk', p: 'We prepare data rooms, financial models, and narratives on your behalf, so you pitch from strength.' },
  { h: 'Post-funding momentum', p: 'We manage capital deployment and investor reporting on your behalf — keeping you accountable to growth.' },
];

export default function Services() {
  usePageMeta(
    'Services — Miriyari Ltd | Grants, Investor Connections & Direct Investment',
    'Three capital pathways from Miriyari: Grant Access, Investor Connections through Injizaa.com, and Direct Investments. Find the right capital for your growth stage.'
  );

  return (
    <>
      {/* ================= PAGE HERO ================= */}
      <section className="page-hero">
        <div className="container">
          <Reveal as="p" className="breadcrumb">Services</Reveal>
          <Reveal as="h1">Capital programmes that meet founders where they are</Reveal>
          <Reveal as="p" className="lead">Every engagement is tailored. We combine deep funding expertise, a connected investor network, and hands-on execution to deliver the right capital at the right moment.</Reveal>
        </div>
      </section>

      {/* ================= CAPITAL SOLUTIONS ================= */}
      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow center">Capital solutions</p>
            <h2>One partner, four ways to move your funding forward</h2>
          </div>
          <div className="grid grid-4">
            {CAPITAL_SOLUTIONS.map((c, i) => (
              <div className="card tint reveal" key={c.h} style={{ transitionDelay: `${i * 0.08}s` }}>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICE 01 ================= */}
      <section className="section" style={{ background: 'var(--mist)' }}>
        <div className="container">
          <div className="split">
            <div className="reveal">
              <span className="num">01 &mdash; GRANT ACCESS</span>
              <h2 style={{ marginTop: '1rem' }}>Stop chasing grants. Start building.</h2>
              <p className="lead">We identify the most relevant grant opportunities and manage the entire application process. Our partners focus on their products, customers, and growth &mdash; while we focus on securing the funding that accelerates them.</p>
              <ul className="checklist">
                <li>
                  <CheckIcon />
                  <span><b>Outcome-driven partnership</b><span>We don&rsquo;t charge until we deliver results.</span></span>
                </li>
                <li>
                  <CheckIcon />
                  <span><b>Applications managed end-to-end</b><span>From shortlisting to submission, and pitching with you.</span></span>
                </li>
                <li>
                  <CheckIcon />
                  <span><b>Grant & opportunity matching</b><span>Aligned to your sector, stage, and impact goals.</span></span>
                </li>
              </ul>
              <Link className="btn btn-gold" style={{ marginTop: '1.8rem' }} to="/contact">Apply for Grant Partnership</Link>
            </div>
            <div className="reveal">
              <div className="card dark">
                <div className="icon" style={{ background: 'linear-gradient(135deg,var(--gold),var(--gold-deep))' }}>
                  <CoinIcon style={{ color: '#0A1B38' }} />
                </div>
                <h3>What a grant partnership looks like</h3>
                <p>Founders apply once. Our capital desk builds a live funding map of relevant grants, owns every application, and reports progress &mdash; while the founder keeps building.</p>
                <p style={{ marginTop: '1rem' }}><b style={{ color: 'var(--gold-2)' }}>$80K+ raised</b> for one partner in 12 months &mdash; with no charge until results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE 02 ================= */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="reveal" style={{ order: 2 }}>
              <span className="num">02 &mdash; INVESTOR CONNECTIONS</span>
              <h2 style={{ marginTop: '1rem' }}>Meet investors who fit, not just investors</h2>
              <p className="lead">We connect the right investors with high-potential founders through Injizaa.com &mdash; our digital platform that bridges investors and investees. Verified partners, curated introductions, pan-African reach.</p>
              <ul className="checklist">
                <li>
                  <CheckIcon />
                  <span><b>Create your profile</b><span>Showcase your startup, traction, and ambition in minutes.</span></span>
                </li>
                <li>
                  <CheckIcon />
                  <span><b>Purpose-aligned matching</b><span>We match on stage, sector, and values &mdash; not just sector tags.</span></span>
                </li>
                <li>
                  <CheckIcon />
                  <span><b>Warm introductions</b><span>Every connection is curated by our team, never a cold list.</span></span>
                </li>
              </ul>
              <a className="btn btn-gold" style={{ marginTop: '1.8rem' }} href="https://www.injizaa.com" target="_blank" rel="noopener">Join Injizaa.com</a>
            </div>
            <div className="reveal" style={{ order: 1 }}>
              <div className="card dark">
                <div className="icon" style={{ background: 'linear-gradient(135deg,var(--gold),var(--gold-deep))' }}>
                  <UsersIcon style={{ color: '#0A1B38' }} />
                </div>
                <h3>One platform, two sides of the table</h3>
                <p>Founders showcase their ventures. Investors discover verified, curated opportunities. Miriyari makes the introduction count.</p>
                <p style={{ marginTop: '1rem' }}><b style={{ color: 'var(--gold-2)' }}>Verified partners only</b> · curated network · direct capital access · pan-African reach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE 03 ================= */}
      <section className="section" style={{ background: 'var(--mist)' }}>
        <div className="container">
          <div className="split">
            <div className="reveal">
              <span className="num">03 &mdash; DIRECT INVESTMENTS</span>
              <h2 style={{ marginTop: '1rem' }}>We invest our own capital &mdash; we share the risk and the vision</h2>
              <p className="lead">We believe in walking the talk. Miriyari invests directly in high-potential companies, aligning with founders to share both the risk and the vision. When we back you, we&rsquo;re in it with you.</p>
              <ul className="checklist">
                <li>
                  <CheckIcon />
                  <span><b>Aligned incentives</b><span>Our capital works for your growth &mdash; not against your control.</span></span>
                </li>
                <li>
                  <CheckIcon />
                  <span><b>Operator support after the cheque</b><span>Capital deployment, reporting, and follow-on strategy included.</span></span>
                </li>
                <li>
                  <CheckIcon />
                  <span><b>Focus on resilient, SDG-aligned growth</b><span>Fintech, healthtech, agritech, climate action, and creative tech.</span></span>
                </li>
              </ul>
              <Link className="btn btn-gold" style={{ marginTop: '1.8rem' }} to="/contact">Apply for Investment</Link>
            </div>
            <div className="reveal">
              <div className="card dark">
                <div className="icon" style={{ background: 'linear-gradient(135deg,var(--gold),var(--gold-deep))' }}>
                  <TrendIcon style={{ color: '#0A1B38' }} />
                </div>
                <h3>Capital that comes with conviction</h3>
                <p>We don&rsquo;t just source other people&rsquo;s money &mdash; we deploy our own. That&rsquo;s how founders know we believe in what we build together.</p>
                <p style={{ marginTop: '1rem' }}><b style={{ color: 'var(--gold-2)' }}>High-potential companies</b> · shared risk · shared vision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GRANT WORKFLOW ================= */}
      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow center">Grant access workflow</p>
            <h2>A transparent process, from application to grant success</h2>
          </div>
          <div className="steps">
            <div className="step reveal">
              <span className="arr"><ArrowIcon /></span>
              <h3>You apply for partnership</h3>
              <p>Submit your application through our portal in minutes.</p>
            </div>
            <div className="step reveal" style={{ transitionDelay: '.08s' }}>
              <span className="arr"><ArrowIcon /></span>
              <h3>We review and respond</h3>
              <p>Our team reviews your application and responds within 48 hours.</p>
            </div>
            <div className="step reveal" style={{ transitionDelay: '.16s' }}>
              <span className="arr"><ArrowIcon /></span>
              <h3>We identify suitable grants</h3>
              <p>Once selected, we identify grant opportunities aligned with your product or service.</p>
            </div>
            <div className="step reveal" style={{ transitionDelay: '.24s' }}>
              <h3>Your success becomes our shared goal</h3>
              <p>We manage the entire application process while you focus on growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <CtaBand
        title="Which pathway fits your growth stage?"
        text="From grants and equity investment to direct capital &mdash; the right funding choice can make all the difference. Let us help you find it."
      >
        <Link className="btn btn-gold" to="/contact">Apply for Grant Partnership</Link>
        <a className="btn btn-outline" href="https://www.injizaa.com" target="_blank" rel="noopener">Join Injizaa.com</a>
        <Link className="btn btn-outline" to="/contact">Apply for Investment</Link>
      </CtaBand>
    </>
  );
}
