# Brand Assets Guidelines

## Thư mục Brand Assets

Đặt tất cả logo và brand assets vào: `/public/images/brand/`

## Logo Files

### ✅ Logo hiện có

- **`/public/images/logo/logo-vertical-light.svg`** - Logo cho nền sáng (X gradient xanh, DEV màu tối #3C4C88)
- **`/public/images/logo/logo-vertical-dark.svg`** - Logo cho nền tối (X gradient xanh sáng, DEV màu sáng #E8ECF8)
- **`/public/images/logo/logo-vertical-dark.png`** - PNG version cho dark bg (dùng trong image generation overlay)
- **`/public/images/logo/logo-vertical-light.png`** - PNG version cho light bg (dùng trong OG image)
- **`/public/images/logo/logo-watermark-light.svg`** - Watermark mờ cho nền sáng
- **`/public/images/logo/logo-watermark-dark.svg`** - Watermark mờ cho nền tối
- **`xdev-logo.png`** - Logo cũ (deprecated, giữ lại cho backward compatibility)

## Brand Colors

### Primary Colors

- **Primary Blue**: `#0066CC` - Màu chủ đạo
- **Dark Blue**: `#003D7A` - Text, headers
- **Light Blue**: `#E6F2FF` - Backgrounds

### Functional Colors

- **Success**: `#10B981` (green)
- **Warning**: `#F59E0B` (orange)  
- **Error**: `#EF4444` (red)
- **Neutral**: `#6B7280` (gray)

## Typography

### Primary Font

**Inter** (Google Fonts)

- Regular (400) - Body text
- Medium (500) - Emphasis
- Semibold (600) - Subheadings
- Bold (700) - Headings

### Monospace Font

**JetBrains Mono** - Code blocks

## Logo Usage Guidelines

### ✅ DO

- Maintain clear space around logo (minimum 1/4 of logo height)
- Use official logo files only
- Scale proportionally
- Use on appropriate contrast backgrounds

### ❌ DON'T

- Don't distort or stretch logo
- Don't change logo colors
- Don't add effects (shadows, gradients, etc.)
- Don't place on busy backgrounds

## Cách sử dụng trong code

### Blade/Vue

```html
<!-- Logo chính (đường dẫn ngắn) -->
<img src="/images/logo.png" alt="xDev" class="h-8">

<!-- Hoặc từ thư mục brand -->
<img src="/images/brand/xdev-logo.png" alt="xDev" class="h-8">

<!-- Logo với width cố định, height auto -->
<img src="/images/logo.png" alt="xDev" class="w-40 h-auto">
```

### CSS với Tailwind

```css
/* Primary color */
.bg-primary { background-color: #0066CC; }
.text-primary { color: #0066CC; }

/* Dark variant */
.bg-primary-dark { background-color: #003D7A; }

/* Light variant */
.bg-primary-light { background-color: #E6F2FF; }
```

## Brand Page

Truy cập: `https://yourdomain.com/brand` để xem đầy đủ brand guidelines.

## Export Logo từ Design Tools

### Figma

1. Select logo/icon
2. Export as SVG (recommended) or PNG
3. SVG settings: Include "id" attribute = False, Outline text = True
4. PNG settings: 2x or 3x resolution

### Adobe Illustrator

1. File → Export → Export As
2. Format: SVG
3. Settings: Styling = Presentation Attributes, Font = Convert to outlines

### Online Tools

- [Logo.com](https://logo.com) - Logo maker
- [Canva](https://canva.com) - Design tool
- [Figma](https://figma.com) - Professional design

## Contact

Nếu cần file logo gốc hoặc có câu hỏi về brand guidelines, liên hệ team design.
