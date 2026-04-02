---
id: 019e1a00-aa01-7001-c001-k8sha000104
title: 'BÀI 4: LOAD BALANCER CHO KUBERNETES API SERVER (KEEPALIVED + HAPROXY)'
slug: bai-4-load-balancer-cho-kubernetes-api-server
description: >-
  Cài đặt và cấu hình keepalived + HAProxy để tạo Virtual IP (VIP) cho
  Kubernetes API server. Cấu hình health checks, failover tự động, so
  sánh với kube-vip và testing HA với tcpdump/curl.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 'Phần 1: Nền tảng & Thiết kế Hạ tầng On-Premises'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<p>Sau khi hoàn thành bài học này, bạn sẽ:</p>
<ul>
<li>✅ Hiểu tại sao cần Load Balancer cho K8s API Server trong HA setup</li>
<li>✅ Cài đặt và cấu hình keepalived cho Virtual IP (VIP) failover</li>
<li>✅ Cài đặt và cấu hình HAProxy cho API server load balancing</li>
<li>✅ Cấu hình health checks và failover tự động</li>
<li>✅ Test HA bằng cách simulate failures</li>
<li>✅ So sánh keepalived+HAProxy vs kube-vip</li>
</ul>

<hr>

<h2 id="phan-1-tai-sao-can-lb">PHẦN 1: TẠI SAO CẦN LOAD BALANCER CHO API SERVER?</h2>

<h3 id="11-van-de-voi-single-api-endpoint">1.1. Vấn đề với single API endpoint</h3>
<pre><code>
Kubernetes HA Cluster — 3 Control Plane nodes:

  master1 (kube-apiserver :6443)
  master2 (kube-apiserver :6443)
  master3 (kube-apiserver :6443)

Vấn đề: kubelet, kubectl, các controllers kết nối tới API server nào?

❌ Hardcode master1:
   kubectl --server=https://master1:6443
   → master1 down → TOÀN BỘ cluster mất quản lý!

✅ Virtual IP (VIP):
   kubectl --server=https://10.10.20.100:6443
   → VIP luôn trỏ tới 1 master đang healthy
   → Transparent failover khi master down
</code></pre>

<h3 id="12-architecture">1.2. Kiến trúc Load Balancer</h3>
<pre><code>
                    ┌───────────────────────────────┐
                    │     VIP: 10.10.20.100:6443    │
                    │     (keepalived floating IP)   │
                    └──────────────┬────────────────┘
                                   │
                    ┌──────────────┴────────────────┐
                    │     HAProxy (L4 TCP proxy)     │
                    │     Listen :6443               │
                    │     Health check: /healthz     │
                    └──────────────┬────────────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              │                    │                     │
     ┌────────┴────────┐ ┌────────┴────────┐ ┌─────────┴────────┐
     │  master1:6443   │ │  master2:6443   │ │  master3:6443    │
     │  kube-apiserver │ │  kube-apiserver │ │  kube-apiserver  │
     └─────────────────┘ └─────────────────┘ └──────────────────┘

Failover scenario:
  lb1 (keepalived MASTER, holds VIP)
  lb2 (keepalived BACKUP)
  → lb1 down → lb2 takes VIP trong &lt; 3 giây
</code></pre>

<h3 id="13-lua-chon-architecture">1.3. Lựa chọn Architecture</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Option</th>
<th>Ưu điểm</th>
<th>Nhược điểm</th>
<th>Recommendation</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Dedicated LB nodes</strong></td>
<td>Isolation, simple, clear separation</td>
<td>Cần thêm 2 servers</td>
<td>✅ Production</td>
</tr>
<tr>
<td>HAProxy trên masters</td>
<td>Không cần thêm servers</td>
<td>Resource contention, complexity</td>
<td>Lab/Small</td>
</tr>
<tr>
<td>kube-vip (DaemonSet)</td>
<td>Không cần external LB</td>
<td>Runs inside K8s → chicken-egg</td>
<td>Simple setups</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>Chúng ta sẽ dùng <strong>dedicated LB nodes</strong> (lb1 + lb2) cho production-grade setup.</p>

<hr>

<h2 id="phan-2-cai-dat-haproxy">PHẦN 2: CÀI ĐẶT VÀ CẤU HÌNH HAPROXY</h2>

