import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import TypewriterHeading from '@/components/TypewriterHeading';

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

export default function FAQ() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <TypewriterHeading
          white="Frequently Asked Questions"
          className="text-[clamp(2rem,5vw,3rem)] font-black text-white/80 tracking-[-0.03em] leading-tight"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
