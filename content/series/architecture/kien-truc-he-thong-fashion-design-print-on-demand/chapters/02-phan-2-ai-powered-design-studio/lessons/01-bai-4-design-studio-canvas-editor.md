---
id: 019f0b20-a201-7001-e001-f2b8f9000201
title: 'Bài 4: Design Studio & Canvas Editor — Web Editor, Template Engine & Asset Library'
slug: bai-4-design-studio-canvas-editor
description: >-
  Kiến trúc Design Studio web-based, Canvas/WebGL rendering,
  layer system, template engine, asset library, font management,
  collaborative editing, export pipeline (PNG/SVG/PDF).
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 2: AI-Powered Design Studio"
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: Kiến trúc Hệ thống Fashion Design & Print-on-Demand — Từ Domain Analysis đến Production
  slug: kien-truc-he-thong-fashion-design-print-on-demand
---

<h2 id="1-design-studio-overview"><strong>1. Design Studio Architecture</strong></h2>

<p>Design Studio là <strong>core creative tool</strong> của platform POD — cho phép designer tạo, chỉnh sửa và xuất design trực tiếp trên web browser.</p>

<pre><code class="language-text">┌──────────────────────────────────────────────────────────┐
│                    Design Studio UI                       │
│  ┌──────┐ ┌──────────────────────────────┐ ┌──────────┐  │
│  │Panels│ │       Canvas Area           │ │Properties│  │
│  │      │ │  ┌────────────────────────┐  │ │  Panel   │  │
│  │Layers│ │  │                        │  │ │          │  │
│  │Assets│ │  │   [Canvas Renderer]    │  │ │  Fill    │  │
│  │Text  │ │  │   WebGL / Canvas 2D    │  │ │  Stroke  │  │
│  │AI Gen│ │  │                        │  │ │  Font    │  │
│  │      │ │  └────────────────────────┘  │ │  Effects │  │
│  └──────┘ └──────────────────────────────┘ └──────────┘  │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  Toolbar: Select | Text | Shape | Image | AI | Undo │ │
│  └──────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-canvas-renderer"><strong>2. Canvas Renderer Architecture</strong></h2>

<pre><code class="language-typescript">// Canvas Engine — Fabric.js based architecture
interface CanvasEngine {
  // Core rendering
  renderer: WebGLRenderer | Canvas2DRenderer;
  scene: SceneGraph;
  viewport: Viewport;
  
  // Object management
  objects: DesignObject[];
  selectedObjects: DesignObject[];
  
  // History
  undoStack: CanvasState[];
  redoStack: CanvasState[];
}

type DesignObject = 
  | TextObject 
  | ImageObject 
  | ShapeObject 
  | GroupObject 
  | ClipPathObject;

interface TextObject {
  type: 'text';
  id: string;
  content: string;
  fontFamily: string;
  fontSize: number;
  fill: string | Gradient | Pattern;
  position: { x: number; y: number };
  rotation: number;
  opacity: number;
  effects: TextEffect[];
  // Print-specific
  outlineForPrint: boolean; // Convert text → paths for RIP
}

interface ImageObject {
  type: 'image';
  id: string;
  src: string;          // Original hi-res URL
  thumbnail: string;    // Preview thumbnail
  position: { x: number; y: number };
  size: { width: number; height: number };
  cropRect?: CropRect;
  filters: ImageFilter[];
  // Print-specific
  dpi: number;          // >= 300 for print
  colorSpace: 'rgb' | 'cmyk';
}
</code></pre>

<h3 id="rendering-pipeline"><strong>Rendering Pipeline</strong></h3>

<pre><code class="language-text">User Action → Command → Scene Graph Update → Render Queue
                                                    │
                                              ┌─────▼──────┐
                                              │ Dirty Rect  │
                                              │ Detection   │
                                              └─────┬──────┘
                                                    │
                                      ┌─────────────┼──────────────┐
                                      ▼             ▼              ▼
                               ┌──────────┐  ┌──────────┐  ┌──────────┐
                               │Background│  │ Objects  │  │ Overlay  │
                               │  Layer   │  │  Layer   │  │  Layer   │
                               │(template)│  │(designs) │  │(guides,  │
                               │          │  │          │  │ handles) │
                               └──────────┘  └──────────┘  └──────────┘
                                      │             │              │
                                      └─────────────┼──────────────┘
                                                    ▼
                                              Composited Frame
                                              → Display
