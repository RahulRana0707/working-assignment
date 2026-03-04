export type ScanStageId = "spidering" | "mapping" | "testing" | "validating" | "reporting";

export interface ScanStage {
  id: ScanStageId;
  label: string;
  icon: string;
}

export interface ScanDetailField {
  label: string;
  value: string;
  valueHighlight?: string;
}

export interface ActivityLogEntry {
  time: string;
  message: string;
  highlight?: string[];
}

export type FindingSeverity = "critical" | "high" | "medium" | "low";

export interface Finding {
  id: string;
  severity: FindingSeverity;
  title: string;
  endpoint: string;
  description: string;
  timestamp: string;
}

export interface StatusBarMetrics {
  subAgents: number;
  parallelExecutions: number;
  operations: number;
}

export interface SeverityCounts {
  critical: number;
  high: number;
  medium: number;
  low: number;
}

export const SCAN_STAGES: ScanStage[] = [
  { id: "spidering", label: "Spidering", icon: "scanSearch" },
  { id: "mapping", label: "Mapping", icon: "network" },
  { id: "testing", label: "Testing", icon: "flaskConical" },
  { id: "validating", label: "Validating", icon: "fileCheck" },
  { id: "reporting", label: "Reporting", icon: "fileBarChart" },
];

export const SCAN_DETAIL_FIELDS: ScanDetailField[] = [
  { label: "Scan Type", value: "Grey Box" },
  { label: "Targets", value: "google.com" },
  { label: "Started At", value: "Nov 22, 09:00AM" },
  { label: "Credentials", value: "2 Active" },
  { label: "Files", value: "Control.pdf" },
  { label: "Checklists", value: "40/350", valueHighlight: "40" },
];

export const ACTIVITY_LOG_ENTRIES: ActivityLogEntry[] = [
  {
    time: "09:00:00",
    message: "Start reconnaissance and enumeration on helpdesk.democorp.com.",
  },
  {
    time: "09:01:00",
    message: "Target online, beginning port scanning.",
  },
  {
    time: "09:02:00",
    message: "Reconnaissance results for helpdesk.democorp.com: Apache httpd 2.4.65 on port 88.",
  },
  {
    time: "09:03:00",
    message: "Found login page for Help Desk Platform, noted \"TODO: Delete the testing account (test:test)\", testing password/test credential.",
  },
  {
    time: "09:04:00",
    message: "POST method not allowed on /password/test, checking JavaScript behavior, trying a different approach.",
  },
  {
    time: "09:05:00",
    message: "Redirects back to /password/test, checking for /api endpoint or other paths, trying test:test password on other endpoints.",
  },
  {
    time: "09:06:00",
    message: "Accessed dashboard using X-UserId: 10032 header, shows \"Welcome, John Doe\", suggesting an IDOR vulnerability, exploring further by changing X-UserId header.",
    highlight: ["X-UserId: 10032", "IDOR vulnerability"],
  },
];

export const FINDINGS: Finding[] = [
  {
    id: "1",
    severity: "critical",
    title: "SQL Injection in Authentication Endpoint",
    endpoint: "/api/users/profile",
    description:
      "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.",
    timestamp: "18:45:23",
  },
  {
    id: "2",
    severity: "high",
    title: "Unauthorized Access to User Metadata",
    endpoint: "/api/auth/login",
    description:
      "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.",
    timestamp: "18:45:23",
  },
  {
    id: "3",
    severity: "medium",
    title: "Broken Authentication Rate Limiting",
    endpoint: "/api/search",
    description:
      "No effective rate limiting detected on login attempts. Automated brute-force attempts possible.",
    timestamp: "18:45:23",
  },
];

export const SCAN_PROGRESS = {
  value: 0,
  label: "In Progress",
};

export const LIVE_CONSOLE_STATUS = "Running...";

export const STATUS_BAR_METRICS: StatusBarMetrics = {
  subAgents: 0,
  parallelExecutions: 2,
  operations: 1,
};

export const FINDING_COUNTS: SeverityCounts = {
  critical: 0,
  high: 0,
  medium: 0,
  low: 0,
};
