import { TrendingUp, Users, AlertCircle, BarChart3 } from 'lucide-react';

const AnalyticsPreview = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Turn Campus Activity Into Actionable Insights</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">Administrators can understand trends, identify operational issues and make data-driven decisions.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
          
          {/* Top Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Average Attendance", value: "89%", icon: Users, iconColor: "text-blue-500", color: "bg-blue-50" },
              { label: "Classroom Utilization", value: "74%", icon: BarChart3, iconColor: "text-emerald-500", color: "bg-emerald-50" },
              { label: "Complaints Resolved", value: "92%", icon: AlertCircle, iconColor: "text-amber-500", color: "bg-amber-50" },
              { label: "Daily Active Users", value: "1,284", icon: TrendingUp, iconColor: "text-violet-500", color: "bg-violet-50" }
            ].map((metric, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${metric.color}`}>
                  <metric.icon className={`w-5 h-5 ${metric.iconColor}`} />
                </div>
                <span className="text-3xl font-extrabold text-slate-900 mb-1">{metric.value}</span>
                <span className="text-sm font-semibold text-slate-500">{metric.label}</span>
              </div>
            ))}
          </div>

          {/* Charts Mockup Row */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Mock Line Chart */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h4 className="font-bold text-slate-700 mb-6">Weekly Attendance Trend</h4>
              <div className="h-48 flex items-end justify-between gap-2 relative">
                {/* Horizontal grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                     <div key={i} className="w-full h-px bg-slate-200"></div>
                  ))}
                </div>
                {/* Bars mimicking a line/bar chart */}
                {[40, 65, 55, 80, 95, 75, 85].map((h, i) => (
                  <div key={i} className="w-full bg-blue-500/20 rounded-t-md relative group">
                    <div className="absolute bottom-0 w-full bg-blue-500 rounded-t-md transition-all duration-1000" style={{ height: `${h}%` }}></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-xs font-bold text-slate-400 uppercase">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>

            {/* Mock Horizontal Bar Chart */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h4 className="font-bold text-slate-700 mb-6">Classroom Utilization by Building</h4>
              <div className="space-y-5">
                {[
                  { name: "Engineering", val: 85, color: "bg-emerald-500" },
                  { name: "Business", val: 60, color: "bg-blue-500" },
                  { name: "Arts", val: 45, color: "bg-violet-500" },
                  { name: "Science", val: 70, color: "bg-amber-500" }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-slate-600">{item.name}</span>
                      <span className="text-slate-900">{item.val}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.val}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AnalyticsPreview;
