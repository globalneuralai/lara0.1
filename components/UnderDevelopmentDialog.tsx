
import React from 'react';

interface UnderDevelopmentDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

const UnderDevelopmentDialog: React.FC<UnderDevelopmentDialogProps> = ({ isOpen, title, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl animate-scaleIn">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          {message}
        </p>
        <button 
          onClick={onClose}
          className="w-full py-3 bg-black text-white rounded-2xl font-semibold active:scale-95 transition-transform"
        >
          Acknowledge
        </button>
      </div>
    </div>
  );
};

export default UnderDevelopmentDialog;