<h3 id="21-cai-dat-haproxy">2.1. Cài đặt HAProxy</h3>
<pre><code class="language-bash"># Trên CẢ HAI lb1 và lb2:

# Cài đặt HAProxy (version 2.8+ LTS)
sudo apt install -y haproxy

# Verify version
haproxy -v
# Output: HAProxy version 2.8.x ...
</code></pre>

<h3 id="22-cau-hinh-haproxy">2.2. Cấu hình HAProxy</h3>
<pre><code class="language-bash"># Backup config gốc
sudo cp /etc/haproxy/haproxy.cfg /etc/haproxy/haproxy.cfg.bak

# Tạo cấu hình mới
cat > /etc/haproxy/haproxy.cfg << 'EOF'
#---------------------------------------------------------------------
# Global settings
#---------------------------------------------------------------------
global
    log /dev/log local0
    log /dev/log local1 notice
    chroot /var/lib/haproxy
    stats socket /run/haproxy/admin.sock mode 660 level admin
    stats timeout 30s
    user haproxy
    group haproxy
    daemon

    # SSL/TLS settings
    ssl-default-bind-ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256
    ssl-default-bind-ciphersuites TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384
    ssl-default-bind-options ssl-min-ver TLSv1.2

    # Tuning
    maxconn 50000
    tune.ssl.default-dh-param 2048

#---------------------------------------------------------------------
# Defaults
#---------------------------------------------------------------------
defaults
    log     global
    mode    tcp                    # Layer 4 (TCP) mode cho K8s API
    option  tcplog
    option  dontlognull
    timeout connect 5000ms
    timeout client  50000ms
    timeout server  50000ms
    retries 3
    default-server inter 10s downinter 5s rise 2 fall 3 slowstart 60s

#---------------------------------------------------------------------
# Stats page (cho monitoring)
#---------------------------------------------------------------------
listen stats
    bind *:9000
    mode http
    stats enable
    stats uri /stats
    stats realm HAProxy\ Statistics
    stats auth admin:SecureP@ssw0rd    # Đổi password trong production!
    stats refresh 10s

#---------------------------------------------------------------------
# Kubernetes API Server Frontend
#---------------------------------------------------------------------
frontend k8s-api
    bind *:6443
    mode tcp
    option tcplog
    default_backend k8s-api-backend

#---------------------------------------------------------------------
# Kubernetes API Server Backend
#---------------------------------------------------------------------
backend k8s-api-backend
    mode tcp
    option tcp-check
    balance roundrobin

    # Health check: TCP connection check to port 6443
    # (K8s API server responds to TCP SYN on this port)
    server master1 10.10.20.11:6443 check
    server master2 10.10.20.12:6443 check
    server master3 10.10.20.13:6443 check

#---------------------------------------------------------------------
# etcd (optional - cho external etcd client access)
#---------------------------------------------------------------------
# frontend etcd
#     bind *:2379
#     mode tcp
#     default_backend etcd-backend
#
# backend etcd-backend
#     mode tcp
#     balance roundrobin
#     server etcd1 10.10.20.11:2379 check
#     server etcd2 10.10.20.12:2379 check
#     server etcd3 10.10.20.13:2379 check

EOF
</code></pre>

<h3 id="23-advanced-health-check">2.3. Advanced Health Check (HTTP)</h3>
<p>TCP check chỉ kiểm tra port open. Để check API server thực sự healthy, dùng HTTP health check:</p>

<pre><code class="language-text"># Thay thế backend section bằng advanced version:
backend k8s-api-backend
    mode tcp
    option tcp-check
    balance roundrobin

    # HTTP health check qua /healthz endpoint
    option httpchk GET /healthz
    http-check expect status 200

    # default-server: check interval 3s, fall after 3 failures, rise after 2 success
    default-server inter 3s fall 3 rise 2

    server master1 10.10.20.11:6443 check check-ssl verify none
    server master2 10.10.20.12:6443 check check-ssl verify none
    server master3 10.10.20.13:6443 check check-ssl verify none
</code></pre>

<p>⚠️ <strong>Lưu ý:</strong> HTTP health check yêu cầu <code>check-ssl verify none</code> vì K8s API dùng self-signed certificates. Trong production có thể cấu hình CA cert cho verification.</p>

