---
id: 019e1a00-aa01-7001-c001-k8sha000001
title: Deploy Microservices On-Premises with Kubernetes HA
slug: deploy-microservices-on-premises-voi-kubernetes-ha
description: Comprehensive practical course on deploying Microservices on-premises systems using Kubernetes HA (High Availability), PostgreSQL HA with Patroni, Ceph/Rook storage, Istio Service Mesh, ArgoCD GitOps, Prometheus Observability Stack, HashiCorp Vault, RabbitMQ HA, Redis Cluster and many other production-grade technologies. From infrastructure design, cluster installation, microservices deployment to operations, DR and enterprise standard security. 50 lessons + practice labs on bare-metal/VM.
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
  title: 'Part 1: On-Premises Platform & Infrastructure Design'
  description: Tổng quan kiến trúc microservices on-prem, so sánh on-prem vs cloud, lập kế hoạch phần cứng, mạng và OS preparation cho cluster sản xuất.
  sort_order: 1
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000101
    title: 'Lesson 1: Overview of Microservices On-Premises architecture'
    slug: bai-1-tong-quan-kien-truc-microservices-on-premises
    description: Compare on-premises vs cloud vs hybrid, core components of a microservices production system (K8s, DB HA, Storage, Messaging, Observability, Security), learning path and lab environment setup.
    duration_minutes: 90
    is_free: true
    sort_order: 1
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000102
    title: 'Lesson 2: Planning hardware and Network Topology'
    slug: bai-2-lap-ke-hoach-phan-cung-va-network-topology
    description: 'Calculate CPU/RAM/Disk for control plane, worker nodes, storage nodes. Network topology design: management network, cluster network, storage network, external network. VLAN, bonding, MTU sizing for production.'
    duration_minutes: 120
    is_free: true
    sort_order: 2
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000103
    title: 'Lesson 3: Prepare Linux OS and System Tuning'
    slug: bai-3-chuan-bi-linux-os-va-system-tuning
    description: Install Ubuntu 24.04/RHEL 9, configure kernel parameters for K8s (net.bridge, ip_forward, inotify), turn off swap, configure chrony/NTP, firewall rules, SSH hardening and prepare all nodes before installing K8s.
    duration_minutes: 120
    is_free: true
    sort_order: 3
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000104
    title: 'Lesson 4: Load Balancer for Kubernetes API Server (keepalived + HAProxy)'
    slug: bai-4-load-balancer-cho-kubernetes-api-server
    description: Install and configure keepalived + HAProxy to create Virtual IP (VIP) for Kubernetes API server. Configure health checks, automatic failover, compare with kube-vip and test HA with tcpdump/curl.
    duration_minutes: 150
    is_free: true
    sort_order: 4
    video_url: null
