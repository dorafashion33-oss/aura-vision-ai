import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import gal1 from "@/assets/gal1.jpg";
import gal2 from "@/assets/gal2.jpg";
import gal3 from "@/assets/gal3.jpg";
import gal4 from "@/assets/gal4.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Blog — Cineva AI" }] }),
  component: Page,
});

const posts = [
  { t: "The Future of AI Filmmaking in 2026", c: "AI Filmmaking", d: "8 min read", img: gal3 },
  { t: "How Creators Are Earning 6 Figures with AI Video", c: "Creator Growth", d: "12 min read", img: gal2 },
  { t: "Mastering Cinematic Prompts: A Complete Guide", c: "Tutorials", d: "15 min read", img: gal1 },
  { t: "Inside Cineva's Latest 4K Render Engine", c: "Startup", d: "5 min read", img: gal4 },
];

function Page() {
  return (
    <DashboardShell title="Blog">
      <h1 className="text-3xl font-bold">Cineva Magazine</h1>
      <p className="text-muted-foreground mt-1 mb-6">Stories, tutorials, and AI creator news.</p>
      <div className="grid md:grid-cols-2 gap-5">
        {posts.map((p, i) => (
          <Link to="/blog" key={i} className="glass-card rounded-2xl overflow-hidden group hover:border-primary/40">
            <div className="relative aspect-video">
              <img src={p.img} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition" />
            </div>
            <div className="p-5">
              <div className="text-[10px] tracking-widest text-accent font-semibold">{p.c.toUpperCase()}</div>
              <h2 className="mt-2 text-lg font-bold leading-tight">{p.t}</h2>
              <div className="mt-2 text-xs text-muted-foreground">{p.d}</div>
            </div>
          </Link>
        ))}
      </div>
    </DashboardShell>
  );
}
