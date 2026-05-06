---
id: 019c9617-fb9e-7077-950d-b4fa097ce8b1
title: 'Lesson 20: Security Best Practices'
slug: bai-20-security-best-practices
description: Configure SSL/TLS, authentication methods, network security, encryption at rest, audit logging and hardening cluster security.
duration_minutes: 110
is_free: true
video_url: null
sort_order: 20
section_title: 'Part 5: Security & Enhancements'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability with Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — Lesson 20</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 20: Security Best Practices</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL High Availability with Patroni &amp; etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Security &amp; Advanced</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">Aim_</h2><p>After this lesson, you will:</p><ul><li>Implement SSL/TLS encryption for PostgreSQL_</li><li>Configure secure authentication</li><li>Harden network security</li><li>Enable encryption at rest_</li><li>Setup logging audit</li><li>Apply security best practices for HA cluster</li></ul><h2 id="1-ssltls-encryption">1. SSL/TLS Encryption</h2><h3 id="11-generate-ssl-certificates">1.1. Generate SSL certificates</h3><pre><code class="language-bash"># Create certificate directory
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
</code></pre><h3 id="12-configure-postgresql-for-ssl">1.2. Configure PostgreSQL for SSL_</h3><pre><code class="language-sql">-- Enable SSL
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
</code></pre><h3 id="13-configure-pghbaconf-for-ssl">1.3. Configure pg_hba.conf for SSL</h3><pre><code class="language-bash"># /var/lib/postgresql/18/data/pg_hba.conf

# Require SSL for all connections
hostssl all all 0.0.0.0/0 scram-sha-256

# Or mixed (SSL preferred but not required)
hostssl all all 0.0.0.0/0 scram-sha-256
host    all all 0.0.0.0/0 scram-sha-256

# Reload
sudo -u postgres psql -c "SELECT pg_reload_conf();"
</code></pre><h3 id="14-test-ssl-connection">1.4. Test SSL connection</h3><pre><code class="language-bash"># Connect with SSL
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
</code></pre><h3 id="15-client-certificate-authentication">1.5. Client certificate authentication</h3><pre><code class="language-bash"># Generate client certificate
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
</code></pre><h2 id="2-authentication">2. Authentication</h2><h3 id="21-scram-sha-256-recommended">2.1. SCRAM-SHA-256 (recommended)</h3><pre><code class="language-sql">-- Set password encryption method
ALTER SYSTEM SET password_encryption = 'scram-sha-256';

-- Create user with SCRAM
CREATE USER app_user WITH PASSWORD 'strong_password';

-- Update existing user password
\password existing_user  -- Will use SCRAM
</code></pre><pre><code class="language-bash"># pg_hba.conf
host all all 0.0.0.0/0 scram-sha-256
</code></pre><h3 id="22-disable-weak-authentication">2.2. Disable weak authentication</h3><pre><code class="language-bash"># DON'T USE:
# host all all 0.0.0.0/0 trust  ❌ No password!
# host all all 0.0.0.0/0 md5    ❌ Weak encryption

# USE:
# hostssl all all 0.0.0.0/0 scram-sha-256  ✅
# hostssl all all 0.0.0.0/0 cert           ✅
</code></pre><h3 id="23-password-policies">2.3. Password policies</h3><pre><code class="language-sql">-- Install passwordcheck extension
CREATE EXTENSION IF NOT EXISTS passwordcheck;

-- Configure in postgresql.conf
ALTER SYSTEM SET passwordcheck.min_length = 12;
ALTER SYSTEM SET passwordcheck.require_special = on;
ALTER SYSTEM SET passwordcheck.require_digit = on;
ALTER SYSTEM SET passwordcheck.require_upper = on;

-- Test - weak password will be rejected
CREATE USER weak_user WITH PASSWORD '12345';  -- ERROR
CREATE USER strong_user WITH PASSWORD 'MyStr0ng!Pass123';  -- OK
</code></pre><h3 id="24-role-based-access-control">2.4. Role-based access control</h3><pre><code class="language-sql">-- Create roles
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
</code></pre><h2 id="3-network-security">3. Network Security</h2><h3 id="31-firewall-configuration">3.1. Firewall configuration</h3><pre><code class="language-bash"># Using ufw
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
</code></pre><h3 id="32-network-segmentation">3.2. Network segmentation</h3><pre><code class="language-text">Architecture:

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
</code></pre><h3 id="33-vpnprivate-network">3.3. VPN/Private network</h3><pre><code class="language-bash"># Use WireGuard for inter-node communication
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
</code></pre><h2 id="4-encryption-at-rest">4. Encryption at Rest</h2><h3 id="41-file-system-encryption-luks">4.1. File system encryption (LUKS)</h3><pre><code class="language-bash"># Encrypt data volume
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
</code></pre><h3 id="42-transparent-data-encryption-tde">4.2. Transparent Data Encryption (TDE)</h3><pre><code class="language-text">Note: PostgreSQL 18 doesn't have built-in TDE
Options:
1. Use filesystem encryption (LUKS) ✅
2. Use pgcrypto extension for column-level encryption
3. Wait for future PostgreSQL TDE support
4. Use commercial solutions (EDB, Cybertec)
</code></pre><h3 id="43-column-level-encryption">4.3. Column-level encryption</h3><pre><code class="language-sql">-- Install pgcrypto
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
</code></pre><h2 id="5-audit-logging">5. Audit Logging</h2><h3 id="51-pgaudit-extension">5.1. pgAudit extension_</h3><pre><code class="language-bash"># Install pgAudit
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
</code></pre><p><strong>Audit classes</strong>:</p><ul><li><code>READ</code>: SELECT, COPY FROM</li><li><code>WRITE</code>: INSERT, UPDATE, DELETE, TRUNCATE, COPY TO</li><li><code>FUNCTION</code>: Function calls</li><li><code>ROLE</code>: GRANT, REVOKE, CREATE/DROP ROLE</li><li><code>DDL</code>: CREATE, ALTER, DROP</li><li><code>MISC</code>: DISCARD, FETCH, CHECKPOINT, VACUUM, SET</li><li><code>ALL</code>: Everything</li></ul><h3 id="52-log-analysis">5.2. Log analysis</h3><pre><code class="language-bash"># Audit logs in PostgreSQL log files
sudo grep "AUDIT:" /var/lib/postgresql/18/data/log/postgresql-*.log

