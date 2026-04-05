import React, { useState } from 'react';
import './DuplicateLicense.css';
import { toast } from 'react-toastify';
import { API_BASE } from '../api/client';

const DuplicateLicense = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    address: '',
    licenseNumber: '',
    issueDate: '',
    licenseType: '',
    reason: '',
    policeReportNumber: '',
    declaration: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE}/duplicate-license`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        toast.success('Application submitted successfully!');
      } else {
        toast.error('Error submitting application. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error submitting form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h1 className="heading">Duplicate License Application</h1>
      <form onSubmit={handleSubmit}>
        <h2>Applicant Details</h2>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="address">Address:</label>
    <input
      type="text"
      id="address"
      name="address"
      value={formData.address}
      onChange={handleInputChange}
      required
    />
  </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              pattern="[0-9]{10}"
            />
          </div>
        </div>

        <h2>License Information</h2>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="licenseNumber">License Number:</label>
            <input
              type="text"
              id="licenseNumber"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="issueDate">Date of Issue:</label>
            <input
              type="date"
              id="issueDate"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="licenseType">License Type:</label>
          <select
            id="licenseType"
            name="licenseType"
            value={formData.licenseType}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select License Type</option>
            <option value="Two-Wheeler">Two-Wheeler</option>
            <option value="Four-Wheeler">Four-Wheeler</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>

        <h2>Reason for Duplicate Application</h2>
        <div className="form-group">
          <label htmlFor="reason">Reason:</label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select Reason</option>
            <option value="Lost">Lost</option>
            <option value="Stolen">Stolen</option>
            <option value="Damaged">Damaged</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit" className="btn btn-gradient" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
};

export default DuplicateLicense;