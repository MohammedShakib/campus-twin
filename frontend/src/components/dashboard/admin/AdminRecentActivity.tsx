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
    <div className="bg-white rounded-[14px] border border-slate-200 p-5 shadow-sm">
      <SectionHeader
        title="Recent Campus Activity"
      />

      <div className="mt-4 flex flex-col gap-3">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white shadow-sm ${activity.bgClass} ${activity.colorClass}`}>
              <activity.icon className="w-3.5 h-3.5" />
            </div>
            <div className="flex-1 min-w-0 pt-0.5">
              <h4 className="text-[13px] font-semibold text-slate-900 leading-tight truncate">{activity.action}</h4>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[11px] font-medium text-slate-500 truncate">{activity.details}</span>
                <span className="text-[10px] text-slate-400 font-medium shrink-0 ml-auto">{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a href="/dashboard/activity" className="block text-center mt-4 text-[13px] font-semibold text-blue-600 hover:text-blue-700 transition-colors">
        View Activity Log →
      </a>
    </div>
  );
}
