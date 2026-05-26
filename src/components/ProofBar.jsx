import { motion } from 'framer-motion';

const items = [
  '$3B+ in platform volume',
  'Up to 50% fee share',
  'Real-time payouts to your wallet',
  '500+ markets',
  'No KYC required',
  'Up to 200x leverage',
  'Real-time settlements',
  'Non-custodial payouts',
];

const Dot = () => (
  <span className="w-1 h-1 rounded-full bg-accent/50 inline-block mx-6 flex-shrink-0" />
);

export default function ProofBar() {
  const repeated = [...items, ...items];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-y border-white/[0.06] py-4 overflow-hidden bg-[#0a0a0a]"
    >
      <div className="ticker-track">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center flex-shrink-0">
            <span className="text-sm text-white/45 font-medium whitespace-nowrap">{item}</span>
            <Dot />
          </span>
        ))}
      </div>
    </motion.div>
  );
}
