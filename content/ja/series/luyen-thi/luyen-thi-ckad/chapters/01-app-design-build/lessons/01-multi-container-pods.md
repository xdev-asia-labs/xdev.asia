---
id: ckad-d1-l01
title: 'レッスン1: マルチコンテナPod & Init Containers'
slug: 01-multi-container-pods
description: >-
  Sidecar、Ambassador、Adapterパターン。Init Containersの仕組みとユースケース。
  通常コンテナとの違い、実践的なYAML例とCKAD練習問題。
duration_minutes: 55
is_free: true
video_url: null
sort_order: 1
section_title: "ドメイン1: Application Design and Build (20%)"
course:
  id: lt-ckad-series-001
  title: 'CKAD試験対策 — Certified Kubernetes Application Developer'
  slug: luyen-thi-ckad
---

<img src="/storage/uploads/2026/04/k8s-cert-ckad-bai1-multi-container.png" alt="マルチコンテナPodパターン — Sidecar、Ambassador、Adapter" style="max-width: 800px; width: 100%; border-radius: 12px;" />

<h2 id="patterns">1. マルチコンテナPodパターン</h2>

<table>
<thead><tr><th>パターン</th><th>機能</th><th>例</th></tr></thead>
<tbody>
<tr><td><strong>Sidecar</strong></td><td>メインコンテナの機能を拡張（logging、monitoringなど）</td><td>Fluentdでログ収集、Envoy proxy</td></tr>
<tr><td><strong>Ambassador</strong></td><td>外部サービスへのProxy/Load Balancer</td><td>Redis proxy、DB connection pooler</td></tr>
<tr><td><strong>Adapter</strong></td><td>メインコンテナの出力を標準化</td><td>ログフォーマット変換、metrics変換</td></tr>
</tbody>
</table>

<pre><code class="language-text">Sidecar Pattern:

  ┌──────────────────────────────────┐
  │           Pod                     │
  │  ┌─────────────┐ ┌────────────┐  │
  │  │  Main App    │ │  Sidecar   │  │
  │  │  (nginx)     │ │  (fluentd) │  │
  │  └──────┬───────┘ └─────┬──────┘  │
  │         │    shared     │          │
  │         └──── volume ───┘          │
  │              /var/log              │
  └──────────────────────────────────┘</code></pre>

<h2 id="multi-container-yaml">2. マルチコンテナPod YAML</h2>

<pre><code class="language-text">apiVersion: v1
kind: Pod
metadata:
  name: multi-container-pod
spec:
  containers:
  - name: app                    # メインコンテナ
    image: nginx:1.25
    ports:
    - containerPort: 80
    volumeMounts:
    - name: shared-logs
      mountPath: /var/log/nginx

  - name: sidecar-logger         # Sidecarコンテナ
    image: fluentd:v1.16
    volumeMounts:
    - name: shared-logs
      mountPath: /var/log/nginx  # 同じvolumeをマウント
      readOnly: true

  volumes:
  - name: shared-logs
    emptyDir: {}                 # Pod内コンテナ間の共有storage</code></pre>

<blockquote><p><strong>試験のポイント:</strong> CKADでは<strong>Sidecar</strong>パターンが最も頻出。同じPod内のコンテナはネットワーク（localhost）とストレージ（shared volumes）を共有します。<code>emptyDir</code>はPodの存在期間中だけ存在する一時ストレージです。</p></blockquote>

<h2 id="init-containers">3. Init Containers</h2>

<p>Init Containersはメインコンテナの<strong>前に</strong>順番に実行されます。すべてのInit Containerが成功した後にメインコンテナが起動します。</p>

<pre><code class="language-text">apiVersion: v1
kind: Pod
metadata:
  name: init-demo
spec:
  initContainers:
  - name: wait-for-db           # Init 1: DBの起動を待つ
    image: busybox
    command: ['sh', '-c', 'until nc -z db-service 5432; do sleep 2; done']

  - name: db-migrate            # Init 2: マイグレーション実行
    image: myapp:migrate
    command: ['python', 'manage.py', 'migrate']

  containers:
  - name: app                   # Init成功後に起動
    image: myapp:latest
    ports:
    - containerPort: 8080</code></pre>

