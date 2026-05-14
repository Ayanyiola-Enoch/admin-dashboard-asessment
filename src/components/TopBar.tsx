import React from "react";

const TopBar = ({ setMenuOpen }: { setMenuOpen?: (v: boolean) => void }) => {
  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-8 border-b border-[#2A2B36] bg-[#111115]">
      <div className="flex items-center flex-1 max-w-md gap-3">
        {setMenuOpen && (
          <button onClick={() => setMenuOpen(true)} className="md:hidden text-gray-400 hover:text-white">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        )}
        <div className="flex-1 relative hidden sm:block">
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
          placeholder="Quick search..."
          className="block w-full pl-10 pr-3 py-2 border border-[#2A2B36] rounded-md leading-5 bg-[#14151C] text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#635BFF] focus:border-[#635BFF] sm:text-sm transition-colors"
        />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <div className="hidden sm:flex items-center gap-4 text-gray-400">
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
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-3 border-l border-[#2A2B36] pl-6">
          <div className="flex flex-col items-end">
            <span className="text-sm font-semibold text-white">Admin User</span>
            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
              System Overseer
            </span>
          </div>
          <img
            className="h-9 w-9 rounded-full object-cover border border-[#2A2B36]"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=auto&format=fit&facepad=2&w=256&h=256&q=80"
            alt="Admin User"
          />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
