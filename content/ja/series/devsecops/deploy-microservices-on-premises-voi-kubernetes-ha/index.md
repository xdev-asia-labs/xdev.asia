---
id: 019e1a00-aa01-7001-c001-k8sha000001
title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
slug: deploy-microservices-on-premises-voi-kubernetes-ha
description: Kubernetes HA (高可用性)、Patroni を使用した PostgreSQL HA、Ceph/Rook ストレージ、Istio Service Mesh、ArgoCD GitOps、Prometheus Observability Stack、HashiCorp Vault、RabbitMQ HA、Redis Cluster、その他多くの実稼働グレードのテクノロジーを使用して、マイクロサービスをオンプレミス システムにデプロイするための包括的な実践コース。インフラストラクチャ設計、クラスターのインストール、マイクロサービスの導入から運用、DR、エンタープライズ標準セキュリティまで。ベアメタル/VM に関する 50 レッスン + 演習ラボ。
featured_image: uploads/2026/04/microservices-on-prem-k8s-ha-banner.png
level: advanced
duration_hours: 180
lesson_count: 50
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-04-02T07:00:00.000000Z'
created_at: '2026-04-02T07:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9617-faa6-70d6-8679-ee4de1f177b3
  name: DevSecOps
  slug: devsecops
tags:
- name: kubernetes
  slug: kubernetes
- name: high-availability
  slug: high-availability
- name: microservices
  slug: microservices
- name: on-premises
  slug: on-premises
- name: postgresql
  slug: postgresql
- name: patroni
  slug: patroni
- name: etcd
  slug: etcd
- name: ceph
  slug: ceph
- name: rook
  slug: rook
- name: istio
  slug: istio
- name: argocd
  slug: argocd
- name: gitops
  slug: gitops
- name: prometheus
  slug: prometheus
- name: grafana
  slug: grafana
- name: vault
  slug: vault
- name: rabbitmq
  slug: rabbitmq
- name: redis
  slug: redis
- name: metallb
  slug: metallb
- name: cert-manager
  slug: cert-manager
- name: helm
  slug: helm
- name: cilium
  slug: cilium
- name: devops
  slug: devops
- name: infrastructure
  slug: infrastructure
- name: bare-metal
  slug: bare-metal
- name: production-deployment
  slug: production-deployment
- name: disaster-recovery
  slug: disaster-recovery
- name: security
  slug: security
- name: observability
  slug: observability
- name: service-mesh
  slug: service-mesh
sections:
- id: section-01
  title: 'パート 1: オンプレミスのプラットフォームとインフラストラクチャの設計'
  description: Tổng quan kiến trúc microservices on-prem, so sánh on-prem vs cloud, lập kế hoạch phần cứng, mạng và OS preparation cho cluster sản xuất.
  sort_order: 1
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000101
    title: 'レッスン 1: マイクロサービスのオンプレミス アーキテクチャの概要'
    slug: bai-1-tong-quan-kien-truc-microservices-on-premises
    description: オンプレミス、クラウド、ハイブリッド、マイクロサービス運用システムのコア コンポーネント (K8s、DB HA、ストレージ、メッセージング、可観測性、セキュリティ)、ラーニング パス、ラボ環境のセットアップを比較します。
    duration_minutes: 90
    is_free: true
    sort_order: 1
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000102
    title: 'レッスン 2: ハードウェアとネットワーク トポロジの計画'
    slug: bai-2-lap-ke-hoach-phan-cung-va-network-topology
    description: 'コントロール プレーン、ワーカー ノード、ストレージ ノードの CPU/RAM/ディスクを計算します。ネットワーク トポロジの設計: 管理ネットワーク、クラスター ネットワーク、ストレージ ネットワーク、外部ネットワーク。実稼働用の VLAN、ボンディング、MTU サイジング。'
    duration_minutes: 120
    is_free: true
    sort_order: 2
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000103
    title: 'レッスン 3: Linux OS とシステムチューニングの準備'
    slug: bai-3-chuan-bi-linux-os-va-system-tuning
    description: Ubuntu 24.04/RHEL 9 をインストールし、K8 のカーネル パラメータ (net.bridge、ip_forward、inotify) を構成し、スワップをオフにし、chrony/NTP、ファイアウォール ルール、SSH 強化を構成し、K8 をインストールする前にすべてのノードを準備します。
    duration_minutes: 120
    is_free: true
    sort_order: 3
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000104
    title: 'レッスン 4: Kubernetes API サーバーのロード バランサー (キープアライブ + HAProxy)'
    slug: bai-4-load-balancer-cho-kubernetes-api-server
    description: keepalived + HAProxy をインストールして構成し、Kubernetes API サーバーの仮想 IP (VIP) を作成します。ヘルスチェック、自動フェイルオーバーを構成し、kube-vip と比較し、tcpdump/curl で HA をテストします。
    duration_minutes: 150
    is_free: true
    sort_order: 4
    video_url: null
