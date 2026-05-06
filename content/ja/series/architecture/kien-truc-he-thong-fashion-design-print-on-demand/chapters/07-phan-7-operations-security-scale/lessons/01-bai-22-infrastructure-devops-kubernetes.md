---
id: 019f0b20-a701-7001-e001-f2b8f9000701
title: 'レッスン 22: インフラストラクチャと DevOps — Kubernetes、CI/CD、マルチリージョン'
slug: bai-22-infrastructure-devops-kubernetes
description: >-
  Fashion POD の運用インフラストラクチャ — Kubernetes クラスター設計、CI/CD
  GitOps、マルチリージョン展開、シークレット管理、IaC、コストの最適化。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 22
section_title: 'パート 7: 運用、セキュリティ、スケール'
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: ファッション デザインとプリント オン デマンド システム アーキテクチャ — ドメイン分析から生産まで
  slug: kien-truc-he-thong-fashion-design-print-on-demand
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🏗️ アーキテクチャ — レッスン 22</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 22: インフラストラクチャと DevOps —</tspan>
      <tspan x="60" dy="42">Kubernetes、CI/CD、マルチリージョン</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">ファッション デザインとプリント オン デマンド システム アーキテクチャ — ドメイン分析から生産まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 7: 運用、セキュリティ、スケール</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-cluster-design"><strong>1. Kubernetes クラスターの設計</strong></h2>

<pre><code class="language-text">Cluster
  ├─ Node Pool: General apps (API, web)
  ├─ Node Pool: Workers (rendering, queues)
  ├─ Node Pool: GPU (AI inference)
  └─ Node Pool: Data plane add-ons
</code></pre>

<ul>
<li>ドメインで区切られた名前空間: `core`、 `ai`、 `ops`、 `data`</li>
<li>CPU/RAM/キュー深度に応じた HPA</li>
<li>PodDisruption重要なサービスの予算</li>
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

<h2 id="3-secrets-iac"><strong>3. 秘密と IaC</strong></h2>

<ul>
<li>シークレット: Vault/外部シークレット オペレーター</li>
<li>IaC: ネットワーク、クラスター、DB、CDN 用の Terraform モジュール</li>
<li>コードとしてのポリシー: OPA/ゲートキーパー</li>
</ul>

<h2 id="4-multi-region"><strong>4. マルチリージョン展開</strong></h2>

<table>
<thead>
<tr><th>地域</th><th>役割</th></tr>
</thead>
<tbody>
<tr><td>米国</td><td>プライマリトラフィック + AI 推論</td></tr>
<tr><td>EU</td><td>データ常駐 + 低遅延 EU</td></tr>
<tr><td>アジア太平洋</td><td>地域の店舗 + 非同期ワーカー</td></tr>
</tbody>
</table>

<pre><code class="language-text">Routing: Geo DNS + health checks
Data: primary region + read replicas + async replication
Failover: RTO < 30 min, RPO < 5 min
</code></pre>

<h2 id="5-cost-optimization"><strong>5. コストの最適化</strong></h2>

<ul>
<li>バッチ ワーカーのスポット インスタンス</li>
<li>断続的なジョブによるゼロへのスケールアップ</li>
<li>安定したワークロードのための予約容量</li>
<li>画像の最適化 + CDN オフロードによる下り送信の削減</li>
</ul>

<h2 id="6-tong-ket"><strong>6. まとめ</strong></h2>

<ul>
<li><p><strong>階層型クラスター</strong> パフォーマンスとコストの最適化に役立ちます</p></li>
<li><p><strong>GitOps</strong> 制御とロールバック能力の向上</p></li>
<li><p><strong>マルチリージョン</strong> グローバルに展開する場合は重要な要件です</p></li>
<li><p><strong>コストの最適化</strong> 最初から設計する必要がある</p></li>
</ul>
