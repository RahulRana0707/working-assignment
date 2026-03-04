"use client";

import { useState } from "react";
import { NAV_ITEMS } from "@/app/constants/navigation";
import { NavItem } from "./NavItem";
import { UserProfileCard } from "./UserProfileCard";
import { Icon } from "./icons";

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const primaryNav = NAV_ITEMS.slice(0, 4);
  const secondaryNav = NAV_ITEMS.slice(4);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] lg:hidden"
        aria-label="Open menu"
      >
        <Icon.menu className="h-5 w-5" />
      </button>
      <div
        className={`fixed inset-0 z-40 bg-black/50 lg:hidden ${open ? "block" : "hidden"}`}
        aria-hidden
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed left-0 top-0 z-40 flex h-full w-64 flex-col border-r border-[var(--border)] bg-[var(--sidebar-bg)] transition-transform duration-200 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-14 items-center justify-between border-b border-[var(--border)] px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]">
              <div className="h-2.5 w-2.5 rounded-full bg-white" />
            </div>
            <span className="font-semibold text-[var(--foreground)]">aps</span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="lg:hidden"
            aria-label="Close menu"
          >
            <Icon.x className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto p-3" aria-label="Main navigation">
          {primaryNav.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
          <div className="my-2 border-t border-[var(--border)]" />
          {secondaryNav.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </nav>
        <div className="border-t border-[var(--border)] p-3">
          <UserProfileCard />
        </div>
      </aside>
    </>
  );
}