- id: section-02
  title: 'パート 2: kubeadm を使用した Kubernetes HA クラスター'
  description: Dựng Kubernetes HA cluster 3 control plane + N workers từ đầu với kubeadm, cấu hình etcd, CNI, containerd và các thành phần thiết yếu.
  sort_order: 2
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000201
    title: 'レッスン 5: すべてのノードに containerd と kubeadm をインストールする'
    slug: bai-5-cai-dat-containerd-va-kubeadm
    description: cri プラグイン、crictl、kubeadm、kubelet、kubectl の最新バージョンを含むcontainerd 2.xをインストールします。 systemd cgroup ドライバーを使用するようにcontainerdを構成し、クラスターを開始する前にサンドボックスイメージをプルしてテストします。
    duration_minutes: 100
    is_free: true
    sort_order: 5
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000202
    title: 'レッスン 6: 最初の Kubernetes HA コントロール プレーンの初期化'
    slug: bai-6-khoi-tao-kubernetes-ha-control-plane
    description: HA トポロジ用の kubeadm-config.yaml を作成し、VIP としてコントロール プレーン エンドポイントを使用して master1 で kubeadm init を実行し、証明書を処理し、kubeconfig をコピーして、最初のクラスターのステータスを確認します。
    duration_minutes: 150
    is_free: true
    sort_order: 6
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000203
    title: 'レッスン 7: コントロール プレーンとワーカー ノードの結合'
    slug: bai-7-join-them-control-plane-va-worker-nodes
    description: master2、master3 を HA コントロール プレーンに参加させ、ワーカー ノードに参加させ、etcd クラスターの健全性を確認し、各コントロール プレーンをシャットダウンして HA をチェックし、クラスターのフォールト トレランスをテストします。
    duration_minutes: 120
    is_free: true
    sort_order: 7
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000204
    title: 'レッスン 8: Cilium CNI のインストール — ネットワークとネットワーク ポリシー'
    slug: bai-8-cai-dat-cilium-cni
    description: Helm を使用して Cilium をインストールし、eBPF ベースのネットワーキング、kube プロキシの置換、ClusterMesh の準備、基本および高度なネットワーク ポリシー (Egress、Ingress、CIDR) を構成し、Hubble UI との接続を確認します。
    duration_minutes: 180
    is_free: true
    sort_order: 8
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000205
    title: 'レッスン 9: MetalLB — オンプレミスのロードバランサー'
    slug: bai-9-metallb-loadbalancer-cho-on-premises
    description: MetalLB を L2 モードと BGP モードでインストールし、IPAddressPool と L2 アドバタイズメントを構成し、Cilium LB-IPAM と統合し、LoadBalancer サービスをテストし、ARP/BGP の問題をトラブルシューティングします。
    duration_minutes: 120
    is_free: true
    sort_order: 9
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000206
    title: 'レッスン 10: etcd — 操作、バックアップ、災害復旧'
    slug: bai-10-etcd-van-hanh-backup-va-disaster-recovery
    description: etcdctl を使用して etcd クラスターの状態を監視し、保存時の etcd 暗号化を構成し、cronjob を使用して定期的にバックアップし、クラスターが破損した場合に etcd スナップショットを復元し、etcd データベースをデフラグして圧縮します。
    duration_minutes: 150
    is_free: true
    sort_order: 10
    video_url: null
