---
id: 019d8b30-bb18-7018-c018-f0c4e8000018
title: 'Lesson 18: Garment Rendering — Render clothes on Avatar with Multi-view'
slug: bai-18-garment-rendering-render-ao-len-avatar
description: >-
  Cloth simulation and rendering: draping design onto 3D body, fabric physics,
  wrinkle generation. Multi-view output: front, side, back view. Lighting and
  material system.
duration_minutes: 210
is_free: true
video_url: null
sort_order: 17
section_title: 'Part 5: Virtual Try-On & Computer Vision'
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: 'AI in Action: Building an AI Platform for Fashion & Print-on-Demand'
  slug: ai-thuc-chien-fashion-print-on-demand
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5751" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5751)"/>

  <!-- Decorations -->
  <g>
    <circle cx="928" cy="254" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="756" cy="242" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="1084" cy="230" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="912" cy="218" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="740" cy="206" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="94" x2="1100" y2="174" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="124" x2="1050" y2="194" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1069.1147367097487,229.5 1069.1147367097487,258.5 1044,273 1018.8852632902513,258.5 1018.8852632902513,229.5 1044,215" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI & ML — Lesson 17</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 18: Garment Rendering — Rendering the shirt</tspan>
      <tspan x="60" dy="42">Avatar with Multi-view</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI in Action: Building an AI Platform for Fashion & Print-on-Demand</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Virtual Try-On & Computer Vision</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

The avatar is there, the design is there — now we need to **render the shirt onto the avatar**. It's not just about sticking the texture flat, but there must be cloth simulation: the fabric must drape naturally, wrinkle in the folds, and the design must warp according to the surface of the shirt.

---

## 1. Garment Rendering Pipeline

```
Design (PNG)     +     Avatar (3D mesh)     +     Garment Template
     │                       │                         │
     └───────────┬───────────┘                         │
                 │                                     │
        ┌────────▼────────┐              ┌─────────────▼──────────────┐
        │ UV Mapping       │              │ Cloth Simulation            │
        │ Design → texture │              │ Draping, wrinkles, gravity │
        └────────┬────────┘              └─────────────┬──────────────┘
                 │                                     │
                 └───────────────┬─────────────────────┘
                                 │
                        ┌────────▼────────┐
                        │ Final Rendering  │
                        │ Lighting, shadow │
                        │ Multi-view output│
                        └─────────────────┘
                                 │
                    ┌────────────┼────────────┐
                    ▼            ▼            ▼
               Front View   Side View   Back View
```

---

## 2. Garment Template System

```python
class GarmentTemplate:
    """Template 3D mesh cho các loại áo"""

    TEMPLATES = {
        "tshirt_regular": {
            "mesh": "garments/tshirt_regular.obj",
            "uv_map": "garments/tshirt_regular_uv.png",
            "print_zones": {
                "front_chest": {"uv_range": (0.2, 0.15, 0.8, 0.65)},
                "back_print": {"uv_range": (0.2, 0.15, 0.8, 0.70)},
                "left_chest": {"uv_range": (0.55, 0.20, 0.75, 0.40)},
            },
        },
        "tshirt_oversize": {
            "mesh": "garments/tshirt_oversize.obj",
            "uv_map": "garments/tshirt_oversize_uv.png",
            "print_zones": {
                "front_chest": {"uv_range": (0.15, 0.12, 0.85, 0.68)},
                "back_print": {"uv_range": (0.15, 0.12, 0.85, 0.72)},
            },
        },
    }

    def get_template(
        self, garment_type: str, size: str
    ) -> trimesh.Trimesh:
        template = self.TEMPLATES[garment_type]
        mesh = trimesh.load(template["mesh"])

        # Scale mesh theo size
        scale_factor = self._get_scale(size)
        mesh.apply_scale(scale_factor)

        return mesh
```

---

## 3. Design → Garment Texture

```python
class DesignToTexture:
    """Map design lên UV texture của áo"""

    def apply_design(
        self,
        garment_template: dict,
        design: Image.Image,
        print_zone: str = "front_chest",
        shirt_color: str = "#FFFFFF",
    ) -> Image.Image:
        """
        Tạo texture image cho garment mesh

        1. Start với shirt_color background
        2. Map design vào đúng UV zone
        """
        # Create base texture (shirt color)
        texture_size = 2048
        texture = Image.new(
            "RGBA", (texture_size, texture_size),
            self._hex_to_rgba(shirt_color),
        )

        # Get UV range for print zone
        zone = garment_template["print_zones"][print_zone]
        uv = zone["uv_range"]  # (u_min, v_min, u_max, v_max)

        # Map design to UV coordinates
        target_x = int(uv[0] * texture_size)
        target_y = int(uv[1] * texture_size)
        target_w = int((uv[2] - uv[0]) * texture_size)
        target_h = int((uv[3] - uv[1]) * texture_size)

        # Resize design to fit zone
        design_resized = design.resize(
            (target_w, target_h),
            Image.Resampling.LANCZOS,
        )

        # Paste design onto texture
        texture.paste(design_resized, (target_x, target_y), design_resized)

        return texture
```

---

