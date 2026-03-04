"use client";

import { Icon } from "./icons";

interface PaginationProps {
  showing: number;
  total: number;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
}

export function Pagination({
  showing,
  total,
  onPrevious,
  onNext,
  hasPrevious = true,
  hasNext = true,
}: PaginationProps) {
  return (
    <div className="flex flex-col gap-3 border-t border-[var(--border)] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <p className="text-sm text-[var(--muted)]">
        Showing {showing} of {total} Scans
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onPrevious}
          disabled={!hasPrevious}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-colors hover:bg-[var(--surface-elevated)] disabled:opacity-50 disabled:hover:bg-[var(--surface)]"
          aria-label="Previous page"
        >
          <Icon.chevronRight className="h-4 w-4 rotate-180" />
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!hasNext}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-colors hover:bg-[var(--surface-elevated)] disabled:opacity-50 disabled:hover:bg-[var(--surface)]"
          aria-label="Next page"
        >
          <Icon.chevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