<h3 id="24-start-haproxy">2.4. Start HAProxy</h3>
<pre><code class="language-bash"># Validate config
sudo haproxy -c -f /etc/haproxy/haproxy.cfg
# Output: Configuration file is valid

# Enable và start
sudo systemctl enable haproxy
sudo systemctl start haproxy

# Verify
sudo systemctl status haproxy
ss -tlnp | grep 6443
# Output:
# LISTEN  0  50000  *:6443  users:(("haproxy",pid=1234,...))

# Kiểm tra stats page
curl http://localhost:9000/stats
# Mở browser: http://lb1:9000/stats → login admin/SecureP@ssw0rd
</code></pre>

<hr>

<h2 id="phan-3-cai-dat-keepalived">PHẦN 3: CÀI ĐẶT VÀ CẤU HÌNH KEEPALIVED</h2>

<h3 id="31-keepalived-la-gi">3.1. keepalived là gì?</h3>
<p>keepalived sử dụng <strong>VRRP (Virtual Router Redundancy Protocol)</strong> để quản lý một Virtual IP giữa 2+ servers:</p>

<pre><code>
VRRP hoạt động:

1. Ban đầu:
   lb1 (MASTER, priority 101) → Giữ VIP 10.10.20.100
   lb2 (BACKUP, priority 100) → Standby

2. lb1 sends VRRP advertisements mỗi 1 giây
   lb2 nhận và xác nhận lb1 vẫn alive

3. lb1 crash:
   lb2 không nhận VRRP advert trong 3+ giây
   lb2 promote → MASTER, gửi Gratuitous ARP
   VIP 10.10.20.100 chuyển sang lb2
   Failover time: ~3 giây

4. lb1 recover:
   lb1 lên lại, thấy lb2 đang MASTER
   lb1 trở thành BACKUP (nếu nopreempt) hoặc
   lb1 preempt lại MASTER (nếu preempt)
</code></pre>

<h3 id="32-cai-dat-keepalived">3.2. Cài đặt keepalived</h3>
<pre><code class="language-bash"># Trên CẢ HAI lb1 và lb2:
sudo apt install -y keepalived

# Enable non-local IP binding (cho VIP)
echo "net.ipv4.ip_nonlocal_bind = 1" >> /etc/sysctl.d/99-keepalived.conf
sudo sysctl -p /etc/sysctl.d/99-keepalived.conf
</code></pre>

<h3 id="33-cau-hinh-keepalived-tren-lb1">3.3. Cấu hình keepalived trên lb1 (MASTER)</h3>
<pre><code class="language-bash">cat > /etc/keepalived/keepalived.conf << 'EOF'
! Configuration for keepalived

global_defs {
    router_id LB1              # Unique identifier for this node
    enable_script_security      # Required cho script execution
    script_user root
}

# Health check script cho HAProxy
vrrp_script check_haproxy {
    script "/usr/bin/killall -0 haproxy"   # Check if haproxy process exists
    interval 2                              # Check every 2 seconds
    weight -30                              # Reduce priority by 30 if check fails
    fall 3                                  # Mark DOWN after 3 consecutive failures
    rise 2                                  # Mark UP after 2 consecutive successes
}

vrrp_instance K8S_API {
    state MASTER                # Initial state: MASTER on lb1
    interface eth1              # Network interface for VRRP (cluster network)
    virtual_router_id 51        # Same ID on both LBs (0-255)
    priority 101                # Higher priority = preferred MASTER
    advert_int 1                # VRRP advertisement interval (seconds)
    nopreempt                   # Không tự preempt khi recovered (recommended)

    authentication {
        auth_type PASS
        auth_pass K8sHA2026     # Shared password (max 8 chars)
    }

    virtual_ipaddress {
        10.10.20.100/24 dev eth1 label eth1:vip
    }

    track_script {
        check_haproxy           # Track HAProxy health
    }

    # Notification scripts (optional)
    notify_master "/etc/keepalived/notify.sh MASTER"
    notify_backup "/etc/keepalived/notify.sh BACKUP"
    notify_fault  "/etc/keepalived/notify.sh FAULT"
}
EOF
</code></pre>

<h3 id="34-cau-hinh-keepalived-tren-lb2">3.4. Cấu hình keepalived trên lb2 (BACKUP)</h3>
<pre><code class="language-bash">cat > /etc/keepalived/keepalived.conf << 'EOF'
global_defs {
    router_id LB2
    enable_script_security
    script_user root
}

