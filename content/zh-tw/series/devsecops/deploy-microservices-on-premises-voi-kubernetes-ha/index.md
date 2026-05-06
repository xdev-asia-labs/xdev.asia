---
id: 019e1a00-aa01-7001-c001-k8sha000001
title: 使用 Kubernetes HA 在本地部署微服務
slug: deploy-microservices-on-premises-voi-kubernetes-ha
description: 關於使用 Kubernetes HA（高可用性）、帶有 Patroni 的 PostgreSQL HA、Ceph/Rook 儲存、Istio Service Mesh、ArgoCD GitOps、Prometheus Observability Stack、HashiCorp Vault、RabbitMQ HA、Redis Cluster 和許多其他本地生產級技術部署微服務本地生產級技術部署微服務本地系統的綜合實踐課程。從基礎設施設計、叢集安裝、微服務部署到營運、災難復原和企業標準安全。 50 堂課 + 裸機/虛擬機器實作實驗室。
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
  title: 第 1 部分：本地平台和基礎設施設計
  description: Tổng quan kiến trúc microservices on-prem, so sánh on-prem vs cloud, lập kế hoạch phần cứng, mạng và OS preparation cho cluster sản xuất.
  sort_order: 1
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000101
    title: 第 1 課：微服務本地架構概述
    slug: bai-1-tong-quan-kien-truc-microservices-on-premises
    description: 比較本地、雲端與混合、微服務生產系統的核心元件（K8s、DB HA、儲存、訊息傳遞、可觀察性、安全性）、學習路徑和實驗室環境設定。
    duration_minutes: 90
    is_free: true
    sort_order: 1
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000102
    title: 第 2 課：規劃硬體與網路拓撲
    slug: bai-2-lap-ke-hoach-phan-cung-va-network-topology
    description: 計算控制平面、工作節點、儲存節點的 CPU/RAM/磁碟。網路拓撲設計：管理網路、叢集網路、儲存網路、外部網路。用於生產的 VLAN、綁定、MTU 大小調整。
    duration_minutes: 120
    is_free: true
    sort_order: 2
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000103
    title: 第 3 課：準備 Linux 作業系統和系統調優
    slug: bai-3-chuan-bi-linux-os-va-system-tuning
    description: 安裝 Ubuntu 24.04/RHEL 9，配置 K8s 的核心參數（net.bridge、ip_forward、inotify）、關閉 swap、配置 chrony/NTP、防火牆規則、SSH 強化並在安裝 K8s 之前準備所有節點。
    duration_minutes: 120
    is_free: true
    sort_order: 3
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000104
    title: 第 4 課：Kubernetes API 伺服器的負載平衡器（keepalived + HAProxy）
    slug: bai-4-load-balancer-cho-kubernetes-api-server
    description: 安裝並設定 keepalived + HAProxy 為 Kubernetes API 伺服器建立虛擬 IP (VIP)。設定健康檢查、自動故障轉移、與 kube-vip 進行比較並使用 tcpdump/curl 測試 HA。
    duration_minutes: 150
    is_free: true
    sort_order: 4
    video_url: null
