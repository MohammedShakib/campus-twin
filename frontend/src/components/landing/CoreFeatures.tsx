import { useState } from 'react';
import { BookOpen, QrCode, Bus, Car, Bell, Calendar, ArrowRight, Coffee, Users, Search, Newspaper, Activity, MessageSquare, Box } from 'lucide-react';

const primaryFeatures = [
  { icon: BookOpen, title: "Smart Classroom", desc: "Track active classes, room capacity, available seats and upcoming schedules.", color: "text-blue-600", bg: "bg-blue-100" },
  { icon: QrCode, title: "Digital Attendance", desc: "QR attendance, manual check-in, late detection and attendance reports.", color: "text-violet-600", bg: "bg-violet-100" },
  { icon: Bus, title: "Campus Bus Tracker", desc: "View current bus stops, route progress and estimated arrival time.", color: "text-emerald-600", bg: "bg-emerald-100" },
  { icon: Car, title: "Smart Parking", desc: "Check total, occupied and available parking spaces in real time.", color: "text-amber-600", bg: "bg-amber-100" },
  { icon: Bell, title: "Emergency Alerts", desc: "Broadcast critical campus alerts instantly to all connected users.", color: "text-red-600", bg: "bg-red-100" },
  { icon: Calendar, title: "Campus Events", desc: "Register, receive reminders, download QR tickets and collect certificates.", color: "text-cyan-600", bg: "bg-cyan-100" }
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
    <section id="features" className="py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything Your Campus Needs, Connected</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">One intelligent platform for academic activities, campus operations and real-time communication.</p>
        </div>

        {/* Primary Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {primaryFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
            <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:bg-blue-50/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
            </div>
          )})}
        </div>

        {/* Explore More Button */}
        {!showAll && (
          <div className="text-center">
            <button 
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors group"
            >
              Explore All Features
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* Secondary Features Grid (Expandable) */}
        {showAll && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {secondaryFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 flex items-center gap-3 hover:bg-slate-50 transition-colors">
                <div className="p-2 rounded-lg bg-slate-100 text-slate-600">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-bold text-slate-800 text-sm">{feature.title}</span>
              </div>
            )})}
          </div>
        )}

      </div>
    </section>
  );
};

export default CoreFeatures;