- id: section-02
  title: 'Part 2: Kubernetes HA Cluster with kubeadm'
  description: Dựng Kubernetes HA cluster 3 control plane + N workers từ đầu với kubeadm, cấu hình etcd, CNI, containerd và các thành phần thiết yếu.
  sort_order: 2
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000201
    title: 'Lesson 5: Install containerd and kubeadm on all nodes'
    slug: bai-5-cai-dat-containerd-va-kubeadm
    description: Install containerd 2.x with cri plugin, crictl, kubeadm, kubelet, kubectl latest versions. Configure containerd to use the systemd cgroup driver, pull the sandbox image and test before initing the cluster.
    duration_minutes: 100
    is_free: true
    sort_order: 5
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000202
    title: 'Lesson 6: Initializing the first Kubernetes HA Control Plane'
    slug: bai-6-khoi-tao-kubernetes-ha-control-plane
    description: Create kubeadm-config.yaml for HA topology, run kubeadm init on master1 with control-plane-endpoint as VIP, process certificates, copy kubeconfig and check first cluster status.
    duration_minutes: 150
    is_free: true
    sort_order: 6
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000203
    title: 'Lesson 7: Join Control Plane and Worker Nodes'
    slug: bai-7-join-them-control-plane-va-worker-nodes
    description: Join master2, master3 to HA control plane, join worker nodes, verify etcd cluster health, check HA by shutting down each control plane and test the cluster's fault tolerance.
    duration_minutes: 120
    is_free: true
    sort_order: 7
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000204
    title: 'Lesson 8: Installing Cilium CNI — Networking & Network Policy'
    slug: bai-8-cai-dat-cilium-cni
    description: Install Cilium with Helm, configure eBPF-based networking, kube-proxy replacement, ClusterMesh readiness, basic and advanced NetworkPolicy (Egress, Ingress, CIDR), check connectivity with Hubble UI.
    duration_minutes: 180
    is_free: true
    sort_order: 8
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000205
    title: 'Lesson 9: MetalLB — LoadBalancer for On-Premises'
    slug: bai-9-metallb-loadbalancer-cho-on-premises
    description: Install MetalLB in L2 mode and BGP mode, configure IPAddressPool and L2Advertisement, integrate with Cilium LB-IPAM, testing LoadBalancer services and troubleshooting ARP/BGP issues.
    duration_minutes: 120
    is_free: true
    sort_order: 9
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000206
    title: 'Lesson 10: etcd — Operation, Backup and Disaster Recovery'
    slug: bai-10-etcd-van-hanh-backup-va-disaster-recovery
    description: Monitor etcd cluster health with etcdctl, configure etcd encryption at rest, periodically backup with cronjob, restore etcd snapshot when cluster is broken, defrag and compact etcd database.
    duration_minutes: 150
    is_free: true
    sort_order: 10
    video_url: null
- id: section-03
  title: 'Part 3: Distributed Storage with Rook-Ceph'
  description: Triển khai Rook-Ceph làm distributed storage cho Kubernetes, cấu hình StorageClass, RBD, CephFS và Object Storage (S3-compatible).
  sort_order: 3
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000301
    title: 'Lesson 11: Introducing Rook-Ceph and distributed storage architecture'
    slug: bai-11-gioi-thieu-rook-ceph-kien-truc-distributed-storage
    description: Overview of Ceph architecture (MON, MGR, OSD, MDS, RGW), differences between Rook operator and Ceph standalone, when to use Ceph vs NFS vs Longhorn, hardware requirements and lab preparation.
    duration_minutes: 90
    is_free: true
    sort_order: 11
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000302
    title: 'Lesson 12: Installing Rook-Ceph Cluster'
    slug: bai-12-cai-dat-rook-ceph-cluster
    description: Deploy Rook operator, create CephCluster CRD with raw disks, monitor OSD provisioning, check MON/MGR/OSD status, configure Ceph Dashboard and resolve common HEALTH_WARN errors.
    duration_minutes: 180
    is_free: true
    sort_order: 12
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000303
    title: 'Lesson 13: Ceph Block Storage (RBD) and StorageClass for Databases'
    slug: bai-13-ceph-block-storage-rbd-va-storageclass
    description: Create CephBlockPool and StorageClass for RBD, configure replication factor, provisioning PersistentVolume for databases, benchmark RBD performance with fio, configure volume snapshots and clones.
    duration_minutes: 150
    is_free: true
    sort_order: 13
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000304
    title: 'Lesson 14: CephFS — Shared Storage for Microservices'
    slug: bai-14-cephfs-shared-storage-cho-microservices
    description: Create CephFilesystem and StorageClass for CephFS (ReadWriteMany), use cases for shared configuration, media storage, using SubvolumeGroups, performance tuning CephFS and monitoring Ceph cluster with Prometheus.
    duration_minutes: 120
    is_free: true
    sort_order: 14
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000305
    title: 'Lesson 15: Ceph Object Storage (S3-compatible) with RGW'
    slug: bai-15-ceph-object-storage-s3-compatible
    description: Deploy CephObjectStore with RGW, create S3 users and buckets, integrate with application via AWS SDK, configure lifecycle policies, use as backend for Loki/Mimir/Thanos, compare with MinIO.
    duration_minutes: 120
    is_free: true
    sort_order: 15
    video_url: null
