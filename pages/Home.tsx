import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { askLara } from '../services/api';

interface HomeProps {
  onSearch: (query: string) => void;
  onUploadClick: () => void;
  onVoiceClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onSearch, onUploadClick, onVoiceClick }) => {
  const [awsQuestion, setAwsQuestion] = useState('Hello LARA');
  const [awsAnswer, setAwsAnswer] = useState<string | null>(null);
  const [loadingAws, setLoadingAws] = useState(false);
  const [awsError, setAwsError] = useState<string | null>(null);

  const handleAwsTest = async () => {
    setLoadingAws(true);
    setAwsError(null);
    setAwsAnswer(null);
    try {
      const res = await askLara(awsQuestion || 'Hello LARA');
      setAwsAnswer(res.message ?? JSON.stringify(res));
    } catch (err: any) {
      setAwsError(err.message || 'Unknown error');
    } finally {
      setLoadingAws(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 animate-fadeIn">
      <div className="text-center space-y-3 mb-16">
        <h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-gray-900 mb-2">LARA-AI</h1>
        <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs">Legal Analysis & Response Assistant</p>
      </div>

      <div className="w-full max-w-2xl relative mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => onSearch('Explain residency types in Armenia')}
            className="p-5 text-left border border-gray-100 bg-white rounded-2xl hover:border-gray-200 hover:shadow-sm transition-all group"
          >
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
              {/* icon */}
            </div>
            <p className="text-sm font-bold text-gray-800">Residency Permits</p>
            <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-tight">Status and requirements</p>
          </button>

          <button
            onClick={() => onSearch('Constitution Article 24 details')}
            className="p-5 text-left border border-gray-100 bg-white rounded-2xl hover:border-gray-200 hover:shadow-sm transition-all group"
          >
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
              {/* icon */}
            </div>
            <p className="text-sm font-bold text-gray-800">Constitutional Law</p>
            <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-tight">Article lookup & analysis</p>
          </button>
        </div>

        {/* Existing Search bar */}
        <div className="mt-6">
          <SearchBar onSearch={onSearch} onUploadClick={onUploadClick} onVoiceClick={onVoiceClick} />
        </div>

        {/* AWS Test Card */}
        <div className="mt-8 p-4 border rounded-lg bg-white shadow-sm">
          <h3 className="font-bold mb-2">AWS Connection Test</h3>
          <div className="flex gap-2">
            <input
              value={awsQuestion}
              onChange={(e) => setAwsQuestion(e.target.value)}
              className="flex-1 border p-2 rounded"
            />
            <button
              onClick={handleAwsTest}
              disabled={loadingAws}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {loadingAws ? 'Testing...' : 'Test AWS'}
            </button>
          </div>

          {awsError && <p className="text-red-500 mt-3">Error: {awsError}</p>}
          {awsAnswer && <div className="mt-3 p-3 bg-gray-50 border rounded">{awsAnswer}</div>}
        </div>
      </div>
    </div>
  );
};

export default Home;
