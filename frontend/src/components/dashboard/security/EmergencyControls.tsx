import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { ShieldAlert, AlertTriangle } from 'lucide-react';

export default function EmergencyControls() {
  const [isConfirming, setIsConfirming] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
      <SectionHeader title="Emergency Controls" />

      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4">
        <h4 className="font-semibold text-slate-900 mb-2 text-sm">Active Emergencies</h4>
        <div className="flex items-center justify-center p-4 bg-white rounded-lg border border-slate-200 border-dashed text-sm text-slate-500">
          No active emergencies.
        </div>
      </div>

      <div className="p-4 rounded-xl border border-red-100 bg-red-50/50 text-center">
        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <h4 className="font-bold text-slate-900 mb-1">Broadcast Emergency Alert</h4>
        <p className="text-xs text-slate-600 mb-4">This will send an immediate push notification to all users on campus.</p>

        {!isConfirming ? (
          <button
            onClick={() => setIsConfirming(true)}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-white text-red-600 border border-red-200 hover:bg-red-50 rounded-xl transition-colors font-medium text-sm shadow-sm"
          >
            <AlertTriangle className="w-4 h-4" />
            Trigger Campus Alert
          </button>
        ) : (
          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <p className="text-xs font-bold text-red-600">Are you absolutely sure?</p>
            <div className="flex gap-2">
              <button
                onClick={() => setIsConfirming(false)}
                className="flex-1 py-2 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-lg transition-colors font-medium text-sm"
              >
                Cancel
              </button>
              <button
                className="flex-1 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors font-medium text-sm shadow-sm"
              >
                Confirm Broadcast
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
