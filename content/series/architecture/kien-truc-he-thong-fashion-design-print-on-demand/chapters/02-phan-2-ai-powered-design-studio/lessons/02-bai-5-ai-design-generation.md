---
id: 019f0b20-a202-7001-e001-f2b8f9000202
title: 'Bài 5: AI Design Generation — Text-to-Image, Style Transfer & Prompt Engineering cho Fashion'
slug: bai-5-ai-design-generation
description: >-
  Tích hợp Stable Diffusion/SDXL, prompt engineering chuyên biệt cho fashion,
  ControlNet, style transfer, LoRA fine-tuning, inpainting, outpainting,
  batch generation pipeline, content moderation, GPU infrastructure.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: AI-Powered Design Studio"
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: Kiến trúc Hệ thống Fashion Design & Print-on-Demand — Từ Domain Analysis đến Production
  slug: kien-truc-he-thong-fashion-design-print-on-demand
---

<h2 id="1-ai-design-pipeline"><strong>1. AI Design Generation Pipeline</strong></h2>

<pre><code class="language-text">User Input                        AI Generation Pipeline
┌─────────────┐                 ┌────────────────────────────────┐
│ Text Prompt │────────────────▶│ Prompt Engineering Layer       │
│ Style Ref   │                 │  ├── Fashion vocabulary mapper │
│ Color Pref  │                 │  ├── Negative prompt builder   │
│ Product Type│                 │  └── Quality enhancer          │
└─────────────┘                 └────────────┬───────────────────┘
                                             │
                                ┌────────────▼───────────────────┐
                                │ Model Selection & Routing      │
                                │  ├── SDXL (general fashion)    │
                                │  ├── LoRA (brand-specific)     │
                                │  ├── ControlNet (structure)    │
                                │  └── IP-Adapter (style ref)    │
                                └────────────┬───────────────────┘
                                             │
                                ┌────────────▼───────────────────┐
                                │ GPU Inference Farm             │
                                │  ├── NVIDIA A100/H100 cluster  │
                                │  ├── Queue: BullMQ + priority  │
                                │  └── Batch processing          │
                                └────────────┬───────────────────┘
                                             │
                                ┌────────────▼───────────────────┐
                                │ Post-Processing                │
                                │  ├── Upscale (Real-ESRGAN 4x)  │
                                │  ├── Background removal        │
                                │  ├── Color correction          │
                                │  └── Content moderation (NSFW) │
                                └────────────┬───────────────────┘
                                             │
                                ┌────────────▼───────────────────┐
                                │ Design Library                 │
                                │  ├── Save to user gallery      │
                                │  ├── Generate variations       │
                                │  └── Apply to canvas           │
                                └────────────────────────────────┘
</code></pre>

<h2 id="2-prompt-engineering"><strong>2. Prompt Engineering cho Fashion Domain</strong></h2>

<pre><code class="language-typescript">interface FashionPromptBuilder {
  buildPrompt(input: UserPromptInput): EnhancedPrompt;
}

interface UserPromptInput {
  text: string;                               // "minimalist mountain landscape"
  productType: 'tshirt' | 'hoodie' | 'poster' | 'mug';
  style: FashionStyle;
  colorPalette?: string[];                    // ["#1a1a2e", "#16213e", "#e94560"]
  printMethod: 'dtg' | 'dtf' | 'sublimation' | 'screen_print';
}

type FashionStyle =
  | 'street_wear' | 'vintage_retro' | 'minimalist' | 'japanese'
  | 'grunge' | 'y2k' | 'cyberpunk' | 'botanical'
  | 'typography' | 'abstract' | 'pop_art' | 'watercolor';

interface EnhancedPrompt {
  positive: string;
  negative: string;
  model: string;
  lora?: string;
  controlnet?: ControlNetConfig;
  samplerSettings: SamplerSettings;
}

