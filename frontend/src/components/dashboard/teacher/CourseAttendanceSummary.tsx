import SectionHeader from '../ui/SectionHeader';

export default function CourseAttendanceSummary() {
  const courses = [
    { name: 'Data Structures', percentage: 92, students: 45, total: 49 },
    { name: 'Software Engineering', percentage: 87, students: 45, total: 52 },
    { name: 'Database Systems', percentage: 85, students: 41, total: 48 },
    { name: 'Algorithms', percentage: 94, students: 47, total: 50 },
  ];

  const overallAttendance = Math.round(
    courses.reduce((acc, curr) => acc + curr.percentage, 0) / courses.length
  );

  return (
    <div className="bg-white rounded-[14px] border border-slate-200 p-5 shadow-sm h-full flex flex-col">
      <SectionHeader
        title="Course Attendance Summary"
        action={{ label: 'View Details →', href: '/dashboard/attendance' }}
      />

      <div className="mb-6 mt-2">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-[28px] font-bold text-slate-900 leading-none">{overallAttendance}%</span>
          <span className="text-[13px] font-medium text-slate-500">Average Student Attendance</span>
        </div>
      </div>

      <div className="space-y-4 flex-1">
        {courses.map((item, index) => {
          // Blue (normal >= 85), Amber (near threshold >= 75), Red (< 75)
          const barColor = item.percentage >= 85 ? 'bg-blue-500' : item.percentage >= 75 ? 'bg-amber-500' : 'bg-red-500';
          const textColor = item.percentage < 75 ? 'text-red-600' : 'text-slate-900';

          return (
            <div key={index}>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[14px] font-semibold text-slate-800 truncate pr-4">{item.name}</span>
                <span className={`text-[14px] font-bold ${textColor}`}>
                  {item.percentage}%
                </span>
              </div>
              <div className="w-full h-[5px] bg-slate-100 rounded-full overflow-hidden mb-1.5">
                <div
                  className={`h-full rounded-full ${barColor}`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <div className="text-[11px] font-medium text-slate-500">
                {item.students} / {item.total} average attendance
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
