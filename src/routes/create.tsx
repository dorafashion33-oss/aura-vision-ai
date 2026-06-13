import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { useServerFn } from "@tanstack/react-start";
import { DashboardShell } from "@/components/DashboardShell";
import { generateText, generateImage } from "@/lib/ai.functions";
import {
  Sparkles, Wand2, Image as ImgIcon, Video, Loader2, Download,
  Copy, RotateCw, Film, Mic, Type,
} from "lucide-react";

export const Route = createFileRoute("/create")({
  head: () => ({ meta: [{ title: "Create — Cineva AI Studio" }] }),
  component: Page,
});

const styles = ["Cinematic", "Anime", "Realistic", "Cyberpunk", "Fantasy", "Pixar"];
const ratios = ["16:9", "9:16", "1:1", "4:3"];
const durations = ["3s", "5s", "10s", "15s"];

function Page() {
  const navigate = useNavigate();
  const genText = useServerFn(generateText);
  const genImage = useServerFn(generateImage);

  const [prompt, setPrompt] = useState("A cyberpunk Tokyo street at night, neon reflections in rain, slow cinematic dolly");
  const [style, setStyle] = useState("Cinematic");
  const [ratio, setRatio] = useState("16:9");
  const [duration, setDuration] = useState("5s");
  const [mode, setMode] = useState<"video" | "image" | "script">("video");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [script, setScript] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  async function handleGenerate() {
    setError(null);
    setLoading(true);
    setProgress(0);
    setScript(null);
    setImage(null);

    const timer = setInterval(() => setProgress((p) => Math.min(p + Math.random() * 12, 92)), 400);

    try {
      if (mode === "script") {
        const res = await genText({ data: { prompt: `Write a cinematic scene script for: ${prompt}. Style: ${style}. Aspect: ${ratio}, ${duration}.` } });
        setScript(res.text);
      } else if (mode === "image") {
        const res = await genImage({ data: { prompt: `${prompt}, ${style} style, high quality, cinematic lighting` } });
        setImage(res.dataUrl);
      } else {
        // video → real AI hero frame + scene script (Lovable AI gateway)
        const [img, scr] = await Promise.all([
          genImage({ data: { prompt: `Cinematic frame: ${prompt}. ${style} style, ${ratio} aspect, dramatic lighting` } }),
          genText({ data: { prompt: `Generate a ${duration} ${style.toLowerCase()} video scene description with shot list for: ${prompt}` } }),
        ]);
        setImage(img.dataUrl);
        setScript(scr.text);
      }
      setProgress(100);
    } catch (e: any) {
      setError(e?.message ?? "Generation failed. Please try again.");
    } finally {
      clearInterval(timer);
      setLoading(false);
    }
  }

  return (
    <DashboardShell title="AI Studio">
      <div className="grid lg:grid-cols-[1fr_420px] gap-6">
        {/* Left: prompt + settings */}
        <div className="space-y-5">
          <div className="glass-card rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-4 w-4 text-accent" />
              <h2 className="font-bold">What do you want to create?</h2>
            </div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-primary/40"
              placeholder="Describe your scene…"
            />
            <div className="mt-3 flex flex-wrap gap-2">
              {["video", "image", "script"].map((m) => (
                <button key={m} onClick={() => setMode(m as any)} className={`px-3 py-1.5 rounded-full text-xs capitalize inline-flex items-center gap-1.5 ${mode === m ? "bg-primary text-white" : "glass-card"}`}>
                  {m === "video" ? <Video className="h-3 w-3" /> : m === "image" ? <ImgIcon className="h-3 w-3" /> : <Type className="h-3 w-3" />} {m}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5">
            <h3 className="font-bold mb-3 text-sm">Style</h3>
            <div className="flex flex-wrap gap-2">
              {styles.map((s) => (
                <button key={s} onClick={() => setStyle(s)} className={`px-3 py-1.5 rounded-full text-xs ${style === s ? "bg-primary text-white" : "glass-card hover:bg-white/10"}`}>{s}</button>
              ))}
            </div>
            <h3 className="font-bold mb-3 text-sm mt-5">Aspect Ratio</h3>
            <div className="flex flex-wrap gap-2">
              {ratios.map((r) => (
                <button key={r} onClick={() => setRatio(r)} className={`px-3 py-1.5 rounded-full text-xs ${ratio === r ? "bg-primary text-white" : "glass-card hover:bg-white/10"}`}>{r}</button>
              ))}
            </div>
            <h3 className="font-bold mb-3 text-sm mt-5">Duration</h3>
            <div className="flex flex-wrap gap-2">
              {durations.map((d) => (
                <button key={d} onClick={() => setDuration(d)} className={`px-3 py-1.5 rounded-full text-xs ${duration === d ? "bg-primary text-white" : "glass-card hover:bg-white/10"}`}>{d}</button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="w-full h-14 btn-primary-glow rounded-2xl font-bold inline-flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? <><Loader2 className="h-5 w-5 animate-spin" /> Generating with AI…</> : <><Wand2 className="h-5 w-5" /> Generate {mode === "video" ? "Video" : mode === "image" ? "Image" : "Script"}</>}
          </button>
          {error && <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg p-3">{error}</div>}
        </div>

        {/* Right: preview */}
        <div className="space-y-5">
          <div className="glass-card rounded-2xl p-5 min-h-[400px] flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-sm flex items-center gap-2"><Film className="h-4 w-4 text-accent" /> Preview</h3>
              {(image || script) && <button onClick={() => { setImage(null); setScript(null); }} className="text-xs text-muted-foreground hover:text-foreground"><RotateCw className="h-3 w-3 inline mr-1" />Reset</button>}
            </div>

            {loading && !image && (
              <div className="flex-1 grid place-items-center">
                <div className="text-center">
                  <div className="relative h-24 w-24 mx-auto">
                    <svg className="absolute inset-0" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none" />
                      <motion.circle cx="50" cy="50" r="42" stroke="oklch(0.7 0.27 305)" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray="264" strokeDashoffset={264 - (264 * progress) / 100} transform="rotate(-90 50 50)" />
                    </svg>
                    <div className="absolute inset-0 grid place-items-center font-bold">{Math.round(progress)}%</div>
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">AI is dreaming…</div>
                </div>
              </div>
            )}

            {image && (
              <div className="relative rounded-xl overflow-hidden">
                <img src={image} alt="AI" className="w-full" />
                <div className="absolute top-2 right-2 flex gap-1">
                  <a href={image} download="cineva-ai.png" className="grid h-8 w-8 place-items-center rounded-lg bg-black/60 backdrop-blur"><Download className="h-4 w-4" /></a>
                </div>
              </div>
            )}

            {script && (
              <div className="mt-4 glass-card rounded-xl p-4 max-h-80 overflow-y-auto">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[10px] tracking-widest text-accent font-bold">AI SCRIPT</div>
                  <button onClick={() => navigator.clipboard.writeText(script)} className="text-xs text-muted-foreground hover:text-foreground"><Copy className="h-3 w-3 inline mr-1" />Copy</button>
                </div>
                <div className="text-xs whitespace-pre-wrap leading-relaxed">{script}</div>
              </div>
            )}

            {!loading && !image && !script && (
              <div className="flex-1 grid place-items-center text-center text-xs text-muted-foreground">
                <div>
                  <Sparkles className="h-10 w-10 mx-auto opacity-30" />
                  <div className="mt-2">Your AI creation will appear here</div>
                </div>
              </div>
            )}
          </div>

          <div className="glass-card rounded-2xl p-4 text-xs text-muted-foreground">
            <div className="font-bold text-foreground mb-1 flex items-center gap-1"><Mic className="h-3 w-3" /> Tip</div>
            Add camera moves ("slow dolly", "drone shot"), lighting ("golden hour"), and mood for cinematic results.
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
