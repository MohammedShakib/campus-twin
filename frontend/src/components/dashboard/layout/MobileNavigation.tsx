import { Link, useLocation } from 'react-router-dom';
import { LogOut, X } from 'lucide-react';
import type { User, UserRole } from '../../../types/dashboard';
import { roleNavigation } from '../../../config/navigation';
import { useEffect } from 'react';
import campusTwinLogo from '../../../assets/CampusTwin-logo.png';

interface MobileNavigationProps {
  user: User;
  role: UserRole;
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavigation({ user, role, isOpen, onClose }: MobileNavigationProps) {
  const location = useLocation();
  const navigation = roleNavigation[role] || roleNavigation.STUDENT;

  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden flex">
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white transition-transform transform">
        <div className="absolute top-0 right-0 -mr-12 pt-4">
          <button
            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white bg-slate-800 text-white"
            onClick={onClose}
          >
            <span className="sr-only">Close sidebar</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="h-16 flex items-center px-4 border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-2 text-blue-700">
            <img
              src={campusTwinLogo}
              alt="CampusTwin logo"
              className="w-9 h-9 object-contain shrink-0"
            />
            <span className="font-bold text-xl tracking-tight text-slate-900">CampusTwin</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1 hide-scrollbar">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href || (location.pathname.startsWith(item.href) && item.href !== '/dashboard');

            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors group relative ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <item.icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-blue-700' : 'text-slate-400'}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-200 flex flex-col gap-3 shrink-0 pb-safe">
          <div className="rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_100%)] px-3 py-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm overflow-hidden border border-blue-200 shrink-0">
                {user.avatarUrl ? (
                  <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  user.name.charAt(0)
                )}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">{user.name}</p>
                <p className="text-xs font-medium text-slate-500 capitalize">{role.toLowerCase()}</p>
              </div>
              <button
                className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-slate-400 hover:text-red-600 hover:border-red-100 hover:bg-red-50 transition-colors flex items-center justify-center shrink-0"
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 w-14" aria-hidden="true" />
    </div>
  );
}
