---
id: ckad-d1-l02
title: '第2課: Jobs、CronJobs 與 Resource Management'
slug: 02-jobs-cronjobs-resources
description: >-
  Kubernetes Jobs（completions、parallelism、backoffLimit）與 CronJobs（排程語法、
  concurrencyPolicy）。Resource requests/limits 基礎與 LimitRange/ResourceQuota。
duration_minutes: 50
is_free: true
video_url: null
sort_order: 2
section_title: "領域1: Application Design and Build (20%)"
course:
  id: lt-ckad-series-001
  title: 'CKAD 認證備考 — Certified Kubernetes Application Developer'
  slug: luyen-thi-ckad
---

<img src="/storage/uploads/2026/04/k8s-cert-ckad-bai2-jobs-cronjobs.png" alt="Jobs 與 CronJobs — completions、parallelism 與排程" style="max-width: 800px; width: 100%; border-radius: 12px;" />

<h2 id="jobs">1. Jobs</h2>

<p>Job 建立一或多個 Pod 並確保指定數量成功完成。</p>

<pre><code class="language-text">apiVersion: batch/v1
kind: Job
metadata:
  name: data-process
spec:
  completions: 5        # 需要成功完成 5 次
  parallelism: 2        # 同時運行 2 個 Pod
  backoffLimit: 4       # 最多重試 4 次後標記為失敗
  activeDeadlineSeconds: 300  # 300 秒後逾時
  template:
    spec:
      restartPolicy: Never   # Job 必須: Never 或 OnFailure
      containers:
      - name: worker
        image: busybox
        command: ["sh", "-c", "echo Processing && sleep 10"]</code></pre>

<table>
<thead><tr><th>欄位</th><th>說明</th><th>預設值</th></tr></thead>
<tbody>
<tr><td><code>completions</code></td><td>需要成功完成的 Pod 數</td><td>1</td></tr>
<tr><td><code>parallelism</code></td><td>同時運行的 Pod 數</td><td>1</td></tr>
<tr><td><code>backoffLimit</code></td><td>允許的最大重試次數</td><td>6</td></tr>
<tr><td><code>activeDeadlineSeconds</code></td><td>Job 整體逾時（秒）</td><td>無限制</td></tr>
<tr><td><code>restartPolicy</code></td><td>必須為 <code>Never</code> 或 <code>OnFailure</code></td><td>—</td></tr>
</tbody>
</table>

<pre><code class="language-text"># 快速建立 Job
kubectl create job myjob --image=busybox -- echo "hello"

# 查看 Job 狀態
kubectl get jobs
kubectl describe job data-process

# 查看 Job 建立的 Pods
kubectl get pods --selector=job-name=data-process</code></pre>

<h2 id="cronjobs">2. CronJobs</h2>

<pre><code class="language-text">apiVersion: batch/v1
kind: CronJob
metadata:
  name: nightly-backup
spec:
  schedule: "0 2 * * *"         # 每天凌晨 2:00
  concurrencyPolicy: Forbid     # 不允許同時執行多個 Job
  successfulJobsHistoryLimit: 3
  failedJobsHistoryLimit: 1
  startingDeadlineSeconds: 200  # 排程錯過 200 秒後跳過
  jobTemplate:
    spec:
      template:
        spec:
          restartPolicy: OnFailure
          containers:
          - name: backup
            image: postgres:15
            command: ["pg_dump", "-h", "db-svc", "-U", "admin", "mydb"]</code></pre>

<pre><code class="language-text">Cron 語法: ┌───── 分鐘 (0-59)
            │ ┌───── 小時 (0-23)
            │ │ ┌───── 日 (1-31)
            │ │ │ ┌───── 月 (1-12)
            │ │ │ │ ┌───── 星期 (0-6, 0=週日)
            │ │ │ │ │
            * * * * *
            
範例:
  */5 * * * *     每 5 分鐘
  0 */2 * * *     每 2 小時
  0 2 * * *       每天 02:00
  0 0 * * 0       每週日 00:00</code></pre>

<table>
<thead><tr><th>concurrencyPolicy</th><th>說明</th></tr></thead>
<tbody>
<tr><td><strong>Allow</strong>（預設）</td><td>允許多個 Job 同時執行</td></tr>
<tr><td><strong>Forbid</strong></td><td>前一個 Job 未完成則跳過本次排程</td></tr>
<tr><td><strong>Replace</strong></td><td>取消前一個 Job，啟動新的</td></tr>
</tbody>
</table>

