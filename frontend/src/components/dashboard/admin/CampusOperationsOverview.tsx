import SectionHeader from '../ui/SectionHeader';
import { BookOpen, Bus, CarFront, Users, Calendar, MessageSquareWarning } from 'lucide-react';

export default function CampusOperationsOverview() {
  const operations = [
    { name: 'Classes Running', value: '18', icon: BookOpen, status: 'normal', href: '/dashboard/classes' },
    { name: 'Bus Status', value: '4 Active', icon: Bus, status: 'normal', href: '/dashboard/transportation' },
    { name: 'Parking', value: '78%', icon: CarFront, status: 'warning', href: '/dashboard/parking' },
    { name: 'Visitors Today', value: '45', icon: Users, status: 'normal', href: '/dashboard/visitors' },
    { name: 'Events Today', value: '3', icon: Calendar, status: 'normal', href: '/dashboard/events' },
    { name: 'Open Complaints', value: '7', icon: MessageSquareWarning, status: 'error', href: '/dashboard/complaints' },
  ];

  return (
    <div className="bg-white rounded-[14px] border border-slate-200 p-5 shadow-sm">
      <SectionHeader
        title="Campus Operations"
        action={{ label: 'View All Operations →', href: '/dashboard/operations' }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mt-4">
        {operations.map((op, index) => {
          let dotColorClass = 'bg-green-500';
          let statusText = 'Operating Normally';

          if (op.status === 'warning') {
            dotColorClass = 'bg-amber-500';
            statusText = 'Needs Attention';
          } else if (op.status === 'error') {
            dotColorClass = 'bg-red-500';
            statusText = 'Action Required';
          }

          return (
            <a key={index} href={op.href} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors group">
              <div className="flex flex-col">
                <h4 className="text-[14px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{op.name}</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${dotColorClass}`}></span>
                  <span className="text-[12px] font-medium text-slate-500">{statusText}</span>
                </div>
              </div>
              <span className="text-[16px] font-bold text-slate-900">{op.value}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
