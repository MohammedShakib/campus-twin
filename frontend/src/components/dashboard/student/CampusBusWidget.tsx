import SectionHeader from '../ui/SectionHeader';
import { Bus, Navigation } from 'lucide-react';
import { mockBusStatus } from '../../../mocks/dashboardData';

export default function CampusBusWidget() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
      <SectionHeader
        title="Campus Bus"
        action={{ label: 'View Full Route', href: '/dashboard/bus' }}
      />

      <div className="flex items-center justify-between mb-4 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
            <Bus className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900">{mockBusStatus.busId}</h3>
            <span className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
              {mockBusStatus.status}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-slate-500 mb-0.5">ETA</p>
          <p className="text-xl font-bold text-slate-900">{mockBusStatus.eta}</p>
        </div>
      </div>

      <div className="flex items-start gap-4 mb-6">
        <div className="flex flex-col items-center mt-1">
          <div className="w-3 h-3 rounded-full bg-slate-300"></div>
          <div className="w-0.5 h-10 bg-slate-200"></div>
          <div className="w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-50"></div>
        </div>
        <div className="flex-1 space-y-6">
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase">Current Stop</p>
            <p className="font-semibold text-slate-900">{mockBusStatus.currentStop}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-blue-600 uppercase">Next Stop</p>
            <p className="font-semibold text-slate-900">{mockBusStatus.nextStop}</p>
          </div>
        </div>
      </div>

      {/* Simple Route Line */}
      <div className="relative pt-2 pb-6 px-2">
        <div className="absolute top-4 left-0 w-full h-1 bg-slate-100 rounded-full"></div>
        <div className="absolute top-4 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></div>

        <div className="relative flex justify-between">
          {mockBusStatus.route.map((stop, i) => (
            <div key={i} className="flex flex-col items-center gap-2 -mt-1.5">
              <div className={`w-4 h-4 rounded-full border-2 bg-white z-10 ${i <= mockBusStatus.currentStopIndex ? 'border-blue-500' : 'border-slate-300'}`}>
                {i === mockBusStatus.currentStopIndex && <div className="w-2 h-2 bg-blue-500 rounded-full m-0.5 animate-ping"></div>}
              </div>
              <span className={`text-[10px] font-medium hidden sm:block ${i === mockBusStatus.currentStopIndex ? 'text-blue-700' : 'text-slate-500'}`}>
                {stop.split(' ')[0]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl transition-colors font-medium text-sm">
        <Navigation className="w-4 h-4" />
        Notify Me When Near
      </button>
    </div>
  );
}
