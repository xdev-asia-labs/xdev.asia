---
id: 019d8b30-b225-7001-c002-e0c5f8200125
title: 第 25 課：監控、審核日誌記錄、備份/復原和故障排除
slug: bai-25-monitoring-audit-logging-backup-restore-va-troubleshooting
description: Prometheus + Grafana監控、稽核設備配置、稽核日誌分析、Raft備份/復原、常見問題排查、升級策略。
duration_minutes: 220
is_free: true
video_url: null
sort_order: 25
section_title: 第七部分：生產、企業與營運
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-5372" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-5372）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="612" cy="266" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="624" cy="258" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="636" cy="250" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="648" cy="242" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="660" cy="234" r="14" fill="#f87171" opacity="0.05"/>
    <圓cx =“750”cy =“80”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“750”cy =“136”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“750”cy =“164”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <圓cx =“778”cy =“108”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <圓cx =“806”cy =“80”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“806”cy =“136”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“806”cy =“164”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“834”cy =“80”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“834”cy =“108”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <圓cx =“834”cy =“164”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <圓cx =“862”cy =“108”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <圓cx =“862”cy =“164”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“890”cy =“80”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“890”cy =“136”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“890”cy =“164”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <line x1 =“600”y1 =“126”x2 =“1100”y2 =“206”筆畫=“#f87171”筆觸寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“156”x2 =“1050”y2 =“226”筆畫=“#f87171”筆畫寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=「961.507041555162,105.5 961.507041555162,146.5 926,167 890.492958444838,146.5 890.492958444838,105.50000000000001 926,85" 填充 = "無" 筆畫 = "#f87171" 筆畫寬度 = "1" 不透明度 = "0.12"/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#f87171”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“#f87171”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — 第 25 堂課</text>

  <!-- 標題 -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 25 課：監控、審核日誌記錄</tspan>
<tspan x="60" dy="42">備份/復原與故障排除</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 7 部分：生產、企業和營運</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-monitoring-voi-prometheus-grafana"><strong>1.使用Prometheus + Grafana進行監控</strong></h2>

<h3 id="enable-telemetry"><strong>啟用遙測</strong></h3>

<pre><code class="language-hcl">#Vault.hcl
遙測{
  prometheus_retention_time = "30s"
  禁用主機名稱 = true
  
  # StatsD（可選 nếu dùng StatsD 導出器）
  # statsd_address = "statsd:8125"
}

偵聽器“tcp”{
  地址 =“0.0.0.0:8200”
  tls_disable = false
  # ...

  遙測{
    unauthenticated_metrics_access = true # Hoặc false + dùng token
  }
}
</code></pre>

<h3 id="prometheus-config"><strong>普羅米修斯抓取配置</strong></h3>

<pre><code class="language-yaml"># prometheus.yml
scrap_configs：
  - 工作名稱：'金庫'
    指標路徑：'/v1/sys/指標'
    參數：
      格式：['普羅米修斯']
    方案：https
    tls_配置：
      ca_檔：/etc/prometheus/vault-ca.pem
    # Nếu unauthenticated_metrics_access = false：
    # bearer_token_file: /etc/prometheus/vault-token
    靜態配置：
      - 目標：
          - 'vault-node-1:8200'
          - 'vault-node-2:8200'
          - 'vault-node-3:8200'
        標籤：
          集群：“生產”
</code></pre>

<h3 id="key-metrics"><strong>要監控的關鍵指標</strong></h3><表>
<標題>
<tr><th>指標</th><th>描述</th><th>警報閾值</th></tr>
</標題>
<正文>
<tr><td><code>vault.core.handle_request.count</code></td><td>請求總數</td><td>趨勢分析</td></tr>
<tr><td><code>vault.core.handle_request.duration</code></td><td>請求延遲</td><td>P99 > 500ms</td></tr>
<tr><td><code>vault.token.count</code></td><td>活躍代幣</td><td>突然飆升</td></tr>
<tr><td><code>vault.expire.num_leases</code></td><td>有效租約</td><td>> 256000</td></tr>
<tr><td><code>vault.runtime.alloc_bytes</code></td><td>記憶體分配</td><td>> 80% RAM</td></tr>
<tr><td><code>vault.runtime.gc_pause_ns</code></td><td>GC暫停</td><td>> 2s</td></tr>
<tr><td><code>vault.raft.leader.lastContact</code></td><td>自領導者聯繫以來的時間</td><td>> 200ms</td></tr>
<tr><td><code>vault.raft.commitTime</code></td><td>Raft 提交時間</td><td>> 25ms</td></tr>
<tr><td><code>vault.seal.unseal</code></td><td>解封事件</td><td>意外計數</td></tr>
<tr><td><code>vault.audit.log_response_failure</code></td><td>審核日誌失敗</td><td>Any > 0</td></tr>
</tbody>
</表>

<h3 id="grafana-dashboard"><strong>Grafana 儀表板</strong></h3>

