import React from "react";

const logsToday = [
  {
    id: 1,
    level: "INFO",
    color: "bg-emerald-500",
    time: "14:22:01.32",
    user: "j.doe_admin",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=auto&format=fit&facepad=2&w=256&h=256&q=80",
    message: (
      <>
        User <span className="text-gray-300">@n_smith</span> role updated from{" "}
        <span className="italic">Viewer</span> to{" "}
        <span className="italic">Editor</span>
      </>
    ),
    module: "AUTH_SVC",
    expanded: false,
  },
  {
    id: 2,
    level: "WARNING",
    color: "bg-amber-500",
    time: "13:45:12.88",
    user: "System_Automator",
    avatar: null,
    isSystem: true,
    message: (
      <>
        Peak memory usage reached 85% on node{" "}
        <span className="text-amber-500">US-EAST-01</span>. Scaling pending.
      </>
    ),
    module: "INFRA_MON",
    expanded: false,
  },
  {
    id: 3,
    level: "ERROR",
    color: "bg-red-500",
    time: "12:01:44.05",
    user: "DB_Cluster_Main",
    avatar: null,
    isSystem: true,
    message: (
      <>
        <span className="text-red-500 font-bold">FATAL:</span> Connection
        timeout during database migration sync.
      </>
    ),
    module: "DATA_CORE",
    expanded: true,
    traceId: "nexus_99b0c221-x01",
    errorCode: "ECONNREFUSED",
    stack: `    at Connection.createConnection (/app/node_modules/driver/index.js:45:12)\n    at SyncService.attemptSync (/app/services/sync.js:102:4)\n    at async MigrationWorker.run (/app/workers/migration.js:12:1)`,
  },
  {
    id: 4,
    level: "INFO",
    color: "bg-emerald-500",
    time: "09:12:33.19",
    user: "s.valdez_sec",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixqx=auto&format=fit&facepad=2&w=256&h=256&q=80",
    message: (
      <>
        Security policy <span className="text-cyan-400">#GLOBAL_MFA</span>{" "}
        updated to <span className="font-bold text-gray-200">Required</span> for
        all tiers.
      </>
    ),
    module: "POLICY_MGR",
    expanded: false,
  },
];

const logsYesterday = [
  {
    id: 5,
    level: "WARNING",
    color: "bg-amber-500",
    time: "23:58:01.00",
    user: "Cron_Job_Runner",
    avatar: null,
    isSystem: true,
    message: (
      <>
        Delayed batch process detected for job{" "}
        <span className="italic">'nightly_cleanup_04'</span>. Retrying...
      </>
    ),
    module: "SYSTEM_CORE",
    expanded: false,
  },
  {
    id: 6,
    level: "INFO",
    color: "bg-emerald-500",
    time: "22:15:44.22",
    user: "k.lin_dev",
    avatar:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=auto&format=fit&facepad=2&w=256&h=256&q=80",
    message: (
      <>
        New API Key generated for{" "}
        <span className="text-indigo-400">PROD_GATEWAY_EXT</span>.
      </>
    ),
    module: "API_MGMT",
    expanded: false,
  },
];

