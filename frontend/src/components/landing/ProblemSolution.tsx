import { Bell, BookOpen, Bus, CheckCircle2, Clock, LayoutDashboard, RadioTower } from 'lucide-react';

const problems = [
  { icon: LayoutDashboard, text: 'Campus services are managed separately' },
  { icon: Clock, text: 'Students cannot access live operational information' },
  { icon: RadioTower, text: 'Important updates are often delayed or missed' },
];

const overview = [
  { icon: BookOpen, label: 'Active classes', value: '18', color: 'text-blue-700 bg-blue-50' },
  { icon: CheckCircle2, label: 'Available rooms', value: '12', color: 'text-emerald-700 bg-emerald-50' },
  { icon: Bus, label: 'Bus status', value: '4 running', color: 'text-amber-700 bg-amber-50' },
  { icon: Bell, label: 'Latest notice', value: 'Ready', color: 'text-red-700 bg-red-50' },
];

const ProblemSolution = () => {
  return (
    <section className="py-9 md:py-12 lg:py-16 bg-[#F6F8FB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-3">Campus Information Should Not Be Scattered</h2>
              <p className="text-base md:text-lg text-slate-600 max-w-2xl">
                CampusTwin connects classroom activities, attendance, transportation, events, and important campus updates in one accessible platform.
              </p>
            </div>

            <div className="divide-y divide-slate-200">
              {problems.map((problem) => {
                const Icon = problem.icon;
                return (
                  <div key={problem.text} className="flex items-center gap-4 py-4 first:pt-0">
                    <span className="w-10 h-10 rounded-[14px] bg-white text-slate-600 flex items-center justify-center border border-slate-200">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-base font-semibold text-slate-700">{problem.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[14px] border border-slate-200 bg-white p-6">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-950">CampusTwin overview</h3>
                <p className="text-sm text-slate-500">Live campus services at a glance</p>
              </div>
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
              {overview.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className={`w-10 h-10 rounded-[14px] flex items-center justify-center ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-lg font-extrabold text-slate-950 leading-tight">{item.value}</p>
                      <p className="text-sm font-medium text-slate-500">{item.label}</p>
                    </div>
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
