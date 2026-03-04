import type { Finding } from "@/app/constants/scanDetail";
import { getSeverityClasses } from "@/app/utils/severity";

interface FindingCardProps {
  finding: Finding;
}

export function FindingCard({ finding }: FindingCardProps) {
  const { bg: severityBg, text: severityText } = getSeverityClasses(
    finding.severity
  );
  const label =
    finding.severity.charAt(0).toUpperCase() + finding.severity.slice(1);

  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`inline-flex rounded px-2 py-0.5 text-xs font-medium ${severityBg} ${severityText}`}
        >
          {label}
        </span>
        <span className="text-xs text-[var(--muted)]">{finding.timestamp}</span>
      </div>
      <h4 className="mt-2 text-sm font-semibold text-[var(--foreground)]">
        {finding.title}
      </h4>
      <p className="mt-1 font-mono text-xs text-[var(--accent)]">
        {finding.endpoint}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
        {finding.description}
      </p>
    </div>
  );
}
