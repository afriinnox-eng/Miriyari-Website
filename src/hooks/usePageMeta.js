import { useEffect } from 'react';

/** Set the document title + meta description for each page. */
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
  }, [title, description]);
}
