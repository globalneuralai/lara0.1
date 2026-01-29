
import React, { useState, useCallback } from 'react';
import { AppState, AnswerResponse, Source } from './types';
import Home from './pages/Home';
import Results from './pages/Results';
import NewsFeed from './pages/NewsFeed';
import Drawer from './components/Drawer';
import SkeletonLoader from './components/SkeletonLoader';
import UnderDevelopmentDialog from './components/UnderDevelopmentDialog';

const App: React.FC = () => {
  const [currentAppState, setCurrentAppState] = useState<AppState>(AppState.HOME);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dialogConfig, setDialogConfig] = useState<{ isOpen: boolean; title: string; message: string }>({
    isOpen: false,
    title: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = useCallback((query: string) => {
    setIsLoading(true);
    setCurrentAppState(AppState.RESULTS);
    // Mimic processing
    setTimeout(() => {
      setIsLoading(false);
      setDialogConfig({
        isOpen: true,
        title: "Search Feature Under Development",
        message: "LARA-AI's real-time legal search engine is currently being indexed with AWS ChromaDB. This feature will be live soon."
      });
    }, 1200);
  }, []);

  const handleUploadClick = () => {
    setDialogConfig({
      isOpen: true,
      title: "Document Analysis Coming Soon",
      message: "Our AI-powered legal document review system is currently in closed beta. It will soon support PDF and image analysis for Armenian legal files."
    });
  };

  const handleVoiceClick = () => {
    setDialogConfig({
      isOpen: true,
      title: "Voice Input Under Development",
      message: "Natural language voice processing for Armenian, English, and Russian is being optimized for professional legal terminology."
    });
  };

  const handleLanguageSelect = (lang: string) => {
    setDialogConfig({
      isOpen: true,
      title: "Language Support",
      message: `Full multi-language support for ${lang} is currently under development. LARA-AI will eventually support ARM, ENG, and RUS natively.`
    });
  };

  const renderContent = () => {
    if (isLoading) return <SkeletonLoader />;

    switch (currentAppState) {
      case AppState.NEWS:
        return <NewsFeed />;
      case AppState.RESULTS:
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] px-8 text-center animate-fadeIn">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Analysis Pending</h2>
            <p className="text-sm text-gray-500 max-w-sm mb-8 leading-relaxed">
              We are finalizing the integration with the Armenian Legal Database. Results for your query will be available in the next version update.
            </p>
            <button 
              onClick={() => setCurrentAppState(AppState.HOME)}
              className="px-8 py-3 bg-black text-white rounded-2xl font-bold active:scale-95 transition-transform"
            >
              Return to Home
            </button>
          </div>
        );
      case AppState.HOME:
      default:
        return (
          <Home 
            onSearch={handleSearch} 
            onUploadClick={handleUploadClick} 
            onVoiceClick={handleVoiceClick} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A]">
      <Drawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        onSelectLanguage={handleLanguageSelect}
        onNavigateNews={() => setCurrentAppState(AppState.NEWS)}
      />

      {/* Top Bar */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md z-50 px-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="p-2 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="flex items-center space-x-2">
          <div className="px-3 py-1 bg-blue-50 rounded-full border border-blue-100 cursor-pointer hover:bg-blue-100 transition-all">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Get LARA Pro</span>
          </div>
        </div>

        <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </nav>

      <main className="pt-16 pb-24">
        {renderContent()}
      </main>

      <UnderDevelopmentDialog 
        isOpen={dialogConfig.isOpen}
        title={dialogConfig.title}
        message={dialogConfig.message}
        onClose={() => setDialogConfig(prev => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
};

export default App;
