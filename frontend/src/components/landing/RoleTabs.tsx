import { useState, type ReactNode } from 'react';
import {
  ArrowRight,
  BookOpen,
  Bus,
  Check,
  GraduationCap,
  LayoutGrid,
  MapPinned,
  Megaphone,
  Route,
  Settings,
  Shield,
  ShieldCheck,
  Siren,
  Users,
  User,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import teacherDashboardPreview from '../../assets/teacher-dashboard-preview.png';

type TabId = 'student' | 'teacher' | 'security' | 'driver' | 'admin';

function BrowserPreviewFrame({
  children,
  pathLabel,
}: {
  children: ReactNode;
  pathLabel: string;
}) {
  return (
    <div className="hidden h-full min-h-[360px] w-full flex-1 overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_20px_45px_-30px_rgba(15,23,42,0.35)] md:flex md:aspect-[16/10] md:flex-col">
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
      <div className="min-h-0 flex-1 bg-white">{children}</div>
    </div>
  );
}

function StudentPreview() {
  return (
    <div className="grid h-full grid-cols-[1.1fr_0.9fr] gap-4 bg-[#F8FAFC] p-4">
      <div className="flex flex-col gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Today&apos;s Schedule</p>
              <h4 className="mt-1 text-lg font-bold text-slate-900">Software Engineering</h4>
            </div>
            <div className="rounded-xl bg-blue-50 px-3 py-2 text-right">
              <p className="text-[11px] font-semibold text-slate-500">Next Class</p>
              <p className="text-sm font-bold text-blue-600">11:30 AM</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              ['Attendance', '92%'],
              ['Rooms', '2 free'],
              ['Bus ETA', '4 min'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl bg-slate-50 p-3">
                <p className="text-[11px] font-medium text-slate-500">{label}</p>
                <p className="mt-1 text-base font-bold text-slate-900">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-base font-bold text-slate-900">Upcoming Tasks</h4>
            <span className="text-xs font-semibold text-slate-400">This Week</span>
          </div>
          <div className="space-y-3">
            {[
              ['Assignment submission', 'Today'],
              ['Lab attendance QR', 'Tomorrow'],
              ['Club event registration', 'Fri'],
            ].map(([label, due]) => (
              <div key={label} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5">
                <span className="text-sm font-medium text-slate-700">{label}</span>
                <span className="text-xs font-semibold text-blue-600">{due}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <h4 className="mb-3 text-base font-bold text-slate-900">Campus Updates</h4>
          <div className="space-y-3">
            {[
              ['Engineering Building', '3 rooms available'],
              ['Bus 02', 'On route to Main Gate'],
              ['Library', 'Open until 8 PM'],
            ].map(([place, detail]) => (
              <div key={place} className="rounded-xl bg-slate-50 p-3">
                <p className="text-sm font-semibold text-slate-900">{place}</p>
                <p className="mt-1 text-xs text-slate-500">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 p-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">Student Snapshot</p>
          <p className="mt-2 text-3xl font-bold">43 / 60</p>
          <p className="mt-1 text-sm text-blue-50">Students already joined the next class.</p>
        </div>
      </div>
    </div>
  );
}

function TeacherPreview() {
  return (
    <div className="h-full bg-[#F8FAFC] p-3">
      <div className="h-full overflow-hidden rounded-[16px] border border-slate-200 bg-white">
        <img
          src={teacherDashboardPreview}
          alt="Teacher dashboard showing classes, quick actions, attendance QR, and classroom reservations"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

function SecurityPreview() {
  const emergencyActions = [
    { label: 'Broadcast', icon: Megaphone },
    { label: 'Lockdown', icon: ShieldCheck },
    { label: 'Incident', icon: Siren },
    { label: 'Routes', icon: MapPinned },
  ];

  return (
    <div className="grid h-full grid-cols-[1fr_0.86fr] gap-4 bg-[#F8FAFC] p-4">
      <div className="flex flex-col gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-base font-bold text-slate-900">Security Overview</h4>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
              All systems stable
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              ['Entries', '148'],
              ['Alerts', '2'],
              ['Parking', '78%'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl bg-slate-50 p-3">
                <p className="text-[11px] font-medium text-slate-500">{label}</p>
                <p className="mt-1 text-base font-bold text-slate-900">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-base font-bold text-slate-900">Live Incidents</h4>
            <span className="text-xs font-semibold text-slate-400">Updated 1 min ago</span>
          </div>
          <div className="space-y-3">
            {[
              ['Main Gate visitor pass scanned', 'Normal', 'bg-blue-500'],
              ['Parking B nearing capacity', 'Warning', 'bg-amber-500'],
              ['Emergency line test completed', 'Resolved', 'bg-emerald-500'],
            ].map(([label, status, dot]) => (
              <div key={label} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${dot}`} />
                  <span className="text-sm font-medium text-slate-700">{label}</span>
                </div>
                <span className="text-xs font-semibold text-slate-500">{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <h4 className="mb-3 text-base font-bold text-slate-900">Emergency Controls</h4>
          <div className="grid grid-cols-2 gap-3">
            {emergencyActions.map(({ label, icon: Icon }) => (
              <div key={label} className="rounded-xl bg-slate-50 p-3">
                <Icon className="mb-3 h-5 w-5 text-blue-600" />
                <p className="text-sm font-semibold text-slate-800">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-4">
          <h4 className="mb-3 text-base font-bold text-slate-900">Patrol Coverage</h4>
          <div className="space-y-3">
            {[
              ['North Gate', 'Covered'],
              ['Engineering Block', 'Patrol active'],
              ['Dormitory Zone', 'Next sweep 5:30 PM'],
            ].map(([label, detail]) => (
              <div key={label} className="rounded-xl bg-slate-50 p-3">
                <p className="text-sm font-semibold text-slate-900">{label}</p>
                <p className="mt-1 text-xs text-slate-500">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DriverPreview() {
  return (
    <div className="grid h-full grid-cols-[0.94fr_1.06fr] gap-4 bg-[#F8FAFC] p-4">
      <div className="flex flex-col gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-base font-bold text-slate-900">Route Status</h4>
            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-600">
              Bus 02 online
            </span>
          </div>
          <div className="space-y-3">
            {[
              ['Current stop', 'Engineering'],
              ['Next stop', 'Main Gate'],
              ['ETA', '4 minutes'],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5">
                <span className="text-sm font-medium text-slate-600">{label}</span>
                <span className="text-sm font-bold text-slate-900">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-4">
          <h4 className="mb-3 text-base font-bold text-slate-900">Passenger Updates</h4>
          <div className="space-y-3">
            {[
              ['Boarded students', '31'],
              ['Available seats', '12'],
              ['Last sync', '10 sec ago'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl bg-slate-50 p-3">
                <p className="text-[11px] font-medium text-slate-500">{label}</p>
                <p className="mt-1 text-base font-bold text-slate-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-base font-bold text-slate-900">Live Route Map</h4>
          <Route className="h-5 w-5 text-blue-600" />
        </div>
        <div className="relative h-[260px] rounded-[20px] border border-slate-200 bg-[linear-gradient(to_right,#eef2ff_1px,transparent_1px),linear-gradient(to_bottom,#eef2ff_1px,transparent_1px)] bg-[size:30px_30px] bg-slate-50">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M 12 22 C 24 18, 28 38, 44 38 S 62 26, 74 44 S 86 76, 90 78"
              fill="none"
              stroke="#2563eb"
              strokeDasharray="4 3"
              strokeLinecap="round"
              strokeWidth="1.8"
            />
          </svg>
          <div className="absolute left-[10%] top-[18%] rounded-full bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 shadow-sm">
            Main Gate
          </div>
          <div className="absolute left-[36%] top-[28%] rounded-full bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 shadow-sm">
            Engineering
          </div>
          <div className="absolute right-[10%] top-[70%] rounded-full bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 shadow-sm">
            Library
          </div>
          <div className="absolute left-[54%] top-[42%] flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white shadow-lg">
            <Bus className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminPreview() {
  const quickAccessItems = [
    { label: 'Users', icon: Users },
    { label: 'Roles', icon: ShieldCheck },
    { label: 'Academics', icon: GraduationCap },
    { label: 'Settings', icon: LayoutGrid },
  ];

  return (
    <div className="grid h-full grid-cols-[1fr_0.92fr] gap-4 bg-[#F8FAFC] p-4">
      <div className="flex flex-col gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-base font-bold text-slate-900">Platform Overview</h4>
            <span className="text-xs font-semibold text-slate-400">Live</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              ['Users', '2.4k'],
              ['Services', '98%'],
              ['Alerts', '3'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl bg-slate-50 p-3">
                <p className="text-[11px] font-medium text-slate-500">{label}</p>
                <p className="mt-1 text-base font-bold text-slate-900">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-base font-bold text-slate-900">Operations Snapshot</h4>
            <span className="text-xs font-semibold text-blue-600">View reports</span>
          </div>
          <div className="space-y-4">
            {[
              ['Academic services', '92%'],
              ['Transport uptime', '88%'],
              ['Security readiness', '96%'],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="mb-1 flex items-center justify-between text-sm font-medium text-slate-600">
                  <span>{label}</span>
                  <span className="text-slate-900">{value}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-blue-600" style={{ width: value }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <h4 className="mb-3 text-base font-bold text-slate-900">Needs Attention</h4>
          <div className="space-y-3">
            {[
              ['Parking B almost full', 'Medium'],
              ['2 pending approvals', 'High'],
              ['Bus 03 delayed', 'Low'],
            ].map(([label, level]) => (
              <div key={label} className="rounded-xl bg-slate-50 p-3">
                <p className="text-sm font-semibold text-slate-900">{label}</p>
                <p className="mt-1 text-xs text-slate-500">{level} priority</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-4">
          <h4 className="mb-3 text-base font-bold text-slate-900">Quick Access</h4>
          <div className="grid grid-cols-2 gap-3">
            {quickAccessItems.map(({ label, icon: Icon }) => (
              <div key={label} className="rounded-xl bg-slate-50 p-3">
                <Icon className="mb-3 h-5 w-5 text-blue-600" />
                <p className="text-sm font-semibold text-slate-800">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewContent({ activeTab }: { activeTab: TabId }) {
  switch (activeTab) {
    case 'student':
      return <StudentPreview />;
    case 'teacher':
      return <TeacherPreview />;
    case 'security':
      return <SecurityPreview />;
    case 'driver':
      return <DriverPreview />;
    case 'admin':
      return <AdminPreview />;
    default:
      return null;
  }
}

const RoleTabs = () => {
  const [activeTab, setActiveTab] = useState<TabId>('student');

  const tabs = [
    { id: 'student' as const, label: 'Student', icon: User },
    { id: 'teacher' as const, label: 'Teacher', icon: BookOpen },
    { id: 'security' as const, label: 'Security', icon: Shield },
    { id: 'driver' as const, label: 'Bus Driver', icon: Bus },
    { id: 'admin' as const, label: 'Admin', icon: Settings },
  ];

  const content = {
    student: {
      title: 'Personalized Academic View',
      desc: 'Students receive a personalized view of their academic schedule and daily campus services.',
      features: ["Today's classes", 'Attendance records', 'Bus status', 'Events', 'Notifications', 'Available classrooms'],
    },
    teacher: {
      title: 'Smart Classroom Control',
      desc: 'Teachers have full control over their classes, attendance, and reservations.',
      features: ['Manage classes', 'Attendance QR', 'Reserve rooms', 'View students', 'Assignments and tasks'],
    },
    security: {
      title: 'Campus Safety & Control',
      desc: 'Security personnel manage physical entry and emergency broadcasts.',
      features: ['Visitor verification', 'Parking updates', 'Emergency alerts', 'Entry history'],
    },
    driver: {
      title: 'Live Transit Operations',
      desc: 'Drivers use a dedicated socket client to broadcast location and status.',
      features: ['Socket connection', 'Stop selection', 'Status updates', 'Server acknowledgement'],
    },
    admin: {
      title: 'Total Platform Mastery',
      desc: 'Administrators monitor the entire ecosystem, users, and infrastructure.',
      features: ['User management', 'Campus operations', 'Analytics & Reports', 'Complaints', 'Backup and restore'],
    },
  };

  const activeContent = content[activeTab];

  return (
    <section id="roles" className="bg-[#F8FAFC] py-9 md:py-12 lg:py-16">
      <div className="mx-auto max-w-[1160px] px-5 md:px-6 lg:px-8">
        <div className="mb-7 md:mb-12">
          <h2 className="mb-3 text-[30px] font-bold leading-tight text-slate-900 md:text-3xl">
            One Platform, Designed for Every Role
          </h2>
          <p className="text-[15px] font-medium text-slate-600 md:text-base">
            Customized dashboards ensure everyone gets the exact tools they need.
          </p>
        </div>

        <div className="-mx-5 mb-7 flex overflow-x-auto border-b border-slate-200 px-5 hide-scrollbar md:mx-0 md:mb-10 md:px-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex min-h-11 items-center gap-2 whitespace-nowrap border-b-2 px-4 py-3 text-[15px] font-semibold transition-colors md:text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          className="animate-in fade-in flex flex-col items-start gap-7 duration-300 md:flex-row md:gap-12 lg:gap-20"
          key={activeTab}
        >
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-bold text-slate-900 md:mb-4">{activeContent.title}</h3>
            <p className="mb-5 text-[15px] text-slate-600 md:mb-8 md:text-base">{activeContent.desc}</p>

            <ul className="mb-6 grid grid-cols-1 gap-x-4 gap-y-3 min-[420px]:grid-cols-2 md:mb-10 md:grid-cols-1">
              {activeContent.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="h-5 w-5 shrink-0 text-slate-400" />
                  <span className="text-sm font-medium text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/login"
              className="group inline-flex min-h-11 items-center text-sm font-bold text-blue-600 transition-colors hover:text-blue-800"
            >
              Access {tabs.find((tab) => tab.id === activeTab)?.label} Portal
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <BrowserPreviewFrame pathLabel={`campustwin.app/${activeTab}`}>
            <PreviewContent activeTab={activeTab} />
          </BrowserPreviewFrame>
        </div>
      </div>
    </section>
  );
};

export default RoleTabs;
