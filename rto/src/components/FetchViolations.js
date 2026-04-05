import React, { useEffect, useState } from 'react';
import { api } from '../api/client';
import './FetchViolations.css'; // Import the CSS stylesheet

const FetchViolations = () => {
  const [violations, setViolations] = useState([]);

  useEffect(() => {
    const fetchViolations = async () => {
      try {
        const response = await api.get('/api/violations');
        setViolations(response.data);
        console.log('Violations fetched:', response.data);
      } catch (error) {
        console.error('Error fetching violations:', error);
      }
    };

    fetchViolations();
  }, []);

  const issueFine = async (violation) => {
    try {
      const fineData = {
        vehicleNumber: violation.vehicleNumber,
        fineAmount: 1000, // Customize this amount
        reason: violation.violationType,
        status: 'Unpaid',
        dateIssued: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
      };

      const response = await api.post('/api/fines', fineData);
      console.log('Fine issued:', response.data);
      alert(`Fine issued for vehicle ${violation.vehicleNumber}`);
    } catch (error) {
      console.error('Error issuing fine:', error);
      alert('Failed to issue fine.');
    }
  };

  return (
    <div className="container">
      <h2>Violations List</h2>
      <table className="violations-table">
        <thead>
          <tr>
            <th>Vehicle Number</th>
            <th>Violation Type</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {violations.map((violation) => (
            <tr key={violation._id}>
              <td>{violation.vehicleNumber}</td>
              <td>{violation.violationType}</td>
              <td>{violation.date}</td>
              <td>
                <button 
                  className="issue-button" 
                  onClick={() => issueFine(violation)}
                >
                  Issue Fine
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchViolations;