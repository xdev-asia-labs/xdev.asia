---
id: 019c9617-fb63-72fe-8fb4-4839e41ca6b5
title: 'レッスン 2: PostgreSQL でのストリーミング レプリケーション'
slug: bai-2-streaming-replication-trong-postgresql
description: ストリーミング レプリケーション メカニズム、WAL ログ、同期/非同期レプリケーションの違いを調べ、基本的なプライマリ/スタンバイ セットアップを実践します。
duration_minutes: 190
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 1: 概要と背景'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: Patroni と etcd による PostgreSQL の高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: ja
---
<h2>レッスンの目的_</h2><p>このレッスンを終えると、次のことができるようになります:</p><ul><li><p>PostgreSQL のストリーミング レプリケーション メカニズムを理解する</p></li><li><p>マスター先行書き込みログ (WAL) とその役割_</p></li><li><p>同期レプリケーションと非同期レプリケーションの区別</p></li><li><p>レプリケーションスロットの理解と使用</p></li><li><p>手動レプリケーション設定の練習(プライマリ-スタンバイ)</p></li></ul><hr><h2>1。ストリーミング レプリケーションの動作メカニズム</h2><h3>1.1。概要</h3><p>ストリーミング レプリケーションは、PostgreSQL がプライマリ サーバーから 1 つ以上のスタンバイ サーバーにデータをリアルタイムでレプリケートする方法です。</p><img class="editor-image" src="/storage/uploads/2025/11/f6e3a1a3-3f18-42e3-be8c-0f08f390ef7a-1-201-a-2fa81322.jpeg" alt="" width="2000" height="1091"><p><span>ストリーミング レプリケーションの仕組み</span></p><h3>1.2。主要コンポーネント_</h3><h4><strong>_WAL 送信者 (プライマリ)_</strong></h4><ul><li><p>_プロセスはスタンバイへの WAL レコードの送信に特化_</p></li><li><p>スタンバイごとに 1 つの WAL 送信者接続_</p></li><li><p>モニタリング: <code>SELECT * FROM pg_stat_replication;</code></p></li></ul><h4><strong>_WAL レシーバー (オン)スタンバイ)_</strong></h4><ul><li><p>プロセスはプライマリから WAL レコードを受信_</p></li><li><p>WAL をローカル WAL ファイルに書き込み</p></li><li><p>プライマリにフィードバックを送信 (LSN)位置、ステータス)_</p></li></ul><h4><strong>起動プロセス (スタンバイ時)</strong></h4><ul><li><p>WAL レコードをデータ ファイルに再生_</p></li><li><p>_リカバリと同じプロセス_</p></li><li><p>読み取りクエリを処理できます (ホットスタンバイ)</p></li></ul><h3>1.3。詳細なデータ フロー</h3><img class="editor-image" src="/storage/uploads/2025/11/8b88784b-6c24-4f45-9500-5855b0e29c28-1-201-a-7eac3520.jpeg" alt="" width="2000" height="1116"><p><span>トランザクション コミット フロー</span></p><p><strong>リアルタイム実績:</strong></p><ul><li><p>非同期: ~0 ～ 100 ミリ秒のラグ_</p></li><li><p>同期: ～1 ～ 10 ミリ秒のラグ (ネットワーク遅延に応じて)</p></li></ul><hr><h2>2。先行書き込みログ (WAL)</h2><h3>2.1。 WAL とは何ですか?</h3><p><strong>先行書き込みログ</strong> は、</p><blockquote><p>「すべての変更はデータを書き込む前にログに書き込む必要がある」というログ技術です。ファイル"_</p></blockquote><p><strong>WAL 原則:</strong></p><img class="editor-image" src="/storage/uploads/2025/11/0fb19919-ac30-491c-a84f-22dcae2e7769-1-201-a-46f1cbed.jpeg" alt="" width="2000" height="1091"><p><span>Write-Ahead ログ (WAL)</span></p><h3>2.2。 WAL ファイルの構造</h3><p><strong>場所:</strong> <code>$PGDATA/pg_wal/</code></p><pre><code class="language-bash">$ ls -lh $PGDATA/pg_wal/
-rw------- 1 postgres postgres 16M Nov 24 10:00 000000010000000000000001
-rw------- 1 postgres postgres 16M Nov 24 10:15 000000010000000000000002
-rw------- 1 postgres postgres 16M Nov 24 10:30 000000010000000000000003</code></pre><p><strong>特殊ポイント:</strong></p><ul><li><p>各ファイル: 16MB (デフォルト)</p></li><li><p>ファイル名: タイムライン ID + セグメント数値_</p></li><li><p>形式: <code>TTTTTTTTXXXXXXXXYYYYYYYY</code></p><ul><li><p>TTTTTTTT: タイムライン (8 進数)桁)</p></li><li><p>XXXXXXXX: ログ ファイル番号 (8 進数)</p></li><li><p>YYYYYYYY: セグメント番号 (8 hex)_</p></li></ul></li></ul><h3>2.3。 LSN (ログ シーケンス番号)</h3><p><strong>LSN</strong> は WAL ストリーム内の位置です。形式: <code>X/Y</code></p><ul><li><p>X: WAL ファイル番号</p></li><li><p>Y: ファイル内のオフセット</p></li></ul><pre><code class="language-sql">-- Kiểm tra LSN hiện tại
SELECT pg_current_wal_lsn();  -- Primary
-- Output: 0/3000060

