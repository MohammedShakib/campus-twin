import SectionHeader from '../ui/SectionHeader';
import { BookOpen, Bus, CarFront, Users, Calendar, MessageSquareWarning } from 'lucide-react';

export default function CampusOperationsOverview() {
  const operations = [
    { name: 'Classes Running', value: '18', icon: BookOpen, status: 'normal' },
    { name: 'Bus Status', value: '4 Active', icon: Bus, status: 'normal' },
    { name: 'Parking Occupancy', value: '78%', icon: CarFront, status: 'warning' },
    { name: 'Visitors Logged', value: '45', icon: Users, status: 'normal' },
    { name: 'Events Today', value: '3', icon: Calendar, status: 'normal' },
    { name: 'Open Complaints', value: '7', icon: MessageSquareWarning, status: 'error' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm h-full">
      <SectionHeader
        title="Campus Operations"
        action={{ label: 'View All Operations', href: '/dashboard/operations' }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
        {operations.map((op, index) => {
          let bgClass = 'bg-slate-50';
          let iconColorClass = 'text-slate-600';
          let dotColorClass = 'bg-green-500';

          if (op.status === 'warning') {
            dotColorClass = 'bg-amber-500';
          } else if (op.status === 'error') {
            dotColorClass = 'bg-red-500';
          }

          return (
            <div key={index} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all bg-white">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${bgClass}`}>
                  <op.icon className={`w-5 h-5 ${iconColorClass}`} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">{op.name}</h4>
                  <p className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${dotColorClass}`}></span>
                    {op.status === 'normal' ? 'Operating Normally' : op.status === 'warning' ? 'Needs Attention' : 'Action Required'}
                  </p>
                </div>
              </div>
              <span className="font-bold text-slate-900">{op.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
