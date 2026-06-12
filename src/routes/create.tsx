import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search, Zap, Bell, LayoutDashboard, Video, FolderOpen, LayoutTemplate,
  Wand2, MessageSquare, Settings, Camera, ChevronDown, ChevronRight, Check,
  Loader2, Plus, Lightbulb, Upload, ArrowRight, Play, Share2, Download,
  Repeat, Maximize2, MoreHorizontal, Sparkles,
} from "lucide-react";
import gal1 from "@/assets/gal1.jpg";
import gal2 from "@/assets/gal2.jpg";
import gal3 from "@/assets/gal3.jpg";
import gal4 from "@/assets/gal4.jpg";
import gal5 from "@/assets/gal5.jpg";
import fastgen from "@/assets/fastgen.jpg";

export const Route = createFileRoute("/create")({
  head: () => ({
    meta: [
      { title: "Create Cinematic Video — Cineva AI Studio" },
      { name: "description", content: "Cineva AI Studio — describe anything and let AI bring it to life with cinematic video generation." },
    ],
  }),
  component: CreateStudio,
});

function Sidebar() {
  const items = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: Video, label: "Create Video", active: true },
    { icon: FolderOpen, label: "My Projects" },
    { icon: LayoutTemplate, label: "Templates" },
    { icon: Wand2, label: "AI Effects" },
    { icon: MessageSquare, label: "Community" },
    { icon: Settings, label: "Settings" },
  ];
  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0 border-r border-white/5 bg-[#0A0614]/60 backdrop-blur-xl sticky top-0 h-screen p-5">
      <Link to="/" className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl btn-primary-glow">
          <Camera className="h-5 w-5" />
        </span>
        <div>
          <div className="font-display font-bold text-base leading-tight">Cineva AI</div>
          <div className="text-[10px] tracking-widest text-muted-foreground">PRO AI STUDIO</div>
        </div>
      </Link>

      <nav className="mt-8 space-y-1">
        {items.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
              active
                ? "btn-primary-glow"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </nav>

      <div className="mt-auto space-y-4">
        <div className="rounded-2xl p-4 glass-card border-primary/20">
          <div className="grid h-9 w-9 place-items-center rounded-lg btn-primary-glow">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="mt-3 font-semibold">Upgrade to Ultra</div>
          <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
            {["Faster rendering", "4K exports", "Priority queue", "Unlimited projects"].map((t) => (
              <li key={t} className="flex items-center gap-2"><Check className="h-3 w-3 text-accent" /> {t}</li>
            ))}
          </ul>
          <button className="mt-3 w-full h-9 rounded-lg text-xs font-semibold btn-primary-glow">Upgrade Plan</button>
        </div>
        <div className="px-1">
          <div className="text-xs text-muted-foreground">Monthly Credits</div>
          <div className="mt-1 font-bold">2,450 <span className="text-muted-foreground font-normal text-xs">/ 5,000</span></div>
          <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-[49%] bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-xl glass-card px-3 py-2.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px] shadow-emerald-400" />
          <div>
            <div className="text-xs font-semibold">AI Status</div>
            <div className="text-[10px] text-muted-foreground">All systems operational</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function TopBar() {
  return (
    <div className="flex items-center gap-4 px-6 py-4 border-b border-white/5 sticky top-0 bg-[#06010F]/70 backdrop-blur-xl z-30">
      <div className="flex-1 max-w-2xl relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          placeholder="Search projects, prompts, templates..."
          className="w-full h-11 pl-10 pr-14 rounded-xl glass-card text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/40"
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-muted-foreground">⌘ K</kbd>
      </div>
      <button className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-xl glass-card text-sm font-semibold">
        <Zap className="h-4 w-4 fill-amber-400 text-amber-400" />
        2,450 Credits
      </button>
      <button className="relative grid h-10 w-10 place-items-center rounded-xl glass-card">
        <Bell className="h-4 w-4" />
        <span className="absolute -top-1 -right-1 h-4 w-4 text-[10px] grid place-items-center rounded-full bg-primary text-primary-foreground">3</span>
      </button>
      <button className="flex items-center gap-2 rounded-xl glass-card pl-1 pr-3 py-1">
        <img src="https://i.pravatar.cc/64?img=12" className="h-8 w-8 rounded-lg object-cover" alt="" />
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </button>
    </div>
  );
}

const promptSuggestions = ["Epic Fantasy", "Product Ad", "Luxury Commercial", "Anime Scene", "Sci-Fi City", "Hyper Realistic", "Fashion Campaign", "Action Sequence"];
const aspects = ["16:9", "9:16", "1:1", "21:9"];
const durations = ["5s", "10s", "15s", "30s", "60s"];
const fpsList = ["24", "30", "60"];
const resolutions = ["1080p", "2K", "4K", "8K"];
const stylePresets = [
  { label: "Cinematic", img: gal3, selected: true },
  { label: "Anime", img: gal2 },
  { label: "Realistic", img: gal5 },
  { label: "Gaming", img: gal1 },
  { label: "Sci-Fi", img: gal4 },
  { label: "Fantasy", img: gal3 },
  { label: "Commercial Ad", img: fastgen },
  { label: "Cyberpunk", img: gal1 },
];

function CreatePanel() {
  const [prompt, setPrompt] = useState("A futuristic cyberpunk city at night, flying vehicles, neon lights, rain reflections on wet streets, cinematic camera movement, ultra realistic, masterpiece, 8k.");
  const [aspect, setAspect] = useState("9:16");
  const [duration, setDuration] = useState("10s");
  const [fps, setFps] = useState("30");
  const [res, setRes] = useState("4K");
  const [style, setStyle] = useState("Cinematic");
  const [motion, setMotion] = useState(60);
  const [creativity, setCreativity] = useState(70);

  return (
    <div className="space-y-5">
      {/* Prompt Card */}
      <div className="rounded-2xl glass-card p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold">Create Cinematic Video</h2>
            <p className="text-sm text-muted-foreground">Describe anything and let AI bring it to life.</p>
          </div>
          <button className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg text-xs glass-card glow-border">
            <Lightbulb className="h-3.5 w-3.5 text-accent" /> Tips
          </button>
        </div>
        <div className="mt-4 rounded-xl border border-primary/40 bg-black/30 p-4 relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={5}
            className="w-full bg-transparent text-sm resize-none focus:outline-none placeholder:text-muted-foreground"
          />
          <div className="text-[10px] text-muted-foreground text-right">{prompt.length} / 2000</div>
        </div>

        <div className="mt-5">
          <div className="text-sm font-medium">Prompt Suggestions</div>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {promptSuggestions.map((s) => (
              <button key={s} className="h-8 px-3 rounded-lg text-xs glass-card glow-border text-muted-foreground hover:text-foreground transition">
                {s}
              </button>
            ))}
            <button className="h-8 w-8 grid place-items-center rounded-lg glass-card glow-border">
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-5 rounded-xl glass-card p-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Negative Prompt <span className="text-muted-foreground font-normal">(Optional)</span></div>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="mt-1.5 text-xs text-muted-foreground">blurry, distorted face, low quality, watermark, text, logo</p>
        </div>
      </div>

      {/* Video Settings */}
      <div className="rounded-2xl glass-card p-5">
        <h3 className="text-base font-semibold">Video Settings</h3>

        <SettingGroup label="Aspect Ratio">
          <div className="grid grid-cols-4 gap-2">
            {aspects.map((a) => (
              <Pill key={a} active={aspect === a} onClick={() => setAspect(a)}>{a}</Pill>
            ))}
          </div>
        </SettingGroup>

        <SettingGroup label="Duration">
          <div className="grid grid-cols-5 gap-2">
            {durations.map((d) => (
              <Pill key={d} active={duration === d} onClick={() => setDuration(d)}>{d}</Pill>
            ))}
          </div>
        </SettingGroup>

        <SettingGroup label="Motion Strength">
          <Slider value={motion} setValue={setMotion} leftLabel="Low" rightLabel="High" />
        </SettingGroup>

        <SettingGroup label="Camera Movement">
          <button className="w-full h-10 px-3 rounded-lg glass-card flex items-center justify-between text-sm">
            Cinematic Tracking
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>
        </SettingGroup>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs font-medium text-muted-foreground">FPS</div>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {fpsList.map((f) => <Pill key={f} active={fps === f} onClick={() => setFps(f)}>{f}</Pill>)}
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-muted-foreground">Resolution</div>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {resolutions.map((r) => <Pill key={r} active={res === r} onClick={() => setRes(r)}>{r}</Pill>)}
            </div>
          </div>
        </div>

        <SettingGroup label="Creativity Level">
          <Slider value={creativity} setValue={setCreativity} leftLabel="Precision" rightLabel="Creative" />
        </SettingGroup>

        <SettingGroup label="Style">
          <button className="w-full h-10 px-3 rounded-lg glass-card flex items-center justify-between text-sm">
            {style}
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>
        </SettingGroup>
      </div>

      {/* Style Presets */}
      <div className="rounded-2xl glass-card p-5">
        <h3 className="text-base font-semibold">Style Presets</h3>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {stylePresets.map((p) => {
            const selected = style === p.label;
            return (
              <button
                key={p.label}
                onClick={() => setStyle(p.label)}
                className={`relative aspect-square rounded-xl overflow-hidden border-2 transition ${
                  selected ? "border-primary shadow-glow-sm" : "border-white/10 hover:border-white/30"
                }`}
              >
                <img src={p.img} alt={p.label} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-2 left-0 right-0 text-center text-xs font-semibold">{p.label}</div>
                {selected && (
                  <div className="absolute top-2 right-2 h-5 w-5 grid place-items-center rounded-full bg-primary">
                    <Check className="h-3 w-3" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Image to Video */}
      <div className="rounded-2xl glass-card p-5">
        <h3 className="text-sm font-semibold">Image to Video <span className="text-muted-foreground font-normal">(Optional)</span></h3>
        <div className="mt-4 rounded-xl border-2 border-dashed border-primary/40 bg-primary/5 p-6 flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl btn-primary-glow shrink-0">
            <Upload className="h-5 w-5" />
          </div>
          <div>
            <div className="font-semibold text-sm">Drag & Drop Image Here</div>
            <div className="text-xs text-accent">or Click to Upload</div>
            <div className="text-[10px] text-muted-foreground mt-1">Supports: PNG, JPG, WEBP</div>
          </div>
        </div>
        <button className="mt-3 w-full flex items-center gap-3 rounded-xl glass-card glow-border p-3 text-left">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 border border-primary/30">
            <ArrowRight className="h-4 w-4 text-accent" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold">Image → Video</div>
            <div className="text-xs text-muted-foreground">Turn any image into stunning video</div>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>

      {/* Generate */}
      <div className="rounded-2xl glass-card p-5">
        <div className="grid grid-cols-2 gap-4 items-center">
          <div>
            <div className="text-xs text-muted-foreground">Estimated Cost</div>
            <div className="mt-1 inline-flex items-center gap-1.5 font-semibold">
              <Zap className="h-4 w-4 fill-amber-400 text-amber-400" /> 35 Credits
            </div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Generation Speed</div>
            <div className="mt-1 flex gap-1 rounded-lg glass-card p-0.5">
              {["Standard", "Fast", "Turbo"].map((s, i) => (
                <button key={s} className={`flex-1 h-7 text-[11px] rounded-md font-medium ${i === 0 ? "btn-primary-glow" : "text-muted-foreground"}`}>{s}</button>
              ))}
            </div>
          </div>
        </div>
        <button className="mt-4 w-full h-12 rounded-xl text-sm font-bold btn-primary-glow inline-flex items-center justify-center gap-2">
          <Sparkles className="h-4 w-4" /> Generate Video
        </button>
        <div className="mt-2 text-center text-[10px] text-muted-foreground">🔒 Secure generation. Your data is private.</div>
      </div>
    </div>
  );
}

function SettingGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <div className="text-xs font-medium text-muted-foreground">{label}</div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Pill({ active, children, onClick }: { active?: boolean; children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`h-9 rounded-lg text-xs font-medium transition ${
        active ? "btn-primary-glow" : "glass-card text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function Slider({ value, setValue, leftLabel, rightLabel }: { value: number; setValue: (v: number) => void; leftLabel: string; rightLabel: string }) {
  return (
    <div>
      <div className="flex items-center justify-between text-[10px] text-muted-foreground">
        <span>{leftLabel}</span><span>{rightLabel}</span>
      </div>
      <input
        type="range" min={0} max={100} value={value}
        onChange={(e) => setValue(+e.target.value)}
        className="mt-1 w-full h-1.5 appearance-none rounded-full bg-white/10 accent-[color:var(--accent)]"
        style={{ background: `linear-gradient(to right, oklch(0.65 0.27 305) ${value}%, rgba(255,255,255,0.1) ${value}%)` }}
      />
    </div>
  );
}

const generated = [
  { title: "Cyberpunk City Night", meta: "10s • 4K • Cinematic", time: "2 hours ago", duration: "00:10", img: gal1 },
  { title: "Neon Future Drive", meta: "10s • 4K • Cinematic", time: "5 hours ago", duration: "00:10", img: gal4 },
  { title: "Future Metropolis", meta: "8s • 2K • Sci-Fi", time: "1 day ago", duration: "00:08", img: gal3 },
  { title: "Blade Runner Vibes", meta: "12s • 4K • Cinematic", time: "2 days ago", duration: "00:12", img: gal5 },
];

function PreviewPanel() {
  return (
    <div className="space-y-5">
      <div className="rounded-2xl glass-card p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">AI Video Preview</h3>
          <button className="text-xs text-muted-foreground hover:text-foreground">✕ Clear</button>
        </div>
        <div className="mt-4 relative rounded-xl overflow-hidden aspect-video">
          <img src={fastgen} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur text-xs font-semibold">
            <Zap className="h-3.5 w-3.5 text-accent" /> AI Rendering...
          </div>
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative h-32 w-32">
              <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none" />
                <motion.circle
                  cx="50" cy="50" r="45" stroke="url(#g1)" strokeWidth="6" fill="none"
                  strokeLinecap="round" strokeDasharray="283"
                  initial={{ strokeDashoffset: 283 }}
                  animate={{ strokeDashoffset: 283 * 0.32 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.58 0.25 295)" />
                    <stop offset="100%" stopColor="oklch(0.78 0.18 305)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 grid place-items-center text-2xl font-bold">68%</div>
            </div>
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <div className="font-bold">Rendering Video</div>
            <div className="text-xs text-muted-foreground">Please wait, this may take a few moments.</div>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {[
            { label: "Prompt analyzed", status: "Completed", icon: Check, done: true },
            { label: "Style selected", status: "Completed", icon: Check, done: true },
            { label: "Motion generated", status: "Completed", icon: Check, done: true },
            { label: "Scene rendering", status: "In Progress", icon: Loader2, loading: true },
            { label: "Finalizing output", status: "Pending", icon: Plus, pending: true },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className={`grid h-7 w-7 place-items-center rounded-full ${
                s.done ? "bg-emerald-500/20 text-emerald-400" :
                s.loading ? "bg-primary/20 text-accent" : "bg-white/5 text-muted-foreground"
              }`}>
                <s.icon className={`h-3.5 w-3.5 ${s.loading ? "animate-spin" : ""}`} />
              </div>
              <div>
                <div className="text-sm font-medium">{s.label}</div>
                <div className={`text-[10px] ${s.done ? "text-emerald-400" : s.loading ? "text-accent" : "text-muted-foreground"}`}>{s.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="rounded-2xl glass-card p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">Timeline</h3>
          <span className="text-xs text-muted-foreground">4 Scenes</span>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {[gal1, gal3, gal4, gal5].map((img, i) => (
            <div key={i} className={`relative rounded-lg overflow-hidden aspect-video border-2 ${i === 1 ? "border-primary shadow-glow-sm" : "border-white/10"}`}>
              <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute top-1 left-1 text-[10px] font-bold px-1.5 rounded bg-black/60">{i + 1}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-[55%] bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>
      </div>

      {/* Generated Videos */}
      <div className="rounded-2xl glass-card p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">Generated Videos</h3>
          <button className="text-xs text-accent inline-flex items-center gap-1">View All <ChevronRight className="h-3 w-3" /></button>
        </div>
        <div className="mt-4 space-y-3">
          {generated.map((v) => (
            <div key={v.title} className="flex gap-3 rounded-xl glass-card p-2.5">
              <div className="relative h-20 w-32 shrink-0 rounded-lg overflow-hidden">
                <img src={v.img} alt={v.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 grid place-items-center bg-black/40">
                  <Play className="h-6 w-6 fill-white text-white" />
                </div>
                <div className="absolute bottom-1 right-1 text-[10px] bg-black/70 px-1.5 rounded font-mono">{v.duration}</div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm truncate">{v.title}</div>
                <div className="text-[11px] text-muted-foreground">{v.meta}</div>
                <div className="text-[10px] text-muted-foreground">{v.time}</div>
                <div className="mt-1.5 flex items-center gap-2 text-[10px] text-muted-foreground">
                  <button className="inline-flex items-center gap-1 hover:text-foreground"><Repeat className="h-3 w-3" />Remix</button>
                  <button className="inline-flex items-center gap-1 hover:text-foreground"><Download className="h-3 w-3" />Download</button>
                  <button className="inline-flex items-center gap-1 hover:text-foreground"><Maximize2 className="h-3 w-3" />Upscale</button>
                  <button className="inline-flex items-center gap-1 hover:text-foreground"><Share2 className="h-3 w-3" />Share</button>
                  <MoreHorizontal className="h-3 w-3 ml-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl p-5 relative overflow-hidden border border-primary/30"
        style={{ background: "linear-gradient(135deg, oklch(0.3 0.15 295 / 0.7), oklch(0.2 0.1 290 / 0.4))" }}>
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl btn-primary-glow">
            <Camera className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="font-bold">AI Creativity is Unlimited</div>
            <div className="text-xs text-muted-foreground">Generate, Remix, Inspire.</div>
          </div>
          <button className="grid h-9 w-9 place-items-center rounded-lg glass-card glow-border">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-4 h-10 rounded-lg bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 40%22><path d=%22M0 20 Q 50 0 100 20 T 200 20 T 300 20 T 400 20%22 stroke=%22oklch(0.65 0.27 305)%22 stroke-width=%221%22 fill=%22none%22 opacity=%220.5%22/></svg>')] bg-no-repeat bg-center" />
      </div>
    </div>
  );
}

function CreateStudio() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <TopBar />
        <div className="p-6 grid lg:grid-cols-2 gap-6 max-w-[1400px] mx-auto">
          <CreatePanel />
          <PreviewPanel />
        </div>
      </div>
    </div>
  );
}
