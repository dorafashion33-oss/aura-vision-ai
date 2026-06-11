import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Play,
  ArrowRight,
  Sparkles,
  Video,
  Image as ImageIcon,
  Wand2,
  Mic,
  Brush,
  Music,
  FileText,
  Captions,
  Heart,
  Star,
  Camera,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";
import heroPreview from "@/assets/hero-preview.jpg";
import gal1 from "@/assets/gal1.jpg";
import gal2 from "@/assets/gal2.jpg";
import gal3 from "@/assets/gal3.jpg";
import gal4 from "@/assets/gal4.jpg";
import gal5 from "@/assets/gal5.jpg";
import fastgen from "@/assets/fastgen.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cineva AI — Create Cinematic AI Videos in Seconds" },
      {
        name: "description",
        content:
          "Cineva AI turns your ideas into stunning cinematic videos with text-to-video, image-to-video, AI effects, lip sync, and more — no editing skills required.",
      },
      { property: "og:title", content: "Cineva AI — Cinematic AI Video Generator" },
      {
        property: "og:description",
        content: "Turn your ideas into stunning videos with the power of AI.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#06010F]/70 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <span className="grid h-9 w-9 place-items-center rounded-xl btn-primary-glow">
            <Camera className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">Cineva AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {["Home", "Create", "Explore", "Tools", "Pricing", "Blog"].map((n) => (
            <a key={n} href="#" className="hover:text-foreground transition-colors">
              {n}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 shrink-0">
          <button className="hidden sm:inline-flex h-9 px-4 rounded-lg text-sm font-medium border border-white/10 hover:bg-white/5 transition">
            Log in
          </button>
          <button className="inline-flex items-center h-9 px-4 rounded-lg text-sm font-medium btn-primary-glow">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[480px] w-[820px] rounded-full bg-[radial-gradient(circle,oklch(0.6_0.28_305/0.25),transparent_60%)] blur-2xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider glass-card text-primary-foreground/90">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            #1 AI Video Generator for Creators
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02]">
            Create Cinematic
            <br />
            AI Videos <span className="text-gradient-purple">in Seconds</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-lg">
            Turn your ideas into stunning videos with the power of AI.
            <br className="hidden sm:block" />
            No editing skills. No limits. Just imagination.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 h-12 px-6 rounded-xl text-sm font-semibold btn-primary-glow">
              Create Video Now <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 h-12 px-6 rounded-xl text-sm font-semibold border border-white/10 hover:bg-white/5 transition">
              <Play className="h-4 w-4" /> Watch Demo
            </button>
          </div>
          <div className="mt-10">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground">
              TRUSTED BY 1M+ CREATORS WORLDWIDE
            </p>
            <div className="mt-3 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[
                  "https://i.pravatar.cc/64?img=12",
                  "https://i.pravatar.cc/64?img=32",
                  "https://i.pravatar.cc/64?img=47",
                  "https://i.pravatar.cc/64?img=15",
                  "https://i.pravatar.cc/64?img=23",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-8 w-8 rounded-full border-2 border-[#06010F] object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  4.9/5 from 20,000+ creators
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -inset-8 bg-[radial-gradient(circle,oklch(0.65_0.28_305/0.35),transparent_70%)] blur-2xl -z-10" />
          <div className="relative rounded-3xl overflow-hidden glass-card shadow-[0_20px_80px_-20px_oklch(0.4_0.25_295/0.6)] aspect-[4/3]">
            <img
              src={heroPreview}
              alt="Cinematic AI preview"
              width={1280}
              height={896}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid place-items-center">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="grid h-20 w-20 place-items-center rounded-full bg-white/15 backdrop-blur-md border border-white/30 shadow-glow"
              >
                <Play className="h-7 w-7 fill-white text-white ml-1" />
              </motion.button>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { icon: Video, label: "Text to Video" },
              { icon: ImageIcon, label: "Image to Video" },
              { icon: Wand2, label: "AI Effects" },
              { icon: Mic, label: "Lip Sync" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="flex items-center justify-center gap-2 h-11 rounded-xl glass-card glow-border text-xs font-medium transition"
              >
                <Icon className="h-4 w-4 text-accent" />
                {label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const tabs = ["Trending", "Cinematic", "Anime", "Realistic", "Animation", "Product", "Gaming"];
const gallery = [
  { img: gal1, likes: "2.4K", plays: "1.2M" },
  { img: gal2, likes: "1.8K", plays: "900K" },
  { img: gal3, likes: "3.7K", plays: "2.1M" },
  { img: gal4, likes: "2.1K", plays: "1.1M" },
  { img: gal5, likes: "4.2K", plays: "2.8M" },
];

function Showcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <h2 className="text-3xl sm:text-4xl font-bold">Explore Amazing Creations</h2>
        <button className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border border-white/10 text-sm hover:bg-white/5 transition">
          View all <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {tabs.map((t, i) => (
          <button
            key={t}
            className={`shrink-0 h-9 px-4 rounded-lg text-sm font-medium transition ${
              i === 0
                ? "btn-primary-glow"
                : "glass-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {gallery.map((g, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl overflow-hidden glass-card glow-border aspect-[3/4] cursor-pointer"
          >
            <img
              src={g.img}
              alt=""
              width={640}
              height={800}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-medium">
              <span className="inline-flex items-center gap-1.5">
                <Heart className="h-3.5 w-3.5" /> {g.likes}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Play className="h-3.5 w-3.5 fill-current" /> {g.plays}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const tools = [
  { icon: Video, title: "Text to Video", desc: "Turn any text or prompt into a stunning video." },
  { icon: ImageIcon, title: "Image to Video", desc: "Animate your images and bring them to life." },
  { icon: Wand2, title: "AI Effects", desc: "Add magical AI effects, transitions and cinematic styles." },
  { icon: Mic, title: "Lip Sync", desc: "Perfect lip sync for any voice or audio." },
  { icon: Brush, title: "Motion Brush", desc: "Control movement in your videos with AI." },
  { icon: Music, title: "AI Sound", desc: "Generate realistic sound effects and background music." },
  { icon: FileText, title: "AI Script Writer", desc: "Create engaging scripts for your videos instantly." },
  { icon: Captions, title: "Auto Captions", desc: "Add stylish captions automatically in multiple languages." },
];

function Tools() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold">Powerful AI Video Tools</h2>
      <p className="mt-3 text-muted-foreground">
        Everything you need to create, edit and elevate your videos with AI.
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
            whileHover={{ y: -4 }}
            className="group p-5 rounded-2xl glass-card glow-border transition"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 border border-primary/30 text-accent group-hover:shadow-glow-sm transition">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold">{title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FastGen() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl overflow-hidden p-8 sm:p-12 border border-primary/30"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.25 0.12 295 / 0.6), oklch(0.18 0.08 290 / 0.4)), #0D0B1A",
        }}
      >
        <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,oklch(0.6_0.28_305/0.4),transparent_70%)] blur-2xl" />
        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Lightning Fast Generation</h2>
            <p className="mt-3 text-muted-foreground max-w-md">
              Our advanced AI models generate high-quality videos in seconds, not minutes.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { v: "10x", l: "Faster" },
                { v: "4K", l: "Resolution" },
                { v: "99%", l: "Uptime" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl sm:text-4xl font-bold text-gradient-purple">{s.v}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl glass-card p-4 shadow-card">
            <div className="rounded-xl bg-black/40 border border-white/10 p-4">
              <div className="text-[10px] font-semibold tracking-wider text-muted-foreground">
                PROMPT
              </div>
              <p className="mt-2 text-sm">
                A futuristic city at night, flying cars, neon lights, ultra realistic.
              </p>
              <button className="mt-4 w-full h-10 rounded-lg text-sm font-semibold btn-primary-glow">
                Generate
              </button>
            </div>
            <div className="mt-3 rounded-xl overflow-hidden border border-white/10 relative aspect-video">
              <img
                src={fastgen}
                alt="Generated preview"
                width={896}
                height={640}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Generating your video...</span>
              <span className="font-semibold">99%</span>
            </div>
            <div className="mt-1.5 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "99%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  const cols = [
    { title: "Product", links: ["Create", "Tools", "Pricing"] },
    { title: "Company", links: ["About Us", "Careers", "Blog"] },
    { title: "Support", links: ["Help Center", "Contact", "Terms"] },
  ];
  return (
    <footer className="border-t border-white/5 bg-black/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 lg:grid-cols-[1.2fr_2fr_1fr]">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <span className="grid h-9 w-9 place-items-center rounded-xl btn-primary-glow">
            <Camera className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-bold">Cineva AI</span>
        </a>
        <div className="grid grid-cols-3 gap-6">
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-semibold">{c.title}</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-foreground transition">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <div className="text-sm font-semibold">Follow Us</div>
          <div className="mt-3 flex gap-3">
            {[Twitter, MessageCircle, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-lg glass-card glow-border text-muted-foreground hover:text-foreground transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Cineva AI. All rights reserved.
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Tools />
        <FastGen />
      </main>
      <Footer />
    </div>
  );
}
