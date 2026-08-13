import { X, Check, Bell, AlertTriangle, Info, Calendar } from 'lucide-react';
import { useEffect } from 'react';

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  // Lock body scroll when open on mobile
  useEffect(() => {
    if (isOpen) {
      if (window.innerWidth < 768) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      title: 'Power failure reported',
      message: 'Power failure in Engineering Building. Teams are investigating.',
      time: '10 min ago',
      type: 'emergency',
      unread: true,
      icon: AlertTriangle,
      color: 'text-red-600',
      bg: 'bg-red-50'
    },
    {
      id: 2,
      title: 'Bus 02 Delayed',
      message: 'Bus 02 is delayed by 10 minutes due to traffic.',
      time: '1 hour ago',
      type: 'transport',
      unread: true,
      icon: Info,
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    },
    {
      id: 3,
      title: 'Room 405 Reservation Approved',
      message: 'Your reservation for Room 405 tomorrow has been approved.',
      time: '2 hours ago',
      type: 'campus',
      unread: false,
      icon: Check,
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      id: 4,
      title: 'Robotics Workshop Tomorrow',
      message: 'Don\'t forget your registered workshop tomorrow at 10 AM.',
      time: 'Yesterday',
      type: 'event',
      unread: false,
      icon: Calendar,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="fixed md:absolute right-0 top-0 md:top-16 bottom-0 md:bottom-auto w-full md:w-96 bg-white md:rounded-2xl md:shadow-xl md:border md:border-slate-100 z-50 flex flex-col transform transition-transform duration-300 md:translate-x-0 md:mr-4 md:mt-2">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-slate-700" />
            <h3 className="font-bold text-slate-900">Notifications</h3>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline">
              Mark all as read
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors md:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto md:max-h-[60vh]">
          {notifications.map(notif => (
            <div
              key={notif.id}
              className={`p-4 border-b border-slate-50 flex gap-4 hover:bg-slate-50 transition-colors cursor-pointer ${notif.unread ? 'bg-blue-50/30' : ''}`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${notif.bg}`}>
                <notif.icon className={`w-5 h-5 ${notif.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-semibold text-sm text-slate-900 truncate pr-2">{notif.title}</h4>
                  {notif.unread && <span className="w-2 h-2 bg-blue-600 rounded-full shrink-0 mt-1.5"></span>}
                </div>
                <p className="text-sm text-slate-600 mt-0.5 line-clamp-2">{notif.message}</p>
                <p className="text-xs text-slate-400 mt-1.5">{notif.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-100 text-center shrink-0">
          <button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            View All Notifications
          </button>
        </div>
      </div>
    </>
  );
}
