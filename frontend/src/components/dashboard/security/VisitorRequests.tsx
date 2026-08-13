import SectionHeader from '../ui/SectionHeader';
import { User, QrCode, Check, X } from 'lucide-react';

export default function VisitorRequests() {
  const visitors = [
    {
      id: '1',
      name: 'Michael Chen',
      host: 'Dr. Ahmed',
      purpose: 'Guest Lecture',
      time: 'Today, 11:00 AM',
      status: 'pending'
    },
    {
      id: '2',
      name: 'Sarah Williams',
      host: 'Admissions Office',
      purpose: 'Campus Tour',
      time: 'Today, 02:30 PM',
      status: 'pending'
    }
  ];

  return (
    <div className="bg-white rounded-[14px] border border-slate-200 p-5 shadow-sm h-full">
      <SectionHeader
        title="Pending Visitor Requests"
        action={{ label: 'View All Visitors →', href: '/dashboard/visitors' }}
      />

      <div className="mt-2 flex flex-col">
        {visitors.map((visitor) => (
          <div key={visitor.id} className="py-4 border-b border-slate-100 last:border-0 group flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0 border border-blue-100/50">
                <User className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-[15px] text-slate-900 truncate mb-0.5">{visitor.name}</h4>
                <div className="text-[13px] text-slate-500 font-medium flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="truncate">Host: {visitor.host}</span>
                  <span className="hidden sm:inline opacity-50">•</span>
                  <span className="truncate">{visitor.purpose}</span>
                </div>
                <div className="text-[12px] font-bold text-blue-600 mt-1">{visitor.time}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button className="flex items-center justify-center gap-1.5 px-3 py-2 bg-green-600 text-white rounded-lg text-[13px] font-semibold hover:bg-green-700 transition-colors shadow-sm">
                <Check className="w-3.5 h-3.5" />
                Approve
              </button>
              <button className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white text-red-600 border border-red-200 rounded-lg text-[13px] font-semibold hover:bg-red-50 transition-colors">
                <X className="w-3.5 h-3.5" />
                Reject
              </button>
              <button className="flex items-center justify-center p-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors" title="View QR">
                <QrCode className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        {visitors.length === 0 && (
          <div className="py-8 text-center text-slate-500 text-sm font-medium">
            No pending visitor requests.
          </div>
        )}
      </div>
    </div>
  );
}
