import { Search, Menu } from 'lucide-react';
import type { User } from '../../../types/dashboard';

interface TopbarProps {
  user: User;
  onMenuClick: () => void;
  onSearchClick?: () => void;
}

export default function Topbar({ user, onMenuClick, onSearchClick }: TopbarProps) {
  const greeting = "Good morning";

  return (
    <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden sm:block">
          <h1 className="text-lg font-bold text-slate-900 tracking-tight">{greeting}, {user.name.split(' ')[0]}</h1>
          <p className="text-xs text-slate-500 font-medium">Here's what's happening on campus today.</p>
        </div>

        <div className="sm:hidden font-bold text-slate-900 text-lg">
          CampusTwin
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="hidden md:flex relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search rooms, courses..."
            className="w-72 bg-slate-50/90 border border-slate-200 text-sm rounded-2xl py-2.5 pl-10 pr-14 focus:outline-none focus:ring-2 focus:ring-blue-500/15 focus:border-blue-400 focus:bg-white transition-all shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
            onClick={onSearchClick}
            readOnly
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-[10px] font-semibold text-slate-400 border border-slate-200 rounded-lg px-1.5 py-0.5 bg-white">Ctrl K</span>
          </div>
        </div>

        <button
          className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          onClick={onSearchClick}
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
