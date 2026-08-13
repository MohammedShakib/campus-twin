import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuickActionProps {
  icon: LucideIcon;
  label: string;
  href?: string;
  onClick?: () => void;
  colorClass?: string;
  bgClass?: string;
}

export default function QuickAction({
  icon: Icon,
  label,
  href,
  onClick,
  colorClass = 'text-blue-700',
  bgClass = 'bg-blue-50'
}: QuickActionProps) {
  const content = (
    <>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-105 ${bgClass}`}>
        <Icon className={`w-6 h-6 ${colorClass}`} />
      </div>
      <span className="text-sm font-medium text-slate-700 text-center leading-tight">
        {label}
      </span>
    </>
  );

  const className = "flex flex-col items-center p-4 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all group cursor-pointer";

  if (href) {
    return (
      <Link to={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {content}
    </button>
  );
}
