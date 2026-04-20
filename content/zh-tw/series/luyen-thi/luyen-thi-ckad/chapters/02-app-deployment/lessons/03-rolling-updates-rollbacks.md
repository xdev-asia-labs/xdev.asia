---
id: ckad-d2-l03
title: '第3課: Rolling Updates 與 Rollbacks'
slug: 03-rolling-updates-rollbacks
description: >-
  Deployment 更新策略: RollingUpdate vs Recreate。maxUnavailable 和 maxSurge 的配置。
  kubectl rollout 指令: status、history、undo。版本紀錄管理。
duration_minutes: 45
is_free: true
video_url: null
sort_order: 3
section_title: "領域2: Application Deployment (20%)"
course:
  id: lt-ckad-series-001
  title: 'CKAD 認證備考 — Certified Kubernetes Application Developer'
  slug: luyen-thi-ckad
---

<img src="/storage/uploads/2026/04/k8s-cert-ckad-bai3-rolling-updates.png" alt="Rolling Updates 與 Rollbacks — maxUnavailable、maxSurge 視覺化" style="max-width: 800px; width: 100%; border-radius: 12px;" />

<h2 id="strategies">1. 更新策略</h2>

<table>
<thead><tr><th>策略</th><th>行為</th><th>停機時間</th><th>使用場景</th></tr></thead>
<tbody>
<tr><td><strong>RollingUpdate</strong>（預設）</td><td>逐步替換舊 Pod</td><td>零停機</td><td>大部分生產環境</td></tr>
<tr><td><strong>Recreate</strong></td><td>先刪除所有舊 Pod，再建立新 Pod</td><td>有停機</td><td>不能多版本並存的應用</td></tr>
</tbody>
</table>

<pre><code class="language-text">spec:
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1     # 更新期間最多有 1 個 Pod 不可用
      maxSurge: 1           # 更新期間最多額外建立 1 個 Pod

# replicas=10 + maxUnavailable=1 + maxSurge=1 的情況:
# 最少可用: 10 - 1 = 9 個 Pod
# 最多存在: 10 + 1 = 11 個 Pod</code></pre>

<pre><code class="language-text">RollingUpdate 過程（replicas=4, maxUnavailable=1, maxSurge=1）:

起始:   [v1] [v1] [v1] [v1]         ← 4 個 v1 Pods
步驟1:  [v1] [v1] [v1] [--] [v2]   ← 終止 1 個 v1，啟動 1 個 v2
步驟2:  [v1] [v1] [--] [v2] [v2]   ← 繼續替換
步驟3:  [v1] [--] [v2] [v2] [v2]   
完成:   [v2] [v2] [v2] [v2]         ← 全部更新為 v2</code></pre>

<blockquote><p><strong>考試重點:</strong> maxUnavailable 和 maxSurge 可以設定為絕對數字或百分比。<code>maxUnavailable: 25%</code> 和 <code>maxSurge: 25%</code> 是預設值。計算題：replicas=10, maxSurge=2 → 更新期間最多存在 12 個 Pod。</p></blockquote>

<h2 id="rollout">2. kubectl rollout 指令</h2>

<pre><code class="language-text"># 查看 rollout 狀態
kubectl rollout status deployment/myapp

# 查看修訂版本歷史
kubectl rollout history deployment/myapp
kubectl rollout history deployment/myapp --revision=2

# 回滾到上一個版本
kubectl rollout undo deployment/myapp

# 回滾到特定版本
kubectl rollout undo deployment/myapp --to-revision=3

# 暫停和恢復 rollout（多次變更後一次套用）
kubectl rollout pause deployment/myapp
# ... 進行多次 kubectl set image / kubectl patch ...
kubectl rollout resume deployment/myapp

# 重啟（觸發 rolling restart）
kubectl rollout restart deployment/myapp</code></pre>

<h2 id="trigger-update">3. 觸發更新</h2>

<pre><code class="language-text"># 方法 1: 直接設定 image
kubectl set image deployment/myapp app=nginx:1.25 --record

