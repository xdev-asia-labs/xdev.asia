---
id: 019d8a21-a100-7001-b001-d0c4e7000001
title: Docker初級から上級まで
slug: docker-tu-co-ban-den-nang-cao
description: >-
  基本的な概念から実運用レベルのデプロイまで、包括的なDocker講座。Dockerfile、Docker
  Compose、ネットワーク、ストレージ、セキュリティ、CI/CD、Docker Swarm、マイクロサービスと
  エンタープライズ環境のベストプラクティスを含む。Docker Engine 27+および2026年最新の
  コンテナ技術に対応。
featured_image: uploads/2026/03/docker-series-banner-2026.png
level: beginner
duration_hours: 60
lesson_count: 20
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-30T08:00:00.000000Z'
created_at: '2026-03-30T08:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9617-faa6-70d6-8679-ee4de1f177b3
  name: DevSecOps
  slug: devsecops
tags:
  - name: devops
    slug: devops
  - name: Docker
    slug: docker
  - name: container
    slug: container
  - name: docker-compose
    slug: docker-compose
  - name: Microservices
    slug: microservices
  - name: cicd
    slug: cicd
  - name: linux
    slug: linux
  - name: security
    slug: security
  - name: monitoring
    slug: monitoring
  - name: production
    slug: production
  - name: docker-registry
    slug: docker-registry
  - name: docker-swarm
    slug: docker-swarm
  - name: networking
    slug: networking
  - name: infrastructure
    slug: infrastructure
  - name: cloud-native
    slug: cloud-native
  - name: kubernetes
    slug: kubernetes
  - name: Performance
    slug: performance
  - name: HandsOn
    slug: handson
  - name: RealWorld
    slug: realworld
