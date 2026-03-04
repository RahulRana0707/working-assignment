"use client";

import { useState, useMemo } from "react";
import {
  PAGE_HEADER_TITLE,
  BREADCRUMB_ITEMS,
  PROJECT_INFO,
  SUMMARY_METRICS,
  LAST_UPDATED,
  SEVERITY_OVERVIEW,
} from "@/app/constants/dashboard";
import { SCANS, PAGINATION } from "@/app/constants/scans";
import { DashboardLayout } from "@/app/components/DashboardLayout";
import { PageHeader } from "@/app/components/PageHeader";
import { SummaryBar } from "@/app/components/SummaryBar";
import { SeverityCard } from "@/app/components/SeverityCard";
import { SearchFilterBar } from "@/app/components/SearchFilterBar";
import { ScansTable } from "@/app/components/ScansTable";
import { Pagination } from "@/app/components/Pagination";

function filterScansByNameOrType(scans: typeof SCANS, query: string) {
  if (!query.trim()) return scans;
  const q = query.toLowerCase();
  return scans.filter(
    (s) =>
      s.scanName.toLowerCase().includes(q) || s.type.toLowerCase().includes(q)
  );
}

export function DashboardContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  const filteredScans = useMemo(
    () => filterScansByNameOrType(SCANS, searchQuery),
    [searchQuery]
  );

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <DashboardLayout>
      <PageHeader
        title={PAGE_HEADER_TITLE}
        breadcrumbs={BREADCRUMB_ITEMS}
        onExportReport={() => showToast("Export Report requested")}
        onStopScan={() => showToast("Stop Scan requested")}
      />
      <SummaryBar
        org={PROJECT_INFO.org}
        owner={PROJECT_INFO.owner}
        metrics={SUMMARY_METRICS}
        lastUpdated={LAST_UPDATED}
        onRefresh={() => showToast("Data refreshed")}
      />
      <div className="px-4 py-6 sm:px-6">
        <section className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SEVERITY_OVERVIEW.map((s) => (
            <SeverityCard key={s.id} data={s} />
          ))}
        </section>
        <section>
          <div className="mb-4">
            <SearchFilterBar
              searchValue={searchQuery}
              onSearchChange={setSearchQuery}
              onFilterClick={() => showToast("Filter opened")}
              onColumnClick={() => showToast("Column options opened")}
              onNewScanClick={() => showToast("New Scan clicked")}
            />
          </div>
          <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <ScansTable scans={filteredScans} />
            <Pagination
              showing={Math.min(PAGINATION.pageSize, filteredScans.length)}
              total={PAGINATION.total}
              hasPrevious={PAGINATION.currentPage > 1}
              hasNext={
                PAGINATION.currentPage * PAGINATION.pageSize < PAGINATION.total
              }
              onPrevious={() => showToast("Previous page")}
              onNext={() => showToast("Next page")}
            />
          </div>
        </section>
      </div>
      {toast && (
        <div
          className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-[var(--foreground)] px-4 py-2 text-sm text-[var(--background)] shadow-lg"
          role="status"
        >
          {toast}
        </div>
      )}
    </DashboardLayout>
  );
}