# 方法 2: kubectl edit
kubectl edit deployment myapp

# 方法 3: kubectl patch
kubectl patch deployment myapp -p '{"spec":{"template":{"spec":{"containers":[{"name":"app","image":"nginx:1.25"}]}}}}'

# 方法 4: 修改 YAML 檔案並 apply
kubectl apply -f deployment.yaml</code></pre>

<h2 id="revision-history">4. 版本紀錄管理</h2>

<pre><code class="language-text">spec:
  revisionHistoryLimit: 10   # 保留的 ReplicaSet 數量（預設 10）

# 使用 --record 記錄變更原因（已棄用但仍可用）
kubectl set image deployment/myapp app=nginx:1.25 --record

# 使用 annotation 替代 --record（推薦方式）
kubectl annotate deployment/myapp kubernetes.io/change-cause="upgrade to 1.25"

# 查看各版本的變更記錄
kubectl rollout history deployment/myapp
REVISION  CHANGE-CAUSE
1         kubectl create --filename=deploy.yaml
2         upgrade to 1.25
3         upgrade to 1.26</code></pre>

<h2 id="cheatsheet">5. 速查表</h2>

<table>
<thead><tr><th>任務</th><th>指令</th></tr></thead>
<tbody>
<tr><td>更新映像檔</td><td><code>kubectl set image deploy/app c=img:tag</code></td></tr>
<tr><td>回滾</td><td><code>kubectl rollout undo deploy/app</code></td></tr>
<tr><td>回滾到指定版本</td><td><code>kubectl rollout undo deploy/app --to-revision=N</code></td></tr>
<tr><td>查看 rollout 進度</td><td><code>kubectl rollout status deploy/app</code></td></tr>
<tr><td>查看歷史版本</td><td><code>kubectl rollout history deploy/app</code></td></tr>
<tr><td>暫停 rollout</td><td><code>kubectl rollout pause deploy/app</code></td></tr>
</tbody>
</table>

<h2 id="practice">6. 練習題</h2>

<p><strong>Q1:</strong> 一個 Deployment 有 replicas=10, maxSurge=3, maxUnavailable=0。Rolling update 期間最多同時存在多少個 Pod？</p>
<ul>
<li>A) 10</li>
<li>B) 13 ✓</li>
<li>C) 7</li>
<li>D) 3</li>
</ul>
<p><em>解析: maxSurge=3 允許超出 desired 數量最多 3 個 Pod → 10 + 3 = 13。maxUnavailable=0 表示任何時候都必須至少有 10 個 Pod 可用。此設定確保零停機更新，但消耗更多資源。</em></p>

<p><strong>Q2:</strong> 您剛部署了新版本的映像檔，發現有 bug。最快回滾到上一個版本的指令是什麼？</p>
<ul>
<li>A) <code>kubectl rollout restart deployment/myapp</code></li>
<li>B) <code>kubectl rollout undo deployment/myapp</code> ✓</li>
<li>C) <code>kubectl delete deployment myapp && kubectl apply -f old.yaml</code></li>
<li>D) <code>kubectl set image deployment/myapp app=previous-image</code></li>
</ul>
<p><em>解析: kubectl rollout undo 立即回滾到上一個版本（revision N-1）。不需要記住舊映像檔名稱或保留舊 YAML 檔案。也可以用 --to-revision=N 回滾到特定版本。</em></p>

<p><strong>Q3:</strong> Deployment 使用 Recreate 策略。更新觸發時會發生什麼？</p>
<ul>
<li>A) 逐步替換 Pod，保持服務可用</li>
<li>B) 先刪除所有舊 Pod，然後建立新 Pod（有停機） ✓</li>
<li>C) 建立新的 ReplicaSet，在流量切換前驗證</li>
<li>D) 同時運行舊版和新版 Pod</li>
</ul>
<p><em>解析: Recreate 策略先終止所有現有 Pod，等全部停止後再建立新版本的 Pod。這會導致停機時間，但避免多版本同時運行的問題（如資料庫 schema 不相容的情況）。</em></p>
