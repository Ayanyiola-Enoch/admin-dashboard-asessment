import type { ReactNode } from "react";

const SettingsHubCentral = () => {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-[#111115] w-full min-h-full pb-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
      {/* Header */}
      <div className="mt-4 mb-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          Hub Central
        </h1>

        {/* Sub Tabs */}
        <div className="mt-6 border-b border-[#2A2B36]">
          <div className="flex items-end gap-8">
            <button
              type="button"
              className="pb-4 text-base font-semibold text-[#A299FF] relative"
            >
              <span className="flex items-center gap-2">
                Notifications
                <span className="text-[10px] font-bold bg-[#635BFF]/20 text-[#A299FF] px-2 py-0.5 rounded-full">
                  12
                </span>
              </span>
              <span className="absolute left-0 -bottom-px h-0.5 w-full bg-[#A299FF]"></span>
            </button>
            <button
              type="button"
              className="pb-4 text-base font-semibold text-gray-400 hover:text-white transition-colors"
            >
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Notifications */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
              Today
            </div>
            <button
              type="button"
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              Mark all as read
            </button>
          </div>

          <div className="space-y-4">
            <NotificationCard
              icon={
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
                    d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.5 12l1.7 1.7L14.8 10"
                  />
                </svg>
              }
              title="New security protocol initialized: Firewall Rule #452 has been updated successfully."
              time="2 minutes ago"
              unread
            />

            <NotificationCard
              icon={
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
                    d="M4 4v6h6M20 20v-6h-6"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 10a8 8 0 00-14.9-3M4 14a8 8 0 0014.9 3"
                  />
                </svg>
              }
              title="System update scheduled for midnight: Core kernel migration to version 5.4.12."
              time="45 minutes ago"
              unread={false}
            />

            <NotificationCard
              icon={
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
                    d="M12 9v4m0 4h.01"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10.3 3.6l-8.5 14.7A2 2 0 003.5 21h17a2 2 0 001.7-2.7L13.7 3.6a2 2 0 00-3.4 0z"
                  />
                </svg>
              }
              title="Critical Latency Alert: Node-West-03 experiencing 400ms delay in packet processing."
              time="1 hour ago"
              unread
            />
          </div>

          <div className="mt-10">
            <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-4">
              This week
            </div>

            <div className="space-y-4">
              <NotificationCard
                icon={
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
                      d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8.5 11a4 4 0 100-8 4 4 0 000 8z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 8v6"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M23 11h-6"
                    />
                  </svg>
                }
                title="User 'dev_expert_99' has been granted Elevated Operator permissions."
                time="2 days ago"
                unread={false}
              />

              <NotificationCard
                icon={
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
                      d="M3 7h18"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M6 7v13h12V7"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 7V4h6v3"
                    />
                  </svg>
                }
                title="Backup sequence completed for Data Cluster Alpha. 4.2TB archived."
                time="3 days ago"
                unread={false}
              />
            </div>
          </div>
        </div>

        {/* Right: Widgets */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#14151C] border border-[#2A2B36] rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">System Health</h3>

            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>CPU Load</span>
              <span className="text-gray-200">24%</span>
            </div>
            <div className="h-2 bg-[#111115] border border-[#2A2B36] rounded-full overflow-hidden mt-3 mb-5">
              <div className="h-full w-1/4 bg-[#A299FF]"></div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>Uptime</span>
              <span className="text-gray-200 font-mono">34d 12h 04m</span>
            </div>
          </div>

          <div className="bg-[#14151C] border border-[#2A2B36] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-4 h-4 text-[#A299FF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 2l1.2 4.2L17 7.4l-3.8 1.2L12 12l-1.2-3.4L7 7.4l3.8-1.2L12 2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 13l.8 2.7L22 16.5l-2.2.8L19 20l-.8-2.7L16 16.5l2.2-.8L19 13z"
                />
              </svg>
              <h3 className="text-sm font-bold text-white">AI Log Summary</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              "The system is operating at peak efficiency. We noticed a 12%
              improvement in response times following the kernel update."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const NotificationCard = ({
  icon,
  title,
  time,
  unread,
}: {
  icon: ReactNode;
  title: string;
  time: string;
  unread?: boolean;
}) => {
  return (
    <div className="relative bg-[#14151C] border border-[#2A2B36] rounded-xl p-5 overflow-hidden">
      {unread && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#A299FF]"></div>
      )}

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-[#111115] border border-[#2A2B36] flex items-center justify-center text-gray-300 shrink-0">
          {icon}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-200 leading-relaxed">{title}</p>
          <p className="text-xs text-gray-500 mt-2">{time}</p>
        </div>

        {unread && (
          <span className="w-2 h-2 rounded-full bg-[#635BFF] mt-2"></span>
        )}
      </div>
    </div>
  );
};

export default SettingsHubCentral;
