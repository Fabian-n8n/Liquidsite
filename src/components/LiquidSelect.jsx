import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypewriterHeading from '@/components/TypewriterHeading';

const dealSteps = [
  { pct: '40%', label: 'Upfront at signing', accent: true },
  { pct: '60%', label: 'When you hit the milestone', accent: false },
];

/* DiceBear lorelei — anime-style illustrated avatars, each with unique seed + bg */
const whoFor = [
  {
    role: 'Content Creators',
    handle: '@creator',
    avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=SakuraFilms&backgroundColor=ffd5dc&backgroundType=solid',
    bg: '#FF6B6B',
    desc: 'YouTube, TikTok, Instagram — your audience watches. Now they can earn.',
    tags: ['YouTube', 'TikTok'],
  },
  {
    role: 'Podcast Hosts',
    handle: '@podcast',
    avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=MikePodcast&backgroundColor=d5b9f5&backgroundType=solid',
    bg: '#A855F7',
    desc: "Listeners trust your voice. Turn that trust into real-time revenue.",
    tags: ['Spotify', 'Apple Podcasts'],
  },
  {
    role: 'Publishers',
    handle: '@publisher',
    avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=AkiraPress&backgroundColor=b6d5f5&backgroundType=solid',
    bg: '#3B82F6',
    desc: 'Editorial reach meets trading intelligence. Monetize your readership.',
    tags: ['Newsletter', 'Blog'],
  },
  {
    role: 'Media Channels',
    handle: '@media',
    avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=YukiNews&backgroundColor=b6f5f0&backgroundType=solid',
    bg: '#06B6D4',
    desc: 'Broadcast to thousands. Your earnings scale with your reach.',
    tags: ['Telegram', 'Discord'],
  },
  {
    role: 'Community Operators',
    handle: '@community',
    avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=HanaGroup&backgroundColor=b6f5c8&backgroundType=solid',
    bg: '#10B981',
    desc: 'Your Discord or Telegram members are your revenue engine.',
    tags: ['Discord', 'Community'],
  },
  {
    role: 'Trading Educators',
    handle: '@educator',
    avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=KaiTeacher&backgroundColor=f5e6b6&backgroundType=solid',
    bg: '#F59E0B',
    desc: 'Teach trading. Earn every time a student executes a trade.',
    tags: ['Courses', 'Live Trading'],
  },
  {
    role: 'Signal Group Leads',
    handle: '@signals',
    avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=ReiSignals&backgroundColor=f5b6e6&backgroundType=solid',
    bg: '#EC4899',
    desc: 'Your calls move markets. Now they move your wallet too.',
    tags: ['Crypto', 'Signals'],
  },
];

function AvatarCarousel() {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIdx((i) => (i + 1) % whoFor.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const person = whoFor[idx];

  return (
    <div className="glass-card p-6 overflow-hidden">
      <div className="text-xs font-semibold text-white/35 uppercase tracking-widest mb-5">
        Who this is for
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={idx}
          custom={direction}
          variants={{
            enter: (d) => ({ opacity: 0, y: d * 16 }),
            center: { opacity: 1, y: 0 },
            exit: (d) => ({ opacity: 0, y: d * -16 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Avatar row */}
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-14 h-14 rounded-full flex-shrink-0 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              style={{ background: person.bg + '33', border: `1.5px solid ${person.bg}44` }}
            >
              <img
                src={person.avatar}
                alt={person.role}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  /* fallback: show colored initial circle */
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = person.bg;
                }}
              />
            </div>
            <div>
              <div className="font-bold text-white tracking-tight text-[0.95rem]">
                {person.role}
              </div>
              <div className="text-xs text-white/35 font-mono mt-0.5">{person.handle}</div>
            </div>
          </div>

          <p className="text-sm text-white/50 leading-[1.7] mb-4">{person.desc}</p>

          <div className="flex flex-wrap gap-2">
            {person.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-white/40 border border-white/[0.08] rounded-full px-3 py-1 bg-white/[0.02] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="flex gap-1.5 mt-5">
        {whoFor.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > idx ? 1 : -1);
              setIdx(i);
            }}
            className={`h-[3px] rounded-full transition-all duration-300 ${
              i === idx ? 'w-6 bg-accent' : 'w-[6px] bg-white/20 hover:bg-white/35'
            }`}
            aria-label={`Go to ${whoFor[i].role}`}
          />
        ))}
      </div>

      <p className="text-xs text-white/35 mt-4 leading-[1.7]">
        If your audience trades, apply. We'll take it from there.
      </p>
    </div>
  );
}

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
            <TypewriterHeading
              white="Want a bigger deal? "
              dim="Let's structure one."
              className="section-heading mb-6"
            />

            <p className="text-white/55 text-[1.0625rem] leading-[1.75] mb-4">
              If you move markets — not just audiences — Liquid Select is built for you.
            </p>

            <p className="text-white/55 text-[1.0625rem] leading-[1.75] mb-4">
              Here's exactly how it works: we agree on a deal size, your deliverables, and one
              clear performance milestone before anything is signed. You get 40% upfront. The
              other 60% unlocks the moment you hit the target. No ambiguity. No renegotiation.
              No "we'll figure it out after."
            </p>

            <p className="text-white/55 text-[1.0625rem] leading-[1.75] mb-10">
              The milestone is yours to negotiate — first-time depositors, trading volume, or a
              hybrid of both. Attribution window is locked at signing.
            </p>

            <Button asChild variant="primary">
              <a href="#apply">
                Apply for Select <ArrowRight size={15} />
              </a>
            </Button>
          </motion.div>

          {/* Right — cards */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            {/* Deal split card */}
            <div className="glass-card-accent p-6">
              <div className="text-xs font-semibold text-white/35 uppercase tracking-widest mb-5">
                Deal structure
              </div>
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
                    <div
                      className={`text-3xl font-black tracking-tight mb-1 ${
                        step.accent ? 'text-accent' : 'text-white/50'
                      }`}
                    >
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

            {/* Avatar carousel */}
            <AvatarCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
