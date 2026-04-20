---
id: ckad-d1-l01
title: '第1課: Multi-container Pods 與 Init Containers'
slug: 01-multi-container-pods
description: >-
  Multi-container Pod 設計模式: Sidecar、Ambassador、Adapter。Init Containers 
  的使用場景與 YAML 配置。Init Containers 與一般 Containers 的差異。
duration_minutes: 50
is_free: true
video_url: null
sort_order: 1
section_title: "領域1: Application Design and Build (20%)"
course:
  id: lt-ckad-series-001
  title: 'CKAD 認證備考 — Certified Kubernetes Application Developer'
  slug: luyen-thi-ckad
---

<img src="/storage/uploads/2026/04/k8s-cert-ckad-bai1-multi-container.png" alt="Multi-container Pod 模式 — Sidecar、Ambassador、Adapter" style="max-width: 800px; width: 100%; border-radius: 12px;" />

<h2 id="multi-container">1. Multi-container Pod 模式</h2>

<p>同一 Pod 中的容器共享<strong>網路</strong>（localhost）和<strong>儲存</strong>（volumes）。以下是三種設計模式：</p>

<table>
<thead><tr><th>模式</th><th>用途</th><th>範例</th></tr></thead>
<tbody>
<tr><td><strong>Sidecar</strong></td><td>輔助或增強主容器</td><td>Log collector、sync agent</td></tr>
<tr><td><strong>Ambassador</strong></td><td>代理外部連線</td><td>本地 proxy → remote DB</td></tr>
<tr><td><strong>Adapter</strong></td><td>統一主容器的輸出格式</td><td>Log 格式轉換器</td></tr>
</tbody>
</table>

<pre><code class="language-text">┌──────────────────── Pod ────────────────────┐
│                                             │
│  ┌─────────────┐    ┌──────────────────┐    │
│  │  app (主)    │    │  log-agent       │    │
│  │  port: 8080  │    │  (Sidecar)       │    │
│  └──────┬───────┘    └────────┬─────────┘    │
│         │    共享 Volume      │              │
│         └────────────────────┘              │
│  共享 localhost 網路                         │
└─────────────────────────────────────────────┘</code></pre>

<h2 id="multi-container-yaml">2. Multi-container Pod YAML</h2>

<pre><code class="language-text">apiVersion: v1
kind: Pod
metadata:
  name: multi-container-pod
spec:
  containers:
  - name: app
    image: nginx
    ports:
    - containerPort: 80
    volumeMounts:
    - name: shared-logs
      mountPath: /var/log/nginx

  - name: log-agent             # Sidecar 容器
    image: busybox
    command: ["sh", "-c", "tail -f /logs/access.log"]
    volumeMounts:
    - name: shared-logs
      mountPath: /logs

  volumes:
  - name: shared-logs
    emptyDir: {}                # Pod 的生命週期內存在</code></pre>

<h2 id="init-containers">3. Init Containers</h2>

<p>Init Containers 在主容器啟動<strong>之前</strong>依序執行。全部成功後主容器才會啟動。</p>

<pre><code class="language-text">apiVersion: v1
kind: Pod
metadata:
  name: init-demo
spec:
  initContainers:
  - name: wait-for-db
    image: busybox
    command: ['sh', '-c', 'until nc -z mysql-svc 3306; do sleep 2; done']

  - name: init-config
    image: busybox
    command: ['sh', '-c', 'echo "config ready" > /work/status']
    volumeMounts:
    - name: workdir
      mountPath: /work

  containers:
  - name: app
    image: myapp:1.0
    volumeMounts:
    - name: workdir
      mountPath: /app/config

  volumes:
  - name: workdir
    emptyDir: {}</code></pre>

<h2 id="init-vs-regular">4. Init Containers vs 一般 Containers</h2>

