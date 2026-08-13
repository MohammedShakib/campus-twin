import { Bell, Search, Menu, Moon } from 'lucide-react';
import type { User } from '../../../types/dashboard';

interface TopbarProps {
  user: User;
  onMenuClick: () => void;
  onSearchClick?: () => void;
  onNotificationClick?: () => void;
}

export default function Topbar({ user, onMenuClick, onSearchClick, onNotificationClick }: TopbarProps) {
  // A simple greeting based on time could go here
  const greeting = "Good morning";

  return (
    <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      {/* Left side: Mobile menu & Greeting */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden sm:block">
          <h1 className="text-lg font-bold text-slate-900 tracking-tight">{greeting}, {user.name.split(' ')[0]}</h1>
          <p className="text-xs text-slate-500 font-medium">Here's what's happening on campus today.</p>
        </div>

        {/* Mobile simple title */}
        <div className="sm:hidden font-bold text-slate-900 text-lg">
          CampusTwin
        </div>
      </div>

      {/* Right side: Actions & Profile */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search Input (Desktop) / Search Button (Mobile) */}
        <div className="hidden md:flex relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search rooms, courses..."
            className="w-64 bg-slate-50 border border-slate-200 text-sm rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
            onClick={onSearchClick}
            readOnly // For now, we make it trigger a modal/panel
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-[10px] font-medium text-slate-400 border border-slate-200 rounded px-1.5 py-0.5 bg-white">⌘K</span>
          </div>
        </div>

        <button
          className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          onClick={onSearchClick}
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
        </button>

        {/* Notifications */}
        <button
          className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          onClick={onNotificationClick}
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* Theme Toggle (Placeholder for now) */}
        <button
          className="hidden sm:block p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Toggle theme"
        >
          <Moon className="w-5 h-5" />
        </button>

        <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block"></div>

        {/* Profile Dropdown Trigger */}
        <button className="flex items-center gap-2 p-1 rounded-full hover:bg-slate-50 transition-colors">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm overflow-hidden border border-blue-200 shrink-0">
            {user.avatarUrl ? (
              <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
            ) : (
              user.name.charAt(0)
            )}
          </div>
        </button>
      </div>
    </header>
  );
}
