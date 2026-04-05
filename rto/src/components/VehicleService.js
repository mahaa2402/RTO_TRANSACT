import React from 'react';
import './service.css';
import { useNavigate } from 'react-router-dom';

const cards = [
  {
    title: 'Vehicle registration',
    description: 'Register a new vehicle or update ownership details online.',
    icon: 'bx-registered',
    path: '/VehicleRegistration',
  },
  {
    title: 'Vehicle inspection',
    description: 'Schedule inspection and download certificates when ready.',
    icon: 'bx-search-alt',
    path: '/VehicleInspectionServices',
  },
  {
    title: 'Vehicle permit',
    description: 'Apply for national or state permits for commercial use.',
    icon: 'bx-file',
    path: '/VehiclePermit',
  },
  {
    title: 'Fines & payments',
    description: 'Look up challans by vehicle number and pay securely.',
    icon: 'bx-receipt',
    path: '/ViewFines',
  },
];

function VehicleServices() {
  const navigate = useNavigate();

  return (
    <section className="service-section service-section--spaced" aria-labelledby="vehicle-services-heading">
      <h2 id="vehicle-services-heading" className="service-section__title">
        Vehicle services
      </h2>
      <p className="service-section__subtitle">
        Registration, permits, inspections, and traffic fines.
      </p>
      <div className="service-grid">
        {cards.map((c) => (
          <article key={c.path} className="service-card">
            <div className="service-card__icon" aria-hidden>
              <i className={`bx ${c.icon}`} />
            </div>
            <h3 className="service-card__heading">{c.title}</h3>
            <p className="service-card__text">{c.description}</p>
            <button
              type="button"
              className="btn-primary service-card__btn"
              onClick={() => navigate(c.path)}
            >
              Open
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default VehicleServices;
