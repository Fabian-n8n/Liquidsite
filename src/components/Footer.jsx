import { motion } from 'framer-motion';
import liquidLogo from '@/assets/liquid-logo.svg';

const markets = {
  CRYPTO: ['BTC', 'ETH', 'SOL', 'LINK', 'DOGE'],
  STOCKS: ['TSLA', 'AAPL', 'NVDA', 'GOOG'],
  COMMODITIES: ['Gold', 'Silver', 'Oil', 'Copper'],
  FOREX: ['EUR/USD', 'GBP/USD', 'USD/JPY'],
  'PRE-IPO': ['SpaceX', 'OpenAI', 'Anthropic'],
};

const predictions = {
  POLITICS: ['Dem Nominee 2028', 'Trump Visits China', 'GOP Nominee 2028', 'US-Iran Ceasefire'],
  SPORTS: ["FIFA World Cup '26", "NCAA Tournament '26", "F1 Champion '26"],
  FINANCE: ['Kraken IPO', 'SPCE Earnings', 'Consensys IPO', 'MicroStrategy Sells BTC'],
  TECH: ['OpenAI Hardware', 'GPT-6 Release', 'ChatGPT Outage', 'Tesla Q1 Deliveries'],
  CLIMATE: ["March '26 Temp", '7.0+ Earthquakes', 'Artemis II', 'Starship Reusable'],
};

const blog = {
  TRADING: ['Leverage Trading', 'Short Selling', 'Liquidation'],
  RISK: ['Stop Loss', 'Short Squeeze', 'Cross vs Isolated'],
  MECHANICS: ['Funding Rates', 'Airdrop Farming'],
  'PRE-IPO': ['SpaceX Perps', 'OpenAI Perps', 'Anthropic Perps'],
};

const company = ['Support', 'Docs', 'Terms of Service', 'Privacy Policy', 'Careers', 'Brand Kit', 'Audits'];
const social = ['X', 'TikTok', 'Instagram', 'Youtube', 'Telegram', 'Discord', 'LinkedIn'];

function Column({ heading, items }) {
  return (
    <div>
      <div className="text-[10px] font-semibold text-white/25 uppercase tracking-widest mb-3">{heading}</div>
      {items.map((item) => (
        <a key={item} href="https://www.liquid.trade/" className="block text-sm text-white/45 hover:text-white/70 transition-colors duration-150 mb-1.5">
          {item}
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-white/[0.06] bg-[#080808]"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Markets */}
          <div>
            <div className="text-sm font-semibold text-white/60 mb-4">Markets</div>
            {Object.entries(markets).map(([cat, items]) => (
              <Column key={cat} heading={cat} items={items} />
            ))}
          </div>

          {/* Predictions */}
          <div>
            <div className="text-sm font-semibold text-white/60 mb-4">Predictions</div>
            {Object.entries(predictions).map(([cat, items]) => (
              <Column key={cat} heading={cat} items={items} />
            ))}
          </div>

          {/* Blog */}
          <div>
            <div className="text-sm font-semibold text-white/60 mb-4">Blog</div>
            {Object.entries(blog).map(([cat, items]) => (
              <Column key={cat} heading={cat} items={items} />
            ))}
          </div>

          {/* Company */}
          <div>
            <div className="text-sm font-semibold text-white/60 mb-4">Company</div>
            <div className="flex flex-col gap-2">
              {company.map((item) => (
                <a key={item} href="https://www.liquid.trade/" className="text-sm text-white/45 hover:text-white/70 transition-colors duration-150">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="text-sm font-semibold text-white/60 mb-4">Social</div>
            <div className="flex flex-col gap-2">
              {social.map((item) => (
                <a key={item} href="https://www.liquid.trade/" className="text-sm text-white/45 hover:text-white/70 transition-colors duration-150">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Logo */}
          <a href="https://www.liquid.trade/" className="flex items-center">
            <img src={liquidLogo} alt="Liquid" style={{ height: '22px', width: 'auto' }} />
          </a>
          <p className="text-[11px] text-white/20 max-w-2xl leading-[1.7]">
            *Maximum leverage varies by market and asset class. 200x leverage available on select forex pairs via Ostium. Crypto perpetuals support up to 50x leverage.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
