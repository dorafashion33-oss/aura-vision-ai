import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Camera, Edit2 } from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — Cineva AI" }] }),
  component: Page,
});

function Page() {
  return (
    <DashboardShell title="Profile">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-center">
        <div className="relative">
          <div className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-3xl font-bold">U</div>
          <button className="absolute bottom-0 right-0 grid h-8 w-8 place-items-center rounded-full bg-primary border-2 border-background"><Camera className="h-3 w-3" /></button>
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-2xl font-bold">Your Name</h2>
          <p className="text-sm text-muted-foreground">creator@cineva.ai</p>
          <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-xs">Pro Plan ✨</div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {[
          { l: "Display Name", v: "Your Name" },
          { l: "Username", v: "@you" },
          { l: "Email", v: "creator@cineva.ai" },
          { l: "Location", v: "Mumbai, India" },
        ].map((f) => (
          <div key={f.l} className="glass-card rounded-xl p-4">
            <div className="text-[10px] tracking-widest text-muted-foreground">{f.l.toUpperCase()}</div>
            <div className="mt-1 flex items-center justify-between">
              <span>{f.v}</span>
              <Edit2 className="h-3 w-3 text-muted-foreground" />
            </div>
          </div>
        ))}
      </div>
      <div className="glass-card rounded-2xl p-6 mt-6">
        <h3 className="font-bold mb-3">Bio</h3>
        <textarea defaultValue="AI filmmaker exploring the edge of cinematic storytelling." className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm min-h-24" />
        <button className="mt-3 btn-primary-glow rounded-lg px-4 py-2 text-sm font-bold">Save Changes</button>
      </div>
    </DashboardShell>
  );
}
