import { Link, useRouterState } from "@tanstack/react-router";
import {
  Camera, Home, Sparkles, Compass, Wrench, CreditCard, BookOpen,
  LayoutDashboard, Folder, LayoutTemplate, Wand2, Users, Settings,
  Crown, Bell, User as UserIcon, Search, Menu, X,
} from "lucide-react";
import { useState, type ReactNode } from "react";

const nav = [
  { to: "/", label: "Home", icon: Home },
  { to: "/create", label: "Create", icon: Sparkles },
  { to: "/explore", label: "Explore", icon: Compass },
  { to: "/tools", label: "AI Tools", icon: Wrench },
  { to: "/ai-effects", label: "AI Effects", icon: Wand2 },
  { to: "/templates", label: "Templates", icon: LayoutTemplate },
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/my-projects", label: "My Projects", icon: Folder },
  { to: "/community", label: "Community", icon: Users },
  { to: "/blog", label: "Blog", icon: BookOpen },
  { to: "/pricing", label: "Pricing", icon: CreditCard },
];

const accountNav = [
  { to: "/profile", label: "Profile", icon: UserIcon },
  { to: "/notifications", label: "Notifications", icon: Bell },
  { to: "/credits", label: "Credits", icon: CreditCard },
  { to: "/settings", label: "Settings", icon: Settings },
  { to: "/upgrade", label: "Upgrade Plan", icon: Crown },
];

export function DashboardShell({ children, title }: { children: ReactNode; title?: string }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-64 glass-card border-r border-white/10 flex flex-col transition-transform ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-5 flex items-center justify-between border-b border-white/10">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl btn-primary-glow">
              <Camera className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-bold">Cineva AI</span>
          </Link>
          <button className="lg:hidden" onClick={() => setOpen(false)}><X className="h-5 w-5" /></button>
        </div>
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {nav.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                  active ? "bg-primary/20 text-foreground border border-primary/30" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                <n.icon className="h-4 w-4" /> {n.label}
              </Link>
            );
          })}
          <div className="my-3 h-px bg-white/10" />
          <div className="px-3 py-1 text-[10px] tracking-widest text-muted-foreground font-semibold">ACCOUNT</div>
          {accountNav.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                  active ? "bg-primary/20 text-foreground border border-primary/30" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                <n.icon className="h-4 w-4" /> {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-white/10">
          <Link to="/upgrade" className="block rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/40 p-3 text-center">
            <Crown className="h-4 w-4 mx-auto text-accent" />
            <div className="text-xs font-bold mt-1">Upgrade to Pro</div>
            <div className="text-[10px] text-muted-foreground">Unlock 4K & unlimited gens</div>
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0">
        <header className="sticky top-0 z-30 glass-card border-b border-white/10 px-4 lg:px-6 h-14 flex items-center gap-3">
          <button className="lg:hidden" onClick={() => setOpen(true)}><Menu className="h-5 w-5" /></button>
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input placeholder="Search…" className="w-full h-9 pl-9 pr-3 rounded-lg bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-primary/40" />
          </div>
          {title && <div className="hidden md:block text-sm text-muted-foreground">{title}</div>}
          <div className="flex items-center gap-2">
            <Link to="/credits" className="hidden sm:flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-primary/15 border border-primary/30">
              <Sparkles className="h-3 w-3 text-accent" /> 2,450
            </Link>
            <Link to="/notifications" className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 hover:bg-white/10"><Bell className="h-4 w-4" /></Link>
            <Link to="/profile" className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-xs font-bold">U</Link>
          </div>
        </header>
        <main className="p-4 lg:p-8 max-w-7xl mx-auto">{children}</main>
      </div>

      {open && <div className="fixed inset-0 z-30 bg-black/60 lg:hidden" onClick={() => setOpen(false)} />}
    </div>
  );
}
