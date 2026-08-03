import { useState } from 'react';
import { BookOpen, Building2, Bus, Car, CircleDot, Coffee } from 'lucide-react';

const locations = [
  { id: 'engineering', name: 'Engineering Building', top: '27%', left: '32%', icon: Building2, active: 5, rooms: 3, students: 216, event: 'Robotics Workshop' },
  { id: 'library', name: 'Central Library', top: '45%', left: '62%', icon: BookOpen, active: 2, rooms: 7, students: 84, event: 'Study Hall' },
  { id: 'cafeteria', name: 'Cafeteria', top: '70%', left: '42%', icon: Coffee, active: 1, rooms: 2, students: 130, event: 'Lunch Service' },
];

const activity = [
  'Bus 02 reached Library',
  'Room 405 class started',
  'Parking A is almost full',
];

const InteractivePreview = () => {
  const [activeLocation, setActiveLocation] = useState('engineering');
  const selected = locations.find((location) => location.id === activeLocation) ?? locations[0];

  return (
    <section id="campus-map" className="py-9 md:py-12 lg:py-16 bg-[#F6F8FB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-9">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-3">See the Campus Status in One Place</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            One preview brings together building status, bus movement, parking, and active rooms.
          </p>
        </div>

        <div className="rounded-[14px] border border-slate-200 bg-white overflow-hidden">
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4">
            <div>
              <h3 className="text-base font-bold text-slate-950">Campus Live View</h3>
              <p className="text-sm text-slate-500">Selected location updates instantly</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_330px] gap-0">
            <div className="relative min-h-[360px] bg-slate-50 overflow-hidden">
              <div className="absolute inset-0 opacity-70 bg-[linear-gradient(to_right,#e8eef5_1px,transparent_1px),linear-gradient(to_bottom,#e8eef5_1px,transparent_1px)] bg-[size:42px_42px]" />
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M 40,230 C 180,190 240,120 360,150 C 500,185 520,275 680,245" stroke="#D6DEE9" strokeWidth="16" fill="transparent" strokeLinecap="round" />
                <path d="M 40,230 C 180,190 240,120 360,150 C 500,185 520,275 680,245" stroke="#F8FAFC" strokeWidth="8" fill="transparent" strokeLinecap="round" />
              </svg>

              <div className="absolute right-[14%] bottom-[18%] rounded-[14px] bg-amber-50 px-3 py-2 flex items-center gap-2">
                <Car className="w-4 h-4 text-amber-700" />
                <span className="text-xs font-bold text-amber-800">Parking A</span>
              </div>

              <div className="absolute left-[18%] top-[58%] rounded-[14px] bg-white px-3 py-2 flex items-center gap-2">
                <Bus className="w-4 h-4 text-emerald-700" />
                <span className="text-xs font-bold text-slate-700">Bus 02</span>
              </div>

              {locations.map((location) => {
                const Icon = location.icon;
                const isActive = activeLocation === location.id;
                return (
                  <button
                    key={location.id}
                    onClick={() => setActiveLocation(location.id)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 text-left transition-transform hover:scale-105"
                    style={{ top: location.top, left: location.left }}
                  >
                    <span className={`relative flex w-12 h-12 rounded-[14px] items-center justify-center transition-all ${isActive ? 'bg-blue-700 text-white ring-4 ring-blue-100 scale-110' : 'bg-white text-slate-600 ring-1 ring-slate-200'}`}>
                      {isActive && <span className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-green-500 ring-2 ring-white animate-pulse" />}
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className={`mt-2 block rounded-lg bg-white px-2 py-1 text-[11px] font-bold ${isActive ? 'text-blue-800' : 'text-slate-600'}`}>
                      {location.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <aside className="border-t lg:border-t-0 lg:border-l border-slate-200 p-5">
              <h3 className="text-xl font-bold text-slate-950 mb-1">{selected.name}</h3>
              <p className="text-sm text-slate-500 mb-5">Selected-location status</p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  ['Active Classes', selected.active],
                  ['Available Rooms', selected.rooms],
                  ['Students Present', selected.students],
                  ['Current Event', selected.event],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[14px] bg-slate-50 px-3 py-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
                    <p className="mt-1 text-base font-extrabold text-slate-950">{value}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div className="border-t border-slate-200 bg-white px-5 py-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              {activity.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                  <CircleDot className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractivePreview;
