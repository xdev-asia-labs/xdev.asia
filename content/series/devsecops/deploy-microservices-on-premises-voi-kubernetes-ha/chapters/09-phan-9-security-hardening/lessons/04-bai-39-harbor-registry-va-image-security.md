---
id: 019e1a00-aa01-7001-c001-k8sha000904
title: 'BÀI 39: HARBOR REGISTRY & IMAGE SECURITY'
slug: bai-39-harbor-registry-va-image-security
description: >-
  Deploy Harbor private registry, Trivy vulnerability scanning,
  image signing với cosign, replication policies,
  và container image supply chain security.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 39
section_title: 'Phần 9: Security Hardening'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6452" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6452)"/>

  <!-- Decorations -->
  <g>
    <circle cx="653" cy="269" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="706" cy="262" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="759" cy="255" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="812" cy="248" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="865" cy="241" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="219" x2="1100" y2="299" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="249" x2="1050" y2="319" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1048.444863728671,202 1048.444863728671,236 1019,253 989.555136271329,236 989.555136271329,202 1019,185" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — Bài 39</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 39: HARBOR REGISTRY &amp; IMAGE SECURITY</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises với Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 9: Security Hardening</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Harbor architecture và components</li>
<li>✅ Deploy Harbor HA trên K8s</li>
<li>✅ Trivy vulnerability scanning tự động</li>
<li>✅ Image signing và verification (cosign + Notation)</li>
<li>✅ Replication policies (multi-site)</li>
<li>✅ Supply chain security best practices</li>
</ul>

<hr>

<h2 id="phan-1-architecture">PHẦN 1: HARBOR ARCHITECTURE</h2>

<pre><code>
Harbor Components:

┌──────────────────────────────────────────────┐
│                  Harbor                       │
│                                              │
│  ┌────────┐  ┌──────────┐  ┌──────────────┐ │
│  │  Core   │  │  Portal  │  │  Job Service │ │
│  │ (API)   │  │  (Web UI)│  │ (async tasks)│ │
│  └────┬───┘  └──────────┘  └──────────────┘ │
│       │                                      │
│  ┌────▼───┐  ┌──────────┐  ┌──────────────┐ │
│  │Registry│  │  Trivy   │  │  Notary/     │ │
│  │(images)│  │ (scanner)│  │  Cosign      │ │
│  └────┬───┘  └──────────┘  └──────────────┘ │
│       │                                      │
│  ┌────▼────────────────────────────────────┐ │
│  │       Storage Backend                    │ │
│  │  (S3/Ceph RGW/local filesystem)         │ │
│  └─────────────────────────────────────────┘ │
│                                              │
│  ┌──────────┐  ┌──────────┐                  │
│  │PostgreSQL│  │  Redis   │                  │
│  │(metadata)│  │ (cache)  │                  │
│  └──────────┘  └──────────┘                  │
└──────────────────────────────────────────────┘
</code></pre>

<hr>

<h2 id="phan-2-deploy">PHẦN 2: DEPLOY HARBOR HA</h2>

<pre><code class="language-bash"># Install Harbor:
helm repo add harbor https://helm.goharbor.io
helm repo update

helm install harbor harbor/harbor \
  --namespace harbor \
  --create-namespace \
  -f harbor-values.yaml
</code></pre>

<pre><code class="language-yaml"># harbor-values.yaml:
expose:
  type: ingress
  tls:
    enabled: true
    certSource: secret
    secret:
      secretName: harbor-tls
  ingress:
    hosts:
      core: harbor.local
    className: istio
    annotations:
      cert-manager.io/cluster-issuer: letsencrypt-prod

externalURL: https://harbor.local

persistence:
  enabled: true
  resourcePolicy: "keep"
  persistentVolumeClaim:
    registry:
      storageClass: ceph-block
      size: 100Gi
    database:
      storageClass: ceph-block
      size: 10Gi
    redis:
      storageClass: ceph-block
      size: 5Gi
    trivy:
      storageClass: ceph-block
      size: 5Gi

# Use external PostgreSQL (CloudNativePG):
database:
  type: external
  external:
    host: postgresql-rw.database
    port: "5432"
    username: harbor
    password: harbor-password
    sslmode: require

# Use external Redis:
redis:
  type: external
  external:
    addr: redis-master.database:6379
    password: redis-password

# Trivy scanner:
trivy:
  enabled: true
  resources:
    requests:
      cpu: 200m
      memory: 512Mi
    limits:
      cpu: 1
      memory: 1Gi

# HA replicas:
core:
  replicas: 2
portal:
  replicas: 2
registry:
  replicas: 2
jobservice:
  replicas: 2
</code></pre>

<hr>

<h2 id="phan-3-scanning">PHẦN 3: VULNERABILITY SCANNING</h2>

<pre><code class="language-bash"># Configure auto-scan on push:
# Harbor UI → Administration → Configuration → Scanner
# ✅ Automatically scan images on push

# Manual scan via API:
curl -X POST "https://harbor.local/api/v2.0/projects/myproject/repositories/order-service/artifacts/sha256:abc123/scan" \
  -H "Authorization: Basic $(echo -n admin:password | base64)"

# Get scan results:
curl "https://harbor.local/api/v2.0/projects/myproject/repositories/order-service/artifacts/sha256:abc123/additions/vulnerabilities" \
  -H "Authorization: Basic $(echo -n admin:password | base64)"
</code></pre>