<table>
<thead><tr><th>特性</th><th>Init Container</th><th>一般 Container</th></tr></thead>
<tbody>
<tr><td>執行順序</td><td>依序執行（一個接一個）</td><td>並行執行</td></tr>
<tr><td>必須完成</td><td>是 — 必須成功退出</td><td>否 — 持續運行</td></tr>
<tr><td>Probes</td><td>不支援</td><td>支援（liveness、readiness、startup）</td></tr>
<tr><td>Ports</td><td>不在 Service endpoints 中</td><td>可暴露 Service</td></tr>
<tr><td>Resources</td><td>影響 Pod 排程（有效 requests）</td><td>累加計算</td></tr>
</tbody>
</table>

<blockquote><p><strong>考試重點:</strong> Init Containers 的常見考題包含：「建立一個 Pod，在主容器啟動前等待 Service 可用」或「使用 Init Container 下載設定檔」。記住 Init Containers 的 YAML 位於 <code>spec.initContainers</code>，與 <code>spec.containers</code> 同層級。</p></blockquote>

<h2 id="cheatsheet">5. 速查表</h2>

<table>
<thead><tr><th>任務</th><th>指令 / YAML</th></tr></thead>
<tbody>
<tr><td>查看特定容器的 logs</td><td><code>kubectl logs pod -c container-name</code></td></tr>
<tr><td>進入特定容器</td><td><code>kubectl exec -it pod -c container -- sh</code></td></tr>
<tr><td>檢查 init container 狀態</td><td><code>kubectl describe pod name</code> → Init Containers 區段</td></tr>
<tr><td>共享檔案系統</td><td>使用 <code>emptyDir</code> volume + <code>volumeMounts</code></td></tr>
<tr><td>容器間通訊</td><td><code>localhost:port</code>（同一 Pod 共享網路）</td></tr>
</tbody>
</table>

<h2 id="practice">6. 練習題</h2>

<p><strong>Q1:</strong> 一個 Pod 有兩個容器：app（port 8080）和 log-agent。log-agent 需要讀取 app 產生的日誌檔。最適合的共享機制是什麼？</p>
<ul>
<li>A) ConfigMap volume</li>
<li>B) emptyDir volume ✓</li>
<li>C) hostPath volume</li>
<li>D) PersistentVolumeClaim</li>
</ul>
<p><em>解析: emptyDir 在 Pod 生命週期內建立臨時儲存，適合同一 Pod 中容器間共享暫存資料。ConfigMap 用於組態、hostPath 有安全顧慮、PVC 用於持久化資料。</em></p>

<p><strong>Q2:</strong> 一個 Pod 有 2 個 Init Containers：init-a 和 init-b，以及 1 個主容器 app。init-a 失敗了。後續行為是什麼？</p>
<ul>
<li>A) init-b 和 app 正常啟動</li>
<li>B) 僅 init-b 執行，app 不啟動</li>
<li>C) init-a 按 restartPolicy 重試；init-b 和 app 不會啟動 ✓</li>
<li>D) Pod 直接被刪除</li>
</ul>
<p><em>解析: Init Containers 依序執行。如果某個失敗，Kubernetes 根據 Pod 的 restartPolicy 重試。只有當 init-a 成功後，init-b 才會執行。所有 Init Containers 成功後，主容器才啟動。</em></p>

<p><strong>Q3:</strong> 下列哪個是 Sidecar 模式的正確使用場景？</p>
<ul>
<li>A) 啟動前執行一次性初始化腳本</li>
<li>B) 與主容器並行運行，收集並轉發日誌 ✓</li>
<li>C) 將流量代理至外部資料庫叢集</li>
<li>D) 將 Prometheus 指標格式轉換為統一格式</li>
</ul>
<p><em>解析: Sidecar 模式是輔助/增強主容器功能的容器，與主容器並行運行。日誌收集是典型 Sidecar 場景。C 是 Ambassador 模式、D 是 Adapter 模式、A 是 Init Container。</em></p>
