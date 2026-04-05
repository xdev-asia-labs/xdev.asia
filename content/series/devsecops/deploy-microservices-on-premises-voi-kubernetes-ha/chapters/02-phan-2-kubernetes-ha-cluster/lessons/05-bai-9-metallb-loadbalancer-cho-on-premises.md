---
id: 019e1a00-aa01-7001-c001-k8sha000205
title: 'BÀI 9: METALLB — LOADBALANCER CHO ON-PREMISES'
slug: bai-9-metallb-loadbalancer-cho-on-premises
description: >-
  Cài đặt MetalLB cung cấp LoadBalancer IP cho services trong
  on-premises cluster, cấu hình L2 mode và BGP mode,
  IPAddressPool, và expose service ra external network.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 9
section_title: 'Phần 2: Kubernetes HA Cluster với kubeadm'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8155" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8155)"/>

  <!-- Decorations -->
  <g>
    <circle cx="951" cy="43" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="802" cy="134" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="653" cy="225" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="1004" cy="56" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="855" cy="147" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="173" x2="1100" y2="253" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="203" x2="1050" y2="273" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="997.2487113059643,159 997.2487113059643,187 973,201 948.7512886940357,187 948.7512886940357,159 973,145" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — Bài 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 9: METALLB — LOADBALANCER CHO</tspan>
      <tspan x="60" dy="42">ON-PREMISES</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises với Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Kubernetes HA Cluster với kubeadm</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<p>Sau khi hoàn thành bài học này, bạn sẽ:</p>
<ul>
<li>✅ Hiểu vấn đề LoadBalancer trong on-premises (không có cloud LB)</li>
<li>✅ Cài đặt MetalLB bằng Helm</li>
<li>✅ Cấu hình L2 mode với IPAddressPool</li>
<li>✅ Hiểu BGP mode cho datacenter lớn</li>
<li>✅ Expose services với type LoadBalancer</li>
</ul>

<hr>

<h2 id="phan-1-van-de-loadbalancer">PHẦN 1: VẤN ĐỀ LOADBALANCER TRÊN ON-PREMISES</h2>

<h3 id="11-cloud-vs-on-prem">1.1. Cloud vs On-Premises</h3>
<pre><code>
Cloud (AWS/GCP/Azure):
┌─────────┐     ┌──────────────────┐     ┌──────────────────┐
│  User   │────►│  Cloud LB (ELB)  │────►│  K8s Service     │
│         │     │  (tự động tạo)   │     │  type:LoadBalancer│
└─────────┘     └──────────────────┘     └──────────────────┘
                ✅ Tự động provisioning    ✅ External IP tự gán

On-Premises (KHÔNG có MetalLB):
┌─────────┐     ┌──────────────────┐     ┌──────────────────┐
│  User   │────►│  ???             │────►│  K8s Service     │
│         │     │  Không có LB!    │     │  type:LoadBalancer│
└─────────┘     └──────────────────┘     │  ⚠️ PENDING...   │
                                         └──────────────────┘
                ❌ External IP = &lt;pending&gt;  ← Mãi mãi pending!

On-Premises (CÓ MetalLB):
┌─────────┐     ┌──────────────────┐     ┌──────────────────┐
│  User   │────►│  MetalLB         │────►│  K8s Service     │
│         │     │  (announce IP)   │     │  type:LoadBalancer│
└─────────┘     └──────────────────┘     │  ✅ 10.10.40.201  │
                ✅ MetalLB gán IP          └──────────────────┘
</code></pre>

<hr>

<h2 id="phan-2-cai-dat-metallb">PHẦN 2: CÀI ĐẶT METALLB</h2>

<h3 id="21-prerequisites">2.1. Prerequisites</h3>
<pre><code class="language-bash"># MetalLB yêu cầu kube-proxy strictARP (đã cấu hình ở Bài 6):
# Verify:
kubectl get configmap kube-proxy -n kube-system -o yaml | grep strictARP
# strictARP: true  ← ✅ OK

# Nếu đã xóa kube-proxy (dùng Cilium replacement):
# → Không cần verify, Cilium handle ARP
</code></pre>

<h3 id="22-install-metallb">2.2. Install MetalLB bằng Helm</h3>
<pre><code class="language-bash"># Add MetalLB Helm repo:
helm repo add metallb https://metallb.universe.tf
helm repo update

# Install MetalLB:
helm install metallb metallb/metallb \
  --namespace metallb-system \
  --create-namespace \
  --set speaker.frr.enabled=true

