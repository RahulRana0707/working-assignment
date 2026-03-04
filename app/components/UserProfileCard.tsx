"use client";

import { USER_PROFILE } from "@/app/constants/navigation";
import { Icon } from "./icons";

export function UserProfileCard() {
  return (
    <div className="flex items-center gap-3 rounded-lg p-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
        <Icon.user className="h-5 w-5" aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-[var(--foreground)]">
          {USER_PROFILE.email}
        </p>
        <p className="truncate text-xs text-[var(--muted)]">{USER_PROFILE.role}</p>
      </div>
      <Icon.chevronRight className="h-4 w-4 shrink-0 text-[var(--muted)]" aria-hidden />
    </div>
  );
}
