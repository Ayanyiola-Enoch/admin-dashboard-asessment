import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import DataManagement from "./components/DataManagement";
import DataEntryPanel from "./components/DataEntryPanel";
import SystemActivity from "./components/SystemActivity";
import IssueManagement from "./components/IssueManagement";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("Issues");

  const renderContent = () => {
    switch (activeTab) {
      case "Settings":
        return <SystemActivity />;
      case "Issues":
        return <IssueManagement />;
      case "Data Management":
      default:
        return <DataManagement />;
    }
  };

  return (
    <div className="flex h-screen bg-[#111115] text-white font-sans overflow-hidden">
      <Sidebar
        isOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="flex-1 flex flex-col min-w-0 md:relative">
        <TopBar setMenuOpen={setMenuOpen} />

        <main className="flex-1 flex overflow-hidden relative px-6">
          <div className="flex-1 overflow-y-auto w-full">{renderContent()}</div>

          {panelOpen && activeTab !== "Settings" && activeTab !== "Issues" && (
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
