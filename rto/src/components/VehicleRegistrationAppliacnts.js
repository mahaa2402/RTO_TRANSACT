import React, { useEffect, useState } from "react";
import { API_BASE } from "../api/client";

const VehicleOwners = () => {
  const [vehicleData, setVehicleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVehicleOwnersData = async () => {
      try {
        const response = await fetch(`${API_BASE}/vehicle-owners`);
        const result = await response.json();

        if (result.success) {
          setVehicleData(result.data); // Set the fetched data
        } else {
          setError(result.message); // Handle error message from server
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch vehicle owners data.'); // Set a general error message
      } finally {
        setLoading(false); // Set loading to false after the request
      }
    };

    fetchVehicleOwnersData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>{error}</div>; // Display any error messages
  }

  return (
    <div>
      <h2>Vehicle Owners Details</h2>
      <table>
        <thead>
          <tr>
            <th>Owner Name</th>
            <th>Owner Contact</th>
            <th>Owner Aadhar</th>
            <th>Vehicle ID Number</th>
          </tr>
        </thead>
        <tbody>
          {vehicleData.map((item) => (
            <tr key={item._id}><td>{item.ownerName}</td><td>{item.ownerContact}</td><td>{item.ownerAadhar}</td><td>{item.vehicleIDNumber}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleOwners;