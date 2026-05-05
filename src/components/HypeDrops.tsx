import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HypeDrops = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 45,
    seconds: 22
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="drops" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWgyMHYyMEgxVjF6IiBmaWxsPSJub25lIiBzdHJva2U9IiMxMTExMTEiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-brand/30 bg-brand/10">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
              <span className="text-xs text-brand font-bold tracking-widest uppercase">Upcoming Drop</span>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
              Off-White <br/> x Jordan 4
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-md font-light">
              The highly anticipated collaboration returns. Re-engineered with deconstructed details and signature zip-ties.
            </p>

            <div className="flex space-x-4 md:space-x-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#111] border border-white/10 rounded-xl mb-2 backdrop-blur-sm relative overflow-hidden group">
                    <div className="absolute inset-0 bg-brand/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="text-3xl md:text-4xl font-heading font-black relative z-10">{value.toString().padStart(2, '0')}</span>
                  </div>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">{unit}</span>
                </div>
              ))}
            </div>

            <button className="bg-brand text-white px-10 py-5 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300 w-full md:w-auto">
              Notify Me
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand/20 blur-[100px] rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=1000&q=80" 
              alt="Hype Drop" 
              className="relative z-10 w-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 aspect-[4/3]"
            />
            
            {/* Floating Price Tag */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-6 -top-6 bg-white text-black p-6 rounded-full w-28 h-28 flex items-center justify-center z-20 border-4 border-[#050505]"
            >
              <div className="text-center">
                <span className="block text-xs font-bold uppercase tracking-widest text-gray-500">Retail</span>
                <span className="block text-xl font-black">$225</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HypeDrops;
