import { BookMarked, Code2 } from 'lucide-react';

const syllabusData = [
  { topic: "Spring Boot", impl: "Main application backend, REST APIs, Security." },
  { topic: "ArrayList", impl: "Available rooms, event lists, schedules processing." },
  { topic: "Queue", impl: "Complaint processing (PriorityQueue) and notifications." },
  { topic: "Stack", impl: "Admin action history and undo functionality." },
  { topic: "Set", impl: "Unique event registration and online user tracking." },
  { topic: "Comparable", impl: "Default classroom sorting by building/room." },
  { topic: "Comparator", impl: "Custom room capacity, event date and complaint sorting." },
  { topic: "FileReader / Writer", impl: "Writing and reading campus-activity.log." },
  { topic: "File Streams", impl: "Binary image and document upload for Lost & Found." },
  { topic: "Object Streams", impl: "CampusStateSnapshot serialization for backup/restore." },
  { topic: "Threads", impl: "Bus simulation Runnable and background workers." },
  { topic: "Socket Programming", impl: "Raw Java multi-client ServerSocket for bus driver." }
];

const SyllabusMapping = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3 sticky top-24">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-2xl mb-6">
              <BookMarked className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Built Around AOOP Syllabus</h2>
            <p className="text-lg text-slate-600 mb-6">
              This platform isn't just a conceptual dashboard. Every core syllabus requirement is practically implemented to solve real campus problems.
            </p>
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
               <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2"><Code2 className="w-5 h-5 text-blue-600" /> Academic Goal</h4>
               <p className="text-sm text-slate-600">Demonstrating advanced Object-Oriented Programming through a tangible, large-scale system.</p>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100 border-b border-slate-100 bg-slate-50">
                <div className="px-6 py-4 font-bold text-slate-700 text-sm tracking-wider uppercase">Syllabus Topic</div>
                <div className="hidden md:block px-6 py-4 font-bold text-slate-700 text-sm tracking-wider uppercase">CampusTwin Implementation</div>
              </div>

              <div className="divide-y divide-slate-100">
                {syllabusData.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-2 hover:bg-slate-50 transition-colors">
                    <div className="px-6 py-4 border-b border-slate-100 md:border-b-0 md:border-r border-slate-100">
                      <span className="font-bold text-blue-700 font-mono text-sm">{item.topic}</span>
                    </div>
                    <div className="px-6 py-4">
                      <span className="text-slate-600 font-medium text-sm">{item.impl}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SyllabusMapping;