// Fashion-specific prompt templates
const STYLE_TEMPLATES: Record&lt;FashionStyle, StyleTemplate&gt; = {
  street_wear: {
    prefix: 'urban streetwear graphic design,',
    suffix: 'bold colors, graffiti influence, hip-hop culture, high contrast',
    negativeAdd: 'photorealistic, 3d render',
    recommendedModel: 'sdxl-streetwear-v2',
  },
  vintage_retro: {
    prefix: 'vintage retro illustration,',
    suffix: 'distressed texture, faded colors, 70s aesthetic, halftone dots',
    negativeAdd: 'modern, clean, digital',
    recommendedModel: 'sdxl-base',
    lora: 'vintage-retro-lora-v1',
  },
  minimalist: {
    prefix: 'minimalist design, clean lines,',
    suffix: 'simple geometric, whitespace, modern typography, flat design',
    negativeAdd: 'complex, busy, detailed, ornate',
    recommendedModel: 'sdxl-base',
  },
  japanese: {
    prefix: 'Japanese art style,',
    suffix: 'ukiyo-e influence, cherry blossom, wave, kanji typography, zen aesthetic',
    negativeAdd: 'western, photorealistic',
    recommendedModel: 'sdxl-anime-v3',
  },
  // ... other styles
};

function buildFashionPrompt(input: UserPromptInput): EnhancedPrompt {
  const template = STYLE_TEMPLATES[input.style];
  
  // Color-aware prompting
  const colorHint = input.colorPalette
    ? `color palette: ${input.colorPalette.join(', ')},`
    : '';

  // Print-method-aware
  const printHint = {
    dtg: 'transparent background, isolated design, print-ready',
    dtf: 'transparent background, vibrant colors, high saturation, no gradients',
    sublimation: 'all-over print pattern, edge-to-edge, seamless',
    screen_print: 'limited colors, spot color separation, bold shapes, no gradients',
  }[input.printMethod];

  const positive = [
    template.prefix,
    input.text,
    colorHint,
    printHint,
    template.suffix,
    'high quality, 300 DPI, professional design',
  ].filter(Boolean).join(' ');

  const negative = [
    'blurry, low quality, watermark, signature, text artifact',
    'deformed, ugly, bad anatomy',
    template.negativeAdd,
  ].join(', ');

  return {
    positive,
    negative,
    model: template.recommendedModel,
    lora: template.lora,
    samplerSettings: {
      steps: 30,
      cfgScale: 7.5,
      sampler: 'dpm++_2m_karras',
      width: 1024,
      height: 1024,
      seed: -1,   // random
    },
  };
}
</code></pre>

<h2 id="3-model-architecture"><strong>3. Model Architecture & Fine-tuning</strong></h2>

<h3 id="lora-training"><strong>LoRA Fine-tuning cho Brand-specific Styles</strong></h3>

<pre><code class="language-python"># LoRA training config cho fashion brand style
training_config = {
    "model": "stabilityai/stable-diffusion-xl-base-1.0",
    "lora_rank": 32,
    "lora_alpha": 32,
    "learning_rate": 1e-4,
    "train_batch_size": 4,
    "num_train_epochs": 100,
    "resolution": 1024,
    "dataset": {
        "instance_prompt": "a design in the style of [brand_token]",
        "class_prompt": "a fashion graphic design",
        "instance_data_dir": "./training_data/brand_designs/",
        "num_class_images": 200,
    },
    "optimizer": "adamw",
    "lr_scheduler": "cosine_with_restarts",
    "mixed_precision": "fp16",
    "gradient_accumulation_steps": 4,
}
</code></pre>

<h3 id="controlnet"><strong>ControlNet cho Structure-guided Generation</strong></h3>

<pre><code class="language-typescript">interface ControlNetConfig {
  model: ControlNetModel;
  inputImage: string;     // Reference image URL
  strength: number;       // 0.0 - 1.0
  guidanceStart: number;  // When to start applying
  guidanceEnd: number;    // When to stop
}

type ControlNetModel =
  | 'canny'          // Edge detection → maintain outline structure
  | 'depth'          // Depth map → 3D-like structure
  | 'openpose'       // Human pose → design placement trên body
  | 'lineart'        // Line art → sketch to design
  | 'scribble'       // Rough sketch → polished design
  | 'seg'            // Segmentation → region-based generation
  | 'color'          // Color reference → maintain color scheme
  | 'tile';          // Tile/pattern → seamless pattern generation

