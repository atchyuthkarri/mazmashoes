import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const feed = [
  "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500&q=80",
  "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?w=500&q=80",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&q=80",
  "https://images.unsplash.com/photo-1515347619362-e67c82279c09?w=500&q=80"
];

const SocialProof = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative -mt-10 pt-36">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Camera className="mx-auto w-12 h-12 mb-6 text-brand" />
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase mb-4">
            Join The <span className="text-stroke">Culture</span>
          </h2>
          <p className="text-gray-400 font-bold tracking-widest uppercase">@HypeSneakers</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {feed.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square group overflow-hidden rounded-xl bg-[#111] cursor-pointer"
            >
              <div className="absolute inset-0 bg-brand/80 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Camera className="text-white w-8 h-8 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100" />
              </div>
              <img 
                src={img} 
                alt="Feed" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
