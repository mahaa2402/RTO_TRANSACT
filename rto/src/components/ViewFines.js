import React, { useState } from 'react';
import { api } from '../api/client';
import './VehicleFines.css';

const ViewFines = () => {
  const [fines, setFines] = useState([]);
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFinesByVehicle = async () => {
    if (!vehicleNumber.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const response = await api.get(`/api/fines/${vehicleNumber}`);
      const finesData = response.data || [];
      setFines(finesData);
    } catch (err) {
      console.error('Error fetching fines:', err);
      setError(`No fines found for vehicle ${vehicleNumber}`);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (vehicleNum, currentStatus) => {
    const newStatus = currentStatus === 'Paid' ? 'Unpaid' : 'Paid';

    try {
      // API request to update the fine status using vehicleNumber
      await api.put(`/api/fines/pay/${vehicleNum}`, { status: newStatus });

      // Update the status in the local state
      setFines(prevFines =>
        prevFines.map(fine =>
          fine.vehicleNumber === vehicleNum ? { ...fine, status: newStatus } : fine
        )
      );
    } catch (error) {
      console.error(`Error marking fine as ${newStatus}:`, error);
      setError(`Failed to mark fine as ${newStatus}`);
    }
  };

  const unpaidFines = fines.filter(fine => fine.status === 'Unpaid');
  const paidFines = fines.filter(fine => fine.status === 'Paid');

  return (
    <div className="vehicle-fines-container">
      <h1>Search Fines by Vehicle Number</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Vehicle Number"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
        />
        <button onClick={fetchFinesByVehicle}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <h2>Unpaid Fines</h2>
      {unpaidFines.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Vehicle Number</th>
              <th>Fine Amount</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Date Issued</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {unpaidFines.map(fine => (
              <tr key={fine.vehicleNumber}>
                <td>{fine.vehicleNumber}</td>
                <td>{fine.fineAmount}</td>
                <td>{fine.reason}</td>
                <td>{fine.status}</td>
                <td>{new Date(fine.dateIssued).toLocaleDateString()}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleToggleStatus(fine.vehicleNumber, fine.status)}
                  >
                    Mark paid
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <p>No unpaid fines found</p>
      )}

      <h2>Paid Fines</h2>
      {paidFines.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Vehicle Number</th>
              <th>Fine Amount</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Date Issued</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paidFines.map(fine => (
              <tr key={fine.vehicleNumber}>
                <td>{fine.vehicleNumber}</td>
                <td>{fine.fineAmount}</td>
                <td>{fine.reason}</td>
                <td>{fine.status}</td>
                <td>{new Date(fine.dateIssued).toLocaleDateString()}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleToggleStatus(fine.vehicleNumber, fine.status)}
                  >
                    Mark unpaid
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <p>No paid fines found</p>
      )}
    </div>
  );
};

export default ViewFines;