# Example audit log entry:
# 2024-11-25 10:00:00 UTC [12345]: [1-1] user=admin,db=myapp AUDIT: SESSION,1,1,WRITE,DELETE,TABLE,public.users,"DELETE FROM users WHERE id = 123",&lt;not logged&gt;
</code></pre><h3 id="53-centralized-logging">5.3. Centralized logging</h3><pre><code class="language-yaml"># Use filebeat to ship logs to ELK stack
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
</code></pre><h2 id="6-security-hardening">6. Security Hardening</h2><h3 id="61-disable-unnecessary-features">6.1. Disable unnecessary features_</h3><pre><code class="language-sql">-- Disable file system access functions (for non-superusers)
REVOKE EXECUTE ON FUNCTION pg_read_file(text) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION pg_read_binary_file(text) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION pg_ls_dir(text) FROM PUBLIC;

-- Disable COPY TO/FROM file
-- (Use COPY TO/FROM PROGRAM or stdin/stdout instead)
</code></pre><h3 id="62-limit-superuser-access">6.2. Limit superuser access</h3><pre><code class="language-sql">-- Create admin role with specific privileges instead of superuser
CREATE ROLE db_admin WITH LOGIN PASSWORD 'strong_password';
GRANT ALL PRIVILEGES ON DATABASE myapp TO db_admin;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO db_admin;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO db_admin;

-- Don't use 'postgres' superuser for applications!
</code></pre><h3 id="63-resource-limits">6.3. Resource limits</h3><pre><code class="language-sql">-- Connection limits per user
ALTER USER app_user CONNECTION LIMIT 50;

-- Statement timeout per user
ALTER USER app_user SET statement_timeout = '30s';

-- Lock timeout
ALTER USER app_user SET lock_timeout = '5s';

-- Idle in transaction timeout
ALTER USER app_user SET idle_in_transaction_session_timeout = '5min';
</code></pre><h3 id="64-hide-postgresql-version">6.4. Hide PostgreSQL version</h3><pre><code class="language-sql">-- Change server_version_num (cosmetic security)
-- Note: Doesn't actually hide from determined attackers
ALTER SYSTEM SET application_name = 'myapp';
</code></pre><h3 id="65-secure-replication">6.5. Secure replication</h3><pre><code class="language-yaml"># In patroni.yml
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
</code></pre><h2 id="7-compliance-and-standards">7. Compliance and Standards</h2><h3 id="71-pci-dss-compliance">7.1. PCI DSS compliance</h3><pre><code class="language-text">Requirements for PostgreSQL:
✅ Encryption in transit (SSL/TLS)
✅ Encryption at rest (LUKS)
✅ Strong authentication (SCRAM-SHA-256)
✅ Access control (RBAC)
✅ Audit logging (pgAudit)
✅ Regular updates and patches
✅ Network segmentation
✅ Principle of least privilege
</code></pre><h3 id="72-gdpr-compliance">7.2. GDPR compliance_</h3><pre><code class="language-sql">-- Data anonymization
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
</code></pre><h3 id="73-hipaa-compliance">7.3. HIPAA compliance</h3><pre><code class="language-text">Requirements:
✅ PHI encryption at rest and in transit
✅ Access controls and authentication
✅ Audit logs (who accessed what, when)
✅ Automatic logoff (idle_in_transaction_session_timeout)
✅ Unique user identification
✅ Emergency access procedures
✅ Data backup and recovery
</code></pre><h2 id="8-security-monitoring">8. Security Monitoring</h2><h3 id="81-monitor-failed-login-attempts">8.1. Monitor failed login attempts</h3><pre><code class="language-sql">-- Query for failed authentication
SELECT datname, usename, client_addr, 
       COUNT(*) as failed_attempts
FROM pg_stat_database_conflicts
GROUP BY datname, usename, client_addr
HAVING COUNT(*) &gt; 10;

