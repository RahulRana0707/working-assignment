"use client";

import { useState } from "react";
import {
  PAGE_HEADER_TITLE,
  BREADCRUMB_ITEMS,
} from "@/app/constants/dashboard";
import {
  SCAN_STAGES,
  SCAN_DETAIL_FIELDS,
  ACTIVITY_LOG_ENTRIES,
  FINDINGS,
  SCAN_PROGRESS,
  LIVE_CONSOLE_STATUS,
  STATUS_BAR_METRICS,
  FINDING_COUNTS,
} from "@/app/constants/scanDetail";
import { DashboardLayout } from "@/app/components/DashboardLayout";
import { PageHeader } from "@/app/components/PageHeader";
import { ScanProgressCard } from "@/app/components/ScanProgressCard";
import { LiveScanConsole } from "@/app/components/LiveScanConsole";
import { FindingLog } from "@/app/components/FindingLog";
import { ScanStatusBar } from "@/app/components/ScanStatusBar";

export function ScanDetailContent() {
  const [toast, setToast] = useState<string | null>(null);

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
      <div className="flex flex-col">
        <div className="px-4 py-6 sm:px-6">
          <div className="mb-8">
            <ScanProgressCard
              progressValue={SCAN_PROGRESS.value}
              progressLabel={SCAN_PROGRESS.label}
              stages={SCAN_STAGES}
              activeStageIndex={0}
              detailFields={SCAN_DETAIL_FIELDS}
            />
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <LiveScanConsole
              title="Live Scan Console"
              statusLabel={LIVE_CONSOLE_STATUS}
              activityEntries={ACTIVITY_LOG_ENTRIES}
              onMinimize={() => showToast("Console minimized")}
              onClose={() => showToast("Console closed")}
            />
            <FindingLog
              findings={FINDINGS}
              onClose={() => showToast("Finding log closed")}
            />
          </div>
        </div>
        <ScanStatusBar
          metrics={STATUS_BAR_METRICS}
          severityCounts={FINDING_COUNTS}
        />
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
