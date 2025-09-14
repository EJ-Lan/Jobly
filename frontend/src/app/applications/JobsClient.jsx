"use client";
import { useState, useEffect } from "react";
import JobCard from "@/components/JobCard";

export default function JobsClient({ jobs, onDeleted }) {
  if (!jobs || jobs.length === 0) {
    return (
      <div
        className="rounded-xl border text-center"
        style={{
          margin: '3rem auto',
          padding: '2.5rem 2rem',
          maxWidth: '480px',
          background: '#222b45',
          color: '#fff',
          boxShadow: '0 2px 12px rgba(30,40,60,0.10)',
        }}
      >
        <h2 style={{fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff'}}>No applications found</h2>
        <p style={{fontSize: '1rem', color: '#c7d1e0'}}>You haven't added any job applications yet. Click <b style={{color:'#4f8cff'}}>Add Application</b> to get started!</p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        width: '100%',
        maxWidth: '100vw',
        margin: '0 auto',
        padding: '0 2vw',
      }}
    >
      {jobs.map((job) => (
        <div
          key={job.id}
          style={{
            background: '#fff',
            borderRadius: '16px',
            boxShadow: '0 2px 12px rgba(30,40,60,0.10)',
            border: '2px solid #e3e8f0',
            padding: '1.2rem 2vw',
            width: '100%',
            minWidth: 0,
            maxWidth: '100%',
            boxSizing: 'border-box',
          }}
        >
          <JobCard job={job} onDeleted={onDeleted} />
        </div>
      ))}
    </div>
  );
}
