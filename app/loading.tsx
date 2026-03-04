import { Skeleton } from "@/app/components/Skeleton";

export default function Loading() {
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
            <Skeleton className="h-6 w-48" />
            <div className="mt-3 flex gap-2">
              <Skeleton className="h-9 w-28" />
              <Skeleton className="h-9 w-24" />
            </div>
          </div>
          <div className="border-b border-[var(--border)] px-4 py-3 sm:px-6">
            <div className="flex flex-wrap gap-4">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-5 w-28" />
            </div>
          </div>
          <div className="p-6">
            <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-28 rounded-xl" />
              ))}
            </div>
            <Skeleton className="mb-4 h-10 w-full max-w-sm rounded-lg" />
            <div className="rounded-xl border border-[var(--border)] overflow-hidden">
              <div className="border-b border-[var(--border)] p-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="mt-2 h-4 w-4/5" />
                <Skeleton className="mt-2 h-4 w-3/4" />
              </div>
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton
                  key={i}
                  className="h-14 w-full border-b border-[var(--border)] last:border-0"
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
