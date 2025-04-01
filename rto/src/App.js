import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import LearnerLicense from './components/LearnerLicense';
import DriverLicense from './components/DriverLicense';
import Appointments from './components/Appointment';
import DuplicateLicense from './components/Duplicatelicense'; // Corrected casing for consistency
import AdminLogin from './components/AdminLogin'; // Corrected AdminLogin import
import AdminDashboard from './components/AdminHomePage'; 
import LoginPage from "./components/UserLogin";
// Corrected AdminDashboard import
import ScrollToTop from './components/ScrollToTop'; 
import RtoAboutUs from './components/RtoAboutUs'; 
import SignUp from './components/SignUp';
import Map from './components/Map';
import VehicleRegistration from './components/vehicleRegistration';
import VehiclePermit from './components/VehiclePermit';
import AdminFeeChecking from './components/AdminFeeChecking';
import VehicleInspectionServices from './components/VehicleInspectionServices';
import VehicleFines from './components/ViewFines';
import ViewFines from './components/ViewFines';import VehicleServices from './components/VehicleService'
import PaymentPage from './components/PaymentPage';
import FcComponent from './components/FcComponent';
import FetchViolations from './components/FetchViolations';
import Footer from './components/Footer';
import AdminHomePage from './components/AdminHomePage';


function App() {
  return (
    <Router> <ScrollToTop />
      <Routes>
        {/* Default route, renders the MainPage when you visit the root ("/") */}
        <Route path="/" element={<MainPage />} />
        <Route path="/UserLogin" element={<LoginPage />} />
        {/* Route for learner license, "/learnerlicense" */}
        <Route path="/learnerlicense" element={<LearnerLicense />} />
        <Route path="/RtoAboutUS" element={<RtoAboutUs />} />

        {/* Route for driver license, "/driverlicense" */}
        <Route path="/driverlicense" element={<DriverLicense />} />
        
        {/* Route for appointments, "/appointments" */}
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/PaymentPage" element={<PaymentPage />} />
        
        {/* Route for duplicate license */}
        <Route path="/duplicatelicense" element={<DuplicateLicense />} />

        <Route path="/VehicleRegistration" element={<VehicleRegistration />} />
        <Route path="/VehiclePermit" element={<VehiclePermit />} />
        <Route path="/VehicleInspectionServices" element={<VehicleInspectionServices />} />
        <Route path="/VehicleFines" element={<VehicleFines />} />
        <Route path="/ViewFines" element={<ViewFines />} />
        <Route path="/VehicleServices" element={<VehicleServices />} />
        <Route path="/FcComponent" element={<FcComponent />} />
        <Route path="/fetchviolations" element={<FetchViolations />} />
        <Route path="/footer" element={<Footer />} />
       
        



        {/* Admin login route */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/adminhomepage" element={<AdminHomePage />} />

        {/* Admin dashboard route */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/adminFeeChecking" element={<AdminFeeChecking />} />

        <Route path="/signup" element={<SignUp />} />
        
        <Route path="/map" element={<Map />} />
        {/* Add a fallback route to handle undefined routes */}
        <Route path="*" element={<MainPage />} /> {/* Redirects undefined routes to MainPage */}
      </Routes>
    </Router>
  );
}

export default App;
