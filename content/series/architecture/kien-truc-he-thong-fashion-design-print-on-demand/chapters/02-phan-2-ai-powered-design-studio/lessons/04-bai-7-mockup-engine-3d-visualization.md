---
id: 019f0b20-a204-7001-e001-f2b8f9000204
title: 'Bài 7: Mockup Engine & 3D Visualization — Product Mockup, Three.js Rendering & AR Try-on'
slug: bai-7-mockup-engine-3d-visualization
description: >-
  Mockup generation pipeline, perspective transform, 3D rendering với Three.js/Blender,
  AR try-on (WebXR), product photography simulation, batch mockup generation,
  multi-angle preview system.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: AI-Powered Design Studio"
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: Kiến trúc Hệ thống Fashion Design & Print-on-Demand — Từ Domain Analysis đến Production
  slug: kien-truc-he-thong-fashion-design-print-on-demand
---

<h2 id="1-mockup-architecture"><strong>1. Mockup Engine Architecture</strong></h2>

<pre><code class="language-text">Design Image + Product Template → Mockup Engine → Product Preview
                                        │
                 ┌──────────────────────┼──────────────────────┐
                 ▼                      ▼                      ▼
          ┌──────────┐          ┌──────────┐          ┌──────────────┐
          │ 2D Warp  │          │ 3D Render │          │  AI Mockup   │
          │(fast,web)│          │(quality)  │          │ (photorealistic)│
          │          │          │           │          │              │
          │Perspective│         │ Three.js  │          │Stable Diff   │
          │Transform │          │ + Blender │          │+ ControlNet  │
          │+ Overlay │          │           │          │              │
          └────┬─────┘          └────┬──────┘         └──────┬───────┘
               │                     │                       │
               ▼                     ▼                       ▼
          Quick Preview       High-Quality             AI-Enhanced
          (~100ms)            (~2-5 seconds)           (~10-30 seconds)
          Web Editor          Product Page              Marketing
</code></pre>

<h2 id="2-2d-perspective-mockup"><strong>2. 2D Perspective Transform Mockup</strong></h2>

<pre><code class="language-typescript">// Fast 2D mockup: overlay design trên product photo sử dụng perspective transform
interface MockupTemplate2D {
  id: string;
  product: string;           // 'tshirt_front', 'hoodie_back', 'mug_wrap'
  
  // Product photo
  baseImage: string;         // Product photo URL  
  
  // Design placement area (4-corner polygon for perspective)
  designArea: {
    topLeft: { x: number; y: number };
    topRight: { x: number; y: number };
    bottomLeft: { x: number; y: number };
    bottomRight: { x: number; y: number };
  };
  
  // Color variants
  colorVariants: Array<{
    color: string;           // '#ffffff', '#000000', '#1a1a2e'
    baseImage: string;       // Product photo in this color
  }>;
  
  // Shadow/overlay for realism
  shadowOverlay?: string;    // Shadow layer to composite on top
  displacementMap?: string;  // Fabric wrinkle displacement
}

async function generate2DMockup(
  design: Buffer,
  template: MockupTemplate2D,
  productColor: string,
): Promise&lt;Buffer&gt; {
  const { designArea } = template;
  
  // 1. Perspective transform design to match product surface
  const warped = await perspectiveTransform(design, {
    srcCorners: getDesignCorners(design),
    dstCorners: [
      designArea.topLeft,
      designArea.topRight,
      designArea.bottomLeft,
      designArea.bottomRight,
    ],
  });

  // 2. Apply displacement map (wrinkle/fold effect)
  const displaced = template.displacementMap
    ? await applyDisplacement(warped, template.displacementMap, { strength: 0.3 })
    : warped;

  // 3. Composite layers
  const baseImage = await loadImage(
    template.colorVariants.find(v => v.color === productColor)?.baseImage
    || template.baseImage
  );

  const composited = await sharp(baseImage)
    .composite([
      { input: displaced, blend: 'multiply', left: 0, top: 0 },  // Design
      ...(template.shadowOverlay
        ? [{ input: await loadImage(template.shadowOverlay), blend: 'multiply' as const }]
        : []),
    ])
    .toBuffer();

  return composited;
}
</code></pre>

<h2 id="3-3d-rendering"><strong>3. 3D Rendering với Three.js</strong></h2>

<pre><code class="language-typescript">// Three.js based 3D mockup renderer (runs server-side with headless GL)
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

interface Product3DModel {
  id: string;
  product: string;
  modelUrl: string;           // GLTF/GLB model
  textureMapping: {
    meshName: string;         // Mesh trong model để apply texture
    uvChannel: number;        // UV channel for design placement
    designUVRegion: UVRect;   // UV coords for design area only
  };
  cameraPresets: CameraPreset[];
  lighting: LightingSetup;
}

interface CameraPreset {
  name: string;               // 'front', 'angle_left', '45_top', 'back'
  position: THREE.Vector3;
  lookAt: THREE.Vector3;
  fov: number;
}

