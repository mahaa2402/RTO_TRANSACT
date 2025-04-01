import React, { useState, useEffect } from "react";
import "./AdminHomePage.css";
import DrivingLicenseApplicants from "./DriverLicenseApplicants"; // Import detailed component

const AdminDashboard = () => {
  const [drivingLicenseApplicants, setDrivingLicenseApplicants] = useState(0);
  const [onlineTestApplicants, setOnlineTestApplicants] = useState(0);
  const [approvedApplications, setApprovedApplications] = useState(0);
  const [pendingApprovals, setPendingApprovals] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setDrivingLicenseApplicants(120);
    setOnlineTestApplicants(80);
    setApprovedApplications(60);
    setPendingApprovals(20);
  }, []);

  const renderContent = () => {
    switch (selectedCategory) {
      case 'drivingLicense':
        return <DrivingLicenseApplicants />;
      // Add other cases for different categories
      default:
        return (
          <div className="dashboard-grid">
            <div className="dashboard-card card1" onClick={() => setSelectedCategory('drivingLicense')}>
              <h2>Driving License Applicants</h2>
              <p>{drivingLicenseApplicants}</p>
            </div>
            <div className="dashboard-card card2" onClick={() => setSelectedCategory('learnerLicense')}>
              <h2>Learners License Applicants</h2>
              <p>{onlineTestApplicants}</p>
            </div>
            <div className="dashboard-card card3" onClick={() => setSelectedCategory('appointments')}>
              <h2>No of Appointments</h2>
              <p>{approvedApplications}</p>
            </div>
            <div className="dashboard-card card4" onClick={() => setSelectedCategory('duplicateLicense')}>
              <h2>Duplicate License Applications</h2>
              <p>{pendingApprovals}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      {renderContent()}
    </div>
  );
};

export default AdminDashboard;
