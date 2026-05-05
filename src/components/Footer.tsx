const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-32 pb-12 relative -mt-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-20">
          
          <div className="md:col-span-2">
            <a href="#" className="text-4xl font-heading font-black tracking-tighter uppercase mb-6 inline-block">
              MAGMAZOES<span className="text-brand">.</span>
            </a>
            <p className="text-gray-500 max-w-sm font-light">
              Premium sneaker culture. Exclusive drops, authentic limited editions, and hype streetwear.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Shop</h4>
            <ul className="space-y-4 text-gray-500 font-light">
              <li><a href="#" className="hover:text-brand transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Trending</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Brands</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Sale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-gray-500 font-light">
              <li><a href="#" className="hover:text-brand transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm font-bold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} MAGMAZOES SNEAKERS. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
