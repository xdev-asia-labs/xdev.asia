---
id: 019c9618-0102-7000-8000-c1147ba22e11
title: 第 11 課：持久性儲存和 CSI
slug: bai-11-persistent-storage-va-csi
description: 使用 PersistentVolumes、PersistentVolumeClaims、StorageClasses 管理儲存。 CSI 驅動程式必須取代樹內插件（已刪除 K8s 1.31）。動態配置、磁碟區快照、新的 VolumeAttributesClass (K8s 1.29+)。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 11
section_title: 模組 3：配置和存儲
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1172" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1172)"/>

  <!-- Decorations -->
  <g>
    <circle cx="721" cy="73" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="842" cy="174" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="963" cy="275" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1084" cy="116" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="705" cy="217" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="183" x2="1100" y2="263" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="213" x2="1050" y2="283" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1015.9089653438086,164 1015.9089653438086,202 983,221 950.0910346561914,202 950.0910346561914,164 983,145" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — 第 11 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 11 課：持久性儲存與 CSI</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 3：設定與儲存</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>Kubernetes 中的持久性儲存和 CSI__HTMLTAG_66___

<p>容器是短暫的－當容器重新啟動或 Pod 在另一個節點上重新調度時，內部的所有資料都會遺失。對於資料庫、訊息佇列和檔案儲存等有狀態工作負載來說，這是一個嚴重的問題。 Kubernetes 透過豐富的儲存系統解決了這個問題，從 Kubernetes 1.30-1.31 開始，樹內儲存外掛程式已被完全刪除，取而代之的是 <strong>容器儲存介面 (CSI)</strong> 標準化驅動程式.</p>

<h2>儲存生命週期：從短暫到持久__HTMLTAG_72___

<h3>emptyDir：暫時儲存</h3>

___HTMLTAG_75__HTMLTAG_76___emptyDir</code> 在 Pod 建立時建立一個空目錄，並在 Pod 的生命週期內持續存在。當Pod被刪除時，資料就完全遺失了。適用於快取、暫存檔案、同一 Pod 中的容器之間共用資料。 </p>

___程式碼區塊_0___

<h3>hostPath：節點本地儲存</h3>

___HTMLTAG_81__HTMLTAG_82___hostPath</code> 將主機節點上的路徑安裝到容器。容器重啟時資料存在，但當 Pod 調度到其他節點時資料遺失。 <strong>不應在生產中使用</strong>，除非有特殊原因（系統守護程序、監控代理）。 </p>

___程式碼區塊_1___

<h2>PersistentVolume 和 PersistentVolumeClaim</h2>

<h3>核心概念</h3>

<p>Kubernetes 透過兩個抽象化將 <em> 提供儲存 </em>（管理員）和 <em> 使用儲存 </em>（開發人員）分開：</p> 使用儲存 </em>（開發人員）分開：</p><ul>
  ___HTMLTAG_98__HTMLTAG_99___PersistentVolume (PV)</strong>：由管理員建立或動態配置的叢集級儲存資源。代表一塊實際儲存（NFS共享、雲端磁碟等）</li>
  ___HTMLTAG_102__HTMLTAG_103___PersistentVolumeClaim (PVC)</strong>：使用者儲存請求。開發人員只需聲明“我需要 10Gi 的儲存空間並使用 ReadWriteOnce”，而無需知道儲存空間在哪裡。 </li>
</ul>

<h3>持久性磁碟區定義</h3>

___程式碼區塊_2___

<h3>持久性卷聲明</h3>

___程式碼區塊_3___

___程式碼區塊_4___

<h3>在 Pod 中使用 PVC</h3>

___程式碼區塊_5___

<h2>存取模式</h2>

<p>Kubernetes 定義了 4 種存取模式，展示如何掛載磁碟區：</p>

<ul>
  ___HTMLTAG_118__HTMLTAG_119___ReadWriteOnce (RWO)</strong>：可以掛載讀寫的節點。最常見的是區塊儲存（EBS、GCE PD）。從 K8s 1.22+ 開始，RWO 允許在同一讀寫節點上有多個 Pod。 </li>
  ___HTMLTAG_122__HTMLTAG_123___ReadOnlyMany (ROX)</strong>：多個節點可以同時以唯讀方式掛載。匹配共享配置/資料。 </li>
  ___HTMLTAG_126__HTMLTAG_127___ReadWriteMany (RWX)</strong>：許多節點掛載讀寫。需要網路檔案系統，例如 NFS、CephFS、Azure 檔案。重要提示：區塊儲存（EBS、GCE PD）不支援 RWX.</li>
  ___HTMLTAG_130__HTMLTAG_131___ReadWriteOncePod (RWOP)</strong>：整個叢集只能掛載一個 Pod。比 RWO 更強——確保 Pod 等級的獨佔訪問，而不僅僅是節點層級。需要 CSI 驅動程式支援。 </li>
</ul>

<h2>儲存類別：動態設定</h2>

<h3>為什麼選擇 StorageClass？ </h3>

<p>管理員不必手動建立 PV，StorageClass 允許 <strong>動態設定</strong> — Kubernetes 在有 PVC 請求時自動建立 PV。管理員只需定義儲存「類別」（例如：ssd-fast、hdd-cheap、nfs-shared）。 </p>

___程式碼區塊_6___

<h3>回收政策</h3>

