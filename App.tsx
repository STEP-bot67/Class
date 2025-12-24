
import React from 'react';
import Layout from './components/Layout';

const DRIVE_URL = 'https://drive.google.com/drive/folders/1KaPm4pVQbrkSKKrqkTFvvQwa_39sQBao';

const App: React.FC = () => {
  const handleOpenDrive = () => {
    window.open(DRIVE_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <Layout>
      <div className="text-center space-y-8 animate-in fade-in zoom-in duration-700">
        <header className="space-y-2">
          <div className="w-20 h-20 bg-indigo-600 rounded-[28px] mx-auto flex items-center justify-center shadow-2xl shadow-indigo-200">
            <span className="text-4xl text-white font-black italic">C</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">The Class</h1>
          <p className="text-slate-500 text-sm font-medium">Your Academic Library</p>
        </header>

        <button 
          onClick={handleOpenDrive}
          className="group w-full aspect-square bg-white border border-slate-200 rounded-[40px] flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-xl hover:border-indigo-200 hover:-translate-y-1 transition-all duration-300 active:scale-95"
        >
          <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 group-hover:bg-rose-100 transition-colors">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.582.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span className="text-xl font-bold text-slate-800">Books</span>
        </button>

        <p className="text-slate-400 text-xs px-8 leading-relaxed">
          Tap the icon above to open your Google Drive subjects and textbooks.
        </p>
      </div>
    </Layout>
  );
};

export default App;