<pre><code class="語言-json">{
  "dashboard_id": "保管庫概述",
  “面板”：[
    {
      "title": "請求率",
      “查詢”：“速率（vault_core_handle_request_count [5m]）”
    },
    {
      "title": "請求延遲 P99",
      “查詢”：“histogram_quantile（0.99，速率（vault_core_handle_request_duration_bucket [5m]））”
    },
    {
      "title": "有效租賃",
      “查詢”：“vault_expire_num_leases”
    },
    {
      "title": "Raft Leader 最後一次聯絡",
      “查詢”：“vault_raft_leader_lastContact”
    },
    {
      "title": "記憶體使用量",
      “查詢”：“vault_runtime_alloc_bytes / 1024 / 1024”
    }
  ]
}
</code></pre>

<h3 id="alerting-rules"><strong>提醒規則</strong></h3>

<pre><code class="language-yaml">#Vault-alerts.yml
團體：
  - 名稱：金庫
    規則：
      - 警報：VaultSealed
        表達式：vault_core_unsealed == 0
        用於：1m
        標籤：
          嚴重程度：嚴重
        註：
          摘要：“Vault節點已被密封”

      - 警報：VaultHighLatency
        expr: histogram_quantile(0.99, 速率(vault_core_handle_request_duration_bucket[5m])) > 0.5
        用於：5m
        標籤：
          嚴重性：警告

      - 警報：VaultLeadershipLost
        表達式：vault_raft_leader_lastContact > 200
        持續時間：30秒
        標籤：
          嚴重程度：嚴重

      - 警報：VaultAuditFailure
        expr: 增加(vault_audit_log_response_failure[5m]) > 0
        標籤：
          嚴重程度：嚴重
          
      - 警報：VaultTooManyLeases
        expr:Vault_expire_num_leases > 200000
        適合：10m
        標籤：
          嚴重性：警告
</code></pre>

<h2 id="2-audit-logging"><strong>2.稽核日誌</strong></h2>

<h3 id="enable-audit"><strong>設定審核設備</strong></h3>

<pre><code class="language-bash"># 檔案審核器
vault audit enable file file_path=/var/log/vault/audit.log

# Syslog審計設備
vault audit enable syslog tag="vault" facility="LOCAL0"

# 套接字審計設備（cho 日誌聚合器）
vault audit enable socket \
  地址=“logstash.company.com:9000”\
  套接字類型=“TCP”# Luôn 啟用 2 個審核設備！
# Vault sẽ BLOCK tất cả requests nếu không có 稽核設備 nào hoạt động

# 列出審計設備
vault audit list -detailed
</code></pre>

<h3 id="audit-log-format"><strong>審核日誌格式</strong></h3>

<pre><code class="語言-json">{
  "時間": "2025-01-15T10:30:00.000Z",
  “類型”：“請求”，
  「授權」：{
    "client_token": "hmac-sha256:abc123...",
    "accessor": "hmac-sha256:def456...",
    "display_name": "approle-cicd",
    “策略”：[“cicd-deploy”，“預設”]，
    「元資料」：{
      "role_name": "cicd-管道"
    },
    "entity_id": "實體-uuid-此處",
    “token_type”：“服務”
  },
  「請求」：{
    "id": "請求 uuid",
    “操作”：“讀取”，
    "mount_type": "kv",
    “路徑”：“秘密/數據/生產/資料庫”，
    “遠端位址”：“10.0.1.50”，
    “遠端連接埠”：45678
  }
}
</code></pre>

<h3 id="log-analysis"><strong>日誌分析查詢</strong></h3>

<pre><code class="language-bash"># Tìm 請求失敗
貓 /var/log/vault/audit.log | \
  jq -r 'select(.type == "response" and .response.data == null) |
  [.time、.request.path、.auth.display_name、.error] | @tsv'

# Tìm 政策否認
貓 /var/log/vault/audit.log | \
  jq -r 'select(.error != null and (.error | contains("權限被拒絕"))) |
  [.時間、.請求路徑、.請求操作、.auth.顯示名稱] | @tsv'

# 訪問次數最多的 10 個路徑
貓 /var/log/vault/audit.log | \
  jq -r 'select(.type == "請求") | .request.path'| \
  排序| uniq-c|排序-rn |頭-10

# 按身分要求
貓 /var/log/vault/audit.log | \
  jq -r 'select(.type == "請求") | .auth.display_name' | \
  排序| uniq-c|排序-rn
</code></pre>

<h2 id="3-backup-restore"><strong>3.備份與復原</strong></h2>

<h3 id="raft-backup"><strong>Raft 快照備份</strong></h3>

<pre><code class="language-bash">#!/bin/bash
#vault-backup.sh

VAULT_ADDR =「https://vault.company.com:8200"
BACKUP_DIR="/備份/保管庫"
RETENTION_DAYS=30
日期=$(日期+%Y%m%d_%H%M%S)

# 快照
vault operator raft snapshot save \
  “${BACKUP_DIR}/vault-snapshot-${DATE}.snap”

# 驗證快照
vault operator raft snapshot inspect \
  “${BACKUP_DIR}/vault-snapshot-${DATE}.snap”

