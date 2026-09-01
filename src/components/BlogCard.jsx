import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import { ArrowIcon } from './icons.jsx';
import { formatDate, readingTime } from '../blog/posts.js';

export default function BlogCard({ post, featured = false }) {
  return (
    <Reveal
      as="article"
      className={featured ? 'blog-card featured' : 'blog-card'}
    >
      <div className="blog-cover" aria-hidden="true">
        <span className="glyph">{post.category[0]}</span>
      </div>
      <div className="blog-body">
        <div className="blog-meta">
          <span className="tag">{post.category}</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{readingTime(post)} min read</span>
        </div>
        <h3>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="excerpt">{post.excerpt}</p>
        <Link className="card-link" to={`/blog/${post.slug}`}>
          Read article <ArrowIcon />
        </Link>
      </div>
    </Reveal>
  );
}
