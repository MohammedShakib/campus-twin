import { Users, BookOpen, MapPin, Bus, Car, Calendar } from 'lucide-react';

const statusItems = [
  { icon: <Users className="w-5 h-5" />, count: "2,480", label: "Students Online", color: "text-blue-600", bg: "bg-blue-100" },
  { icon: <BookOpen className="w-5 h-5" />, count: "18", label: "Active Classes", color: "text-emerald-600", bg: "bg-emerald-100" },
  { icon: <MapPin className="w-5 h-5" />, count: "12", label: "Available Rooms", color: "text-violet-600", bg: "bg-violet-100" },
  { icon: <Bus className="w-5 h-5" />, count: "4", label: "Buses Running", color: "text-amber-600", bg: "bg-amber-100" },
  { icon: <Car className="w-5 h-5" />, count: "87%", label: "Parking Occupied", color: "text-rose-600", bg: "bg-rose-100" },
  { icon: <Calendar className="w-5 h-5" />, count: "3", label: "Events Today", color: "text-cyan-600", bg: "bg-cyan-100" }
];

const LiveStatusBar = () => {
  return (
    <div className="bg-white border-y border-slate-200 overflow-hidden py-4 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto hide-scrollbar gap-8 md:gap-12 items-center justify-start md:justify-between">
          {statusItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 shrink-0 group">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono font-bold text-xl text-slate-900 leading-none">{item.count}</span>
                  <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                </div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveStatusBar;