- id: section-04
  title: 'Part 4: PostgreSQL HA Cluster with Patroni & PgBouncer'
  description: Triển khai PostgreSQL High Availability với Patroni trên Kubernetes, PgBouncer connection pooling, backup tự động và monitoring.
  sort_order: 4
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000401
    title: 'Lesson 16: PostgreSQL HA on Kubernetes with Patroni Operator'
    slug: bai-16-postgresql-ha-tren-kubernetes-voi-patroni-operator
    description: Compare CloudNativePG vs Zalando Postgres Operator vs manual Patroni, deploy CloudNativePG operator, create PostgreSQL cluster 3 nodes using Ceph RBD storage, configure primary/replica services and verify HA.
    duration_minutes: 180
    is_free: true
    sort_order: 16
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000402
    title: 'Lesson 17: Configuring Synchronous Replication and Failover'
    slug: bai-17-cau-hinh-synchronous-replication-va-failover
    description: Configure synchronous_commit, minSyncReplicas/maxSyncReplicas, test for automatic failover by killing primary pods, measure RPO/RTO times, configure controlled switchover, and test split-brain prevention.
    duration_minutes: 150
    is_free: true
    sort_order: 17
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000403
    title: 'Lesson 18: PgBouncer — Connection Pooling for Production'
    slug: bai-18-pgbouncer-connection-pooling-cho-production
    description: Deploy PgBouncer sidecar or standalone for PostgreSQL cluster, configure transaction pooling mode, optimal pool_size, auth_type, integrate with microservices via pgbouncer service, monitor pool metrics and handle connection storms.
    duration_minutes: 140
    is_free: true
    sort_order: 18
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000404
    title: 'Lesson 19: Backup & PITR with pgBackRest'
    slug: bai-19-backup-pitr-voi-pgbackrest
    description: Configure pgBackRest with Ceph S3 (RGW) as backup repository, set up full/differential/incremental backup schedule, practice Point-In-Time Recovery, test DR scenarios and automate daily backup verification.
    duration_minutes: 150
    is_free: true
    sort_order: 19
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000405
    title: 'Lesson 20: Monitoring PostgreSQL with Prometheus & pg_exporter'
    slug: bai-20-monitoring-postgresql-voi-prometheus
    description: Deploy postgres_exporter, configure custom queries, create Grafana dashboards for replication lag, connection pool, query performance, set up alerts for long-running queries, replication delay and disk usage thresholds.
    duration_minutes: 120
    is_free: true
    sort_order: 20
    video_url: null
- id: section-05
  title: 'Part 5: Message Queue HA — RabbitMQ & Kafka'
  description: Triển khai RabbitMQ Cluster Operator và Apache Kafka (Strimzi) trên Kubernetes với High Availability, persistence và monitoring.
  sort_order: 5
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000501
    title: 'Lesson 21: RabbitMQ HA Cluster with Kubernetes Operator'
    slug: bai-21-rabbitmq-ha-cluster-voi-kubernetes-operator
    description: Deploy RabbitMQ Cluster Operator, create RabbitmqCluster with quorum queues (recommended instead of classic mirroring), configure persistent volumes with Ceph RBD, TLS/SSL, vhost, users and permissions, test failover when node is lost.
    duration_minutes: 150
    is_free: true
    sort_order: 21
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000502
    title: 'Lesson 22: Kafka HA with Strimzi Operator (KRaft mode)'
    slug: bai-22-kafka-ha-voi-strimzi-operator
    description: Deploy Strimzi Kafka Operator, create Kafka cluster in KRaft mode (no need for ZooKeeper), configure replication broker, topic replication factor, log retention, Kafka UI, Schema Registry and test producer/consumer failover.
    duration_minutes: 180
    is_free: true
    sort_order: 22
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000503
    title: 'Lesson 23: Redis HA — Sentinel and Redis Cluster on K8s'
    slug: bai-23-redis-ha-sentinel-va-redis-cluster
    description: Compare Redis Sentinel vs Redis Cluster, deploy Redis HA with Bitnami Helm chart or Redis Operator, configure replication, persistence (AOF/RDB), Lua scripts, failover testing and configure microservices connecting Redis via sentinel.
    duration_minutes: 130
    is_free: true
    sort_order: 23
    video_url: null
