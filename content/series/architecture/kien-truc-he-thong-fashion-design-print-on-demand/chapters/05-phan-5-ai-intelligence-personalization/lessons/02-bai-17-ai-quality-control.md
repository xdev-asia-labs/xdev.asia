---
id: 019f0b20-a502-7001-e001-f2b8f9000502
title: 'Bài 17: AI Quality Control — Design Validation, Print-readiness Check & Defect Detection'
slug: bai-17-ai-quality-control
description: >-
  AI quality control pipeline, design validation (DPI, color, resolution),
  print-readiness automated check, AI defect detection (CNN-based),
  IP/copyright screening (CLIP similarity), NSFW content filtering,
  automated design scoring.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 5: AI-Powered Intelligence & Personalization"
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: Kiến trúc Hệ thống Fashion Design & Print-on-Demand — Từ Domain Analysis đến Production
  slug: kien-truc-he-thong-fashion-design-print-on-demand
---

<h2 id="1-qc-pipeline"><strong>1. AI Quality Control Pipeline</strong></h2>

<pre><code class="language-text">Design Upload → QC Pipeline → Approved / Rejected / Needs Review

┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
│  Upload  │──▶│Technical │──▶│   IP &   │──▶│  Content │──▶│  Design  │
│  Design  │   │  Check   │   │Copyright │   │  Safety  │   │  Score   │
│          │   │          │   │Screening │   │  Check   │   │          │
│          │   │- DPI     │   │          │   │          │   │- Aesthetic│
│          │   │- Size    │   │- Brand   │   │- NSFW    │   │- Market  │
│          │   │- Color   │   │- Logo    │   │- Hate    │   │- Print   │
│          │   │- Format  │   │- IP      │   │- Violence│   │  Quality │
└──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘
                    │               │               │              │
                    ▼               ▼               ▼              ▼
              ┌─────────────────────────────────────────────────────┐
              │              QC Decision Engine                     │
              │                                                    │
              │  All pass → AUTO APPROVE                           │
              │  Technical fail → REJECT (with specific errors)    │
              │  IP flag → MANUAL REVIEW                           │
              │  Content unsafe → AUTO REJECT                      │
              │  Low design score → WARNING (allow publish)        │
              └─────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-technical-check"><strong>2. Technical Validation</strong></h2>

<pre><code class="language-typescript">interface TechnicalValidator {
  validate(design: DesignFile, targetProduct: string): Promise&lt;TechnicalResult&gt;;
}

interface TechnicalResult {
  passed: boolean;
  checks: TechnicalCheck[];
  errors: string[];
  warnings: string[];
  suggestions: string[];
}

interface TechnicalCheck {
  name: string;
  status: 'pass' | 'fail' | 'warning';
  actual: string | number;
  required: string | number;
  message: string;
}

