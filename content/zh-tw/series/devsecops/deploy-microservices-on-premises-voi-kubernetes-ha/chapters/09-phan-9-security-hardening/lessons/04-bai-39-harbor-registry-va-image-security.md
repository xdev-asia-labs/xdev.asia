---
id: 019e1a00-aa01-7001-c001-k8sha000904
title: 第 39 課：港口登記與影像安全
slug: bai-39-harbor-registry-va-image-security
description: 部署 Harbor 私有註冊表、Trivy 漏洞掃描、聯合簽章鏡像簽章、複製原則和容器鏡像供應鏈安全。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 39
section_title: 第 9 部分：安全強化
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — 第 39 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 39 課：港口登記處與港口登記處影像安全</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 9 部分：安全強化</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_66___
<ul>
<li>✅ Harbor 架構與組件</li>
<li>✅ 在 K8s 上部署 Harbor HA</li>
<li>✅ 自動進行瑣碎漏洞掃描</li>
<li>✅ 影像簽章與驗證（共同簽章 + 符號）</li>
<li>✅ 複製策略（多站點）</li>
<li>✅ 供應鏈安全最佳實務</li>
</ul>

<hr>

<h2 id="phan-1-architecture">第 1 部分：港口建築</h2>

___程式碼區塊_0___

<hr>

<h2 id="phan-2-deploy">第 2 部分：部署 HARBOR HA</h2>

___程式碼區塊_1___

___程式碼區塊_2___

<hr>

<h2 id="phan-3-scanning">第 3 部分：漏洞掃描</h2>

___程式碼區塊_3___

___程式碼區塊_4___

<hr>

<h2 id="phan-4-image-signing">第 4 部分：影像簽章</h2>

___程式碼區塊_5___

___程式碼區塊_6___

<hr>

<h2 id="phan-5-replication">第 5 部分：複製與垃圾收集</h2>

___程式碼區塊_7___

<hr>

<h2 id="phan-6-k8s-integration">第 6 部分：KUBERNETES 整合</h2>

___程式碼區塊_8___

___程式碼區塊_9___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_103__HTMLTAG_104___Harbor</strong>：具有掃描、簽章、複製功能的企業容器登錄機碼</li>
___HTMLTAG_107__HTMLTAG_108___Trivy</strong>：推送時自動掃描，阻止關鍵漏洞</li>
___HTMLTAG_111__HTMLTAG_112___Cosign</strong>：在 CI/CD 中籤署映像，使用 Kyverno 進行驗證</li>
___HTMLTAG_115__HTMLTAG_116___機器人帳號</strong>：最小權限拉取存取</li>
___HTMLTAG_119__HTMLTAG_120___映像摘要</strong>：使用 sha256 摘要進行不可變引用</li>
___HTMLTAG_123__HTMLTAG_124___GC</strong>：定期垃圾回收以回收儲存</li>
</ol>

<hr><h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：港口設定__HTMLTAG_132___
<ul>
<li>部署Harbor，建立專案__HTMLTAG_135___
<li>推送影像，驗證自動掃描__HTMLTAG_137___
<li>為關鍵 CVE 設定阻止策略</li>
</ul>

<h3 id="bt2">練習 2：影像簽章管道__HTMLTAG_142___
<ul>
<li>產生餘弦金鑰</li>
<li>建置 CI 管道：建置 → 掃描 → 簽章 → 推播</li>
<li>設定 Kyverno 以驗證簽章__HTMLTAG_149___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 40 課：金絲雀與藍綠部署</strong>，我們將開始第 10 節 — 部署模式與自動縮放。 </p>