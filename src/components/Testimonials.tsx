import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "ARJUN M.",
    role: "Verified Buyer",
    content: "The comfort levels are unmatched. I've worn these for 12 hours straight and my feet feel as fresh as when I started. The design is absolutely fire.",
    rating: 5,
    date: "2 days ago"
  },
  {
    id: 2,
    name: "SARA KHAN",
    role: "Streetwear Enthusiast",
    content: "Finally a brand that gets the balance between performance and aesthetics right. These are my new daily drivers. Delivery was incredibly fast too.",
    rating: 5,
    date: "1 week ago"
  },
  {
    id: 3,
    name: "ROHAN P.",
    role: "Athlete",
    content: "Built like a tank but light as a feather. The traction on these is incredible for court play. Definitely worth every penny.",
    rating: 4,
    date: "2 weeks ago"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#f5f5f5] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4">
              WHAT PEOPLE <br/> ARE SAYING.
            </h2>
            <p className="text-sm font-black uppercase tracking-widest text-gray-400">Join 10,000+ happy customers</p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-black text-black" />
              ))}
            </div>
            <span className="font-black italic text-xl">4.9 / 5.0</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 border-b-8 border-black relative group"
            >
              <Quote className="absolute top-6 right-6 text-gray-100 group-hover:text-black/5 transition-colors" size={60} />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={12} className="fill-black text-black" />
                ))}
              </div>

              <p className="text-lg font-bold italic tracking-tight mb-8 leading-relaxed">
                "{t.content}"
              </p>

              <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-black uppercase">{t.name}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t.role}</p>
                </div>
                <span className="text-[10px] font-black uppercase text-gray-300">{t.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
