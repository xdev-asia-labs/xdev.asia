---
id: 019c9617-fc80-726d-b246-cc3af34c1a8b
title: '第5課：負載均衡'
slug: bai-5-load-balancing
description: >-
  Nginx 負載均衡解說 — 演算法（round-robin、least_conn、ip_hash、hash）、
  upstream 區塊詳細設定、備援伺服器、權重、黏性連線與健康檢查。
  高可用性與效能最佳化的負載均衡器設定指南（含實際範例）。
duration_minutes: 240
is_free: true
video_url: null
sort_order: 5
section_title: "第2部分：反向代理與負載均衡"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx 從基礎到進階
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-155" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-155)"/>
  <g>
    <circle cx="689" cy="217" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="778" cy="106" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="867" cy="255" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="956" cy="144" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="33" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="247" x2="1100" y2="327" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="277" x2="1050" y2="347" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="983.3730669589464,126 983.3730669589464,168 947,189 910.6269330410536,168 910.6269330410536,126.00000000000001 947,105" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>
  <rect x="80" y="50" width="148" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — 第5課</text>
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第5課：負載均衡</tspan>
  </text>
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginx 從基礎到進階</text>
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第2部分：反向代理與負載均衡</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-load-balancing-algorithms"><strong>1. 負載均衡演算法</strong></h2><p>負載均衡是將流量分配到多台伺服器的技術，以最佳化資源使用率、提升吞吐量、降低延遲並確保高可用性。</p><h3 id="11-round-robin"><strong>1.1. Round-Robin（預設）</strong></h3><p>Round-robin 依序將請求輪流分配給每台伺服器。</p><p><strong>設定：</strong></p><pre><code class="language-nginx">upstream backend {
    # Round-robin 為預設值，無需宣告
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

server {
    listen 80;
    server_name example.com;
    
    location / {
        proxy_pass http://backend;
    }
}
</code></pre><p><strong>運作方式：</strong></p><pre><code>請求1 → backend1
請求2 → backend2
請求3 → backend3
請求4 → backend1（重複）
請求5 → backend2
請求6 → backend3
...
</code></pre><p><strong>優點：</strong></p><ul><li>簡單，易於實作</li><li>均勻分配請求</li><li>無需狀態/Session 追蹤</li></ul><p><strong>缺點：</strong></p><ul><li>不考慮伺服器當前負載</li><li>伺服器處理能力不同時不適用</li><li>不維護 Session 親和性</li></ul><p><strong>使用場景：</strong></p><ul><li>無狀態應用程式</li><li>配置相同的伺服器群</li><li>簡單的負載分配</li></ul><p><strong>詳細範例：</strong></p><pre><code class="language-nginx">upstream web_backend {
    server web1.example.com:8080;
    server web2.example.com:8080;
    server web3.example.com:8080;
    server web4.example.com:8080;
}

server {
    listen 80;
    server_name www.example.com;
    
    access_log /var/log/nginx/loadbalancer.log;
    
    location / {
        proxy_pass http://web_backend;
        
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        add_header X-Upstream-Server $upstream_addr always;
    }
}
</code></pre><h3 id="12-least-connections"><strong>1.2. 最少連線（least_conn）</strong></h3><p>最少連線將請求路由到當前活躍連線數最少的伺服器。</p><p><strong>設定：</strong></p><pre><code class="language-nginx">upstream backend {
    least_conn;  # 啟用最少連線演算法
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
    }
}
</code></pre><p><strong>運作方式：</strong></p><pre><code>初始狀態：
backend1: 0 連線
backend2: 0 連線
backend3: 0 連線

請求1 → backend1（0連線）→ backend1: 1連線
請求2 → backend2（0連線）→ backend2: 1連線
請求3 → backend3（0連線）→ backend3: 1連線

