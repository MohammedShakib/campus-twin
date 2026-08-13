import { useState, type ReactNode } from 'react';
import {
  ArrowRight,
  BookOpen,
  Check,
  Settings,
  Shield,
  User,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import adminDashboardShot from '../../assets/admin-dashboard-shot.png';
import securityDashboardShot from '../../assets/security-dashboard-shot.png';
import studentDashboardShot from '../../assets/student-dashboard-shot.png';
import teacherDashboardShot from '../../assets/teacher-dashboard-shot.png';

type TabId = 'student' | 'teacher' | 'security' | 'admin';

const tabs = [
  { id: 'student' as const, label: 'Student', icon: User },
  { id: 'teacher' as const, label: 'Teacher', icon: BookOpen },
  { id: 'security' as const, label: 'Security', icon: Shield },
  { id: 'admin' as const, label: 'Admin', icon: Settings },
];

const themes: Record<
  TabId,
  {
    accentText: string;
    accentBg: string;
    accentBorder: string;
    accentSoft: string;
    image: string;
    imageAlt: string;
  }
> = {
  student: {
    accentText: 'text-blue-700',
    accentBg: 'bg-blue-600',
    accentBorder: 'border-blue-200',
    accentSoft: 'bg-blue-50',
    image: studentDashboardShot,
    imageAlt: 'Student dashboard screenshot',
  },
  teacher: {
    accentText: 'text-violet-700',
    accentBg: 'bg-violet-600',
    accentBorder: 'border-violet-200',
    accentSoft: 'bg-violet-50',
    image: teacherDashboardShot,
    imageAlt: 'Teacher dashboard screenshot',
  },
  security: {
    accentText: 'text-emerald-700',
    accentBg: 'bg-emerald-600',
    accentBorder: 'border-emerald-200',
    accentSoft: 'bg-emerald-50',
    image: securityDashboardShot,
    imageAlt: 'Security dashboard screenshot',
  },
  admin: {
    accentText: 'text-cyan-700',
    accentBg: 'bg-cyan-600',
    accentBorder: 'border-cyan-200',
    accentSoft: 'bg-cyan-50',
    image: adminDashboardShot,
    imageAlt: 'Admin dashboard screenshot',
  },
};

const content = {
  student: {
    title: 'Personalized Academic View',
    desc: 'Students see schedule, attendance, rooms, transport, and campus updates in one focused workspace.',
    badge: 'Student workspace',
    features: ["Today's classes", 'Attendance', 'Bus status', 'Notifications'],
  },
  teacher: {
    title: 'Smart Classroom Control',
    desc: 'Teachers manage classes, attendance, rooms, and pending tasks from a single dashboard.',
    badge: 'Teacher workspace',
    features: ['Manage classes', 'Attendance QR', 'Reserve rooms', 'View students'],
  },
  security: {
    title: 'Campus Safety & Control',
    desc: 'Security teams coordinate incident response, visitor checks, and emergency communication in real time.',
    badge: 'Security workspace',
    features: ['Visitor verification', 'Parking updates', 'Emergency alerts', 'Entry history'],
  },
  admin: {
    title: 'Total Platform Mastery',
    desc: 'Administrators monitor operations, users, services, and performance across the full campus platform.',
    badge: 'Admin workspace',
    features: ['User management', 'Campus operations', 'Analytics', 'Complaints'],
  },
};

function BrowserPreviewFrame({
  children,
  pathLabel,
}: {
  children: ReactNode;
  pathLabel: string;
}) {
  return (
    <div className="w-full overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_28px_60px_-42px_rgba(15,23,42,0.3)]">
      <div className="flex h-11 items-center gap-3 border-b border-slate-200 bg-slate-50 px-4">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-rose-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        <div className="flex-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium text-slate-400">
          {pathLabel}
        </div>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}

const RoleTabs = () => {
  const [activeTab, setActiveTab] = useState<TabId>('student');
  const activeContent = content[activeTab];
  const activeTheme = themes[activeTab];

  return (
    <section id="roles" className="bg-[#F8FAFC] py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1160px] px-5 md:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl md:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Role Experience</p>
          <h2 className="mt-3 text-[32px] font-bold leading-tight text-slate-950 md:text-[40px]">
            One Platform, Designed for Every Role
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-slate-600 md:text-base">
            Every user gets a focused workspace, while operations stay connected through the same
            underlying campus data.
          </p>
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_28px_60px_-44px_rgba(15,23,42,0.25)] md:p-6 lg:p-8">
          <div className="mb-7 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                const theme = themes[tab.id];

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition-all ${
                      isActive
                        ? `${theme.accentBorder} ${theme.accentSoft} ${theme.accentText} shadow-sm`
                        : 'border-slate-200 bg-slate-50 text-slate-500 hover:bg-white hover:text-slate-700'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] ${activeTheme.accentBorder} ${activeTheme.accentSoft} ${activeTheme.accentText}`}
            >
              <span className={`h-2 w-2 rounded-full ${activeTheme.accentBg}`} />
              {activeContent.badge}
            </div>
          </div>

          <div className="grid items-start gap-7 lg:grid-cols-[0.38fr_0.62fr] lg:gap-10" key={activeTab}>
            <div className="pt-1">
              <h3 className="text-[28px] font-bold leading-tight text-slate-950">{activeContent.title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-slate-600 md:text-base">{activeContent.desc}</p>

              <div className="mt-6 grid gap-3">
                {activeContent.features.map((feature) => (
                  <div
                    key={feature}
                    className={`flex items-center gap-3 rounded-[18px] border px-4 py-3 ${activeTheme.accentBorder} ${activeTheme.accentSoft}`}
                  >
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${activeTheme.accentBg} text-white`}
                    >
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/login"
                className={`mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-bold transition-colors ${activeTheme.accentText}`}
              >
                Access {tabs.find((tab) => tab.id === activeTab)?.label} Portal
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <BrowserPreviewFrame pathLabel={`campustwin.app/${activeTab}`}>
              <img
                src={activeTheme.image}
                alt={activeTheme.imageAlt}
                className="block w-full object-cover object-top"
              />
            </BrowserPreviewFrame>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleTabs;
