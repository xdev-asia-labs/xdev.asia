---
id: 019c9617-fad7-7170-97f5-55c1940af2f5
title: Patroni と etcd による PostgreSQL の高可用性
slug: postgresql-high-availability-voi-patroni-etcd
description: 'Patroni と etcd を使用して PostgreSQL 高可用性クラスターをデプロイする方法を学びます。 AからZまでの実践的なコース: インストール、構成、自動フェイルオーバー、監視、運用操作。 29 レッスン + 詳細なラボ。'
featured_image: uploads/2025/11/postgresql-high-availability-6c97b5fc.jpeg
level: intermediate
duration_hours: 76
lesson_count: 29
price: '0.00'
is_free: true
view_count: 1
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2025-11-22T05:07:03.000000Z'
created_at: '2026-02-25T18:37:59.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9617-faa6-70d6-8679-ee4de1f177b3
  name: DevSecOps
  slug: devsecops
tags:
- name: PostgreSQL High Availability với Patroni & etcd Course
  slug: postgresql-high-availability-voi-patroni-etcd-course
- name: postgresql
  slug: postgresql
- name: high-availability
  slug: high-availability
- name: patroni
  slug: patroni
- name: etcd
  slug: etcd
- name: database-clustering
  slug: database-clustering
- name: replication
  slug: replication
- name: failover
  slug: failover
- name: distributed-systems
  slug: distributed-systems
- name: devops
  slug: devops
- name: database-administration
  slug: database-administration
- name: streaming-replication
  slug: streaming-replication
- name: automated-failover
  slug: automated-failover
- name: cluster-management
  slug: cluster-management
- name: production-deployment
  slug: production-deployment
- name: monitoring
  slug: monitoring
- name: backup-recovery
  slug: backup-recovery
- name: disaster-recovery
  slug: disaster-recovery
- name: linux
  slug: linux
- name: system-administration
  slug: system-administration
- name: infrastructure
  slug: infrastructure
