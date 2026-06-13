import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Heart, Eye, Play } from "lucide-react";
import gal1 from "@/assets/gal1.jpg";
import gal2 from "@/assets/gal2.jpg";
import gal3 from "@/assets/gal3.jpg";
import gal4 from "@/assets/gal4.jpg";
import gal5 from "@/assets/gal5.jpg";
import fastgen from "@/assets/fastgen.jpg";

export const Route = createFileRoute("/explore")({
  head: () => ({ meta: [{ title: "Explore — Cineva AI" }] }),
  component: Page,
});

function Page() {
  const categories = ["Trending", "Cinematic", "Anime", "Cyberpunk", "Realistic", "Fantasy", "Abstract"];
  const items = [gal1, gal2, gal3, gal4, gal5, fastgen, gal2, gal3, gal1];
  return (
    <DashboardShell title="Explore">
      <h1 className="text-3xl font-bold">Explore AI Creations</h1>
      <p className="text-muted-foreground mt-1 mb-6">Discover videos from creators worldwide.</p>
      <div className="flex gap-2 overflow-x-auto pb-3 mb-6">
        {categories.map((c, i) => (
          <button key={c} className={`shrink-0 px-4 py-2 rounded-full text-sm ${i === 0 ? "bg-primary text-white" : "glass-card hover:bg-white/10"}`}>{c}</button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((img, i) => (
          <div key={i} className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer">
            <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent" />
            <Play className="absolute inset-0 m-auto h-12 w-12 opacity-0 group-hover:opacity-100 transition" />
            <div className="absolute bottom-3 left-3 right-3">
              <div className="text-sm font-semibold">Cinematic Scene {i + 1}</div>
              <div className="flex items-center gap-3 text-[10px] text-muted-foreground mt-1">
                <span className="flex items-center gap-1"><Heart className="h-3 w-3" /> {(Math.random()*9+1).toFixed(1)}k</span>
                <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {Math.floor(Math.random()*99+10)}k</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
