import SectionHeader from '../ui/SectionHeader';
import { Navigation } from 'lucide-react';
import { mockBusStatus } from '../../../mocks/dashboardData';

export default function CampusBusWidget() {
  return (
    <div className="bg-white rounded-[14px] border border-slate-200 p-5 shadow-sm flex flex-col h-full">
      <SectionHeader
        title="Campus Bus"
        action={{ label: 'View Full Route →', href: '/dashboard/bus' }}
      />

      <div className="mt-2 flex-1">
        <div className="flex items-start justify-between mb-5">
          <div>
            <h3 className="text-lg font-bold text-slate-900 leading-tight flex items-center gap-2">
              {mockBusStatus.busId}
            </h3>
            <span className="text-[12px] font-medium text-emerald-600 flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {mockBusStatus.status}
            </span>
          </div>
          <div className="text-right">
            <p className="text-[12px] font-medium text-slate-500 uppercase tracking-wider mb-0.5">ETA</p>
            <p className="text-[22px] font-bold text-slate-900 leading-none">{mockBusStatus.eta}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Current Stop</p>
            <p className="text-[14px] font-bold text-slate-900 truncate">{mockBusStatus.currentStop}</p>
          </div>
          <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100">
            <p className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1">Next Stop</p>
            <p className="text-[14px] font-bold text-blue-900 truncate">{mockBusStatus.nextStop}</p>
          </div>
        </div>

        {/* Minimal Route Line */}
        <div className="relative pt-2 pb-5 px-1">
          <div className="absolute top-3.5 left-0 w-full h-[3px] bg-slate-100 rounded-full"></div>
          <div
            className="absolute top-3.5 left-0 h-[3px] bg-blue-500 rounded-full transition-all duration-500"
            style={{ width: `${(mockBusStatus.currentStopIndex / (mockBusStatus.route.length - 1)) * 100}%` }}
          ></div>

          <div className="relative flex justify-between">
            {mockBusStatus.route.map((stop, i) => {
              const isPast = i <= mockBusStatus.currentStopIndex;
              const isCurrent = i === mockBusStatus.currentStopIndex;

              return (
                <div key={i} className="flex flex-col items-center">
                  <div className={`w-3.5 h-3.5 rounded-full border-2 bg-white z-10 transition-colors ${
                    isCurrent ? 'border-blue-600 ring-4 ring-blue-50' :
                    isPast ? 'border-blue-500' : 'border-slate-300'
                  }`}>
                    {isCurrent && <div className="w-1.5 h-1.5 bg-blue-600 rounded-full m-auto mt-[1px]"></div>}
                  </div>
                  <span className={`text-[10px] font-semibold mt-2 absolute top-4 whitespace-nowrap hidden sm:block ${
                    isCurrent ? 'text-blue-700' : isPast ? 'text-slate-600' : 'text-slate-400'
                  }`}>
                    {stop.split(' ')[0]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <button className="w-full flex items-center justify-center gap-2 py-2 mt-2 bg-transparent hover:bg-slate-50 text-slate-600 border border-slate-200 rounded-lg transition-colors text-[13px] font-semibold">
        <Navigation className="w-3.5 h-3.5" />
        Notify Me When Near
      </button>
    </div>
  );
}