async function validateDesignFile(
  design: DesignFile,
  printSpec: PrintSpec,
): Promise&lt;TechnicalResult&gt; {
  const checks: TechnicalCheck[] = [];

  // 1. DPI Check (minimum 300 for print)
  checks.push({
    name: 'DPI',
    status: design.dpi >= printSpec.targetDPI ? 'pass'
      : design.dpi >= 150 ? 'warning' : 'fail',
    actual: design.dpi,
    required: printSpec.targetDPI,
    message: design.dpi < 150
      ? `DPI quá thấp (${design.dpi}). Cần tối thiểu 300 DPI cho in ấn chất lượng.`
      : design.dpi < 300
      ? `DPI hơi thấp (${design.dpi}). Khuyến nghị 300 DPI.`
      : 'DPI OK.',
  });

  // 2. Dimensions Check (fits print area?)
  const printAreaPx = {
    width: printSpec.printArea.width * printSpec.targetDPI,
    height: printSpec.printArea.height * printSpec.targetDPI,
  };
  const fitsWidth = design.dimensions.width >= printAreaPx.width * 0.9;
  const fitsHeight = design.dimensions.height >= printAreaPx.height * 0.9;
  checks.push({
    name: 'Dimensions',
    status: fitsWidth && fitsHeight ? 'pass' : 'warning',
    actual: `${design.dimensions.width}×${design.dimensions.height}`,
    required: `${printAreaPx.width}×${printAreaPx.height}`,
    message: !fitsWidth || !fitsHeight
      ? 'Design nhỏ hơn print area. Có thể bị mờ khi phóng to.'
      : 'Kích thước phù hợp.',
  });

  // 3. File format check
  const acceptedFormats = ['png', 'svg', 'pdf', 'tiff'];
  checks.push({
    name: 'Format',
    status: acceptedFormats.includes(design.format) ? 'pass' : 'fail',
    actual: design.format,
    required: acceptedFormats.join(', '),
    message: `Format ${design.format} ${acceptedFormats.includes(design.format) ? 'được hỗ trợ' : 'không hỗ trợ'}.`,
  });

  // 4. File size check
  const maxSizeMB = 100;
  checks.push({
    name: 'File Size',
    status: design.fileSize <= maxSizeMB * 1024 * 1024 ? 'pass' : 'fail',
    actual: `${(design.fileSize / 1024 / 1024).toFixed(1)} MB`,
    required: `≤ ${maxSizeMB} MB`,
    message: design.fileSize > maxSizeMB * 1024 * 1024
      ? 'File quá lớn.' : 'File size OK.',
  });

  // 5. Thin line detection (lines < 0.5pt won't print well)
  const thinLines = await detectThinLines(design.url, {
    minLineWidth: 0.5,     // points
    dpi: design.dpi,
  });
  checks.push({
    name: 'Thin Lines',
    status: thinLines.count === 0 ? 'pass' : 'warning',
    actual: `${thinLines.count} thin lines detected`,
    required: '0 thin lines',
    message: thinLines.count > 0
      ? `Phát hiện ${thinLines.count} đường nét mảnh (< 0.5pt). Có thể không in rõ.`
      : 'Không có đường nét quá mảnh.',
  });

  // 6. Transparency check (for DTG/DTF)
  const hasTransparency = await checkTransparency(design.url);

  return {
    passed: checks.every(c => c.status !== 'fail'),
    checks,
    errors: checks.filter(c => c.status === 'fail').map(c => c.message),
    warnings: checks.filter(c => c.status === 'warning').map(c => c.message),
    suggestions: [],
  };
}
</code></pre>

<h2 id="3-ip-screening"><strong>3. IP & Copyright Screening</strong></h2>

<pre><code class="language-typescript">// Check design against known brands, logos, copyrighted characters
interface IPScreeningService {
  screen(design: DesignFile): Promise&lt;IPScreeningResult&gt;;
}

interface IPScreeningResult {
  safe: boolean;
  riskLevel: 'none' | 'low' | 'medium' | 'high';
  matches: IPMatch[];
}

interface IPMatch {
  type: 'brand_logo' | 'character' | 'artwork' | 'trademark' | 'celebrity';
  name: string;                     // 'Nike Swoosh', 'Mickey Mouse'
  confidence: number;               // 0-1
  region: BoundingBox;              // Where in the design
  action: 'block' | 'review';
}

async function screenForIP(designUrl: string): Promise&lt;IPScreeningResult&gt; {
  // 1. CLIP embedding of uploaded design
  const designEmbedding = await clipModel.encodeImage(designUrl);

  // 2. Search against known IP database (brand logos, characters, etc.)
  const ipMatches = await ipVectorDB.search({
    vector: designEmbedding,
    limit: 10,
    score_threshold: 0.85,         // High similarity threshold
  });

  // 3. OCR text detection (check for brand names in text)
  const textDetected = await ocrService.detect(designUrl);
  const brandTextMatches = textDetected
    .map(text => checkBrandName(text.content))
    .filter(Boolean);

  // 4. Object detection for specific patterns
  const objectDetection = await detectCopyrightedObjects(designUrl, {
    categories: ['brand_logo', 'sports_team', 'character', 'celebrity_face'],
  });

  const allMatches = [
    ...ipMatches.map(m => ({
      type: m.metadata.type as IPMatch['type'],
      name: m.metadata.name,
      confidence: m.score,
      action: m.score > 0.95 ? 'block' as const : 'review' as const,
    })),
    ...brandTextMatches,
    ...objectDetection,
  ];

  return {
    safe: allMatches.length === 0,
    riskLevel: allMatches.length === 0 ? 'none'
      : allMatches.some(m => m.confidence > 0.95) ? 'high'
      : allMatches.some(m => m.confidence > 0.85) ? 'medium' : 'low',
    matches: allMatches,
  };
}
</code></pre>

<h2 id="4-content-safety"><strong>4. Content Safety (NSFW & Policy)</strong></h2>

