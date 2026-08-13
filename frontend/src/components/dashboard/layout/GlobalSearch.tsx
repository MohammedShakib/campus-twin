import { X, Search as SearchIcon, MapPin, Users, BookOpen } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = 'hidden';
    } else {
      setQuery('');
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Mock results
  const hasResults = query.length > 2;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Search Dialog */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center px-4 border-b border-slate-100">
          <SearchIcon className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent border-none py-4 px-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0 sm:text-lg"
            placeholder="Search rooms, courses, teachers, events..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {!query && (
            <div className="p-8 text-center text-slate-500">
              <p className="mb-4 text-sm">Try searching for...</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">Room 405</span>
                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">Data Structures</span>
                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">Dr. Ahmed</span>
              </div>
            </div>
          )}

          {query && !hasResults && (
            <div className="p-8 text-center text-slate-500 text-sm">
              Keep typing to search...
            </div>
          )}

          {hasResults && (
            <div className="py-2">
              <div className="px-3 py-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Rooms</div>
              <button className="w-full flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">Room 405</h4>
                  <p className="text-sm text-slate-500">Engineering Building · Floor 4</p>
                  <p className="text-xs text-green-600 font-medium mt-0.5">Available after 2:30 PM</p>
                </div>
              </button>

              <div className="px-3 py-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider mt-4">Courses</div>
              <button className="w-full flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-100 transition-colors">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">Software Engineering</h4>
                  <p className="text-sm text-slate-500">CSE-301 · Dr. Ahmed</p>
                </div>
              </button>

              <div className="px-3 py-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider mt-4">People</div>
              <button className="w-full flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-slate-200 transition-colors">
                  <Users className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">Dr. Ahmed</h4>
                  <p className="text-sm text-slate-500">Professor · Computer Science</p>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
