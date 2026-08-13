import { Link, useLocation } from 'react-router-dom';
import {
  Settings,
  HelpCircle,
  LogOut,
  Activity
} from 'lucide-react';
import type { UserRole } from '../../../types/dashboard';
import { roleNavigation } from '../../../config/navigation';

interface SidebarProps {
  role: UserRole;
  isCollapsed?: boolean;
}

export default function Sidebar({ role, isCollapsed = false }: SidebarProps) {
  const location = useLocation();
  const navigation = roleNavigation[role] || roleNavigation.STUDENT;

  return (
    <aside className={`hidden md:flex flex-col bg-white border-r border-slate-200 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} h-screen sticky top-0`}>
      {/* Logo Area */}
      <div className="h-16 flex items-center px-4 border-b border-slate-200 shrink-0">
        <div className={`flex items-center gap-2 text-blue-700 ${isCollapsed ? 'justify-center w-full' : ''}`}>
          <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          {!isCollapsed && <span className="font-bold text-xl tracking-tight text-slate-900">CampusTwin</span>}
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

      {/* Bottom Actions */}
      <div className="p-3 border-t border-slate-200 flex flex-col gap-1 shrink-0">
        <Link
          to="/dashboard/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          title={isCollapsed ? "Settings" : undefined}
        >
          <Settings className="w-5 h-5 shrink-0 text-slate-400" />
          {!isCollapsed && <span>Settings</span>}
        </Link>

        {role === 'ADMIN' && (
          <Link
            to="/dashboard/system"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            title={isCollapsed ? "System" : undefined}
          >
            <Activity className="w-5 h-5 shrink-0 text-slate-400" />
            {!isCollapsed && <span>System</span>}
          </Link>
        )}

        {role === 'STUDENT' && (
          <Link
            to="/dashboard/help"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            title={isCollapsed ? "Help" : undefined}
          >
            <HelpCircle className="w-5 h-5 shrink-0 text-slate-400" />
            {!isCollapsed && <span>Help</span>}
          </Link>
        )}

        <button
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-red-50 hover:text-red-700 transition-colors w-full text-left"
          title={isCollapsed ? "Logout" : undefined}
        >
          <LogOut className="w-5 h-5 shrink-0 text-slate-400" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
