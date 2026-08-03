import { useState } from 'react';
import { Building2, Coffee, BookOpen, Clock } from 'lucide-react';

const InteractivePreview = () => {
  const [activeBuilding, setActiveBuilding] = useState('engineering');

  const buildings = [
    { id: 'engineering', name: 'Engineering', top: '25%', left: '30%', icon: Building2 },
    { id: 'library', name: 'Library', top: '45%', left: '65%', icon: BookOpen },
    { id: 'cafeteria', name: 'Cafeteria', top: '75%', left: '40%', icon: Coffee },
  ];

  return (
    <section className="py-9 md:py-12 lg:py-16 bg-white">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Campus Live View</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">See the Campus Come Alive</h2>
            <p className="text-base text-slate-600">
              CampusTwin transforms user updates, scheduled processes, socket data and WebSocket events into a live digital representation.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-[14px] border border-slate-200 p-2">
          <div className="flex flex-col lg:flex-row bg-white rounded-[12px] overflow-hidden border border-slate-100">
            
            {/* Minimal Interactive Map Area (Left) */}
            <div className="flex-1 relative bg-slate-50 min-h-[400px] border-r border-slate-100">
              {/* Subtle Grid */}
              <div className="absolute inset-0 border-[0.5px] border-slate-200 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px]"></div>
              
              {/* Subtle Map Path */}
              <svg className="absolute inset-0 w-full h-full opacity-50" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,200 Q 200,200 300,100 T 600,300" stroke="#e2e8f0" strokeWidth="12" fill="transparent" strokeLinecap="round" />
              </svg>

              {buildings.map((b) => {
                const Icon = b.icon;
                return (
                <button
                  key={b.id}
                  onClick={() => setActiveBuilding(b.id)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 transition-all duration-300
                    ${activeBuilding === b.id ? 'z-20' : 'z-10 opacity-60 hover:opacity-100'}
                  `}
                  style={{ top: b.top, left: b.left }}
                >
                  <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors
                    ${activeBuilding === b.id ? 'bg-blue-600 text-white' : 'bg-white border border-slate-200 text-slate-500'}
                  `}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-semibold ${activeBuilding === b.id ? 'text-blue-700' : 'text-slate-500'}`}>
                    {b.name}
                  </span>
                  {activeBuilding === b.id && (
                    <div className="absolute -bottom-2 w-1 h-1 bg-blue-600 rounded-full animate-ping"></div>
                  )}
                </button>
              )})}

              {/* Simulated Live Bus (Minimal) */}
              <div className="absolute top-[200px] left-[100px] w-4 h-4 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center animate-[moveBus_10s_ease-in-out_infinite_alternate] z-10 shadow-sm"></div>
            </div>

            {/* Side Panel Data (Right) - Compact Statistic Blocks */}
            <div className="w-full lg:w-80 p-6 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-900 mb-6 capitalize flex items-center gap-2">
                {activeBuilding.replace('-', ' ')}
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="text-xs text-slate-500 block mb-1">Active Classes</span>
                  <span className="text-2xl font-bold text-slate-900">5</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block mb-1">Available Rooms</span>
                  <span className="text-2xl font-bold text-slate-900">3</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block mb-1">Students Present</span>
                  <span className="text-2xl font-bold text-slate-900">216</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block mb-1">Current Event</span>
                  <span className="text-sm font-semibold text-slate-900 leading-tight">Robotics Workshop</span>
                </div>
              </div>
            </div>

          </div>
          
          {/* Horizontal Activity Strip */}
          <div className="bg-white border border-slate-100 rounded-[12px] p-3 mt-2 flex items-center gap-4 overflow-x-auto hide-scrollbar">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
              <Clock className="w-3 h-3" /> Recent
            </span>
            <div className="flex items-center gap-4 text-sm text-slate-600 whitespace-nowrap">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Room 405 started class</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Bus 02 reached Library</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>Parking A at 90%</span>
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
