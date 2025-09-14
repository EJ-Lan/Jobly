"use client";
import { useState, useEffect } from "react";
import JobsClient from "./JobsClient";
import AddApplicationButton from "@/components/AddApplicationButton";
import styles from "./page.module.css";

async function fetchJobs() {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${base}/api/jobs`, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default function ApplicationsPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs().then(setJobs);
  }, []);

  const handleAdd = (app) => {
    setJobs(prev => [{
      ...app,
      id: Math.random().toString(36).slice(2),
    }, ...prev]);
  };

  const handleDeleted = (id) => {
    setJobs(prev => prev.filter(j => j.id !== id));
  };

  return (
    <section className={styles.section}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '2rem 2.5vw 1.5rem 2.5vw',
          gap: '2rem',
          borderRadius: '18px',
          background: 'var(--background)',
          boxShadow: '0 2px 12px rgba(30,40,60,0.04)',
          marginBottom: '2rem',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: 'var(--accent)',
            letterSpacing: '0.02em',
            textShadow: '0 2px 8px rgba(79,140,255,0.10)',
            margin: 0,
            paddingRight: '1.5rem',
            lineHeight: 1.1,
          }}
        >
          Current Applications
        </h1>
        <AddApplicationButton
          className={styles.addButton}
          onAdd={handleAdd}
          style={{
            marginLeft: 'auto',
            fontSize: '1.1rem',
            fontWeight: 600,
            padding: '0.75rem 2rem',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(79,140,255,0.08)',
          }}
        />
      </div>
      <div style={{background: '#f0f4fa', borderRadius: '18px', padding: '2vw 0', minHeight: '40vh'}}>
        <JobsClient jobs={jobs} onDeleted={handleDeleted} />
      </div>
    </section>
  );
}


