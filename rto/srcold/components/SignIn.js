import React, { useState } from 'react';
import axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/signup', {
        email,
        phone,
        password,
        reenterPassword,
      });

      alert(response.data);
    } catch (error) {
      console.error('Error signing up:', error.response?.data || error.message);
      alert(error.response?.data || 'Signup failed');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Phone:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <label>Re-enter Password:</label>
        <input type="password" value={reenterPassword} onChange={(e) => setReenterPassword(e.target.value)} required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignIn;