# 上傳到S3
aws s3 cp "${BACKUP_DIR}/vault-snapshot-${DATE}.snap" \
  “s3://company-backup/vault/vault-snapshot-${DATE}.snap”\
  --sse aws:kms

# 清理舊備份
尋找“${BACKUP_DIR}”-名稱“*.snap”-mtime +${RETENTION_DAYS}-刪除
</code></pre>

<pre><code class="language-bash"># Cron 作業 — 備份 mỗi giờ
0 * * * * /opt/vault/scripts/vault-backup.sh >> /var/log/vault-backup.log 2>&1
</code></pre>

<h3 id="restore"><strong>恢復</strong></h3>

<pre><code class="language-bash"># 恢復快照 — CHÚ Ý: 覆蓋數據
vault operator raft snapshot restore \
  /備份/vault/vault-snapshot-20250115_100000.snap

# 強制恢復 (khi cluster đã thay đổi)
vault operator raft snapshot restore -force \
  /備份/vault/vault-snapshot-20250115_100000.snap
</code></pre>

<h2 id="4-故障排除"><strong>4.故障排除</strong></h2>

<h3 id="common-issues"><strong>常見問題</strong></h3><表>
<標題>
<tr><th>問題</th><th>原因</th><th>解</th></tr>
</標題>
<正文>
<tr><td>重啟後保管庫密封</td><td>無法自動解封</td><td>KMS/HSM 設定密封</td></tr>
<tr><td>503 服務無法使用</td><td>節點處於備用/DR 輔助</td><td>將請求路由到活動節點</td></tr>
<tr><td>租約數量不斷增加</td><td>客戶端不撤銷租約</td><td>整潔的租約，檢查 TTL</td></tr>
<tr><td>令牌儲存太大</td><td>孤兒令牌不會撤銷</td><td>令牌整潔，減少TTL</td></tr>
<tr><td>Raft Leader 抖動</td><td>網路不穩定</td><td>心跳超時增加</td></tr>
<tr><td>審核設備阻塞</td><td>磁碟已滿/日誌目標已關閉</td><td>釋放磁碟，修復日誌目標</td></tr>
<tr><td>記憶體使用率高</td><td>租約/令牌過多</td><td>整理和調整 TTL</td></tr>
</tbody>
</表>

<h3 id="debug-commands"><strong>偵錯指令</strong></h3>

<pre><code class="language-bash"># 伺服器狀態
vault status
vault status -format=json

# Raft集群信息
vault operator raft list-peers
vault operator raft autopilot state

# 領導者訊息
vault operator step-down  # Force leader election

# 關鍵狀態
vault operator key-status

# 租賃管理
vault lease list -prefix "database/"
vault lease revoke -prefix "database/creds/app-role/"

# 令牌整潔
vault write sys/tidy/tidy-token-store \
  安全緩衝區=“72小時”

# 租約整潔
vault write sys/leases/tidy \
  tidy_type="不可撤銷"

# 調試包（支援）
vault debug -duration=2m -targets=metrics,server-status,replication-status

# 讀取內部計數器
vault read sys/internal/counters/tokens
vault read sys/internal/counters/requests
</code></pre>

<h3 id="upgrade-strategy"><strong>升級策略</strong></h3>

<pre><code class="language-bash"># 1. 備份 trước khi 升級
vault operator raft snapshot save /backup/pre-upgrade.snap

# 2.閱讀發行說明+升級指南

# 3. 升級備用節點trước（滾動升級）
# 節點3（備用）
systemctl 停止金庫
# 替換二進位文件
cpVault-新/usr/bin/vault
systemctl 啟動保管庫

# 驗證節點重新加入叢集
vault operator raft list-peers

# 4. 重複 cho 節點 2

#5. 下台領導，升級cuối cùng
vault operator step-down
# 等待新的領導人選舉
systemctl 停止金庫
cpVault-新/usr/bin/vault
systemctl 啟動保管庫

# 6. 驗證
vault status
vault operator raft list-peers
vault operator raft autopilot state
</code></pre>

<h2 id="5-tong-ket"><strong>5。摘要</strong></h2>

<ul>
<li><p><strong>監控</strong> - 需要 Prometheus 指標 + Grafana 儀表板 + 警報</p></li>
<li><p><strong>審核</strong> — 始終啟用 ≥ 2 個審核設備，定期分析日誌</p></li>
<li><p><strong>備份</strong> — 自動 Raft 快照、異地儲存、定期測試復原</p></li>
<li><p><strong>故障排除</strong> - 了解偵錯指令、常見問題以及如何處理它們</p></li>
<li><p><strong>升級</strong> - HA叢集滾動升級，總是先備份</p></li>
</ul>

<p>至此，您已完成<strong>從基礎到高級的整個 HashiCorp Vault 系列</strong>。從設定、秘密引擎、身份驗證方法、策略、代理商、Kubernetes、CI/CD 到生產 HA、企業、監控和操作。 </p>
