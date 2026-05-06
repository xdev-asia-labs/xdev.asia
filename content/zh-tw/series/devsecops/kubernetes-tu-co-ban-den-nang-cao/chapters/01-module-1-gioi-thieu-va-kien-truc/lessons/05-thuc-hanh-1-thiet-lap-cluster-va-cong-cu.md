---
id: 019c9618-0003-7000-8000-c1147ba22e10
title: 第 4 課：實作 — 設定叢集和工具
slug: thuc-hanh-1-thiet-lap-cluster-va-cong-cu
description: 第一次實作：測試cgroup v2，安裝containerd 2.0，使用kind/k3d建立集群，安裝和設定k9s，Headlamp。熟悉基本的 kubectl 指令。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: 模組 1：簡介和 Kubernetes 架構
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8810" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8810)"/>

  <!-- Decorations -->
  <g>
    <circle cx="813" cy="89" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="1026" cy="282" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="739" cy="215" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="952" cy="148" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="665" cy="81" r="32" fill="#c084fc" opacity="0.1"/>
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
    <polygon points="1078.444863728671,232 1078.444863728671,266 1049,283 1019.555136271329,266 1019.555136271329,232 1049,215" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — 第 4 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 4 課：練習 — 設定叢集與</tspan>
      <tspan x="60" dy="42">工具</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 1：簡介與說明Kubernetes 架構</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>練習 1：叢集設定與工具</h2>

<p>這是本課程的第一個練習。目標是將先前課程中的理論知識轉化為實踐技能 - 您將自己建立一個完整的 Kubernetes 環境，從測試系統到部署儀表板和運行叢集發現命令。 </p>

___HTMLTAG_71__HTMLTAG_72___預計時間</strong>：120分鐘（如果熟悉Linux/終端可能會更快）</p>

___HTMLTAG_75__HTMLTAG_76___練習輸出</strong>：</p>
<ul>
  <li>在本機電腦上執行的 3 節點 Kubernetes 叢集（1 個控制平面 + 2 個工作執行緒）</li>
  <li>全套 CLI 工具：kubectl、k9s、kubectx/kubens、stern</li>
  <li>頭燈儀表板正在運作且可存取</li>
  <li>熟悉常用的 kubectl 指令</li>
</ul>

<h2>先決條件檢查</h2>

___程式碼區塊_0___

<p>執行上述腳本並確保滿足所有要求，然後再繼續。 </p>

<h2>實驗 1：安裝 containerd 2.0 並建立 Kind 叢集</h2>

<h3>第 1 步：安裝 Docker 引擎（如果尚不可用）</h3>

<p>kind 和 k3d 都需要 Docker 才能運作。在 macOS 上，安裝 Docker Desktop。在 Linux 上：</p>

___程式碼區塊_1___

<h3>第 2 步：安裝種類並建立叢集</h3>

___程式碼區塊_2___

___HTMLTAG_101__HTMLTAG_102__<code>kubectl 取得節點的預期輸出___HTMLTAG_104__HTMLTAG_105___:</p>

___程式碼區塊_3___

<h3>步驟 3：安裝 kubectl__HTMLTAG_108___

___程式碼區塊_4___

<h3>檢查點實驗室 1</h3>

___程式碼區塊_5___

<h2>實驗 2：安裝 CLI 工具</h2>

<h3>第 1 步：安裝 k9s</h3>

___程式碼區塊_6___<p>k9s開啟時，執行下列操作：</p>

___程式碼區塊_7___

<h3>步驟 2：安裝 kubectx 和 kubens</h3>

___程式碼區塊_8___

<h3>第 3 步：安裝船尾</h3>

___程式碼區塊_9___

<h3>步驟 4：設定 bash/zsh 補全與別名</h3>

___程式碼區塊_10___

<h2>實驗 3：部署頭燈儀表板__HTMLTAG_124___

<h3>第 1 步：安裝 Helm</h3>

___程式碼區塊_11___

<h3>第 2 步：部署頭燈</h3>

___程式碼區塊_12___

<h3>步驟 3：建立存取權杖</h3>

___程式碼區塊_13___

<h3>第 4 步：開啟頭燈</h3>

___程式碼區塊_14___

<p>開啟瀏覽器並存取 <code>http://localhost:4466</code>。貼上令牌以登入。探索：</p>
<ul>
  <li>節點：查看資源使用、標籤、污點</li>
  <li>工作負載 > Pod：查看所有 Pod、日誌、終端__HTMLTAG_141___
  <li>配置 > ConfigMap、秘密</li>
  <li>叢集 > 命名空間</li>
</ul>

<h2>實驗 4：基本 kubectl 探索__HTMLTAG_148___

<h3>4.1。探索集群</h3>

___程式碼區塊_15___

<h3>4.2。建立第一個 Pod</h3>

___程式碼區塊_16___

<h3>4.3。使用 Deployment</h3> 部署應用程式

___程式碼區塊_17___

<h3>4.4。使用 stern 查看日誌</h3>

___程式碼區塊_18___

<h3>4.5。資源使用分析</h3>

___程式碼區塊_19___

<h2>疑難排解指引：常見錯誤__HTMLTAG_160___

<h3>錯誤 1：節點處於未就緒狀態</h3>

___程式碼區塊_20___

<h3>錯誤 2：Pod 停留在 Pending__HTMLTAG_164___

___程式碼區塊_21___

<h3>錯誤 3：CrashLoopBackOff</h3>

___程式碼區塊_22___

<h3>錯誤 4：ImagePullBackOff</h3>

___程式碼區塊_23___

<h3>錯誤 5：無法建立種類簇</h3>

___程式碼區塊_24___

<h2>實驗室清理</h2>

___程式碼區塊_25___

<h2>練習摘要</h2>

<p>在本練習中，您完成了：</p>

<ul>
  <li>檢查並確認先決條件（cgroup v2、Docker、磁碟空間）</li>
  <li>使用 kind 建立 3 節點 Kubernetes 叢集並設定 nftables 模式</li>
  <li>安裝工具集：kubectl、k9s、kubectx/kubens、stern</li>
  <li>部署與存取 Headlamp 儀表板</li>
  <li>練習 kubectl 指令：get、describe、logs、exec、scale、rollout</li>
  <li>熟悉對掛起的 Pod、CrashLoopBackOff、ImagePullBackOff 進行故障排除</li>
</ul>

<p>從下一篇文章開始，我們將深入研究 Kubernetes 物件 — 從 <strong>Pods</strong> 開始，這是最基本的部署單元。 </p>