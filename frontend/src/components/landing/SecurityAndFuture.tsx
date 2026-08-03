import { Database, Fingerprint, Key, Lock, RefreshCcw, ShieldCheck } from 'lucide-react';

const checks = [
  { icon: Key, text: 'JWT Authentication' },
  { icon: ShieldCheck, text: 'Role-Based Access' },
  { icon: Lock, text: 'Password Encryption' },
  { icon: Database, text: 'Secure File Handling' },
  { icon: Fingerprint, text: 'Validated API Requests' },
  { icon: RefreshCcw, text: 'Backup and Restore' },
];

const permissions = [
  ['Student', 'Schedule, attendance, events', 'Limited'],
  ['Teacher', 'Classes, QR attendance, rooms', 'Academic'],
  ['Security', 'Visitors, parking, alerts', 'Operational'],
  ['Admin', 'Users, reports, backups', 'Full'],
];

const roadmap = [
  ['Current system', 'User updates, simulated bus tracking, manual parking status and software-based attendance.'],
  ['Future integration', 'GPS buses, parking sensors, RFID attendance and environmental sensors.'],
];

const SecurityAndFuture = () => {
  return (
    <section className="py-24 bg-[#F6F8FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-3">Access control</p>
            <h2 className="text-3xl font-bold text-slate-950 mb-5">Secure Access for Every Campus Role</h2>
            <p className="text-lg text-slate-600 mb-8">
              CampusTwin keeps user permissions separate so academic, transport, security and administrative records stay controlled.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {checks.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="rounded-md border border-slate-200 bg-white p-4 flex items-center gap-3">
                    <Icon className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span className="text-sm font-bold text-slate-700">{item.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-5 py-3 text-left font-bold">Role</th>
                    <th className="px-5 py-3 text-left font-bold">Allowed area</th>
                    <th className="px-5 py-3 text-left font-bold">Access</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {permissions.map((row) => (
                    <tr key={row[0]}>
                      <td className="px-5 py-4 font-bold text-slate-900">{row[0]}</td>
                      <td className="px-5 py-4 text-slate-600">{row[1]}</td>
                      <td className="px-5 py-4">
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-bold text-slate-700">{row[2]}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white shadow-sm p-6 md:p-8 self-start lg:mt-10">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Expansion path</p>
            <h3 className="text-2xl font-bold text-slate-950 mb-4">Software Today. Smart Infrastructure Tomorrow.</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              The current software-based model is designed so physical sensors and IoT devices can later connect without rebuilding the platform.
            </p>

            <div className="space-y-4">
              {roadmap.map((item) => (
                <div key={item[0]} className="rounded-md border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-extrabold text-slate-950 mb-2">{item[0]}</p>
                  <p className="text-sm leading-relaxed text-slate-600">{item[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityAndFuture;
