import SectionHeader from '../ui/SectionHeader';
import { CarFront, MessageSquareWarning, Search } from 'lucide-react';

export default function AdminNeedsAttention() {
  const attentionItems = [
    {
      id: '1',
      issue: 'Parking B almost full',
      severity: 'amber',
      icon: CarFront,
      actionLabel: 'View Parking →',
      href: '/dashboard/parking'
    },
    {
      id: '2',
      issue: '2 pending visitor requests',
      severity: 'amber',
      icon: Search,
      actionLabel: 'Review →',
      href: '/dashboard/visitors'
    },
    {
      id: '3',
      issue: '7 unresolved complaints',
      severity: 'amber',
      icon: MessageSquareWarning,
      actionLabel: 'View Complaints →',
      href: '/dashboard/complaints'
    }
  ];

  return (
    <div className="bg-white rounded-[14px] border border-slate-200 p-4 sm:p-5 shadow-sm">
      <SectionHeader title="Needs Attention" />

      {attentionItems.length > 0 ? (
        <div className="mt-3 flex flex-col gap-3">
          {attentionItems.map((item) => {
            let iconColor = 'text-amber-600';
            let iconBg = 'bg-amber-50 border-amber-100';

            if (item.severity === 'red') {
              iconColor = 'text-red-600';
              iconBg = 'bg-red-50 border-red-100';
            } else if (item.severity === 'blue') {
              iconColor = 'text-blue-600';
              iconBg = 'bg-blue-50 border-blue-100';
            }

            return (
              <div key={item.id} className="flex items-center justify-between gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${iconBg} ${iconColor}`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-[13px] font-semibold text-slate-800 truncate">{item.issue}</span>
                </div>
                <a href={item.href} className="text-[12px] font-bold text-blue-600 hover:text-blue-700 shrink-0 whitespace-nowrap transition-colors">
                  {item.actionLabel}
                </a>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center justify-center text-center">
          <p className="text-[14px] font-bold text-slate-700 mb-1">Everything looks good.</p>
          <p className="text-[12px] font-medium text-slate-500">No critical campus issues require attention.</p>
        </div>
      )}
    </div>
  );
}
