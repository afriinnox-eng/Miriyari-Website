import { Link, useParams } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import BlogCard from '../components/BlogCard.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { getPost, relatedPosts, formatDate, readingTime } from '../blog/posts.js';

function initials(author) {
  const words = author.split(' ').filter((w) => w !== 'The');
  return (words[0]?.[0] || '') + (words[1]?.[0] || words[0]?.[1] || '');
}

function renderBlock(block, i) {
  switch (block.type) {
    case 'h2':
      return <h2 key={i}>{block.text}</h2>;
    case 'p':
      return <p key={i}>{block.text}</p>;
    case 'quote':
      return <blockquote key={i}>{block.text}</blockquote>;
    case 'list':
      return (
        <ul key={i}>
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  usePageMeta(
    post ? `${post.title} — Miriyari Blog` : 'Blog — Miriyari Ltd',
    post ? post.excerpt : 'Monthly mission briefs from the Miriyari capital desk.'
  );

  if (!post) {
    return (
      <section className="section">
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <h2>Post not found</h2>
          <p className="muted" style={{ marginTop: '1rem' }}>
            That article doesn&rsquo;t exist or may have moved.
          </p>
          <Link className="btn btn-solid" style={{ marginTop: '1.6rem' }} to="/blog">
            Back to the blog
          </Link>
        </div>
      </section>
    );
  }

  const related = relatedPosts(post, 2);

  return (
    <>
      {/* ================= POST HERO ================= */}
      <section className="page-hero">
        <div className="container">
          <Reveal as="p" className="breadcrumb">Blog &middot; {post.category}</Reveal>
          <Reveal as="h1">{post.title}</Reveal>
          <Reveal className="post-meta">
            <span className="avatar">{initials(post.author)}</span>
            <span className="post-byline">
              <b>{post.author}</b>
              <span>
                {post.authorRole} &middot; {formatDate(post.date)} &middot; {readingTime(post)} min read
              </span>
            </span>
          </Reveal>
        </div>
      </section>

      {/* ================= ARTICLE ================= */}
      <section className="section">
        <div className="container">
          <Reveal className="post">{post.content.map(renderBlock)}</Reveal>
          <div className="post-footer">
            <Link className="btn btn-ghost" to="/blog">Back to all posts</Link>
          </div>
        </div>
      </section>

      {/* ================= RELATED ================= */}
      {related.length > 0 && (
        <section className="section" style={{ background: 'var(--mist)' }}>
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow center">Keep reading</p>
              <h2>More from the capital desk</h2>
            </div>
            <div className="blog-grid">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

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
