export type SeverityLevel = "critical" | "high" | "medium" | "low";

export const SEVERITY_CONFIG: Record<
  SeverityLevel,
  { label: string; bgClass: string; textClass: string }
> = {
  critical: {
    label: "Critical",
    bgClass: "bg-[var(--critical)]",
    textClass: "text-white",
  },
  high: {
    label: "High",
    bgClass: "bg-[var(--high)]",
    textClass: "text-white",
  },
  medium: {
    label: "Medium",
    bgClass: "bg-[var(--medium)]",
    textClass: "text-white",
  },
  low: {
    label: "Low",
    bgClass: "bg-[var(--low)]",
    textClass: "text-white",
  },
};

export function getSeverityLabel(level: SeverityLevel): string {
  return SEVERITY_CONFIG[level].label;
}

export function getSeverityClasses(level: SeverityLevel): { bg: string; text: string } {
  const c = SEVERITY_CONFIG[level];
  return { bg: c.bgClass, text: c.textClass };
}
