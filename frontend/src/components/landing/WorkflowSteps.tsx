import { Database, MonitorSmartphone, Server, Zap } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Campus Data Entry',
    desc: 'Students, teachers, staff and drivers update schedules, attendance and service status.',
    icon: MonitorSmartphone,
  },
  {
    num: '02',
    title: 'Backend Validation',
    desc: 'Spring Boot applies role permissions, business rules and database updates.',
    icon: Server,
  },
  {
    num: '03',
    title: 'Live Event Broadcast',
    desc: 'WebSocket and socket services publish classroom, bus, parking and alert changes.',
    icon: Zap,
  },
  {
    num: '04',
    title: 'Role Dashboard Update',
    desc: 'Each user sees the right operational view based on their campus role.',
    icon: Database,
  },
];

const WorkflowSteps = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-3">System flow</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">How the Digital Twin Works</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            A clear path from campus activity to validated real-time dashboard updates.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 bg-white">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-extrabold text-slate-400">{step.num}</span>
                    <span className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-3">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 font-medium">{step.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200">
            <div className="grid grid-cols-4 gap-2">
              {steps.map((step, index) => (
                <div key={step.num} className={`h-2 rounded-full ${index === 0 ? 'bg-blue-700' : index === 1 ? 'bg-slate-700' : index === 2 ? 'bg-emerald-600' : 'bg-cyan-600'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSteps;
