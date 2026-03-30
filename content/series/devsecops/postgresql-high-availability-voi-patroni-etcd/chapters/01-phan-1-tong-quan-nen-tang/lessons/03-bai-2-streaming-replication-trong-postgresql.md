---
id: 019c9617-fb63-72fe-8fb4-4839e41ca6b5
title: 'Bài 2: Streaming Replication trong PostgreSQL'
slug: bai-2-streaming-replication-trong-postgresql
description: >-
  Khám phá cơ chế Streaming Replication, WAL logging, sự khác biệt
  Synchronous/Asynchronous replication và thực hành setup Primary-Standby cơ
  bản.
duration_minutes: 190
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Tổng quan & Nền tảng"
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability với Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
---
<h2>Mục tiêu bài học</h2><p>Sau bài học này, bạn sẽ:</p><ul><li><p>Hiểu sâu về cơ chế Streaming Replication trong PostgreSQL</p></li><li><p>Nắm vững Write-Ahead Logging (WAL) và vai trò của nó</p></li><li><p>Phân biệt Synchronous và Asynchronous Replication</p></li><li><p>Hiểu và sử dụng Replication Slots</p></li><li><p>Thực hành setup replication thủ công (Primary-Standby)</p></li></ul><hr><h2>1. Cơ chế hoạt động của Streaming Replication</h2><h3>1.1. Tổng quan</h3><p>Streaming Replication là phương pháp PostgreSQL replicate dữ liệu từ Primary server sang một hoặc nhiều Standby servers theo thời gian thực.</p><img class="editor-image" src="/storage/uploads/2025/11/f6e3a1a3-3f18-42e3-be8c-0f08f390ef7a-1-201-a-2fa81322.jpeg" alt="" width="2000" height="1091"><p><span>How Streaming Replication Works</span></p><h3>1.2. Các thành phần chính</h3><h4><strong>WAL Sender (trên Primary)</strong></h4><ul><li><p>Process chuyên gửi WAL records đến Standby</p></li><li><p>Một WAL sender cho mỗi Standby connection</p></li><li><p>Monitoring: <code>SELECT * FROM pg_stat_replication;</code></p></li></ul><h4><strong>WAL Receiver (trên Standby)</strong></h4><ul><li><p>Process nhận WAL records từ Primary</p></li><li><p>Ghi WAL vào local WAL files</p></li><li><p>Gửi feedback về Primary (LSN position, status)</p></li></ul><h4><strong>Startup Process (trên Standby)</strong></h4><ul><li><p>Replay WAL records vào data files</p></li><li><p>Giống như recovery process</p></li><li><p>Có thể phục vụ read queries (Hot Standby)</p></li></ul><h3>1.3. Luồng dữ liệu chi tiết</h3><img class="editor-image" src="/storage/uploads/2025/11/8b88784b-6c24-4f45-9500-5855b0e29c28-1-201-a-7eac3520.jpeg" alt="" width="2000" height="1116"><p><span>Transaction Commit Flow</span></p><p><strong>Thời gian thực tế:</strong></p><ul><li><p>Asynchronous: ~0-100ms lag</p></li><li><p>Synchronous: ~1-10ms lag (tùy network latency)</p></li></ul><hr><h2>2. Write-Ahead Logging (WAL)</h2><h3>2.1. WAL là gì?</h3><p><strong>Write-Ahead Logging</strong> là kỹ thuật logging trong đó:</p><blockquote><p>"Mọi thay đổi phải được ghi vào log TRƯỚC KHI ghi vào data files"</p></blockquote><p><strong>Nguyên tắc WAL:</strong></p><img class="editor-image" src="/storage/uploads/2025/11/0fb19919-ac30-491c-a84f-22dcae2e7769-1-201-a-46f1cbed.jpeg" alt="" width="2000" height="1091"><p><span>Write-Ahead Logging (WAL)</span></p><h3>2.2. WAL Files Structure</h3><p><strong>Vị trí:</strong> <code>$PGDATA/pg_wal/</code></p><pre><code class="language-bash">$ ls -lh $PGDATA/pg_wal/
-rw------- 1 postgres postgres 16M Nov 24 10:00 000000010000000000000001
-rw------- 1 postgres postgres 16M Nov 24 10:15 000000010000000000000002
-rw------- 1 postgres postgres 16M Nov 24 10:30 000000010000000000000003</code></pre><p><strong>Đặc điểm:</strong></p><ul><li><p>Mỗi file: 16MB (default)</p></li><li><p>Tên file: Timeline ID + Segment Number</p></li><li><p>Format: <code>TTTTTTTTXXXXXXXXYYYYYYYY</code></p><ul><li><p>TTTTTTTT: Timeline (8 hex digits)</p></li><li><p>XXXXXXXX: Log file number (8 hex)</p></li><li><p>YYYYYYYY: Segment number (8 hex)</p></li></ul></li></ul><h3>2.3. LSN (Log Sequence Number)</h3><p><strong>LSN</strong> là vị trí trong WAL stream, format: <code>X/Y</code></p><ul><li><p>X: WAL file number</p></li><li><p>Y: Offset trong file</p></li></ul><pre><code class="language-sql">-- Kiểm tra LSN hiện tại
SELECT pg_current_wal_lsn();  -- Primary
-- Output: 0/3000060