SELECT pg_last_wal_receive_lsn();  -- Standby (received)
SELECT pg_last_wal_replay_lsn();   -- Standby (applied)</code></pre><h3>2.4。 WAL 構成パラメータ</h3><pre><code class="language-ini"># postgresql.conf

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
checkpoint_completion_target = 0.9  # Spread checkpoint writes</code></pre><h3>2.5。 WAL とクラッシュリカバリ_</h3><p><strong>PostgreSQL がクラッシュした場合:</strong></p><pre><code>1. Server restart
2. PostgreSQL đọc last checkpoint location
3. Replay tất cả WAL records từ checkpoint → crash point
4. Khôi phục database về trạng thái consistent
5. Ready to accept connections</code></pre><p><strong>Wallet例:_</strong></p><pre><code>Timeline:
10:00 ─── Checkpoint ─── 10:05 ─── 10:08 (CRASH)
          (LSN: 0/1000)          (LSN: 0/3000)
          
Recovery:
- Bắt đầu từ LSN 0/1000
- Replay WAL → LSN 0/3000
- Database consistent tại 10:08</code></pre><hr><h2>3。同期レプリケーションと非同期レプリケーション_</h2><h3>3.1。非同期レプリケーション (デフォルト)</h3><p><strong>仕組み:</strong></p><img class="editor-image" src="/storage/uploads/2025/11/7a5d3d41-da90-40d2-b04b-fa1fe50f873b-1-201-a-665ad87b.jpeg" alt="" width="2000" height="1091"><p><span>非同期レプリケーション(デフォルト)</span></p><p><strong>機能:</strong></p><ul><li><p>✅ <strong>パフォーマンスが高い</strong>: プライマリは待機しませんスタンバイ</p></li><li><p>✅ <strong>低遅延</strong>: コミット時間はネットワークに依存しません</p></li><li><p>❌ <strong>失われる可能性がありますdata</strong>: スタンバイが WAL を受信する前にプライマリがクラッシュした場合</p></li><li><p>❌ <strong>RPO > 0_</strong>: 目標復旧時点はゼロではありません</p></li></ul><p><strong>_構成:_</strong></p><pre><code class="language-ini"># postgresql.conf (Primary)
synchronous_commit = off  # hoặc local</code></pre><p><strong>使用ケース:_</strong></p><ul><li><p>_別のデータセンターでスタンバイ (待ち時間が長い)</p></li><li><p>データよりもパフォーマンスを優先する安全性_</p></li><li><p>許容できるデータ損失 (数秒)_</p></li></ul><h3>3.2。同期レプリケーション</h3><p><strong>仕組み:_</strong></p><img class="editor-image" src="/storage/uploads/2025/11/8c85cd1b-7a04-4482-8836-43cd3f49ee48-1-201-a-d0a9ce1a.jpeg" alt="" width="2000" height="1091"><p><span>_同期レプリケーション_</span></p><p><strong>特殊ポイント:_</strong></p><ul><li><p>✅ <strong>データ損失ゼロ_</strong>: トランザクションはスタンバイ確認時のみコミット</p></li><li><p>✅ <strong>RPO = 0</strong>: 重要なデータに最適</p></li><li><p>_❌ <strong>パフォーマンスへの影響</strong>: 各最大 2 ～ 10 ミリ秒のオーバーヘッドcommit</p></li><li><p>❌ <strong>可用性リスク</strong>: スタンバイの場合のプライマリ ブロック失敗_</p></li></ul><p><strong>構成:_</strong></p><pre><code class="language-ini"># postgresql.conf (Primary)
synchronous_commit = on              # on, remote_write, remote_apply
synchronous_standby_names = 'standby1,standby2'  # Tên standbys

