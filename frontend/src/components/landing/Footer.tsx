import { Link } from 'react-router-dom';
import campusTwinLogo from '../../assets/CampusTwin-logo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1160px] mx-auto px-5 md:px-6 lg:px-8">
        <div className="py-6 md:py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 md:gap-6">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5 mb-2">
              <img
                src={campusTwinLogo}
                alt="CampusTwin logo"
                className="w-9 h-9 object-contain"
              />
              <span className="font-extrabold text-lg tracking-tight text-slate-950">CampusTwin</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              A connected platform for real-time campus information and services.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm font-semibold text-slate-600 sm:flex sm:flex-wrap sm:gap-x-5 md:gap-y-3">
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <Link to="/demo" className="hover:text-blue-600 transition-colors">Dashboard</Link>
            <Link to="/login" className="hover:text-blue-600 transition-colors">Sign In</Link>
            <a href="https://github.com/MohammedShakib/campus-twin" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
          </div>
        </div>

        <div className="border-t border-slate-200 py-4 md:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4 text-xs text-slate-400">
          <p>&copy; 2026 CampusTwin. All rights reserved.</p>
          <div className="flex gap-5 font-medium">
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
