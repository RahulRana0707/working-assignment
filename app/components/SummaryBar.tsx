import { Icon } from "./icons";

interface SummaryBarProps {
  org: string;
  owner: string;
  metrics: { label: string; value: number | string }[];
  lastUpdated: string;
  onRefresh?: () => void;
}

export function SummaryBar({
  org,
  owner,
  metrics,
  lastUpdated,
  onRefresh,
}: SummaryBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-[var(--border)] px-4 py-3 sm:px-6">
      <span className="text-sm text-[var(--muted)]">
        Org: <span className="font-medium text-[var(--foreground)]">{org}</span>
      </span>
      <span className="hidden text-[var(--muted)] sm:inline" aria-hidden>
        |
      </span>
      <span className="text-sm text-[var(--muted)]">
        Owner: <span className="font-medium text-[var(--foreground)]">{owner}</span>
      </span>
      {metrics.map((m, i) => (
        <span key={m.label} className="flex items-center gap-2 text-sm">
          <span className="hidden text-[var(--muted)] sm:inline" aria-hidden>
            |
          </span>
          <span className="text-[var(--muted)]">
            {m.label}: <span className="font-medium text-[var(--foreground)]">{m.value}</span>
          </span>
        </span>
      ))}
      <span className="ml-auto flex items-center gap-1.5 text-sm text-[var(--muted)]">
        <button
          type="button"
          onClick={onRefresh}
          className="rounded p-0.5 transition-colors hover:bg-[var(--surface)]"
          aria-label="Refresh"
        >
          <Icon.refreshCw className="h-4 w-4" />
        </button>
        {lastUpdated}
      </span>
    </div>
  );
}
