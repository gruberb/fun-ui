import type { MouseEvent, ReactNode } from "react";

export type AppShellNavItem = {
  id: string;
  label: string;
  /** Shorter label for the mobile bottom bar. */
  mobileLabel?: string;
  href?: string;
  icon?: ReactNode;
};

export type AppShellProps = {
  /** Brand block (usually a link with a mark and a name) at the top of the sidebar. */
  brand: ReactNode;
  nav: AppShellNavItem[];
  /** Id of the active item; null when no item is active. */
  activeId?: string | null;
  /** Called on plain clicks; the browser navigation is prevented. Omit to let `href` navigate. */
  onNavigate?: (id: string) => void;
  /** Accessible name of both nav landmarks. */
  navLabel?: string;
  children: ReactNode;
  className?: string;
};

function isPlainClick(event: MouseEvent) {
  return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
}

/** Layout shell only: sticky sidebar on desktop, top brand bar plus bottom nav on mobile. No routing. */
export default function AppShell({ brand, nav, activeId = null, onNavigate, navLabel = "Sections", children, className = "" }: AppShellProps) {
  const link = (item: AppShellNavItem, label: string, iconClass: string) => (
    <a
      key={item.id}
      href={item.href}
      className={activeId === item.id ? "is-active" : undefined}
      aria-current={activeId === item.id ? "page" : undefined}
      onClick={onNavigate ? (event) => { if (isPlainClick(event)) { event.preventDefault(); onNavigate(item.id); } } : undefined}
    >
      {item.icon && <span className={iconClass} aria-hidden="true">{item.icon}</span>}
      <span>{label}</span>
    </a>
  );
  return (
    <div className={`fui-app-shell${className ? ` ${className}` : ""}`}>
      <header className="fui-app-shell__side">
        <div className="fui-app-shell__brand">{brand}</div>
        <nav className="fui-app-shell__nav" aria-label={navLabel}>
          {nav.map((item) => link(item, item.label, "fui-app-shell__nav-icon"))}
        </nav>
      </header>
      <main className="fui-app-shell__main">{children}</main>
      <nav className="fui-app-shell__bottom-nav" aria-label={navLabel} style={{ gridTemplateColumns: `repeat(${nav.length}, minmax(0, 1fr))` }}>
        {nav.map((item) => link(item, item.mobileLabel ?? item.label, "fui-app-shell__bottom-icon"))}
      </nav>
    </div>
  );
}
