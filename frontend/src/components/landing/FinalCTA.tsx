import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-9 md:py-12 lg:py-16 bg-[#F6F8FB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[14px] bg-[linear-gradient(135deg,#2563eb_0%,#1d4ed8_100%)] px-5 py-6 md:px-8 md:py-7">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
                Explore the CampusTwin Dashboard
              </h2>
              <p className="text-sm md:text-base text-blue-100 max-w-2xl">
                Access real-time classroom, attendance, transportation, event, and campus service information from one connected platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link to="/demo" className="inline-flex items-center justify-center px-5 py-3 text-sm font-bold text-blue-700 bg-white rounded-[14px] hover:bg-slate-50 transition-colors w-full sm:w-auto group">
                Explore Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/login" className="inline-flex items-center justify-center px-5 py-3 text-sm font-bold text-white bg-blue-950/30 border border-white/20 rounded-[14px] hover:bg-blue-950/45 transition-colors w-full sm:w-auto">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
