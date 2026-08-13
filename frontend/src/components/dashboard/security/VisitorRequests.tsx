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
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm h-full">
      <SectionHeader
        title="Pending Visitor Requests"
        action={{ label: 'View All Visitors', href: '/dashboard/visitors' }}
      />

      <div className="space-y-3 mt-2">
        {visitors.map((visitor) => (
          <div key={visitor.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight mb-1">{visitor.name}</h4>
                  <p className="text-xs text-slate-500 mb-0.5">Host: <span className="font-medium text-slate-700">{visitor.host}</span></p>
                  <p className="text-xs text-slate-500 mb-0.5">Purpose: <span className="font-medium text-slate-700">{visitor.purpose}</span></p>
                  <p className="text-xs font-medium text-blue-600 mt-1">{visitor.time}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-100">
              <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors shadow-sm">
                <Check className="w-4 h-4" />
                Approve
              </button>
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                <X className="w-4 h-4" />
                Reject
              </button>
              <button className="flex items-center justify-center p-1.5 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors ml-auto">
                <QrCode className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}

        {visitors.length === 0 && (
          <div className="py-8 text-center text-slate-500 text-sm">
            No pending visitor requests.
          </div>
        )}
      </div>
    </div>
  );
}
