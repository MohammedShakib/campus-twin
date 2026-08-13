import { useState } from 'react';
import { BookOpen, QrCode, Bus, Car, Bell, Calendar, ArrowRight, Coffee, Users, Search, Newspaper, Activity, MessageSquare, Box } from 'lucide-react';

const primaryFeatures = [
  { icon: BookOpen, title: "Smart Classroom", desc: "Track active classes, room capacity, available seats and upcoming schedules." },
  { icon: QrCode, title: "Digital Attendance", desc: "QR attendance, manual check-in, late detection and attendance reports." },
  { icon: Bus, title: "Campus Bus Tracker", desc: "View current bus stops, route progress and estimated arrival time." },
  { icon: Car, title: "Smart Parking", desc: "Check total, occupied and available parking spaces in real time." },
  { icon: Bell, title: "Emergency Alerts", desc: "Broadcast critical campus alerts instantly to all connected users." },
  { icon: Calendar, title: "Campus Events", desc: "Register, receive reminders, download QR tickets and collect certificates." }
];

const secondaryFeatures = [
  { icon: Coffee, title: "Cafeteria" },
  { icon: Users, title: "Visitor Management" },
  { icon: MessageSquare, title: "Complaint Tracking" },
  { icon: Search, title: "Lost and Found" },
  { icon: Newspaper, title: "News Feed" },
  { icon: Bell, title: "Notifications" },
  { icon: Activity, title: "Analytics" },
  { icon: Box, title: "Campus Map" }
];

const CoreFeatures = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="features" className="py-9 md:py-12 lg:py-16 bg-[#F8FAFC]">
      <div className="max-w-[1160px] mx-auto px-5 md:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-7 md:mb-12 lg:mb-16 gap-4 md:gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[30px] md:text-3xl font-bold text-slate-900 mb-3 leading-tight">Everything Your Campus Needs, Connected</h2>
            <p className="text-[15px] md:text-base text-slate-600 font-medium">One intelligent platform for academic activities, campus operations and real-time communication.</p>
          </div>
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex min-h-11 items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group self-start md:self-end"
            >
              Explore all campus services
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* Primary Features Grid */}
        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-5 md:gap-y-12 mb-8 md:mb-12">
          {primaryFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
            <div key={idx} className="group min-h-[148px] md:min-h-0 hover:-translate-y-0.5 transition-transform duration-300 rounded-[16px] p-3 -m-1 md:p-2 md:-m-2 hover:bg-blue-50/50">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-[12px] bg-blue-50 flex items-center justify-center mb-3 md:mb-4 text-blue-600">
                <Icon className="w-[18px] h-[18px] md:w-5 md:h-5" />
              </div>
              <h3 className="text-[16px] md:text-lg font-bold text-slate-900 mb-1.5 md:mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-[13px] min-[420px]:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">{feature.desc}</p>
            </div>
          )})}
        </div>

        {/* Secondary Features Grid (Expandable) */}
        {showAll && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-in fade-in duration-500 pt-6 md:pt-8 border-t border-slate-200">
            {secondaryFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
              <div key={idx} className="flex items-center gap-3">
                <div className="p-2 rounded-[10px] bg-slate-100 text-slate-500">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-semibold text-slate-800 text-sm">{feature.title}</span>
              </div>
            )})}
          </div>
        )}

      </div>
    </section>
  );
};

export default CoreFeatures;
