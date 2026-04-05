---
id: 019d8b31-bb17-7017-c017-ee1700000017
title: 'Bài 17: AI Safety, Ethics & Copyright trong Generative AI'
slug: bai-17-ai-safety-ethics-copyright
description: >-
  Content safety: NSFW detection, prompt filtering. Deepfake detection
  và prevention. Copyright issues với AI-generated content. Watermarking
  AI images (C2PA). Responsible AI deployment guidelines.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 6: Production & Ứng dụng Thực tế"
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: "Generative AI: Tạo Hình ảnh & Video với AI"
  slug: generative-ai-tao-hinh-anh-video
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9269" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9269)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1008" cy="114" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="916" cy="142" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="824" cy="170" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="732" cy="198" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="640" cy="226" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="134" x2="1100" y2="214" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="164" x2="1050" y2="234" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1059.1147367097487,219.5 1059.1147367097487,248.5 1034,263 1008.8852632902513,248.5 1008.8852632902513,219.5 1034,205" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI &amp; ML — Bài 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 17: AI Safety, Ethics &amp; Copyright</tspan>
      <tspan x="60" dy="42">trong Generative AI</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Generative AI: Tạo Hình ảnh &amp; Video với AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 6: Production &amp; Ứng dụng Thực tế</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Deploy Generative AI vào production đi kèm trách nhiệm lớn — từ **content safety**, **deepfake prevention**, đến **copyright compliance**. Bài này cover các best practices, tools, và guidelines cho responsible AI deployment.

---

## 1. Content Safety — NSFW Detection

```python
from transformers import pipeline

# NSFW classifier
nsfw_detector = pipeline(
    "image-classification",
    model="Falconsai/nsfw_image_detection"
)

def check_safety(image):
    """Check if generated image is safe"""
    results = nsfw_detector(image)
    for result in results:
        if result["label"] == "nsfw" and result["score"] > 0.8:
            return False, "NSFW content detected"
    return True, "Safe"

# Integrate into generation pipeline
def safe_generate(pipe, prompt, **kwargs):
    # 1. Check prompt safety (text filter)
    if not is_prompt_safe(prompt):
        raise ValueError("Prompt contains prohibited content")

    # 2. Generate image
    image = pipe(prompt, **kwargs).images[0]

    # 3. Check output safety
    is_safe, reason = check_safety(image)
    if not is_safe:
        raise ValueError(f"Generated image flagged: {reason}")

    return image
```

---

## 2. Prompt Safety Filter

```python
import re

BLOCKED_PATTERNS = [
    r"real\s+person",
    r"celebrity",
    r"child|minor|underage",
    r"violence|gore|blood",
    r"weapon|gun|knife",
]

BLOCKED_NAMES = {
    # Don't generate images of real people without consent
    "public_figures_list"  # load from maintained list
}

def is_prompt_safe(prompt):
    """Check prompt against safety rules"""
    prompt_lower = prompt.lower()

    # Pattern matching
    for pattern in BLOCKED_PATTERNS:
        if re.search(pattern, prompt_lower):
            return False

    # Name matching
    for name in BLOCKED_NAMES:
        if name.lower() in prompt_lower:
            return False

    return True
```

---

## 3. Deepfake Detection

```python
# Detecting AI-generated images
from transformers import pipeline

deepfake_detector = pipeline(
    "image-classification",
    model="umm-maybe/AI-image-detector"
)

def detect_ai_generated(image):
    """Detect if image is AI-generated"""
    results = deepfake_detector(image)
    for r in results:
        if r["label"] == "artificial" and r["score"] > 0.7:
            return True, r["score"]
    return False, 0.0

# Usage in content moderation
is_ai, confidence = detect_ai_generated(uploaded_image)
if is_ai:
    print(f"AI-generated image detected (confidence: {confidence:.1%})")
```

---

## 4. C2PA Watermarking — Content Provenance

