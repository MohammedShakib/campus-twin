import { AlertTriangle, RefreshCcw } from 'lucide-react';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export default function ErrorState({
  message = "Information is temporarily unavailable.",
  onRetry,
  className = ''
}: ErrorStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-6 text-center rounded-2xl border border-red-100 bg-red-50/50 ${className}`}>
      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-3 text-red-500">
        <AlertTriangle className="w-5 h-5" />
      </div>
      <p className="text-sm font-medium text-slate-700 mb-3 max-w-xs">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors shadow-sm"
        >
          <RefreshCcw className="w-3.5 h-3.5" />
          Retry
        </button>
      )}
    </div>
  );
}
