"use client";
import { useState } from "react";

export default function AddApplicationModal({ open, onClose, onAdd }) {
  const [form, setForm] = useState({
    company: "",
    position: "",
    date_applied: "",
    interview_date: "",
    status: "Applied",
    details: ""
  });

  if (!open) return null;

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(form);
    setForm({
      company: "",
      position: "",
      date_applied: "",
      interview_date: "",
      status: "Applied",
      details: ""
    });
    onClose();
  }

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(30,40,60,0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000
    }}>
      <form onSubmit={handleSubmit} style={{
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 4px 24px rgba(30,40,60,0.18)",
        padding: "2rem",
        minWidth: 340,
        maxWidth: 400,
        width: "100%",
        color: "#111"
      }}>
        <h2 style={{marginBottom: "1rem", fontSize: "1.25rem", fontWeight: 600, color: "#111"}}>Add Application</h2>
        <div style={{marginBottom: "0.75rem"}}>
          <label style={{color: "#111"}}>Company</label>
          <input name="company" value={form.company} onChange={handleChange} required style={{width: "100%", padding: "0.5rem", marginTop: 4, borderRadius: 6, border: "1px solid #e3e8f0", background: "#fff", color: "#111"}} />
        </div>
        <div style={{marginBottom: "0.75rem"}}>
          <label style={{color: "#111"}}>Position</label>
          <input name="position" value={form.position} onChange={handleChange} required style={{width: "100%", padding: "0.5rem", marginTop: 4, borderRadius: 6, border: "1px solid #e3e8f0", background: "#fff", color: "#111"}} />
        </div>
        <div style={{marginBottom: "0.75rem"}}>
          <label style={{color: "#111"}}>Date Applied</label>
          <input type="date" name="date_applied" value={form.date_applied} onChange={handleChange} required style={{width: "100%", padding: "0.5rem", marginTop: 4, borderRadius: 6, border: "1px solid #e3e8f0", background: "#fff", color: "#111"}} />
        </div>
        <div style={{marginBottom: "0.75rem"}}>
          <label style={{color: "#111"}}>Interview Date</label>
          <input type="date" name="interview_date" value={form.interview_date} onChange={handleChange} style={{width: "100%", padding: "0.5rem", marginTop: 4, borderRadius: 6, border: "1px solid #e3e8f0", background: "#fff", color: "#111"}} />
        </div>
        <div style={{marginBottom: "0.75rem"}}>
          <label style={{color: "#111"}}>Status</label>
          <select name="status" value={form.status} onChange={handleChange} style={{width: "100%", padding: "0.5rem", marginTop: 4, borderRadius: 6, border: "1px solid #e3e8f0", background: "#fff", color: "#111"}}>
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
            <option>Declined</option>
            <option>Accepted</option>
          </select>
        </div>
        <div style={{marginBottom: "0.75rem"}}>
          <label style={{color: "#111"}}>Details</label>
          <textarea name="details" value={form.details} onChange={handleChange} rows={2} style={{width: "100%", padding: "0.5rem", marginTop: 4, borderRadius: 6, border: "1px solid #e3e8f0", background: "#fff", color: "#111"}} />
        </div>
        <div style={{display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1.5rem"}}>
          <button type="button" onClick={onClose} style={{background: "#e3e8f0", color: "#222b45", border: "none", borderRadius: 6, padding: "0.5rem 1.2rem", fontWeight: 500, cursor: "pointer"}}>Cancel</button>
          <button type="submit" style={{background: "#4f8cff", color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.2rem", fontWeight: 500, cursor: "pointer"}}>Add</button>
        </div>
      </form>
    </div>
  );
}
