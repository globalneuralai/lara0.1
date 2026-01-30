
import React from 'react';
import { Source } from '../types';

interface SourceDetailProps {
  source: Source;
  onBack: () => void;
}

const SourceDetail: React.FC<SourceDetailProps> = ({ source, onBack }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-fadeIn">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-400 hover:text-black transition-colors mb-8"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="text-sm">Back to results</span>
      </button>

      <div className="space-y-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-gray-900">{source.title}</h1>
          <p className="text-xs text-blue-600 font-mono tracking-wider">Source Metadata</p>
        </div>

        <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
          <div>
            <p className="text-[10px] uppercase text-gray-400 font-bold mb-1">S3 Key</p>
            <p className="text-xs font-mono text-gray-700 break-all">{source.s3_key}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase text-gray-400 font-bold mb-1">Chunk ID</p>
            <p className="text-xs font-mono text-gray-700">{source.chunk_id}</p>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Extracted Segment</h3>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm text-gray-800 leading-relaxed italic">
            "{source.text_content}"
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100">
          <p className="text-xs text-gray-400 leading-relaxed">
            Note: This text is a retrieved chunk from our verified legal database of Armenia. 
            Data retrieved via Lambda and ChromaDB integration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SourceDetail;