sections:
- id: unsectioned
  title: Patroni と etcd による PostgreSQL の高可用性
  description: null
  sort_order: 0
  lessons:
  - id: 019c9617-fb5e-71a4-b3a1-a77a7c225818
    title: 'レッスン 1: PostgreSQL の高可用性の概要'
    slug: bai-1-tong-quan-ve-postgresql-high-availability
    description: 高可用性が必要な理由を学び、一般的な HA ソリューション (Patroni、Repmgr、Pacemaker) を比較し、PostgreSQL HA システムの全体的なアーキテクチャを習得します。
    duration_minutes: 110
    is_free: true
    sort_order: 1
    video_url: null
  - id: 019c9617-fb63-72fe-8fb4-4839e41ca6b5
    title: 'レッスン 2: PostgreSQL でのストリーミング レプリケーション'
    slug: bai-2-streaming-replication-trong-postgresql
    description: ストリーミング レプリケーション メカニズム、WAL ログ、同期/非同期レプリケーションの違いを調べ、基本的なプライマリ/スタンバイ セットアップを実践します。
    duration_minutes: 190
    is_free: true
    sort_order: 2
    video_url: null
  - id: 019c9617-fb66-7039-b71b-ae1b85a72eee
    title: 'レッスン 3: Patroni と etcd の紹介'
    slug: bai-3-gioi-thieu-patroni-va-etcd
    description: Patroni の仕組み、DCS の役割 (etcd/Consul/ZooKeeper)、Raft コンセンサス アルゴリズム、自動リーダー選出メカニズムを理解します。
    duration_minutes: 160
    is_free: true
    sort_order: 3
    video_url: null
  - id: 019c9617-fb6a-71b8-aea5-33a8de9b9d29
    title: 'レッスン 4: インフラストラクチャの準備'
    slug: bai-4-chuan-bi-ha-tang
    description: ハードウェア要件、ネットワーク/ファイアウォール構成、3 つの VM/サーバーのセットアップ、HA クラスターの時刻同期に関する詳細な手順。
    duration_minutes: 145
    is_free: true
    sort_order: 4
    video_url: null
  - id: 019c9617-fb6d-73ff-ab92-84838b979806
    title: 'レッスン 5: PostgreSQL のインストール'
    slug: bai-5-cai-dat-postgresql
    description: パッケージ リポジトリまたはソースから PostgreSQL をインストールし、クラスター内の 3 つのノードすべてで postgresql.conf と pg_hba.conf を構成します。
    duration_minutes: 110
    is_free: true
    sort_order: 5
    video_url: null
  - id: 019c9617-fb71-7108-9898-0733dd6d13bf
    title: 'レッスン 6: etcd クラスターのインストールと構成'
    slug: bai-6-cai-dat-va-cau-hinh-etcd-cluster
    description: etcd クラスター 3 ノードをダウンロード、インストール、構成し、systemd サービスを作成し、etcdctl コマンドで正常性をチェックします。
    duration_minutes: 160
    is_free: true
    sort_order: 6
    video_url: null
  - id: 019c9617-fb74-7100-9272-7839bac3bdac
    title: 'レッスン 7: Patroni のインストール'
    slug: bai-7-cai-dat-patroni
    description: Python の依存関係をインストールし、pip 経由で Patroni をセットアップし、patroni.yml 構造を分析して、3 つのノードに systemd サービスを作成します。
    duration_minutes: 165
    is_free: true
    sort_order: 7
    video_url: null
  - id: 019c9617-fb77-71c7-a375-ddb3553fc7a4
    title: 'レッスン 8: Patroni の詳細な構成'
    slug: bai-8-cau-hinh-patroni-chi-tiet
    description: patroni.yml ファイルの各セクション (ブートストラップ、PostgreSQL パラメータ、認証、タグ、クラスターの制約) を詳しく分析します。
    duration_minutes: 155
    is_free: true
    sort_order: 8
    video_url: null
  - id: 019c9617-fb7a-7138-be78-f6d8b1653656
    title: 'レッスン 9: PostgreSQL クラスターのブートストラップ'
    slug: bai-9-bootstrap-postgresql-cluster
    description: Patroni を初めて起動し、自動ブートストラップ プロセスを監視し、patronictl でステータスを確認し、一般的な問題のトラブルシューティングを行います。
    duration_minutes: 120
    is_free: true
    sort_order: 9
    video_url: null
  - id: 019c9617-fb7c-727d-a01d-896b5d138e2f
    title: 'レッスン 10: レプリケーション管理'
    slug: bai-10-quan-ly-replication
    description: 同期/非同期レプリカ、synchronous_mode、synchronous_node_count を構成し、クラスター内のレプリケーション ラグを監視します。
    duration_minutes: 120
    is_free: true
    sort_order: 10
    video_url: null
  - id: 019c9617-fb80-70a6-9003-6e17ae121e1f
    title: 'レッスン 11: Patroni コールバック'
    slug: bai-11-patroni-callbacks
    description: コールバック スクリプト (on_start、on_stop、on_role_change) を作成し、通知用のカスタム スクリプトを作成し、監視システムと統合します。
    duration_minutes: 285
    is_free: true
    sort_order: 11
    video_url: null
  - id: 019c9617-fb83-7047-bb91-e761d8b60d96
    title: 'レッスン 12: Patroni REST API'
    slug: bai-12-patroni-rest-api
    description: Patroni REST API エンドポイントを使用し、patronictl コマンドをマスターし、CLI と API 経由でクラスター管理を自動化します。
    duration_minutes: 265
    is_free: true
    sort_order: 12
    video_url: null
  - id: 019c9617-fb87-7086-95fc-6fd978990d86
    title: 'レッスン 13: 自動フェイルオーバー'
    slug: bai-13-automatic-failover
    description: エラー検出メカニズム、リーダー選出プロセス、フェイルオーバー タイムラインを学び、プライマリ ノード障害のシミュレーションを練習します。
    duration_minutes: 160
    is_free: true
    sort_order: 13
    video_url: null
  - id: 019c9617-fb8b-7187-aede-cf5e97de1cd3
    title: 'レッスン 14: 計画的な切り替え'
    slug: bai-14-switchover-co-ke-hoach-planned-switchover
    description: 計画的なスイッチオーバーとフェイルオーバーの区別、スイッチオーバーのタイミング、ダウンタイムゼロのメンテナンス、および安全なスイッチオーバーの実践。
    duration_minutes: 200
    is_free: true
    sort_order: 14
    video_url: null
  - id: 019c9617-fb8e-711e-a241-91e33cbbe469
    title: 'レッスン 15: 障害が発生したノードの回復'
    slug: bai-15-recovering-failed-nodes
    description: pg_rewind メカニズムを使用して、障害が発生したプライマリをクラスターに再結合し、必要に応じてバックアップからレプリカを再構築します。
    duration_minutes: 210
    is_free: true
    sort_order: 15
    video_url: null
  - id: 019c9617-fb91-71b3-893f-1f4d0ad10625
    title: 'レッスン 16: バックアップとポイントインタイム リカバリ (PITR)'
    slug: bai-16-backup-va-point-in-time-recovery-pitr
    description: pg_basebackup を使用して、WAL アーカイブ、継続的アーカイブを構成し、ポイントインタイム リカバリ (PITR) を実行します。
    duration_minutes: 205
    is_free: true
    sort_order: 16
    video_url: null
  - id: 019c9617-fb94-7137-99fe-08685ac4ab93
    title: 'レッスン 17: Patroni クラスターの監視'
    slug: bai-17-monitoring-patroni-cluster
    description: Prometheus + Grafana を使用して監視スタックをセットアップし、postgres_exporter を使用し、HA クラスターのアラート ルールを構成します。
    duration_minutes: 175
    is_free: true
    sort_order: 17
    video_url: null
  - id: 019c9617-fb98-7319-877d-16408c323ce3
    title: 'レッスン 18: パフォーマンスのチューニング'
    slug: bai-18-performance-tuning
    description: PostgreSQL 構成を最適化し、接続プーリング (PgBouncer)、負荷分散 (HAProxy)、およびリードレプリカのスケーリングを実装します。
    duration_minutes: 130
    is_free: true
    sort_order: 18
    video_url: null
  - id: 019c9617-fb9b-734d-b723-e97053646091
    title: 'レッスン 19: ロギングとトラブルシューティング'
    slug: bai-19-logging-va-troubleshooting
    description: PostgreSQL ログ、Patroni ログ、etcd ログを分析し、一般的な問題と効果的なデバッグ手法を解決します。
    duration_minutes: 130
    is_free: true
    sort_order: 19
    video_url: null
  - id: 019c9617-fb9e-7077-950d-b4fa097ce8b1
    title: 'レッスン 20: セキュリティのベスト プラクティス'
    slug: bai-20-security-best-practices
    description: SSL/TLS、認証方法、ネットワーク セキュリティ、保存時の暗号化、監査ログ、およびクラスター セキュリティの強化を構成します。
    duration_minutes: 110
    is_free: true
    sort_order: 20
    video_url: null
  - id: 019c9617-fba1-7128-b313-6412f33f40cf
    title: 'レッスン 21: マルチデータセンターのセットアップ'
    slug: bai-21-multi-datacenter-setup
    description: DC 間レプリケーション戦略、非同期カスケード レプリケーション、災害計画復旧、地理的負荷分散。
    duration_minutes: 135
    is_free: true
    sort_order: 21
    video_url: null
  - id: 019c9617-fba4-73b9-bb9a-c345301dc226
    title: 'レッスン 22: Kubernetes を使用した Patroni'
    slug: bai-22-patroni-voi-kubernetes
    description: Patroni オペレーター、StatefulSet、永続ボリューム、Helm チャートを使用して Kubernetes に Patroni をデプロイします。
    duration_minutes: 155
    is_free: true
    sort_order: 22
    video_url: null
  - id: 019c9617-fba8-7143-940f-93cdbbdcd4a1
    title: 'レッスン 23: Patroni 構成管理'
    slug: bai-23-patroni-configuration-management
    description: 動的な構成変更、DCS ベースの構成では、patronictl edit-config を使用し、ダウンタイムなしで構成を更新します。
    duration_minutes: 110
    is_free: true
    sort_order: 23
    video_url: null
  - id: 019c9617-fbab-73c4-8dbe-d7e05b7e381a
    title: 'レッスン 24: アップグレード戦略'
    slug: bai-24-upgrade-strategies
    description: PostgreSQL メジャー バージョン、Patroni バージョン、ゼロ ダウンタイム アップグレード手法、ロールバック手順、ラボの PG 17 から 18 へのアップグレード。
    duration_minutes: 145
    is_free: true
    sort_order: 24
    video_url: null
  - id: 019c9617-fbae-719f-bd83-5b4c737bb570
    title: 'レッスン 25: 現実世界のケーススタディ'
    slug: bai-25-real-world-case-studies
    description: 実際の運用アーキテクチャ、スケーリング戦略、コストの最適化、実際のプロジェクトから学んだ教訓を分析します。
    duration_minutes: 130
    is_free: true
    sort_order: 25
    video_url: null
  - id: 019c9617-fbb2-70b7-a4db-23daa55ff807
    title: 'レッスン 26: Ansible による自動化'
    slug: bai-26-automation-voi-ansible
    description: PostgreSQL HA クラスターのデプロイ、構成管理、自動テスト、CI/CD 統合のための Ansible プレイブックを作成します。
    duration_minutes: 115
    is_free: true
    sort_order: 26
    video_url: null
  - id: 019c9617-fbb5-7070-ba8e-a4ee3baf3c1d
    title: 'レッスン 27: 災害復旧訓練'
    slug: bai-27-disaster-recovery-drills
    description: DR 計画、テスト手順、インシデント対応プロセス、事後分析、完全な DR シナリオ シミュレーション。
    duration_minutes: 110
    is_free: true
    sort_order: 27
    video_url: null
  - id: 019c9617-fbba-71f4-a5c3-d75c9087a96e
    title: 'レッスン 28: 建築設計 HA'
    slug: bai-28-thiet-ke-kien-truc-ha
    description: 要件を収集し、アーキテクチャ設計文書を設計し、容量計画を作成し、HA 実稼働システムのコストを見積もります。
    duration_minutes: 160
    is_free: true
    sort_order: 28
    video_url: null
  - id: 019c9617-fbbd-7170-9eb6-c3c63e67172b
    title: 'レッスン 29: 実稼働対応クラスターのデプロイ'
    slug: bai-29-deploy-production-ready-cluster
    description: クラスターを最初から完全にデプロイし、ドキュメント、ランブック、知識の伝達、コース終了時の評価を作成します。
    duration_minutes: 185
    is_free: true
    sort_order: 29
    video_url: null
