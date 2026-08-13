import {
  BookOpen,
  Bus,
  Calendar,
  Car,
  MapPin,
  TrendingUp,
  Users,
} from 'lucide-react';

const statusItems = [
  {
    label: 'Students Online',
    count: '2,480',
    detail: 'Across web and mobile',
    icon: Users,
    accent: 'text-blue-600',
    surface: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    label: 'Active Classes',
    count: '18',
    detail: 'Now running live',
    icon: BookOpen,
    accent: 'text-emerald-600',
    surface: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    label: 'Available Rooms',
    count: '12',
    detail: 'Ready to reserve',
    icon: MapPin,
    accent: 'text-violet-600',
    surface: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    label: 'Buses Running',
    count: '4',
    detail: 'Routes synced live',
    icon: Bus,
    accent: 'text-amber-600',
    surface: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    label: 'Parking Occupied',
    count: '87%',
    detail: 'Updated every minute',
    icon: Car,
    accent: 'text-rose-600',
    surface: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    label: 'Events Today',
    count: '3',
    detail: 'Campus-wide sessions',
    icon: Calendar,
    accent: 'text-cyan-600',
    surface: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
];

const LiveStatusBar = () => {
  return (
    <section className="relative z-20 border-y border-slate-200/80 bg-white/95 py-5 shadow-[0_10px_35px_-28px_rgba(15,23,42,0.35)] backdrop-blur">
      <div className="mx-auto max-w-[1160px] px-5 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {statusItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`group rounded-[18px] border ${item.border} bg-white px-4 py-3.5 transition-transform duration-300 hover:-translate-y-0.5`}
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-[14px] ${item.surface} ${item.accent}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-600">
                    <TrendingUp className="h-3 w-3" />
                    Live
                  </div>
                </div>
                <div className="flex items-end gap-1.5">
                  <span className="text-[26px] font-black leading-none text-slate-950">{item.count}</span>
                  <span className="mb-1 h-2 w-2 rounded-full bg-emerald-500" />
                </div>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-1 text-xs text-slate-500">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LiveStatusBar;
