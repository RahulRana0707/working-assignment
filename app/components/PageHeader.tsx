"use client";

import { Breadcrumbs } from "./Breadcrumbs";

interface PageHeaderProps {
  title: string;
  breadcrumbs: string[];
  onExportReport?: () => void;
  onStopScan?: () => void;
}

export function PageHeader({
  title,
  breadcrumbs,
  onExportReport,
  onStopScan,
}: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-3 border-b border-[var(--border)] bg-[var(--background)] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <Breadcrumbs title={title} items={breadcrumbs} />
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={onExportReport}
          className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--surface-elevated)]"
        >
          Export Report
        </button>
        <button
          type="button"
          onClick={onStopScan}
          className="rounded-lg bg-[var(--danger)] px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
        >
          Stop Scan
        </button>
      </div>
    </header>
  );
}
