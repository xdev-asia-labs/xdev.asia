---
id: 019d8b30-bb17-7017-c017-f0c4e8000017
title: 'Lesson 17: 3D Avatar Generation — Create a virtual fitting Avatar'
slug: bai-17-3d-avatar-generation-tao-avatar
description: >-
  Generate 3D avatar from body parameters: SMPL/SMPL-X model, texture mapping,
  body shape morphing. Integration with Three.js/WebGL for browser rendering.
duration_minutes: 210
is_free: true
video_url: null
sort_order: 16
section_title: 'Part 5: Virtual Try-On & Computer Vision'
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: 'AI in Action: Building an AI Platform for Fashion & Print-on-Demand'
  slug: ai-thuc-chien-fashion-print-on-demand
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4265" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4265)"/>

  <!-- Decorations -->
  <g>
    <circle cx="913" cy="109" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="726" cy="222" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1039" cy="75" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="852" cy="188" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="665" cy="41" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="199" x2="1100" y2="279" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="229" x2="1050" y2="299" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1078.444863728671,232 1078.444863728671,266 1049,283 1019.555136271329,266 1019.555136271329,232 1049,215" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI & ML — Lesson 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 17: 3D Avatar Generation — Creating Avatars</tspan>
      <tspan x="60" dy="42">virtual try on</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI in Action: Building an AI Platform for Fashion & Print-on-Demand</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Virtual Try-On & Computer Vision</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

From SMPL parameters in the previous article, this article **creates a 3D avatar** for users to try on virtual items. Use SMPL-X model for realistic body mesh, texture mapping for skin appearance, and export to Three.js for browser rendering.

---

## 1. SMPL-X Body Model

### What is SMPL?

```
SMPL (Skinned Multi-Person Linear Model):
- Parametric body model cho 3D human body
- Input: shape β (10 params) + pose θ (72 params)
- Output: 3D mesh (6890 vertices, 13776 faces)

SMPL-X (eXpressive):
- Mở rộng SMPL với hands và face
- 10,475 vertices
- Hỗ trợ: body + hands + face expressions
```

### Generate Body Mesh

```python
import smplx
import torch
import trimesh

class AvatarGenerator:
    """Tạo 3D avatar từ body parameters"""

    def __init__(self):
        self.body_model = smplx.create(
            model_path="models/smplx",
            model_type="smplx",
            gender="neutral",
            num_betas=10,
            use_pca=True,
            num_pca_comps=12,
        )

    def generate_avatar(
        self, smpl_params: SMPLParams
    ) -> AvatarMesh:
        # Set body shape
        betas = torch.tensor(
            smpl_params.betas, dtype=torch.float32
        ).unsqueeze(0)

        # Default T-pose
        body_pose = torch.zeros(1, 63)  # 21 joints × 3

        # Forward pass
        output = self.body_model(
            betas=betas,
            body_pose=body_pose,
            return_verts=True,
        )

        vertices = output.vertices.detach().numpy()[0]
        faces = self.body_model.faces

        # Create trimesh
        mesh = trimesh.Trimesh(
            vertices=vertices,
            faces=faces,
            process=False,
        )

        return AvatarMesh(
            mesh=mesh,
            vertices=vertices,
            faces=faces,
            joints=output.joints.detach().numpy()[0],
        )
```

---

## 2. Texture Mapping

```python
class AvatarTexture:
    """Apply skin texture lên avatar"""

    DEFAULT_TEXTURES = {
        "light": "textures/skin_light.png",
        "medium": "textures/skin_medium.png",
        "dark": "textures/skin_dark.png",
        "neutral": "textures/skin_neutral.png",
    }

    def apply_texture(
        self,
        mesh: trimesh.Trimesh,
        skin_tone: str = "neutral",
    ) -> trimesh.Trimesh:
        # Load UV coordinates
        uv_coords = self._load_uv_map()

        # Load texture image
        texture_path = self.DEFAULT_TEXTURES[skin_tone]
        texture = Image.open(texture_path)

        # Apply texture
        material = trimesh.visual.texture.SimpleMaterial(
            image=texture
        )
        color_visuals = trimesh.visual.TextureVisuals(
            uv=uv_coords,
            material=material,
        )
        mesh.visual = color_visuals

        return mesh
```

---

## 3. Pose Adjustment

