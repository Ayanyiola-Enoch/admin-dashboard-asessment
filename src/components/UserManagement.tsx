import { useState } from "react";

type UserRole = "ADMINISTRATOR" | "SYSTEM EDITOR" | "VIEWER";
type UserStatus = "Active" | "Offline";

type UserRecord = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  roleColor: string;
  status: UserStatus;
  statusDot: string;
  registration: string;
  avatar: string | null;
  initials: string | null;
};

const initialUsers: UserRecord[] = [
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
];

const roleMeta: Record<UserRole, { roleColor: string }> = {
  ADMINISTRATOR: {
    roleColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  },
  "SYSTEM EDITOR": {
    roleColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
  VIEWER: {
    roleColor: "bg-gray-500/10 text-gray-400 border-gray-500/20",
  },
};

const statusDot: Record<UserStatus, string> = {
  Active: "bg-emerald-400",
  Offline: "bg-gray-500",
};

const monthShort = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
] as const;

const formatRegistration = (date: Date) => {
  const mon = monthShort[date.getMonth()];
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${mon} ${day}, ${year}`;
};

const getInitials = (fullName: string) => {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const second = parts[1]?.[0] ?? "";
  const initials = `${first}${second}`.toUpperCase();
  return initials || "U";
};

const defaultForm = {
  name: "",
  email: "",
  role: "VIEWER" as UserRole,
  status: "Active" as UserStatus,
  avatar: "",
};

const UserManagement = () => {
  const [users, setUsers] = useState<UserRecord[]>(initialUsers);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [form, setForm] = useState(defaultForm);
  const [editUserId, setEditUserId] = useState<number | null>(null);
  const [actionMenu, setActionMenu] = useState<null | {
    userId: number;
    top: number;
    right: number;
  }>(null);

  const canSubmit =
    form.name.trim().length > 0 &&
    form.email.trim().length > 0 &&
    form.email.includes("@");

  const closeDrawer = () => {
    setDrawerOpen(false);
    setForm(defaultForm);
    setEditUserId(null);
  };

  const openCreateDrawer = () => {
    setActionMenu(null);
    setEditUserId(null);
    setForm(defaultForm);
    setDrawerOpen(true);
  };

  const openEditDrawer = (user: UserRecord) => {
    setActionMenu(null);
    setEditUserId(user.id);
    setForm({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      avatar: user.avatar ?? "",
    });
    setDrawerOpen(true);
  };

  const handleSubmitUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const avatar = form.avatar.trim() ? form.avatar.trim() : null;
    const initials = avatar ? null : getInitials(form.name);
    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();

    if (editUserId != null) {
      setUsers((prev) =>
        prev.map((u) => {
          if (u.id !== editUserId) return u;
          return {
            ...u,
            name: trimmedName,
            email: trimmedEmail,
            role: form.role,
            roleColor: roleMeta[form.role].roleColor,
            status: form.status,
            statusDot: statusDot[form.status],
            avatar,
            initials,
          };
        }),
      );
      closeDrawer();
      return;
    }

    const nextId = users.reduce((max, u) => Math.max(max, u.id), 0) + 1;
    const now = new Date();

    const newUser: UserRecord = {
      id: nextId,
      name: trimmedName,
      email: trimmedEmail,
      role: form.role,
      roleColor: roleMeta[form.role].roleColor,
      status: form.status,
      statusDot: statusDot[form.status],
      registration: formatRegistration(now),
      avatar,
      initials,
    };

    setUsers((prev) => [newUser, ...prev]);
    closeDrawer();
  };

  const handleDeleteUser = (userId: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== userId));
    setActionMenu(null);
    if (editUserId === userId) {
      closeDrawer();
    }
  };

  return (
    <>
      <div className="max-w-5xl mx-auto flex flex-col h-full">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div className="min-w-0">
            <h1
              className="text-4xl sm:text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-gray-100 to-gray-400 font-serif"
              style={{ fontFamily: "Arial Black, Impact, sans-serif" }}
            >
              User Management
            </h1>
            <p className="text-sm text-gray-400 mt-2">
              Oversee system access and user permissions across the network.
            </p>
          </div>
          <button
            type="button"
            onClick={openCreateDrawer}
            className="bg-[#635BFF] hover:bg-[#524ae6] text-white px-5 py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 w-full sm:w-auto sm:shrink-0 cursor-pointer"
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add New User
          </button>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-4">
          <div className="flex bg-[#14151C] rounded-lg p-1 border border-[#2A2B36] overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
            <button className="px-6 py-1.5 bg-[#AAA1FF]/20 text-[#A299FF] rounded-md text-sm font-medium whitespace-nowrap">
              All
            </button>
            <button className="px-6 py-1.5 text-gray-400 hover:text-gray-200 rounded-md text-sm font-medium transition-colors whitespace-nowrap">
              Admin
            </button>
            <button className="px-6 py-1.5 text-gray-400 hover:text-gray-200 rounded-md text-sm font-medium transition-colors whitespace-nowrap">
              Editor
            </button>
            <button className="px-6 py-1.5 text-gray-400 hover:text-gray-200 rounded-md text-sm font-medium transition-colors whitespace-nowrap">
              Viewer
            </button>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
            <button className="flex items-center gap-2 px-4 py-2 border border-[#2A2B36] bg-[#14151C] text-gray-300 rounded-lg text-sm hover:bg-[#1C1D26] transition-colors whitespace-nowrap">
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
            <button className="flex items-center gap-2 px-4 py-2 border border-[#2A2B36] bg-[#14151C] text-gray-300 rounded-lg text-sm hover:bg-[#1C1D26] transition-colors whitespace-nowrap">
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
          <div className="flex-1 overflow-hidden">
            <div className="h-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
              <div className="min-w-205 h-full flex flex-col">
                <div className="grid grid-cols-12 px-6 py-4 border-b border-[#2A2B36] text-xs font-bold text-gray-500 tracking-wider">
                  <div className="col-span-3">USER PROFILE</div>
                  <div className="col-span-3">EMAIL ADDRESS</div>
                  <div className="col-span-2">ACCESS ROLE</div>
                  <div className="col-span-2">SYSTEM STATUS</div>
                  <div className="col-span-1">REGISTRATION</div>
                  <div className="col-span-1 text-right">ACTIONS</div>
                </div>

                <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
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
                          {(() => {
                            const [first, ...rest] = user.name
                              .trim()
                              .split(/\s+/);
                            const last = rest.join(" ");
                            return (
                              <>
                                <div className="font-semibold text-sm text-gray-200">
                                  {first}
                                </div>
                                {last ? (
                                  <div className="font-semibold text-sm text-gray-400">
                                    {last}
                                  </div>
                                ) : (
                                  <div className="font-semibold text-sm text-gray-400">
                                    &nbsp;
                                  </div>
                                )}
                              </>
                            );
                          })()}
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
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            const rect = (
                              e.currentTarget as HTMLButtonElement
                            ).getBoundingClientRect();

                            setActionMenu((prev) => {
                              if (prev?.userId === user.id) return null;
                              return {
                                userId: user.id,
                                top: rect.bottom + 8,
                                right: Math.max(
                                  12,
                                  window.innerWidth - rect.right,
                                ),
                              };
                            });
                          }}
                          className="text-gray-500 hover:text-gray-300 cursor-pointer"
                          aria-label={`Actions for ${user.name}`}
                        >
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
              </div>
            </div>
          </div>

          <div className="px-6 py-4 border-t border-[#2A2B36] flex items-center justify-between bg-[#111115]/50">
            <span className="text-xs text-gray-500 font-medium tracking-wide">
              Showing 1-{Math.min(10, users.length)} of {users.length} users
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

      {/* Add User Drawer */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => {
              setActionMenu(null);
              closeDrawer();
            }}
          />
          <aside className="fixed inset-y-0 right-0 w-full sm:w-105 bg-[#16171E] border-l border-[#2A2B36] flex flex-col z-50 shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-[#2A2B36]/50 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">
                  {editUserId != null ? "Edit User" : "Add New User"}
                </h2>
                <p className="text-xs text-gray-400">
                  {editUserId != null
                    ? "Update the user details and save changes."
                    : "Fill in the required information to create a new user."}
                </p>
              </div>
              <button
                type="button"
                onClick={closeDrawer}
                className="text-gray-400 hover:text-white cursor-pointer"
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

            <form
              onSubmit={handleSubmitUser}
              className="flex-1 overflow-y-auto p-6 space-y-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
            >
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">
                  Full Name *
                </label>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  type="text"
                  placeholder="e.g. Jane Doe"
                  className="w-full bg-[#111115] border border-[#2A2B36] rounded-lg px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#635BFF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">
                  Email Address *
                </label>
                <input
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  type="email"
                  placeholder="e.g. j.doe@nexus.sys"
                  className="w-full bg-[#111115] border border-[#2A2B36] rounded-lg px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#635BFF] transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">
                    Role *
                  </label>
                  <div className="relative">
                    <select
                      value={form.role}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          role: e.target.value as UserRole,
                        }))
                      }
                      className="w-full bg-[#111115] border border-[#2A2B36] rounded-lg px-4 py-2.5 text-sm text-gray-200 appearance-none focus:outline-none focus:border-[#635BFF] transition-colors"
                    >
                      <option value="VIEWER">Viewer</option>
                      <option value="SYSTEM EDITOR">Editor</option>
                      <option value="ADMINISTRATOR">Administrator</option>
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
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">
                    Status *
                  </label>
                  <div className="relative">
                    <select
                      value={form.status}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          status: e.target.value as UserStatus,
                        }))
                      }
                      className="w-full bg-[#111115] border border-[#2A2B36] rounded-lg px-4 py-2.5 text-sm text-gray-200 appearance-none focus:outline-none focus:border-[#635BFF] transition-colors"
                    >
                      <option value="Active">Active</option>
                      <option value="Offline">Offline</option>
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
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">
                  Avatar URL (optional)
                </label>
                <input
                  value={form.avatar}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, avatar: e.target.value }))
                  }
                  type="url"
                  placeholder="https://..."
                  className="w-full bg-[#111115] border border-[#2A2B36] rounded-lg px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#635BFF] transition-colors"
                />
              </div>

              {!canSubmit && (
                <p className="text-[10px] text-gray-500">
                  Enter a name and a valid email to continue.
                </p>
              )}

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={closeDrawer}
                  className="text-sm font-medium text-white hover:text-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${canSubmit ? "bg-[#635BFF] hover:bg-[#524ae6] text-white" : "bg-[#2A2B36] text-gray-500 cursor-not-allowed"}`}
                >
                  {editUserId != null ? "Save Changes" : "Create User"}
                </button>
              </div>
            </form>
          </aside>
        </>
      )}

      {/* Actions Popover */}
      {actionMenu && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setActionMenu(null)}
          />
          <div
            className="fixed z-50 w-44 bg-[#14151C] border border-[#2A2B36] rounded-lg shadow-2xl overflow-hidden"
            style={{ top: actionMenu.top, right: actionMenu.right }}
            role="menu"
          >
            <button
              type="button"
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-200 hover:bg-[#1C1D26] transition-colors"
              role="menuitem"
              onClick={() => {
                const target = users.find((u) => u.id === actionMenu.userId);
                if (!target) {
                  setActionMenu(null);
                  return;
                }
                openEditDrawer(target);
              }}
            >
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
                />
              </svg>
              Edit
            </button>

            <button
              type="button"
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-300 hover:bg-[#1C1D26] transition-colors"
              role="menuitem"
              onClick={() => handleDeleteUser(actionMenu.userId)}
            >
              <svg
                className="w-4 h-4 text-red-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3m-4 0h14"
                />
              </svg>
              Delete
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default UserManagement;
