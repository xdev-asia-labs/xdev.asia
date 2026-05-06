---
id: 019c9617-fc21-7282-8fc3-c1147ba22e10
title: 'レッスン 1: Kubernetes とコンテナ オーケストレーションの概要'
slug: bai-1-gioi-thieu-kubernetes-va-container-orchestration
description: 最初のレッスンでは、K8s が業界標準になった理由を理解するための基盤であるコンテナ オーケストレーションと Kubernetes を紹介します。歴史、基本的なアーキテクチャ、類似テクノロジーとの比較について学びます。
duration_minutes: 160
is_free: true
video_url: null
sort_order: 1
section_title: 'モジュール 1: 概要と Kubernetes アーキテクチャ'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6562" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6562)"/>

  <!-- Decorations -->
  <g>
    <circle cx="680" cy="250" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="760" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="840" cy="50" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="920" cy="210" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="90" x2="1100" y2="170" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="120" x2="1050" y2="190" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="961.650635094611,127.5 961.650635094611,152.5 940,165 918.349364905389,152.5 918.349364905389,127.5 940,115" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 1: Kubernetes とコンテナの概要</tspan>
      <tspan x="60" dy="42">ORCHESTRATION_</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 1: 概要とKubernetes アーキテクチャ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="%F0%9F%8E%AF-m%E1%BB%A5c-ti%C3%AAu-b%C3%A0i-h%E1%BB%8Dc">🎯 レッスンの目的_</h2><p>このレッスンを完了すると、次のことができるようになります:</p><ul><li>✅ コンテナ オーケストレーションとは何か、なぜ必要なのかを理解する_</li><li>✅ の役割と重要性を理解するKubernetes</li><li>✅ Kubernetes と他のツールを比較</li><li>✅ Kubernetes の全体的なアーキテクチャを理解する</li><li>✅ Kubernetes エコシステムとそのコミュニティについて知る</li></ul><h3 id="ph%E1%BA%A7n-1-container-orchestration-l%C3%A0-g%C3%AC">パート 1: とはコンテナ オーケストレーション?</h3><h4 id="11-v%E1%BA%A5n-%C4%91%E1%BB%81-v%E1%BB%9Bi-containers-khi-scale">1.1。スケール時のコンテナの問題</h4><p>Docker コンテナで実行されている単純な Web アプリケーションがあると想像してください:</p><pre><code class="language-bash">docker run -d -p 8080:80 my-web-app
</code></pre><p><strong>すべてが正常に動作していました...いつまで:</strong></p><p>❌ <strong>問題 1: 突然トラフィックが発生しました増加</strong></p><ul><li>1 つのコンテナでは処理できません__HTMLTAG_99___<li>_10、20、100 のコンテナにスケールアップする必要があります_</li><li>トラフィックを分散するにはどうすればよいですか?</li></ul><p>❌ <strong>問題 2: コンテナが壊れてクラッシュ</strong></p><ul><li>誰が検出して再起動しますか?_</li><li>99.9% の稼働時間を確保するにはどうすればよいですか?</li></ul><p>❌ <strong>問題 3: 複数のサーバー</strong></p><ul><li>複数のサーバーにコンテナをデプロイするにはどうすればよいですか?</li><li>リソース (CPU、RAM) を効果的に管理するにはどうすればよいですか?</li></ul><p>❌ <strong>問題 4: アプリケーションの更新___HTMLTAG_127__HTMLTAG_128___<ul><li>更新のダウンタイムをロールバックするにはどうすればよいですか?</li><li>エラーが発生した場合はロールバックしますか?</li></ul><p>❌ <strong>問題5: サービスの検出</strong></p><ul><li>動的 IP を持つコンテナ</li><li>_サービスはどのように相互に検索して呼び出しますか?</li></ul><p>❌ <strong>問題 6: 構成管理_</strong></p><ul><li>数百のコンテナのシークレット、構成の管理_</li><li>その他の開発、ステージング、運用環境それぞれ</li></ul><h4 id="12-container-orchestration-l%C3%A0-gi%E1%BA%A3i-ph%C3%A1p">1.2。コンテナ オーケストレーションがソリューション</h4><p><strong>コンテナ オーケストレーション</strong> は、コンテナのデプロイ、管理、スケーリング、ネットワーキングの自動化です。</p><p><strong>Orchestrator は、内容:_</strong></p><pre><code>┌─────────────────────────────────────────────────────────┐
│         CONTAINER ORCHESTRATION PLATFORM                │
├─────────────────────────────────────────────────────────┤
│  ✓ Scheduling         - Chọn node phù hợp cho container│
│  ✓ Scaling            - Auto scale up/down              │
│  ✓ Self-healing       - Restart containers failed       │
│  ✓ Load Balancing     - Phân phối traffic đều          │
│  ✓ Service Discovery  - Tìm và kết nối services        │
│  ✓ Rolling Updates    - Update không downtime           │
│  ✓ Rollback           - Quay lại version cũ             │
│  ✓ Secret Management  - Quản lý credentials an toàn    │
│  ✓ Resource Management- Tối ưu CPU, RAM, Storage        │
└─────────────────────────────────────────────────────────┘
</code></pre><h4 id="13-v%C3%AD-d%E1%BB%A5-th%E1%BB%B1c-t%E1%BA%BF">1.3。実際の例_</h4><p><strong>オーケストレーション前:</strong></p><pre><code class="language-bash"># Trên server 1
ssh server1
docker run -d app:v1
docker run -d app:v1
docker run -d app:v1

