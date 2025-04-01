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
    alert('Form submitted successfully!');
  };

  return (
    <div className="learner-license-container">
      <h1 className="heading">Learner's License</h1>
      <p className="paragraph">
        Applying for a learner's license is your first step towards gaining the freedom and responsibility of driving. 
        Our streamlined application process is designed to be user-friendly, ensuring that you can easily provide the 
        necessary details and upload your documents. Once submitted, you will receive guidance on the next steps, 
        including preparing for the driving test. Start your journey towards safe and confident driving by applying for 
        your learner's license today!
      </p>

      <p class="instructions">
          Instructions for Application Submission:<br></br>
          Following are the stages of application for applying for a learner's license:<br></br>
          1. FILL APPLICATION DETAILS LL<br></br>
          2. UPLOAD PHOTO AND SIGNATURE (In case of eKYC through Aadhaar, only Signature needs to be uploaded)<br></br>
          3. UPLOAD DOCUMENTS<br></br>
          4. FEE PAYMENT<br></br>
          5. VERIFY THE PAYMENT STATUS<br></br>
          6. PRINT THE RECEIPT<br></br>
          7. LL SLOT BOOK<br></br>
          <strong>NOTE:</strong> Please go through the Road Safety tutorial before proceeding for the online Learner's Licence test.
      </p>


      <div className="form-container">
        <form onSubmit={handleSubmit}>
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
              />
              <small>Format: 1234567890</small>
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
          </div>

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
          </div>

          <div className="form-row">
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
          </div>

          <div className="form-row">
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
              />
              <small>Format: 12-digit Aadhar number</small>
            </div>
          </div>

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
          <button type='submit' class="btn btn-gradient btn-glow">APPLY</button>
        </form>
      </div>
    </div>
  );
}

export default LearnerLicense;