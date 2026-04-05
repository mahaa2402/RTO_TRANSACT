import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AppShell from './components/AppShell';
import ScrollToTop from './components/ScrollToTop';
import MainPage from './components/MainPage';
import LearnerLicense from './components/LearnerLicense';
import DriverLicense from './components/DriverLicense';
import Appointments from './components/Appointment';
import DuplicateLicense from './components/Duplicatelicense';
import AdminLogin from './components/AdminLogin';
import AdminHomePage from './components/AdminHomePage';
import LoginPage from './components/UserLogin';
import RtoAboutUs from './components/RtoAboutUs';
import SignUp from './components/SignUp';
import Map from './components/Map';
import VehicleRegistration from './components/vehicleRegistration';
import VehiclePermit from './components/VehiclePermit';
import AdminFeeChecking from './components/AdminFeeChecking';
import VehicleInspectionServices from './components/VehicleInspectionServices';
import ViewFines from './components/ViewFines';
import VehicleServices from './components/VehicleService';
import PaymentPage from './components/PaymentPage';
import FcComponent from './components/FcComponent';
import FetchViolations from './components/FetchViolations';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ToastContainer
        position="top-right"
        theme="dark"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={4}
      />
      <Routes>
        <Route path="/UserLogin" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route element={<AppShell />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/learnerlicense" element={<LearnerLicense />} />
          <Route path="/RtoAboutUS" element={<RtoAboutUs />} />
          <Route path="/driverlicense" element={<DriverLicense />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/PaymentPage" element={<PaymentPage />} />
          <Route path="/duplicatelicense" element={<DuplicateLicense />} />
          <Route path="/VehicleRegistration" element={<VehicleRegistration />} />
          <Route path="/VehiclePermit" element={<VehiclePermit />} />
          <Route path="/VehicleInspectionServices" element={<VehicleInspectionServices />} />
          <Route path="/VehicleFines" element={<ViewFines />} />
          <Route path="/ViewFines" element={<ViewFines />} />
          <Route path="/VehicleServices" element={<VehicleServices />} />
          <Route path="/FcComponent" element={<FcComponent />} />
          <Route path="/fetchviolations" element={<FetchViolations />} />
          <Route path="/adminhomepage" element={<AdminHomePage />} />
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/adminFeeChecking" element={<AdminFeeChecking />} />
          <Route path="/map" element={<Map />} />
        </Route>

        <Route path="/footer" element={<Navigate to={{ pathname: '/', hash: 'contact' }} replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
