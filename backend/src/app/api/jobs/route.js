import { NextResponse } from "next/server";

const MOCK_JOBS = [
  {
    id: "11111111-1111-1111-1111-111111111111",
    status: "Applied",
    date_applied: "2025-09-05",
    interview_date: null,
    company: "Acme Corp",
    position: "Software Engineer",
    details: "Applied via careers page. Referred by Jane D."
  },
  {
    id: "22222222-2222-2222-2222-222222222222",
    status: "Interview",
    date_applied: "2025-09-01",
    interview_date: "2025-09-15",
    company: "Globex",
    position: "Backend Developer",
    details: "Phone screen passed. Onsite scheduled."
  },
  {
    id: "33333333-3333-3333-3333-333333333333",
    status: "Offer",
    date_applied: "2025-08-20",
    interview_date: "2025-09-10",
    company: "Initech",
    position: "Platform Engineer",
    details: "Verbal offer pending written details."
  },
  {
    id: "44444444-4444-4444-4444-444444444444",
    status: "Rejected",
    date_applied: "2025-08-25",
    interview_date: null,
    company: "Umbrella",
    position: "Full-stack Developer",
    details: "Automated rejection. Will reapply in 6 months."
  }
];

export async function GET() {
  return NextResponse.json(MOCK_JOBS);
}