```python
class PoseController:
    """Điều chỉnh pose cho avatar"""

    PRESET_POSES = {
        "t_pose": {
            "description": "Arms stretched out horizontally",
            "body_pose": None,  # Default SMPL T-pose
        },
        "standing": {
            "description": "Casual standing pose",
            "body_pose": "poses/standing_casual.npy",
        },
        "walking": {
            "description": "Mid-walk pose",
            "body_pose": "poses/walking.npy",
        },
        "hands_on_hips": {
            "description": "Hands on hips, confident",
            "body_pose": "poses/hands_on_hips.npy",
        },
    }

    def set_pose(
        self,
        avatar: AvatarMesh,
        pose_name: str = "standing",
    ) -> AvatarMesh:
        pose_data = self.PRESET_POSES[pose_name]

        if pose_data["body_pose"] is None:
            body_pose = torch.zeros(1, 63)
        else:
            body_pose = torch.tensor(
                np.load(pose_data["body_pose"]),
                dtype=torch.float32,
            ).unsqueeze(0)

        # Re-generate mesh with pose
        output = self.body_model(
            betas=avatar.betas,
            body_pose=body_pose,
            return_verts=True,
        )

        return AvatarMesh(
            mesh=trimesh.Trimesh(
                vertices=output.vertices.detach().numpy()[0],
                faces=self.body_model.faces,
            ),
            vertices=output.vertices.detach().numpy()[0],
            faces=self.body_model.faces,
            joints=output.joints.detach().numpy()[0],
            pose_name=pose_name,
        )
```

---

## 4. Export for Web (Three.js)

```python
class WebExporter:
    """Export avatar mesh cho Three.js rendering"""

    def export_glb(
        self, avatar: AvatarMesh, output_path: str
    ):
        """Export to GLB format (binary glTF)"""
        avatar.mesh.export(output_path, file_type="glb")

    def export_for_threejs(
        self, avatar: AvatarMesh
    ) -> dict:
        """Export as JSON cho Three.js BufferGeometry"""
        vertices = avatar.vertices.flatten().tolist()
        normals = avatar.mesh.vertex_normals.flatten().tolist()
        indices = avatar.faces.flatten().tolist()
        uv = avatar.mesh.visual.uv.flatten().tolist() \
            if hasattr(avatar.mesh.visual, 'uv') else []

        return {
            "vertices": vertices,
            "normals": normals,
            "indices": indices,
            "uv": uv,
            "joints": avatar.joints.tolist(),
        }
```

### Three.js Frontend (skeleton)

```javascript
// Frontend: Load and render avatar
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

class AvatarViewer {
    constructor(container) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.controls = new OrbitControls(
            this.camera, this.renderer.domElement
        );

        container.appendChild(this.renderer.domElement);
        this.setupLighting();
    }

    async loadAvatar(glbUrl) {
        const loader = new GLTFLoader();
        const gltf = await loader.loadAsync(glbUrl);

        this.avatarMesh = gltf.scene;
        this.scene.add(this.avatarMesh);

        // Center camera on avatar
        const box = new THREE.Box3().setFromObject(this.avatarMesh);
        const center = box.getCenter(new THREE.Vector3());
        this.camera.lookAt(center);
    }

    setupLighting() {
        const ambient = new THREE.AmbientLight(0xffffff, 0.5);
        const directional = new THREE.DirectionalLight(0xffffff, 0.8);
        directional.position.set(5, 5, 5);
        this.scene.add(ambient, directional);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}
```

---

## 5. Avatar API

```python
from fastapi import FastAPI, UploadFile

app = FastAPI()

@app.post("/api/v1/avatar/generate")
async def generate_avatar(
    height: float,
    weight: float,
    chest: float | None = None,
    waist: float | None = None,
    shoulder: float | None = None,
    skin_tone: str = "neutral",
    pose: str = "standing",
):
    # 1. Estimate body
    body = await body_pipeline.estimate(
        height=height, weight=weight,
        chest=chest, waist=waist, shoulder=shoulder,
    )

    # 2. Generate avatar
    avatar = avatar_generator.generate_avatar(body.smpl_params)

    # 3. Apply texture
    avatar.mesh = texture_mapper.apply_texture(
        avatar.mesh, skin_tone
    )

    # 4. Set pose
    avatar = pose_controller.set_pose(avatar, pose)

    # 5. Export GLB
    glb_path = f"avatars/{uuid4()}.glb"
    exporter.export_glb(avatar, glb_path)

    return {
        "avatar_url": f"/storage/{glb_path}",
        "measurements": body.measurements.to_dict(),
    }
```

---

## Summary

3D Avatar Generation:

1. **SMPL-X** — parametric body model, 10,475 vertices
2. **Texture mapping** — skin tone textures
3. **Pose presets** — standing, walking, hands-on-hips
4. **GLB export** — binary glTF for web delivery
5. **Three.js** — real-time rendering in the browser

Next article: **Garment Rendering** — render shirts on avatars with cloth simulation.
