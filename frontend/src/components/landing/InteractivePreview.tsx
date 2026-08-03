import { useState } from 'react';
import { Building2, BookOpen, Car, Coffee, MapPin, Navigation2 } from 'lucide-react';

const buildings = [
  { id: 'gate', name: 'Main Gate', top: '15%', left: '15%', icon: MapPin, status: 'normal', label: 'Main Entrance' },
  { id: 'engineering', name: 'Engineering', top: '30%', left: '30%', icon: Building2, status: 'active', label: 'Engineering Building' },
  { id: 'library', name: 'Library', top: '30%', left: '70%', icon: BookOpen, status: 'available', label: 'Central Library' },
  { id: 'cafeteria', name: 'Cafeteria', top: '70%', left: '30%', icon: Coffee, status: 'busy', label: 'Cafeteria' },
  { id: 'parking', name: 'Parking A', top: '70%', left: '70%', icon: Car, status: 'available', label: 'Parking A' },
];

const statusColors = {
  active: 'bg-blue-500',
  available: 'bg-green-500',
  busy: 'bg-amber-500',
  normal: 'bg-slate-400',
};

const activity = [
  ['Room 405 class started', '2 min ago', 'bg-green-500'],
  ['Bus 02 reached Library', '4 min ago', 'bg-blue-500'],
  ['Parking A reached 90%', '8 min ago', 'bg-amber-500'],
];

const getBuildingData = (id: string) => {
  switch (id) {
    case 'engineering':
      return {
        classes: 5,
        rooms: 3,
        students: 216,
        event: 'Robotics Workshop',
        nextClass: { name: 'Data Structures', details: 'Room 405 · 11:30 AM' },
      };
    case 'library':
      return {
        classes: 0,
        rooms: 12,
        students: 450,
        event: 'Study Group',
        nextClass: { name: 'Orientation', details: 'Main Hall · 2:00 PM' },
      };
    case 'cafeteria':
      return {
        classes: 0,
        rooms: 0,
        students: 120,
        event: 'Lunch Hour',
        nextClass: { name: 'Closed for cleaning', details: '4:00 PM - 5:00 PM' },
      };
    case 'parking':
      return {
        classes: 0,
        rooms: 45,
        students: 0,
        event: 'Standard',
        nextClass: { name: 'Peak Hours', details: '8:00 AM - 10:00 AM' },
      };
    default:
      return {
        classes: 0,
        rooms: 0,
        students: 0,
        event: 'General Admission',
        nextClass: { name: 'Security Check', details: 'All Gates Open' },
      };
  }
};

