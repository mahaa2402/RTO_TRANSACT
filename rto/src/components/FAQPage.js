// src/pages/FAQPage.js
import React from 'react';
import './FAQPage.css'; // Styling

function FAQPage() {
  return (
    
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions (FAQ)</h1>
      <ul className="faq-list">
        <li className="faq-item">
          <h3>How can I apply for a duplicate license?</h3>
          <p>You can apply online through the RTO portal or visit the nearest RTO office.</p>
        </li>
        <li className="faq-item">
          <h3>What documents are required?</h3>
          <p>Submit an affidavit, FIR copy (if lost), and application form with fees.</p>
        </li>
        <li className="faq-item">
          <h3>How long does it take to get a duplicate license?</h3>
          <p>It usually takes 7-10 working days for processing and delivery.</p>
        </li>
        <li className="faq-item">
          <h3>Can I check the status of my application online?</h3>
          <p>Yes, the status can be tracked on the official RTO portal.</p>
        </li>
      </ul><br></br>
     
    </div>
  );
}


  

export default FAQPage;
