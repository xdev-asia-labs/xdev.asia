---
id: 019d8a21-a100-7001-b001-d0c4e7000001
title: Docker初級到高級
slug: docker-tu-co-ban-den-nang-cao
description: >-
  完整的Docker進階教程：從基礎知識到實際應用，涵蓋Docker容器、鏡像、網路、
  儲存、Compose編排、安全性、監控、CI/CD整合、微服務架構以及本產環境部署策略。
  適合初學者及希望精進Docker技能的開發者。
category: devsecops
course_type: series
is_free: false
author:
  id: author-001
  name: Joiny Trần
  title: DevSecOps & Cloud Architect
  bio: >-
    DevSecOps與雲端架構專家，擁有超過10年容器與Kubernetes實戰經驗。
    專注於安全、效能與可靠性。
  avatar: /avatars/joiny.png
  social:
    github: https://github.com/joiny
    linkedin: https://www.linkedin.com/in/joiny-tran
tags:
  - Docker
  - 容器化
  - DevOps
  - 微服務
  - 編排
difficulty_level: intermediate
estimated_hours: 60
updated_at: '2024-12-30'
sections:
  - id: section-001
    title: '第1部：Docker基礎'
    lessons:
      - id: 019d8a21-a101-7001-b001-d0c4e7000101
        slug: bai-1-gioi-thieu-docker-container-va-virtualization
        title: '第1課：Docker介紹 - 容器與虛擬化'
        description: >-
          認識Docker是什麼、容器與虛擬機的比較、Docker引擎架構
          (daemon、CLI、containerd、runc)、容器技術的歷史、Docker如何改變軟體開發。
        sort_order: 1
      - id: 019d8a21-a102-7001-b001-d0c4e7000102
        slug: bai-2-cai-dat-docker-va-cac-lenh-co-ban
        title: '第2課：Docker安裝與基本指令'
        description: >-
          Ubuntu、CentOS、macOS、Windows上的Docker引擎安裝。Docker CLI、
          docker run、ps、stop、rm、exec、logs等基本指令。
          Daemon設定與服務管理。
        sort_order: 2
      - id: 019d8a21-a103-7001-b001-d0c4e7000103
        slug: bai-3-docker-images-build-pull-va-quan-ly
        title: '第3課：Docker鏡像 - 構建、拉取、管理'
        description: >-
          Docker鏡像、分層架構、docker pull/push、docker images、tag、rmi、prune
          等鏡像管理。Docker Hub、官方鏡像、選擇適合專案的基礎鏡像。
        sort_order: 3
      - id: 019d8a21-a104-7001-b001-d0c4e7000104
        slug: bai-4-docker-containers-vong-doi-va-quan-ly
        title: '第4課：Docker容器 - 生命週期與管理'
        description: >-
          容器生命週期(建立、執行、暫停、停止、刪除)、進階管理指令、
          資源限制(CPU、記憶體)、重啟策略、docker inspect、docker stats、除錯技巧。
        sort_order: 4
  - id: section-002
    title: '第2部：Dockerfile與鏡像最佳化'
    lessons:
      - id: 019d8a21-a105-7001-b001-d0c4e7000105
        slug: bai-5-dockerfile-tu-a-den-z
        title: '第5課：Dockerfile A到Z'
        description: >-
          Dockerfile所有指令詳解：FROM、RUN、COPY、ADD、CMD、ENTRYPOINT、ENV、
          ARG、WORKDIR、EXPOSE、VOLUME、USER、HEALTHCHECK、LABEL、SHELL、STOPSIGNAL。
          建立Dockerfile的最佳實踐與反模式。
        sort_order: 5
      - id: 019d8a21-a106-7001-b001-d0c4e7000106
        slug: bai-6-multi-stage-builds-va-toi-uu-docker-image
        title: '第6課：多階段構建與Docker鏡像最佳化'
        description: >-
          使用多階段構建減少鏡像大小、分層快取最佳化、.dockerignore、
          Alpine與Distroless基礎鏡像、使用Trivy與Snyk的安全掃描、
          實際環境鏡像最佳化策略。
        sort_order: 6
      - id: 019d8a21-a107-7001-b001-d0c4e7000107
        slug: bai-7-docker-registry-docker-hub-va-private-registry
        title: '第7課：Docker登錄庫 - Docker Hub與私有登錄庫'
        description: >-
          Docker Hub使用、儲存庫建立、自動構建。Docker Registry、Harbor使用的
          私有登錄庫建置。鏡像標籤策略、版本控制、漏洞掃描、登錄庫安全最佳實踐。
        sort_order: 7
      - id: 019d8a21-a108-7001-b001-d0c4e7000108
        slug: bai-8-docker-compose-co-ban
        title: '第8課：Docker Compose基礎'
        description: >-
          Docker Compose介紹、docker-compose.yml語法、服務、網路、
          磁碟卷、depends_on、healthcheck。使用Compose部署多容器應用程式：
          Web應用+資料庫+快取(Nginx+Node.js+PostgreSQL+Redis)。
        sort_order: 8
  - id: section-003
    title: '第3部：網路、儲存、進階Compose'
    lessons:
      - id: 019d8a21-a109-7001-b001-d0c4e7000109
        slug: bai-9-docker-networking-deep-dive
        title: '第9課：Docker網路深度探討'
        description: >-
          Docker網路驅動程式(bridge、host、overlay、macvlan、none)、DNS解析、
          容器通訊、連接埠對應、網路隔離、自訂網路、多主機網路、
          網路問題除錯。
        sort_order: 9
      - id: 019d8a21-a110-7001-b001-d0c4e7000110
        slug: bai-10-docker-volumes-va-persistent-storage
        title: '第10課：Docker磁碟卷與永久儲存'
        description: >-
          Docker磁碟卷、綁定掛載、tmpfs掛載、磁碟卷驅動程式、
          命名磁碟卷、匿名磁碟卷、NFS/AWS EBS/GlusterFS磁碟卷外掛程式。
          資料備份與復原、具狀態應用程式的儲存最佳實踐。
        sort_order: 10
      - id: 019d8a21-a111-7001-b001-d0c4e7000111
        slug: bai-11-docker-compose-nang-cao
        title: '第11課：進階Docker Compose'
        description: >-
          Compose設定檔、extends、覆蓋檔案、變數替換、部署設定、
          資源限制、滾動更新、服務擴展、Compose Watch開發工具、
          實際環境適應的Compose設定。
        sort_order: 11
      - id: 019d8a21-a112-7001-b001-d0c4e7000112
        slug: bai-12-environment-variables-secrets-va-configuration
        title: '第12課：環境變數、機密與設定管理'
        description: >-
          環境變數、.env檔案、Docker設定、Docker機密、Vault整合進行設定管理。
          機密資訊安全最佳實踐、十二要素應用程式方法論、設定管理模式。
        sort_order: 12
  - id: section-004
    title: '第4部：安全性、監控、CI/CD'
    lessons:
      - id: 019d8a21-a113-7001-b001-d0c4e7000113
        slug: bai-13-docker-security-best-practices
        title: '第13課：Docker安全最佳實踐'
        description: >-
          Docker Daemon保護、無根容器、使用者命名空間、seccomp設定檔、
          AppArmor/SELinux、唯讀檔案系統、能力限制、Docker Content Trust鏡像簽署、
          CIS Docker基準、合規掃描。
        sort_order: 13
      - id: 019d8a21-a114-7001-b001-d0c4e7000114
        slug: bai-14-docker-logging-va-monitoring
        title: '第14課：Docker日誌記錄與監控'
        description: >-
          Docker日誌驅動程式(json-file、syslog、fluentd、gelf)、使用ELK/EFK堆疊
          進行集中式日誌管理、使用cAdvisor的容器指標、Prometheus+Grafana儀表板、
          Docker事件、健康監控、警報策略。
        sort_order: 14
      - id: 019d8a21-a115-7001-b001-d0c4e7000115
        slug: bai-15-docker-trong-ci-cd-pipeline
        title: '第15課：CI/CD管道中的Docker'
        description: >-
          Jenkins、GitLab CI、GitHub Actions中的Docker。鏡像自動構建與推送。
          Docker-in-Docker (DinD) vs Docker套接字。CI/CD最佳實踐、使用Docker進行
          自動化測試、藍綠部署和金絲雀部署。
        sort_order: 15
      - id: 019d8a21-a116-7001-b001-d0c4e7000116
        slug: bai-16-docker-performance-tuning
        title: '第16課：Docker效能調校'
        description: >-
          Docker構建速度最佳化、分層快取策略、BuildKit功能、容器執行時效能、
          資源管理(cgroups)、儲存驅動程式最佳化、網路效能調校、
          效能評標工具。
        sort_order: 16
  - id: section-005
    title: '第5部：實際環境與進階主題'
    lessons:
      - id: 019d8a21-a117-7001-b001-d0c4e7000117
        slug: bai-17-docker-swarm-container-orchestration
        title: '第17課：Docker Swarm - 容器協調'
        description: >-
          Docker Swarm模式、叢集設定與管理、服務、工作、複本、滾動更新、
          回滾、Overlay網路、ingress負載平衡、位置限制、機密管理、
          Swarm vs Kubernetes比較。
        sort_order: 17
      - id: 019d8a21-a118-7001-b001-d0c4e7000118
        slug: bai-18-docker-cho-microservices-architecture
        title: '第18課：微服務架構中的Docker'
        description: >-
          使用Docker的微服務設計、服務探索、使用Traefik與Kong的API閘道、
          使用Jaeger進行分散式追蹤、斷路器模式、事件驅動架構、
          邊車模式、實世界微服務專案。
        sort_order: 18
      - id: 019d8a21-a119-7001-b001-d0c4e7000119
        slug: bai-19-docker-voi-kubernetes-migration-path
        title: '第19課：Docker與Kubernetes - 遷移路徑'
        description: >-
          從Docker Compose遷移到Kubernetes、使用Kompose進行轉換、
          容器執行時介面 (CRI)、containerd、Helm圖表、Docker Desktop Kubernetes、
          混合部署、Docker開發人員的Kubernetes基礎。
        sort_order: 19
      - id: 019d8a21-a120-7001-b001-d0c4e7000120
        slug: bai-20-production-deployment-va-troubleshooting
        title: '第20課：實際環境部署與除錯'
        description: >-
          實際環境檢查清單、零停機部署策略、災難復原、Docker除錯技巧、
          容器鑑識、實際環境常見問題與解決方案、實世界案例研究。
        sort_order: 20
---

## Docker初級到高級完整教程

本系列涵蓋從基礎到進階的Docker概念與實踐，幫助開發者和運維人員掌握容器技術。