-- Or from logs
-- sudo grep "authentication failed" /var/lib/postgresql/18/data/log/*.log
</code></pre><h3 id="82-monitor-privilege-escalation">8.2. Monitor privilege escalation</h3><pre><code class="language-sql">-- Track role changes
SELECT * FROM pg_stat_activity
WHERE query ILIKE '%GRANT%' OR query ILIKE '%REVOKE%';

-- Audit log will capture these with pgAudit
</code></pre><h3 id="83-alert-on-security-events">8.3. Alert on security events</h3><pre><code class="language-yaml"># Prometheus alert rules
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
</code></pre><h2 id="9-best-practices-summary">9. Best Practices Summary</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>Always use SSL/TLS</strong>&nbsp;- Encrypt all connections</li><li><strong>Use SCRAM-SHA-256</strong>&nbsp;- Strong password encryption</li><li><strong>Implement RBAC</strong>&nbsp;- Principle of least privilege</li><li><strong>Enable audit logging</strong>&nbsp;- pgAudit for compliance_</li><li><strong>Encrypt at rest</strong>&nbsp;- LUKS for data volumes</li><li><strong>Strong passwords</strong>&nbsp;- 12+ chars, complexity</li><li><strong>Network segmentation</strong>&nbsp;- Firewall rules</li><li><strong>Regular security audits</strong>&nbsp;- Quarterly reviews</li><li><strong>Keep software updated</strong>&nbsp;- Security patches</li><li><strong>Monitor security events</strong>&nbsp;- Alerts and logging</li></ol><h3 id="%E2%9D%8C-dont">❌ DON'T_</h3><ol><li><strong>Don't use 'trust' auth_</strong>&nbsp;- Always require password_</li><li><strong>Don't expose to internet</strong>&nbsp;- Use private networks</li><li><strong>Don't use default passwords_</strong>&nbsp;- Change immediately_</li><li><strong>Don't superuser</strong>&nbsp;- Use specific privileges</li><li><strong>Don't ignore updates</strong>&nbsp;- Security vulnerabilities</li><li><strong>Don't store passwords plain</strong>&nbsp;- Use secrets management</li><li><strong>Don't skip backups</strong>&nbsp;- Ransomware protection</li><li><strong>Don't forget about etcd security</strong>&nbsp;- It has cluster secrets_</li></ol><h2 id="10-security-checklist">10. Security Checklist</h2><pre><code class="language-text">Network Layer:
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
</code></pre><h2 id="11-lab-exercises">11. Lab Exercises</h2><h3 id="lab-1-setup-ssltls">Lab 1: Setup SSL/TLS</h3><p><strong>Tasks</strong>:</p><ol><li>Generate SSL certificates</li><li>Configure PostgreSQL for SSL</li><li>Update pg_hba.conf to require SSL</li><li>Test SSL connection</li><li>Verify with pg_stat_ssl</li></ol><h3 id="lab-2-implement-rbac">Lab 2: Implement RBAC</h3><p><strong>Tasks</strong>:</p><ol><li>Create readonly and readwrite roles</li><li>Create users with different roles_</li><li>Test access permissions</li><li>Grant/revoke privileges_</li><li>Document role hierarchy_</li></ol><h3 id="lab-3-enable-audit-logging">Lab 3: Enable audit logging</h3><p><strong>Tasks</strong>:</p><ol><li>Install and configure pgAudit</li><li>Enable audit logging for DDL and WRITE</li><li>Perform audited operations</li><li>Review audit logs_</li><li>Integrate with log aggregation_</li></ol><h3 id="lab-4-security-hardening">Lab 4: Security hardening</h3><p><strong>Tasks</strong>:</p><ol><li>Configure firewall rules_</li><li>Disable unnecessary functions</li><li>Set resource limits</li><li>Test security improvements</li><li>Document security posture</li></ol><h2 id="12-t%E1%BB%95ng-k%E1%BA%BFt">12. Summary_</h2><h3 id="security-layers">Security Layers_</h3><pre><code class="language-text">1. Network: Firewall, VPN, segmentation
2. Authentication: SCRAM-SHA-256, SSL certificates
3. Authorization: RBAC, least privilege
4. Encryption: SSL/TLS, LUKS, pgcrypto
5. Auditing: pgAudit, centralized logging
6. Monitoring: Alerts, anomaly detection
</code></pre><h3 id="critical-security-settings">Critical Security Settings_</h3><pre><code class="language-sql">-- SSL
ssl = on

-- Authentication
password_encryption = 'scram-sha-256'

-- Audit
shared_preload_libraries = 'pgaudit'
pgaudit.log = 'write, ddl, role'

-- Limits
statement_timeout = '30s'
idle_in_transaction_session_timeout = '5min'
</code></pre><h3 id="next-steps">Next Steps</h3><p>Lesson 21 will cover&nbsp;_<strong>Multi-datacenter Setup</strong>:</p><ul><li>Cross-DC replication strategies</li><li>Cascading replication</li><li>Disaster recovery planning</li><li>Geographic load balancing</li><li>Network latency considerations</li></ul>