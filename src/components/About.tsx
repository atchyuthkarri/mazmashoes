import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#eeeeee] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-black">

          <div className="relative h-[400px] lg:h-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&q=80"
              alt="Brand Heritage"
              className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-10 md:p-20 bg-white flex flex-col justify-center items-start space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-black italic leading-[0.9] tracking-tighter">
              BORN FROM <br /> THE STREETS.
            </h2>

            <p className="text-lg font-bold uppercase tracking-tight text-gray-700 max-w-md">
              Magmazoes represents more than just footwear. We represent a movement. A culture. A relentless pursuit of perfection in style and performance.
            </p>

            <div className="grid grid-cols-2 gap-12 w-full border-t-2 border-gray-100 pt-8">
              <div>
                <h4 className="text-3xl font-black italic mb-2">100%</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Authentic Gear</p>
              </div>
              <div>
                <h4 className="text-3xl font-black italic mb-2">GLOBAL</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Shipping Network</p>
              </div>
            </div>

            <button className="bg-black text-white px-12 py-5 font-black uppercase tracking-widest hover:bg-gray-800 transition-colors">
              READ OUR STORY
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
