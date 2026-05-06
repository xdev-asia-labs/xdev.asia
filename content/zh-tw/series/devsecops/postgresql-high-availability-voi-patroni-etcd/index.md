---
id: 019c9617-fad7-7170-97f5-55c1940af2f5
title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
slug: postgresql-high-availability-voi-patroni-etcd
description: 了解如何使用 Patroni 和 etcd 部署 PostgreSQL 高可用性叢集。從A到Z的實作課程：安裝、設定、自動故障轉移、監控和生產作業。 29 節課程 + 詳細的實驗。
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
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  description: null
  sort_order: 0
  lessons:
  - id: 019c9617-fb5e-71a4-b3a1-a77a7c225818
    title: 第 1 課：PostgreSQL 高可用性概述
    slug: bai-1-tong-quan-ve-postgresql-high-availability
    description: 了解為什麼需要高可用性，比較流行的 HA 解決方案（Patroni、Repmgr、Pacemaker）並掌握 PostgreSQL HA 系統的整體架構。
    duration_minutes: 110
    is_free: true
    sort_order: 1
    video_url: null
  - id: 019c9617-fb63-72fe-8fb4-4839e41ca6b5
    title: 第 2 課：PostgreSQL 中的串流複製
    slug: bai-2-streaming-replication-trong-postgresql
    description: 探索流複製機制、WAL 日誌記錄、同步/非同步複製差異並練習基本的主備設定。
    duration_minutes: 190
    is_free: true
    sort_order: 2
    video_url: null
  - id: 019c9617-fb66-7039-b71b-ae1b85a72eee
    title: 第 3 課：Patroni 和 etcd 簡介
    slug: bai-3-gioi-thieu-patroni-va-etcd
    description: 了解Patroni的工作原理、DCS（etcd/Consul/ZooKeeper）的作用、Raft共識演算法和自動領導者選舉機制。
    duration_minutes: 160
    is_free: true
    sort_order: 3
    video_url: null
  - id: 019c9617-fb6a-71b8-aea5-33a8de9b9d29
    title: 第 4 課：準備基礎設施
    slug: bai-4-chuan-bi-ha-tang
    description: 有關硬體需求、網路/防火牆配置、3 個虛擬機器/伺服器的設定以及 HA 叢集時間同步的詳細說明。
    duration_minutes: 145
    is_free: true
    sort_order: 4
    video_url: null
  - id: 019c9617-fb6d-73ff-ab92-84838b979806
    title: 第 5 課：安裝 PostgreSQL
    slug: bai-5-cai-dat-postgresql
    description: 從軟體包儲存庫或來源安裝 PostgreSQL，在叢集中的所有 3 個節點上配置 postgresql.conf 和 pg_hba.conf。
    duration_minutes: 110
    is_free: true
    sort_order: 5
    video_url: null
  - id: 019c9617-fb71-7108-9898-0733dd6d13bf
    title: 第 6 課：安裝與設定 etcd 集群
    slug: bai-6-cai-dat-va-cau-hinh-etcd-cluster
    description: 下載、安裝和設定 etcd 叢集 3 節點，建立 systemd 服務並使用 etcdctl 指令檢查運作狀況。
    duration_minutes: 160
    is_free: true
    sort_order: 6
    video_url: null
  - id: 019c9617-fb74-7100-9272-7839bac3bdac
    title: 第 7 課：安裝 Patroni
    slug: bai-7-cai-dat-patroni
    description: 安裝Python依賴項，透過pip設定Patroni，分析patroni.yml結構並在3個節點上建立systemd服務。
    duration_minutes: 165
    is_free: true
    sort_order: 7
    video_url: null
  - id: 019c9617-fb77-71c7-a375-ddb3553fc7a4
    title: 第 8 課：詳細的 Patroni 配置
    slug: bai-8-cau-hinh-patroni-chi-tiet
    description: 深入分析 patoni.yml 檔案中的每個部分：叢集的引導、PostgreSQL 參數、身份驗證、標籤和約束。
    duration_minutes: 155
    is_free: true
    sort_order: 8
    video_url: null
  - id: 019c9617-fb7a-7138-be78-f6d8b1653656
    title: 第 9 課：引導 PostgreSQL 集群
    slug: bai-9-bootstrap-postgresql-cluster
    description: 首次啟動Patroni，監控自動開機進程，使用patronictl 檢查狀態並排除常見問題。
    duration_minutes: 120
    is_free: true
    sort_order: 9
    video_url: null
  - id: 019c9617-fb7c-727d-a01d-896b5d138e2f
    title: 第 10 課：複製管理
    slug: bai-10-quan-ly-replication
    description: 配置同步/非同步副本、synchronous_mode、synchronous_node_count 並監控叢集中的複製延遲。
    duration_minutes: 120
    is_free: true
    sort_order: 10
    video_url: null
  - id: 019c9617-fb80-70a6-9003-6e17ae121e1f
    title: 第 11 課：Patroni 回調
    slug: bai-11-patroni-callbacks
    description: 建立回調腳本（on_start、on_stop、on_role_change）、編寫通知自訂腳本並與監控系統整合。
    duration_minutes: 285
    is_free: true
    sort_order: 11
    video_url: null
  - id: 019c9617-fb83-7047-bb91-e761d8b60d96
    title: 第 12 課：Patroni REST API
    slug: bai-12-patroni-rest-api
    description: 使用Patroni REST API端點，掌握patronictl指令並透過CLI和API自動化叢集管理。
    duration_minutes: 265
    is_free: true
    sort_order: 12
    video_url: null
  - id: 019c9617-fb87-7086-95fc-6fd978990d86
    title: 第 13 課：自動故障轉移
    slug: bai-13-automatic-failover
    description: 學習錯誤偵測機制、領導者選舉過程、故障轉移時間軸並練習模擬主節點故障。
    duration_minutes: 160
    is_free: true
    sort_order: 13
    video_url: null
  - id: 019c9617-fb8b-7187-aede-cf5e97de1cd3
    title: 第 14 課：計畫切換
    slug: bai-14-switchover-co-ke-hoach-planned-switchover
    description: 區分計劃切換和故障切換、何時切換、零停機維護和安全切換實務。
    duration_minutes: 200
    is_free: true
    sort_order: 14
    video_url: null
  - id: 019c9617-fb8e-711e-a241-91e33cbbe469
    title: 第 15 課：恢復失敗的節點
    slug: bai-15-recovering-failed-nodes
    description: 使用 pg_rewind 機制將失敗的主節點重新加入集群，並在必要時從備份重建副本。
    duration_minutes: 210
    is_free: true
    sort_order: 15
    video_url: null
  - id: 019c9617-fb91-71b3-893f-1f4d0ad10625
    title: 第 16 課：備份和時間點復原 (PITR)
    slug: bai-16-backup-va-point-in-time-recovery-pitr
    description: 使用 pg_basebackup，配置 WAL 歸檔、連續歸檔並執行時間點恢復 (PITR)。
    duration_minutes: 205
    is_free: true
    sort_order: 16
    video_url: null
  - id: 019c9617-fb94-7137-99fe-08685ac4ab93
    title: 第 17 課：監控 Patroni 集群
    slug: bai-17-monitoring-patroni-cluster
    description: 使用 Prometheus + Grafana 設定監控堆疊，使用 postgres_exporter，配置 HA 叢集的警報規則。
    duration_minutes: 175
    is_free: true
    sort_order: 17
    video_url: null
  - id: 019c9617-fb98-7319-877d-16408c323ce3
    title: 第 18 課：性能調優
    slug: bai-18-performance-tuning
    description: 最佳化 PostgreSQL 配置，實現連線池 (PgBouncer)、負載平衡 (HAProxy) 和擴充唯讀副本。
    duration_minutes: 130
    is_free: true
    sort_order: 18
    video_url: null
  - id: 019c9617-fb9b-734d-b723-e97053646091
    title: 第 19 課：日誌記錄與故障排除
    slug: bai-19-logging-va-troubleshooting
    description: 分析 PostgreSQL 日誌、Patroni 日誌、etcd 日誌，解決常見問題和有效的偵錯技術。
    duration_minutes: 130
    is_free: true
    sort_order: 19
    video_url: null
  - id: 019c9617-fb9e-7077-950d-b4fa097ce8b1
    title: 第 20 課：安全最佳實踐
    slug: bai-20-security-best-practices
    description: 設定 SSL/TLS、驗證方法、網路安全、靜態加密、審核日誌記錄和強化叢集安全性。
    duration_minutes: 110
    is_free: true
    sort_order: 20
    video_url: null
  - id: 019c9617-fba1-7128-b313-6412f33f40cf
    title: 第 21 課：多資料中心設置
    slug: bai-21-multi-datacenter-setup
    description: 跨DC複製策略、非同步級聯複製、災難規劃復原和地理負載平衡。
    duration_minutes: 135
    is_free: true
    sort_order: 21
    video_url: null
  - id: 019c9617-fba4-73b9-bb9a-c345301dc226
    title: 第 22 課：Patroni 與 Kubernetes
    slug: bai-22-patroni-voi-kubernetes
    description: 使用 Patroni 運算子、StatefulSets、持久捲和 Helm 圖表在 Kubernetes 上部署 Patroni。
    duration_minutes: 155
    is_free: true
    sort_order: 22
    video_url: null
  - id: 019c9617-fba8-7143-940f-93cdbbdcd4a1
    title: 第 23 課：Patroni 組態管理
    slug: bai-23-patroni-configuration-management
    description: 動態配置更改，基於 DCS 的配置，使用 Patrictl edit-config 並更新配置，無需停機。
    duration_minutes: 110
    is_free: true
    sort_order: 23
    video_url: null
  - id: 019c9617-fbab-73c4-8dbe-d7e05b7e381a
    title: 第 24 課：升級策略
    slug: bai-24-upgrade-strategies
    description: 升級 PostgreSQL 主要版本、Patroni 版本、零停機升級技術、回滾程序和實驗室升級 PG 17 至 18。
    duration_minutes: 145
    is_free: true
    sort_order: 24
    video_url: null
  - id: 019c9617-fbae-719f-bd83-5b4c737bb570
    title: 第 25 課：現實世界案例研究
    slug: bai-25-real-world-case-studies
    description: 分析實際的生產架構、擴展策略、成本優化以及從實際專案中學到的經驗教訓。
    duration_minutes: 130
    is_free: true
    sort_order: 25
    video_url: null
  - id: 019c9617-fbb2-70b7-a4db-23daa55ff807
    title: 第 26 課：使用 Ansible 實現自動化
    slug: bai-26-automation-voi-ansible
    description: 建立 Ansible playbook，用於 PostgreSQL HA 叢集的部署、組態管理、自動化測試和 CI/CD 整合。
    duration_minutes: 115
    is_free: true
    sort_order: 26
    video_url: null
  - id: 019c9617-fbb5-7070-ba8e-a4ee3baf3c1d
    title: 第 27 課：災難復原演習
    slug: bai-27-disaster-recovery-drills
    description: 災難復原規劃、測試程序、事件應變流程、事後分析和完整災難復原場景模擬。
    duration_minutes: 110
    is_free: true
    sort_order: 27
    video_url: null
  - id: 019c9617-fbba-71f4-a5c3-d75c9087a96e
    title: 第 28 課：建築設計 HA
    slug: bai-28-thiet-ke-kien-truc-ha
    description: 收集HA生產系統的需求、設計架構設計文件、容量規劃和估算成本。
    duration_minutes: 160
    is_free: true
    sort_order: 28
    video_url: null
  - id: 019c9617-fbbd-7170-9eb6-c3c63e67172b
    title: 第 29 課：部署生產就緒集群
    slug: bai-29-deploy-production-ready-cluster
    description: 從頭開始完全部署叢集、建立文件、操作手冊、知識轉移和課程結束評估。
    duration_minutes: 185
    is_free: true
    sort_order: 29
    video_url: null
