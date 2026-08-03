import { Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Map className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-slate-950">CampusTwin</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              A connected platform for real-time campus information and services.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-600">
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <Link to="/demo" className="hover:text-blue-600 transition-colors">Dashboard</Link>
            <Link to="/login" className="hover:text-blue-600 transition-colors">Sign In</Link>
            <a href="https://github.com/MohammedShakib/campus-twin" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
          </div>
        </div>

        <div className="border-t border-slate-200 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 CampusTwin. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
