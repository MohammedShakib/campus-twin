import { useState } from 'react';
import { Building2, Coffee, BookOpen } from 'lucide-react';

const InteractivePreview = () => {
  const [activeBuilding, setActiveBuilding] = useState('engineering');

  const buildings = [
    { id: 'engineering', name: 'Engineering Building', top: '20%', left: '30%', icon: Building2 },
    { id: 'library', name: 'Central Library', top: '40%', left: '60%', icon: BookOpen },
    { id: 'cafeteria', name: 'Cafeteria', top: '70%', left: '40%', icon: Coffee },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See the Campus Come Alive</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            CampusTwin transforms user updates, scheduled processes, socket data and WebSocket events into a live digital representation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 bg-slate-800/50 rounded-3xl border border-slate-700 p-4 md:p-8 backdrop-blur-md">
          
          {/* Interactive Map Area (Left) */}
          <div className="flex-1 relative bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden min-h-[400px]">
            {/* Grid Background */}
            <div className="absolute inset-0 border-[0.5px] border-slate-800 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            {/* Map Path/Road simulation */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,200 Q 200,200 300,100 T 600,300" stroke="#334155" strokeWidth="20" fill="transparent" strokeLinecap="round" />
            </svg>

            {buildings.map((b) => {
              const Icon = b.icon;
              return (
              <button
                key={b.id}
                onClick={() => setActiveBuilding(b.id)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 transition-all duration-300
                  ${activeBuilding === b.id ? 'scale-110 z-20' : 'scale-100 hover:scale-105 z-10 opacity-70'}
                `}
                style={{ top: b.top, left: b.left }}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg border-2
                  ${activeBuilding === b.id ? 'bg-blue-600 border-blue-400 text-white animate-pulse-slow' : 'bg-slate-800 border-slate-600 text-slate-400'}
                `}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded bg-slate-900 border ${activeBuilding === b.id ? 'border-blue-500 text-blue-400' : 'border-slate-700 text-slate-400'}`}>
                  {b.name}
                </span>
              </button>
            )})}

            {/* Simulated Live Bus */}
            <div className="absolute top-[200px] left-[100px] w-8 h-8 bg-emerald-500 rounded-full border-2 border-white shadow-lg shadow-emerald-500/50 flex items-center justify-center animate-[moveBus_10s_ease-in-out_infinite_alternate] z-10">
              <span className="text-[10px] font-bold">B2</span>
            </div>
          </div>

          {/* Side Panel Data (Right) */}
          <div className="w-full lg:w-80 flex flex-col gap-4">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 h-full">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
                <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white capitalize">
                  {activeBuilding.replace('-', ' ')}
                </h3>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Active Classes</span>
                  <span className="text-white font-mono font-bold bg-slate-700 px-2 py-1 rounded">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Available Rooms</span>
                  <span className="text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-1 rounded">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Students Present</span>
                  <span className="text-blue-400 font-mono font-bold bg-blue-500/10 px-2 py-1 rounded">216</span>
                </div>
                <div>
                  <span className="text-slate-400 text-sm block mb-1">Current Event</span>
                  <span className="text-amber-400 text-sm font-semibold bg-amber-500/10 px-3 py-1.5 rounded-lg inline-block w-full border border-amber-500/20">Robotics Workshop</span>
                </div>
              </div>

              {/* Nested Room Detail Mockup */}
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-white">Room 405</h4>
                  <span className="flex items-center gap-1 text-[10px] text-emerald-400 uppercase font-bold tracking-wider bg-emerald-500/10 px-1.5 py-0.5 rounded">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span> Running
                  </span>
                </div>
                <p className="text-sm text-slate-300 mb-1">Software Engineering</p>
                <p className="text-xs text-slate-500 mb-3">Dr. Ahmed</p>
                
                <div className="w-full bg-slate-800 rounded-full h-1.5 mb-1 overflow-hidden">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mb-4">
                  <span>43 Occupied</span>
                  <span>17 Available</span>
                </div>
                <p className="text-xs text-slate-400"><span className="text-slate-500">Next:</span> Data Structures</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes moveBus {
          0% { transform: translate(0, 0); }
          50% { transform: translate(100px, 0); }
          100% { transform: translate(200px, 100px); }
        }
      `}</style>
    </section>
  );
};

export default InteractivePreview;
