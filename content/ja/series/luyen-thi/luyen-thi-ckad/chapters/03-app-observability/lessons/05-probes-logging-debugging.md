---
id: ckad-d3-l05
title: 'レッスン5: Probes, Logging & Debugging'
slug: 05-probes-logging-debugging
description: >-
  Liveness/Readiness/Startup Probeの設定方法と使い分け。kubectl logs、exec、debug、
  port-forwardによるデバッグ。Podのステータスと一般的な障害パターン。
duration_minutes: 55
is_free: true
video_url: null
sort_order: 5
section_title: "ドメイン3: Application Observability and Maintenance (15%)"
course:
  id: lt-ckad-series-001
  title: 'CKAD試験対策 — Certified Kubernetes Application Developer'
  slug: luyen-thi-ckad
---

<img src="/storage/uploads/2026/04/k8s-cert-ckad-bai5-probes-debugging.png" alt="Probes、Logging & Debugging — Liveness、Readiness、Startup Probeのタイムライン" style="max-width: 800px; width: 100%; border-radius: 12px;" />

<h2 id="probe-types">1. 3つのProbeタイプ</h2>

<table>
<thead><tr><th>Probe</th><th>目的</th><th>失敗時の動作</th></tr></thead>
<tbody>
<tr><td><strong>Liveness</strong></td><td>コンテナが正常に動作しているか確認</td><td>コンテナを再起動</td></tr>
<tr><td><strong>Readiness</strong></td><td>コンテナがトラフィックを受け入れる準備ができているか確認</td><td>Serviceのendpointsから削除（再起動はしない）</td></tr>
<tr><td><strong>Startup</strong></td><td>アプリケーションの起動完了を確認</td><td>コンテナを再起動（成功するまでliveness/readinessを無効化）</td></tr>
</tbody>
</table>

<pre><code class="language-text">Probeタイムライン:

  コンテナ起動 ──► Startup Probe (チェック中...) ──► 成功 ──► Liveness + Readiness開始
                                                     │
                                                     ▼
                                      failureThresholdに達すると ──► コンテナ再起動</code></pre>

<h2 id="probe-methods">2. Probeメソッドと設定</h2>

<pre><code class="language-text"># httpGet — HTTP GETリクエストを送信
livenessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 15    # 最初のチェックまでの待機時間
  periodSeconds: 10          # チェック間隔
  timeoutSeconds: 3          # タイムアウト
  failureThreshold: 3        # 失敗判定に必要な連続失敗回数
  successThreshold: 1        # 成功判定に必要な連続成功回数

# tcpSocket — TCPポートへの接続を試行
readinessProbe:
  tcpSocket:
    port: 3306

# exec — コンテナ内でコマンドを実行（exit 0 = 成功）
livenessProbe:
  exec:
    command:
    - cat
    - /tmp/healthy</code></pre>

<table>
<thead><tr><th>設定フィールド</th><th>デフォルト</th><th>説明</th></tr></thead>
<tbody>
<tr><td><code>initialDelaySeconds</code></td><td>0</td><td>コンテナ起動後、最初のProbeまでの待機秒数</td></tr>
<tr><td><code>periodSeconds</code></td><td>10</td><td>Probeの実行間隔（秒）</td></tr>
<tr><td><code>timeoutSeconds</code></td><td>1</td><td>Probeのタイムアウト秒数</td></tr>
<tr><td><code>failureThreshold</code></td><td>3</td><td>失敗と判定する連続失敗回数</td></tr>
<tr><td><code>successThreshold</code></td><td>1</td><td>成功と判定する連続成功回数（readinessのみ1以上設定可能）</td></tr>
</tbody>
</table>

<blockquote><p><strong>試験のポイント:</strong> 起動が遅いアプリケーション（Java/Spring Bootなど）には<code>startupProbe</code>を使います。Startup Probeが成功するまでLiveness Probeは無効化されるため、アプリが初期化中に誤って再起動されることを防ぎます。CKADではこの3つのProbeの正しい使い分けがよく出題されます。</p></blockquote>

<h2 id="logging">3. kubectl logs</h2>

<pre><code class="language-text"># Podのログを表示
kubectl logs mypod

# 特定のコンテナのログ（マルチコンテナPod）
kubectl logs mypod -c sidecar

# ログをリアルタイムで追跡
kubectl logs mypod -f

# 直近1時間のログ
kubectl logs mypod --since=1h

# 直近100行のログ
kubectl logs mypod --tail=100

# 前のコンテナインスタンスのログ（再起動後）
kubectl logs mypod --previous</code></pre>

<h2 id="debugging">4. デバッグコマンド</h2>

