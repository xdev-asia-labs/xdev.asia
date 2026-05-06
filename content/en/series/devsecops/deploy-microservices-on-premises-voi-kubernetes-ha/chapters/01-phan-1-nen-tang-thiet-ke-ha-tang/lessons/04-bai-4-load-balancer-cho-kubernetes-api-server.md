---
id: 019e1a00-aa01-7001-c001-k8sha000104
title: 'LESSON 4: LOAD BALANCER FOR KUBERNETES API SERVER (KEEPALIVED + HAPROXY)'
slug: bai-4-load-balancer-cho-kubernetes-api-server
description: Install and configure keepalived + HAProxy to create Virtual IP (VIP) for Kubernetes API server. Configure health checks, automatic failover, compare with kube-vip and test HA with tcpdump/curl.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 'Part 1: On-Premises Platform & Infrastructure Design'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Deploy Microservices On-Premises with Kubernetes HA
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5575" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5575)"/>

  <!-- Decorations -->
  <g>
    <circle cx="998" cy="44" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="896" cy="222" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="794" cy="140" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="692" cy="58" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="1090" cy="236" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="204" x2="1100" y2="284" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="234" x2="1050" y2="304" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="937.7749907475932,84.5 937.7749907475932,123.5 904,143 870.2250092524068,123.5 870.2250092524068,84.50000000000001 904,65" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — Lesson 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 4: LOAD BALANCER FOR KUBERNETES API</tspan>
      <tspan x="60" dy="42">SERVER (KEEPALIVED + HAPROXY)</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises with Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Platform &amp; On-Premises Infrastructure Design</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 LESSON OBJECTIVE__HTMLTAG_68___
<p>After completing this lesson, you will:</p>
<ul>
<li>✅ Understand why Load Balancer is needed for K8s API Server in HA setup</li>
<li>✅ Install and configure keepalived for Virtual IP (VIP) failover</li>
<li>✅ Install and configure HAProxy for API server load balancing</li>
<li>✅ Configure health checks and automatic failover</li>
<li>✅ Test HA by simulating failures</li>
<li>✅ Compare keepalived+HAProxy vs kube-vip</li>
</ul>

<hr>

<h2 id="phan-1-tai-sao-can-lb">PART 1: WHY DO YOU NEED LOAD BALANCER FOR API SERVER?</h2>

<h3 id="11-van-de-voi-single-api-endpoint">1.1. Issue with single API endpoint</h3>

<pre><code class="language-mermaid">
graph LR
    subgraph PROBLEM["❌ Hardcode master1"]
        kubectl1["kubectl"] -->|":6443"| master1a["master1<br/>kube-apiserver"]
        master1a -.->|"DOWN!"| X["❌ Toàn bộ cluster<br/>mất quản lý"]
    end

    subgraph SOLUTION["✅ Virtual IP"]
        kubectl2["kubectl"] -->|":6443"| VIP["🔷 VIP<br/>10.10.20.100"]
        VIP --> m1["master1"] & m2["master2"] & m3["master3"]
        m1 -.->|"DOWN"| VIP
    end

    style PROBLEM fill:#450a0a,stroke:#dc2626,color:#fca5a5
    style SOLUTION fill:#052e16,stroke:#22c55e,color:#bbf7d0
    style X fill:#dc2626,stroke:#fca5a5,color:#fff
    style VIP fill:#1d4ed8,stroke:#60a5fa,color:#fff
</code></pre>

<h3 id="12-architecture">1.2. Load Balancer Architecture</h3>

<pre><code class="language-mermaid">
graph TD
    VIP["🔷 VIP: 10.10.20.100:6443<br/>keepalived floating IP"]
    HAProxy["⚡ HAProxy<br/>L4 TCP proxy · Listen :6443<br/>Health check: /healthz"]

    VIP --> HAProxy

    HAProxy --> m1["master1:6443<br/>kube-apiserver"] & m2["master2:6443<br/>kube-apiserver"] & m3["master3:6443<br/>kube-apiserver"]

    subgraph FAILOVER["🔄 Failover"]
        lb1["lb1<br/>keepalived MASTER<br/>holds VIP"]
        lb2["lb2<br/>keepalived BACKUP"]
        lb1 -.->|"lb1 down → lb2 takes VIP<br/>trong < 3 giây"| lb2
    end

    style VIP fill:#1d4ed8,stroke:#60a5fa,color:#fff
    style HAProxy fill:#7c3aed,stroke:#a78bfa,color:#fff
    style lb1 fill:#15803d,stroke:#22c55e,color:#fff
    style lb2 fill:#78716c,stroke:#a8a29e,color:#fff
