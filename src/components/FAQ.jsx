import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Do I need a minimum follower count?',
    a: 'No. We care about audience fit, not audience size. If your followers trade, we want to work with you.',
  },
  {
    q: 'When do I get paid?',
    a: 'Revenue share hits your wallet in real time as your referrals trade. Liquid Select milestone payouts are processed within 5 business days of verification.',
  },
  {
    q: 'Can I run both tracks at the same time?',
    a: 'Yes. Revenue share runs continuously in the background. Liquid Select deals are campaign-specific. Both can run simultaneously.',
  },
  {
    q: 'What can my referrals trade?',
    a: 'Crypto, equities, pre-IPO, commodities, FX, and prediction markets. 500+ instruments. Up to 200x leverage. No KYC required.',
  },
  {
    q: 'How are Liquid Select milestones defined?',
    a: 'Agreed with you before you sign — a specific number of first-time depositors, a volume threshold, or both. Attribution window is fixed at signing. No surprises.',
  },
  {
    q: 'Is this open globally?',
    a: 'Yes. We welcome partners from everywhere.',
  },
];

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="faq-item">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className={`text-[15px] font-medium transition-colors duration-200 ${isOpen ? 'text-white' : 'text-white/65 group-hover:text-white'}`}>
          {q}
        </span>
        <span className={`ml-6 flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
          isOpen
            ? 'border-accent/40 bg-accent/10 text-accent'
            : 'border-white/[0.1] text-white/30 group-hover:border-white/20 group-hover:text-white/60'
        }`}>
          {isOpen ? <Minus size={12} /> : <Plus size={12} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-white/50 leading-[1.8] pb-5 pr-10">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-black text-white/80 tracking-tight leading-tight">
          Frequently Asked Questions
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto"
      >
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            q={faq.q}
            a={faq.a}
            isOpen={open === i}
            onClick={() => toggle(i)}
          />
        ))}
      </motion.div>
    </section>
  );
}