# Trên server 2
ssh server2
docker run -d app:v1
docker run -d app:v1

# Manual monitoring
while true; do
  docker ps | grep app
  # Nếu container die -&gt; manual restart
done
</code></pre><p><strong>コンテナありオーケストレーション:_</strong></p><pre><code class="language-yaml"># Khai báo mong muốn
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 5  # Muốn 5 containers
  template:
    spec:
      containers:
      - name: app
        image: app:v1
</code></pre><p>AutomaticOrchestrator:</p><ul><li>5 つのコンテナを異なるサーバーにデプロイ_</li><li>_クラッシュを監視して再起動</li><li>_ロードバランストラフィック_</li><li>_必要に応じてスケール</li></ul><hr><h3 id="ph%E1%BA%A7n-2-t%E1%BA%A1i-sao-c%E1%BA%A7n-kubernetes">パート 2: なぜ KUBERNETES が必要ですか?</h3><h4 id="21-b%E1%BB%91i-c%E1%BA%A3nh-ra-%C4%91%E1%BB%9Di">2.1。背景_</h4><p><strong>Google の Borg (2003-2015)</strong></p><ul><li>Google は毎日数十億のコンテナを実行</li><li>Borg: 管理する内部システムコンテナ</li><li>15 年以上の大規模システムの運用経験</li></ul><p><strong>Kubernetes 誕生 (2014 年)_</strong></p><ul><li>Google オープンソース Kubernetes (K8s)_</li><li>Borg と Omega の経験に基づく_</li><li>クラウド ネイティブ アプリケーション向けに設計</li><li>CNCF (クラウド ネイティブ コンピューティング財団) に寄付</li></ul><h4 id="22-t%E1%BA%A1i-sao-kubernetes-th%E1%BA%AFng-th%E1%BA%BF">2.2。 Kubernetes が普及しているのはなぜですか?</h4><p><strong>1。本番環境で実証済み_</strong></p><pre><code>Google → 15+ năm kinh nghiệm
         ↓
      Kubernetes → Battle-tested tại Google
         ↓
    Cộng đồng → Hàng nghìn companies đóng góp
</code></pre><p><strong>2。ベンダーに依存しない_</strong></p><ul><li>どこでも実行: オンプレミス、クラウド、ハイブリッド_</li><li>1 つのクラウドプロバイダーに固定されない_</li><li>AWS、GCP、Azure、ベア間で移植可能金属_</li></ul><p><strong>3。拡張性と柔軟性</strong></p><ul><li>プラグインアーキテクチャ_</li><li>カスタムリソース定義(CRD)</li><li>演算子パターン</li><li>リッチエコシステム_</li></ul><p><strong>4。大規模なコミュニティ_</strong></p><ul><li>100,000 人以上の寄稿者</li><li>数百万のユーザー</li><li>成熟したツールとドキュメント</li><li>アクティブ開発</li></ul><p><strong>5。業界標準</strong></p><pre><code>CNCF Graduated Project
    ↓
