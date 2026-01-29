
import React from 'react';
import { Source } from '../types';

interface SourceCardProps {
  source: Source;
  index: number;
  onClick: (source: Source) => void;
}

const SourceCard: React.FC<SourceCardProps> = ({ source, index, onClick }) => {
  return (
    <div 
      onClick={() => onClick(source)}
      className="bg-white border border-gray-100 rounded-xl p-3 min-w-[180px] max-w-[220px] shadow-sm hover:shadow-md hover:border-gray-200 transition-all cursor-pointer flex flex-col space-y-2"
    >
      <div className="flex items-center space-x-2">
        <span className="bg-gray-100 text-[10px] font-bold text-gray-500 px-1.5 py-0.5 rounded-sm">
          {index + 1}
        </span>
        <h4 className="text-xs font-semibold text-gray-800 line-clamp-1">
          {source.title}
        </h4>
      </div>
      <div className="space-y-1">
        <p className="text-[10px] text-gray-400 font-mono truncate">{source.s3_key}</p>
        <p className="text-[10px] text-gray-500 bg-gray-50 px-1 rounded inline-block">ID: {source.chunk_id}</p>
      </div>
    </div>
  );
};

export default SourceCard;
