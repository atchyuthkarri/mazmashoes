import { motion } from 'framer-motion';

const brands = [
  "NIKE", "ADIDAS", "NEW BALANCE", "PUMA", "ASICS", "SALOMON", "OFF-WHITE", "YEEZY", "JORDAN"
];

const BrandsMarquee = () => {
  return (
    <section id="brands" className="py-20 bg-white border-y border-gray-100 relative z-20">
      <div className="container mx-auto px-6 mb-8">
        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 text-center">TRUSTED BY THE BEST</h4>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          className="py-4 flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <span 
              key={i} 
              className="mx-12 text-4xl md:text-6xl font-black tracking-tighter uppercase opacity-10 hover:opacity-100 transition-opacity duration-500 cursor-default"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsMarquee;