vrrp_script check_haproxy {
    script "/usr/bin/killall -0 haproxy"
    interval 2
    weight -30
    fall 3
    rise 2
}

vrrp_instance K8S_API {
    state BACKUP                # Initial state: BACKUP on lb2
    interface eth1
    virtual_router_id 51        # PHẢI GIỐNG lb1
    priority 100                # Thấp hơn lb1 (101)
    advert_int 1
    nopreempt

    authentication {
        auth_type PASS
        auth_pass K8sHA2026     # PHẢI GIỐNG lb1
    }

    virtual_ipaddress {
        10.10.20.100/24 dev eth1 label eth1:vip
    }

    track_script {
        check_haproxy
    }

    notify_master "/etc/keepalived/notify.sh MASTER"
    notify_backup "/etc/keepalived/notify.sh BACKUP"
    notify_fault  "/etc/keepalived/notify.sh FAULT"
}
EOF
</code></pre>

<h3 id="35-notification-script">3.5. Notification Script (Optional)</h3>
<pre><code class="language-bash"># Trên cả lb1 và lb2:
cat > /etc/keepalived/notify.sh << 'SCRIPT'
#!/bin/bash
STATE=$1
DATETIME=$(date '+%Y-%m-%d %H:%M:%S')
HOSTNAME=$(hostname)

echo "${DATETIME} - ${HOSTNAME} transitioned to ${STATE}" >> /var/log/keepalived-state.log

# Optional: Send notification (Slack, email, etc.)
# curl -X POST -H 'Content-type: application/json' \
#   --data "{\"text\":\"keepalived: ${HOSTNAME} → ${STATE}\"}" \
#   https://hooks.slack.com/services/YOUR/WEBHOOK/URL
SCRIPT

chmod +x /etc/keepalived/notify.sh
</code></pre>

<h3 id="36-start-keepalived">3.6. Start keepalived</h3>
<pre><code class="language-bash"># Trên lb1 (start MASTER trước):
sudo systemctl enable keepalived
sudo systemctl start keepalived

# Trên lb2 (start BACKUP sau):
sudo systemctl enable keepalived
sudo systemctl start keepalived

# Verify trên lb1 (MASTER):
ip addr show eth1
# Output:
# inet 10.10.20.9/24 brd 10.10.20.255 scope global eth1
# inet 10.10.20.100/24 scope global secondary eth1:vip  ← VIP!

# Verify trên lb2 (BACKUP):
ip addr show eth1
# Output:
# inet 10.10.20.10/24 brd 10.10.20.255 scope global eth1
# (Không có VIP)

# Check keepalived state
sudo journalctl -u keepalived -f
</code></pre>

<hr>

<h2 id="phan-4-testing-ha-failover">PHẦN 4: TESTING HA FAILOVER</h2>

<h3 id="41-test-1-vip-failover">4.1. Test 1: VIP Failover khi lb1 down</h3>
<pre><code class="language-bash"># Terminal 1: Continuous ping tới VIP từ workstation
ping 10.10.20.100

# Terminal 2: Tắt keepalived trên lb1 (MASTER)
ssh lb1 "sudo systemctl stop keepalived"

# Kết quả expected trên Terminal 1:
# 64 bytes from 10.10.20.100: icmp_seq=45 ttl=64 time=0.4ms
# 64 bytes from 10.10.20.100: icmp_seq=46 ttl=64 time=0.4ms
# Request timeout for icmp_seq 47      ← 1-3 packets lost
# Request timeout for icmp_seq 48
# 64 bytes from 10.10.20.100: icmp_seq=49 ttl=64 time=0.5ms  ← VIP on lb2 now
# 64 bytes from 10.10.20.100: icmp_seq=50 ttl=64 time=0.5ms

# Verify VIP chuyển sang lb2:
ssh lb2 "ip addr show eth1 | grep 'inet '"
# Output: inet 10.10.20.100/24 scope global secondary eth1:vip  ✅

# Restore lb1:
ssh lb1 "sudo systemctl start keepalived"
# VIP stays on lb2 (nopreempt mode)
</code></pre>