- id: section-06
  title: 'Part 6: Istio Service Mesh & Ingress'
  description: Triển khai Istio service mesh, cấu hình traffic management, mTLS, Ingress với cert-manager TLS và observability tích hợp.
  sort_order: 6
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000601
    title: 'Lesson 24: Deploying Istio Service Mesh on K8s HA'
    slug: bai-24-trien-khai-istio-service-mesh
    description: Install Istio with istioctl or Helm (production profile), configure istiod HA with 3 replicas, integrate with Cilium CNI, enable sidecar injection per namespace, analyze Istio components and resources consumption.
    duration_minutes: 150
    is_free: true
    sort_order: 24
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000602
    title: 'Lesson 25: mTLS, Traffic Management and Circuit Breaker'
    slug: bai-25-mtls-traffic-management-va-circuit-breaker
    description: Enable Istio mTLS (STRICT mode) for the entire cluster, configure VirtualService, DestinationRule for load balancing and retry policies, Circuit Breaker with Outlier Detection, Traffic Mirroring for testing and A/B testing with weighted routing.
    duration_minutes: 180
    is_free: true
    sort_order: 25
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000603
    title: 'Lesson 26: NGINX Ingress + cert-manager TLS Automation'
    slug: bai-26-nginx-ingress-cert-manager-tls
    description: Deploy ingress-nginx controller with MetalLB LoadBalancer, install cert-manager, configure ClusterIssuer with Let's Encrypt (ACME) or internal CA, automatically issue and renew certificates, wildcard certificates and Ingress TLS termination.
    duration_minutes: 150
    is_free: true
    sort_order: 26
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000604
    title: 'Lesson 27: Istio Gateway API and Canary Deployment'
    slug: bai-27-istio-gateway-api-va-canary-deployment
    description: Migration from Istio Ingress to Kubernetes Gateway API, configure HTTPRoute, TCPRoute for microservices, deploy Canary strategy with Argo Rollouts + Istio traffic shifting, automated rollback based on error rate metrics.
    duration_minutes: 150
    is_free: true
    sort_order: 27
    video_url: null
- id: section-07
  title: 'Part 7: GitOps with ArgoCD and Helm'
  description: Xây dựng GitOps workflow với ArgoCD HA, Helm chart packaging, secrets management và ApplicationSet cho multi-environment deployment.
  sort_order: 7
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000701
    title: 'Lesson 28: ArgoCD HA — Installation and Architecture'
    slug: bai-28-argocd-ha-cai-dat-va-kien-truc
    description: Deploy ArgoCD HA mode (3 argocd-server + Redis HA + repo-server), configure SSO with Keycloak/Dex, RBAC projects and policies, Redis HA for ArgoCD state, backup ArgoCD config with Velero and monitor ArgoCD with Prometheus.
    duration_minutes: 180
    is_free: true
    sort_order: 28
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000702
    title: 'Lesson 29: Helm Chart Design for Microservices'
    slug: bai-29-helm-chart-design-cho-microservices
    description: 'Design standard Helm charts for microservices (templates: Deployment, Service, Ingress, HPA, PDB, NetworkPolicy), configure environment-specific values.yaml, Chart dependencies, Library charts, Helm hooks for database migrations and rollback strategies.'
    duration_minutes: 160
    is_free: true
    sort_order: 29
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000703
    title: 'Lesson 30: ArgoCD ApplicationSet and App-of-Apps Pattern'
    slug: bai-30-argocd-applicationset-va-app-of-apps
    description: Design App-of-Apps pattern for managing infrastructure apps, configure ApplicationSet with List Generator, Git Generator and Cluster Generator, deploy microservices on multiple environments (dev/staging/ prod), sync policies and automated rollback.
    duration_minutes: 150
    is_free: true
    sort_order: 30
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000704
    title: 'Lesson 31: Secrets Management with HashiCorp Vault + ESO'
    slug: bai-31-secrets-management-voi-vault-va-eso
    description: Deploy HashiCorp Vault HA with Raft storage backend on K8s, configure Kubernetes Auth Method, set up Dynamic Secrets for PostgreSQL, integrate External Secrets Operator (ESO) to sync Vault secrets to Kubernetes Secrets, Vault Agent Injector and rotation.
    duration_minutes: 180
    is_free: true
    sort_order: 31
    video_url: null
