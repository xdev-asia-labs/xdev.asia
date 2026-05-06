---
id: 019e1a00-aa01-7001-c001-k8sha000601
title: 第 24 課：istio 服務網格架構
slug: bai-24-kien-truc-istio-service-mesh
description: 了解 Istio 服務網格架構：資料平面（Envoy sidecar）、控制平面（istiod）、流量管理、安全性（mTLS）、可觀察性，並與 Linkerd 進行比較。
duration_minutes: 150
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai24-istio-service-mesh.png
sort_order: 24
section_title: 第 6 部分：Istio 的服務網格和 Ingress
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6058" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6058)"/>

  <!-- Decorations -->
  <g>
    <circle cx="857" cy="281" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="614" cy="278" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="871" cy="275" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="628" cy="272" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="885" cy="269" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="111" x2="1100" y2="191" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="141" x2="1050" y2="211" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="983.5166604983954,148 983.5166604983954,174 961,187 938.4833395016046,174 938.4833395016046,148 961,135" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — 第 24 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 24: ISTIO SERVICE MESH ARCHITECTURE</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：服務網格和服務網格使用 Istio 進入</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_66___
<ul>
<li>✅ Understand what a service mesh is and why it is needed</li>
<li>✅ Istio Architecture: Control Plane + Data Plane</li>
<li>✅ Envoy sidecar proxy — how it works</li>
<li>✅ Core features: traffic management, security, observability</li>
<li>✅ Compare Istio vs Linkerd vs Cilium Service Mesh</li>
<li>✅ Install Istio on K8s cluster</li>
</ul>

<hr>

<h2 id="phan-1-service-mesh">PART 1: WHAT IS SERVICE MESH?</h2>

___程式碼區塊_0___

<h3 id="11-why-mesh">1.1。什麼時候需要服務網格？ </h3>
<ul>
<li>✅ > 10 microservices communicating</li>
<li>✅ Need mTLS (zero-trust network)</li>
<li>✅ Complex traffic routing (canary, A/B)</li>
<li>✅ Distributed tracing & observability</li>
<li>✅ Rate limiting, circuit breaking consistent</li>
<li>❌ Overhead not required for monolith or < 5 services</li>
</ul>

<hr>

<h2 id="phan-2-kien-truc-istio">PART 2: ISTIO ARCHITECTURE</h2>

___程式碼區塊_1___<!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_106__HTMLTAG_107___元件___HTMLTAG_108__HTMLTAG_109___角色___HTMLTAG_110__HTMLTAG_111___詳細資料___HTMLTAG_112__HTMLTAG_113___
</thead>
<tbody>
___HTMLTAG_116__HTMLTAG_117___istiod___HTMLTAG_118__HTMLTAG_119___控制平面___HTMLTAG_120__HTMLTAG_121___單一二進位：Pilot + Citadel + Galley____HTMLTAG_122HTMLTAG_122HT
___HTMLTAG_124__HTMLTAG_125___Envoy___HTMLTAG_126__HTMLTAG_127___Sidecar 代理___HTMLTAG_128__HTMLTAG_129___L4/L7 代理，注入每個 Pod____HTMLTAG_130HTMLTAG_131___
___HTMLTAG_132__HTMLTAG_133___Pilot___HTMLTAG_134__HTMLTAG_135___流量管理___HTMLTAG_136__HTMLTAG_137___轉換路由規則 → Envoy xDS 設定___HTMLTAG_138__HTMLTAG_139___
___HTMLTAG_140__HTMLTAG_141___Citadel____HTMLTAG_142__HTMLTAG_143___安全性___HTMLTAG_144__HTMLTAG_145___憑證授權單位，mTLS 憑證輪替____HTMLTAG_146__7UMLG_146__141G_146__1
___HTMLTAG_148__HTMLTAG_149___Galley____HTMLTAG_150__HTMLTAG_151___設定___HTMLTAG_152__HTMLTAG_153___驗證與分發 Istio 設定___HTMLTAG_154__HTMLTAG_155___
</tbody>
</table>
<!--kg-card-end: html-->