- id: section-02
  title: 第 2 部分：使用 kubeadm 的 Kubernetes HA 集群
  description: Dựng Kubernetes HA cluster 3 control plane + N workers từ đầu với kubeadm, cấu hình etcd, CNI, containerd và các thành phần thiết yếu.
  sort_order: 2
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000201
    title: 第5課：在所有節點上安裝containerd和kubeadm
    slug: bai-5-cai-dat-containerd-va-kubeadm
    description: 安裝帶有 cri 插件、crictl、kubeadm、kubelet、kubectl 最新版本的 containerd 2.x。配置containerd以使用systemd cgroup驅動程序，在初始化叢集之前拉取沙箱映像並進行測試。
    duration_minutes: 100
    is_free: true
    sort_order: 5
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000202
    title: 第 6 課：初始化第一個 Kubernetes HA 控制平面
    slug: bai-6-khoi-tao-kubernetes-ha-control-plane
    description: 為 HA 拓撲建立 kubeadm-config.yaml，在 master1 上執行 kubeadm init，將控制平面端點作為 VIP，處理證書，複製 kubeconfig 並檢查第一個叢集狀態。
    duration_minutes: 150
    is_free: true
    sort_order: 6
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000203
    title: 第 7 課：連結控制平面和工作節點
    slug: bai-7-join-them-control-plane-va-worker-nodes
    description: 將master2、master3加入HA控制平面，加入工作節點，驗證etcd叢集健康狀況，透過關閉每個控制平面來檢查HA並測試叢集的容錯能力。
    duration_minutes: 120
    is_free: true
    sort_order: 7
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000204
    title: 第 8 課：安裝 Cilium CNI — 網路與網路策略
    slug: bai-8-cai-dat-cilium-cni
    description: 使用 Helm 安裝 Cilium，設定基於 eBPF 的網路、kube-proxy 替換、ClusterMesh 準備、基本和進階 NetworkPolicy（Egress、Ingress、CIDR），檢查與 Hubble UI 的連線。
    duration_minutes: 180
    is_free: true
    sort_order: 8
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000205
    title: 第 9 課：MetalLB — 適用於本地的負載平衡器
    slug: bai-9-metallb-loadbalancer-cho-on-premises
    description: 在 L2 模式和 BGP 模式下安裝 MetalLB，配置 IPAddressPool 和 L2Advertisement，與 Cilium LB-IPAM 集成，測試 LoadBalancer 服務並排除 ARP/BGP 問題。
    duration_minutes: 120
    is_free: true
    sort_order: 9
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000206
    title: 第 10 課：etcd — 作業、備份與災難復原
    slug: bai-10-etcd-van-hanh-backup-va-disaster-recovery
    description: 使用 etcdctl 監控 etcd 叢集運作狀況，配置靜態加密，使用 cronjob 定期備份，在叢集損壞時還原 etcd 快照，碎片整理和壓縮 etcd 資料庫。
    duration_minutes: 150
    is_free: true
    sort_order: 10
    video_url: null
- id: section-03
  title: 第 3 部分：使用 Rook-Ceph 進行分散式存儲
  description: Triển khai Rook-Ceph làm distributed storage cho Kubernetes, cấu hình StorageClass, RBD, CephFS và Object Storage (S3-compatible).
  sort_order: 3
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000301
    title: 第11課：介紹Rook-Ceph和分散式儲存架構
    slug: bai-11-gioi-thieu-rook-ceph-kien-truc-distributed-storage
    description: Ceph 架構概述（MON、MGR、OSD、MDS、RGW）、Rook Operator 和 Ceph Standalone 之間的差異、何時使用 Ceph、NFS 和 Longhorn、硬體需求和實驗室準備。
    duration_minutes: 90
    is_free: true
    sort_order: 11
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000302
    title: 第 12 課：安裝 Rook-Ceph 集群
    slug: bai-12-cai-dat-rook-ceph-cluster
    description: 部署 Rook Operator、使用原始磁碟建立 CephCluster CRD、監控 OSD 配置、檢查 MON/MGR/OSD 狀態、設定 Ceph 儀表板並解決常見的 HEALTH_WARN 錯誤。
    duration_minutes: 180
    is_free: true
    sort_order: 12
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000303
    title: 第 13 課：Ceph 區塊儲存 (RBD) 和資料庫的 StorageClass
    slug: bai-13-ceph-block-storage-rbd-va-storageclass
    description: 為 RBD 建立 CephBlockPool 和 StorageClass，配置複製因子，為資料庫配置 PersistentVolume，使用 fio 對 RBD 效能進行基準測試，配置磁碟區快照和複製。
    duration_minutes: 150
    is_free: true
    sort_order: 13
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000304
    title: 第 14 課：CephFS — 微服務共享存儲
    slug: bai-14-cephfs-shared-storage-cho-microservices
    description: 為 CephFS (ReadWriteMany) 建立 CephFilesystem 和 StorageClass、共享配置、媒體儲存、使用子卷組、效能調整 CephFS 和使用 Prometheus 監控 Ceph 叢集的用例。
    duration_minutes: 120
    is_free: true
    sort_order: 14
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000305
    title: 第 15 課：帶有 RGW 的 Ceph 物件儲存（S3 相容）
    slug: bai-15-ceph-object-storage-s3-compatible
    description: 使用 RGW 部署 CephObjectStore，建立 S3 使用者和儲存桶，透過 AWS SDK 與應用程式集成，配置生命週期策略，用作 Loki/Mimir/Thanos 的後端，與 MinIO 進行比較。
    duration_minutes: 120
    is_free: true
    sort_order: 15
    video_url: null
