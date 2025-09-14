"use client";
import { useState } from "react";
import AddApplicationModal from "./AddApplicationModal";

export default function AddApplicationButton({ className, onAdd }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={className ? className : "rounded-lg bg-black text-white px-4 py-2 text-sm hover:opacity-90"}
        onClick={() => setOpen(true)}
      >
        Add Application
      </button>
      <AddApplicationModal
        open={open}
        onClose={() => setOpen(false)}
        onAdd={onAdd}
      />
    </>
  );
}