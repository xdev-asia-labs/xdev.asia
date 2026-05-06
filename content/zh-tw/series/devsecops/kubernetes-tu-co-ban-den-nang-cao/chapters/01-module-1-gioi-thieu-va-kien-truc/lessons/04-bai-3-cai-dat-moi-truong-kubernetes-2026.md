---
id: 019c9618-0002-7000-8000-c1147ba22e10
title: 第 3 課：環境設定 Kubernetes 2026
slug: bai-3-cai-dat-moi-truong-kubernetes-2026
description: 使用containerd 2.0、cgroup v2、kind/k3d安裝Kubernetes 2026環境的說明。安裝 kubectl、k9s、kubectx/kubens、stern 和 Headlamp 儀表板以取代已存檔的 Kubernetes 儀表板。
duration_minutes: 75
is_free: true
video_url: null
sort_order: 3
section_title: 模組 1：簡介和 Kubernetes 架構
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7152" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7152)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1004" cy="62" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="908" cy="246" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="812" cy="170" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="716" cy="94" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="620" cy="278" r="20" fill="#f472b6" opacity="0.05"/>
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
    <polygon points="974.0429399400242,123.5 974.0429399400242,160.5 942,179 909.9570600599758,160.5 909.9570600599758,123.50000000000001 942,105" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — 第 3 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 3 課：環境設定 KUBERNETES 2026</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 1：簡介與內容Kubernetes 架構</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>Kubernetes 環境設定 2026</h2>

<p>Kubernetes 2026 對其底層技術堆疊進行了重要更改。本課程將引導您建立完整的 Kubernetes 開發環境 - 從系統需求、安裝 containerd 2.0、建立本地集群，到最先進的儀表板和 CLI 工具。 </p>

<h2>1。系統需求 2026</h2>

<h3>1.1。最低硬體</h3>

<ul>
  ___HTMLTAG_74__HTMLTAG_75___CPU</strong>：4 個核心（建議 8 個以上核心來執行多節點叢集）</li>
  ___HTMLTAG_78__HTMLTAG_79___RAM</strong>：8 GB（建議 16 GB）</li>
  ___HTMLTAG_82__HTMLTAG_83___磁碟</strong>：50 GB 可用空間（建議使用 SSD）</li>
  ___HTMLTAG_86__HTMLTAG_87___作業系統</strong>：核心為 5.15+ 的 Linux（本地開發為 Ubuntu 22.04+、Debian 12+、RHEL 9+ 或 macOS 14+）</li>
</ul>

<h3>1.2。測試並確保 cgroup v2</h3>

<p>這是最重要的 <strong>必需的</strong>。從 Kubernetes 1.35 開始，cgroup v1 已被棄用。從 Kubernetes 1.36 開始，僅支援 cgroup v2。 </p>

___程式碼區塊_0___

___HTMLTAG_97__HTMLTAG_98___如果您使用的是cgroup v1</strong>，最簡單的方法是升級作業系統：</p>

___程式碼區塊_1___

<p>Ubuntu 22.04 LTS 及更高版本預設使用 cgroup v2 — 無額外設定。 </p>

<h2>2。安裝containerd 2.0</h2>

<p>containerd 2.0 是 Kubernetes 2026 的標準容器運行時，具有本機 cgroup v2 支援和許多效能改進。 </p>

<h3>2.1。在 Ubuntu/Debian 上安裝</h3>

___程式碼區塊_2___

<h3>2.2。為 Kubernetes 設定 Containerd</h3>

___程式碼區塊_3___

<h3>2.3。安裝 crictl（CRI CLI 工具）</h3>___程式碼區塊_4___

<h2>3。本地安装 Kubernetes：Kind、k3d 与 Minikube</h2>

<h3>3.1。比較選項</h3>

<table>
  <thead>
    <tr>
      <th>工具</th>
      <th>機制__HTMLTAG_123___
      <th>優點</th>
      <th>缺點</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      ___HTMLTAG_132__HTMLTAG_133___種類___HTMLTAG_134__HTMLTAG_135___
      <td>K8s 節點是 Docker 容器</td>
      <td>多節點、CI友善、穩定</td>
      <td>需要 Docker 桌面/引擎，比 k3d 慢</td>
    </tr>
    <tr>
      ___HTMLTAG_144__HTMLTAG_145___k3d___HTMLTAG_146__HTMLTAG_147___
      Docker 中的 <td>k3s（輕量級 K8s）__HTMLTAG_149___
      <td>最快、最轻、简单的多节点__HTMLTAG_151___
      <td>k3s 與完整的 K8s 有些差異</td>
    </tr>
    <tr>
      ___HTMLTAG_156__HTMLTAG_157___Minikube___HTMLTAG_158__HTMLTAG_159___
      <td>VM 或 Docker 驅動程式__HTMLTAG_161___
      <td>最容易使用，有很多插件</td>
      <td>預設單節點，比較消耗資源__HTMLTAG_165___
    </tr>
  </tbody>
