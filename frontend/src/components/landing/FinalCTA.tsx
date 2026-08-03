import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-14 md:py-16 bg-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Explore the CampusTwin Dashboard
        </h2>
        <p className="text-base md:text-lg text-blue-100 mb-7 max-w-2xl mx-auto">
          Access real-time classroom, attendance, transportation, event, and campus service information from one connected platform.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/demo" className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-blue-700 bg-white rounded-lg hover:bg-slate-50 transition-colors w-full sm:w-auto group">
            Explore Demo
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/login" className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-blue-800 border border-blue-500 rounded-lg hover:bg-blue-900 transition-colors w-full sm:w-auto">
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
