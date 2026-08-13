import SectionHeader from '../ui/SectionHeader';
import { ClipboardList, Clock } from 'lucide-react';

export default function TeacherPendingTasks() {
  const tasks = [
    {
      id: '1',
      title: 'Grade Assignment 2',
      course: 'Software Engineering',
      due: 'Due today',
      urgent: true
    },
    {
      id: '2',
      title: 'Review Attendance',
      course: 'Data Structures',
      due: 'Due tomorrow',
      urgent: false
    }
  ];

  return (
    <div className="bg-white rounded-[14px] border border-slate-200 p-5 shadow-sm h-full">
      <SectionHeader
        title="Pending Tasks"
        action={{ label: 'View All Tasks →', href: '/dashboard/tasks' }}
      />

      <div className="flex flex-col mt-2">
        {tasks.map((task) => (
          <div key={task.id} className="py-3 border-b border-slate-100 last:border-0 group flex gap-3">
            <div className="mt-0.5 shrink-0">
              <div className={`p-1.5 rounded-lg ${task.urgent ? 'bg-red-50 text-red-600' : 'bg-slate-50 text-slate-500'}`}>
                <ClipboardList className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-[14px] font-bold text-slate-900 truncate mb-0.5">{task.title}</h4>
              <p className="text-[12px] text-slate-500 truncate mb-1.5">{task.course}</p>

              <div className={`flex items-center gap-1 text-[11px] font-semibold ${task.urgent ? 'text-red-600' : 'text-slate-500'}`}>
                <Clock className="w-3 h-3" />
                {task.due}
              </div>
            </div>
          </div>
        ))}
      </div>

      {tasks.length === 0 && (
        <div className="py-6 text-center text-sm text-slate-500 font-medium">
          You're all caught up.
        </div>
      )}
    </div>
  );
}
