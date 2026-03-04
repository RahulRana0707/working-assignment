"use client";

import { Sidebar } from "./Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Sidebar />
      <main className="min-h-screen pt-4 pl-14 lg:pl-64 lg:pt-0">{children}</main>
    </div>
  );
}