<pre><code class="language-text"># コンテナ内でコマンド実行
kubectl exec -it mypod -- sh
kubectl exec mypod -- cat /etc/config/app.conf

# ポートフォワード（ローカルPCからPodに直接アクセス）
kubectl port-forward mypod 8080:80
kubectl port-forward svc/myservice 8080:80

# エフェメラルデバッグコンテナ（running podに追加）
kubectl debug mypod -it --image=busybox --target=app

# Podからファイルをコピー
kubectl cp mypod:/var/log/app.log ./app.log
kubectl cp ./config.yaml mypod:/etc/config/</code></pre>

<h2 id="pod-states">5. 一般的なPodステータス</h2>

<table>
<thead><tr><th>ステータス</th><th>原因</th><th>対処法</th></tr></thead>
<tbody>
<tr><td><strong>CrashLoopBackOff</strong></td><td>コンテナが繰り返しクラッシュ</td><td><code>kubectl logs --previous</code>を確認</td></tr>
<tr><td><strong>ImagePullBackOff</strong></td><td>イメージのpullに失敗</td><td>イメージ名、タグ、レジストリ権限を確認</td></tr>
<tr><td><strong>Pending</strong></td><td>スケジュールできない</td><td>ノードリソース、taints/tolerations、PVCを確認</td></tr>
<tr><td><strong>OOMKilled</strong></td><td>メモリ制限を超過</td><td><code>resources.limits.memory</code>を増加</td></tr>
<tr><td><strong>Error</strong></td><td>コンテナが非ゼロ終了コードで終了</td><td>ログとコマンドを確認</td></tr>
</tbody>
</table>

<h2 id="cheatsheet">6. チートシート</h2>

<table>
<thead><tr><th>タスク</th><th>コマンド</th></tr></thead>
<tbody>
<tr><td>クラッシュしたPodの原因を調査</td><td><code>kubectl logs pod --previous</code></td></tr>
<tr><td>Pod内をインタラクティブに調査</td><td><code>kubectl exec -it pod -- sh</code></td></tr>
<tr><td>ローカルからPodにアクセス</td><td><code>kubectl port-forward pod 8080:80</code></td></tr>
<tr><td>ライブデバッグコンテナを追加</td><td><code>kubectl debug pod -it --image=busybox</code></td></tr>
<tr><td>Podの詳細とイベントを確認</td><td><code>kubectl describe pod name</code></td></tr>
</tbody>
</table>

<h2 id="practice">7. 練習問題</h2>

<p><strong>Q1:</strong> アプリケーションの起動に60秒かかります。起動中にlivenessProbeがコンテナを再起動し、CrashLoopBackOffに陥ります。最適な解決策はどれですか？</p>
<ul>
<li>A) livenessProbeのinitialDelaySecondsを120に増やす</li>
<li>B) livenessProbeを削除する</li>
<li>C) 十分なfailureThresholdを持つstartupProbeを追加する ✓</li>
<li>D) readinessProbeで代替する</li>
</ul>
<p><em>解説: startupProbeは起動時間が長いアプリケーション向けの推奨ソリューションです。startupProbeが成功するまでlivenessProbeとreadinessProbeは無効化されます。initialDelaySecondsを増やすよりも堅牢です — 起動時間は負荷や環境によって変動するためです。</em></p>

<p><strong>Q2:</strong> コンテナが再起動し続けています。前のコンテナインスタンスのログを確認するコマンドはどれですか？</p>
<ul>
<li>A) <code>kubectl logs mypod --all</code></li>
<li>B) <code>kubectl logs mypod --previous</code> ✓</li>
<li>C) <code>kubectl describe pod mypod</code></li>
<li>D) <code>kubectl get events</code></li>
</ul>
<p><em>解説: --previousフラグは前のコンテナインスタンスのログを表示します。コンテナが再起動した場合、現在のログにはクラッシュ情報が含まれていないことがあります。describeとeventsも有用ですが、アプリケーションレベルのエラーは--previousログに記録されています。</em></p>

<p><strong>Q3:</strong> readinessProbeが失敗した場合の動作はどれですか？</p>
<ul>
<li>A) コンテナが再起動される</li>
<li>B) Pod全体が削除される</li>
<li>C) Podが対応するServiceのendpointsから削除される ✓</li>
<li>D) PodがPending状態に戻る</li>
</ul>
<p><em>解説: readinessProbeの失敗はコンテナの再起動を引き起こしません（livenessProbeとは異なる）。代わりに、PodがServiceのendpointsリストから削除され、新しいトラフィックが送られなくなります。readinessProbeが再び成功すると、Podはendpointsに復帰します。</em></p>
