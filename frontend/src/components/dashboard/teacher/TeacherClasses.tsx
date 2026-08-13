import SectionHeader from '../ui/SectionHeader';
import StatusBadge from '../ui/StatusBadge';
import { QrCode, PlayCircle, Square } from 'lucide-react';

export default function TeacherClasses() {
  const classes = [
    {
      id: '1',
      course: 'Data Structures',
      room: 'Room 302',
      time: '09:00 AM - 10:20 AM',
      students: 45,
      status: 'completed'
    },
    {
      id: '2',
      course: 'Software Engineering',
      room: 'Room 405',
      time: '11:30 AM - 12:50 PM',
      students: 52,
      status: 'active'
    },
    {
      id: '3',
      course: 'Database Systems',
      room: 'Room 210',
      time: '02:00 PM - 03:20 PM',
      students: 48,
      status: 'upcoming'
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm h-full">
      <SectionHeader
        title="Today's Classes"
        action={{ label: 'View All Classes', href: '/dashboard/classes' }}
      />

      <div className="space-y-4 mt-2">
        {classes.map((cls) => (
          <div key={cls.id} className="p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all bg-white group">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <h4 className="font-bold text-slate-900 text-lg">{cls.course}</h4>
                  {cls.status === 'active' && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 mb-3">
                  <span>{cls.time}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{cls.room}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{cls.students} Students</span>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-2">
                  {cls.status === 'active' ? (
                    <>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">
                        <QrCode className="w-4 h-4" />
                        Attendance QR
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors border border-red-100">
                        <Square className="w-4 h-4" />
                        End Class
                      </button>
                    </>
                  ) : cls.status === 'upcoming' ? (
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium hover:bg-emerald-100 transition-colors border border-emerald-100">
                      <PlayCircle className="w-4 h-4" />
                      Start Class
                    </button>
                  ) : (
                    <StatusBadge status="success">Completed</StatusBadge>
                  )}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