# Verify installation:
kubectl -n metallb-system get pods
# NAME                                  READY   STATUS    RESTARTS   AGE
# metallb-controller-xxxxx-xxxxx        1/1     Running   0          30s
# metallb-speaker-xxxxx                 4/4     Running   0          30s  (DaemonSet)
# metallb-speaker-xxxxx                 4/4     Running   0          30s
# metallb-speaker-xxxxx                 4/4     Running   0          30s
# ...
</code></pre>

<hr>

<h2 id="phan-3-l2-mode">PHẦN 3: CẤU HÌNH L2 MODE</h2>

<h3 id="31-ip-address-pool">3.1. IPAddressPool</h3>
<pre><code class="language-yaml"># metallb-config.yaml:
apiVersion: metallb.io/v1beta1
kind: IPAddressPool
metadata:
  name: external-pool
  namespace: metallb-system
spec:
  addresses:
    - 10.10.40.200-10.10.40.250         # 51 IPs cho services
  autoAssign: true                       # Tự động gán IP
  avoidBuggyIPs: true                    # Bỏ qua .0 và .255

---
apiVersion: metallb.io/v1beta1
kind: IPAddressPool
metadata:
  name: internal-pool
  namespace: metallb-system
spec:
  addresses:
    - 10.10.20.200-10.10.20.220         # Internal services
  autoAssign: false                      # Phải specify manually

---
apiVersion: metallb.io/v1beta1
kind: L2Advertisement
metadata:
  name: l2-advertisement
  namespace: metallb-system
spec:
  ipAddressPools:
    - external-pool
    - internal-pool
  nodeSelectors:
    - matchLabels:
        node-role.kubernetes.io/worker: ""   # Chỉ announce từ worker nodes
</code></pre>

<pre><code class="language-bash">kubectl apply -f metallb-config.yaml
# ipaddresspool.metallb.io/external-pool created
# ipaddresspool.metallb.io/internal-pool created
# l2advertisement.metallb.io/l2-advertisement created
</code></pre>

<h3 id="32-l2-mode-hoat-dong">3.2. L2 Mode hoạt động như thế nào?</h3>
<pre><code>
L2 Mode (ARP/NDP):
┌─────────────┐                    ┌─────────────────┐
│  Client     │  ARP: Who has     │  MetalLB        │
│  (external) │  10.10.40.201?    │  Speaker         │
│             │──────────────────►│  (trên worker1)  │
│             │                    │  "Tôi có!"       │
│             │◄──────────────────│  ARP Reply       │
│             │                    └─────────────────┘
│             │  Traffic:
│             │──────────────────►  worker1 → kube-proxy/Cilium → Pod
└─────────────┘

✅ Đơn giản, không cần router hỗ trợ
❌ Failover chậm hơn BGP (~10 giây)
❌ Một node handle tất cả traffic cho 1 IP (không true LB)
</code></pre>

<hr>

<h2 id="phan-4-test-loadbalancer">PHẦN 4: TEST LOADBALANCER SERVICE</h2>

<h3 id="41-deploy-test-app">4.1. Deploy test application</h3>
<pre><code class="language-bash"># Deploy nginx test:
kubectl create deployment nginx-test --image=nginx:alpine --replicas=3

# Expose với type LoadBalancer:
kubectl expose deployment nginx-test \
  --port=80 \
  --target-port=80 \
  --type=LoadBalancer

# Kiểm tra service:
kubectl get svc nginx-test
# NAME         TYPE           CLUSTER-IP     EXTERNAL-IP    PORT(S)        AGE
# nginx-test   LoadBalancer   10.96.xxx.xx   10.10.40.200   80:3xxxx/TCP   10s
#                                            ↑ MetalLB assigned! ✅
</code></pre>

<h3 id="42-test-access">4.2. Test access từ external</h3>
<pre><code class="language-bash"># Từ máy trong cùng network:
curl http://10.10.40.200
# <!DOCTYPE html>
# <html>
# <head><title>Welcome to nginx!</title></head>
# ...  ← OK! ✅

# Kiểm tra MetalLB speaker IP assignment:
kubectl -n metallb-system get ipaddresspool
# NAME            AUTO ASSIGN   AVOID BUGGY IPS   ADDRESSES
# external-pool   true          true              10.10.40.200-10.10.40.250
</code></pre>

<h3 id="43-specify-ip-tu-pool">4.3. Specify IP cụ thể</h3>
<pre><code class="language-yaml"># Service với IP cụ thể:
apiVersion: v1
kind: Service
metadata:
  name: my-app
  annotations:
    metallb.universe.tf/address-pool: internal-pool   # Chọn pool
