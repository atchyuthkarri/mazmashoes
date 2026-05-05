import { useEffect, useState } from 'react';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // If the top of the navbar (0) is within the about section
        setIsLightSection(rect.top <= 60 && rect.bottom >= 60);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className={`container mx-auto px-6 md:px-12 flex justify-between items-center transition-colors duration-500 ${
        isLightSection ? 'text-dark' : 'text-white'
      }`}>
        {/* Logo */}
        <a href="#" className="text-2xl md:text-3xl font-heading font-black tracking-tighter uppercase z-50">
          MAGMAZOES<span className="text-brand">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
          <a href="#brands" className="hover:text-brand transition-colors duration-300">BRANDS</a>
          <a href="#trending" className="hover:text-brand transition-colors duration-300">TRENDING</a>
          <a href="#drops" className="hover:text-brand transition-colors duration-300">DROPS</a>
          <a href="#about" className="hover:text-brand transition-colors duration-300">ABOUT</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6 z-50">
          <button className="hidden md:block hover:text-brand transition-colors duration-300">
            <Search size={20} strokeWidth={2.5} />
          </button>
          <button className="relative hover:text-brand transition-colors duration-300">
            <ShoppingBag size={20} strokeWidth={2.5} />
            <span className="absolute -top-1.5 -right-1.5 bg-brand text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">2</span>
          </button>
          
          <button 
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-dark z-40 flex flex-col justify-center items-center space-y-8 text-2xl font-heading font-bold uppercase text-white transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <a href="#brands" onClick={() => setMenuOpen(false)} className="hover:text-brand transition-colors">Brands</a>
        <a href="#trending" onClick={() => setMenuOpen(false)} className="hover:text-brand transition-colors">Trending</a>
        <a href="#drops" onClick={() => setMenuOpen(false)} className="hover:text-brand transition-colors">Drops</a>
        <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-brand transition-colors">About</a>
      </div>
    </header>
  );
};

export default Navbar;
