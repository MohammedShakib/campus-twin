import { useState } from 'react';
import { ArrowRight, BookOpen, Bus, CheckCircle2, Settings, Shield, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const tabs = [
  { id: 'student', label: 'Student', icon: User },
  { id: 'teacher', label: 'Teacher', icon: BookOpen },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'driver', label: 'Bus Driver', icon: Bus },
  { id: 'admin', label: 'Admin', icon: Settings },
];

const content = {
  student: {
    title: 'Personal Academic Desk',
    desc: 'Students see class timing, attendance, transport and campus services from one screen.',
    rows: [
      ['09:30 AM', 'Data Structures', 'Room 302'],
      ['11:30 AM', 'Software Engineering', 'Room 405'],
      ['02:00 PM', 'Campus Bus', 'Gate 2'],
    ],
  },
  teacher: {
    title: 'Classroom and Attendance Desk',
    desc: 'Teachers manage running classes, QR attendance and room reservations.',
    rows: [
      ['Room 405', 'Running', '43 present'],
      ['QR Attendance', 'Open', '17 pending'],
      ['Next class', '02:00 PM', 'Room 210'],
    ],
  },
  security: {
    title: 'Campus Safety Desk',
    desc: 'Security personnel handle visitors, entry history, parking and emergency notices.',
    rows: [
      ['Visitor pass', '12 active', 'Verified'],
      ['Parking zone A', '87%', 'Near full'],
      ['Emergency alert', 'Ready', 'All roles'],
    ],
  },
  driver: {
    title: 'Transit Operations Desk',
    desc: 'Drivers broadcast route status through a dedicated socket client.',
    rows: [
      ['Bus 02', 'Gate 2', 'ETA 4m'],
      ['Route', 'Library loop', 'On time'],
      ['Socket', 'Connected', 'Ack received'],
    ],
  },
  admin: {
    title: 'Administration Control Desk',
    desc: 'Administrators monitor users, modules, analytics, complaints and backup status.',
    rows: [
      ['Users', '2,480', 'Active'],
      ['Complaints', '7 open', 'Assigned'],
      ['Backup', 'Today', 'Complete'],
    ],
  },
};

const RoleTabs = () => {
  const [activeTab, setActiveTab] = useState('student');
  const activeContent = content[activeTab as keyof typeof content];
  const activeLabel = tabs.find((tab) => tab.id === activeTab)?.label ?? 'User';

  return (
    <section id="roles" className="py-24 bg-[#F6F8FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-3">Role based views</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">One Platform, Designed for Every Campus Role</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Each dashboard shows the controls and records that role actually needs.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="flex overflow-x-auto hide-scrollbar border-b border-slate-200 bg-slate-50">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`min-w-[150px] flex-1 flex items-center justify-center gap-2 px-5 py-4 text-sm font-bold transition-colors whitespace-nowrap border-b-2 ${
                    activeTab === tab.id
                      ? 'text-blue-700 bg-white border-blue-700'
                      : 'text-slate-500 hover:text-slate-800 border-transparent'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 p-6 md:p-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4">{activeContent.title}</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{activeContent.desc}</p>

              <div className="space-y-3 mb-8">
                {activeContent.rows.map((row) => (
                  <div key={row.join('-')} className="flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50 p-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-sm font-bold text-slate-900">{row[0]}</span>
                    <span className="text-sm text-slate-500">{row[1]}</span>
                    <span className="ml-auto text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded px-2 py-1">{row[2]}</span>
                  </div>
                ))}
              </div>

              <Link to="/login" className="inline-flex items-center text-blue-700 font-bold hover:text-blue-900 transition-colors group">
                Access {activeLabel} Portal
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 overflow-hidden">
              <div className="h-10 bg-white border-b border-slate-200 flex items-center px-4 gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs font-mono text-slate-400">{activeTab}.campustwin/dashboard</span>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {activeContent.rows.map((row) => (
                    <div key={row[0]} className="rounded-md border border-slate-200 bg-white p-3">
                      <p className="text-xs text-slate-500 font-bold truncate">{row[0]}</p>
                      <p className="mt-2 text-sm font-extrabold text-slate-950 truncate">{row[1]}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-md border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-bold text-slate-900">{activeLabel} activity log</p>
                    <span className="rounded bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700">Synced</span>
                  </div>
                  <div className="space-y-3">
                    {[70, 46, 88].map((width, index) => (
                      <div key={width} className="flex items-center gap-3">
                        <span className="w-16 text-xs font-mono text-slate-400">Row {index + 1}</span>
                        <div className="h-2 flex-1 rounded bg-slate-100 overflow-hidden">
                          <div className="h-full bg-blue-700" style={{ width: `${width}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleTabs;
