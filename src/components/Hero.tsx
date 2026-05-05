import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-[#eeeeee]">
      {/* Background Image / Video (Adidas Style) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1920&q=80" 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-black/40 backdrop-blur-sm p-8 md:p-12 inline-block border-l-8 border-black"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6 tracking-tight italic">
              SPEED <br/>
              REDEFINED.
            </h1>
            <p className="text-lg md:text-xl font-bold mb-10 max-w-md uppercase tracking-tight">
              The all-new Apex Nova collection. Engineered for those who move faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black px-10 py-4 font-black uppercase tracking-widest flex items-center justify-center space-x-4 group"
              >
                <span>SHOP NOW</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent border-2 border-white text-white px-10 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
              >
                DISCOVER MORE
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side Label (Adidas-esque) */}
      <div className="absolute right-12 bottom-12 hidden lg:block">
        <div className="flex items-center space-x-6 transform rotate-90 origin-right">
          <span className="text-xs font-black uppercase tracking-[0.5em] text-white">AUTUMN WINTER 2026</span>
          <div className="w-24 h-[2px] bg-white"></div>
        </div>
      </div>

      {/* Centered Scroll Indicator (Clean) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-10 bg-white/50"></div>
      </div>
    </section>
  );
};

export default Hero;
