import React from "react";

const QuickUserEntry = () => {
  return (
    <aside className="w-80 bg-[#16171E] border-l border-[#2A2B36] flex flex-col rounded-l-3xl my-2 mr-2 shadow-2xl overflow-hidden relative">
      {/* Tab marker on the left border */}
      <div className="absolute -left-px top-1/2 -translate-y-1/2 w-8 h-24  flex items-center -ml-8">
        <div className="bg-[#16171E] border border-r-0 border-[#2A2B36] rounded-l-md w-full h-full flex flex-col justify-center items-center py-2 text-gray-500 cursor-pointer">
          <svg
            className="w-4 h-4 mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-[8px] uppercase tracking-widest text-[#4A4B56] transform -rotate-90 whitespace-nowrap mt-4 block">
            ENTRY PANEL
          </span>
        </div>
      </div>

      <div className="p-6 border-b border-[#2A2B36]/50">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
          Quick User Entry
        </h2>
      </div>

      <div className="p-6 flex-1 overflow-y-auto space-y-6">
        {/* Upload Area */}
        <div className="border border-dashed border-[#2A2B36] rounded-xl p-8 flex flex-col items-center justify-center text-center bg-[#111115]/50 hover:bg-[#111115] transition-colors cursor-pointer group">
          <div className="w-10 h-10 mb-3 text-gray-600 group-hover:text-gray-400 transition-colors">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          </div>
          <p className="text-[11px] font-mono text-gray-500">
            Upload Profile Image
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-[#111115] border border-[#2A2B36] rounded-lg px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#635BFF] transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john.d@nexus.sys"
              className="w-full bg-[#111115] border border-[#2A2B36] rounded-lg px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#635BFF] transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-1.5">
                Access Role
              </label>
              <div className="relative">
                <select className="w-full bg-[#111115] border border-[#2A2B36] rounded-lg px-3 py-2.5 text-sm text-gray-200 appearance-none focus:outline-none focus:border-[#635BFF] transition-colors cursor-pointer">
                  <option>Viewer</option>
                  <option>Editor</option>
                  <option>Administrator</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-1.5">
                System Status
              </label>
              <div className="w-full bg-[#111115] border border-[#2A2B36] rounded-lg px-3 py-2.5 flex items-center justify-between">
                <span className="text-sm text-gray-200">Active</span>
                <button className="w-8 h-4 bg-[#635BFF] rounded-full relative transition-colors focus:outline-none">
                  <span className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full transition-transform"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 grid grid-cols-2 gap-3 border-t border-[#2A2B36]/50">
        <button className="px-4 py-2.5 border border-[#2A2B36] text-gray-300 rounded-lg text-sm hover:bg-[#2A2B36]/50 transition-colors font-medium">
          Cancel
        </button>
        <button className="px-4 py-2.5 bg-[#635BFF] hover:bg-[#524ae6] text-white rounded-lg text-sm transition-colors font-medium shadow-[0_0_15px_rgba(99,91,255,0.3)]">
          Save Profile
        </button>
      </div>
    </aside>
  );
};

export default QuickUserEntry;
