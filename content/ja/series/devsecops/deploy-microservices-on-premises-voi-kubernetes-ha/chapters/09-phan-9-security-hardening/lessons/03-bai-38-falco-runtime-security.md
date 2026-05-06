---
id: 019e1a00-aa01-7001-c001-k8sha000903
title: 'レッスン 38: Falco ランタイムセキュリティ'
slug: bai-38-falco-runtime-security
description: Falco を導入して、ランタイム脅威検出、カスタム ルール、システムコール監視、コンテナ ドリフト検出、インシデント対応自動化を実現します。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 38
section_title: 'パート 9: セキュリティの強化'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1414" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1414)"/>

  <!-- Decorations -->
  <g>
    <circle cx="674" cy="132" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="748" cy="166" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="822" cy="200" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="896" cy="234" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="970" cy="268" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="152" x2="1100" y2="232" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="182" x2="1050" y2="252" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.3826859021799,138.5 975.3826859021799,165.5 952,179 928.6173140978201,165.5 928.6173140978201,138.5 952,125" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — レッスン 38</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 38: FALCO ランタイム セキュリティ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 9: セキュリティ強化</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_66___
<ul>
<li>✅ ランタイム セキュリティの概念 (シフトレフトとランタイム)</li>
<li>✅ Falco アーキテクチャ (eBPF ドライバー、ルール エンジン)</li>
<li>✅ K8 に Falco をデプロイ</li>
<li>✅ カスタム セキュリティ ルール__HTMLTAG_75___
<li>✅ Falcosidekick イベントのルーティング__HTMLTAG_77___
<li>✅ インシデント対応の自動化</li>
</ul>

<hr>

<h2 id="phan-1-architecture">パート 1: ファルコのアーキテクチャ</h2>

___コードブロック_0___

___コードブロック_1___

___コードブロック_2___

<hr>

<h2 id="phan-2-builtin-rules">パート 2: FALCO 組み込みルール</h2><!--kg-card-begin: html-->
<table>
<thead>
<tr><th>ルール</th><th>検出</th><th>優先度</th></tr>
</thead>
<tbody>
<tr><td>コンテナ内のターミナルシェル</td><td>kubectl exec -it</td><td>お知らせ</td></tr>
<tr><td>_以下に/etc</td><td>設定ファイルの変更_</td><td>エラー</td></tr>
<tr><td>_読み取り機密ファイル_</td><td>/etc/shadow、/etc/passwd</td><td>警告_</td></tr>
<tr><td>特権コンテナの起動</td><td>特権フラグ</td><td>クリティカル</td></tr>
<tr><td>バイナリ ディレクトリを変更</td><td>/usr/bin、/sbin に書き込み_</td><td>エラー</td></tr>
<tr><td>送信接続</td><td>予期しないネットワーク呼び出し</td><td>通知</td></tr>
<tr><td>仮想通貨マイニングの検出</td><td>既知のマイニングプロセス</td><td>重要_</td></tr>
<tr><td>_コンテナのドリフト_</td><td>新しい実行可能ファイルが画像にありません_</td><td>_エラー___HTMLTAG_162__HTMLTAG_163___
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-3-custom-rules">パート 3: カスタム FALCO ルール</h2>

___コードブロック_3___

<hr>

<h2 id="phan-4-response">パート 4: インシデント対応の自動化</h2>

___コードブロック_4___

___コードブロック_5___

<hr>

<h2 id="phan-5-falco-grafana">パート 5: ファルコの監視</h2>

___コードブロック_6___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>Falco</strong>: eBPF システムコール監視によるランタイム脅威検出</li>
<li><strong>組み込みルール</strong>: コンテナ内のシェル、ファイル書き込み、暗号マイニング</li>
<li><strong>カスタム ルール</strong>: 条件 + 出力形式、優先度</li>
<li><strong>Falcosidekick</strong>: イベントを Slack、Loki、PagerDuty にルーティング</li>
<li><strong>インシデント対応</strong>:侵害されたポッドを自動分離</li>
<li><strong>ドリフト検出</strong>: パッケージ マネージャーの実行 = コンテナ ドリフト</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">_演習 1: Falco のセットアップ__HTMLTAG_209___
<ul>
<li>eBPF ドライバーを使用して Falco をデプロイ__HTMLTAG_212___
<li>組み込みルールのトリガー (実行、ファイル書き込み)</li>
<li>Slack と Loki でアラートを表示</li>
</ul><h3 id="bt2">_演習 2: カスタム ルール__HTMLTAG_219___
<ul>
<li>データベース ポッドからの送信接続を検出するルールを作成</li>
<li>_パッケージ マネージャーの実行を検出するルールを作成__HTMLTAG_224___
<li>自動応答の構成: フラグが設定されたポッドの分離</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_232___レッスン 39: Harbor Registry とイメージ セキュリティ</strong> では、脆弱性スキャンを使用してプライベート コンテナ レジストリをセットアップします。</p>