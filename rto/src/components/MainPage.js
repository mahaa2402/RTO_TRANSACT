import React from 'react';
import './MainPage.css';
import Service from './service';
import Homepage from './homepage';
import VehicleService from './VehicleService';
import FAQPage from './FAQPage';
import Footer from './Footer';

function MainPage() {
  return (
    <>
      <div className="main-layout__section">
        <Homepage />
      </div>
      <div className="main-layout__section">
        <Service />
      </div>
      <div className="main-layout__section">
        <VehicleService />
      </div>
      <div className="main-layout__section">
        <FAQPage />
      </div>
      <footer id="contact" className="main-layout__section">
        <Footer />
      </footer>
    </>
  );
}

export default MainPage;
