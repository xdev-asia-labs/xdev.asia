---
id: kcna-d2-l01
title: 'Lesson 5: Container Runtimes & OCI Standards'
slug: 05-container-runtimes-oci
description: >-
  Docker vs containerd vs CRI-O. OCI Image Spec, OCI Runtime Spec.
  Container lifecycle. Image layers and registries.
duration_minutes: 50
is_free: true
video_url: null
sort_order: 5
section_title: "Domain 2: Container Orchestration (22%)"
course:
  id: lt-kcna-series-001
  title: 'KCNA Exam Prep — Kubernetes and Cloud Native Associate'
  slug: luyen-thi-kcna
---

<img src="/storage/uploads/2026/04/k8s-cert-kcna-bai5-container-runtimes.png" alt="Container Runtimes & OCI Standards — Docker, containerd, CRI-O" style="max-width: 800px; width: 100%; border-radius: 12px;" />

<h2 id="oci">1. OCI — Open Container Initiative</h2>

<p><strong>OCI</strong> is an open standard for containers, consisting of 3 specs:</p>

<table>
<thead><tr><th>Spec</th><th>Defines</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Image Spec</strong></td><td>Container image format (layers, manifest, config)</td><td>Docker image → OCI image</td></tr>
<tr><td><strong>Runtime Spec</strong></td><td>How to run a container (filesystem, process, resources)</td><td>runc, crun, kata-containers</td></tr>
<tr><td><strong>Distribution Spec</strong></td><td>How to push/pull images to registries</td><td>Docker Hub, Harbor, ECR</td></tr>
</tbody>
</table>

<blockquote><p><strong>Exam tip:</strong> OCI ensures interoperability — an image built with Docker can run on containerd, CRI-O, or any OCI-compliant runtime. KCNA often asks: "What ensures container portability?"</p></blockquote>

<h2 id="cri">2. CRI — Container Runtime Interface</h2>

<p><strong>CRI</strong> is Kubernetes' standard interface for container runtimes. kubelet communicates with runtimes through this gRPC API.</p>

<pre><code class="language-text">Before CRI:                        After CRI:
  kubelet ──► Docker (hardcoded)    kubelet ──► CRI gRPC API ──► containerd
                                                              ──► CRI-O
                                                              ──► any CRI runtime</code></pre>

<h2 id="runtimes">3. Container Runtimes Compared</h2>

<table>
<thead><tr><th>Runtime</th><th>Type</th><th>Note</th></tr></thead>
<tbody>
<tr><td><strong>Docker</strong></td><td>Deprecated (from K8s 1.24)</td><td>Used to go through dockershim → containerd. Direct CRI support removed</td></tr>
<tr><td><strong>containerd</strong></td><td>High-level CRI runtime</td><td>Default for most K8s distros (GKE, EKS, AKS). CNCF Graduated</td></tr>
<tr><td><strong>CRI-O</strong></td><td>High-level CRI runtime</td><td>Made for Kubernetes only (no docker CLI). Default for OpenShift</td></tr>
<tr><td><strong>runc</strong></td><td>Low-level OCI runtime</td><td>Actually runs the container process. Used by both containerd and CRI-O</td></tr>
<tr><td><strong>kata-containers</strong></td><td>Low-level OCI runtime</td><td>Runs containers in lightweight VMs for extra isolation</td></tr>
</tbody>
</table>

<pre><code class="language-text">Runtime Hierarchy:
  kubelet → CRI → containerd (high-level) → runc (low-level) → container process
  kubelet → CRI → CRI-O     (high-level) → runc (low-level) → container process</code></pre>

<blockquote><p><strong>Exam tip:</strong> "Docker is deprecated from K8s" doesn't mean Docker images won't work. Docker images = OCI images — they run fine on containerd/CRI-O. What was removed is the dockershim (the bridge between kubelet and Docker daemon).</p></blockquote>

<h2 id="image-layers">4. Container Image Layers</h2>