<h3 id="42-test-2-haproxy-failure">4.2. Test 2: HAProxy failure → keepalived demotion</h3>
<pre><code class="language-bash"># Stop HAProxy trên lb1 (hiện đang MASTER):
ssh lb1 "sudo systemctl stop haproxy"

# keepalived health check detects HAProxy down
# → Priority giảm từ 101 → 71 (101 - 30)
# → lb2 priority 100 > 71 → lb2 becomes MASTER

# Check log:
ssh lb1 "sudo journalctl -u keepalived --since '1 min ago'"
# Output:
# VRRP_Script(check_haproxy) failed (exited with status 1)
# VRRP_Instance(K8S_API) Changing effective priority from 101 to 71
# VRRP_Instance(K8S_API) Received advert with higher priority 100
# VRRP_Instance(K8S_API) Entering BACKUP STATE

# Restore HAProxy:
ssh lb1 "sudo systemctl start haproxy"
</code></pre>

<h3 id="43-test-3-api-server-failover">4.3. Test 3: API Server Backend Failover</h3>
<pre><code class="language-bash"># Sau khi K8s cluster đã chạy (Bài 6-7):

# Continuous API call qua VIP
while true; do
  curl -sk https://10.10.20.100:6443/healthz && echo " OK $(date)"
  sleep 1
done

# Tắt kube-apiserver trên master1:
ssh master1 "sudo crictl stop \$(sudo crictl ps --name kube-apiserver -q)"

# Output expected:
# ok OK Wed Apr 02 10:00:01 2026
# ok OK Wed Apr 02 10:00:02 2026   ← HAProxy routes to master2/3
# ok OK Wed Apr 02 10:00:03 2026   ← No interruption!

# Kiểm tra HAProxy stats:
curl -s "http://lb1:9000/stats;csv" | grep k8s-api-backend
# master1 → DOWN, master2/3 → UP
</code></pre>

<hr>

<h2 id="phan-5-kube-vip-alternative">PHẦN 5: ALTERNATIVE — kube-vip</h2>

<h3 id="51-kube-vip-la-gi">5.1. kube-vip là gì?</h3>
<p>kube-vip chạy như static pod trên control plane nodes, kết hợp VIP + load balancing trong 1 component:</p>

<pre><code>
keepalived + HAProxy (external):
  ├── 2 dedicated LB servers
  ├── keepalived manages VIP
  └── HAProxy load balances → API servers

kube-vip (internal):
  ├── Chạy như DaemonSet/static pod trên masters
  ├── Leader election qua Raft hoặc ARP
  ├── Leader giữ VIP + local LB
  └── Không cần external servers
</code></pre>

<h3 id="52-so-sanh">5.2. So sánh chi tiết</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Tiêu chí</th>
<th>keepalived + HAProxy</th>
<th>kube-vip</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Extra servers</strong></td>
<td>Cần 2 LB servers</td>
<td>Không cần</td>
</tr>
<tr>
<td><strong>Complexity</strong></td>
<td>2 components cần quản lý</td>
<td>1 component</td>
</tr>
<tr>
<td><strong>Independence</strong></td>
<td>✅ Độc lập với K8s cluster</td>
<td>❌ Chạy trong K8s (chicken-egg)</td>
</tr>
<tr>
<td><strong>Chicken-egg problem</strong></td>
<td>✅ Không có</td>
<td>⚠️ cần init trước K8s</td>
</tr>
<tr>
<td><strong>Health checks</strong></td>
<td>✅ Advanced (HTTP, TCP, script)</td>
<td>Basic</td>
</tr>
<tr>
<td><strong>Monitoring</strong></td>
<td>✅ HAProxy stats, Prometheus</td>
<td>Limited</td>
</tr>
<tr>
<td><strong>Production proven</strong></td>
<td>✅ 20+ years</td>
<td>Newer, less battle-tested</td>
</tr>
<tr>
<td><strong>Lab/Development</strong></td>
<td>Overkill</td>
<td>✅ Perfect</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>💡 <strong>Recommendation:</strong></p>
<ul>
<li><strong>Production:</strong> keepalived + HAProxy (mature, independent, observable)</li>
<li><strong>Lab/Small:</strong> kube-vip (simpler, no extra servers)</li>
</ul>

