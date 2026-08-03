import { Bell, BookOpen, Bus, CheckCircle2, Clock, LayoutDashboard, RadioTower, TriangleAlert } from 'lucide-react';

const problems = [
  { icon: LayoutDashboard, text: 'Disconnected campus services' },
  { icon: Clock, text: 'No real-time operational information' },
  { icon: RadioTower, text: 'Slow communication between users and administrators' },
];

const overview = [
  { icon: BookOpen, label: 'Active classes', value: '18', status: 'Running', color: 'text-blue-700 bg-blue-50' },
  { icon: CheckCircle2, label: 'Available rooms', value: '12', status: 'Open', color: 'text-emerald-700 bg-emerald-50' },
  { icon: Bus, label: 'Bus status', value: '4', status: 'On route', color: 'text-amber-700 bg-amber-50' },
  { icon: Bell, label: 'Emergency notification', value: 'Ready', status: 'All roles', color: 'text-red-700 bg-red-50' },
];

const ProblemSolution = () => {
  return (
    <section className="py-10 md:py-14 lg:py-[72px] bg-[#F6F8FB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-3">Campus Information Should Not Be Scattered</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            CampusTwin brings classrooms, attendance, transportation, events, parking, and emergency communication into one connected platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center">
                <TriangleAlert className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-bold text-slate-950">Current campus problems</h3>
            </div>

            <div className="space-y-3">
              {problems.map((problem) => {
                const Icon = problem.icon;
                return (
                  <div key={problem.text} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                    <Icon className="w-5 h-5 text-slate-500 shrink-0" />
                    <span className="text-sm md:text-base font-semibold text-slate-700">{problem.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-950">CampusTwin overview</h3>
                <p className="text-sm text-slate-500">Live status from connected campus modules</p>
              </div>
              <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">Live</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {overview.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`w-9 h-9 rounded-lg flex items-center justify-center ${item.color}`}>
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-xs font-bold text-slate-500">{item.status}</span>
                    </div>
                    <p className="text-2xl font-extrabold text-slate-950">{item.value}</p>
                    <p className="text-sm font-semibold text-slate-600">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
