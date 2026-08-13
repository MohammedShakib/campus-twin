import SectionHeader from '../ui/SectionHeader';

export default function AdminAnalytics() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm h-full flex flex-col">
      <SectionHeader
        title="Quick Analytics"
        action={{ label: 'View Full Reports', href: '/dashboard/analytics' }}
      />

      <div className="space-y-6 flex-1 flex flex-col justify-center">
        {/* Simple CSS-based bar chart for Attendance */}
        <div>
          <div className="flex justify-between items-end mb-2">
            <h4 className="text-sm font-semibold text-slate-700">Attendance Trend (7 Days)</h4>
            <span className="text-xs font-bold text-green-600">+2.4%</span>
          </div>
          <div className="flex items-end justify-between h-24 gap-2 pt-4">
            {[65, 70, 82, 78, 85, 92, 89].map((val, i) => (
              <div key={i} className="w-full relative group">
                <div
                  className="w-full bg-blue-100 rounded-t-sm group-hover:bg-blue-200 transition-colors"
                  style={{ height: `${val}%` }}
                >
                  <div
                    className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  >
                    {val}%
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-medium">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>

        {/* Complaint Status */}
        <div className="pt-4 border-t border-slate-100">
          <h4 className="text-sm font-semibold text-slate-700 mb-3">Complaint Status</h4>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium text-amber-700">Pending (7)</span>
                <span className="text-slate-500">13%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '13%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium text-blue-700">Working (12)</span>
                <span className="text-slate-500">23%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '23%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium text-green-700">Completed (34)</span>
                <span className="text-slate-500">64%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '64%' }}></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
