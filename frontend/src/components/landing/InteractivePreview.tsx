import { useState } from 'react';
import { BookOpen, Building2, Bus, Coffee, MapPin } from 'lucide-react';

const buildings = [
  { id: 'engineering', name: 'Engineering Building', top: '24%', left: '31%', icon: Building2, rooms: 12, active: 5, event: 'Robotics Workshop' },
  { id: 'library', name: 'Central Library', top: '42%', left: '64%', icon: BookOpen, rooms: 8, active: 2, event: 'Study Hall' },
  { id: 'cafeteria', name: 'Cafeteria', top: '72%', left: '43%', icon: Coffee, rooms: 3, active: 1, event: 'Lunch Service' },
];

const InteractivePreview = () => {
  const [activeBuilding, setActiveBuilding] = useState('engineering');
  const selected = buildings.find((building) => building.id === activeBuilding) ?? buildings[0];

  return (
    <section id="campus-map" className="py-24 bg-[#F6F8FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-3">Live campus board</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">See the Campus Status in One Place</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            The map view combines building status, room availability and transport updates.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-6">
          <div className="relative min-h-[460px] rounded-lg border border-slate-200 bg-white overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:42px_42px]" />
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M 30,270 C 170,235 220,135 355,155 C 485,175 510,300 690,275" stroke="#CBD5E1" strokeWidth="22" fill="transparent" strokeLinecap="round" />
              <path d="M 30,270 C 170,235 220,135 355,155 C 485,175 510,300 690,275" stroke="#FFFFFF" strokeWidth="12" fill="transparent" strokeLinecap="round" />
            </svg>

            {buildings.map((building) => {
              const Icon = building.icon;
              const isActive = activeBuilding === building.id;
              return (
                <button
                  key={building.id}
                  onClick={() => setActiveBuilding(building.id)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 transition-transform ${isActive ? 'scale-105 z-20' : 'hover:scale-105 z-10'}`}
                  style={{ top: building.top, left: building.left }}
                >
                  <span className={`flex w-14 h-14 rounded-lg items-center justify-center border shadow-sm ${isActive ? 'bg-blue-700 border-blue-700 text-white' : 'bg-white border-slate-200 text-slate-600'}`}>
                    <Icon className="w-6 h-6" />
                  </span>
                  <span className={`mt-2 block rounded-md border px-2 py-1 text-xs font-bold ${isActive ? 'bg-blue-50 border-blue-200 text-blue-800' : 'bg-white border-slate-200 text-slate-600'}`}>
                    {building.name}
                  </span>
                </button>
              );
            })}

            <div className="absolute left-[18%] top-[54%] flex items-center gap-2 rounded-md border border-emerald-200 bg-white px-3 py-2 shadow-sm">
              <Bus className="w-4 h-4 text-emerald-700" />
              <span className="text-xs font-bold text-slate-700">Bus 02 · Gate 2 · ETA 4m</span>
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="border-b border-slate-200 px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950">{selected.name}</h3>
                  <p className="text-sm text-slate-500">Building operations snapshot</p>
                </div>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              <div className="grid grid-cols-2">
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Active classes</p>
                  <p className="mt-2 text-3xl font-extrabold text-slate-950">{selected.active}</p>
                </div>
                <div className="p-5 border-l border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Available rooms</p>
                  <p className="mt-2 text-3xl font-extrabold text-emerald-700">{selected.rooms}</p>
                </div>
              </div>

              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Room 405</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-slate-900">Software Engineering</span>
                  <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700">Running</span>
                </div>
                <p className="text-sm text-slate-500 mb-4">Dr. Ahmed · 43 occupied · 17 available</p>
                <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full w-[70%] bg-blue-700" />
                </div>
              </div>

              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Current event</p>
                <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-bold text-amber-800">
                  {selected.event}
                </div>
              </div>

              <div className="p-5 flex items-center gap-3 text-sm font-semibold text-slate-600">
                <MapPin className="w-4 h-4 text-slate-400" />
                Updates are grouped by role permissions.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default InteractivePreview;
