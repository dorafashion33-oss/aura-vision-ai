import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Check, Crown } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [{ title: "Pricing — Cineva AI" }] }),
  component: Page,
});

const plans = [
  { n: "Starter", p: "Free", d: "Try the magic", f: ["50 credits/mo", "720p videos", "10 templates", "Community support"], cta: "Get Started", to: "/get-started", highlight: false },
  { n: "Pro", p: "$19", d: "For serious creators", f: ["2,500 credits/mo", "4K videos", "All templates", "Lip sync + voice clone", "Priority queue"], cta: "Upgrade", to: "/upgrade", highlight: true },
  { n: "Studio", p: "$79", d: "Teams & agencies", f: ["Unlimited credits", "8K renders", "API access", "Team workspace", "Dedicated support"], cta: "Contact Sales", to: "/upgrade", highlight: false },
];

function Page() {
  return (
    <DashboardShell title="Pricing">
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold">Simple, creator-first pricing</h1>
        <p className="text-muted-foreground mt-3">Start free. Upgrade when you scale.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-5">
        {plans.map((p) => (
          <div key={p.n} className={`glass-card rounded-3xl p-7 ${p.highlight ? "border-primary/60 shadow-glow scale-[1.02]" : ""}`}>
            {p.highlight && <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 text-[10px] font-bold mb-2"><Crown className="h-3 w-3" /> MOST POPULAR</div>}
            <div className="text-sm text-muted-foreground">{p.n}</div>
            <div className="mt-1 text-4xl font-bold">{p.p}<span className="text-sm text-muted-foreground font-normal">{p.p !== "Free" && "/mo"}</span></div>
            <div className="mt-1 text-sm text-muted-foreground">{p.d}</div>
            <Link to={p.to} className={`mt-5 block text-center rounded-xl py-2.5 text-sm font-bold ${p.highlight ? "btn-primary-glow" : "glass-card hover:bg-white/10"}`}>{p.cta}</Link>
            <ul className="mt-6 space-y-2">
              {p.f.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
