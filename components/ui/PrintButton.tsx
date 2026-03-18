"use client";

import { useState } from "react";

export function PrintButton() {
  const [printing, setPrinting] = useState(false);

  function handlePrint() {
    setPrinting(true);
    // Small delay so the state change (hiding the button) renders before print dialog opens
    setTimeout(() => {
      window.print();
      setPrinting(false);
    }, 80);
  }

  return (
    <button
      onClick={handlePrint}
      disabled={printing}
      data-print-hide
      data-cursor="pointer"
      className="group inline-flex items-center gap-2 transition-all duration-200"
      style={{
        backgroundColor: "var(--gray-1)",
        border: "1px solid var(--border)",
        borderRadius: "6px",
        padding: "8px 16px",
        fontSize: "0.75rem",
        fontWeight: 500,
        color: "var(--text-2)",
        cursor: printing ? "wait" : "pointer",
      }}
    >
      {/* Animated download icon */}
      <span
        className="inline-flex items-center justify-center transition-transform duration-300 group-hover:translate-y-0.5"
        style={{ fontSize: "0.875rem" }}
        aria-hidden
      >
        ↓
      </span>
      {printing ? "Preparing…" : "Download as PDF"}
    </button>
  );
}