Được tích hợp bởi:
- AWS (EKS)
- Google (GKE)
- Azure (AKS)
- IBM (IKS)
- DigitalOcean
- và nhiều vendor khác
</code></pre><h4 id="23-con-s%E1%BB%91-%E1%BA%A5n-t%C6%B0%E1%BB%A3ng">2.3。印象的な数字_</h4><p>📊 <strong>Kubernetes 導入 (2024)</strong></p><ul><li>96% の組織が K8 を使用またはレビューしています</li><li>560 万人の開発者が使用K8s</li><li>最も望まれているプラットフォームのトップ 2 (スタック オーバーフロー)</li><li>コンテナの 89% が K8s で実行_</li></ul><p>🚀 <strong>使用ケース_</strong></p><ul><li>マイクロサービスアーキテクチャ</li><li>CI/CDパイプライン</li><li>機械学習ワークロード</li><li>ビッグデータ処理_</li><li>ハイブリッド/マルチクラウド展開_</li></ul><hr><h3 id="ph%E1%BA%A7n-3-so-s%C3%A1nh-kubernetes-v%E1%BB%9Bi-c%C3%A1c-c%C3%B4ng-c%E1%BB%A5-kh%C3%A1c">パート 3: Kubernetes と他のツールの比較_</h3><h4 id="31-kubernetes-vs-docker-swarm">3.1。 Kubernetes と Docker Swarm</h4>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>基準__HTMLTAG_310___
<th>Kubernetes_</th>
<th>Docker Swarm</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>複雑さ</strong></td>
<td>高く、多くの概念__HTMLTAG_324___
<td>シンプルで学びやすい</td>
</tr>
<tr>
<td><strong>セットアップ</strong></td>
<td>さらに複雑</td>
<td>とてもシンプル__HTMLTAG_336___
</tr>
<tr>
<td><strong>_スケーラビリティ</strong></td>
<td>非常に良い (1000 ノード以上)</td>
<td>良好 (100 ノード以上)</td>
</tr>
<tr>
<td><strong>エコシステム</strong></td>
<td>非常に広い</td>
<td>制限事項</td>
</tr>
<tr>
<td><strong>_自動スケーリング</strong></td>
<td>ネイティブ HPA、VPA</td>
<td>限定</td>
</tr>
<tr>
<td><strong>負荷分散_</strong></td>
<td>上級 (Ingress)</td>
<td>基本</td>
</tr>
<tr>
<td><strong>_コミュニティ</strong></td>
<td>巨大</td>
<td>はるかに小さい</td>
</tr>
<tr>
<td><strong>エンタープライズ サポート</strong></td>
<td>すべてのクラウドプロバイダ_</td>
<td>限定</td>
</tr>
<tr>
<td><strong>学習曲線</strong></td>
<td>急勾配</td>
<td>優しい</td>
</tr>
<tr>
<td><strong>本番準備完了</strong></td>
<td>はい</td>
<td>はい (ただし、ほとんど使用されません)</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->
<p><strong>結論:</strong> Docker Swarm の方が簡単ですが、K8s はより強力であり、業界標準です。</p><h4 id="32-kubernetes-vs-apache-mesos">3.2。 Kubernetes と Apache Mesos</h4>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>基準</th>
<th>Kubernetes_</th>
<th>Apache Mesos</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>フォーカス</strong></td>
<td>コンテナ オーケストレーション__HTMLTAG_446___
<td>汎用クラスターマネージャー</td>
</tr>
<tr>
<td><strong>_アーキテクチャ</strong></td>
<td>モノリシック_</td>
<td>2 レベル (メソス + マラソン)</td>
</tr>
<tr>
<td><strong>_採用</strong></td>
<td>非常に高い</td>
<td>平均</td>
</tr>
<tr>
<td><strong>_ユースケース</strong></td>
<td>コンテナ、マイクロサービス_</td>
<td>コンテナ、ビッグデータ、分析</td>
</tr>
<tr>
<td><strong>_複雑さ</strong></td>
<td>高</td>
<td>非常に高い</td>
</tr>
<tr>
<td><strong>_コンテナのサポート</strong></td>
<td>ネイティブ</td>
<td>マラソン/DC/OS経由</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->
<p><strong>結論:</strong> Mesos はより柔軟ですが、より複雑です。 K8s はコンテナに重点を置いています。</p><h4 id="33-kubernetes-vs-nomad">3.3。 Kubernetes と Nomad</h4>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>基準</th>
<th>Kubernetes_</th>
<th>HashiCorp ノマド</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>シンプルさ</strong></td>
<td>複雑</td>
<td>シンプル</td>
</tr>
<tr>
<td><strong>ワークロードの種類</strong></td>
<td>コンテナ</td>
<td>コンテナ、VM、バイナリ</td>
</tr>
<tr>
<td><strong>_エコシステム</strong></td>
<td>巨大</td>
<td>成長</td>
</tr>
<tr>
<td><strong>マルチクラウド</strong></td>
<td>素晴らしい</td>
<td>素晴らしい</td>
</tr>
<tr>
<td><strong>採用</strong></td>
<td>非常に高い</td>
<td>中程度</td>
</tr>
<tr>
<td><strong>HashiCorp の統合</strong></td>
<td>限定</td>
<td>ネイティブ (Vault、執政)</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->
<p><strong>結論:</strong>Nomad はよりシンプルで、より多様なワークロードを備えていますが、エコシステムは小規模です。</p><h4 id="34-khi-n%C3%A0o-d%C3%B9ng-g%C3%AC">3.4.いつ何を使用するか?_</h4><p><strong>_次の場合に Kubernetes を選択してください:</strong></p><ul><li>✅ 重要な本番ワークロード_</li><li>✅ 大規模にスケールする必要がある (100 以上)サービス)</li><li>✅ DevOps 経験のあるチーム</li><li>✅ 豊富なエコシステムが必要</li><li>✅ マルチクラウド戦略</li></ul><p><strong>Docker Swarm を選択時期:</strong></p><ul><li>✅ 小規模チーム、単一プロジェクトがシンプル</li><li>✅ 迅速にデプロイする必要がある</li><li>✅ Docker CLI に精通している</li><li>✅ 必要ありません規模が大きすぎる</li></ul><p><strong>次の場合に Nomad を選択してください:</strong></p><ul><li>✅ 多様なワークロード (コンテナーだけでなく)</li><li>✅ HashiCorp スタックを使用</li><li>✅ シンプルさが必要</li><li>✅ エッジ コンピューティング_</li></ul><hr><h3 id="ph%E1%BA%A7n-4-ki%E1%BA%BFn-tr%C3%BAc-kubernetes-t%E1%BB%95ng-quan">パート 4: Kubernetes アーキテクチャ概要_</h3><h4 id="41-kubernetes-cluster">4.1。 Kubernetes クラスター_</h4><pre><code>┌────────────────────────────────────────────────────────────┐
│                    KUBERNETES CLUSTER                      │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  ┌──────────────────────┐      ┌────────────────────────┐│
│  │   CONTROL PLANE      │      │      WORKER NODES      ││
│  │   (Master Nodes)     │      │                        ││
│  │                      │      │  ┌──────────────────┐  ││
│  │  ┌────────────────┐ │      │  │  Node 1          │  ││
│  │  │  API Server    │ │◄────►│  │  - kubelet       │  ││
│  │  └────────────────┘ │      │  │  - kube-proxy    │  ││
│  │                      │      │  │  - Container     │  ││
│  │  ┌────────────────┐ │      │  │    Runtime       │  ││
│  │  │  etcd          │ │      │  │  - Pods          │  ││
│  │  │  (Database)    │ │      │  └──────────────────┘  ││
│  │  └────────────────┘ │      │                        ││
│  │                      │      │  ┌──────────────────┐  ││
│  │  ┌────────────────┐ │      │  │  Node 2          │  ││
│  │  │  Scheduler     │ │      │  │  - kubelet       │  ││
│  │  └────────────────┘ │      │  │  - kube-proxy    │  ││
│  │                      │      │  │  - Container     │  ││
│  │  ┌────────────────┐ │      │  │    Runtime       │  ││
│  │  │  Controller    │ │      │  │  - Pods          │  ││
│  │  │  Manager       │ │      │  └──────────────────┘  ││
│  │  └────────────────┘ │      │                        ││
│  └──────────────────────┘      │  ┌──────────────────┐  ││
│                                 │  │  Node N          │  ││
│                                 │  │  ...             │  ││
│                                 │  └──────────────────┘  ││
│                                 └────────────────────────┘│
└────────────────────────────────────────────────────────────┘
</code></pre><h4 id="42-control-plane-components-master">4.2。コントロール プレーン コンポーネント (マスター)</h4><p><strong>1。 API サーバー</strong> 🚪</p><ul><li>Kubernetes の「ゲートウェイ」_</li><li>すべての REST リクエストを処理_</li><li>認証と承認_</li><li>リクエストの検証と処理</li><li>etcd のフロントエンド_</li></ul><pre><code>kubectl → API Server → etcd
  ↑          ↓
  └──── Response
