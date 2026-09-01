import { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { MailIcon, PhoneIcon, PinIcon, ClockIcon, GlobeIcon } from '../components/icons.jsx';
import { validateContact } from '../lib/contactValidation.js';

const INITIAL = { name: '', email: '', company: '', role: 'Founder seeking grants', sector: '', message: '' };

export default function Contact() {
  usePageMeta(
    'Contact — Miriyari Ltd | Start Your Capital Partnership',
    'Get in touch with Miriyari. Whether you\'re a founder seeking funding, an investor looking for opportunities, or a partner ready to collaborate — we respond within 48 hours.'
  );

  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((er) => (er[key] ? { ...er, [key]: false } : er));
  };

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validateContact(values);
    setErrors(errs);
    if (Object.keys(errs).some((k) => errs[k])) return;

    const subject =
      'Website enquiry — ' +
      values.role +
      (values.company ? ` (${values.company})` : '');
    const body = [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      values.company && `Company: ${values.company.trim()}`,
      `I am a: ${values.role}`,
      values.sector && `Sector: ${values.sector}`,
      '',
      values.message.trim(),
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href =
      'mailto:info@miriyari.com?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body);
    setSent(true);
  }

  return (
    <>
      {/* ================= PAGE HERO ================= */}
      <section className="page-hero">
        <div className="container">
          <Reveal as="p" className="breadcrumb">Contact</Reveal>
          <Reveal as="h1">Get in touch with our team</Reveal>
          <Reveal as="p" className="lead">Whether you&rsquo;re a founder seeking funding, an investor looking for opportunities, or a partner ready to collaborate &mdash; we&rsquo;d love to hear from you.</Reveal>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Info column */}
            <div>
              <div className="reveal">
                <div className="info-card">
                  <div className="ic"><MailIcon /></div>
                  <div><b>Email us</b><span><a href="mailto:info@miriyari.com">info@miriyari.com</a></span></div>
                </div>
                <div className="info-card" style={{ marginTop: '1rem' }}>
                  <div className="ic"><PhoneIcon /></div>
                  <div><b>Call us</b><span><a href="tel:+250789211684">+250 789 211 684</a></span></div>
                </div>
                <div className="info-card" style={{ marginTop: '1rem' }}>
                  <div className="ic"><PinIcon /></div>
                  <div><b>Visit us</b><span>KN 112 St, Kigali, Rwanda</span></div>
                </div>
                <div className="info-card" style={{ marginTop: '1rem' }}>
                  <div className="ic"><ClockIcon /></div>
                  <div><b>Office hours</b><span>Mon&ndash;Fri 8:00&ndash;18:00 CAT<br />Sat&ndash;Sun by appointment</span></div>
                </div>
              </div>

              <div className="card dark reveal" style={{ marginTop: '1.5rem' }}>
                <h3 style={{ color: 'var(--gold-2)' }}>How we respond</h3>
                <p style={{ marginTop: '.5rem' }}>Every enquiry is reviewed by our capital desk within <b style={{ color: '#fff' }}>48 hours</b>. We assess fit, propose the right engagement track, and connect you with a specialist from our team.</p>
                <p style={{ marginTop: '.9rem', fontSize: '.85rem', color: 'rgba(255,255,255,.6)' }}>For urgent matters, please call our office directly during business hours.</p>
              </div>

              <div className="reveal" style={{ marginTop: '1.5rem' }}>
                <div className="info-card">
                  <div className="ic"><GlobeIcon /></div>
                  <div><b>Connect with us</b><span>
                    <a href="https://www.injizaa.com" target="_blank" rel="noopener">Injizaa.com</a> &middot;
                    <a href="https://www.linkedin.com/company/miriyari" target="_blank" rel="noopener">LinkedIn</a> &middot;
                    <a href="https://www.miriyari.com" target="_blank" rel="noopener">miriyari.com</a>
                  </span></div>
                </div>
              </div>
            </div>

            {/* Form column */}
            <div className="reveal">
              <form className="form-card" onSubmit={handleSubmit} noValidate>
                <h3 style={{ marginBottom: '1.4rem' }}>Send us a message</h3>
                <p className="muted" style={{ fontSize: '.92rem', marginBottom: '1.6rem' }}>Tell us about your vision and the type of support you are seeking.</p>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="cf-name">Full name *</label>
                    <input
                      type="text" id="cf-name" name="name" autoComplete="name" placeholder="Your name" required
                      value={values.name} onChange={set('name')}
                      className={errors.name ? 'form-error' : ''}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="cf-email">Email *</label>
                    <input
                      type="email" id="cf-email" name="email" autoComplete="email" placeholder="you@company.com" required
                      value={values.email} onChange={set('email')}
                      className={errors.email ? 'form-error' : ''}
                    />
                  </div>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="cf-company">Company</label>
                    <input
                      type="text" id="cf-company" name="company" autoComplete="organization" placeholder="Your company"
                      value={values.company} onChange={set('company')}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="cf-role">I am a&hellip;</label>
                    <select id="cf-role" name="role" value={values.role} onChange={set('role')}>
                      <option value="Founder seeking grants">Founder seeking grant partnership</option>
                      <option value="Founder seeking investors">Founder seeking investors</option>
                      <option value="Founder seeking investment">Founder seeking direct investment</option>
                      <option value="Investor">Investor</option>
                      <option value="Partner">Partner / other</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="cf-sector">Sector</label>
                  <select id="cf-sector" name="sector" value={values.sector} onChange={set('sector')}>
                    <option value="">Select a sector (optional)</option>
                    <option>Agritech &amp; Food Systems</option>
                    <option>Fintech</option>
                    <option>Healthtech</option>
                    <option>Climate Action</option>
                    <option>Creative Tech</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="cf-message">Your message *</label>
                  <textarea
                    id="cf-message" name="message" placeholder="Tell us about your vision, stage, and the support you're seeking..." required
                    value={values.message} onChange={set('message')}
                    className={errors.message ? 'form-error' : ''}
                  />
                </div>

                <button type="submit" className="btn btn-gold btn-block">Send Message</button>
                <p className="form-note">This form opens your email app with a composed message to <b>info@miriyari.com</b>. Every enquiry is reviewed within 48 hours.</p>
                <div className={`form-ok${sent ? ' show' : ''}`} role="status">
                  Your email draft is ready in your mail client. We review every enquiry within 48 hours.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <CtaBand
        title="Prefer to apply directly?"
        text="Choose the pathway that matches your goals and our capital desk will take it from there."
      >
        <a className="btn btn-gold" href="mailto:info@miriyari.com?subject=Grant%20Partnership%20Application">Apply for Grant Partnership</a>
        <a className="btn btn-outline" href="https://www.injizaa.com" target="_blank" rel="noopener">Join Injizaa.com</a>
        <a className="btn btn-outline" href="mailto:info@miriyari.com?subject=Investment%20Application">Apply for Investment</a>
      </CtaBand>
    </>
  );
}
