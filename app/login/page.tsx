"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0d0d0f] px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-[#171717]">Log in</h1>
        <p className="mt-2 text-sm text-[#737373]">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-[#0cc8a8] hover:underline">
            Sign up
          </Link>
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email address*"
            required
            className="w-full rounded-xl border border-[#e5e5e5] bg-white px-4 py-3 text-[#171717] placeholder:text-[#737373] focus:border-[#0cc8a8] focus:outline-none focus:ring-1 focus:ring-[#0cc8a8]"
          />
          <input
            type="password"
            placeholder="Password*"
            required
            className="w-full rounded-xl border border-[#e5e5e5] bg-white px-4 py-3 text-[#171717] placeholder:text-[#737373] focus:border-[#0cc8a8] focus:outline-none focus:ring-1 focus:ring-[#0cc8a8]"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-[#0cc8a8] py-3 font-semibold text-white hover:opacity-95"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
