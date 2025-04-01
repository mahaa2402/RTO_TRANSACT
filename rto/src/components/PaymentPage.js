import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const { state } = useLocation(); // Get service data from state
  const service = state?.service || 'Fitness Inspection/Certificate'; // Default description

  const fees = [
    { id: 1, description: 'Transaction Fee', dueDate: 'N/A', feeAmount: 20, fineAmount: 0 },
    { id: 2, description: service, dueDate: service === 'Annual Inspection' ? '06-May-2024' : 'N/A', feeAmount: service === 'Annual Inspection' ? 1000 : 800, fineAmount: 0 },
  ];

  const totalFeeAmount = fees.reduce((acc, item) => acc + item.feeAmount, 0);
  const totalFineAmount = fees.reduce((acc, item) => acc + item.fineAmount, 0);
  const grandTotal = totalFeeAmount + totalFineAmount;
  const serviceCharges = 20;
  const totalPayableAmount = grandTotal + serviceCharges;

  const navigate = useNavigate();

  const handlePayment = async () => {
    // Define vehicle number and payment status (assuming you get vehicle number from somewhere, e.g., state)
    const vehicleNumber = state?.vehicleNumber || 'Unknown Vehicle'; // Replace with actual source
    const paymentStatus = 'Paid';

    try {
      const response = await fetch('http://localhost:3001/api/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ vehicleNumber, paymentStatus }),
      });

      if (response.ok) {
        alert(`Payment of ₹${totalPayableAmount} processed successfully!`);
        navigate('/'); // Navigate to home or success page
      } else {
        alert('Payment processing failed. Please try again.');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('An error occurred while processing the payment. Please try again later.');
    }
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">Fee Panel</h2>
      <table className="payment-table">
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Fee Amount (In ₹)</th>
            <th>Fine Amount (In ₹)</th>
            <th>Total Amount (In ₹)</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee, index) => (
            <tr key={fee.id}>
              <td>{index + 1}</td>
              <td>{fee.description}</td>
              <td>{fee.dueDate}</td>
              <td>{fee.feeAmount.toFixed(2)}</td>
              <td>{fee.fineAmount.toFixed(2)}</td>
              <td>{(fee.feeAmount + fee.fineAmount).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" className="total-label">GRAND TOTAL (in ₹):</td>
            <td>{totalFeeAmount.toFixed(2)}</td>
            <td>{totalFineAmount.toFixed(2)}</td>
            <td>{grandTotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <div className="summary">
        <p>User/Service Charges: ₹{serviceCharges}</p>
        <p><strong>Total Payable Amount (In ₹): {totalPayableAmount.toFixed(2)}</strong></p>
      </div>
      <div className="button-group">
        <button className="pay-button" onClick={handlePayment}>Pay</button>
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default PaymentPage;
