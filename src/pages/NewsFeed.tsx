
import React from 'react';
import { NewsItem } from '../types';

const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'New Amendments to the Law on Foreigners',
    category: 'Legislation',
    date: 'Oct 24, 2024',
    excerpt: 'The National Assembly has proposed changes regarding the simplified residency process for investors...'
  },
  {
    id: '2',
    title: 'Supreme Court Ruling on Property Rights',
    category: 'Judiciary',
    date: 'Oct 22, 2024',
    excerpt: 'A landmark decision has been reached concerning the protection of assets owned by non-residents...'
  },
  {
    id: '3',
    title: 'Visa Regime Updates: EU-Armenia Dialogue',
    category: 'International',
    date: 'Oct 15, 2024',
    excerpt: 'Progress report on the ongoing visa liberalization talks between the Republic of Armenia and the European Union...'
  }
];

const NewsFeed: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-fadeIn">
      <div className="bg-blue-600 rounded-2xl p-6 text-white mb-8 shadow-lg shadow-blue-100">
        <h2 className="text-xl font-bold mb-2">Legal Discover</h2>
        <p className="text-sm text-blue-100">
          This section is under development. Content will be managed via the LARA-AI admin panel.
        </p>
      </div>

      <div className="space-y-6">
        {MOCK_NEWS.map(news => (
          <article key={news.id} className="p-5 border border-gray-100 rounded-2xl hover:border-gray-200 transition-all bg-white group cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">
                {news.category}
              </span>
              <span className="text-[10px] text-gray-400 font-medium">{news.date}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
              {news.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {news.excerpt}
            </p>
            <div className="mt-4 flex items-center text-xs font-bold text-gray-400 group-hover:text-black transition-colors">
              READ ANALYSIS
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 p-8 border-2 border-dashed border-gray-100 rounded-3xl text-center">
        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">End of feed</p>
      </div>
    </div>
  );
};

export default NewsFeed;