backend1 完成 → backend1: 0連線
請求4 → backend1（0連線，最少）
</code></pre><p><strong>優點：</strong></p><ul><li>請求處理時間不一時，負載分配更好</li><li>自動調整忙碌/閒置伺服器</li><li>適合長時間連線</li></ul><p><strong>缺點：</strong></p><ul><li>比 round-robin 追蹤開銷更大</li><li>不維護 Session 親和性</li></ul><p><strong>使用場景：</strong></p><ul><li>請求處理時間不定的應用程式</li><li>長時間連線（串流、下載）</li><li>處理能力不同的伺服器群</li></ul><p><strong>含監控的範例：</strong></p><pre><code class="language-nginx">upstream api_backend {
    least_conn;
    
    server api1.example.com:3000 max_fails=3 fail_timeout=30s;
    server api2.example.com:3000 max_fails=3 fail_timeout=30s;
    server api3.example.com:3000 max_fails=3 fail_timeout=30s;
    
    keepalive 32;
    keepalive_timeout 60s;
}

server {
    listen 80;
    server_name api.example.com;
    
    location / {
        proxy_pass http://api_backend;
        
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
</code></pre><h3 id="13-ip-hash"><strong>1.3. IP 雜湊（ip_hash）</strong></h3><p>IP 雜湊將來自相同客戶端 IP 的請求路由到同一台伺服器（黏性連線）。</p><p><strong>設定：</strong></p><pre><code class="language-nginx">upstream backend {
    ip_hash;  # 啟用基於 IP 的黏性連線
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
    }
}
</code></pre><p><strong>運作方式：</strong></p><pre><code>客戶端 IP: 192.168.1.100
Hash(192.168.1.100) → backend2
→ 192.168.1.100 的所有請求都到 backend2

客戶端 IP: 192.168.1.101
Hash(192.168.1.101) → backend1
→ 192.168.1.101 的所有請求都到 backend1
</code></pre><p><strong>優點：</strong></p><ul><li>Session 親和性（相同客戶端 → 相同伺服器）</li><li>不需要共享 Session 儲存</li><li>簡單且高效</li></ul><p><strong>缺點：</strong></p><ul><li>客戶端數量少時分配不均</li><li>在 NAT/代理後面效果不佳</li><li>伺服器故障時 Session 遺失</li></ul><p><strong>ip_hash 的重要注意事項：</strong></p><pre><code class="language-nginx">upstream backend {
    ip_hash;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
    
    # 不要在 ip_hash 中使用 weight
    # server backend1.example.com weight=3;  # ← 錯誤！
    
    # 可以使用 backup
    server backend4.example.com backup;
    
    # 可以標記為 down
    server backend5.example.com down;
}
</code></pre><h3 id="14-generic-hash"><strong>1.4. 通用雜湊（hash）</strong></h3><p>通用雜湊允許基於任意變數進行雜湊計算。</p><p><strong>基本設定：</strong></p><pre><code class="language-nginx">upstream backend {
    hash $request_uri consistent;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

# 相同 URI → 相同伺服器
# /api/users → 永遠是 backend2
# /api/products → 永遠是 backend1
</code></pre><p><strong>基於不同變數的雜湊：</strong></p><pre><code class="language-nginx"># 1. URI 雜湊（快取友好）
upstream cache_backend {
    hash $request_uri consistent;
    
    server cache1.example.com;
    server cache2.example.com;
    server cache3.example.com;
}

# 2. Cookie 雜湊
upstream cookie_backend {
    hash $cookie_sessionid consistent;
    
    server app1.example.com;
    server app2.example.com;
}

# 3. 自訂標頭雜湊
upstream custom_backend {
    hash $http_x_tenant_id consistent;
    
    server tenant1.example.com;
    server tenant2.example.com;
}

# 4. 查詢參數雜湊
upstream param_backend {
    hash $arg_user_id consistent;
    
    server user1.example.com;
    server user2.example.com;
}
</code></pre><p><strong>優點：</strong></p><ul><li>彈性高（可基於任意變數雜湊）</li><li>一致性雜湊減少快取失效</li><li>適合快取策略</li></ul><p><strong>缺點：</strong></p><ul><li>比其他方法複雜</li><li>需要了解雜湊鍵的分佈</li></ul><p><strong>使用場景：</strong></p><ul><li>快取層（CDN、代理快取）</li><li>多租戶應用程式</li><li>分片策略</li></ul><h3 id="15-random"><strong>1.5. 隨機</strong></h3><p>隨機方法隨機選擇伺服器（可選擇性地帶有權重）。</p><p><strong>設定：</strong></p><pre><code class="language-nginx">upstream backend {
    random;  # 或: random two least_conn;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}
</code></pre><p><strong>優點：</strong></p><ul><li>簡單</li><li>伺服器數量多時分配良好</li><li>低開銷</li></ul><p><strong>缺點：</strong></p><ul><li>不可預測</li><li>不維護 Session 親和性</li></ul><hr><h2 id="2-upstream-block-configuration"><strong>2. upstream 區塊詳細設定</strong></h2><h3 id="21-basic-upstream"><strong>2.1. 基本 upstream 設定</strong></h3><pre><code class="language-nginx">upstream backend {
    server backend1.example.com:8080;
    server backend2.example.com:8080;
    server backend3.example.com:8080;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
    }
}
</code></pre><h3 id="22-multiple-ports"><strong>2.2. 多個連接埠的伺服器</strong></h3><pre><code class="language-nginx">upstream multi_port_backend {
    server backend.example.com:8080;
    server backend.example.com:8081;
    server backend.example.com:8082;
}
</code></pre><h3 id="23-unix-socket"><strong>2.3. Unix Socket 連線</strong></h3><pre><code class="language-nginx">upstream socket_backend {
    server unix:/var/run/app1.sock;
    server unix:/var/run/app2.sock;
    server unix:/var/run/app3.sock;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://socket_backend;
    }
}
</code></pre><h3 id="24-ipv6"><strong>2.4. IPv6 支援</strong></h3><pre><code class="language-nginx">upstream ipv6_backend {
    server [2001:db8::1]:8080;
    server [2001:db8::2]:8080;
    server [2001:db8::3]:8080;
}
</code></pre><h3 id="25-mixed"><strong>2.5. 混合設定</strong></h3><pre><code class="language-nginx">upstream mixed_backend {
    # TCP 伺服器
    server backend1.example.com:8080;
    server 192.168.1.100:8080;
    
    # Unix sockets
    server unix:/var/run/app.sock;
    
    # IPv6
    server [2001:db8::1]:8080;
}
</code></pre><hr><h2 id="3-backup-servers-and-weights"><strong>3. 備援伺服器與權重</strong></h2><h3 id="31-weight"><strong>3.1. 權重（Weight）</strong></h3><p>權重決定每台伺服器接收請求的比例。</p><p><strong>基本設定：</strong></p><pre><code class="language-nginx">upstream backend {
    server backend1.example.com weight=3;  # 60% 流量
    server backend2.example.com weight=1;  # 20% 流量
    server backend3.example.com weight=1;  # 20% 流量
}

# 總權重 = 3 + 1 + 1 = 5
# backend1: 3/5 = 60%
# backend2: 1/5 = 20%
# backend3: 1/5 = 20%
</code></pre><p><strong>使用案例1：處理能力不同的伺服器</strong></p><pre><code class="language-nginx">upstream capacity_backend {
    # 大型伺服器 - 處理50%流量
    server large.example.com weight=5;
    
    # 中型伺服器 - 各25%
    server medium1.example.com weight=2.5;
    server medium2.example.com weight=2.5;
}
</code></pre><p><strong>使用案例2：金絲雀部署</strong></p><pre><code class="language-nginx">upstream canary_backend {
    # 生產伺服器 - 90% 流量
    server prod1.example.com weight=45;
    server prod2.example.com weight=45;
    
    # 金絲雀伺服器 - 10% 流量
    server canary.example.com weight=10;
}

server {
    listen 80;
    server_name app.example.com;
    
    location / {
        proxy_pass http://canary_backend;
        
        add_header X-Upstream-Server $upstream_addr always;
    }
}
</code></pre><p><strong>使用案例3：藍綠部署</strong></p><pre><code class="language-nginx">upstream bluegreen_backend {
    # Blue（當前）- 初始 100%
    server blue.example.com weight=10;
    
    # Green（新版）- 初始 0%
    server green.example.com weight=0;
}

# 逐步遷移:
# 步驟1: weight=10 / weight=0  (100% blue)
# 步驟2: weight=9  / weight=1  (90% blue, 10% green)
# 步驟3: weight=5  / weight=5  (各 50%)
# 步驟4: weight=1  / weight=9  (10% blue, 90% green)
# 步驟5: weight=0  / weight=10 (100% green)
</code></pre><p><strong>重要：ip_hash 中 weight 無效</strong></p><pre><code class="language-nginx">upstream bad_config {
    ip_hash;
    
    # ip_hash 中 weight 會被忽略！
    server backend1.example.com weight=3;  # ← 無效！
    server backend2.example.com weight=1;
}
</code></pre><h3 id="32-backup-servers"><strong>3.2. 備援伺服器</strong></h3><p>備援伺服器只在所有主要伺服器都故障時才接收流量。</p><p><strong>基本設定：</strong></p><pre><code class="language-nginx">upstream backend {
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
    
    # 備援伺服器
    server backup1.example.com backup;
    server backup2.example.com backup;
}
</code></pre><p><strong>運作方式：</strong></p><pre><code>正常運作時：
- backend1、backend2、backend3 處理流量
- backup1、backup2 閒置

backend1 故障：
- backend2、backend3 處理流量
- backup1、backup2 仍閒置

所有主要伺服器故障：
- backup1、backup2 開始處理流量

backend1 恢復：
- 流量回到 backend1
- backup1、backup2 再次閒置
</code></pre><p><strong>維護模式範例：</strong></p><pre><code class="language-nginx">upstream maintenance_backend {
    server prod1.example.com max_fails=3 fail_timeout=30s;
    server prod2.example.com max_fails=3 fail_timeout=30s;
    server prod3.example.com max_fails=3 fail_timeout=30s;
    
    # 維護頁面伺服器
    server maintenance.example.com:8080 backup;
}

server {
    listen 80;
    server_name app.example.com;
    
    location / {
        proxy_pass http://maintenance_backend;
        
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
</code></pre><h3 id="33-combined"><strong>3.3. 權重與備援的組合</strong></h3><p><strong>情境：生產 + 測試 + 緊急</strong></p><pre><code class="language-nginx">upstream prod_staging_emergency {
    # 生產伺服器 - 主要流量
    server prod1.example.com weight=5 max_fails=3 fail_timeout=30s;
    server prod2.example.com weight=5 max_fails=3 fail_timeout=30s;
    
    # 測試伺服器 - 備援
    server staging.example.com weight=2 backup max_fails=5;
    
    # 緊急靜態伺服器 - 最後手段
    server emergency.example.com backup;
}
</code></pre><hr><h2 id="4-sticky-sessions"><strong>4. 黏性連線（Sticky Sessions）</strong></h2><h3 id="41-ip-hash"><strong>4.1. IP 雜湊方式（內建）</strong></h3><pre><code class="language-nginx">upstream backend {
    ip_hash;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}
</code></pre><p><strong>ip_hash 的限制：</strong></p><ul><li>在 NAT 後面效果不佳</li><li>分配不均</li><li>彈性不足</li></ul><h3 id="42-hash-cookie"><strong>4.2. Cookie 雜湊（推薦）</strong></h3><pre><code class="language-nginx">upstream backend {
    hash $cookie_sessionid consistent;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        
        proxy_set_header Cookie $http_cookie;
    }
}
</code></pre><h3 id="43-custom-session"><strong>4.3. 自訂 Session 管理</strong></h3><p><strong>後端建立 Session Cookie：</strong></p><pre><code class="language-javascript">// Node.js 範例
app.use((req, res, next) => {
    if (!req.cookies.server_id) {
        // 用伺服器識別碼設定 Cookie
        res.cookie('server_id', process.env.SERVER_ID, {
            maxAge: 3600000,
            httpOnly: true
        });
    }
    next();
});
</code></pre><p><strong>基於 Cookie 的 Nginx 路由：</strong></p><pre><code class="language-nginx">map $cookie_server_id $backend_server {
    "server1" "backend1.example.com:8080";
    "server2" "backend2.example.com:8080";
    "server3" "backend3.example.com:8080";
    default   "backend1.example.com:8080";
}

server {
    listen 80;
    
    location / {
        proxy_pass http://$backend_server;
        
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Cookie $http_cookie;
    }
}
</code></pre><h3 id="44-header-affinity"><strong>4.4. 標頭 Session 親和性</strong></h3><pre><code class="language-nginx">upstream backend {
    hash $http_x_session_id consistent;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        
        proxy_set_header X-Session-ID $http_x_session_id;
    }
}
</code></pre><hr><h2 id="5-health-checks"><strong>5. 健康檢查</strong></h2><h3 id="51-passive-health-checks"><strong>5.1. 被動健康檢查（開源版）</strong></h3><pre><code class="language-nginx">upstream backend {
    server backend1.example.com max_fails=3 fail_timeout=30s;
    server backend2.example.com max_fails=3 fail_timeout=30s;
    server backend3.example.com max_fails=3 fail_timeout=30s;
}

# max_fails=3: 3次失敗後標記為下線
# fail_timeout=30s: 30秒後重試
</code></pre><p><strong>詳細參數：</strong></p><pre><code class="language-nginx">upstream detailed_health {
    server backend1.example.com
        max_fails=5          # 標記為下線的失敗次數
        fail_timeout=60s     # 重試前的等待時間
        max_conns=1000;      # 最大並發連線數
    
    server backend2.example.com
        max_fails=3
        fail_timeout=30s;
    
    server backend3.example.com backup;
}
</code></pre><h3 id="52-health-endpoint"><strong>5.2. 健康檢查端點</strong></h3><p><strong>後端健康端點（Node.js）：</strong></p><pre><code class="language-javascript">const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    const dbOk = checkDatabase();
    const memUsage = process.memoryUsage();
    const memOk = memUsage.heapUsed < 500 * 1024 * 1024;
    const depsOk = checkDependencies();
    
    if (dbOk && memOk && depsOk) {
        res.status(200).json({
            status: 'healthy',
            timestamp: new Date().toISOString(),
            uptime: process.uptime()
        });
    } else {
        res.status(503).json({
            status: 'unhealthy',
            database: dbOk,
            memory: memOk,
            dependencies: depsOk
        });
    }
});

