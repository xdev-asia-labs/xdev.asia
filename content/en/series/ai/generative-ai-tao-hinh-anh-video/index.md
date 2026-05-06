---
id: 019d8b31-aa01-7001-b001-ff0200000001
title: 'Generative AI: Create Images & Videos with AI'
slug: generative-ai-tao-hinh-anh-video
description: >-
  Comprehensive course on Generative AI for images and video — from GAN, VAE
  platforms to Stable Diffusion, DALL-E, Midjourney API. Practice image
  generation, inpainting, style transfer, video generation, and build Generative
  AI pipeline production-ready with Python, Hugging Face Diffusers, and ComfyUI.
featured_image: uploads/2026/03/generative-ai-tao-hinh-anh-video-cover.png
level: intermediate
duration_hours: 55
lesson_count: 18
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-31T10:00:00.000000Z'
created_at: '2026-03-31T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9618-bb00-7000-b000-bb0000000001
  name: AI & Machine Learning
  slug: ai-machine-learning
tags:
  - name: Generative AI
    slug: generative-ai
  - name: Stable Diffusion
    slug: stable-diffusion
  - name: DALL-E
    slug: dall-e
  - name: GAN
    slug: gan
  - name: VAE
    slug: vae
  - name: Diffusion Models
    slug: diffusion-models
  - name: Image Generation
    slug: image-generation
  - name: Video Generation
    slug: video-generation
  - name: ComfyUI
    slug: comfyui
  - name: Hugging Face
    slug: hugging-face
  - name: Deep Learning
    slug: deep-learning
  - name: Python
    slug: python
  - name: AI
    slug: ai
