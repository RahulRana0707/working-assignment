"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem as NavItemType } from "@/app/constants/navigation";
import { Icon } from "./icons";

interface NavItemProps {
  item: NavItemType;
}

export function NavItem({ item }: NavItemProps) {
  const pathname = usePathname();
  const isActive =
    pathname === item.href ||
    (item.href === "/" && pathname === "/") ||
    (item.id === "scans" && pathname.startsWith("/scan"));
  const IconComponent = Icon[item.icon] ?? Icon.layoutDashboard;

  return (
    <Link
      href={item.href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
        isActive
          ? "bg-[#2E5D57] text-white dark:bg-[#2E5D57]"
          : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      <IconComponent className="h-5 w-5 shrink-0" aria-hidden />
      <span>{item.label}</span>
    </Link>
  );
}
