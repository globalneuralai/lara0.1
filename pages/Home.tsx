
import React from 'react';
import SearchBar from '../components/SearchBar';

interface HomeProps {
  onSearch: (query: string) => void;
  onUploadClick: () => void;
  onVoiceClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onSearch, onUploadClick, onVoiceClick }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 animate-fadeIn">
      <div className="text-center space-y-3 mb-16">
        <h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-gray-900 mb-2">
          LARA-AI
        </h1>
        <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs">
          Legal Analysis & Response Assistant
        </p>
      </div>

      <div className="w-full max-w-2xl relative mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button 
            onClick={() => onSearch("Explain residency types in Armenia")}
            className="p-5 text-left border border-gray-100 bg-white rounded-2xl hover:border-gray-200 hover:shadow-sm transition-all group"
          >
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <p className="text-sm font-bold text-gray-800">Residency Permits</p>
            <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-tight">Status and requirements</p>
          </button>
          
          <button 
            onClick={() => onSearch("Constitution Article 24 details")}
            className="p-5 text-left border border-gray-100 bg-white rounded-2xl hover:border-gray-200 hover:shadow-sm transition-all group"
          >
            <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-black transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-sm font-bold text-gray-800">Constitutional Law</p>
            <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-tight">Article lookup & analysis</p>
          </button>
        </div>
      </div>
      
      <SearchBar 
        onSearch={onSearch} 
        onUploadClick={onUploadClick} 
        onVoiceClick={onVoiceClick} 
      />
    </div>
  );
};

export default Home;
