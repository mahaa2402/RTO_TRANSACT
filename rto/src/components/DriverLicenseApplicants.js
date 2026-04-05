import React, { useEffect, useState } from "react";
import { API_BASE } from "../api/client";
import "./FetchViolations.css";

const DrivingLicenseApplicants = () => {
  const [detailedData, setDetailedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchApplicantsData = async () => {
      try {
        const response = await fetch(`${API_BASE}/drivers-license-applicants`);
        const result = await response.json();

        if (result.success) {
          setDetailedData(result.data); // Set the fetched data
        } else {
          setError(result.message); // Handle error message from server
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch applicants data.'); // Set a general error message
      } finally {
        setLoading(false); // Set loading to false after the request
      }
    };

    fetchApplicantsData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>{error}</div>; // Display any error messages
  }

  return (
    <div>
      <h2>Driving License Applicants Details</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {detailedData.map((item) => (
            <tr key={item._id}><td>{item.firstName}</td><td>{item.lastName}</td><td>{item.phoneNumber}</td><td>{item.email}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DrivingLicenseApplicants;