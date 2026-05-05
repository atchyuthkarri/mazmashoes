import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-32 bg-brand text-white relative overflow-hidden clip-path-slant -mt-10 z-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552346154-21d32810baa3?w=1600&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter uppercase mb-8">
            Upgrade <br/> Your Style.
          </h2>
          
          <button className="bg-white text-brand px-12 py-6 rounded-full font-black text-xl uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-300">
            Shop Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
