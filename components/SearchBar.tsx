
import React, { useState, useRef } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onUploadClick: () => void;
  onVoiceClick: () => void;
  isResultsPage?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onUploadClick, onVoiceClick, isResultsPage = false }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery('');
    }
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 p-4 z-40 transition-all duration-300 ${isResultsPage ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-3xl mx-auto">
        <form 
          onSubmit={handleSubmit}
          className="relative flex items-center bg-white border border-gray-200 rounded-[24px] px-5 py-3 perplexity-shadow focus-within:ring-4 focus-within:ring-black/5 focus-within:border-gray-300 transition-all"
        >
          <button 
            type="button" 
            onClick={onUploadClick}
            className="p-2 text-gray-400 hover:text-blue-500 transition-colors mr-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          </button>
          
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything about Armenia legal..."
            className="flex-1 bg-transparent border-none focus:ring-0 text-base py-1 px-1 outline-none text-gray-800 placeholder-gray-400 font-medium"
          />

          <div className="flex items-center space-x-2 ml-2">
             <button 
              type="button" 
              onClick={onVoiceClick}
              className="p-2 text-gray-400 hover:text-black transition-colors"
             >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <button 
              type="submit" 
              className={`p-2 rounded-xl transition-all ${query.trim() ? 'bg-black text-white scale-110' : 'bg-gray-100 text-gray-300'}`}
              disabled={!query.trim()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
