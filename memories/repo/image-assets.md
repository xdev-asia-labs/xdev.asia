# Image Generation Notes

## API size parameter

- Use `size="1792x1024"` → API returns `1376×768` natively (ratio ≈1.79, near 16:9)
- Then just `resize((1920, 1080))` — no cropping, no padding needed
- **DO NOT** use `size="1024x1024"` for 16:9 images — requires cropping which cuts content

## Logo overlay

- `LOGO_HEIGHT = 80` px (was 50, too small on 1920×1080)
- Use `logo-vertical-dark.png` for dark backgrounds (generated images always have dark bg)
- PNG was re-converted from SVG via cairosvg (old PNG had wrong colors)

## Content integration

- When adding diagram images to lessons, **remove the corresponding ASCII art** — don't keep both
- Image path format in markdown: `![alt text](/storage/uploads/2026/04/filename.png)`

## Diagram files

- Series diagrams go in: `public/storage/uploads/2026/04/`
- Naming convention: `mfe-ms-diagram-bai{N}-{description}.png`
- Script: `scripts/generate-mfe-microservices-diagrams.py`