</table>

___HTMLTAG_169__HTMLTAG_170___建議 2026</strong>：將 <strong>kind</strong> 用於 CI/CD 管道以及在需要測試接近生產的多節點場景時使用。使用 <strong>k3d</strong> 进行快速本地开发。本課程涵蓋兩者。 </p>

<h3>3.2。安裝和使用 kind</h3>

___程式碼區塊_5___

<h3>3.3。安裝和使用 k3d</h3>

___程式碼區塊_6___

<h2>4。安裝 kubectl</h2>

___程式碼區塊_7___

<h2>5。基本 CLI 工具 2026</h2>

<h3>5.1。 k9s — 終端 UI 儀表板</h3>

<p>k9s 是一個基於終端的 Kubernetes UI — 提供叢集資源的即時視圖，允許導航、查看日誌、執行到容器中，所有這些都可以從終端進行。 </p>

___程式碼區塊_8___

<h3>5.2。 kubectx 和 kubens — 上下文和命名空间切换</h3>

<p>使用多個叢集和命名空間時，<code>kubectx</code> 和 <code>kubens</code> 有助於快速切換。 </p>

___程式碼區塊_9___

<h3>5.3。 stern — 多 Pod 日誌流</h3>

<p>stern 允許同時從多個 Pod 串流日誌，透過正規表示式進行過濾，並透過 pod 顯示顏色。 </p>

___程式碼區塊_10___

<h3>5.4。 krew — kubectl 外掛程式管理器</h3>

___程式碼區塊_11___

<h2>6。儀表板 2026：頭燈</h2>___HTMLTAG_205__HTMLTAG_206___Kubernetes Dashboard</strong> (kubernetes/dashboard) 於 <strong>於 2026 年 1 月存檔</strong> — 官方專案不再維護。目前推薦的替代方案是 <strong>Headlamp</strong> — 一個現代的、積極維護的基於 Web 的儀表板，具有更好的 UI/UX.</p>

<h3>6.1。使用 Helm 安裝頭燈</h3>

___程式碼區塊_12___

<h3>6.2。配置服務帳戶令牌以登入</h3>

___程式碼區塊_13___

<h3>6.3。頭燈的替代品</h3>

<ul>
  ___HTMLTAG_220__HTMLTAG_221___Lens / OpenLens</strong>：桌面應用程式（Electron），非常流行，功能很多。 OpenLens 是 Lens 的開源分支。 </li>
  ___HTMLTAG_224__HTMLTAG_225___k9s</strong>：終端 UI，比 Web 儀表板更快</li>
  ___HTMLTAG_228__HTMLTAG_229___Grafana</strong>：如果您已有 Grafana 堆疊，請使用 kubernetes 外掛程式/儀表板</li>
  ___HTMLTAG_232__HTMLTAG_233___Rancher</strong>：管理多個叢集時的完整平台</li>
</ul>

<h2>7。 IDE 和編輯器設定</h2>

<h3>7.1。 Visual Studio 程式碼</h3>

___程式碼區塊_14___

<p>VS 程式碼中所需的擴充功能：</p>
<ul>
  ___HTMLTAG_244__HTMLTAG_245___Kubernetes</strong> (ms-kubernetes-tools)：YAML 清單的 IntelliSense、叢集資源管理器、來自 IDE 的連接埠轉送</li>
  ___HTMLTAG_248__HTMLTAG_249___YAML</strong> (redhat)：架構驗證，使用 Kubernetes 架構自動完成 YAML</li>
  ___HTMLTAG_252__HTMLTAG_253___Docker</strong>：Dockerfile 語法、映像管理</li>
</ul>

<h3>7.2。設定 YAML 架構驗證</h3>

___程式碼區塊_15___

<h2>8。第一個指令：檢查叢集活動</h2>

<p>安裝完成後，執行以下命令來驗證叢集是否正常運作：</p>

___程式碼區塊_16___

<h2>9。配置 kubeconfig 和多個叢集</h2>

___程式碼區塊_17___

<h2>10。設定清單摘要</h2>

<p>以下是驗證環境是否已準備就緒的清單：</p>

___程式碼區塊_18___

<p>完成本課程後，您將擁有一個完整的環境來學習和練習 Kubernetes。在下一個練習中，我們將應用已安裝的所有內容來部署第一個實際應用程式。 </p>