# recovery.conf hoặc postgresql.auto.conf (Standby)
primary_conninfo = 'host=primary port=5432 user=replicator application_name=standby1'</code></pre><p><strong>_同期コミットレベル:</strong></p><table style="min-width: 100px;"><colgroup><col style="min-width: 25px;"><col style="min-width: 25px;"><col style="min-width: 25px;"><col style="min-width: 25px;">___HTMLT AG_332___<tbody><tr><th colspan="1" rowspan="1"><p>レベル</p></th><th colspan="1" rowspan="1"><p>イタリアの意味</p></th><th colspan="1" rowspan="1"><p>データ安全性_</p></th><th colspan="1" rowspan="1"><p>パフォーマンス</p></th></tr>___HTMLTAG_3 52___<td colspan="1" rowspan="1"><p><code>off</code></p></td><td colspan="1" rowspan="1"><p>お待ちくださいスタンバイ</p></td><td colspan="1" rowspan="1"><p>低</p></td><td colspan="1" rowspan="1"><p>最高</p></td></tr><tr><td colspan="1" rowspan="1"><p>__ _HTMLTAG_375___local</code></p></td><td colspan="1" rowspan="1"><p>ローカルディスクのみ待機</p></td><td colspan="1" rowspan="1"><p>Central平均</p></td><td colspan="1" rowspan="1"><p>曹</p></td></tr><tr>___H TMLTAG_393___<p><code>remote_write</code></p></td><td colspan="1" rowspan="1"><p>OS キャッシュへのスタンバイ書き込みを待つ_</p></td><td colspan="1" rowspan="1"><p>かなり良い_</p></td><td colspan="1" rowspan="1"><p>中央平均</p></td></tr><tr><td colspan="1" rowspan="1"><p> <code>on</code></p></td><td colspan="1" rowspan="1"><p>スタンバイ フラッシュを待つディスク</p></td><td colspan="1" rowspan="1"><p>良い</p></td><td colspan="1" rowspan="1"><p>もっとゆっくり</p></td></tr><tr><td colspan="1" rowspan="1"><p>___HTM LTAG_435___remote_apply</code></p></td><td colspan="1" rowspan="1"><p>待機スタンバイ適用変更内容_</p></td><td colspan="1" rowspan="1"><p>最高_</p></td><td colspan="1" rowspan="1"><p>最も遅い</p></td></tr></tbody></table><h3>3.3.クォーラムベースの同期レプリケーション_</h3><p><strong>PostgreSQL 9.6+: 柔軟な同期レプリケーション_</strong></p><pre><code class="language-ini"># Chờ ANY 1 trong 2 standbys
synchronous_standby_names = 'ANY 1 (standby1, standby2)'

# Chờ FIRST 2 trong 3 standbys
synchronous_standby_names = 'FIRST 2 (standby1, standby2, standby3)'

# Chờ ALL standbys (giống cũ)
synchronous_standby_names = 'standby1, standby2'</code></pre><p><strong>例: 任意1</strong></p><pre><code>3 Standbys: standby1 (DC1), standby2 (DC2), standby3 (DC3)

