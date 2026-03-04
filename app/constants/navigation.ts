export type NavItemId = "dashboard" | "projects" | "scans" | "schedule" | "notifications" | "settings" | "support";

export interface NavItem {
  id: NavItemId;
  label: string;
  href: string;
  icon: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "dashboard", label: "Dashboard", href: "/", icon: "layoutDashboard" },
  { id: "projects", label: "Projects", href: "/projects", icon: "briefcase" },
  { id: "scans", label: "Scans", href: "/scans", icon: "fileSearch" },
  { id: "schedule", label: "Schedule", href: "/schedule", icon: "calendar" },
  { id: "notifications", label: "Notifications", href: "/notifications", icon: "bell" },
  { id: "settings", label: "Settings", href: "/settings", icon: "settings" },
  { id: "support", label: "Support", href: "/support", icon: "helpCircle" },
];

export const USER_PROFILE = {
  email: "admin@edu.com",
  role: "Security Lead",
  avatarPlaceholder: true,
};
