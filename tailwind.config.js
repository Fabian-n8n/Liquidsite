/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#1ECFB3',
        'accent-dim': '#16A898',
        'accent-glow': 'rgba(30,207,179,0.15)',
        bg: '#080808',
        'bg-elevated': '#0f0f0f',
        'bg-card': '#111111',
        'bg-card-hover': '#161616',
        'border-subtle': 'rgba(255,255,255,0.07)',
        'border-accent': 'rgba(30,207,179,0.25)',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'radial-accent': 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,207,179,0.12) 0%, transparent 60%)',
        'radial-hero': 'radial-gradient(ellipse 60% 80% at 70% 40%, rgba(30,207,179,0.08) 0%, transparent 60%)',
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
      },
      animation: {
        'ticker': 'ticker 28s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.3s cubic-bezier(0.87, 0, 0.13, 1)',
        'accordion-up': 'accordion-up 0.3s cubic-bezier(0.87, 0, 0.13, 1)',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      boxShadow: {
        'glass': '0 0 0 1px rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.4)',
        'glass-accent': '0 0 0 1px rgba(30,207,179,0.2), 0 4px 24px rgba(30,207,179,0.1)',
        'glow': '0 0 40px rgba(30,207,179,0.2)',
      },
    },
  },
  plugins: [],
};
