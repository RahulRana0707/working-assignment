"use client";

import type { Finding } from "@/app/constants/scanDetail";
import { Icon } from "./icons";
import { FindingCard } from "./FindingCard";

interface FindingLogProps {
  findings: Finding[];
  onClose?: () => void;
}

export function FindingLog({ findings, onClose }: FindingLogProps) {
  return (
    <div className="flex h-full min-h-[320px] flex-col rounded-xl border border-[var(--border)] bg-[var(--card-bg)] overflow-hidden">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
        <h3 className="text-sm font-semibold text-[var(--foreground)]">
          Finding Log
        </h3>
        <button
          type="button"
          onClick={onClose}
          className="rounded p-1.5 text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
          aria-label="Close"
        >
          <Icon.x className="h-4 w-4" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3">
          {findings.map((finding) => (
            <FindingCard key={finding.id} finding={finding} />
          ))}
        </div>
      </div>
    </div>
  );
}