```python
# C2PA: Coalition for Content Provenance and Authenticity
# Embeds metadata proving origin of AI-generated content

# Using c2pa-python library
# pip install c2pa-python

from c2pa import Builder, SigningAlg

def add_provenance(image_path, output_path):
    """Add C2PA provenance metadata to AI-generated image"""
    builder = Builder()

    # Add assertion about AI generation
    builder.add_assertion(
        "c2pa.ai_generated",
        {
            "model": "stable-diffusion-xl",
            "prompt": "a cat in space",
            "generated_at": "2026-03-31T10:00:00Z",
            "platform": "xdev.asia GenAI Platform",
        }
    )

    # Sign and save
    builder.sign_file(
        image_path,
        output_path,
        signing_alg=SigningAlg.ES256,
    )

# Verify provenance
from c2pa import Reader

def verify_provenance(image_path):
    """Check C2PA metadata"""
    reader = Reader(image_path)
    if reader.manifest_store:
        for manifest in reader.manifest_store.manifests:
            print(f"Creator: {manifest.claim_generator}")
            for assertion in manifest.assertions:
                print(f"  Assertion: {assertion.label}")
    else:
        print("No provenance metadata found")
```

---

## 5. Copyright Considerations

```
⚖️ Legal Landscape 2026:

Training data copyright:
- Nhiều vụ kiện đang diễn ra (Getty vs Stability AI, etc.)
- EU AI Act yêu cầu disclosure training data
- Opt-out mechanisms cho artists

Generated content:
- US: AI-generated content không có copyright protection (nếu không có human authorship)
- Significant human creative input → có thể được bảo hộ
- Company-specific policies khác nhau

Best practices:
✅ Sử dụng models trained on licensed data (Firefly, Getty)
✅ Add C2PA metadata cho AI-generated content
✅ Maintain provenance records
✅ Respect opt-out requests
✅ Disclose AI usage
❌ Don't replicate copyrighted characters/brands
❌ Don't claim AI art as human-made
❌ Don't use AI to create counterfeit content
```

---

## 6. Bias & Fairness

```python
# Audit generative models for bias
def audit_representation(pipe, category, prompts, num_per_prompt=10):
    """Generate images and audit demographic representation"""
    results = []
    for prompt in prompts:
        for _ in range(num_per_prompt):
            image = pipe(prompt).images[0]
            # Analyze demographic attributes
            analysis = analyze_demographics(image)
            results.append({
                "prompt": prompt,
                "demographics": analysis,
            })

    # Report
    print(f"\n=== Bias Audit: {category} ===")
    # Aggregate and report demographic distribution
    # Flag under-representation or stereotyping
    return results

# Example audit
prompts = [
    "a doctor in a hospital",
    "a CEO in an office",
    "a teacher in a classroom",
    "a engineer at work",
]
audit_representation(pipe, "Occupations", prompts)
```

---

## 7. Responsible Deployment Checklist

```
Pre-deployment:
□ Content safety filters (input + output)
□ NSFW detection enabled
□ Prompt blocklist maintained
□ Rate limiting configured
□ Usage logging enabled
□ C2PA watermarking integrated

Ongoing:
□ Monitor for misuse patterns
□ Update safety filters regularly
□ Respond to abuse reports
□ Audit for bias quarterly
□ Update legal compliance

User-facing:
□ Clear terms of use
□ Disclosure of AI-generation
□ Report mechanism for problematic content
□ Age verification (if applicable)
□ Transparency about capabilities and limitations
```

---

## Tổng kết

| Area | Tool/Practice |
|------|--------------|
| NSFW detection | Falconsai classifier |
| Prompt filtering | Pattern matching, blocklists |
| Deepfake detection | AI-image-detector models |
| Provenance | C2PA watermarking |
| Copyright | Licensed models, disclosure |
| Bias | Regular audits, diverse training |

> 📌 **Bài tiếp theo:** Capstone — xây dựng AI Creative Platform hoàn chỉnh.
