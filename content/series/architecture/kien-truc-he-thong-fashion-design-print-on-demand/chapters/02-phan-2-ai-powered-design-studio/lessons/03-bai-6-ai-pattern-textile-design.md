---
id: 019f0b20-a203-7001-e001-f2b8f9000203
title: 'Bài 6: AI Pattern & Textile Design — Seamless Patterns, Color Palette AI & Fabric Simulation'
slug: bai-6-ai-pattern-textile-design
description: >-
  Seamless pattern generation với AI, color palette extraction (CLIP + K-means),
  fabric simulation, color matching, repeat pattern types, textile-specific constraints,
  Pantone/color gamut mapping.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: AI-Powered Design Studio"
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: Kiến trúc Hệ thống Fashion Design & Print-on-Demand — Từ Domain Analysis đến Production
  slug: kien-truc-he-thong-fashion-design-print-on-demand
---

<h2 id="1-pattern-generation"><strong>1. AI Seamless Pattern Generation</strong></h2>

<p>Textile design trong fashion POD đòi hỏi <strong>seamless patterns</strong> — hoa văn lặp lại liền mạch trên toàn bộ fabric surface mà không có seam (đường nối) rõ rệt.</p>

<pre><code class="language-text">Pattern Types trong Textile Design
┌──────────────────────────────────────────────────────┐
│                                                      │
│  Block Repeat     Half-Drop        Brick Repeat      │
│  ┌──┬──┬──┐      ┌──┬──┬──┐      ┌──┬──┬──┐        │
│  │A │A │A │      │A │A │A │      │AABB│AA│          │
│  ├──┼──┼──┤      │ A│ A│ A│      ├──┼──┼──┤         │
│  │A │A │A │      │A │A │A │      │BB│AABB│          │
│  ├──┼──┼──┤      │ A│ A│ A│      ├──┼──┼──┤         │
│  │A │A │A │      │A │A │A │      │AABB│AA│          │
│  └──┴──┴──┘      └──┴──┴──┘      └──┴──┴──┘        │
│                                                      │
│  Mirror           Diamond         Ogee               │
│  ┌──┬──┬──┐      ┌──────┐        ┌──────┐           │
│  │A │A▮│A │      │ /\ /\│        │)(  )(│           │
│  │  │  │  │      │/  X  \│       │(    (│           │
│  │A▮│A │A▮│      │\  X  /│       │)(  )(│           │
│  └──┴──┴──┘      │ \/  \/│       └──────┘           │
│                   └──────┘                           │
└──────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-ai-pattern-pipeline"><strong>2. AI Pattern Generation Pipeline</strong></h2>

<pre><code class="language-typescript">interface PatternGenerationRequest {
  prompt: string;                    // "tropical leaves, monstera"
  repeatType: RepeatType;
  tileSize: { width: number; height: number };  // px at target DPI
  colorPalette?: string[];
  density: 'sparse' | 'medium' | 'dense';
  style: 'photorealistic' | 'watercolor' | 'flat' | 'hand_drawn' | 'geometric';
}

type RepeatType = 'block' | 'half_drop' | 'brick' | 'mirror' | 'diamond' | 'random';

// Step 1: Generate base tile with SDXL + tiling ControlNet
async function generatePatternTile(req: PatternGenerationRequest): Promise&lt;Buffer&gt; {
  const prompt = buildPatternPrompt(req);
  
  // Sử dụng SDXL + Tile ControlNet để tạo seamless tile
  const result = await sdxlPipeline.generate({
    prompt: prompt.positive,
    negative_prompt: prompt.negative + ', visible seam, edge artifact, asymmetric',
    width: req.tileSize.width,
    height: req.tileSize.height,
    num_inference_steps: 40,
    guidance_scale: 8.0,
    controlnet: {
      model: 'tile',
      // Tile padding technique: pad image edges to ensure seamless
      preprocessor: 'tile_resample',
    },
  });

  return result.images[0];
}

// Step 2: Post-process for perfect seamless tiling
async function makeSeamless(tile: Buffer): Promise&lt;Buffer&gt; {
  // Technique: Cross-blend edges
  // 1. Pad tile by 25% on each edge (wrapping around)
  // 2. Inpaint the seam areas using SDXL inpainting
  // 3. Crop back to original size
  
  const padded = await padTileWithWrap(tile, 0.25);
  const seamMask = generateSeamMask(padded, 0.25);
  
  const inpainted = await sdxlInpaint({
    image: padded,
    mask: seamMask,
    prompt: 'seamless continuation, consistent style and color',
    strength: 0.6,  // Chỉ blend nhẹ phần seam
  });

  return cropToOriginal(inpainted, 0.25);
}
</code></pre>

<h2 id="3-color-palette-ai"><strong>3. Color Palette AI</strong></h2>

<pre><code class="language-typescript">// Color palette extraction và generation
interface ColorPaletteService {
  // Extract palette from image
  extractFromImage(image: Buffer, numColors: number): Promise&lt;ColorPalette&gt;;
  
  // Generate harmonious palette from seed color
  generateHarmonious(seedColor: string, harmony: ColorHarmony): ColorPalette;
  
  // AI-suggested palette from text/mood
  suggestFromMood(mood: string): Promise&lt;ColorPalette[]&gt;;
  
  // Map RGB to nearest Pantone
  mapToPantone(color: string): PantoneColor;
  
  // Check printability (is color within CMYK gamut?)
  checkGamut(color: string, printMethod: string): GamutResult;
}

interface ColorPalette {
  id: string;
  name: string;
  colors: PaletteColor[];
  mood: string[];           // ['tropical', 'warm', 'energetic']
  season: string[];         // ['summer', 'spring']
}

interface PaletteColor {
  hex: string;
  rgb: { r: number; g: number; b: number };
  cmyk: { c: number; m: number; y: number; k: number };
  pantone?: string;         // 'PANTONE 18-1664 TCX'
  name: string;             // 'Fiery Red'
  percentage: number;       // Tỷ lệ trong palette
}

type ColorHarmony = 
  | 'complementary'         // Đối diện trên color wheel
  | 'analogous'             // Liền kề
  | 'triadic'               // Tam giác  
  | 'split_complementary'   // Bổ sung chia
  | 'tetradic'              // Tứ giác
  | 'monochromatic';        // Đơn sắc

// K-Means color extraction
async function extractDominantColors(
  image: Buffer, 
  k: number = 5,
): Promise&lt;PaletteColor[]&gt; {
  // 1. Resize image to 256x256 for speed
  const resized = await sharp(image).resize(256, 256).raw().toBuffer();
  
  // 2. Convert pixels to LAB color space (perceptually uniform)
  const labPixels = rgbToLab(resized);
  
  // 3. K-Means clustering
  const clusters = kMeansClustering(labPixels, k, {
    maxIterations: 100,
    tolerance: 0.01,
  });

  // 4. Sort by cluster size (most dominant first)
  return clusters
    .sort((a, b) => b.size - a.size)
    .map(cluster => ({
      hex: labToHex(cluster.center),
      rgb: labToRgb(cluster.center),
      cmyk: rgbToCmyk(labToRgb(cluster.center)),
      name: findNearestColorName(cluster.center),
      percentage: cluster.size / labPixels.length,
    }));
}
</code></pre>

<h2 id="4-color-gamut"><strong>4. Color Gamut & Print Color Management</strong></h2>

<pre><code class="language-typescript">// Kiểm tra color có in được không (CMYK gamut)
interface GamutResult {
  inGamut: boolean;
  originalColor: string;
  printableColor: string;     // Nearest in-gamut color
  deltaE: number;             // Color difference (< 2 = imperceptible)
  warning: string | null;
}

function checkPrintGamut(hexColor: string, printMethod: string): GamutResult {
  const rgb = hexToRgb(hexColor);
  const cmyk = rgbToCmyk(rgb);
  const backToRgb = cmykToRgb(cmyk);
  const deltaE = calculateDeltaE2000(rgb, backToRgb);

  // Neon/fluorescent colors thường ngoài CMYK gamut
  const inGamut = deltaE < 3.0;

  return {
    inGamut,
    originalColor: hexColor,
    printableColor: inGamut ? hexColor : rgbToHex(backToRgb),
    deltaE,
    warning: inGamut ? null : `Color shifts ${deltaE.toFixed(1)}ΔE when printed. Consider using spot color (Pantone).`,
  };
}

// Spot color recommendations cho bright/neon designs
const SPOT_COLOR_ALTERNATIVES: Record&lt;string, string&gt; = {
  '#00ff00': 'PANTONE 802 C',      // Neon Green
  '#ff00ff': 'PANTONE 807 C',      // Neon Magenta
  '#ffff00': 'PANTONE 803 C',      // Neon Yellow
  '#ff6600': 'PANTONE 804 C',      // Neon Orange
  '#ff0066': 'PANTONE 806 C',      // Neon Pink
};
</code></pre>

<h2 id="5-fabric-simulation"><strong>5. Fabric Simulation</strong></h2>

<pre><code class="language-typescript">// Mô phỏng pattern trên fabric thực tế
interface FabricSimulator {
  // Render pattern trên fabric với wrinkles, lighting
  simulate(
    pattern: Buffer,
    fabric: FabricType,
    lighting: LightingPreset,
  ): Promise&lt;Buffer&gt;;
}

interface FabricType {
  name: string;          // 'cotton_jersey', 'polyester', 'silk', 'denim'
  texture: string;       // Normal map URL
  roughness: number;     // 0.0 (silk) - 1.0 (canvas)
  stretch: number;       // 0.0 (denim) - 1.0 (spandex)
  opacity: number;       // Fabric opacity (sublimation bleeds differently)
  weavePattern?: string; // Weave texture overlay
}

type LightingPreset = 'studio' | 'natural' | 'dramatic' | 'flat';

// Fabric presets for common POD products
const FABRIC_PRESETS: Record&lt;string, FabricType&gt; = {
  cotton_jersey: {
    name: 'Cotton Jersey (T-shirt)',
    texture: '/textures/cotton-jersey-normal.png',
    roughness: 0.7,
    stretch: 0.3,
    opacity: 1.0,
  },
  polyester_performance: {
    name: 'Polyester (All-over print)',
    texture: '/textures/polyester-smooth-normal.png',
    roughness: 0.3,
    stretch: 0.5,
    opacity: 0.95,   // Sublimation shows fabric texture slightly
  },
  canvas_tote: {
    name: 'Canvas (Tote bag)',
    texture: '/textures/canvas-weave-normal.png',
    roughness: 0.9,
    stretch: 0.05,
    opacity: 1.0,
    weavePattern: '/textures/canvas-weave-overlay.png',
  },
};
</code></pre>

<h2 id="6-pattern-repeat-engine"><strong>6. Pattern Repeat Engine</strong></h2>

<pre><code class="language-typescript">// Engine tạo các loại repeat từ single tile
function applyRepeat(
  tile: Buffer,
  repeatType: RepeatType,
  gridSize: { cols: number; rows: number },
): Promise&lt;Buffer&gt; {
  switch (repeatType) {
    case 'block':
      // Simple tile repeat - A A A / A A A
      return tileRepeat(tile, gridSize);

    case 'half_drop':
      // Offset 50% vertically mỗi column
      return halfDropRepeat(tile, gridSize);

    case 'brick':
      // Offset 50% horizontally mỗi row (like brick wall)
      return brickRepeat(tile, gridSize);

    case 'mirror':
      // Flip alternating tiles (kaleidoscope effect)
      return mirrorRepeat(tile, gridSize);

    case 'diamond':
      // Rotate 45° and tile trong diamond grid
      return diamondRepeat(tile, gridSize);

    case 'random':
      // Random rotation + scale variations
      return randomScatterRepeat(tile, gridSize, {
        rotationRange: [-15, 15],    // degrees
        scaleRange: [0.8, 1.2],
        overlapAllowed: true,
      });
  }
}

// Validate seamlessness after repeat
async function validateSeamless(
  pattern: Buffer,
  tolerance: number = 5, // pixel difference threshold
): Promise&lt;SeamValidationResult&gt; {
  const { width, height } = await sharp(pattern).metadata();
  
  // Check horizontal seam: compare right edge of tile N with left edge of tile N+1
  const leftEdge = await extractColumn(pattern, 0);
  const rightEdge = await extractColumn(pattern, width! - 1);
  
  // Check vertical seam
  const topEdge = await extractRow(pattern, 0);
  const bottomEdge = await extractRow(pattern, height! - 1);

  const hDiff = calculateEdgeDifference(rightEdge, leftEdge);
  const vDiff = calculateEdgeDifference(bottomEdge, topEdge);

  return {
    seamless: hDiff < tolerance && vDiff < tolerance,
    horizontalDifference: hDiff,
    verticalDifference: vDiff,
    suggestion: hDiff >= tolerance || vDiff >= tolerance
      ? 'Seam detected. Re-running inpaint blending on edges.'
      : null,
  };
}
</code></pre>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<table>
<thead>
<tr><th>Component</th><th>Technique</th><th>Use Case</th></tr>
</thead>
<tbody>
<tr><td>Pattern Generation</td><td>SDXL + Tile ControlNet</td><td>Tạo seamless tile từ text prompt</td></tr>
<tr><td>Seam Fixing</td><td>Inpainting cross-blend</td><td>Xóa đường nối giữa tiles</td></tr>
<tr><td>Color Extraction</td><td>K-Means in LAB space</td><td>Dominant color palette từ ảnh</td></tr>
<tr><td>Color Harmony</td><td>Color wheel algorithms</td><td>Suggest palette harmonious</td></tr>
<tr><td>Gamut Check</td><td>RGB↔CMYK Delta-E 2000</td><td>Kiểm tra in được trên fabric</td></tr>
<tr><td>Pantone Mapping</td><td>Nearest-neighbor LAB</td><td>Map sang spot color chuẩn</td></tr>
<tr><td>Fabric Simulation</td><td>Normal map + PBR rendering</td><td>Preview pattern trên vải thực</td></tr>
<tr><td>Repeat Engine</td><td>Tile transform + validation</td><td>6 pattern repeat types</td></tr>
</tbody>
</table>
