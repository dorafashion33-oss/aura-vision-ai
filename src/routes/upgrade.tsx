import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { Check, Crown, Zap, Rocket } from "lucide-react";

export const Route = createFileRoute("/upgrade")({
  head: () => ({ meta: [{ title: "Upgrade Plan — Cineva AI" }] }),
  component: Page,
});

const plans = [
  { n: "Pro", p: "$19", icon: Zap, c: "from-blue-500 to-cyan-500", f: ["2,500 credits/mo", "4K renders", "All templates", "Priority queue"], cta: "Upgrade to Pro", best: false },
  { n: "Studio", p: "$79", icon: Crown, c: "from-purple-500 to-pink-500", f: ["Unlimited credits", "8K renders", "API access", "Team workspace", "Dedicated support"], cta: "Go Studio", best: true },
  { n: "Enterprise", p: "Custom", icon: Rocket, c: "from-orange-500 to-red-500", f: ["Everything in Studio", "SSO + SAML", "Private cloud", "Custom SLA"], cta: "Talk to Sales", best: false },
];

function Page() {
  return (
    <DashboardShell title="Upgrade">
      <div className="text-center mb-10">
        <Crown className="h-10 w-10 mx-auto text-accent" />
        <h1 className="mt-3 text-4xl font-bold">Unlock the full Cineva AI</h1>
        <p className="mt-2 text-muted-foreground">Faster renders, higher resolution, unlimited creativity.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-5">
        {plans.map((p) => (
          <div key={p.n} className={`glass-card rounded-3xl p-7 ${p.best ? "border-primary/60 shadow-glow scale-[1.02]" : ""}`}>
            <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${p.c}`}><p.icon className="h-5 w-5" /></div>
            <div className="mt-4 text-sm text-muted-foreground">{p.n}</div>
            <div className="text-4xl font-bold">{p.p}{p.p !== "Custom" && <span className="text-sm font-normal text-muted-foreground">/mo</span>}</div>
            <button className={`mt-5 w-full rounded-xl py-2.5 text-sm font-bold ${p.best ? "btn-primary-glow" : "glass-card hover:bg-white/10"}`}>{p.cta}</button>
            <ul className="mt-6 space-y-2">
              {p.f.map((x) => <li key={x} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {x}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
