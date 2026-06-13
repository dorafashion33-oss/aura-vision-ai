import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import gal1 from "@/assets/gal1.jpg";
import gal2 from "@/assets/gal2.jpg";
import gal3 from "@/assets/gal3.jpg";
import gal4 from "@/assets/gal4.jpg";

export const Route = createFileRoute("/community")({
  head: () => ({ meta: [{ title: "Community — Cineva AI" }] }),
  component: Page,
});

const posts = [
  { u: "Aarav K.", h: "2h", t: "Just rendered my first 4K anime trailer with Cineva! Mind blown 🤯", img: gal2, likes: 1240 },
  { u: "Mira D.", h: "5h", t: "Cyberpunk Tokyo scene — 12 seconds of pure AI magic.", img: gal1, likes: 892 },
  { u: "Leo W.", h: "8h", t: "Lip-sync feature is unreal. Cloned my voice in 3 languages.", img: gal3, likes: 564 },
  { u: "Zara P.", h: "1d", t: "Cinematic wedding highlights — all from text prompts.", img: gal4, likes: 2103 },
];

function Page() {
  return (
    <DashboardShell title="Community">
      <h1 className="text-3xl font-bold">Creator Community</h1>
      <p className="text-muted-foreground mt-1 mb-6">Share, learn, get inspired.</p>
      <div className="grid lg:grid-cols-2 gap-5">
        {posts.map((p, i) => (
          <article key={i} className="glass-card rounded-2xl overflow-hidden">
            <div className="p-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-accent font-bold text-sm">{p.u[0]}</div>
              <div>
                <div className="font-semibold text-sm">{p.u}</div>
                <div className="text-[10px] text-muted-foreground">{p.h} ago</div>
              </div>
            </div>
            <p className="px-4 pb-3 text-sm">{p.t}</p>
            <img src={p.img} alt="" className="w-full aspect-video object-cover" />
            <div className="p-4 flex items-center gap-5 text-xs text-muted-foreground">
              <button className="flex items-center gap-1 hover:text-foreground"><Heart className="h-4 w-4" /> {p.likes}</button>
              <button className="flex items-center gap-1 hover:text-foreground"><MessageCircle className="h-4 w-4" /> 42</button>
              <button className="flex items-center gap-1 hover:text-foreground ml-auto"><Share2 className="h-4 w-4" /></button>
            </div>
          </article>
        ))}
      </div>
    </DashboardShell>
  );
}
