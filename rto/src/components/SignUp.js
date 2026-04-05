import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../api/client';
import './SignUp.css';
import './UserLogin.css';

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
      toast.warning('Please fill in every field.');
      return;
    }

    try {
      const response = await api.post('/signup', {
        name,
        email,
        phoneNum,
        password,
      });

      const appNumber = response.data.applicationNumber;
      setApplicationNumber(appNumber);
      setError('');
      toast.success('Account created successfully.');
      setShowPopup(true);
    } catch (err) {
      const msg = err.response?.data?.error || 'Failed to sign up. Please try again.';
      setError(msg);
      toast.error(msg);
    }
  };
  
  // Define handleLoginRedirect function before it is used
  const handleLoginRedirect = () => {
    navigate('/UserLogin');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
      <h1 className="auth-card__title">Create account</h1>
      <p className="auth-card__subtitle">Register for TransAct citizen services</p>
      <form className="auth-form login-form" onSubmit={handleSubmit}>
        <div className="form-group auth-form__group">
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group auth-form__group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group auth-form__group">
          <label htmlFor="phoneNum">Phone number</label>
          <input
            type="text"
            id="phoneNum"
            placeholder="Enter your phone number"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </div>
        <div className="form-group auth-form__group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-primary auth-form__submit">Sign up</button>
        <p className="auth-form__footer">
          Already have an account? <Link to="/UserLogin">Sign in</Link>
        </p>
        <p className="auth-form__footer">
          <Link to="/">← Back to home</Link>
        </p>
      </form>

      {error && !showPopup ? <p className="auth-form__error" style={{ textAlign: 'center' }}>{error}</p> : null}

      {showPopup ? (
        <div className="signup-popup-overlay">
          <div className="signup-popup">
            <h2 className="signup-popup__title">Application number</h2>
            <p className="signup-popup__number">{applicationNumber}</p>
            <p className="signup-popup__hint">Save this reference for your records.</p>
            <button type="button" onClick={handleLoginRedirect} className="btn-primary auth-form__submit">
              Continue to sign in
            </button>
          </div>
        </div>
      ) : null}

      </div>
    </div>
  );
};

export default SignUp;