SELECT pg_last_wal_receive_lsn();  -- Standby (received)
SELECT pg_last_wal_replay_lsn();   -- Standby (applied)</code></pre><h3>2.4. WAL Configuration Parameters</h3><pre><code class="language-ini"># postgresql.conf

# WAL Settings
wal_level = replica              # minimal, replica, or logical
                                 # replica: cho streaming replication

wal_log_hints = on              # Cần thiết cho pg_rewind

# WAL Writing
wal_buffers = 16MB              # WAL buffer size trong shared memory
wal_writer_delay = 200ms        # WAL writer sleep time

# WAL Files Management
min_wal_size = 80MB            # Tối thiểu WAL files giữ lại
max_wal_size = 1GB             # Trigger checkpoint khi vượt

# Checkpoints
checkpoint_timeout = 5min       # Tối đa giữa 2 checkpoints
checkpoint_completion_target = 0.9  # Spread checkpoint writes</code></pre><h3>2.5. WAL và Crash Recovery</h3><p><strong>Khi PostgreSQL crash:</strong></p><pre><code>1. Server restart
2. PostgreSQL đọc last checkpoint location
3. Replay tất cả WAL records từ checkpoint → crash point
4. Khôi phục database về trạng thái consistent
5. Ready to accept connections</code></pre><p><strong>Ví dụ:</strong></p><pre><code>Timeline:
10:00 ─── Checkpoint ─── 10:05 ─── 10:08 (CRASH)
          (LSN: 0/1000)          (LSN: 0/3000)
          
Recovery:
- Bắt đầu từ LSN 0/1000
- Replay WAL → LSN 0/3000
- Database consistent tại 10:08</code></pre><hr><h2>3. Synchronous vs Asynchronous Replication</h2><h3>3.1. Asynchronous Replication (Default)</h3><p><strong>Cách hoạt động:</strong></p><img class="editor-image" src="/storage/uploads/2025/11/7a5d3d41-da90-40d2-b04b-fa1fe50f873b-1-201-a-665ad87b.jpeg" alt="" width="2000" height="1091"><p><span>Asynchronous Replication (Default)</span></p><p><strong>Đặc điểm:</strong></p><ul><li><p>✅ <strong>Performance cao</strong>: Primary không đợi Standby</p></li><li><p>✅ <strong>Latency thấp</strong>: Commit time không phụ thuộc network</p></li><li><p>❌ <strong>Có thể mất data</strong>: Nếu Primary crash trước khi Standby nhận WAL</p></li><li><p>❌ <strong>RPO &gt; 0</strong>: Recovery Point Objective không phải zero</p></li></ul><p><strong>Configuration:</strong></p><pre><code class="language-ini"># postgresql.conf (Primary)
synchronous_commit = off  # hoặc local</code></pre><p><strong>Use cases:</strong></p><ul><li><p>Standby ở datacenter khác (high latency)</p></li><li><p>Ưu tiên performance hơn data safety</p></li><li><p>Acceptable data loss (vài giây)</p></li></ul><h3>3.2. Synchronous Replication</h3><p><strong>Cách hoạt động:</strong></p><img class="editor-image" src="/storage/uploads/2025/11/8c85cd1b-7a04-4482-8836-43cd3f49ee48-1-201-a-d0a9ce1a.jpeg" alt="" width="2000" height="1091"><p><span>Synchronous Replication</span></p><p><strong>Đặc điểm:</strong></p><ul><li><p>✅ <strong>Zero data loss</strong>: Transaction chỉ commit khi Standby confirm</p></li><li><p>✅ <strong>RPO = 0</strong>: Hoàn hảo cho critical data</p></li><li><p>❌ <strong>Performance impact</strong>: ~2-10ms overhead mỗi commit</p></li><li><p>❌ <strong>Availability risk</strong>: Primary block nếu Standby fail</p></li></ul><p><strong>Configuration:</strong></p><pre><code class="language-ini"># postgresql.conf (Primary)
synchronous_commit = on              # on, remote_write, remote_apply
synchronous_standby_names = 'standby1,standby2'  # Tên standbys

