import { ArrowRight, MapPin, Users, Bell, Bus } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F8FAFC]">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] md:w-[1200px] h-[420px] md:h-[600px] opacity-30 md:opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#2563EB_0%,#06B6D4_55%,#7C3AED_100%)] blur-[120px] rounded-full mix-blend-multiply animate-pulse duration-10000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-800 text-xs md:text-sm font-semibold mb-5 md:mb-8 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Live Software-Based Digital Twin
            </div>

            <h1 className="text-[36px] md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-5 md:mb-6 leading-[1.08] md:leading-[1.1]">
              One Campus. <br className="hidden lg:block" />
              One Live <span className="text-transparent bg-clip-text bg-[linear-gradient(135deg,#2563EB_0%,#06B6D4_55%,#7C3AED_100%)]">Digital Experience.</span>
            </h1>

            <p className="text-[15px] md:text-xl text-slate-600 mb-7 md:mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              CampusTwin connects classrooms, attendance, transportation, parking, events and emergency services through one intelligent real-time platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/demo" className="inline-flex min-h-[48px] items-center justify-center px-8 py-3 md:py-4 text-base font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto group">
                Explore Live Campus
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#campus-map" className="inline-flex min-h-[48px] items-center justify-center px-8 py-3 md:py-4 text-base font-bold text-slate-700 bg-white/80 md:bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 w-full sm:w-auto">
                View How It Works
              </a>
            </div>
          </div>

          {/* Right Visual Dashboard Mockup */}
          <div className="flex-1 relative w-full max-w-[390px] md:max-w-2xl lg:max-w-none perspective-1000 z-10 pb-4 md:pb-8 lg:pb-0">
            <div className="md:hidden bg-white rounded-[24px] shadow-xl border border-slate-100 overflow-hidden">
              <div className="h-11 bg-white border-b border-slate-100 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="ml-3 text-[10px] font-mono text-slate-400 bg-slate-50 px-3 py-1 rounded border border-slate-200 truncate">
                  campustwin.local/dashboard
                </div>
              </div>

              <div className="relative h-[320px] bg-slate-50 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:34px_34px] opacity-65" />
                <div className="absolute left-[34%] top-[28%] w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
                  <span className="w-3 h-3 rounded-full bg-blue-600" />
                </div>
                <div className="absolute right-[17%] top-[44%] w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200">
                  <span className="w-3 h-3 rounded-full bg-emerald-600" />
                </div>

                <div className="absolute left-3 top-9 w-[218px] bg-white p-3 rounded-2xl shadow-lg border border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      <Users className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-sm text-slate-900">Room 405</h4>
                      <p className="text-xs text-slate-500">Software Engineering</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[11px] font-mono bg-slate-50 p-2 rounded-lg">
                    <span className="text-slate-600">43 / 60 Students</span>
                    <span className="text-green-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      Running
                    </span>
                  </div>
                </div>

                <div className="absolute right-3 top-[122px] w-[178px] bg-white p-3 rounded-2xl shadow-lg border border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                      <Bus className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-sm text-slate-900">Bus 02</h4>
                      <p className="text-xs text-slate-500">Library Route</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[11px] bg-slate-50 p-2 rounded-lg font-mono">
                    <span className="text-slate-600 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Gate 2
                    </span>
                    <span className="text-blue-600 font-bold">ETA: 4m</span>
                  </div>
                </div>

                <div className="absolute left-7 bottom-4 w-[230px] bg-white p-3 rounded-2xl shadow-lg border border-slate-100">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-red-50 text-red-600 rounded-lg mt-0.5">
                      <Bell className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-sm text-slate-900">Weather Alert</h4>
                        <span className="text-[10px] uppercase font-bold text-red-600 bg-red-100 px-1.5 rounded">High</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-tight">Heavy rain expected. Events moved indoors.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block relative transform lg:rotate-y-[-10deg] lg:rotate-x-[5deg] transition-transform duration-500 hover:rotate-0">

              {/* Main Map Panel */}
              <div className="bg-white rounded-[22px] md:rounded-3xl shadow-xl md:shadow-2xl border border-slate-100 overflow-hidden relative">
                <div className="h-11 md:h-12 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="ml-3 md:ml-4 text-[10px] md:text-xs font-mono text-slate-400 bg-white px-2.5 md:px-3 py-1 rounded border border-slate-200 truncate">campustwin.local/dashboard</div>
                </div>
                <div className="p-2 relative h-[270px] md:h-[400px] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-90">
                  {/* Subtle Grid Map Placeholder */}
                  <div className="absolute inset-0 border-[0.5px] border-slate-200 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                  {/* Pulsing Nodes */}
                  <div className="absolute top-1/4 left-1/4 animate-pulse">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-200">
                      <div className="w-4 h-4 bg-blue-600 rounded-full" />
                    </div>
                  </div>
                  <div className="absolute bottom-1/3 right-1/4 animate-pulse delay-700">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center border-2 border-emerald-200">
                      <div className="w-4 h-4 bg-emerald-600 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Active Class Card */}
              <div className="absolute left-3 md:-left-6 top-14 md:top-16 bg-white p-3 md:p-4 rounded-2xl shadow-lg md:shadow-xl border border-slate-100 w-[200px] md:w-64 animate-none md:animate-float">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Users className="w-5 h-5"/></div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-sm text-slate-900">Room 405</h4>
                    <p className="text-xs text-slate-500">Software Engineering</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-[11px] md:text-xs font-mono bg-slate-50 p-2 rounded-lg">
                  <span className="text-slate-600">43 / 60 Students</span>
                  <span className="text-green-600 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Running</span>
                </div>
              </div>

              {/* Floating Bus Location Card */}
              <div className="absolute right-3 md:-right-8 top-[48%] md:top-1/2 bg-white p-3 md:p-4 rounded-2xl shadow-lg md:shadow-xl border border-slate-100 w-[178px] md:w-60 animate-none md:animate-float-delay-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Bus className="w-5 h-5"/></div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-sm text-slate-900">Bus 02</h4>
                    <p className="text-xs text-slate-500">Library Route</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-[11px] md:text-xs bg-slate-50 p-2 rounded-lg font-mono">
                  <span className="text-slate-600 flex items-center gap-1"><MapPin className="w-3 h-3"/> Gate 2</span>
                  <span className="text-blue-600 font-bold">ETA: 4m</span>
                </div>
              </div>

              {/* Emergency Alert Card */}
              <div className="absolute left-1/2 md:left-10 -translate-x-1/2 md:translate-x-0 bottom-4 md:-bottom-6 bg-white p-3 md:p-4 rounded-2xl shadow-lg md:shadow-xl border border-slate-100 w-[240px] md:w-64 animate-none md:animate-float-delay-2">
                 <div className="flex items-start gap-3">
                  <div className="p-2 bg-red-50 text-red-600 rounded-lg mt-1"><Bell className="w-5 h-5"/></div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                       <h4 className="font-bold text-sm text-slate-900">Weather Alert</h4>
                       <span className="text-[10px] uppercase font-bold text-red-600 bg-red-100 px-1.5 rounded">High</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-tight">Heavy rain expected. Events moved indoors.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
