import React from "react";
import Background from "./Background";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <Background accentColorClass="" />
      <main className="relative z-10">{children}</main>
    </div>
  );
}