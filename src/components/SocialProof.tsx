import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const feed = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80",
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80"
];

const SocialProof = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Camera className="mx-auto w-10 h-10 mb-6 text-black" />
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-4">
            SHARED BY <span className="text-stroke">YOU.</span>
          </h2>
          <p className="text-xs font-black tracking-[0.4em] uppercase text-gray-400">Tag #MAGMAZOES to be featured</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {feed.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square group overflow-hidden bg-gray-100 cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Camera className="text-white w-8 h-8" />
              </div>
              <img 
                src={img} 
                alt="Community Feed" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
