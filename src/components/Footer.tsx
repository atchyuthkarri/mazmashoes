const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t-2 border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          <div className="md:col-span-1">
            <h4 className="text-xl font-black italic tracking-tighter mb-8 uppercase">Magmazoes</h4>
            <div className="flex flex-col space-y-4 text-xs font-bold uppercase tracking-widest text-gray-500">
              <p>Premium footwear for the modern athlete.</p>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="hover:text-black transition-colors underline">IG</a>
                <a href="#" className="hover:text-black transition-colors underline">TW</a>
                <a href="#" className="hover:text-black transition-colors underline">FB</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase mb-8">Products</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-tight text-gray-500">
              <li><a href="#" className="hover:text-black hover:underline transition-all">New Arrivals</a></li>
              <li><a href="#" className="hover:text-black hover:underline transition-all">Best Sellers</a></li>
              <li><a href="#" className="hover:text-black hover:underline transition-all">Sale</a></li>
              <li><a href="#" className="hover:text-black hover:underline transition-all">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase mb-8">Support</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-tight text-gray-500">
              <li><a href="#" className="hover:text-black hover:underline transition-all">Help Center</a></li>
              <li><a href="#" className="hover:text-black hover:underline transition-all">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-black hover:underline transition-all">Returns</a></li>
              <li><a href="#" className="hover:text-black hover:underline transition-all">Order Tracker</a></li>
            </ul>
          </div>

          <div className="bg-[#eeeeee] p-8">
            <h4 className="text-sm font-black uppercase mb-6">Join the Club</h4>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6 leading-relaxed">
              Get exclusive access to the newest drops and members-only offers.
            </p>
            <div className="flex border-b-2 border-black">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="bg-transparent py-3 text-xs font-black outline-none w-full"
              />
              <button className="px-4 hover:translate-x-1 transition-transform">
                &rarr;
              </button>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
            <a href="#" className="hover:text-black">Cookie Settings</a>
          </div>
          <p>&copy; {new Date().getFullYear()} MAGMAZOES INDIA. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