- id: section-04
  title: 第 4 部分：使用 Patroni 和 PgBouncer 的 PostgreSQL HA 集群
  description: Triển khai PostgreSQL High Availability với Patroni trên Kubernetes, PgBouncer connection pooling, backup tự động và monitoring.
  sort_order: 4
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000401
    title: 第 16 課：使用 Patroni Operator 在 Kubernetes 上實作 PostgreSQL HA
    slug: bai-16-postgresql-ha-tren-kubernetes-voi-patroni-operator
    description: 比較 CloudNativePG 與 Zalando Postgres Operator 與手動 Patroni，部署 CloudNativePG Operator，使用 Ceph RBD 儲存建立 PostgreSQL 叢集 3 個節點，配置主/副本服務並驗證 HA。
    duration_minutes: 180
    is_free: true
    sort_order: 16
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000402
    title: 第 17 課：設定同步複製和故障轉移
    slug: bai-17-cau-hinh-synchronous-replication-va-failover
    description: 配置 synchronous_commit、minSyncReplicas/maxSyncReplicas，透過終止主 Pod 來測試自動故障轉移，測量 RPO/RTO 時間，配置受控切換，並測試裂腦預防。
    duration_minutes: 150
    is_free: true
    sort_order: 17
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000403
    title: 第 18 課：PgBouncer — 用於生產的連接池
    slug: bai-18-pgbouncer-connection-pooling-cho-production
    description: 為 PostgreSQL 叢集部署 PgBouncer sidecar 或獨立部署，配置事務池模式、最佳 pool_size、auth_type，透過 pgbouncer 服務與微服務集成，監控池指標並處理連接風暴。
    duration_minutes: 140
    is_free: true
    sort_order: 18
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000404
    title: 第 19 課：使用 pgBackRest 進行備份和 PITR
    slug: bai-19-backup-pitr-voi-pgbackrest
    description: 使用 Ceph S3 (RGW) 配置 pgBackRest 作為備份儲存庫，設定完整/差異/增量備份計劃，練習時間點恢復，測試災難恢復場景並自動執行每日備份驗證。
    duration_minutes: 150
    is_free: true
    sort_order: 19
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000405
    title: 第 20 課：使用 Prometheus 和 pg_exporter 監控 PostgreSQL
    slug: bai-20-monitoring-postgresql-voi-prometheus
    description: 部署 postgres_exporter，配置自訂查詢，為複製延遲、連接池、查詢效能建立 Grafana 儀表板，為長時間運行的查詢、複製延遲和磁碟使用閾值設定警報。
    duration_minutes: 120
    is_free: true
    sort_order: 20
    video_url: null
- id: section-05
  title: 第 5 部分：訊息佇列 HA — RabbitMQ 和 Kafka
  description: Triển khai RabbitMQ Cluster Operator và Apache Kafka (Strimzi) trên Kubernetes với High Availability, persistence và monitoring.
  sort_order: 5
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000501
    title: 第 21 課：使用 Kubernetes Operator 的 RabbitMQ HA 集群
    slug: bai-21-rabbitmq-ha-cluster-voi-kubernetes-operator
    description: 部署 RabbitMQ Cluster Operator，使用仲裁佇列建立 RabbitmqCluster（建議而非經典鏡像），使用 Ceph RBD、TLS/SSL、虛擬主機、使用者和權限配置持久性磁碟區，在節點遺失時測試故障轉移。
    duration_minutes: 150
    is_free: true
    sort_order: 21
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000502
    title: 第 22 課：Kafka HA 與 Strimzi Operator（KRaft 模式）
    slug: bai-22-kafka-ha-voi-strimzi-operator
    description: 部署 Strimzi Kafka Operator，以 KRaft 模式建立 Kafka 叢集（不需要 ZooKeeper），配置複製代理、主題複製因子、日誌保留、Kafka UI、模式註冊表和測試生產者/消費者故障轉移。
    duration_minutes: 180
    is_free: true
    sort_order: 22
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000503
    title: 第 23 課：Redis HA — K8s 上的 Sentinel 和 Redis 集群
    slug: bai-23-redis-ha-sentinel-va-redis-cluster
    description: 比較 Redis Sentinel 與 Redis Cluster，使用 Bitnami Helm Chart 或 Redis Operator 部署 Redis HA，配置複製、持久性 (AOF/RDB)、Lua 腳本、故障轉移測試以及配置透過 Sentinel 連接 Redis 的微服務。
    duration_minutes: 130
    is_free: true
    sort_order: 23
    video_url: null
