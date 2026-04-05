---
id: 019f0b20-a402-7001-e001-f2b8f9000402
title: 'Bài 13: Print Production Pipeline — File Processing, Color Management & RIP'
slug: bai-13-print-production-pipeline
description: >-
  Print production pipeline, design file processing (resize, color convert, DPI verify),
  RIP (Raster Image Processor), color management (ICC profiles, CMYK conversion),
  print queue management, quality validation, print-ready file generation.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: Order Processing & Fulfillment"
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: Kiến trúc Hệ thống Fashion Design & Print-on-Demand — Từ Domain Analysis đến Production
  slug: kien-truc-he-thong-fashion-design-print-on-demand
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4794" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4794)"/>

  <!-- Decorations -->
  <g>
    <circle cx="990" cy="240" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="50" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="770" cy="120" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="660" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1050" cy="260" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="120" x2="1100" y2="200" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="150" x2="1050" y2="220" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1050.3108891324553,202.5 1050.3108891324553,237.5 1020,255 989.6891108675446,237.5 989.6891108675446,202.5 1020,185" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ Kiến trúc — Bài 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 13: Print Production Pipeline — File</tspan>
      <tspan x="60" dy="42">Processing, Color Management &amp; RIP</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kiến trúc Hệ thống Fashion Design &amp; Print-on-Demand — Từ Domain Analysis đến Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Order Processing &amp; Fulfillment</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-print-pipeline"><strong>1. Print Production Pipeline Overview</strong></h2>

<pre><code class="language-text">Design File → Print Production Pipeline → Print-ready File for Printer

┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
│  Design  │──▶│  File    │──▶│  Color   │──▶│  RIP     │──▶│  Print   │
│  Input   │   │  Prep    │   │  Mgmt    │   │  Process │   │  Queue   │
│          │   │          │   │          │   │          │   │          │
│ - PNG    │   │ - Resize │   │ - ICC    │   │ - Raster │   │ - FIFO   │
│ - SVG    │   │ - DPI    │   │ - sRGB→  │   │ - Halftone│  │ - Priority│
│ - PDF    │   │ - Bleed  │   │   CMYK   │   │ - Spot   │   │ - Batch  │
│ - AI     │   │ - Flatten│   │ - Gamut  │   │   color  │   │ - Status │
└──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘
</code></pre>

<h2 id="2-file-processing"><strong>2. File Processing Service</strong></h2>

<pre><code class="language-typescript">interface PrintFileProcessor {
  process(input: DesignFile, spec: PrintSpec): Promise&lt;PrintReadyFile&gt;;
}

interface DesignFile {
  url: string;
  format: 'png' | 'svg' | 'pdf' | 'psd' | 'ai';
  dimensions: { width: number; height: number };
  dpi: number;
  colorSpace: string;
  fileSize: number;
}

interface PrintSpec {
  targetDPI: number;               // 300 for most, 600 for fine art
  targetColorSpace: 'rgb' | 'cmyk';
  maxFileSize: number;             // MB
  bleed: number;                   // mm
  trimMarks: boolean;
  
  // Product-specific
  printArea: {
    width: number;                 // inches
    height: number;                // inches
  };
  
  // Print method constraints
  printMethod: PrintMethod;
  maxColors?: number;              // For screen print
  minLineWidth?: number;           // mm — thin lines may not print
  
  // Supplier requirements
  supplierFormat: 'png' | 'pdf' | 'tiff';
  supplierMaxDPI: number;
  supplierNaming: string;          // e.g., "{orderId}_{sku}_{side}.png"
}