sections:
  - id: section-01
    title: '第1部：Dockerの基礎'
    description: 'Dockerの紹介、インストール、基本的なイメージとコンテナ'
    sort_order: 1
    lessons:
      - id: 019d8a21-a101-7001-b001-d0c4e7000101
        title: '第1課：Docker紹介 - コンテナと仮想化'
        slug: bai-1-gioi-thieu-docker-container-va-virtualization
        description: >-
          Dockerとは何か、コンテナと仮想マシンの比較、Docker Engineアーキテクチャ
          (daemon、CLI、containerd、runc)、コンテナ技術の歴史、Dockerがソフトウェア
          開発をいかに変えたかを学びます。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-a102-7001-b001-d0c4e7000102
        title: '第2課：Dockerのインストールと基本コマンド'
        slug: bai-2-cai-dat-docker-va-cac-lenh-co-ban
        description: >-
          Ubuntu、CentOS、macOS、WindowsでのDocker Engineインストール。Docker CLI、
          docker run、ps、stop、rm、exec、logsなどの基本コマンドを学びます。
          Dockerデーモン設定とDockerサービス管理。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-a103-7001-b001-d0c4e7000103
        title: '第3課：Dockerイメージ - ビルド、プル、管理'
        slug: bai-3-docker-images-build-pull-va-quan-ly
        description: >-
          Dockerイメージ、レイヤーアーキテクチャ、docker pull/push、
          docker images、tag、rmi、pruneなどでのイメージ管理。
          Docker Hub、公式イメージ、プロジェクトに適したベースイメージの選択方法。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8a21-a104-7001-b001-d0c4e7000104
        title: '第4課：Dockerコンテナ - ライフサイクルと管理'
        slug: bai-4-docker-containers-vong-doi-va-quan-ly
        description: >-
          コンテナライフサイクル(作成、実行、一時停止、停止、削除)、
          高度な管理コマンド、リソース制限(CPU、メモリ)、再起動ポリシー、
          docker inspect、docker stats、デバッグ技法。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: '第2部：Dockerfileとイメージ最適化'
    description: 'Dockerfileを使用したプロフェッショナルなイメージ構築と最適化'
    sort_order: 2
    lessons:
      - id: 019d8a21-a105-7001-b001-d0c4e7000105
        title: '第5課：Dockerfile A～Z'
        slug: bai-5-dockerfile-tu-a-den-z
        description: >-
          Dockerfileのすべての命令の詳細ガイド：FROM、RUN、COPY、ADD、CMD、
          ENTRYPOINT、ENV、ARG、WORKDIR、EXPOSE、VOLUME、USER、HEALTHCHECK、
          LABEL、SHELL、STOPSIGNAL。Dockerfile作成時のベストプラクティスとアンチパターン。
        duration_minutes: 180
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-a106-7001-b001-d0c4e7000106
        title: '第6課：マルチステージビルドとDockerイメージ最適化'
        slug: bai-6-multi-stage-builds-va-toi-uu-docker-image
        description: >-
          マルチステージビルドでイメージサイズを削減、レイヤーキャッシュ最適化、
          .dockerignore、AlpineとDistrolessベースイメージ、TrivyとSnykでのセキュリティ
          スキャン、本番環境向けイメージ最適化戦略。
        duration_minutes: 160
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-a107-7001-b001-d0c4e7000107
        title: '第7課：Dockerレジストリ - Docker Hubとプライベートレジストリ'
        slug: bai-7-docker-registry-docker-hub-va-private-registry
        description: >-
          Docker Hubの使用、リポジトリの作成、自動ビルド。Docker Registry、Harborを
          使用したプライベートレジストリの構築。イメージタグ戦略、バージョニング、
          脆弱性スキャン、レジストリセキュリティベストプラクティス。
        duration_minutes: 140
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8a21-a108-7001-b001-d0c4e7000108
        title: '第8課：Docker Compose基础'
        slug: bai-8-docker-compose-co-ban
        description: >-
          Docker Composeの紹介、docker-compose.yml構文、サービス、ネットワーク、
          ボリューム、depends_on、healthcheck。Composeを使用したマルチコンテナ
          アプリケーションのデプロイ：Webアプリ＋データベース＋キャッシュ
          (Nginx＋Node.js＋PostgreSQL＋Redis)。
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: '第3部：ネットワーク、ストレージ、高度なCompose'
    description: 'Dockerネットワーク、ストレージボリューム、高度なCompose機能'
    sort_order: 3
    lessons:
      - id: 019d8a21-a109-7001-b001-d0c4e7000109
        title: '第9課：Dockerネットワークディープダイブ'
        slug: bai-9-docker-networking-deep-dive
        description: >-
          Dockerネットワークドライバ(bridge、host、overlay、macvlan、none)、
          DNS解決、コンテナ通信、ポートマッピング、ネットワーク分離、
          カスタムネットワーク、マルチホストネットワーク、ネットワーク問題の
          トラブルシューティング。
        duration_minutes: 200
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-a110-7001-b001-d0c4e7000110
        title: '第10課：Dockerボリュームと永続ストレージ'
        slug: bai-10-docker-volumes-va-persistent-storage
        description: >-
          Dockerボリューム、バインドマウント、tmpfsマウント、ボリュームドライバ、
          名前付きボリューム、匿名ボリューム、NFS/AWS EBS/GlusterFS向けボリューム
          プラグイン。データバックアップと復元、ステートフルアプリケーションのための
          ストレージベストプラクティス。
        duration_minutes: 160
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8a21-a111-7001-b001-d0c4e7000111
        title: '第11課：高度なDocker Compose'
        slug: bai-11-docker-compose-nang-cao
        description: >-
          Composeプロファイル、extends、オーバーライドファイル、変数置換、
          デプロイ設定、リソース制限、ローリングアップデート、サービススケーリング、
          Compose Watch for開発、本番環境対応Compose設定。
        duration_minutes: 180
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8a21-a112-7001-b001-d0c4e7000112
        title: '第12課：環境変数、シークレット、設定管理'
        slug: bai-12-environment-variables-secrets-va-configuration
        description: >-
          環境変数、.envファイル、Dockerの設定、Dockerシークレット、Vault統合での
          設定管理。機密情報のセキュリティベストプラクティス、12ファクター
          アプリケーション方式論、設定管理パターン。
        duration_minutes: 140
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: '第4部：セキュリティ、監視、CI/CD'
    description: 'Dockerセキュリティ、監視、ロギング、CI/CD統合'
    sort_order: 4
    lessons:
      - id: 019d8a21-a113-7001-b001-d0c4e7000113
        title: '第13課：Dockerセキュリティベストプラクティス'
        slug: bai-13-docker-security-best-practices
        description: >-
          Dockerデーモン保護、rootlessコンテナ、ユーザー名前空間、seccompプロファイル、
          AppArmor/SELinux、読み取り専用ファイルシステム、ケーパビリティ削減、
          Docker Content Trustでのイメージ署名、CIS Dockerベンチマーク、
          コンプライアンススキャン。
        duration_minutes: 220
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-a114-7001-b001-d0c4e7000114
        title: '第14課：Dockerログ出力と監視'
        slug: bai-14-docker-logging-va-monitoring
        description: >-
          Dockerログドライバ(json-file、syslog、fluentd、gelf)、ELK/EFKスタックでの
          一元ログ管理、cAdvisorでのコンテナメトリクス、Prometheus＋Grafana
          ダッシュボード、Dockerイベント、ヘルスモニタリング、アラート戦略。
        duration_minutes: 200
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8a21-a115-7001-b001-d0c4e7000115
        title: '第15課：CI/CDパイプラインのDocker'
        slug: bai-15-docker-trong-ci-cd-pipeline
        description: >-
          Jenkins、GitLab CI、GitHub ActionsでのDocker。イメージの自動ビルドと
          プッシュ。Docker-in-Docker (DinD) vs Dockerソケット。CI/CDベストプラクティス、
          Dockerを使用した自動テスト、ブルーグリーン展開とカナリア展開。
        duration_minutes: 200
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8a21-a116-7001-b001-d0c4e7000116
        title: '第16課：Dockerパフォーマンスチューニング'
        slug: bai-16-docker-performance-tuning
        description: >-
          Dockerビルド速度の最適化、レイヤーキャッシュ戦略、BuildKit機能、
          コンテナランタイムパフォーマンス、リソース管理(cgroups)、
          ストレージドライバ最適化、ネットワークパフォーマンスチューニング、
          ベンチマークツール。
        duration_minutes: 180
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: '第5部：本番環境と高度なトピック'
    description: 'Docker Swarm、マイクロサービス、Kubernetes、本番環境デプロイ'
    sort_order: 5
    lessons:
      - id: 019d8a21-a117-7001-b001-d0c4e7000117
        title: '第17課：Docker Swarm - コンテナオーケストレーション'
        slug: bai-17-docker-swarm-container-orchestration
        description: >-
          Docker Swarmモード、クラスタ設定と管理、サービス、タスク、レプリカ、
          ローリングアップデート、ロールバック、オーバーレイネットワーキング、
          ingressロードバランシング、配置制約、シークレット管理、
          Swarm vs Kubernetes比較。
        duration_minutes: 240
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-a118-7001-b001-d0c4e7000118
        title: '第18課：マイクロサービスアーキテクチャのDocker'
        slug: bai-18-docker-cho-microservices-architecture
        description: >-
          Dockerを使用したマイクロサービス設計、サービスディスカバリ、
          TraefikとKongを使用したAPIゲートウェイ、Jaegerを使用した分散トレーシング、
          サーキットブレーカーパターン、イベント駆動アーキテクチャ、
          サイドカーパターン、実世界のマイクロサービスプロジェクト。
        duration_minutes: 240
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8a21-a119-7001-b001-d0c4e7000119
        title: '第19課：KubernetesへのDocker - 移行パス'
        slug: bai-19-docker-voi-kubernetes-migration-path
        description: >-
          Docker ComposeからKubernetesへの移行、Komposeを使用した変換、
          Container Runtime Interface (CRI)、containerd、Helmチャート、
          Docker Desktop Kubernetes、ハイブリッドデプロイ、Dockerデベロッパー向けの
          Kubernetes基礎。
        duration_minutes: 240
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a21-a120-7001-b001-d0c4e7000120
        title: '第20課：本番デプロイとトラブルシューティング'
        slug: bai-20-production-deployment-va-troubleshooting
        description: >-
          本番環境対応チェックリスト、ダウンタイムなしデプロイ戦略、
          災害復旧、Dockerデバッグ技法、コンテナフォレンジクス、
          本番環境での一般的な問題と解決策、実世界のケーススタディ。
        duration_minutes: 240
        is_free: true
        sort_order: 20
        video_url: null
---
