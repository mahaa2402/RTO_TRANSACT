import React from 'react';
import './service.css';
import { useNavigate } from 'react-router-dom';

const cards = [
  {
    title: 'Learner license',
    description: 'Apply for a new learner’s licence and track your application.',
    icon: 'bx-id-card',
    path: '/learnerlicense',
  },
  {
    title: 'Driving license',
    description: 'Renew or upgrade your driving licence with guided steps.',
    icon: 'bx-car',
    path: '/driverlicense',
  },
  {
    title: 'Appointments',
    description: 'Book a slot for tests, verification, or office visits.',
    icon: 'bx-calendar-check',
    path: '/appointments',
  },
  {
    title: 'Duplicate licence',
    description: 'Request a reissue if your licence is lost or damaged.',
    icon: 'bx-copy-alt',
    path: '/duplicatelicense',
  },
];

function Service() {
  const navigate = useNavigate();

  return (
    <section className="service-section" aria-labelledby="license-services-heading">
      <h2 id="license-services-heading" className="service-section__title">
        Licence services
      </h2>
      <p className="service-section__subtitle">
        Everything related to learner and driving licences in one place.
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

export default Service;
