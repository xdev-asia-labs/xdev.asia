---
id: 019c9617-fb9e-7077-950d-b4fa097ce8b1
title: 'レッスン 20: セキュリティのベスト プラクティス'
slug: bai-20-security-best-practices
description: SSL/TLS、認証方法、ネットワーク セキュリティ、保存時の暗号化、監査ログ、およびクラスター セキュリティの強化を構成します。
duration_minutes: 110
is_free: true
video_url: null
sort_order: 20
section_title: 'パート 5: セキュリティと機能強化'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: Patroni と etcd による PostgreSQL の高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1290" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1290)"/>

  <!-- Decorations -->
  <g>
    <circle cx="892" cy="146" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="684" cy="98" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="976" cy="50" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="768" cy="262" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="214" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="66" x2="1100" y2="146" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="96" x2="1050" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1001.507041555162,145.5 1001.507041555162,186.5 966,207 930.492958444838,186.5 930.492958444838,145.5 966,125" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — レッスン 20</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 20: セキュリティのベスト プラクティス</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Patroni と PostgreSQL の高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: セキュリティと上級_</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標_</h2><p>このレッスンの後、次のことを行います:</p><ul><li>PostgreSQL に SSL/TLS 暗号化を実装する_</li><li>安全な認証を構成する</li><li>ネットワークを強化するセキュリティ</li><li>保存時の暗号化を有効にする_</li><li>ログ監査を設定</li><li>HA クラスターにセキュリティのベスト プラクティスを適用</li></ul><h2 id="1-ssltls-encryption">1。 SSL/TLS 暗号化</h2><h3 id="11-generate-ssl-certificates">1.1。 SSL 証明書を生成_</h3><pre><code class="language-bash"># Create certificate directory
sudo mkdir -p /etc/postgresql/ssl
cd /etc/postgresql/ssl

# Generate CA private key
sudo openssl genrsa -out ca-key.pem 4096

# Generate CA certificate
sudo openssl req -new -x509 -days 3650 -key ca-key.pem -out ca-cert.pem \
  -subj "/CN=PostgreSQL-CA/O=MyOrg/C=US"

# Generate server private key
sudo openssl genrsa -out server-key.pem 4096

# Generate server certificate signing request
sudo openssl req -new -key server-key.pem -out server-req.pem \
  -subj "/CN=postgres.example.com/O=MyOrg/C=US"

# Sign server certificate
sudo openssl x509 -req -in server-req.pem -days 365 \
  -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial \
  -out server-cert.pem