</code></pre><p><strong>2。 etcd_</strong> 💾</p><ul><li>Key-Value データベース</li><li>クラスター状態全体の保存_</li><li>真実の情報源</li><li>高可用性 (HA) setup)_</li><li>API サーバーのみが etcd_</li></ul><p><strong>3 と通信します。スケジューラ</strong> 📅</p><ul><li>Pod を実行するノードを決定</li><li>リソース、制約、アフィニティを考慮_</li><li>デプロイしない (kubelet)する)</li></ul><pre><code>Flow:
1. User tạo Pod
2. Scheduler xem Pods chưa assign
3. Chọn Node tốt nhất
4. Update Pod spec với nodeName
</code></pre><p><strong>4。コントローラーマネージャー_</strong> 🎮</p><ul><li>複数のコントローラーを実行_</li><li>_クラスター状態を監視_</li><li>目的の状態を達成するために変更を加える状態</li></ul><p><strong>重要なコントローラー:</strong></p><ul><li><strong>ノードコントローラー</strong>: ノードの健全性の監視</li><li><strong>_レプリケーションコントローラ_</strong>: ポッド番号が正しいことを確認してください</li><li><strong>エンドポイント コントローラ</strong>_: エンドポイント オブジェクトを設定</li><li><strong>ServiceAccount コントローラ</strong>: デフォルトを作成しますサービスアカウント_</li></ul><h4 id="43-worker-node-components">4.3.ワーカー ノード コンポーネント_</h4><p><strong>1。 kubelet</strong> 👷_</p><ul><li>各ノードでエージェントを実行_</li><li>API サーバーからポッド仕様を取得_</li><li>コンテナが実行されていることを確認 run_</li><li>_レポートノード/ポッドのステータスを API サーバーに送信</li><li>_liveness/readiness プローブを実行_</li></ul><p><strong>2。 kube-proxy_</strong> 🔀_</p><ul><li>ノードごとのネットワーク プロキシ_</li><li>ネットワーク ルールの維持_</li><li>Kubernetes サービスの実装抽象化</li><li>サービスの負荷分散</li><li>モード: iptables、IPVS、ユーザースペース_</li></ul><p><strong>3。コンテナランタイム</strong> 🐳</p><ul><li>コンテナを実行するソフトウェア</li><li>_Kubernetes CRI (コンテナ ランタイム インターフェイス) の実装</li><li>人気:<ul><li>containerd (推奨)</li><li>CRI-O</li><li>Docker (K8s 1.24 以降では非推奨)</li></ul></li></ul><h4 id="44-add-ons-optional-but-important">4.4。アドオン (オプションだが重要)</h4><p><strong>DNS</strong> (CoreDNS)</p><ul><li>サービス検出</li><li>サービス名の解決IP</li><li>各サービスには DNS 名があります</li></ul><p><strong>ダッシュボード</strong></p><ul><li>クラスター管理への Web UI_</li><li>視覚化リソース_</li></ul><p><strong>監視_</strong> (メトリクスサーバー)_</p><ul><li>リソースメトリクスの収集</li><li>CPU、メモリ使用法_</li><li>HPA (水平ポッドオートスケーラー) を有効にする</li></ul><p><strong>ロギング</strong></p><ul><li>EFK スタック (Elasticsearch、Fluentd、 Kibana)</li><li>集中ログ</li></ul><hr><h3 id="ph%E1%BA%A7n-5-kubernetes-ecosystem">_パート 5: KUBERNETES エコシステム</h3><h4 id="51-cncf-landscape">5.1。 CNCF ランドスケープ</h4><p>Kubernetes は CNCF エコシステムの一部です:</p><pre><code>┌─────────────────────────────────────────────┐
│         CNCF CLOUD NATIVE LANDSCAPE         │
├─────────────────────────────────────────────┤
│  Container Orchestration                    │
│  └─ Kubernetes ⭐                           │
│                                             │
│  Container Runtime                          │
│  └─ containerd, CRI-O                      │
│                                             │
│  Service Mesh                               │
│  └─ Istio, Linkerd, Consul                 │
│                                             │
│  Monitoring                                 │
│  └─ Prometheus, Grafana                    │
│                                             │
│  Logging                                    │
│  └─ Fluentd, Loki                          │
│                                             │
│  CI/CD                                      │
│  └─ Argo, Flux, Tekton                     │
│                                             │
│  Security                                   │
│  └─ Falco, OPA, Trivy                      │
└─────────────────────────────────────────────┘
</code></pre><h4 id="52-core-tools">5.2。コア ツール</h4><p><strong>パッケージ管理</strong></p><ul><li><strong>Helm</strong>: パッケージ マネージャーK8s</li><li><strong>カスタマイズ</strong>: 構成管理_</li></ul><p><strong>GitOps</strong></p><ul><li><strong>ArgoCD_</strong>: 宣言型 GitOps CD_</li><li><strong>Flux</strong>: GitOps ツールキット_</li></ul><p><strong>サービスメッシュ</strong></p><ul><li><strong>Istio</strong>: 完全なサービスメッシュ_</li><li><strong>_Linkerd</strong>: シンプル、軽量_</li></ul><p><strong>モニタリングと可観測性_</strong></p><ul><li><strong>Prometheus_</strong>_: メトリクス収集</li><li><strong>Grafana</strong>:ビジュアリゼーション</li><li><strong>Jaeger</strong>: 分散トレース_</li></ul><p><strong>セキュリティ</strong></p><ul><li><strong>Falco_</strong>: ランタイムセキュリティ</li><li><strong>OPA</strong>: ポリシー エンジン</li><li><strong>Trivy</strong>: 脆弱性ユーティリティスキャナ</li></ul><h4 id="53-managed-kubernetes-services">5.3。マネージド Kubernetes サービス</h4><p><strong>主要なクラウド プロバイダー:</strong></p><ul><li><strong>_AWS</strong>: EKS (Elastic Kubernetes)サービス)</li><li><strong>Google Cloud</strong>: GKE (Google Kubernetes Engine)</li><li><strong>Azure</strong>: AKS (Azure Kubernetes)サービス)</li><li><strong>IBM Cloud</strong>: IKS</li><li><strong>DigitalOcean</strong>: DOKS_</li><li><strong>Linode</strong>: LKE</li></ul><p><strong>ロイ便利:_</strong></p><ul><li>コントロールプレーンマネージド_</li><li>自動アップグレード_</li><li>クラウド サービスと統合</li><li>簡単なセットアップ_</li><li>コスト: 有給労働者のみノード_</li></ul><hr><h3 id="ph%E1%BA%A7n-6-kubernetes-concepts-quan-tr%E1%BB%8Dng">パート 6: KUBERNETES コンセプト担当者レポート</h3><h4 id="61-declarative-vs-imperative">6.1。宣言型と命令型</h4><p><strong>命令型 (古い方法):</strong></p><pre><code class="language-bash"># Nói K8s phải làm GÌ và NHƯ THẾ NÀO
kubectl run nginx --image=nginx
kubectl expose deployment nginx --port=80
kubectl scale deployment nginx --replicas=3
</code></pre><p><strong>宣言型 (方法K8s):</strong></p><pre><code class="language-yaml"># Nói K8s muốn KẾT QUẢ gì
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: nginx
        image: nginx