async function processDesignFile(
  input: DesignFile,
  spec: PrintSpec,
): Promise&lt;PrintReadyFile&gt; {
  const validationResult = await validateInput(input, spec);
  if (!validationResult.valid) {
    throw new PrintFileValidationError(validationResult.errors);
  }

  // 1. Load image in full resolution
  let image = await loadImage(input.url);

  // 2. DPI check & resize if needed
  if (input.dpi < spec.targetDPI) {
    // Upscale using AI (Real-ESRGAN) if DPI too low
    if (input.dpi < 150) {
      image = await aiUpscale(image, { targetDPI: spec.targetDPI });
    }
  }

  // 3. Resize to exact print dimensions
  const targetWidth = Math.round(spec.printArea.width * spec.targetDPI);
  const targetHeight = Math.round(spec.printArea.height * spec.targetDPI);
  image = await resize(image, targetWidth, targetHeight, { fit: 'contain' });

  // 4. Add bleed area
  if (spec.bleed > 0) {
    image = await addBleed(image, spec.bleed, spec.targetDPI);
  }

  // 5. Color space conversion
  if (spec.targetColorSpace === 'cmyk' && input.colorSpace !== 'cmyk') {
    image = await convertToColorSpace(image, {
      from: 'srgb',
      to: 'cmyk',
      iccProfile: 'USWebCoatedSWOP',
      renderingIntent: 'perceptual',
    });
  }

  // 6. Flatten layers (remove transparency where needed)
  if (spec.printMethod === 'sublimation') {
    image = await flattenOnWhite(image);
  }

  // 7. Add trim marks if required
  if (spec.trimMarks) {
    image = await addTrimMarks(image, spec.bleed);
  }

  // 8. Export in supplier format
  const outputBuffer = await exportFile(image, {
    format: spec.supplierFormat,
    dpi: spec.targetDPI,
    quality: 100,               // Lossless for printing
    compression: spec.supplierFormat === 'tiff' ? 'lzw' : 'none',
  });

  return {
    buffer: outputBuffer,
    format: spec.supplierFormat,
    width: targetWidth,
    height: targetHeight,
    dpi: spec.targetDPI,
    colorSpace: spec.targetColorSpace,
    fileSizeBytes: outputBuffer.length,
    checksum: calculateSHA256(outputBuffer),
  };
}
</code></pre>

<h2 id="3-color-management"><strong>3. Color Management (ICC Profiles)</strong></h2>

<pre><code class="language-typescript">interface ColorManagementSystem {
  convertColorSpace(
    image: Buffer,
    from: string,
    to: string,
    profile: ICCProfile,
  ): Promise&lt;Buffer&gt;;
  
  softProof(image: Buffer, printerProfile: ICCProfile): Promise&lt;Buffer&gt;;
  checkGamut(image: Buffer, targetProfile: ICCProfile): Promise&lt;GamutReport&gt;;
}

// ICC Profile cho từng printer/method
const ICC_PROFILES: Record&lt;string, ICCProfile&gt; = {
  // Standard profiles
  srgb: { name: 'sRGB IEC61966-2.1', path: '/profiles/sRGB.icc' },
  adobe_rgb: { name: 'Adobe RGB (1998)', path: '/profiles/AdobeRGB1998.icc' },
  
  // CMYK printing profiles
  us_web_coated: { name: 'USWebCoatedSWOP', path: '/profiles/USWebCoatedSWOP.icc' },
  fogra39: { name: 'FOGRA39 (ISO Coated v2)', path: '/profiles/CoatedFOGRA39.icc' },
  
  // Textile-specific profiles (custom per printer)
  epson_f2100_cotton: { name: 'Epson F2100 Cotton', path: '/profiles/EpsonF2100Cotton.icc' },
  kornit_atlas_max: { name: 'Kornit Atlas MAX', path: '/profiles/KornitAtlasMAX.icc' },
};

interface GamutReport {
  totalPixels: number;
  outOfGamutPixels: number;
  outOfGamutPercentage: number;
  problematicAreas: Array<{
    region: { x: number; y: number; width: number; height: number };
    originalColor: string;
    mappedColor: string;
    deltaE: number;
  }>;
  overallQuality: 'excellent' | 'good' | 'acceptable' | 'poor';
}
</code></pre>

<h2 id="4-rip-process"><strong>4. RIP (Raster Image Processor)</strong></h2>

<pre><code class="language-typescript">// RIP: Convert design → printer-ready raster data
interface RIPProcessor {
  process(printFile: PrintReadyFile, printerConfig: PrinterConfig): Promise&lt;RIPOutput&gt;;
}

interface PrinterConfig {
  model: string;                    // 'Kornit Atlas MAX', 'Epson F2100'
  printMethod: PrintMethod;
  resolution: number;               // 600, 1200, 1440 DPI
  headType: string;                 // Print head technology
  
  // Ink channels
  inkChannels: InkChannel[];
  
