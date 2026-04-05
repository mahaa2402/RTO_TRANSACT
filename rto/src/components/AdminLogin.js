import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../api/client';
import './UserLogin.css';

const AdminLogin = () => {
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!adminEmail.trim() || !emailRegex.test(adminEmail)) {
      setEmailError('Please enter a valid email address');
      toast.warning('Enter a valid admin email and password.');
      return;
    }
    setEmailError('');
    if (!adminPassword) {
      toast.warning('Enter your password.');
      return;
    }

    setSubmitting(true);
    try {
      const { data } = await api.post('/admin-login', {
        email: adminEmail,
        password: adminPassword,
      });
      if (data.success) {
        toast.success('Welcome, admin');
        navigate('/admin');
      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || err.message || 'Login failed. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-card__title">Staff login</h1>
        <p className="auth-card__subtitle">Authorized RTO personnel only</p>
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="auth-form__group">
            <label htmlFor="adminEmail">Work email</label>
            <input
              id="adminEmail"
              type="email"
              autoComplete="username"
              value={adminEmail}
              onChange={(e) => {
                setAdminEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              placeholder="admin@rto.example.gov"
            />
            {emailError ? <p className="auth-form__error">{emailError}</p> : null}
          </div>
          <div className="auth-form__group">
            <label htmlFor="adminPassword">Password</label>
            <input
              id="adminPassword"
              type="password"
              autoComplete="current-password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="btn-primary auth-form__submit" disabled={submitting}>
            {submitting ? 'Signing in…' : 'Sign in'}
          </button>
          <p className="auth-form__footer">
            <Link to="/">← Citizen portal</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