app.listen(3000);
</code></pre><p><strong>Nginx 健康檢查路由：</strong></p><pre><code class="language-nginx">upstream backend {
    server backend1.example.com:3000 max_fails=3 fail_timeout=30s;
    server backend2.example.com:3000 max_fails=3 fail_timeout=30s;
    server backend3.example.com:3000 max_fails=3 fail_timeout=30s;
}

server {
    listen 80;
    server_name example.com;
    
    location / {
        proxy_pass http://backend;
    }
    
    # 健康檢查端點（僅內部使用）
    location /health {
        access_log off;
        proxy_pass http://backend/health;
        
        allow 127.0.0.1;
        allow 10.0.0.0/8;
        deny all;
    }
}
</code></pre><h3 id="53-external-health-check"><strong>5.3. 外部健康檢查腳本</strong></h3><p><strong>監控腳本（Python）：</strong></p><pre><code class="language-python">#!/usr/bin/env python3
# health_monitor.py

import requests
import time
from datetime import datetime

BACKENDS = [
    'http://backend1.example.com:3000/health',
    'http://backend2.example.com:3000/health',
    'http://backend3.example.com:3000/health',
]

CHECK_INTERVAL = 10  # 秒
UNHEALTHY_THRESHOLD = 3

backend_fail_counts = {url: 0 for url in BACKENDS}

