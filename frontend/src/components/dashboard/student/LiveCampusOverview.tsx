import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { Building2 } from 'lucide-react';

export default function LiveCampusOverview() {
  const [selectedBuilding, setSelectedBuilding] = useState('engineering');

  const buildings = {
    engineering: {
      name: 'Engineering Building',
      activeClasses: 5,
      availableRooms: 3,
      students: 216,
    },
    library: {
      name: 'Central Library',
      activeClasses: 0,
      availableRooms: 12,
      students: 450,
    }
  };

  const currentInfo = buildings[selectedBuilding as keyof typeof buildings];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm h-full flex flex-col">
      <SectionHeader
        title="Live Campus Overview"
        action={{ label: 'Open Campus Map', href: '/dashboard/map' }}
      />

      {/* Map visualization placeholder */}
      <div className="relative bg-slate-50 rounded-xl border border-slate-100 overflow-hidden h-[260px] mb-4">
        {/* Simple geometric map representation */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        {/* Route Line */}
        <svg className="absolute inset-0 w-full h-full text-slate-300 stroke-2" fill="none">
          <path d="M 30% 40% Q 50% 30% 65% 60%" stroke="currentColor" strokeDasharray="4 4" />
        </svg>

        {/* Engineering Building Marker */}
        <button
          onClick={() => setSelectedBuilding('engineering')}
          className={`absolute top-[40%] left-[30%] group transition-all duration-300 z-10 ${selectedBuilding === 'engineering' ? 'scale-110' : 'hover:scale-110'}`}
        >
          <div className="absolute -inset-2 bg-blue-500/20 rounded-full animate-pulse-slow"></div>
          <div className={`relative p-1.5 rounded-lg shadow-sm border-2 flex items-center justify-center transition-colors ${
            selectedBuilding === 'engineering'
              ? 'bg-blue-600 border-white text-white'
              : 'bg-white border-blue-100 text-blue-600 group-hover:border-blue-300'
          }`}>
            <Building2 className="w-4 h-4" />
          </div>
          <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white/90 backdrop-blur px-1.5 py-0.5 rounded text-[10px] font-bold text-slate-700 shadow-sm whitespace-nowrap">
            Engineering
          </span>
        </button>

        {/* Library Marker */}
        <button
          onClick={() => setSelectedBuilding('library')}
          className={`absolute top-[60%] left-[65%] group transition-all duration-300 z-10 ${selectedBuilding === 'library' ? 'scale-110' : 'hover:scale-110'}`}
        >
          <div className={`relative p-1.5 rounded-lg shadow-sm border-2 flex items-center justify-center transition-colors ${
            selectedBuilding === 'library'
              ? 'bg-blue-600 border-white text-white'
              : 'bg-white border-blue-100 text-blue-600 group-hover:border-blue-300'
          }`}>
            <Building2 className="w-4 h-4" />
          </div>
          <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white/90 backdrop-blur px-1.5 py-0.5 rounded text-[10px] font-bold text-slate-700 shadow-sm whitespace-nowrap">
            Library
          </span>
        </button>

        {/* Bus Marker moving */}
        <div className="absolute top-[45%] left-[50%] p-1 bg-amber-500 rounded-full shadow-md text-white border-2 border-white animate-float z-20">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>
      </div>

      {/* Selected Location Info Panel - Compact Row */}
      <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-100 flex items-center justify-between mt-auto">
        <h4 className="font-bold text-[13px] text-slate-900 truncate pr-3">{currentInfo.name}</h4>

        <div className="flex items-center gap-2 sm:gap-3 text-[11px] font-medium shrink-0">
          <div className="flex items-center gap-1.5 text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            {currentInfo.activeClasses} Classes
          </div>
          <div className="flex items-center gap-1.5 text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            {currentInfo.availableRooms} Rooms
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            {currentInfo.students} Students
          </div>
        </div>
      </div>
    </div>
  );
}
