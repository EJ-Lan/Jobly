"use client";
import { useState } from "react";
import JobCard from "@/components/JobCard";

export default function JobsClient({ initialJobs }) {
  const [jobs, setJobs] = useState(initialJobs || []);

  const handleDeleted = (id) => {
    setJobs((prev) => prev.filter((j) => j.id !== id));
  };

  if (jobs.length === 0) {
    return (
      <div className="rounded-xl border p-8 text-center text-gray-600">
        No applications yet.
      </div>
    );
  }

  return (
    <div className="cards" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onDeleted={handleDeleted} className="card" />
      ))}
    </div>
  );
}
