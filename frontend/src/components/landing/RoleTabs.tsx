import { useState } from 'react';
import { User, BookOpen, Shield, Bus, Settings, ArrowRight, Check } from 'lucide-react';
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
    <section id="roles" className="py-9 md:py-12 lg:py-16 bg-[#F8FAFC]">
      <div className="max-w-[1160px] mx-auto px-5 md:px-6 lg:px-8">

        <div className="mb-7 md:mb-12">
          <h2 className="text-[30px] md:text-3xl font-bold text-slate-900 mb-3 leading-tight">One Platform, Designed for Every Role</h2>
          <p className="text-[15px] md:text-base text-slate-600 font-medium">Customized dashboards ensure everyone gets the exact tools they need.</p>
        </div>

        {/* Segmented Tab Control */}
        <div className="flex overflow-x-auto border-b border-slate-200 hide-scrollbar mb-7 md:mb-10 -mx-5 px-5 md:mx-0 md:px-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex min-h-11 items-center gap-2 px-4 py-3 text-[15px] md:text-sm font-semibold transition-colors whitespace-nowrap
                ${activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-500 hover:text-slate-700 border-b-2 border-transparent'
                }
              `}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          )})}
        </div>

        {/* Tab Content */}
        <div className="flex flex-col md:flex-row items-start gap-7 md:gap-12 lg:gap-24 animate-in fade-in duration-300" key={activeTab}>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-3 md:mb-4">{activeContent.title}</h3>
            <p className="text-[15px] md:text-base text-slate-600 mb-5 md:mb-8">{activeContent.desc}</p>

            <ul className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-3 mb-6 md:mb-10">
              {activeContent.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-slate-400 shrink-0" />
                  <span className="font-medium text-slate-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/login" className="inline-flex min-h-11 items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group">
              Access {tabs.find(t => t.id === activeTab)?.label} Portal
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Minimal Browser-style Dashboard Preview */}
          <div className="hidden md:flex flex-1 w-full bg-slate-50 rounded-[14px] border border-slate-200 flex-col overflow-hidden shadow-sm aspect-video">
             <div className="h-10 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
             </div>
             <div className="flex-1 flex flex-col items-center justify-center text-slate-400 bg-white">
               {(() => {
                 const ActiveIcon = tabs.find(t => t.id === activeTab)?.icon ?? User;
                 return <ActiveIcon className="w-10 h-10 mb-3 opacity-30" />;
               })()}
               <span className="text-sm font-semibold">{tabs.find(t => t.id === activeTab)?.label} Dashboard</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RoleTabs;
