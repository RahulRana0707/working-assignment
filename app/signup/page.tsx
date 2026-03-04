"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "@/app/components/icons";

const FEATURES = [
  "Effortlessly spider and map targets to uncover hidden security flaws",
  "Deliver high-quality, validated findings in hours, not weeks.",
  "Generate professional, enterprise-grade security reports automatically.",
];

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  const inputClass =
    "w-full rounded-lg border border-[#e5e5e5] bg-white px-4 py-3.5 text-base text-[#171717] placeholder:text-[#737373] focus:border-[#0cc8a8] focus:outline-none focus:ring-1 focus:ring-[#0cc8a8]";
  const buttonHeight = "h-12";

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0d0d0f]">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(15, 120, 110, 0.25) 0%, transparent 50%),
            radial-gradient(ellipse 60% 80% at 70% 60%, rgba(180, 70, 40, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 100% 100% at 0% 0%, rgba(30, 35, 45, 0.98) 0%, transparent 40%),
            linear-gradient(180deg, #0d0d0f 0%, #12141a 40%, #0f1114 100%)
          `,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.07) 0%, transparent 2px),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 3px)
          `,
          backgroundSize: "32px 32px, 56px 56px",
          backgroundPosition: "0 0, 16px 24px",
        }}
      />
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 1.5px),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 2px)
          `,
          backgroundSize: "40px 40px, 64px 64px",
          backgroundPosition: "5px 10px, 30px 5px",
        }}
      />
      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        <aside className="flex flex-1 flex-col justify-between px-8 py-12 lg:max-w-[60%] lg:px-16 lg:py-16 lg:pb-12">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-white"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0cc8a8]">
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
              </span>
              <span className="text-xl font-semibold tracking-tight">aps</span>
            </Link>
            <h1 className="mt-20 max-w-[18ch] text-[2.5rem] font-bold leading-tight text-white sm:text-[2.75rem] lg:text-[3rem] lg:leading-[1.15]">
              Expert level Cybersecurity
              <br />
              in <span className="text-[#0cc8a8]">hours</span> not weeks.
            </h1>
            <h2 className="mt-12 text-lg font-semibold text-white">
              What&apos;s included
            </h2>
            <ul className="mt-4 space-y-3">
              {FEATURES.map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90">
                  <span className="mt-0.5 shrink-0 text-[#22c55e]" aria-hidden>
                    <Icon.check className="h-5 w-5" />
                  </span>
                  <span className="text-sm leading-snug">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="flex items-center gap-2 text-white">
              <span className="text-[#22c55e]" aria-hidden>
                <Icon.star className="h-5 w-5 fill-current" />
              </span>
              <span className="text-sm font-medium">Trustpilot</span>
            </div>
            <p className="mt-1.5 text-sm text-white">
              Rated <span className="font-bold">4.5/5.0</span>{" "}
              <span className="text-white/90">(100k+ reviews)</span>
            </p>
          </div>
        </aside>
        <div className="flex shrink-0 items-end justify-center p-6 pb-12 lg:w-[40%] lg:min-w-[420px] lg:pb-12 lg:pt-16">
          <div className="w-full max-w-md rounded-[28px] bg-white p-8 shadow-xl sm:p-10">
            <h2 className="text-[1.75rem] font-bold text-[#171717]">Sign up</h2>
            <p className="mt-2 text-sm text-[#737373]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-[#0cc8a8] hover:underline"
              >
                Log in
              </Link>
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="firstName" className="sr-only">
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First name*"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name*"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email address*"
                  required
                  className={inputClass}
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password (8+ characters)*"
                  required
                  minLength={8}
                  className={`${inputClass} pr-12`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#525252] hover:text-[#171717]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <PasswordEyeIcon
                    className="h-5 w-5"
                    open={showPassword}
                  />
                </button>
              </div>
              <label className="flex cursor-pointer items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-[#e5e5e5] text-[#0cc8a8] focus:ring-[#0cc8a8]"
                />
                <span className="text-sm text-[#525252]">
                  I agree to Aps&apos;s{" "}
                  <Link href="#" className="font-medium text-[#0cc8a8] hover:underline">
                    Terms &amp; Conditions
                  </Link>{" "}
                  and acknowledge the{" "}
                  <Link href="#" className="font-medium text-[#0cc8a8] hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>
              <button
                type="submit"
                className={`w-full ${buttonHeight} rounded-lg font-semibold text-white transition-opacity hover:opacity-95`}
                style={{
                  background: "linear-gradient(90deg, #0cc8a8 0%, #0ab394 50%, #08a88a 100%)",
                }}
              >
                Create account
              </button>
            </form>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                className={`flex flex-1 items-center justify-center ${buttonHeight} rounded-lg bg-[#171717] text-white transition-opacity hover:opacity-90`}
                aria-label="Sign up with Apple"
              >
                <Icon.apple className="h-6 w-6" />
              </button>
              <button
                type="button"
                className={`flex flex-1 items-center justify-center ${buttonHeight} rounded-lg border border-[#e5e5e5] bg-white text-[#171717] transition-colors hover:bg-[#f5f5f5]`}
                aria-label="Sign up with Google"
              >
                <GoogleIcon className="h-6 w-6" />
              </button>
              <button
                type="button"
                className={`flex flex-1 items-center justify-center ${buttonHeight} rounded-lg bg-[#1877f2] text-white transition-opacity hover:opacity-90`}
                aria-label="Sign up with Meta"
              >
                <MetaIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PasswordEyeIcon({
  className,
  open,
}: {
  className?: string;
  open: boolean;
}) {
  if (open) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    );
  }
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function MetaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z" />
    </svg>
  );
}
