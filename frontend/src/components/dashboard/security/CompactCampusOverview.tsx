import SectionHeader from '../ui/SectionHeader';
import { Map, MapPin } from 'lucide-react';

export default function CompactCampusOverview() {
  return (
    <div className="bg-white rounded-[14px] border border-slate-200 p-5 shadow-sm h-full flex flex-col">
      <SectionHeader
        title="Live Campus Overview"
        action={{ label: 'Open Campus Map →', href: '/dashboard/map' }}
      />

      <div className="mt-2 flex-1 flex flex-col">
        {/* Map Placeholder */}
        <div className="w-full h-[240px] bg-slate-100 rounded-xl border border-slate-200 relative overflow-hidden flex items-center justify-center mb-3">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

          <Map className="w-10 h-10 text-slate-300 relative z-10" />

          {/* Selected Location Marker */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
            <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg shadow-blue-900/20 mb-1">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-sm">
              Engineering
            </div>
          </div>

          {/* Other Markers */}
          <div className="absolute bottom-1/4 right-1/4 flex flex-col items-center z-10 opacity-60">
            <div className="bg-slate-500 text-white p-1.5 rounded-full mb-1">
              <MapPin className="w-3 h-3" />
            </div>
          </div>
          <div className="absolute top-1/4 left-1/4 flex flex-col items-center z-10 opacity-60">
            <div className="bg-slate-500 text-white p-1.5 rounded-full mb-1">
              <MapPin className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Selected Area Summary */}
        <div className="bg-slate-50 rounded-xl border border-slate-100 p-3">
          <h4 className="text-[14px] font-bold text-slate-900 mb-1">Engineering Building</h4>
          <div className="text-[12px] font-medium text-slate-600 flex items-center gap-2">
            <span>5 Classes</span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>3 Rooms Available</span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>216 Students</span>
          </div>
        </div>
      </div>
    </div>
  );
}
