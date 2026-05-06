---
id: 019c9618-0103-7000-8000-c1147ba22e11
title: 第 12 課：狀態集
slug: bai-12-statefulsets
description: 用於有狀態應用程式的 StatefulSet：資料庫、訊息代理程式、分散式系統。穩定的網路身分、有序的部署/擴展、每個 Pod 的持久儲存。 PostgreSQL、Kafka、Redis 叢集的用例。
duration_minutes: 85
is_free: false
video_url: null
sort_order: 12
section_title: 模組 3：配置和存儲
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1531" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1531)"/>

  <!-- Decorations -->
  <g>
    <circle cx="702" cy="196" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="804" cy="78" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="906" cy="220" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="1008" cy="102" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="610" cy="244" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="96" x2="1100" y2="176" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="126" x2="1050" y2="196" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="972.8467875173176,130.5 972.8467875173176,161.5 946,177 919.1532124826824,161.5 919.1532124826824,130.5 946,115" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — 第 12 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 12 課：狀態集</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 3：設定與儲存</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>StatefulSets：在 Kubernetes 上執行有狀態應用程式</h2>

<p>Deployment 是無狀態應用程式的預設工作負載控制器 - 您可以自由地向上/向下擴展，因為每個 Pod 都是相同且可互換的。但對於資料庫、訊息代理和分散式系統，每個實例都需要自己的 <em>identity</em>、自己的 <em>storage</em> 以及有意義的啟動/關閉順序。這就是 StatefulSet 存在的原因。 </p>

<h2>StatefulSet 與部署__HTMLTAG_74___

<h3>何時使用部署？ </h3>

<ul>
  <li>無狀態應用程式：Web 伺服器、API 服務、微服務</li>
  <li>所有 Pod 都可以處理任何請求__HTMLTAG_81___
  <li>不需要為每個 Pod 單獨的持久儲存</li>
  <li>Pod 可以隨機更換，不影響操作</li>
</ul>

<h3>何時使用 StatefulSet？ </h3>

<ul>
  <li>應用程式需要穩定的網路身分（Pod名稱不變）</li>
  <li>每個 Pod 都需要自己的持久性儲存（主、副本 1、副本 2）</li>
  <li>部署、擴充和刪除的重要順序__HTMLTAG_95___
  <li>基於可預測 DNS 名稱的對等發現</li>
  <li>用例：PostgreSQL、MySQL 叢集、Redis 叢集、Kafka、Zookeeper、Elasticsearch</li>
</ul>

<h3>視覺比較</h3>

___程式碼區塊_0___

<h2>StatefulSet 保證</h2>

<h3>穩定 Pod 標識</h3><p>StatefulSet 中的每個 Pod 均根據模式 <code>{statefulset-name}-{ordinal}</code> 命名。序數從 0 開始並逐漸增加。即使 Pod 被删除并重新创建，它仍然会收到相同的标识（<code>postgres-1</code> 始终为 <code>postgres-1</code>）.</p>

<h3>透過無頭服務實現穩定的網路身分</h3>

<p>StatefulSet 需要 Headless Service（ClusterIP：無）為每個 Pod 建立 DNS 項目。使用 Headless Service，DNS 不會指向叢集 IP，而是直接指向 Pod IP。 </p>

___程式碼區塊_1___

<p>使用無頭服務，DNS 記錄依照下列模式建立：</p>
<ul>
  ___HTMLTAG_122__HTMLTAG_123___postgres-0.postgres.product.svc.cluster.local___HTMLTAG_124__HTMLTAG_125___
  ___HTMLTAG_126__HTMLTAG_127___postgres-1.postgres.product.svc.cluster.local___HTMLTAG_128__HTMLTAG_129___
  ___HTMLTAG_130__HTMLTAG_131___postgres-2.postgres.product.svc.cluster.local___HTMLTAG_132__HTMLTAG_133___
</ul>

<p>這允許 Pod 確定性地找到彼此 — 無需複雜的服務發現。 </p>

<h2>StatefulSet：PostgreSQL 範例</h2>

___程式碼區塊_2___

___程式碼區塊_3___

<h2>StatefulSet：Redis 叢集範例</h2>

___程式碼區塊_4___

___程式碼區塊_5___

<h2>StatefulSet：帶有 Strimzi 運算子的 Kafka</h2>

<h3>Strimzi 簡介</h3>

