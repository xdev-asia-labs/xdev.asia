---
id: 019c9619-bb01-7001-d001-bb0100000001
title: 'Lesson 1: Apple Silicon & AI - Why M-chip is the king of local inference'
slug: bai-1-apple-silicon-ai-tai-sao-m-chip-la-vua-inference-local
description: >-
  What is Unified Memory Architecture (UMA) and why is it changing the local AI
  game? Compare M1/M2/M3/M4 with NVIDIA GPU. Memory bandwidth, Neural Engine,
  GPU cores. Why does LLM 7B-30B run smoothly on MacBook?
duration_minutes: 45
is_free: true
video_url: null
sort_order: 0
section_title: 'Part 1: Platform - Ollama & Apple Silicon'
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Running AI Local with Ollama on Apple Silicon
  slug: ollama-apple-silicon
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2699" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2699)"/>

  <!-- Decorations -->
  <g>
    <circle cx="727" cy="191" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="854" cy="158" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="981" cy="125" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="608" cy="92" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="735" cy="59" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="221" x2="1100" y2="301" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="251" x2="1050" y2="321" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1002.1769145362398,153 1002.1769145362398,189 971,207 939.8230854637602,189 939.8230854637602,153 971,135" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI & ML — Lesson 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 1: Apple Silicon & AI - Why M-chip</tspan>
      <tspan x="60" dy="42">is the king of local inference</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Running AI Local with Ollama on Apple Silicon</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Platform - Ollama & Apple Silicon</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

In 2026, running AI locally on a laptop is no longer just "playing for fun" but a truly useful skill. And Apple Silicon is one of the best local inference platforms today.

This article will help you understand **why** Apple Silicon is strong for AI, before entering the settings in the next article.

---

## 1. Unified Memory Architecture (UMA) — Game changer

On most traditional systems, the CPU and GPU have **separate** memory areas:

```
[CPU] ←→ [System RAM 32GB]
  ↕ (PCIe bus - bottleneck)
[GPU] ←→ [VRAM 8-24GB]
```

When running LLM on an NVIDIA GPU, the model must reside entirely in VRAM. If the 13B model requires 8GB but the GPU only has 8GB of VRAM, you will get an Out of Memory Error.

Apple Silicon uses **Unified Memory Architecture**:

```
[CPU cores] ←→
[GPU cores] ←→  [Unified Memory 16-192GB]
[Neural Engine] ←→
[Media Engine] ←→
```

**All** CPU, GPU, Neural Engine access the same memory pool. Model LLM 13B requires 8GB? Both the CPU and GPU "see" it without needing to copy data back and forth.

> 💡 **Key insight**: On Apple Silicon, you can load a much larger model than a discrete graphics card in the same price range, because system RAM = "VRAM".

---

## 2. Memory Bandwidth — Read/write speed determines inference

LLM inference depends greatly on **memory bandwidth** — the speed of reading weights from RAM. This is the main bottleneck when running LLM.

| Chips | Memory Bandwidth | Maximum RAM |
|-------|-------|-------------|
| M1 | 68.25 GB/s | 16 GB |
| M1 Pro | 200 GB/s | 32 GB |
| M1 Max | 400 GB/s | 64 GB |
| M1 Ultra | 800 GB/s | 128 GB |
| M2 | 100 GB/s | 24 GB |
| M2 Pro | 200 GB/s | 32 GB |
| M2 Max | 400 GB/s | 96 GB |
| M2 Ultra | 800 GB/s | 192 GB |
| M3 | 100 GB/s | 24 GB |
| M3 Pro | 150 GB/s | 36 GB |
| M3 Max | 400 GB/s | 128 GB |
| M4 | 120 GB/s | 32 GB |
| M4 Pro | 273 GB/s | 48 GB |
| M4 Max | 546 GB/s | 128 GB |

**Comparison with NVIDIA:**

| GPU | VRAM | Bandwidth | Price |
|-----|-----|-----------|-----|
| RTX 4060 | 8 GB | 272 GB/s | ~$300 |
| RTX 4070 Ti | 12 GB | 504 GB/s | ~$750 |
| RTX 4090 | 24 GB | 1008 GB/s | ~$1600 |

NVIDIA has higher bandwidth at the high end, but is limited by VRAM. An RTX 4060 has 272 GB/s bandwidth but only **8GB VRAM** — not enough for the 13B model.

Meanwhile, MacBook Pro M3 Pro 36GB: bandwidth 150 GB/s, but can load the **30B quantized** model comfortably because all 36GB is available.

---

## 3. GPU Cores on Apple Silicon

Apple Silicon integrates the GPU directly on the chip (integrated GPU), but this is a **very powerful** GPU, not a weak "inte HD graphics" type:

