import React, { useState, useRef } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onUploadClick?: () => void;
  onVoiceClick?: () => void;
  isResultsPage?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onUploadClick = () => {}, onVoiceClick = () => {}, isResultsPage = false }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    onSearch(q);
    setQuery("");
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 p-4 z-40 transition-all duration-300 ${isResultsPage ? "bg-white/90 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="relative flex items-center bg-white border border-gray-200 rounded-[24px] px-5 py-3 shadow-sm">
          <button type="button" onClick={onUploadClick} className="p-2 text-gray-400 hover:text-blue-500 mr-2">
            📎
          </button>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything about Armenia legal..."
            className="flex-1 bg-transparent border-none focus:ring-0 text-base py-1 px-2 outline-none text-gray-800 placeholder-gray-400"
          />

          <div className="flex items-center space-x-2 ml-2">
            <button type="button" onClick={onVoiceClick} className="p-2 text-gray-400 hover:text-black">
              🎤
            </button>
            <button type="submit" className="px-4 py-2 bg-emerald-700 text-white rounded">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
