import { useState } from 'react';
import { BarChart3, Bell, BookOpen, Bot, Bus, Calendar, Car, Coffee, Map, MessageSquare, Newspaper, QrCode, Search, Users } from 'lucide-react';

const primaryFeatures = [
  { icon: BookOpen, title: 'Smart Classroom', desc: 'Track active classes, rooms, capacity, and daily schedules.' },
  { icon: QrCode, title: 'Digital Attendance', desc: 'Use QR check-in, manual correction, and attendance records.' },
  { icon: Bus, title: 'Campus Bus Tracking', desc: 'Show bus routes, current stops, and estimated arrival times.' },
  { icon: Calendar, title: 'Classroom Reservation', desc: 'Reserve available classrooms and avoid schedule conflicts.' },
  { icon: Bell, title: 'Emergency Alerts', desc: 'Broadcast urgent notices to the right campus users.' },
  { icon: MessageSquare, title: 'Complaint Management', desc: 'Receive, assign, and track campus service complaints.' },
];

const secondaryFeatures = [
  { icon: Car, title: 'Parking' },
  { icon: Coffee, title: 'Cafeteria' },
  { icon: Calendar, title: 'Events' },
  { icon: Users, title: 'Visitors' },
  { icon: Search, title: 'Lost and Found' },
  { icon: Newspaper, title: 'News Feed' },
  { icon: Bell, title: 'Notifications' },
  { icon: Map, title: 'Campus Map' },
  { icon: Bot, title: 'AI Assistant' },
  { icon: BarChart3, title: 'Analytics' },
];

const CoreFeatures = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="features" className="py-10 md:py-14 lg:py-[72px] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-3">Core Campus Capabilities</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            The essential tools required to manage daily academic and campus operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {primaryFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll((value) => !value)}
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-800 transition-colors"
          >
            {showAll ? 'Hide Features' : 'View All Features'}
          </button>
        </div>

        {showAll && (
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {secondaryFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-3 py-2.5">
                    <Icon className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-semibold text-slate-700">{feature.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoreFeatures;
