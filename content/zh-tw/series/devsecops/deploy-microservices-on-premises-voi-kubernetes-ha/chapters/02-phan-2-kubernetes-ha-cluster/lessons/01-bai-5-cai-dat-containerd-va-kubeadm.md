---
id: 019e1a00-aa01-7001-c001-k8sha000201
title: 第 5 課：在所有節點上安裝 Containerd 和 KUBEADM
slug: bai-5-cai-dat-containerd-va-kubeadm
description: 安裝帶有 cri 插件、crictl、kubeadm、kubelet、kubectl 最新版本的 containerd 2.x。配置containerd以使用systemd cgroup驅動程序，在初始化叢集之前拉取沙箱映像並進行測試。
duration_minutes: 100
is_free: true
video_url: null
sort_order: 5
section_title: 第 2 部分：使用 kubeadm 的 Kubernetes HA 集群
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2127" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2127)"/>

  <!-- Decorations -->
  <g>
    <circle cx="942" cy="96" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="784" cy="118" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="626" cy="140" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="968" cy="162" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="810" cy="184" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="116" x2="1100" y2="196" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="146" x2="1050" y2="216" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="992.8467875173176,150.5 992.8467875173176,181.5 966,197 939.1532124826824,181.5 939.1532124826824,150.5 966,135" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 5 課：在</tspan> 上安裝 CONTAINERD 和 KUBEADM
      <tspan x="60" dy="42">所有節點</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：使用 kubeadm 的 Kubernetes HA 叢集__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_68___
<p>完成本課程後，您將：</p>
<ul>
<li>✅ 使用 CRI 外掛程式安裝 containerd 容器執行時間</li>
<li>✅ 使用 systemd cgroup 驅動程式設定 containerd__HTMLTAG_75___
<li>✅ 從官方儲存庫安裝 kubeadm、kubelet、kubectl</li>
<li>✅ 安裝 crictl 用於調試容器__HTMLTAG_79___
<li>✅ 預拉沙箱影像並驗證一切是否準備就緒</li>
</ul>

<hr>

<h2 id="phan-1-container-runtime">第 1 部分：容器運行時 — 為什麼選擇 CONTAINERD？ </h2>

<h3 id="11-lich-su-container-runtime">1.1。 K8s 中容器運行時的歷史</h3>
___程式碼區塊_0___

<h3 id="12-containerd-vs-cri-o">1.2。容器與 CRI-O</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>標準</th>
<th>容器</th>
<th>CRI-O</th>
</tr>
</thead>
<tbody>
<tr>
___HTMLTAG_104__HTMLTAG_105___維護者___HTMLTAG_106__HTMLTAG_107___
<td>CNCF（Docker/Moby 起源）</td>
<td>CNCF（紅帽起源）</td>
</tr>
<tr>
___HTMLTAG_114__HTMLTAG_115___採用___HTMLTAG_116__HTMLTAG_117___
<td>非常寬（預設 EKS、GKE、AKS）</td>
<td>OpenShift、RHEL 重點</td>
</tr>
<tr>
___HTMLTAG_124__HTMLTAG_125___功能___HTMLTAG_126__HTMLTAG_127___
<td>多用途（docker CLI 相容）</td>
<td>僅限 K8s（輕量級）</td>
</tr>
<tr>
___HTMLTAG_134__HTMLTAG_135___影像建構___HTMLTAG_136__HTMLTAG_137___
<td>透過 nerdctl/buildkit 支援</td>
<td>否（需 podman/buildah）</td>
</tr>
<tr>
___HTMLTAG_144__HTMLTAG_145___穩定性___HTMLTAG_146__HTMLTAG_147___
<td>非常穩定</td>
<td>穩定</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>👉 <strong>選擇containerd：</strong>最受歡迎，大量文檔，與所有K8s發行版相容。 </p>

<hr>

<h2 id="phan-2-cai-dat-containerd">第 2 部分：容器設定</h2>

<h3 id="21-cai-dat-tu-docker-repository">2.1。從 Docker 官方儲存庫安裝</h3>
___程式碼區塊_1___

