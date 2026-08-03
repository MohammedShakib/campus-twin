import { GitBranch, GraduationCap } from 'lucide-react';

const AboutProject = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="inline-flex items-center justify-center p-4 bg-blue-100 text-blue-600 rounded-2xl mb-8">
             <GraduationCap className="w-10 h-10" />
          </div>
          
          <h2 className="text-3xl font-bold text-slate-900 mb-6">About CampusTwin</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            CampusTwin is an Advanced Object-Oriented Programming project developed to demonstrate Spring Boot, Java Collections, File I/O, multithreading, socket programming, real-time communication and modern frontend integration through a practical university management system.
          </p>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-left grid sm:grid-cols-2 gap-6">
             <div>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Course</p>
               <p className="font-semibold text-slate-900">Advanced Object-Oriented Programming</p>
             </div>
             <div>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Project Type</p>
               <p className="font-semibold text-slate-900">Software-Based Digital Twin</p>
             </div>
             <div>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Backend Stack</p>
               <p className="font-semibold text-slate-900">Java 21, Spring Boot, WebSockets</p>
             </div>
             <div>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Frontend Stack</p>
               <p className="font-semibold text-slate-900">React, TypeScript, Tailwind CSS</p>
             </div>
          </div>

          <div className="mt-12">
            <a href="https://github.com/MohammedShakib/campus-twin" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-colors">
              <GitBranch className="w-5 h-5" /> View Source Code
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutProject;
