
import React from 'react';

const SkeletonLoader: React.FC = () => {
  return (
    <div className="animate-pulse space-y-6 px-4 py-8">
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
      <div className="space-y-4">
        <div className="h-8 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
      <div className="pt-8">
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="flex gap-4 overflow-x-hidden">
          <div className="h-24 bg-gray-200 rounded-xl min-w-[160px] flex-shrink-0"></div>
          <div className="h-24 bg-gray-200 rounded-xl min-w-[160px] flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
