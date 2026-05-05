import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const sneakers = [
  {
    id: 1,
    name: "Nike Air Max Pulse",
    brand: "NIKE",
    price: "$150",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    tag: "Trending"
  },
  {
    id: 2,
    name: "Adidas Yeezy Boost",
    brand: "ADIDAS",
    price: "$220",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
    tag: "Limited Drop"
  },
  {
    id: 3,
    name: "Jordan 1 Retro High",
    brand: "JORDAN",
    price: "$180",
    image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=800&q=80",
    tag: "Classic"
  },
  {
    id: 4,
    name: "New Balance 9060",
    brand: "NEW BALANCE",
    price: "$130",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
    tag: "Hot"
  }
];

const TrendingSneakers = () => {
  return (
    <section id="trending" className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-2">The Heat</h2>
            <h3 className="text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase">
              Trending <br/><span className="text-stroke">Now.</span>
            </h3>
          </div>
          <button className="group mt-6 md:mt-0 flex items-center space-x-2 text-sm font-bold uppercase tracking-wider hover:text-brand transition-colors">
            <span>View All</span>
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sneakers.map((sneaker, index) => (
            <motion.div 
              key={sneaker.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#111] mb-6">
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider">{sneaker.tag}</span>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-wider rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand hover:text-white">
                    Quick Add
                  </button>
                </div>

                <motion.img 
                  src={sneaker.image} 
                  alt={sneaker.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out"
                />
              </div>

              <div>
                <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-1">{sneaker.brand}</p>
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">{sneaker.name}</h4>
                  <p className="text-brand font-bold">{sneaker.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSneakers;
