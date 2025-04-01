import React, { useState } from 'react';
import './LearnerLicense.css';

const LearnerLicense = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    aadhar: '',
    photo: null,
    idProof: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('firstName', formData.firstName);
    formDataToSubmit.append('lastName', formData.lastName);
    formDataToSubmit.append('phoneNumber', formData.phoneNumber);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('address', formData.address);
    formDataToSubmit.append('city', formData.city);
    formDataToSubmit.append('state', formData.state);
    formDataToSubmit.append('aadhar', formData.aadhar);
    formDataToSubmit.append('photo', formData.photo);
    formDataToSubmit.append('idProof', formData.idProof);

    fetch('http://localhost:3001/learners-license', {
      method: 'POST',
      body: formDataToSubmit,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Form submitted successfully!');
        } else {
          alert('Error submitting form. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error submitting form.');
      });
  };

  return (
    <div className="learner-license-container">
      <h1 className="heading">Learner's License</h1>
      <p className="paragraph">
        Applying for a learner's license is your first step towards gaining the freedom and responsibility of driving. Please fill in the form below.
      </p>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                minLength="2"
              />
            </div>

            {/* Last Name */}
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                minLength="2"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="form-row">
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
                title="Please enter a 10-digit phone number"
              />
            </div>

            {/* Email */}
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
          </div>

          {/* Address */}
          <div className="form-row">
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

            {/* City */}
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* State */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="state">State:</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Aadhar */}
            <div className="form-group">
              <label htmlFor="aadhar">Aadhar Number:</label>
              <input
                type="text"
                id="aadhar"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleInputChange}
                required
                pattern="[0-9]{12}"
                title="Please enter a 12-digit Aadhar number"
              />
            </div>
          </div>

          {/* File Upload Fields */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="photo">Upload Photo:</label>
              <input
                type="file"
                id="photo"
                name="photo"
                onChange={handleFileChange}
                required
                accept="image/*"
              />
            </div>

            <div className="form-group">
              <label htmlFor="idProof">Upload ID Proof:</label>
              <input
                type="file"
                id="idProof"
                name="idProof"
                onChange={handleFileChange}
                required
                accept="image/*,application/pdf"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-gradient btn-glow">APPLY</button>
        </form>
      </div>
    </div>
  );
};

export default LearnerLicense;
