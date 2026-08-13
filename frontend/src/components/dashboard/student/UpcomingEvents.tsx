import SectionHeader from '../ui/SectionHeader';
import { mockEvents } from '../../../mocks/dashboardData';

export default function UpcomingEvents() {
  return (
    <div className="bg-white rounded-[14px] border border-slate-200 p-5 shadow-sm h-full">
      <SectionHeader
        title="Upcoming Events"
        action={{ label: 'View All Events →', href: '/dashboard/events' }}
      />

      <div className="flex flex-col mt-2">
        {mockEvents.slice(0, 3).map((event) => (
          <div key={event.id} className="flex gap-4 py-3 border-b border-slate-100 last:border-0 group">
            {/* Date block */}
            <div className="w-12 h-12 bg-slate-50 rounded-lg flex flex-col items-center justify-center shrink-0 border border-slate-100 transition-colors">
              <span className="text-[10px] font-bold text-slate-500 uppercase leading-none mb-1">{event.date.split(' ')[1]}</span>
              <span className="text-[15px] font-bold text-slate-900 leading-none">{event.date.split(' ')[0]}</span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <h4 className="text-[14px] font-bold text-slate-900 truncate mb-0.5">{event.title}</h4>
              <p className="text-[12px] text-slate-500 truncate">{event.location}</p>
            </div>

            {/* Status/Action */}
            <div className="flex items-center shrink-0">
              {event.status === 'Registered' ? (
                <span className="text-[12px] font-semibold text-slate-500">
                  Registered
                </span>
              ) : (
                <button className="text-[12px] font-semibold text-blue-600 hover:text-blue-700 transition-colors">
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
