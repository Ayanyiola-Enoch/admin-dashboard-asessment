import React from "react";

const DataManagement = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col h-full opacity-30 pointer-events-none filter blur-[2px]">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1
            className="text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 font-serif"
            style={{ fontFamily: "Arial Black, Impact, sans-serif" }}
          >
            Data Management
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Review, monitor and manipulate high performance cluster data nodes.
          </p>
        </div>
      </div>

      <div className="bg-[#14151C] rounded-xl border border-[#2A2B36] flex-1 flex flex-col overflow-hidden">
        <div className="grid grid-cols-12 px-6 py-4 border-b border-[#2A2B36] text-xs font-bold text-gray-500 tracking-wider">
          <div className="col-span-1">ID</div>
          <div className="col-span-3">NODE ID</div>
          <div className="col-span-4">SERVICE NAME</div>
          <div className="col-span-3">TIMESTAMP</div>
          <div className="col-span-1"></div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`grid grid-cols-12 items-center px-6 py-4 border-b border-[#2A2B36]/50`}
            >
              <div className="col-span-1 text-sm text-gray-500">0{i}</div>
              <div className="col-span-3">
                <div className="text-xs text-gray-400 bg-[#2A2B36] px-2 py-1 rounded inline-block">
                  NODE-{i}00X2
                </div>
              </div>
              <div className="col-span-4 font-semibold text-sm text-gray-300">
                {i === 1
                  ? "Main_Query_Engine"
                  : i === 2
                    ? "Auth_Gateway_v2"
                    : "Edge_Worker_Alpha"}
              </div>
              <div className="col-span-3 text-xs text-gray-500">
                2024-05-12
                <br />
                14:02:1{i}
              </div>
              <div className="col-span-1"></div>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-[#2A2B36]">
          <span className="text-xs text-gray-500 font-medium">
            Showing 1-4 of 256 entries
          </span>
        </div>
      </div>
    </div>
  );
};

export default DataManagement;
