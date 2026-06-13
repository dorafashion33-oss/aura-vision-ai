import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera, Mail, Lock, User, Eye, Sparkles, ArrowRight, Check, X,
  Film, Megaphone, Gamepad2, Clapperboard, Heart, Wand2, Image as ImageIcon,
  Leaf, Star, Crown, Rocket,
} from "lucide-react";
import gal1 from "@/assets/gal1.jpg";
import gal2 from "@/assets/gal2.jpg";
import gal3 from "@/assets/gal3.jpg";
import gal4 from "@/assets/gal4.jpg";
import gal5 from "@/assets/gal5.jpg";
import fastgen from "@/assets/fastgen.jpg";

export const Route = createFileRoute("/get-started")({
  head: () => ({
    meta: [
      { title: "Get Started — Cineva AI Studio" },
      { name: "description", content: "Join Cineva AI — sign up and personalize your AI video creation studio in 3 quick steps." },
    ],
  }),
  component: GetStartedPage,
});

function GoogleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="#EA4335" d="M5.3 9.6l-3.1-2.4A11 11 0 001 12c0 1.7.4 3.4 1.2 4.8l3.1-2.4a6.5 6.5 0 010-4.8z"/><path fill="#34A853" d="M12 18.5a6.5 6.5 0 01-5.7-3.3l-3.1 2.4A11 11 0 0012 23a10.5 10.5 0 007.4-2.7l-3-2.4a6.5 6.5 0 01-4.4 1.6z"/><path fill="#4285F4" d="M22 12c0-.8-.1-1.6-.2-2.3H12v4.4h5.6a4.8 4.8 0 01-2.1 3.2l3 2.4A10.6 10.6 0 0022 12z"/><path fill="#FBBC05" d="M12 5.5c1.7 0 3.2.6 4.4 1.7l2.7-2.7A10.4 10.4 0 0012 1 11 11 0 002.2 7.2l3.1 2.4A6.5 6.5 0 0112 5.5z"/></svg>
  );
}

function AuthCard() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function handleGoogle() {
    setErr(null);
    try {
      const { lovable } = await import("@/integrations/lovable");
      const r = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin + "/create" });
      if (r.error) setErr(String(r.error.message ?? r.error));
      else if (!r.redirected) navigate({ to: "/create" });
    } catch (e: any) { setErr(e?.message ?? "Sign-in failed"); }
  }

  async function handleEmail() {
    setErr(null); setLoading(true);
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase.auth.signUp({
        email, password,
        options: { emailRedirectTo: window.location.origin + "/create", data: { full_name: name } },
      });
      if (error) {
        // try sign-in if already exists
        const { error: e2 } = await supabase.auth.signInWithPassword({ email, password });
        if (e2) { setErr(error.message); return; }
      }
      navigate({ to: "/create" });
    } catch (e: any) { setErr(e?.message ?? "Sign-up failed"); }
    finally { setLoading(false); }
  }

  return (
    <div className="rounded-3xl glass-card border-primary/30 p-6 sm:p-8 shadow-glow">
      <h2 className="text-2xl sm:text-3xl font-bold text-center leading-tight">
        Welcome to the<br />Future of Video Creation
      </h2>
      <p className="mt-3 text-sm text-muted-foreground text-center">
        Join thousands of creators<br />building the future with AI.
      </p>

      <div className="mt-6 space-y-2.5">
        <button onClick={handleGoogle} className="w-full h-12 rounded-xl glass-card glow-border flex items-center justify-center gap-3 text-sm font-medium hover:bg-white/5">
          <GoogleIcon /> Continue with Google
        </button>
      </div>

      <div className="my-6 flex items-center gap-3">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-[10px] tracking-widest text-muted-foreground">OR CONTINUE WITH EMAIL</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <div className="space-y-3">
        <Field icon={User} placeholder="Full Name" value={name} onChange={setName} />
        <Field icon={Mail} placeholder="Email Address" type="email" value={email} onChange={setEmail} />
        <Field icon={Lock} placeholder="Password" type="password" value={password} onChange={setPassword} trailing={<Eye className="h-4 w-4 text-muted-foreground" />} />
      </div>

      {err && <div className="mt-3 text-xs text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg p-2">{err}</div>}

      <button onClick={handleEmail} disabled={loading || !email || !password} className="mt-5 w-full h-12 rounded-xl btn-primary-glow text-sm font-bold inline-flex items-center justify-center gap-2 disabled:opacity-50">
        <Sparkles className="h-4 w-4" /> {loading ? "Creating account…" : "Enter AI Studio"}
      </button>

      <p className="mt-4 text-center text-[11px] text-muted-foreground">
        By continuing, you agree to our{" "}
        <a className="text-accent hover:underline">Terms of Service</a> and{" "}
        <a className="text-accent hover:underline">Privacy Policy</a>
      </p>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Already have an account? <a className="text-accent font-semibold hover:underline cursor-pointer">Sign In</a>
      </p>
    </div>
  );
}