- id: section-08
  title: 'Part 8: Observability Stack — Metrics, Logs, Traces'
  description: Xây dựng full observability stack với kube-prometheus-stack, Loki, Tempo/Jaeger và Grafana dashboards cho toàn bộ hệ thống.
  sort_order: 8
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000801
    title: 'Lesson 32: kube-prometheus-stack — HA Metrics for Cluster'
    slug: bai-32-kube-prometheus-stack-metrics-ha
    description: 'Deploy kube-prometheus-stack with Prometheus HA (2 replicas + Thanos sidecar), Alertmanager HA, configure remote_write to Thanos Compact/Store using Ceph S3, Prometheus Operator CRDs: ServiceMonitor, PodMonitor, PrometheusRule and long-term retention with Thanos Querier.'
    duration_minutes: 180
    is_free: true
    sort_order: 32
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000802
    title: 'Lesson 33: Grafana — Dashboards and Alerting'
    slug: bai-33-grafana-dashboards-va-alerting
    description: Configuring Grafana HA with PostgreSQL backend, provisioning datasources and dashboards as code (Grafana Operator / ConfigMaps), custom dashboards for K8s cluster, PostgreSQL, RabbitMQ, Redis, building SLO/SLI dashboards and AlertManager routing with PagerDuty/Slack.
    duration_minutes: 150
    is_free: true
    sort_order: 33
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000803
    title: 'Lesson 34: Centralized Logging with Loki and Alloy'
    slug: bai-34-centralized-logging-voi-loki-va-alloy
    description: Deploy Grafana Loki in distributed mode with Ceph S3 backend, deploy Grafana Alloy (replaces Promtail) as log collector, configure multi-tenancy, advanced LogQL queries, log-based alerts and integrate Loki with Grafana dashboards for correlation.
    duration_minutes: 150
    is_free: true
    sort_order: 34
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000804
    title: 'Lesson 35: Distributed Tracing with Tempo and OpenTelemetry'
    slug: bai-35-distributed-tracing-voi-tempo-va-opentelemetry
    description: Deploy Grafana Tempo with Ceph S3 backend, configure OpenTelemetry Collector (OTEL Operator) to collect traces from Istio and microservices, instrument Java/Go/Node.js apps with OTEL SDK, TraceQL queries, integrate Traces ↔ Logs ↔ Metrics correlation in Grafana.
    duration_minutes: 150
    is_free: true
    sort_order: 35
    video_url: null