<h3 id="53-kube-vip-quick-setup">5.3. kube-vip Quick Setup (Tham khảo)</h3>
<pre><code class="language-bash"># Tạo kube-vip manifest trước khi kubeadm init
export VIP=10.10.20.100
export INTERFACE=eth1
export KVVERSION=$(curl -sL https://api.github.com/repos/kube-vip/kube-vip/releases | jq -r ".[0].name")

# Generate static pod manifest
ctr image pull ghcr.io/kube-vip/kube-vip:$KVVERSION
ctr run --rm --net-host ghcr.io/kube-vip/kube-vip:$KVVERSION vip /kube-vip \
  manifest pod \
  --interface $INTERFACE \
  --address $VIP \
  --controlplane \
  --arp \
  --leaderElection | tee /etc/kubernetes/manifests/kube-vip.yaml
</code></pre>

<hr>

<h2 id="phan-6-production-considerations">PHẦN 6: PRODUCTION CONSIDERATIONS</h2>

<h3 id="61-haproxy-tuning">6.1. HAProxy Production Tuning</h3>
<pre><code class="language-text"># Thêm vào haproxy.cfg global section:
global
    # Tăng max connections
    maxconn 100000
    
    # Sử dụng nhiều CPU cores
    nbthread 4                    # Số threads = số CPU cores
    
    # Enable stats socket cho runtime API
    stats socket /run/haproxy/admin.sock mode 660 level admin expose-fd listeners
    
    # Logging chi tiết
    log-send-hostname
</code></pre>

<h3 id="62-monitoring-haproxy">6.2. Monitoring HAProxy với Prometheus</h3>
<pre><code class="language-bash"># HAProxy built-in Prometheus exporter (HAProxy 2.4+):
# Thêm vào haproxy.cfg:
frontend prometheus
    bind *:8405
    mode http
    http-request use-service prometheus-exporter if { path /metrics }
    no log

# Verify:
curl http://lb1:8405/metrics | head -20
# Output:
# # HELP haproxy_backend_status Current status of the service
# haproxy_backend_status{backend="k8s-api-backend",server="master1"} 1
</code></pre>

<h3 id="63-keepalived-monitoring">6.3. Monitoring keepalived</h3>
<pre><code class="language-bash"># keepalived exports SNMP metrics
# Hoặc check via logs:
sudo journalctl -u keepalived -f

# Custom health check cho keepalived process:
systemctl is-active keepalived && echo "RUNNING" || echo "DOWN"

# Check VRRP state:
cat /var/log/keepalived-state.log
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>VIP là critical</strong> cho K8s HA — tất cả components kết nối qua VIP, không hardcode master IP</li>
<li><strong>keepalived</strong> quản lý VIP failover qua VRRP protocol, failover < 3 giây</li>
<li><strong>HAProxy</strong> load balance TCP traffic tới healthy API servers với health checks</li>
<li><strong>nopreempt</strong> mode tránh unnecessary VIP flapping khi MASTER recovered</li>
<li><strong>Health check script</strong> trong keepalived đảm bảo VIP chỉ ở node có HAProxy healthy</li>
<li><strong>Test failover</strong> TRƯỚC khi deploy K8s: tắt LB, tắt HAProxy, verify VIP migration</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Deploy HAProxy + keepalived</h3>
<ul>
<li>Cài đặt HAProxy + keepalived trên lb1 và lb2 theo hướng dẫn</li>
<li>Verify VIP active trên lb1</li>
<li>Truy cập HAProxy stats page</li>
</ul>

<h3 id="bt2">Bài tập 2: Failover Testing</h3>
<ul>
<li>Test 1: Stop keepalived trên lb1, verify VIP chuyển sang lb2</li>
<li>Test 2: Stop HAProxy trên lb1, verify tự động demotion</li>
<li>Test 3: Start lại cả hai, verify correct state</li>
<li>Đo thời gian failover bằng continuous ping</li>
</ul>

<h3 id="bt3">Bài tập 3: Nâng cao</h3>
<ul>
<li>Thêm Prometheus exporter cho HAProxy</li>
<li>Viết notification script gửi alert tới Slack khi failover xảy ra</li>
<li>Cấu hình HAProxy logging chi tiết vào file riêng</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 5: Cài đặt containerd và kubeadm trên tất cả nodes</strong>, chúng ta sẽ cài đặt container runtime (containerd) và kubeadm tools, chuẩn bị sẵn sàng cho việc khởi tạo K8s HA cluster.</p>