function Field({ icon: Icon, placeholder, type = "text", trailing, value, onChange }: { icon: any; placeholder: string; type?: string; trailing?: React.ReactNode; value?: string; onChange?: (v: string) => void }) {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full h-12 pl-10 pr-10 rounded-xl glass-card text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/40"
      />
      {trailing && <div className="absolute right-3 top-1/2 -translate-y-1/2">{trailing}</div>}
    </div>
  );
}

const contentTypes = [
  { icon: Film, label: "AI Shorts" },
  { icon: ImageIcon, label: "Anime Videos", img: gal2 },
  { icon: Megaphone, label: "Ads & Commercials" },
  { icon: Gamepad2, label: "Gaming Edits" },
  { icon: Clapperboard, label: "Cinematic Films" },
  { icon: Heart, label: "Social Media Content" },
];
const visualStyles = [
  { label: "Cinematic", img: gal3 },
  { label: "Anime", img: gal2 },
  { label: "Realistic", img: gal5 },
  { label: "Cyberpunk", img: gal1 },
  { label: "Fantasy", img: gal4 },
  { label: "Pixar Style", img: fastgen },
];
const creatorLevels = [
  { icon: Leaf, label: "Beginner", desc: "Just getting started with AI video creation." },
  { icon: Star, label: "Creator", desc: "Creating videos regularly for personal or clients." },
  { icon: Crown, label: "Pro Editor", desc: "Professional video creator or editor." },
  { icon: Rocket, label: "Agency", desc: "Working with clients and larger projects." },
];

