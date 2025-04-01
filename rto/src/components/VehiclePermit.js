import React, { useState } from 'react';
import './VehiclePermit.css';

const VehiclePermit = () => {
  const [formData, setFormData] = useState({
    applicantName: '',
    vehicleMake: '',
    vehicleModel: '',
    yearOfManufacture: '',
    vehicleVIN: '',
    licensePlate: '',
    vehicleColor: '',
    ownerName: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    idProof: null,
    insurance: null,
    odometerReading: '',
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
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });

    try {
      const response = await fetch('http://localhost:3001/vehicle-permit', {
        method: 'POST',
        body: formDataObj,
      });

      const result = await response.json();
      if (response.ok) {
        alert('Vehicle Permit Application submitted successfully!');
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div className="vehicle-permit-container">
      <h1 className="heading">Vehicle Permit Application</h1>
      <p className="paragraph">
        Applying for a vehicle permit is essential for legal and safe driving on the roads.
        This application process is straightforward and requires you to provide the necessary
        details about your vehicle and upload the required documents.
      </p>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="applicantName">Applicant Name:</label>
              <input
                type="text"
                id="applicantName"
                name="applicantName"
                value={formData.applicantName}
                onChange={handleInputChange}
                required
                minLength="2"
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
          </div>

          {/* Vehicle Information */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="vehicleMake">Vehicle Make:</label>
              <input
                type="text"
                id="vehicleMake"
                name="vehicleMake"
                value={formData.vehicleMake}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="vehicleModel">Vehicle Model:</label>
              <input
                type="text"
                id="vehicleModel"
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="yearOfManufacture">Year of Manufacture:</label>
              <input
                type="number"
                id="yearOfManufacture"
                name="yearOfManufacture"
                value={formData.yearOfManufacture}
                onChange={handleInputChange}
                required
                min="1900"
                max={new Date().getFullYear()}
              />
            </div>

            <div className="form-group">
              <label htmlFor="vehicleVIN">Vehicle Identification Number (VIN):</label>
              <input
                type="text"
                id="vehicleVIN"
                name="vehicleVIN"
                value={formData.vehicleVIN}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="licensePlate">License Plate:</label>
              <input
                type="text"
                id="licensePlate"
                name="licensePlate"
                value={formData.licensePlate}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="vehicleColor">Vehicle Color:</label>
              <input
                type="text"
                id="vehicleColor"
                name="vehicleColor"
                value={formData.vehicleColor}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Ownership Information */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="ownerName">Owner's Name:</label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="odometerReading">Odometer Reading:</label>
              <input
                type="number"
                id="odometerReading"
                name="odometerReading"
                value={formData.odometerReading}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Contact Information */}
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

          {/* Address Information */}
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

          {/* Document Uploads */}
          <div className="form-row">
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

            <div className="form-group">
              <label htmlFor="insurance">Upload Insurance Document:</label>
              <input
                type="file"
                id="insurance"
                name="insurance"
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

export default VehiclePermit;
