import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import TypewriterHeading from '@/components/TypewriterHeading';

/* ── Cursor SVG ─────────────────────────────────────────────────────────── */
function CursorIcon({ pressed }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.7))' }}
    >
      <path
        d="M4.5 2L17 11L11.2 12.5L8.5 18.5L4.5 2Z"
        fill={pressed ? '#1ECFB3' : 'white'}
        stroke="rgba(0,0,0,0.25)"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Card 1 — Apply ─────────────────────────────────────────────────────── */
function ApplyMockup({ hovered }) {
  const [pressed, setPressed] = useState(false);
  const btnCtrl = useAnimation();
  const cursorCtrl = useAnimation();

  useEffect(() => {
    let t1, t2, t3;
    if (hovered) {
      // cursor slides in from bottom-right toward the button
      cursorCtrl.start({ opacity: 1, x: 0, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } });
      // then button presses
      t1 = setTimeout(() => {
        setPressed(true);
        btnCtrl.start({ scale: 0.96, transition: { duration: 0.1 } });
        t2 = setTimeout(() => {
          setPressed(false);
          btnCtrl.start({ scale: 1, transition: { duration: 0.18, ease: 'easeOut' } });
        }, 180);
      }, 500);
    } else {
      cursorCtrl.start({ opacity: 0, x: 36, y: 28, transition: { duration: 0.18 } });
      setPressed(false);
      btnCtrl.start({ scale: 1 });
    }
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [hovered]);

  return (
    <div style={{ position: 'relative' }}>
      <div className="ui-label">Email</div>
      <div className="ui-field">you@example.com</div>
      <div className="ui-label">Platform / Audience</div>
      <div className="ui-field">@yourhandle</div>
      <div className="ui-label">About your audience</div>
      <div className="ui-field" style={{ height: 46 }} />
      <motion.button animate={btnCtrl} className="ui-btn mt-1" style={{ cursor: 'default' }}>
        Submit Application
      </motion.button>

      {/* Cursor — starts below-right, arrives at button */}
      <motion.div
        animate={cursorCtrl}
        initial={{ opacity: 0, x: 36, y: 28 }}
        style={{ position: 'absolute', bottom: 9, right: 22, pointerEvents: 'none' }}
      >
        <CursorIcon pressed={pressed} />
      </motion.div>
    </div>
  );
}

/* ── Card 2 — Get your link ─────────────────────────────────────────────── */
function LinkMockup({ hovered }) {
  const fieldCtrl = useAnimation();
  const cursorCtrl = useAnimation();

  useEffect(() => {
    let t1;
    if (hovered) {
      cursorCtrl.start({ opacity: 1, x: 0, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } });
      t1 = setTimeout(() => {
        fieldCtrl.start({
          borderColor: 'rgba(30,207,179,0.55)',
          backgroundColor: 'rgba(30,207,179,0.06)',
          transition: { duration: 0.22 },
        });
      }, 480);
    } else {
      cursorCtrl.start({ opacity: 0, x: -28, y: -18, transition: { duration: 0.18 } });
      fieldCtrl.start({ borderColor: 'rgba(30,207,179,0.2)', backgroundColor: 'transparent', transition: { duration: 0.25 } });
    }
    return () => clearTimeout(t1);
  }, [hovered]);

  return (
    <div style={{ position: 'relative' }}>
      <div className="ui-label">Your referral link</div>
      <motion.div
        animate={fieldCtrl}
        initial={{ borderColor: 'rgba(30,207,179,0.2)', backgroundColor: 'transparent' }}
        className="ui-field"
        style={{ color: 'rgba(30,207,179,0.9)', border: '1px solid rgba(30,207,179,0.2)', marginBottom: 10 }}
      >
        liquid.trade/r/yourname
      </motion.div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <span className="ui-tag">+12</span>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem' }}>12 referrals this month</span>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem' }}>Total clicks</span>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem', fontWeight: 600 }}>1,204</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem' }}>Conversion rate</span>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem', fontWeight: 600 }}>1.0%</span>
        </div>
      </div>

      {/* Cursor — arrives at the link field from upper-left */}
      <motion.div
        animate={cursorCtrl}
        initial={{ opacity: 0, x: -28, y: -18 }}
        style={{ position: 'absolute', top: 28, right: 12, pointerEvents: 'none' }}
      >
        <CursorIcon />
      </motion.div>
    </div>
  );
}

