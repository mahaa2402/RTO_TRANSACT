import React, { useEffect, useState } from "react";
import { API_BASE } from "../api/client";
import "./FetchAppointments.css";

async function parseJsonResponse(response) {
  const text = await response.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(response.ok ? "Invalid JSON from server" : `Server error (${response.status})`);
  }
}

const AppointmentDetails = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(`${API_BASE}/appointments`);
        const result = await parseJsonResponse(response);
        if (!response.ok) {
          setError(result?.message || `Request failed (${response.status})`);
          return;
        }
        if (result.success) {
          setAppointments(result.data || []);
        } else {
          setError(result.message || "Could not load appointments.");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "Failed to fetch appointment details.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const fixAppointment = async (id) => {
    try {
      const response = await fetch(`${API_BASE}/appointments/fix/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "Fixed" }),
      });
      const result = await parseJsonResponse(response);
      if (!response.ok || !result?.success) {
        alert(result?.message || `Update failed (${response.status})`);
        return;
      }
      setAppointments((prev) =>
        prev.map((app) =>
          String(app._id) === String(id) ? { ...app, status: "Fixed" } : app
        )
      );
    } catch (err) {
      console.error("Error updating appointment:", err);
      alert(err.message || "Error fixing appointment.");
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
            <tr key={app._id}><td>{app.ownerName ?? "—"}</td><td>{[app.appointmentDate, app.appointmentTime].filter(Boolean).join(" ") || "—"}</td><td>{app.status ?? "Pending"}</td><td>{app.status !== "Fixed" ? <button type="button" onClick={() => fixAppointment(app._id)}>Fix Appointment</button> : null}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentDetails;
