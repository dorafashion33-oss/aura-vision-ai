import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import gal1 from "@/assets/gal1.jpg";
import gal2 from "@/assets/gal2.jpg";
import gal3 from "@/assets/gal3.jpg";
import gal4 from "@/assets/gal4.jpg";
import gal5 from "@/assets/gal5.jpg";
import fastgen from "@/assets/fastgen.jpg";

export const Route = createFileRoute("/templates")({
  head: () => ({ meta: [{ title: "Templates — Cineva AI" }] }),
  component: Page,
});

const tpl = [
  { n: "Instagram Reel", c: "Social", img: gal2 },
  { n: "YouTube Intro", c: "YouTube", img: gal3 },
  { n: "Product Ad", c: "Marketing", img: gal5 },
  { n: "Anime Trailer", c: "Anime", img: gal2 },
  { n: "Cyberpunk Scene", c: "Cinematic", img: gal1 },
  { n: "Wedding Highlight", c: "Personal", img: gal4 },
  { n: "Gaming Montage", c: "Gaming", img: fastgen },
  { n: "Tutorial Intro", c: "Education", img: gal3 },
];

function Page() {
  return (
    <DashboardShell title="Templates">
      <h1 className="text-3xl font-bold">Ready-to-Use Templates</h1>
      <p className="text-muted-foreground mt-1 mb-6">Start fast with pro-grade presets.</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {tpl.map((t) => (
          <Link to="/create" key={t.n} className="glass-card rounded-2xl overflow-hidden hover:border-primary/40 transition group">
            <div className="relative aspect-video">
              <img src={t.img} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition" />
              <div className="absolute top-2 left-2 px-2 py-1 rounded-full bg-black/60 text-[10px]">{t.c}</div>
            </div>
            <div className="p-3">
              <div className="font-semibold text-sm">{t.n}</div>
              <div className="text-[10px] text-muted-foreground mt-1">Use template →</div>
            </div>
          </Link>
        ))}
      </div>
    </DashboardShell>
  );
}