reviews: []
quizzes: []
locale: zh-tw
---
___HTMLTAG_0__HTMLTAG_1___第 1 課：PostgreSQL 高可用性概述___HTMLTAG_2__HTMLTAG_3__HTMLTAG_4__HTMLTAG_5___為什麼採用 HA？ ___HTMLTAG_6__HTMLTAG_7___PostgreSQL 的 HA 方法___HTMLTAG_8__HTMLTAG_9___比較：Patroni、RepmgrML 與 Pacemaker___HTMLTAG_10__HTMLTAG_11___系統概述架構___HTMLTAG_12__HTMLTAG_13__HTMLUsU​​P.P12__HTMLTAG13__14213122__HT中的流式複製___HTMLTAG_16__HTMLTAG_17__HTMLTAG_18__HTMLTAG_19___流式複製機制___HTMLTAG_20__HTMLTAG_21___WAL（預寫日誌記錄）___HTMLTAG_22__HTMLTAG_23___同步驟與非同步複製____HTMLTAG_24__HTMLTAG_25___複製槽___HTMLTAG_26__HTMLTAG_27___實驗室：簡單複製設定（主備）___HTMLTAG_28__HTMLTAG_29__HTMLTAG_30__HTMLTAG_31___第3 課：Patroni 簡介和etcd___HTMLTAG_32__HTMLTAG_33__HTMLTAG_34__HTMLTAG_35___Patroni 是什麼？它是如何運作的___HTMLTAG_36__HTMLTAG_37___DCS（分散式設定儲存）-etcd/Consul/ZooKeeper___HTMLTAG_38__HTMLTAG_39__ _共識演算法（Raft）___HTMLTAG_40__HTMLTAG_41___領導者選舉與領導者選舉故障轉移機制____HTMLTAG_42__HTMLTAG_43____腦裂問題及解決方法_ ___HTMLTAG_44__HTMLTAG_45__HTMLTAG_46__HTMLTAG_47___第4課：準備基礎架構____HTMLTAG_48__HTMLTAG_49__HTMLTA G_50__HTMLTAG_51___部分硬性需求與要求軟體___HTMLTAG_52__HTMLTAG_53___網路與防火牆設定___HTMLTAG_54__HTMLTAG_55___設定3 台虛擬機器/伺服器（VirtualBox/VMware/Cloud）___HTMLTAG_56__HTMLTAG_57___基於 SSH 金鑰的驗證___HTMLTAG_58__HTMLTAG_59___時間同步(NTP/chrony)___HTMLTAG_60__HTMLTAG_612HTMLGMLTAG__6121U4U4UU4U4U4U4：CU4UU4U4PTAG_612 月PostgreSQL____HTMLTAG_64__HTMLTAG_65__HTMLTAG_66__HTMLTAG_67___從軟體包儲存庫安裝 PostgreSQL___HTMLTAG_68__HTMLTAG_69___從來源安裝（選用）___HTMLTAG_70__HTMLTAG_71___MLTAG_71___ pg_hba.conf____HTMLTAG_74__HTMLTAG_75___實驗室：在 3 個節點上安裝 PostgreSQL___HTMLTAG_76__HTMLTAG_77__HTMLTAG_78__HTMLTAG_79___第 6 課：安裝與設定 etcd cluster____HTMLTAG_80__HTMLTAG_81__HTMLTAG_82__HTMLTAG_83___下載並安裝etcd____HTMLTAG_84__HTMLTAG_85___設定etcd叢集3個節點___ HTMLTAG_86__HTMLTAG_87___建立systemd服務___HTMLTAG_88__HTMLTAG_89___檢查etcd叢集的運作狀況____HTMLTAG_90__HTMLTAG_91___etcdctl basic指令____HTMLTAG_92__HTMLTAG_93___實驗室：完全設定etcd叢集編輯___HTMLTAG_94__HTMLTAG_95__HTMLTAG_96__HTMLTAG_97___第7課：安裝Patr oni___HTMLTAG_98__HTMLTAG_99______HTMLTAG_100__HTMLTAG_101___安裝Python相依性____HTMLTAG_102__HTMLTAG_103___透過安裝Patroni pip____HTMLTAG_104__HTMLTAG_105___Patroni.yml 檔案結構___HTMLTAG_106__HTMLTAG_107___為 Patroni 建立 systemd 服務____HTMLTAG_108__HTMLTAG_109___實驗：在 3 個節點上安裝Patroni___HTMLTAG_110__HTMLTAG_111__HTMLTAG_112__HTMLTAG_113___第 8課程：設定Patroni詳細介紹___HTMLTAG_114__HTMLTAG_115__HTMLTAG_116__HTMLTAG_117___分析patroni.yml檔案各部分___HTMLTAG_118__HTMLTAG_119___Bo otstrap設定___HTMLTAG_120__HTMLTAG_121___PostgreSQL參數調優___HTMLTAG_122__HTMLTAG_123___驗證設定____HTMLTAG_124__HTMLTAG_125___Tags 與約束____HTMLTAG_126__HTMLTAG_127__HTMLTAG_128__HTMLTAG_129___第 9 課：引導 PostgreSQL 132__HTMLTAG_130__HTMLTAG_131__HTMLTAG_132__HTMLTAGroni33_____次頭___HTMLTAG_134__HTMLTAG_135___自動引導process___HTMLTAG_136__HTMLTAG_137___使用papatictl檢查叢集狀態____HTMLTAG_138__HTMLTAG_139___常見問題故障排除____HTMLTAG_140__HTMLTAG_141___實驗室：將叢集引導至公共___HTMLTAG_142__HTMLTAG_143__HTMLTAG_144__HTMLTAG_145___第10課：複製管理___HTMLTAG_146__HT MLTAG_147__HTMLTAG_148__HTMLTAG_149___同步與非同步副本___HTMLTAG_150__HTMLTAG_151___設定同步_模式___HTMLTAG_152__HTMLTAG_153___同步_節點_計數___HTMLT AG_154__HTMLTAG_155___監視複製lag____HTMLTAG_156__HTMLTAG_157___實驗室：同步設定複製____HTMLTAG_158__HTMLTAG_159__HTMLTAG_160__HTMLTAG_161___第11課程：回呼腳本與掛鉤____HTMLTAG_162__HTMLTAG_163__HTMLTAG_164__HTMLTAG_165___on_start、on_stop、on_role_change回呼___HTMLTAG_166__HTMLTAG_167___通知的自訂腳本通知HTMLTAG_168__HTMLTAG_169___与监控系统集成___HTMLTAG_170__HTMLTAG_171___实验室：编写脚本以在故障转移时发送警报___HTMLTAG_172__HTMLTAG_173__HTMLTAG_174__HTMLTAG_175___第12 課：REST API 與patronictl____HTMLTAG_176__HTMLTAG_177__HTMLTAG_178__HTMLTAG_179___Patroni REST API 端點___HTMLTAG_180__HTMLTAG_181_____42_tl 指令使用實現自動化___HTMLTAG_184__HTMLTAG_185___實驗室：透過 CLI 和API___HTMLTAG_186__HTMLTAG_187__HTMLTAG_188__HTMLTAG_189___模組4：故障轉移與復原復原</strong>（4課）___HTMLTAG_191__HTMLTAG_192__HTMLTAG_193___第13課：自動故障轉移____ HTMLTAG_194__HTMLTAG_195__HTMLTAG_196__HTMLTAG_197___偵測機制錯誤___HTMLTAG_198__HTMLTAG_199___領導者選舉流程___HTMLTAG_200__HTMLTAG_201___故障轉移時間軸___HTMLTAG_202__HTMLTAG_203___測試自動故障轉移____HTMLTAG_204__HTMLTAG_205___實驗室：模擬主節點故障轉移___MLTAG_2060UMLTAG_205___實驗室：模擬主節點故障___MLTAG_20602GMLGML 14 課：使用主節點進行切換計畫___HTMLTAG_210__HTMLTAG_211__HTMLTAG_212__HTMLTAG_213___何時需要切換？ ___HTMLTAG_214__HTMLTAG_215___計劃切換與故障轉移___HTMLTAG_216__HTMLTAG_217___零停機維護___HTMLTAG_218__HTMLTAG_219___實驗室：實作切換____HTMLTAG_220HTMLHTMLTAG_22119___ML課：恢復失敗的節點____HTMLTAG_224__HTMLTAG_225__HTMLTAG_226__HTMLTAG_227___重新加入失敗的主節點___HTMLTAG_228__HTMLTAG_229___pg_rewind機制___HTML TAG_230__HTMLTAG_231___從備份重建副本___HTMLTAG_232__HTMLTAG_233___實驗室：恢復場景___HTMLTAG_234__HTMLTAG_235__HTMLTAG_236__HTMLTAG_237___第16課：備份和時間點恢復____HTMLTAG_238__HTMLTAG_239__HTMLTAG_240__HTMLTAG_241___pg_basebackup___HTMLTAG_242__HTMLTAG_243___WAL歸檔____HTMLTAG_244__422G_244__連續設定歸檔___HTMLTAG_246__HTMLTAG_247___PITR（時間點復原)___HTMLTAG_248__HTMLTAG_249___實驗室：從備份還原資料庫___HTMLTAG_250__HTMLTAG_251__HTMLTAG_252__HTMLTAG_253______ 17 課：監控 Patroni 群集___HTMLTAG_254__HTMLTAG_255__HTMLTAG_256__HTMLTAG_257___要追蹤的指標___HTMLTAG_258__HTMLTAG_259___Prometheus 整合 + Grafana___HTMLTAG_260__HTMLTAG_261___postgres_exporter___HTMLTAG_262__HTMLTAG_263___警报规则___HTMLTAG_264__HTMLTAG_265___实验室：设置监控堆栈___HTMLTAG_266__HTMLTAG_267__HTMLTAG_268__HTMLTAG_269___第 18 课：性能调优___HTMLTAG_270__HTMLTAG_271__HTMLTAG_272__HTMLTAG_273___PostgreSQL 配置调优___HTMLTAG_274__HTMLTAG_275___连接池 (PgBouncer)___HTMLTAG_276__HTMLTAG_277___负载平衡 (HAProxy/pgpool)___HTMLTAG_278__HTMLTAG_279___读取副本扩展___HTMLTAG_280__HTMLTAG_281___实验室：优化集群性能___HTMLTAG_282__HTMLTAG_283__HTMLTAG_284__HTMLTAG_285___第 19 课：日志记录和故障排除___HTMLTAG_286__HTMLTAG_287__HTMLTAG_288__HTMLTAG_289___PostgreSQL 日志___HTMLTAG_290__HTMLTAG_291___Patroni 日志___HTMLTAG_292__HTMLTAG_293___etcd 日志___HTMLTAG_294__HTMLTAG_295___常见问题以及如何解决修复____HTMLTAG_296__HTMLTAG_297___调试技术___HTMLTAG_298__HTMLTAG_299__HTMLTAG_300__HTMLTAG_301___第 20課：安全最佳實務___HTMLTAG_302__HTMLTAG_303__HTMLTAG_304__HTMLTAG_305___SSL/TLS 配置___HTMLTAG_306__HTMLTAG_307___身份验证方法___HTMLTAG_308__HTMLTAG_309___网络安全___HTMLTAG_310__HTMLTAG_311___静态加密___HTMLTAG_312 __HTMLTAG_313___审核日志记录___HTMLTAG_314__HTMLTAG_315___实验室：强化集群安全性___HTMLTAG_316__HTMLTAG_317__HTMLTAG_318__HTMLTAG_319___第21 課：多重資料中心設定___HTMLTAG_320__HTMLTAG_321__HTMLTAG_322__HTMLTAG_323___跨 DC複製策略___HTMLTAG_324__HTMLTAG_325___異步級聯複製____HTMLTAG_326__HTMLTAG_327___災難復原規劃___HTMLTAG_328__HTMLTAG_329___地理負載平衡___HTMLTAG_3301HTMLTAG_33112323123121UU​​PTA2312312323112__課：Patroni Kubernetes____HTMLTAG_334__HTMLTAG_335__HTMLTAG_336__HTMLTAG_337___Patroni 运算符___HTMLTAG_338__HTMLTAG_339___StatefulSets____HTMLTAG_340__HTMLTAG_341___持久卷____HTMLTAG_342__HTMLTAG_343___Helm 图表___HTMLTAG_344__HTMLTAG_345___实验室：在 K8s上部署____HTMLTAG_346__HTMLTAG_347__HTMLTAG_348__HTMLTAG_349___第 23 課：Patroni 配置管理___HTMLTAG_350__HTMLTAG_351__HTMLTAG_352__HTMLTAG_350__HTMLTAG_351__HTMLTAG_352__HTMLTAG_353_____HTMLTA453_____HT DCS配置____HTMLTAG_356__HTMLTAG_357___patronictl edit-config____HTMLTAG_358__HTMLTAG_359___配置验证___HTMLTAG_360__HTMLTAG_361___实验室：无需停机即可更新配置____HTMLTAG_362__HTMLTAG_363__HTMLTAG_364__HTMLTAG_365___第 24課：升級策略___HTMLTAG_366__HTMLTAG_367__HTMLTAG_368__HTMLTAG_369___PostgreSQL主要版本升級___HTMLTAG_370__HTMLTAG_371___Patron i版本升级___HTMLTAG_372__HTMLTAG_373___零停机升级技巧___HTMLTAG_374__HTMLTAG_375___回滚程序___HTMLTAG_376__HTMLTAG_377___实验室：将集群从PG 14 升級到 15___HTMLTAG_378__HTMLTAG_379__HTMLTAG_380__HTMLTAG_381___第 25 课：真实案例研究____HTMLTAG_382__HTMLTAG_383__HTMLTAG_384__HTMLTAG_385___生产架构示例___HTMLTAG_386__HTMLTAG_387___扩展策略____HTMLTAG_388__HTMLTAG_389____成本最佳化___HTMLTAG_390__HTMLTAG_391___經驗教訓___HTMLTAG_392__HTMLTAG_393__HTMLTAG_394__HTMLTAG_395___第 26 課：使用 Ansible實現自動化____HTMLTAG_396__HTMLTAG_397__HTMLTAG_398__HTMLTAG_399___Ansible手冊部署____HTMLTAG_400__HTMLTAG_401____設定管理____HTMLTAG_402__HTMLTAG_403___自動化測試___HTMLTAG_404__HTMLTAG_405_ __CI/CD整合___HTMLTAG_406__HTMLTAG_407___實驗室：自動化部署___HTMLTAG_408__HTMLTAG_409__HTMLTAG_410__HTMLTAG_411___第27 課：災難復原演習____HTMLTAG_412__HTMLTAG_413__HTMLTAG_414__HTMLTAG_415___DR規劃____HTMLTAG_416__HTMLTAG_417___測試程序____HTMLTAG_418__HTMLTAG_419___事件回應___HTMLTAG_420__HTMLTAG_421___事後分析___ HTMLTAG_422__HTMLTAG_423___實驗室：完整的災難復原模擬___HTMLTAG_424__HTMLTAG_425__HTMLTAG_426__HTMLTAG_427___第28課：架構設計HA__ _HTMLTAG_428__HTMLTAG_429__HTMLTAG_430__HTMLTAG_431___需求收集___HTMLTAG_432__HTMLTAG_433___架構設計文件___HTMLTAG_434_ _HTMLTAG_435___容量規劃___HTMLTAG_436__HTMLTAG_437___成本估計___HTMLTAG_438__HTMLTAG_439__HTMLTAG_440__HTMLTAG_441___第 29課程：部署生產就緒叢集___HTMLTAG_442__HTMLTAG_443__HTMLTAG_444__HTMLTAG_445___完成部署草稿___HTMLTAG_446__HTMLTAG_447___ML_HTMLTAG_448__HTMLTAG_ML449_447___ML1450___________1TAG_ML449_______________識轉移___HTMLTAG_452__HTMLTAG_453___最終評估___HTMLTAG_454__HTMLTAG_455__HTMLTAG_456__HTMLTAG_457__HTMLTAG_458___先決條件：____HTMLTAG_459__MLTAGMLTAG_458___先決條件：____HTMLTAG_459__14GML_459__164版本___HTMLTAG_463__HTMLTAG_464___PostgreSQL 基礎知識___HTMLTAG_465__HTMLTAG_466___網路基礎___HTMLTAG_467__HTMLTAG_468___Shell腳本____HTMLTAG_469__HTMLTAG_470__HTMLTAG_471__HTMLTAG_472___課程結束後的目標：___HTMLTAG_473__HTMLTAG_474__HTMLTAG_475__HTMLTAG_476___實作 PostgreSQL HA___叢集生產就緒___HTMLTAG_477__HTMLTAG_478___叢集管理與操作____HTMLTAG_479__HTMLTAG_480___事件處理與故障排除___HTMLTAG_481__HTMLTAG_482___最佳化效能與安全性___HTMLTAG_48381UG_48388