---
id: 019c9618-0007-7000-8000-c1147ba22e10
title: 第 8 課：命名空間
slug: bai-8-namespaces
description: 在 Kubernetes 中使用命名空間組織和分離資源。每個命名空間的資源配額、限制範圍、網路策略。多租戶和團隊隔離的最佳實踐。
duration_minutes: 60
is_free: false
video_url: null
sort_order: 8
section_title: 模組 2：基本 Kubernetes 對象
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-959" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-959)"/>

  <!-- Decorations -->
  <g>
    <circle cx="704" cy="242" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="808" cy="226" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="912" cy="210" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="1016" cy="194" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="620" cy="178" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="242" x2="1100" y2="322" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="272" x2="1050" y2="342" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1024.0429399400243,173.5 1024.0429399400243,210.5 992,229 959.9570600599758,210.5 959.9570600599758,173.5 992,155" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — 第 8 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 8 課：命名空間</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 2：基本 Kubernetes 物件</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 課程目標___HTMLTAG_66__HTMLTAG_67___了解命名空間作為 Kubernetes 叢集中的資源分區機制。如何設定資源配額和限制範圍來控制每個命名空間的資源。多租戶最佳實務。 </p>

<h2>1。什麼是命名空間？ </h2>
<p>Namespace 提供 Kubernetes 資源 <strong>name 範圍（scope）</strong>。名為 <code>nginx</code> 的兩個部署可以存在於兩個不同的命名空間中而不會發生衝突。 </p>
<p>允許的命名空間：</p>
<ul>
  ___HTMLTAG_80__HTMLTAG_81___隔離</strong>：單獨的環境（開發、登台、生產）或團隊（團隊 a、團隊 b）</li>
  ___HTMLTAG_84__HTMLTAG_85___資源配額</strong>：每個命名空間的資源限制</li>
  ___HTMLTAG_88__HTMLTAG_89___RBAC 範圍</strong>：每個命名空間的權限</li>
  ___HTMLTAG_92__HTMLTAG_93___網路策略</strong>：控制命名空間之間的流量</li>
</ul>

<h2>2。預設命名空間</h2>
<ul>
  ___HTMLTAG_100__HTMLTAG_101___default</strong>：未指定時的預設命名空間</li>
  ___HTMLTAG_104__HTMLTAG_105___kube-system</strong>：Kubernetes 控制平面的元件（CoreDNS、kube-proxy、metrics-server）</li>
  ___HTMLTAG_108__HTMLTAG_109___kube-public</strong>：所有使用者都可讀，即使未經身份驗證。包含群集資訊</li>
  ___HTMLTAG_112__HTMLTAG_113___kube-node-lease</strong>：節點心跳租約 — 提高節點故障偵測的效能</li>
</ul>
___程式碼區塊_0___

<h2>3。建立和管理命名空間</h2>
___程式碼區塊_1___

<h2>4。使用命名空間</h2>
___程式碼區塊_2___<h2>5。資源配額</h2>
<p>ResourceQuota 限制命名空間中允許的資源總量。 </p>
___程式碼區塊_3___
___程式碼區塊_4___

<h2>6。限制範圍</h2>
<p>LimitRange 設定命名空間中每個容器的預設請求/限制和最小/最大。如果容器未宣告資源，LimitRange 會自動套用預設值。 </p>
___程式碼區塊_5___

<h2>7。每個命名空間的 RBAC</h2>
___程式碼區塊_6___

<h2>8。跨命名空間通訊</h2>
___程式碼區塊_7___

<h2>9。命名空間範圍與叢集範圍</h2>
<p>並非所有資源都有命名空間：</p>
<ul>
  ___HTMLTAG_138__HTMLTAG_139___命名空間</strong>：Pod、部署、服務、ConfigMap、秘密、PVC、角色、RoleBindings</li>
  ___HTMLTAG_142__HTMLTAG_143___叢集範圍</strong>：節點、持久磁碟區、ClusterRole、ClusterRoleBindings、命名空間、StorageClasses</li>
</ul>
___程式碼區塊_8___

<h2>10。多租戶最佳實務</h2>
<ul>
  ___HTMLTAG_150__HTMLTAG_151___每個團隊與環境的命名空間</strong>：<code>team-a-prod</code>、<code>team-a-s</code>、<code>team-a-s</code>、<code>team-a-s___HTing__HTTAG_1156___ <code>團隊-b-產品___HTMLTAG_158__HTMLTAG_159___
  ___HTMLTAG_160__HTMLTAG_161___總是設定ResourceQuota</strong>：防止一個團隊佔用所有叢集資源</li>
  ___HTMLTAG_164__HTMLTAG_165___使用LimitRange</strong>：確保容器始終具有資源限制</li>
  ___HTMLTAG_168__HTMLTAG_169___一致性標籤</strong>：<code>團隊</code>、<code>環境</code>、<code>_HTML
  ___HTMLTAG_178__HTMLTAG_179___分層命名空間控制器 (HNC)</strong>：在樹中組織命名空間，從父級繼承策略</li>
</ul>
___程式碼區塊_9___

<h2>摘要</h2>
<ul>
  <li>命名空間 = 資源的名稱範圍與隔離</li>
  <li>4 個預設命名空間：default、kube-system、kube-public、kube-node-lease</li>
  <li>ResourceQuota：限制每個命名空間的總資源__HTMLTAG_191___
  <li>LimitRange：每個容器的預設值和最小/最大__HTMLTAG_193___
  <li>最佳實務：每個環境每個團隊的命名空間 + ResourceQuota + LimitRange</li>
</ul>