// Use case: User uploads a sketch, generate polished design
const sketchToDesign: ControlNetConfig = {
  model: 'lineart',
  inputImage: '/user-uploads/sketch-001.png',
  strength: 0.8,
  guidanceStart: 0.0,
  guidanceEnd: 0.8,
};
</code></pre>

<h2 id="4-ip-adapter"><strong>4. IP-Adapter & Style Transfer</strong></h2>

<pre><code class="language-typescript">// Style transfer: Tham chiếu từ ảnh mẫu → áp dụng style vào design mới
interface StyleTransferRequest {
  // Text prompt mô tả nội dung mong muốn
  prompt: string;                  // "tiger face, fierce expression"
  
  // Style reference image
  styleReference: {
    imageUrl: string;              // Ảnh mẫu style
    strength: number;              // 0.3 - 0.8 (quá cao sẽ copy y nguyên)
    type: 'ip_adapter' | 'ip_adapter_face' | 'ip_adapter_plus';
  };
  
  // Optional: Combine with ControlNet
  structureGuide?: ControlNetConfig;
}

// API endpoint
// POST /api/v1/generate/style-transfer
async function styleTransfer(req: StyleTransferRequest): Promise&lt;GenerationResult&gt; {
  const pipeline = new StableDiffusionXLPipeline({
    model: 'sdxl-base',
    ipAdapter: {
      model: req.styleReference.type,
      image: await loadImage(req.styleReference.imageUrl),
      scale: req.styleReference.strength,
    },
    controlnet: req.structureGuide ? {
      model: req.structureGuide.model,
      image: await loadImage(req.structureGuide.inputImage),
      conditioning_scale: req.structureGuide.strength,
    } : undefined,
  });

  return pipeline.generate({
    prompt: req.prompt,
    negative_prompt: DEFAULT_NEGATIVE,
    num_inference_steps: 30,
    guidance_scale: 7.5,
    width: 1024,
    height: 1024,
    num_images: 4,   // Generate 4 variations
  });
}
</code></pre>

<h2 id="5-gpu-infrastructure"><strong>5. GPU Infrastructure & Job Queue</strong></h2>

<pre><code class="language-typescript">// GPU Worker Architecture
interface GPUWorkerPool {
  workers: GPUWorker[];
  queue: BullMQ.Queue;
  
  // Auto-scaling
  minWorkers: 2;
  maxWorkers: 20;
  scaleUpThreshold: 0.8;   // 80% utilization → scale up
  scaleDownDelay: 300;      // 5 min idle → scale down
}

interface GPUWorker {
  id: string;
  gpu: 'a100_40gb' | 'a100_80gb' | 'h100';
  status: 'idle' | 'processing' | 'loading_model';
  currentModel: string;       // Model đang load trên VRAM
  vramUsageMB: number;
  
  // Model caching — giữ model trên VRAM
  loadedModels: Map&lt;string, LoadedModel&gt;;
}

// Job Queue với priority
const generationQueue = new Queue('ai-generation', {
  defaultJobOptions: {
    attempts: 3,
    backoff: { type: 'exponential', delay: 2000 },
    removeOnComplete: { age: 3600 },        // Clean after 1h
    removeOnFail: { age: 86400 },           // Keep failed 24h
  },
});

// Priority levels
enum JobPriority {
  REALTIME = 1,      // Premium user, interactive
  HIGH = 5,          // Logged-in user
  NORMAL = 10,       // Free user
  BATCH = 20,        // Background batch generation
}
</code></pre>

<h2 id="6-post-processing"><strong>6. Post-Processing Pipeline</strong></h2>

