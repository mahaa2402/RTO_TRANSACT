import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminEmailError, setAdminEmailError] = useState('');
  const [adminSuccessMessage, setAdminSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleAdminEmailChange = (e) => {
    setAdminEmail(e.target.value);
    validateAdminEmail(e.target.value);
  };

  const validateAdminEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setAdminEmailError('Please enter a valid email address');
    } else {
      setAdminEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (adminEmailError === '' && adminEmail !== '' && adminPassword !== '') {
      try {
        const response = await fetch('http://localhost:3001/admin-login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: adminEmail, password: adminPassword }),
        });

        const result = await response.json();

        if (result.success) {
          setAdminSuccessMessage('Admin Login Successful!');
          navigate('/admin'); // Navigate to admin dashboard
        } else {
          setAdminSuccessMessage('');
          alert(result.message); // Alert the error message from server
        }
      } catch (error) {
        console.error('Error during admin login:', error);
        alert('Login failed. Please try again.');
      }
    } else {
      setAdminSuccessMessage('');
      alert('Please fill out the form correctly.');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Admin Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="adminEmail">Admin Email ID:</label>
          <input
            type="text"
            id="adminEmail"
            value={adminEmail}
            onChange={handleAdminEmailChange}
            placeholder="Enter your admin email"
          />
          {adminEmailError && <p className="error-message">{adminEmailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="adminPassword">Password:</label>
          <input
            type="password"
            id="adminPassword"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn-login">Login</button>
        {adminSuccessMessage && <p className="success-message">{adminSuccessMessage}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;