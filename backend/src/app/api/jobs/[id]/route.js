import { NextResponse } from "next/server";

export async function DELETE(_request, { params }) {
  const { id } = params || {};
  if (!id) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

  // Mock mode: do nothing server-side. When DB is ready,
  // verify ownership (user_id) and delete the row here.
  return NextResponse.json({ ok: true });
}
