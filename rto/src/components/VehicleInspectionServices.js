import React, { useState } from 'react';
import './VehicleInspectionServices.css';
import {useNavigate} from 'react-router-dom';

const VehicleInspectionServices = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();

  // RTO locations based on selected city
  const rtoLocations = {
    Coimbatore: [
      'Singanallur RTO  - 123 Main St.',
      'Thudiyalur RTO - 12  St.',
      'Peelamedu RTO - 6th St.',
    ],
    Chennai: [
      'Kodampaakam RTO - 12th St.',
      'Ashok nagar RTO- 10 St.',
      'Besant nagar RTO- 19  St.',
    ],
    Tiruppur: [
      'Perumanallur RTO - 7th St.',
      'Kaikatiputhur RTO - 5th St.',
      'kalangari RTO - 8th St.',
    ],
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  
  const AppointmentDetails = () => {
    navigate('/appointments');
  };

  return (
    <div className="vehicle-inspection-container">
      <h1 className="heading">Vehicle Inspection Services</h1>

      <h2>Overview of Vehicle Inspection</h2>
      <p>
        Vehicle inspections ensure compliance with safety and emissions standards. Regular inspections are vital for vehicle maintenance and road safety.
      </p>

      <h2>Types of Inspections Offered</h2>
      <div className="inspection-boxes">
        <div className="inspection-box">
          <a href="/inspections/safety">
            <img src="data:image/jpeg;base64,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" alt="Safety Inspections" className="inspection-image" />
            <h3>Safety Inspections</h3>
          </a>
          <p>Conducted to ensure vehicles meet safety standards.</p>
          <button className="btn btn-gradient btn-glow" onClick={AppointmentDetails}>More</button>
        </div>
        <div className="inspection-box">
          <a href="/inspections/emissions">
            <img src="https://static.vecteezy.com/system/resources/previews/009/973/971/non_2x/car-exhaust-co2-black-silhouette-icon-transport-vehicle-pipe-smoke-gas-pollution-emission-glyph-pictogram-car-smog-air-dioxide-symbol-climate-environment-conservation-isolated-illustration-vector.jpg" alt="Emissions Tests" className="inspection-image" />
            <h3>Emissions Tests</h3>
          </a>
          <p>Required to check the vehicle's emissions compliance.</p>
          <button className="btn btn-gradient btn-glow" onClick={AppointmentDetails}>More</button>
        </div>
        <div className="inspection-box">
          <a href="/inspections/annual">
            <img src="https://www.shutterstock.com/image-vector/audit-icon-vectormagnifying-glass-like-600nw-1409706620.jpg" alt="Annual Inspections" className="inspection-image" />
            <h3>Annual Inspections</h3>
          </a>
          <p>Routine checks to maintain vehicle registration.</p>
          <button className="btn btn-gradient btn-glow" onClick={AppointmentDetails}>More</button>
        </div>
      </div>

    

      <h2>Inspection Locations</h2>
      <p className="city">Select your city to view the RTO locations:</p>
      <select onChange={handleCityChange} value={selectedCity}>
        <option value="">--Select City--</option>
        <option value="Coimbatore">Coimbatore</option>
        <option value="Chennai">Chennai</option>
        <option value="Tiruppur">Tiruppur</option>
      </select>

      {selectedCity && (
        <div>
          <h3>RTO Locations in {selectedCity}</h3>
          <ul>
            {rtoLocations[selectedCity].map((location, index) => (
              <li key={index}>{location}</li>
            ))}
          </ul>
        </div>
      )}

      <p>Check our <a href="/locations">map</a> for detailed inspection locations and contact details.</p>
      <h2>Required Documents</h2>
      <ul>
        <li>Vehicle registration</li>
        <li>Insurance papers</li>
        <li>Previous inspection reports</li>
      </ul>

      <h2>Fees and Charges</h2>
      <p>
        Fees for vehicle inspections may vary based on vehicle type or inspection type. Please refer to our 
        <a href="/fees">fees page</a> for more information.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <div className="faq-container">
        <div className="faq-box">
          <h3>What should I do if my vehicle fails inspection?</h3>
          <p>If your vehicle fails the inspection, you will receive a notice detailing the issues. You can schedule a re-inspection after making necessary repairs.</p>
        </div>
        <div className="faq-box">
          <h3>How often do I need to get my vehicle inspected?</h3>
          <p>Vehicle inspections are typically required annually, but this may vary by state. Check local regulations for specific requirements.</p>
        </div>
        <div className="faq-box">
          <h3>What documents are required for an inspection?</h3>
          <p>You will need to provide your vehicle registration, insurance papers, and any previous inspection reports.</p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <h2>Contact Information</h2>
        <p>
          For questions about vehicle inspections, please contact us at <strong>support@rto.gov</strong>. 
          Relevant forms and scheduling tools are available on our website.
        </p>
      </footer>
    </div>
  );
};

export default VehicleInspectionServices;