<h2 id="init-vs-regular">4. Init Containers vs 通常のコンテナ</h2>

<table>
<thead><tr><th>特徴</th><th>Init Containers</th><th>通常のコンテナ</th></tr></thead>
<tbody>
<tr><td>実行タイミング</td><td>メインコンテナの<strong>前</strong>に順番に実行</td><td>同時並行で実行</td></tr>
<tr><td>完了条件</td><td>成功して終了（exit 0）<strong>する必要がある</strong></td><td>継続的に実行</td></tr>
<tr><td>失敗時の動作</td><td>成功するまで再起動</td><td>restartPolicyに従う</td></tr>
<tr><td>Probes</td><td>Probes未対応</td><td>liveness/readiness/startup対応</td></tr>
<tr><td>ユースケース</td><td>前提条件チェック、データ初期化</td><td>アプリケーション実行</td></tr>
</tbody>
</table>

<h2 id="cheatsheet">5. チートシート</h2>

<table>
<thead><tr><th>タスク</th><th>コマンド</th></tr></thead>
<tbody>
<tr><td>Podのコンテナ一覧</td><td><code>kubectl describe pod &lt;name&gt;</code></td></tr>
<tr><td>特定コンテナのログ</td><td><code>kubectl logs &lt;pod&gt; -c &lt;container&gt;</code></td></tr>
<tr><td>Init containerのログ</td><td><code>kubectl logs &lt;pod&gt; -c &lt;init-container&gt;</code></td></tr>
<tr><td>コンテナにexec</td><td><code>kubectl exec -it &lt;pod&gt; -c &lt;container&gt; -- sh</code></td></tr>
</tbody>
</table>

<h2 id="practice">6. 練習問題</h2>

<p><strong>Q1:</strong> Pod内にnginxコンテナとfluentd sidecarコンテナがあります。nginxが/var/log/nginx/にログを書き込みます。fluentdがそのログを読むにはどうすればよいですか？</p>
<ul>
<li>A) Fluentdがlocalhostのnginxのファイルシステムにアクセスする</li>
<li>B) /var/log/nginx/にemptyDirボリュームをマウントし、両コンテナで共有する ✓</li>
<li>C) FluentdがnginxログをHTTP経由でpullする</li>
<li>D) hostPathボリュームを使用する</li>
</ul>
<p><em>解説: 同じPod内のコンテナはemptyDirボリュームでストレージを共有できます。両コンテナが同じパスにボリュームをマウントします。emptyDirはPodのライフサイクルに紐づいた一時ストレージです。コンテナは直接お互いのファイルシステムにアクセスできません。</em></p>

<p><strong>Q2:</strong> Init Containerが失敗した場合、Podの動作はどうなりますか？</p>
<ul>
<li>A) 失敗したInit Containerをスキップしてメインコンテナを起動する</li>
<li>B) Init Containerを成功するまで再起動する（PodのrestartPolicyに従う） ✓</li>
<li>C) Pod全体が直ちに削除される</li>
<li>D) メインコンテナは起動するが「degraded」状態で実行される</li>
</ul>
<p><em>解説: Init Containerが失敗すると、KubernetesはPodのrestartPolicyに従って再起動を試みます。すべてのInit Containerが成功するまでメインコンテナは起動しません。restartPolicy: Neverの場合、Podは失敗状態のままになります。</em></p>

<p><strong>Q3:</strong> 以下のうちInit Containersの有効なユースケースはどれですか？</p>
<ul>
<li>A) アプリケーションの継続的なヘルスチェック</li>
<li>B) メインアプリが起動する前にデータベースの可用性を確認する ✓</li>
<li>C) Sidecarとしてのログ収集</li>
<li>D) Service endpointとしてのトラフィック提供</li>
</ul>
<p><em>解説: Init Containersは前提条件チェックに最適です — 依存サービスの待機、設定ファイルの生成、データベースのマイグレーションなど。完了まで実行されて終了するものであり、メインアプリのような継続実行タスクには不向きです。</em></p>
