import SectionHeader from '../ui/SectionHeader';
import { mockStudentAttendance } from '../../../mocks/dashboardData';

export default function AttendanceOverview() {
  const overallAttendance = Math.round(
    mockStudentAttendance.reduce((acc, curr) => acc + curr.percentage, 0) / mockStudentAttendance.length
  );

  return (
    <div className="bg-white rounded-[14px] border border-slate-200 p-5 shadow-sm">
      <SectionHeader
        title="Attendance Overview"
        action={{ label: 'View Details →', href: '/dashboard/attendance' }}
      />

      <div className="mb-6 mt-2">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-[28px] font-bold text-slate-900 leading-none">{overallAttendance}%</span>
          <span className="text-[13px] font-medium text-slate-500">Overall Attendance</span>
        </div>
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full"
            style={{ width: `${overallAttendance}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        {mockStudentAttendance.map((item, index) => {
          // Blue (normal), Amber (near minimum < 85%), Red (below threshold < 75%)
          const barColor = item.percentage >= 85 ? 'bg-blue-500' : item.percentage >= 75 ? 'bg-amber-500' : 'bg-red-500';
          const textColor = item.percentage < 75 ? 'text-red-600' : 'text-slate-900';

          return (
            <div key={index}>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[14px] font-semibold text-slate-800 truncate pr-4">{item.course}</span>
                <span className={`text-[14px] font-bold ${textColor}`}>
                  {item.percentage}%
                </span>
              </div>
              <div className="w-full h-[5px] bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${barColor}`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {overallAttendance < 75 && (
        <div className="mt-5 p-3 bg-red-50 rounded-lg border border-red-100 text-[13px] font-medium text-red-800">
          Your attendance is below the minimum requirement.
        </div>
      )}
    </div>
  );
}