<p>使用 StatefulSet 運行純 Kafka 很複雜，因為 Kafka 依賴 Zookeeper（最高版本 3.x）並且具有許多複雜的配置。 <strong>Strimzi Operator</strong> 是一個專業的 Operator，可協助在 Kubernetes 上部署和管理 Kafka 集群，抽象化複雜性。 </p>

___程式碼區塊_6___

___程式碼區塊_7___

___程式碼區塊_8___

<h2>更新策略</h2>

<h3>滾動更新（預設）</h3>

___程式碼區塊_9___

___程式碼區塊_10___

<h3>刪除策略</h3>

___程式碼區塊_11___

___程式碼區塊_12___

<h2>CloudNativePG：PostgreSQL 新標準</h2>

<h3>為什麼選擇 CloudNativePG？ </h3>

<p>StatefulSet pure for PostgreSQL 仍然需要大量手動工作：流複製設定、故障轉移、備份管理、監控。 <strong>CloudNativePG (CNPG)</strong> 是專為 Kubernetes 上的 PostgreSQL 設計的 CNCF 專案（沙盒 2022，孵化 2024）。 </p>

___程式碼區塊_13___

___程式碼區塊_14___

___程式碼區塊_15___

<h2>何時使用運算子而不是普通 StatefulSet？ </h2>

<h3>StatefulSet 純粹符合時間：</h3>
<ul>
  <li>應用簡單，不需要像大型資料庫那樣複雜__HTMLTAG_169___
  <li>您是否有足夠的專業知識來自行管理複製和故障轉移__HTMLTAG_171___
  <li>需要對部署的各個面向進行最大程度的控制</li>
  <li>應用程式沒有成熟的運營商__HTMLTAG_175___
</ul><h3>運算子適用時間：</h3>
<ul>
  <li>資料庫/狀態系統複合體：PostgreSQL、MySQL、Kafka、Elasticsearch</li>
  <li>需要自動故障轉移、備份、復原</li>
  <li>團隊對特定係統沒有深厚的專業知識</li>
  <li>希望第 2 天操作自動化（升級、擴充、憑證）</li>
</ul>

<h3>推薦運算子 (2026)</h3>

<ul>
  ___HTMLTAG_192__HTMLTAG_193___PostgreSQL</strong>：CloudNativePG（CNCF 孵化）— 生產就緒，積極開發</li>
  ___HTMLTAG_196__HTMLTAG_197___MySQL</strong>：Oracle 或 Percona Operator for MySQL 的 MySQL Operator</li>
  ___HTMLTAG_200__HTMLTAG_201___Kafka</strong>：Strimzi（CNCF 孵化）－成熟、功能豐富</li>
  ___HTMLTAG_204__HTMLTAG_205___Redis</strong>：OpsTree 或 Spotahome Redis Operator 的 Redis 運算子</li>
  ___HTMLTAG_208__HTMLTAG_209___Elasticsearch/OpenSearch</strong>：ECK（Kubernetes 上的彈性雲）或 OpenSearch Operator</li>
  ___HTMLTAG_212__HTMLTAG_213___MongoDB</strong>：MongoDB 社群運營商</li>
</ul>

<h2>摘要__HTMLTAG_218___

<p>StatefulSet 是 Kubernetes 中有狀態工作負載的重要工具，但了解何時使用純 StatefulSet 以及何時使用 Operator 非常重要：</p>

<ul>
  ___HTMLTAG_222__HTMLTAG_223___StatefulSet</strong> 確保每個 Pod 的穩定身分、有序操作和持久性儲存 — 有狀態應用程式需要什麼__HTMLTAG_225___
  ___HTMLTAG_226__HTMLTAG_227___無頭服務</strong>需要建立 DNS 記錄以進行對等發現</li>
  ___HTMLTAG_230__HTMLTAG_231___volumeClaimTemplates</strong> 自動為每個 Pod 建立私人 PVC — 無共享儲存</li>
  ___HTMLTAG_234__HTMLTAG_235___有序部署/刪除</strong>：部署時0→N，縮減時N→0－確保分散式系統的安全__HTMLTAG_237___
  ___HTMLTAG_238__HTMLTAG_239___分區滾動更新</strong>允許使用StatefulSet進行金絲雀部署</li>
  ___HTMLTAG_242__HTMLTAG_243___CloudNativePG</strong>是2026年K8s上PostgreSQL生產的最佳標準</li>
  <li>使用複雜的資料庫，<strong>操作員</strong>顯著節省時間並降低操作風險__HTMLTAG_249___
</ul>