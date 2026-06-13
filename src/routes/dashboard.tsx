import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Sparkles, Video, TrendingUp, Clock, Play, ArrowUpRight } from "lucide-react";
import gal1 from "@/assets/gal1.jpg";
import gal2 from "@/assets/gal2.jpg";
import gal3 from "@/assets/gal3.jpg";
import gal4 from "@/assets/gal4.jpg";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Cineva AI" }] }),
  component: Page,
});

function Page() {
  const stats = [
    { l: "Videos Created", v: "248", icon: Video, c: "from-purple-500 to-pink-500" },
    { l: "Credits Used", v: "12,480", icon: Sparkles, c: "from-blue-500 to-cyan-500" },
    { l: "This Month", v: "+34%", icon: TrendingUp, c: "from-green-500 to-emerald-500" },
    { l: "Render Time", v: "4.2 min", icon: Clock, c: "from-orange-500 to-red-500" },
  ];
  const recent = [gal1, gal2, gal3, gal4];
  return (
    <DashboardShell title="Dashboard">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome back 👋</h1>
        <p className="text-muted-foreground mt-1">Here's your creative overview.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.l} className="glass-card rounded-2xl p-5">
            <div className={`grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br ${s.c}`}><s.icon className="h-4 w-4" /></div>
            <div className="mt-3 text-2xl font-bold">{s.v}</div>
            <div className="text-xs text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Recent Projects</h2>
            <Link to="/my-projects" className="text-xs text-accent flex items-center gap-1">View all <ArrowUpRight className="h-3 w-3" /></Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {recent.map((img, i) => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden group">
                <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <Play className="absolute inset-0 m-auto h-10 w-10 opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-3 left-3 text-xs font-semibold">Project {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <Link to="/create" className="block p-3 rounded-lg bg-primary/15 border border-primary/30 hover:bg-primary/25"><Sparkles className="h-4 w-4 inline mr-2" />New Video</Link>
            <Link to="/templates" className="block p-3 rounded-lg glass-card hover:bg-white/10">Browse Templates</Link>
            <Link to="/ai-effects" className="block p-3 rounded-lg glass-card hover:bg-white/10">Try AI Effects</Link>
            <Link to="/upgrade" className="block p-3 rounded-lg glass-card hover:bg-white/10">Upgrade Plan</Link>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
