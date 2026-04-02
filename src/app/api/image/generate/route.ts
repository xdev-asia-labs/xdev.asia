import { NextResponse } from "next/server";
import { generateImageWithOpenAICompat, type ImageSize } from "@/lib/image-generation-service";

interface GenerateImageRequestBody {
  prompt?: string;
  size?: ImageSize;
  model?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as GenerateImageRequestBody;

    if (!body.prompt || body.prompt.trim().length === 0) {
      return NextResponse.json(
        { error: "Field 'prompt' is required." },
        { status: 400 }
      );
    }

    const result = await generateImageWithOpenAICompat({
      prompt: body.prompt,
      size: body.size,
      model: body.model,
    });

    return NextResponse.json({
      ok: true,
      content: result.content,
      raw: result.raw,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        ok: false,
        error: message,
      },
      { status: 500 }
    );
  }
}
