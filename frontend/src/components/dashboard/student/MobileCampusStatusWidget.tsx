import { Map as MapIcon } from 'lucide-react';

export default function MobileCampusStatusWidget() {
  return (
    <div className="bg-white rounded-[14px] border border-slate-200 p-4 shadow-sm flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-[14px] font-bold text-slate-900 leading-tight">Engineering Building</h3>
          <p className="text-[12px] font-medium text-green-600 mt-1">3 Rooms Available</p>
        </div>
        <div className="text-right">
          <p className="text-[12px] font-medium text-slate-500 uppercase">Bus 02</p>
          <p className="text-[14px] font-bold text-slate-900">ETA 4 min</p>
        </div>
      </div>
      <a href="/dashboard/map" className="flex items-center justify-center gap-2 w-full py-2 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 rounded-lg transition-colors font-semibold text-[13px]">
        <MapIcon className="w-3.5 h-3.5" />
        Open Campus Map →
      </a>
    </div>
  );
}
