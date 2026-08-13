import SectionHeader from '../ui/SectionHeader';
import StatusBadge from '../ui/StatusBadge';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function ClassroomReservations() {
  const reservations = [
    {
      id: '1',
      room: 'Room 405',
      date: 'Tomorrow',
      time: '3:00 PM - 5:00 PM',
      purpose: 'Extra Class for CSE-301',
      status: 'approved'
    },
    {
      id: '2',
      room: 'Auditorium',
      date: '21 Aug',
      time: '10:00 AM - 1:00 PM',
      purpose: 'Career Seminar',
      status: 'pending'
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
      <SectionHeader
        title="Classroom Reservations"
        action={{ label: 'New Reservation', href: '/dashboard/reservations/new' }}
      />

      <div className="space-y-3 mt-2">
        {reservations.map((res) => (
          <div key={res.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-600" />
                {res.room}
              </h4>
              <StatusBadge status={res.status === 'approved' ? 'success' : 'warning'}>
                {res.status.charAt(0).toUpperCase() + res.status.slice(1)}
              </StatusBadge>
            </div>

            <p className="text-sm text-slate-700 mb-3">{res.purpose}</p>

            <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {res.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {res.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
