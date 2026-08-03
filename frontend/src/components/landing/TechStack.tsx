import { Activity, Clock, Radio, Server, ShieldCheck, Webhook } from 'lucide-react';

const technologies = [
  { title: 'Spring Boot REST API', desc: 'Structured module endpoints and service-layer business rules.', icon: Server },
  { title: 'Spring WebSocket', desc: 'Real-time browser updates for class, bus, parking and alerts.', icon: Webhook },
  { title: 'Java Socket Client', desc: 'Driver-side status broadcast with server acknowledgement.', icon: Radio },
  { title: 'Background Threads', desc: 'Bus simulation, notifications and multi-client communication.', icon: Activity },
  { title: 'Spring Scheduler', desc: 'Automated reminders, event state updates and routine campus jobs.', icon: Clock },
  { title: 'JWT Authentication', desc: 'Role-based access and stateless API authorization.', icon: ShieldCheck },
];

const TechStack = () => {
  return (
    <section id="technology" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-bold text-blue-300 uppercase tracking-wider mb-3">Backend architecture</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Real-Time Campus Operations</h2>
            <p className="text-lg text-slate-400 max-w-2xl font-medium">
              The technical stack is shown as system responsibilities, not decorative feature blocks.
            </p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Runtime model</p>
            <p className="text-2xl font-extrabold">REST + Socket</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden rounded-lg border border-slate-800 bg-slate-800">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div key={tech.title} className="bg-slate-950 p-6">
                <div className="w-11 h-11 rounded-lg bg-slate-900 border border-slate-800 text-blue-300 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{tech.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{tech.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