- id: section-03
  title: 'パート 3: Rook-Ceph を使用した分散ストレージ'
  description: Triển khai Rook-Ceph làm distributed storage cho Kubernetes, cấu hình StorageClass, RBD, CephFS và Object Storage (S3-compatible).
  sort_order: 3
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000301
    title: 'レッスン 11: Rook-Ceph と分散ストレージ アーキテクチャの紹介'
    slug: bai-11-gioi-thieu-rook-ceph-kien-truc-distributed-storage
    description: Ceph アーキテクチャ (MON、MGR、OSD、MDS、RGW) の概要、Rook オペレーターと Ceph スタンドアロンの違い、Ceph、NFS、Longhorn をいつ使用するか、ハードウェア要件とラボの準備。
    duration_minutes: 90
    is_free: true
    sort_order: 11
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000302
    title: 'レッスン 12: Rook-Ceph クラスターのインストール'
    slug: bai-12-cai-dat-rook-ceph-cluster
    description: Rook オペレーターのデプロイ、RAW ディスクを使用した CephCluster CRD の作成、OSD プロビジョニングの監視、MON/MGR/OSD ステータスのチェック、Ceph ダッシュボードの構成、および一般的な HEALTH_WARN エラーの解決。
    duration_minutes: 180
    is_free: true
    sort_order: 12
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000303
    title: 'レッスン 13: Ceph Block Storage (RBD) とデータベース用の StorageClass'
    slug: bai-13-ceph-block-storage-rbd-va-storageclass
    description: RBD 用の CephBlockPool と StorageClass を作成し、レプリケーション係数を構成し、データベース用に Persistent Volume をプロビジョニングし、fio を使用して RBD パフォーマンスをベンチマークし、ボリューム スナップショットとクローンを構成します。
    duration_minutes: 150
    is_free: true
    sort_order: 13
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000304
    title: 'レッスン 14: CephFS — マイクロサービス用の共有ストレージ'
    slug: bai-14-cephfs-shared-storage-cho-microservices
    description: CephFS 用の CephFilesystem と StorageClass (ReadWriteMany) の作成、共有構成、メディア ストレージ、サブボリューム グループの使用、CephFS のパフォーマンス チューニング、および Prometheus を使用した Ceph クラスターの監視の使用例。
    duration_minutes: 120
    is_free: true
    sort_order: 14
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000305
    title: 'レッスン 15: RGW を使用した Ceph Object Storage (S3 互換)'
    slug: bai-15-ceph-object-storage-s3-compatible
    description: RGW で CephObjectStore をデプロイし、S3 ユーザーとバケットを作成し、AWS SDK を介してアプリケーションと統合し、ライフサイクル ポリシーを構成し、Loki/Mimir/Thanos のバックエンドとして使用し、MinIO と比較します。
    duration_minutes: 120
    is_free: true
    sort_order: 15
    video_url: null
- id: section-04
  title: 'パート 4: Patroni と PgBouncer を使用した PostgreSQL HA クラスター'
  description: Triển khai PostgreSQL High Availability với Patroni trên Kubernetes, PgBouncer connection pooling, backup tự động và monitoring.
  sort_order: 4
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000401
    title: 'レッスン 16: Patroni Operator を使用した Kubernetes 上の PostgreSQL HA'
    slug: bai-16-postgresql-ha-tren-kubernetes-voi-patroni-operator
    description: CloudNativePG と Zalando Postgres オペレーターと手動 Patroni を比較し、CloudNativePG オペレーターをデプロイし、Ceph RBD ストレージを使用して PostgreSQL クラスター 3 ノードを作成し、プライマリ/レプリカ サービスを構成して HA を検証します。
    duration_minutes: 180
    is_free: true
    sort_order: 16
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000402
    title: 'レッスン 17: 同期レプリケーションとフェイルオーバーの構成'
    slug: bai-17-cau-hinh-synchronous-replication-va-failover
    description: synchronous_commit、minSyncReplicas/maxSyncReplicas の構成、プライマリ ポッドの強制終了による自動フェイルオーバーのテスト、RPO/RTO 時間の測定、制御されたスイッチオーバーの構成、およびスプリット ブレイン防止のテスト。
    duration_minutes: 150
    is_free: true
    sort_order: 17
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000403
    title: 'レッスン 18: PgBouncer — 実稼働用の接続プーリング'
    slug: bai-18-pgbouncer-connection-pooling-cho-production
    description: PostgreSQL クラスター用に PgBouncer サイドカーまたはスタンドアロンをデプロイし、トランザクション プーリング モード、最適な pool_size、auth_type を構成し、pgbouncer サービスを介してマイクロサービスと統合し、プール メトリクスを監視し、接続ストームを処理します。
    duration_minutes: 140
    is_free: true
    sort_order: 18
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000404
    title: 'レッスン 19: pgBackRest を使用したバックアップと PITR'
    slug: bai-19-backup-pitr-voi-pgbackrest
    description: Ceph S3 (RGW) をバックアップ リポジトリとして使用して pgBackRest を構成し、完全/差分/増分バックアップ スケジュールを設定し、ポイントインタイム リカバリを実践し、DR シナリオをテストし、毎日のバックアップ検証を自動化します。
    duration_minutes: 150
    is_free: true
    sort_order: 19
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000405
    title: 'レッスン 20: Prometheus と pg_exporter を使用した PostgreSQL の監視'
    slug: bai-20-monitoring-postgresql-voi-prometheus
    description: postgres_exporter のデプロイ、カスタム クエリの構成、レプリケーション ラグ、接続プール、クエリ パフォーマンス用の Grafana ダッシュボードの作成、長時間実行クエリ、レプリケーション遅延、ディスク使用量のしきい値に対するアラートの設定。
    duration_minutes: 120
    is_free: true
    sort_order: 20
    video_url: null
