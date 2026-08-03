import { useState } from 'react';
import { Activity, ArrowRight, Bell, BookOpen, Bus, Calendar, Car, Coffee, FileSearch, MessageSquare, Newspaper, QrCode, Search, Users } from 'lucide-react';

const primaryFeatures = [
  { icon: BookOpen, title: 'Smart Classroom', desc: 'Room capacity, running class and next schedule visibility.', meta: '18 active classes', color: 'text-blue-700', bg: 'bg-blue-50' },
  { icon: QrCode, title: 'Digital Attendance', desc: 'QR check-in, manual correction and attendance records.', meta: '89% average', color: 'text-indigo-700', bg: 'bg-indigo-50' },
  { icon: Bus, title: 'Campus Bus Tracker', desc: 'Route progress, current stop and estimated arrival time.', meta: '4 buses running', color: 'text-emerald-700', bg: 'bg-emerald-50' },
  { icon: Car, title: 'Smart Parking', desc: 'Total, occupied and available parking spaces by zone.', meta: '87% occupied', color: 'text-amber-700', bg: 'bg-amber-50' },
  { icon: Bell, title: 'Emergency Alerts', desc: 'Role-aware urgent notices and campus-wide broadcasts.', meta: 'High priority ready', color: 'text-rose-700', bg: 'bg-rose-50' },
  { icon: Calendar, title: 'Campus Events', desc: 'Event registration, QR tickets, reminders and certificates.', meta: '3 events today', color: 'text-cyan-700', bg: 'bg-cyan-50' },
];

const secondaryFeatures = [
  { icon: Coffee, title: 'Cafeteria' },
  { icon: Users, title: 'Visitor Management' },
  { icon: MessageSquare, title: 'Complaint Tracking' },
  { icon: Search, title: 'Lost and Found' },
  { icon: Newspaper, title: 'News Feed' },
  { icon: FileSearch, title: 'Reports' },
  { icon: Activity, title: 'Analytics' },
  { icon: Bell, title: 'Notifications' },
];

const CoreFeatures = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-3">Campus modules</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">Everything Your Campus Needs, Connected</h2>
            <p className="text-lg text-slate-600 max-w-2xl font-medium">
              Each module maps to a clear campus workflow instead of a generic feature list.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">System coverage</p>
            <p className="text-2xl font-extrabold text-slate-950">14 modules</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {primaryFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-300 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${feature.bg} ${feature.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600">{feature.meta}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        {!showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-blue-700 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors group"
            >
              View supporting modules
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {showAll && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {secondaryFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-md border border-slate-200 bg-slate-50 p-4 flex items-center gap-3">
                  <Icon className="w-5 h-5 text-slate-600" />
                  <span className="font-bold text-slate-800 text-sm">{feature.title}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default CoreFeatures;
