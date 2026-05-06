---
id: 019c9618-0301-7000-8000-c1147ba22e13
title: 第 18 課：功課和 CRONJOB
slug: bai-18-jobs-va-cronjobs
description: 使用作業進行批次（單一、平行、索引、工作佇列）、具有時區支援的 CronJobs (GA K8s 1.27)。用於一組相關作業的 JobSet（CNCF 專案）－非常適合 AI/ML 訓練管道。
duration_minutes: 75
is_free: false
video_url: null
sort_order: 18
section_title: 模組 5：工作負載管理
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9859" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9859)"/>

  <!-- Decorations -->
  <g>
    <circle cx="606" cy="88" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="612" cy="194" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="618" cy="40" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="624" cy="146" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="630" cy="252" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="88" x2="1100" y2="168" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="118" x2="1050" y2="188" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1025.2390923627308,166.5 1025.2390923627308,209.5 988,231 950.7609076372692,209.5 950.7609076372692,166.5 988,145" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — 第 18 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 18 課：作業與 CRONJOBS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 5：工作負載管理__HTMLTAG_60___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>Kubernetes 中的作業和 CronJobs__HTMLTAG_66___

<p>在 Kubernetes 中，<strong>Deployments</strong> 和 <strong>StatefulSets</strong> 專為持續運行的工作負載而設計 — 它們始終嘗試維護一定數量的 Pod。但許多現實世界的任務不需要永遠運行：處理一批資料、運行資料庫遷移、訓練 ML 模型或發送大量電子郵件。這就是 <strong>Jobs</strong> 和 <strong>CronJobs</strong> 發揮作用的地方。 </p>

<h2>1。什麼是職位？批次工作負載和運行至完成</h2>

Kubernetes 中的 <p>A <strong>Job</strong> 建立一個或多個 Pod，其目標是完成一項特定任務。與 Deployment 不同，Job 追蹤成功完成的數量 — 當完成足夠多的 Pod 時，Job 被視為完成。 </p>

<p>重要工作功能：</p>
<ul>
  ___HTMLTAG_86__HTMLTAG_87___運行至完成</strong>：Pod 完成運行並退出，代碼 0 表示成功</li>
  ___HTMLTAG_90__HTMLTAG_91___自動重試</strong>：如果 Pod 失敗，作業會根據 <code>backoffLimit___HTMLTAG_94__HTMLTAG_95___ 自動建立新 Pod
  ___HTMLTAG_96__HTMLTAG_97___追蹤完成情況</strong>：作業知道所需總數中已經完成了多少</li>
  ___HTMLTAG_100__HTMLTAG_101___平行性</strong>：多個 Pod 可以並行運作以提高吞吐量</li>
</ul>

<p>簡單作業範例 — 計算 Pi：</p>

___程式碼區塊_0___

<p>注意 <code>restartPolicy: Never</code> — 對於作業，只能使用 <code>Never</code> 或<code>OnFailure</code>，不使用<code>始終</code>.</p>

<h2>2。作業完成模式</h2><p>Kubernetes 支援三種作業完成模式，適合不同的用例。 </p>

<h3>2.1 非索引（預設）</h3>

<p>當成功完成的次數夠多時，作業即完成。 Pod 是無序的 — 它們都執行相同的工作，而且該工作需要足夠的 <code> 完成 </code> Pod 才能成功。 </p>

___程式碼區塊_1___

<h3>2.2 索引作業</h3>

___HTMLTAG_129__HTMLTAG_130___索引作業</strong> 是一項非常強大的功能 — 每個 Pod 透過環境變數 <code>JOB_COMPLETION_INDEX</code> 接收從 0 到 ___ML13-131313-135___ 的索引____這非常適合 <strong> 資料分區</strong>：每個 Pod 處理定義的資料部分.</p>

___程式碼區塊_2___

<p>Kubernetes 自動將變數 <code>JOB_COMPLETION_INDEX</code> 注入每個 Pod。 Pod 0 處理分區 0，Pod 1 處理分區 1，依此類推。 — 即使 Pod 重新啟動也不會重複。 </p>

<h3>2.3 工作佇列</h3>

<p>使用工作佇列模式，多個 Pod 從一個佇列（Redis、RabbitMQ、SQS）取得任務。當佇列為空且沒有更多 Pod 正在處理時，作業完成。 </p>

___程式碼區塊_3___

<h2>3。作業參數詳細資料</h2>

<p>了解作業參數可協助您針對每個使用案例進行最佳化：</p>

<ul>
  ___HTMLTAG_152__HTMLTAG_153___完成</strong>：需要成功完成的 Pod 總數。預設值為 1.</li>
  ___HTMLTAG_156__HTMLTAG_157___並行度</strong>：同時運行的最大 Pod 數量。預設值為 1.</li>
  ___HTMLTAG_160__HTMLTAG_161___backoffLimit</strong>：作業標記為失敗之前的重試次數。預設值為 6.</li>
  ___HTMLTAG_164__HTMLTAG_165___activeDeadlineSeconds</strong>：允許作業運行的最長時間（秒）。超出 → 作業終止。 </li>
  ___HTMLTAG_168__HTMLTAG_169___ttlSecondsAfterFinished</strong>：完成後 N 秒刪除作業（和 Pod）。 </li>
</ul>

___程式碼區塊_4___

<h2>4。 Pod 故障策略（K8s 1.31+）</h2>

<p>從 Kubernetes 1.31 開始，<strong>Pod 故障策略</strong> 允許您定義 Pod 失敗時的精細行為 — 並不總是建議重試。 </p>

