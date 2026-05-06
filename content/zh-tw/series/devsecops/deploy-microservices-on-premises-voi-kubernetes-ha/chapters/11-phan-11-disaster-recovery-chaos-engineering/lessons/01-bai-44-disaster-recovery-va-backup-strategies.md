---
id: 019e1a00-aa01-7001-c001-k8sha001101
title: 第 44 課：災難復原與備份策略
slug: bai-44-disaster-recovery-va-backup-strategies
description: 針對本地 K8s、Velero 備份/復原、etcd 災難復原、跨站點複製、RPO/RTO 目標和 DR Runbook 自動化的災難復原規劃。
duration_minutes: 180
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai44-disaster-recovery.png
sort_order: 44
section_title: 第 11 部分：災難復原與混沌工程
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3797" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3797)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1092" cy="246" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="1084" cy="58" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="1076" cy="130" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="1068" cy="202" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="274" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="66" x2="1100" y2="146" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="96" x2="1050" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1051.507041555162,195.5 1051.507041555162,236.5 1016,257 980.492958444838,236.5 980.492958444838,195.5 1016,175" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — 第 44 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 44 課：災難復原與災難復原備份</tspan>
      <tspan x="60" dy="42">啟動EGIES</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 11 部分：災難復原與災難復原混沌工程</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_68___
<ul>
<li>✅ 災難復原規劃：RPO、RTO、故障情境</li>
<li>✅ K8s 資源 + PV 的 Velero 備份與還原</li>
<li>✅ etcd 快照備份與還原</li>
<li>✅ 跨站點災難復原策略</li>
<li>✅ 災難復原測試與運作手冊自動化</li>
</ul>

<hr>

<h2 id="phan-1-dr-planning">第 1 部分：災難復原規劃</h2>

___程式碼區塊_0___

<hr>

<h2 id="phan-2-velero">第 2 部分：VELERO 備份與復原__HTMLTAG_86___

___程式碼區塊_1___

___程式碼區塊_2___

___程式碼區塊_3___

<hr>

<h2 id="phan-3-etcd-dr">第 3 部分：ETCD 災難復原</h2>

___程式碼區塊_4___

<hr>

<h2 id="phan-4-cross-site">第 4 部分：跨站點災難復原</h2>

___程式碼區塊_5___

<hr>

<h2 id="phan-5-dr-runbook">第 5 部分：DR 運作手冊</h2>

___程式碼區塊_6___

___程式碼區塊_7___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_100__HTMLTAG_101___RPO/RTO</strong>：在災難發生前定義每個元件的目標</li>
___HTMLTAG_104__HTMLTAG_105___Velero</strong>：K8s 資源 + PV 備份到 S3/Ceph</li>
___HTMLTAG_108__HTMLTAG_109___etcd</strong>：定期快照，經過測試的復原過程</li>
___HTMLTAG_112__HTMLTAG_113___GitOps</strong>：基礎設施即程式碼 = 即時重新部署</li>
___HTMLTAG_116__HTMLTAG_117___跨站點災難復原</strong>：PostgreSQL 流複製 + S3 同步</li>
___HTMLTAG_120__HTMLTAG_121___定期測試</strong>：未經測試的備份不是備份</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習__HTMLTAG_127___<h3 id="bt1">練習 1：Velero DR</h3>
<ul>
<li>使用 S3 後端設定 Velero</li>
<li>為所有命名空間建立計劃備份__HTMLTAG_134___
<li>模擬命名空間刪除→從備份還原</li>
</ul>

<h3 id="bt2">練習 2：災難復原練習</h3>
<ul>
<li>記錄叢集的災難復原操作手冊</li>
<li>執行 etcd 恢復練習__HTMLTAG_144___
<li>測量實際 RTO 與目標</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 45 課：使用 Litmus 進行混沌工程</strong>，我們將主動測試系統彈性。 </p>