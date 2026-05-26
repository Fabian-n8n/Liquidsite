import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

export default function TypewriterHeading({ white, dim, className = 'section-heading', as: Tag = 'h2' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);
  const total = white.length + (dim ? dim.length : 0);

  useEffect(() => {
    if (!isInView || count >= total) return;
    const t = setTimeout(() => setCount((c) => Math.min(c + 1, total)), 26);
    return () => clearTimeout(t);
  }, [isInView, count, total]);

  const whiteText = white.slice(0, Math.min(count, white.length));
  const dimText = dim ? dim.slice(0, Math.max(0, count - white.length)) : '';
  const isDone = count >= total;

  return (
    <Tag ref={ref} className={className} aria-label={white + (dim || '')}>
      <span aria-hidden="true">
        {whiteText}
        {dim && <span className="text-white/35">{dimText}</span>}
        {isInView && !isDone && (
          <span
            className="inline-block w-[2px] bg-white/50 align-middle animate-pulse ml-[1px]"
            style={{ height: '0.82em' }}
          />
        )}
      </span>
    </Tag>
  );
}
