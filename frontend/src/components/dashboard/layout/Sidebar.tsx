import { Link, useLocation } from 'react-router-dom';
import {
  LogOut,
} from 'lucide-react';
import campusTwinLogo from '../../../assets/CampusTwin-logo.png';
import type { User, UserRole } from '../../../types/dashboard';
import { roleNavigation } from '../../../config/navigation';

interface SidebarProps {
  user: User;
  role: UserRole;
  isCollapsed?: boolean;
}

export default function Sidebar({ user, role, isCollapsed = false }: SidebarProps) {
  const location = useLocation();
  const navigation = roleNavigation[role] || roleNavigation.STUDENT;

  return (
    <aside className={`hidden md:flex flex-col bg-white border-r border-slate-200 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} h-screen sticky top-0`}>
      <div className="h-16 flex items-center px-4 border-b border-slate-200 shrink-0">
        <div className={`flex items-center gap-2 text-blue-700 ${isCollapsed ? 'justify-center w-full' : ''}`}>
          <img
            src={campusTwinLogo}
            alt="CampusTwin logo"
            className="w-9 h-9 object-contain shrink-0"
          />
          {!isCollapsed && <span className="font-bold text-xl tracking-tight text-slate-900">CampusTwin</span>}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1 hide-scrollbar">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href || (location.pathname.startsWith(item.href) && item.href !== '/dashboard');

          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors group relative ${
                isActive
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
              title={isCollapsed ? item.name : undefined}
            >
              <item.icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-blue-700' : 'text-slate-400 group-hover:text-slate-600'}`} />
              {!isCollapsed && <span className="truncate">{item.name}</span>}
            </Link>
          );
        })}
      </div>

      <div className="p-3 border-t border-slate-200 flex flex-col gap-3 shrink-0">
        {isCollapsed ? (
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm overflow-hidden border border-blue-200 shrink-0">
              {user.avatarUrl ? (
                <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
              ) : (
                user.name.charAt(0)
              )}
            </div>
            <button
              className="w-10 h-10 rounded-2xl border border-slate-200 bg-slate-50 text-slate-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 transition-colors flex items-center justify-center"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_100%)] px-3 py-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm overflow-hidden border border-blue-200 shrink-0">
                {user.avatarUrl ? (
                  <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  user.name.charAt(0)
                )}
              </div>
              <div className="min-w-0 flex-1">
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
        )}
      </div>
    </aside>
  );
}
