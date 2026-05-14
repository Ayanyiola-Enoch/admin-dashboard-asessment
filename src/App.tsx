import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import DataManagement from "./components/DataManagement";
import DataEntryPanel from "./components/DataEntryPanel";
import SystemActivity from "./components/SystemActivity";
import IssueManagement from "./components/IssueManagement";
import Dashboard from "./components/Dashboard";
import UserManagement from "./components/UserManagement";
import SettingsHubCentral from "./components/SettingsHubCentral";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleSetActiveTab = (tab: string) => {
    setActiveTab(tab);
    setPanelOpen(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Users":
        return <UserManagement />;
      case "Settings":
        return <SettingsHubCentral />;
      case "Activity":
        return <SystemActivity />;
      case "Issues":
        return <IssueManagement />;
      case "Data Management":
      default:
        return <DataManagement onNewEntry={() => setPanelOpen(true)} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#111115] text-white font-sans overflow-hidden">
      <Sidebar
        isOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeTab={activeTab}
        setActiveTab={handleSetActiveTab}
      />

      <div className="flex-1 flex flex-col min-w-0 md:relative">
        <TopBar setMenuOpen={setMenuOpen} />

        <main className="flex-1 flex overflow-hidden relative px-6 mt-2">
          <div className="flex-1 overflow-y-auto w-full">{renderContent()}</div>

          {panelOpen && activeTab === "Data Management" && (
            <DataEntryPanel onClose={() => setPanelOpen(false)} />
          )}
        </main>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
