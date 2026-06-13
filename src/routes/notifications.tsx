import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Bell, Sparkles, Users, Crown, Heart } from "lucide-react";

export const Route = createFileRoute("/notifications")({
  head: () => ({ meta: [{ title: "Notifications — Cineva AI" }] }),
  component: Page,
});

const notif = [
  { i: Sparkles, t: "Your video 'Cyber Tokyo' is ready", h: "2 min ago", c: "from-purple-500 to-pink-500", unread: true },
  { i: Heart, t: "Mira liked your 'Anime Trailer'", h: "1 hour ago", c: "from-pink-500 to-red-500", unread: true },
  { i: Crown, t: "Pro plan unlocked! Enjoy 4K renders", h: "Yesterday", c: "from-amber-500 to-orange-500", unread: false },
  { i: Users, t: "3 new creators followed you", h: "2 days ago", c: "from-blue-500 to-cyan-500", unread: false },
  { i: Bell, t: "New AI Effect: Holographic released", h: "3 days ago", c: "from-violet-500 to-purple-500", unread: false },
];

function Page() {
  return (
    <DashboardShell title="Notifications">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <button className="text-xs text-accent">Mark all as read</button>
      </div>
      <div className="space-y-2">
        {notif.map((n, i) => (
          <div key={i} className={`glass-card rounded-xl p-4 flex items-center gap-4 ${n.unread ? "border-primary/40" : ""}`}>
            <div className={`grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br ${n.c}`}><n.i className="h-4 w-4" /></div>
            <div className="flex-1">
              <div className="text-sm font-medium">{n.t}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">{n.h}</div>
            </div>
            {n.unread && <div className="h-2 w-2 rounded-full bg-primary" />}
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
