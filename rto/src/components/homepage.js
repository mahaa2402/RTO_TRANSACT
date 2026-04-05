import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './homepage.css';

function Homepage() {
  const navigate = useNavigate();

  return (
    <header className="home-hero">
      <div className="home-hero__topbar">
        <div className="home-hero__brand">
          <span className="home-hero__logo">TransAct</span>
          <span className="home-hero__badge">RTO Services</span>
        </div>
        <div className="home-hero__actions">
          <button type="button" className="btn-ghost home-hero__btn" onClick={() => navigate('/UserLogin')}>
            Sign in
          </button>
          <button type="button" className="btn-primary home-hero__btn" onClick={() => navigate('/signup')}>
            Create account
          </button>
          <button type="button" className="btn-ghost home-hero__btn home-hero__btn--admin" onClick={() => navigate('/admin-login')}>
            Staff login
          </button>
        </div>
      </div>

      <div className="home-hero__content">
        <p className="home-hero__eyebrow">Regional Transport Office</p>
        <h1 className="home-hero__title">Digital services, clear and simple</h1>
        <p className="home-hero__lead">
          Apply for licenses, register vehicles, book appointments, and manage fines — in one place.
        </p>
        <div className="home-hero__cta">
          <button type="button" className="btn-primary" onClick={() => navigate('/VehicleServices')}>
            Browse services
          </button>
          <Link to="/appointments" className="home-hero__link">
            Book an appointment <i className="bx bx-right-arrow-alt" aria-hidden />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Homepage;
