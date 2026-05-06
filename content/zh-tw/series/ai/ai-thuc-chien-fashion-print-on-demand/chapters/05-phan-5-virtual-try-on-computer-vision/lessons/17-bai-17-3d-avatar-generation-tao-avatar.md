---
id: 019d8b30-bb17-7017-c017-f0c4e8000017
title: 第 17 課：3D 頭像產生 — 建立虛擬試衣頭像
slug: bai-17-3d-avatar-generation-tao-avatar
description: 從身體參數產生 3D 頭像：SMPL/SMPL-X 模型、紋理映射、體形變形。與 Three.js/WebGL 整合以進行瀏覽器渲染。
duration_minutes: 210
is_free: true
video_url: null
sort_order: 16
section_title: 第 5 部分：虛擬試戴與電腦視覺
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: 人工智慧在行動：建構時尚和按需印刷的人工智慧平台
  slug: ai-thuc-chien-fashion-print-on-demand
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 人工智慧與機器學習 — 第 16 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 17 課：3D 頭像產生 — 建立頭像</tspan>
      <tspan x="60" dy="42">虛擬試穿</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">人工智慧在行動：建構時尚和按需印刷的人工智慧平台</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：虛擬試戴與電腦視覺</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

從上一篇文章中的SMPL參數來看，本文**建立了一個3D頭像**供使用者試戴虛擬物品。使用 SMPL-X 模型實現逼真的身體網格，使用紋理映射實現皮膚外觀，並匯出到 Three.js 進行瀏覽器渲染。

---

## 1. SMPL-X 車身模型

### 什麼是 SMPL？

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

### 生成身體網格

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

## 2. 紋理映射

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

## 3. 姿勢調整

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

## 4. 匯出為 Web (Three.js)

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

### Three.js 前端（骨架）

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

## 5.頭像API

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

## 總結

3D 頭像生成：

1. **SMPL-X** — 參數化人體模型，10,475 個頂點
2. **紋理映射** — 膚色紋理
3. **預設姿勢** — 站立、行走、雙手叉腰
4. **GLB 匯出** — 用於 Web 交付的二進位 glTF
5. **Three.js**－瀏覽器中即時渲染

下一篇文章：**服裝渲染** — 透過布料模擬在虛擬人物上渲染襯衫。
