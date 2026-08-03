import { Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-blue-700 p-1.5 rounded-lg">
                <Map className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">CampusTwin</span>
            </div>
            <p className="text-slate-400 text-sm">
              A real-time campus operations platform for an academic software project.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#project-details" className="hover:text-white transition-colors">Project Details</a>
            <a href="#documentation" className="hover:text-white transition-colors">Documentation</a>
            <Link to="/login" className="hover:text-white transition-colors">Login</Link>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-6 pt-5 text-sm text-slate-500">
          <p>© 2026 CampusTwin. Advanced Object-Oriented Programming Project.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