<ul>
  ___HTMLTAG_146__HTMLTAG_147___刪除</strong>：刪除PVC時，PV和底層儲存也會被刪除。預設採用動態配置。適合短暫的工作負載。 </li>
  ___HTMLTAG_150__HTMLTAG_151___Retain</strong>：當 PVC 被刪除時，PV 被保留（Released 狀態）。管理員必須手動回收。適用於需要資料保護的生產資料庫。 </li>
  ___HTMLTAG_154__HTMLTAG_155___回收</strong>：已棄用，不建議。 </li>
</ul>

<h2>CSI：容器儲存介面</h2>

<h3>為什麼樹內插件被刪除？ </h3>

<p>以前，Kubernetes 有許多樹內儲存外掛程式直接編譯到核心 Kubernetes 二進位（aws-ebs、gce-pd、azure-disk、cephfs、nfs...）。這會產生許多問題：</p><ul>
  <li>儲存外掛程式中的錯誤可能會導致整個 kube-apiserver/kubelet 崩潰</li>
  <li>與 Kubernetes 版本相關的儲存驅動程式的發佈週期</li>
  <li>插件數量增加時難以維護</li>
  <li>儲存供應商無法獨立發布修復</li>
</ul>

___HTMLTAG_175__HTMLTAG_176___CSI（容器儲存介面）</strong> 透過標準化 Kubernetes 和儲存提供者之間的介面解決了所有這些問題。驅動程式作為單獨的 Pod 運行，可以獨立更新。 </p>

<h3>時間軸刪除樹內插件__HTMLTAG_180___

<ul>
  ___HTMLTAG_182__HTMLTAG_183___K8s 1.26-1.28</strong>：許多樹內插件已棄用</li>
  ___HTMLTAG_186__HTMLTAG_187___K8s 1.29</strong>：樹內 NFS 和許多外掛程式已轉換為已棄用，需要 CSI</li>
  ___HTMLTAG_190__HTMLTAG_191___K8s 1.30</strong>：樹內 NFS 外掛程式已刪除</li>
  ___HTMLTAG_194__HTMLTAG_195___K8s 1.31</strong>：樹內 CephFS、Ceph RBD 外掛程式完全刪除__HTMLTAG_197___
  ___HTMLTAG_198__HTMLTAG_199___K8s 1.32+</strong>：繼續刪除剩餘的樹內插件</li>
</ul>

<h3>熱門 CSI 驅動程式</h3>

<h4>雲端供應商</h4>

___程式碼區塊_7___

<h4>Longhorn：開源分散式儲存__HTMLTAG_208___

___程式碼區塊_8___

___程式碼區塊_9___

<h4>Rook/Ceph：企業儲存</h4>

___程式碼區塊_10___

<h2>磁碟區快照</h2>

<h3>概念__HTMLTAG_214___

<p>磁碟區快照是 K8s 1.20 的 GA 功能，允許建立 PVC 的時間點快照。需要支援快照功能的 CSI 驅動程式並安裝快照控制器。 </p>

<h3>安裝快照控制器</h3>

___程式碼區塊_11___

<h3>VolumeSnapshotClass</h3>

___程式碼區塊_12___

<h3>建立磁碟區快照</h3>

___程式碼區塊_13___

___程式碼區塊_14___

<h3>從快照恢復</h3>

___程式碼區塊_15___

___程式碼區塊_16___

<h2>VolumeAttributesClass（K8s 1.29+）</h2>

<h3>舊方法的問題</h3>

<p>以前，如果您想要變更磁碟區的 IOPS 或吞吐量（例如，從 gp3 3000 IOPS 變更為 10000 IOPS），您必須刪除 PVC，建立新的 StorageClass，然後建立新的 PVC — 這是一個複雜且會導致停機的過程。 </p>

___HTMLTAG_231__HTMLTAG_232___VolumeAttributesClass (VAC)</strong> 是一個新 API (Beta K8s 1.31)，允許更改可變卷屬性，例如 IOPS 和吞吐量，而無需刪除 PVC.</p>

___程式碼區塊_17___

___程式碼區塊_18___

___程式碼區塊_19___

<h2>摘要</h2>

<p>自 K8s 1.30-1.31 以來，隨著 CSI 成為強制平台，Kubernetes 中的儲存已顯著成熟。要記住的重點：</p><ul>
  ___HTMLTAG_240__HTMLTAG_241___emptyDir</strong> 用於 Pod 中的臨時共享存儲，<strong>PVC/PV</strong> 用於持久資料__HTMLTAG_245___
  ___HTMLTAG_246__HTMLTAG_247___需要 CSI</strong>：不再是 K8s 1.30+ 的樹內插件，必須遷移到 CSI 驅動程式</li>
  ___HTMLTAG_250__HTMLTAG_251___StorageClass</strong> 動態設定是標準方式 — 管理員定義類，開發人員只需宣告</li>
  ___HTMLTAG_254__HTMLTAG_255___Longhorn</strong> 對於具有分散式複製儲存的本地叢集來說是一個不錯的選擇</li>
  ___HTMLTAG_258__HTMLTAG_259___磁碟區快照</strong>允許時間點備份/恢復，需要CSI驅動程式和快照控制器</li>
  ___HTMLTAG_262__HTMLTAG_263___VolumeAttributesClass</strong>（K8s 1.29+ Beta）允許在不清除 PVC 的情況下更改 IOPS/吞吐量</li>
  <li>總是使用 <code>WaitForFirstConsumer</code> 與雲捲的綁定模式，以避免跨可用區附件問題</li>
</ul>