<pre><code class="language-typescript">async function postProcessDesign(rawImage: Buffer): Promise&lt;ProcessedDesign&gt; {
  // 1. Upscale (Real-ESRGAN)
  const upscaled = await upscaleImage(rawImage, {
    model: 'realesrgan-x4plus',
    scale: 4,         // 1024 → 4096
    denoise: 0.5,
  });

  // 2. Background removal (always transparent for POD)
  const noBackground = await removeBackground(upscaled, {
    model: 'rembg-u2net',
    alphaMatting: true,
    alphaMattingForegroundThreshold: 240,
    alphaMattingBackgroundThreshold: 10,
  });

  // 3. Content moderation
  const moderationResult = await moderateContent(noBackground, {
    checkNSFW: true,
    checkViolence: true,
    checkCopyright: true,    // CLIP-based similarity check vs known brands/IPs
    threshold: 0.85,
  });

  if (!moderationResult.safe) {
    throw new ContentPolicyViolation(moderationResult.reason);
  }

  // 4. Color correction cho print
  const corrected = await colorCorrect(noBackground, {
    targetColorSpace: 'srgb',
    contrastEnhance: 1.1,
    saturationBoost: 1.05,    // Slightly boost cho print (colors look duller on fabric)
  });

  return {
    preview: await exportWebP(corrected, { quality: 85, maxWidth: 1200 }),
    printReady: await exportPNG(corrected, { dpi: 300, colorSpace: 'srgb' }),
    metadata: {
      width: corrected.width,
      height: corrected.height,
      hasTransparency: true,
      colorCount: await analyzeColors(corrected),
      moderationScore: moderationResult.score,
    },
  };
}
</code></pre>

<h2 id="7-batch-generation"><strong>7. Batch Generation & Variations</strong></h2>

<pre><code class="language-typescript">// Batch generation: Tạo nhiều design cùng lúc cho product line
interface BatchGenerationRequest {
  basePrompt: string;
  variations: VariationType[];
  count: number;                // Số lượng per variation
  productTypes: string[];       // Apply lên nhiều product
}

type VariationType =
  | { type: 'color_swap'; palettes: string[][] }       // Same design, different colors
  | { type: 'style_mix'; styles: FashionStyle[] }      // Same content, different styles
  | { type: 'prompt_expand'; keywords: string[] }      // Expand prompt with keywords
  | { type: 'seed_walk'; seedStart: number; step: number }; // Smooth seed variation

async function batchGenerate(req: BatchGenerationRequest): Promise&lt;BatchResult&gt; {
  const jobs: GenerationJob[] = [];

  for (const variation of req.variations) {
    for (let i = 0; i < req.count; i++) {
      const prompt = applyVariation(req.basePrompt, variation, i);
      
      for (const productType of req.productTypes) {
        jobs.push({
          prompt,
          productType,
          priority: JobPriority.BATCH,
          callbackUrl: '/webhooks/batch-complete',
        });
      }
    }
  }

  // Enqueue all jobs
  const bulkResult = await generationQueue.addBulk(
    jobs.map(job => ({
      name: 'generate',
      data: job,
      opts: { priority: job.priority },
    }))
  );

  return {
    batchId: generateBatchId(),
    totalJobs: jobs.length,
    estimatedTime: estimateCompletionTime(jobs.length),
    statusUrl: `/api/v1/batch/${batchId}/status`,
  };
}
</code></pre>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<table>
<thead>
<tr><th>Component</th><th>Technology</th><th>Purpose</th></tr>
</thead>
<tbody>
<tr><td>Base Model</td><td>SDXL 1.0</td><td>High-quality 1024x1024 generation</td></tr>
<tr><td>Fine-tuning</td><td>LoRA (rank 32)</td><td>Brand-specific style adaptation</td></tr>
<tr><td>Structure Control</td><td>ControlNet</td><td>Sketch-to-design, pose-guided</td></tr>
<tr><td>Style Transfer</td><td>IP-Adapter</td><td>Reference-based style matching</td></tr>
<tr><td>Upscaling</td><td>Real-ESRGAN 4x</td><td>1024 → 4096 for print (300 DPI)</td></tr>
<tr><td>Background Removal</td><td>U2-Net / REMBG</td><td>Transparent background for POD</td></tr>
<tr><td>Content Moderation</td><td>CLIP + NSFW classifier</td><td>Safety & IP compliance</td></tr>
<tr><td>Job Queue</td><td>BullMQ + Redis</td><td>Priority queue, retry, batch</td></tr>
<tr><td>GPU Infra</td><td>A100/H100 + Auto-scaling</td><td>Cost-efficient GPU allocation</td></tr>
<tr><td>Prompt Engineering</td><td>Fashion-specific templates</td><td>Domain-optimized generation</td></tr>
</tbody>
</table>