# recovery.conf hoặc postgresql.auto.conf (Standby)
primary_conninfo = 'host=primary port=5432 user=replicator application_name=standby1'</code></pre><p><strong>Synchronous Commit Levels:</strong></p><table style="min-width: 100px;"><colgroup><col style="min-width: 25px;"><col style="min-width: 25px;"><col style="min-width: 25px;"><col style="min-width: 25px;"></colgroup><tbody><tr><th colspan="1" rowspan="1"><p>Level</p></th><th colspan="1" rowspan="1"><p>Ý nghĩa</p></th><th colspan="1" rowspan="1"><p>Data Safety</p></th><th colspan="1" rowspan="1"><p>Performance</p></th></tr><tr><td colspan="1" rowspan="1"><p><code>off</code></p></td><td colspan="1" rowspan="1"><p>Không đợi Standby</p></td><td colspan="1" rowspan="1"><p>Thấp</p></td><td colspan="1" rowspan="1"><p>Cao nhất</p></td></tr><tr><td colspan="1" rowspan="1"><p><code>local</code></p></td><td colspan="1" rowspan="1"><p>Chỉ đợi local disk</p></td><td colspan="1" rowspan="1"><p>Trung bình</p></td><td colspan="1" rowspan="1"><p>Cao</p></td></tr><tr><td colspan="1" rowspan="1"><p><code>remote_write</code></p></td><td colspan="1" rowspan="1"><p>Đợi Standby write vào OS cache</p></td><td colspan="1" rowspan="1"><p>Khá tốt</p></td><td colspan="1" rowspan="1"><p>Trung bình</p></td></tr><tr><td colspan="1" rowspan="1"><p><code>on</code></p></td><td colspan="1" rowspan="1"><p>Đợi Standby flush vào disk</p></td><td colspan="1" rowspan="1"><p>Tốt</p></td><td colspan="1" rowspan="1"><p>Chậm hơn</p></td></tr><tr><td colspan="1" rowspan="1"><p><code>remote_apply</code></p></td><td colspan="1" rowspan="1"><p>Đợi Standby apply changes</p></td><td colspan="1" rowspan="1"><p>Tốt nhất</p></td><td colspan="1" rowspan="1"><p>Chậm nhất</p></td></tr></tbody></table><h3>3.3. Quorum-based Synchronous Replication</h3><p><strong>PostgreSQL 9.6+: Flexible synchronous replication</strong></p><pre><code class="language-ini"># Chờ ANY 1 trong 2 standbys
synchronous_standby_names = 'ANY 1 (standby1, standby2)'

# Chờ FIRST 2 trong 3 standbys
synchronous_standby_names = 'FIRST 2 (standby1, standby2, standby3)'

# Chờ ALL standbys (giống cũ)
synchronous_standby_names = 'standby1, standby2'</code></pre><p><strong>Ví dụ: ANY 1</strong></p><pre><code>3 Standbys: standby1 (DC1), standby2 (DC2), standby3 (DC3)

Transaction commit khi:
✅ Primary committed + ANY 1 standby acknowledged

Scenario:
- standby1: ACK trong 5ms
- standby2: ACK trong 100ms (slow network)
- standby3: DOWN

