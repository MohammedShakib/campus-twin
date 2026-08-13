import SectionHeader from '../ui/SectionHeader';
import { mockRecentUpdates } from '../../../mocks/dashboardData';

export default function RecentUpdates() {
  const getStatusColor = (type: string) => {
    switch (type) {
      case 'success': return 'bg-green-500';
      case 'warning': return 'bg-amber-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div className="bg-white rounded-[14px] border border-slate-200 p-5 shadow-sm h-full">
      <SectionHeader
        title="Recent Updates"
      />

      <div className="flex flex-col mt-2">
        {mockRecentUpdates.slice(0, 4).map((update) => (
          <div key={update.id} className="flex gap-3 items-center py-3 border-b border-slate-100 last:border-0">
            <div className="shrink-0">
              <div className={`w-2 h-2 rounded-full ${getStatusColor(update.type)} ring-4 ring-slate-50`} />
            </div>
            <div className="flex-1 flex justify-between items-center gap-4 min-w-0">
              <p className="text-[13px] font-medium text-slate-800 truncate">{update.message}</p>
              <p className="text-[11px] font-medium text-slate-400 whitespace-nowrap shrink-0">{update.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
