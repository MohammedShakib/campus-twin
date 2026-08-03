import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
          Open the CampusTwin Operations Dashboard
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Explore classrooms, transportation, events and campus services through a practical real-time university management system.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link to="/demo" className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-blue-700 bg-white rounded-md hover:bg-slate-50 transition-colors w-full sm:w-auto group">
            Explore Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/login" className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-blue-800 border border-blue-500 rounded-md hover:bg-blue-900 transition-colors w-full sm:w-auto">
            Login to CampusTwin
          </Link>
        </div>

        <a href="#documentation" className="inline-flex items-center text-blue-100 hover:text-white transition-colors text-sm font-medium">
          <FileText className="w-4 h-4 mr-2" /> View Project Documentation
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
