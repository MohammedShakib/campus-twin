import { useState } from 'react';
import { User, BookOpen, Shield, Bus, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RoleTabs = () => {
  const [activeTab, setActiveTab] = useState('student');

  const tabs = [
    { id: 'student', label: 'Student', icon: User },
    { id: 'teacher', label: 'Teacher', icon: BookOpen },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'driver', label: 'Bus Driver', icon: Bus },
    { id: 'admin', label: 'Admin', icon: Settings }
  ];

  const content = {
    student: {
      title: "Personalized Academic View",
      desc: "Students receive a personalized view of their academic schedule and daily campus services.",
      features: ["Today's classes", "Attendance records", "Bus status", "Events", "Notifications", "Available classrooms"]
    },
    teacher: {
      title: "Smart Classroom Control",
      desc: "Teachers have full control over their classes, attendance, and reservations.",
      features: ["Start/End class", "Generate QR attendance", "Publish assignments", "Reserve classrooms", "View student lists"]
    },
    security: {
      title: "Campus Safety & Control",
      desc: "Security personnel manage physical entry and emergency broadcasts.",
      features: ["Visitor verification", "Parking updates", "Emergency alerts", "Entry history"]
    },
    driver: {
      title: "Live Transit Operations",
      desc: "Drivers use a dedicated socket client to broadcast location and status.",
      features: ["Socket connection", "Stop selection", "Status updates", "Server acknowledgement"]
    },
    admin: {
      title: "Total Platform Mastery",
      desc: "Administrators monitor the entire ecosystem, users, and infrastructure.",
      features: ["User management", "Campus operations", "Analytics & Reports", "Complaints", "Backup and restore"]
    }
  };

  const activeContent = content[activeTab as keyof typeof content];

  return (
    <section id="roles" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">One Platform, Designed for Every Campus Role</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">Customized dashboards ensure everyone gets the exact tools they need.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
          {/* Tabs Header */}
          <div className="flex overflow-x-auto border-b border-slate-200 hide-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-5 text-sm font-bold transition-colors whitespace-nowrap min-w-[150px]
                  ${activeTab === tab.id 
                    ? 'text-blue-600 bg-blue-50/50 border-b-2 border-blue-600' 
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50 border-b-2 border-transparent'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            )})}
          </div>

          {/* Tab Content */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12 animate-in fade-in zoom-in-95 duration-300" key={activeTab}>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{activeContent.title}</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{activeContent.desc}</p>
              
              <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                {activeContent.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                    <span className="font-semibold text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/login" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group">
                Access {tabs.find(t => t.id === activeTab)?.label} Portal
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Visual placeholder for dashboard */}
            <div className="flex-1 w-full bg-slate-100 rounded-2xl aspect-video border border-slate-200 flex items-center justify-center relative overflow-hidden shadow-inner">
               <div className="absolute top-4 left-4 right-4 h-6 bg-white rounded flex items-center px-2 gap-2 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
               </div>
               <div className="text-slate-400 font-bold flex flex-col items-center">
                 {(() => {
                   const ActiveIcon = tabs.find(t => t.id === activeTab)?.icon ?? User;
                   return <ActiveIcon className="w-16 h-16 mb-4 opacity-50" />;
                 })()}
                 {tabs.find(t => t.id === activeTab)?.label} Dashboard Preview
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RoleTabs;
