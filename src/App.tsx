import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import DataManagement from './components/DataManagement';
import DataEntryPanel from './components/DataEntryPanel';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[#111115] text-white font-sans overflow-hidden">
      <Sidebar isOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <div className="flex-1 flex flex-col min-w-0 md:relative">
        <TopBar setMenuOpen={setMenuOpen} />
        
        <main className="flex-1 flex overflow-hidden relative">
          <div className="flex-1 p-4 md:p-8 overflow-y-auto w-full">
            <DataManagement />
          </div>
          
          {panelOpen && <DataEntryPanel onClose={() => setPanelOpen(false)} />}
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
