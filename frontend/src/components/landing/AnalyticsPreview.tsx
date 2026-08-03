import { AlertCircle, BarChart3, TrendingUp, Users } from 'lucide-react';

const metrics = [
  { label: 'Average Attendance', value: '89%', icon: Users },
  { label: 'Room Utilization', value: '74%', icon: BarChart3 },
  { label: 'Complaints Resolved', value: '92%', icon: AlertCircle },
  { label: 'Daily Active Users', value: '1,284', icon: TrendingUp },
];

const buildings = [
  { name: 'Engineering', value: 85 },
  { name: 'Business', value: 60 },
  { name: 'Arts', value: 45 },
  { name: 'Science', value: 70 },
];

const reportRows = [
  ['Attendance review', 'CSE-301', '89%', 'Normal'],
  ['Room capacity', 'Engineering', '74%', 'Watch'],
  ['Complaint queue', 'Facilities', '7 open', 'Assigned'],
  ['Event check-in', 'Auditorium', '214', 'Active'],
];

const AnalyticsPreview = () => {
  return (
    <section className="py-24 bg-[#F6F8FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-3">Admin report snapshot</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">Turn Campus Activity Into Actionable Insights</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Administrators can review academic activity, services and operational issues from structured reports.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div key={metric.label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{metric.label}</p>
                      <p className="mt-2 text-3xl font-extrabold text-slate-950">{metric.value}</p>
                    </div>
                    <div className="w-11 h-11 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="border-b border-slate-200 px-6 py-4">
              <h3 className="font-bold text-slate-950">Weekly Operations Report</h3>
              <p className="text-sm text-slate-500">Attendance, rooms, complaints and events</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-6 py-3 text-left font-bold">Report</th>
                    <th className="px-6 py-3 text-left font-bold">Scope</th>
                    <th className="px-6 py-3 text-left font-bold">Value</th>
                    <th className="px-6 py-3 text-left font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {reportRows.map((row) => (
                    <tr key={row.join('-')}>
                      <td className="px-6 py-4 font-bold text-slate-900">{row[0]}</td>
                      <td className="px-6 py-4 text-slate-600">{row[1]}</td>
                      <td className="px-6 py-4 font-mono font-bold text-slate-900">{row[2]}</td>
                      <td className="px-6 py-4">
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-bold text-slate-700">{row[3]}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6 border-t border-slate-200 p-6">
              <div>
                <h4 className="font-bold text-slate-800 mb-5">Weekly Attendance Trend</h4>
                <div className="h-44 flex items-end justify-between gap-2">
                  {[40, 65, 55, 80, 95, 75, 85].map((height, index) => (
                    <div key={`${height}-${index}`} className="w-full rounded-t bg-blue-100 relative overflow-hidden">
                      <div className="absolute bottom-0 w-full bg-blue-700 rounded-t" style={{ height: `${height}%` }} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-3 text-xs font-bold text-slate-400 uppercase">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-800 mb-5">Room Utilization by Building</h4>
                <div className="space-y-5">
                  {buildings.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-slate-600">{item.name}</span>
                        <span className="text-slate-900">{item.value}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-800 rounded-full" style={{ width: `${item.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsPreview;
