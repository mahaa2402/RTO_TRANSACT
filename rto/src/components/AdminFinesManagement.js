import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminFinesManagement = () => {
  const [fines, setFines] = useState([]); // To store the fines data
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling

  useEffect(() => {
    // Fetch fines from the server when the component mounts
    const fetchFines = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/fines');
        setFines(response.data); // Set the fines data in state
        setLoading(false); // Loading done
      } catch (err) {
        setError(err.message); // Capture error if fetch fails
        setLoading(false);
      }
    };

    fetchFines();
  }, []); // Empty dependency array to run only once

  const handleToggleStatus = async (vehicleNumber, currentStatus) => {
    const newStatus = currentStatus === 'Paid' ? 'Unpaid' : 'Paid'; // Toggle status
  
    try {
      const response = await axios.put(
        `http://localhost:3001/api/fines/pay/${vehicleNumber}`,
        { status: newStatus } // Send status in the request body
      );
  
      if (response.status === 200) {
        // Update the local state to reflect the new status
        setFines((prevFines) =>
          prevFines.map((fine) =>
            fine.vehicleNumber === vehicleNumber ? { ...fine, status: newStatus } : fine
          )
        );
        console.log(`Fine marked as ${newStatus}`);
      } else {
        console.error('Unexpected response:', response);
        setError(`Failed to mark fine as ${newStatus}`);
      }
    } catch (error) {
      console.error(`Error marking fine as ${newStatus}:`, error);
      setError(`Failed to mark fine as ${newStatus}`);
    }
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Fines Information</h1>
      {fines.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Vehicle Number</th>
              <th>Fine Amount</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Date Issued</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fines.map((fine) => (
              <tr key={fine.vehicleNumber}>
                <td>{fine.vehicleNumber}</td>
                <td>{fine.fineAmount}</td>
                <td>{fine.reason}</td>
                <td>{fine.status}</td>
                <td>{new Date(fine.dateIssued).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => handleToggleStatus(fine.vehicleNumber, fine.status)}>
                    {fine.status === 'Paid' ? 'Mark as Unpaid' : 'Mark as Paid'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No fines found</p>
      )}
    </div>
  );
};

export default AdminFinesManagement;
