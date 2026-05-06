---
id: 019e1a00-aa01-7001-c001-k8sha001204
title: 'レッスン 49: トラブルシューティング ガイド'
slug: bai-49-troubleshooting-guide
description: 'K8s 運用の​​系統的なトラブルシューティング: ポッドの問題、ネットワーキング、ストレージ、パフォーマンス、コントロール プレーン、一般的なエラー、診断ツール。'
duration_minutes: 150
is_free: true
video_url: null
sort_order: 49
section_title: 'パート 12: 生産業務とキャップストーン プロジェクト'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-54" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-54)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1000" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="150" x2="1100" y2="230" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="180" x2="1050" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="921.650635094611,87.5 921.650635094611,112.5 900,125 878.349364905389,112.5 878.349364905389,87.5 900,75" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — レッスン 49</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 49: トラブルシューティング ガイド</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 12: 制作オペレーションとキャップストーン プロジェクト</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_66___
<ul>
<li>✅ 体系的なトラブルシューティング方法</li>
<li>✅ ポッドのトラブルシューティング (CrashLoopBackOff、保留中、OOM)</li>
<li>✅ ネットワークの問題 (DNS、サービス検出、接続)</li>
<li>✅ ストレージの問題 (PV/PVC、マウント エラー)</li>
<li>✅ コントロール プレーンのトラブルシューティング__HTMLTAG_77___
<li>✅ 必須の診断ツール</li>
</ul>

<hr>

<h2 id="phan-1-methodology">パート 1: トラブルシューティング方法</h2>

___コードブロック_0___

<hr>

<h2 id="phan-2-pod">パート 2: ポッドのトラブルシューティング</h2>

___コードブロック_1___

___コードブロック_2___

<hr>

<h2 id="phan-3-network">パート 3: ネットワークのトラブルシューティング</h2>

___コードブロック_3___

<hr>

<h2 id="phan-4-storage">パート 4: ストレージのトラブルシューティング</h2>

___コードブロック_4___

<hr>

<h2 id="phan-5-control-plane">パート 5: コントロール プレーンのトラブルシューティング</h2>

___コードブロック_5___

<hr>

<h2 id="phan-6-common-errors">パート 6: 一般的なエラーのクイック リファレンス</h2><!--kg-card-begin: html-->
<table>
<thead>
<tr><th>エラー</th><th>一般的な原因</th><th>簡単な修正</th></tr>
</thead>
<tbody>
<tr><td>ImagePullBackOff</td><td>画像名/タグが間違っています、プルシークレットがありません_</td><td>画像を確認し、画像PullSecretsを追加してください</td></tr>
<tr><td>CrashLoopBackOff</td><td>アプリのクラッシュ、env/config の欠落</td><td>ログの確認 --previous_</td></tr>
<tr><td>_保留中</td><td>リソースが不足しています。一致するノードがありません</td><td>イベント、ノード容量を確認してください_</td></tr>
<tr>___HTMLTAG_137__OOM強制終了</td><td>メモリ制限を超えました</td><td>制限を増やすか、リークを修正してください_</td></tr>
<tr><td>CreateContainerConfigError</td><td>ConfigMap/Secretが見つかりません</td><td>参照リソースが存在することを確認してください</td></tr>
<tr><td>エビクト_</td><td>ノードのディスク/メモリの負荷</td><td>ノードのクリーンアップ、リソースの増加_</td></tr>
<tr><td>バックオフ再起動</td><td>Readiness プローブの失敗</td><td>プローブの構成、ポート、パスを確認してください_</td></tr>
<tr><td>接続が拒否されました</td><td>サービスの準備ができていません、ポートが間違っています</td><td>_エンドポイント、サービスポートを確認してください_</td></tr>
<tr><td>DNS 解決に失敗しました</td><td>CoreDNS がダウンしています、サービス名が間違っています_</td><td>coredns ポッド、FQDN を確認してください_</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>体系的なアプローチ</strong>: 特定→分離→診断→修正→検証</li>
<li><strong>kubectl description</strong>: K8s の問題に対する最初のツール</li>
<li><strong>イベント</strong>: kubectl イベントを取得 --sort-by=.lastTimestamp</li>
<li><strong>デバッグ コンテナ</strong>: ライブ診断用の一時的なコンテナ</li>
<li><strong>レイヤーごと</strong>: アプリ → コンテナ → ポッド → サービス → ノード → クラスター</li>
<li><strong>ドキュメント</strong>: すべての修正はランブック エントリになります</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">演習 1: トラブルシューティングの課題</h3>
<ul>
<li>Teammate は 5 つの壊れたデプロイメントを作成します (間違ったイメージ、欠落した構成マップなど)</li>
<li>kubectl__HTMLTAG_225___ のみを使用してそれぞれを診断して修正します
<li>それぞれの診断手順を文書化</li>
</ul><h3 id="bt2">演習 2: 診断ツールキット</h3>
<ul>
<li>netshoot、pg_isready、redis-cli を使用して「デバッグ ツールボックス」ポッドを作成</li>
<li>DNS、ネットワーク、ストレージのトラブルシューティングを実践</li>
<li>_個人的なトラブルシューティングのチートシートを作成</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_243___レッスン 50: Capstone プロジェクト — E コマース プラットフォーム</strong> では、エンドツーエンドのマイクロサービス システム全体を構築してデプロイします。</p>