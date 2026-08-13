import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { AlertTriangle } from 'lucide-react';

export default function EmergencyControls() {
  const [isConfirming, setIsConfirming] = useState(false);
  // Example toggle for testing the UI states
  const hasActiveEmergency = false;

  return (
    <div className="bg-white rounded-[14px] border border-slate-200 p-5 shadow-sm">
      <SectionHeader title="Emergency Status" />

      {hasActiveEmergency ? (
        <div className="mt-2 p-4 rounded-xl border border-red-200 bg-red-50 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <h4 className="text-[14px] font-bold text-red-700 tracking-wide uppercase">Critical Alert</h4>
          </div>

          <h5 className="font-bold text-slate-900 mb-0.5">Fire reported</h5>
          <p className="text-[13px] text-slate-600 mb-1">Engineering Building · Floor 3</p>
          <p className="text-[11px] font-medium text-slate-500 mb-4">Reported 2 min ago</p>

          <div className="flex items-center gap-2">
            <button className="flex-1 py-1.5 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors font-semibold text-[13px] shadow-sm">
              View Details
            </button>
            <button className="flex-1 py-1.5 bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors font-semibold text-[13px]">
              Resolve
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-2 flex flex-col gap-3">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center">
            <p className="text-[13px] font-medium text-slate-600">No active emergencies.</p>
          </div>

          {!isConfirming ? (
            <button
              onClick={() => setIsConfirming(true)}
              className="w-full flex items-center justify-center gap-2 py-2 bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors font-semibold text-[13px] shadow-sm"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              Broadcast Emergency Alert
            </button>
          ) : (
            <div className="p-3 bg-red-50 border border-red-100 rounded-xl animate-in fade-in slide-in-from-bottom-2 duration-200">
              <p className="text-[12px] font-bold text-red-700 mb-1.5">Broadcast this emergency alert?</p>
              <p className="text-[11px] text-slate-600 mb-3">This action will immediately notify connected users.</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsConfirming(false)}
                  className="flex-1 py-1.5 bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors font-semibold text-[12px]"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsConfirming(false)}
                  className="flex-1 py-1.5 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors font-semibold text-[12px] shadow-sm"
                >
                  Confirm Broadcast
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