def check_health(url):
    try:
        response = requests.get(url, timeout=5)
        if response.status_code == 200:
            data = response.json()
            return data.get('status') == 'healthy'
        return False
    except Exception as e:
        print(f"檢查 {url} 時發生錯誤: {e}")
        return False

def main():
    while True:
        for url in BACKENDS:
            healthy = check_health(url)
            
            if healthy:
                if backend_fail_counts[url] > 0:
                    print(f"{datetime.now()} - {url} 已恢復")
                backend_fail_counts[url] = 0
            else:
                backend_fail_counts[url] += 1
                print(f"{datetime.now()} - {url} 不健康 "
                      f"（連續失敗 {backend_fail_counts[url]} 次）")
                
                if backend_fail_counts[url] >= UNHEALTHY_THRESHOLD:
                    print(f"將 {url} 標記為下線")
        
        time.sleep(CHECK_INTERVAL)

if __name__ == '__main__':
    main()
</code></pre><hr><h2 id="6-real-world-examples"><strong>6. 實際應用範例</strong></h2><h3 id="61-high-traffic-web-app"><strong>6.1. 高流量 Web 應用程式</strong></h3><pre><code class="language-nginx">upstream web_app {
    least_conn;
    
    server app1.example.com:8080 weight=5 max_fails=3 fail_timeout=30s max_conns=1000;
    server app2.example.com:8080 weight=5 max_fails=3 fail_timeout=30s max_conns=1000;
    server app3.example.com:8080 weight=3 max_fails=3 fail_timeout=30s max_conns=800;
    
    server backup.example.com:8080 backup;
    
    keepalive 128;
    keepalive_timeout 90s;
    keepalive_requests 1000;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.example.com;
    
    ssl_certificate /etc/ssl/certs/example.com.crt;
    ssl_certificate_key /etc/ssl/private/example.com.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    
    location / {
        proxy_pass http://web_app;
        
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
        
        proxy_buffering on;
        proxy_buffer_size 8k;
        proxy_buffers 16 8k;
        
        add_header X-Upstream-Server $upstream_addr always;
        add_header X-Upstream-Response-Time $upstream_response_time always;
    }
    
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        root /var/www/static;
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
}
</code></pre><h3 id="62-api-gateway-microservices"><strong>6.2. 微服務的 API 閘道</strong></h3><pre><code class="language-nginx"># 使用者服務
upstream user_service {
    least_conn;
    server user1.internal:8001 max_fails=2 fail_timeout=20s;
    server user2.internal:8001 max_fails=2 fail_timeout=20s;
    keepalive 32;
}

