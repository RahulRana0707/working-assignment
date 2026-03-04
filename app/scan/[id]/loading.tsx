import { Skeleton } from "@/app/components/Skeleton";

export default function ScanLoading() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="flex">
        <aside className="hidden w-64 shrink-0 border-r border-[var(--border)] bg-[var(--sidebar-bg)] p-4 lg:block">
          <Skeleton className="mb-6 h-10 w-32" />
          <div className="space-y-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-10 w-full" />
            ))}
          </div>
          <div className="mt-8 border-t border-[var(--border)] pt-4">
            <Skeleton className="h-14 w-full rounded-lg" />
          </div>
        </aside>
        <main className="min-h-screen flex-1 pl-4 lg:pl-0">
          <div className="border-b border-[var(--border)] px-4 py-4 sm:px-6">
            <Skeleton className="h-6 w-56" />
            <div className="mt-3 flex gap-2">
              <Skeleton className="h-9 w-28" />
              <Skeleton className="h-9 w-24" />
            </div>
          </div>
          <div className="p-6">
            <div className="mb-8 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6">
              <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
                <Skeleton className="h-32 w-32 shrink-0 rounded-full" />
                <div className="flex-1 space-y-4">
                  <div className="flex gap-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Skeleton key={i} className="h-14 w-14 rounded-full" />
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <Skeleton key={i} className="h-16 rounded-lg" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <Skeleton className="h-80 rounded-xl" />
              <Skeleton className="h-80 rounded-xl" />
            </div>
          </div>
          <div className="border-t border-[var(--border)] px-4 py-3 sm:px-6">
            <Skeleton className="h-4 w-64" />
          </div>
        </main>
      </div>
    </div>
  );
}
