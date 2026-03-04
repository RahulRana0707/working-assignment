"use client";

import { useState } from "react";
import type { ActivityLogEntry } from "@/app/constants/scanDetail";
import { Icon } from "./icons";
import { ActivityLog } from "./ActivityLog";

interface LiveScanConsoleProps {
  title?: string;
  statusLabel?: string;
  activityEntries: ActivityLogEntry[];
  onMinimize?: () => void;
  onClose?: () => void;
}

const TABS = [
  { id: "activity", label: "Activity Log" },
  { id: "verification", label: "Verification Loops" },
];

export function LiveScanConsole({
  title = "Live Scan Console",
  statusLabel = "Running...",
  activityEntries,
  onMinimize,
  onClose,
}: LiveScanConsoleProps) {
  const [activeTab, setActiveTab] = useState("activity");

  return (
    <div className="flex h-full min-h-[320px] flex-col rounded-xl border border-[var(--border)] bg-[var(--card-bg)] overflow-hidden">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-[var(--foreground)]">
            {title}
          </h3>
          <span className="flex items-center gap-1.5 text-xs text-[var(--success)]">
            <Icon.circle className="h-2 w-2 fill-current" aria-hidden />
            {statusLabel}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onMinimize}
            className="rounded p-1.5 text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
            aria-label="Minimize"
          >
            <Icon.minimize2 className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1.5 text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
            aria-label="Close"
          >
            <Icon.x className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="flex border-b border-[var(--border)] px-4">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "text-[var(--accent)]"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent)]"
                aria-hidden
              />
            )}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-hidden">
        {activeTab === "activity" && (
          <ActivityLog entries={activityEntries} />
        )}
        {activeTab === "verification" && (
          <div className="flex h-full min-h-[200px] items-center justify-center px-4 py-8 text-sm text-[var(--muted)]">
            Verification loops log will appear here.
          </div>
        )}
      </div>
    </div>
  );
}