# 商品服務
upstream product_service {
    least_conn;
    server product1.internal:8002 max_fails=2 fail_timeout=20s;
    server product2.internal:8002 max_fails=2 fail_timeout=20s;
    keepalive 32;
}

# 訂單服務（購物車使用黏性連線）
upstream order_service {
    ip_hash;
    server order1.internal:8003 max_fails=2 fail_timeout=20s;
    server order2.internal:8003 max_fails=2 fail_timeout=20s;
    keepalive 32;
}

# 支付服務（關鍵 - 高冗餘）
upstream payment_service {
    least_conn;
    server payment1.internal:8004 weight=3 max_fails=1 fail_timeout=10s;
    server payment2.internal:8004 weight=3 max_fails=1 fail_timeout=10s;
    server payment3.internal:8004 weight=2 max_fails=1 fail_timeout=10s;
    server payment_backup.internal:8004 backup;
    keepalive 64;
}

limit_req_zone $binary_remote_addr zone=api_limit:10m rate=100r/s;
limit_req_zone $binary_remote_addr zone=payment_limit:10m rate=10r/s;

server {
    listen 443 ssl http2;
    server_name api.example.com;
    
    proxy_http_version 1.1;
    proxy_set_header Connection "";
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    
    location /api/v1/users {
        limit_req zone=api_limit burst=50 nodelay;
        proxy_pass http://user_service;
        proxy_read_timeout 30s;
    }
    
    location /api/v1/products {
        limit_req zone=api_limit burst=50 nodelay;
        proxy_pass http://product_service;
        proxy_read_timeout 30s;
    }
    
    location /api/v1/orders {
        limit_req zone=api_limit burst=30 nodelay;
        proxy_pass http://order_service;
        proxy_read_timeout 60s;
    }
    
    location /api/v1/payments {
        limit_req zone=payment_limit burst=5 nodelay;
        proxy_pass http://payment_service;
        proxy_read_timeout 90s;
        proxy_connect_timeout 10s;
    }
}
</code></pre><hr><h2 id="7-practice-exercises"><strong>7. 練習題</strong></h2><h3 id="exercise-1"><strong>練習1：基本負載均衡</strong></h3><ol><li>在連接埠 3000、3001、3002 執行應用程式的 3 個實例</li><li>使用 round-robin 設定 Nginx</li><li>產生流量並驗證分配情況（查看日誌）</li></ol><h3 id="exercise-2"><strong>練習2：加權負載均衡</strong></h3><ol><li>設定 3 台權重分別為 5、3、2 的後端伺服器</li><li>產生 100 個請求</li><li>計算每台伺服器的請求數並驗證比例（約 50%、30%、20%）</li></ol><h3 id="exercise-3"><strong>練習3：黏性連線</strong></h3><ol><li>設定 ip_hash 負載均衡</li><li>從同一客戶端發送多個請求</li><li>驗證所有請求都到達同一個後端</li></ol><h3 id="exercise-4"><strong>練習4：備援伺服器</strong></h3><ol><li>設定 2 台主要伺服器和 1 台備援伺服器</li><li>停止兩台主要伺服器</li><li>驗證流量切換到備援伺服器</li><li>重新啟動主要伺服器並驗證流量回流</li></ol><h3 id="exercise-5"><strong>練習5：健康檢查</strong></h3><ol><li>設定 max_fails=2 fail_timeout=30s 的後端</li><li>設定 /health 端點</li><li>模擬後端故障（停止服務）</li><li>監控日誌並驗證容錯移轉</li><li>重啟服務並驗證恢復</li></ol><h3 id="exercise-6"><strong>練習6：金絲雀部署</strong></h3><ol><li>設定生產伺服器（各 weight=45）</li><li>新增金絲雀伺服器（weight=10）</li><li>驗證 10% 的流量流向金絲雀</li><li>逐漸增加金絲雀的權重</li><li>完成遷移至金絲雀</li></ol><hr><h2 id="8-troubleshooting"><strong>8. 故障排除</strong></h2><h3 id="81-uneven-distribution"><strong>8.1. 分配不均</strong></h3><p><strong>問題：</strong></p><pre><code>伺服器1: 1000 個請求
伺服器2: 500 個請求
伺服器3: 300 個請求
</code></pre><p><strong>診斷：</strong></p><pre><code class="language-bash"># 檢查權重
grep -A10 "upstream" /etc/nginx/nginx.conf

