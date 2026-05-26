import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypewriterHeading from '@/components/TypewriterHeading';

/* Drop icon outline — just the Liquid teardrop, no wordmark */
function DropWatermark() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
      <svg
        viewBox="40 20 440 665"
        aria-hidden="true"
        style={{ width: 340, height: 340, opacity: 0.07 }}
      >
        <path
          d="M472.63,276.814L307.116,27.374c-23.108-34.845-74.269-34.845-97.411,0L44.209,276.814c-16.422,24.28-28.823,51.5-36.25,80.708-5.198,20.434-7.959,41.841-7.959,63.895,0,142.724,115.7,258.424,258.428,258.424s258.418-115.7,258.418-258.424c0-53.571-16.297-103.335-44.216-144.602h0Z"
          fill="none"
          stroke="white"
          strokeWidth="14"
        />
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
      {/* Drop icon watermark */}
      <DropWatermark />

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
        <TypewriterHeading
          white="Every trade your audience makes. "
          dim="You earn a cut."
          className="text-[clamp(2.5rem,7vw,4.8rem)] font-black leading-[1.05] tracking-[-0.04em] mb-10"
        />

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
