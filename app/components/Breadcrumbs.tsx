import Link from "next/link";
import { Icon } from "./icons";

interface BreadcrumbsProps {
  title: string;
  items: string[];
}

export function Breadcrumbs({ title, items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2">
      <span className="text-lg font-bold text-[var(--foreground)]">{title}</span>
    
        <Icon.home className="h-4 w-4" />
      <span className="text-[var(--muted)]" aria-hidden>
        /
      </span>
      {items.map((item, i) => (
        <span key={item} className="flex items-center gap-2 text-sm">
          {i > 0 && (
            <span className="text-[var(--muted)]" aria-hidden>
              /
            </span>
          )}
          {i === items.length - 1 ? (
            <span className="font-medium text-[var(--accent)]">{item}</span>
          ) : (
            <Link
              href="#"
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {item}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
