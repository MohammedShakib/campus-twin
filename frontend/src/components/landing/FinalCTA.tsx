import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1160px] px-5 md:px-6 lg:px-8">
        <div className="rounded-[28px] border border-slate-200 bg-[linear-gradient(135deg,#eef4ff_0%,#f8fbff_100%)] px-6 py-8 shadow-[0_28px_60px_-46px_rgba(37,99,235,0.26)] md:px-10 md:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-[32px] font-bold leading-tight text-slate-950 md:text-[40px]">
                Ready to Experience a Smarter Campus?
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-slate-600 md:text-base">
                Explore classrooms, transport, events and campus services from one connected
                platform.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/demo"
                className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-sm font-bold text-white transition-colors hover:bg-blue-700"
              >
                Explore Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/login"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50"
              >
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
