export interface SummaryMetric {
  label: string;
  value: number | string;
}

export interface SeverityOverview {
  id: string;
  label: string;
  value: number;
  trend: "up" | "down";
  trendValue: string;
  trendLabel: string;
  icon: string;
  color: "critical" | "high" | "medium" | "low";
}

export const PAGE_HEADER_TITLE = "Scan";
export const BREADCRUMB_ITEMS = ["Private Assets", "New Scan"];

export const PROJECT_INFO = {
  org: "Project X",
  owner: "Nammagiri",
};

export const SUMMARY_METRICS: SummaryMetric[] = [
  { label: "Total Scans", value: 100 },
  { label: "Scheduled", value: 1000 },
  { label: "Rescans", value: 100 },
  { label: "Failed Scans", value: 100 },
];

export const LAST_UPDATED = "10 mins ago";

export const SEVERITY_OVERVIEW: SeverityOverview[] = [
  {
    id: "critical",
    label: "Critical Severity",
    value: 86,
    trend: "up",
    trendValue: "+2%",
    trendLabel: "increase than yesterday",
    icon: "alertCircle",
    color: "critical",
  },
  {
    id: "high",
    label: "High Severity",
    value: 16,
    trend: "up",
    trendValue: "+0.9%",
    trendLabel: "increase than yesterday",
    icon: "triangleAlert",
    color: "high",
  },
  {
    id: "medium",
    label: "Medium Severity",
    value: 26,
    trend: "down",
    trendValue: "+0.9%",
    trendLabel: "decrease than yesterday",
    icon: "triangleAlert",
    color: "medium",
  },
  {
    id: "low",
    label: "Low Severity",
    value: 16,
    trend: "up",
    trendValue: "+0.9%",
    trendLabel: "increase than yesterday",
    icon: "search",
    color: "low",
  },
];
