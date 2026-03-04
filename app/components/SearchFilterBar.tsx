"use client";

import { Icon } from "./icons";

interface SearchFilterBarProps {
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onFilterClick?: () => void;
  onColumnClick?: () => void;
  onNewScanClick?: () => void;
}

export function SearchFilterBar({
  searchPlaceholder = "Search scans by name or type...",
  searchValue = "",
  onSearchChange,
  onFilterClick,
  onColumnClick,
  onNewScanClick,
}: SearchFilterBarProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative flex-1">
        <Icon.search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]"
          aria-hidden
        />
        <input
          type="search"
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={(e) => onSearchChange?.(e.target.value)}
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--input-bg)] py-2.5 pl-10 pr-4 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          aria-label="Search scans"
        />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={onFilterClick}
          className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--surface-elevated)]"
        >
          <Icon.filter className="h-4 w-4" aria-hidden />
          Filter
        </button>
        <button
          type="button"
          onClick={onColumnClick}
          className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--surface-elevated)]"
        >
          <Icon.columns className="h-4 w-4" aria-hidden />
          Column
        </button>
        <button
          type="button"
          onClick={onNewScanClick}
          className="flex items-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
        >
          <Icon.plus className="h-4 w-4" aria-hidden />
          New Scan
        </button>
      </div>
    </div>
  );
}