---
apiVersion: v1
kind: Service
metadata:
  name: nginx
spec:
  ports:
  - port: 80
</code></pre><pre><code class="language-bash">kubectl apply -f nginx.yaml
</code></pre><p><strong>宣言型が優れている理由:</strong></p><ul><li>✅ コードとしてのインフラストラクチャ</li><li>✅ バージョン管理フレンドリー_</li><li>✅冪等 (複数回実行 = 同じ結果)</li><li>✅ 自己修復</li><li>✅ 簡単なロールバック</li></ul><h4 id="62-desired-state-vs-current-state">6.2。望ましい状態と現在の状態</h4><pre><code>┌──────────────────────────────────────────────┐
│  KUBERNETES RECONCILIATION LOOP              │
├──────────────────────────────────────────────┤
│                                              │
│  ┌────────────────┐      ┌────────────────┐│
│  │ DESIRED STATE  │      │ CURRENT STATE  ││
│  │                │      │                ││
│  │ replicas: 3    │  VS  │ replicas: 2    ││
│  │ image: v2      │      │ image: v1      ││
│  └────────────────┘      └────────────────┘│
│          │                       │          │
│          └───────────┬───────────┘          │
│                      ↓                      │
│            ┌──────────────────┐             │
│            │   CONTROLLER     │             │
│            │   Takes Action   │             │
│            └──────────────────┘             │
│                      ↓                      │
│            ┌──────────────────┐             │
│            │  Start 1 Pod     │             │
│            │  Update 2 Pods   │             │
│            └──────────────────┘             │
└──────────────────────────────────────────────┘
</code></pre><p><strong>永続的なコントローラー:</strong></p><ol><li>現在の状態を監視</li><li>望ましい状態と比較状態</li><li>一致するアクションを実行</li><li>繰り返し(調整ループ)</li></ol><h4 id="63-labels-v%C3%A0-selectors">6.3.ラベルとセレクター</h4><p><strong>Labels</strong> = オブジェクトを整理するためのキーと値のペア_</p><pre><code class="language-yaml">metadata:
  labels:
    app: nginx
    tier: frontend
    environment: production
    version: v1.0
