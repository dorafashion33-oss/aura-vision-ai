import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ChatInput = z.object({
  prompt: z.string().min(1).max(4000),
  system: z.string().optional(),
});

export const generateText = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ChatInput.parse(input))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("AI not configured");

    const { generateText: aiGen } = await import("ai");
    const { createLovableAiGatewayProvider } = await import("./ai-gateway.server");
    const gateway = createLovableAiGatewayProvider(key);

    const { text } = await aiGen({
      model: gateway("google/gemini-3-flash-preview"),
      system: data.system ?? "You are a creative AI video director. Give vivid cinematic responses, scene scripts, and shot ideas. Use markdown with sections.",
      prompt: data.prompt,
    });
    return { text };
  });

const ImageInput = z.object({ prompt: z.string().min(1).max(2000) });

export const generateImage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ImageInput.parse(input))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("AI not configured");

    const res = await fetch("https://ai.gateway.lovable.dev/v1/images/generations", {
      method: "POST",
      headers: {
        "Lovable-API-Key": key,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image",
        prompt: data.prompt,
        quality: "low",
      }),
    });
    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Image gen failed: ${res.status} ${err.slice(0, 200)}`);
    }
    const json = await res.json();
    const b64 = json?.data?.[0]?.b64_json;
    if (!b64) throw new Error("No image returned");
    return { dataUrl: `data:image/png;base64,${b64}` };
  });
