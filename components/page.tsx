import Header from './header';
import React from 'react';

function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-300 flex flex-1 relative">
      <Header />
      <main className="min-h-screen w-full px-4 sm:px-10 md:px-20">
        {children}
      </main>
    </div>
  );
}

export default Page;
