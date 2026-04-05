import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './menu';
import './MainPage.css';

/**
 * Global chrome: sidebar + content offset for all main app routes.
 */
function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Menu onExpandChange={setSidebarOpen} />
      <div
        className={`main-layout ${sidebarOpen ? 'main-layout--sidebar-open' : ''}`}
      >
        <main className="main-layout__content app-page">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default AppShell;
