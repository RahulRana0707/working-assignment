import type { ScanStatus } from "@/app/constants/scans";

const STATUS_STYLES: Record<
  ScanStatus,
  { bg: string; text: string }
> = {
  completed: {
    bg: "bg-[var(--success-bg)] dark:bg-green-900/40",
    text: "text-[var(--success)]",
  },
  scheduled: {
    bg: "bg-[var(--scheduled-bg)] dark:bg-sky-900/40",
    text: "text-[var(--scheduled-text)]",
  },
  failed: {
    bg: "bg-[var(--failed-bg)] dark:bg-red-900/40",
    text: "text-[var(--failed-text)]",
  },
};

const STATUS_LABELS: Record<ScanStatus, string> = {
  completed: "Completed",
  scheduled: "Scheduled",
  failed: "Failed",
};

interface StatusBadgeProps {
  status: ScanStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const style = STATUS_STYLES[status];
  const label = STATUS_LABELS[status];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${style.bg} ${style.text}`}
    >
      {label}
    </span>
  );
}
