import SectionHeader from '../ui/SectionHeader';
import { UserPlus, CalendarCheck, FileText, Bus, AlertCircle } from 'lucide-react';

export default function AdminRecentActivity() {
  const activities = [
    {
      id: '1',
      action: 'New student account created',
      details: 'ID: STU-24901',
      time: '10 min ago',
      icon: UserPlus,
      colorClass: 'text-blue-600',
      bgClass: 'bg-blue-50'
    },
    {
      id: '2',
      action: 'Room 405 reservation approved',
      details: 'By Admin System',
      time: '25 min ago',
      icon: CalendarCheck,
      colorClass: 'text-green-600',
      bgClass: 'bg-green-50'
    },
    {
      id: '3',
      action: 'Complaint #122 assigned',
      details: 'Assigned to Maintenance',
      time: '1 hr ago',
      icon: AlertCircle,
      colorClass: 'text-amber-600',
      bgClass: 'bg-amber-50'
    },
    {
      id: '4',
      action: 'New exam notice published',
      details: 'Midterm Schedule',
      time: '2 hrs ago',
      icon: FileText,
      colorClass: 'text-indigo-600',
      bgClass: 'bg-indigo-50'
    },
    {
      id: '5',
      action: 'Bus 02 started route',
      details: 'Morning Shift',
      time: '3 hrs ago',
      icon: Bus,
      colorClass: 'text-emerald-600',
      bgClass: 'bg-emerald-50'
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm h-full">
      <SectionHeader
        title="Recent System Activity"
        action={{ label: 'View Logs', href: '/dashboard/logs' }}
      />

      <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[22px] before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent mt-4">
        {activities.map((activity) => (
          <div key={activity.id} className="relative flex items-start gap-4 group">
            <div className={`flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full border-4 border-white shadow-sm shrink-0 z-10 ${activity.bgClass} ${activity.colorClass}`}>
              <activity.icon className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div className="flex-1 pt-1.5 pb-2">
              <h4 className="text-sm font-semibold text-slate-900 leading-tight">{activity.action}</h4>
              <p className="text-xs text-slate-500 mt-0.5">{activity.details}</p>
            </div>
            <span className="text-[10px] font-medium text-slate-400 pt-2 shrink-0">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
