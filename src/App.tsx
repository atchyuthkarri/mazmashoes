import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandsMarquee from './components/BrandsMarquee';
import TrendingSneakers from './components/TrendingSneakers';
import HypeDrops from './components/HypeDrops';
import About from './components/About';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Lenis from 'lenis';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  // Smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#0a0a0a] text-[#f5f5f5]">
      <Preloader onComplete={handleLoadingComplete} />
      
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <BrandsMarquee />
            <TrendingSneakers />
            <HypeDrops />
            <About />
            <SocialProof />
            <CTA />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
