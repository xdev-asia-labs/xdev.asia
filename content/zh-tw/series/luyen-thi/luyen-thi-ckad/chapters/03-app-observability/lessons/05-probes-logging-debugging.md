---
id: ckad-d3-l05
title: '第5課: Probes、Logging 與 Debugging'
slug: 05-probes-logging-debugging
description: >-
  Liveness/Readiness/Startup Probe 的設定與使用場景。kubectl logs、exec、debug、
  port-forward 除錯指令。Pod 狀態與常見故障模式。
duration_minutes: 55
is_free: true
video_url: null
sort_order: 5
section_title: "領域3: Application Observability and Maintenance (15%)"
course:
  id: lt-ckad-series-001
  title: 'CKAD 認證備考 — Certified Kubernetes Application Developer'
  slug: luyen-thi-ckad
---

<img src="/storage/uploads/2026/04/k8s-cert-ckad-bai5-probes-debugging.png" alt="Probes、Logging 與 Debugging — Liveness、Readiness、Startup Probe 時間線" style="max-width: 800px; width: 100%; border-radius: 12px;" />

<h2 id="probe-types">1. 三種 Probe 類型</h2>

<table>
<thead><tr><th>Probe</th><th>用途</th><th>失敗時行為</th></tr></thead>
<tbody>
<tr><td><strong>Liveness</strong></td><td>檢測容器是否正常運行</td><td>重啟容器</td></tr>
<tr><td><strong>Readiness</strong></td><td>檢測容器是否準備好接收流量</td><td>從 Service endpoints 移除（不重啟）</td></tr>
<tr><td><strong>Startup</strong></td><td>檢測應用程式是否完成啟動</td><td>重啟容器（成功前 liveness/readiness 被停用）</td></tr>
</tbody>
</table>

<pre><code class="language-text">Probe 時間線:

  容器啟動 ──► Startup Probe（檢查中...）──► 成功 ──► Liveness + Readiness 開始
                                              │
                                              ▼
                               達到 failureThreshold ──► 重啟容器</code></pre>

<h2 id="probe-methods">2. Probe 方法與設定</h2>

<pre><code class="language-text"># httpGet — 發送 HTTP GET 請求
livenessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 15    # 首次檢查前的等待時間
  periodSeconds: 10          # 檢查間隔
  timeoutSeconds: 3          # 逾時時間
  failureThreshold: 3        # 連續失敗幾次判定為失敗
  successThreshold: 1        # 連續成功幾次判定為成功

# tcpSocket — 嘗試建立 TCP 連線
readinessProbe:
  tcpSocket:
    port: 3306

# exec — 在容器內執行指令（exit 0 = 成功）
livenessProbe:
  exec:
    command:
    - cat
    - /tmp/healthy</code></pre>

<table>
<thead><tr><th>設定欄位</th><th>預設值</th><th>說明</th></tr></thead>
<tbody>
<tr><td><code>initialDelaySeconds</code></td><td>0</td><td>容器啟動後首次 Probe 前的等待秒數</td></tr>
<tr><td><code>periodSeconds</code></td><td>10</td><td>Probe 執行間隔（秒）</td></tr>
<tr><td><code>timeoutSeconds</code></td><td>1</td><td>Probe 逾時秒數</td></tr>
<tr><td><code>failureThreshold</code></td><td>3</td><td>判定失敗的連續失敗次數</td></tr>
<tr><td><code>successThreshold</code></td><td>1</td><td>判定成功的連續成功次數（readiness 可設 >1）</td></tr>
</tbody>
</table>

<blockquote><p><strong>考試重點:</strong> 啟動較慢的應用程式（如 Java/Spring Boot）應使用 <code>startupProbe</code>。Startup Probe 成功前，Liveness Probe 不會執行，避免應用程式在初始化期間被誤判為異常而重啟。CKAD 常考三種 Probe 的正確使用場景。</p></blockquote>

<h2 id="logging">3. kubectl logs</h2>

<pre><code class="language-text"># 查看 Pod 日誌
kubectl logs mypod

# 查看特定容器的日誌（multi-container Pod）
kubectl logs mypod -c sidecar

# 即時追蹤日誌
kubectl logs mypod -f

# 最近 1 小時的日誌
kubectl logs mypod --since=1h

# 最近 100 行日誌
kubectl logs mypod --tail=100

# 前一個容器實例的日誌（重啟後）
kubectl logs mypod --previous</code></pre>

