import SectionHeader from '../ui/SectionHeader';
import { CarFront } from 'lucide-react';

export default function ParkingStatus() {
  const parkingData = [
    { name: 'Parking A', total: 120, occupied: 95, available: 25 },
    { name: 'Parking B', total: 80, occupied: 78, available: 2 },
    { name: 'Staff Parking', total: 50, occupied: 30, available: 20 },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
      <SectionHeader
        title="Parking Status"
        action={{ label: 'View All', href: '/dashboard/parking' }}
      />

      <div className="space-y-4">
        {parkingData.map((lot, index) => {
          const occupancyPercentage = Math.round((lot.occupied / lot.total) * 100);

          let statusColor = 'bg-green-500';
          let textColor = 'text-green-700';
          let bgColor = 'bg-green-50';

          if (occupancyPercentage >= 90) {
            statusColor = 'bg-red-500';
            textColor = 'text-red-700';
            bgColor = 'bg-red-50';
          } else if (occupancyPercentage >= 75) {
            statusColor = 'bg-amber-500';
            textColor = 'text-amber-700';
            bgColor = 'bg-amber-50';
          }

          return (
            <div key={index} className="p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg ${bgColor} ${textColor}`}>
                    <CarFront className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900">{lot.name}</h4>
                </div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${bgColor} ${textColor}`}>
                  {occupancyPercentage}% Occupied
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 mb-2 px-1">
                <span>{lot.total} Total</span>
                <span><span className="font-semibold text-slate-900">{lot.available}</span> Available</span>
              </div>

              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${statusColor}`}
                  style={{ width: `${occupancyPercentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
