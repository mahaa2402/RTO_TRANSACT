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
import SignIn from './components/SignIn';


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
        
        {/* Route for duplicate license */}
        <Route path="/duplicatelicense" element={<DuplicateLicense />} />
        
        {/* Admin login route */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Admin dashboard route */}
        <Route path="/admin" element={<AdminDashboard />} />
        
        {/* SignIn route */}
        <Route path="/signin" element={<SignIn />} />
      
        {/* Add a fallback route to handle undefined routes */}
        <Route path="*" element={<MainPage />} /> {/* Redirects undefined routes to MainPage */}
      </Routes>
    </Router>
  );
}

export default App;