- id: section-05
  title: 'パート 5: メッセージ キュー HA — RabbitMQ と Kafka'
  description: Triển khai RabbitMQ Cluster Operator và Apache Kafka (Strimzi) trên Kubernetes với High Availability, persistence và monitoring.
  sort_order: 5
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000501
    title: 'レッスン 21: Kubernetes Operator を使用した RabbitMQ HA クラスター'
    slug: bai-21-rabbitmq-ha-cluster-voi-kubernetes-operator
    description: RabbitMQ Cluster Operator をデプロイし、クォーラム キューを使用して RabbitmqCluster を作成し (クラシック ミラーリングの代わりに推奨)、Ceph RBD、TLS/SSL、vhost、ユーザーおよび権限を使用して永続ボリュームを構成し、ノードが失われたときのフェイルオーバーをテストします。
    duration_minutes: 150
    is_free: true
    sort_order: 21
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000502
    title: 'レッスン 22: Strimzi オペレーターを使用した Kafka HA (KRaft モード)'
    slug: bai-22-kafka-ha-voi-strimzi-operator
    description: Strimzi Kafka Operator をデプロイし、KRaft モードで Kafka クラスターを作成し (ZooKeeper は必要ありません)、レプリケーション ブローカー、トピック レプリケーション係数、ログ保持、Kafka UI、スキーマ レジストリを構成し、プロデューサー/コンシューマーのフェイルオーバーをテストします。
    duration_minutes: 180
    is_free: true
    sort_order: 22
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000503
    title: 'レッスン 23: Redis HA — K8 上の Sentinel と Redis クラスター'
    slug: bai-23-redis-ha-sentinel-va-redis-cluster
    description: Redis Sentinel と Redis Cluster を比較し、Bitnami Helm チャートまたは Redis Operator を使用して Redis HA をデプロイし、レプリケーション、永続性 (AOF/RDB)、Lua スクリプト、フェイルオーバー テストを構成し、Sentinel 経由で Redis に接続するマイクロサービスを構成します。
    duration_minutes: 130
    is_free: true
    sort_order: 23
    video_url: null
