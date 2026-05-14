import React from "react";

const TopBar = ({ setMenuOpen }: { setMenuOpen?: (v: boolean) => void }) => {
  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-8 border-b border-[#2A2B36] bg-[#111115]">
      <div className="flex items-center gap-6 flex-1 h-full">
        {setMenuOpen && (
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-gray-400 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}

        {/* Top Navigation Tabs */}
        <nav className="hidden md:flex items-stretch h-full space-x-6 text-sm">
          <a
            href="#"
            className="flex items-center text-gray-400 hover:text-white border-b-2 border-transparent transition-colors mt-0.5"
          >
            Overview
          </a>
          <a
            href="#"
            className="flex items-center text-white font-medium border-b-2 border-white mt-0.5"
          >
            Issues
          </a>
          <a
            href="#"
            className="flex items-center text-gray-400 hover:text-white border-b-2 border-transparent transition-colors mt-0.5"
          >
            System Logs
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {/* Global search */}
        <div className="hidden sm:block relative w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Global search..."
            className="block w-full pl-9 pr-3 py-1.5 border border-[#2A2B36] rounded-md bg-[#111115] text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
          />
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-3 text-gray-400">
          <button className="hover:text-white transition-colors relative">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <button className="hover:text-white transition-colors">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
            </svg>
          </button>
        </div>

        {/* Profile Avatar */}
        <div className="pl-3 border-l border-[#2A2B36]">
          <img
            className="h-8 w-8 rounded-full border border-gray-600 object-cover"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=auto&format=fit&facepad=2&w=256&h=256&q=80"
            alt="Alex Rivera"
          />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