</code></pre>

<h3 id="13-lua-chon-architecture">1.3. Select Architecture</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Option</th>
<th>Advantages</th>
<th>Disadvantages</th>
<th>Recommendation</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Dedicated LB nodes</strong></td>
<td>Isolation, simple, clear separation__HTMLTAG_115___
<td>Need 2 more servers__HTMLTAG_117___
<td>✅ Production</td>
</tr>
<tr>
<td>HAProxy on masters</td>
<td>No additional servers needed</td>
<td>Resource contention, complexity</td>
<td>Lab/Small</td>
</tr>
<tr>
<td>kube-vip (DaemonSet)</td>
<td>No need external LB</td>
<td>Runs inside K8s → chicken-egg</td>
<td>Simple setups</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>We will use <strong>dedicated LB nodes</strong> (lb1 + lb2) for production-grade setup.</p>

<hr>

<h2 id="phan-2-cai-dat-haproxy">PART 2: INSTALLATION AND CONFIGURATION OF HAPROXY</h2>

<h3 id="21-cai-dat-haproxy">2.1. Install HAProxy</h3>
<pre><code class="language-bash"># Trên CẢ HAI lb1 và lb2:

# Cài đặt HAProxy (version 2.8+ LTS)
sudo apt install -y haproxy

# Verify version
haproxy -v
# Output: HAProxy version 2.8.x ...
</code></pre>

<h3 id="22-cau-hinh-haproxy">2.2. HAProxy configuration</h3>
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
<p>TCP check only checks for open ports. To check the API server is really healthy, use HTTP health check:</p>

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

<p>⚠️ <strong>Note:</strong> HTTP health check requires <code>check-ssl verify none</code> because the K8s API uses self-signed certificates. In production, you can configure CA cert for verification.</p>

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

<h2 id="phan-3-cai-dat-keepalived">PART 3: INSTALLATION AND CONFIGURATION KEEPALIVED</h2>

<h3 id="31-keepalived-la-gi">3.1. What is keepalived?</h3>
<p>keepalived uses <strong>VRRP (Virtual Router Redundancy Protocol)</strong> to manage a Virtual IP between 2+ servers:</p>

<pre><code class="language-mermaid">
sequenceDiagram
    participant lb1 as lb1 (MASTER, priority 101)
    participant VIP as VIP 10.10.20.100
    participant lb2 as lb2 (BACKUP, priority 100)

    Note over lb1,lb2: 1. Ban đầu — lb1 giữ VIP

    lb1->>VIP: Giữ VIP
    loop Mỗi 1 giây
        lb1->>lb2: VRRP Advertisement
        lb2-->>lb1: Xác nhận alive
    end

    Note over lb1: 2. lb1 crash!
    lb1--xlb2: ❌ Không gửi VRRP

    Note over lb2: 3+ giây không nhận VRRP
    lb2->>lb2: Promote → MASTER
    lb2->>VIP: Gửi Gratuitous ARP
    lb2->>VIP: Nhận VIP

    Note over lb1,lb2: Failover hoàn tất ~3 giây

    Note over lb1: 4. lb1 recover
    lb1->>lb2: Lên lại, thấy lb2 MASTER
    lb1->>lb1: Trở thành BACKUP (nopreempt)
</code></pre>

<h3 id="32-cai-dat-keepalived">3.2. Install keepalived</h3>
<pre><code class="language-bash"># Trên CẢ HAI lb1 và lb2:
sudo apt install -y keepalived

