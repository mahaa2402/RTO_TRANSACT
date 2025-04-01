import React, { useState, useEffect } from "react";
import "./AdminHomePage.css";
import DrivingLicenseApplicants from "./DriverLicenseApplicants"; // Import detailed component
import IssueFine from "./IssueFine";
import FetchViolations from "./FetchViolations";
import VehicleFines from "./VehicleFines";
import AdminFinesManagement from "./AdminFinesManagement";



const AdminFeeChecking = () => {
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
        return <IssueFine />;
      case 'learnerLicense':
        return <AdminFinesManagement />;
      case 'appointments':
        return <VehicleFines />;
      case 'duplicateLicense':
            return <FetchViolations />;
      // Add other cases for different categories
      default:
        return (
          <div className="dashboard-grid">
            <div className="dashboard-card card1" onClick={() => setSelectedCategory('drivingLicense')}>
              <h2>Issue a Fine</h2>
              <p>{drivingLicenseApplicants}</p>
            </div>
            <div className="dashboard-card card2" onClick={() => setSelectedCategory('learnerLicense')}>
              <h2>Marking Fine as Paid</h2>
              <p>{onlineTestApplicants}</p>
            </div>
            <div className="dashboard-card card3" onClick={() => setSelectedCategory('appointments')}>
              <h2>View Vehicle Fines</h2>
              <p>{approvedApplications}</p>
            </div>
            <div className="dashboard-card card4" onClick={() => setSelectedCategory('duplicateLicense')}>
              <h2>View Violations</h2>
              <p>{pendingApprovals}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
    
      {renderContent()}
    </div>
  );
};

export default AdminFeeChecking;
