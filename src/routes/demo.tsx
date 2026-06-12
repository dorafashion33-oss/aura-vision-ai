import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  X, Camera, Zap, FileText, Image as ImageIcon, Sparkles, Mic, Users,
  Globe, Play, Pause, Maximize2, ChevronLeft, ChevronRight, Star, Shield,
} from "lucide-react";
import { useState } from "react";
import gal1 from "@/assets/gal1.jpg";
import gal2 from "@/assets/gal2.jpg";
import gal3 from "@/assets/gal3.jpg";
import gal4 from "@/assets/gal4.jpg";
import gal5 from "@/assets/gal5.jpg";
import fastgen from "@/assets/fastgen.jpg";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "AI Showcase Demo — Cineva AI" },
      { name: "description", content: "Watch Cineva AI in action — anime, cinematic, sci-fi, gaming and commercial AI video showcase." },
    ],
  }),
  component: DemoPage,
});

const scenes = [
  { img: gal2, title: "ANIME", subtitle: "TRANSFORMATION" },
  { img: gal1, title: "CYBERPUNK", subtitle: "CITY" },
  { img: gal4, title: "CINEMATIC", subtitle: "CAR CHASE" },
  { img: gal3, title: "FANTASY", subtitle: "WARRIOR" },
  { img: gal5, title: "EMOTIONAL", subtitle: "STORYTELLING" },
  { img: gal1, title: "GAMING", subtitle: "MONTAGE" },
  { img: gal3, title: "SCI-FI", subtitle: "ENVIRONMENTS" },
  { img: fastgen, title: "REALISTIC", subtitle: "AI COMMERCIAL" },
];

const leftFeatures = [
  { icon: Zap, title: "Generate in Seconds", desc: "Lightning fast AI generation in just a few clicks." },
  { icon: FileText, title: "Text to Video", desc: "Transform your ideas into stunning videos." },
  { icon: ImageIcon, title: "Image to Video", desc: "Bring your images to life with AI magic." },
  { icon: Sparkles, title: "AI Effects", desc: "Add cinematic AI effects, transitions and more." },
  { icon: Mic, title: "Lip Sync", desc: "Perfect lip sync for any voice or audio." },
];

const rightStats = [
  { icon: Users, big: "20M+", label: "Millions of Videos Generated" },
  { icon: null, big: "4K", label: "4K AI Rendering", sub: "Ultra HD Cinematic Quality", badge: "4K" },
  { icon: Zap, big: "10x Faster", label: "Lightning Fast Generation Speed" },
  { icon: Globe, big: "500K+", label: "Creator Community Worldwide" },
];

const testimonials = [
  { name: "Alex R.", role: "Content Creator", text: "Cineva AI changed the way I create. The quality is insane!", avatar: "https://i.pravatar.cc/64?img=12" },
  { name: "Sarah K.", role: "Filmmaker", text: "From text to cinematic scenes in seconds. Absolutely magical.", avatar: "https://i.pravatar.cc/64?img=32", featured: true },
  { name: "Mike D.", role: "YouTuber", text: "The future of video creation is here. Mind blown! 🤯", avatar: "https://i.pravatar.cc/64?img=15" },
];

