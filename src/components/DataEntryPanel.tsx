import React from "react";

const DataEntryPanel = ({ onClose }: { onClose?: () => void }) => {
  return (
    <aside className="w-full md:w-96 bg-[#16171E] border-l border-[#2A2B36] flex flex-col h-full absolute md:relative z-40 right-0 top-0 overflow-hidden shadow-2xl">
      <div className="p-6 border-b border-[#2A2B36]/50 flex justify-between items-center relative">
        <div>
          <h2 className="text-xl font-bold text-white mb-1">
            Create New Entry
          </h2>
          <p className="text-xs text-gray-400">
            Fill in the technical parameters for the new data node.
          </p>
        </div>
        <button
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="px-6 py-4">
        <div className="flex justify-between text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-2">
          <span>STEP 01: SYSTEM INFO</span>
          <span>60% COMPLETE</span>
        </div>
        <div className="h-1.5 w-full bg-[#2A2B36] rounded-full overflow-hidden">
          <div className="h-full bg-indigo-500 w-3/5 rounded-full"></div>
        </div>
      </div>

      <div className="p-6 flex-1 overflow-y-auto space-y-6">
        <div>
          <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">
            Service Identity
          </label>
          <input
            type="text"
            defaultValue="Cluster_Node_Omega"
            className="w-full bg-[#111115] border border-[#2A2B36] rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-[#635BFF] transition-colors"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">
              Zone
            </label>
            <div className="relative">
              <select className="w-full bg-[#111115] border border-[#2A2B36] rounded-lg px-3 py-2.5 text-sm text-gray-200 appearance-none focus:outline-none focus:border-[#635BFF]">
                <option>US-EAST-1</option>
                <option>EU-WEST-1</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
                <svg
                  className="w-3 h-3"
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
            <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">
              Priority
            </label>
            <div className="relative">
              <select className="w-full bg-[#111115] border border-[#2A2B36] rounded-lg px-3 py-2.5 text-sm text-gray-200 appearance-none focus:outline-none focus:border-[#635BFF]">
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
                <svg
                  className="w-3 h-3"
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
        </div>

        <div>
          <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">
            Deployment Date
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="YYYY-MM-DD"
              className="w-full bg-[#111115] border border-[#2A2B36] rounded-lg px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#635BFF]"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">
            Configuration Hash
          </label>
          <input
            type="text"
            defaultValue="0x..."
            className="w-full bg-[#111115] border border-gray-500 text-black-400 rounded-lg px-4 py-2.5 text-sm focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">
            Node Description
          </label>
          <div className="border border-[#2A2B36] rounded-lg bg-[#111115] overflow-hidden focus-within:border-[#635BFF] transition-colors">
            <div className="border-b border-[#2A2B36] px-3 py-2 flex gap-3 text-gray-400">
              <button className="hover:text-white font-bold text-xs">
                <span style={{ fontFamily: "serif" }}>B</span>
              </button>
              <button className="hover:text-white italic text-xs">
                <span style={{ fontFamily: "serif" }}>I</span>
              </button>
              <button className="hover:text-white text-xs">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </button>
            </div>
            <textarea
              rows={4}
              placeholder="Enter technical specifications..."
              className="w-full bg-transparent p-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none resize-none"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="p-6 flex items-center justify-between border-t border-[#2A2B36]/50">
        <button
          type="button"
          onClick={onClose}
          className="text-sm font-medium text-white hover:text-gray-300"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2.5 bg-[#635BFF] hover:bg-[#524ae6] text-white rounded-lg text-sm font-medium shadow-[0_0_15px_rgba(99,91,255,0.3)] transition-colors"
        >
          Save
        </button>
      </div>
    </aside>
  );
};

export default DataEntryPanel;
