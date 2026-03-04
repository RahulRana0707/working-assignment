import type { ScanStatus } from "@/app/constants/scans";

interface ProgressBarProps {
  value: number;
  status: ScanStatus;
  showLabel?: boolean;
}

const BAR_COLORS: Record<ScanStatus, string> = {
  completed: "bg-[var(--accent)]",
  scheduled: "bg-[var(--accent)]",
  failed: "bg-[var(--danger)]",
};

export function ProgressBar({ value, status, showLabel = true }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));
  const color = BAR_COLORS[status];

  return (
    <div className="flex min-w-[4rem] items-center gap-2">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-[var(--surface)]">
        <div
          className={`h-full rounded-full transition-[width] ${color}`}
          style={{ width: `${clamped}%` }}
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      {showLabel && (
        <span className="w-10 shrink-0 text-right text-xs text-[var(--muted)]">
          {clamped}%
        </span>
      )}
    </div>
  );
}