/* ── Card 3 — Get paid ──────────────────────────────────────────────────── */
function EarnMockup({ hovered }) {
  const earningsCtrl = useAnimation();
  const todayCtrl = useAnimation();
  const cursorCtrl = useAnimation();

  useEffect(() => {
    let t1;
    if (hovered) {
      cursorCtrl.start({ opacity: 1, x: 0, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } });
      t1 = setTimeout(() => {
        earningsCtrl.start({
          scale: [1, 1.05, 1],
          transition: { duration: 0.45, ease: 'easeInOut' },
        });
        todayCtrl.start({
          opacity: [1, 0.4, 1],
          transition: { duration: 0.4 },
        });
      }, 480);
    } else {
      cursorCtrl.start({ opacity: 0, x: 24, y: -22, transition: { duration: 0.18 } });
      earningsCtrl.start({ scale: 1 });
      todayCtrl.start({ opacity: 1 });
    }
    return () => clearTimeout(t1);
  }, [hovered]);

  return (
    <div style={{ position: 'relative' }}>
      <div className="ui-label">Total earnings</div>
      <motion.div
        animate={earningsCtrl}
        style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1ECFB3', letterSpacing: '-0.03em', marginBottom: 12, display: 'inline-block' }}
      >
        $4,210.50
      </motion.div>

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
              background: i === 1 ? 'rgba(30,207,179,0.15)' : 'rgba(255,255,255,0.05)',
              color: i === 1 ? '#1ECFB3' : 'rgba(255,255,255,0.3)',
              border: `1px solid ${i === 1 ? 'rgba(30,207,179,0.25)' : 'rgba(255,255,255,0.06)'}`,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem' }}>Today</span>
          <motion.span animate={todayCtrl} style={{ color: '#1ECFB3', fontSize: '0.65rem', fontWeight: 600 }}>
            +$84.20
          </motion.span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem' }}>Last payout</span>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem', fontWeight: 600 }}>2 min ago</span>
        </div>
      </div>

      {/* Cursor — arrives at the earnings figure from upper-right */}
      <motion.div
        animate={cursorCtrl}
        initial={{ opacity: 0, x: 24, y: -22 }}
        style={{ position: 'absolute', top: 30, right: 8, pointerEvents: 'none' }}
      >
        <CursorIcon />
      </motion.div>
    </div>
  );
}

/* ── Mockup lookup ──────────────────────────────────────────────────────── */
const MockupComponents = [ApplyMockup, LinkMockup, EarnMockup];

const stepsData = [
  {
    num: '01',
    title: 'Apply',
    desc: 'Short application. Tell us about your audience and how you create. We review everything manually and follow up within a few business days. No follower count minimum.',
  },
  {
    num: '02',
    title: 'Get your link',
    desc: 'One referral link. One code. Works across every platform — X, YouTube, Telegram, newsletters, podcasts, Discord. Everything tracked in one dashboard.',
  },
  {
    num: '03',
    title: 'Get paid as they trade',
    desc: 'The moment your referral executes a trade, fee share settles to your wallet. Not at end of month. Right then. Tier up automatically as your volume grows.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function StepCard({ step, index }) {
  const [hovered, setHovered] = useState(false);
  const Mockup = MockupComponents[index];

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="glass-card h-full flex flex-col transition-all duration-300 overflow-hidden"
        style={{ borderColor: hovered ? 'rgba(255,255,255,0.12)' : undefined }}
      >
        {/* Mockup area */}
        <div className="p-6 pb-0">
          <div className="bg-[#0d0d0d] border border-white/[0.05] rounded-xl p-4">
            <Mockup hovered={hovered} />
          </div>
        </div>

        {/* Content — justified to bottom so all cards align */}
        <div className="p-6 flex-1 flex flex-col justify-end">
          <div className="step-number mb-3">{step.num}</div>
          <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{step.title}</h3>
          <p className="text-sm text-white/50 leading-[1.75]">{step.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Section ────────────────────────────────────────────────────────────── */
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
          {stepsData.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