Transaction commit khi:
✅ Primary committed + ANY 1 standby acknowledged

Scenario:
- standby1: ACK trong 5ms
- standby2: ACK trong 100ms (slow network)
- standby3: DOWN

→ Transaction commit sau 5ms (chờ standby1)
→ Performance tốt + Data safety</code></pre><h3>3.4。同期と非同期の比較</h3><table style="min-width: 75px;"><colgroup><col style="min-width: 25px;"><col style="min-width: 25px;"><col style="min-width: 25px;"></colgroup><tbody><tr><th colspan="1" rowspan="1"><p>Text will_</p></th><th colspan="1" rowspan="1"><p>非同期</p></th><th colspan="1" rowspan="1">___HTMLTA G_483___同期</p></th></tr><tr><td colspan="1" rowspan="1"><p><strong>コミットレイテンシー</strong></p></td><td colspan="1" rowspan="1"><p>~1ms</p></td><td colspan="1" rowspan="1"> <p>_~5-10ms</p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>データ損失のリスク_</strong></p></td><td colspan="1" rowspan="1"><p>はい(一部)秒)</p></td><td colspan="1" rowspan="1"><p>いいえ</p></td></tr><tr><td colspan="1" rowspan="1"><p>___HTMLTAG_522 ___RPO_</strong></p></td><td colspan="1" rowspan="1"><p>秒_</p></td><td colspan="1" rowspan="1"><p>ゼロ</p>___HTML AG_533___</tr><tr><td colspan="1" rowspan="1"><p><strong>RTO </strong></p></td><td colspan="1" rowspan="1"><p>~30～60 代___HTM LTAG_544___</td><td colspan="1" rowspan="1"><p>~30～60代</p>___HTMLTAG_ 549___</tr><tr><td colspan="1" rowspan="1"><p><strong>第一次パフォーマンス_</strong></p></td><td colspan="1" rowspan="1"><p>100%</p></td>___HTMLTAG_562__ _<p>95-98%</p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>ネットワーク依存関係</strong></p></td><td colspan="1" rowspan="1"><p>_低</p></td>___HTMLTAG_57 8___<p>高</p></td></tr><tr><td colspan="1" rowspan="1"><p><strong>ユースケース_</strong></p></td><td colspan="1" rowspan="1"><p>_リードレプリカ、レポート_</p></td><td colspan="1" rowspan="1"><p>重要なデータ、財務</p></td></tr></tbody></table><hr><h2>4。レプリケーション スロット_</h2><h3>4.1。レプリケーション スロットの前の問題</h3><p><strong>シナリオ:</strong></p><pre><code>1. Primary generates WAL files
2. Checkpoint happens → Old WAL cleaned up
3. Standby offline vài giờ
4. Standby comes back online
5. ❌ WAL files needed đã bị xóa
6. ❌ Standby không thể catch up
7. ❌ Cần rebuild Standby từ đầu</code></pre><h3>4.2。レプリケーション スロットが問題を解決します</h3><p><strong>レプリケーション スロット</strong> は、スタンバイが消費されるまでプライマリが WAL ファイルを保持することを保証します。</p><img class="editor-image" src="/storage/uploads/2025/11/a9f3c963-8471-4e6c-90cd-5d325edeefeb-1-201-a-4fcc4afb.jpeg" alt="" width="2000" height="1091"><p><strong>レプリケーションスロット</strong></p><h3>4.3。レプリケーション S の作成と管理ロット_</h3><p><strong>プライマリにスロットを作成:</strong></p><pre><code class="language-sql">-- Physical replication slot
SELECT * FROM pg_create_physical_replication_slot('standby1_slot');

-- Xem danh sách slots
SELECT slot_name, slot_type, active, restart_lsn, confirmed_flush_lsn
FROM pg_replication_slots;

-- Output:
 slot_name     | slot_type | active | restart_lsn | confirmed_flush_lsn