<h3 id="22-cau-hinh-containerd">2.2。配置containerd</h3>
___程式碼區塊_2___

<p>🔬 <strong>深入探究 — 為什麼 SystemdCgroup = true？ ___HTMLTAG_169__HTMLTAG_170___
___程式碼區塊_3___

<h3 id="23-cau-hinh-containerd-chi-tiet">2.3。詳細的containerd配置（可選調整）</h3>
___程式碼區塊_4___

<h3 id="24-restart-containerd">2.4。重新啟動並驗證containerd</h3>
___程式碼區塊_5___

<hr>

<h2 id="phan-3-cai-dat-crictl">第 3 部分：CRICTL 設定</h2>

<h3 id="31-crictl-la-gi">3.1。什麼是 crictl？ </h3>
<p>crictl 是用於 CRI 相容容器執行時間的 CLI 工具。與 docker CLI 類似，但適用於 CRI：</p>

___程式碼區塊_6___

<h3 id="32-cau-hinh-crictl">3.2。 Crictl配置</h3>
___程式碼區塊_7___

<hr>

<h2 id="phan-4-cai-dat-kubeadm-kubelet-kubectl">第 4 部分：安裝 KUBEADM、KUBELET、KUBECTL</h2>

<h3 id="41-them-kubernetes-repository">4.1。新增 Kubernetes 儲存庫</h3>
___程式碼區塊_8___

<h3 id="42-enable-kubelet">4.2。啟用 kubelet</h3>
___程式碼區塊_9___

<h3 id="43-kubectl-bash-completion">4.3。 kubectl Bash 完成</h3>
___程式碼區塊_10___

<hr>

<h2 id="phan-5-pre-pull-images">第 5 部分：預張影像</h2>

<h3 id="51-pull-k8s-images-truoc">5.1。在初始化之前拉取 K8s 鏡像</h3>
___程式碼區塊_11___

<p>💡 <strong>提示：</strong> 如果節點沒有互聯網訪問權限，請在有互聯網的電腦上拉取圖像，導出到 tar，然後在節點上導入：</p>
___程式碼區塊_12___

<hr>

<h2 id="phan-6-pre-flight-check">第 6 部分：飛行前檢查</h2>

<h3 id="61-kubeadm-preflight">6.1。 kubeadm 預檢檢查</h3>
___程式碼區塊_13___

<hr><h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_211__HTMLTAG_212___containerd</strong> 是標準容器執行時，從 Docker 官方儲存庫安裝</li>
___HTMLTAG_215__HTMLTAG_216___SystemdCgroup = true</strong> 是必要的 — 必須符合 kubelet cgroup 驅動程式</li>
___HTMLTAG_219__HTMLTAG_220___kubeadm、kubelet、kubectl</strong> 從 pkgs.k8s.io 安裝，然後 <code>apt 標記保留</code>____
___HTMLTAG_225__HTMLTAG_226___預張影像</strong>節省叢集初始化時間，對於氣隙環境尤其重要</li>
___HTMLTAG_229__HTMLTAG_230___飛行前檢查</strong>有助於在執行 kubeadm init 之前偵測問題</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：在所有節點上安裝__HTMLTAG_238___
<ul>
<li>在所有6個節點上安裝containerd + kubeadm（3個master + 3個worker）</li>
<li>驗證每個節點的 SystemdCgroup = true</li>
<li>在3個主節點上預先拉K8s鏡像</li>
<li>執行飛行前檢查腳本，確保所有通過</li>
</ul>

<h3 id="bt2">練習 2：氣隙影像傳輸</h3>
<ul>
<li>將 K8s 影像匯出到 tar 檔案</li>
<li>轉移到沒有網路的節點__HTMLTAG_255___
<li>導入並驗證影像是否可用</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第6課：初始化第一個Kubernetes HA控制平面__HTMLTAG_264___中，我們將在具有HA配置的master1上執行kubeadm init，建立叢集憑證和kubeconfig。 </p>