- id: section-06
  title: 'パート 6: Istio サービス メッシュと Ingress'
  description: Triển khai Istio service mesh, cấu hình traffic management, mTLS, Ingress với cert-manager TLS và observability tích hợp.
  sort_order: 6
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000601
    title: 'レッスン 24: K8s HA への Istio サービス メッシュのデプロイ'
    slug: bai-24-trien-khai-istio-service-mesh
    description: istioctl または Helm (運用プロファイル) を使用して Istio をインストールし、3 つのレプリカで istiod HA を構成し、Cilium CNI と統合し、名前空間ごとのサイドカー インジェクションを有効にし、Istio コンポーネントとリソース消費を分析します。
    duration_minutes: 150
    is_free: true
    sort_order: 24
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000602
    title: 'レッスン 25: mTLS、トラフィック管理、サーキット ブレーカー'
    slug: bai-25-mtls-traffic-management-va-circuit-breaker
    description: クラスター全体で Istio mTLS (STRICT モード) を有効にし、VirtualService、ロード バランシングと再試行ポリシー用の DestinationRule、外れ値検出付きサーキット ブレーカー、テスト用のトラフィック ミラーリング、重み付けルーティングによる A/B テストを構成します。
    duration_minutes: 180
    is_free: true
    sort_order: 25
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000603
    title: 'レッスン 26: NGINX Ingress + cert-manager TLS 自動化'
    slug: bai-26-nginx-ingress-cert-manager-tls
    description: MetalLB LoadBalancer を使用して ingress-nginx コントローラーをデプロイし、cert-manager をインストールし、Let's Encrypt (ACME) または内部 CA を使用して ClusterIssuer を構成し、証明書、ワイルドカード証明書、および Ingress TLS 終端を自動的に発行および更新します。
    duration_minutes: 150
    is_free: true
    sort_order: 26
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000604
    title: 'レッスン 27: Istio ゲートウェイ API とカナリア デプロイメント'
    slug: bai-27-istio-gateway-api-va-canary-deployment
    description: Istio Ingress から Kubernetes Gateway API への移行、マイクロサービス用の HTTPRoute と TCPRoute の構成、Argo Rollouts + Istio トラフィックシフトを使用した Canary 戦略の展開、エラー率メトリクスに基づく自動ロールバック。
    duration_minutes: 150
    is_free: true
    sort_order: 27
    video_url: null
- id: section-07
  title: 'パート 7: ArgoCD と Helm を使用した GitOps'
  description: Xây dựng GitOps workflow với ArgoCD HA, Helm chart packaging, secrets management và ApplicationSet cho multi-environment deployment.
  sort_order: 7
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000701
    title: 'レッスン 28: ArgoCD HA — インストールとアーキテクチャ'
    slug: bai-28-argocd-ha-cai-dat-va-kien-truc
    description: ArgoCD HA モード (3 argocd サーバー + Redis HA + リポサーバー) をデプロイし、Keycloak/Dex で SSO を構成し、RBAC プロジェクトとポリシー、ArgoCD 状態の Redis HA を構成し、Velero で ArgoCD 構成をバックアップし、Prometheus で ArgoCD を監視します。
    duration_minutes: 180
    is_free: true
    sort_order: 28
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000702
    title: 'レッスン 29: マイクロサービスのヘルム チャートの設計'
    slug: bai-29-helm-chart-design-cho-microservices
    description: 'マイクロサービス用の標準 Helm チャート (テンプレート: デプロイ、サービス、イングレス、HPA、PDB、ネットワーク ポリシー) を設計し、環境固有の value.yaml、チャートの依存関係、ライブラリ チャート、データベース移行およびロールバック戦略用の Helm フックを構成します。'
    duration_minutes: 160
    is_free: true
    sort_order: 29
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000703
    title: 'レッスン 30: ArgoCD ApplicationSet と App-of-Apps パターン'
    slug: bai-30-argocd-applicationset-va-app-of-apps
    description: インフラストラクチャ アプリを管理するための App-of-App パターンを設計し、List Generator、Git Generator、Cluster Generator を使用して ApplicationSet を構成し、複数の環境 (dev/staging/prod) にマイクロサービスをデプロイし、ポリシーを同期し、自動ロールバックします。
    duration_minutes: 150
    is_free: true
    sort_order: 30
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000704
    title: 'レッスン 31: HashiCorp Vault + ESO を使用したシークレット管理'
    slug: bai-31-secrets-management-voi-vault-va-eso
    description: K8s 上の Raft ストレージ バックエンドを使用して HashiCorp Vault HA をデプロイし、Kubernetes 認証メソッドを構成し、PostgreSQL の動的シークレットをセットアップし、外部シークレット オペレーター (ESO) を統合して、Vault シークレットを Kubernetes シークレット、Vault Agent Injector、およびローテーションに同期します。
    duration_minutes: 180
    is_free: true
    sort_order: 31
    video_url: null
