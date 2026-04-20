---
id: ckad-d1-l02
title: 'レッスン2: Jobs, CronJobs & Resource Management'
slug: 02-jobs-cronjobs-resources
description: >-
  Kubernetes Jobs（completions、parallelism、backoffLimit）、CronJob schedule構文、
  concurrencyPolicy。Resource requests/limits、QoSクラスの基礎とLimitRange/ResourceQuota。
duration_minutes: 55
is_free: true
video_url: null
sort_order: 2
section_title: "ドメイン1: Application Design and Build (20%)"
course:
  id: lt-ckad-series-001
  title: 'CKAD試験対策 — Certified Kubernetes Application Developer'
  slug: luyen-thi-ckad
---

<img src="/storage/uploads/2026/04/k8s-cert-ckad-bai2-jobs-resources.png" alt="Jobs、CronJobs & Resource Management — completions、parallelism、QoSクラス" style="max-width: 800px; width: 100%; border-radius: 12px;" />

<h2 id="jobs">1. Jobs</h2>

<p>Jobは<strong>完了まで実行して終了する</strong>タスクを作成します（Deploymentの常駐型とは異なる）。</p>

<pre><code class="language-text">apiVersion: batch/v1
kind: Job
metadata:
  name: pi-calculator
spec:
  completions: 5       # 合計5回成功する必要あり
  parallelism: 2       # 同時に2つのPodを実行
  backoffLimit: 4      # 最大4回リトライして失敗
  activeDeadlineSeconds: 300  # 最大300秒で全体タイムアウト
  template:
    spec:
      restartPolicy: Never  # JobではNeverまたはOnFailure
      containers:
      - name: pi
        image: perl:5.34
        command: ["perl", "-Mbignum=bpi", "-wle", "print bpi(2000)"]</code></pre>

<table>
<thead><tr><th>フィールド</th><th>デフォルト</th><th>意味</th></tr></thead>
<tbody>
<tr><td><code>completions</code></td><td>1</td><td>成功完了が必要な回数</td></tr>
<tr><td><code>parallelism</code></td><td>1</td><td>同時実行Podの最大数</td></tr>
<tr><td><code>backoffLimit</code></td><td>6</td><td>失敗リトライの最大回数</td></tr>
<tr><td><code>activeDeadlineSeconds</code></td><td>なし</td><td>Job全体の最大実行時間</td></tr>
</tbody>
</table>

<blockquote><p><strong>試験のポイント:</strong> Jobの<code>restartPolicy</code>は<code>Never</code>または<code>OnFailure</code>のみ。<code>Always</code>は使えません（Jobは完了して終了するため）。<code>backoffLimit</code>に達すると、JobはFailed状態になりPodの作成を停止します。</p></blockquote>

<h2 id="cronjobs">2. CronJobs</h2>

<pre><code class="language-text">apiVersion: batch/v1
kind: CronJob
metadata:
  name: daily-backup
spec:
  schedule: "0 2 * * *"   # 毎日2:00 AM (cron構文)
  concurrencyPolicy: Forbid
  successfulJobsHistoryLimit: 3
  failedJobsHistoryLimit: 1
  startingDeadlineSeconds: 200
  jobTemplate:
    spec:
      template:
        spec:
          restartPolicy: OnFailure
          containers:
          - name: backup
            image: backup-tool:latest
            command: ["/bin/sh", "-c", "backup.sh"]</code></pre>

<table>
<thead><tr><th>concurrencyPolicy</th><th>動作</th></tr></thead>
<tbody>
<tr><td><strong>Allow</strong>（デフォルト）</td><td>前のJobが終わっていなくても新しいJobを作成</td></tr>
<tr><td><strong>Forbid</strong></td><td>前のJobが実行中なら新しいJobをスキップ</td></tr>
<tr><td><strong>Replace</strong></td><td>前のJobをキャンセルして新しいJobを開始</td></tr>
</tbody>
</table>

<pre><code class="language-text">Cron構文:
  ┌───────────── 分 (0 - 59)
  │ ┌─────────── 時 (0 - 23)
  │ │ ┌───────── 日 (1 - 31)
  │ │ │ ┌─────── 月 (1 - 12)
  │ │ │ │ ┌───── 曜日 (0 - 6, 0=日曜)
  │ │ │ │ │
  * * * * *

例:
  "*/5 * * * *"   = 5分ごと
  "0 */2 * * *"   = 2時間ごと
  "0 9 * * 1-5"   = 平日の9:00 AM</code></pre>

<h2 id="resources">3. Resource Requests & Limits（基礎）</h2>

