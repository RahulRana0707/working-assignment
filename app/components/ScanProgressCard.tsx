import { CircularProgress } from "./CircularProgress";
import { ScanStagesStepper } from "./ScanStagesStepper";
import { ScanDetailsGrid } from "./ScanDetailsGrid";
import type { ScanStage } from "@/app/constants/scanDetail";
import type { ScanDetailField } from "@/app/constants/scanDetail";

interface ScanProgressCardProps {
  progressValue: number;
  progressLabel: string;
  stages: ScanStage[];
  activeStageIndex?: number;
  detailFields: ScanDetailField[];
}

export function ScanProgressCard({
  progressValue,
  progressLabel,
  stages,
  activeStageIndex = 0,
  detailFields,
}: ScanProgressCardProps) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
        <div className="flex shrink-0 justify-center lg:justify-start">
          <CircularProgress
            value={progressValue}
            label={progressLabel}
          />
        </div>
        <div className="min-w-0 flex-1">
          <ScanStagesStepper
            stages={stages}
            activeIndex={activeStageIndex}
          />
          <div
            className="my-6 border-t border-[var(--border)]"
            aria-hidden
          />
          <ScanDetailsGrid fields={detailFields} />
        </div>
      </div>
    </div>
  );
}
