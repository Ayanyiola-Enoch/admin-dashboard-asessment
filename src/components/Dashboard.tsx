import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const performanceData = [
  { name: "MAY 01", api: 4000, load: 2400 },
  { name: "MAY 07", api: 3000, load: 1398 },
  { name: "MAY 14", api: 2000, load: 9800 },
  { name: "MAY 21", api: 2780, load: 3908 },
  { name: "MAY 28", api: 1890, load: 4800 },
  { name: "JUN 01", api: 2390, load: 3800 },
  { name: "JUN 07", api: 3490, load: 4300 },
];

const userDistributionData = [
  { name: "Administrators", value: 45, color: "#10B981" },
  { name: "Moderators", value: 35, color: "#F59E0B" },
  { name: "End Users", value: 20, color: "#E11D48" },
];

const activityData = [
  { name: "AUTH", requests: 40 },
  { name: "DB_IO", requests: 80 },
  { name: "CON", requests: 50 },
  { name: "API", requests: 85 },
  { name: "MAIL", requests: 45 },
  { name: "SCHED", requests: 70 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#111115] border border-gray-600 rounded-lg p-3 shadow-xl">
        <div className="text-[10px] text-gray-400 font-mono mb-2">{label}</div>
        <div className="flex items-center gap-2 mb-1">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: payload[0].color }}
          ></div>
          <span className="text-xs text-white font-medium">
            API: {(payload[0].value / 100).toFixed(1)}k reqs
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: payload[1].color }}
          ></div>
          <span className="text-xs text-white font-medium">
            Load: {(payload[1].value / 100).toFixed(1)}%
          </span>
        </div>
      </div>
    );
  }
  return null;
};

