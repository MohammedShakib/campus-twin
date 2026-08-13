import SectionHeader from '../ui/SectionHeader';

export default function ParkingStatus() {
  const parkingData = [
    { name: 'Parking A', total: 120, occupied: 95, available: 25 },
    { name: 'Parking B', total: 80, occupied: 78, available: 2 },
    { name: 'Staff Parking', total: 50, occupied: 30, available: 20 },
  ];

  return (
    <div className="bg-white rounded-[14px] border border-slate-200 p-5 shadow-sm">
      <SectionHeader
        title="Parking Status"
        action={{ label: 'View All →', href: '/dashboard/parking' }}
      />

      <div className="space-y-4 mt-2">
        {parkingData.map((lot, index) => {
          const occupancyPercentage = Math.round((lot.occupied / lot.total) * 100);

          // 0-69% Green, 70-89% Amber, 90-100% Red
          let statusColor = 'bg-green-500';
          let textColor = 'text-green-700';

          if (occupancyPercentage >= 90) {
            statusColor = 'bg-red-500';
            textColor = 'text-red-600';
          } else if (occupancyPercentage >= 70) {
            statusColor = 'bg-amber-500';
            textColor = 'text-amber-600';
          }

          return (
            <div key={index} className="group">
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="text-[14px] font-bold text-slate-900">{lot.name}</h4>
                <div className="text-right">
                  <span className={`text-[14px] font-bold ${textColor}`}>
                    {occupancyPercentage}%
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center text-[12px] font-medium text-slate-500 mb-2">
                <span>{lot.occupied} / {lot.total} occupied</span>
                <span>{lot.available} available</span>
              </div>

              <div className="w-full h-[5px] bg-slate-100 rounded-full overflow-hidden">
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