<pre><code class="language-text">resources:
  requests:
    cpu: "250m"      # スケジューリング用の最小CPU保証
    memory: "128Mi"  # 最小メモリ保証
  limits:
    cpu: "500m"      # 最大CPU（超過するとスロットリング）
    memory: "256Mi"  # 最大メモリ（超過するとOOMKilled）</code></pre>

<h2 id="qos-intro">4. QoSクラス（概要）</h2>

<table>
<thead><tr><th>QoSクラス</th><th>条件</th><th>退避優先度</th></tr></thead>
<tbody>
<tr><td><strong>Guaranteed</strong></td><td>CPUとメモリ両方でrequests == limits（全コンテナ）</td><td>最低（最後に退避）</td></tr>
<tr><td><strong>Burstable</strong></td><td>少なくとも1つのコンテナにrequest/limitあり、Guaranteedの条件を満たさない</td><td>中間</td></tr>
<tr><td><strong>BestEffort</strong></td><td>request/limitが一切なし</td><td>最高（最初に退避）</td></tr>
</tbody>
</table>

<h2 id="limitrange-quota">5. LimitRange & ResourceQuota</h2>

<table>
<thead><tr><th>リソース</th><th>スコープ</th><th>用途</th></tr></thead>
<tbody>
<tr><td><strong>LimitRange</strong></td><td>個々のPod/Container</td><td>デフォルトのrequests/limitsを設定、最大/最小を制限</td></tr>
<tr><td><strong>ResourceQuota</strong></td><td>Namespace全体</td><td>合計CPU/メモリ/Podの上限を設定</td></tr>
</tbody>
</table>

<pre><code class="language-text"># ResourceQuotaの例
apiVersion: v1
kind: ResourceQuota
metadata:
  name: dev-quota
spec:
  hard:
    requests.cpu: "4"
    requests.memory: 8Gi
    limits.cpu: "8"
    limits.memory: 16Gi
    pods: "20"</code></pre>

<h2 id="cheatsheet">6. チートシート</h2>

<table>
<thead><tr><th>タスク</th><th>コマンド</th></tr></thead>
<tbody>
<tr><td>Jobを素早く作成</td><td><code>kubectl create job myjob --image=busybox -- echo hi</code></td></tr>
<tr><td>CronJobを作成</td><td><code>kubectl create cronjob mycron --image=busybox --schedule="*/5 * * * *" -- echo hi</code></td></tr>
<tr><td>Jobの状態確認</td><td><code>kubectl get jobs</code></td></tr>
<tr><td>QoSクラス確認</td><td><code>kubectl describe pod &lt;name&gt; | grep -i qos</code></td></tr>
<tr><td>リソース使用量</td><td><code>kubectl top pods</code></td></tr>
</tbody>
</table>

<h2 id="practice">7. 練習問題</h2>

<p><strong>Q1:</strong> completions: 6、parallelism: 2のJobがあります。Podは何回作成されますか？</p>
<ul>
<li>A) 2</li>
<li>B) 6 ✓</li>
<li>C) 8</li>
<li>D) 12</li>
</ul>
<p><em>解説: completionsは成功完了が必要なPodの総数です。parallelismは同時に実行するPodの数です。合計6つのPodが作成されますが、同時に実行されるのは最大2つです。全体の実行時間は短縮されますが、Podの総数は変わりません。</em></p>

<p><strong>Q2:</strong> concurrencyPolicy: ForbidのCronJobで、スケジュール時間に前のJobがまだ実行中の場合、何が起こりますか？</p>
<ul>
<li>A) 前のJobをキャンセルして新しいJobを開始する</li>
<li>B) 前のJobと並行して新しいJobを実行する</li>
<li>C) 新しいJobの実行をスキップする ✓</li>
<li>D) 前のJobをキューに入れる</li>
</ul>
<p><em>解説: Forbidは前のJobが実行中の場合、新しい実行を完全にスキップします。これによりバックアップジョブの重複実行などを防止できます。Allowの場合は並行実行を許可し、Replaceの場合は前のJobをキャンセルします。</em></p>

<p><strong>Q3:</strong> コンテナのresourcesにrequests: cpu=500m, memory=256Mi、limits: cpu=500m, memory=256Miが設定されています。このPodのQoSクラスは何ですか？</p>
<ul>
<li>A) BestEffort</li>
<li>B) Burstable</li>
<li>C) Guaranteed ✓</li>
<li>D) Critical</li>
</ul>
<p><em>解説: Guaranteedの条件は、すべてのコンテナでCPUとメモリ両方のrequestsがlimitsと等しいことです。ここではcpu requests(500m) == cpu limits(500m)、memory requests(256Mi) == memory limits(256Mi)なので、QoSクラスはGuaranteedです。</em></p>
