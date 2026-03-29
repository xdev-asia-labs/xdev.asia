# xdev.asia

Static-export Next.js site for xdev.asia.

## Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- MDX content loaded from `content/`

## Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Build the static site locally:

```bash
npm run build
```

## Content Source Of Truth

Primary content now lives in MDX files:

- `content/posts/*.md`
- `content/series/<slug>/index.md`
- `content/series/<slug>/chapters/**/lessons/*.md`

The app reads posts and series content from MDX via `src/lib/data.ts`. Legacy JSON under `data/` should be treated as migration input, not the main authoring format.

## Writing New Content

Create a new file in the matching content collection.

Example blog post:

```mdx
---
id: post-new
title: Tieu de bai viet
slug: tieu-de-bai-viet
excerpt: Mo ta ngan
featured_image: uploads/example.jpg
type: post
reading_time: 8
view_count: 0
published_at: 2026-03-27T00:00:00.000000Z
created_at: 2026-03-27T00:00:00.000000Z
author:
  id: admin
  name: xDev
  avatar: avatars/example.jpg
category:
  id: devops
  name: DevOps
  slug: devops
tags:
  - name: PostgreSQL
    slug: postgresql
comments_count: 0
---

## Noi dung bai viet

Ban co the viet Markdown thong thuong.

- Danh sach
- Code block
- Table

Hoac chen HTML neu can.
```

Notes:

- Keep frontmatter shape compatible with existing files already generated in `content/`.
- `slug` must match the file name.
- Body content can be Markdown and inline HTML.
- Images using old Laravel-style paths such as `uploads/...` are mapped to local mirrored assets in `public/storage/uploads/`.

## Migrating Old JSON Content

Convert legacy JSON content into Markdown:

```bash
npm run migrate:md
```

Default behavior is non-destructive: existing Markdown files are not overwritten.

If you explicitly want to regenerate Markdown from JSON and overwrite current files:

```bash
npm run migrate:md:force
```

## Important Files

- `src/lib/data.ts`: content loading and lesson fallback logic
- `src/lib/content.ts`: MDX file reading and Markdown-to-HTML rendering
- `scripts/migrate-json-to-md.mjs`: one-time JSON to Markdown migration utility
- `mdx-components.tsx`: required MDX integration hook for Next.js App Router
