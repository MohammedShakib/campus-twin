import SectionHeader from '../ui/SectionHeader';
import { mockStudentSchedule } from '../../../mocks/dashboardData';

export default function TodaySchedule() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <span className="text-[11px] font-bold tracking-wide text-green-700 bg-green-50/80 px-2 py-0.5 rounded border border-green-200/50 uppercase">Completed</span>;
      case 'starting-soon':
        return <span className="text-[11px] font-bold tracking-wide text-amber-700 bg-amber-50/80 px-2 py-0.5 rounded border border-amber-200/50 uppercase">Starting Soon</span>;
      case 'upcoming':
        return <span className="text-[11px] font-bold tracking-wide text-blue-700 bg-blue-50/80 px-2 py-0.5 rounded border border-blue-200/50 uppercase">Upcoming</span>;
      default:
        return <span className="text-[11px] font-bold tracking-wide text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/50 uppercase">{status}</span>;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm h-full">
      <SectionHeader
        title="Today's Schedule"
        action={{ label: 'View Full Schedule →', href: '/dashboard/schedule' }}
      />

      <div className="mt-2 flex flex-col">
        {mockStudentSchedule.map((item) => {
          const isNextClass = item.status === 'starting-soon';
          return (
            <div
              key={item.id}
              className={`flex flex-col sm:flex-row sm:items-center py-3 px-3 gap-2 sm:gap-4 border-b border-slate-100 last:border-0 ${
                isNextClass ? 'bg-blue-50/40 rounded-xl border-transparent -mx-3 px-6' : ''
              }`}
            >
              <div className="w-24 shrink-0">
                <span className="text-sm font-bold text-slate-700">{item.time.split(' - ')[0]}</span>
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-[15px] font-bold text-slate-900 truncate">{item.course}</h4>
              </div>

              <div className="w-20 shrink-0 text-sm font-medium text-slate-600 hidden sm:block">
                {item.room}
              </div>

              <div className="w-24 shrink-0 text-sm text-slate-500 hidden md:block truncate">
                {item.teacher}
              </div>

              <div className="w-28 shrink-0 flex sm:justify-end">
                {getStatusBadge(item.status)}
              </div>
            </div>
          );
        })}
      </div>

      {mockStudentSchedule.length === 0 && (
        <div className="py-8 text-center text-sm text-slate-500 font-medium">
          No more classes today.
        </div>
      )}
    </div>
  );
}
