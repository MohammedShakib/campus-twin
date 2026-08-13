import SectionHeader from '../ui/SectionHeader';
import { mockEvents } from '../../../mocks/dashboardData';

export default function UpcomingEvents() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
      <SectionHeader
        title="Upcoming Events"
        action={{ label: 'View All Events', href: '/dashboard/events' }}
      />

      <div className="space-y-3">
        {mockEvents.map((event) => (
          <div key={event.id} className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
            {/* Date block */}
            <div className="w-12 h-14 bg-slate-100 rounded-lg flex flex-col items-center justify-center shrink-0 border border-slate-200 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
              <span className="text-[10px] font-bold text-slate-500 uppercase leading-none mb-1 group-hover:text-blue-600">{event.date.split(' ')[1]}</span>
              <span className="text-lg font-bold text-slate-900 leading-none group-hover:text-blue-700">{event.date.split(' ')[0]}</span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 py-0.5 flex flex-col justify-between">
              <h4 className="font-bold text-slate-900 truncate">{event.title}</h4>
              <p className="text-xs text-slate-500">{event.location}</p>
            </div>

            {/* Status/Action */}
            <div className="flex items-center shrink-0">
              {event.status === 'Registered' ? (
                <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded-md border border-green-100">
                  Registered
                </span>
              ) : (
                <button className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-1.5 rounded-md transition-colors border border-blue-200">
                  Register
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