→ Transaction commit sau 5ms (chờ standby1)
→ Performance tốt + Data safety</code></pre><h3>3.4. So sánh Sync vs Async</h3><table style="min-width: 75px;"><colgroup><col style="min-width: 25px;"><col style="min-width: 25px;"><col style="min-width: 25px;"></colgroup><tbody><tr><th colspan="1" rowspan="1"><p>Tiêu chí</p></th><th colspan="1" rowspan="1"><p>Async</p></th><th colspan="1" rowspan="1"><p>Sync</p></th></tr><tr><td colspan="1" rowspan="1"><p><strong>Commit latency</strong></p></td><td colspan="1" rowspan="1"><p>~1ms</p></td><td colspan="1" rowspan="1"><p>~5-10ms</p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>Data loss risk</strong></p></td><td colspan="1" rowspan="1"><p>Có (vài giây)</p></td><td colspan="1" rowspan="1"><p>Không</p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>RPO</strong></p></td><td colspan="1" rowspan="1"><p>Seconds</p></td><td colspan="1" rowspan="1"><p>Zero</p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>RTO</strong></p></td><td colspan="1" rowspan="1"><p>~30-60s</p></td><td colspan="1" rowspan="1"><p>~30-60s</p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>Primary performance</strong></p></td><td colspan="1" rowspan="1"><p>100%</p></td><td colspan="1" rowspan="1"><p>95-98%</p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>Network dependency</strong></p></td><td colspan="1" rowspan="1"><p>Thấp</p></td><td colspan="1" rowspan="1"><p>Cao</p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>Use case</strong></p></td><td colspan="1" rowspan="1"><p>Read replicas, Reporting</p></td><td colspan="1" rowspan="1"><p>Critical data, Financial</p></td></tr></tbody></table><hr><h2>4. Replication Slots</h2><h3>4.1. Vấn đề trước khi có Replication Slots</h3><p><strong>Scenario:</strong></p><pre><code>1. Primary generates WAL files
2. Checkpoint happens → Old WAL cleaned up
3. Standby offline vài giờ
4. Standby comes back online
5. ❌ WAL files needed đã bị xóa
6. ❌ Standby không thể catch up
7. ❌ Cần rebuild Standby từ đầu</code></pre><h3>4.2. Replication Slots giải quyết vấn đề</h3><p><strong>Replication Slot</strong> đảm bảo Primary giữ WAL files cho đến khi Standby consume.</p><img class="editor-image" src="/storage/uploads/2025/11/a9f3c963-8471-4e6c-90cd-5d325edeefeb-1-201-a-4fcc4afb.jpeg" alt="" width="2000" height="1091"><p><strong>Replication Slot</strong></p><h3>4.3. Tạo và quản lý Replication Slots</h3><p><strong>Tạo slot trên Primary:</strong></p><pre><code class="language-sql">-- Physical replication slot
SELECT * FROM pg_create_physical_replication_slot('standby1_slot');

-- Xem danh sách slots
SELECT slot_name, slot_type, active, restart_lsn, confirmed_flush_lsn
FROM pg_replication_slots;

-- Output:
 slot_name     | slot_type | active | restart_lsn | confirmed_flush_lsn
---------------+-----------+--------+-------------+--------------------
 standby1_slot | physical  | t      | 0/3000000   | NULL</code></pre><p><strong>Sử dụng slot trên Standby:</strong></p><p>ini</p><pre><code class="language-ini"># postgresql.auto.conf (Standby)
primary_slot_name = 'standby1_slot'</code></pre><p><strong>Xóa slot:</strong></p><p>sql</p><pre><code class="language-sql">SELECT pg_drop_replication_slot('standby1_slot');</code></pre><h3>4.4. Monitoring Replication Slots</h3><p>sql</p><pre><code class="language-sql">-- Kiểm tra slot status
SELECT 
    slot_name,
    active,
    pg_size_pretty(pg_wal_lsn_diff(pg_current_wal_lsn(), restart_lsn)) as retained_wal
FROM pg_replication_slots;

-- Cảnh báo nếu retained_wal quá lớn (&gt;10GB)</code></pre><h3>4.5. Lưu ý quan trọng</h3><p>⚠️ <strong>Rủi ro:</strong></p><ul><li><p>Nếu Standby offline lâu với slot → Primary giữ WAL mãi</p></li><li><p>Có thể lấp đầy disk của Primary</p></li><li><p>Cần monitoring và alert</p></li></ul><p><strong>Best practice:</strong></p><p>sql</p><pre><code class="language-sql">-- Set max WAL size để bảo vệ Primary
ALTER SYSTEM SET max_slot_wal_keep_size = '100GB';  -- PostgreSQL 13+

