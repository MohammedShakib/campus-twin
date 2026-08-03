import { ArrowRight, BookOpen, Bus, CalendarDays, Search } from 'lucide-react';

const quickQueries = [
  'Show my classes today',
  'Which classrooms are available?',
  'Where is Bus 02?',
  'Are there any events today?',
];

const results = [
  { icon: BookOpen, label: 'Room 405', detail: 'Engineering Building, 4th floor', tag: 'Classroom' },
  { icon: Bus, label: 'Bus 02', detail: 'Gate 2, ETA 4 minutes', tag: 'Transport' },
  { icon: CalendarDays, label: 'Robotics Workshop', detail: 'Auditorium, 2:00 PM', tag: 'Event' },
];

const AIAssistant = () => {
  return (
    <section id="information-search" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div>
            <p className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-3">Campus information search</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-6">Find Campus Records Without Opening Multiple Screens</h2>
            <p className="text-lg text-slate-600 mb-8 font-medium">
              Students and staff can quickly search schedules, rooms, bus status and events using the same verified campus data.
            </p>

            <div className="mb-8">
              <p className="font-bold text-slate-900 mb-4">Common lookups</p>
              <div className="flex flex-wrap gap-2">
                {quickQueries.map((query) => (
                  <span key={query} className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-600">
                    <Search className="w-4 h-4" />
                    {query}
                  </span>
                ))}
              </div>
            </div>

            <button className="inline-flex items-center px-6 py-3 bg-slate-950 text-white font-bold rounded-md hover:bg-slate-800 transition-colors">
              Open Campus Search
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <p className="mt-4 text-xs text-slate-500 font-medium">Search uses rule-based campus records; optional AI can be added later.</p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="border-b border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-3">
                <Search className="w-5 h-5 text-slate-400" />
                <span className="text-sm font-semibold text-slate-500">Where is Room 405?</span>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {results.map((result) => {
                const Icon = result.icon;
                return (
                  <div key={result.label} className="p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-4 mb-1">
                        <h3 className="font-bold text-slate-950">{result.label}</h3>
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-bold text-slate-600">{result.tag}</span>
                      </div>
                      <p className="text-sm text-slate-600">{result.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Linked records</p>
              <p className="mt-1 text-sm font-semibold text-slate-700">Schedule, classroom, transport and event modules</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
