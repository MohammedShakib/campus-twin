import { Bell, BookOpen, Bus, Calendar, QrCode } from 'lucide-react';

const primaryFeatures = [
  { icon: BookOpen, title: 'Smart Classroom', desc: 'View active classes, available seats, room schedules, and current classroom status.' },
  { icon: QrCode, title: 'Digital Attendance', desc: 'Check attendance, class history, and course-wise attendance percentage.' },
  { icon: Bus, title: 'Campus Bus Tracking', desc: 'See the current bus stop, route status, and estimated arrival time.' },
  { icon: Calendar, title: 'Classroom Reservation', desc: 'Find available classrooms and reserve suitable rooms without schedule conflicts.' },
  { icon: Calendar, title: 'Campus Events', desc: 'Browse events, register online, receive reminders, and access QR tickets.' },
  { icon: Bell, title: 'Emergency Alerts', desc: 'Receive important campus warnings and emergency notifications instantly.' },
];

const CoreFeatures = () => {
  return (
    <section id="features" className="py-9 md:py-12 lg:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-9">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-3">Everything You Need for a Connected Campus</h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl">
              Access the main services needed for daily academic and campus operations.
            </p>
          </div>
          <a href="#features" className="inline-flex text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors">
            Explore all campus services →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {primaryFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="rounded-[14px] p-4 -m-4 transition-all hover:-translate-y-0.5 hover:bg-blue-50/60">
                <div className="w-10 h-10 rounded-[14px] bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
