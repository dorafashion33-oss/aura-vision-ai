import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Play, Download, MoreVertical, Plus } from "lucide-react";
import gal1 from "@/assets/gal1.jpg";
import gal2 from "@/assets/gal2.jpg";
import gal3 from "@/assets/gal3.jpg";
import gal4 from "@/assets/gal4.jpg";

export const Route = createFileRoute("/my-projects")({
  head: () => ({ meta: [{ title: "My Projects — Cineva AI" }] }),
  component: Page,
});

const projects = [
  { n: "Cyberpunk Trailer", date: "2 hours ago", img: gal1, status: "Ready" },
  { n: "Anime Short", date: "Yesterday", img: gal2, status: "Ready" },
  { n: "Product Demo", date: "3 days ago", img: gal3, status: "Rendering" },
  { n: "Vlog Intro", date: "Last week", img: gal4, status: "Ready" },
];

function Page() {
  return (
    <DashboardShell title="My Projects">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">My Projects</h1>
          <p className="text-muted-foreground mt-1">{projects.length} videos in your library.</p>
        </div>
        <Link to="/create" className="btn-primary-glow rounded-xl px-4 py-2 text-sm font-bold inline-flex items-center gap-2"><Plus className="h-4 w-4" /> New</Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div key={p.n} className="glass-card rounded-2xl overflow-hidden group">
            <div className="relative aspect-video">
              <img src={p.img} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 grid place-items-center transition"><Play className="h-12 w-12" /></div>
              <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-[10px] ${p.status === "Ready" ? "bg-green-500/80" : "bg-amber-500/80"}`}>{p.status}</div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <div className="font-semibold text-sm">{p.n}</div>
                <div className="text-[10px] text-muted-foreground">{p.date}</div>
              </div>
              <div className="flex gap-1">
                <button className="grid h-8 w-8 place-items-center rounded-lg hover:bg-white/10"><Download className="h-4 w-4" /></button>
                <button className="grid h-8 w-8 place-items-center rounded-lg hover:bg-white/10"><MoreVertical className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