<h2 id="resources">3. Resource 管理基礎</h2>

<pre><code class="language-text">resources:
  requests:
    cpu: "250m"      # 排程保證最低 CPU
    memory: "128Mi"  # 排程保證最低記憶體
  limits:
    cpu: "500m"      # 最大 CPU（超過被節流）
    memory: "256Mi"  # 最大記憶體（超過被 OOMKilled）</code></pre>

<table>
<thead><tr><th>QoS 等級</th><th>條件</th></tr></thead>
<tbody>
<tr><td><strong>Guaranteed</strong></td><td>CPU 和 Memory 的 requests == limits</td></tr>
<tr><td><strong>Burstable</strong></td><td>至少設定一個 request 或 limit，但不符合 Guaranteed</td></tr>
<tr><td><strong>BestEffort</strong></td><td>完全沒有設定 requests 和 limits</td></tr>
</tbody>
</table>

<blockquote><p><strong>考試重點:</strong> Job 的 <code>restartPolicy</code> 只能設定 <code>Never</code> 或 <code>OnFailure</code>，不能使用 <code>Always</code>（Deployment 的預設值）。如果 CronJob 排程錯過的時間超過 <code>startingDeadlineSeconds</code>，該次排程會被跳過。</p></blockquote>

<h2 id="cheatsheet">4. 速查表</h2>

<table>
<thead><tr><th>任務</th><th>指令</th></tr></thead>
<tbody>
<tr><td>建立 Job</td><td><code>kubectl create job name --image=img -- cmd</code></td></tr>
<tr><td>建立 CronJob</td><td><code>kubectl create cj name --image=img --schedule="* * * * *" -- cmd</code></td></tr>
<tr><td>查看 Job 的 Pods</td><td><code>kubectl get pods -l job-name=name</code></td></tr>
<tr><td>暫停 CronJob</td><td><code>kubectl patch cj name -p '{"spec":{"suspend":true}}'</code></td></tr>
<tr><td>查看 QoS</td><td><code>kubectl describe pod name | grep -i qos</code></td></tr>
</tbody>
</table>

<h2 id="practice">5. 練習題</h2>

<p><strong>Q1:</strong> 一個 Job 設定了 completions: 3、parallelism: 2。Job 的執行行為是什麼？</p>
<ul>
<li>A) 啟動 3 個 Pod，每次 2 個並行，需要 2 個成功即可</li>
<li>B) 最多同時運行 2 個 Pod，直到累計 3 個 Pod 成功完成 ✓</li>
<li>C) 啟動 2 個 Pod，每個運行 3 次</li>
<li>D) 啟動 3 個 Pod 全部並行運行</li>
</ul>
<p><em>解析: completions=3 表示需要 3 次成功。parallelism=2 表示同時最多運行 2 個 Pod。因此先啟動 2 個 Pod，當某個完成後再啟動下一個，直到累計 3 個成功。</em></p>

<p><strong>Q2:</strong> Job Pod 的 restartPolicy 設定為 Always。會發生什麼？</p>
<ul>
<li>A) Job 正常運行，Pod 失敗後自動重啟</li>
<li>B) API Server 拒絕建立 Job，因為 restartPolicy 無效 ✓</li>
<li>C) Pod 運行一次後永遠保持 Running 狀態</li>
<li>D) Job controller 自動將 restartPolicy 改為 Never</li>
</ul>
<p><em>解析: Job 的 restartPolicy 只允許 Never 或 OnFailure。Always（Deployment 預設值）不適用於 Job — 因為 Job 的 Pod 應該運行完畢後退出，而非永遠重啟。API Server 會在驗證階段拒絕此 spec。</em></p>

<p><strong>Q3:</strong> CronJob 設定了 concurrencyPolicy: Forbid，前一次排程的 Job 仍在執行中。到了下一次排程時間。會發生什麼？</p>
<ul>
<li>A) 建立新 Job 並取消前一個</li>
<li>B) 兩個 Job 並行執行</li>
<li>C) 跳過本次排程，不建立新 Job ✓</li>
<li>D) 將本次排程加入佇列，等前一個完成後執行</li>
</ul>
<p><em>解析: Forbid 表示當前有 Job 仍在執行時，不允許啟動新的 Job。本次排程會被跳過。Replace 策略則會取消現有 Job 並啟動新的。Allow（預設）允許多個 Job 同時執行。</em></p>