async function render3DMockup(
  design: Buffer,
  model: Product3DModel,
  cameraPreset: string,
  options: RenderOptions,
): Promise&lt;Buffer&gt; {
  // 1. Setup scene
  const scene = new THREE.Scene();
  const camera = setupCamera(model.cameraPresets.find(p => p.name === cameraPreset)!);
  const renderer = createHeadlessRenderer(options.width, options.height);

  // 2. Load 3D model
  const gltf = await loadGLTF(model.modelUrl);
  scene.add(gltf.scene);

  // 3. Apply design as texture
  const designTexture = new THREE.TextureLoader().load(
    bufferToDataURL(design)
  );
  designTexture.flipY = false;
  designTexture.colorSpace = THREE.SRGBColorSpace;

  // Find target mesh and apply design
  const targetMesh = gltf.scene.getObjectByName(model.textureMapping.meshName);
  if (targetMesh instanceof THREE.Mesh) {
    const material = targetMesh.material as THREE.MeshStandardMaterial;
    material.map = designTexture;
    material.needsUpdate = true;
  }

  // 4. Setup lighting
  setupLighting(scene, model.lighting);

  // 5. Add environment map for reflections (product photography studio)
  const envMap = await loadHDRI('/environments/studio-softbox.hdr');
  scene.environment = envMap;
  scene.background = options.transparentBg
    ? null
    : new THREE.Color(options.backgroundColor);

  // 6. Render
  renderer.render(scene, camera);

  // 7. Extract image
  return extractRenderedImage(renderer);
}

// Multi-angle batch render
async function renderAllAngles(
  design: Buffer,
  model: Product3DModel,
): Promise&lt;Map&lt;string, Buffer&gt;&gt; {
  const results = new Map&lt;string, Buffer&gt;();
  
  for (const preset of model.cameraPresets) {
    const image = await render3DMockup(design, model, preset.name, {
      width: 1200,
      height: 1200,
      transparentBg: false,
      backgroundColor: '#f5f5f5',
    });
    results.set(preset.name, image);
  }

  return results;
}
</code></pre>

<h2 id="4-ai-mockup"><strong>4. AI-Enhanced Photorealistic Mockup</strong></h2>

<pre><code class="language-typescript">// AI mockup: Sử dụng Stable Diffusion + ControlNet để tạo mockup photorealistic
interface AIMockupRequest {
  design: Buffer;
  productType: string;         // 'tshirt', 'hoodie', 'tote_bag'
  scene: string;               // 'model_wearing', 'flat_lay', 'hanging', 'lifestyle'
  modelDescription?: string;   // 'young woman, urban setting, smiling'
  backgroundColor?: string;
}

async function generateAIMockup(req: AIMockupRequest): Promise&lt;Buffer&gt; {
  // 1. Generate base product image with ControlNet (design as reference)
  const scenePrompt = buildMockupPrompt(req);
  
  // 2. Use IP-Adapter to inject the design onto the product
  const result = await sdxlPipeline.generate({
    prompt: scenePrompt.positive,
    negative_prompt: scenePrompt.negative,
    
    // ControlNet: canny edges of design layout
    controlnet: [{
      model: 'canny',
      image: await generateDesignPlacementGuide(req.design, req.productType),
      conditioning_scale: 0.6,
    }],
    
    // IP-Adapter: inject actual design content
    ip_adapter: {
      model: 'ip_adapter_plus',
      image: req.design,
      scale: 0.7,
    },
    
    width: 1024,
    height: 1024,
    num_inference_steps: 35,
    guidance_scale: 7.5,
  });

  return result.images[0];
}

// Scene-specific prompt builder
function buildMockupPrompt(req: AIMockupRequest): { positive: string; negative: string } {
  const sceneTemplates: Record&lt;string, string&gt; = {
    model_wearing: `professional product photography, ${req.modelDescription || 'person'} wearing a ${req.productType} with the design, studio lighting, white background, commercial quality`,
    flat_lay: `flat lay product photography, ${req.productType} laid flat on clean surface, top-down view, studio lighting, commercial catalog style`,
    hanging: `${req.productType} on wooden hanger, clean white wall background, professional product photography, soft shadows`,
    lifestyle: `lifestyle product photography, ${req.productType} in urban outdoor setting, natural lighting, fashion editorial style`,
  };

  return {
    positive: sceneTemplates[req.scene] || sceneTemplates.flat_lay,
    negative: 'blurry, low quality, distorted design, wrong design placement, extra limbs',
  };
}
</code></pre>

<h2 id="5-ar-tryon"><strong>5. AR Try-on (WebXR)</strong></h2>

<pre><code class="language-typescript">// AR Try-on: User xem product trên người qua camera
interface ARTryOnModule {
  // Initialize AR session
  startSession(videoElement: HTMLVideoElement): Promise&lt;ARSession&gt;;
  