  // Quality settings
  passCount: number;                // Number of print passes
  printSpeed: 'draft' | 'standard' | 'high_quality';
}

interface InkChannel {
  name: string;                     // 'Cyan', 'Magenta', 'Yellow', 'Black', 'White'
  type: 'cmyk' | 'spot' | 'white_underbase';
}

interface RIPOutput {
  // Separated channel data
  channels: Array<{
    name: string;
    data: Buffer;                   // Monochrome raster for this channel
  }>;
  
  // White underbase (for dark garments)
  whiteUnderbase?: {
    data: Buffer;
    coverage: number;               // 0-100%
    chokeAmount: number;             // pixels to shrink (prevent white showing at edges)
  };
  
  printPlan: {
    totalPasses: number;
    estimatedTime: Duration;
    inkUsage: Record&lt;string, number&gt;;   // ml per channel
  };
}

// White underbase generation for DTG on dark garments
async function generateWhiteUnderbase(
  design: Buffer,
  options: UnderbaseOptions,
): Promise&lt;Buffer&gt; {
  // 1. Extract alpha channel (where design exists)
  const alpha = await extractAlphaChannel(design);
  
  // 2. Apply choke (shrink white layer slightly)
  // Prevents white ink from showing at design edges
  const choked = await erode(alpha, options.chokePixels);
  
  // 3. Adjust density based on garment color
  // Darker garment = more white needed
  const density = options.garmentBrightness < 0.3 ? 1.0
    : options.garmentBrightness < 0.6 ? 0.7
    : 0.4;
  
  const underbase = await adjustDensity(choked, density);
  
  return underbase;
}
</code></pre>

<h2 id="5-print-queue"><strong>5. Print Queue Management</strong></h2>

<pre><code class="language-typescript">// Print queue: Schedule và prioritize print jobs
interface PrintQueue {
  addJob(job: PrintJob): Promise&lt;string&gt;;
  getNextBatch(printerId: string, maxItems: number): Promise&lt;PrintJob[]&gt;;
  updateJobStatus(jobId: string, status: PrintJobStatus): Promise&lt;void&gt;;
}

interface PrintJob {
  id: string;
  orderId: string;
  subOrderId: string;
  
  // Product info
  productType: string;
  garmentColor: string;
  garmentSize: string;
  
  // Print specification
  printFile: PrintReadyFile;
  printMethod: PrintMethod;
  printAreas: string[];           // ['front', 'back']
  
  // Scheduling
  priority: PrintPriority;
  dueDate: Date;
  
  // Status
  status: PrintJobStatus;
  assignedPrinter?: string;
  startedAt?: Date;
  completedAt?: Date;
}

// Batch optimization: Group similar jobs together
function optimizePrintBatch(jobs: PrintJob[]): PrintBatch[] {
  // Group by: same garment type + same color + same print method
  // This minimizes printer changeover time
  const groups = groupBy(jobs, j => 
    `${j.productType}:${j.garmentColor}:${j.printMethod}`
  );

  return Object.entries(groups).map(([key, groupJobs]) => ({
    batchId: generateBatchId(),
    key,
    jobs: groupJobs.sort((a, b) => a.priority - b.priority),
    estimatedTime: estimateBatchTime(groupJobs),
    setupRequired: {
      garmentChange: true,
      inkChange: false,           // Same method = same ink setup
      platenChange: groupJobs[0].garmentSize !== groupJobs[1]?.garmentSize,
    },
  }));
}
</code></pre>

<h2 id="6-tong-ket"><strong>6. Tổng kết</strong></h2>

<table>
<thead>
<tr><th>Stage</th><th>Key Process</th><th>Output</th></tr>
</thead>
<tbody>
<tr><td>File Processing</td><td>Resize, DPI verify, flatten</td><td>Standard format file</td></tr>
<tr><td>Color Management</td><td>ICC profile, sRGB→CMYK, gamut map</td><td>Color-accurate file</td></tr>
<tr><td>RIP Processing</td><td>Channel separation, halftone, underbase</td><td>Printer-ready raster</td></tr>
<tr><td>Quality Validation</td><td>DPI check, thin line, color gamut</td><td>Pass/fail with report</td></tr>
<tr><td>Print Queue</td><td>Priority scheduling, batch optimization</td><td>Optimized print batches</td></tr>
</tbody>
</table>
