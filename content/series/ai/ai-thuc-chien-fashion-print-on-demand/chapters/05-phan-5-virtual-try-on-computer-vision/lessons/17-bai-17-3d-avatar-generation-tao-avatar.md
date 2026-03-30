---
id: 019d8b30-bb17-7017-c017-f0c4e8000017
title: 'Bài 17: 3D Avatar Generation — Tạo Avatar thử đồ ảo'
slug: bai-17-3d-avatar-generation-tao-avatar
description: >-
  Generate 3D avatar từ body parameters: SMPL/SMPL-X model,
  texture mapping, body shape morphing. Integration với
  Three.js/WebGL cho browser rendering.
duration_minutes: 210
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 5: Virtual Try-On & Computer Vision"
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: "AI Thực Chiến: Xây dựng AI Platform cho Fashion & Print-on-Demand"
  slug: ai-thuc-chien-fashion-print-on-demand
---

## Giới thiệu

Từ SMPL parameters ở bài trước, bài này **tạo 3D avatar** để user thử đồ ảo. Sử dụng SMPL-X model cho realistic body mesh, texture mapping cho skin appearance, và export sang Three.js cho browser rendering.

---

## 1. SMPL-X Body Model

### SMPL là gì?

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

## 4. Export cho Web (Three.js)

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

## Tổng kết

3D Avatar Generation:

1. **SMPL-X** — parametric body model, 10,475 vertices
2. **Texture mapping** — skin tone textures
3. **Pose presets** — standing, walking, hands-on-hips
4. **GLB export** — binary glTF cho web delivery
5. **Three.js** — real-time rendering trong browser

Bài tiếp theo: **Garment Rendering** — render áo lên avatar với cloth simulation.
