---
id: 019d8b30-bb19-7019-c019-f0c4e8000019
title: 'Bài 19: Real-time Virtual Try-On — 360° Rotation & Animation'
slug: bai-19-real-time-virtual-try-on-360-rotation
description: >-
  Real-time 3D preview với interactive controls: 360° rotation,
  zoom, walking animation. Performance optimization cho
  browser. Progressive loading và LOD system.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 18
section_title: "Phần 5: Virtual Try-On & Computer Vision"
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: "AI Thực Chiến: Xây dựng AI Platform cho Fashion & Print-on-Demand"
  slug: ai-thuc-chien-fashion-print-on-demand
---

## Giới thiệu

Server render ảnh tĩnh là bước đầu, nhưng trải nghiệm thực sự là khi user có thể **xoay 360°**, zoom, và xem animation mặc áo **real-time trong browser**. Bài này xây dựng Three.js-based virtual try-on viewer.

---

## 1. Architecture: Server vs Client

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

## 2. Three.js Virtual Try-On Viewer

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

## 3. Performance Optimization

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

## 4. Walking Animation

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

## 5. Integration API

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

## Tổng kết

Real-time Virtual Try-On:

1. **Three.js viewer** — WebGL rendering với orbit controls
2. **360° rotation** — smooth camera transitions, auto-rotate
3. **Live customization** — change color/design without reload
4. **LOD system** — 3 quality levels cho desktop/tablet/mobile
5. **Walking animation** — optional animation playback
6. **Server pipeline** — avatar → garment → cloth sim → GLB export

Bài tiếp theo bắt đầu **Phần 6: AI cho Production Pipeline**.
