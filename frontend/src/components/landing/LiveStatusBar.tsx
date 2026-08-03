import { BookOpen, Bus, Calendar, MapPin } from 'lucide-react';

const statusItems = [
  { icon: <BookOpen className="w-4 h-4" />, count: "18", label: "Active Classes", color: "text-blue-700", bg: "bg-blue-50" },
  { icon: <MapPin className="w-4 h-4" />, count: "12", label: "Available Rooms", color: "text-emerald-700", bg: "bg-emerald-50" },
  { icon: <Bus className="w-4 h-4" />, count: "4", label: "Buses Running", color: "text-amber-700", bg: "bg-amber-50" },
  { icon: <Calendar className="w-4 h-4" />, count: "3", label: "Events Today", color: "text-slate-700", bg: "bg-slate-100" }
];

const LiveStatusBar = () => {
  return (
    <div className="bg-white border-y border-slate-200 overflow-hidden py-3 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:flex overflow-x-auto hide-scrollbar gap-3 sm:gap-8 items-center justify-between">
          {statusItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 shrink-0">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.bg} ${item.color}`}>
                {item.icon}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono font-bold text-base text-slate-950 leading-none">{item.count}</span>
                  <span className="flex h-1.5 w-1.5 rounded-full bg-green-500" />
                </div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mt-0.5">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveStatusBar;