<pre><code class="language-text">Dockerfile → Image layers:
  FROM node:18       ← Base layer (read-only)
  COPY app/ .        ← Layer 2 (read-only)
  RUN npm install    ← Layer 3 (read-only)
  CMD ["node","app"] ← Metadata (entrypoint)

  Running container adds a thin writable layer on top
  ┌─────────────────────┐
  │  Writable layer     │ ← container writes (ephemeral)
  ├─────────────────────┤
  │  Layer 3: npm deps  │ ← read-only
  │  Layer 2: app code  │ ← read-only
  │  Layer 1: node:18   │ ← read-only (shared across containers)
  └─────────────────────┘</code></pre>

<h2 id="registry">5. Container Registry</h2>

<table>
<thead><tr><th>Registry</th><th>Type</th><th>Note</th></tr></thead>
<tbody>
<tr><td><strong>Docker Hub</strong></td><td>Public</td><td>Default registry, rate limits for free tier</td></tr>
<tr><td><strong>Harbor</strong></td><td>Private (self-hosted)</td><td>CNCF Graduated, security scanning integrated</td></tr>
<tr><td><strong>ECR / GCR / ACR</strong></td><td>Cloud-managed</td><td>AWS/GCP/Azure private registries</td></tr>
<tr><td><strong>ghcr.io</strong></td><td>GitHub</td><td>GitHub Container Registry</td></tr>
</tbody>
</table>

<h2 id="cheatsheet">6. Cheat Sheet</h2>

<table>
<thead><tr><th>Exam question</th><th>Answer</th></tr></thead>
<tbody>
<tr><td>Kubernetes standard API for container runtimes?</td><td><strong>CRI (Container Runtime Interface)</strong></td></tr>
<tr><td>Default runtime for most K8s distros?</td><td><strong>containerd</strong></td></tr>
<tr><td>Low-level runtime that actually starts containers?</td><td><strong>runc</strong></td></tr>
<tr><td>What ensures container image portability?</td><td><strong>OCI standards</strong></td></tr>
<tr><td>Docker deprecated means Docker images don't work?</td><td>No — Docker images follow OCI spec and work on any CRI runtime</td></tr>
</tbody>
</table>

<h2 id="practice">7. Practice Questions</h2>

<p><strong>Q1:</strong> Since Docker was deprecated as a Kubernetes container runtime (v1.24+), what happens to existing Docker images?</p>
<ul>
<li>A) They can no longer run on Kubernetes</li>
<li>B) They continue to work because Docker images comply with OCI standards ✓</li>
<li>C) They need to be converted to a new format</li>
<li>D) Only official Docker images from Docker Hub still work</li>
</ul>
<p><em>Explanation: Docker images follow the OCI Image Specification, the same standard used by containerd and CRI-O. What was removed was the dockershim component (the bridge between kubelet and Docker daemon), not support for OCI images.</em></p>

<p><strong>Q2:</strong> Which component in the container runtime stack is responsible for actually creating the container process at the OS level?</p>
<ul>
<li>A) containerd</li>
<li>B) CRI-O</li>
<li>C) runc ✓</li>
<li>D) kubelet</li>
</ul>
<p><em>Explanation: runc is the low-level OCI runtime that uses Linux kernel features (namespaces, cgroups) to create isolated container processes. containerd and CRI-O are high-level runtimes that manage container lifecycle and delegate the actual process creation to runc.</em></p>

<p><strong>Q3:</strong> What is the role of the Container Runtime Interface (CRI) in Kubernetes?</p>
<ul>
<li>A) A container image format standard</li>
<li>B) A gRPC API that allows kubelet to communicate with any container runtime ✓</li>
<li>C) A tool for building container images</li>
<li>D) A security standard for container isolation</li>
</ul>
<p><em>Explanation: CRI is a standardized gRPC API that decouples kubelet from specific container runtimes. Any runtime implementing the CRI interface (containerd, CRI-O) can be used with Kubernetes — enabling runtime flexibility.</em></p>