---------------+-----------+--------+-------------+--------------------
 standby1_slot | physical  | t      | 0/3000000   | NULL</code></pre><p><strong>上記のスロットを使用スタンバイ:_</strong></p><p>ini_</p><pre><code class="language-ini"># postgresql.auto.conf (Standby)
primary_slot_name = 'standby1_slot'</code></pre><p><strong>削除スロット:</strong></p><p>sql_</p><pre><code class="language-sql">SELECT pg_drop_replication_slot('standby1_slot');</code></pre><h3>4.4。レプリケーション スロットの監視_</h3><p>sql</p><pre><code class="language-sql">-- Kiểm tra slot status
SELECT 
    slot_name,
    active,
    pg_size_pretty(pg_wal_lsn_diff(pg_current_wal_lsn(), restart_lsn)) as retained_wal
FROM pg_replication_slots;

-- Cảnh báo nếu retained_wal quá lớn (&gt;10GB)</code></pre><h3>4.5。重要な注意事項_</h3><p>⚠️ <strong>リスク:</strong></p><ul><li><p>スタンバイがスロットで長時間オフラインの場合 → プライマリが WAL を維持する永久</p></li><li><p>プライマリのディスクをいっぱいにすることができます</p></li><li><p>監視とアラートが必要</p></li></ul><p><strong>最高練習:</strong></p><p>sql</p><pre><code class="language-sql">-- Set max WAL size để bảo vệ Primary
ALTER SYSTEM SET max_slot_wal_keep_size = '100GB';  -- PostgreSQL 13+

-- Hoặc tự động drop inactive slot sau 24h
SELECT pg_drop_replication_slot(slot_name)
FROM pg_replication_slots
WHERE NOT active 
  AND pg_current_wal_lsn() - restart_lsn &gt; 100*1024*1024*1024;  -- 100GB</code></pre><hr><h2>5。ラボ: ストリーミング レプリケーションを手動でセットアップ</h2><h3>5.1。ラボの目標</h3><p>次の PostgreSQL クラスターを作成します:</p><ul><li><p>1 プライマリ サーバー</p></li><li><p>1 スタンバイサーバー_</p></li><li><p>ストリーミングレプリケーション(非同期)</p></li><li><p>ホットスタンバイ(読み取りクエリ)_</p></li></ul><h3>5.2。環境_</h3><pre><code>Primary:  192.168.1.101 (node1)
Standby:  192.168.1.102 (node2)
PostgreSQL: 14
OS: Ubuntu 22.04</code></pre><h3>5.3。ステップ 1: PostgreSQL をインストールします (両方のノード)</h3><p>bash</p><pre><code class="language-bash"># Install PostgreSQL 14
sudo apt update
sudo apt install -y postgresql-14 postgresql-contrib-14

# Stop service
sudo systemctl stop postgresql</code></pre><h3>5.4。ステップ 2: プライマリ (node1) の構成</h3><p><strong>レプリケーションの作成ユーザー:</strong></p><p>bash</p><pre><code class="language-bash">sudo -u postgres psql</code></pre><p>_sql</p><pre><code class="language-sql">-- Tạo user cho replication
CREATE ROLE replicator WITH REPLICATION LOGIN PASSWORD 'repl_password';

