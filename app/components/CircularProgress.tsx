interface CircularProgressProps {
  value: number;
  label: string;
  size?: number;
  strokeWidth?: number;
}

export function CircularProgress({
  value,
  label,
  size = 120,
  strokeWidth = 8,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(100, Math.max(0, value));
  const offset = circumference - (clamped / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative rounded-full bg-[var(--surface)]"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          className="-rotate-90"
          aria-hidden
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-[var(--border)]"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="text-[var(--accent)] transition-[stroke-dashoffset] duration-500"
          />
        </svg>
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          aria-label={`${clamped}% complete`}
        >
          <span className="text-2xl font-semibold text-[var(--accent)]">
            {clamped}%
          </span>
        </div>
      </div>
      <span className="text-sm font-medium text-[var(--muted)]">{label}</span>
    </div>
  );
}
