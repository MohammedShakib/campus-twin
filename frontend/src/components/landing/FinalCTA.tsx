import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-9 md:py-12 lg:py-16 bg-white">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[linear-gradient(135deg,#eff6ff_0%,#e0e7ff_100%)] rounded-[14px] px-8 py-10 md:px-12 md:py-12 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="md:max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Ready to Experience a Smarter Campus?
            </h2>
            <p className="text-base text-slate-600 font-medium">
              Explore a live digital campus where classrooms, transportation, events and campus services stay connected in real time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <Link to="/demo" className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-blue-600 rounded-[10px] hover:bg-blue-700 transition-colors w-full sm:w-auto">
              Explore Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link to="/login" className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-[10px] hover:bg-slate-50 transition-colors w-full sm:w-auto">
              Sign In
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
