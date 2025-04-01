import React, { useEffect, useState } from "react";

const DrivingLicenseApplicants = () => {
  const [detailedData, setDetailedData] = useState([]);

  useEffect(() => {
    // Simulate fetching detailed data for driving license applicants
    setDetailedData([
      { id: 1, name: "John Doe", status: "Approved", date: "2024-09-01" },
      { id: 2, name: "Jane Smith", status: "Pending", date: "2024-09-02" },
      // Add more dummy data
    ]);
  }, []);

  return (
    <div>
      <h2>Driving License Applicants Details</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {detailedData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DrivingLicenseApplicants;
