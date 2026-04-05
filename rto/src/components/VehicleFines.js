import React, { useState } from 'react';
import { api } from '../api/client';

const VehicleFines = () => {
  const [fines, setFines] = useState([]); // Store fines data
  const [vehicleNumber, setVehicleNumber] = useState(''); // Input state for vehicle number
  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState(null); // For error handling

  // Fetch fines by vehicle number
  const fetchFinesByVehicle = async () => {
    setLoading(true);
    setError(null); // Reset previous error

    try {
      const response = await api.get(`/api/fines/${vehicleNumber}`);
      setFines(response.data); // Set the fines data
    } catch (err) {
      console.error('Error fetching fines:', err);
      setError(`No fines found for vehicle ${vehicleNumber}`);
    } finally {
      setLoading(false);
    }
  };

  // Handle fine status update (toggle between Paid and Unpaid)
  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'Paid' ? 'Unpaid' : 'Paid'; // Toggle status

    try {
      const response = await api.put(`/api/fines/pay/${id}`, { status: newStatus });

      // Update the fine status locally
      setFines(prevFines =>
        prevFines.map(fine =>
          fine._id === id ? { ...fine, status: response.data.status } : fine
        )
      );
    } catch (error) {
      console.error(`Error marking fine as ${newStatus}:`, error);
      setError(`Failed to mark fine as ${newStatus}`);
    }
  };

  return (
    <div>
      <h1>Search Fines by Vehicle Number</h1>
      <input
        type="text"
        placeholder="Enter Vehicle Number"
        value={vehicleNumber}
        onChange={(e) => setVehicleNumber(e.target.value)}
      />
      <button onClick={fetchFinesByVehicle}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <h2>Unpaid Fines</h2>
      {fines.filter(fine => fine.status === 'Unpaid').length > 0 ? (
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
            {fines.map(fine => (
              fine.status === 'Unpaid' && (
                <tr key={fine._id}>
                  <td>{fine.vehicleNumber}</td>
                  <td>{fine.fineAmount}</td>
                  <td>{fine.reason}</td>
                  <td>{fine.status}</td>
                  <td>{new Date(fine.dateIssued).toLocaleDateString()}</td>
                  <td>
                    <button onClick={() => handleToggleStatus(fine._id, fine.status)}>
                      Pay
                    </button>
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <p>No unpaid fines found</p>
      )}

      <h2>Paid Fines</h2>
      {fines.filter(fine => fine.status === 'Paid').length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Vehicle Number</th>
              <th>Fine Amount</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Date Issued</th>
            </tr>
          </thead>
          <tbody>
            {fines.map(fine => (
              fine.status === 'Paid' && (
                <tr key={fine._id}>
                  <td>{fine.vehicleNumber}</td>
                  <td>{fine.fineAmount}</td>
                  <td>{fine.reason}</td>
                  <td>{fine.status}</td>
                  <td>{new Date(fine.dateIssued).toLocaleDateString()}</td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <p>No paid fines found</p>
      )}
    </div>
  );
};

export default VehicleFines;