- id: section-09
  title: 'Part 9: Security — RBAC, Policy, Runtime Security'
  description: 'Bảo mật toàn diện cho K8s cluster: RBAC, Kyverno policies, Falco runtime security, image scanning và network security hardening.'
  sort_order: 9
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha000901
    title: 'Lesson 36: RBAC and Multi-Tenancy with Namespaces'
    slug: bai-36-rbac-va-multi-tenancy-voi-namespaces
    description: Design RBAC hierarchy for the organization (admin, developer, viewer), create ServiceAccount with minimal permissions, configure ResourceQuota and LimitRange per namespace, Namespace isolation with NetworkPolicy, integrate OIDC authentication (Keycloak) with K8s API server.
    duration_minutes: 150
    is_free: true
    sort_order: 36
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000902
    title: 'Lesson 37: Kyverno — Policy as Code for Kubernetes'
    slug: bai-37-kyverno-policy-as-code
    description: 'Deploy Kyverno admission controller, write important policies: require resource limits, disallow privileged containers, enforce labels, mutate ImagePullPolicy, validate image registry, generate default NetworkPolicy, integrate with CI/CD pipeline for shift-left policy validation.'
    duration_minutes: 150
    is_free: true
    sort_order: 37
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000903
    title: 'Lesson 38: Falco — Runtime Security and Threat Detection'
    slug: bai-38-falco-runtime-security-va-threat-detection
    description: Deploy Falco with eBPF driver on K8s, analyze default rules (shell in container, privilege escalation, file tampering), write custom rules for business logic, configure Falco Sidekick to send alerts to Slack/PagerDuty, integrate with SIEM.
    duration_minutes: 150
    is_free: true
    sort_order: 38
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha000904
    title: 'Lesson 39: Container Image Security with Trivy and Harbor'
    slug: bai-39-container-image-security-trivy-harbor
    description: Deploy Harbor registry on-premises with Helm, configure Trivy Operator to scan images automatically, set up Kyverno policy block images with CVE Critical, image signing with Cosign + Notation, integrate security scanning into GitLab CI/GitHub Actions pipeline.
    duration_minutes: 150
    is_free: true
    sort_order: 39
    video_url: null
- id: section-10
  title: 'Part 10: Microservices Deployment Patterns & Auto-Scaling'
  description: 'Các pattern triển khai microservices production-grade: HPA, VPA, KEDA, PodDisruptionBudget, Blue/Green, Canary và database migration strategies.'
  sort_order: 10
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha001001
    title: 'Lesson 40: HPA, VPA and KEDA — Strategic Auto-Scaling'
    slug: bai-40-hpa-vpa-keda-auto-scaling-chien-luoc
    description: Configure HPA with custom metrics (Prometheus Adapter), VPA for database workloads, KEDA to scale according to RabbitMQ queue depth/Kafka consumer lag, horizontal pod scaling based on external metrics and best practices to avoid thrashing. Combine HPA + VPA properly.
    duration_minutes: 150
    is_free: true
    sort_order: 40
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001002
    title: 'Lesson 41: PodDisruptionBudget, Affinity and Topology Spread'
    slug: bai-41-pdb-affinity-va-topology-spread
    description: Design PodDisruptionBudget to ensure availability when draining nodes, configure Pod Anti-Affinity for database replicas and stateful services, TopologySpreadConstraints to distribute pods evenly across availability zones, Taints/Tolerations for dedicated node pools and Node Selectors.
    duration_minutes: 120
    is_free: true
    sort_order: 41
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001003
    title: 'Lesson 42: Blue/Green and Canary Deployment with Argo Rollouts'
    slug: bai-42-bluegreen-canary-deployment-voi-argo-rollouts
    description: Install Argo Rollouts controller, deploy Rollout resource with Blue/Green strategy (activeService/previewService), Canary strategy with automated analysis (Prometheus metrics), integrated with Istio traffic weighting, manual gating and automated rollback triggers.
    duration_minutes: 150
    is_free: true
    sort_order: 42
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001004
    title: 'Lesson 43: Database Migration and Zero-Downtime Deployment'
    slug: bai-43-database-migration-va-zero-downtime-deployment
    description: Zero-downtime database migrations strategy (Expand-Contract pattern), using Flyway/Liquibase in K8s Jobs or Init Containers, backward/forward compatible schema changes, blue/green database deployment, testing rollback scenarios and GitOps for database migrations.
    duration_minutes: 130
    is_free: true
    sort_order: 43
    video_url: null
