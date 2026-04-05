import React, { useState, useEffect } from 'react';
import { API_BASE } from '../api/client';

const VehicleForm = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [rcNumber, setRcNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailId, setEmailId] = useState('');
  const [fcDetails, setFcDetails] = useState([]);
  const [result, setResult] = useState(null);

  // Fetch FC details from the server
  useEffect(() => {
    const fetchFCDetails = async () => {
      try {
        const res = await fetch(`${API_BASE}/RTO/FCDetails`);
        const data = await res.json();
        setFcDetails(Array.isArray(data) ? data : data?.data ?? []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchFCDetails();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Find the detail that matches the form inputs
    const foundDetail = fcDetails.find(detail => 
      detail.vehicleNumber === vehicleNumber && 
      detail.rcNumber === rcNumber &&
      detail.phoneNumber === phoneNumber &&
      detail.emailId === emailId
    );

    // Check if a matching detail was found
    if (foundDetail) {
      setResult({
        fcIssuedDate: foundDetail.issuedDate,
        fcExpiryDate: foundDetail.expiryDate
      });
    } else {
      setResult(null);
      alert('No matching details found!');
    }

    // Reset form fields after submission
    setVehicleNumber('');
    setRcNumber('');
    setPhoneNumber('');
    setEmailId('');
  };

  return (
    <div>
      <h2>Vehicle Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Vehicle Number:
            <input
              type="text"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            RC Number:
            <input
              type="text"
              value={rcNumber}
              onChange={(e) => setRcNumber(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email ID:
            <input
              type="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {result && (
        <div>
          <h3>Details found</h3>
          <p>Issued: {result.fcIssuedDate}</p>
          <p>Expires: {result.fcExpiryDate}</p>
        </div>
      )}
    </div>
  );
};

export default VehicleForm;