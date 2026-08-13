import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import campusTwinLogo from '../../assets/CampusTwin-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg border-b border-slate-200 py-2 md:py-3 shadow-sm'
          : 'bg-white/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none py-2 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-[42px] md:min-h-0">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <img
              src={campusTwinLogo}
              alt="CampusTwin logo"
              className="w-11 h-11 md:w-10 md:h-10 object-contain"
            />
            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              CampusTwin
            </span>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#features" className="text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#campus-map" className="text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors">Campus Live</a>
            <a href="#roles" className="text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors">User Roles</a>
          </div>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-[15px] font-bold text-slate-700 hover:text-blue-600 px-3 py-2 transition-colors">
              Login
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center justify-center px-5 py-2.5 text-[15px] font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Explore Live Campus
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 w-11 h-11 rounded-xl flex items-center justify-center hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-y border-slate-200 absolute w-full left-0 top-full shadow-lg">
          <div className="px-5 pt-3 pb-5 space-y-1 flex flex-col">
            <a href="#home" className="flex items-center min-h-11 px-3 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-xl">Home</a>
            <a href="#features" className="flex items-center min-h-11 px-3 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-xl">Features</a>
            <a href="#campus-map" className="flex items-center min-h-11 px-3 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-xl">Campus Preview</a>
            <a href="#roles" className="flex items-center min-h-11 px-3 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-xl">User Roles</a>
            <div className="h-px bg-slate-100 my-2" />
            <Link to="/login" className="flex items-center min-h-11 px-3 text-base font-semibold text-blue-600 hover:bg-blue-50 rounded-xl">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
