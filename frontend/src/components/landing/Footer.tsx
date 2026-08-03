import { Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Map className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">CampusTwin</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              A real-time smart campus digital twin powered by Spring Boot. Designed for modern university operations.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#roles" className="hover:text-blue-400 transition-colors">User Roles</a></li>
              <li><a href="#technology" className="hover:text-blue-400 transition-colors">Technology</a></li>
              <li><a href="#campus-map" className="hover:text-blue-400 transition-colors">Campus Map</a></li>
              <li><a href="#information-search" className="hover:text-blue-400 transition-colors">Information Search</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Project</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#documentation" className="hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#syllabus" className="hover:text-blue-400 transition-colors">Syllabus Mapping</a></li>
              <li><a href="https://github.com" className="hover:text-blue-400 transition-colors">GitHub Repository</a></li>
              <li><a href="#team" className="hover:text-blue-400 transition-colors">Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Access</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/login" className="hover:text-blue-400 transition-colors">Student Login</Link></li>
              <li><Link to="/login" className="hover:text-blue-400 transition-colors">Teacher Login</Link></li>
              <li><Link to="/login" className="hover:text-blue-400 transition-colors">Security Login</Link></li>
              <li><Link to="/login" className="hover:text-blue-400 transition-colors">Admin Login</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 CampusTwin. Academic Project for Advanced Object-Oriented Programming.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
