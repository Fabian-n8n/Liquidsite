import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import liquidLogo from '@/assets/liquid-logo.svg';

const navLinks = [
  { label: 'Markets', href: 'https://www.liquid.trade/' },
  { label: 'Predictions', href: 'https://www.liquid.trade/' },
  { label: 'Blog', href: 'https://www.liquid.trade/' },
  { label: 'Changelog', href: 'https://www.liquid.trade/' },
  { label: 'Support', href: 'https://www.liquid.trade/' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/[0.07]'
            : 'bg-transparent border-b border-transparent'
        }`}
        style={scrolled ? {
          background: 'linear-gradient(180deg, rgba(10,10,10,0.85) 0%, rgba(8,8,8,0.75) 100%)',
          backdropFilter: 'blur(24px) saturate(160%)',
          WebkitBackdropFilter: 'blur(24px) saturate(160%)',
          boxShadow: '0 1px 0 0 rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.3)',
        } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="https://www.liquid.trade/" className="flex items-center group">
            <img src={liquidLogo} alt="Liquid" height="28" style={{ height: '28px', width: 'auto' }} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#apply"
              className="hidden md:inline-flex btn-primary text-sm py-2 px-5"
            >
              Start trading
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <button
              className="md:hidden text-white/60 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#0f0f0f]/95 backdrop-blur-xl border-b border-white/[0.06] p-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/60 hover:text-white text-base font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#apply" className="btn-primary mt-2 justify-center" onClick={() => setMenuOpen(false)}>
                Start trading
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
