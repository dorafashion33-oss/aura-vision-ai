import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import gal1 from "@/assets/gal1.jpg";
import gal2 from "@/assets/gal2.jpg";
import gal3 from "@/assets/gal3.jpg";
import gal4 from "@/assets/gal4.jpg";
import gal5 from "@/assets/gal5.jpg";
import fastgen from "@/assets/fastgen.jpg";

export const Route = createFileRoute("/ai-effects")({
  head: () => ({ meta: [{ title: "AI Effects — Cineva AI" }] }),
  component: Page,
});

const effects = [
  { n: "Cinematic Bloom", img: gal3 },
  { n: "Anime Burst", img: gal2 },
  { n: "Cyber Glitch", img: gal1 },
  { n: "Slow Motion", img: gal5 },
  { n: "Vintage Film", img: gal4 },
  { n: "Holographic", img: fastgen },
  { n: "Dreamy Blur", img: gal2 },
  { n: "Neon Pulse", img: gal1 },
  { n: "VHS Glitch", img: gal4 },
];

function Page() {
  return (
    <DashboardShell title="AI Effects">
      <h1 className="text-3xl font-bold">AI Effects Library</h1>
      <p className="text-muted-foreground mt-1 mb-6">One-click cinematic transformations.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {effects.map((e) => (
          <div key={e.n} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
            <img src={e.img} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="font-bold">{e.n}</div>
              <button className="mt-2 text-xs px-3 py-1 rounded-full bg-primary/80 backdrop-blur">Apply Effect →</button>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
