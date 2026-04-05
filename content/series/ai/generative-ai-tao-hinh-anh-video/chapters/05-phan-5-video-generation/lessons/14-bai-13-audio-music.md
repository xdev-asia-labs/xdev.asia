---
id: 019d8b31-bb13-7013-c013-ee1300000013
title: 'Bài 13: Audio & Music Generation — Tạo Âm thanh với AI'
slug: bai-13-audio-music-generation
description: >-
  Music generation: MusicGen, Suno AI, Udio. Sound effects generation.
  Voice synthesis và voice cloning cơ bản. Audio-visual sync.
  Text-to-speech cho video narration.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 5: Video Generation & Multimodal"
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: "Generative AI: Tạo Hình ảnh & Video với AI"
  slug: generative-ai-tao-hinh-anh-video
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3497" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3497)"/>

  <!-- Decorations -->
  <g>
    <circle cx="785" cy="45" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="970" cy="50" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="655" cy="55" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="840" cy="60" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="1025" cy="65" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="155" x2="1100" y2="235" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="185" x2="1050" y2="255" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="930.9807621135332,90 930.9807621135332,120 905,135 879.0192378864668,120 879.0192378864668,90.00000000000001 905,75" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI &amp; ML — Bài 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 13: Audio &amp; Music Generation — Tạo Âm</tspan>
      <tspan x="60" dy="42">thanh với AI</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Generative AI: Tạo Hình ảnh &amp; Video với AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Video Generation &amp; Multimodal</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Audio generation đã phát triển mạnh — từ **MusicGen** (Meta) cho nhạc, **Suno/Udio** cho songs hoàn chỉnh, đến **ElevenLabs** cho voice cloning. Bài này tổng hợp công cụ và kỹ thuật tạo audio với AI.

---

## 1. Music Generation — MusicGen

```python
from transformers import AutoProcessor, MusicgenForConditionalGeneration
import scipy

processor = AutoProcessor.from_pretrained("facebook/musicgen-small")
model = MusicgenForConditionalGeneration.from_pretrained("facebook/musicgen-small")

# Text-to-music
inputs = processor(
    text=["upbeat electronic dance music with synths and drums"],
    padding=True,
    return_tensors="pt",
)

audio_values = model.generate(
    **inputs,
    max_new_tokens=256,      # ~5 seconds per 256 tokens
    do_sample=True,
    guidance_scale=3.0,
)

# Save
sampling_rate = model.config.audio_encoder.sampling_rate
scipy.io.wavfile.write("music.wav", rate=sampling_rate,
                         data=audio_values[0, 0].numpy())
```

### MusicGen Variants

| Model | Parameters | Quality | Speed |
|-------|-----------|---------|-------|
| musicgen-small | 300M | Good | Fast |
| musicgen-medium | 1.5B | Better | Medium |
| musicgen-large | 3.3B | Best | Slow |
| musicgen-melody | 1.5B | Melody-conditioned | Medium |

---

## 2. Suno AI / Udio — Full Song Generation

```
Suno AI:
- Generate complete songs (vocals + instruments)
- Input: text description or lyrics
- Output: 2-4 minute songs
- Styles: pop, rock, jazz, classical, hip-hop, etc.

Udio:
- Similar capabilities, different aesthetic
- Better at certain genres
- More control over structure

Both are API-accessible for production use.
```

```python
# Suno API example
import requests

response = requests.post(
    "https://api.suno.ai/v1/generate",
    headers={"Authorization": f"Bearer {SUNO_API_KEY}"},
    json={
        "prompt": "A cheerful pop song about coding and AI",
        "style": "pop, upbeat, electronic",
        "duration": 120,  # seconds
        "instrumental": False,  # include vocals
    }
)
```

---

## 3. Sound Effects Generation

```python
from transformers import AutoProcessor, AudioLDM2Pipeline
import torch

# AudioLDM2 — text-to-audio
pipe = AudioLDM2Pipeline.from_pretrained(
    "cvssp/audioldm2-large",
    torch_dtype=torch.float16,
)
pipe.to("cuda")

# Generate sound effect
audio = pipe(
    prompt="thunderstorm with heavy rain and wind",
    negative_prompt="music, speech, low quality",
    num_inference_steps=50,
    audio_length_in_s=10.0,
).audios[0]

# Save
import soundfile as sf
sf.write("thunder.wav", audio, samplerate=16000)
```

---

## 4. Text-to-Speech

```python
# OpenAI TTS
from openai import OpenAI
from pathlib import Path

client = OpenAI()

response = client.audio.speech.create(
    model="tts-1-hd",
    voice="alloy",      # alloy, echo, fable, onyx, nova, shimmer
    input="Xin chào! Đây là bài narration được tạo bằng AI.",
    speed=1.0,
)

Path("narration.mp3").write_bytes(response.content)
```

### ElevenLabs — Voice Cloning

```python
from elevenlabs import ElevenLabs

client = ElevenLabs(api_key="your_key")

# Clone voice từ audio sample
voice = client.clone(
    name="My Voice",
    files=["voice_sample.mp3"],
    description="A warm male voice",
)

# Generate speech with cloned voice
audio = client.generate(
    text="Hello, this is my cloned voice speaking.",
    voice=voice,
    model="eleven_multilingual_v2",
)

with open("cloned_speech.mp3", "wb") as f:
    for chunk in audio:
        f.write(chunk)
```

---

## 5. Complete Audio Pipeline cho Video

```python
class VideoAudioPipeline:
    """Create complete audio track for AI-generated video"""

    async def create_audio_track(self, video_script, duration_seconds):
        # 1. Generate narration
        narration = await self.generate_narration(video_script)

        # 2. Generate background music
        music = await self.generate_music(
            style="cinematic ambient background",
            duration=duration_seconds
        )

        # 3. Generate sound effects
        sfx = await self.generate_sfx(video_script)

        # 4. Mix audio tracks
        final = self.mix_audio(
            narration=narration,
            music=music,
            sfx=sfx,
            music_volume=0.3,
            sfx_volume=0.5,
        )

        return final

    def mix_audio(self, narration, music, sfx, music_volume, sfx_volume):
        """Mix multiple audio tracks"""
        from pydub import AudioSegment

        narration_audio = AudioSegment.from_file(narration)
        music_audio = AudioSegment.from_file(music) - (1 / music_volume)
        sfx_audio = AudioSegment.from_file(sfx) - (1 / sfx_volume)

        # Overlay
        mixed = narration_audio.overlay(music_audio).overlay(sfx_audio)
        mixed.export("final_audio.mp3", format="mp3")
        return "final_audio.mp3"
```

---

## Tổng kết

| Tool | Type | Open Source | Best For |
|------|------|------------|----------|
| MusicGen | Music | Yes | Background music |
| Suno | Songs | No (API) | Full songs with vocals |
| AudioLDM2 | Sound FX | Yes | Sound effects |
| OpenAI TTS | Speech | No (API) | Narration |
| ElevenLabs | Voice | No (API) | Voice cloning |

> 📌 **Bài tiếp theo:** 3D Generation & Avatar AI.
