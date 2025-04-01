import React from "react";
import { useNavigate } from "react-router-dom";
import './homepage.css';
import Sidebar from './menu'; 

function Homepage() {
  const navigate = useNavigate(); // Hook to navigate to other routes

  const handleLogin = () => {
    navigate('/UserLogin'); // Redirects to the login page route
  };


  const handleAdmin = () => {
    navigate('/admin-login'); // Navigates to the Admin Dashboard
  };

  return (
    <div className="App">
       <Sidebar /> 
      <nav className="navbar">
        <div className="navbar-brand"></div>
        <div className="navbar-buttons">
          <button className="btn btn-gradient btn-glow" onClick={handleLogin}>Login</button>
          <button className="btn btn-gradient btn-glow btn-admin" onClick={handleAdmin}>Admin</button>
        </div>
      </nav>
      <div className="centered-container">
        <h1 className="title">TransAct</h1> 
        <h3 className="slogan">Easy Access, Every Mile</h3>
        <div className="centered-text">
          <p>REGIONAL TRANSPORT OFFICE</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
