import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [password, setPassword] = useState('');
  const [applicationNumber, setApplicationNumber] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Frontend validation for empty fields
    if (!name || !email || !phoneNum || !password) {
      setError('All fields are required.');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3001/signup', {
        name,
        email,
        phoneNum,
        password,
      });
  
      const appNumber = response.data.applicationNumber;
      setApplicationNumber(appNumber);
      setError('');
      console.log('Your application number is:', appNumber);
      setShowPopup(true);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to sign up. Please try again.');
      console.error('Signup error:', err);
    }
  };
  
  // Define handleLoginRedirect function before it is used
  const handleLoginRedirect = () => {
    navigate('/UserLogin');
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Sign Up</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email ID:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNum">Phone Number:</label>
          <input
            type="text"
            id="phoneNum"
            placeholder="Enter your phone number"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Set Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-login">Sign Up</button>
        <p className="success-message">
          Already have an account? <Link to="/UserLogin">Login</Link>
        </p>
      </form>

      {error && (
        <div className="error-message">
          <h3>{error}</h3>
        </div>
      )}

{showPopup && (
  <div className="popup-overlay">
    <div className="popup-content">
      <h2>Your Application Number is:</h2>
      <h3>{applicationNumber}</h3>
      <button onClick={handleLoginRedirect} className="btn-login">Go to Login</button>
    </div>
  </div>
)}

    </div>
  );
};

export default SignUp;