sections:
  - id: section-genai-01
    title: 'Part 1: Generative AI Platform — Theory & Architecture'
    description: Understand the nature of generative models and core architecture
    sort_order: 1
    lessons:
      - id: 019d8b31-bb01-7001-c001-ee0100000001
        title: 'Lesson 1: What is Generative AI? — Creative AI Landscape'
        slug: bai-1-generative-ai-la-gi
        description: >-
          Definition of Generative AI, distinguishing discriminative vs
          generative models. Development history from Boltzmann Machine to
          Diffusion Models. Types of generative models: GAN, VAE, Flow-based,
          Diffusion, Autoregressive. Realistic applications and current
          landscapes 2026.
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019d8b31-bb02-7002-c002-ee0200000002
        title: 'Lesson 2: GAN — Generative Adversarial Networks from Zero'
        slug: bai-2-gan-generative-adversarial-networks
        description: >-
          GAN architecture: generator vs discriminator, minimax game. Training
          dynamics and mode collapse. GAN variants: DCGAN, WGAN, StyleGAN,
          CycleGAN. Hands-on: train GAN generate faces with PyTorch. GAN
          evaluation: FID, IS scores.
        duration_minutes: 150
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b31-bb03-7003-c003-ee0300000003
        title: 'Lesson 3: VAE — Variational Autoencoders & Latent Space'
        slug: bai-3-vae-variational-autoencoders
        description: >-
          Autoencoder recap. VAE: ELBO, reparameterization trick, KL divergence.
          Latent space exploration and interpolation. Conditional VAE. VQ-VAE
          for discrete latents. Compare VAE vs GAN. Hands-on image generation
          with VAE.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-genai-02
    title: 'Part 2: Diffusion Models — Revolutionary Image Creation'
    description: >-
      Deep dive into Diffusion Models — the foundation of Stable Diffusion,
      DALL-E, Midjourney
    sort_order: 2
    lessons:
      - id: 019d8b31-bb04-7004-c004-ee0400000004
        title: 'Lesson 4: Diffusion Models — Mathematics & Intuition'
        slug: bai-4-diffusion-models-toan-hoc
        description: >-
          Forward process: add noise progressively. Reverse process: denoise
          step-by-step. DDPM: denoising diffusion probabilistic models.
          Score-based models. Noise scheduling. Math: Gaussian transitions, loss
          function. Hands-on DDPM from scratch.
        duration_minutes: 180
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b31-bb05-7005-c005-ee0500000005
        title: 'Lesson 5: Stable Diffusion Deep Dive — Architecture & Pipeline'
        slug: bai-5-stable-diffusion-deep-dive
        description: >-
          Latent Diffusion Models: why work in the latent space? UNet
          architecture. Text conditioning with CLIP. VAE encoder/decoder.
          Scheduler: DDIM, Euler, DPM++. Stable Diffusion 1.5, 2.1, SDXL, SD3.
          Detailed pipeline from prompt to image.
        duration_minutes: 180
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8b31-bb06-7006-c006-ee0600000006
        title: 'Lesson 6: Prompt Engineering for Image Generation'
        slug: bai-6-prompt-engineering-image-generation
        description: >-
          Text prompt anatomy: subject, style, quality, negative prompts. Prompt
          weighting and emphasizing syntax. Stable Diffusion prompt tips.
          Midjourney prompt patterns. DALL-E prompting strategies. Systematic
          prompt testing. Prompt databases and community resources.
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-genai-03
    title: 'Part 3: Practicing Advanced Image Generation'
    description: 'Advanced techniques — ControlNet, LoRA, Inpainting, and custom training'
    sort_order: 3
    lessons:
      - id: 019d8b31-bb07-7007-c007-ee0700000007
        title: 'Lesson 7: ControlNet & Image-to-Image — Controlling Output'
        slug: bai-7-controlnet-image-to-image
        description: >-
          img2img pipeline: use reference image. ControlNet: canny edge, depth
          map, pose estimation, segmentation. IP-Adapter for style transfer.
          T2I-Adapter. Hands-on: create layout-controlled images with ComfyUI
          and Diffusers.
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b31-bb08-7008-c008-ee0800000008
        title: 'Lesson 8: Inpainting, Outpainting & Image Editing with AI'
        slug: bai-8-inpainting-outpainting
        description: >-
          Inpainting: edit specific areas in the image. Outpainting: expand the
          image outward. Instruction-based editing: InstructPix2Pix. Background
          removal and replacement. Object removal. Hands-on with Stable
          Diffusion inpainting pipeline.
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b31-bb09-7009-c009-ee0900000009
        title: 'Lesson 9: LoRA & Custom Model Training — Creating Your Own Style'
        slug: bai-9-lora-custom-model-training
        description: >-
          Fine-tuning Stable Diffusion with LoRA: concept, math, implementation.
          DreamBooth: personalized generation. Textual Inversion. Training
          dataset preparation and best practices. Merge LoRA models. Hands-on:
          train LoRA for your own style.
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-genai-04
    title: 'Part 4: DALL-E, Midjourney & Commercial APIs'
    description: Use commercial APIs for production applications
    sort_order: 4
    lessons:
      - id: 019d8b31-bb10-7010-c010-ee1000000010
        title: 'Lesson 10: DALL-E 3 API — Integrating OpenAI Image Generation'
        slug: bai-10-dall-e-3-api
        description: >-
          DALL-E 3 architectural overview. OpenAI Images API: generation,
          editing, variations. Prompt best practices for DALL-E. Rate limits and
          pricing optimization. Error handling. Integration patterns with web
          applications. Safety filters.
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b31-bb11-7011-c011-ee1100000011
        title: 'Lesson 11: Midjourney, Flux & Emerging Models'
        slug: bai-11-midjourney-flux
        description: >-
          Midjourney API and Discord integration. Flux: architecture and
          capabilities. Google Imagen 3. Adobe Firefly API. Compare quality,
          speed, cost between platforms. Choose the appropriate model for the
          use case. Multi-model orchestration.
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-genai-05
    title: 'Part 5: Video Generation & Multimodal'
    description: 'Create videos, animations and multimedia content with AI'
    sort_order: 5
    lessons:
      - id: 019d8b31-bb12-7012-c012-ee1200000012
        title: 'Lesson 12: Video Generation — Sora, Runway, Kling & Pika'
        slug: bai-12-video-generation
        description: >-
          Video generation landscape 2026. Text-to-video: Sora, Runway Gen-3,
          Kling, Pika Labs. Image-to-video. Video editing with AI. Temporal
          consistency challenges. Quality comparison. API integration patterns.
          Cost analysis for production.
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b31-bb13-7013-c013-ee1300000013
        title: 'Lesson 13: Audio & Music Generation — Creating Sound with AI'
        slug: bai-13-audio-music-generation
        description: >-
          Music generation: MusicGen, Suno AI, Udio. Sound effects generation.
          Voice synthesis and basic voice cloning. Audio-visual sync.
          Text-to-speech for video narration. Hands-on: create soundtrack for
          AI-generated video.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8b31-bb14-7014-c014-ee1400000014
        title: 'Lesson 14: 3D Generation & Avatar AI'
        slug: bai-14-3d-generation-avatar
        description: >-
          Text-to-3D: DreamFusion, Magic3D, Point-E. Image-to-3D models. 3D
          Gaussian Splatting. AI Avatars: talking head, full body. NeRF basics.
          3D asset generation for games & VR. Hands-on: generate 3D models from
          text.
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
  - id: section-genai-06
    title: 'Part 6: Production & Practical Application'
    description: >-
      Bringing Generative AI into production — architecture, optimization,
      ethics
    sort_order: 6
    lessons:
      - id: 019d8b31-bb15-7015-c015-ee1500000015
        title: 'Lesson 15: ComfyUI Mastery — Visual Workflow for AI Art'
        slug: bai-15-comfyui-mastery
        description: >-
          ComfyUI setup and interface. Node-based workflow design. Custom nodes.
          Workflow templates for production. Batch processing. API mode for
          automation. Model management. Performance optimization. Workflow
          sharing and community.
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b31-bb16-7016-c016-ee1600000016
        title: 'Lesson 16: Generative AI API Server — Building Platform'
        slug: bai-16-generative-ai-api-server
        description: >-
          Build API server for image generation: FastAPI + Stable Diffusion.
          Queue-based processing with Celery/Redis. GPU memory management. Model
          loading optimization. Rate limiting and authentication. S3 storage
          integration. WebSocket for real-time progress.
        duration_minutes: 180
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b31-bb17-7017-c017-ee1700000017
        title: 'Lesson 17: AI Safety, Ethics & Copyright in Generative AI'
        slug: bai-17-ai-safety-ethics-copyright
        description: >-
          Content safety: NSFW detection, prompt filtering. Deepfake detection
          and prevention. Copyright issues with AI-generated content.
          Watermarking AI images (C2PA). Bias in generative models. Responsible
          AI deployment guidelines. Legal landscape 2026.
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8b31-bb18-7018-c018-ee1800000018
        title: 'Lesson 18: Capstone — Building AI Creative Platform'
        slug: bai-18-capstone-ai-creative-platform
        description: >-
          Summary project: building an AI content creation platform —
          text-to-image, image editing, video generation. Architecture: React
          frontend + FastAPI backend + ComfyUI + S3. User management, credit
          system, gallery. Deploy with Docker & GPU cloud.
        duration_minutes: 240
        is_free: true
        sort_order: 17
        video_url: null
