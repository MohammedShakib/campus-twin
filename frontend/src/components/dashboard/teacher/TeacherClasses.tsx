import SectionHeader from '../ui/SectionHeader';
import { QrCode, PlayCircle, Square } from 'lucide-react';

export default function TeacherClasses() {
  const classes = [
    {
      id: '1',
      course: 'Data Structures',
      room: 'Room 302',
      time: '09:00 - 10:20',
      students: 45,
      status: 'completed'
    },
    {
      id: '2',
      course: 'Software Engineering',
      room: 'Room 405',
      time: '11:30 - 12:50',
      students: 52,
      checkedIn: 43,
      status: 'active'
    },
    {
      id: '3',
      course: 'Database Systems',
      room: 'Room 210',
      time: '14:00 - 15:20',
      students: 48,
      status: 'upcoming'
    }
  ];

  return (
    <div className="bg-white rounded-[14px] border border-slate-200 p-5 shadow-sm h-full">
      <SectionHeader
        title="Today's Classes"
        action={{ label: 'View Full Schedule →', href: '/dashboard/classes' }}
      />

      <div className="mt-2 flex flex-col">
        {classes.map((cls) => {
          const isActive = cls.status === 'active';
          const isCompleted = cls.status === 'completed';
          const isUpcoming = cls.status === 'upcoming';
          const isStartingSoon = cls.status === 'starting-soon';

          return (
            <div
              key={cls.id}
              className={`flex flex-col md:flex-row md:items-center py-4 px-3 sm:px-4 gap-3 sm:gap-4 border-b border-slate-100 last:border-0 ${
                isActive ? 'bg-blue-50/50 rounded-xl border-transparent -mx-3 sm:-mx-4 px-6 sm:px-8 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]' : ''
              } ${isCompleted ? 'opacity-70' : ''}`}
            >

              {/* Time Column */}
              <div className="w-28 shrink-0">
                <span className={`text-[14px] font-bold ${isActive ? 'text-blue-700' : 'text-slate-700'}`}>
                  {cls.time}
                </span>
              </div>

              {/* Info Column */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h4 className={`text-[15px] font-bold truncate ${isActive ? 'text-blue-900' : 'text-slate-900'}`}>
                    {cls.course}
                  </h4>
                  {isActive && (
                    <span className="text-[10px] font-bold text-red-600 bg-red-100 px-1.5 py-0.5 rounded border border-red-200 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                      LIVE
                    </span>
                  )}
                  {isStartingSoon && (
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 uppercase tracking-wider">
                      Starting Soon
                    </span>
                  )}
                </div>
                <div className={`text-[13px] font-medium ${isActive ? 'text-blue-700' : 'text-slate-500'}`}>
                  {cls.room} <span className="mx-1.5 opacity-50">•</span> {cls.students} Students
                </div>

                {/* Inline Active Details */}
                {isActive && (
                  <div className="mt-3 p-3 bg-white/60 rounded-lg border border-blue-100/50 text-[12px] font-medium text-slate-600">
                    <div className="flex justify-between mb-1.5">
                      <span>{cls.students} Enrolled</span>
                      <span className="text-blue-700 font-bold">{cls.checkedIn} Checked In</span>
                    </div>
                    <div className="w-full h-1.5 bg-blue-100/50 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(cls.checkedIn! / cls.students) * 100}%` }}></div>
                    </div>
                    <div className="mt-2 text-[11px] text-blue-600 font-semibold">
                      Class ends in 38 min
                    </div>
                  </div>
                )}
              </div>

              {/* Actions Column */}
              <div className="w-auto md:w-48 shrink-0 flex items-center md:justify-end gap-2 mt-2 md:mt-0">
                {isActive ? (
                  <div className="flex items-center gap-2 w-full">
                    <button className="flex-1 flex justify-center items-center gap-1.5 px-3 py-2 bg-blue-600 text-white rounded-lg text-[13px] font-semibold hover:bg-blue-700 transition-colors shadow-sm">
                      <QrCode className="w-3.5 h-3.5" />
                      Attendance QR
                    </button>
                    <button className="flex justify-center items-center px-3 py-2 bg-white text-red-600 border border-red-200 rounded-lg text-[13px] font-semibold hover:bg-red-50 transition-colors">
                      <Square className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : isUpcoming ? (
                  <button className="flex justify-center items-center gap-1.5 px-4 py-2 bg-white text-slate-700 border border-slate-200 rounded-lg text-[13px] font-semibold hover:bg-slate-50 transition-colors w-full md:w-auto">
                    <PlayCircle className="w-3.5 h-3.5 text-slate-500" />
                    Start Class
                  </button>
                ) : (
                  <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-wide">
                    Completed
                  </span>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {classes.length === 0 && (
        <div className="py-8 text-center text-sm text-slate-500 font-medium">
          No classes scheduled for today.
        </div>
      )}
    </div>
  );
}
