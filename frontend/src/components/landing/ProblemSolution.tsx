import { ArrowRight, CheckCircle2, ClipboardList, FileSpreadsheet, RadioTower, TriangleAlert } from 'lucide-react';

const scatteredItems = [
  { icon: ClipboardList, title: 'Notice board updates', detail: 'Room changes and announcements posted separately' },
  { icon: FileSpreadsheet, title: 'Manual attendance sheets', detail: 'Teacher records need later consolidation' },
  { icon: RadioTower, title: 'Bus and parking updates', detail: 'Operational status is not visible in one place' },
];

const operations = [
  { label: 'Active classes', value: '18', state: 'Live' },
  { label: 'Available rooms', value: '12', state: 'Updated' },
  { label: 'Buses running', value: '4', state: 'On route' },
  { label: 'Open complaints', value: '7', state: 'Assigned' },
];

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-[#F6F8FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-3">Campus operations view</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">Campus Information Should Not Be Scattered</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            CampusTwin keeps academic and operational updates visible from one structured system.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto_1.2fr] gap-8 items-center">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-5">
              <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                <TriangleAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-950">Disconnected Campus Data</h3>
                <p className="text-sm text-slate-500">Information sits across notices, calls, sheets and chats.</p>
              </div>
            </div>

            <div className="space-y-4">
              {scatteredItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-3 rounded-md border border-slate-100 bg-slate-50 p-4">
                    <Icon className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-slate-800">{item.title}</p>
                      <p className="text-sm text-slate-500">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:flex w-12 h-12 rounded-full border border-blue-100 bg-white text-blue-600 items-center justify-center shadow-sm">
            <ArrowRight className="w-5 h-5" />
          </div>

          <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="border-b border-slate-200 bg-slate-950 px-6 py-4 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold">CampusTwin Operations Board</h3>
                  <p className="text-sm text-slate-300">Centralized academic and service status</p>
                </div>
                <span className="rounded-md bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-300">Live</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-slate-200">
              {operations.map((item) => (
                <div key={item.label} className="bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{item.label}</p>
                  <div className="mt-3 flex items-end justify-between">
                    <span className="text-3xl font-extrabold text-slate-950">{item.value}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2 py-1 text-xs font-bold text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {item.state}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-4 bg-slate-50">
              <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                <div className="h-full w-[78%] bg-blue-600" />
              </div>
              <div className="mt-2 flex justify-between text-xs font-semibold text-slate-500">
                <span>Daily campus sync</span>
                <span>78% complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
