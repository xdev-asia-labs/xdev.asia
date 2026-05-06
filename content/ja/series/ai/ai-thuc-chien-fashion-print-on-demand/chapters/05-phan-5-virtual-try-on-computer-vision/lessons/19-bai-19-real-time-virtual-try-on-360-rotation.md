---
id: 019d8b30-bb19-7019-c019-f0c4e8000019
title: 'レッスン 19: リアルタイムの仮想試着 — 360° 回転とアニメーション'
slug: bai-19-real-time-virtual-try-on-360-rotation
description: >-
  インタラクティブなコントロールを備えたリアルタイム 3D プレビュー: 360
  度回転、ズーム、歩行アニメーション。ブラウザのパフォーマンスの最適化。プログレッシブロードと LOD システム。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 18
section_title: 'パート 5: 仮想試着とコンピュータ ビジョン'
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: 'AI の活用: ファッションとプリント オン デマンド向けの AI プラットフォームの構築'
  slug: ai-thuc-chien-fashion-print-on-demand
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-360" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-360)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1015" cy="175" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="930" cy="50" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="845" cy="185" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="760" cy="60" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="675" cy="195" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="245" x2="1100" y2="325" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="275" x2="1050" y2="345" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="979.6410161513776,125 979.6410161513776,165 945,185 910.3589838486224,165 910.3589838486224,125.00000000000001 945,105" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI と ML — レッスン 18</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 19: リアルタイムの仮想試着 — 360°</tspan>
      <tspan x="60" dy="42">回転とアニメーション</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI の活用: ファッションとプリント オン デマンド向けの AI プラットフォームの構築</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: 仮想試着とコンピュータ ビジョン</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

静止画像のサーバー レンダリングが最初のステップですが、実際のエクスペリエンスは、ユーザーが**360°回転**、ズームし、シャツを着たアニメーションを**ブラウザで**リアルタイムに視聴できるときです。この記事では、Three.js ベースの仮想試着ビューアを構築します。

---

## 1. アーキテクチャ: サーバーとクライアント

```
Server-side (Python):
├── Generate avatar mesh (SMPL-X)
├── Apply garment + cloth simulation
├── Export GLB file
└── Upload to CDN

Client-side (Three.js):
├── Load GLB from CDN
├── Real-time rendering (WebGL)
├── Interactive controls (orbit, zoom)
├── Animation playback
└── Change shirt color/design live
```

---

## 2. Three.js 仮想試着ビューアー

```javascript
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

class VirtualTryOnViewer {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            width: options.width || 600,
            height: options.height || 800,
            background: options.background || '#f5f5f5',
            autoRotate: options.autoRotate || false,
        };

        this.init();
    }

    init() {
        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(
            this.options.background
        );

        // Camera
        this.camera = new THREE.PerspectiveCamera(
            45, this.options.width / this.options.height, 0.1, 100
        );
        this.camera.position.set(0, 1, 3);

        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        this.renderer.setSize(
            this.options.width, this.options.height
        );
        this.renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, 2)
        );
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.container.appendChild(this.renderer.domElement);

        // Controls — 360° rotation
        this.controls = new OrbitControls(
            this.camera, this.renderer.domElement
        );
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.minDistance = 1.5;
        this.controls.maxDistance = 5;
        this.controls.maxPolarAngle = Math.PI * 0.85;
        this.controls.autoRotate = this.options.autoRotate;
        this.controls.autoRotateSpeed = 2;

        // Target avatar center (chest area)
        this.controls.target.set(0, 0.9, 0);

        this.setupLighting();
        this.animate();
    }

    setupLighting() {
        // Ambient
        const ambient = new THREE.AmbientLight(0xffffff, 0.4);
        this.scene.add(ambient);

        // Key light (front-right)
        const keyLight = new THREE.DirectionalLight(0xffffff, 0.8);
        keyLight.position.set(3, 5, 3);
        keyLight.castShadow = true;
        this.scene.add(keyLight);

        // Fill light (front-left)
        const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
        fillLight.position.set(-3, 3, 3);
        this.scene.add(fillLight);

        // Rim light (behind)
        const rimLight = new THREE.DirectionalLight(0xffffff, 0.4);
        rimLight.position.set(0, 3, -3);
        this.scene.add(rimLight);

        // Ground
        const ground = new THREE.Mesh(
            new THREE.PlaneGeometry(10, 10),
            new THREE.ShadowMaterial({ opacity: 0.1 })
        );
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.scene.add(ground);
    }

    async loadAvatar(glbUrl) {
        const loader = new GLTFLoader();
        const gltf = await loader.loadAsync(glbUrl);

        if (this.currentModel) {
            this.scene.remove(this.currentModel);
        }

        this.currentModel = gltf.scene;
        this.scene.add(this.currentModel);

        // Store animation clips
        if (gltf.animations.length > 0) {
            this.mixer = new THREE.AnimationMixer(this.currentModel);
            this.animations = gltf.animations;
        }
    }

    // Live shirt color change
    changeShirtColor(hexColor) {
        if (!this.currentModel) return;

        this.currentModel.traverse((child) => {
            if (child.isMesh && child.name.includes('garment')) {
                child.material.color.set(hexColor);
            }
        });
    }

    // Live design change
    async changeDesign(designUrl) {
        const textureLoader = new THREE.TextureLoader();
        const texture = await textureLoader.loadAsync(designUrl);
        texture.flipY = false;
        texture.colorSpace = THREE.SRGBColorSpace;

        this.currentModel.traverse((child) => {
            if (child.isMesh && child.name.includes('garment')) {
                child.material.map = texture;
                child.material.needsUpdate = true;
            }
        });
    }

    // Auto-rotate views
    setView(viewName) {
        const views = {
            front: { x: 0, y: 1, z: 3 },
            back: { x: 0, y: 1, z: -3 },
            left: { x: -3, y: 1, z: 0 },
            right: { x: 3, y: 1, z: 0 },
        };

        const pos = views[viewName];
        if (pos) {
            this.animateCamera(pos);
        }
    }

    animateCamera(targetPos) {
        const start = this.camera.position.clone();
        const end = new THREE.Vector3(
            targetPos.x, targetPos.y, targetPos.z
        );
        const duration = 800;
        const startTime = Date.now();

        const animateStep = () => {
            const elapsed = Date.now() - startTime;
            const t = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3); // ease-out

            this.camera.position.lerpVectors(start, end, eased);
            this.camera.lookAt(this.controls.target);

            if (t < 1) requestAnimationFrame(animateStep);
        };
        animateStep();
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.controls.update();

        if (this.mixer) {
            this.mixer.update(0.016); // ~60fps
        }

        this.renderer.render(this.scene, this.camera);
    }
}
```

