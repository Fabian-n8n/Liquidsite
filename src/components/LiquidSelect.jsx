import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const whoFor = [
  'Content creators',
  'Podcast hosts',
  'Publishers',
  'Media channels',
  'Community operators',
  'Trading educators',
  'Signal group leads',
];

const dealSteps = [
  { pct: '40%', label: 'Upfront at signing', accent: true },
  { pct: '60%', label: 'When you hit the milestone', accent: false },
];

export default function LiquidSelect() {
  return (
    <section id="liquid-select" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] opacity-[0.05]"
          style={{ background: 'radial-gradient(ellipse at center, #1ECFB3 0%, transparent 65%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label mb-4">Liquid Select</p>
            <h2 className="section-heading mb-6">
              Want a bigger deal?{' '}
              <span className="text-white/35">Let's structure one.</span>
            </h2>

            <p className="text-white/55 text-[1.0625rem] leading-[1.75] mb-4">
              If you move markets — not just audiences — Liquid Select is built for you.
            </p>

            <p className="text-white/55 text-[1.0625rem] leading-[1.75] mb-4">
              Here's exactly how it works: we agree on a deal size, your deliverables, and one clear performance milestone before anything is signed. You get 40% upfront. The other 60% unlocks the moment you hit the target. No ambiguity. No renegotiation. No "we'll figure it out after."
            </p>

            <p className="text-white/55 text-[1.0625rem] leading-[1.75] mb-10">
              The milestone is yours to negotiate — first-time depositors, trading volume, or a hybrid of both. Attribution window is locked at signing.
            </p>

            <Button asChild variant="primary">
              <a href="#apply">Apply for Select <ArrowRight size={15} /></a>
            </Button>
          </motion.div>

          {/* Right — deal structure card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            {/* Deal split card */}
            <div className="glass-card-accent p-6">
              <div className="text-xs font-semibold text-white/35 uppercase tracking-widest mb-5">Deal structure</div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {dealSteps.map((step) => (
                  <div
                    key={step.pct}
                    className={`rounded-xl p-4 border ${
                      step.accent
                        ? 'bg-accent/[0.08] border-accent/20'
                        : 'bg-white/[0.03] border-white/[0.06]'
                    }`}
                  >
                    <div className={`text-3xl font-black tracking-tight mb-1 ${step.accent ? 'text-accent' : 'text-white/50'}`}>
                      {step.pct}
                    </div>
                    <div className="text-xs text-white/40 font-medium">{step.label}</div>
                  </div>
                ))}
              </div>
              <div className="text-xs text-white/35 leading-[1.7]">
                Every variable locked in before you sign. Attribution window is fixed at signing.
              </div>
            </div>

            {/* Who this is for */}
            <div className="glass-card p-6">
              <div className="text-xs font-semibold text-white/35 uppercase tracking-widest mb-4">Who this is for</div>
              <div className="flex flex-wrap gap-2">
                {whoFor.map((who) => (
                  <span
                    key={who}
                    className="text-xs text-white/55 border border-white/[0.08] rounded-full px-3 py-1.5 font-medium bg-white/[0.03]"
                  >
                    {who}
                  </span>
                ))}
              </div>
              <p className="text-sm text-white/45 mt-5 leading-[1.7]">
                If your audience trades, apply. We'll take it from there.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
