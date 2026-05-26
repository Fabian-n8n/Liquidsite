import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      {/* Ambient glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.07]"
          style={{
            background: 'radial-gradient(ellipse at center, #1ECFB3 0%, transparent 70%)',
            transform: 'translate(20%, -20%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-[0.04]"
          style={{
            background: 'radial-gradient(ellipse at center, #1ECFB3 0%, transparent 70%)',
            transform: 'translate(-30%, 30%)',
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Label */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="section-label">Affiliate Program</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[1.0] tracking-[-0.04em] mb-6"
          >
            The market never closes.{' '}
            <span className="text-white/35">
              Neither does your earning potential.
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={itemVariants}
            className="text-[1.125rem] text-white/55 leading-[1.7] mb-10 max-w-xl"
          >
            Liquid pays fee share on every trade your referrals make — settled in real time, straight to your non-custodial wallet.{' '}
            <span className="text-white/75 font-medium">Refer once. Earn forever.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <a href="#apply" className="btn-primary">
              Apply now
              <ArrowRight size={15} />
            </a>
            <a href="#how-it-works" className="btn-outline">
              How it works
            </a>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap gap-8"
          >
            {[
              { value: '$3B+', label: 'Platform volume' },
              { value: '50%', label: 'Max fee share' },
              { value: '500+', label: 'Markets' },
              { value: 'Real-time', label: 'Payouts to wallet' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                <div className="text-xs text-white/35 mt-0.5 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating dashboard card */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:block"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        >
          <div className="glass-card w-64 p-5 shadow-glass-accent">
            <div className="text-xs text-white/35 mb-1 font-medium">Total earnings</div>
            <div className="text-3xl font-black text-accent tracking-tight mb-4">$4,210.50</div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-white/35">Referral tier</span>
              <div className="flex gap-1.5">
                {['Silver', 'Gold', 'Platinum'].map((tier, i) => (
                  <span
                    key={tier}
                    className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      i === 1
                        ? 'bg-accent/20 text-accent border border-accent/30'
                        : 'bg-white/[0.06] text-white/30 border border-white/[0.06]'
                    }`}
                  >
                    {tier}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t border-white/[0.06] pt-3">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-white/35">This month</span>
                <span className="text-accent font-semibold">+$847.20</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-white/35">Referrals active</span>
                <span className="text-white/60 font-medium">12</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
}