<!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_162__HTMLTAG_163___功能___HTMLTAG_164__HTMLTAG_165___Istio___HTMLTAG_166__HTMLTAG_167___Linkerd___HTMLTAG_168__HTMLTAG_169ML___Cilium ___HT
</thead>
<tbody>
___HTMLTAG_174__HTMLTAG_175___代理___HTMLTAG_176__HTMLTAG_177___Envoy (C++)___HTMLTAG_178__HTMLTAG_179___linkerd2-proxy (Rust)___HTMLTAG_180__HTMLTAG_181___eBPF（核心）___HTMLTAG_182__HTMLTAG_183___
___HTMLTAG_184__HTMLTAG_185___資源使用情況___HTMLTAG_186__HTMLTAG_187___中高___HTMLTAG_188__HTMLTAG_189___低___HTMLTAG_190__HTMLTAG_191___最低___MLTAG____HTMLTAG_190__HTMLTAG_191___最低___MLTAG_191913______________
___HTMLTAG_194__HTMLTAG_195___功能____HTMLTAG_196__HTMLTAG_197___最完整___HTMLTAG_198__HTMLTAG_199___基本功能____HTMLTAG_200__HTMLTAG_201___不斷增長____HTMLTAGMLTA___200__HT____201___不斷增長____ML
___HTMLTAG_204__HTMLTAG_205___學習曲線___HTMLTAG_206__HTMLTAG_207___陡峭___HTMLTAG_208__HTMLTAG_209___中___HTMLTAG_210__HTMLTAG_211___低-中等___MLTAG_MLTAG_210__HTMLTAG_211___低-中___MLTAG_2G1212121___-12___
___HTMLTAG_214__HTMLTAG_215___mTLS___HTMLTAG_216__HTMLTAG_217___是（自動）___HTMLTAG_218__HTMLTAG_219___是（自動）___HTMLTAG_220__HTMLTAG_221___（Wire___是（自動）___HTMLTAG_220__HTMLTAG_221___（Wire_UML2G12）_____2123____MLTAG_221___（Wire23112）_____2123____MLTAG_221___（Wire23112）___12____MLTAG_221___（Wire23112）___MLTAG_221___（Wire2312）___ML
___HTMLTAG_224__HTMLTAG_225___流量管理___HTMLTAG_226__HTMLTAG_227___進階___HTMLTAG_228__HTMLTAG_229___基本___HTMLTAG_230__HTMLTAG_231______HTHTMLTAG_23___23_____
___HTMLTAG_234__HTMLTAG_235___多集群___HTMLTAG_236__HTMLTAG_237___是___HTMLTAG_238__HTMLTAG_239___是___HTMLTAG_240__HTMLTAG_241______HTHTMLTAG_242___23_____
___HTMLTAG_244__HTMLTAG_245___WASM 擴充___HTMLTAG_246__HTMLTAG_247___是___HTMLTAG_248__HTMLTAG_249___否___HTMLTAG_250__HTMLTAG_251_____
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-3-install-istio">PART 3: ISTIO SETUP</h2>

<h3 id="31-istioctl">3.1。安裝 istioctl</h3>
___程式碼區塊_2___<h3 id="32-install-profile">3.2。安裝 Istio（生產設定檔）</h3>
___程式碼區塊_3___

___程式碼區塊_4___

<hr>

<h2 id="phan-4-mtls">第 4 部分：mTLS（相互 TLS）</h2>

___程式碼區塊_5___

___程式碼區塊_6___

<hr>

<h2 id="phan-5-sidecar-injection">第 5 部分：SIDECAR 注入</h2>

___程式碼區塊_7___

<hr>

<h2 id="phan-6-addons">第 6 部分：可觀察性附加元件</h2>

___程式碼區塊_8___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_277__HTMLTAG_278___服務網格</strong>：服務到服務通訊的基礎設施層</li>
___HTMLTAG_281__HTMLTAG_282___Istio</strong>：功能最豐富的網格，Envoy sidecar 代理</li>
___HTMLTAG_285__HTMLTAG_286___istiod</strong>：單控制平面二進位檔案（Pilot + Citadel + Galley）</li>
___HTMLTAG_289__HTMLTAG_290___mTLS STRICT</strong>：零信任，所有流量自動加密</li>
___HTMLTAG_293__HTMLTAG_294___Sidecar注入</strong>：標籤命名空間，自動注入Envoy</li>
___HTMLTAG_297__HTMLTAG_298___Kiali</strong>：可視化服務拓撲，對於理解網格至關重要</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：安裝 Istio__HTMLTAG_306___
<ul>
<li>使用生產設定檔安裝 Istio</li>
<li>在預設命名空間上啟用 sidecar 注入__HTMLTAG_311___
<li>部署範例 Bookinfo 應用程式</li>
<li>驗證服務之間的 mTLS</li>
</ul>

<h3 id="bt2">練習 2：Kiali 和 Jaeger</h3>
<ul>
<li>安裝 Kiali，探索服務圖</li>
<li>產生流量，在 Jaeger 中查看追蹤__HTMLTAG_323___
<li>辨識請求鏈中最慢的服務</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 25 課：Istio 流量管理 — VirtualService、DestinationRule</strong> 中，我們將設定流量路由、金絲雀部署和熔斷。 </p>