</code></pre><p><strong>Selectors_</strong> = 検索するクエリオブジェクト_</p><pre><code class="language-yaml">selector:
  matchLabels:
    app: nginx
    tier: frontend
</code></pre><p><strong>ユースケース:</strong></p><ul><li>サービスのポッド検索</li><li>デプロイメントの管理ポッド_</li><li>NetworkPolicy 適用ルール</li><li>クエリとフィルタリング</li></ul><hr><h3 id="ph%E1%BA%A7n-7-kubernetes-in-actionv%C3%AD-d%E1%BB%A5-th%E1%BB%B1c-t%E1%BA%BF">パート 7: 動作中の KUBERNETES - 実際の例TE</h3><h4 id="scenario-e-commerce-website">シナリオ: 電子商取引ウェブサイト</h4><p><strong>要件:_</strong></p><ul><li>フロントエンド: React アプリ (3)レプリカ)_</li><li>バックエンド API: Node.js (5 reプリカ、自動スケール)_</li><li>データベース: PostgreSQL (1 インスタンス、永続)</li><li>キャッシュ: Redis (3 レプリカ)</li><li>高可用性</li><li>ゼロダウンタイム更新_</li><li>トラフィックに基づく自動スケーリング_</li></ul><p><strong>_Kubernetes はこれを解決します:</strong></p><pre><code class="language-yaml"># Frontend Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
spec:
  replicas: 3
  selector:
    matchLabels:
      app: frontend
  template:
    metadata:
      labels:
        app: frontend
    spec:
      containers:
      - name: react-app
        image: myapp/frontend:v1.0
        ports:
        - containerPort: 3000
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "256Mi"
            cpu: "200m"

