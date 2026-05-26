import { motion } from 'framer-motion';

const benefits = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="#1ECFB3" strokeWidth="1.5"/>
        <path d="M6 8h8M6 12h5" stroke="#1ECFB3" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Exclusive Merch',
    desc: 'Get access to limited-edition Liquid gear and swag drops only available to our affiliate partners.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l1.5 4.5H16l-3.7 2.7 1.4 4.3L10 11l-3.7 2.5 1.4-4.3L4 6.5h4.5L10 2z" stroke="#1ECFB3" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Early Access',
    desc: 'Be the first to try new features, products, and updates before they launch to the public.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2a8 8 0 100 16A8 8 0 0010 2z" stroke="#1ECFB3" strokeWidth="1.5"/>
        <path d="M10 6v4l3 3" stroke="#1ECFB3" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Special Offers',
    desc: 'Earn special promotions and bonus opportunities throughout the year as an active affiliate.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="6" cy="10" r="3" stroke="#1ECFB3" strokeWidth="1.5"/>
        <circle cx="14" cy="6" r="3" stroke="#1ECFB3" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="3" stroke="#1ECFB3" strokeWidth="1.5"/>
        <path d="M9 10h2M11 7l2-1M11 13l2 1" stroke="#1ECFB3" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Share Exclusive Promos',
    desc: 'Give your audience exclusive deals and promo codes they can not find anywhere else.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 14l3-5 3 3 3-7 3 4" stroke="#1ECFB3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Insights & News',
    desc: 'Stay ahead with insider updates, market insights, and early access to Liquid announcements.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 4h12a2 2 0 012 2v6a2 2 0 01-2 2H8l-4 3V6a2 2 0 012-2z" stroke="#1ECFB3" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Connect with Liquid 1-1',
    desc: 'Get direct access to the Liquid team for personalized support, strategy sessions, and partnership opportunities.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function WhyLiquid() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="section-heading">
          Why become a Liquid affiliate?{' '}
          <span className="text-white/30">More than just commissions.</span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {benefits.map((b) => (
          <motion.div key={b.title} variants={cardVariants}>
            <div className="glass-card h-full p-6 hover:border-white/[0.12] hover:bg-[#141414] transition-all duration-300 group cursor-default">
              <div className="w-9 h-9 rounded-lg bg-accent/[0.08] border border-accent/[0.15] flex items-center justify-center mb-6 group-hover:bg-accent/[0.12] group-hover:border-accent/25 transition-all duration-300">
                {b.icon}
              </div>

              {/* Placeholder image area */}
              <div className="h-20 mb-6 rounded-lg bg-white/[0.02] border border-white/[0.04]" />

              <h3 className="text-[15px] font-semibold text-white mb-2 tracking-tight">{b.title}</h3>
              <p className="text-sm text-white/45 leading-[1.7]">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
