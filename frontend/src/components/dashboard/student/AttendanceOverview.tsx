import SectionHeader from '../ui/SectionHeader';
import { mockStudentAttendance } from '../../../mocks/dashboardData';

export default function AttendanceOverview() {
  const overallAttendance = Math.round(
    mockStudentAttendance.reduce((acc, curr) => acc + curr.percentage, 0) / mockStudentAttendance.length
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
      <SectionHeader
        title="Attendance Overview"
        action={{ label: 'View Details', href: '/dashboard/attendance' }}
      />

      <div className="mb-6">
        <div className="flex items-end gap-2 mb-1">
          <span className="text-3xl font-bold text-slate-900">{overallAttendance}%</span>
          <span className="text-sm font-medium text-slate-500 mb-1">Overall</span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full"
            style={{ width: `${overallAttendance}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        {mockStudentAttendance.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm font-medium text-slate-700 truncate pr-4">{item.course}</span>
              <span className={`text-sm font-bold ${item.percentage < 75 ? 'text-red-600' : 'text-slate-900'}`}>
                {item.percentage}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  item.percentage >= 90 ? 'bg-green-500' :
                  item.percentage >= 75 ? 'bg-blue-500' :
                  'bg-red-500'
                }`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {overallAttendance < 75 && (
        <div className="mt-5 p-3 bg-amber-50 rounded-xl border border-amber-100 text-sm text-amber-800">
          Your attendance in some courses is close to the minimum requirement.
        </div>
      )}
    </div>
  );
}