-- Exit
\q</code></pre><p><strong>構成postgresql.conf:</strong></p><p>_bash</p><pre><code class="language-bash">sudo nano /etc/postgresql/14/main/postgresql.conf</code></pre><p>ini</p><pre><code class="language-ini"># Connection
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
archive_command = 'test ! -f /var/lib/postgresql/14/archive/%f &amp;&amp; cp %p /var/lib/postgresql/14/archive/%f'</code></pre><p><strong>アーカイブの作成ディレクトリ:</strong></p><p>bash</p><pre><code class="language-bash">sudo mkdir -p /var/lib/postgresql/14/archive
sudo chown postgres:postgres /var/lib/postgresql/14/archive</code></pre><p><strong>構成pg_hba.conf:</strong></p><p>bash</p><pre><code class="language-bash">sudo nano /etc/postgresql/14/main/pg_hba.conf</code></pre><p>ini</p><pre><code class="language-ini"># Replication connections
host    replication     replicator      192.168.1.102/32        md5
host    replication     replicator      127.0.0.1/32            md5</code></pre><p><strong>開始プライマリ:_</strong></p><p>bash</p><pre><code class="language-bash">sudo systemctl start postgresql
sudo systemctl status postgresql</code></pre><p><strong>レプリケーションの作成スロット:_</strong></p><p>bash</p><pre><code class="language-bash">sudo -u postgres psql</code></pre><p>_sql_</p><pre><code class="language-sql">SELECT pg_create_physical_replication_slot('standby_slot');
SELECT * FROM pg_replication_slots;
\q</code></pre><h3>5.5。ステップ 3: スタンバイ (ノード 2) のセットアップ</h3><p><strong>PostgreSQL を停止し、古いデータをバックアップします:</strong></p><p>bash</p><pre><code class="language-bash">sudo systemctl stop postgresql
sudo mv /var/lib/postgresql/14/main /var/lib/postgresql/14/main.bak</code></pre><p><strong>ベース バックアッププライマリ:</strong></p><p>bash</p><pre><code class="language-bash"># Sử dụng pg_basebackup
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
# -S: Slot name</code></pre><p><strong>出力サンプル:</strong></p><pre><code>pg_basebackup: initiating base backup, waiting for checkpoint to complete
pg_basebackup: checkpoint completed
pg_basebackup: write-ahead log start point: 0/2000028 on timeline 1
pg_basebackup: starting background WAL receiver
pg_basebackup: created replication slot "standby_slot"
24567/24567 kB (100%), 1/1 tablespace
pg_basebackup: write-ahead log end point: 0/2000100
pg_basebackup: syncing data to disk ...
pg_basebackup: base backup completed</code></pre><p><strong>standby.signal が有効であることを確認します。作成:</strong></p><p>bash</p><pre><code class="language-bash">ls -l /var/lib/postgresql/14/main/standby.signal
# File này đánh dấu đây là standby server</code></pre><p><strong>Check postgresql.auto.conf:</strong></p><p>bash</p><pre><code class="language-bash">sudo cat /var/lib/postgresql/14/main/postgresql.auto.conf</code></pre><p>ini</p><pre><code class="language-ini"># Được tạo tự động bởi pg_basebackup -R
primary_conninfo = 'user=replicator password=repl_password host=192.168.1.101 port=5432 sslmode=prefer sslcompression=0 krbsrvname=postgres target_session_attrs=any'
primary_slot_name = 'standby_slot'</code></pre><p><strong>開始スタンバイ:</strong></p><p>bash</p><pre><code class="language-bash">sudo systemctl start postgresql
sudo systemctl status postgresql</code></pre><h3>5.6。ステップ 4: レプリケーションの確認_</h3><p><strong>プライマリ (ノード 1):</strong></p><p>sql</p><pre><code class="language-sql">sudo -u postgres psql

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
 192.168.1.102 | streaming | async      | 0/3000060   | 0 bytes</code></pre><p><strong>スタンバイ(ノード 2):</strong></p><p>sql</p><pre><code class="language-sql">sudo -u postgres psql

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
 0/3000060   | 0/3000060   | 0 bytes</code></pre><h3>_5.7。ステップ 5: レプリケーションのテスト</h3><p><strong>プライマリ上 - テスト データの作成:</strong></p><p>sql</p><pre><code class="language-sql">-- Tạo database và table
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

SELECT * FROM users;</code></pre><p><strong>スタンバイ上 - 確認データ:</strong></p><p>sql</p><pre><code class="language-sql">\c testdb

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
-- ERROR: cannot execute INSERT in a read-only transaction</code></pre><h3>5.8。ステップ 6: クエリの監視</h3><p><strong>レプリケーション遅延監視:</strong></p><p>sql</p><pre><code class="language-sql">-- Trên Primary
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
SELECT * FROM replication_lag_bytes();</code></pre><p><strong>遅延が発生した場合のアラート10MB:</strong></p><p>sql</p><pre><code class="language-sql">SELECT client_addr, 
       pg_size_pretty(lag_bytes) as lag
