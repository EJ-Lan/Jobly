"use client";
export default function AddApplicationButton() {
  return (
    <button
      className="rounded-lg bg-black text-white px-4 py-2 text-sm hover:opacity-90"
      onClick={() => alert("Add Application – placeholder")}
    >
      Add Application
    </button>
  );
}