const Dashboard = () => {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto pr-4 md:pr-8 bg-[#111115] w-full min-h-full pb-8">
      {/* Header */}
      <div className="mt-4 mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase text-white mb-2"
            style={{ transform: "scaleX(1.5)", transformOrigin: "left" }}
          >
            System Intelligence
          </h1>
          <p className="text-gray-400 text-sm mt-4">
            Real-time performance metrics and predictive analytics dashboard.
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KpiCard
          title="Total Users"
          value="24.8k"
          change="+12%"
          trend="up"
          bars={[10, 15, 25, 12, 35, 45, 20]}
        />
        <KpiCard
          title="Active Sessions"
          value="1.2k"
          change="-3%"
          trend="down"
          bars={[30, 25, 40, 15, 20, 10, 15]}
        />
        <KpiCard
          title="Revenue"
          value="$84.2k"
          change="+8%"
          trend="up"
          bars={[5, 15, 10, 20, 25, 30, 40]}
        />
        <KpiCard
          title="Open Issues"
          value="142"
          change="+2%"
          trend="up"
          trendClass="text-orange-400 bg-orange-500/10"
          bars={[15, 25, 20, 30, 15, 40, 45]}
        />
      </div>

      {/* Platform Performance Chart */}
      <div className="bg-[#1C1D26] border border-[#2A2B36] rounded-xl p-5 mb-8 relative mb-8 overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 relative z-10">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              Platform Performance
            </h3>
            <p className="text-gray-400 text-xs">
              Infrastructure load vs. API request volume
            </p>
          </div>
          <div className="flex items-center bg-[#111115] border border-[#2A2B36] rounded-md p-1 mt-4 md:mt-0">
            <button className="px-3 py-1 text-xs text-gray-400 hover:text-white rounded">
              7D
            </button>
            <button className="px-3 py-1 text-xs font-semibold text-[#635BFF] bg-[#635BFF]/10 rounded">
              30D
            </button>
            <button className="px-3 py-1 text-xs text-gray-400 hover:text-white rounded">
              90D
            </button>
            <button className="px-3 py-1 text-xs text-gray-400 hover:text-white rounded">
              Custom
            </button>
          </div>
        </div>

        {/* Custom SVG Line Chart */}
        <div className="h-64 relative w-full pt-10">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={performanceData}>
              <defs>
                <linearGradient id="gradientApi" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#635BFF" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#635BFF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#6B7280",
                  fontSize: 10,
                  fontFamily: "monospace",
                }}
                dy={10}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{
                  stroke: "#2A2B36",
                  strokeWidth: 1,
                  strokeDasharray: "4 4",
                }}
              />
              <Area
                type="monotone"
                dataKey="api"
                stroke="#635BFF"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#gradientApi)"
              />
              <Area
                type="monotone"
                dataKey="load"
                stroke="#00C2FF"
                strokeWidth={2}
                strokeDasharray="6 4"
                fill="none"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* User Distribution */}
        <div className="bg-[#1C1D26] border border-[#2A2B36] rounded-xl p-6 relative">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-white">User Distribution</h3>
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div className="flex items-center justify-between gap-8 h-40 mt-4">
            {/* Donut Chart */}
            <div className="relative w-36 h-36 flex-shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={userDistributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={55}
                    stroke="none"
                    paddingAngle={0}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {userDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#111115",
                      borderColor: "#2A2B36",
                      borderRadius: "8px",
                    }}
                    itemStyle={{ color: "#fff", fontSize: "12px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-sm font-bold text-white">Role</span>
                <span className="text-[10px] text-gray-500">Split</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></div>
                  <span className="text-xs text-gray-400">Administrators</span>
                </div>
                <span className="text-sm font-bold text-white">45%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></div>
                  <span className="text-xs text-gray-400">Moderators</span>
                </div>
                <span className="text-sm font-bold text-white">35%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E11D48]"></div>
                  <span className="text-xs text-gray-400">End Users</span>
                </div>
                <span className="text-sm font-bold text-white">20%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activity by Module */}
        <div className="bg-[#1C1D26] border border-[#2A2B36] rounded-xl p-6 relative">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-white">Activity by Module</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-sm bg-[#635BFF]"></div>
              <span className="text-[10px] text-gray-500 font-mono">
                Requests
              </span>
            </div>
          </div>

          <div className="h-44 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={activityData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "#6B7280",
                    fontSize: 9,
                    fontFamily: "monospace",
                  }}
                  dy={10}
                />
                <Tooltip
                  cursor={{ fill: "#ffffff10" }}
                  contentStyle={{
                    backgroundColor: "#111115",
                    borderColor: "#2A2B36",
                    borderRadius: "8px",
                  }}
                  itemStyle={{ color: "#fff", fontSize: "12px" }}
                />
                <Bar dataKey="requests" fill="#635BFF" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Traffic Top Regions */}
      <div className="bg-[#1C1D26] border border-[#2A2B36] rounded-xl overflow-hidden">
        <div className="p-6 border-b border-[#2A2B36] flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              Traffic Top Regions
            </h3>
            <p className="text-xs text-gray-400">
              Global geographic distribution of active traffic nodes.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-[#2A2B36]">
                <th className="py-4 px-6 text-[10px] text-gray-500 font-bold tracking-wider uppercase">
                  Region / Data Center
                </th>
                <th className="py-4 px-6 text-[10px] text-gray-500 font-bold tracking-wider uppercase">
                  Active Nodes
                </th>
                <th className="py-4 px-6 text-[10px] text-gray-500 font-bold tracking-wider uppercase w-32">
                  Total Users
                </th>
                <th className="py-4 px-6 text-[10px] text-gray-500 font-bold tracking-wider uppercase">
                  Network Capacity
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2A2B36]">
              <RegionRow
                flag="🇺🇸"
                name="North America (East-1)"
                nodes="412 Nodes"
                users="12,401"
                capacity={82}
              />
              <RegionRow
                flag="🇩🇪"
                name="Europe (Frankfurt)"
                nodes="284 Nodes"
                users="8,312"
                capacity={54}
              />
              <RegionRow
                flag="🇸🇬"
                name="Asia Pacific (Singapore)"
                nodes="192 Nodes"
                users="4,120"
                capacity={32}
              />
              <RegionRow
                flag="🇧🇷"
                name="South America (Sao Paulo)"
                nodes="84 Nodes"
                users="1,142"
                capacity={15}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const KpiCard = ({ title, value, change, trend, bars, trendClass }: any) => {
  const isUp = trend === "up";
  const color = isUp
    ? "bg-emerald-500/20 text-emerald-500"
    : "bg-red-500/20 text-red-500";

  return (
    <div className="bg-[#1C1D26] border border-[#2A2B36] rounded-xl p-5 flex flex-col justify-between h-36 relative overflow-hidden group">
      <div className="flex justify-between items-start mb-2 relative z-10">
        <span className="text-xs text-gray-400 font-medium">{title}</span>
        <span
          className={`text-[10px] font-bold px-2 py-0.5 rounded ${trendClass || color}`}
        >
          {change}
        </span>
      </div>
      <div
        className="text-3xl font-extrabold tracking-tighter text-white relative z-10"
        style={{ transform: "scaleX(1.2)", transformOrigin: "left" }}
      >
        {value}
      </div>
      <div className="absolute inset-x-5 bottom-0 h-10 flex items-end gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
        {bars.map((h: number, i: number) => (
          <div
            key={i}
            className="flex-1 bg-[#635BFF] transition-all rounded-t-sm"
            style={{
              height: `${h}%`,
              opacity: ((i + 1) / bars.length) * 0.8 + 0.2,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

const RegionRow = ({ flag, name, nodes, users, capacity }: any) => (
  <tr className="hover:bg-white/5 transition-colors">
    <td className="py-4 px-6 flex items-center gap-3">
      <span className="text-xl">{flag}</span>
      <span className="text-sm font-semibold text-white">{name}</span>
    </td>
    <td className="py-4 px-6 text-xs text-gray-400 font-mono">{nodes}</td>
    <td className="py-4 px-6 text-sm font-bold text-white">{users}</td>
    <td className="py-4 px-6 w-1/3">
      <div className="flex items-center gap-3">
        <div className="w-full bg-[#111115] rounded-full h-1.5 overflow-hidden">
          <div
            className="bg-[#635BFF] h-1.5 rounded-full"
            style={{ width: `${capacity}%` }}
          ></div>
        </div>
        <span className="text-xs text-gray-500 font-mono">{capacity}%</span>
      </div>
    </td>
  </tr>
);

export default Dashboard;