function OnboardingFlow({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [picks, setPicks] = useState<Record<number, string[]>>({ 1: ["AI Shorts"], 2: ["Cinematic"], 3: ["Creator"] });
  const navigate = useNavigate();

  const toggle = (s: number, v: string, multi = true) => {
    setPicks((p) => {
      const cur = p[s] || [];
      if (!multi) return { ...p, [s]: [v] };
      return { ...p, [s]: cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v] };
    });
  };

  const next = () => (step < 3 ? setStep(step + 1) : navigate({ to: "/create" }));

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md grid place-items-center p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }}
        className="w-full max-w-md rounded-3xl glass-card border-primary/30 p-6 sm:p-8 my-8"
      >
        <div className="flex items-center justify-between">
          <div className="text-[10px] tracking-[0.3em] text-muted-foreground font-semibold">STEP {step} OF 3</div>
          <button onClick={onClose}><X className="h-4 w-4 text-muted-foreground hover:text-foreground" /></button>
        </div>
        <div className="mt-3 flex gap-1.5">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`flex-1 h-1 rounded-full ${i <= step ? "bg-gradient-to-r from-primary to-accent" : "bg-white/10"}`} />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            {step === 1 && (
              <div className="mt-5">
                <h3 className="text-2xl font-bold leading-tight">What do you want<br />to create?</h3>
                <p className="mt-2 text-sm text-muted-foreground">Choose the type of videos you want to make with AI.</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {contentTypes.map((t) => {
                    const sel = picks[1].includes(t.label);
                    return (
                      <button
                        key={t.label}
                        onClick={() => toggle(1, t.label)}
                        className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition flex flex-col items-center justify-center gap-2 p-3 ${
                          sel ? "border-primary shadow-glow-sm bg-primary/15" : "border-white/10 glass-card hover:border-white/30"
                        }`}
                      >
                        {t.img && <img src={t.img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />}
                        <div className="absolute inset-0 bg-black/40" />
                        <t.icon className="relative h-7 w-7 text-accent" />
                        <span className="relative text-xs font-semibold text-center">{t.label}</span>
                        {sel && <div className="absolute top-2 right-2 h-5 w-5 grid place-items-center rounded-full bg-primary"><Check className="h-3 w-3" /></div>}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="mt-5">
                <h3 className="text-2xl font-bold leading-tight">Choose your<br />visual style</h3>
                <p className="mt-2 text-sm text-muted-foreground">This helps us personalize your AI generation experience.</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {visualStyles.map((s) => {
                    const sel = picks[2].includes(s.label);
                    return (
                      <button
                        key={s.label}
                        onClick={() => toggle(2, s.label, false)}
                        className={`relative aspect-square rounded-xl overflow-hidden border-2 transition ${
                          sel ? "border-primary shadow-glow-sm" : "border-white/10 hover:border-white/30"
                        }`}
                      >
                        <img src={s.img} alt={s.label} className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-2 left-0 right-0 text-center text-xs font-semibold">{s.label}</div>
                        {sel && <div className="absolute top-2 right-2 h-5 w-5 grid place-items-center rounded-full bg-primary"><Check className="h-3 w-3" /></div>}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="mt-5">
                <h3 className="text-2xl font-bold leading-tight">Select your<br />creator level</h3>
                <p className="mt-2 text-sm text-muted-foreground">We'll customize the experience for your level.</p>
                <div className="mt-5 space-y-2.5">
                  {creatorLevels.map((l) => {
                    const sel = picks[3].includes(l.label);
                    return (
                      <button
                        key={l.label}
                        onClick={() => toggle(3, l.label, false)}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 transition text-left ${
                          sel ? "border-primary bg-primary/10 shadow-glow-sm" : "border-white/10 glass-card hover:border-white/30"
                        }`}
                      >
                        <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 border border-primary/30">
                          <l.icon className="h-4 w-4 text-accent" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold">{l.label}</div>
                          <div className="text-[11px] text-muted-foreground">{l.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={next}
          className="mt-6 w-full h-12 rounded-xl btn-primary-glow text-sm font-bold inline-flex items-center justify-center gap-2"
        >
          {step === 3 ? <>Let's Go! 🚀</> : <>Continue <ArrowRight className="h-4 w-4" /></>}
        </button>
      </motion.div>
    </motion.div>
  );
}

function GetStartedPage() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,oklch(0.5_0.28_305/0.2),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,oklch(0.5_0.28_305/0.15),transparent_70%)] blur-3xl" />
      </div>

      {/* Top */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        <Link to="/" className="inline-flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl btn-primary-glow">
            <Camera className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-bold">Cineva AI</span>
        </Link>
      </div>

      {/* Hero + Auth */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.05]">
            Create the<br />future with <span className="text-gradient-purple">AI</span>
          </h1>
          <p className="mt-5 text-base text-muted-foreground">
            Your imagination is the only limit.<br />We handle the rest.
          </p>

          {/* Floating screens collage */}
          <div className="mt-8 relative h-72 sm:h-80">
            <FloatingImg src={gal3} className="top-0 left-4 h-32 w-44 -rotate-6" />
            <FloatingImg src={gal2} className="top-2 right-8 h-36 w-28 rotate-3" />
            <FloatingImg src={gal1} className="top-20 left-24 h-32 w-40 rotate-2" />
            <FloatingImg src={gal4} className="top-32 right-4 h-28 w-44 -rotate-3" />
            <div className="absolute top-36 left-2 rounded-2xl glass-card border-primary/40 p-3 shadow-glow w-44">
              <div className="text-[9px] tracking-widest text-accent font-bold">AI GENERATING...</div>
              <div className="mt-2 relative grid place-items-center h-20">
                <svg className="absolute inset-0 m-auto" width="70" height="70" viewBox="0 0 70 70">
                  <circle cx="35" cy="35" r="30" stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none" />
                  <motion.circle
                    cx="35" cy="35" r="30" stroke="oklch(0.7 0.27 305)" strokeWidth="4" fill="none"
                    strokeLinecap="round" strokeDasharray="188" transform="rotate(-90 35 35)"
                    initial={{ strokeDashoffset: 188 }} animate={{ strokeDashoffset: 4 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                  />
                </svg>
                <span className="relative text-lg font-bold">98%</span>
              </div>
              <div className="text-[10px] text-center text-muted-foreground">Finalizing your video</div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl glass-card p-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {[
              { v: "20M+", l: "Videos Generated" },
              { v: "4K", l: "AI Rendering" },
              { v: "500K+", l: "Creators Worldwide" },
              { v: <Sparkles className="h-6 w-6 mx-auto" />, l: "Lightning Fast Generation" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-gradient-purple">{s.v}</div>
                <div className="mt-1 text-[10px] text-muted-foreground leading-tight">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div onClick={() => setShowOnboarding(true)} className="cursor-pointer">
          <AuthCard />
        </div>
      </div>

      {/* Trigger note */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 text-center">
        <button
          onClick={() => setShowOnboarding(true)}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
        >
          <Wand2 className="h-4 w-4 text-accent" /> Or personalize your studio in 3 quick steps
        </button>
      </div>

      <AnimatePresence>
        {showOnboarding && <OnboardingFlow onClose={() => setShowOnboarding(false)} />}
      </AnimatePresence>
    </div>
  );
}

function FloatingImg({ src, className }: { src: string; className?: string }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute rounded-xl overflow-hidden border border-primary/30 shadow-glow-sm ${className}`}
    >
      <img src={src} alt="" className="h-full w-full object-cover" />
    </motion.div>
  );
}
