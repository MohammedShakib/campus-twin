import { Radio, Webhook, Activity, Clock, ShieldCheck, Server } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      title: "Spring WebSocket",
      desc: "Instant browser updates without page refresh using STOMP.",
      icon: Webhook,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Java Socket Programming",
      desc: "Raw Socket and ServerSocket communication for bus driver updates.",
      icon: Radio,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Background Threads",
      desc: "Bus simulation, notification processing and multi-client communication.",
      icon: Activity,
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20"
    },
    {
      title: "Spring Scheduler",
      desc: "Automated reminders, event updates and scheduled campus processes.",
      icon: Clock,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    {
      title: "Secure REST APIs",
      desc: "Structured communication between React frontend and Spring Boot backend.",
      icon: Server,
      color: "text-rose-400",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    },
    {
      title: "JWT Authentication",
      desc: "Stateless, secure token-based authentication and role authorization.",
      icon: ShieldCheck,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    }
  ];

  return (
    <section id="technology" className="py-24 bg-[#07111F] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Real-Time Campus Operations</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">Powered by enterprise-grade Spring Boot architecture and real-time protocols.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            return (
            <div key={idx} className={`p-8 rounded-2xl bg-slate-800/40 border ${tech.border} backdrop-blur-sm hover:bg-slate-800/60 transition-colors`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${tech.bg} ${tech.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{tech.desc}</p>
            </div>
          )})}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
