---
id: 019d8b31-bb06-7006-c006-ee0600000006
title: 'Bài 6: Prompt Engineering cho Image Generation'
slug: bai-6-prompt-engineering-image-generation
description: >-
  Text prompt anatomy: subject, style, quality, negative prompts.
  Prompt weighting và emphasis syntax. Stable Diffusion prompt tips.
  Midjourney prompt patterns. DALL-E prompting strategies.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Diffusion Models — Cách mạng Tạo ảnh"
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: "Generative AI: Tạo Hình ảnh & Video với AI"
  slug: generative-ai-tao-hinh-anh-video
---

## Giới thiệu

Prompt Engineering cho image generation là nghệ thuật viết text prompts hiệu quả để kiểm soát output. Khác với LLM prompting, image prompts tập trung vào **visual description** — subject, style, lighting, composition, camera angle.

---

## 1. Anatomy của Prompt hiệu quả

```
[Subject] + [Medium/Style] + [Details] + [Quality] + [Lighting] + [Camera]

Ví dụ:
"A samurai warrior standing in a bamboo forest,
 digital painting, intricate armor details,
 4k, highly detailed, dramatic lighting,
 cinematic composition, wide angle shot"
```

### Template

| Component | Ví dụ | Vai trò |
|-----------|-------|---------|
| Subject | "a cat", "a castle" | Chủ thể chính |
| Action | "running", "sitting" | Hành động |
| Setting | "in a forest", "on Mars" | Bối cảnh |
| Style | "oil painting", "anime" | Phong cách |
| Quality | "4k", "highly detailed" | Chất lượng |
| Lighting | "golden hour", "neon" | Ánh sáng |
| Camera | "close-up", "wide angle" | Góc chụp |
| Mood | "peaceful", "dramatic" | Cảm xúc |

---

## 2. Style Keywords

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

## 3. Negative Prompts

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

## 4. Prompt Weighting

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

### A1111 Syntax (WebUI)
```
# Tăng emphasis: (word:1.3) hoặc ((word))
a ((beautiful)) sunset over the (ocean:1.5)

# Giảm emphasis: [word] hoặc (word:0.7)
a cat sitting on a [table]

# Alternate: [word1|word2] — switch mỗi step
a [cat|dog] sitting in a garden
```

---

## 5. Prompt Patterns thực tế

### Character Design
```
"Character concept art of a female cyberpunk hacker,
neon blue hair, glowing circuit tattoos on arms,
wearing a black leather jacket with LED strips,
standing in a rainy Tokyo alley at night,
neon signs reflecting in puddles,
digital art, artstation trending, 8k, highly detailed"
```

### Product Photography
```
"Professional product photography of a luxury watch,
silver metallic case, black leather strap,
on a dark marble surface, studio lighting,
soft shadows, shallow depth of field,
commercial photography, 4k, Canon EOS R5"
```

### Architecture
```
"Modern minimalist house, floor to ceiling windows,
concrete and wood materials, infinity pool,
surrounded by tropical garden, golden hour lighting,
architectural photography, wide angle, drone shot"
```

### Fantasy/Game Art
```
"Epic fantasy landscape, floating islands in the sky,
waterfalls cascading into clouds below,
ancient ruins with glowing runes,
dragon flying in the distance,
volumetric lighting, god rays, matte painting,
concept art, 4k, trending on artstation"
```

---

## 6. Systematic Prompt Testing

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

## 7. Tips & Best Practices

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

## Tổng kết

| Kỹ thuật | Mô tả |
|----------|--------|
| Prompt anatomy | Subject + Style + Details + Quality |
| Negative prompts | Loại bỏ unwanted elements |
| Prompt weighting | Tăng/giảm emphasis cho từng phần |
| Style keywords | Photography, art, 3D rendering styles |
| Systematic testing | Grid search parameters |

> 📌 **Bài tiếp theo:** ControlNet & Image-to-Image — kiểm soát output với reference images.
