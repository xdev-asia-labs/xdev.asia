---
id: 019e1a00-aa01-7001-c001-k8sha000502
title: 第 22 課：使用 Strimzi 操作符的 APACHE KAFKA 集群
slug: bai-22-apache-kafka-cluster-voi-strimzi-operator
description: 使用 Strimzi Operator、KRaft 模式（無 Zookeeper）、主題管理、消費者群組、模式註冊表和監控在 Kubernetes 上部署 Apache Kafka HA 叢集。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 22
section_title: 第 5 部分：訊息佇列 HA（RabbitMQ、Kafka、Redis）
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3046" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3046)"/>

  <!-- Decorations -->
  <g>
    <circle cx="913" cy="129" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="726" cy="162" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1039" cy="195" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="852" cy="228" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="665" cy="261" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="99" x2="1100" y2="179" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="129" x2="1050" y2="199" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="978.444863728671,132 978.444863728671,166 949,183 919.555136271329,166 919.555136271329,132 949,115" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — 第 22 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 22 課：使用 STRIMZI 的 APACHE KAFKA 群集</tspan>
      <tspan x="60" dy="42">操作員</tspan>
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
<li>✅ 了解 Kafka 架構：代理、主題、分區、消費者群組</li>
<li>✅ 使用 Strimzi 部署 Kafka 3 節點叢集（KRaft 模式）</li>
<li>✅ 設定主題、複製、保留</li>
<li>✅ 部署架構登錄檔以實現架構演進</li>
<li>✅ 使用 JMX 指標 + Prometheus 監控 Kafka 群集</li>
<li>✅ 最佳實踐：分區策略、消費者滯後、恰好一次</li>
</ul>

<hr>

<h2 id="phan-1-kien-truc">第 1 部分：APACHE KAFKA 架構</h2>

___程式碼區塊_0___<!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_89__HTMLTAG_90___功能___HTMLTAG_91__HTMLTAG_92___Kafka___HTMLTAG_93__HTMLTAG_94___RabbitMQ___HTMLTAG_95__HTMLTAG_96___
</thead>
<tbody>
___HTMLTAG_99__HTMLTAG_100___吞吐量___HTMLTAG_101__HTMLTAG_102___數百萬個訊息/秒___HTMLTAG_103__HTMLTAG_104___數萬___HTMLTAG_105__HTMLTAG_106___
___HTMLTAG_107__HTMLTAG_108___訊息模型___HTMLTAG_109__HTMLTAG_110___拉動（消費者民意調查）___HTMLTAG_111__HTMLTAG_112___推（經紀人交付）___HTMLTAG_113__HTMLTAG_114___
___HTMLTAG_115__HTMLTAG_116___排序____HTMLTAG_117__HTMLTAG_118___每個分區___HTMLTAG_119__HTMLTAG_120___每個佇列 (FIFO)___HTMLTAG_121__HTMLTAG_122___
___HTMLTAG_123__HTMLTAG_124___保留___HTMLTAG_125__HTMLTAG_126___基於時間/大小（天/週）___HTMLTAG_127__HTMLTAG_128___直到消耗___HTMLTAG_129__HTMLTAG_130___
___HTMLTAG_131__HTMLTAG_132___重播___HTMLTAG_133__HTMLTAG_134___是（偏移搜尋）___HTMLTAG_135__HTMLTAG_136___否（確認後刪除訊息）___HTMLTAG_137__HTMLTAG_138___
___HTMLTAG_139__HTMLTAG_140___用例___HTMLTAG_141__HTMLTAG_142___事件流、CDC、日誌___HTMLTAG_143__HTMLTAG_144___任務佇列、RPC、路由___HTMLTAG_145__HTMLTAG_146___任務佇列、RPC、路由___HTMLTAG_145__HTMLTAG_146___
___HTMLTAG_147__HTMLTAG_148___協定____HTMLTAG_149__HTMLTAG_150___Kafka二進位協定____HTMLTAG_151__HTMLTAG_152___AMQP 0.9.1___HTMLTAG_15314MLTAG_15314ML
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-install-strimzi">第 2 部分：安裝 STRIMZI 運算子</h2>

___程式碼區塊_1___

<hr>

<h2 id="phan-3-deploy-kafka">第 3 部分：部署 KAFKA 叢集（KRaft 模式）</h2>

<h3 id="31-kafka-crd">3.1。卡夫卡 CRD</h3>
___程式碼區塊_2___

<h3 id="32-jmx-config">3.2。 JMX 指標設定映射</h3>
___程式碼區塊_3___

___程式碼區塊_4___

<hr>

<h2 id="phan-4-topics">第 4 部分：主題管理</h2>

<h3 id="41-kafka-topic">4.1。 Kafka主題 CRD</h3>
___程式碼區塊_5___

___程式碼區塊_6___

<hr>

<h2 id="phan-5-users">第 5 部分：KAFKA 使用者和 ACL</h2>

___程式碼區塊_7___

<hr>

<h2 id="phan-6-produce-consume">第 6 部分：生產與消費測試</h2>

___程式碼區塊_8___

<hr>

<h2 id="phan-7-schema-registry">第 7 部分：架構註冊表</h2>

___程式碼區塊_9___

<hr>

<h2 id="phan-8-monitoring">第 8 部分：監控 KAFKA</h2>

___程式碼區塊_10___

___程式碼區塊_11___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_189__HTMLTAG_190___Strimzi Operator</strong>：在 K8s 上運行 Kafka 的最佳方式，全生命週期管理</li>
___HTMLTAG_193__HTMLTAG_194___KRaft模式</strong>：無ZooKeeper依賴，更簡單的架構</li>
___HTMLTAG_197__HTMLTAG_198___複製因子 3，min.insync.replicas 2</strong>：容忍 1 個代理故障</li>
___HTMLTAG_201__HTMLTAG_202___分區策略</strong>：基於鍵的排序分區，分區增加吞吐量</li>
___HTMLTAG_205__HTMLTAG_206___消費者群體</strong>：並行處理，嚴密監控滯後</li>
___HTMLTAG_209__HTMLTAG_210___架構註冊表</strong>：強制架構演變，防止重大變更</li>
</ol>

<hr><h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：Kafka HA 實驗室</h3>
<ul>
<li>使用 KRaft 部署 3 節點 Kafka 叢集</li>
<li>建立具有 6 個分區的主題，RF=3</li>
<li>產生 100,000 則訊息，殺死 1 個經紀人</li>
<li>驗證沒有資料遺失，消費者趕上__HTMLTAG_227___
</ul>

<h3 id="bt2">練習 2：效能基準</h3>
<ul>
<li>以不同的批次大小執行 kafka- Producer-perf-test.sh</li>
<li>測量吞吐量：訊息/秒、MB/秒</li>
<li>比較壓縮：無、lz4、snappy、zstd</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第23課：Redis HA — 哨兵和叢集模式</strong>中，我們將部署Redis用於快取和即時資料。 </p>