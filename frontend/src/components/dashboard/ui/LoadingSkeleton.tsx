import React from 'react';

interface LoadingSkeletonProps {
  type: 'card' | 'list' | 'chart' | 'text';
  count?: number;
  className?: string;
}

export default function LoadingSkeleton({ type, count = 1, className = '' }: LoadingSkeletonProps) {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className={`bg-white rounded-2xl border border-slate-100 p-5 shadow-sm ${className}`}>
            <div className="flex justify-between items-start mb-4">
              <div className="w-24 h-4 bg-slate-200 rounded animate-pulse"></div>
              <div className="w-10 h-10 bg-slate-200 rounded-xl animate-pulse"></div>
            </div>
            <div className="w-16 h-8 bg-slate-200 rounded animate-pulse mb-4"></div>
            <div className="w-32 h-3 bg-slate-200 rounded animate-pulse"></div>
          </div>
        );

      case 'list':
        return (
          <div className={`flex gap-4 items-center py-3 border-b border-slate-50 last:border-0 ${className}`}>
            <div className="w-10 h-10 bg-slate-200 rounded-lg animate-pulse shrink-0"></div>
            <div className="flex-1">
              <div className="w-3/4 h-4 bg-slate-200 rounded animate-pulse mb-2"></div>
              <div className="w-1/2 h-3 bg-slate-200 rounded animate-pulse"></div>
            </div>
          </div>
        );

      case 'text':
        return <div className={`w-full h-4 bg-slate-200 rounded animate-pulse ${className}`}></div>;

      case 'chart':
        return (
          <div className={`w-full h-48 bg-slate-100 rounded-xl animate-pulse flex items-end justify-between px-4 pb-4 pt-8 gap-2 ${className}`}>
            {[...Array(7)].map((_, i) => (
              <div key={i} className="w-full bg-slate-200 rounded-t-sm" style={{ height: `${Math.max(20, Math.random() * 100)}%` }}></div>
            ))}
          </div>
        );
    }
  };

  return (
    <>
      {[...Array(count)].map((_, index) => (
        <React.Fragment key={index}>
          {renderSkeleton()}
        </React.Fragment>
      ))}
    </>
  );
}
