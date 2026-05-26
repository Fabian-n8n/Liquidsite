import { motion } from 'framer-motion';
import { Check, Zap, Crown } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const revenueFeatures = [
  'Paid directly to your non-custodial wallet as trades happen',
  'No minimum. No expiry. No ceiling.',
  'Open application. Self-serve.',
];

const selectFeatures = [
  '40% on signing. 60% when you hit the milestone.',
  'Your unlock metric is agreed before anything is signed.',
  'Invite or application only. Floor: $200.',
];

export default function TwoTracks() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="section-label mb-4">Two Tracks</p>
        <h2 className="section-heading">
          Two ways to get paid
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-5"
      >
        {/* Revenue Share */}
        <motion.div variants={cardVariants}>
          <div className="glass-card h-full p-8 hover:border-white/[0.12] transition-all duration-300 group">
            <div className="flex items-start justify-between mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Zap size={18} className="text-accent" />
              </div>
              <span className="text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                Always On
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
              Revenue Share
            </h3>
            <div className="text-xs text-white/35 font-medium mb-5">always on</div>

            <p className="text-white/55 text-sm leading-[1.75] mb-8">
              Every trade your referrals make earns you fee share. Automatically. In real time. No invoices, no payout windows, no cap on what you can earn. Your rate scales as your referred volume grows.
            </p>

            <ul className="space-y-3 mb-10">
              {revenueFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                  <Check size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a href="#apply" className="btn-primary w-full justify-center">
              Apply now
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Liquid Select */}
        <motion.div variants={cardVariants}>
          <div className="glass-card-accent h-full p-8 hover:border-accent/40 transition-all duration-300 group relative">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'radial-gradient(ellipse at top right, rgba(30,207,179,0.06) 0%, transparent 60%)' }}
            />

            <div className="relative">
              <div className="flex items-start justify-between mb-8">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Crown size={18} className="text-accent" />
                </div>
                <span className="text-xs font-semibold text-white/50 bg-white/[0.06] border border-white/[0.08] px-3 py-1 rounded-full">
                  Invite / Application
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                Liquid Select
              </h3>
              <div className="text-xs text-white/35 font-medium mb-5">for partners with leverage</div>

              <p className="text-white/55 text-sm leading-[1.75] mb-8">
                You've got a real audience and you can commit to deliverables. We'll structure a deal: get paid upfront at signing, unlock the rest when you hit an agreed goal — traders onboarded, volume driven, or both. Every variable locked in before you sign.
              </p>

              <ul className="space-y-3 mb-10">
                {selectFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                    <Check size={14} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#liquid-select" className="btn-outline w-full justify-center">
                Learn about Select
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
