import type { StatusBarMetrics, SeverityCounts } from "@/app/constants/scanDetail";
import { Icon } from "./icons";

interface ScanStatusBarProps {
  metrics: StatusBarMetrics;
  severityCounts: SeverityCounts;
}

const SEVERITY_ORDER: (keyof SeverityCounts)[] = [
  "critical",
  "high",
  "medium",
  "low",
];

const SEVERITY_DOT_COLORS: Record<keyof SeverityCounts, string> = {
  critical: "text-[var(--critical)]",
  high: "text-[var(--high)]",
  medium: "text-[var(--medium)]",
  low: "text-[var(--low)]",
};

export function ScanStatusBar({
  metrics,
  severityCounts,
}: ScanStatusBarProps) {
  return (
    <div className="flex flex-col gap-2 border-t border-[var(--border)] bg-[var(--background)] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--muted)]">
        <span>Sub-Agents: {metrics.subAgents}</span>
        <Icon.circle
          className={`h-1.5 w-1.5 fill-[var(--accent)] text-[var(--accent)]`}
          aria-hidden
        />
        <span>Parallel Executions: {metrics.parallelExecutions}</span>
        <Icon.circle
          className={`h-1.5 w-1.5 fill-[var(--accent)] text-[var(--accent)]`}
          aria-hidden
        />
        <span>Operations: {metrics.operations}</span>
      </div>
      <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
        {SEVERITY_ORDER.map((severity) => (
          <span key={severity} className="flex items-center gap-1.5">
            <Icon.circle
              className={`h-1.5 w-1.5 fill-current ${SEVERITY_DOT_COLORS[severity]}`}
              aria-hidden
            />
            <span className="capitalize">{severity}:</span>
            <span className="font-medium text-[var(--foreground)]">
              {severityCounts[severity]}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
