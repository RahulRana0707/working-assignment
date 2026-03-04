"use client";

import Link from "next/link";
import type { ScanRow } from "@/app/constants/scans";
import { StatusBadge } from "./StatusBadge";
import { ProgressBar } from "./ProgressBar";
import { VulnerabilityBadges } from "./VulnerabilityBadges";

interface ScansTableProps {
  scans: ScanRow[];
}

export function ScansTable({ scans }: ScansTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse">
        <thead>
          <tr className="border-b border-[var(--border)]">
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)] sm:px-6">
              Scan Name
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)] sm:px-6">
              Type
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)] sm:px-6">
              Status
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)] sm:px-6">
              Progress
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)] sm:px-6">
              Vulnerability
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)] sm:px-6">
              Last Scan
            </th>
          </tr>
        </thead>
        <tbody>
          {scans.map((scan) => (
            <tr
              key={scan.id}
              className="border-b border-[var(--border)] transition-colors hover:bg-[var(--surface)]"
            >
              <td className="px-4 py-3 sm:px-6">
                <Link
                  href={`/scan/${scan.id}`}
                  className="font-medium text-[var(--foreground)] hover:text-[var(--accent)]"
                >
                  {scan.scanName}
                </Link>
              </td>
              <td className="px-4 py-3 text-sm text-[var(--muted)] sm:px-6">
                {scan.type}
              </td>
              <td className="px-4 py-3 sm:px-6">
                <StatusBadge status={scan.status} />
              </td>
              <td className="px-4 py-3 sm:px-6">
                <ProgressBar value={scan.progress} status={scan.status} />
              </td>
              <td className="px-4 py-3 sm:px-6">
                <VulnerabilityBadges items={scan.vulnerabilities} />
              </td>
              <td className="px-4 py-3 text-sm text-[var(--muted)] sm:px-6">
                {scan.lastScan}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