<pre><code class="language-typescript">interface ContentSafetyService {
  check(imageUrl: string): Promise&lt;SafetyResult&gt;;
}

interface SafetyResult {
  safe: boolean;
  categories: SafetyCategory[];
}

interface SafetyCategory {
  name: string;
  detected: boolean;
  confidence: number;
  action: 'allow' | 'block' | 'review';
}

async function checkContentSafety(imageUrl: string): Promise&lt;SafetyResult&gt; {
  // Multi-model safety check
  const [nsfwResult, violenceResult, hateResult] = await Promise.all([
    nsfwClassifier.predict(imageUrl),
    violenceClassifier.predict(imageUrl),
    hateSymbolDetector.detect(imageUrl),
  ]);

  const categories: SafetyCategory[] = [
    {
      name: 'NSFW / Adult Content',
      detected: nsfwResult.score > 0.8,
      confidence: nsfwResult.score,
      action: nsfwResult.score > 0.8 ? 'block' : nsfwResult.score > 0.5 ? 'review' : 'allow',
    },
    {
      name: 'Violence / Gore',
      detected: violenceResult.score > 0.7,
      confidence: violenceResult.score,
      action: violenceResult.score > 0.7 ? 'block' : 'allow',
    },
    {
      name: 'Hate Symbols',
      detected: hateResult.found,
      confidence: hateResult.confidence,
      action: hateResult.found ? 'block' : 'allow',
    },
  ];

  return {
    safe: categories.every(c => c.action === 'allow'),
    categories,
  };
}
</code></pre>

<h2 id="5-design-scoring"><strong>5. AI Design Scoring</strong></h2>

<pre><code class="language-typescript">// Đánh giá chất lượng design bằng AI
interface DesignScorer {
  score(design: DesignFile): Promise&lt;DesignScore&gt;;
}

interface DesignScore {
  overall: number;                   // 0-100
  
  aesthetic: number;                 // Visual quality, composition
  marketability: number;             // Likelihood to sell
  printQuality: number;              // Will it print well?
  originality: number;               // How unique vs existing designs
  
  recommendations: string[];
}

async function scoreDesign(design: DesignFile): Promise&lt;DesignScore&gt; {
  // 1. Aesthetic quality (trained on human ratings)
  const aestheticScore = await aestheticModel.predict(design.url);
  
  // 2. Marketability (trained on historical sales data)
  const tags = await autoTag(design.url);
  const marketScore = await marketModel.predict({
    tags,
    style: await classifyStyle(design.url),
    trending: await getTrendMatch(tags),
    seasonality: getSeasonalRelevance(tags),
  });
  
  // 3. Print quality prediction
  const printScore = calculatePrintScore({
    dpi: design.dpi,
    hasTransparency: design.hasTransparency,
    colorCount: design.colorCount,
    hasThinLines: (await detectThinLines(design.url)).count > 0,
    contrastRatio: await measureContrast(design.url),
  });
  
  // 4. Originality (how different from existing designs)
  const embedding = await clipModel.encodeImage(design.url);
  const similar = await vectorDB.search({ vector: embedding, limit: 5 });
  const maxSimilarity = Math.max(...similar.map(s => s.score));
  const originalityScore = (1 - maxSimilarity) * 100;

  const overall = (aestheticScore * 0.3 + marketScore * 0.3 + printScore * 0.2 + originalityScore * 0.2);

  return {
    overall,
    aesthetic: aestheticScore,
    marketability: marketScore,
    printQuality: printScore,
    originality: originalityScore,
    recommendations: generateRecommendations({ aestheticScore, marketScore, printScore, originalityScore }),
  };
}
</code></pre>

<h2 id="6-tong-ket"><strong>6. Tổng kết</strong></h2>

<table>
<thead>
<tr><th>QC Stage</th><th>AI Model/Technique</th><th>Decision</th></tr>
</thead>
<tbody>
<tr><td>Technical Check</td><td>Rule-based (DPI, size, format)</td><td>Pass/Fail/Warning</td></tr>
<tr><td>IP Screening</td><td>CLIP similarity + OCR + Object Detection</td><td>Block/Review/Allow</td></tr>
<tr><td>Content Safety</td><td>NSFW classifier + hate symbol detector</td><td>Block/Review/Allow</td></tr>
<tr><td>Design Scoring</td><td>Multi-model (aesthetic, market, print, originality)</td><td>Score 0-100 with recommendations</td></tr>
</tbody>
</table>