<pre><code class="language-yaml"># Block images with critical CVEs (Harbor project policy):
# Harbor UI → Project → Configuration:
# ✅ Prevent vulnerable images from running
# Severity: Critical, High

# Integrate with Kyverno:
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: check-harbor-vulnerability
spec:
  validationFailureAction: Enforce
  rules:
    - name: check-scan-status
      match:
        any:
          - resources:
              kinds: ["Pod"]
      validate:
        message: "Images must be scanned and free of critical vulnerabilities"
        deny:
          conditions:
            any:
              - key: "{{ images.containers.*.registry }}"
                operator: AnyIn
                value: ["harbor.local"]
</code></pre>

<hr>

<h2 id="phan-4-image-signing">PHẦN 4: IMAGE SIGNING</h2>

<pre><code class="language-bash"># Generate cosign key pair:
cosign generate-key-pair

# Sign image after push:
cosign sign --key cosign.key harbor.local/myproject/order-service:v1.0

# Verify signature:
cosign verify --key cosign.pub harbor.local/myproject/order-service:v1.0

# Sign with annotations:
cosign sign --key cosign.key \
  -a "git_sha=$(git rev-parse HEAD)" \
  -a "pipeline=github-actions" \
  -a "signed_by=ci-bot" \
  harbor.local/myproject/order-service:v1.0
</code></pre>

<pre><code class="language-yaml"># CI/CD pipeline with signing:
# .github/workflows/build.yml
jobs:
  build:
    steps:
      - name: Build & Push
        run: |
          docker build -t harbor.local/myproject/order-service:${{ github.sha }} .
          docker push harbor.local/myproject/order-service:${{ github.sha }}

      - name: Sign Image
        run: |
          cosign sign --key env://COSIGN_PRIVATE_KEY \
            harbor.local/myproject/order-service:${{ github.sha }}
        env:
          COSIGN_PRIVATE_KEY: ${{ secrets.COSIGN_PRIVATE_KEY }}
          COSIGN_PASSWORD: ${{ secrets.COSIGN_PASSWORD }}

      - name: Scan Image
        run: |
          trivy image --severity CRITICAL,HIGH \
            --exit-code 1 \
            harbor.local/myproject/order-service:${{ github.sha }}
</code></pre>

<hr>

<h2 id="phan-5-replication">PHẦN 5: REPLICATION & GARBAGE COLLECTION</h2>

<pre><code class="language-yaml"># Replication policy (pull from Docker Hub):
# Harbor UI → Administration → Replications → New Rule:
# Name: dockerhub-proxy
# Direction: Pull-based
# Source: Docker Hub
# Destination: harbor.local/proxy-cache
# Trigger: Event-based (on-demand)

# Garbage collection (remove untagged blobs):
# Harbor UI → Administration → Clean Up → GC
# Schedule: Weekly
# ✅ Delete untagged artifacts

# K8s CronJob for GC:
apiVersion: batch/v1
kind: CronJob
metadata:
  name: harbor-gc
  namespace: harbor
spec:
  schedule: "0 2 * * 0"  # Sunday 2AM
  jobTemplate:
    spec:
      template:
        spec:
          containers:
            - name: gc
              image: curlimages/curl:latest
              command:
                - /bin/sh
                - -c
                - |
                  curl -X POST "https://harbor.local/api/v2.0/system/gc/schedule" \
                    -H "Authorization: Basic $(echo -n admin:password | base64)" \
                    -H "Content-Type: application/json" \
                    -d '{"parameters":{"delete_untagged":true},"schedule":{"type":"Manual"}}'
          restartPolicy: OnFailure
</code></pre>

<hr>

<h2 id="phan-6-k8s-integration">PHẦN 6: KUBERNETES INTEGRATION</h2>

<pre><code class="language-bash"># Create pull secret:
kubectl create secret docker-registry harbor-creds \
  --docker-server=harbor.local \
  --docker-username=robot\$myproject+pull \
  --docker-password="robot-token" \
  -n default

# Use robot account (least privilege):
# Harbor UI → Project → Robot Accounts → New
# Name: pull-only
# Permissions: Pull only
</code></pre>

<pre><code class="language-yaml"># Deployment with Harbor image:
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
spec:
  template:
    spec:
      imagePullSecrets:
        - name: harbor-creds
      containers:
        - name: app
          image: harbor.local/myproject/order-service:v1.0
          # Use digest for immutability:
          # image: harbor.local/myproject/order-service@sha256:abc123...
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Harbor</strong>: Enterprise container registry with scanning, signing, replication</li>
<li><strong>Trivy</strong>: Auto-scan on push, block critical vulnerabilities</li>
<li><strong>Cosign</strong>: Sign images in CI/CD, verify with Kyverno</li>
<li><strong>Robot accounts</strong>: Least privilege pull access</li>
<li><strong>Image digests</strong>: Use sha256 digest for immutable references</li>
<li><strong>GC</strong>: Regular garbage collection to reclaim storage</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Harbor Setup</h3>
<ul>
<li>Deploy Harbor, create project</li>
<li>Push image, verify auto-scan</li>
<li>Configure blocking policy for critical CVEs</li>
</ul>

<h3 id="bt2">Bài tập 2: Image Signing Pipeline</h3>
<ul>
<li>Generate cosign keys</li>
<li>Build CI pipeline: build → scan → sign → push</li>
<li>Configure Kyverno to verify signatures</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 40: Canary & Blue-Green Deployment</strong>, chúng ta sẽ bắt đầu Section 10 — Deployment Patterns & Auto-Scaling.</p>
