import "server-only";

export type ImageSize = "1024x1024" | "1280x720" | "720x1280" | "1216x896";

export interface GenerateImageInput {
  prompt: string;
  size?: ImageSize;
  model?: string;
}

export interface GenerateImageResult {
  content: string;
  raw: unknown;
}

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
}

export async function generateImageWithOpenAICompat(input: GenerateImageInput): Promise<GenerateImageResult> {
  const baseUrl = normalizeBaseUrl(getRequiredEnv("IMAGE_GEN_BASE_URL"));
  const apiKey = getRequiredEnv("IMAGE_GEN_API_KEY");
  const model = input.model || process.env.IMAGE_GEN_MODEL || "gemini-3-pro-image";
  const size = input.size || "1024x1024";

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      extra_body: { size },
      messages: [
        {
          role: "user",
          content: input.prompt,
        },
      ],
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Image generation failed (${response.status}): ${errorText}`);
  }

  const data = (await response.json()) as {
    choices?: Array<{
      message?: {
        content?: unknown;
      };
    }>;
  };

  const content = data.choices?.[0]?.message?.content;

  if (typeof content === "string" && content.trim().length > 0) {
    return {
      content,
      raw: data,
    };
  }

  if (Array.isArray(content)) {
    const merged = content
      .map((item) => {
        if (typeof item === "string") return item;
        if (item && typeof item === "object" && "text" in item && typeof (item as { text?: unknown }).text === "string") {
          return (item as { text: string }).text;
        }
        return "";
      })
      .filter(Boolean)
      .join("\n");

    if (merged.length > 0) {
      return {
        content: merged,
        raw: data,
      };
    }
  }

  throw new Error("Image generation completed but returned empty content.");
}
