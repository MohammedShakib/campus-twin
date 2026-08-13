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
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
      <SectionHeader
        title="Recent Updates"
      />

      <div className="space-y-4">
        {mockRecentUpdates.map((update) => (
          <div key={update.id} className="flex gap-3 items-start">
            <div className="mt-1.5 shrink-0">
              <div className={`w-2 h-2 rounded-full ${getStatusColor(update.type)} ring-4 ring-slate-50`} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-800">{update.message}</p>
              <p className="text-xs text-slate-400 mt-0.5">{update.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
