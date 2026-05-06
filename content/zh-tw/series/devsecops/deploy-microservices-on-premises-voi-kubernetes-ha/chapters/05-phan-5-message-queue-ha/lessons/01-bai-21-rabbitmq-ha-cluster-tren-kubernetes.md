---
id: 019e1a00-aa01-7001-c001-k8sha000501
title: 第 21 課：Kubernetes 上的 RABBITMQ HA 集群
slug: bai-21-rabbitmq-ha-cluster-tren-kubernetes
description: 使用 RabbitMQ Cluster Operator、仲裁佇列、TLS、監控和微服務訊息傳遞最佳實踐在 Kubernetes 上部署 RabbitMQ HA 叢集。
duration_minutes: 150
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai21-rabbitmq-ha-cluster.png
sort_order: 21
section_title: 第 5 部分：訊息佇列 HA（RabbitMQ、Kafka、Redis）
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6056" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6056)"/>

  <!-- Decorations -->
  <g>
    <circle cx="737" cy="101" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="874" cy="38" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="1011" cy="235" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="648" cy="172" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="785" cy="109" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="51" x2="1100" y2="131" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="81" x2="1050" y2="151" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1023.5166604983954,188 1023.5166604983954,214 1001,227 978.4833395016046,214 978.4833395016046,188 1001,175" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — 第 21 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 21 課：RABBITMQ HA 叢集位於</tspan>
      <tspan x="60" dy="42">KUBERNETES</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：訊息佇列 HA（RabbitMQ、Kafka、Redis）</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_68___
<ul>
<li>✅ 了解 RabbitMQ 叢集架構和訊息傳遞模式</li>
<li>✅ 使用 Cluster Operator 部署 RabbitMQ 3 節點叢集</li>
<li>✅ 為 HA 設定仲裁佇列</li>
<li>✅ 設定 TLS 加密與驗證</li>
<li>✅ 使用 Prometheus 監控 RabbitMQ 叢集</li>
<li>✅ 最佳實務：訊息持久性、DLQ、流量控制</li>
</ul>

<hr>

<h2 id="phan-1-kien-truc">第 1 部分：RABBITMQ 叢集架構</h2>

<h3 id="11-overview">1.1。消息传递模式</h3>
___程式碼區塊_0___

<h3 id="12-cluster-arch">1.2。 RabbitMQ 集群架构</h3>
___程式碼區塊_1___

> Quorum Queue：Raft 共識 → 多數人複製數據
> 經典佇列：僅在 1 個節點上（鏡像 = 已棄用）<!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_93__HTMLTAG_94___功能___HTMLTAG_95__HTMLTAG_96___經典佇列___HTMLTAG_97__HTMLTAG_98___仲裁佇列___HTMLTAG_99__HTMLTAG_100___流___HTMLTAG_1佇列___HTMLTAG_99__HTMLTAG_100___流___HTMLTAG_101__10G_101__1
</thead>
<tbody>
___HTMLTAG_105__HTMLTAG_106___複製___HTMLTAG_107__HTMLTAG_108___無（鏡像已棄用）___HTMLTAG_109__HTMLTAG_110___基於Raft（大多數）____HTMLTAG_111__HTMLTAG_110___基於Raft（大多數）____HTMLTAG_111__HTMLTAG_1110___
___HTMLTAG_115__HTMLTAG_116___資料安全___HTMLTAG_117__HTMLTAG_118___低___HTMLTAG_119__HTMLTAG_120___高___HTMLTAG_121__HTMLTAG_122______高___HTMLTAG_1HTMLTAG_121__HTMLTAG_122______高___HTMLTAG_123124_____
___HTMLTAG_125__HTMLTAG_126___效能___HTMLTAG_127__HTMLTAG_128___最高___HTMLTAG_129__HTMLTAG_130___良好（稍低）___HTMLTAG_131__HTMLTAG_132_______ML
___HTMLTAG_135__HTMLTAG_136___用例___HTMLTAG_137__HTMLTAG_138___臨時/非關鍵___HTMLTAG_139__HTMLTAG_140___關鍵業務___HTMLTAG_141__HTMLTAG_1422___事件流___MLTAGML____14141____1____422___
___HTMLTAG_145__HTMLTAG_146___排序____HTMLTAG_147__HTMLTAG_148___FIFO___HTMLTAG_149__HTMLTAG_150___FIFO___HTMLTAG_151__HTMLTAG_152___ML_1532___ML
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-install-operator">第 2 部分：安裝 RABBITMQ 叢集運算子</h2>

<h3 id="21-install">2.1。安裝運算子</h3>
___程式碼區塊_2___

<h3 id="22-namespace">2.2。為訊息傳遞建立命名空間</h3>
___程式碼區塊_3___

<hr>

<h2 id="phan-3-deploy-cluster">第 3 部分：部署 RABBITMQ HA 叢集</h2>

<h3 id="31-cluster-crd">3.1。 RabbitmqCluster CRD</h3>
___程式碼區塊_4___

___程式碼區塊_5___

<hr>

<h2 id="phan-4-quorum-queues">第 4 部分：法定人數佇列與策略</h2>

<h3 id="41-create-queues">4.1。建立仲裁隊列</h3>
___程式碼區塊_6___

<h3 id="42-vhost">4.2。虛擬主機和使用者</h3>
___程式碼區塊_7___

<hr>

<h2 id="phan-5-tls">第 5 部分：TLS 加密</h2>

___程式碼區塊_8___

<hr>

<h2 id="phan-6-monitoring">第 6 部分：監控</h2>

___程式碼區塊_9___

___程式碼區塊_10___

<hr>

<h2 id="phan-7-app-integration">第 7 部分：應用程式整合</h2>

___程式碼區塊_11___

___程式碼區塊_12___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_190__HTMLTAG_191___仲裁佇列</strong>：基於 Raft 的複製，一律用於生產</li>
___HTMLTAG_194__HTMLTAG_195___叢集運算子</strong>：K8s 上的宣告式 RabbitMQ，自動叢集</li>
___HTMLTAG_198__HTMLTAG_199___3 節點叢集</strong>：容忍 1 個節點故障（多數 = 2）</li>
___HTMLTAG_202__HTMLTAG_203___死信佇列</strong>：處理有害訊息，重試邏輯</li>
___HTMLTAG_206__HTMLTAG_207___TLS + 虛擬主機</strong>：隔離服務，在傳輸過程中加密</li>
___HTMLTAG_210__HTMLTAG_211___pause_minority</strong>：防止裂腦分區處理</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2><h3 id="bt1">練習 1：RabbitMQ HA 實驗室</h3>
<ul>
<li>部署 3 節點 RabbitMQ 叢集</li>
<li>使用 DLQ 建立仲裁佇列</li>
<li>發布 10,000 則訊息，殺死 1 個節點，驗證沒有訊息遺失</li>
</ul>

<h3 id="bt2">練習 2：監控設定__HTMLTAG_229___
<ul>
<li>設定 PodMonitor</li>
<li>導入 RabbitMQ Grafana 儀表板（ID：10991）</li>
<li>為佇列積壓 > 5000 建立警報</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 22 課：使用 Strimzi Operator 的 Apache Kafka 群集</strong> 中，我們將部署 Kafka 進行高吞吐量事件流處理。 </p>