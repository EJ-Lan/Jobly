"use client";
import { useState } from "react";
import styles from "../app/applications/jobcard.module.css";

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
    <div className={className ? className : "rounded-2xl border p-4 shadow-sm hover:shadow-md transition bg-white"} style={{color: '#222b45'}}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: '2vw',
          flexWrap: 'nowrap',
          width: '100%',
          minWidth: 0,
        }}
      >
        <div style={{flex: '2 1 180px', minWidth: 0}}>
          <div style={{fontSize: '0.85rem', color: '#6b7a99', marginBottom: 2}}>Company</div>
          <div style={{fontWeight: 700, fontSize: '1.15rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{job.company}</div>
        </div>
        <div style={{flex: '2 1 160px', minWidth: 0}}>
          <div style={{fontSize: '0.85rem', color: '#6b7a99', marginBottom: 2}}>Position</div>
          <div style={{color: '#4f8cff', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{job.position}</div>
        </div>
        <div style={{flex: '1 1 120px', minWidth: 0}}>
          <div style={{fontSize: '0.85rem', color: '#6b7a99', marginBottom: 2}}>Applied</div>
          <div style={{whiteSpace: 'nowrap'}}>{applied}</div>
        </div>
        <div style={{flex: '1 1 120px', minWidth: 0}}>
          <div style={{fontSize: '0.85rem', color: '#6b7a99', marginBottom: 2}}>Interview</div>
          <div style={{whiteSpace: 'nowrap'}}>{interview || "—"}</div>
        </div>
        <div style={{flex: '1 1 100px', minWidth: 0}}>
          <div style={{fontSize: '0.85rem', color: '#6b7a99', marginBottom: 2}}>Status</div>
          <span className={`cardStatus ${statusStyles[job.status]}`}>{job.status}</span>
        </div>
        <div style={{flex: '2 1 200px', minWidth: 0}}>
          <div style={{fontSize: '0.85rem', color: '#6b7a99', marginBottom: 2}}>Details</div>
          <div style={{color: '#6b7a99', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{job.details}</div>
        </div>
        <div style={{flex: '0 0 90px', textAlign: 'center', minWidth: 0}}>
          <div style={{fontSize: '0.85rem', color: '#6b7a99', marginBottom: 2}}>&nbsp;</div>
          <button
            onClick={deleteJob}
            disabled={loading}
            style={{background: '#e53e3e', color: '#fff', border: 'none', borderRadius: '6px', padding: '0.5rem 1.2rem', fontSize: '0.95rem', fontWeight: 500, cursor: 'pointer', opacity: loading ? 0.6 : 1}}
          >
            {loading ? "Deleting…" : "Delete"}
          </button>
        </div>
      </div>
      {error && <p style={{marginTop: '0.5rem', color: '#e53e3e', fontSize: '0.95rem'}}>{error}</p>}
    </div>
  );
}
