import type { ScanDetailField } from "@/app/constants/scanDetail";

interface ScanDetailsGridProps {
  fields: ScanDetailField[];
}

export function ScanDetailsGrid({ fields }: ScanDetailsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 lg:grid-cols-6">
      {fields.map((field) => (
        <div key={field.label} className="min-w-0">
          <p className="text-xs font-medium text-[var(--muted)]">
            {field.label}
          </p>
          <p className="mt-0.5 truncate text-sm font-medium text-[var(--foreground)]">
            {field.valueHighlight !== undefined ? (
              <>
                <span className="text-[var(--accent)]">
                  {field.valueHighlight}
                </span>
                <span className="text-[var(--muted)]">
                  {field.value.slice(field.valueHighlight.length)}
                </span>
              </>
            ) : (
              field.value
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
