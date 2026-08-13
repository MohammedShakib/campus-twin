import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  helper?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  colorClass?: string;
  bgClass?: string;
}

export default function StatCard({
  label,
  value,
  icon: Icon,
  helper,
  trend,
  colorClass = 'text-blue-600',
  bgClass = 'bg-blue-50'
}: StatCardProps) {
  return (
    <div className="bg-white rounded-[14px] border border-slate-200 p-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between h-[105px] hover:border-slate-300 transition-colors">
      <div className="flex items-start justify-between mb-1">
        <h3 className="text-[26px] font-bold text-slate-900 leading-none tracking-tight">{value}</h3>
        <div className={`p-1.5 rounded-lg shrink-0 ${bgClass}`}>
          <Icon className={`w-4 h-4 ${colorClass}`} />
        </div>
      </div>

      <div>
        <p className="text-[13px] font-medium text-slate-700 mb-1">{label}</p>

        {helper && (
          <div className="flex items-center gap-1.5 text-[12px] font-medium text-slate-500 truncate">
            {trend === 'up' && (
              <svg className="w-3.5 h-3.5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            )}
            {trend === 'down' && (
              <svg className="w-3.5 h-3.5 text-red-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            )}
            <span className="truncate">{helper}</span>
          </div>
        )}
      </div>
    </div>
  );
}
