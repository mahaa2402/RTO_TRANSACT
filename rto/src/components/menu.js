import React, { useState } from 'react';
import './menu.css';
import { Link, NavLink } from 'react-router-dom';

function AppSidebar({ onExpandChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const setOpen = (next) => {
    setIsOpen(next);
    onExpandChange?.(next);
  };

  const toggle = () => setOpen(!isOpen);
  const close = () => setOpen(false);

  const itemClass = ({ isActive }) =>
    isActive ? 'nav-row nav-row--active' : 'nav-row';

  return (
    <aside className={`app-sidebar ${isOpen ? 'app-sidebar--open' : ''}`} aria-label="Main navigation">
      <button
        type="button"
        className="app-sidebar__toggle"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'} bx-sm`} aria-hidden />
      </button>
      <div className="app-sidebar__brand">
        <span className="app-sidebar__mark">T</span>
        {isOpen && <span className="app-sidebar__title">TransAct</span>}
      </div>
      <nav className="app-sidebar__nav">
        <NavLink to="/" end className={itemClass} onClick={close}>
          <i className="bx bx-home-alt-2" aria-hidden />
          <span>Home</span>
        </NavLink>
        <NavLink to="/RtoAboutUS" className={itemClass} onClick={close}>
          <i className="bx bx-info-circle" aria-hidden />
          <span>About</span>
        </NavLink>
        <NavLink to="/VehicleServices" className={itemClass} onClick={close}>
          <i className="bx bx-grid-alt" aria-hidden />
          <span>Services</span>
        </NavLink>
        <Link to={{ pathname: '/', hash: 'contact' }} className="nav-row" onClick={close}>
          <i className="bx bx-phone" aria-hidden />
          <span>Contact</span>
        </Link>
        <NavLink to="/appointments" className={itemClass} onClick={close}>
          <i className="bx bx-calendar-check" aria-hidden />
          <span>Appointments</span>
        </NavLink>
        <NavLink to="/map" className={itemClass} onClick={close}>
          <i className="bx bx-map" aria-hidden />
          <span>Map</span>
        </NavLink>
        <NavLink to="/FcComponent" className={itemClass} onClick={close}>
          <i className="bx bx-file-blank" aria-hidden />
          <span>Fitness cert.</span>
        </NavLink>
        <NavLink to="/UserLogin" className={itemClass} onClick={close}>
          <i className="bx bx-user" aria-hidden />
          <span>Sign in</span>
        </NavLink>
        <NavLink to="/signup" className={itemClass} onClick={close}>
          <i className="bx bx-user-plus" aria-hidden />
          <span>Register</span>
        </NavLink>
        <NavLink to="/admin-login" className={(p) => `${itemClass(p)} nav-row--admin`} onClick={close}>
          <i className="bx bx-shield-quarter" aria-hidden />
          <span>Admin</span>
        </NavLink>
      </nav>
      <div className="app-sidebar__footer">
        <Link to="/ViewFines" className="nav-row nav-row--compact" onClick={close}>
          <i className="bx bx-receipt" aria-hidden />
          <span>Pay fines</span>
        </Link>
      </div>
    </aside>
  );
}

export default AppSidebar;
