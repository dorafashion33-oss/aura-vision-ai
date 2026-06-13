import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Video, Image as ImgIcon, Mic, Music, Wand2, Scissors, Languages, Sparkles, FileText, Eraser } from "lucide-react";

export const Route = createFileRoute("/tools")({
  head: () => ({ meta: [{ title: "AI Tools — Cineva AI" }] }),
  component: Page,
});

const tools = [
  { i: Video, t: "Text to Video", d: "Generate cinematic clips from words", c: "from-purple-500 to-pink-500", to: "/create" },
  { i: ImgIcon, t: "Image to Video", d: "Animate stills with AI motion", c: "from-blue-500 to-cyan-500", to: "/create" },
  { i: Mic, t: "AI Lip Sync", d: "Sync any voice to any face", c: "from-orange-500 to-red-500", to: "/create" },
  { i: Music, t: "AI Music Gen", d: "Create scores from prompts", c: "from-green-500 to-emerald-500", to: "/create" },
  { i: Wand2, t: "Magic Remix", d: "Reimagine in any style", c: "from-yellow-500 to-orange-500", to: "/ai-effects" },
  { i: Scissors, t: "Smart Cut", d: "Auto-edit your footage", c: "from-pink-500 to-rose-500", to: "/create" },
  { i: Languages, t: "AI Translator", d: "Voice clone in 30 languages", c: "from-indigo-500 to-purple-500", to: "/create" },
  { i: Sparkles, t: "Upscaler 4K", d: "Enhance to crystal clarity", c: "from-teal-500 to-cyan-500", to: "/create" },
  { i: FileText, t: "Script Writer", d: "Generate viral scripts", c: "from-violet-500 to-fuchsia-500", to: "/create" },
  { i: Eraser, t: "BG Remover", d: "One-click background removal", c: "from-amber-500 to-yellow-500", to: "/create" },
];

function Page() {
  return (
    <DashboardShell title="AI Tools">
      <h1 className="text-3xl font-bold">AI Tools</h1>
      <p className="text-muted-foreground mt-1 mb-6">Everything you need to create cinematic content.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((t) => (
          <Link key={t.t} to={t.to} className="glass-card rounded-2xl p-5 hover:border-primary/40 transition group">
            <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${t.c} group-hover:scale-110 transition`}><t.i className="h-5 w-5" /></div>
            <div className="mt-4 font-bold">{t.t}</div>
            <div className="text-sm text-muted-foreground mt-1">{t.d}</div>
          </Link>
        ))}
      </div>
    </DashboardShell>
  );
}