- id: section-06
  title: 第 6 部分：Istio 服務網格和 Ingress
  description: Triển khai Istio service mesh, cấu hình traffic management, mTLS, Ingress với cert-manager TLS và observability tích hợp.
  sort_order: 6
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000601
    title: 第 24 課：在 K8s HA 上部署 Istio 服務網格
    slug: bai-24-trien-khai-istio-service-mesh
    description: 使用 istioctl 或 Helm（生產配置文件）安裝 Istio，配置具有 3 個副本的 istiod HA，與 Cilium CNI 集成，啟用每個命名空間的 sidecar 注入，分析 Istio 組件和資源消耗。
    duration_minutes: 150
    is_free: true
    sort_order: 24
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000602
    title: 第 25 課：mTLS、流量管理和斷路器
    slug: bai-25-mtls-traffic-management-va-circuit-breaker
    description: 為整個叢集啟用 Istio mTLS（STRICT 模式），配置 VirtualService、用於負載平衡和重試策略的 DestinationRule、具有異常值檢測的斷路器、用於測試的流量鏡像以及具有加權路由的 A/B 測試。
    duration_minutes: 180
    is_free: true
    sort_order: 25
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000603
    title: 第 26 課：NGINX Ingress + cert-manager TLS 自動化
    slug: bai-26-nginx-ingress-cert-manager-tls
    description: 使用 MetalLB LoadBalancer 部署 ingress-nginx 控制器，安裝 cert-manager，使用 Let's Encrypt (ACME) 或內部 CA 設定 ClusterIssuer，自動頒發和續約憑證、通配符憑證和 Ingress TLS 終止。
    duration_minutes: 150
    is_free: true
    sort_order: 26
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000604
    title: 第 27 課：Istio Gateway API 和 Canary 部署
    slug: bai-27-istio-gateway-api-va-canary-deployment
    description: 從 Istio Ingress 遷移到 Kubernetes Gateway API，為微服務設定 HTTPRoute、TCPRoute，使用 Argo Rollouts + Istio 流量轉移部署金絲雀策略，基於錯誤率指標自動回滾。
    duration_minutes: 150
    is_free: true
    sort_order: 27
    video_url: null
- id: section-07
  title: 第 7 部分：使用 ArgoCD 和 Helm 進行 GitOps
  description: Xây dựng GitOps workflow với ArgoCD HA, Helm chart packaging, secrets management và ApplicationSet cho multi-environment deployment.
  sort_order: 7
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000701
    title: 第 28 課：ArgoCD HA — 安裝與架構
    slug: bai-28-argocd-ha-cai-dat-va-kien-truc
    description: 部署 ArgoCD HA 模式（3 argocd-server + Redis HA + repo-server），使用 Keycloak/Dex 配置 SSO、RBAC 項目和策略、ArgoCD 狀態的 Redis HA、使用 Velero 備份 ArgoCD 配置並使用 Prometheus 監控 ArgoCD。
    duration_minutes: 180
    is_free: true
    sort_order: 28
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000702
    title: 第 29 課：微服務的 Helm 圖表設計
    slug: bai-29-helm-chart-design-cho-microservices
    description: 為微服務設計標準 Helm 圖表（範本：部署、服務、Ingress、HPA、PDB、NetworkPolicy），配置特定於環境的 value.yaml、圖表依賴項、庫圖表、用於資料庫遷移和回滾策略的 Helm 掛鉤。
    duration_minutes: 160
    is_free: true
    sort_order: 29
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000703
    title: 第 30 課：ArgoCD ApplicationSet 和 App-of-Apps 模式
    slug: bai-30-argocd-applicationset-va-app-of-apps
    description: 設計用於管理基礎架構應用程式的 App-of-Apps 模式，使用清單產生器、Git 產生器和叢集產生器設定 ApplicationSet，在多個環境（開發/登台/生產）上部署微服務、同步策略和自動回滾。
    duration_minutes: 150
    is_free: true
    sort_order: 30
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000704
    title: 第 31 課：使用 HashiCorp Vault + ESO 進行秘密管理
    slug: bai-31-secrets-management-voi-vault-va-eso
    description: 在 K8s 上部署帶有 Raft 儲存後端的 HashiCorp Vault HA，配置 Kubernetes 驗證方法，為 PostgreSQL 設定動態 Secret，整合外部 Secrets Operator (ESO) 以將 Vault 機密同步到 Kubernetes Secret、Vault 代理注入器和輪調。
    duration_minutes: 180
    is_free: true
    sort_order: 31
    video_url: null