---

## 3. パフォーマンスの最適化

```javascript
class LODManager {
    /**
     * Level-of-Detail cho mobile performance
     * High: full mesh (desktop)
     * Medium: decimated mesh (tablet)
     * Low: simplified mesh (mobile)
     */

    static detectLevel() {
        const isMobile = /iPhone|iPad|Android/i.test(
            navigator.userAgent
        );
        const gl = document.createElement('canvas')
            .getContext('webgl2');

        if (!gl) return 'low';
        if (isMobile) return 'medium';
        return 'high';
    }

    static getMeshUrl(baseUrl, level) {
        const suffixes = {
            high: '',          // Full mesh
            medium: '_mid',    // 50% vertices
            low: '_low',       // 25% vertices
        };
        return baseUrl.replace('.glb', `${suffixes[level]}.glb`);
    }
}
```

---

## 4. 歩行アニメーション

```javascript
class WalkAnimation {
    constructor(mixer, clips) {
        this.mixer = mixer;
        this.walkClip = clips.find(c => c.name === 'walk');
        this.idleClip = clips.find(c => c.name === 'idle');
    }

    playWalk() {
        if (this.walkClip) {
            const action = this.mixer.clipAction(this.walkClip);
            action.setLoop(THREE.LoopRepeat);
            action.play();
        }
    }

    playIdle() {
        if (this.idleClip) {
            const action = this.mixer.clipAction(this.idleClip);
            action.setLoop(THREE.LoopRepeat);
            action.play();
        }
    }

    stop() {
        this.mixer.stopAllAction();
    }
}
```

---

## 5. 統合 API

```python
@app.post("/api/v1/tryon/generate")
async def virtual_tryon(
    design_id: str,
    height: float,
    weight: float,
    shirt_color: str = "#FFFFFF",
    shirt_type: str = "tshirt_regular",
    size: str = "M",
):
    # 1. Get design
    design = await get_design(design_id)

    # 2. Generate avatar
    body = await body_pipeline.estimate(height=height, weight=weight)
    avatar = avatar_generator.generate_avatar(body.smpl_params)

    # 3. Get garment template
    garment = garment_template.get_template(shirt_type, size)

    # 4. Apply design texture
    texture = design_to_texture.apply_design(
        garment_template.TEMPLATES[shirt_type],
        design.image, shirt_color=shirt_color,
    )

    # 5. Cloth simulation
    garment_draped = cloth_sim.drape_garment(garment, avatar.mesh)

    # 6. Export GLB (with all LOD levels)
    glb_urls = {}
    for level in ["high", "medium", "low"]:
        mesh = lod_manager.simplify(garment_draped, level)
        path = f"tryon/{uuid4()}_{level}.glb"
        exporter.export_glb(mesh, path)
        glb_urls[level] = f"/storage/{path}"

    # 7. Render static previews
    previews = multi_view.render_views(avatar, garment_draped)

    return {
        "glb_urls": glb_urls,
        "previews": {
            view: upload_image(img) for view, img in previews.items()
        },
    }
```

---

## 概要

リアルタイムの仮想試着:

1. **Three.js ビューア** — オービット コントロールを使用した WebGL レンダリング
2. **360°回転** — スムーズなカメラの移行、自動回転
3. **ライブカスタマイズ** — 再読み込みせずに色/デザインを変更します
4. **LOD システム** — デスクトップ/タブレット/モバイルの 3 つの品質レベル
5. **歩行アニメーション** — オプションのアニメーション再生
6. **サーバー パイプライン** — アバター → 衣服 → 布地シム → GLB エクスポート

次の記事は **パート 6: 本番パイプライン用の AI** から始まります。
