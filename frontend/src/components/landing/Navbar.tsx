import { useState, useEffect } from 'react';
import { Sun, Menu, X } from 'lucide-react';
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
          ? 'bg-white/80 backdrop-blur-lg border-b border-slate-200 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <img
              src={campusTwinLogo}
              alt="CampusTwin logo"
              className="w-10 h-10 rounded-xl object-cover shadow-md shadow-blue-600/20"
            />
            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              CampusTwin
            </span>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#features" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#technology" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Technology</a>
            <a href="#roles" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">User Roles</a>
          </div>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 transition-colors">
              <Sun className="w-5 h-5" />
            </button>
            <Link to="/login" className="text-sm font-bold text-slate-700 hover:text-blue-600 px-3 py-2 transition-colors">
              Login
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Explore Live Campus
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 absolute w-full left-0 top-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <a href="#home" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Home</a>
            <a href="#features" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">How It Works</a>
            <a href="#technology" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Technology</a>
            <Link to="/login" className="block px-3 py-2 text-base font-medium text-blue-600 hover:bg-blue-50 rounded-md">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