- id: section-08
  title: 'パート 8: 可観測性スタック — メトリクス、ログ、トレース'
  description: Xây dựng full observability stack với kube-prometheus-stack, Loki, Tempo/Jaeger và Grafana dashboards cho toàn bộ hệ thống.
  sort_order: 8
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000801
    title: 'レッスン 32: kube-prometheus-stack — クラスターの HA メトリクス'
    slug: bai-32-kube-prometheus-stack-metrics-ha
    description: 'Prometheus HA (2 レプリカ + Thanos サイドカー)、Alertmanager HA を使用して kube-prometheus-stack をデプロイし、Ceph S3 を使用して Thanos Compact/Store への Remote_write を構成し、Prometheus Operator CRD: ServiceMonitor、PodMonitor、PrometheusRule、および Thanos Querier による長期保持を構成します。'
    duration_minutes: 180
    is_free: true
    sort_order: 32
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000802
    title: 'レッスン 33: Grafana — ダッシュボードとアラート'
    slug: bai-33-grafana-dashboards-va-alerting
    description: PostgreSQL バックエンドを使用した Grafana HA の構成、コードとしてのデータソースとダッシュボードのプロビジョニング (Grafana Operator / ConfigMaps)、K8s クラスター用のカスタム ダッシュボード、PostgreSQL、RabbitMQ、Redis、SLO/SLI ダッシュボードの構築、PagerDuty/Slack を使用した AlertManager ルーティング。
    duration_minutes: 150
    is_free: true
    sort_order: 33
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000803
    title: 'レッスン 34: Loki と Alloy を使用した集中ログ'
    slug: bai-34-centralized-logging-voi-loki-va-alloy
    description: Ceph S3 バックエンドを使用して分散モードで Grafana Loki をデプロイし、ログ コレクターとして Grafana Alloy (Promtail に代わる) をデプロイし、マルチテナンシー、高度な LogQL クエリ、ログベースのアラートを構成し、相関関係のために Loki を Grafana ダッシュボードと統合します。
    duration_minutes: 150
    is_free: true
    sort_order: 34
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000804
    title: 'レッスン 35: Tempo と OpenTelemetry を使用した分散トレーシング'
    slug: bai-35-distributed-tracing-voi-tempo-va-opentelemetry
    description: Ceph S3 バックエンドを使用して Grafana Tempo をデプロイし、Istio およびマイクロサービスからトレースを収集するように OpenTelemetry Collector (OTEL Operator) を構成し、OTEL SDK を使用して Java/Go/Node.js アプリを計測し、TraceQL クエリを実行し、Grafana でトレース ↔ ログ ↔ メトリクスの相関関係を統合します。
    duration_minutes: 150
    is_free: true
    sort_order: 35
    video_url: null
- id: section-09
  title: 'パート 9: セキュリティ — RBAC、ポリシー、ランタイム セキュリティ'
  description: 'Bảo mật toàn diện cho K8s cluster: RBAC, Kyverno policies, Falco runtime security, image scanning và network security hardening.'
  sort_order: 9
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000901
    title: 'レッスン 36: 名前空間を使用した RBAC とマルチテナント'
    slug: bai-36-rbac-va-multi-tenancy-voi-namespaces
    description: 組織 (管理者、開発者、閲覧者) の RBAC 階層を設計し、最小限の権限を持つ ServiceAccount を作成し、名前空間ごとに ResourceQuota と LimitRange を構成し、NetworkPolicy で名前空間を分離し、OIDC 認証 (Keycloak) を K8s API サーバーと統合します。
    duration_minutes: 150
    is_free: true
    sort_order: 36
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000902
    title: 'レッスン 37: Kyverno — Kubernetes のコードとしてのポリシー'
    slug: bai-37-kyverno-policy-as-code
    description: 'Kyverno アドミッション コントローラーのデプロイ、重要なポリシーの作成: リソース制限の要求、特権コンテナーの禁止、ラベルの強制、ImagePullPolicy の変更、イメージ レジストリの検証、デフォルトの NetworkPolicy の生成、シフトレフト ポリシー検証のための CI/CD パイプラインとの統合。'
    duration_minutes: 150
    is_free: true
    sort_order: 37
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000903
    title: 'レッスン 38: Falco — ランタイムセキュリティと脅威検出'
    slug: bai-38-falco-runtime-security-va-threat-detection
    description: K8s に eBPF ドライバーを備えた Falco をデプロイし、デフォルト ルール (コンテナー内のシェル、権限昇格、ファイル改ざん) を分析し、ビジネス ロジックのカスタム ルールを作成し、Slack/PagerDuty にアラートを送信するように Falco Sidekick を構成し、SIEM と統合します。
    duration_minutes: 150
    is_free: true
    sort_order: 38
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000904
    title: 'レッスン 39: Trivy と Harbor を使用したコンテナー イメージのセキュリティ'
    slug: bai-39-container-image-security-trivy-harbor
    description: Helm を使用して Harbor レジストリをオンプレミスにデプロイし、イメージを自動的にスキャンするように Trivy Operator を構成し、CVE Critical を使用して Kyverno ポリシー ブロック イメージをセットアップし、Cosign + Notation を使用してイメージ署名を設定し、セキュリティ スキャンを GitLab CI/GitHub Actions パイプラインに統合します。
    duration_minutes: 150
    is_free: true
    sort_order: 39
    video_url: null
