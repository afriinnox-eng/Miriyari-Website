import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import CountUp from '../components/CountUp.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { ArrowIcon, CheckIcon, CoinIcon, UsersIcon, TrendIcon, PinIcon } from '../components/icons.jsx';
import BlogCard from '../components/BlogCard.jsx';
import { posts } from '../blog/posts.js';

export default function Home() {
  usePageMeta(
    'Miriyari Ltd — Bridging the Gap Between Businesses and Transformative Investment',
    'Miriyari secures grants for partner companies, connects founders directly with investors through Injizaa.com, and invests its own capital to build resilient enterprises across Africa.'
  );

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="container">
          <div>
            <Reveal as="p" className="eyebrow">Kigali · Pan-African capital facilitation</Reveal>
            <Reveal as="h1" delay=".05s" style={{ marginTop: '.9rem' }}>
              Bridging the gap between businesses and <span className="gold-text">transformative investment</span>.
            </Reveal>
            <Reveal as="p" className="lead" delay=".1s" style={{ marginTop: '1.3rem' }}>
              Miriyari secures grants, connects founders directly with investors through Injizaa.com, and invests its own capital to build resilient enterprises across the continent. You build. We unlock the capital.
            </Reveal>
            <div className="hero-actions reveal in" style={{ marginTop: '2.2rem' }}>
              <Link className="btn btn-gold" to="/contact">
                Apply for Grant Partnership <ArrowIcon />
              </Link>
              <a className="btn btn-outline" href="https://www.injizaa.com" target="_blank" rel="noopener">Join Injizaa.com</a>
              <Link className="btn btn-outline" to="/services">Explore Services</Link>
            </div>
            <ul className="hero-chips reveal in" style={{ marginTop: '2.6rem' }}>
              <li><CheckIcon /><span>Verified partners only</span></li>
              <li><CheckIcon /><span>Curated investor network</span></li>
              <li><CheckIcon /><span>Direct capital access</span></li>
              <li><CheckIcon /><span>Pan-African reach</span></li>
            </ul>
          </div>
          <div className="hero-visual reveal in">
            <div className="hero-float">
              $80K+<small>raised for a partner<br />in 12 months</small>
            </div>
            <div className="hero-card">
              <div className="hdr"><b>CAPITAL DESK &mdash; LIVE</b><span>KIGALI · CAT</span></div>
              <div className="pipe-row">
                <span className="pipe-dot" />
                <span className="t"><b>Grant match found</b><span>Competitive grant · Agritech</span></span>
                <span className="tag">In review</span>
              </div>
              <div className="pipe-row">
                <span className="pipe-dot" />
                <span className="t"><b>Investor intro sent</b><span>Purpose-aligned · Fintech</span></span>
                <span className="tag">Introduced</span>
              </div>
              <div className="pipe-row">
                <span className="pipe-dot" />
                <span className="t"><b>Follow-on capital</b><span>Partner round · Healthtech</span></span>
                <span className="tag">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats">
        <div className="container">
          <div className="stat reveal"><CountUp to={3} /><span>Capital pathways</span><span className="k">Grants · Investors · Direct</span></div>
          <div className="stat reveal"><CountUp to={48} suffix="h" /><span>Application response time</span><span className="k">Reviewed by our capital desk</span></div>
          <div className="stat reveal"><CountUp to={80} prefix="$" suffix="K+" /><span>Raised for a partner</span><span className="k">Representative 12-month result</span></div>
          <div className="stat reveal"><CountUp to={4} suffix="+" /><span>Sectors served</span><span className="k">Fintech · Health · Climate · Agritech</span></div>
        </div>
      </section>

      {/* ================= SERVICES PREVIEW ================= */}
      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow center">What we do</p>
            <h2>Simplifying capital access for ambitious founders</h2>
            <p>We secure grants, connect founders directly with investors, and invest our own capital &mdash; anchored in impact.</p>
          </div>
          <div className="grid grid-3">
            <article className="card reveal">
              <span className="num">01 &mdash; GRANT ACCESS</span>
              <div className="icon"><CoinIcon /></div>
              <h3>Grant Access</h3>
              <p>We identify the most relevant grant opportunities and manage the entire application process &mdash; so your team stays focused on product, customers, and growth while we secure the funding that accelerates you.</p>
              <Link className="card-link" to="/services">Learn more<ArrowIcon /></Link>
            </article>
            <article className="card reveal" style={{ transitionDelay: '.08s' }}>
              <span className="num">02 &mdash; INVESTOR CONNECTIONS</span>
              <div className="icon"><UsersIcon /></div>
              <h3>Investor Connections</h3>
              <p>We connect the right investors with high-potential founders through Injizaa.com &mdash; our digital platform that bridges investors and investees with verified partners, warm introductions, and pan-African reach.</p>
              <Link className="card-link" to="/services">Learn more<ArrowIcon /></Link>
            </article>
            <article className="card reveal" style={{ transitionDelay: '.16s' }}>
              <span className="num">03 &mdash; DIRECT INVESTMENTS</span>
              <div className="icon"><TrendIcon /></div>
              <h3>Direct Investments</h3>
              <p>We invest our own money directly in high-potential companies, aligning with founders to share both the risk and the vision &mdash; walking the talk, not just advising on it.</p>
              <Link className="card-link" to="/services">Learn more<ArrowIcon /></Link>
            </article>
          </div>
        </div>
      </section>

      {/* ================= DIFFERENTIATORS ================= */}
      <section className="section" style={{ background: 'var(--mist)' }}>
        <div className="container">
          <div className="split">
            <div className="reveal">
              <p className="eyebrow">Why Miriyari</p>
              <h2 style={{ marginTop: '.9rem' }}>Strategy, trust, and impact &mdash; not chance</h2>
              <p className="lead">Our promise: every connection we create and every investment we make is designed to generate real value for businesses and communities. That is why founders, partners, and investors choose to work with us.</p>
              <Link className="btn btn-solid" style={{ marginTop: '1.8rem' }} to="/about">More about us</Link>
            </div>
            <div>
              <div className="card tint reveal">
                <h3>Results-first engagement</h3>
                <p>We don&rsquo;t charge for promises. Our grant partnerships are structured around outcomes &mdash; you build, we deliver, and the fee follows the result.</p>
              </div>
              <div className="card tint reveal" style={{ marginTop: '1.2rem' }}>
                <h3>Founder empathy</h3>
                <p>Our team has launched, scaled, and funded ventures across fintech, climate, health, and creative tech. We have sat in your seat &mdash; so the support is tactical from day one.</p>
              </div>
              <div className="card tint reveal" style={{ marginTop: '1.2rem' }}>
                <h3>End-to-end execution</h3>
                <p>From grant sourcing and applications to data rooms, investor reporting, and post-investment support &mdash; we own the process so you can own the building.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORKFLOW ================= */}
      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow center">How it works</p>
            <h2>A transparent process, from application to capital</h2>
            <p>Every engagement is tailored. We combine deep funding expertise, a connected investor network, and hands-on execution to deliver the right capital at the right moment.</p>
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
              <p>Our capital desk reviews every application and responds within 48 hours.</p>
            </div>
            <div className="step reveal" style={{ transitionDelay: '.16s' }}>
              <span className="arr"><ArrowIcon /></span>
              <h3>We identify suitable capital</h3>
              <p>Once selected, we match you with grants, investors, or direct capital aligned with your stage.</p>
            </div>
            <div className="step reveal" style={{ transitionDelay: '.24s' }}>
              <h3>We execute while you build</h3>
              <p>We manage the entire process &mdash; applications, pitches, diligence &mdash; while you focus on growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="section" style={{ background: 'var(--mist)' }}>
        <div className="container container-narrow">
          <div className="quote-card reveal">
            <blockquote>
              Miriyari supported us in raising <b>$80,000+</b> through grants and opportunities in 12 months. And there&rsquo;s one thing I loved about the model: <b>they don&rsquo;t charge you until they deliver results</b>.
            </blockquote>
            <div className="quote-meta">
              <div className="avatar">F</div>
              <div>
                <b>Founder, Rwandan technology company</b>
                <span>Miriyari grant partner · partnership began August 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PARTNERS ================= */}
      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow center">Partnering with</p>
            <h2>Purpose-built companies we back</h2>
            <p>We partner with technology-driven, impact-focused companies aligned with the UN SDGs &mdash; across agritech, fintech, healthtech, climate action, and beyond.</p>
          </div>
          <div className="partners">
            <article className="partner reveal">
              <div className="mono">BEYI</div>
              <span className="sector">Agritech</span>
              <h3>BEYI Group</h3>
              <p>Manufactures affordable, solar-and-electric-powered rice planting machinery and provides planting and rental services &mdash; making mechanised farming accessible to smallholders across Rwanda.</p>
              <span className="where"><PinIcon />Kigali, Rwanda</span>
            </article>
            <article className="partner reveal" style={{ transitionDelay: '.1s' }}>
              <div className="mono">AFRI</div>
              <span className="sector">Technology</span>
              <h3>AFRIINNOX Ltd</h3>
              <p>A Rwandan technology company partnering with Miriyari&rsquo;s capital desk to raise non-dilutive grant funding &mdash; turning applications into a structured, repeatable funding pipeline.</p>
              <span className="where"><PinIcon />Kigali, Rwanda</span>
            </article>
            <article className="partner reveal" style={{ transitionDelay: '.2s' }}>
              <div className="mono" style={{ background: 'linear-gradient(135deg,var(--gold),var(--gold-deep))', color: 'var(--navy-deep)' }}>YOU</div>
              <span className="sector">Next</span>
              <h3>Your company could be next</h3>
              <p>We open partnership applications for founders ready to stop chasing grants and start building. Selection is competitive &mdash; and worth it.</p>
              <Link className="btn btn-gold btn-sm" to="/contact" style={{ alignSelf: 'flex-start', marginTop: '.6rem' }}>Apply now</Link>
            </article>
          </div>
        </div>
      </section>

      {/* ================= LATEST FROM THE BLOG ================= */}
      <section className="section" style={{ background: 'var(--mist)' }}>
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow center">From the blog</p>
            <h2>Monthly mission briefs</h2>
            <p>What we&rsquo;re learning on the ground &mdash; mission updates, partner stories, and the mechanics of funding African growth.</p>
          </Reveal>
          <div className="blog-grid">
            {posts.slice(0, 3).map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: '2.2rem' }}>
            <Link className="btn btn-solid" to="/blog">View all posts</Link>
          </Reveal>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <CtaBand
        title="Ready to unlock transformative capital?"
        text="Whether you&rsquo;re a founder building Africa&rsquo;s next scale-up, an investor seeking curated deal flow, or a partner ready to collaborate &mdash; let&rsquo;s talk."
      >
        <Link className="btn btn-gold" to="/contact">Apply for Grant Partnership</Link>
        <a className="btn btn-outline" href="https://www.injizaa.com" target="_blank" rel="noopener">Join Injizaa.com</a>
        <Link className="btn btn-outline" to="/contact">Apply for Investment</Link>
      </CtaBand>
    </>
  );
}
