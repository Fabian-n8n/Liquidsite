import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

const stats = [
  { value: '$3B+', label: 'Platform volume' },
  { value: '50%', label: 'Max fee share' },
  { value: '500+', label: 'Markets' },
  { value: 'Real-time', label: 'Payouts to wallet' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Right-side dim circular glow */}
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.045]"
          style={{ background: 'radial-gradient(circle at center, #1ECFB3 0%, transparent 60%)', transform: 'translate(30%, -50%)' }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-3xl">

          {/* Label */}
          <motion.div variants={itemVariants}>
            <span className="section-label">Affiliate Program</span>
          </motion.div>

          {/* Headline — exact copy from brief */}
          <motion.h1
            variants={itemVariants}
            className="mt-6 text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[1.02] tracking-[-0.04em]"
          >
            The market never closes.{' '}
            <span className="text-white/30">
              Neither does your earning potential.
            </span>
          </motion.h1>

          {/* Subhead — exact copy from brief */}
          <motion.p
            variants={itemVariants}
            className="mt-7 text-[1.125rem] text-white/55 leading-[1.75] max-w-xl"
          >
            Liquid pays fee share on every trade your referrals make — settled in real time, straight to your non-custodial wallet.{' '}
            <span className="text-white/80 font-medium">Refer once. Earn forever.</span>
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild variant="primary" size="lg">
              <a href="#apply">
                Apply now <ArrowRight size={16} />
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="mt-16 flex flex-wrap gap-x-10 gap-y-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-[1.6rem] font-black text-white tracking-[-0.03em]">{s.value}</div>
                <div className="text-xs text-white/35 mt-0.5 font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
}
