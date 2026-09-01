import Reveal from './Reveal.jsx';

/** Shared full-width call-to-action band. Children should be CTA buttons. */
export default function CtaBand({ title, text, children }) {
  return (
    <section className="cta-band">
      <div className="container">
        <Reveal as="h2">{title}</Reveal>
        {text ? <Reveal as="p">{text}</Reveal> : null}
        <Reveal className="cta-actions">{children}</Reveal>
      </div>
    </section>
  );
}
