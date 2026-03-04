import type { ActivityLogEntry } from "@/app/constants/scanDetail";

interface ActivityLogProps {
  entries: ActivityLogEntry[];
}

function highlightMessage(message: string, highlights: string[] = []) {
  if (highlights.length === 0) return message;
  let result = message;
  for (const h of highlights) {
    result = result.replace(
      new RegExp(escapeRegex(h), "gi"),
      (match) => `{{H}}${match}{{/H}}`
    );
  }
  const parts = result.split(/\{\{H\}\}([\s\S]*?)\{\{\/H\}\}/g);
  const output: React.ReactNode[] = [];
  let i = 0;
  for (let j = 0; j < parts.length; j++) {
    if (j % 2 === 1) {
      output.push(
        <span key={i++} className="text-[var(--critical)] font-medium">
          {parts[j]}
        </span>
      );
    } else if (parts[j]) {
      output.push(parts[j]);
    }
  }
  return output.length > 1 ? output : result;
}

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function ActivityLog({ entries }: ActivityLogProps) {
  return (
    <div className="h-full min-h-[200px] overflow-y-auto font-mono text-xs text-[var(--foreground)]">
      {entries.map((entry, i) => (
        <div
          key={i}
          className="border-b border-[var(--border)] px-3 py-2 last:border-b-0"
        >
          <span className="select-none text-[var(--muted)]">[{entry.time}]</span>{" "}
          {highlightMessage(entry.message, entry.highlight)}
        </div>
      ))}
    </div>
  );
}
