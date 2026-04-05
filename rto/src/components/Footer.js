import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__block">
          <h4 className="footer__heading">About</h4>
          <p className="footer__text">
            This portal helps citizens access Regional Transport Office services online: licences,
            vehicle registration, appointments, and fine payments.
          </p>
        </div>
        <div className="footer__block">
          <h4 className="footer__heading">Quick links</h4>
          <ul className="footer__links">
            <li>
              <Link to="/VehicleRegistration">Vehicle registration</Link>
            </li>
            <li>
              <Link to="/learnerlicense">Learner licence</Link>
            </li>
            <li>
              <Link to="/ViewFines">Fines &amp; payment</Link>
            </li>
            <li>
              <Link to="/appointments">Book appointment</Link>
            </li>
            <li>
              <Link to={{ pathname: '/', hash: 'contact' }}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer__block">
          <h4 className="footer__heading">Contact</h4>
          <p className="footer__text">Email: support@transact-rto.example.gov</p>
          <p className="footer__text">Helpline: 1800-000-0000 (10:00–17:00)</p>
          <p className="footer__text">RTO Main office, Chennai</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} TransAct — Regional Transport Office. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