</code></pre>

<h2 id="3-layer-system"><strong>3. Layer System</strong></h2>

<pre><code class="language-typescript">interface LayerManager {
  layers: Layer[];
  
  addLayer(object: DesignObject): Layer;
  removeLayer(layerId: string): void;
  reorderLayer(layerId: string, newIndex: number): void;
  groupLayers(layerIds: string[]): GroupLayer;
  
  // Visibility & locking
  toggleVisibility(layerId: string): void;
  toggleLock(layerId: string): void;
  
  // Blending
  setBlendMode(layerId: string, mode: BlendMode): void;
  setOpacity(layerId: string, opacity: number): void;
}

type BlendMode = 
  | 'normal' | 'multiply' | 'screen' | 'overlay' 
  | 'darken' | 'lighten' | 'color-dodge' | 'color-burn';

interface Layer {
  id: string;
  name: string;
  object: DesignObject;
  visible: boolean;
  locked: boolean;
  blendMode: BlendMode;
  opacity: number;
  zIndex: number;
}
</code></pre>

<h2 id="4-template-engine"><strong>4. Template Engine</strong></h2>

<pre><code class="language-typescript">interface DesignTemplate {
  id: string;
  name: string;
  category: 'tshirt' | 'hoodie' | 'mug' | 'poster' | 'phone_case';
  
  // Canvas dimensions
  canvas: {
    width: number;   // pixels at 300 DPI
    height: number;
    dpi: number;
  };
  
  // Print area definition
  printArea: {
    x: number;
    y: number;
    width: number;
    height: number;
    safeZone: number;  // margin from edge
  };
  
  // Pre-placed elements (editable placeholders)
  placeholders: Array<{
    id: string;
    type: 'text' | 'image' | 'shape';
    label: string;         // "Your text here"
    position: Position;
    style: Partial<TextObject | ImageObject>;
    editable: boolean;
    required: boolean;
  }>;
  
  // Background/mockup preview
  previewMockup: string;  // Product image with design area overlay
}

// Template cho T-shirt Front
const tshirtFrontTemplate: DesignTemplate = {
  id: 'tmpl-tshirt-front-standard',
  name: 'T-Shirt Front — Standard',
  category: 'tshirt',
  canvas: { width: 4500, height: 5400, dpi: 300 },  // 15" x 18" at 300 DPI
  printArea: { x: 150, y: 150, width: 4200, height: 5100, safeZone: 75 },
  placeholders: [
    {
      id: 'main-text',
      type: 'text',
      label: 'Your Design Here',
      position: { x: 2250, y: 2700 },
      style: { fontSize: 200, fontFamily: 'Inter', fill: '#ffffff' },
      editable: true,
      required: false,
    }
  ],
  previewMockup: '/mockups/tshirt-front-preview.png',
};
</code></pre>

<h2 id="5-asset-library"><strong>5. Asset Library & Font Management</strong></h2>

<pre><code class="language-typescript">interface AssetLibrary {
  // Categories
  categories: AssetCategory[];
  
  // Search & filter
  search(query: string, filters: AssetFilter): Promise&lt;Asset[]&gt;;
  
  // User uploads
  uploadAsset(file: File, metadata: AssetMetadata): Promise&lt;Asset&gt;;
}

interface Asset {
  id: string;
  type: 'clipart' | 'icon' | 'photo' | 'pattern' | 'font' | 'ai_generated';
  name: string;
  thumbnail: string;
  fullUrl: string;
  tags: string[];
  license: 'free' | 'premium' | 'user_uploaded';
  
  // Technical
  format: 'svg' | 'png' | 'webp';
  dimensions?: { width: number; height: number };
  fileSize: number;
  transparent: boolean;
}

// Font loading strategy
interface FontManager {
  // System fonts pre-loaded
  systemFonts: FontFace[];
  
  // On-demand loading
  loadFont(fontFamily: string): Promise&lt;FontFace&gt;;
  
