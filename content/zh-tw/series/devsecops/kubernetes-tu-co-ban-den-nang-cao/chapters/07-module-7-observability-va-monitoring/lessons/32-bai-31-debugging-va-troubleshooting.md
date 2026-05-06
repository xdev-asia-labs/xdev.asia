---
id: 019c9618-0504-7000-8000-c1147ba22e15
title: 第 31 課：Kubernetes 調試和故障排除
slug: bai-31-debugging-va-troubleshooting-kubernetes
description: >-
  調試 Kubernetes：kubectl debug、臨時容器、kubectl 事件、kubectl top。使用 Cilium Hubble 排除
  Pod 故障、節點問題、網路問題。常見問題及詳細解決。
duration_minutes: 80
is_free: false
video_url: null
sort_order: 31
section_title: 模組 7：可觀察性和監控
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2357" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2357)"/>

  <!-- Decorations -->
  <g>
    <circle cx="696" cy="198" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="792" cy="254" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="888" cy="50" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="984" cy="106" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1080" cy="162" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="58" x2="1100" y2="138" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="88" x2="1050" y2="158" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="936.5788383248864,91.5 936.5788383248864,124.5 908,141 879.4211616751136,124.5 879.4211616751135,91.50000000000001 908,75" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — 第 31 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 31 課：調試與故障排除</tspan>
      <tspan x="60" dy="42">KUBERNETES</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 7: Observability &amp; Monitoring</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 課程目標</h2><p>掌握調試 Kubernetes 的技巧：從 Pod 故障、節點問題到網路問題。使用 kubectl debug、臨時容器和 Cilium Hubble 進行診斷。</p>

<h2>1. kubectl debug－臨時容器</h2>
<pre><code class="language-bash"># Attach ephemeral container vào pod đang chạy
# Hữu ích khi Pod dùng distroless image không có shell
kubectl debug -it nginx-pod \
  --image=busybox:1.36 \
  --target=nginx \          # share process namespace với container nginx
  -- sh

# Trong ephemeral container:
ps aux                      # xem processes của nginx
ls /proc/1/root/etc/nginx   # xem files của container nginx
wget -O- http://localhost   # test

# Debug Node
kubectl debug node/worker-1 -it --image=ubuntu -- bash
# Có thể mount host filesystem
ls /host/etc/kubernetes

# Copy pod để debug (tạo pod mới với debug image thay thế)
kubectl debug nginx-pod \
  --copy-to=nginx-debug \
  --image=nginx:debug \
  --share-processes \
  -it
</code></pre>

<h2>2. Pod 故障排查</h2>

<h3>2.1 Pod 卡在 Pending 狀態</h3>
<pre><code class="language-bash">kubectl describe pod mypod -n production
# Xem Events section:
# Warning FailedScheduling: 0/3 nodes are available:
# 3 Insufficient cpu.

# Nguyên nhân phổ biến:
# - Không đủ CPU/Memory → giảm requests hoặc thêm node
# - Node selector/affinity không match → kiểm tra labels
# - Taint không có toleration → thêm toleration
# - PVC không bound → kiểm tra StorageClass, PV available
</code></pre>

<h3>2.2 影像拉回關閉</h3>
<pre><code class="language-bash">kubectl describe pod mypod -n production
# Events:
# Warning Failed: Failed to pull image "myregistry.io/myapp:v1":
# unauthorized: authentication required

# Fix: tạo imagePullSecret
kubectl create secret docker-registry registry-creds \
  --docker-server=myregistry.io \
  --docker-username=myuser \
  --docker-password=mypassword \
  -n production

# Thêm vào pod spec:
# imagePullSecrets:
# - name: registry-creds
</code></pre>

<h3>2.3 崩潰循環回退</h3>
<pre><code class="language-bash"># Xem logs của lần chạy trước (container đã crash)
kubectl logs mypod -n production --previous

# Xem logs real-time
kubectl logs mypod -n production -f

# Xem logs của container cụ thể trong multi-container pod
kubectl logs mypod -n production -c mycontainer --previous

# Nguyên nhân phổ biến:
# - Application error → fix code, kiểm tra config
# - OOMKilled → tăng memory limit
# - Liveness probe fail quá sớm → tăng initialDelaySeconds
# - readOnlyRootFilesystem: app cần ghi file → thêm emptyDir volume
</code></pre>

<h3>2.4 OOM被殺死</h3>
<pre><code class="language-bash">kubectl describe pod mypod
# State: Terminated
# Reason: OOMKilled

# Kiểm tra memory usage
kubectl top pod mypod -n production

# Fix: tăng memory limit
kubectl set resources deployment myapp --limits=memory=512Mi -n production

# Hoặc xem JVM heap nếu là Java app:
kubectl exec mypod -- jcmd 1 VM.native_memory | head -20
</code></pre>

<h2>3. 節點故障處理</h2>
<pre><code class="language-bash"># Xem trạng thái nodes
kubectl get nodes
# STATUS: NotReady → node có vấn đề

kubectl describe node worker-1
# Conditions:
# MemoryPressure: True → node sắp hết memory
# DiskPressure: True → node sắp hết disk
# PIDPressure: True → quá nhiều processes
# Ready: False → kubelet không healthy

