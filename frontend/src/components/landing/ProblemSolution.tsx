import { ArrowRight, CheckCircle2 } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section className="py-9 md:py-12 lg:py-16 bg-white">
      <div className="max-w-[1160px] mx-auto px-5 md:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-24 items-start">

          {/* Problems (Left) */}
          <div className="flex-1 lg:w-1/2">
            <h2 className="text-[30px] md:text-3xl font-bold text-slate-900 mb-3 md:mb-4 text-left leading-tight">Campus Information Should Not Be Scattered</h2>
            <p className="text-[15px] md:text-base text-slate-600 font-medium mb-6 md:mb-10 text-left">Bridging the gap between physical infrastructure and digital management.</p>

            <div className="space-y-0 divide-y divide-slate-100">
              {[
                "Separate, disconnected attendance systems",
                "No live classroom availability tracking",
                "Unclear bus arrival information",
                "Delayed emergency communication",
                "Manual room reservation processes"
              ].map((text, i) => (
                <div key={i} className={`flex items-start gap-3 md:gap-4 py-3.5 md:py-6 first:pt-0 last:pb-0 ${i > 2 ? 'hidden md:flex' : ''}`}>
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-slate-500">{i + 1}</span>
                  </div>
                  <span className="text-[15px] md:text-base text-slate-600 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution (Right) */}
          <div className="flex-1 lg:w-1/2 w-full bg-slate-50 p-5 md:p-8 lg:p-12 rounded-[16px] border border-slate-200">
            <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-4 md:mb-6 text-sm">
              <CheckCircle2 className="w-5 h-5" /> The CampusTwin Way
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">Centralized & Real-Time</h3>
            <p className="text-[15px] md:text-base text-slate-600 font-medium leading-relaxed mb-5 md:mb-10">
              CampusTwin connects academic, administrative, transportation and security operations through one intelligent real-time digital platform.
            </p>

            {/* Visual Flow diagram */}
            <div className="bg-white border border-slate-200 rounded-[14px] p-4 md:p-6">
              <div className="hidden md:flex flex-wrap gap-2 justify-center mb-6">
                {["Students", "Teachers", "Security", "Admin", "Drivers"].map((role, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs font-semibold text-slate-600">{role}</span>
                ))}
              </div>
              <div className="hidden md:flex justify-center mb-4">
                <ArrowRight className="w-5 h-5 text-slate-400 rotate-90" />
              </div>
              <div className="bg-blue-600 rounded-[14px] p-4 text-center">
                <span className="font-bold text-white tracking-wide">CampusTwin Platform</span>
              </div>
              <div className="hidden md:flex justify-center my-4">
                <ArrowRight className="w-5 h-5 text-slate-400 rotate-90" />
              </div>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm min-h-11">
                  <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                  Live Data + Real-Time Updates
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