## 4. Cloth Simulation (Simplified)

```python
class ClothSimulator:
    """Simulate cloth draping trên body"""

    def drape_garment(
        self,
        garment_mesh: trimesh.Trimesh,
        body_mesh: trimesh.Trimesh,
    ) -> trimesh.Trimesh:
        """
        Basic cloth simulation:
        1. Fit garment roughly to body
        2. Push garment vertices outward from body surface
        3. Add wrinkle displacement
        """
        # 1. Align garment to body
        garment_aligned = self._align_to_body(
            garment_mesh, body_mesh
        )

        # 2. Collision detection & resolution
        garment_fitted = self._resolve_collisions(
            garment_aligned, body_mesh,
            offset=0.5,  # 0.5cm clearance
        )

        # 3. Add wrinkles
        garment_wrinkled = self._add_wrinkles(
            garment_fitted, body_mesh
        )

        return garment_wrinkled

    def _resolve_collisions(
        self,
        garment: trimesh.Trimesh,
        body: trimesh.Trimesh,
        offset: float,
    ) -> trimesh.Trimesh:
        """Push garment vertices ở bên trong body ra ngoài"""
        import numpy as np

        vertices = garment.vertices.copy()

        # For each garment vertex, check if inside body
        for i, v in enumerate(vertices):
            # Find closest point on body surface
            closest, distance, face_id = \
                body.nearest.on_surface([v])

            if distance[0] < offset:
                # Push outward along body surface normal
                normal = body.face_normals[face_id[0]]
                vertices[i] = closest[0] + normal * offset

        garment.vertices = vertices
        return garment

    def _add_wrinkles(
        self,
        garment: trimesh.Trimesh,
        body: trimesh.Trimesh,
    ) -> trimesh.Trimesh:
        """Add realistic wrinkle displacement"""
        import numpy as np

        vertices = garment.vertices.copy()
        normals = garment.vertex_normals

        # Simple noise-based wrinkles
        noise = np.random.normal(0, 0.1, vertices.shape)

        # More wrinkles at joints (armpits, waist)
        for i, v in enumerate(vertices):
            # Armpit zone: more wrinkle amplitude
            if -0.15 < v[0] < 0.15 and 0.1 < v[1] < 0.3:
                noise[i] *= 2.5
            # Waist zone
            if v[1] < -0.2:
                noise[i] *= 1.5

        vertices += normals * noise * 0.003
        garment.vertices = vertices

        return garment
```

---

## 5. Multi-View Rendering

```python
class MultiViewRenderer:
    """Render avatar + garment từ nhiều góc"""

    def render_views(
        self,
        avatar: AvatarMesh,
        garment: trimesh.Trimesh,
        views: list[str] = ["front", "side", "back"],
    ) -> dict[str, Image.Image]:
        scene = self._create_scene(avatar, garment)
        results = {}

        camera_angles = {
            "front": (0, 0, 3),         # z-axis front
            "side": (3, 0, 0),          # x-axis side
            "back": (0, 0, -3),         # -z-axis back
            "three_quarter": (2, 0.5, 2), # 3/4 view
        }

        for view_name in views:
            camera_pos = camera_angles[view_name]
            image = self._render_from_angle(
                scene, camera_pos
            )
            results[view_name] = image

        return results

    def _create_scene(
        self, avatar: AvatarMesh, garment: trimesh.Trimesh
    ) -> trimesh.Scene:
        scene = trimesh.Scene()
        scene.add_geometry(avatar.mesh, node_name="body")
        scene.add_geometry(garment, node_name="garment")
        return scene

    def _render_from_angle(
        self,
        scene: trimesh.Scene,
        camera_position: tuple,
        resolution: tuple = (800, 1200),
    ) -> Image.Image:
        """Render scene from specific camera angle"""
        import pyrender

        # Convert trimesh scene to pyrender
        pr_scene = pyrender.Scene()

        for name, mesh in scene.geometry.items():
            pr_mesh = pyrender.Mesh.from_trimesh(mesh)
            pr_scene.add(pr_mesh)

        # Camera
        camera = pyrender.PerspectiveCamera(yfov=np.pi / 4)
        camera_pose = self._look_at(
            eye=camera_position,
            target=(0, 0, 0),
            up=(0, 1, 0),
        )
        pr_scene.add(camera, pose=camera_pose)

        # Lights
        light = pyrender.DirectionalLight(
            color=[1.0, 1.0, 1.0], intensity=3.0
        )
        pr_scene.add(light, pose=camera_pose)

        # Render
        renderer = pyrender.OffscreenRenderer(*resolution)
        color, depth = renderer.render(pr_scene)
        renderer.delete()

        return Image.fromarray(color)
```

---

## Summary

Garment Rendering:

1. **Garment templates** — pre-built 3D meshes for shirts
2. **UV mapping** — maps design to the correct print zone on the texture
3. **Cloth simulation** — collision resolution, wrinkle generation
4. **Multi-view** — render front, side, back, three-quarter views
5. **Pyrender** — offscreen rendering for server-side image generation

Next article: **Real-time Virtual Try-On** — 360° rotation and animation in the browser.
