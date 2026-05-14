import React from "react";

const Sidebar = ({
  isOpen,
  setMenuOpen,
  activeTab,
  setActiveTab,
}: {
  isOpen?: boolean;
  setMenuOpen?: (v: boolean) => void;
  activeTab?: string;
  setActiveTab?: (v: string) => void;
}) => {
  return (
    <aside
      className={`w-64 bg-[#14151C] border-r border-[#2A2B36] flex-col absolute inset-y-0 left-0 z-50 md:relative transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} flex`}
    >
      <div className="h-16 flex items-center justify-between px-6 border-b border-[#2A2B36]">
        <div className="flex items-center gap-2">
          <img src="/circle.svg" alt="Logo" className="w-8 h-8" />
          {/* <div className="w-8 h-8 bg-[#635BFF] rounded-md flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div> */}
          <span className="text-xl font-bold tracking-wide">
            Nexus<span className="text-gray-400 font-medium">Admin</span>
          </span>
        </div>

        {setMenuOpen && (
          <button
            onClick={() => setMenuOpen(false)}
            className="md:hidden text-gray-400 hover:text-white"
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
        )}
      </div>
      <div className="px-6 py-2 text-[10px] text-gray-500 font-semibold tracking-wider uppercase">
        Management Console
      </div>

      <nav className="flex-1 mt-6 px-4 space-y-2">
        <NavItem
          onClick={() => setActiveTab && setActiveTab("Dashboard")}
          icon={<DashboardIcon />}
          label="Dashboard"
          active={activeTab === "Dashboard"}
        />
        <NavItem
          onClick={() => setActiveTab && setActiveTab("Users")}
          icon={<UsersIcon />}
          label="Users"
          active={activeTab === "Users"}
        />
        <NavItem
          onClick={() => setActiveTab && setActiveTab("Roles")}
          icon={<RolesIcon />}
          label="Roles"
          active={activeTab === "Roles"}
        />
        <NavItem
          onClick={() => setActiveTab && setActiveTab("Permissions")}
          icon={<PermissionsIcon />}
          label="Permissions"
          active={activeTab === "Permissions"}
        />
        <NavItem
          onClick={() => setActiveTab && setActiveTab("Issues")}
          icon={<IssuesIcon />}
          label="Issues"
          active={activeTab === "Issues"}
        />
        <NavItem
          onClick={() => setActiveTab && setActiveTab("Settings")}
          icon={<SettingsIcon />}
          label="Settings"
          active={activeTab === "Settings"}
        />
      </nav>

      {/* Bottom User Profile Profile matching screenshot */}
      <div className="p-4 border-t border-[#2A2B36]">
        <div className="flex items-center gap-3 bg-[#1C1D26] p-3 rounded-xl border border-[#2A2B36]">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=auto&format=fit&facepad=2&w=256&h=256&q=80"
            alt="Alex Rivera"
            className="w-10 h-10 rounded-full border border-gray-600 object-cover"
          />
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-white truncate">
              Alex Rivera
            </h4>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
              Admin
            </p>
          </div>
          {/* <button className="text-gray-400 hover:text-white">
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </aside>
  );
};

const NavItem = ({
  icon,
  label,
  active = false,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${active ? "bg-[#252631] text-white outline outline-1 outline-[#424354]" : "text-gray-400 hover:text-white hover:bg-[#252631]/50"}`}
    >
      <span className={active ? "text-white" : "text-gray-400"}>{icon}</span>
      <span className="font-medium text-sm">{label}</span>
    </button>
  );
};

// Icons (Using simple SVGs matching the design)
const DashboardIcon = () => (
  <svg
    className="w-5 h-5"
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
);

const UsersIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const RolesIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const IssuesIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
    />
  </svg>
);

const PermissionsIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
    />
  </svg>
);

const SettingsIcon = () => (
  <svg
    className="w-5 h-5"
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
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export default Sidebar;
