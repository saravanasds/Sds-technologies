import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';

function Layout() {
  return (
    <div className="relative flex flex-col min-h-screen bg-black">
      <div className="relative z-20">
        <Header />
      </div>
      <main className="relative flex-grow -mt-16 z-10">
        <Outlet />
        <ScrollToTopButton/>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
