---
id: 019d8b31-bb06-7006-c006-ee0600000006
title: 第 6 課：影像生成的快速工程
slug: bai-6-prompt-engineering-image-generation
description: 文字提示剖析：主題、風格、品質、負面提示。提示權重和強調語法。穩定擴散提示提示。中途提示模式。 DALL-E 提示策略。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: 第 2 部分：擴散模型 — 革命性的影像創建
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: 生成式 AI：使用 AI 創建圖像和視頻
  slug: generative-ai-tao-hinh-anh-video
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6319" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6319)"/>

  <!-- Decorations -->
  <g>
    <circle cx="761" cy="93" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="922" cy="114" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="1083" cy="135" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="744" cy="156" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="905" cy="177" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="103" x2="1100" y2="183" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="133" x2="1050" y2="203" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1035.9089653438086,184 1035.9089653438086,222 1003,241 970.0910346561914,222 970.0910346561914,184 1003,165" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 人工智慧與機器學習 — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 6 課：影像快速工程</tspan>
      <tspan x="60" dy="42">世代</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">生成式 AI：使用 AI 創建圖像和視頻</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：擴散模型 — 革命性的影像創建</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

圖像生成提示工程是編寫有效文字提示來控制輸出的藝術。與 LLM 提示不同，影像提示著重於**視覺描述**——主體、風格、燈光、構圖、拍攝角度。

---

## 1. 有效提示的剖析

```
[Subject] + [Medium/Style] + [Details] + [Quality] + [Lighting] + [Camera]

Ví dụ:
"A samurai warrior standing in a bamboo forest,
 digital painting, intricate armor details,
 4k, highly detailed, dramatic lighting,
 cinematic composition, wide angle shot"
```

### 模板

|組件|範例|角色 |
|------------|---------|---------|
|主題 | 「一隻貓」、「一座城堡」|主題|
|行動| 「跑步」、「坐著」|行動|
|設定| 「在森林裡」、「在火星上」|背景|
|風格| 「油畫」、「動漫」|風格|
|品質 | “4k”、“非常詳細”|品質 |
|燈光| 「黃金時刻」、「霓虹燈」 |光|
|相機 | “特寫”、“廣角”|拍攝角度|
|心情 | 「和平」、「戲劇性」|情感|

---

## 2. 風格關鍵字

```
Photography styles:
  "portrait photography, 85mm lens, shallow depth of field, bokeh"
  "street photography, candid, natural light, grainy film"
  "macro photography, extreme close-up, water droplets"

Art styles:
  "oil painting, impressionist, thick brushstrokes"
  "watercolor, soft edges, pastel colors"
  "digital art, concept art, artstation"
  "anime style, studio ghibli, cel shading"
  "pixel art, 16-bit, retro gaming"

3D/Rendering:
  "3D render, octane render, unreal engine 5"
  "isometric, low poly, miniature"
  "photorealistic, ray tracing, cinema 4D"
```

---

## 3. 負麵提示

```python
# Negative prompts: what to AVOID in generation

# Universal negative prompt
negative = """
blurry, low quality, low resolution, deformed, distorted,
bad anatomy, bad proportions, extra limbs, extra fingers,
ugly, poorly drawn, watermark, text, signature,
cropped, out of frame, worst quality, jpeg artifacts
"""

# Photo-specific negative
photo_negative = """
cartoon, anime, illustration, painting, drawing,
3d render, CGI, artificial, fake looking
"""

# Art-specific negative
art_negative = """
photograph, photo, realistic, 3d render,
blurry, low effort, amateur
"""
```

---

## 4. 提示加權

```python
# Hugging Face Diffusers: compel library
from compel import Compel

compel = Compel(tokenizer=pipe.tokenizer, text_encoder=pipe.text_encoder)

# Tăng weight: ++ hoặc (word)1.5
prompt = "a (beautiful)1.3 sunset over the (ocean)1.5, dramatic clouds"
conditioning = compel(prompt)

# Giảm weight
prompt = "a cat sitting on a (table)0.5"  # less emphasis on table

# Blend prompts
prompt = '"a cat".blend("a dog", 0.7, 0.3)'  # 70% cat, 30% dog
```

### A1111 文法 (WebUI)
```
# Tăng emphasis: (word:1.3) hoặc ((word))
a ((beautiful)) sunset over the (ocean:1.5)

# Giảm emphasis: [word] hoặc (word:0.7)
a cat sitting on a [table]

# Alternate: [word1|word2] — switch mỗi step
a [cat|dog] sitting in a garden
```

---

## 5. 實際提示模式

### 角色設計
```
"Character concept art of a female cyberpunk hacker,
neon blue hair, glowing circuit tattoos on arms,
wearing a black leather jacket with LED strips,
standing in a rainy Tokyo alley at night,
neon signs reflecting in puddles,
digital art, artstation trending, 8k, highly detailed"
```

### 產品攝影
```
"Professional product photography of a luxury watch,
silver metallic case, black leather strap,
on a dark marble surface, studio lighting,
soft shadows, shallow depth of field,
commercial photography, 4k, Canon EOS R5"
```

### 架構
```
"Modern minimalist house, floor to ceiling windows,
concrete and wood materials, infinity pool,
surrounded by tropical garden, golden hour lighting,
architectural photography, wide angle, drone shot"
```

### 幻想/遊戲藝術
```
"Epic fantasy landscape, floating islands in the sky,
waterfalls cascading into clouds below,
ancient ruins with glowing runes,
dragon flying in the distance,
volumetric lighting, god rays, matte painting,
concept art, 4k, trending on artstation"
```

---

## 6. 系統的即時測試

```python
# Grid search cho prompt optimization
subjects = ["a cat", "a robot", "a dragon"]
styles = ["oil painting", "digital art", "photograph"]
lightings = ["golden hour", "studio", "neon"]

for subject in subjects:
    for style in styles:
        for lighting in lightings:
            prompt = f"{subject}, {style}, {lighting} lighting, 4k"
            image = pipe(prompt, num_inference_steps=25).images[0]
            image.save(f"grid_{subject}_{style}_{lighting}.png")
```

---

## 7. 提示與最佳實踐

```
✅ DO:
- Đặt subject ở đầu prompt
- Sử dụng comma để phân tách concepts
- Thêm quality modifiers: "4k, highly detailed, sharp"
- Dùng negative prompts để loại bỏ artifacts
- Test nhiều seeds cho cùng prompt
- Tham khảo community prompts (Civitai, PromptHero)

❌ DON'T:
- Viết câu quá dài phức tạp (CLIP max 77 tokens)
- Dùng từ mơ hồ: "nice", "cool", "good"
- Mâu thuẫn: "realistic anime style"
- Bỏ qua negative prompts
- Kỳ vọng chính xác: AI interpret, không follow literal
```

---

## 總結

|工程|描述 |
|----------|--------|
|提示解剖學 |主題+風格+細節+品質|
|負面提示|刪除不需要的元素 |
|及時稱重|增加/減少每個部分的重點 |
|風格關鍵字|攝影、藝術、3D 渲染風格 |
|系統測試|網格搜尋參數|

> 📌 **下一篇文章：** ControlNet 與影像到影像 — 使用參考影像控制輸出。
