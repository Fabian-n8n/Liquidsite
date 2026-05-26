import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      {/* Concentric rings — matches draft visual */}
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-[0.055]"
        style={{ background: 'radial-gradient(ellipse at center, #1ECFB3 0%, transparent 65%)' }}
      />

      <motion.div style={{ scale }} className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Headline — exact copy from brief */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,7vw,4.8rem)] font-black leading-[1.05] tracking-[-0.04em] mb-10"
        >
          Every trade your audience makes.{' '}
          <span className="text-white/28">You earn a cut.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-5"
        >
          {/* CTA — exact copy: "Apply to the program →" */}
          <Button asChild variant="primary" size="lg">
            <a href="https://www.liquid.trade/">
              Apply to the program <ArrowRight size={16} />
            </a>
          </Button>

          {/* Sub — exact copy: "Questions? Find us on X → @liquidtrading" */}
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
