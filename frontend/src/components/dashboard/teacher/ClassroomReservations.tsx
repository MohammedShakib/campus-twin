import SectionHeader from '../ui/SectionHeader';

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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <span className="text-[10px] font-bold tracking-wide text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200/50 uppercase">Approved</span>;
      case 'pending':
        return <span className="text-[10px] font-bold tracking-wide text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50 uppercase">Pending</span>;
      case 'rejected':
        return <span className="text-[10px] font-bold tracking-wide text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200/50 uppercase">Rejected</span>;
      default:
        return <span className="text-[10px] font-bold tracking-wide text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/50 uppercase">{status}</span>;
    }
  };

  return (
    <div className="bg-white rounded-[14px] border border-slate-200 p-5 shadow-sm h-full">
      <SectionHeader
        title="Classroom Reservations"
        action={{ label: 'New Reservation →', href: '/dashboard/reservations/new' }}
      />

      <div className="flex flex-col mt-2">
        {reservations.map((res) => (
          <div key={res.id} className="py-3 border-b border-slate-100 last:border-0 group">
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-[14px] font-bold text-slate-900">{res.room}</h4>
              {getStatusBadge(res.status)}
            </div>

            <p className="text-[13px] text-slate-600 font-medium mb-1.5">{res.purpose}</p>

            <div className="text-[12px] font-medium text-slate-500">
              {res.date} <span className="mx-1 opacity-50">•</span> {res.time}
            </div>
          </div>
        ))}
      </div>

      {reservations.length > 2 && (
        <a href="/dashboard/reservations" className="block text-center mt-2 text-[13px] font-semibold text-blue-600 hover:text-blue-700 transition-colors">
          View All Reservations →
        </a>
      )}
    </div>
  );
}
