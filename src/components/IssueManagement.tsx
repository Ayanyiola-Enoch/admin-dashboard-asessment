import React, { useState } from "react";

const IssueManagement = () => {
  return (
    <div className="flex h-full w-full overflow-hidden bg-[#111115]">
      {/* Main Issue Board */}
      <div className="flex-1 flex flex-col overflow-y-auto pr-4 md:pr-8">
        {/* Header Title */}
        <div className="mt-4 mb-6">
          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase text-white mb-2"
            style={{ transform: "scaleX(1.5)", transformOrigin: "left" }}
          >
            Issue Management
          </h1>
          <p className="text-gray-400 text-sm mt-4">
            Manage and track system-wide technical support tickets.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8 border-b border-[#2A2B36] pb-6">
          <FilterButton icon="!" label="Priority" />
          <FilterButton
            icon={
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
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            }
            label="Category"
          />
          <FilterButton
            icon={
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            }
            label="Assignee"
          />
          <FilterButton
            icon={
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
            }
            label="Date Range"
          />
          <div className="w-px h-6 bg-[#2A2B36] mx-1"></div>
          <button className="text-gray-400 hover:text-white transition-colors">
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
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </button>
        </div>

        {/* Kanban Board */}
        <div className="flex gap-6 overflow-x-auto pb-4">
          {/* Column: OPEN */}
          <div className="w-80 flex-shrink-0 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00C2FF]"></span>
              <span className="text-xs font-bold text-gray-400 tracking-wider">
                OPEN
              </span>
              <span className="text-[10px] bg-[#252631] text-gray-400 px-2 py-0.5 rounded-full font-bold">
                12
              </span>
              <div className="flex-1"></div>
              <button className="text-gray-500 hover:text-white">...</button>
            </div>

            {/* Ticket Card 1 */}
            <div className="bg-[#1C1D26] border border-[#2A2B36] rounded-xl p-4 hover:border-[#635BFF] transition-colors cursor-pointer outline outline-1 outline-[#1C1D26] focus:outline-[#635BFF]">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold text-red-500 bg-red-500/10 px-2 py-1 rounded">
                  CRITICAL
                </span>
                <span className="text-xs font-mono text-gray-500">NX-2041</span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-3">
                System-wide latency spike in US-East clusters
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge label="Infrastructure" />
                <Badge label="Kubernetes" />
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facepad&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="w-6 h-6 rounded-full border border-gray-600"
                />
                <div className="flex items-center gap-1">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  2m ago
                </div>
              </div>
            </div>

            {/* Ticket Card 2 */}
            <div className="bg-[#14151C] border border-[#2A2B36] border-dashed rounded-xl p-4 opacity-70">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold text-orange-500 bg-orange-500/10 px-2 py-1 rounded">
                  HIGH
                </span>
                <span className="text-xs font-mono text-gray-500">NX-2045</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-300 mb-3">
                Database migration failure on staging-3
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge label="Database" />
              </div>
            </div>
          </div>

          {/* Column: IN PROGRESS */}
          <div className="w-80 flex-shrink-0 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
              <span className="text-xs font-bold text-gray-400 tracking-wider">
                IN PROGRESS
              </span>
              <span className="text-[10px] bg-[#252631] text-gray-400 px-2 py-0.5 rounded-full font-bold">
                4
              </span>
              <div className="flex-1"></div>
              <button className="text-gray-500 hover:text-white">...</button>
            </div>

            {/* Ticket Card 3 */}
            <div className="bg-[#1C1D26] border border-[#2A2B36] rounded-xl p-4 hover:border-[#635BFF] transition-colors cursor-pointer">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">
                  MEDIUM
                </span>
                <span className="text-xs font-mono text-gray-500">NX-1992</span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-3">
                Update API documentation for v3.1 release
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge label="Docs" />
                <Badge label="Internal" />
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facepad&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="w-6 h-6 rounded-full border border-gray-600"
                />
                <div className="flex items-center gap-1">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  1h ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Panel - Ticket Details */}
      <div className="w-80 lg:w-[400px] border-l border-[#2A2B36] bg-[#111115] flex flex-col overflow-hidden hidden md:flex">
        {/* Header */}
        <div className="p-5 border-b border-[#2A2B36] flex items-center justify-between">
          <span className="text-[10px] text-gray-500 font-bold tracking-wider uppercase">
            Ticket Details
          </span>
          <button className="text-gray-400 hover:text-white">
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

        <div className="flex-1 overflow-y-auto">
          <div className="p-5">
            <h2 className="text-xl font-bold text-white leading-tight mb-6">
              System-wide latency spike in US-East clusters
            </h2>

            {/* Meta Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2 block">
                  Assignee
                </label>
                <div className="flex items-center gap-2 bg-[#1C1D26] border border-[#2A2B36] p-2 rounded-lg cursor-pointer hover:border-gray-500 transition-colors">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facepad&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className="w-5 h-5 rounded-full"
                  />
                  <span className="text-sm text-gray-300">Alex Rivera</span>
                </div>
              </div>
              <div>
                <label className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2 block">
                  Status
                </label>
                <div className="flex items-center justify-between bg-[#1C1D26] border border-[#2A2B36] p-2 rounded-lg cursor-pointer hover:border-gray-500 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00C2FF]"></span>
                    <span className="text-sm text-gray-300">Open</span>
                  </div>
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <label className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2 block">
                  Priority
                </label>
                <div className="flex items-center justify-between bg-red-900/20 border border-red-900 p-2 rounded-lg cursor-pointer text-red-500">
                  <span className="text-sm font-medium">Critical</span>
                  <span className="font-bold">!</span>
                </div>
              </div>
              <div>
                <label className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2 block">
                  Reporter
                </label>
                <div className="flex items-center gap-2 bg-[#1C1D26] border border-[#2A2B36] p-2 rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facepad&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className="w-5 h-5 rounded-full"
                  />
                  <span className="text-sm text-gray-300">David Chen</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <label className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-3 block">
                Description
              </label>
              <div className="text-sm text-gray-300 space-y-3 leading-relaxed">
                <p>
                  Monitoring agents detected a sustained latency increase of
                  &gt;450ms across all microservices in the US-East-1 region.
                  Traffic shaping rules appear to be misconfigured after the
                  last rollout.
                </p>
                <p>
                  Investigation into the load balancer logs shows a significant
                  increase in 504 errors on the edge nodes.
                </p>
              </div>
            </div>

            {/* Activity & Comments */}
            <div className="mb-8">
              <label className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-4 block">
                Activity & Comments
              </label>

              <div className="space-y-4">
                {/* Comment 1 */}
                <div className="bg-[#1C1D26] border border-[#2A2B36] p-4 rounded-xl flex gap-3 relative">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facepad&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className="w-8 h-8 rounded-full absolute -left-4 -top-3 border-2 border-[#111115]"
                  />
                  <div className="w-full pl-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-white">
                        Alex Rivera
                      </span>
                      <span className="text-[10px] text-gray-500 font-mono">
                        10:42 AM
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">
                      Checking the ingress controller logs now. It seems related
                      to the new proxy configuration.
                    </p>
                  </div>
                </div>

                {/* Comment 2 */}
                <div className="bg-[#1C1D26] border border-[#2A2B36] p-4 rounded-xl flex gap-3 relative">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facepad&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className="w-8 h-8 rounded-full absolute -left-4 -top-3 border-2 border-[#111115]"
                  />
                  <div className="w-full pl-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-white">
                        Sarah Jenkins
                      </span>
                      <span className="text-[10px] text-gray-500 font-mono">
                        10:55 AM
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">
                      Confirmed. Reverting the config in staging now to...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* System Audit Log */}
            <div>
              <label className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-3 block">
                System Audit Log
              </label>
              <div className="font-mono text-[10px] space-y-2 text-gray-400">
                <div className="flex gap-4">
                  <span className="text-gray-500">10:41:12</span>
                  <span>TICKET_CREATED via MONITORING_API</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-500">10:42:05</span>
                  <span>ASSIGNEE_CHANGED: null &rarr; alex_rivera</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-500">10:55:18</span>
                  <span>PRIORITY_ESCALATED: HIGH &rarr; CRITICAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Comment Input */}
        <div className="p-4 border-t border-[#2A2B36] bg-[#111115]">
          <div className="relative">
            <input
              type="text"
              placeholder="Add a comment.."
              className="w-full bg-[#1C1D26] border border-[#2A2B36] rounded-full py-2.5 pl-4 pr-10 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#635BFF]"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterButton = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <button className="flex items-center gap-2 bg-[#1C1D26] border border-[#2A2B36] rounded-full px-3 py-1.5 text-xs text-gray-300 hover:text-white hover:border-gray-500 transition-colors">
    <span className="text-gray-400">{icon}</span>
    {label}
    <svg
      className="w-3 h-3 text-gray-500 ml-1"
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
);

const Badge = ({ label }: { label: string }) => (
  <span className="text-[10px] bg-[#252631] text-gray-400 px-2 py-0.5 rounded-md font-medium border border-[#2A2B36]">
    {label}
  </span>
);

export default IssueManagement;