const InteractivePreview = () => {
  const [activeBuilding, setActiveBuilding] = useState('engineering');
  const [showAllActivity, setShowAllActivity] = useState(false);
  const activeData = getBuildingData(activeBuilding);
  const activeBuildingInfo = buildings.find((building) => building.id === activeBuilding) ?? buildings[1];
  const visibleActivity = showAllActivity ? activity : activity.slice(0, 2);

  return (
    <section id="campus-map" className="py-9 md:py-12 lg:py-16 bg-[#F8FAFC]">
      <div className="max-w-[1160px] mx-auto px-5 md:px-6 lg:px-8">
        <div className="mb-7 md:mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Campus Live Overview</span>
          </div>
          <h2 className="text-[30px] md:text-3xl font-bold text-slate-900 mb-2 leading-tight">See What’s Happening Across Campus</h2>
          <p className="text-[15px] md:text-base text-slate-600">
            View active classes, available rooms, bus movement and campus updates from one live interface.
          </p>
        </div>

        <div className="bg-white rounded-[16px] md:rounded-[18px] border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row overflow-hidden">
          <div className="flex-1 relative bg-slate-50 aspect-[16/10] min-h-0 md:min-h-[350px] lg:min-h-[450px] border-b lg:border-b-0 lg:border-r border-slate-200 overflow-hidden">
            <div className="absolute inset-0 border-[0.5px] border-slate-100 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute top-[10%] bottom-[10%] left-[10%] right-[10%] border border-slate-200/60 rounded-3xl bg-slate-100/30" />

            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 15% 15% L 30% 30%" stroke="#e2e8f0" strokeWidth="8" fill="transparent" strokeLinecap="round" />
              <path d="M 15% 15% L 30% 30%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" fill="transparent" strokeLinecap="round" />
              <path d="M 30% 30% L 70% 30%" stroke="#e2e8f0" strokeWidth="8" fill="transparent" strokeLinecap="round" />
              <path d="M 30% 30% L 70% 30%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" fill="transparent" strokeLinecap="round" />
              <path d="M 30% 30% L 30% 70%" stroke="#e2e8f0" strokeWidth="8" fill="transparent" strokeLinecap="round" />
              <path d="M 70% 30% L 70% 70%" stroke="#e2e8f0" strokeWidth="8" fill="transparent" strokeLinecap="round" />
            </svg>

            {buildings.map((building) => {
              const Icon = building.icon;
              const isActive = activeBuilding === building.id;
              return (
                <button
                  key={building.id}
                  onClick={() => setActiveBuilding(building.id)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 md:gap-2 transition-all duration-200 ease-in-out min-w-11 min-h-11 ${
                    isActive ? 'z-20 scale-105' : 'z-10 opacity-90 hover:opacity-100 hover:scale-105'
                  }`}
                  style={{ top: building.top, left: building.left }}
                >
                  <div className="relative">
                    <div className={`w-11 h-11 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-200 bg-white border ${isActive ? 'text-blue-600 border-blue-400 ring-4 ring-blue-50 shadow-sm' : 'text-slate-500 border-slate-200 hover:border-slate-300'}`}>
                      <Icon className="w-[18px] h-[18px] md:w-4 md:h-4" />
                    </div>
                    {building.status !== 'normal' && (
                      <div className={`absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white ${statusColors[building.status as keyof typeof statusColors]}`}>
                        {isActive && building.status === 'active' && (
                          <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping" />
                        )}
                      </div>
                    )}
                  </div>
                  <span className={`text-[12px] font-semibold px-1.5 py-0.5 rounded ${isActive ? 'text-blue-700 bg-blue-50' : 'text-slate-600 bg-white/70 backdrop-blur-sm'}`}>
                    {building.name}
                  </span>
                </button>
              );
            })}

            <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-30 md:animate-[moveBus_4s_ease-in-out_infinite_alternate]">
              <div className="flex flex-col items-center gap-1">
                <div className="bg-white px-2 py-1 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center min-w-[82px]">
                  <span className="text-[10px] font-bold text-slate-800">Bus 02</span>
                  <span className="text-[9px] font-semibold text-blue-600">ETA 4 min</span>
                </div>
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md border-2 border-white rotate-90">
                  <Navigation2 className="w-3 h-3 fill-current" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[380px] p-5 md:p-6 lg:p-8 flex flex-col justify-between bg-white">
            <div>
              <div className="flex justify-between items-start mb-5 md:mb-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{activeBuildingInfo.label}</h3>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${statusColors[activeBuildingInfo.status as keyof typeof statusColors]}`} />
                    <span className="text-xs font-semibold text-slate-500 capitalize">
                      {activeBuildingInfo.status === 'normal' ? 'Standard Operations' : activeBuildingInfo.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-y-6 md:gap-x-4 mb-5 md:mb-8">
                <div>
                  <span className="text-xl md:text-2xl font-bold text-slate-900 block">{activeData.classes}</span>
                  <span className="text-xs font-medium text-slate-500">Active Classes</span>
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-bold text-slate-900 block">{activeData.rooms}</span>
                  <span className="text-xs font-medium text-slate-500">Available Rooms</span>
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-bold text-slate-900 block">{activeData.students}</span>
                  <span className="text-xs font-medium text-slate-500">Students Present</span>
                </div>
                <div>
                  <span className="text-xs md:text-[13px] font-bold text-slate-900 block leading-tight mb-0.5 min-h-[32px] flex items-end">{activeData.event}</span>
                  <span className="text-xs font-medium text-slate-500">Current Event</span>
                </div>
              </div>

              <div className="mb-5 md:mb-8 rounded-[14px] bg-slate-50 px-3 py-2.5">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Next Class</span>
                <p className="text-sm font-bold text-slate-900 mb-0.5">{activeData.nextClass.name}</p>
                <p className="text-xs text-slate-500">{activeData.nextClass.details}</p>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Recent Activity</span>
              <ul className="space-y-3">
                {visibleActivity.map(([label, time, color]) => (
                  <li key={label} className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 ${color} rounded-full shrink-0`} />
                      <span className="text-sm text-slate-700 font-medium leading-tight">{label}</span>
                    </div>
                    <span className="text-xs text-slate-400 shrink-0">{time}</span>
                  </li>
                ))}
              </ul>
              {!showAllActivity && (
                <button
                  onClick={() => setShowAllActivity(true)}
                  className="mt-3 min-h-11 text-sm font-bold text-blue-600 hover:text-blue-800"
                >
                  View all activity
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes moveBus {
          0% { transform: translate(-50%, -50%) translateX(-40px); }
          100% { transform: translate(-50%, -50%) translateX(40px); }
        }
      `}</style>
    </section>
  );
};

export default InteractivePreview;
