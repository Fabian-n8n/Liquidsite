import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProofBar from './components/ProofBar';
import TwoTracks from './components/TwoTracks';
import HowItWorks from './components/HowItWorks';
import WhyLiquid from './components/WhyLiquid';
import LiquidSelect from './components/LiquidSelect';
import FAQ from './components/FAQ';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar />
      <Hero />
      <ProofBar />
      <TwoTracks />
      <HowItWorks />
      <WhyLiquid />
      <LiquidSelect />
      <FAQ />
      <FooterCTA />
      <Footer />
    </div>
  );
}
