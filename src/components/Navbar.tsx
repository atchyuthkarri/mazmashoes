import { useEffect, useState } from 'react';
import { Menu, Search, ShoppingBag, X, User, Heart } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm py-2' : 'bg-white py-4'
      }`}
    >
      {/* Top Utility Bar (Adidas Style) */}
      <div className="hidden md:block bg-[#eeeeee] py-1">
        <div className="container mx-auto px-6 md:px-12 flex justify-end items-center space-x-6 text-[10px] font-bold uppercase tracking-wider">
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">Orders and Returns</a>
          <a href="#" className="hover:underline">Join the Club</a>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo (Adidas-like Boldness) */}
        <div className="flex items-center">
          <a href="#" className="text-2xl font-heading font-black tracking-tighter uppercase">
            MAGMAZOES
          </a>
        </div>

        {/* Main Nav Items (Centered like Adidas) */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-black tracking-tight uppercase">
          <a href="#trending" className="relative group overflow-hidden py-1">
            <span>MEN</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#trending" className="relative group overflow-hidden py-1">
            <span>WOMEN</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#trending" className="relative group overflow-hidden py-1">
            <span>KIDS</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#drops" className="text-red-600 font-black">SALE</a>
        </nav>

        {/* Search & Actions */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="hidden md:flex items-center bg-[#eeeeee] px-3 py-2 rounded-sm border border-transparent focus-within:border-black transition-colors">
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-transparent text-xs outline-none w-32 lg:w-48 font-bold uppercase"
            />
            <Search size={16} />
          </div>

          <button className="hover:text-gray-600 transition-colors hidden md:block">
            <User size={20} strokeWidth={2} />
          </button>
          <button className="hover:text-gray-600 transition-colors hidden md:block">
            <Heart size={20} strokeWidth={2} />
          </button>
          
          <button className="relative hover:text-gray-600 transition-colors">
            <ShoppingBag size={20} strokeWidth={2} />
            <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-black">2</span>
          </button>
          
          <button 
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-[60] flex flex-col pt-24 px-8 space-y-6 text-2xl font-black uppercase transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button className="absolute top-8 right-8" onClick={() => setMenuOpen(false)}>
          <X size={32} />
        </button>
        <a href="#" onClick={() => setMenuOpen(false)}>Men</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Women</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Kids</a>
        <a href="#" onClick={() => setMenuOpen(false)} className="text-red-600">Sale</a>
        <div className="pt-12 border-t border-gray-100 flex flex-col space-y-4 text-sm">
          <a href="#">Help</a>
          <a href="#">Returns</a>
          <a href="#">Join the Club</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
