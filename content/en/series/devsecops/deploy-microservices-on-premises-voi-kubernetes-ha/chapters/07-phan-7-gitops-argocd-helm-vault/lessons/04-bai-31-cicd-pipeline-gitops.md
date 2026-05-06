---
id: 019e1a00-aa01-7001-c001-k8sha000704
title: 'LESSON 31: CI/CD PIPELINE — BUILD, TEST, DEPLOY WITH GITOPS'
slug: bai-31-cicd-pipeline-build-test-deploy-voi-gitops
description: 'Build complete CI/CD pipeline: GitHub Actions build & test, container image build, vulnerability scanning, GitOps trigger, ArgoCD auto-deploy, and promotion workflow.'
duration_minutes: 180
is_free: true
video_url: null
sort_order: 31
section_title: 'Part 7: GitOps with ArgoCD, Helm & Vault'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Deploy Microservices On-Premises with Kubernetes HA
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4035" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4035)"/>

  <!-- Decorations -->
  <g>
    <circle cx="640" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="720" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="760" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="170" x2="1100" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="200" x2="1050" y2="270" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1041.650635094611,207.5 1041.650635094611,232.5 1020,245 998.349364905389,232.5 998.349364905389,207.5 1020,195" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — Lesson 31</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 31: CI/CD PIPELINE — BUILD, TEST,</tspan>
      <tspan x="60" dy="42">DEPLOY WITH GITOPS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises with Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 7: GitOps with ArgoCD, Helm &amp; Vault</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 LESSON OBJECTIVE__HTMLTAG_68___
<ul>
<li>✅ Design CI/CD pipeline for microservices + GitOps</li>
<li>✅ GitHub Actions: build, test, lint, scan</li>
<li>✅ Container image build with multi-stage Dockerfile__HTMLTAG_75___
<li>✅ Image vulnerability scanning (Trivy)</li>
<li>✅ GitOps trigger: auto-update image tag in Git</li>
<li>✅ Environment promotion workflow (dev → staging → prod)</li>
</ul>

<hr>

<h2 id="phan-1-pipeline-design">PART 1: CI/CD + GITOPS PIPELINE DESIGN</h2>

<pre><code>
Complete CI/CD + GitOps Pipeline:

┌──────────────────────────────────────────────────────────┐
│                    CI PIPELINE (GitHub Actions)           │
│                                                           │
│  Developer ──► Git Push ──► Build ──► Test ──► Scan      │
│                                                  │        │
│                                            ┌─────▼─────┐ │
│                                            │ Build &    │ │
│                                            │ Push Image │ │
│                                            └─────┬─────┘ │
└──────────────────────────────────────────────────┼────────┘
                                                   │
                                          ┌────────▼────────┐
                                          │ Update image    │
                                          │ tag in GitOps   │
                                          │ repo (PR/commit)│
                                          └────────┬────────┘
                                                   │
┌──────────────────────────────────────────────────┼────────┐
│                    CD PIPELINE (ArgoCD)           │        │
│                                                  ▼        │
│  GitOps Repo ◄── ArgoCD watches ──► K8s Cluster          │
│  (manifests)     (auto-sync)        (deploy)              │
└───────────────────────────────────────────────────────────┘

Two Repositories:
1. App Repo: source code, Dockerfile, CI pipeline
2. GitOps Repo: K8s manifests, Helm values, ArgoCD config
</code></pre>

<hr>

<h2 id="phan-2-dockerfile">PART 2: MULTI-STAGE DOCKERFILE</h2>

<pre><code class="language-dockerfile"># Dockerfile (Go microservice example):

# Stage 1: Build
FROM golang:1.22-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o /app/server ./cmd/server

# Stage 2: Runtime
FROM gcr.io/distroless/static-debian12:nonroot
COPY --from=builder /app/server /server
COPY --from=builder /app/configs /configs

USER nonroot:nonroot
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s CMD ["/server", "healthcheck"]
ENTRYPOINT ["/server"]
</code></pre>

<pre><code class="language-dockerfile"># Dockerfile (Node.js microservice):

# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Stage 2: Runtime
FROM node:20-alpine
RUN addgroup -g 1001 -S nodejs && adduser -S appuser -u 1001
WORKDIR /app
COPY --from=builder --chown=appuser:nodejs /app/dist ./dist
COPY --from=builder --chown=appuser:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=appuser:nodejs /app/package.json ./

USER appuser
EXPOSE 8080
CMD ["node", "dist/index.js"]
</code></pre>

<hr>

<h2 id="phan-3-github-actions">PART 3: GITHUB ACTIONS CI PIPELINE</h2>