<h2 id="debugging">4. 除錯指令</h2>

<pre><code class="language-text"># 在容器內執行指令
kubectl exec -it mypod -- sh
kubectl exec mypod -- cat /etc/config/app.conf

# Port forward（從本機直接存取 Pod）
kubectl port-forward mypod 8080:80
kubectl port-forward svc/myservice 8080:80

# Ephemeral debug container（注入到運行中的 Pod）
kubectl debug mypod -it --image=busybox --target=app

# 從 Pod 複製檔案
kubectl cp mypod:/var/log/app.log ./app.log
kubectl cp ./config.yaml mypod:/etc/config/</code></pre>

<h2 id="pod-states">5. 常見 Pod 狀態</h2>

<table>
<thead><tr><th>狀態</th><th>原因</th><th>排查方式</th></tr></thead>
<tbody>
<tr><td><strong>CrashLoopBackOff</strong></td><td>容器反覆崩潰</td><td><code>kubectl logs --previous</code> 查看日誌</td></tr>
<tr><td><strong>ImagePullBackOff</strong></td><td>映像檔拉取失敗</td><td>確認映像檔名稱、標籤、registry 權限</td></tr>
<tr><td><strong>Pending</strong></td><td>無法排程</td><td>檢查節點資源、taints/tolerations、PVC</td></tr>
<tr><td><strong>OOMKilled</strong></td><td>超出記憶體限制</td><td>增加 <code>resources.limits.memory</code></td></tr>
<tr><td><strong>Error</strong></td><td>容器以非零退出碼結束</td><td>查看日誌和指令</td></tr>
</tbody>
</table>

<h2 id="cheatsheet">6. 速查表</h2>

<table>
<thead><tr><th>任務</th><th>指令</th></tr></thead>
<tbody>
<tr><td>查看崩潰 Pod 的原因</td><td><code>kubectl logs pod --previous</code></td></tr>
<tr><td>進入 Pod 互動式調查</td><td><code>kubectl exec -it pod -- sh</code></td></tr>
<tr><td>從本機存取 Pod</td><td><code>kubectl port-forward pod 8080:80</code></td></tr>
<tr><td>注入除錯容器</td><td><code>kubectl debug pod -it --image=busybox</code></td></tr>
<tr><td>查看 Pod 詳情和事件</td><td><code>kubectl describe pod name</code></td></tr>
</tbody>
</table>

<h2 id="practice">7. 練習題</h2>

<p><strong>Q1:</strong> 應用程式啟動需要 60 秒。livenessProbe 在啟動期間重啟容器，導致 CrashLoopBackOff。最佳解決方案是什麼？</p>
<ul>
<li>A) 將 livenessProbe 的 initialDelaySeconds 增加到 120</li>
<li>B) 移除 livenessProbe</li>
<li>C) 新增具有足夠 failureThreshold 的 startupProbe ✓</li>
<li>D) 用 readinessProbe 替代</li>
</ul>
<p><em>解析: startupProbe 是啟動較慢應用程式的推薦方案。startupProbe 成功前，livenessProbe 和 readinessProbe 會被停用。比增加 initialDelaySeconds 更可靠——因為啟動時間會因負載和環境而變化。</em></p>

<p><strong>Q2:</strong> 容器持續重啟。查看前一個容器實例日誌的指令是什麼？</p>
<ul>
<li>A) <code>kubectl logs mypod --all</code></li>
<li>B) <code>kubectl logs mypod --previous</code> ✓</li>
<li>C) <code>kubectl describe pod mypod</code></li>
<li>D) <code>kubectl get events</code></li>
</ul>
<p><em>解析: --previous 旗標會顯示前一個容器實例的日誌。當容器重啟後，當前日誌可能不包含崩潰資訊。describe 和 events 也有用，但應用層級的錯誤通常記錄在 --previous 日誌中。</em></p>

<p><strong>Q3:</strong> readinessProbe 失敗時會發生什麼？</p>
<ul>
<li>A) 容器被重啟</li>
<li>B) 整個 Pod 被刪除</li>
<li>C) Pod 從對應 Service 的 endpoints 中被移除 ✓</li>
<li>D) Pod 回到 Pending 狀態</li>
</ul>
<p><em>解析: readinessProbe 失敗不會導致容器重啟（與 livenessProbe 不同）。而是將 Pod 從 Service 的 endpoints 列表中移除，新的流量不再發送給它。readinessProbe 再次成功後，Pod 會回到 endpoints 列表中。</em></p>