  // Apply design to detected body
  applyDesign(design: Buffer, session: ARSession): void;
  
  // Capture screenshot
  capture(): Promise&lt;Buffer&gt;;
}

interface ARSession {
  // Body pose detection (MediaPipe / TensorFlow.js)
  bodyTracker: BodyPoseTracker;
  
  // 3D product overlay
  productOverlay: THREE.Group;
  
  // Real-time rendering
  renderer: THREE.WebGLRenderer;
  
  status: 'initializing' | 'tracking' | 'lost' | 'error';
}

// Client-side AR implementation
class WebARTryOn {
  private poseDetector: PoseDetector;
  private renderer: THREE.WebGLRenderer;

  async init(canvas: HTMLCanvasElement, video: HTMLVideoElement) {
    // 1. Setup camera feed
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user', width: 1280, height: 720 },
    });
    video.srcObject = stream;

    // 2. Initialize pose detection (MediaPipe BlazePose)
    this.poseDetector = await createPoseDetector('BlazePose', {
      runtime: 'mediapipe',
      modelType: 'full',
    });

    // 3. Setup Three.js overlay renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,  // Transparent background for overlay
    });
  }

  async renderFrame(design: THREE.Texture) {
    // 1. Detect body landmarks
    const poses = await this.poseDetector.estimatePoses(video);
    if (poses.length === 0) return;

    const pose = poses[0];
    const torso = extractTorsoRegion(pose.keypoints);

    // 2. Position 3D product model to match torso
    this.productMesh.position.set(torso.centerX, torso.centerY, 0);
    this.productMesh.scale.set(torso.width / 100, torso.height / 100, 1);
    this.productMesh.rotation.z = torso.rotation;

    // 3. Apply design texture
    (this.productMesh.material as THREE.MeshBasicMaterial).map = design;

    // 4. Render overlay
    this.renderer.render(this.scene, this.camera);
  }
}
</code></pre>

<h2 id="6-batch-mockup"><strong>6. Batch Mockup Generation</strong></h2>

<pre><code class="language-typescript">// Batch: Tạo mockup cho toàn bộ catalog
interface BatchMockupJob {
  designs: Array<{ id: string; imageUrl: string }>;
  products: Array<{ id: string; template: MockupTemplate2D }>;
  colors: string[];
  angles: string[];
}

async function generateCatalogMockups(job: BatchMockupJob): Promise&lt;MockupResult[]&gt; {
  const results: MockupResult[] = [];
  const total = job.designs.length * job.products.length * job.colors.length;
  
  // Parallel processing with concurrency limit
  const queue = new PQueue({ concurrency: 10 });

  for (const design of job.designs) {
    for (const product of job.products) {
      for (const color of job.colors) {
        queue.add(async () => {
          const designImage = await downloadImage(design.imageUrl);
          const mockup = await generate2DMockup(designImage, product.template, color);
          
          // Upload to CDN
          const url = await uploadToCDN(mockup, {
            path: `mockups/${design.id}/${product.id}/${color}.webp`,
            format: 'webp',
            quality: 85,
          });

          results.push({
            designId: design.id,
            productId: product.id,
            color,
            mockupUrl: url,
          });
        });
      }
    }
  }

  await queue.onIdle();
  return results;
}
</code></pre>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<table>
<thead>
<tr><th>Approach</th><th>Speed</th><th>Quality</th><th>Use Case</th></tr>
</thead>
<tbody>
<tr><td>2D Perspective Transform</td><td>~100ms</td><td>Good</td><td>Real-time preview trong editor</td></tr>
<tr><td>3D Three.js Render</td><td>~2-5s</td><td>High</td><td>Product page, multi-angle</td></tr>
<tr><td>AI Photorealistic</td><td>~10-30s</td><td>Very High</td><td>Marketing, social media</td></tr>
<tr><td>AR Try-on</td><td>Real-time</td><td>Medium</td><td>Customer experience, conversion boost</td></tr>
<tr><td>Batch Generation</td><td>Async</td><td>Varies</td><td>Catalog generation, bulk listing</td></tr>
</tbody>
</table>

<ul>
<li><p><strong>2D Mockup</strong> — Perspective transform + displacement map + shadow overlay, ~100ms, dùng cho real-time editor preview</p></li>
<li><p><strong>3D Mockup</strong> — Three.js + GLTF models + PBR materials, multi-angle camera presets, studio lighting</p></li>
<li><p><strong>AI Mockup</strong> — SDXL + ControlNet + IP-Adapter, photorealistic product shots cho marketing</p></li>
<li><p><strong>AR Try-on</strong> — MediaPipe body tracking + WebGL overlay, real-time trên browser</p></li>
<li><p><strong>Batch Processing</strong> — Parallel queue (PQueue), concurrent mockup cho toàn bộ catalog</p></li>
</ul>
