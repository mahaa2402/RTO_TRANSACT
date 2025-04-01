import React, { useEffect, useState } from "react";
import "./FetchAppointments.css";

const AppointmentDetails = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("http://localhost:3001/appointments");
        const result = await response.json();

        if (result.success) {
          setAppointments(result.data);
        } else {
          setError(result.message);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch appointment details.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const fixAppointment = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/appointments/fix/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "Fixed" }),
      });

      const result = await response.json();
      if (result.success) {
        setAppointments(appointments.map(app => app._id === id ? { ...app, status: "Fixed" } : app));
      } else {
        alert("Failed to update appointment.");
      }
    } catch (err) {
      console.error("Error updating appointment:", err);
      alert("Error fixing appointment.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Appointment Details</h2>
      <table>
        <thead>
          <tr>
            <th>Applicant Name</th>
            <th>Appointment Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((app) => (
            <tr key={app._id}>
              <td>{app.applicantName}</td>
              <td>{app.date}</td>
              <td>{app.status}</td>
              <td>
                {app.status !== "Fixed" && (
                  <button onClick={() => fixAppointment(app._id)}>Fix Appointment</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentDetails;