reviews: []
quizzes: []
locale: ja
---
<p><strong>レッスン 1: PostgreSQL の高可用性の概要</strong></p><ul><li>HA を使用する理由</li><li>PostgreSQL の HA メソッド</li><li>比較: Patroni、Repmgr、Pacemaker</li><li>_システムアーキテクチャの概要_</li></ul><p><strong>レッスン 2: PostgreSQL のストリーミング レプリケーション</strong></p><ul><li>ストリーミング レプリケーションのメカニズム</li><li>WAL (先行書き込み)ロギング)_</li><li>同期レプリケーションと非同期レプリケーション</li><li>レプリケーション スロット</li><li>ラボ: 簡単なレプリケーション設定 (プライマリ-スタンバイ)</li></ul><p><strong>レッスン 3: Patroni とetcd_</strong></p><ul><li>パトローニとは何ですか?仕組み_</li><li>DCS (分散構成ストア) - etcd/Consul/ZooKeeper</li><li>コンセンサスアルゴリズム (Raft)</li><li>リーダーの選出とフェイルオーバーメカニズム_</li><li>_スプリットブレイン問題とその解決方法_</li></ul><p><strong>レッスン 4: インフラストラクチャの準備_</strong></p><ul><li>ハード要件と部品要件ソフトウェア_</li><li>ネットワークとファイアウォールの構成</li><li>3 つの VM/サーバーのセットアップ (VirtualBox/VMware/Cloud)</li><li>SSH キーベースの認証</li><li>時刻同期(NTP/chrony)</li></ul><p><strong>レッスン 5: PostgreSQL のインストール_</strong></p><ul><li>パッケージ リポジトリから PostgreSQL をインストール</li><li>ソースからインストール(オプション)</li><li>基本的な postgresql.conf 構成</li><li>pg_hba.conf について_</li><li>ラボ: 3 ノードへの PostgreSQL のインストール</li></ul><p><strong>レッスン 6: etcd のインストールと構成クラスター_</strong></p><ul><li>etcd のダウンロードとインストール_</li><li>etcd クラスター 3 ノードの構成</li><li>systemd サービスの作成</li><li>etcd の健全性の確認クラスター_</li>___HTMLTAG_91__etcdctl 基本コマンド_</li><li>ラボ: etcd クラスターの完全な編集</li></ul><p><strong>レッスン 7: Patroni のインストール</strong></p><ul><li>_Python のインストール依存関係_</li><li>pip 経由で Patroni をインストール_</li><li>Patroni.yml ファイル構造_</li><li>Patroni 用の systemd サービスを作成_</li><li>ラボ: Patroni を 3 にインストールするノード_</li></ul><p><strong>レッスン 8: Patroni の詳細構成</strong></p><ul><li>毎回 patroni.yml ファイルを分析するセクション</li><li>ブートストラップ構成_</li><li>PostgreSQLパラメータ調整</li><li>認証設定_</li><li>Tags と制約_</li></ul><p><strong>レッスン 9: PostgreSQL クラスターのブートストラップ_</strong></p><ul><li>Patroni タイムヘッドの開始</li><li>自動ブートストラップprocess_</li><li>patronictl でクラスターのステータスを確認する_</li><li>一般的な問題のトラブルシューティング_</li><li>ラボ: クラスターをパブリックにブートストラップ</li></ul><p><strong>レッスン 10: レプリケーション管理_</strong></p><ul><li>同期レプリカと非同期レプリカ</li><li>synchronous_modeの構成</li><li>synchronous_node_count</li><li>_レプリケーションの監視ラグ_</li><li>ラボ: 同期構成レプリケーション_</li></ul><p><strong>レッスン 11: コールバック スクリプトとフック_</strong></p><ul><li>on_start、on_stop、on_role_changeコールバック</li><li>通知用のカスタム スクリプト</li><li>監視システムとの統合</li><li>ラボ: フェールオーバー時にアラートを送信するスクリプトを作成</li></ul><p><strong>レッスン 12: REST API とpatronictl_</strong></p><ul><li>Patroni REST API エンドポイント</li><li>patronictl コマンドの使用</li><li>API による自動化</li><li>ラボ: CLI およびAPI_</li></ul><h3 id="module-4-failover-recovery-4-b%C3%A0i"><strong>モジュール 4: フェイルオーバーとフェイルオーバーリカバリ_</strong> (4 レッスン)</h3><p><strong>レッスン 13: 自動フェイルオーバー_</strong></p><ul><li>検出メカニズムエラー</li><li>リーダーの選出プロセス_</li><li>フェイルオーバーのタイムライン</li><li>自動フェイルオーバーのテスト_</li><li>ラボ: プライマリ ノードの障害をシミュレート</li></ul><p><strong>レッスン 14: スイッチオーバー計画</strong></p><ul><li>スイッチオーバーが必要な場合</li><li>計画スイッチオーバーとフェイルオーバー</li><li>ダウンタイムゼロのメンテナンス</li><li>ラボ: 実装スイッチオーバー_</li></ul><p><strong>レッスン 15: 障害が発生したノードの回復_</strong></p><ul><li>障害が発生したプライマリへの再参加</li><li>pg_rewindメカニズム_</li><li>バックアップからレプリカを再構築</li><li>ラボ: 回復シナリオ</li></ul><p><strong>レッスン 16: バックアップとポイントインタイムリカバリ_</strong></p><ul><li>pg_basebackup</li><li>WAL アーカイブ_</li><li>継続的構成アーカイブ</li><li>PITR (ポイントインタイム)リカバリ)</li><li>ラボ: バックアップからデータベースを復元</li></ul><p><strong>レッスン 17: Patroni クラスターの監視</strong></p><ul><li>追跡する指標</li><li>Prometheus 統合 + Grafana</li><li>postgres_exporter</li><li>アラートルール_</li><li>ラボ: 監視スタックのセットアップ</li></ul><p><strong>レッスン 18: パフォーマンスのチューニング</strong></p><ul><li>PostgreSQL の構成チューニング_</li><li>接続プーリング (PgBouncer)</li><li>負荷分散 (HAProxy/pgpool)</li><li>リードレプリカのスケーリング</li><li>ラボ: クラスターの最適化パフォーマンス_</li></ul><p><strong>レッスン 19: ロギングとトラブルシューティング</strong></p><ul><li>PostgreSQL ログ</li><li>Patroniログ</li><li>etcd ログ</li><li>一般的な問題と修正方法_</li><li>デバッグ技術</li></ul><p><strong>レッスン 20: セキュリティの最善策プラクティス</strong></p><ul><li>SSL/TLS 構成</li><li>認証方法</li><li>ネットワークセキュリティ</li><li>暗号化残り</li><li>監査ログ</li><li>ラボ: クラスターのセキュリティの強化</li></ul><p><strong>レッスン 21: マルチデータセンターセットアップ_</strong></p><ul><li>DC 間レプリケーション戦略</li><li>非同期カスケードレプリケーション_</li><li>災害復旧計画</li><li>地理的負荷バランス</li></ul><p><strong>レッスン 22: Patroni と Kubernetes_</strong></p><ul><li>Patroniオペレーター</li><li>StatefulSets_</li><li>永続ボリューム_</li><li>Helm チャート</li><li>ラボ: デプロイ先K8s_</li></ul><p><strong>レッスン 23: Patroni 構成管理</strong></p><ul><li>動的構成変更</li><li>DCS ベース構成_</li><li>patronictl edit-config_</li><li>構成の検証</li><li>ラボ: ダウンタイムなしで構成を更新_</li></ul><p><strong>レッスン 24: アップグレード戦略_</strong></p><ul><li>PostgreSQL メジャー バージョン アップグレード</li><li>Patroni バージョン アップグレード</li><li>ゼロダウンタイム アップグレード手法</li><li>ロールバック手順_</li><li>ラボ: クラスターを PG 14 から 15 にアップグレード</li></ul><p><strong>レッスン 25: 実際のケーススタディ_</strong></p><ul><li>本番アーキテクチャ例_</li><li>スケーリング戦略_</li><li>コストの最適化</li><li>学んだ教訓</li></ul><p><strong>レッスン 26: Ansible による自動化_</strong></p><ul><li>Ansible プレイブック導入_</li><li>_構成管理_</li><li>自動テスト</li><li>CI/CD統合</li><li>ラボ: 自動化導入</li></ul><p><strong>レッスン 27: 災害復旧訓練_</strong></p><ul><li>DR 計画_</li><li>テスト手順_</li><li>インシデント対応</li><li>事後分析</li><li>ラボ:完全な DR シミュレーション</li></ul><p><strong>レッスン 28: アーキテクチャ設計HA</strong></p><ul><li>要件の収集</li><li>アーキテクチャ設計ドキュメント</li><li>キャパシティ計画</li><li>コスト見積もり_</li></ul><p><strong>レッスン 29: 実稼働対応クラスターのデプロイ</strong></p><ul><li>デプロイメントを完了するスクラッチ_</li><li>ドキュメント_</li><li>ランブックの作成</li><li>知識の伝達</li><li>最終評価</li></ul><hr><p><strong>前提条件:_</strong></p><ul><li>Linux バージョン</li><li>PostgreSQL基本</li><li>ネットワークの基本</li><li>シェルスクリプト_</li></ul><p><strong>セクション終了後の目標コース:</strong></p><ul><li>本番環境に対応した PostgreSQL HA クラスターの実装</li><li>クラスターの管理と操作_</li><li>インシデント処理とトラブルシューティング</li><li>パフォーマンスとセキュリティ</li></ul>