import React, { useState } from 'react';
import './Appointment.css';
import { useNavigate } from 'react-router-dom';
import { API_BASE } from '../api/client'; 

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    phoneNumber: '',
    vehicleNumber: '',
    vehicleModel: '',
    OverallCondition: '',
    enginePerformance: '',
    appointmentDate: '', // New state for appointment date
    appointmentTime: '' // New state for appointment time
  });

  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handlePayment = async () => {
    // Send the form data to the backend
    try {
      const response = await fetch(`${API_BASE}/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (data.success) {
        // Navigate to PaymentPage with service and vehicle number passed via state
        navigate('/PaymentPage', { 
          state: { 
            service: formData.OverallCondition, 
            vehicleNumber: formData.vehicleNumber // Add this line
          } 
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during appointment submission:', error);
      alert('An error occurred while submitting your appointment. Please try again.');
    }
  };
  
  return (
    <div className="appointment-form-container">
      <h1 className="heading">Vehicle Service Appointment</h1>
      <p className="paragraph">
        Schedule your vehicle for service or maintenance. Please fill in the details below to secure your appointment.
      </p>

      <div className="form-container">
        <form>
          <h2>Owner Details</h2>
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

          <h2>Vehicle Details</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="vehicleNumber">Vehicle Number:</label>
              <input
                type="text"
                id="vehicleNumber"
                name="vehicleNumber"
                value={formData.vehicleNumber}
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

          <h2>Vehicle Condition</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="OverallCondition">Select Services:</label>
              <select
                id="OverallCondition"
                name="OverallCondition"
                value={formData.OverallCondition}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Select Services</option>
                <option value="Safety Inspection">Safety Inspection</option>
                <option value="Emission Inspection">Emission Inspection</option>
                <option value="Annual Inspection">Annual Inspection</option>
              </select>
            </div>
          </div>

          <h2>Appointment Details</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="appointmentDate">Select Appointment Date:</label>
              <input
                type="date"
                id="appointmentDate"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="appointmentTime">Select Appointment Time:</label>
              <input
                type="time"
                id="appointmentTime"
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <h2>Engine Performance</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="enginePerformance">Engine Performance:</label>
              <select
                id="enginePerformance"
                name="enginePerformance"
                value={formData.enginePerformance}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Select Engine Status</option>
                <option value="Smooth">Smooth</option>
                <option value="Minor Issues">Minor Issues</option>
                <option value="Major Issues">Major Issues</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-gradient btn-glow"
            onClick={handlePayment}
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
