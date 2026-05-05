import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white text-[#0a0a0a] relative overflow-hidden clip-path-slant -mt-10 pb-36 z-20">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
              More Than <br/> Just Shoes.
            </h2>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-md font-light leading-relaxed">
              We are a curated premium sneaker boutique dedicated to authentic streetwear culture. Born from the streets, built for the collectors. We source the rarest drops and most coveted collaborations worldwide.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="text-4xl font-heading font-black text-brand mb-2">10k+</h4>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Happy Customers</p>
              </div>
              <div>
                <h4 className="text-4xl font-heading font-black text-brand mb-2">100%</h4>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Authentic Guaranteed</p>
              </div>
            </div>

            <button className="border-2 border-[#0a0a0a] text-[#0a0a0a] px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#0a0a0a] hover:text-white transition-colors duration-300">
              Read Our Story
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-1 lg:order-2"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1552346154-21d32810baa3?w=800&q=80" 
                alt="Store Front" 
                className="w-full h-[300px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
              <img 
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80" 
                alt="Sneaker Shelf" 
                className="w-full h-[300px] object-cover rounded-2xl mt-12 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
