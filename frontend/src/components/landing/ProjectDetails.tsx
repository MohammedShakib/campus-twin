import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const technologies = ['Spring Boot', 'React and TypeScript', 'PostgreSQL', 'REST API', 'WebSocket', 'Java Socket Programming'];

const syllabus = [
  ['ArrayList', 'Room and schedule processing'],
  ['Queue', 'Complaint processing'],
  ['Stack', 'Admin action history'],
  ['Set', 'Unique event registration'],
  ['Comparable', 'Default room sorting'],
  ['Comparator', 'Custom sorting'],
  ['File I/O', 'Logs, files, and backup'],
  ['Threads', 'Bus and notification simulation'],
  ['Socket', 'Bus client-server communication'],
];

const future = ['GPS bus tracking', 'IoT parking sensors', 'RFID attendance', 'Smart classroom sensors'];

const accordions = [
  {
    id: 'architecture',
    title: 'Technology and Architecture',
    content: (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {technologies.map((item) => (
          <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-700">
            {item}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'syllabus',
    title: 'AOOP Syllabus Implementation',
    content: (
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full text-sm">
          <tbody className="divide-y divide-slate-100">
            {syllabus.map(([topic, implementation]) => (
              <tr key={topic}>
                <td className="w-40 px-4 py-3 font-bold text-slate-950 bg-slate-50">{topic}</td>
                <td className="px-4 py-3 text-slate-600">{implementation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 'future',
    title: 'Future Development',
    content: (
      <ul className="grid sm:grid-cols-2 gap-3">
        {future.map((item) => (
          <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-700">
            {item}
          </li>
        ))}
      </ul>
    ),
  },
];

const ProjectDetails = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="project-details" className="py-10 md:py-14 lg:py-[72px] bg-[#F6F8FB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-3">Project Details</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Technical and academic details are kept compact for quick review.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm divide-y divide-slate-200 overflow-hidden">
          {accordions.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-base md:text-lg font-bold text-slate-950">{item.title}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-200 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5">{item.content}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
