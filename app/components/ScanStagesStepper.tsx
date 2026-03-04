import { Fragment } from "react";
import type { ScanStage } from "@/app/constants/scanDetail";
import { Icon } from "./icons";

interface ScanStagesStepperProps {
  stages: ScanStage[];
  activeIndex?: number;
}

export function ScanStagesStepper({
  stages,
  activeIndex = 0,
}: ScanStagesStepperProps) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center">
        {stages.map((stage, i) => {
          const isActive = i === activeIndex;
          const IconComponent = Icon[stage.icon] ?? Icon.search;
          const isLast = i === stages.length - 1;
          return (
            <Fragment key={stage.id}>
              <div className="flex shrink-0 flex-col items-center gap-2">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors sm:h-14 sm:w-14 ${
                    isActive
                      ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                      : "border-[var(--border)] bg-transparent text-[var(--muted)]"
                  }`}
                >
                  <IconComponent
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    aria-hidden
                  />
                </div>
                <span className="text-center text-xs font-medium text-[var(--muted)] sm:text-sm">
                  {stage.label}
                </span>
              </div>
              {!isLast && (
                <div
                  className="mx-1 h-px min-w-[12px] flex-1 bg-[var(--border)] sm:mx-2"
                  aria-hidden
                />
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
