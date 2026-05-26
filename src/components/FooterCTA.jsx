import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

/* Word-level scroll reveal — each word gets its own derived motion value */
function RevealWord({ children, progress, wordIdx, totalWords, finalOpacity = 1 }) {
  const start = 0.05 + (wordIdx / totalWords) * 0.55;
  const end = Math.min(start + 0.1, 0.75);
  const opacity = useTransform(progress, [start, end], [0, finalOpacity]);
  const y = useTransform(progress, [start, end], [20, 0]);
  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block mr-[0.22em] will-change-transform"
    >
      {children}
    </motion.span>
  );
}

const whiteWords = ['Every', 'trade', 'your', 'audience', 'makes.'];
const dimWords = ['You', 'earn', 'a', 'cut.'];
const allWords = [
  ...whiteWords.map((w) => ({ w, dim: false })),
  ...dimWords.map((w) => ({ w, dim: true })),
];

/* Inline Liquid logo as stroke-only outline for the watermark */
function LogoWatermark() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
      <svg
        viewBox="0 0 2920.336 795.318"
        aria-hidden="true"
        style={{ width: '88%', maxWidth: 960, opacity: 0.055 }}
      >
        <g fill="none" stroke="white" strokeWidth="10">
          <path d="M724.169,639.854V41.448h111.201v499.64h280.542v98.766h-391.743,0Z" />
          <path d="M1163.042,639.85V209.098h104.594v430.753h-104.594ZM1158.908,146.85V37.294h113.708v109.556h-113.708Z" />
          <path d="M1534.388,646.488c-128.65,0-205.833-91.295-205.833-222.428s77.996-221.602,204.139-221.602c53.127,0,99.613,22.409,124.516,55.608v-48.968h104.56v585.956h-104.56v-205.833c-19.923,32.371-67.222,57.267-122.822,57.267h0ZM1549.33,556.023c68.882,0,114.521-52.287,114.521-131.963,0-78.847-45.639-131.136-114.521-131.136s-114.555,52.289-114.555,131.136,45.639,131.963,114.555,131.963Z" />
          <path d="M2239.403,209.099v430.752h-104.594v-66.395c-28.224,43.986-77.996,73.036-137.764,73.036-93.785,0-156.874-61.418-156.874-155.203V209.099h104.594v258.12c0,50.626,32.357,86.318,82.977,86.318,67.222,0,107.067-58.097,107.067-155.206v-189.231h104.594Z" />
          <path d="M2321.499,639.85V209.098h104.594v430.753h-104.594ZM2317.365,146.85V37.294h113.708v109.556h-113.708Z" />
          <path d="M2692.811,646.491c-128.65,0-205.833-91.298-205.833-222.432s78.03-221.602,204.173-221.602c53.127,0,99.579,22.409,124.482,55.608V34.804h104.594v605.046h-104.594v-50.626c-19.889,32.367-67.222,57.267-122.822,57.267h0ZM2707.754,556.023c68.882,0,114.521-52.287,114.521-131.963,0-78.847-45.639-131.136-114.521-131.136s-114.555,52.289-114.555,131.136,45.673,131.963,114.555,131.963Z" />
          <path d="M472.63,276.814L307.116,27.374c-23.108-34.845-74.269-34.845-97.411,0L44.209,276.814c-16.422,24.28-28.823,51.5-36.25,80.708-5.198,20.434-7.959,41.841-7.959,63.895,0,142.724,115.7,258.424,258.428,258.424s258.418-115.7,258.418-258.424c0-53.571-16.297-103.335-44.216-144.602h0Z" />
        </g>
      </svg>
    </div>
  );
}

export default function FooterCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);

  return (
    <section
      ref={ref}
      id="apply"
      className="py-40 px-6 relative overflow-hidden bg-[#0a0a0a]"
    >
      {/* Logo stroke watermark */}
      <LogoWatermark />

      {/* Concentric rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[640, 460, 310].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/[0.04]"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(ellipse at center, #1ECFB3 0%, transparent 65%)' }}
      />

      <motion.div style={{ scale }} className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Word-by-word scroll reveal headline */}
        <h2
          className="text-[clamp(2.5rem,7vw,4.8rem)] font-black leading-[1.1] tracking-[-0.04em] mb-10"
          aria-label="Every trade your audience makes. You earn a cut."
        >
          {allWords.map(({ w, dim }, i) => (
            <RevealWord
              key={i}
              progress={scrollYProgress}
              wordIdx={i}
              totalWords={allWords.length}
              finalOpacity={dim ? 0.28 : 1}
            >
              {w}
            </RevealWord>
          ))}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-5"
        >
          <Button asChild variant="primary" size="lg">
            <a href="https://www.liquid.trade/">
              Apply to the program <ArrowRight size={16} />
            </a>
          </Button>

          <p className="text-sm text-white/30">
            Questions? Find us on X →{' '}
            <a
              href="https://x.com/liquidtrading"
              className="text-white/50 hover:text-accent transition-colors duration-200"
            >
              @liquidtrading
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
