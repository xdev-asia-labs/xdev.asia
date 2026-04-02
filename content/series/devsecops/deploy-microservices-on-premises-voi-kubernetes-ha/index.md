---
id: 019e1a00-aa01-7001-c001-k8sha000001
title: 'Deploy Microservices On-Premises với Kubernetes HA'
slug: deploy-microservices-on-premises-voi-kubernetes-ha
description: >-
  Khóa học thực chiến toàn diện về triển khai hệ thống Microservices
  on-premises sử dụng Kubernetes HA (High Availability), PostgreSQL HA với
  Patroni, Ceph/Rook storage, Istio Service Mesh, ArgoCD GitOps, Prometheus
  Observability Stack, HashiCorp Vault, RabbitMQ HA, Redis Cluster và nhiều
  công nghệ production-grade khác. Từ thiết kế hạ tầng, cài đặt cluster, triển
  khai microservices đến vận hành, DR và bảo mật chuẩn doanh nghiệp. 50 bài học
  + labs thực hành trên bare-metal/VM.
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
  # =====================================
  # PHẦN 1: NỀN TẢNG VÀ THIẾT KẾ HẠ TẦNG
  # =====================================
  - id: section-01
    title: 'Phần 1: Nền tảng & Thiết kế Hạ tầng On-Premises'
    description: >-
      Tổng quan kiến trúc microservices on-prem, so sánh on-prem vs cloud,
      lập kế hoạch phần cứng, mạng và OS preparation cho cluster sản xuất.
    sort_order: 1
    lessons:
      - id: 019e1a00-aa01-7001-c001-k8sha000101
        title: 'Bài 1: Tổng quan kiến trúc Microservices On-Premises'
        slug: bai-1-tong-quan-kien-truc-microservices-on-premises
        description: >-
          So sánh on-premises vs cloud vs hybrid, các thành phần cốt lõi của
          một hệ thống microservices production (K8s, DB HA, Storage, Messaging,
          Observability, Security), lộ trình học tập và lab environment setup.
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000102
        title: 'Bài 2: Lập kế hoạch phần cứng và Network Topology'
        slug: bai-2-lap-ke-hoach-phan-cung-va-network-topology
        description: >-
          Tính toán CPU/RAM/Disk cho control plane, worker nodes, storage nodes.
          Thiết kế network topology: management network, cluster network, storage
          network, external network. VLAN, bonding, MTU sizing cho production.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000103
        title: 'Bài 3: Chuẩn bị Linux OS và System Tuning'
        slug: bai-3-chuan-bi-linux-os-va-system-tuning
        description: >-
          Cài đặt Ubuntu 24.04/RHEL 9, cấu hình kernel parameters cho K8s
          (net.bridge, ip_forward, inotify), tắt swap, cấu hình chrony/NTP,
          firewall rules, SSH hardening và chuẩn bị tất cả nodes trước khi
          cài K8s.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000104
        title: 'Bài 4: Load Balancer cho Kubernetes API Server (keepalived + HAProxy)'
        slug: bai-4-load-balancer-cho-kubernetes-api-server
        description: >-
          Cài đặt và cấu hình keepalived + HAProxy để tạo Virtual IP (VIP) cho
          Kubernetes API server. Cấu hình health checks, failover tự động, so
          sánh với kube-vip và testing HA với tcpdump/curl.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null

  # =====================================
  # PHẦN 2: KUBERNETES HA CLUSTER
  # =====================================
  - id: section-02
    title: 'Phần 2: Kubernetes HA Cluster với kubeadm'
    description: >-
      Dựng Kubernetes HA cluster 3 control plane + N workers từ đầu với
      kubeadm, cấu hình etcd, CNI, containerd và các thành phần thiết yếu.
    sort_order: 2
    lessons:
      - id: 019e1a00-aa01-7001-c001-k8sha000201
        title: 'Bài 5: Cài đặt containerd và kubeadm trên tất cả nodes'
        slug: bai-5-cai-dat-containerd-va-kubeadm
        description: >-
          Cài đặt containerd 2.x với cri plugin, crictl, kubeadm, kubelet,
          kubectl phiên bản mới nhất. Cấu hình containerd để dùng systemd
          cgroup driver, kéo sandbox image và kiểm tra trước khi init cluster.
        duration_minutes: 100
        is_free: true
        sort_order: 5
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000202
        title: 'Bài 6: Khởi tạo Kubernetes HA Control Plane đầu tiên'
        slug: bai-6-khoi-tao-kubernetes-ha-control-plane
        description: >-
          Tạo kubeadm-config.yaml cho HA topology, chạy kubeadm init trên
          master1 với control-plane-endpoint là VIP, xử lý certificates,
          copy kubeconfig và kiểm tra trạng thái cluster đầu tiên.
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000203
        title: 'Bài 7: Join thêm Control Plane và Worker Nodes'
        slug: bai-7-join-them-control-plane-va-worker-nodes
        description: >-
          Join master2, master3 vào control plane HA, join worker nodes,
          verify etcd cluster health, kiểm tra HA bằng cách tắt từng
          control plane và test khả năng chịu lỗi của cluster.
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000204
        title: 'Bài 8: Cài đặt Cilium CNI — Networking & Network Policy'
        slug: bai-8-cai-dat-cilium-cni
        description: >-
          Cài đặt Cilium với Helm, cấu hình eBPF-based networking, kube-proxy
          replacement, ClusterMesh readiness, NetworkPolicy cơ bản và nâng cao
          (Egress, Ingress, CIDR), kiểm tra connectivity với Hubble UI.
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000205
        title: 'Bài 9: MetalLB — LoadBalancer cho On-Premises'
        slug: bai-9-metallb-loadbalancer-cho-on-premises
        description: >-
          Cài đặt MetalLB trong L2 mode và BGP mode, cấu hình IPAddressPool
          và L2Advertisement, tích hợp với Cilium LB-IPAM, testing LoadBalancer
          services và troubleshooting ARP/BGP issues.
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000206
        title: 'Bài 10: etcd — Vận hành, Backup và Disaster Recovery'
        slug: bai-10-etcd-van-hanh-backup-va-disaster-recovery
        description: >-
          Giám sát sức khỏe etcd cluster với etcdctl, cấu hình etcd encryption
          at rest, backup định kỳ với cronjob, restore etcd snapshot khi cluster
          bị hỏng, defrag và compaction etcd database.
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null

  # =====================================
  # PHẦN 3: DISTRIBUTED STORAGE VỚI ROOK-CEPH
  # =====================================
  - id: section-03
    title: 'Phần 3: Distributed Storage với Rook-Ceph'
    description: >-
      Triển khai Rook-Ceph làm distributed storage cho Kubernetes, cấu hình
      StorageClass, RBD, CephFS và Object Storage (S3-compatible).
    sort_order: 3
    lessons:
      - id: 019e1a00-aa01-7001-c001-k8sha000301
        title: 'Bài 11: Giới thiệu Rook-Ceph và kiến trúc distributed storage'
        slug: bai-11-gioi-thieu-rook-ceph-kien-truc-distributed-storage
        description: >-
          Tổng quan Ceph architecture (MON, MGR, OSD, MDS, RGW), sự khác biệt
          giữa Rook operator và Ceph standalone, khi nào dùng Ceph vs NFS vs
          Longhorn, yêu cầu phần cứng và lab preparation.
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000302
        title: 'Bài 12: Cài đặt Rook-Ceph Cluster'
        slug: bai-12-cai-dat-rook-ceph-cluster
        description: >-
          Deploy Rook operator, tạo CephCluster CRD với raw disks, theo dõi
          OSD provisioning, kiểm tra trạng thái MON/MGR/OSD, cấu hình Ceph
          Dashboard và giải quyết các lỗi HEALTH_WARN thường gặp.
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000303
        title: 'Bài 13: Ceph Block Storage (RBD) và StorageClass cho Databases'
        slug: bai-13-ceph-block-storage-rbd-va-storageclass
        description: >-
          Tạo CephBlockPool và StorageClass cho RBD, cấu hình replication factor,
          provisioning PersistentVolume cho databases, benchmark RBD performance
          với fio, cấu hình volume snapshots và clone.
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000304
        title: 'Bài 14: CephFS — Shared Storage cho Microservices'
        slug: bai-14-cephfs-shared-storage-cho-microservices
        description: >-
          Tạo CephFilesystem và StorageClass cho CephFS (ReadWriteMany),
          use cases cho shared configuration, media storage, sử dụng SubvolumeGroups,
          performance tuning CephFS và monitoring Ceph cluster với Prometheus.
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000305
        title: 'Bài 15: Ceph Object Storage (S3-compatible) với RGW'
        slug: bai-15-ceph-object-storage-s3-compatible
        description: >-
          Triển khai CephObjectStore với RGW, tạo S3 users và buckets, tích hợp
          với ứng dụng qua AWS SDK, cấu hình lifecycle policies, dùng làm
          backend cho Loki/Mimir/Thanos, so sánh với MinIO.
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null

  # =====================================
  # PHẦN 4: POSTGRESQL HA VỚI PATRONI
  # =====================================
  - id: section-04
    title: 'Phần 4: PostgreSQL HA Cluster với Patroni & PgBouncer'
    description: >-
      Triển khai PostgreSQL High Availability với Patroni trên Kubernetes,
      PgBouncer connection pooling, backup tự động và monitoring.
    sort_order: 4
    lessons:
      - id: 019e1a00-aa01-7001-c001-k8sha000401
        title: 'Bài 16: PostgreSQL HA trên Kubernetes với Patroni Operator'
        slug: bai-16-postgresql-ha-tren-kubernetes-voi-patroni-operator
        description: >-
          So sánh CloudNativePG vs Zalando Postgres Operator vs manual Patroni,
          triển khai CloudNativePG operator, tạo PostgreSQL cluster 3 nodes
          dùng Ceph RBD storage, cấu hình primary/replica services và verify HA.
        duration_minutes: 180
        is_free: true
        sort_order: 16
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000402
        title: 'Bài 17: Cấu hình Synchronous Replication và Failover'
        slug: bai-17-cau-hinh-synchronous-replication-va-failover
        description: >-
          Cấu hình synchronous_commit, minSyncReplicas/maxSyncReplicas, kiểm
          tra failover tự động bằng cách kill primary pod, đo thời gian RPO/RTO,
          cấu hình switchover có kiểm soát và testing split-brain prevention.
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000403
        title: 'Bài 18: PgBouncer — Connection Pooling cho Production'
        slug: bai-18-pgbouncer-connection-pooling-cho-production
        description: >-
          Triển khai PgBouncer sidecar hoặc standalone cho PostgreSQL cluster,
          cấu hình transaction pooling mode, pool_size tối ưu, auth_type,
          tích hợp với microservices qua pgbouncer service, monitoring pool
          metrics và xử lý connection storms.
        duration_minutes: 140
        is_free: true
        sort_order: 18
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000404
        title: 'Bài 19: Backup & PITR với pgBackRest'
        slug: bai-19-backup-pitr-voi-pgbackrest
        description: >-
          Cấu hình pgBackRest với Ceph S3 (RGW) làm backup repository, thiết
          lập full/differential/incremental backup schedule, Point-In-Time
          Recovery thực hành, testing DR scenario và tự động hóa backup
          verification hàng ngày.
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000405
        title: 'Bài 20: Monitoring PostgreSQL với Prometheus & pg_exporter'
        slug: bai-20-monitoring-postgresql-voi-prometheus
        description: >-
          Triển khai postgres_exporter, cấu hình custom queries, tạo Grafana
          dashboards cho replication lag, connection pool, query performance,
          thiết lập alerts cho long-running queries, replication delay và
          disk usage thresholds.
        duration_minutes: 120
        is_free: true
        sort_order: 20
        video_url: null

  # =====================================
  # PHẦN 5: MESSAGE QUEUE HA
  # =====================================
  - id: section-05
    title: 'Phần 5: Message Queue HA — RabbitMQ & Kafka'
    description: >-
      Triển khai RabbitMQ Cluster Operator và Apache Kafka (Strimzi) trên
      Kubernetes với High Availability, persistence và monitoring.
    sort_order: 5
    lessons:
      - id: 019e1a00-aa01-7001-c001-k8sha000501
        title: 'Bài 21: RabbitMQ HA Cluster với Kubernetes Operator'
        slug: bai-21-rabbitmq-ha-cluster-voi-kubernetes-operator
        description: >-
          Deploy RabbitMQ Cluster Operator, tạo RabbitmqCluster với quorum queues
          (recommended thay classic mirroring), cấu hình persistent volumes với
          Ceph RBD, TLS/SSL, vhost, users và permissions, testing failover khi
          mất node.
        duration_minutes: 150
        is_free: true
        sort_order: 21
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000502
        title: 'Bài 22: Kafka HA với Strimzi Operator (KRaft mode)'
        slug: bai-22-kafka-ha-voi-strimzi-operator
        description: >-
          Deploy Strimzi Kafka Operator, tạo Kafka cluster trong KRaft mode
          (không cần ZooKeeper), cấu hình broker replication, topic replication
          factor, log retention, Kafka UI, Schema Registry và testing producer/
          consumer failover.
        duration_minutes: 180
        is_free: true
        sort_order: 22
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000503
        title: 'Bài 23: Redis HA — Sentinel và Redis Cluster trên K8s'
        slug: bai-23-redis-ha-sentinel-va-redis-cluster
        description: >-
          So sánh Redis Sentinel vs Redis Cluster, triển khai Redis HA với
          Bitnami Helm chart hoặc Redis Operator, cấu hình replication,
          persistence (AOF/RDB), Lua scripts, testing failover và cấu hình
          microservices kết nối Redis qua sentinel.
        duration_minutes: 130
        is_free: true
        sort_order: 23
        video_url: null

  # =====================================
  # PHẦN 6: SERVICE MESH VÀ NETWORKING
  # =====================================
  - id: section-06
    title: 'Phần 6: Istio Service Mesh & Ingress'
    description: >-
      Triển khai Istio service mesh, cấu hình traffic management, mTLS, Ingress
      với cert-manager TLS và observability tích hợp.
    sort_order: 6
    lessons:
      - id: 019e1a00-aa01-7001-c001-k8sha000601
        title: 'Bài 24: Triển khai Istio Service Mesh trên K8s HA'
        slug: bai-24-trien-khai-istio-service-mesh
        description: >-
          Cài đặt Istio với istioctl hoặc Helm (production profile), cấu hình
          istiod HA với 3 replicas, tích hợp với Cilium CNI, enable sidecar
          injection per namespace, phân tích Istio components và resources
          consumption.
        duration_minutes: 150
        is_free: true
        sort_order: 24
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000602
        title: 'Bài 25: mTLS, Traffic Management và Circuit Breaker'
        slug: bai-25-mtls-traffic-management-va-circuit-breaker
        description: >-
          Enable Istio mTLS (STRICT mode) cho toàn cluster, cấu hình
          VirtualService, DestinationRule cho load balancing và retry policies,
          Circuit Breaker với Outlier Detection, Traffic Mirroring cho testing
          và A/B testing với weighted routing.
        duration_minutes: 180
        is_free: true
        sort_order: 25
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000603
        title: 'Bài 26: NGINX Ingress + cert-manager TLS Automation'
        slug: bai-26-nginx-ingress-cert-manager-tls
        description: >-
          Triển khai ingress-nginx controller với MetalLB LoadBalancer, cài
          cert-manager, cấu hình ClusterIssuer với Let's Encrypt (ACME) hoặc
          internal CA, tự động cấp và gia hạn certificate, wildcard certificates
          và Ingress TLS termination.
        duration_minutes: 150
        is_free: true
        sort_order: 26
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000604
        title: 'Bài 27: Istio Gateway API và Canary Deployment'
        slug: bai-27-istio-gateway-api-va-canary-deployment
        description: >-
          Migration từ Istio Ingress sang Kubernetes Gateway API, cấu hình
          HTTPRoute, TCPRoute cho microservices, triển khai Canary strategy
          với Argo Rollouts + Istio traffic shifting, automated rollback
          dựa trên error rate metrics.
        duration_minutes: 150
        is_free: true
        sort_order: 27
        video_url: null

  # =====================================
  # PHẦN 7: GITOPS VÀ CI/CD
  # =====================================
  - id: section-07
    title: 'Phần 7: GitOps với ArgoCD và Helm'
    description: >-
      Xây dựng GitOps workflow với ArgoCD HA, Helm chart packaging, secrets
      management và ApplicationSet cho multi-environment deployment.
    sort_order: 7
    lessons:
      - id: 019e1a00-aa01-7001-c001-k8sha000701
        title: 'Bài 28: ArgoCD HA — Cài đặt và Kiến trúc'
        slug: bai-28-argocd-ha-cai-dat-va-kien-truc
        description: >-
          Triển khai ArgoCD HA mode (3 argocd-server + Redis HA + repo-server),
          cấu hình SSO với Keycloak/Dex, RBAC projects và policies, Redis HA
          cho ArgoCD state, backup ArgoCD config với Velero và monitoring
          ArgoCD với Prometheus.
        duration_minutes: 180
        is_free: true
        sort_order: 28
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000702
        title: 'Bài 29: Helm Chart Design cho Microservices'
        slug: bai-29-helm-chart-design-cho-microservices
        description: >-
          Thiết kế Helm chart chuẩn cho microservice (templates: Deployment,
          Service, Ingress, HPA, PDB, NetworkPolicy), cấu hình values.yaml
          environment-specific, Chart dependencies, Library charts, Helm hooks
          cho database migrations và rollback strategies.
        duration_minutes: 160
        is_free: true
        sort_order: 29
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000703
        title: 'Bài 30: ArgoCD ApplicationSet và App-of-Apps Pattern'
        slug: bai-30-argocd-applicationset-va-app-of-apps
        description: >-
          Thiết kế App-of-Apps pattern cho quản lý infrastructure apps, cấu
          hình ApplicationSet với List Generator, Git Generator và Cluster
          Generator, deploy microservices trên nhiều environments (dev/staging/
          prod), sync policies và automated rollback.
        duration_minutes: 150
        is_free: true
        sort_order: 30
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000704
        title: 'Bài 31: Secrets Management với HashiCorp Vault + ESO'
        slug: bai-31-secrets-management-voi-vault-va-eso
        description: >-
          Triển khai HashiCorp Vault HA với Raft storage backend trên K8s,
          cấu hình Kubernetes Auth Method, thiết lập Dynamic Secrets cho
          PostgreSQL, tích hợp External Secrets Operator (ESO) để sync Vault
          secrets thành Kubernetes Secrets, Vault Agent Injector và rotation.
        duration_minutes: 180
        is_free: true
        sort_order: 31
        video_url: null

  # =====================================
  # PHẦN 8: OBSERVABILITY STACK
  # =====================================
  - id: section-08
    title: 'Phần 8: Observability Stack — Metrics, Logs, Traces'
    description: >-
      Xây dựng full observability stack với kube-prometheus-stack, Loki,
      Tempo/Jaeger và Grafana dashboards cho toàn bộ hệ thống.
    sort_order: 8
    lessons:
      - id: 019e1a00-aa01-7001-c001-k8sha000801
        title: 'Bài 32: kube-prometheus-stack — Metrics HA cho Cluster'
        slug: bai-32-kube-prometheus-stack-metrics-ha
        description: >-
          Triển khai kube-prometheus-stack với Prometheus HA (2 replicas +
          Thanos sidecar), Alertmanager HA, cấu hình remote_write sang Thanos
          Compact/Store sử dụng Ceph S3, Prometheus Operator CRDs:
          ServiceMonitor, PodMonitor, PrometheusRule và long-term retention với
          Thanos Querier.
        duration_minutes: 180
        is_free: true
        sort_order: 32
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000802
        title: 'Bài 33: Grafana — Dashboards và Alerting'
        slug: bai-33-grafana-dashboards-va-alerting
        description: >-
          Cấu hình Grafana HA với PostgreSQL backend, provisioning datasources
          và dashboards as code (Grafana Operator / ConfigMaps), custom
          dashboards cho K8s cluster, PostgreSQL, RabbitMQ, Redis, xây dựng
          SLO/SLI dashboards và AlertManager routing với PagerDuty/Slack.
        duration_minutes: 150
        is_free: true
        sort_order: 33
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000803
        title: 'Bài 34: Centralized Logging với Loki và Alloy'
        slug: bai-34-centralized-logging-voi-loki-va-alloy
        description: >-
          Triển khai Grafana Loki trong distributed mode với Ceph S3 backend,
          deploy Grafana Alloy (thay thế Promtail) làm log collector, cấu hình
          multi-tenancy, LogQL queries nâng cao, log-based alerts và tích hợp
          Loki với Grafana dashboards cho correlation.
        duration_minutes: 150
        is_free: true
        sort_order: 34
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000804
        title: 'Bài 35: Distributed Tracing với Tempo và OpenTelemetry'
        slug: bai-35-distributed-tracing-voi-tempo-va-opentelemetry
        description: >-
          Triển khai Grafana Tempo với Ceph S3 backend, cấu hình OpenTelemetry
          Collector (OTEL Operator) để thu thập traces từ Istio và microservices,
          instrument Java/Go/Node.js apps với OTEL SDK, TraceQL queries, tích
          hợp Traces ↔ Logs ↔ Metrics correlation trong Grafana.
        duration_minutes: 150
        is_free: true
        sort_order: 35
        video_url: null

  # =====================================
  # PHẦN 9: SECURITY
  # =====================================
  - id: section-09
    title: 'Phần 9: Security — RBAC, Policy, Runtime Security'
    description: >-
      Bảo mật toàn diện cho K8s cluster: RBAC, Kyverno policies, Falco runtime
      security, image scanning và network security hardening.
    sort_order: 9
    lessons:
      - id: 019e1a00-aa01-7001-c001-k8sha000901
        title: 'Bài 36: RBAC và Multi-Tenancy với Namespaces'
        slug: bai-36-rbac-va-multi-tenancy-voi-namespaces
        description: >-
          Thiết kế RBAC hierarchy cho tổ chức (admin, developer, viewer),
          tạo ServiceAccount với minimal permissions, cấu hình ResourceQuota
          và LimitRange per namespace, Namespace isolation với NetworkPolicy,
          tích hợp OIDC authentication (Keycloak) với K8s API server.
        duration_minutes: 150
        is_free: true
        sort_order: 36
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000902
        title: 'Bài 37: Kyverno — Policy as Code cho Kubernetes'
        slug: bai-37-kyverno-policy-as-code
        description: >-
          Triển khai Kyverno admission controller, viết policies quan trọng:
          require resource limits, disallow privileged containers, enforce labels,
          mutate ImagePullPolicy, validate image registry, generate default
          NetworkPolicy, tích hợp với CI/CD pipeline để shift-left policy
          validation.
        duration_minutes: 150
        is_free: true
        sort_order: 37
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000903
        title: 'Bài 38: Falco — Runtime Security và Threat Detection'
        slug: bai-38-falco-runtime-security-va-threat-detection
        description: >-
          Triển khai Falco với eBPF driver trên K8s, phân tích default rules
          (shell trong container, privilege escalation, file tampering), viết
          custom rules cho business logic, cấu hình Falco Sidekick để gửi
          alerts tới Slack/PagerDuty, tích hợp với SIEM.
        duration_minutes: 150
        is_free: true
        sort_order: 38
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha000904
        title: 'Bài 39: Container Image Security với Trivy và Harbor'
        slug: bai-39-container-image-security-trivy-harbor
        description: >-
          Triển khai Harbor registry on-premises với Helm, cấu hình Trivy
          Operator để scan images tự động, thiết lập Kyverno policy block
          images có CVE Critical, image signing với Cosign + Notation, tích hợp
          security scanning vào GitLab CI/GitHub Actions pipeline.
        duration_minutes: 150
        is_free: true
        sort_order: 39
        video_url: null

  # =====================================
  # PHẦN 10: MICROSERVICES DEPLOYMENT PATTERNS
  # =====================================
  - id: section-10
    title: 'Phần 10: Microservices Deployment Patterns & Auto-Scaling'
    description: >-
      Các pattern triển khai microservices production-grade: HPA, VPA, KEDA,
      PodDisruptionBudget, Blue/Green, Canary và database migration strategies.
    sort_order: 10
    lessons:
      - id: 019e1a00-aa01-7001-c001-k8sha001001
        title: 'Bài 40: HPA, VPA và KEDA — Auto-Scaling chiến lược'
        slug: bai-40-hpa-vpa-keda-auto-scaling-chien-luoc
        description: >-
          Cấu hình HPA với custom metrics (Prometheus Adapter), VPA cho database
          workloads, KEDA để scale theo RabbitMQ queue depth/Kafka consumer lag,
          horizontal pod scaling dựa trên external metrics và best practices tránh
          thrashing. Kết hợp HPA + VPA đúng cách.
        duration_minutes: 150
        is_free: true
        sort_order: 40
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha001002
        title: 'Bài 41: PodDisruptionBudget, Affinity và Topology Spread'
        slug: bai-41-pdb-affinity-va-topology-spread
        description: >-
          Thiết kế PodDisruptionBudget để đảm bảo availability khi drain node,
          cấu hình Pod Anti-Affinity cho database replicas và stateful services,
          TopologySpreadConstraints để phân phối pods đều trên availability zones,
          Taints/Tolerations cho dedicated node pools và Node Selectors.
        duration_minutes: 120
        is_free: true
        sort_order: 41
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha001003
        title: 'Bài 42: Blue/Green và Canary Deployment với Argo Rollouts'
        slug: bai-42-bluegreen-canary-deployment-voi-argo-rollouts
        description: >-
          Cài đặt Argo Rollouts controller, triển khai Rollout resource với
          Blue/Green strategy (activeService/previewService), Canary strategy
          với automated analysis (Prometheus metrics), integrated với Istio
          traffic weighting, manual gating và automated rollback triggers.
        duration_minutes: 150
        is_free: true
        sort_order: 42
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha001004
        title: 'Bài 43: Database Migration và Zero-Downtime Deployment'
        slug: bai-43-database-migration-va-zero-downtime-deployment
        description: >-
          Chiến lược zero-downtime database migrations (Expand-Contract pattern),
          sử dụng Flyway/Liquibase trong K8s Jobs hoặc Init Containers, backward/
          forward compatible schema changes, blue/green database deployment, testing
          rollback scenarios và GitOps cho database migrations.
        duration_minutes: 130
        is_free: true
        sort_order: 43
        video_url: null

  # =====================================
  # PHẦN 11: DISASTER RECOVERY VÀ BACKUP
  # =====================================
  - id: section-11
    title: 'Phần 11: Disaster Recovery & Cluster Backup với Velero'
    description: >-
      Chiến lược DR toàn diện với Velero backup, cross-cluster restore,
      RPO/RTO planning và chaos testing cho production readiness.
    sort_order: 11
    lessons:
      - id: 019e1a00-aa01-7001-c001-k8sha001101
        title: 'Bài 44: Velero — Backup và Restore toàn bộ Kubernetes Cluster'
        slug: bai-44-velero-backup-va-restore-kubernetes-cluster
        description: >-
          Cài đặt Velero với Ceph S3 plugin, cấu hình BackupStorageLocation và
          VolumeSnapshotLocation, thiết lập backup schedules (full daily + hourly
          incremental), restore cluster vào môi trường mới, testing backup
          completeness và auto-cleanup policies.
        duration_minutes: 150
        is_free: true
        sort_order: 44
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha001102
        title: 'Bài 45: Chaos Engineering với Chaos Mesh'
        slug: bai-45-chaos-engineering-voi-chaos-mesh
        description: >-
          Triển khai Chaos Mesh, thực hành các chaos experiments: PodChaos
          (kill/pause), NetworkChaos (delay/packet loss/partition), StressChaos
          (CPU/memory pressure), IOChaos (disk latency), DatabaseChaos (kill
          PostgreSQL primary), đo lường impact và cải thiện resilience.
        duration_minutes: 150
        is_free: true
        sort_order: 45
        video_url: null

  # =====================================
  # PHẦN 12: QUẢN LÝ VÀ VẬN HÀNH PRODUCTION
  # =====================================
  - id: section-12
    title: 'Phần 12: Vận hành Production — Upgrades, Capacity & Runbooks'
    description: >-
      Vận hành K8s cluster production: nâng cấp không downtime, capacity
      planning, node maintenance, tự động hóa ops với runbooks và ChatOps.
    sort_order: 12
    lessons:
      - id: 019e1a00-aa01-7001-c001-k8sha001201
        title: 'Bài 46: Nâng cấp Kubernetes Cluster không Downtime'
        slug: bai-46-nang-cap-kubernetes-cluster-khong-downtime
        description: >-
          Quy trình nâng cấp K8s HA cluster an toàn với kubeadm (control plane
          trước, workers sau), drain và uncordon nodes theo đúng thứ tự, kiểm
          tra compatibility matrix (K8s + etcd + containerd), rollback plan khi
          nâng cấp thất bại và testing cluster sau upgrade.
        duration_minutes: 150
        is_free: true
        sort_order: 46
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha001202
        title: 'Bài 47: Capacity Planning và Node Auto-provisioning'
        slug: bai-47-capacity-planning-va-node-auto-provisioning
        description: >-
          Tính toán resource requests/limits đúng cách, phân tích VPA
          recommendations, monitoring cluster resource utilization với Grafana,
          lập kế hoạch scale-out workers và storage nodes, dùng Cluster Autoscaler
          với bare-metal (AWS, vSphere, Proxmox) và capacity forecasting.
        duration_minutes: 130
        is_free: true
        sort_order: 47
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha001203
        title: 'Bài 48: Runbook Automation và ChatOps với Botkube'
        slug: bai-48-runbook-automation-va-chatops-voi-botkube
        description: >-
          Viết Runbooks chuẩn cho các sự cố thường gặp (etcd unhealthy, node
          NotReady, pod CrashLoopBackOff, PostgreSQL failover), triển khai
          Botkube cho ChatOps (xem logs, exec commands từ Slack), tích hợp
          với PagerDuty incident management và tự động hóa remediation.
        duration_minutes: 120
        is_free: true
        sort_order: 48
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha001204
        title: 'Bài 49: Troubleshooting Deep Dive — Network, Storage, DNS'
        slug: bai-49-troubleshooting-deep-dive
        description: >-
          Phương pháp luận troubleshooting có hệ thống: debug network issues
          với Hubble (Cilium), tcpdump trong pods, DNS troubleshooting với
          nslookup/dig trong cluster, storage I/O issues (Ceph SLOW_OPS),
          memory pressure và OOMKilled, etcd performance degradation và
          certificate expiry issues.
        duration_minutes: 180
        is_free: true
        sort_order: 49
        video_url: null

      - id: 019e1a00-aa01-7001-c001-k8sha001205
        title: 'Bài 50: Capstone Project — End-to-End Microservices Deployment'
        slug: bai-50-capstone-project-end-to-end-microservices-deployment
        description: >-
          Dự án tổng hợp: triển khai một hệ thống microservices thực tế (e-commerce
          hoặc fintech) gồm 5-10 services lên K8s HA cluster đã dựng. Bao gồm
          CI/CD pipeline (GitLab CI + ArgoCD), PostgreSQL HA + PgBouncer, Kafka
          event streaming, Redis caching, HTTPS với cert-manager, mTLS giữa services,
          full observability stack, Vault secrets và Kyverno policies. Production
          readiness checklist và documentation.
        duration_minutes: 300
        is_free: true
        sort_order: 50
        video_url: null
