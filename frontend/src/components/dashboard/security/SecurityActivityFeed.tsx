import SectionHeader from '../ui/SectionHeader';

export default function SecurityActivityFeed() {
  const activities = [
    {
      id: '1',
      message: 'Visitor Michael Chen approved',
      time: '2 min ago',
      type: 'success'
    },
    {
      id: '2',
      message: 'Parking B reached 95%',
      time: '5 min ago',
      type: 'warning'
    },
    {
      id: '3',
      message: 'Visitor Sarah Williams checked in',
      time: '12 min ago',
      type: 'info'
    },
    {
      id: '4',
      message: 'Main Gate visitor pass scanned',
      time: '20 min ago',
      type: 'neutral'
    }
  ];

  return (
    <div className="bg-white rounded-[14px] border border-slate-200 p-5 shadow-sm">
      <SectionHeader
        title="Recent Security Activity"
      />

      <div className="mt-4 flex flex-col gap-3">
        {activities.map((activity) => {
          let dotColor = 'bg-slate-300';
          if (activity.type === 'success') dotColor = 'bg-green-500';
          if (activity.type === 'warning') dotColor = 'bg-amber-500';
          if (activity.type === 'info') dotColor = 'bg-blue-500';

          return (
            <div key={activity.id} className="flex items-start gap-3">
              <div className="mt-1.5 shrink-0">
                <div className={`w-2 h-2 rounded-full ${dotColor}`}></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-slate-800 leading-snug">{activity.message}</p>
                <p className="text-[11px] font-medium text-slate-500 mt-0.5">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>

      <a href="/dashboard/activity" className="block text-center mt-4 text-[13px] font-semibold text-blue-600 hover:text-blue-700 transition-colors">
        View Activity Log →
      </a>
    </div>
  );
}
