import { motion } from 'framer-motion';
import TypewriterHeading from '@/components/TypewriterHeading';

const steps = [
  {
    num: '01',
    title: 'Apply',
    desc: 'Short application. Tell us about your audience and how you create. We review everything manually and follow up within a few business days. No follower count minimum.',
    mockup: <ApplyMockup />,
  },
  {
    num: '02',
    title: 'Get your link',
    desc: 'One referral link. One code. Works across every platform — X, YouTube, Telegram, newsletters, podcasts, Discord. Everything tracked in one dashboard.',
    mockup: <LinkMockup />,
  },
  {
    num: '03',
    title: 'Get paid as they trade',
    desc: 'The moment your referral executes a trade, fee share settles to your wallet. Not at end of month. Right then. Tier up automatically as your volume grows.',
    mockup: <EarnMockup />,
  },
];

function ApplyMockup() {
  return (
    <div className="ui-mockup">
      <div className="ui-label">Email</div>
      <div className="ui-field">you@example.com</div>
      <div className="ui-label">Platform / Audience</div>
      <div className="ui-field">@yourhandle</div>
      <div className="ui-label">About your audience</div>
      <div className="ui-field" style={{ height: 48 }}></div>
      <button className="ui-btn mt-1">Submit Application</button>
    </div>
  );
}

function LinkMockup() {
  return (
    <div className="ui-mockup">
      <div className="ui-label">Your referral link</div>
      <div className="ui-field flex items-center" style={{ color: 'rgba(30,207,179,0.9)', borderColor: 'rgba(30,207,179,0.2)' }}>
        liquid.trade/r/yourname
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="ui-tag">+12</span>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', fontFamily: 'Inter, sans-serif' }}>
          12 referrals this month
        </span>
      </div>
      <div className="mt-3 border-t border-white/[0.06] pt-3">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem', fontFamily: 'Inter, sans-serif' }}>Total clicks</span>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>1,204</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem', fontFamily: 'Inter, sans-serif' }}>Conversion rate</span>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>1.0%</span>
        </div>
      </div>
    </div>
  );
}

function EarnMockup() {
  return (
    <div className="ui-mockup">
      <div className="ui-label">Total earnings</div>
      <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1ECFB3', letterSpacing: '-0.03em', fontFamily: 'Inter, sans-serif', marginBottom: 12 }}>
        $4,210.50
      </div>
      <div className="ui-label">Referral tier</div>
      <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
        {['Silver', 'Gold', 'Platinum'].map((t, i) => (
          <span
            key={t}
            style={{
              fontSize: '0.6rem',
              padding: '3px 8px',
              borderRadius: 100,
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              background: i === 1 ? 'rgba(30,207,179,0.15)' : 'rgba(255,255,255,0.05)',
              color: i === 1 ? '#1ECFB3' : 'rgba(255,255,255,0.3)',
              border: `1px solid ${i === 1 ? 'rgba(30,207,179,0.25)' : 'rgba(255,255,255,0.06)'}`,
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="border-t border-white/[0.06] pt-3">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem', fontFamily: 'Inter, sans-serif' }}>Today</span>
          <span style={{ color: '#1ECFB3', fontSize: '0.65rem', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>+$84.20</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem', fontFamily: 'Inter, sans-serif' }}>Last payout</span>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>2 min ago</span>
        </div>
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-4">How It Works</p>
          <TypewriterHeading white="Three steps, then " dim="you're earning" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {steps.map((step) => (
            <motion.div key={step.num} variants={cardVariants}>
              <div className="glass-card h-full flex flex-col hover:border-white/[0.12] transition-all duration-300 group overflow-hidden">
                {/* Mockup area */}
                <div className="p-6 pb-0">
                  <div className="bg-[#0d0d0d] border border-white/[0.05] rounded-xl p-4 mb-0">
                    {step.mockup}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="step-number mb-3">{step.num}</div>
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-sm text-white/50 leading-[1.75] flex-1">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