___程式碼區塊_5___

<p><code>操作</code>可用來：</p>
<ul>
  ___HTMLTAG_184__HTMLTAG_185___FailJob</strong>：立即停止整個作業，標記失敗</li>
  ___HTMLTAG_188__HTMLTAG_189___忽略</strong>：不計入 backoffLimit，建立新 Pod</li>
  ___HTMLTAG_192__HTMLTAG_193___Count</strong>：照常計入 backoffLimit（預設行為）</li>
</ul>

<h2>5。作業 TTL — 自動清理</h2>

<p>作業及其 Pod 完成後將永遠保留，無需清理機制。使用 <code>ttlSecondsAfterFinished</code> 自動刪除：</p>

___程式碼區塊_6___<p>您也可以修補現有作業： <code>kubectl patch job old-job -p '{"spec":{"ttlSecondsAfterFinished":0}}'</code> — 這會立即刪除作業。 </p>

<h2>6。 CronJobs — 排程任務</h2>

___HTMLTAG_209__HTMLTAG_210___CronJob</strong> 使用熟悉的 cron 語法定期自動建立作業。 </p>

___程式碼區塊_7___

<h3>6.1 CronJob 時區支援 (GA K8s 1.27)</h3>

<p>在 K8s 1.27 之前，所有 CronJobs 都使用控制器的 UTC。從 K8s 1.27 開始， <code>timeZone</code> 欄位是 GA — 您可以根據 IANA 時區資料庫指定任何時區：</p>

___程式碼區塊_8___

<p>熱門時區：</p>
<ul>
  ___HTMLTAG_222__HTMLTAG_223___亞洲/胡志明</code> — 越南 (UTC+7)</li>
  ___HTMLTAG_226__HTMLTAG_227___亞洲/新加坡</code> — 新加坡 (UTC+8)</li>
  ___HTMLTAG_230__HTMLTAG_231___美國/紐約</code> — 美國東部</li>
  ___HTMLTAG_234__HTMLTAG_235___歐洲/倫敦</code> — 英國</li>
  ___HTMLTAG_238__HTMLTAG_239___UTC</code> — 協調世界時</li>
</ul>

<h3>6.2 並發策略</h3>

<p>需要決定的重要事項：如果計劃執行新作業時舊作業尚未完成該怎麼辦？ </p>
<ul>
  ___HTMLTAG_248__HTMLTAG_249___允許</strong>（預設）：即使舊作業正在運行，也建立新作業 - 請注意競爭條件</li>
  ___HTMLTAG_252__HTMLTAG_253___禁止</strong>：跳過新作業，舊作業仍繼續</li>
  ___HTMLTAG_256__HTMLTAG_257___取代</strong>：刪除舊作業，建立新作業來取代</li>
</ul>

<h2>7。 JobSet — 用於分散式作業的 CNCF 項目</h2>

___HTMLTAG_263__HTMLTAG_264___JobSet</strong> 是一個 CNCF 專案（目前處於沙盒階段），旨在協調多個相關作業。這是 <strong>分散式 ML 訓練管道__HTMLTAG_267___.</p> 的理想工具

<p>作業集設定：</p>
___程式碼區塊_9___

<h3>7.1 分散式機器學習訓練作業集</h3>

<p>場景：使用參數伺服器架構訓練模型 — 一組 pod 作為參數伺服器（儲存梯度），另一組作為工作執行緒（計算）。 </p>

___程式碼區塊_10___

<h3>7.2 JobSet 的突出特點__HTMLTAG_276___<ul>
  ___HTMLTAG_278__HTMLTAG_279___失敗策略傳播</strong>：如果集合中的作業失敗，整個作業集可以重新啟動或一起失敗 - 沒有「孤立」作業__HTMLTAG_281___
  ___HTMLTAG_282__HTMLTAG_283___基於 DNS 的通訊</strong>：JobSet 中的作業自動具有 DNS 記錄以相互通訊 (<code>{jobset-name}-{job-name}-{job-index}-{podpod-index.{HTMLU​​____787____ML____ML-
  ___HTMLTAG_288__HTMLTAG_289___獨佔拓撲</strong>：確保同一作業的 Pod 調度在同一機架/節點上（減少網路延遲）</li>
  ___HTMLTAG_292__HTMLTAG_293___啟動順序__HTMLTAG_294___：僅在PS準備好後啟動worker</li>
</ul>

<h3>7.3 作業集追蹤</h3>

___程式碼區塊_11___

<h2>8。摘要：何時使用什麼？ </h2>

<ul>
  ___HTMLTAG_302__HTMLTAG_303___SimpleJob</strong>：一項任務，執行一次 — 使用基本作業</li>
  ___HTMLTAG_306__HTMLTAG_307___無順序並行處理</strong>：具有完成+並行性的非索引作業</li>
  ___HTMLTAG_310__HTMLTAG_311___資料分區</strong>：索引作業 — 每個 Pod 處理指定的分區</li>
  ___HTMLTAG_314__HTMLTAG_315___基於佇列的處理</strong>：工作佇列Job + Redis/RabbitMQ</li>
  ___HTMLTAG_318__HTMLTAG_319___排程任務</strong>：支援時區的 CronJob</li>
  ___HTMLTAG_322__HTMLTAG_323___分散式訓練/HPC</strong>：用於多重作業協調的作業集</li>
</ul>

<p>Jobs 和 CronJobs 是 Kubernetes 上每個批次系統的基礎。了解完成模式和失敗策略有助於您建立可靠的管道，尤其是在 AI/ML 工作負載變得越來越流行的情況下。 </p>