# 確認是否少數客戶端使用了 ip_hash
# 確認伺服器健康/效能狀況
</code></pre><p><strong>解決方案：</strong></p><pre><code class="language-nginx"># 用 least_conn 取代 round-robin
upstream backend {
    least_conn;
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}
</code></pre><h3 id="82-sticky-sessions"><strong>8.2. 黏性連線無效</strong></h3><p><strong>解決方案：</strong></p><pre><code class="language-nginx"># 用 Cookie 雜湊取代 ip_hash
upstream backend {
    hash $cookie_sessionid consistent;
    server backend1.example.com;
    server backend2.example.com;
}
</code></pre><h3 id="83-health-check"><strong>8.3. 健康檢查未偵測到故障</strong></h3><p><strong>解決方案：</strong></p><pre><code class="language-nginx"># 降低閾值
upstream backend {
    server backend1.example.com max_fails=2 fail_timeout=10s;
    server backend2.example.com max_fails=2 fail_timeout=10s;
}
</code></pre><h3 id="84-timeout"><strong>8.4. 後端逾時問題</strong></h3><p><strong>問題：</strong> 504 Gateway Timeout 錯誤</p><p><strong>解決方案：</strong></p><pre><code class="language-nginx">location / {
    proxy_pass http://backend;
    
    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_read_timeout 120s;
}
</code></pre><h3 id="85-connection-pool"><strong>8.5. 連線池耗盡</strong></h3><p><strong>問題：</strong> 後端連線過多，高負載時出現 502 錯誤</p><p><strong>解決方案：</strong></p><pre><code class="language-nginx">upstream backend {
    server backend1.example.com max_conns=1000;
    server backend2.example.com max_conns=1000;
    
    keepalive 128;
    keepalive_timeout 75s;
    keepalive_requests 1000;
}

