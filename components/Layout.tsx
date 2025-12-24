
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <div className="flex-grow flex items-center justify-center p-6">
        <main className="w-full max-w-sm">
          {children}
        </main>
      </div>
      <footer className="w-full bg-blue-600 py-6 text-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] safe-bottom">
        <p className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-1">
          The Class • Library Access
        </p>
        <p className="text-white/80 text-[8px] font-medium tracking-wider">
          All rights reserved @ 2025 Rev 1.0
        </p>
      </footer>
    </div>
  );
};

export default Layout;
