import { Skeleton } from "@/app/components/Skeleton";

export default function SignupLoading() {
  return (
    <div className="min-h-screen bg-[#0d0d0f]">
      <div className="flex">
        <div className="flex flex-1 flex-col justify-between px-8 py-12 lg:max-w-[60%] lg:px-16 lg:py-16">
          <div>
            <Skeleton className="h-9 w-24 rounded-full bg-white/10" />
            <Skeleton className="mt-20 h-10 w-80 bg-white/10" />
            <Skeleton className="mt-4 h-8 w-64 bg-white/10" />
            <Skeleton className="mt-12 h-6 w-28 bg-white/10" />
            <div className="mt-4 space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3">
                  <Skeleton className="h-5 w-5 shrink-0 rounded bg-white/10" />
                  <Skeleton className="h-5 flex-1 bg-white/10" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <Skeleton className="h-5 w-24 bg-white/10" />
            <Skeleton className="mt-2 h-4 w-40 bg-white/10" />
          </div>
        </div>
        <div className="flex w-full max-w-md items-center justify-center p-8 lg:w-[40%]">
          <div className="w-full rounded-3xl bg-white p-8 shadow-xl">
            <Skeleton className="h-8 w-24 bg-[#e5e5e5]" />
            <Skeleton className="mt-3 h-4 w-48 bg-[#e5e5e5]" />
            <div className="mt-6 space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-12 w-full rounded-lg bg-[#e5e5e5]" />
              ))}
            </div>
            <Skeleton className="mt-4 h-4 w-full rounded bg-[#e5e5e5]" />
            <Skeleton className="mt-6 h-12 w-full rounded-lg bg-[#e5e5e5]" />
            <div className="mt-6 flex gap-3">
              <Skeleton className="h-12 flex-1 rounded-lg bg-[#e5e5e5]" />
              <Skeleton className="h-12 flex-1 rounded-lg bg-[#e5e5e5]" />
              <Skeleton className="h-12 flex-1 rounded-lg bg-[#e5e5e5]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
