import SectionHeader from '../ui/SectionHeader';

export default function AdminAnalytics() {
  return (
    <div className="bg-white rounded-[14px] border border-slate-200 p-5 shadow-sm">
      <SectionHeader
        title="Quick Analytics"
        action={{ label: 'View Full Reports →', href: '/dashboard/analytics' }}
      />

      <div className="mt-4 space-y-6">
        {/* Attendance Summary (Simplified) */}
        <div>
          <div className="flex justify-between items-end mb-2">
            <h4 className="text-[14px] font-bold text-slate-900">Attendance Trend (7 Days)</h4>
            <span className="text-[12px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">+2.4%</span>
          </div>
          <div className="flex items-end justify-between h-[60px] gap-1.5 pt-2">
            {[65, 70, 82, 78, 85, 92, 89].map((val, i) => {
              const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
              return (
                <div key={i} className="flex-1 flex flex-col items-center group cursor-pointer">
                  <div className="w-full relative bg-slate-50 flex items-end rounded-sm overflow-hidden h-[40px]">
                    <div
                      className="w-full bg-blue-200 group-hover:bg-blue-400 transition-colors rounded-sm"
                      style={{ height: `${val}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] font-medium text-slate-400 mt-1">{days[i]}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Complaint Status */}
        <div className="pt-4 border-t border-slate-100">
          <h4 className="text-[14px] font-bold text-slate-900 mb-3">Complaint Resolution</h4>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-[12px] mb-1.5">
                <span className="font-semibold text-amber-700">Pending (7)</span>
                <span className="text-slate-500 font-medium">13%</span>
              </div>
              <div className="w-full h-[5px] bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '13%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[12px] mb-1.5">
                <span className="font-semibold text-blue-700">Working (12)</span>
                <span className="text-slate-500 font-medium">23%</span>
              </div>
              <div className="w-full h-[5px] bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '23%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[12px] mb-1.5">
                <span className="font-semibold text-green-700">Completed (34)</span>
                <span className="text-slate-500 font-medium">64%</span>
              </div>
              <div className="w-full h-[5px] bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '64%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Classroom Utilization */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <h4 className="text-[14px] font-bold text-slate-900">Classroom Utilization</h4>
            <p className="text-[12px] font-medium text-slate-500 mt-0.5">Average utilization today</p>
          </div>
          <div className="text-[20px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg">
            74%
          </div>
        </div>

      </div>
    </div>
  );
}