# Set permissions
sudo chmod 600 server-key.pem
sudo chown postgres:postgres /etc/postgresql/ssl/*
</code></pre><h3 id="12-configure-postgresql-for-ssl">1.2。 PostgreSQL を SSL_</h3><pre><code class="language-sql">-- Enable SSL
ALTER SYSTEM SET ssl = on;
ALTER SYSTEM SET ssl_cert_file = '/etc/postgresql/ssl/server-cert.pem';
ALTER SYSTEM SET ssl_key_file = '/etc/postgresql/ssl/server-key.pem';
ALTER SYSTEM SET ssl_ca_file = '/etc/postgresql/ssl/ca-cert.pem';

-- SSL ciphers (strong only)
ALTER SYSTEM SET ssl_ciphers = 'HIGH:MEDIUM:+3DES:!aNULL';
ALTER SYSTEM SET ssl_prefer_server_ciphers = on;
ALTER SYSTEM SET ssl_min_protocol_version = 'TLSv1.2';

-- Restart required
</code></pre><pre><code class="language-bash">sudo systemctl restart patroni
</code></pre><h3 id="13-configure-pghbaconf-for-ssl">1.3 用に構成します。 pg_hba.conf を SSL</h3><pre><code class="language-bash"># /var/lib/postgresql/18/data/pg_hba.conf

# Require SSL for all connections
hostssl all all 0.0.0.0/0 scram-sha-256

# Or mixed (SSL preferred but not required)
hostssl all all 0.0.0.0/0 scram-sha-256
host    all all 0.0.0.0/0 scram-sha-256

# Reload
sudo -u postgres psql -c "SELECT pg_reload_conf();"
</code></pre><h3 id="14-test-ssl-connection">1.4 用に構成します。 SSL 接続をテスト</h3><pre><code class="language-bash"># Connect with SSL
psql "host=10.0.1.11 port=5432 dbname=postgres user=postgres sslmode=require"

# Verify SSL
psql -h 10.0.1.11 -U postgres -c "SELECT ssl_is_used();"
# ssl_is_used
# ------------
#  t          ← true = SSL enabled ✅

# Check SSL cipher
psql -h 10.0.1.11 -U postgres -c "
  SELECT pid, usename, ssl, client_addr, backend_type
  FROM pg_stat_ssl
  JOIN pg_stat_activity USING (pid);
"
</code></pre><h3 id="15-client-certificate-authentication">1.5。クライアント証明書の認証</h3><pre><code class="language-bash"># Generate client certificate
sudo openssl genrsa -out client-key.pem 4096
sudo openssl req -new -key client-key.pem -out client-req.pem \
  -subj "/CN=app_user/O=MyOrg/C=US"
sudo openssl x509 -req -in client-req.pem -days 365 \
  -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial \
  -out client-cert.pem

# Copy to client machine
scp client-*.pem app_user@app-server:~/.postgresql/
</code></pre><pre><code class="language-bash"># pg_hba.conf - require client cert
hostssl all all 0.0.0.0/0 cert

# Connect with client cert
psql "host=10.0.1.11 dbname=postgres user=app_user \
  sslmode=verify-full \
  sslcert=~/.postgresql/client-cert.pem \
  sslkey=~/.postgresql/client-key.pem \
  sslrootcert=~/.postgresql/ca-cert.pem"
</code></pre><h2 id="2-authentication">2。認証_</h2><h3 id="21-scram-sha-256-recommended">2.1。 SCRAM-SHA-256 (推奨)</h3><pre><code class="language-sql">-- Set password encryption method
ALTER SYSTEM SET password_encryption = 'scram-sha-256';

-- Create user with SCRAM
CREATE USER app_user WITH PASSWORD 'strong_password';

-- Update existing user password
\password existing_user  -- Will use SCRAM
</code></pre><pre><code class="language-bash"># pg_hba.conf
host all all 0.0.0.0/0 scram-sha-256
</code></pre><h3 id="22-disable-weak-authentication">2.2。弱い認証</h3><pre><code class="language-bash"># DON'T USE:
# host all all 0.0.0.0/0 trust  ❌ No password!
# host all all 0.0.0.0/0 md5    ❌ Weak encryption

# USE:
# hostssl all all 0.0.0.0/0 scram-sha-256  ✅
# hostssl all all 0.0.0.0/0 cert           ✅
</code></pre><h3 id="23-password-policies">2.3 を無効にします。パスワード ポリシー</h3><pre><code class="language-sql">-- Install passwordcheck extension
CREATE EXTENSION IF NOT EXISTS passwordcheck;

-- Configure in postgresql.conf
ALTER SYSTEM SET passwordcheck.min_length = 12;
ALTER SYSTEM SET passwordcheck.require_special = on;
ALTER SYSTEM SET passwordcheck.require_digit = on;
ALTER SYSTEM SET passwordcheck.require_upper = on;

-- Test - weak password will be rejected
CREATE USER weak_user WITH PASSWORD '12345';  -- ERROR
CREATE USER strong_user WITH PASSWORD 'MyStr0ng!Pass123';  -- OK
</code></pre><h3 id="24-role-based-access-control">2.4。ロールベースのアクセス制御_</h3><pre><code class="language-sql">-- Create roles
CREATE ROLE readonly;
CREATE ROLE readwrite;
CREATE ROLE admin;

-- Grant privileges
GRANT CONNECT ON DATABASE myapp TO readonly;
GRANT USAGE ON SCHEMA public TO readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;

GRANT CONNECT ON DATABASE myapp TO readwrite;
GRANT USAGE ON SCHEMA public TO readwrite;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO readwrite;

-- Create users with roles
CREATE USER app_readonly WITH PASSWORD 'pass123';
GRANT readonly TO app_readonly;

CREATE USER app_readwrite WITH PASSWORD 'pass456';
GRANT readwrite TO app_readwrite;

-- Default privileges for future tables
ALTER DEFAULT PRIVILEGES IN SCHEMA public
GRANT SELECT ON TABLES TO readonly;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO readwrite;
</code></pre><h2 id="3-network-security">3。ネットワーク セキュリティ_</h2><h3 id="31-firewall-configuration">3.1。ファイアウォール構成</h3><pre><code class="language-bash"># Using ufw
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Allow SSH
sudo ufw allow 22/tcp

# Allow PostgreSQL only from specific IPs
sudo ufw allow from 10.0.1.0/24 to any port 5432 proto tcp

# Allow Patroni REST API (internal only)
sudo ufw allow from 10.0.1.0/24 to any port 8008 proto tcp

# Allow etcd (internal only)
sudo ufw allow from 10.0.1.0/24 to any port 2379 proto tcp
sudo ufw allow from 10.0.1.0/24 to any port 2380 proto tcp

# Enable firewall
sudo ufw enable
sudo ufw status
</code></pre><pre><code class="language-bash"># Using iptables
# Allow PostgreSQL from specific subnet
sudo iptables -A INPUT -p tcp -s 10.0.1.0/24 --dport 5432 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 5432 -j DROP

# Allow Patroni REST API (internal)
sudo iptables -A INPUT -p tcp -s 10.0.1.0/24 --dport 8008 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 8008 -j DROP

# Save rules
sudo iptables-save &gt; /etc/iptables/rules.v4
</code></pre><h3 id="32-network-segmentation">3.2。ネットワーク セグメンテーション</h3><pre><code class="language-text">Architecture:

Internet
  ↓
[Load Balancer / Application Layer]
  ↓ (Private Network 10.0.1.0/24)
[PostgreSQL HA Cluster]
  node1: 10.0.1.11
  node2: 10.0.1.12
  node3: 10.0.1.13
  
Security Rules:
- PostgreSQL port 5432: Only accessible from app servers
- Patroni port 8008: Internal cluster only
- etcd ports 2379/2380: Internal cluster only
- SSH port 22: Bastion host only
</code></pre><h3 id="33-vpnprivate-network">3.3。 VPN/プライベート ネットワーク</h3><pre><code class="language-bash"># Use WireGuard for inter-node communication
# Install WireGuard
sudo apt-get install -y wireguard

# Generate keys
wg genkey | tee privatekey | wg pubkey &gt; publickey

# Configure /etc/wireguard/wg0.conf
[Interface]
PrivateKey = &lt;private_key&gt;
Address = 10.100.0.1/24
ListenPort = 51820

[Peer]
PublicKey = &lt;peer_public_key&gt;
AllowedIPs = 10.100.0.2/32
Endpoint = 203.0.113.2:51820

# Start WireGuard
sudo wg-quick up wg0
sudo systemctl enable wg-quick@wg0
</code></pre><h2 id="4-encryption-at-rest">4。保存時の暗号化_</h2><h3 id="41-file-system-encryption-luks">4.1。ファイル システム暗号化 (LUKS)</h3><pre><code class="language-bash"># Encrypt data volume
sudo cryptsetup luksFormat /dev/sdb
sudo cryptsetup luksOpen /dev/sdb pgdata_encrypted

# Create filesystem
sudo mkfs.ext4 /dev/mapper/pgdata_encrypted

# Mount
sudo mkdir -p /var/lib/postgresql/encrypted
sudo mount /dev/mapper/pgdata_encrypted /var/lib/postgresql/encrypted

# Auto-mount on boot (/etc/crypttab)
pgdata_encrypted /dev/sdb none luks

# /etc/fstab
/dev/mapper/pgdata_encrypted /var/lib/postgresql/encrypted ext4 defaults 0 2
</code></pre><h3 id="42-transparent-data-encryption-tde">4.2。透過的データ暗号化 (TDE)</h3><pre><code class="language-text">Note: PostgreSQL 18 doesn't have built-in TDE
Options:
1. Use filesystem encryption (LUKS) ✅
2. Use pgcrypto extension for column-level encryption
3. Wait for future PostgreSQL TDE support
4. Use commercial solutions (EDB, Cybertec)
</code></pre><h3 id="43-column-level-encryption">4.3。列レベルの暗号化_</h3><pre><code class="language-sql">-- Install pgcrypto
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Encrypt data
CREATE TABLE sensitive_data (
  id SERIAL PRIMARY KEY,
  name TEXT,
  ssn BYTEA  -- Encrypted
);

-- Insert encrypted data
INSERT INTO sensitive_data (name, ssn)
VALUES ('John Doe', pgp_sym_encrypt('123-45-6789', 'encryption_key'));

-- Decrypt data
SELECT id, name, 
       pgp_sym_decrypt(ssn, 'encryption_key') AS ssn
FROM sensitive_data;

-- Better: Store encryption key in vault (HashiCorp Vault)
</code></pre><h2 id="5-audit-logging">5。監査ログ_</h2><h3 id="51-pgaudit-extension">5.1。 pgAudit 拡張機能_</h3><pre><code class="language-bash"># Install pgAudit
sudo apt-get install -y postgresql-18-pgaudit

# Or compile from source
cd /tmp
git clone https://github.com/pgaudit/pgaudit.git
cd pgaudit
make install USE_PGXS=1
</code></pre><pre><code class="language-sql">-- Enable pgAudit
ALTER SYSTEM SET shared_preload_libraries = 'pgaudit';

-- Restart required
</code></pre><pre><code class="language-bash">sudo systemctl restart patroni
</code></pre><pre><code class="language-sql">-- Create extension
CREATE EXTENSION IF NOT EXISTS pgaudit;

-- Configure audit logging
ALTER SYSTEM SET pgaudit.log = 'write, ddl, role';
ALTER SYSTEM SET pgaudit.log_catalog = off;
ALTER SYSTEM SET pgaudit.log_client = on;
ALTER SYSTEM SET pgaudit.log_level = 'log';
ALTER SYSTEM SET pgaudit.log_parameter = on;
ALTER SYSTEM SET pgaudit.log_relation = on;
ALTER SYSTEM SET pgaudit.log_statement_once = off;

-- Reload
SELECT pg_reload_conf();
</code></pre><p><strong>Auditクラス_</strong>:</p><ul><li><code>READ</code>: SELECT、COPY FROM</li><li><code>WRITE</code>: INSERT、UPDATE、DELETE、TRUNCATE、 COPY TO_</li><li><code>FUNCTION</code>: 関数呼び出し</li><li><code>ROLE</code>: GRANT、REVOKE、CREATE/DROP ROLE</li><li><code>DDL</code>: 作成、変更、ドロップ</li><li><code>MISC</code>: 破棄、フェッチ、チェックポイント、バキューム、 SET</li><li><code>ALL</code>: すべて</li></ul><h3 id="52-log-analysis">5.2。ログ分析</h3><pre><code class="language-bash"># Audit logs in PostgreSQL log files
sudo grep "AUDIT:" /var/lib/postgresql/18/data/log/postgresql-*.log

# Example audit log entry:
# 2024-11-25 10:00:00 UTC [12345]: [1-1] user=admin,db=myapp AUDIT: SESSION,1,1,WRITE,DELETE,TABLE,public.users,"DELETE FROM users WHERE id = 123",&lt;not logged&gt;
</code></pre><h3 id="53-centralized-logging">5.3。一元化されたログ_</h3><pre><code class="language-yaml"># Use filebeat to ship logs to ELK stack
# /etc/filebeat/filebeat.yml
filebeat.inputs:
  - type: log
    enabled: true
    paths:
      - /var/lib/postgresql/18/data/log/*.log
    fields:
      type: postgresql
      cluster: postgres-ha
      node: node1

output.elasticsearch:
  hosts: ["elasticsearch:9200"]
  index: "postgresql-%{+yyyy.MM.dd}"
</code></pre><h2 id="6-security-hardening">6。セキュリティ強化</h2><h3 id="61-disable-unnecessary-features">6.1。不要な機能を無効にする_</h3><pre><code class="language-sql">-- Disable file system access functions (for non-superusers)
REVOKE EXECUTE ON FUNCTION pg_read_file(text) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION pg_read_binary_file(text) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION pg_ls_dir(text) FROM PUBLIC;

-- Disable COPY TO/FROM file
-- (Use COPY TO/FROM PROGRAM or stdin/stdout instead)
</code></pre><h3 id="62-limit-superuser-access">6.2。スーパーユーザーのアクセスを制限</h3><pre><code class="language-sql">-- Create admin role with specific privileges instead of superuser
CREATE ROLE db_admin WITH LOGIN PASSWORD 'strong_password';
GRANT ALL PRIVILEGES ON DATABASE myapp TO db_admin;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO db_admin;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO db_admin;

-- Don't use 'postgres' superuser for applications!
</code></pre><h3 id="63-resource-limits">6.3。リソース制限_</h3><pre><code class="language-sql">-- Connection limits per user
ALTER USER app_user CONNECTION LIMIT 50;

-- Statement timeout per user
ALTER USER app_user SET statement_timeout = '30s';

-- Lock timeout
ALTER USER app_user SET lock_timeout = '5s';

-- Idle in transaction timeout
ALTER USER app_user SET idle_in_transaction_session_timeout = '5min';
</code></pre><h3 id="64-hide-postgresql-version">6.4。 PostgreSQL バージョンを非表示_</h3><pre><code class="language-sql">-- Change server_version_num (cosmetic security)
-- Note: Doesn't actually hide from determined attackers
ALTER SYSTEM SET application_name = 'myapp';
</code></pre><h3 id="65-secure-replication">6.5。安全なレプリケーション</h3><pre><code class="language-yaml"># In patroni.yml
postgresql:
  authentication:
    replication:
      username: replicator
      password: !vault |  # Use Ansible Vault
        $ANSIBLE_VAULT;1.1;AES256
        ...encrypted...
    
    superuser:
      username: postgres
      password: !vault |
        $ANSIBLE_VAULT;1.1;AES256
        ...encrypted...
</code></pre><h2 id="7-compliance-and-standards">7。コンプライアンスと標準</h2><h3 id="71-pci-dss-compliance">7.1。 PCI DSS 準拠_</h3><pre><code class="language-text">Requirements for PostgreSQL:
✅ Encryption in transit (SSL/TLS)
✅ Encryption at rest (LUKS)
✅ Strong authentication (SCRAM-SHA-256)
✅ Access control (RBAC)
✅ Audit logging (pgAudit)
✅ Regular updates and patches
✅ Network segmentation
✅ Principle of least privilege
</code></pre><h3 id="72-gdpr-compliance">7.2。 GDPR 準拠_</h3><pre><code class="language-sql">-- Data anonymization
CREATE TABLE users_anonymized AS
SELECT id,
       md5(name) AS name,
       md5(email) AS email,
       age,
       country
FROM users;

-- Right to be forgotten
DELETE FROM users WHERE id = 12345;
DELETE FROM user_logs WHERE user_id = 12345;
DELETE FROM user_sessions WHERE user_id = 12345;
</code></pre><h3 id="73-hipaa-compliance">7.3。 HIPAA 準拠</h3><pre><code class="language-text">Requirements:
✅ PHI encryption at rest and in transit
✅ Access controls and authentication
✅ Audit logs (who accessed what, when)
✅ Automatic logoff (idle_in_transaction_session_timeout)
✅ Unique user identification
✅ Emergency access procedures
✅ Data backup and recovery
</code></pre><h2 id="8-security-monitoring">8。セキュリティ監視_</h2><h3 id="81-monitor-failed-login-attempts">8.1。失敗したログイン試行を監視</h3><pre><code class="language-sql">-- Query for failed authentication
SELECT datname, usename, client_addr, 
       COUNT(*) as failed_attempts
FROM pg_stat_database_conflicts
GROUP BY datname, usename, client_addr
HAVING COUNT(*) &gt; 10;

-- Or from logs
-- sudo grep "authentication failed" /var/lib/postgresql/18/data/log/*.log
</code></pre><h3 id="82-monitor-privilege-escalation">8.2。権限昇格を監視</h3><pre><code class="language-sql">-- Track role changes
SELECT * FROM pg_stat_activity
WHERE query ILIKE '%GRANT%' OR query ILIKE '%REVOKE%';

-- Audit log will capture these with pgAudit
</code></pre><h3 id="83-alert-on-security-events">8.3。セキュリティ イベントに関するアラート_</h3><pre><code class="language-yaml"># Prometheus alert rules
groups:
  - name: security
    rules:
      - alert: FailedAuthentication
        expr: increase(pg_stat_database_conflicts_total[5m]) &gt; 10
        labels:
          severity: warning
        annotations:
          summary: "Multiple failed authentication attempts"
      
      - alert: UnencryptedConnection
        expr: pg_stat_ssl_count{ssl="false"} &gt; 0
        labels:
          severity: warning
        annotations:
          summary: "Unencrypted connection detected"
</code></pre><h2 id="9-best-practices-summary">9。ベスト プラクティスの概要</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>_常に SSL/TLS を使用</strong>&nbsp;- すべての接続を暗号化</li><li><strong>使用するSCRAM-SHA-256</strong>&nbsp;- 強力なパスワード暗号化</li><li><strong>RBAC の実装</strong>&nbsp;- 最小権限の原則</li><li><strong>監査を有効にするロギング</strong>&nbsp;- コンプライアンスのための pgAudit_</li><li><strong>保存時の暗号化</strong>&nbsp;- データ量の LUKS</li><li>HTMLTAG_217___強力なパスワード</strong>&nbsp;- 12 文字以上、複雑さ</li><li><strong>ネットワークセグメンテーション</strong>&nbsp;- ファイアウォールルール_</li><li><strong>定期的なセキュリティ監査</strong>&nbsp;- 四半期ごとレビュー_</li><li><strong>ソフトウェアを最新の状態に保つ</strong>&nbsp;- セキュリティ パッチ</li><li><strong>セキュリティ イベントを監視</strong>&nbsp;- アラートとロギング</li></ol><h3 id="%E2%9D%8C-dont">❌ 禁止_</h3><ol><li><strong>「信頼」認証を使用しない_</strong>&nbsp;- 常に必要パスワード_</li><li><strong>インターネットに公開しない</strong>&nbsp;- プライベートネットワークを使用</li><li><strong>デフォルトのパスワードを使用しない_</strong>&nbsp;- 変更すぐに_</li><li><strong>スーパーユーザーを使用しない</strong>&nbsp;- 特定の権限を使用する</li><li><strong>更新を無視しない</strong>&nbsp;- セキュリティ脆弱性_</li><li><strong>パスワードをプレーンのまま保存しない</strong>&nbsp;- シークレット管理を使用する_</li><li><strong>バックアップをスキップしない</strong>&nbsp;- ランサムウェア保護_</li><li><strong>etcd セキュリティを忘れないでください</strong>&nbsp;- クラスター シークレット_</li></ol><h2 id="10-security-checklist">10 があります。セキュリティ チェックリスト</h2><pre><code class="language-text">Network Layer:
☐ Firewall configured (only necessary ports)
☐ Private network for inter-node communication
☐ VPN for remote access
☐ DDoS protection

Authentication:
☐ SSL/TLS enabled
☐ SCRAM-SHA-256 password encryption
☐ Client certificate authentication (optional)
☐ Strong password policy
☐ No default passwords
☐ Separate users for different applications

Authorization:
☐ RBAC implemented
☐ Least privilege principle
☐ Superuser access limited
☐ Resource limits set

Encryption:
☐ SSL/TLS for connections
☐ File system encryption (LUKS)
☐ Column-level encryption for sensitive data
☐ Backup encryption

Auditing:
☐ pgAudit enabled
☐ Audit logs centralized
☐ Log retention policy
☐ Regular log reviews

Monitoring:
☐ Failed login attempts tracked
☐ Security alerts configured
☐ Anomaly detection
☐ Regular vulnerability scans

Maintenance:
☐ Regular security updates
☐ Patch management process
☐ Quarterly security audits
☐ Incident response plan
☐ Disaster recovery tested
</code></pre><h2 id="11-lab-exercises">11。ラボ演習</h2><h3 id="lab-1-setup-ssltls">ラボ 1: SSL/TLS のセットアップ</h3><p><strong>タスク</strong>:</p><ol><li>SSL の生成証明書_</li><li>SSL 用に PostgreSQL を構成</li><li>SSL を要求するように pg_hba.conf を更新</li><li>SSL 接続をテスト</li><li>pg_stat_ssl で検証</li></ol><h3 id="lab-2-implement-rbac">ラボ 2: 実装RBAC_</h3><p><strong>タスク</strong>:</p><ol><li>読み取り専用ロールと読み取り書き込みロールの作成</li><li>異なるロールを持つユーザーの作成_</li><li>テストアクセス権限_</li><li>権限の付与/取り消し_</li><li>ドキュメントの役割階層_</li></ol><h3 id="lab-3-enable-audit-logging">ラボ 3: 監査を有効にするログ</h3><p><strong>タスク</strong>:</p><ol><li>pgAudit のインストールと構成</li><li>DDL と監査ログの有効化書き込み_</li><li>監査された操作の実行</li><li>監査ログの確認_</li><li>ログ集約との統合_</li></ol><h3 id="lab-4-security-hardening">ラボ 4: セキュリティ強化</h3><p><strong>タスク</strong>:</p><ol><li>ファイアウォールルールの構成_</li><li>不要な機能の無効化</li><li>リソースの設定制限</li><li>セキュリティの改善をテスト</li><li>セキュリティ体制を文書化</li></ol><h2 id="12-t%E1%BB%95ng-k%E1%BA%BFt">12。概要_</h2><h3 id="security-layers">セキュリティ レイヤー_</h3><pre><code class="language-text">1. Network: Firewall, VPN, segmentation
2. Authentication: SCRAM-SHA-256, SSL certificates
3. Authorization: RBAC, least privilege
4. Encryption: SSL/TLS, LUKS, pgcrypto
5. Auditing: pgAudit, centralized logging
6. Monitoring: Alerts, anomaly detection
</code></pre><h3 id="critical-security-settings">重要なセキュリティ設定_</h3><pre><code class="language-sql">-- SSL
ssl = on

-- Authentication
password_encryption = 'scram-sha-256'

-- Audit
shared_preload_libraries = 'pgaudit'
pgaudit.log = 'write, ddl, role'

-- Limits
statement_timeout = '30s'
idle_in_transaction_session_timeout = '5min'
</code></pre><h3 id="next-steps">次のステップ</h3><p>レッスン 21 では、表紙&nbsp;_<strong>マルチデータセンターのセットアップ</strong>:</p><ul><li>DC 間レプリケーション戦略</li><li>カスケードレプリケーション</li><li>災害復旧計画_</li><li>地理的負荷分散</li><li>ネットワーク遅延に関する考慮事項</li></ul>