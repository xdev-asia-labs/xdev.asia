---
featured_image: null
---

## Giới thiệu

**xdev.asia** là nền tảng chia sẻ kiến thức lập trình và DevOps, được xây dựng bằng Next.js App Router với thiết kế hiện đại, tối ưu SEO. Trang web hỗ trợ blog, series bài học, tin tức, và showcase dự án.

## Tính năng chính

- 📝 **Blog**: Viết bài với Markdown, syntax highlighting, mục lục tự động
- 📚 **Series**: Tổ chức bài học theo chuỗi, có phân cấp section/lesson
- 📰 **News**: Tin tức công nghệ cập nhật
- 🚀 **Showcase**: Trưng bày apps và repos
- 🔍 **SEO tối ưu**: Static generation, meta tags, sitemap
- 📱 **Responsive**: Thiết kế mobile-first

## Tech Stack

| Công nghệ | Mô tả |
|-----------|--------|
| Next.js 15 | Framework React với App Router |
| TypeScript | Type-safe development |
| Tailwind CSS | Utility-first CSS |
| MDX | Markdown + JSX cho content |
| Static Export | Pre-rendered HTML pages |

## Cài đặt & Phát triển

### Clone và cài đặt dependencies

```bash
git clone https://github.com/tdduydev/xdev.asia.git
cd xdev.asia
npm install
```

### Chạy development server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### Build production

```bash
npm run build
```

## Cấu trúc dự án

```
xdev.asia/
├── content/           # Markdown content
│   ├── posts/         # Blog posts
│   ├── series/        # Series & lessons
│   ├── pages/         # Static pages
│   └── showcase/      # Showcase detail pages
├── data/              # JSON data (authors, tags, categories)
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # Reusable UI components
│   ├── lib/           # Data layer & utilities
│   └── utils/         # Helper functions
└── package.json
```

## Tạo bài viết mới

Tạo file `.md` trong `content/posts/`:

```markdown
---
id: "unique-id"
title: "Tiêu đề bài viết"
slug: "tieu-de-bai-viet"
excerpt: "Mô tả ngắn..."
author:
  id: "author-1"
  name: "Tên tác giả"
category:
  slug: "devops"
  name: "DevOps"
tags:
  - { slug: "docker", name: "Docker" }
published_at: "2025-01-01"
reading_time: 15
---

Nội dung bài viết ở đây...
```

## Deployment

Trang web được deploy tự động qua GitHub Actions khi push vào branch `main`.

## License

MIT License