function DemoPage() {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,oklch(0.5_0.28_305/0.18),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,oklch(0.5_0.28_305/0.15),transparent_70%)] blur-3xl" />
      </div>

      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl btn-primary-glow">
            <Camera className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-bold">Cineva AI</span>
        </Link>
        <div className="hidden md:block text-center">
          <div className="text-[10px] tracking-[0.3em] text-muted-foreground">THE FUTURE OF</div>
          <div className="text-sm tracking-[0.3em] text-gradient-purple font-semibold">AI VIDEO CREATION</div>
        </div>
        <Link to="/" className="grid h-11 w-11 place-items-center rounded-xl glass-card glow-border">
          <X className="h-4 w-4" />
        </Link>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-[240px_1fr_240px] gap-6">
        {/* Left rail */}
        <div className="space-y-4 order-2 lg:order-1">
          <div className="rounded-2xl glass-card glow-border p-5">
            <div className="text-[10px] tracking-widest text-accent font-semibold">AI POWERED</div>
            <div className="text-2xl font-bold mt-1">CREATION</div>
            <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
              Transform ideas into stunning videos with the power of AI.
            </p>
          </div>
          {leftFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="rounded-2xl glass-card glow-border p-4 cursor-pointer group"
            >
              <div className="flex items-start gap-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/15 border border-primary/30">
                  <f.icon className="h-4 w-4 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold flex items-center justify-between gap-2">
                    {f.title} <ChevronRight className="h-3 w-3 text-muted-foreground group-hover:text-accent transition" />
                  </div>
                  <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="grid place-items-center pt-4">
            <div className="relative h-24 w-24">
              <div className="absolute inset-0 rounded-full border border-primary/40 animate-pulse" />
              <div className="absolute inset-3 rounded-full border border-primary/60" />
              <div className="absolute inset-6 rounded-full border border-accent/80" />
              <div className="absolute inset-10 rounded-full bg-accent shadow-glow" />
            </div>
          </div>
        </div>

        {/* Center player */}
        <div className="order-1 lg:order-2">
          <div className="rounded-3xl glass-card border-primary/30 overflow-hidden shadow-glow">
            <div className="px-6 py-4 text-center text-xs tracking-[0.4em] text-muted-foreground border-b border-white/5">
              • • • AI SHOWCASE DEMO • • •
            </div>
            <div className="relative">
              <div className="max-h-[70vh] overflow-y-auto scrollbar-none">
                {scenes.map((s, i) => (
                  <div key={i} className="relative h-44 sm:h-52 overflow-hidden group cursor-pointer">
                    <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 text-right">
                      <div className="text-lg sm:text-2xl font-bold tracking-wider">{s.title}</div>
                      <div className="text-[10px] sm:text-xs tracking-[0.3em] text-muted-foreground">{s.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Floating play button */}
              <button
                onClick={() => setPlaying(!playing)}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-20 w-20 place-items-center rounded-full bg-primary/90 backdrop-blur shadow-glow border border-white/20 hover:scale-110 transition"
              >
                {playing ? <Pause className="h-7 w-7 fill-white text-white" /> : <Play className="h-7 w-7 fill-white text-white ml-1" />}
              </button>
            </div>
            {/* Player controls */}
            <div className="px-5 py-4 flex items-center gap-3 border-t border-white/5">
              <button onClick={() => setPlaying(!playing)}>
                {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
              </button>
              <span className="text-xs font-mono text-muted-foreground">00:18</span>
              <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-1/5 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>
              <span className="text-xs font-mono text-muted-foreground">01:28</span>
              <button className="text-[10px] font-semibold px-2 py-1 rounded border border-primary/40 text-accent">4K</button>
              <button><Maximize2 className="h-4 w-4 text-muted-foreground" /></button>
            </div>
          </div>

          <div className="mt-8 text-center text-[10px] tracking-[0.4em] text-accent font-semibold">
            CREATE ANYTHING. IMAGINE EVERYTHING.
          </div>
          <div className="mt-5 flex flex-col items-center gap-3">
            <Link to="/create" className="inline-flex items-center gap-2 h-13 px-8 py-4 rounded-2xl text-sm font-bold btn-primary-glow">
              <Sparkles className="h-4 w-4" /> Start Creating Now
            </Link>
            <button className="inline-flex items-center gap-2 h-11 px-6 rounded-xl text-sm font-medium glass-card glow-border">
              Explore Features <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right rail */}
        <div className="space-y-4 order-3">
          {rightStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="rounded-2xl glass-card glow-border p-5 text-center"
            >
              {s.badge ? (
                <div className="mx-auto h-10 w-10 grid place-items-center rounded-lg border border-primary/40 text-accent font-bold">{s.badge}</div>
              ) : s.icon ? (
                <s.icon className="h-7 w-7 mx-auto text-accent" />
              ) : null}
              <div className="mt-3 text-2xl font-bold text-gradient-purple">{s.big}</div>
              <div className="mt-1 text-xs text-muted-foreground leading-snug">{s.label}</div>
              {s.sub && <div className="mt-1 text-[10px] text-muted-foreground">{s.sub}</div>}
              {i === 1 && (
                <div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-primary to-accent" />
                </div>
              )}
              {i === 3 && (
                <div className="mt-3 h-10 rounded bg-[radial-gradient(circle_at_30%_50%,oklch(0.65_0.27_305/0.5),transparent_30%),radial-gradient(circle_at_70%_50%,oklch(0.65_0.27_305/0.4),transparent_30%)]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <div className="relative grid sm:grid-cols-3 gap-4 items-stretch">
          <button className="hidden sm:grid absolute -left-2 top-1/2 -translate-y-1/2 h-9 w-9 place-items-center rounded-full glass-card glow-border z-10">
            <ChevronLeft className="h-4 w-4" />
          </button>
          {testimonials.map((t, i) => (
            <div key={t.name} className={`rounded-2xl p-4 ${t.featured ? "border border-primary/40 bg-primary/10" : "glass-card glow-border"}`}>
              {t.featured && <div className="text-[10px] tracking-widest text-accent font-bold mb-2">LOVED BY CREATORS WORLDWIDE</div>}
              <div className="flex items-start gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="text-xs leading-relaxed">{t.text}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold">– {t.name}</div>
                      <div className="text-[10px] text-muted-foreground">{t.role}</div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} className="h-3 w-3 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button className="hidden sm:grid absolute -right-2 top-1/2 -translate-y-1/2 h-9 w-9 place-items-center rounded-full glass-card glow-border z-10">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-3 flex justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className={`h-1.5 rounded-full transition-all ${i === 1 ? "w-6 bg-accent" : "w-1.5 bg-white/20"}`} />
          ))}
        </div>
      </div>

      {/* Trusted brands */}
      <div className="border-t border-white/5 bg-black/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-[10px] tracking-[0.4em] text-muted-foreground mb-4">
            TRUSTED BY CREATORS & LEADING BRANDS
          </div>
          <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-3 text-muted-foreground text-sm font-semibold opacity-70">
            {["YouTube", "TikTok", "Instagram", "Discord", "NVIDIA", "Adobe"].map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground">
            <Shield className="h-3 w-3" /> Secure. Private. Built for Creators.
          </div>
        </div>
      </div>
    </div>
  );
}