FROM replication_lag_bytes()
WHERE lag_bytes &gt; 10*1024*1024;</code></pre><h3>5.9。一般的な問題のトラブルシューティング</h3><p><strong>問題 1: スタンバイがプライマリに接続できない</strong></p><p>bash</p><pre><code class="language-bash"># Check logs
sudo tail -f /var/lib/postgresql/14/main/log/postgresql-*.log

# Common errors:
# - "FATAL: password authentication failed"
#   → Check pg_hba.conf và password

# - "FATAL: no pg_hba.conf entry for replication"
#   → Add replication entry vào pg_hba.conf

# - Connection refused
#   → Check firewall, listen_addresses</code></pre><p><strong>問題 2: レプリケーションの遅延が増加する高_</strong></p><p>sql</p><pre><code class="language-sql">-- Kiểm tra WAL sender busy
SELECT * FROM pg_stat_activity 
WHERE backend_type = 'walsender';

-- Kiểm tra I/O trên Standby
SELECT * FROM pg_stat_bgwriter;</code></pre><p><strong>問題 3: スロットが埋まっていますディスク</strong></p><p>sql</p><pre><code class="language-sql">-- Kiểm tra retained WAL
SELECT 
    slot_name,
    pg_size_pretty(pg_wal_lsn_diff(pg_current_wal_lsn(), restart_lsn)) as retained
FROM pg_replication_slots;

-- Drop inactive slot nếu cần
SELECT pg_drop_replication_slot('standby_slot');</code></pre><hr><h2>6。ベスト プラクティス</h2><h3>6.1。構成のチューニング</h3><p>ini</p><pre><code class="language-ini"># Primary - postgresql.conf

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
checkpoint_completion_target = 0.9</code></pre><h3>6.2。監視チェックリスト____HTMLTAG_854__HTMLTAG_855___✅ <strong>レプリケーションラグ</strong> (バイトと時間) ✅ <strong>スタンバイ接続ステータス</strong> ✅ <strong>WAL 送信プロセス</strong> ✅ <strong>ディスク容量</strong> (pg_wal/およびarchive/) ✅ <strong>レプリケーションスロット</strong> (保持されたWAL) ✅ <strong>チェックポイントのパフォーマンス</strong></p><h3>6.3。セキュリティに関する推奨事項_</h3><p>ini</p><pre><code class="language-ini"># Use SSL for replication
ssl = on
ssl_cert_file = '/path/to/server.crt'
ssl_key_file = '/path/to/server.key'

# Standby connection string
primary_conninfo = '... sslmode=require sslcompression=1'</code></pre><p>_ini</p><pre><code class="language-ini"># pg_hba.conf - Use hostssl
hostssl replication replicator 192.168.1.0/24 md5</code></pre><hr><h2>7。概要_</h2><h3>重要なポイント_</h3><ol><li><p><strong>ストリーミング レプリケーション_</strong> は PostgreSQL HA の基盤です:</p><ul><li><p>_リアルタイムWAL ストリーミング_</p></li><li><p>読み取りクエリのホット スタンバイ__HTMLTAG_893___</li><li><p>Patroni 自動フェイルオーバーの基礎</p></li></ul></li><li><p><strong>WAL (先行書き込み)ログ)_</strong>:</p><ul><li><p>データ書き込み前のログ_</p></li><li><p>_クラッシュ回復メカニズム</p></li><li><p>レプリケーショントランスポートformat_</p></li></ul></li><li><p><strong>同期 vs 非同期</strong>:</p><ul><li><p>非同期: 高パフォーマンス、失われる可能性ありデータ_</p></li><li><p>Sync: データ損失ゼロ、パフォーマンスへの影響</p></li><li><p>クォーラムベース: 2 つの間のバランス</p></li></ul></li><li><p><strong>レプリケーションスロット</strong>:</p><ul><li><p>WAL が削除されていないことを確認してください時期尚早</p></li><li><p>スタンバイの安定性にとって重要</p></li><li><p>ディスクを回避するために監視が必要フル_</p></li></ul></li></ol><p></p>