- id: section-10
  title: 'パート 10: マイクロサービスのデプロイメントパターンと自動スケーリング'
  description: 'Các pattern triển khai microservices production-grade: HPA, VPA, KEDA, PodDisruptionBudget, Blue/Green, Canary và database migration strategies.'
  sort_order: 10
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha001001
    title: 'レッスン 40: HPA、VPA、KEDA — 戦略的自動スケーリング'
    slug: bai-40-hpa-vpa-keda-auto-scaling-chien-luoc
    description: カスタム メトリック (Prometheus アダプター)、データベース ワークロード用の VPA、RabbitMQ キューの深さ/Kafka コンシューマー ラグに応じてスケーリングする KEDA、外部メトリックに基づく水平ポッド スケーリング、およびスラッシングを回避するためのベスト プラクティスを使用して HPA を構成します。 HPAとVPAを適切に組み合わせてください。
    duration_minutes: 150
    is_free: true
    sort_order: 40
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001002
    title: 'レッスン 41: PodDisruptionBudget、アフィニティ、およびトポロジの広がり'
    slug: bai-41-pdb-affinity-va-topology-spread
    description: ノードのドレイン時の可用性を確保するための PodDisruptionBudget の設計、データベース レプリカとステートフル サービスのポッド アンチアフィニティの構成、アベイラビリティ ゾーン全体にポッドを均等に分散するための TopologySpreadConstraints、専用ノード プールとノード セレクターのテイント/トレレーションを構成します。
    duration_minutes: 120
    is_free: true
    sort_order: 41
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001003
    title: 'レッスン 42: Argo ロールアウトを使用した Blue/Green および Canary デプロイメント'
    slug: bai-42-bluegreen-canary-deployment-voi-argo-rollouts
    description: Argo Rollouts コントローラーをインストールし、Blue/Green 戦略 (activeService/previewService) を使用したロールアウト リソース、自動分析 (Prometheus メトリクス) を使用した Canary 戦略をデプロイし、Istio トラフィックの重み付け、手動ゲート、自動ロールバック トリガーと統合します。
    duration_minutes: 150
    is_free: true
    sort_order: 42
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001004
    title: 'レッスン 43: データベースの移行とゼロダウンタイムの導入'
    slug: bai-43-database-migration-va-zero-downtime-deployment
    description: ゼロダウンタイムのデータベース移行戦略 (Expand-Contract パターン)、K8s ジョブまたは Init Containers での Flyway/Liquibase の使用、下位/上位互換性のあるスキーマの変更、Blue/Green データベースのデプロイメント、データベース移行のためのロールバック シナリオと GitOps のテスト。
    duration_minutes: 130
    is_free: true
    sort_order: 43
    video_url: null
- id: section-11
  title: 'パート 11: Velero を使用した災害復旧とクラスターのバックアップ'
  description: Chiến lược DR toàn diện với Velero backup, cross-cluster restore, RPO/RTO planning và chaos testing cho production readiness.
  sort_order: 11
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha001101
    title: 'レッスン 44: Velero — Kubernetes クラスター全体のバックアップと復元'
    slug: bai-44-velero-backup-va-restore-kubernetes-cluster
    description: Ceph S3 プラグインを使用して Velero をインストールし、BackupStorageLocation と VolumeSnapshotLocation を構成し、バックアップ スケジュール (毎日完全 + 毎時増分) を設定し、クラスターを新しい環境に復元し、バックアップの完全性と自動クリーンアップ ポリシーをテストします。
    duration_minutes: 150
    is_free: true
    sort_order: 44
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001102
    title: 'レッスン 45: カオス メッシュを使用したカオス エンジニアリング'
    slug: bai-45-chaos-engineering-voi-chaos-mesh
    description: 'Chaos Mesh をデプロイし、カオス実験を実践します: PodChaos (キル/一時停止)、NetworkChaos (遅延/パケット損失/パーティション)、StressChaos (CPU/メモリ プレッシャー)、IOChaos (ディスク レイテンシー)、DatabaseChaos (PostgreSQL プライマリのキル)、影響を測定し、回復力を向上させます。'
    duration_minutes: 150
    is_free: true
    sort_order: 45
    video_url: null
