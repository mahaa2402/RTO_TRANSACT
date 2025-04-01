// Footer.js
import React from 'react';
import './Footer.css'; // Optional: CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* About Section */}
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>The Regional Transport Office (RTO) is responsible for implementing the Motor Vehicle Act and ensuring the efficient operation of the transport system in our region.</p>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="/vehicle-registration">Vehicle Registration</a></li>
                        <li><a href="/license-services">License Services</a></li>
                        <li><a href="/fine-management">Fine Management</a></li>
                        <li><a href="/appointment-booking">Book Appointment</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact Information Section */}
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: info@rto.gov</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Address: RTO MAIN, Chennai</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Regional Transport Office. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
