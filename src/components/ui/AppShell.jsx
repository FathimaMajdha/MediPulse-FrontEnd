import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Activity, Bell, Search, Menu, X } from "lucide-react";
import { useMobile } from "../../hooks/useMobile";

export function AppShell({ children, navLabel, navItems, userName, userRole, userInitials }) {
  const isMobile = useMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path || (path !== "/" && location.pathname.startsWith(path + "/"));
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-sidebar-border transition-transform duration-300 ${
          isMobile && !sidebarOpen ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-4">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow">
            <Activity className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-tight">MediPulse</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {navLabel}
            </span>
          </div>
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(false)}
              className="ml-auto grid h-8 w-8 place-items-center rounded-lg hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <nav className="p-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.url}
              onClick={() => isMobile && setSidebarOpen(false)}
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition ${
                isActive(item.url)
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 border-t border-sidebar-border p-3">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition"
          >
            ← Back to home
          </Link>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main content */}
      <div className={`flex flex-1 flex-col ${isMobile ? "ml-0" : "ml-64"}`}>
        <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur">
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="grid h-9 w-9 place-items-center rounded-lg hover:bg-muted"
            >
              <Menu className="h-4 w-4" />
            </button>
          )}
          <div className="hidden md:flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground w-80">
            <Search className="h-4 w-4" />
            <span>Search…</span>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <button
              className="relative grid h-9 w-9 place-items-center rounded-full hover:bg-muted"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-destructive" />
            </button>
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">
                {userInitials}
              </div>
              <div className="hidden text-right leading-tight md:block">
                <div className="text-xs font-medium">{userName}</div>
                <div className="text-[10px] text-muted-foreground">{userRole}</div>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 px-4 py-6 md:px-8 md:py-8">{children}</main>
      </div>
    </div>
  );
}