- id: section-08
  title: 第 8 部分：可觀測性堆疊 — 指標、日誌、追蹤
  description: Xây dựng full observability stack với kube-prometheus-stack, Loki, Tempo/Jaeger và Grafana dashboards cho toàn bộ hệ thống.
  sort_order: 8
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000801
    title: 第 32 課：kube-prometheus-stack — 集群的 HA 指標
    slug: bai-32-kube-prometheus-stack-metrics-ha
    description: 使用 Prometheus HA（2 個副本 + Thanos sidecar）、Alertmanager HA 部署 kube-prometheus-stack，使用 Ceph S3 將 Remote_write 配置為 Thanos Compact/Store、Prometheus Operator CRD：ServiceMonitor、PodMonitor、PrometheusRule 以及使用 Thanosule 進行長期保留。
    duration_minutes: 180
    is_free: true
    sort_order: 32
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000802
    title: 第 33 課：Grafana — 儀表板與警報
    slug: bai-33-grafana-dashboards-va-alerting
    description: 使用 PostgreSQL 後端設定 Grafana HA，將資料來源和儀表板配置為程式碼（Grafana Operator / ConfigMaps），K8s 叢集、PostgreSQL、RabbitMQ、Redis 的自訂儀表板，使用 PagerDuty/Slack 建置 SLO/SLI 儀表板和 AlertManager 路由。
    duration_minutes: 150
    is_free: true
    sort_order: 33
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000803
    title: 第 34 課：使用 Loki 和 Alloy 進行集中日誌記錄
    slug: bai-34-centralized-logging-voi-loki-va-alloy
    description: 使用 Ceph S3 後端以分散式模式部署 Grafana Loki，部署 Grafana Alloy（取代 Promtail）作為日誌收集器，配置多租戶、進階 LogQL 查詢、基於日誌的警報，並將 Loki 與 Grafana 儀表板整合以進行關聯。
    duration_minutes: 150
    is_free: true
    sort_order: 34
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000804
    title: 第 35 課：使用 Tempo 和 OpenTelemetry 進行分散式追蹤
    slug: bai-35-distributed-tracing-voi-tempo-va-opentelemetry
    description: 使用 Ceph S3 後端部署 Grafana Tempo，配置 OpenTelemetry Collector（OTEL Operator）以從 Istio 和微服務收集跟踪，使用 OTEL SDK 檢測 Java/Go/Node.js 應用程式、TraceQL 查詢，在 Grafana 中整合 Traces ↔ Logs ↔ Metrics 關聯。
    duration_minutes: 150
    is_free: true
    sort_order: 35
    video_url: null
