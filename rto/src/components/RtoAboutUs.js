import React from 'react';
import './RtoAboutUs.css'; // Optional: Create a separate CSS file for styling

const RtoAboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <section className="section">
        <h2>Introduction</h2>
        <p>
          The Ministry of Road Transport & Highways (MoRTH) has been facilitating computerization of over 1300+ Road Transport Offices (RTOs) across the country. RTOs issue Registration Certificates (R.C.) and Driving Licenses (D.L.), which are mandatory requirements and are valid across the country, subject to certain provisions and permissions.
        </p>
        <p>
          With wide variations in state policies and manual/system-based procedures being followed across the country, it had become necessary to define standardized processes for these documents on a pan-India level to ensure interoperability, correctness, and timely availability of information. The SCOSTA committee, set up for this purpose, recommended a uniform standardized software across the country.
        </p>
        <p>
          The Ministry thus entrusted the National Informatics Centre (N.I.C.) with the task of standardizing & deploying two software applications - <strong>VAHAN</strong> for Vehicle Registration and <strong>SARATHI</strong> for Driving Licenses - and of compiling data with respect to Vehicle Registration and Driving Licenses from all states in State and National Registers.
        </p>
      </section>

      <section className="section">
        <h2>Our Vision</h2>
        <p>
          To improve the quality of service delivery to citizens and the quality of the work environment of RTOs.
        </p>
      </section>

      <section className="section">
        <h2>Our Mission</h2>
        <p>
          To automate all Vehicle Registration and Driving License related activities in transport authorities across the country with the introduction of smart card technology to handle issues like inter-state transport vehicle movement and to create state and national level registers of vehicles/DL information.
        </p>
      </section>

      <section className="section">
        <h2>Our Objectives</h2>
        <ul>
          <li>Better services to the Transport Department as well as citizens.</li>
          <li>Quick implementation of government policies from time to time.</li>
          <li>Improved image of Government & Department.</li>
          <li>Instant access of Vehicle/DL information to other government departments.</li>
        </ul>
      </section>

      <section className="section">
        <h2>Recent Initiatives</h2>
        <p>
          The latest initiative has been to centralize both applications for ensuring higher transparency, security, and reliability of operations through a countrywide unified database. This new application provides a multi-user environment where end customers (citizens) are empowered to perform most of the RTO-related transactions (including payments) either from the comfort of their homes or from authorized third-party service providers.
        </p>
        <p>
          This approach aims to reduce the need for visiting RTOs for elementary transactions, minimize the extensive paperwork currently being done on the ground, and reduce the possibility of middlemen exploiting uneducated or uninformed citizens.
        </p>
        <p>
          Going forward, mobile-based applications would be developed, and systems utilizing Aadhar-based identification would be integrated with the Unified RTO database for higher security and ease of operations.
        </p>
      </section>
    </div>
  );
};

export default RtoAboutUs;
