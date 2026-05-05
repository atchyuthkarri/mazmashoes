import { useState, useEffect } from 'react';
import { ArrowRight, Clock } from 'lucide-react';

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
    <section id="drops" className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 space-y-10">
            <div className="inline-flex items-center space-x-3 px-4 py-2 border-2 border-black">
              <Clock size={16} className="text-black" />
              <span className="text-xs font-black tracking-widest uppercase">Limited Release</span>
            </div>

            <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85]">
              CONFIRMED <br/> EXCLUSIVE.
            </h2>
            
            <p className="text-lg font-bold uppercase tracking-tight text-gray-700 max-w-md">
              The Magmazoes x Jordan collaboration. High performance meets street-ready style. Only available for a limited time.
            </p>

            <div className="flex space-x-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-black text-white border border-black shadow-[4px_4px_0px_#eeeeee]">
                    <span className="text-2xl md:text-4xl font-black italic">{value.toString().padStart(2, '0')}</span>
                  </div>
                  <span className="text-[10px] text-black font-black uppercase tracking-widest mt-3">{unit}</span>
                </div>
              ))}
            </div>

            <button className="flex items-center space-x-4 bg-black text-white px-12 py-5 font-black uppercase tracking-widest hover:bg-gray-800 transition-all group">
              <span>GET NOTIFIED</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>

          <div className="flex-1 relative">
            <div className="absolute -inset-4 border-4 border-gray-100 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&q=80" 
              alt="Exclusive Drop" 
              className="w-full object-cover transition-all duration-700 aspect-square"
            />
            
            {/* Price Tag (Adidas style) */}
            <div className="absolute -right-4 -top-4 bg-black text-white px-6 py-4 font-black italic text-xl shadow-xl">
              $225.00
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HypeDrops;