reviews: []
quizzes: []
locale: en
---

## Introducing the Series

**Generative AI: Creating Images & Videos with AI** is a comprehensive course that helps you master the art and techniques of creating visual content with AI — from the theoretical foundations of GAN, VAE, Diffusion Models to the hands-on practice of Stable Diffusion, DALL-E, Midjourney and Video Generation.

> 🎯 **After completing the course, you will:**
> - Deep understanding of how Diffusion Models, GAN, VAE work
> - Proficient in Stable Diffusion, ControlNet, LoRA training
> - Can use DALL-E, Midjourney, Flux APIs for production
> - Create video, audio, 3D content with AI
> - Build a complete AI Creative Platform

## Study path

### Part 1: Generative AI Platform
Understand the nature of generative models — GAN, VAE, and core theory.

### Part 2: Diffusion Models
Deep dive into Diffusion architecture — Stable Diffusion platform, DALL-E.

### Part 3: Advanced Image Generation
ControlNet, LoRA training, Inpainting — complete output control.

### Part 4: Commercial APIs
Integrate DALL-E, Midjourney, Flux into real applications.

### Part 5: Video & Multimodal
Create video, audio, 3D content with AI — the latest trend of 2026.

### Part 6: Production
Build the platform, handle safety/ethics, and deploy to production.