-- Hoặc tự động drop inactive slot sau 24h
SELECT pg_drop_replication_slot(slot_name)
FROM pg_replication_slots
WHERE NOT active 
  AND pg_current_wal_lsn() - restart_lsn &gt; 100*1024*1024*1024;  -- 100GB</code></pre><hr><h2>5. Lab: Setup Streaming Replication thủ công</h2><h3>5.1. Mục tiêu Lab</h3><p>Tạo PostgreSQL cluster với:</p><ul><li><p>1 Primary server</p></li><li><p>1 Standby server</p></li><li><p>Streaming replication (asynchronous)</p></li><li><p>Hot standby (read queries)</p></li></ul><h3>5.2. Môi trường</h3><pre><code>Primary:  192.168.1.101 (node1)
Standby:  192.168.1.102 (node2)
PostgreSQL: 14
OS: Ubuntu 22.04</code></pre><h3>5.3. Bước 1: Cài đặt PostgreSQL (cả 2 nodes)</h3><p>bash</p><pre><code class="language-bash"># Install PostgreSQL 14
sudo apt update
sudo apt install -y postgresql-14 postgresql-contrib-14

# Stop service
sudo systemctl stop postgresql</code></pre><h3>5.4. Bước 2: Cấu hình Primary (node1)</h3><p><strong>Tạo replication user:</strong></p><p>bash</p><pre><code class="language-bash">sudo -u postgres psql</code></pre><p>sql</p><pre><code class="language-sql">-- Tạo user cho replication
CREATE ROLE replicator WITH REPLICATION LOGIN PASSWORD 'repl_password';

-- Exit
\q</code></pre><p><strong>Cấu hình postgresql.conf:</strong></p><p>bash</p><pre><code class="language-bash">sudo nano /etc/postgresql/14/main/postgresql.conf</code></pre><p>ini</p><pre><code class="language-ini"># Connection
listen_addresses = '*'
port = 5432

# Replication
wal_level = replica
max_wal_senders = 5
max_replication_slots = 5
wal_keep_size = 1GB

# Hot Standby (không cần cho primary nhưng tốt để có sẵn)
hot_standby = on

# Archive (optional, recommended)
archive_mode = on
archive_command = 'test ! -f /var/lib/postgresql/14/archive/%f &amp;&amp; cp %p /var/lib/postgresql/14/archive/%f'</code></pre><p><strong>Tạo archive directory:</strong></p><p>bash</p><pre><code class="language-bash">sudo mkdir -p /var/lib/postgresql/14/archive
sudo chown postgres:postgres /var/lib/postgresql/14/archive</code></pre><p><strong>Cấu hình pg_hba.conf:</strong></p><p>bash</p><pre><code class="language-bash">sudo nano /etc/postgresql/14/main/pg_hba.conf</code></pre><p>ini</p><pre><code class="language-ini"># Replication connections
host    replication     replicator      192.168.1.102/32        md5
host    replication     replicator      127.0.0.1/32            md5</code></pre><p><strong>Start Primary:</strong></p><p>bash</p><pre><code class="language-bash">sudo systemctl start postgresql
sudo systemctl status postgresql</code></pre><p><strong>Tạo replication slot:</strong></p><p>bash</p><pre><code class="language-bash">sudo -u postgres psql</code></pre><p>sql</p><pre><code class="language-sql">SELECT pg_create_physical_replication_slot('standby_slot');
SELECT * FROM pg_replication_slots;
\q</code></pre><h3>5.5. Bước 3: Setup Standby (node2)</h3><p><strong>Stop PostgreSQL và backup data cũ:</strong></p><p>bash</p><pre><code class="language-bash">sudo systemctl stop postgresql
sudo mv /var/lib/postgresql/14/main /var/lib/postgresql/14/main.bak</code></pre><p><strong>Base backup từ Primary:</strong></p><p>bash</p><pre><code class="language-bash"># Sử dụng pg_basebackup
sudo -u postgres pg_basebackup \
    -h 192.168.1.101 \
    -D /var/lib/postgresql/14/main \
    -U replicator \
    -P \
    -v \
    -R \
    -X stream \
    -C -S standby_slot

