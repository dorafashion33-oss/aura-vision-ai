import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — Cineva AI" }] }),
  component: Page,
});

function Toggle({ on = false }: { on?: boolean }) {
  return (
    <div className={`h-6 w-11 rounded-full p-0.5 transition ${on ? "bg-primary" : "bg-white/10"}`}>
      <div className={`h-5 w-5 rounded-full bg-white transition ${on ? "translate-x-5" : ""}`} />
    </div>
  );
}

function Page() {
  return (
    <DashboardShell title="Settings">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="space-y-6 max-w-3xl">
        <section className="glass-card rounded-2xl p-6">
          <h2 className="font-bold mb-4">Account</h2>
          <div className="space-y-3 text-sm">
            <label className="block"><div className="text-[10px] tracking-widest text-muted-foreground mb-1">EMAIL</div><input defaultValue="creator@cineva.ai" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2" /></label>
            <label className="block"><div className="text-[10px] tracking-widest text-muted-foreground mb-1">LANGUAGE</div>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2"><option>English</option><option>Hindi</option><option>Spanish</option></select>
            </label>
          </div>
        </section>
        <section className="glass-card rounded-2xl p-6">
          <h2 className="font-bold mb-4">Preferences</h2>
          {["Email notifications", "Push notifications", "Marketing updates", "Beta features"].map((p, i) => (
            <div key={p} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
              <span className="text-sm">{p}</span><Toggle on={i < 2} />
            </div>
          ))}
        </section>
        <section className="glass-card rounded-2xl p-6 border-red-500/30">
          <h2 className="font-bold mb-2 text-red-400">Danger Zone</h2>
          <p className="text-xs text-muted-foreground mb-3">Permanently delete your account and all videos.</p>
          <button className="text-xs px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300">Delete Account</button>
        </section>
      </div>
    </DashboardShell>
  );
}
