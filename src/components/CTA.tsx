import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1600&q=80')] opacity-20 bg-cover bg-center"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase mb-10 leading-[0.85]">
            BECOME A <br/> MEMBER.
          </h2>
          <p className="text-lg md:text-xl font-bold uppercase tracking-tight mb-12 max-w-xl">
            Sign up for free and get 15% off your first order. Plus, early access to new drops and exclusive member-only collections.
          </p>
          
          <button className="bg-white text-black px-12 py-6 font-black text-xl uppercase tracking-widest hover:bg-gray-200 transition-all duration-300 shadow-[8px_8px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
            JOIN FOR FREE
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