<pre><code class="language-yaml"># .github/workflows/ci.yaml:
name: CI Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  REGISTRY: registry.myapp.com
  IMAGE: order-service

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Go
        uses: actions/setup-go@v5
        with:
          go-version: '1.22'

      - name: Run Tests
        run: |
          go test -v -race -coverprofile=coverage.out ./...
          go tool cover -func=coverage.out

      - name: Lint
        uses: golangci/golangci-lint-action@v6
        with:
          version: latest

  build-and-push:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    outputs:
      image-tag: ${{ steps.meta.outputs.version }}
    steps:
      - uses: actions/checkout@v4

      - name: Docker meta
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE }}
          tags: |
            type=sha,prefix=
            type=semver,pattern={{version}}

      - name: Build and Push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

  scan:
    needs: build-and-push
    runs-on: ubuntu-latest
    steps:
      - name: Trivy Scan
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: "${{ env.REGISTRY }}/${{ env.IMAGE }}:${{ needs.build-and-push.outputs.image-tag }}"
          format: 'sarif'
          output: 'trivy-results.sarif'
          severity: 'CRITICAL,HIGH'
          exit-code: '1'

  update-gitops:
    needs: [build-and-push, scan]
    runs-on: ubuntu-latest
    steps:
      - name: Checkout GitOps repo
        uses: actions/checkout@v4
        with:
          repository: myorg/k8s-manifests
          token: ${{ secrets.GITOPS_TOKEN }}
          path: gitops

      - name: Update image tag
        run: |
          cd gitops
          NEW_TAG="${{ needs.build-and-push.outputs.image-tag }}"
          
          # Update Helm values:
          yq eval ".image.tag = \"$NEW_TAG\"" -i \
            apps/order-service/values-staging.yaml
          
          # Commit and push:
          git config user.name "github-actions"
          git config user.email "ci@myapp.com"
          git add .
          git commit -m "chore: update order-service to $NEW_TAG"
          git push
</code></pre>

<hr>

<h2 id="phan-4-promotion">PART 4: ENVIRONMENT PROMOTION</h2>

<pre><code>
Promotion Workflow:

  main branch push
       │
       ▼
  ┌────────────┐
  │ CI: Build  │
  │ Test, Scan │
  └─────┬──────┘
        │ Auto-update staging values
        ▼
  ┌────────────┐     ArgoCD
  │  STAGING   │ ◄── auto-sync
  │  (auto)    │
  └─────┬──────┘
        │ Manual PR: promote to production
        ▼
  ┌────────────┐     ArgoCD
  │ PRODUCTION │ ◄── auto-sync (after PR merge)
  │ (approval) │
  └────────────┘
</code></pre>

<pre><code class="language-yaml"># Promotion PR workflow:
# .github/workflows/promote.yaml:
name: Promote to Production

on:
  workflow_dispatch:
    inputs:
      service:
        description: 'Service to promote'
        required: true
        type: choice
        options:
          - order-service
          - payment-service
          - user-service
      tag:
        description: 'Image tag to promote'
        required: true

jobs:
  promote:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Update production values
        run: |
          yq eval ".image.tag = \"${{ inputs.tag }}\"" -i \
            apps/${{ inputs.service }}/values-production.yaml

      - name: Create PR
        uses: peter-evans/create-pull-request@v6
        with:
          title: "🚀 Promote ${{ inputs.service }} ${{ inputs.tag }} to production"
          body: |
            Promoting **${{ inputs.service }}** version `${{ inputs.tag }}` to production.
            
            ## Checklist
            - [ ] Staging tests passed
            - [ ] Performance acceptable
            - [ ] Rollback plan ready
          branch: "promote/${{ inputs.service }}-${{ inputs.tag }}"
          reviewers: "platform-team"
</code></pre>

<hr>

<h2 id="phan-5-harbor">PART 5: PRIVATE REGISTRY (HARBOR)</h2>

<pre><code class="language-bash"># Install Harbor:
helm repo add harbor https://helm.goharbor.io
helm repo update

helm install harbor harbor/harbor \
  --namespace harbor \
  --create-namespace \
  --set expose.type=ingress \
  --set expose.ingress.hosts.core=registry.myapp.com \
  --set externalURL=https://registry.myapp.com \
  --set persistence.persistentVolumeClaim.registry.storageClass=ceph-block \
  --set persistence.persistentVolumeClaim.registry.size=100Gi \
  --set trivy.enabled=true
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Two repos</strong>: App repo (CI) + GitOps repo (CD) separation</li>
<li><strong>CI pipeline</strong>: Test → Build → Scan → Push image</li>
<li><strong>GitOps trigger</strong>: CI updates image tag in GitOps repo</li>
<li><strong>ArgoCD auto-sync</strong>: Detects tag change → deploys to K8s</li>
<li><strong>Promotion</strong>: Auto to staging, PR-based to production</li>
<li><strong>Harbor</strong>: Private registry with built-in vulnerability scanning</li>
</ol>

<hr><h2 id="bai-tap">🎯 EXERCISES__HTMLTAG_129___

<h3 id="bt1">Exercise 1: Complete Pipeline</h3>
<ul>
<li>Setup GitHub Actions CI for sample Go service</li>
<li>Build + push to Harbor, scan with Trivy</li>
<li>Auto-update GitOps repo, ArgoCD deploys</li>
</ul>

<h3 id="bt2">Exercise 2: Promotion Workflow</h3>
<ul>
<li>Implement staging → production promotion PR</li>
<li>Add required reviewers and checks</li>
<li>Test full cycle: code change → production deploy</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 NEXT POST</h2>
<p>In <strong>Lesson 32: Prometheus Stack — Monitoring Infrastructure</strong>, we will setup observability stack with Prometheus, Grafana, and Alertmanager.</p>