# Enable non-local IP binding (cho VIP)
echo "net.ipv4.ip_nonlocal_bind = 1" >> /etc/sysctl.d/99-keepalived.conf
sudo sysctl -p /etc/sysctl.d/99-keepalived.conf
</code></pre>

<h3 id="33-cau-hinh-keepalived-tren-lb1">3.3. Keepalived configuration on lb1 (MASTER)</h3>
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

<h3 id="34-cau-hinh-keepalived-tren-lb2">3.4. Keepalived configuration on lb2 (BACKUP)</h3>
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

<h2 id="phan-4-testing-ha-failover">PART 4: TESTING HA FAILOVER</h2>

<h3 id="41-test-1-vip-failover">4.1. Test 1: VIP Failover when lb1 down</h3>
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

<h3 id="42-test-2-haproxy-failure">4.2. Test 2: HAProxy failure → keepalived demo</h3>
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

<h2 id="phan-5-kube-vip-alternative">PART 5: ALTERNATIVE — kube-vip</h2><h3 id="51-kube-vip-la-gi">5.1. What is kube-vip?</h3>
<p>kube-vip runs as static pod on control plane nodes, combining VIP + load balancing in 1 component:</p>

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

<h3 id="52-so-sanh">5.2. Detailed comparison</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Criteria</th>
<th>keepalived + HAProxy</th>
<th>kube-vip</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Extra servers</strong></td>
<td>Need 2 LB servers</td>
<td>No need</td>
</tr>
<tr>
<td><strong>Complexity</strong></td>
<td>2 components need to be managed</td>
<td>1 component</td>
</tr>
<tr>
<td><strong>Independence</strong></td>
<td>✅ Independent of K8s cluster</td>
<td>❌ Runs in K8s (chicken-egg)</td>
</tr>
<tr>
<td><strong>Chicken-egg problem</strong></td>
<td>✅ None</td>
<td>⚠️ need to init before K8s</td>
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

<h3 id="53-kube-vip-quick-setup">5.3. kube-vip Quick Setup (Reference)</h3>
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

<h2 id="phan-6-production-considerations">PART 6: PRODUCTION CONSIDERATIONS</h2>

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

<h3 id="62-monitoring-haproxy">6.2. Monitoring HAProxy with Prometheus</h3>
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

<hr><h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>VIP is critical</strong> for K8s HA — all components connect via VIP, no hardcode master IP</li>
<li><strong>keepalived</strong> manage VIP failover via VRRP protocol, failover < 3 giây</li>
<li><strong>HAProxy</strong> load balance TCP traffic to healthy API servers with health checks</li>
<li><strong>nopreempt</strong> mode avoids unnecessary VIP flapping when MASTER recover</li>
<li><strong>Health check script</strong> in keepalived to ensure VIP is only on the node with HAProxy healthy</li>
<li><strong>Test failover</strong> BEFORE deploying K8s: turn off LB, turn off HAProxy, verify VIP migration</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 EXERCISE</h2>

<h3 id="bt1">Exercise 1: Deploy HAProxy + keepalived</h3>
<ul>
<li>Install HAProxy + keepalived on lb1 and lb2 following instructions</li>
<li>Verify VIP active on lb1</li>
<li>Access HAProxy stats page</li>
</ul>

<h3 id="bt2">Exercise 2: Failover Testing</h3>
<ul>
<li>Test 1: Stop keepalived on lb1, verify VIP moves to lb2</li>
<li>Test 2: Stop HAProxy on lb1, verify automatic demotion</li>
<li>Test 3: Restart both, verify correct state</li>
<li>Measuring failover time with continuous ping</li>
</ul>

<h3 id="bt3">Exercise 3: Advanced</h3>
<ul>
<li>Add Prometheus exporter for HAProxy</li>
<li>Write a notification script that sends an alert to Slack when failover occurs__HTMLTAG_385___
<li>Configure HAProxy logging details in a separate file</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 NEXT POST</h2>
<p>In <strong>Lesson 5: Installing containerd and kubeadm on all nodes</strong>, we will install the container runtime (containerd) and kubeadm tools, getting ready for K8s HA cluster initialization.</p>