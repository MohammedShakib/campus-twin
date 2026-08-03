import { Database, Zap, MonitorSmartphone, Server } from 'lucide-react';

const WorkflowSteps = () => {
  const steps = [
    {
      num: "01",
      title: "Data Is Updated",
      desc: "Students, teachers, security staff, admins and drivers provide campus information.",
      icon: MonitorSmartphone,
      color: "text-blue-500",
      bg: "bg-blue-100"
    },
    {
      num: "02",
      title: "Spring Boot Processes It",
      desc: "Business rules, authentication, scheduling and database operations are handled by the backend.",
      icon: Server,
      color: "text-violet-500",
      bg: "bg-violet-100"
    },
    {
      num: "03",
      title: "Real-Time Events Are Broadcast",
      desc: "WebSockets instantly send bus, classroom, parking and emergency updates.",
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-100"
    },
    {
      num: "04",
      title: "Every Dashboard Stays Updated",
      desc: "Users receive relevant information immediately according to their roles.",
      icon: Database,
      color: "text-emerald-500",
      bg: "bg-emerald-100"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How the Digital Twin Works</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">A seamless flow from physical campus activity to digital dashboard updates.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-slate-100">
             <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500 animate-[pulse_2s_ease-in-out_infinite] opacity-50"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
              <div key={idx} className="relative group">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center ${step.bg} ${step.color} mb-6 relative z-10 border-4 border-white shadow-xl group-hover:-translate-y-2 transition-transform duration-300`}>
                    <Icon className="w-10 h-10" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {step.num}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            )})}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkflowSteps;
