---
id: 019f0b20-a701-7001-e001-f2b8f9000701
title: 第 22 課：基礎設施和 DevOps — Kubernetes、CI/CD 和多區域
slug: bai-22-infrastructure-devops-kubernetes
description: Fashion POD 的生產基礎設施 — Kubernetes 叢集設計、CI/CD GitOps、多區域部署、機密管理、IaC 和成本最佳化。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 22
section_title: 第 7 部分：營運、安全性和規模
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: 時裝設計與按需印刷系統架構－從領域分析到生產
  slug: kien-truc-he-thong-fashion-design-print-on-demand
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7109" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7109)"/>

  <!-- Decorations -->
  <g>
    <circle cx="918" cy="64" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="736" cy="162" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="1054" cy="260" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="872" cy="98" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="690" cy="196" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="164" x2="1100" y2="244" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="194" x2="1050" y2="264" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="947.7749907475932,94.5 947.7749907475932,133.5 914,153 880.2250092524068,133.5 880.2250092524068,94.50000000000001 914,75" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🏗️ 建築 — 第 22 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 22 課：基礎設施與 DevOps —</tspan>
      <tspan x="60" dy="42">Kubernetes、CI/CD 和多區域</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">時裝設計與按需印刷系統架構－從領域分析到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 7 部分：營運、安全性和規模</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-cluster-design"><strong>1.Kubernetes叢集設計</strong></h2>

<pre><code class="language-text">Cluster
  ├─ Node Pool: General apps (API, web)
  ├─ Node Pool: Workers (rendering, queues)
  ├─ Node Pool: GPU (AI inference)
  └─ Node Pool: Data plane add-ons
</code></pre>

<ul>
<li>域分隔的命名空間： `core`, `ai`, `ops`, `data`</li>
<li>根據 CPU/RAM/佇列深度的 HPA</li>
<li>關鍵服務的 PodDisruptionBudget</li>
</ul>

<h2 id="2-cicd-gitops"><strong>2. CI/CD + GitOps</strong></h2>

<pre><code class="language-text">Git push
  -> CI (test/lint/build/security scan)
  -> Build image + SBOM
  -> Push registry
  -> Update manifest repo
  -> ArgoCD sync to cluster
  -> Progressive rollout (canary)
</code></pre>

<pre><code class="language-typescript">// Example deployment strategy
strategy:
  type: RollingUpdate
  rollingUpdate:
    maxSurge: 25%
    maxUnavailable: 0
</code></pre>

<h2 id="3-secrets-iac"><strong>3. 秘密與 IaC</strong></h2>

<ul>
<li>秘密：保險庫/外部秘密操作員</li>
<li>IaC：用於網路、叢集、DB、CDN 的 Terraform 模組</li>
<li>政策即代碼：OPA/Gatekeeper</li>
</ul>

<h2 id="4-multi-region"><strong>4. 多區域部署</strong></h2>

<table>
<thead>
<tr><th>地區</th><th>角色</th></tr>
</thead>
<tbody>
<tr><td>美國</td><td>原生流量+AI推理</td></tr>
<tr><td>歐盟</td><td>數據駐留+低延遲歐盟</td></tr>
<tr><td>亞太地區</td><td>區域店面 + 非同步工作人員</td></tr>
</tbody>
</table>

<pre><code class="language-text">Routing: Geo DNS + health checks
Data: primary region + read replicas + async replication
Failover: RTO < 30 min, RPO < 5 min
</code></pre>

<h2 id="5-cost-optimization"><strong>5. 成本優化</strong></h2>

<ul>
<li>批次工作人員的 Spot 實例</li>
<li>透過間歇性作業將規模縮小到零</li>
<li>為穩定工作負載預留容量</li>
<li>圖片優化+CDN分流減少出口</li>
</ul>

<h2 id="6-tong-ket"><strong>六、總結</strong></h2>

<ul>
<li><p><strong>層次集群</strong> 有助於優化效能和成本</p></li>
<li><p><strong>Git 操作</strong> 增加控制和回滾能力</p></li>
<li><p><strong>多區域</strong> 是全球擴張時的重要要求</p></li>
<li><p><strong>成本最佳化</strong> 需要從頭開始設計</p></li>
</ul>