- id: section-09
  title: 第 9 部分：安全性 — RBAC、策略、運行時安全性
  description: 'Bảo mật toàn diện cho K8s cluster: RBAC, Kyverno policies, Falco runtime security, image scanning và network security hardening.'
  sort_order: 9
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000901
    title: 第 36 課：RBAC 和有命名空間的多租戶
    slug: bai-36-rbac-va-multi-tenancy-voi-namespaces
    description: 為組織（管理員、開發人員、檢視者）設計 RBAC 層次結構，建立具有最小權限的 ServiceAccount，為每個命名空間配置 ResourceQuota 和 LimitRange，使用 NetworkPolicy 進行命名空間隔離，將 OIDC 驗證（Keycloak）與 K8s API 伺服器整合。
    duration_minutes: 150
    is_free: true
    sort_order: 36
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000902
    title: 第 37 課：Kyverno — Kubernetes 的策略即程式碼
    slug: bai-37-kyverno-policy-as-code
    description: 部署 Kyverno 准入控制器，編寫重要策略：要求資源限制、禁止特權容器、強制標籤、改變 ImagePullPolicy、驗證映像註冊表、產生預設 NetworkPolicy、與 CI/CD 管道整合以進行左移策略驗證。
    duration_minutes: 150
    is_free: true
    sort_order: 37
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000903
    title: 第 38 課：Falco — 運行時安全與威脅偵測
    slug: bai-38-falco-runtime-security-va-threat-detection
    description: 在 K8s 上部署帶有 eBPF 驅動程式的 Falco，分析預設規則（容器中的 shell、權限提升、檔案篡改），為業務邏輯編寫自訂規則，配置 Falco Sidekick 以向 Slack/PagerDuty 發送警報，與 SIEM 整合。
    duration_minutes: 150
    is_free: true
    sort_order: 38
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000904
    title: 第 39 課：使用 Trivy 和 Harbor 實現容器鏡像安全
    slug: bai-39-container-image-security-trivy-harbor
    description: 使用 Helm 在本地部署 Harbor 註冊表，配置 Trivy Operator 自動掃描映像，使用 CVE Critical 設定 Kyverno 策略區塊影像，使用 Cosign + Notation 進行映像簽名，將安全掃描整合到 GitLab CI/GitHub Actions 管道中。
    duration_minutes: 150
    is_free: true
    sort_order: 39
    video_url: null
- id: section-10
  title: 第 10 部分：微服務部署模式與自動擴展
  description: 'Các pattern triển khai microservices production-grade: HPA, VPA, KEDA, PodDisruptionBudget, Blue/Green, Canary và database migration strategies.'
  sort_order: 10
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha001001
    title: 第 40 課：HPA、VPA 和 KEDA — 策略自動擴展
    slug: bai-40-hpa-vpa-keda-auto-scaling-chien-luoc
    description: 使用自訂指標（Prometheus 適配器）配置 HPA、用於資料庫工作負載的 VPA、根據 RabbitMQ 隊列深度/Kafka 消費者延遲進行擴展的 KEDA、基於外部指標的水平 Pod 擴展和避免抖動的最佳實踐。正確組合 HPA + VPA。
    duration_minutes: 150
    is_free: true
    sort_order: 40
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001002
    title: 第 41 課：PodDisruptionBudget、親和力與拓樸傳播
    slug: bai-41-pdb-affinity-va-topology-spread
    description: 設計 PodDisruptionBudget 以確保耗盡節點時的可用性，為資料庫副本和有狀態服務配置 Pod Anti-Affinity，為跨可用區均勻分佈 Pod 的 TopologySpreadConstraints，為專用節點池和節點選擇器配置 Taints/Tolerations。
    duration_minutes: 120
    is_free: true
    sort_order: 41
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001003
    title: 第 42 課：Argo 推出的藍/綠和金絲雀部署
    slug: bai-42-bluegreen-canary-deployment-voi-argo-rollouts
    description: 安裝 Argo Rollouts 控制器，部署帶有藍色/綠色策略（activeService/previewService）的 Rollout 資源，具有自動分析（Prometheus 指標）的金絲雀策略，與 Istio 流量加權、手動門控和自動回滾觸發器整合。
    duration_minutes: 150
    is_free: true
    sort_order: 42
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001004
    title: 第 43 課：資料庫遷移和零停機部署
    slug: bai-43-database-migration-va-zero-downtime-deployment
    description: 零停機資料庫遷移策略（擴展合約模式），在 K8s 作業或 Init 容器中使用 Flyway/Liquibase、向後/向前相容架構變更、藍色/綠色資料庫部署、測試回溯場景和用於資料庫遷移的 GitOps。
    duration_minutes: 130
    is_free: true
    sort_order: 43
    video_url: null