const SystemActivity = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col h-full font-sans">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2">
            System Activity
          </h1>
          <p className="text-sm text-gray-400">
            Real-time audit trails and system event monitoring.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#2A2B36] text-gray-300 rounded-lg text-sm hover:bg-[#1C1D26] transition-colors">
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-[#2A2B36] text-gray-300 rounded-lg text-sm hover:bg-[#1C1D26] transition-colors">
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Export JSON
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-4 bg-[#14151C] p-3 rounded-xl border border-[#2A2B36] mb-8">
        <div className="flex items-center gap-2 px-3 py-1.5 border border-[#2A2B36] rounded-lg bg-[#111115] text-sm text-gray-300 min-w-0">
          <svg
            className="w-4 h-4 text-gray-500"
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
          <span className="whitespace-nowrap">Oct 12 - Oct 14, 2023</span>
        </div>

        <div className="flex items-center bg-[#111115] border border-[#2A2B36] rounded-lg p-1">
          <button className="px-3 py-1 text-[10px] font-bold tracking-wider text-emerald-400">
            INFO
          </button>
          <button className="px-3 py-1 text-[10px] font-bold tracking-wider text-amber-500 bg-[#2A2B36]/50 rounded">
            WARNING
          </button>
          <button className="px-3 py-1 text-[10px] font-bold tracking-wider text-gray-500">
            ERROR
          </button>
        </div>

        <div className="relative">
          <select className="appearance-none bg-[#111115] border border-[#2A2B36] rounded-lg pl-4 pr-10 py-2.5 text-sm text-gray-300 focus:outline-none">
            <option>All Modules</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
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

        <div className="flex-1 relative min-w-[200px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Filter by keywords (e.g. 'timeout')"
            className="w-full bg-[#111115] border border-[#2A2B36] rounded-lg pl-9 pr-4 py-2 1/2 text-sm text-gray-300 focus:outline-none placeholder-gray-500"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 pb-10 space-y-6">
        {/* TODAY */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <h3 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
              TODAY
            </h3>
            <div className="flex-1 h-px bg-[#2A2B36]"></div>
          </div>

          <div className="border border-[#2A2B36] rounded-xl overflow-hidden bg-[#16171E]">
            {logsToday.map((log) => (
              <div
                key={log.id}
                className="border-b border-[#2A2B36] last:border-b-0"
              >
                <div className="flex items-center p-4 hover:bg-[#1C1D26] transition-colors relative">
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 ${log.color}`}
                  ></div>

                  <div className="w-28 text-xs font-mono text-gray-400 pl-4">
                    {log.time}
                  </div>

                  <div className="w-48 flex items-center gap-2">
                    {log.avatar ? (
                      <img
                        src={log.avatar}
                        alt=""
                        className="w-6 h-6 rounded-full"
                      />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-[#2A2B36] flex items-center justify-center text-gray-400">
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
                            d="M5 12h14M12 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    )}
                    <span className="text-xs font-mono text-gray-300 truncate">
                      {log.user}
                    </span>
                  </div>

                  <div className="flex-1 text-xs font-mono text-gray-400 pr-4">
                    {log.message}
                  </div>

                  <div className="w-24">
                    <span className="text-[9px] font-mono tracking-wider px-2 py-1 rounded bg-[#2A2B36]/50 text-gray-400 border border-[#2A2B36]">
                      {log.module}
                    </span>
                  </div>

                  <button className="text-gray-500 hover:text-white px-2">
                    <svg
                      className={`w-4 h-4 transform transition-transform ${log.expanded ? "rotate-180" : ""}`}
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
                  </button>
                </div>

                {log.expanded && (
                  <div className="bg-[#1C1D26]/50 p-6 pl-36 border-t border-[#2A2B36]/50">
                    <h4 className="text-[10px] font-bold tracking-widest text-[#F87171] uppercase mb-4">
                      STACK TRACE & METADATA
                    </h4>

                    <div className="grid grid-cols-[100px_1fr] gap-2 text-xs font-mono mb-4">
                      <div className="text-gray-500">trace_id:</div>
                      <div className="text-gray-300">{log.traceId}</div>

                      <div className="text-gray-500">error_code:</div>
                      <div className="text-[#F87171]">{log.errorCode}</div>

                      <div className="text-gray-500">stack:</div>
                      <div className="bg-[#111115] border border-[#2A2B36] rounded p-4 text-gray-400 whitespace-pre-wrap leading-relaxed">
                        {log.stack}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* YESTERDAY */}
        <div>
          <div className="flex items-center gap-4 mb-4 mt-8">
            <h3 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
              YESTERDAY
            </h3>
            <div className="flex-1 h-px bg-[#2A2B36]"></div>
          </div>

          <div className="border border-[#2A2B36] rounded-xl overflow-hidden bg-[#16171E]">
            {logsYesterday.map((log) => (
              <div
                key={log.id}
                className="border-b border-[#2A2B36] last:border-b-0 flex items-center p-4 hover:bg-[#1C1D26] transition-colors relative"
              >
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 ${log.color}`}
                ></div>

                <div className="w-28 text-xs font-mono text-gray-400 pl-4">
                  {log.time}
                </div>

                <div className="w-48 flex items-center gap-2">
                  {log.avatar ? (
                    <img
                      src={log.avatar}
                      alt=""
                      className="w-6 h-6 rounded-full"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-[#2A2B36] flex items-center justify-center text-gray-400">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  )}
                  <span className="text-xs font-mono text-gray-300 truncate">
                    {log.user}
                  </span>
                </div>

                <div className="flex-1 text-xs font-mono text-gray-400 pr-4">
                  {log.message}
                </div>

                <div className="w-24">
                  <span className="text-[9px] font-mono tracking-wider px-2 py-1 rounded bg-[#2A2B36]/50 text-gray-400 border border-[#2A2B36]">
                    {log.module}
                  </span>
                </div>

                <button className="text-gray-500 hover:text-white px-2">
                  <svg
                    className={`w-4 h-4 transition-transform`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-[#2A2B36]/50 border border-[#2A2B36] text-gray-300 rounded-full text-sm hover:bg-[#2A2B36] transition-colors">
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Load Previous Logs
          </button>
        </div>
      </div>
    </div>
  );
};

export default SystemActivity;
