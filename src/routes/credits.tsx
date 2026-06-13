import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Sparkles, TrendingDown, TrendingUp, Crown } from "lucide-react";

export const Route = createFileRoute("/credits")({
  head: () => ({ meta: [{ title: "Credits — Cineva AI" }] }),
  component: Page,
});

const history = [
  { t: "Cyberpunk video generation", a: -120, h: "2h ago" },
  { t: "Anime short render", a: -80, h: "Yesterday" },
  { t: "Monthly Pro refill", a: +2500, h: "3 days ago" },
  { t: "Lip sync clip", a: -45, h: "5 days ago" },
  { t: "Image upscale", a: -20, h: "1 week ago" },
];

function Page() {
  return (
    <DashboardShell title="Credits">
      <h1 className="text-3xl font-bold mb-6">Credits & Usage</h1>
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-1 glass-card rounded-2xl p-6 bg-gradient-to-br from-primary/20 to-accent/10 border-primary/40">
          <div className="text-xs text-muted-foreground">Available Balance</div>
          <div className="mt-2 text-4xl font-bold flex items-center gap-2"><Sparkles className="h-7 w-7 text-accent" /> 2,450</div>
          <Link to="/upgrade" className="mt-4 block btn-primary-glow rounded-lg px-4 py-2 text-sm font-bold text-center">Buy More Credits</Link>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <div className="text-xs text-muted-foreground">Used This Month</div>
          <div className="mt-2 text-3xl font-bold">1,240</div>
          <div className="text-xs text-green-400 mt-1 flex items-center gap-1"><TrendingDown className="h-3 w-3" /> 12% lower</div>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <div className="text-xs text-muted-foreground">Avg per Video</div>
          <div className="mt-2 text-3xl font-bold">85</div>
          <div className="text-xs text-orange-400 mt-1 flex items-center gap-1"><TrendingUp className="h-3 w-3" /> 5% higher</div>
        </div>
      </div>
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold">Recent Activity</h2>
          <Link to="/upgrade" className="text-xs px-3 py-1 rounded-full bg-primary/15 border border-primary/30 inline-flex items-center gap-1"><Crown className="h-3 w-3" /> Upgrade</Link>
        </div>
        <div className="divide-y divide-white/5">
          {history.map((h, i) => (
            <div key={i} className="py-3 flex items-center justify-between">
              <div>
                <div className="text-sm">{h.t}</div>
                <div className="text-[10px] text-muted-foreground">{h.h}</div>
              </div>
              <div className={`font-bold text-sm ${h.a > 0 ? "text-green-400" : "text-foreground"}`}>{h.a > 0 ? "+" : ""}{h.a}</div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
