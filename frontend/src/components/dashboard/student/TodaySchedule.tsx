import SectionHeader from '../ui/SectionHeader';
import StatusBadge from '../ui/StatusBadge';
import { mockStudentSchedule } from '../../../mocks/dashboardData';

export default function TodaySchedule() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'success';
      case 'starting-soon': return 'warning';
      case 'upcoming': return 'info';
      default: return 'neutral';
    }
  };

  const formatStatusText = (status: string) => {
    return status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm h-full">
      <SectionHeader
        title="Today's Schedule"
        action={{ label: 'View Full Schedule', href: '/dashboard/schedule' }}
      />

      <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
        {mockStudentSchedule.map((item) => (
          <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active py-4">
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -translate-x-1/2">
              <div className={`w-3 h-3 rounded-full ${item.status === 'completed' ? 'bg-green-500' : item.status === 'starting-soon' ? 'bg-amber-500' : 'bg-blue-500'}`}></div>
            </div>

            {/* Content card */}
            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] ml-12 md:ml-0 p-4 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-slate-700">{item.time}</span>
                <StatusBadge status={getStatusColor(item.status)}>{formatStatusText(item.status)}</StatusBadge>
              </div>
              <h4 className="font-bold text-slate-900 mb-1">{item.course}</h4>
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>{item.room}</span>
                <span>{item.teacher}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {mockStudentSchedule.length === 0 && (
        <div className="py-8 text-center text-slate-500">
          No more classes today.
        </div>
      )}
    </div>
  );
}
