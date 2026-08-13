import { Link, useLocation } from 'react-router-dom';
import { Settings, HelpCircle, LogOut, Activity, X } from 'lucide-react';
import type { UserRole } from '../../../types/dashboard';
import { roleNavigation } from '../../../config/navigation';
import { useEffect } from 'react';

interface MobileNavigationProps {
  role: UserRole;
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavigation({ role, isOpen, onClose }: MobileNavigationProps) {
  const location = useLocation();
  const navigation = roleNavigation[role] || roleNavigation.STUDENT;

  // Close when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  // Lock body scroll when open
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
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
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

        {/* Logo Area */}
        <div className="h-16 flex items-center px-4 border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-2 text-blue-700">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">CampusTwin</span>
          </div>
        </div>

        {/* Navigation Links */}
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

        {/* Bottom Actions */}
        <div className="p-4 border-t border-slate-200 flex flex-col gap-1 shrink-0 pb-safe">
          <Link
            to="/dashboard/settings"
            className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            <Settings className="w-5 h-5 shrink-0 text-slate-400" />
            <span>Settings</span>
          </Link>

          {role === 'ADMIN' && (
            <Link
              to="/dashboard/system"
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              <Activity className="w-5 h-5 shrink-0 text-slate-400" />
              <span>System</span>
            </Link>
          )}

          {role === 'STUDENT' && (
            <Link
              to="/dashboard/help"
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              <HelpCircle className="w-5 h-5 shrink-0 text-slate-400" />
              <span>Help</span>
            </Link>
          )}

          <button
            className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-600 hover:bg-red-50 hover:text-red-700 transition-colors w-full text-left mt-2"
          >
            <LogOut className="w-5 h-5 shrink-0 text-slate-400" />
            <span>Logout</span>
          </button>
        </div>
      </div>
      <div className="flex-shrink-0 w-14" aria-hidden="true">
        {/* Force sidebar to shrink to fit close icon */}
      </div>
    </div>
  );
}