| Chips | GPU Cores | FP16 TFLOPS |
|-------|-----------|-------------|
| M1 | 7-8 | 2.6 |
| M2 | 10 | 3.6 |
| M3 | 10 | 4.1 |
| M3 Pro | 14-18 | 7.4 |
| M3 Max | 30-40 | 14.2 |
| M4 | 10 | 4.6 |
| M4 Pro | 20 | 8.7 |
| M4 Max | 40 | 17.4 |

These GPU cores run LLM inference extremely effectively, especially when using Apple's **MLX** framework (will learn in Part 2).

---

## 4. Neural Engine — Hidden gem

Each Apple Silicon chip has a **Neural Engine** — a dedicated processor for machine learning:

- M1: 16 cores, 11 TOPS
- M2: 16 cores, 15.8 TOPS
- M3: 16 cores, 18 TOPS
- M4: 16 cores, 38 TOPS

Neural Engine is optimized for matrix calculations typical of neural networks. Currently, most inference frameworks (Ollama, llama.cpp) mainly use GPUs, but Core ML and some new frameworks have begun to take advantage of the Neural Engine.

---

## 5. Why does LLM 7B-30B run smoothly on Mac?

Let's calculate specifically:

**Model Llama 3.2 8B (Q4 quantized):**

- Size: ~4.5 GB
- Inference requires ~5.5 GB RAM (model + KV cache + overhead)
- MacBook Air M2 (8GB RAM): works, but tight
- MacBook Pro M3 (18GB RAM): runs very comfortably

**Model Qwen 2.5 32B (Q4 quantized):**

- Size: ~18 GB
- Inference requires ~22 GB of RAM
- MacBook Pro 36 GB: runs smoothly
- MacBook Air 24 GB: can run but should not open many other apps

**Actual generation speed on M3 Pro (36GB):**

| Model | Tokens/second | Feeling |
|-------|-------------|----------|
| Llama 3.2 3B Q4 | ~65 tok/s | Extremely fast |
| Llama 3.2 8B Q4 | ~32 tok/s | Very fast |
| Gemma 3 12B Q4 | ~22 tok/s | Fast |
| Qwen 2.5 14B Q4 | ~18 tok/s | Good |
| Qwen 2.5 32B Q4 | ~8 tok/s | Acceptable |

> 💡 Humans read ~250 words/minute ≈ ~5 tokens/second. So 8 tok/s is already faster than reading speed.

---

## 6. Overall comparison: Mac vs PC for local AI

| Criteria | Mac Apple Silicon | PC + NVIDIA GPU |
|----------|-------------------|-----------------|
| Max model size | Depends on RAM (up to 192GB) | Depends on VRAM (usually 8-24GB) |
| Bandwidth | 100-800 GB/s | 272-1000 GB/s |
| Price/GB "VRAM" | Much cheaper | Expensive (RTX 4090: $1600 for 24GB) |
| Noise | Silence | Fan running loudly |
| Electricity | 15-65W | GPU alone 100-450W |
| Mobile | Thin and light laptop | Desktop or heavy gaming laptop |
| Ecosystem | macOS only | Linux/Windows, more tools |

**Conclusion**: Mac Apple Silicon is a great choice for developers who want to run AI locally on a daily basis. Not the fastest, but the best balance between performance, convenience, noise and portability.

---

## 7. Test your Mac

Open Terminal and run:

```bash
# Xem chip và RAM
system_profiler SPHardwareDataType | grep -E "(Chip|Memory)"
```

Sample output:

```
Chip: Apple M3 Pro
Total Number of Cores: 12 (6 performance and 6 efficiency)
Memory: 36 GB
```

Or use command:

```bash
# Xem GPU cores
system_profiler SPDisplaysDataType | grep "Total Number of Cores"
```

Remember this information — you'll need it to choose the right model in Lesson 3.

---

## Summary

| Concepts | Remember |
|--------|--------|
| UMA | CPU + GPU share RAM → load larger model |
| Memory Bandwidth | Deciding on inference speed, M3 Max reaches 400 GB/s |
| GPU Cores | Integrated but powerful, runs LLM inference effectively |
| Neural Engine | Dedicated AI processors, being gradually utilized |
| Model size sweet spot | 3B-14B for 16GB RAM, 14B-32B for 32GB+ RAM |

---

## Exercises

1. Check your Mac: what chip, how much RAM, how many GPU cores?
2. Based on the memory bandwidth table, estimate the maximum size model your Mac can run?
3. Comparison: if you have the same budget to buy RTX 4070 Ti ($750), would it make more sense to buy more RAM for your Mac or buy a separate GPU?

**Next post**: Install Ollama and run your first LLM in 5 minutes →
