"use client";
import { useState } from "react";

export default function JobCard({ job, onDeleted, className }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;

  const deleteJob = async () => {
    if (!confirm(`Delete application for ${job.company} – ${job.position}?`)) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${base}/api/jobs/${job.id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed");
      onDeleted(job.id);
    } catch (e) {
      setError(e.message || "Delete failed");
    } finally {
      setLoading(false);
    }
  };

  const applied = new Date(job.date_applied).toLocaleDateString();
  const interview = job.interview_date ? new Date(job.interview_date).toLocaleDateString() : null;

  const statusStyles = {
    Applied: "bg-gray-100 text-gray-800",
    Interview: "bg-blue-100 text-blue-800",
    Offer: "bg-green-100 text-green-800",
    Rejected: "bg-red-100 text-red-800",
    Declined: "bg-yellow-100 text-yellow-800",
    Accepted: "bg-emerald-100 text-emerald-800",
  };

  return (
    <div className={className ? className : "rounded-2xl border p-4 shadow-sm hover:shadow-md transition bg-white"}>
      <table style={{width: '100%', borderCollapse: 'collapse', color: '#222b45'}}>
        <thead>
          <tr style={{background: '#f7f9fc'}}>
            <th style={{textAlign: 'left', padding: '0.5rem', fontWeight: 600, borderBottom: '2px solid #e3e8f0'}}>Company</th>
            <th style={{textAlign: 'left', padding: '0.5rem', fontWeight: 600, borderBottom: '2px solid #e3e8f0'}}>Position</th>
            <th style={{textAlign: 'left', padding: '0.5rem', fontWeight: 600, borderBottom: '2px solid #e3e8f0'}}>Applied</th>
            <th style={{textAlign: 'left', padding: '0.5rem', fontWeight: 600, borderBottom: '2px solid #e3e8f0'}}>Interview</th>
            <th style={{textAlign: 'left', padding: '0.5rem', fontWeight: 600, borderBottom: '2px solid #e3e8f0'}}>Status</th>
            <th style={{textAlign: 'left', padding: '0.5rem', fontWeight: 600, borderBottom: '2px solid #e3e8f0'}}>Details</th>
            <th style={{textAlign: 'center', padding: '0.5rem', fontWeight: 600, borderBottom: '2px solid #e3e8f0'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{background: '#fff'}}>
            <td style={{padding: '0.5rem', borderBottom: '1px solid #e3e8f0'}}>{job.company}</td>
            <td style={{padding: '0.5rem', borderBottom: '1px solid #e3e8f0', color: '#4f8cff', fontWeight: 500}}>{job.position}</td>
            <td style={{padding: '0.5rem', borderBottom: '1px solid #e3e8f0'}}>{applied}</td>
            <td style={{padding: '0.5rem', borderBottom: '1px solid #e3e8f0'}}>{interview || "—"}</td>
            <td style={{padding: '0.5rem', borderBottom: '1px solid #e3e8f0'}}>
              <span className={`cardStatus ${statusStyles[job.status]}`}>{job.status}</span>
            </td>
            <td style={{padding: '0.5rem', borderBottom: '1px solid #e3e8f0'}}>{job.details}</td>
            <td style={{padding: '0.5rem', borderBottom: '1px solid #e3e8f0', textAlign: 'center'}}>
              <button
                onClick={deleteJob}
                disabled={loading}
                style={{background: '#e53e3e', color: '#fff', border: 'none', borderRadius: '6px', padding: '0.5rem 1.2rem', fontSize: '0.95rem', fontWeight: 500, cursor: 'pointer', opacity: loading ? 0.6 : 1}}
              >
                {loading ? "Deleting…" : "Delete"}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {error && <p style={{marginTop: '0.5rem', color: '#e53e3e', fontSize: '0.95rem'}}>{error}</p>}
    </div>
  );
}