---
# Backend API with Auto-scaling
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend
spec:
  replicas: 5
  selector:
    matchLabels:
      app: backend
  template:
    metadata:
      labels:
        app: backend
    spec:
      containers:
      - name: api
        image: myapp/backend:v1.0
        ports:
        - containerPort: 8080

---
# Auto-scaler
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: backend-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: backend
  minReplicas: 5
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70

---
# Database with Persistent Storage
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
spec:
  serviceName: postgres
  replicas: 1
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
      - name: postgres
        image: postgres:14
        ports:
        - containerPort: 5432
        volumeMounts:
        - name: postgres-storage
          mountPath: /var/lib/postgresql/data
  volumeClaimTemplates:
  - metadata:
      name: postgres-storage
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 20Gi

---
# Load Balancer Service
apiVersion: v1
kind: Service
metadata:
  name: frontend-lb
spec:
  type: LoadBalancer
  selector:
    app: frontend
  ports:
  - port: 80
    targetPort: 3000
</code></pre><p><strong>Kubernetes自動:</strong></p><ul><li>✅ 3 フロントエンド + 5 バックエンド + 1 DB をデプロイ</li><li>✅ ノード間で分散</li><li>✅ 次の場合に再起動しますクラッシュ_</li><li>✅ トラフィック増加時にバックエンドを 5→20 にスケール</li><li>✅ ロードバランスリクエスト</li><li>✅ データベースの永続データ</li><li>✅ ローリング更新なしダウンタイム_</li></ul><hr><h2 id="%F0%9F%92%A1-key-takeaways">💡 主な要点_</h2><h3 id="%C4%91i%E1%BB%83m-quan-tr%E1%BB%8Dng-c%E1%BA%A7n-nh%E1%BB%9B">留意すべき重要なポイント:</h3><ol><li><strong>コンテナ オーケストレーションは次の問題を解決します。コンテナのスケーリングと管理_</strong><ul><li>自動スケーリング、自己修復、負荷分散</li><li>サービス検出、ローリングアップデート</li></ul></li><li><strong>Kubernetes業界標準</strong><ul><li>Google による実証済み</li><li>最大のコミュニティ</li><li>ベンダーagnostic_</li></ul></li><li><strong>K8s アーキテクチャには 2 つの主要部分があります:_</strong><ul><li>_コントロール プレーン: API サーバー、etcd、スケジューラ、コントローラ_</li><li>ワーカーノード: kubelet、kube-proxy、コンテナランタイム</li></ul></li><li><strong>宣言型 >命令的</strong><ul><li>望ましい状態を宣言</li><li>K8 が自動的に調整</li></ul></li><li><strong>Richエコシステム_</strong><ul><li>CNCF 景観</li><li>あらゆるニーズに対応するツール_</li><li>マネージド サービス利用可能</li></ul></li></ol><hr><hr><h2 id="%F0%9F%8E%AF-b%C3%A0i-t%E1%BA%ADp">🎯 演習_</h2><h3 id="b%C3%A0i-t%E1%BA%ADp-1-research-v%C3%A0-so-s%C3%A1nh">演習 1: 調査と比較比較</h3><p>学習する_</p><ul><li>_Kubernetes</li><li>_Docker Swarm</li><li>Amazon 間の詳細な比較 (200 ～ 300 ワード) を書きます。 ECS</li></ul><p>使いやすさ、拡張性、エコシステム、コストに重点を置きます。</p><h3 id="b%C3%A0i-t%E1%BA%ADp-2-mindmap">_演習 2: マインドマップ</h3><p>マインドマップを描く (ツールまたは手を使用できます)概要:</p><ul><li>Kubernetes アーキテクチャ</li><li>すべてのコンポーネントを含む</li><li>各コンポーネントの役割の説明</li></ul><h3 id="b%C3%A0i-t%E1%BA%ADp-3-use-case-analysis">演習 3: ユースケース分析_</h3><p>作業中のアプリケーションを選択するか、知っている:_</p><ul><li>現在のアーキテクチャについて説明_</li><li>K8s に導入する場合の図を描く</li><li>利点と課題のリスト</li></ul><h3 id="b%C3%A0i-t%E1%BA%ADp-4-video-learning">演習4: ビデオ学習</h3><p>ビデオ「100 秒でわかる Kubernetes」と「15 分でわかる Kubernetes」をご覧ください</p><ul><li>5 つの主要なポイントのまとめ</li><li>さらに詳しく学ぶために、理解できない点に注意してください詳細_</li></ul><hr><h2 id="%F0%9F%93%96-t%C3%A0i-li%E1%BB%87u-tham-kh%E1%BA%A3o">📖 参考文献_</h2><h3 id="b%C3%A0i-vi%E1%BA%BFt">記事を書く_</h3><ul><li><a href="https://kubernetes.io/docs/concepts/">Kubernetes 公式ドキュメント -概念_</a></li><li><a href="https://www.cncf.io/projects/kubernetes/">_CNCF Kubernetes の概要</a></li><li><a href="https://www.cncf.io/phippy/">子供向け図解ガイドKubernetes_</a></li></ul><h3 id="videos">ビデオ_</h3><ul><li><a href="https://www.youtube.com/watch?v=PH-2FfFD2PU">5 つの Kubernetes分</a></li><li><a href="https://www.youtube.com/watch?v=PziYflu8cB8">100 で説明する Kubernetes秒_</a></li></ul><h3 id="interactive">インタラクティブ_</h3><ul><li><a href="https://labs.play-with-k8s.com/">Kubernetes で遊ぶ_</a></li><li><a href="https://www.katacoda.com/courses/kubernetes">Katacoda Kubernetes のシナリオ_</a></li></ul><hr><h2 id="%E2%8F%AD%EF%B8%8F-b%C3%A0i-ti%E1%BA%BFp-theo">⏭️ 次の投稿_</h2><p><strong>レッスン 2: インストールと構成Kubernetes</strong></p><p>次のレッスンでは、</p><ul><li>Minikube と kubectl のインストール</li><li>最初のレッスンを開始しますクラスター_</li><li>Kubernetes ダッシュボードを探索_</li><li>基本的な kubectl コマンドを実行_</li><li>kubeconfig について_</li></ul><p><strong>_標準デバイス:_</strong></p><ul><li>4GB 以上の RAM を搭載したコンピューター_</li><li>Docker のインストール_</li><li>VirtualBox またはVMware</li></ul>