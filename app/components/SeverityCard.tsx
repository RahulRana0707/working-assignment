import type { SeverityOverview } from "@/app/constants/dashboard";
import { Icon } from "./icons";

const TREND_COLORS: Record<string, string> = {
  criticalUp: "text-[var(--critical)]",
  criticalDown: "text-[var(--muted)]",
  highUp: "text-[var(--high)]",
  highDown: "text-[var(--muted)]",
  mediumUp: "text-[var(--muted)]",
  mediumDown: "text-[var(--success)]",
  lowUp: "text-[var(--muted)]",
  lowDown: "text-[var(--muted)]",
};

const ICON_COLORS: Record<string, string> = {
  critical: "text-[var(--critical)]",
  high: "text-[var(--high)]",
  medium: "text-[var(--medium)]",
  low: "text-[var(--low)]",
};

interface SeverityCardProps {
  data: SeverityOverview;
}

export function SeverityCard({ data }: SeverityCardProps) {
  const trendKey = `${data.color}${data.trend === "up" ? "Up" : "Down"}`;
  const trendColor = TREND_COLORS[trendKey] ?? "text-[var(--muted)]";
  const IconComponent =
    data.icon === "alertCircle"
      ? Icon.alertCircle
      : data.icon === "triangleAlert"
        ? Icon.triangleAlert
        : Icon.search;

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <span className="text-sm font-medium text-[var(--muted)]">{data.label}</span>
        <IconComponent
          className={`h-5 w-5 shrink-0 ${ICON_COLORS[data.color] ?? ""}`}
          aria-hidden
        />
      </div>
      <p className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{data.value}</p>
      <p className={`mt-1 flex items-center gap-1 text-xs ${trendColor}`}>
        <span aria-hidden>{data.trend === "up" ? "↑" : "↓"}</span>
        <span>
          {data.trendValue} {data.trendLabel}
        </span>
      </p>
    </div>
  );
}
