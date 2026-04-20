---
id: cka-d3-l07
title: '第7課：Ingress、Network Policies & CNI'
slug: 07-ingress-networkpolicies-cni
description: >-
  Ingress Controller 與 Ingress 資源。NetworkPolicy 語法與實作。
  CNI 外掛概覽。CKA 考試中的網路安全。
duration_minutes: 55
is_free: true
video_url: null
sort_order: 7
section_title: "領域3: Services & Networking (20%)"
course:
  id: lt-cka-series-001
  title: 'CKA 認證備考 — Certified Kubernetes Administrator'
  slug: luyen-thi-cka
---

<img src="/storage/uploads/2026/04/k8s-cert-cka-bai7-ingress-netpol.png" alt="Ingress 與 NetworkPolicy 架構" style="max-width: 800px; width: 100%; border-radius: 12px;" />

<h2 id="ingress">1. Ingress</h2>

<pre><code class="language-text">apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: web-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  ingressClassName: nginx
  rules:
  - host: app.example.com
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: api-service
            port:
              number: 8080
      - path: /
        pathType: Prefix
        backend:
          service:
            name: web-service
            port:
              number: 80
  tls:
  - hosts:
    - app.example.com
    secretName: tls-secret</code></pre>

<blockquote><p><strong>考試重點：</strong>Ingress 資源本身不會自動生效。需要先部署 Ingress Controller（如 NGINX、Traefik）。CKA 考試環境通常已預裝 NGINX Ingress Controller。</p></blockquote>

<h2 id="networkpolicy">2. NetworkPolicy</h2>

<pre><code class="language-text"># 預設拒絕所有 Ingress 流量
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all-ingress
  namespace: production
spec:
  podSelector: {}       # 套用到所有 Pod
  policyTypes:
  - Ingress              # 只控制 Ingress

---
# 只允許 frontend Pod 存取 backend
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-frontend-to-backend
  namespace: production
spec:
  podSelector:
    matchLabels:
      app: backend        # 保護的目標
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend    # 允許的來源
    ports:
    - protocol: TCP
      port: 8080</code></pre>

<table>
<thead><tr><th>欄位</th><th>說明</th></tr></thead>
<tbody>
<tr><td><code>podSelector</code></td><td>選擇此 Policy 保護的目標 Pod</td></tr>
<tr><td><code>policyTypes</code></td><td>Ingress（進入流量）和/或 Egress（外出流量）</td></tr>
<tr><td><code>ingress.from</code></td><td>允許的來源（podSelector / namespaceSelector / ipBlock）</td></tr>
<tr><td><code>egress.to</code></td><td>允許的目標</td></tr>
</tbody>
</table>

<h2 id="cni">3. CNI 外掛</h2>

<pre><code class="language-text"># CNI 設定路徑
/etc/cni/net.d/
/opt/cni/bin/

# 常見的 CNI：
- Calico: 支援 NetworkPolicy、BGP、IPIP
- Flannel: 簡單的 overlay 網路（不支援 NetworkPolicy）
- Cilium: eBPF、L7 policy
- Weave Net: 加密的 overlay

# 檢查正在使用的 CNI
ls /etc/cni/net.d/
cat /etc/cni/net.d/10-calico.conflist</code></pre>

<blockquote><p><strong>考試重點：</strong>NetworkPolicy 需要 CNI 支援。Flannel 不支援 NetworkPolicy（建立了也不會生效）。Calico 和 Cilium 都支援。</p></blockquote>

<h2 id="cheatsheet">4. 速查表</h2>

<table>
<thead><tr><th>任務</th><th>指令</th></tr></thead>
<tbody>
<tr><td>檢查 Ingress</td><td><code>kubectl get ingress -A</code></td></tr>
<tr><td>檢查 Ingress Controller</td><td><code>kubectl get pods -n ingress-nginx</code></td></tr>
<tr><td>查看 NetworkPolicy</td><td><code>kubectl get networkpolicy -n NS</code></td></tr>
<tr><td>確認 CNI</td><td><code>ls /etc/cni/net.d/</code></td></tr>
<tr><td>測試連線</td><td><code>kubectl exec pod -- curl SERVICE:PORT</code></td></tr>
</tbody>
</table>

<h2 id="practice">5. 練習題</h2>

<p><strong>Q1：</strong>production Namespace 有 deny-all-ingress 的 NetworkPolicy（podSelector: {}）。如何只允許 monitoring Namespace 的 Pod 存取 production 的 metrics Pod（標籤 app=metrics，連接埠 9090）？</p>
<ul>
<li>A) 刪除 deny-all-ingress Policy</li>
<li>B) 新增 NetworkPolicy 使用 namespaceSelector 選擇 monitoring Namespace + 指定 port 9090 ✓</li>
<li>C) 在 monitoring Namespace 新增 Egress Policy</li>
<li>D) 修改 kube-proxy 設定</li>
</ul>
<p><em>解析：NetworkPolicy 是可累加的。新增一個 allow policy 配合 podSelector（app: metrics）和 ingress.from 使用 namespaceSelector（kubernetes.io/metadata.name: monitoring）+ ports 9090。deny-all 仍然保護其他 Pod。</em></p>

<p><strong>Q2：</strong>Ingress 建立後，存取 host 回傳 404。可能的原因是？</p>
<ul>
<li>A) Ingress Controller 未安裝 ✓</li>
<li>B) DNS 設定錯誤</li>
<li>C) 後端 Service 不存在</li>
<li>D) 以上皆是</li>
</ul>
<p><em>解析：所有選項都可能。但 D 是最完整的答案，因為需要排除所有可能性。依序檢查：(1) Ingress Controller Pod 是否運行、(2) Ingress 資源的 rules 和 backend Service 是否正確、(3) Service 的 Endpoints 是否有效、(4) DNS 是否解析到 Ingress Controller 的 IP。</em></p>

<p><strong>Q3：</strong>以下哪個 CNI 不支援 NetworkPolicy？</p>
<ul>
<li>A) Calico</li>
<li>B) Cilium</li>
<li>C) Flannel ✓</li>
<li>D) Weave Net</li>
</ul>
<p><em>解析：Flannel 只提供基本的覆蓋網路，不支援 NetworkPolicy。要使用 NetworkPolicy，需要換用 Calico、Cilium 等支援的 CNI，或使用 Canal（Calico + Flannel 的組合）。</em></p>
