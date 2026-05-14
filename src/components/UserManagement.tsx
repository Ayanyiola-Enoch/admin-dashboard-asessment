import React from "react";

const users = [
  {
    id: 1,
    name: "Marcus Thorne",
    email: "m.thorne@nexus.sys",
    role: "ADMINISTRATOR",
    roleColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    status: "Active",
    statusDot: "bg-emerald-400",
    registration: "OCT 12, 2023",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=256&h=256&q=80",
    initials: null,
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    email: "s.jenkins@nexus.sys",
    role: "SYSTEM EDITOR",
    roleColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    status: "Active",
    statusDot: "bg-emerald-400",
    registration: "NOV 04, 2023",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=facearea&facepad=2&w=256&h=256&q=80",
    initials: null,
  },
  {
    id: 3,
    name: "Alex Lowery",
    email: "a.lowery@nexus.sys",
    role: "VIEWER",
    roleColor: "bg-gray-500/10 text-gray-400 border-gray-500/20",
    status: "Offline",
    statusDot: "bg-gray-500",
    registration: "JAN 15, 2024",
    avatar: null,
    initials: "AL",
  },
];

const UserManagement = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col h-full">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1
            className="text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 font-serif"
            style={{ fontFamily: "Arial Black, Impact, sans-serif" }}
          >
            User Management
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Oversee system access and user permissions across the network.
          </p>
        </div>
        <button className="bg-[#635BFF] hover:bg-[#524ae6] text-white px-5 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2">
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
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add New User
        </button>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex bg-[#14151C] rounded-lg p-1 border border-[#2A2B36]">
          <button className="px-6 py-1.5 bg-[#AAA1FF]/20 text-[#A299FF] rounded-md text-sm font-medium">
            All
          </button>
          <button className="px-6 py-1.5 text-gray-400 hover:text-gray-200 rounded-md text-sm font-medium transition-colors">
            Admin
          </button>
          <button className="px-6 py-1.5 text-gray-400 hover:text-gray-200 rounded-md text-sm font-medium transition-colors">
            Editor
          </button>
          <button className="px-6 py-1.5 text-gray-400 hover:text-gray-200 rounded-md text-sm font-medium transition-colors">
            Viewer
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#2A2B36] bg-[#14151C] text-gray-300 rounded-lg text-sm hover:bg-[#1C1D26] transition-colors">
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
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-[#2A2B36] bg-[#14151C] text-gray-300 rounded-lg text-sm hover:bg-[#1C1D26] transition-colors">
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
        </div>
      </div>

      <div className="bg-[#14151C] rounded-xl border border-[#2A2B36] flex-1 flex flex-col overflow-hidden">
        <div className="grid grid-cols-12 px-6 py-4 border-b border-[#2A2B36] text-xs font-bold text-gray-500 tracking-wider">
          <div className="col-span-3">USER PROFILE</div>
          <div className="col-span-3">EMAIL ADDRESS</div>
          <div className="col-span-2">ACCESS ROLE</div>
          <div className="col-span-2">SYSTEM STATUS</div>
          <div className="col-span-1">REGISTRATION</div>
          <div className="col-span-1 text-right">ACTIONS</div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {users.map((user) => (
            <div
              key={user.id}
              className={`grid grid-cols-12 items-center px-6 py-4 border-b border-[#2A2B36]/50 hover:bg-[#1C1D26] transition-colors`}
            >
              <div className="col-span-3 flex items-center gap-3">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full border border-gray-700 object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#1C1D26] border border-gray-600 flex items-center justify-center text-sm font-medium text-gray-300">
                    {user.initials}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-sm text-gray-200">
                    {user.name.split(" ")[0]}
                  </div>
                  <div className="font-semibold text-sm text-gray-400">
                    {user.name.split(" ")[1]}
                  </div>
                </div>
              </div>
              <div className="col-span-3 text-sm text-gray-500">
                {user.email}
              </div>
              <div className="col-span-2 text-sm">
                <span
                  className={`px-2.5 py-1 text-[10px] font-bold rounded border ${user.roleColor}`}
                >
                  {user.role}
                </span>
              </div>
              <div className="col-span-2 flex items-center gap-2 text-sm text-gray-400">
                <span
                  className={`w-2 h-2 rounded-full ${user.statusDot}`}
                ></span>
                {user.status}
              </div>
              <div className="col-span-1 text-xs text-gray-500 uppercase tracking-widest font-mono">
                {user.registration}
              </div>
              <div className="col-span-1 text-right">
                <button className="text-gray-500 hover:text-gray-300">
                  <svg
                    className="w-5 h-5 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="px-6 py-4 border-t border-[#2A2B36] flex items-center justify-between bg-[#111115]/50">
          <span className="text-xs text-gray-500 font-medium tracking-wide">
            Showing 1-10 of 124 users
          </span>
          <div className="flex gap-1">
            <button className="w-7 h-7 flex items-center justify-center rounded border border-[#2A2B36] text-gray-500 hover:bg-[#2A2B36] transition-colors">
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded border border-indigo-500/30 text-indigo-400 bg-indigo-500/10 text-xs font-medium">
              1
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded border border-[#2A2B36] text-gray-500 hover:bg-[#2A2B36] transition-colors text-xs font-medium">
              2
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded border border-[#2A2B36] text-gray-500 hover:bg-[#2A2B36] transition-colors text-xs font-medium">
              3
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded border border-[#2A2B36] text-gray-500 hover:bg-[#2A2B36] transition-colors">
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
