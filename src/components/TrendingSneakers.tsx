import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';

const sneakers = [
  {
    id: 1,
    name: "Nike Air Max Pulse",
    category: "Mens Performance",
    price: "$150",
    image: "/assets/sneaker-1.png",
    tag: "Trending"
  },
  {
    id: 2,
    name: "Adidas Yeezy Boost",
    category: "Limited Edition",
    price: "$220",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
    tag: "New Arrival"
  },
  {
    id: 3,
    name: "Jordan 1 Retro High",
    category: "Classic Basketball",
    price: "$180",
    image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=800&q=80",
    tag: "Must Have"
  },
  {
    id: 4,
    name: "New Balance 9060",
    category: "Lifestyle",
    price: "$130",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
    tag: "Bestseller"
  }
];

const TrendingSneakers = () => {
  return (
    <section id="trending" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4">
              NEW ARRIVALS
            </h2>
            <div className="flex space-x-6 text-sm font-bold uppercase tracking-tight overflow-x-auto pb-4">
              <button className="border-b-2 border-black pb-1">All Products</button>
              <button className="text-gray-400 hover:text-black transition-colors">Lifestyle</button>
              <button className="text-gray-400 hover:text-black transition-colors">Performance</button>
              <button className="text-gray-400 hover:text-black transition-colors">Special Editions</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sneakers.map((sneaker, index) => (
            <motion.div 
              key={sneaker.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative border-2 border-transparent hover:border-black transition-all duration-300 p-2"
            >
              <div className="relative aspect-square bg-[#f5f5f5] mb-4 overflow-hidden">
                {/* Tag */}
                <div className="absolute top-3 left-3 z-10 px-2 py-1 bg-white text-[10px] font-black uppercase shadow-sm">
                  {sneaker.tag}
                </div>
                
                {/* Wishlist Icon */}
                <button className="absolute top-3 right-3 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Heart size={18} strokeWidth={2.5} />
                </button>

                <img 
                  src={sneaker.image} 
                  alt={sneaker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Hover Add to Cart */}
                <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                  <button className="w-full py-3 bg-white text-black font-black uppercase text-xs border border-black hover:bg-black hover:text-white transition-all">
                    Quick Shop
                  </button>
                </div>
              </div>

              <div className="px-2 pb-4">
                <h4 className="text-sm font-black uppercase mb-1">{sneaker.name}</h4>
                <p className="text-[11px] text-gray-500 font-bold uppercase mb-2">{sneaker.category}</p>
                <p className="text-sm font-black">{sneaker.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="flex items-center space-x-4 border-2 border-black px-12 py-4 font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all group">
            <span>View All Arrivals</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingSneakers;