spec:
  type: LoadBalancer
  loadBalancerIP: 10.10.20.210                         # IP cụ thể
  selector:
    app: my-app
  ports:
    - port: 80
      targetPort: 8080
</code></pre>

<hr>

<h2 id="phan-5-bgp-mode">PHẦN 5: BGP MODE (DATACENTER LỚN)</h2>

<h3 id="51-khi-nao-dung-bgp">5.1. Khi nào dùng BGP?</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Tiêu chí</th>
<th>L2 Mode</th>
<th>BGP Mode</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yêu cầu router</td>
<td>Không</td>
<td>Cần BGP-capable router</td>
</tr>
<tr>
<td>Failover</td>
<td>~10 giây</td>
<td>~3 giây</td>
</tr>
<tr>
<td>True load balancing</td>
<td>❌ (1 node handle)</td>
<td>✅ ECMP across nodes</td>
</tr>
<tr>
<td>Cross-subnet</td>
<td>❌ Same L2 segment</td>
<td>✅ Works across subnets</td>
</tr>
<tr>
<td>Complexity</td>
<td>Đơn giản</td>
<td>Cần router config</td>
</tr>
<tr>
<td>Best for</td>
<td>SMB, single rack</td>
<td>Large DC, multi-rack</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="52-bgp-config-example">5.2. BGP Configuration Example</h3>
<pre><code class="language-yaml"># metallb-bgp.yaml (chỉ dùng khi có BGP router):
apiVersion: metallb.io/v1beta2
kind: BGPPeer
metadata:
  name: tor-switch
  namespace: metallb-system
spec:
  myASN: 64512                          # K8s cluster ASN
  peerASN: 64501                        # ToR switch ASN
  peerAddress: 10.10.20.1               # Router IP
  holdTime: 90s
  keepaliveTime: 30s
  nodeSelectors:
    - matchLabels:
        node-role.kubernetes.io/worker: ""

---
apiVersion: metallb.io/v1beta1
kind: BGPAdvertisement
metadata:
  name: bgp-advertisement
  namespace: metallb-system
spec:
  ipAddressPools:
    - external-pool
  localPref: 100
  communities:
    - 64512:100
</code></pre>

<hr>

<h2 id="phan-6-ip-sharing">PHẦN 6: IP SHARING VÀ ADVANCED FEATURES</h2>

<h3 id="61-ip-sharing">6.1. Shared IP (nhiều services dùng 1 IP)</h3>
<pre><code class="language-yaml"># Nhiều services share cùng 1 external IP (khác port):
apiVersion: v1
kind: Service
metadata:
  name: web-http
  annotations:
    metallb.universe.tf/allow-shared-ip: "shared-web"
spec:
  type: LoadBalancer
  loadBalancerIP: 10.10.40.210
  selector:
    app: web
  ports:
    - port: 80
---
apiVersion: v1
kind: Service
metadata:
  name: web-https
  annotations:
    metallb.universe.tf/allow-shared-ip: "shared-web"
spec:
  type: LoadBalancer
  loadBalancerIP: 10.10.40.210          # Same IP!
  selector:
    app: web
  ports:
    - port: 443
</code></pre>

<h3 id="62-cleanup">6.2. Cleanup test</h3>
<pre><code class="language-bash">kubectl delete deployment nginx-test
kubectl delete svc nginx-test
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>MetalLB</strong> giải quyết LoadBalancer cho on-premises — không cần cloud provider</li>
<li><strong>L2 Mode</strong> đơn giản, phù hợp single rack/small cluster</li>
<li><strong>BGP Mode</strong> cho datacenter lớn, multi-rack với ECMP true load balancing</li>
<li><strong>IPAddressPool</strong> quản lý dải IP, có thể tạo nhiều pools (external, internal)</li>
<li><strong>IP Sharing</strong> cho phép nhiều services dùng chung 1 external IP</li>
<li><strong>strictARP: true</strong> trong kube-proxy là requirement cho L2 mode</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Install MetalLB</h3>
<ul>
<li>Cài MetalLB bằng Helm</li>
<li>Tạo IPAddressPool với dải IP phù hợp lab</li>
<li>Deploy service type LoadBalancer, verify external IP</li>
</ul>

<h3 id="bt2">Bài tập 2: Multiple pools</h3>
<ul>
<li>Tạo 2 pools: external-pool và internal-pool</li>
<li>Deploy 2 services, mỗi service dùng 1 pool khác nhau</li>
<li>Test IP sharing với 2 services cùng IP khác port</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 10: etcd — Vận hành, Backup và Disaster Recovery</strong>, chúng ta sẽ deep dive vào etcd operations, backup strategies, và restore procedure.</p>
