import { Lock, ShieldCheck, Key, Database, Fingerprint, RefreshCcw, ArrowRight } from 'lucide-react';

const SecurityAndFuture = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Security (Left) */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Secure Access for Every Campus Role</h2>
            <p className="text-slate-400 mb-10 text-lg">
              Enterprise-grade security ensuring data integrity, authorized access and strict role separation across the digital twin.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
               {[
                 { icon: Key, text: "JWT Authentication" },
                 { icon: ShieldCheck, text: "Role-Based Access" },
                 { icon: Lock, text: "Password Encryption" },
                 { icon: Database, text: "Secure File Handling" },
                 { icon: Fingerprint, text: "Validated API Requests" },
                 { icon: RefreshCcw, text: "Backup and Restore" }
               ].map((item, idx) => {
                 const Icon = item.icon;
                 return (
                 <div key={idx} className="flex items-center gap-3">
                   <div className="p-2 rounded bg-emerald-500/20 text-emerald-400 shrink-0">
                     <Icon className="w-4 h-4" />
                   </div>
                   <span className="text-slate-300 font-medium text-sm">{item.text}</span>
                 </div>
               )})}
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
               <div className="space-y-4">
                 <div className="flex items-center justify-between">
                   <span className="text-slate-400 text-sm">Student</span>
                   <ArrowRight className="w-4 h-4 text-slate-600" />
                   <span className="text-blue-400 text-sm font-bold bg-blue-500/10 px-3 py-1 rounded-full">Student Access</span>
                 </div>
                 <div className="flex items-center justify-between">
                   <span className="text-slate-400 text-sm">Teacher</span>
                   <ArrowRight className="w-4 h-4 text-slate-600" />
                   <span className="text-violet-400 text-sm font-bold bg-violet-500/10 px-3 py-1 rounded-full">Academic Access</span>
                 </div>
                 <div className="flex items-center justify-between">
                   <span className="text-slate-400 text-sm">Security</span>
                   <ArrowRight className="w-4 h-4 text-slate-600" />
                   <span className="text-amber-400 text-sm font-bold bg-amber-500/10 px-3 py-1 rounded-full">Security Access</span>
                 </div>
                 <div className="flex items-center justify-between">
                   <span className="text-slate-400 text-sm">Admin</span>
                   <ArrowRight className="w-4 h-4 text-slate-600" />
                   <span className="text-emerald-400 text-sm font-bold bg-emerald-500/10 px-3 py-1 rounded-full">Full Control</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Future (Right) */}
          <div className="lg:w-1/2">
             <div className="bg-[linear-gradient(135deg,rgba(37,99,235,0.1)_0%,rgba(6,182,212,0.1)_55%,rgba(124,58,237,0.1)_100%)] p-[1px] rounded-3xl h-full">
               <div className="bg-slate-900 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden">
                 
                 <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-bl-full pointer-events-none"></div>

                 <h2 className="text-3xl font-bold mb-6 text-white">Software Today.<br/>Smart Infrastructure Tomorrow.</h2>
                 <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                   CampusTwin is designed so that physical sensors and IoT devices can later be connected without rebuilding the entire platform.
                 </p>

                 <div className="grid grid-cols-2 gap-8">
                   <div>
                     <h4 className="text-emerald-400 font-bold mb-4 text-sm uppercase tracking-wider">Current System</h4>
                     <ul className="space-y-3">
                       <li className="text-slate-300 text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>User Updates</li>
                       <li className="text-slate-300 text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>Simulated Bus Tracking</li>
                       <li className="text-slate-300 text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>Manual Parking Status</li>
                       <li className="text-slate-300 text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>Software-Based Attendance</li>
                     </ul>
                   </div>
                   <div>
                     <h4 className="text-cyan-400 font-bold mb-4 text-sm uppercase tracking-wider">Future Integration</h4>
                     <ul className="space-y-3">
                       <li className="text-slate-300 text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>GPS Bus Tracking</li>
                       <li className="text-slate-300 text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>IoT Parking Sensors</li>
                       <li className="text-slate-300 text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>RFID Attendance</li>
                       <li className="text-slate-300 text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>Environmental Sensors</li>
                     </ul>
                   </div>
                 </div>

               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SecurityAndFuture;
