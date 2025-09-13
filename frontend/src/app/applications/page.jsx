import JobsClient from "./JobsClient";
import AddApplicationButton from "@/components/AddApplicationButton";
import styles from "./page.module.css";

async function getJobs() {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${base}/api/jobs`, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default async function ApplicationsPage() {
  const jobs = await getJobs();

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.title}>Current Applications</h1>
        <div style={{ flex: 1 }} />
        <AddApplicationButton className={styles.addButton} />
      </div>
      <JobsClient initialJobs={jobs} />
    </section>
  );
}


