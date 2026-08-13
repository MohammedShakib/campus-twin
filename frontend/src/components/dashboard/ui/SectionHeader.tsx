import { Link } from 'react-router-dom';

interface SectionHeaderProps {
  title: string;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
}

export default function SectionHeader({ title, action }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-bold text-slate-900">{title}</h2>
      {action && (
        <>
          {action.href ? (
            <Link
              to={action.href}
              className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1"
            >
              {action.label}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          ) : (
            <button
              onClick={action.onClick}
              className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1"
            >
              {action.label}
              <span aria-hidden="true">&rarr;</span>
            </button>
          )}
        </>
      )}
    </div>
  );
}
