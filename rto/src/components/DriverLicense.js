import React, { useState } from 'react';
import './DriverLicense.css';

const DriverLicense = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append('firstName', formData.firstName);
    formDataObj.append('lastName', formData.lastName);
    formDataObj.append('phoneNumber', formData.phoneNumber);
    formDataObj.append('email', formData.email);
    formDataObj.append('address', formData.address);
    formDataObj.append('city', formData.city);
    formDataObj.append('state', formData.state);
    formDataObj.append('aadhar', formData.aadhar);
    formDataObj.append('photo', formData.photo);
    formDataObj.append('idProof', formData.idProof);

    try {
      const response = await fetch('http://localhost:3001/drivers-license', {
        method: 'POST',
        body: formDataObj,
      });

      const data = await response.json();
      if (data.success) {
        alert('Driver\'s license form submitted successfully!');
      } else {
        alert('Error submitting the form');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form');
    }
  };

  return (
    <div className="driver-license-container">
      <h1 className="heading">Driver's License</h1>
      <p className="paragraph">
        Applying for a driver's license is a crucial step towards gaining independence and confidence on the road. 
        Our user-friendly application process is designed to guide you through each step, from providing your personal details to submitting the required documents.
        Begin your journey today by starting your driver's license application with us.
      </p>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* Form Inputs */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required minLength="2" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required minLength="2" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required pattern="[0-9]{10}" />
              <small>Format: 1234567890</small>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="state">State:</label>
              <input type="text" id="state" name="state" value={formData.state} onChange={handleInputChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="aadhar">Aadhar Number:</label>
              <input type="text" id="aadhar" name="aadhar" value={formData.aadhar} onChange={handleInputChange} required pattern="[0-9]{12}" />
              <small>Format: 12-digit Aadhar number</small>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="photo">Upload Photo:</label>
              <input type="file" id="photo" name="photo" onChange={handleFileChange} required accept="image/*" />
            </div>

            <div className="form-group">
              <label htmlFor="idProof">Upload ID Proof:</label>
              <input type="file" id="idProof" name="idProof" onChange={handleFileChange} required accept="image/*,application/pdf" />
            </div>
          </div>

          <button type="submit" className="btn btn-gradient btn-glow">APPLY</button>
        </form>
      </div>
    </div>
  );
};

export default DriverLicense;