# Options giải thích:
# -h: Primary host
# -D: Data directory
# -U: Replication user
# -P: Show progress
# -v: Verbose
# -R: Tạo standby.signal và postgresql.auto.conf
# -X stream: Stream WAL during backup
# -C: Create replication slot
# -S: Slot name</code></pre><p><strong>Output mẫu:</strong></p><pre><code>pg_basebackup: initiating base backup, waiting for checkpoint to complete
pg_basebackup: checkpoint completed
pg_basebackup: write-ahead log start point: 0/2000028 on timeline 1
pg_basebackup: starting background WAL receiver
pg_basebackup: created replication slot "standby_slot"
24567/24567 kB (100%), 1/1 tablespace
pg_basebackup: write-ahead log end point: 0/2000100
pg_basebackup: syncing data to disk ...
pg_basebackup: base backup completed</code></pre><p><strong>Kiểm tra standby.signal đã được tạo:</strong></p><p>bash</p><pre><code class="language-bash">ls -l /var/lib/postgresql/14/main/standby.signal
# File này đánh dấu đây là standby server</code></pre><p><strong>Kiểm tra postgresql.auto.conf:</strong></p><p>bash</p><pre><code class="language-bash">sudo cat /var/lib/postgresql/14/main/postgresql.auto.conf</code></pre><p>ini</p><pre><code class="language-ini"># Được tạo tự động bởi pg_basebackup -R
primary_conninfo = 'user=replicator password=repl_password host=192.168.1.101 port=5432 sslmode=prefer sslcompression=0 krbsrvname=postgres target_session_attrs=any'
primary_slot_name = 'standby_slot'</code></pre><p><strong>Start Standby:</strong></p><p>bash</p><pre><code class="language-bash">sudo systemctl start postgresql
sudo systemctl status postgresql</code></pre><h3>5.6. Bước 4: Verify Replication</h3><p><strong>Trên Primary (node1):</strong></p><p>sql</p><pre><code class="language-sql">sudo -u postgres psql

-- Kiểm tra replication status
SELECT 
    client_addr,
    state,
    sync_state,
    replay_lsn,
    pg_size_pretty(pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn)) as lag
FROM pg_stat_replication;

-- Output:
 client_addr   |   state   | sync_state | replay_lsn  |  lag
---------------+-----------+------------+-------------+-------
 192.168.1.102 | streaming | async      | 0/3000060   | 0 bytes</code></pre><p><strong>Trên Standby (node2):</strong></p><p>sql</p><pre><code class="language-sql">sudo -u postgres psql

-- Kiểm tra standby status
SELECT pg_is_in_recovery();  -- Should return 't' (true)

-- Kiểm tra replication lag
SELECT 
    pg_last_wal_receive_lsn() AS receive,
    pg_last_wal_replay_lsn() AS replay,
    pg_size_pretty(pg_wal_lsn_diff(pg_last_wal_receive_lsn(), pg_last_wal_replay_lsn())) AS lag;

-- Output:
   receive   |   replay    |  lag
-------------+-------------+--------
 0/3000060   | 0/3000060   | 0 bytes</code></pre><h3>5.7. Bước 5: Test Replication</h3><p><strong>Trên Primary - Tạo test data:</strong></p><p>sql</p><pre><code class="language-sql">-- Tạo database và table
CREATE DATABASE testdb;
\c testdb

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users (name) VALUES 
    ('Alice'),
    ('Bob'),
    ('Charlie');

SELECT * FROM users;</code></pre><p><strong>Trên Standby - Verify data:</strong></p><p>sql</p><pre><code class="language-sql">\c testdb

-- Read queries hoạt động
SELECT * FROM users;

-- Output:
 id |  name   |       created_at
----+---------+------------------------
  1 | Alice   | 2024-11-24 10:30:15
  2 | Bob     | 2024-11-24 10:30:15
  3 | Charlie | 2024-11-24 10:30:15

-- Write queries bị reject
INSERT INTO users (name) VALUES ('David');
-- ERROR: cannot execute INSERT in a read-only transaction</code></pre><h3>5.8. Bước 6: Monitoring Queries</h3><p><strong>Replication delay monitoring:</strong></p><p>sql</p><pre><code class="language-sql">-- Trên Primary
CREATE OR REPLACE FUNCTION replication_lag_bytes()
RETURNS TABLE(client_addr INET, lag_bytes BIGINT) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        c.client_addr,
        pg_wal_lsn_diff(pg_current_wal_lsn(), c.replay_lsn)::BIGINT
    FROM pg_stat_replication c;
END;
$$ LANGUAGE plpgsql;

