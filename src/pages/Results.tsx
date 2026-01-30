
import React from 'react';
import { AnswerResponse, Source } from '../types';
import SourceCard from '../components/SourceCard';
import SearchBar from '../components/SearchBar';

interface ResultsProps {
  data: AnswerResponse;
  onSearch: (query: string) => void;
  onSelectSource: (source: Source) => void;
  onBack: () => void;
}

const Results: React.FC<ResultsProps> = ({ data, onSearch, onSelectSource, onBack }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-6 pb-32 animate-fadeIn">
      {/* Header Info */}
      <div className="mb-8 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="text-gray-400 hover:text-black transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Research Results</span>
        <div className="w-6"></div>
      </div>

      {/* User Question */}
      <div className="mb-10">
        <p className="text-sm text-gray-400 mb-2">Query</p>
        <h2 className="text-xl font-medium text-gray-800 leading-tight">
          {data.question}
        </h2>
      </div>

      <hr className="border-gray-100 mb-10" />

      {/* Main Answer */}
      <div className="mb-12">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <span className="text-xs font-bold uppercase tracking-wider text-gray-900">Answer</span>
        </div>
        <div className="prose prose-sm sm:prose-base max-w-none text-gray-800 leading-relaxed space-y-4">
          {data.answer.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Sources */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Sources</span>
          </div>
          <span className="text-[10px] text-gray-400">{data.sources.length} items found</span>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {data.sources.map((source, index) => (
            <SourceCard 
              key={index} 
              source={source} 
              index={index} 
              onClick={onSelectSource}
            />
          ))}
        </div>
      </div>

      <hr className="border-gray-100 mb-10" />

      {/* Follow-up Questions */}
      <div className="mb-12">
        <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Related</p>
        <div className="flex flex-col space-y-3">
          {data.followups.map((q, i) => (
            <button
              key={i}
              onClick={() => onSearch(q)}
              className="flex items-center justify-between p-3 text-left bg-gray-50 rounded-xl hover:bg-gray-100 transition-all group"
            >
              <span className="text-sm text-gray-600 group-hover:text-black">{q}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      <SearchBar onSearch={onSearch} isResultsPage={true} />
    </div>
  );
};

export default Results;
