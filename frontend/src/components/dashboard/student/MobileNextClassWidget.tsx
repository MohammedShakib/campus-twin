import { mockStudentSchedule } from '../../../mocks/dashboardData';

export default function MobileNextClassWidget() {
  const nextClass = mockStudentSchedule.find(item => item.status === 'starting-soon' || item.status === 'upcoming');

  if (!nextClass) return null;

  return (
    <div className="bg-white rounded-[14px] border border-blue-200 p-5 shadow-sm bg-gradient-to-br from-blue-50/50 to-white">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-[13px] font-bold text-blue-600 uppercase tracking-wider">Next Class</h3>
        <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 uppercase">
          Starts in 25 min
        </span>
      </div>

      <h2 className="text-[20px] font-bold text-slate-900 leading-tight mb-2">{nextClass.course}</h2>

      <div className="space-y-1 mb-4">
        <p className="text-[14px] font-medium text-slate-700">{nextClass.time}</p>
        <p className="text-[14px] text-slate-600">{nextClass.room} · {nextClass.teacher}</p>
      </div>

      <a href="/dashboard/schedule" className="block w-full text-center py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl transition-colors font-semibold text-[13px]">
        View Today's Schedule
      </a>
    </div>
  );
}