-- Sử dụng
SELECT * FROM replication_lag_bytes();</code></pre><p><strong>Alert nếu lag &gt; 10MB:</strong></p><p>sql</p><pre><code class="language-sql">SELECT client_addr, 
       pg_size_pretty(lag_bytes) as lag
FROM replication_lag_bytes()
WHERE lag_bytes &gt; 10*1024*1024;</code></pre><h3>5.9. Troubleshooting Common Issues</h3><p><strong>Issue 1: Standby không connect được Primary</strong></p><p>bash</p><pre><code class="language-bash"># Check logs
sudo tail -f /var/lib/postgresql/14/main/log/postgresql-*.log

# Common errors:
# - "FATAL: password authentication failed"
#   → Check pg_hba.conf và password

# - "FATAL: no pg_hba.conf entry for replication"
#   → Add replication entry vào pg_hba.conf

# - Connection refused
#   → Check firewall, listen_addresses</code></pre><p><strong>Issue 2: Replication lag tăng cao</strong></p><p>sql</p><pre><code class="language-sql">-- Kiểm tra WAL sender busy
SELECT * FROM pg_stat_activity 
WHERE backend_type = 'walsender';

-- Kiểm tra I/O trên Standby
SELECT * FROM pg_stat_bgwriter;</code></pre><p><strong>Issue 3: Slot bị fill up disk</strong></p><p>sql</p><pre><code class="language-sql">-- Kiểm tra retained WAL
SELECT 
    slot_name,
    pg_size_pretty(pg_wal_lsn_diff(pg_current_wal_lsn(), restart_lsn)) as retained
FROM pg_replication_slots;

-- Drop inactive slot nếu cần
SELECT pg_drop_replication_slot('standby_slot');</code></pre><hr><h2>6. Best Practices</h2><h3>6.1. Configuration Tuning</h3><p>ini</p><pre><code class="language-ini"># Primary - postgresql.conf

# Network buffer (nếu có nhiều standbys)
max_wal_senders = 10  # Tùy số standbys + 2 dự phòng

# WAL retention
wal_keep_size = 2GB  # Giữ đủ WAL cho standby catch up
max_slot_wal_keep_size = 10GB  # Limit slot retention (PG 13+)

# Archive (backup strategy)
archive_mode = on
archive_command = 'cp %p /backup/archive/%f'

# Checkpoint tuning
checkpoint_timeout = 15min
checkpoint_completion_target = 0.9</code></pre><h3>6.2. Monitoring Checklist</h3><p>✅ <strong>Replication lag</strong> (bytes và time) ✅ <strong>Standby connection status</strong> ✅ <strong>WAL sender processes</strong> ✅ <strong>Disk space</strong> (pg_wal/ và archive/) ✅ <strong>Replication slots</strong> (retained WAL) ✅ <strong>Checkpoint performance</strong></p><h3>6.3. Security Recommendations</h3><p>ini</p><pre><code class="language-ini"># Use SSL for replication
ssl = on
ssl_cert_file = '/path/to/server.crt'
ssl_key_file = '/path/to/server.key'

# Standby connection string
primary_conninfo = '... sslmode=require sslcompression=1'</code></pre><p>ini</p><pre><code class="language-ini"># pg_hba.conf - Use hostssl
hostssl replication replicator 192.168.1.0/24 md5</code></pre><hr><h2>7. Tổng kết</h2><h3>Key Takeaways</h3><ol><li><p><strong>Streaming Replication</strong> là nền tảng của PostgreSQL HA:</p><ul><li><p>Realtime WAL streaming</p></li><li><p>Hot Standby cho read queries</p></li><li><p>Basis cho Patroni automated failover</p></li></ul></li><li><p><strong>WAL (Write-Ahead Logging)</strong>:</p><ul><li><p>Ghi log trước khi ghi data</p></li><li><p>Crash recovery mechanism</p></li><li><p>Replication transport format</p></li></ul></li><li><p><strong>Synchronous vs Asynchronous</strong>:</p><ul><li><p>Async: Performance cao, có thể mất data</p></li><li><p>Sync: Zero data loss, performance impact</p></li><li><p>Quorum-based: Balance giữa 2 cái</p></li></ul></li><li><p><strong>Replication Slots</strong>:</p><ul><li><p>Đảm bảo WAL không bị xóa sớm</p></li><li><p>Critical cho standby stability</p></li><li><p>Cần monitoring để tránh disk full</p></li></ul></li></ol><p></p>
