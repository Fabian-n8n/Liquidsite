import { motion } from 'framer-motion';
import { Check, Zap, Crown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypewriterHeading from '@/components/TypewriterHeading';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

/* Copy pulled directly from Website Copy.pdf */
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
        <TypewriterHeading white="Two ways to get paid" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-5"
      >
        {/* Revenue Share */}
        <motion.div variants={cardVariants} className="h-full">
          <div className="glass-card h-full p-8 hover:border-white/[0.13] transition-all duration-300 group flex flex-col">
            <div className="flex items-start justify-between mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Zap size={18} className="text-accent" />
              </div>
              <span className="text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                Always On
              </span>
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight">Revenue Share</h3>
            <p className="text-xs text-white/35 font-medium mt-1 mb-5">always on</p>

            <p className="text-sm text-white/55 leading-[1.8] mb-8">
              Every trade your referrals make earns you fee share. Automatically. In real time. No invoices, no payout windows, no cap on what you can earn. Your rate scales as your referred volume grows.
            </p>

            <ul className="space-y-3 mb-10 flex-1">
              {revenueFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                  <Check size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Button asChild variant="primary" className="w-full">
              <a href="#apply">Apply now <ArrowRight size={14} /></a>
            </Button>
          </div>
        </motion.div>

        {/* Liquid Select */}
        <motion.div variants={cardVariants} className="h-full">
          <div className="glass-card-accent h-full p-8 hover:border-accent/40 transition-all duration-300 group relative flex flex-col overflow-hidden">
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at top right, rgba(30,207,179,0.07) 0%, transparent 60%)' }} />

            <div className="relative flex flex-col flex-1">
              <div className="flex items-start justify-between mb-8">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Crown size={18} className="text-accent" />
                </div>
                <span className="text-xs font-semibold text-white/50 bg-white/[0.06] border border-white/[0.08] px-3 py-1 rounded-full">
                  Invite / Application
                </span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">Liquid Select</h3>
              <p className="text-xs text-white/35 font-medium mt-1 mb-5">for partners with leverage</p>

              <p className="text-sm text-white/55 leading-[1.8] mb-8">
                You've got a real audience and you can commit to deliverables. We'll structure a deal: get paid upfront at signing, unlock the rest when you hit an agreed goal — traders onboarded, volume driven, or both. Every variable locked in before you sign.
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {selectFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                    <Check size={14} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button asChild variant="outline" className="w-full">
                <a href="#liquid-select">Learn about Select</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
