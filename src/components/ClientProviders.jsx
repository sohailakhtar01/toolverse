"use client";

import ProgressBar from "@/components/ProgressBar";

export default function ClientProviders({ children }) {
  return (
    <>
      <ProgressBar />
      {children}
    </>
  );
}
