import { useState } from 'react';
import { BookOpen, CheckCircle2, Settings, Shield, User } from 'lucide-react';

const roles = [
  {
    id: 'student',
    label: 'Student',
    icon: User,
    desc: 'A focused view for daily academic activities and campus services.',
    actions: ['View today\'s classes', 'Check attendance', 'Track campus buses', 'Receive notifications'],
    preview: [['Next class', '11:30 AM'], ['Attendance', '89%'], ['Bus 02', 'ETA 4m']],
  },
  {
    id: 'teacher',
    label: 'Teacher',
    icon: BookOpen,
    desc: 'Tools for managing classes, attendance, announcements, and classroom usage.',
    actions: ['Manage classes', 'Record attendance', 'Publish announcements', 'Reserve classrooms'],
    preview: [['Room 405', 'Running'], ['Present', '43'], ['Pending', '17']],
  },
  {
    id: 'security',
    label: 'Security',
    icon: Shield,
    desc: 'Controls for visitor checks, parking status, campus entry, and emergency alerts.',
    actions: ['Verify visitors', 'Update parking status', 'Manage campus entry', 'Send emergency alerts'],
    preview: [['Visitors', '12'], ['Parking A', '87%'], ['Alerts', 'Ready']],
  },
  {
    id: 'admin',
    label: 'Admin',
    icon: Settings,
    desc: 'A control view for users, campus services, complaints, and operational reports.',
    actions: ['Manage users', 'Control campus services', 'Review complaints', 'View operational reports'],
    preview: [['Users', '2,480'], ['Complaints', '7'], ['Reports', 'Ready']],
  },
];

const RoleTabs = () => {
  const [activeRole, setActiveRole] = useState('student');
  const selected = roles.find((role) => role.id === activeRole) ?? roles[0];

  return (
    <section id="roles" className="py-9 md:py-12 lg:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-3">Designed for Every Campus Role</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Each user gets a compact dashboard with the actions they need most.
          </p>
        </div>

        <div className="hidden sm:flex justify-center gap-8 border-b border-slate-200 mb-8">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`flex items-center gap-2 px-1 pb-3 text-sm font-bold border-b-2 transition-colors ${
                  selected.id === role.id ? 'border-blue-700 text-blue-700' : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                {role.label}
              </button>
            );
          })}
        </div>

        <div className="sm:hidden mb-6">
          <select
            value={activeRole}
            onChange={(event) => setActiveRole(event.target.value)}
            className="w-full rounded-[14px] border border-slate-200 bg-white px-3 py-2.5 text-sm font-bold text-slate-800"
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>{role.label}</option>
            ))}
          </select>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-950 mb-3">{selected.label}</h3>
            <p className="text-base text-slate-600 mb-6 max-w-lg">{selected.desc}</p>
            <div className="space-y-3">
              {selected.actions.map((action) => (
                <div key={action} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">{action}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[14px] border border-slate-200 bg-white overflow-hidden">
            <div className="h-10 border-b border-slate-200 px-4 flex items-center gap-2 bg-slate-50">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="ml-2 text-xs font-mono text-slate-400">{selected.id}.dashboard</span>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-3 gap-4 mb-5">
                {selected.preview.map(([label, value]) => (
                  <div key={label}>
                    <p className="text-xs font-bold text-slate-500">{label}</p>
                    <p className="mt-1 text-lg font-extrabold text-slate-950">{value}</p>
                  </div>
                ))}
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full w-[72%] bg-blue-700" />
              </div>
              <p className="mt-2 text-xs font-semibold text-slate-500">Dashboard data synced</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleTabs;