- id: section-11
  title: 'Part 11: Disaster Recovery & Cluster Backup with Velero'
  description: Chiến lược DR toàn diện với Velero backup, cross-cluster restore, RPO/RTO planning và chaos testing cho production readiness.
  sort_order: 11
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha001101
    title: 'Lesson 44: Velero — Backup and Restore the entire Kubernetes Cluster'
    slug: bai-44-velero-backup-va-restore-kubernetes-cluster
    description: Install Velero with Ceph S3 plugin, configure BackupStorageLocation and VolumeSnapshotLocation, set backup schedules (full daily + hourly incremental), restore cluster to new environment, test backup completeness and auto-cleanup policies.
    duration_minutes: 150
    is_free: true
    sort_order: 44
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001102
    title: 'Lesson 45: Chaos Engineering with Chaos Mesh'
    slug: bai-45-chaos-engineering-voi-chaos-mesh
    description: 'Deploy Chaos Mesh, practice chaos experiments: PodChaos (kill/pause), NetworkChaos (delay/packet loss/partition), StressChaos (CPU/memory pressure), IOChaos (disk latency), DatabaseChaos (kill PostgreSQL primary), measure impact and improve resilience.'
    duration_minutes: 150
    is_free: true
    sort_order: 45
    video_url: null
- id: section-12
  title: 'Part 12: Production Operations — Upgrades, Capacity & Runbooks'
  description: 'Vận hành K8s cluster production: nâng cấp không downtime, capacity planning, node maintenance, tự động hóa ops với runbooks và ChatOps.'
  sort_order: 12
  lessons:
  - id: 019e1a00-aa01-7001-c001-k8sha001201
    title: 'Lesson 46: Upgrading Kubernetes Cluster without Downtime'
    slug: bai-46-nang-cap-kubernetes-cluster-khong-downtime
    description: K8s HA cluster upgrade process is safe with kubeadm (control plane first, workers second), drain and uncordon nodes in the correct order, compatibility matrix check (K8s + etcd + containerd), rollback plan when upgrade fails and testing cluster after upgrade.
    duration_minutes: 150
    is_free: true
    sort_order: 46
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001202
    title: 'Lesson 47: Capacity Planning and Node Auto-provisioning'
    slug: bai-47-capacity-planning-va-node-auto-provisioning
    description: Calculate resource requests/limits properly, analyze VPA recommendations, monitor cluster resource utilization with Grafana, plan for scale-out workers and storage nodes, use Cluster Autoscaler with bare-metal (AWS, vSphere, Proxmox) and capacity forecasting.
    duration_minutes: 130
    is_free: true
    sort_order: 47
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001203
    title: 'Lesson 48: Runbook Automation and ChatOps with Botkube'
    slug: bai-48-runbook-automation-va-chatops-voi-botkube
    description: Write standard Runbooks for common problems (etcd unhealthy, node NotReady, pod CrashLoopBackOff, PostgreSQL failover), deploy Botkube for ChatOps (view logs, execute commands from Slack), integrate with PagerDuty incident management and automate remediation.
    duration_minutes: 120
    is_free: true
    sort_order: 48
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001204
    title: 'Lesson 49: Troubleshooting Deep Dive — Network, Storage, DNS'
    slug: bai-49-troubleshooting-deep-dive
    description: 'Systematic troubleshooting methodology: debug network issues with Hubble (Cilium), tcpdump in pods, DNS troubleshooting with nslookup/dig in cluster, storage I/O issues (Ceph SLOW_OPS), memory pressure and OOMKilled, etcd performance degradation and certificate expiry issues.'
    duration_minutes: 180
    is_free: true
    sort_order: 49
    video_url: null
  - id: 019e1a00-aa01-7001-c001-k8sha001205
    title: 'Lesson 50: Capstone Project — End-to-End Microservices Deployment'
    slug: bai-50-capstone-project-end-to-end-microservices-deployment
    description: 'General project: deploying a real microservices system (e-commerce or fintech) consisting of 5-10 services on the built K8s HA cluster. Includes CI/CD pipeline (GitLab CI + ArgoCD), PostgreSQL HA + PgBouncer, Kafka event streaming, Redis caching, HTTPS with cert-manager, mTLS between services, full observability stack, Vault secrets and Kyverno policies. Production readiness checklist and documentation.'
    duration_minutes: 300
    is_free: true
    sort_order: 50
    video_url: null
locale: en
---