- id: section-12
  title: 'パート 12: 本番運用 — アップグレード、キャパシティ、ランブック'
  description: 'Vận hành K8s cluster production: nâng cấp không downtime, capacity planning, node maintenance, tự động hóa ops với runbooks và ChatOps.'
  sort_order: 12
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha001201
    title: 'レッスン 46: ダウンタイムなしの Kubernetes クラスターのアップグレード'
    slug: bai-46-nang-cap-kubernetes-cluster-khong-downtime
    description: K8s HA クラスターのアップグレード プロセスは、kubeadm (コントロール プレーンが最初、ワーカーが 2 番目)、正しい順序でのノードのドレインと遮断の解除、互換性マトリックスのチェック (K8s + etcd +containerd)、アップグレードが失敗した場合のロールバック プラン、およびアップグレード後のクラスターのテストにより安全です。
    duration_minutes: 150
    is_free: true
    sort_order: 46
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001202
    title: 'レッスン 47: キャパシティ プランニングとノードの自動プロビジョニング'
    slug: bai-47-capacity-planning-va-node-auto-provisioning
    description: リソースのリクエスト/制限を適切に計算し、VPA の推奨事項を分析し、Grafana を使用してクラスターのリソース使用率を監視し、スケールアウト ワーカーとストレージ ノードを計画し、ベアメタル (AWS、vSphere、Proxmox) および容量予測でクラスター オートスケーラーを使用します。
    duration_minutes: 130
    is_free: true
    sort_order: 47
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001203
    title: 'レッスン 48: Botkube を使用した Runbook Automation と ChatOps'
    slug: bai-48-runbook-automation-va-chatops-voi-botkube
    description: 一般的な問題 (etcd 異常、ノード NotReady、ポッド CrashLoopBackOff、PostgreSQL フェイルオーバー) に対する標準 Runbook を作成し、ChatOps 用に Botkube をデプロイし (ログを表示し、Slack からコマンドを実行)、PagerDuty インシデント管理と統合して修復を自動化します。
    duration_minutes: 120
    is_free: true
    sort_order: 48
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001204
    title: 'レッスン 49: トラブルシューティングの詳細 — ネットワーク、ストレージ、DNS'
    slug: bai-49-troubleshooting-deep-dive
    description: '体系的なトラブルシューティング方法: Hubble (Cilium) を使用したネットワークの問題、ポッドの tcpdump、クラスターの nslookup/dig を使用した DNS トラブルシューティング、ストレージ I/O の問題 (Ceph SLOW_OPS)、メモリ プレッシャーと OOMKilled、etcd のパフォーマンス低下と証明書の有効期限の問題をデバッグします。'
    duration_minutes: 180
    is_free: true
    sort_order: 49
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001205
    title: 'レッスン 50: Capstone プロジェクト — エンドツーエンドのマイクロサービスのデプロイメント'
    slug: bai-50-capstone-project-end-to-end-microservices-deployment
    description: '一般的なプロジェクト: 構築された K8s HA クラスター上に 5 ～ 10 個のサービスで構成される実際のマイクロサービス システム (電子商取引またはフィンテック) を展開します。 CI/CD パイプライン (GitLab CI + ArgoCD)、PostgreSQL HA + PgBouncer、Kafka イベント ストリーミング、Redis キャッシュ、cert-manager を使用した HTTPS、サービス間の mTLS、完全な可観測性スタック、Vault シークレット、Kyverno ポリシーが含まれます。実稼働準備チェックリストとドキュメント。'
    duration_minutes: 300
    is_free: true
    sort_order: 50
    video_url: null
locale: ja
---
