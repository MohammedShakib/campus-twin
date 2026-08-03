import { ArrowRight, AlertTriangle, XCircle, CheckCircle2 } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Campus Information Should Not Be Scattered</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">Bridging the gap between physical infrastructure and digital management.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Problems (Left) */}
          <div className="flex-1 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10"></div>
            <div className="inline-flex items-center gap-2 text-red-600 font-bold mb-8 uppercase tracking-wider text-sm">
              <AlertTriangle className="w-5 h-5" /> The Old Way
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Disconnected & Delayed</h3>
            
            <ul className="space-y-6">
              {[
                "Separate, disconnected attendance systems",
                "No live classroom availability tracking",
                "Unclear bus arrival information",
                "Delayed emergency communication",
                "Manual room reservation processes"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-slate-600 font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Transformation Arrow (Middle - Desktop only) */}
          <div className="hidden lg:flex flex-col items-center justify-center px-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center border-4 border-[#F8FAFC]">
              <ArrowRight className="w-6 h-6 text-blue-600" />
            </div>
          </div>

          {/* Solution (Right) */}
          <div className="flex-1 bg-slate-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.1)_0%,rgba(6,182,212,0.1)_55%,rgba(124,58,237,0.1)_100%)] z-0"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-emerald-400 font-bold mb-8 uppercase tracking-wider text-sm">
                <CheckCircle2 className="w-5 h-5" /> The CampusTwin Way
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Centralized & Real-Time</h3>
              <p className="text-slate-300 font-medium leading-relaxed mb-8 text-lg">
                CampusTwin connects academic, administrative, transportation and security operations through one intelligent real-time digital platform.
              </p>

              {/* Visual Flow diagram */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {["Students", "Teachers", "Security", "Admin", "Drivers"].map((role, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-700 rounded-full text-xs font-semibold text-slate-300">{role}</span>
                  ))}
                </div>
                <div className="flex justify-center mb-4">
                  <ArrowRight className="w-5 h-5 text-slate-500 rotate-90" />
                </div>
                <div className="bg-[linear-gradient(135deg,#2563EB_0%,#06B6D4_55%,#7C3AED_100%)] p-[1px] rounded-xl">
                  <div className="bg-slate-900 rounded-xl p-3 text-center">
                    <span className="font-bold text-white">CampusTwin Platform</span>
                  </div>
                </div>
                <div className="flex justify-center my-4">
                  <ArrowRight className="w-5 h-5 text-slate-500 rotate-90" />
                </div>
                <div className="text-center">
                   <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-sm">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live Data + Real-Time Updates
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
