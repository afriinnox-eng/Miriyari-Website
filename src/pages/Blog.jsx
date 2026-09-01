import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import BlogCard from '../components/BlogCard.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { posts, CATEGORIES } from '../blog/posts.js';

function postText(p) {
  return (
    p.title +
    ' ' +
    p.excerpt +
    ' ' +
    p.content.map((b) => b.text || (b.items || []).join(' ')).join(' ')
  ).toLowerCase();
}

export default function Blog() {
  usePageMeta(
    'Blog — Miriyari Ltd | Monthly Mission Briefs',
    "Monthly stories from the Miriyari capital desk: mission updates, partner journeys, and the real mechanics of funding African growth."
  );

  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter(
      (p) =>
        (cat === 'All' || p.category === cat) && (q === '' || postText(p).includes(q))
    );
  }, [query, cat]);

  const filtering = query.trim() !== '' || cat !== 'All';
  const featured = posts[0];
  const gridPosts = filtering ? filtered : filtered.filter((p) => p.slug !== featured.slug);

  const clearFilters = () => {
    setQuery('');
    setCat('All');
  };

  return (
    <>
      {/* ================= PAGE HERO ================= */}
      <section className="page-hero">
        <div className="container">
          <Reveal as="p" className="breadcrumb">Blog</Reveal>
          <Reveal as="h1">Monthly mission briefs from the capital desk</Reveal>
          <Reveal as="p" className="lead">
            Every month we publish what we&rsquo;re learning on the ground: mission updates,
            partner journeys, and the real mechanics of funding African growth.
          </Reveal>
        </div>
      </section>

      {/* ================= POSTS ================= */}
      <section className="section">
        <div className="container">
          <Reveal className="blog-tools">
            <input
              className="blog-search"
              type="search"
              placeholder="Search posts…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search posts"
            />
            <div className="chips">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`chip${cat === c ? ' active' : ''}`}
                  onClick={() => setCat(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          {!filtering && filtered.length > 0 && (
            <BlogCard post={featured} featured />
          )}

          {gridPosts.length > 0 ? (
            <div className="blog-grid">
              {gridPosts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <h3>No posts match your search</h3>
              <p>Try a different keyword or clear the filters.</p>
              <button type="button" className="btn btn-solid" onClick={clearFilters}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <CtaBand
        title="Get the monthly mission brief"
        text="One email a month. No noise — just what we're learning about funding African growth."
      >
        <a className="btn btn-gold" href="mailto:info@miriyari.com?subject=Monthly%20Mission%20Brief">Subscribe by email</a>
        <Link className="btn btn-outline" to="/contact">Start a conversation</Link>
      </CtaBand>
    </>
  );
}
