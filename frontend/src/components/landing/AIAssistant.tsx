import { ArrowRight, BookOpen, Bot, User, Sparkles, MessageSquare } from 'lucide-react';

const AIAssistant = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 font-bold text-sm mb-6">
              <Sparkles className="w-4 h-4" /> AI Powered (Optional)
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ask CampusTwin Anything</h2>
            <p className="text-lg text-slate-600 mb-8 font-medium">
              Navigate the campus naturally. The AI assistant helps students find rooms, check bus locations, and query their schedules instantly.
            </p>

            <div className="space-y-3 mb-10">
              <p className="font-bold text-slate-900 mb-4">Suggested prompts:</p>
              {[
                "Show my classes today",
                "Which classrooms are available?",
                "Where is Bus 02?",
                "Are there any events today?",
                "What time does the library close?"
              ].map((prompt, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-600 mr-2 mb-2 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 cursor-pointer transition-colors">
                  <MessageSquare className="w-4 h-4" /> {prompt}
                </div>
              ))}
            </div>

            <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
              Try Campus Assistant
            </button>
            <p className="mt-4 text-xs text-slate-500 font-medium">Works with Rule-based engine if no AI API key is provided.</p>
          </div>

          {/* Chat Mockup */}
          <div className="lg:w-1/2 w-full max-w-md">
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
              {/* Header */}
              <div className="bg-[linear-gradient(135deg,#7C3AED_0%,#4F46E5_100%)] p-6 text-white flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Campus AI</h4>
                  <p className="text-indigo-100 text-sm flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400"></span> Online</p>
                </div>
              </div>
              
              {/* Chat Area */}
              <div className="p-6 bg-slate-50 space-y-6 h-80 overflow-y-auto">
                {/* User Message */}
                <div className="flex gap-3 justify-end">
                  <div className="bg-blue-600 text-white p-4 rounded-2xl rounded-tr-sm shadow-sm max-w-[80%]">
                    <p className="text-sm">Where is Room 405?</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-slate-500" />
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div className="bg-white border border-slate-200 text-slate-700 p-4 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%]">
                    <p className="text-sm font-medium mb-2">Room 405 is located on the 4th floor of the <span className="font-bold text-indigo-600">Engineering Building</span>.</p>
                    <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-xl flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <BookOpen className="w-4 h-4 text-indigo-600" />
                       </div>
                       <div>
                         <p className="text-xs font-bold text-slate-900">Your Next Class</p>
                         <p className="text-xs text-slate-600">Starts at 11:30 AM</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="p-4 bg-white border-t border-slate-100">
                <div className="bg-slate-100 rounded-full h-12 px-4 flex items-center justify-between text-slate-400 text-sm">
                  Ask a question...
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                    <ArrowRight className="w-4 h-4" />
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

export default AIAssistant;