  // Font subsetting for export (only glyphs used)
  subsetFont(fontFamily: string, text: string): Promise&lt;ArrayBuffer&gt;;
  
  // Convert text to paths (for RIP compatibility)
  textToPath(textObject: TextObject): Promise&lt;SVGPathElement&gt;;
}
</code></pre>

<h2 id="6-export-pipeline"><strong>6. Export Pipeline</strong></h2>

<pre><code class="language-text">Canvas State
     │
     ├── Preview Export (fast, low-res)
     │   └── WebP, 72 DPI, max 1200px → CDN
     │
     ├── Mockup Export (medium)
     │   └── PNG, 150 DPI, product composite → CDN
     │
     └── Print Export (high-res, production)
         │
         ├── Text → Paths (outline fonts)
         ├── Images → full resolution
         ├── Color space conversion (RGB → CMYK if needed)
         ├── Add bleed & trim marks
         ├── Flatten layers
         └── Output:
             ├── PNG (300 DPI, transparent background) — for DTG/DTF
             ├── PDF/X-4 (CMYK, ICC profile) — for offset/sublimation
             └── SVG (vector) — for vinyl cut/screen print
</code></pre>

<pre><code class="language-typescript">interface ExportService {
  exportForPreview(canvasState: CanvasState): Promise&lt;string&gt; ;  // WebP URL
  exportForMockup(canvasState: CanvasState, template: MockupTemplate): Promise&lt;string&gt;;
  exportForPrint(canvasState: CanvasState, printSpec: PrintSpec): Promise&lt;PrintFile&gt;;
}

interface PrintSpec {
  format: 'png' | 'pdf' | 'svg';
  dpi: number;           // 300 for most, 600 for fine art
  colorSpace: 'rgb' | 'cmyk';
  iccProfile?: string;   // 'USWebCoatedSWOP' | 'sRGB'
  bleed: number;         // mm
  includeTriMarks: boolean;
  flattenLayers: boolean;
  textToOutlines: boolean;
}

interface PrintFile {
  url: string;
  format: string;
  width: number;
  height: number;
  dpi: number;
  colorSpace: string;
  fileSizeBytes: number;
  checksum: string;     // SHA-256 for integrity
}
</code></pre>

<h2 id="7-undo-redo"><strong>7. Undo/Redo & State Management</strong></h2>

<pre><code class="language-typescript">// Command pattern for undo/redo
interface CanvasCommand {
  execute(): void;
  undo(): void;
  description: string;
}

class MoveObjectCommand implements CanvasCommand {
  constructor(
    private object: DesignObject,
    private from: Position,
    private to: Position,
  ) {}

  execute() { this.object.position = this.to; }
  undo() { this.object.position = this.from; }
  description = 'Move object';
}

class HistoryManager {
  private undoStack: CanvasCommand[] = [];
  private redoStack: CanvasCommand[] = [];
  private maxHistory = 50;

  execute(command: CanvasCommand) {
    command.execute();
    this.undoStack.push(command);
    this.redoStack = []; // Clear redo on new action
    if (this.undoStack.length > this.maxHistory) {
      this.undoStack.shift();
    }
  }

  undo() {
    const command = this.undoStack.pop();
    if (command) {
      command.undo();
      this.redoStack.push(command);
    }
  }

  redo() {
    const command = this.redoStack.pop();
    if (command) {
      command.execute();
      this.undoStack.push(command);
    }
  }
}
</code></pre>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<ul>
<li><p><strong>Canvas Engine</strong> — WebGL/Canvas 2D rendering, dirty-rect optimization, 60fps target</p></li>
<li><p><strong>Layer System</strong> — Z-ordering, blending modes, grouping, visibility/lock</p></li>
<li><p><strong>Template Engine</strong> — Product-specific templates với print area, placeholders, safe zone</p></li>
<li><p><strong>Asset Library</strong> — Clipart, icons, patterns, fonts, AI-generated assets</p></li>
<li><p><strong>Export Pipeline</strong> — Preview (72 DPI WebP) → Mockup (150 DPI PNG) → Print (300 DPI print-ready)</p></li>
<li><p><strong>Undo/Redo</strong> — Command pattern, 50-step history</p></li>
</ul>
