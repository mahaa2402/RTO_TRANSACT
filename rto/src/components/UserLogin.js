import React, { useState } from 'react';
import './UserLogin.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../api/client';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      toast.warning('Please enter a valid email and password.');
      return;
    }
    setEmailError('');
    if (!password) {
      toast.warning('Please enter your password.');
      return;
    }

    setSubmitting(true);
    try {
      const { data } = await api.post('/login', { email, password });
      if (data.message === 'Login Successful!') {
        toast.success(data.message);
        navigate('/');
      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.message ||
        'Unable to reach the server. Is the API running?';
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-card__title">Sign in</h1>
        <p className="auth-card__subtitle">Access your TransAct citizen account</p>
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="auth-form__group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              placeholder="you@example.com"
            />
            {emailError ? <p className="auth-form__error">{emailError}</p> : null}
          </div>
          <div className="auth-form__group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="btn-primary auth-form__submit" disabled={submitting}>
            {submitting ? 'Signing in…' : 'Sign in'}
          </button>
          <p className="auth-form__footer">
            New here? <Link to="/signup">Create an account</Link>
          </p>
          <p className="auth-form__footer">
            <Link to="/">← Back to home</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
