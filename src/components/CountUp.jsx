import { useEffect, useRef, useState } from 'react';

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
  return inView;
}

/** Animated stat number: counts 0 → `to` once it scrolls into view. */
export default function CountUp({ to, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    let start = null;
    let raf;
    const step = (ts) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <b ref={ref}>
      {prefix}
      <span>{Math.round(val).toLocaleString('en-US')}</span>
      {suffix}
    </b>
  );
}
