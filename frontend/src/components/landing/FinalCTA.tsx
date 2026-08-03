import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#2563EB_0%,#06B6D4_55%,#7C3AED_100%)]"></div>
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Ready to Experience a Smarter Campus?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Explore a live digital campus where classrooms, transportation, events and campus services stay connected in real time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link to="/demo" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-blue-600 bg-white rounded-full hover:bg-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto group">
            Explore Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/login" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/20 border border-white/30 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 w-full sm:w-auto">
            Login to CampusTwin
          </Link>
        </div>

        <a href="#documentation" className="inline-flex items-center text-blue-200 hover:text-white transition-colors text-sm font-medium">
          <FileText className="w-4 h-4 mr-2" /> View Project Documentation &rarr;
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
