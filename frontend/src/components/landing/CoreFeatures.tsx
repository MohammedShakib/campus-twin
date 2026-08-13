import {
  Bell,
  BookOpen,
  Bus,
  Calendar,
  Car,
  QrCode,
} from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Smart Classroom',
    desc: 'Track active classes, room capacity, available seats, and the next session from one academic console.',
    eyebrow: 'Academic',
    accent: 'text-blue-600',
    tint: 'bg-blue-50/60',
  },
  {
    icon: QrCode,
    title: 'Digital Attendance',
    desc: 'Run QR attendance, manual check-in, late detection, and attendance insights without switching tools.',
    eyebrow: 'Attendance',
    accent: 'text-violet-600',
    tint: 'bg-violet-50/60',
  },
  {
    icon: Bus,
    title: 'Campus Bus Tracker',
    desc: 'Monitor route progress, bus stops, and ETA updates in real time.',
    eyebrow: 'Transport',
    accent: 'text-amber-600',
    tint: 'bg-amber-50/60',
  },
  {
    icon: Car,
    title: 'Smart Parking',
    desc: 'Check occupied and available parking spaces before drivers arrive.',
    eyebrow: 'Facilities',
    accent: 'text-rose-600',
    tint: 'bg-rose-50/60',
  },
  {
    icon: Bell,
    title: 'Emergency Alerts',
    desc: 'Broadcast urgent campus updates instantly across connected devices.',
    eyebrow: 'Safety',
    accent: 'text-emerald-600',
    tint: 'bg-emerald-50/60',
  },
  {
    icon: Calendar,
    title: 'Campus Events',
    desc: 'Register attendees, issue QR access, and manage event reminders in one place.',
    eyebrow: 'Events',
    accent: 'text-cyan-600',
    tint: 'bg-cyan-50/60',
  },
];

const CoreFeatures = () => {
  return (
    <section id="features" className="bg-[#F8FAFC] py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1160px] px-5 md:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-[32px] font-bold leading-tight text-slate-950 md:text-[40px]">
              Everything Your Campus Needs, Connected
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-slate-600 md:text-base">
              A single operational layer for academic workflows, campus services, transport, and
              emergency communication.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="flex h-full min-h-[220px] flex-col rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_-40px_rgba(15,23,42,0.2)]"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-[18px] ${feature.tint} ${feature.accent}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  {feature.eyebrow}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