server {
    location / {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
    }
}
</code></pre><hr><h2 id="9-best-practices"><strong>9. 最佳實踐</strong></h2><h3 id="91-configuration"><strong>9.1. 設定</strong></h3><pre><code class="language-nginx"># 1. 使用描述性的 upstream 名稱
upstream user_api_backend {  # 良好範例
    # ...
}

# 2. 為設定加上文件說明
upstream payment_service {
    # 使用 least_conn 處理不定的處理時間
    # 為關鍵路徑設置嚴格的健康檢查
    least_conn;
    
    server payment1.internal:8080 weight=3 max_fails=1 fail_timeout=10s;
    server payment2.internal:8080 weight=3 max_fails=1 fail_timeout=10s;
    server payment_backup.internal:8080 backup;
    
    keepalive 32;
}

# 3. 分離關注點
include /etc/nginx/conf.d/upstreams/*.conf;
include /etc/nginx/conf.d/servers/*.conf;
</code></pre><h3 id="92-performance"><strong>9.2. 效能</strong></h3><pre><code class="language-nginx">upstream optimized_backend {
    # 1. 使用 least_conn 獲得更好的分配
    least_conn;
    
    # 2. 啟用 keepalive
    keepalive 128;
    keepalive_timeout 75s;
    keepalive_requests 1000;
    
    # 3. 設置適當的 max_conns
    server backend1.example.com max_conns=1000;
    server backend2.example.com max_conns=1000;
}

server {
    location / {
        proxy_pass http://optimized_backend;
        
        # 4. 使用 HTTP/1.1 搭配 keepalive
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        
        # 5. 啟用緩衝
        proxy_buffering on;
        proxy_buffer_size 8k;
        proxy_buffers 16 8k;
    }
}
</code></pre><h3 id="93-monitoring"><strong>9.3. 監控</strong></h3><pre><code class="language-nginx"># 記錄 upstream 資訊
log_format upstream_log '$remote_addr - [$time_local] '
    '"$request" $status '
    'upstream: $upstream_addr '
    'response_time: $upstream_response_time '
    'connect_time: $upstream_connect_time';

access_log /var/log/nginx/upstream.log upstream_log;

# 新增除錯標頭（非生產環境）
add_header X-Upstream-Server $upstream_addr always;
add_header X-Upstream-Response-Time $upstream_response_time always;

# 啟用 stub_status
server {
    listen 8080;
    location /nginx_status {
        stub_status;
        allow 127.0.0.1;
        deny all;
    }
}
</code></pre><h3 id="94-security"><strong>9.4. 安全性</strong></h3><pre><code class="language-nginx"># 1. 限制每台伺服器的最大連線數
upstream backend {
    server backend1.example.com max_conns=1000;
}

# 2. 設定逾時
proxy_connect_timeout 10s;
proxy_send_timeout 60s;
proxy_read_timeout 60s;

# 3. 隱藏 upstream 錯誤
proxy_intercept_errors on;
error_page 502 503 504 /50x.html;

# 4. 速率限制
limit_req_zone $binary_remote_addr zone=backend_limit:10m rate=100r/s;

location / {
    limit_req zone=backend_limit burst=50 nodelay;
    proxy_pass http://backend;
}
</code></pre><hr><h2 id="summary"><strong>總結</strong></h2><p>本課學到了：</p><ul><li>✅ 負載均衡演算法（round-robin、least_conn、ip_hash、hash、random）</li><li>✅ upstream 區塊詳細設定</li><li>✅ 備援伺服器與權重分配</li><li>✅ 黏性連線策略</li><li>✅ 主動與被動健康檢查</li><li>✅ 實際應用範例與最佳實踐</li></ul><p><strong>下一課：</strong> 快取 — 如何快取靜態內容、API 回應，以及使用代理快取最佳化效能。</p>