# Check kubelet logs trên node
ssh worker-1
journalctl -u kubelet -n 100 --no-pager

# Check containerd
systemctl status containerd
journalctl -u containerd -n 50 --no-pager

# Disk usage
df -h
du -sh /var/lib/containerd/*
</code></pre>

<h2>4. 網路調試</h2>
<pre><code class="language-bash"># Test DNS resolution
kubectl run -it --rm debug --image=busybox:1.36 --restart=Never \
  -- nslookup kubernetes.default
kubectl run -it --rm debug --image=busybox:1.36 --restart=Never \
  -- nslookup backend-service.production.svc.cluster.local

# Test Service connectivity
kubectl run -it --rm debug --image=busybox:1.36 --restart=Never \
  -- wget -qO- http://backend-service:8080/health

# Kiểm tra endpoints
kubectl get endpoints backend-service -n production
# Nếu ENDPOINTS là &lt;none&gt; → Pod selector không match Service selector

# Xem EndpointSlices
kubectl get endpointslices -n production -l kubernetes.io/service-name=backend-service

# Debug với Cilium Hubble
hubble observe --namespace production --verdict DROPPED
hubble observe --namespace production --pod backend-pod --since 5m
hubble observe --from-pod frontend-pod --to-pod backend-pod
</code></pre>

<h2>5. kubectl Events－重要的資訊來源</h2>
<pre><code class="language-bash"># Xem events sorted theo thời gian
kubectl get events --sort-by='.lastTimestamp' -n production

# Xem events của pod cụ thể
kubectl events --for pod/mypod -n production

# Watch events real-time
kubectl get events -n production --watch

# Xem warning events
kubectl get events -n production --field-selector type=Warning
</code></pre>

<h2>6. kubectl top－資源使用狀況</h2>
<pre><code class="language-bash"># Cần metrics-server
kubectl top nodes
kubectl top pods -n production

# Sort by CPU
kubectl top pods -n production --sort-by=cpu

# Xem tất cả namespaces
kubectl top pods --all-namespaces

# Xem containers trong pod
kubectl top pod mypod -n production --containers
</code></pre>

<h2>7. 應用程式緩慢 — 效能故障排除</h2>
<pre><code class="language-bash"># CPU throttling
# Xem cgroup CPU stats
kubectl exec mypod -n production -- cat /sys/fs/cgroup/cpu/cpu.stat
# throttled_time lớn → container bị throttle nhiều

# Tăng CPU limit hoặc giảm CPU request để đặt đúng

# Memory analysis
kubectl exec mypod -- cat /sys/fs/cgroup/memory/memory.usage_in_bytes
kubectl exec mypod -- cat /sys/fs/cgroup/memory/memory.limit_in_bytes

# Network latency
kubectl exec mypod -- ping -c 10 backend-service
kubectl exec mypod -- time wget -qO- http://backend-service:8080/api

# Xem connection tracking
kubectl exec mypod -- cat /proc/net/nf_conntrack | wc -l
</code></pre>

<h2>8. 常見問題清單</h2>
<pre><code class="language-bash">Symptom                     First thing to check
──────────────────────────────────────────────────────────────────
Pod Pending                 kubectl describe pod → Events
Pod CrashLoopBackOff        kubectl logs --previous
Pod ImagePullBackOff        Image name, registry creds
Service not reachable       kubectl get endpoints
DNS not working             kubectl exec -- nslookup
Node NotReady               kubectl describe node → Conditions
                            journalctl -u kubelet on node
Slow requests               kubectl top, CPU throttling, network
PVC not bound               kubectl describe pvc, StorageClass
</code></pre>

<h2>9. Runbook 範例 — CrashLoopBackOff</h2>
<pre><code class="language-bash">#!/bin/bash
# Diagnose CrashLoopBackOff

POD=$1
NS=${2:-default}

echo "=== Pod Status ==="
kubectl get pod $POD -n $NS -o wide

echo "=== Pod Events ==="
kubectl describe pod $POD -n $NS | grep -A 30 Events

echo "=== Current Logs ==="
kubectl logs $POD -n $NS 2>/dev/null || echo "No logs (container not started)"

echo "=== Previous Logs ==="
kubectl logs $POD -n $NS --previous 2>/dev/null || echo "No previous logs"

echo "=== Resource Usage ==="
kubectl top pod $POD -n $NS 2>/dev/null || echo "metrics-server not available"

echo "=== Node Status ==="
NODE=$(kubectl get pod $POD -n $NS -o jsonpath='{.spec.nodeName}')
kubectl describe node $NODE | grep -A 10 Conditions
</code></pre>

<h2>總結</h2>
<ul>
  <li>kubectl debug：無發行鏡像的臨時容器、調試節點</li>
  <li>CrashLoopBackOff：參見 <code>kubectl 日誌 --previous</code></li>
  <li>待定：請參閱中的事件 <code>kubectl 描述 pod</code></li>
  <li>網路問題：檢查端點，使用 Hubble 查看丟棄的資料包</li>
  <li>效能：kubectl top，檢查 cgroup stats 中的 CPU 限制</li>
  <li>活動： <code>kubectl 取得事件 --sort-by='.lastTimestamp'</code> 是最重要的工具</li>
</ul>
