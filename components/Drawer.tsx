
import React from 'react';
import { ChatHistoryItem } from '../types';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLanguage: (lang: string) => void;
  onNavigateNews: () => void;
}

const MOCK_HISTORY: ChatHistoryItem[] = [
  { id: '1', title: 'Residency permit requirements', timestamp: '2h ago' },
  { id: '2', title: 'Constitutional court structure', timestamp: '1d ago' },
  { id: '3', title: 'Labor law for foreigners', timestamp: '3d ago' },
];

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, onSelectLanguage, onNavigateNews }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/20 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer Content */}
      <aside className={`fixed top-0 left-0 bottom-0 w-72 bg-white z-[70] shadow-2xl transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-gray-50 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">L</span>
            </div>
            <span className="font-bold text-lg tracking-tight">LARA-AI</span>
          </div>
          <button onClick={onClose} className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-8">
          {/* Discover Section */}
          <button 
            onClick={() => { onNavigateNews(); onClose(); }}
            className="w-full flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span className="text-sm font-semibold text-gray-700">News & Updates</span>
          </button>

          {/* Chat History */}
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-2">History</h4>
            <div className="space-y-1">
              {MOCK_HISTORY.map(item => (
                <button key={item.id} className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors text-left">
                  <span className="text-sm text-gray-600 truncate mr-2">{item.title}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Language Selection */}
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-2">Language</h4>
            <div className="grid grid-cols-1 gap-1">
              {['Armenian', 'English', 'Russian'].map(lang => (
                <button 
                  key={lang}
                  onClick={() => onSelectLanguage(lang)}
                  className="w-full text-left p-3 text-sm text-gray-600 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Account Info */}
        <div className="p-4 border-t border-gray-50 mt-auto">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-2xl">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate">John Doe</p>
              <p className="text-[10px] text-gray-400 truncate">john@lawyer.am</p>
            </div>
          </div>
          <button className="w-full mt-3 text-center text-[11px] font-bold text-blue-600 uppercase tracking-wider py-2">
            Manage Account (Soon)
          </button>
        </div>
      </aside>
    </>
  );
};

export default Drawer;
