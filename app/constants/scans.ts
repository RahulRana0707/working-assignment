export type ScanStatus = "completed" | "scheduled" | "failed";
export type ScanType = "Greybox" | "Blackbox";

export interface VulnerabilityCount {
  severity: "critical" | "high" | "medium" | "low";
  count: number;
}

export interface ScanRow {
  id: string;
  scanName: string;
  type: ScanType;
  status: ScanStatus;
  progress: number;
  vulnerabilities: VulnerabilityCount[];
  lastScan: string;
}

export const SCANS: ScanRow[] = [
  {
    id: "1",
    scanName: "Web App Servers",
    type: "Greybox",
    status: "completed",
    progress: 100,
    vulnerabilities: [
      { severity: "critical", count: 5 },
      { severity: "high", count: 12 },
      { severity: "medium", count: 23 },
      { severity: "low", count: 18 },
    ],
    lastScan: "4d ago",
  },
  {
    id: "2",
    scanName: "Web App Servers",
    type: "Greybox",
    status: "scheduled",
    progress: 100,
    vulnerabilities: [
      { severity: "critical", count: 3 },
      { severity: "high", count: 8 },
      { severity: "medium", count: 15 },
      { severity: "low", count: 10 },
    ],
    lastScan: "4d ago",
  },
  {
    id: "3",
    scanName: "IoT Devices",
    type: "Blackbox",
    status: "completed",
    progress: 100,
    vulnerabilities: [
      { severity: "critical", count: 2 },
      { severity: "high", count: 5 },
      { severity: "medium", count: 12 },
      { severity: "low", count: 7 },
    ],
    lastScan: "4d ago",
  },
  {
    id: "4",
    scanName: "Web App Servers",
    type: "Greybox",
    status: "failed",
    progress: 10,
    vulnerabilities: [
      { severity: "critical", count: 1 },
      { severity: "high", count: 2 },
      { severity: "medium", count: 4 },
      { severity: "low", count: 3 },
    ],
    lastScan: "3d ago",
  },
  {
    id: "5",
    scanName: "Temp Data",
    type: "Greybox",
    status: "completed",
    progress: 100,
    vulnerabilities: [
      { severity: "critical", count: 0 },
      { severity: "high", count: 1 },
      { severity: "medium", count: 6 },
      { severity: "low", count: 4 },
    ],
    lastScan: "4d ago",
  },
  {
    id: "6",
    scanName: "Web App Servers",
    type: "Blackbox",
    status: "scheduled",
    progress: 100,
    vulnerabilities: [
      { severity: "critical", count: 4 },
      { severity: "high", count: 10 },
      { severity: "medium", count: 20 },
      { severity: "low", count: 14 },
    ],
    lastScan: "4d ago",
  },
  {
    id: "7",
    scanName: "IoT Devices",
    type: "Greybox",
    status: "completed",
    progress: 100,
    vulnerabilities: [
      { severity: "critical", count: 2 },
      { severity: "high", count: 6 },
      { severity: "medium", count: 11 },
      { severity: "low", count: 9 },
    ],
    lastScan: "4d ago",
  },
  {
    id: "8",
    scanName: "Temp Data",
    type: "Blackbox",
    status: "failed",
    progress: 10,
    vulnerabilities: [
      { severity: "critical", count: 0 },
      { severity: "high", count: 0 },
      { severity: "medium", count: 2 },
      { severity: "low", count: 1 },
    ],
    lastScan: "3d ago",
  },
];

export const PAGINATION = {
  total: 100,
  pageSize: 15,
  currentPage: 1,
};
