import { motion } from 'framer-motion';

const brands = [
  "NIKE", "ADIDAS", "NEW BALANCE", "PUMA", "ASICS", "SALOMON", "OFF-WHITE", "YEEZY", "JORDAN"
];

const BrandsMarquee = () => {
  return (
    <section id="brands" className="py-12 bg-white text-dark overflow-hidden clip-path-slant -mt-10 relative z-20">
      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          className="py-4 flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <span 
              key={i} 
              className="mx-8 text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase opacity-80 hover:opacity-100 hover:text-brand transition-colors duration-300 cursor-default"
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
