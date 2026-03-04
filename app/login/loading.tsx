import { Skeleton } from "@/app/components/Skeleton";

export default function LoginLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0d0d0f] px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl">
        <Skeleton className="h-8 w-20 bg-[#e5e5e5]" />
        <Skeleton className="mt-3 h-4 w-44 bg-[#e5e5e5]" />
        <div className="mt-6 space-y-4">
          <Skeleton className="h-12 w-full rounded-lg bg-[#e5e5e5]" />
          <Skeleton className="h-12 w-full rounded-lg bg-[#e5e5e5]" />
        </div>
        <Skeleton className="mt-6 h-12 w-full rounded-lg bg-[#e5e5e5]" />
      </div>
    </div>
  );
}