- id: section-11
  title: 第 11 部分：使用 Velero 進行災難復原和叢集備份
  description: Chiến lược DR toàn diện với Velero backup, cross-cluster restore, RPO/RTO planning và chaos testing cho production readiness.
  sort_order: 11
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha001101
    title: 第 44 課：Velero — 備份和還原整個 Kubernetes 集群
    slug: bai-44-velero-backup-va-restore-kubernetes-cluster
    description: 使用 Ceph S3 外掛程式安裝 Velero，設定 BackupStorageLocation 和 VolumeSnapshotLocation，設定備份計畫（每日完整 + 每小時增量），將叢集還原到新環境，測試備份完整性和自動清除原則。
    duration_minutes: 150
    is_free: true
    sort_order: 44
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001102
    title: 第 45 課：使用混沌網格進行混沌工程
    slug: bai-45-chaos-engineering-voi-chaos-mesh
    description: 部署 Chaos Mesh，練習混沌實驗：PodChaos（終止/暫停）、NetworkChaos（延遲/丟包/分區）、StressChaos（CPU/記憶體壓力）、IOChaos（磁碟延遲）、DatabaseChaos（終止 PostgreSQL 主資料庫），衡量影響力並提高彈性。
    duration_minutes: 150
    is_free: true
    sort_order: 45
    video_url: null
- id: section-12
  title: 第 12 部分：生產營運 — 升級、產能與操作手冊
  description: 'Vận hành K8s cluster production: nâng cấp không downtime, capacity planning, node maintenance, tự động hóa ops với runbooks và ChatOps.'
  sort_order: 12
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha001201
    title: 第 46 課：在不停機的情況下升級 Kubernetes 集群
    slug: bai-46-nang-cap-kubernetes-cluster-khong-downtime
    description: K8s HA 叢集升級過程是安全的，包括 kubeadm（控制平面第一，工作人員第二）、按正確順序排出和取消封鎖節點、相容性矩陣檢查（K8s + etcd + containerd）、升級失敗時的回滾計劃以及升級後測試叢集。
    duration_minutes: 150
    is_free: true
    sort_order: 46
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001202
    title: 第 47 課：容量規劃和節點自動配置
    slug: bai-47-capacity-planning-va-node-auto-provisioning
    description: 正確運算資源請求/限制、分析 VPA 建議、使用 Grafana 監控叢集資源利用率、規劃橫向擴展工作執行緒和儲存節點、將 Cluster Autoscaler 與裸機（AWS、vSphere、Proxmox）和容量預測結合使用。
    duration_minutes: 130
    is_free: true
    sort_order: 47
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001203
    title: 第 48 課：使用 Botkube 實現 Runbook 自動化和 ChatOps
    slug: bai-48-runbook-automation-va-chatops-voi-botkube
    description: 針對常見問題（etcd 不健康、節點 NotReady、pod CrashLoopBackOff、PostgreSQL 故障轉移）編寫標準 Runbook，為 ChatOps 部署 Botkube（查看日誌、從 Slack 執行命令），與 PagerDuty 事件管理整合並自動修復。
    duration_minutes: 120
    is_free: true
    sort_order: 48
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001204
    title: 第 49 課：深度故障排除 — 網路、儲存、DNS
    slug: bai-49-troubleshooting-deep-dive
    description: 系統故障排除方法：使用 Hubble (Cilium) 偵錯網路問題、pod 中的 tcpdump、使用叢集中的 nslookup/dig 進行 DNS 故障排除、儲存 I/O 問題 (Ceph SLOW_OPS)、記憶體壓力和 OOMKilled、etcd 效能下降和憑證過期問題。
    duration_minutes: 180
    is_free: true
    sort_order: 49
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001205
    title: 第 50 課：Capstone 專案 — 端​​對端微服務部署
    slug: bai-50-capstone-project-end-to-end-microservices-deployment
    description: 一般專案：在已建置的K8s HA叢集上部署一個真正的由5-10個服務組成的微服務系統（電子商務或金融科技）。包括 CI/CD 管道 (GitLab CI + ArgoCD)、PostgreSQL HA + PgBouncer、Kafka 事件流、Redis 快取、帶有憑證管理器的 HTTPS、服務之間的 mTLS、完整的可觀察性堆疊、Vault 機密和 Kyverno 策略。生產準備清單和文件。
    duration_minutes: 300
    is_free: true
    sort_order: 50
    video_url: null
locale: zh-tw
---
