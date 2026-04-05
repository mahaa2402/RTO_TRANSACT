import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../api/client';
import './IssueFine.css';
import { useNavigate } from 'react-router-dom';

const IssueFine = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [fineAmount, setFineAmount] = useState('');
  const [reason, setReason] = useState('');
  const navigate = useNavigate(); 

  
  const issueFine = (fineData) => {
    console.log(' Sending fine data:', fineData);
    
    api
      .post('/api/fines', fineData)
      .then((response) => {
        toast.success(response.data.message || 'Fine recorded');
        setVehicleNumber('');
        setFineAmount('');
        setReason('');
      })
      .catch((error) => {
        const msg = error.response?.data?.message || error.message || 'Failed to issue fine';
        toast.error(msg);
      });
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(' Form submitted');
  
    issueFine({
      vehicleNumber,
      fineAmount: parseFloat(fineAmount),
      reason,
      dateIssued: new Date().toISOString(),
    });
  };
  


 
  const handleBack = () => {
    navigate('/adminhomepage'); // Navigate to Admin Dashboard
  };
  

  return (
    <div className="issue-fine-container"> {/* Apply the CSS class here */}
      <h2>Issue a Fine</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Vehicle Number"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Fine Amount"
          value={fineAmount}
          onChange={(e) => setFineAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />
        <button type="submit">Issue Fine</button>
        <button type="button" onClick={handleBack} className="back-button">
          Back
        </button>
       
      </form>
    </div>
  );
};

export default IssueFine;