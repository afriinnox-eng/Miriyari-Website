import { useEffect, useRef } from 'react';

/** Reveal-on-scroll wrapper. Adds the .in class when the element enters the viewport. */
export default function Reveal({ as: Tag = 'div', delay, className = '', style, children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.classList.add('in');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${className ? ` ${className}` : ''}`}
      style={{ ...(delay ? { transitionDelay: delay } : {}), ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
