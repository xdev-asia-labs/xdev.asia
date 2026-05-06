---
id: 019c9617-fb80-70a6-9003-6e17ae121e1f
title: 'レッスン 11: Patroni コールバック'
slug: bai-11-patroni-callbacks
description: コールバック スクリプト (on_start、on_stop、on_role_change) を作成し、通知用のカスタム スクリプトを作成し、監視システムと統合します。
duration_minutes: 285
is_free: true
video_url: null
sort_order: 11
section_title: 'パート 3: クラスター管理'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: Patroni と etcd による PostgreSQL の高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4015" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4015)"/>

  <!-- Decorations -->
  <g>
    <circle cx="894" cy="252" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="688" cy="66" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="982" cy="140" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="776" cy="214" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="1070" cy="288" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="212" x2="1100" y2="292" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="242" x2="1050" y2="312" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1035.38268590218,198.5 1035.38268590218,225.5 1012,239 988.6173140978201,225.5 988.6173140978201,198.5 1012,185" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — レッスン 11</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11: Patroni コールバック__HTMLTAG_53___
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Patroni と PostgreSQL の高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: クラスター管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標</h2><p>このレッスンを終えると、次のことができるようになります:_</p><ul><li>Patroni コールバックとは何か、いつトリガーされるかを理解する__HTMLTAG_71___<li>_ライフサイクル イベント用のカスタム スクリプトを実装する</li><li>自動化されたコールバックを構成するタスク</li><li>ロール変更の処理 (プライマリ ↔ レプリカ)</li><li>通知と監視フックのセットアップ_</li><li>コールバックの失敗のトラブルシューティング</li></ul><h2 id="1-callbacks-overview">1。 Callbacks Overview</h2><h3 id="11-callbacks-l%C3%A0-g%C3%AC">1.1.コールバックとは何ですか?</h3><p><strong>コールバック</strong>&nbsp;= カスタム スクリプトは、クラスタの<strong>ライフサイクル イベント</strong>&nbsp;で Patroni によって実行されます。</p><p><strong>使用ケース_</strong>:_</p><ul><li>🔔&nbsp;<strong>通知</strong>: フェイルオーバーが発生したときにチームに警告するra</li><li>🔧&nbsp;<strong>Automation</strong>: DNS、ロードバランサー構成を更新</li><li>📊&nbsp;<strong>Monitoring</strong>: メトリクスをモニタリングにプッシュしますシステム</li><li>🚦&nbsp;<strong>トラフィック管理</strong>: アプリケーショントラフィックをリダイレクト</li><li>🔐&nbsp;<strong>セキュリティ</strong>: 認証情報のローテーション、更新ファイアウォール ルール</li><li>📝&nbsp;<strong>ロギング</strong>: カスタム監査ログ_</li></ul><h3 id="12-available-callbacks">1.2。 Available callbacks</h3><p>Patroni provides callback events:</p>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">_コールバック_</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">_トリガー</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">使用Case_</th></tr></thead><tbody><tr><td style="padding: 5px 10px;"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">on_start</code></td><td style="padding: 5px 10px;">PostgreSQL の開始前</td><td style="padding: 5px 10px;">開始前チェック、マウントボリューム_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">on_stop</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">PostgreSQL が停止する前に</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">クリーンアップ、通知アプリケーション_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">on_restart</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">PostgreSQL の再起動前</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">ログの再起動イベント</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">_on_reload_</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">PostgreSQL 構成のリロード後</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">構成を確認変更</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">on_role_change</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">役割の変更 (プライマリ ↔ レプリカ)</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">ほとんど重要_</strong><span>&nbsp;</span>- DNS、LB を更新</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">_pre_promote_</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">レプリカが昇格される前 primary_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Final checks before promotion_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">post_promote_</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">レプリカがプライマリに昇格した後_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">更新監視を送信アラート_</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="13-callback-execution-flow">1.3。コールバック実行フロー</h3><pre><code class="language-text">Example: Failover scenario

Old Primary crashes
       ↓
Patroni detects failure (after TTL expires)
       ↓
Patroni selects best replica (node2)
       ↓
pre_promote callback runs on node2
       ↓
PostgreSQL promoted to primary (pg_promote)
       ↓
post_promote callback runs on node2
       ↓
on_role_change callback runs on node2 (role=master)
       ↓
Other replicas detect new leader
       ↓
on_role_change callback runs on replicas (role=replica)
       ↓
Failover complete
</code></pre><h3 id="14-callback-environment-variables">1.4。コールバック環境変数</h3><p>Patroni は、<strong>環境変数</strong>&nbsp;をスクリプトに渡します:</p>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">変数</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">_説明</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">例___HTMLTAG_23 4___</tr></thead><tbody><tr><td style="padding: 5px 10px;"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">_PATRONI_ROLE</code></td><td style="padding: 5px 10px;">_後の現在の役割変更_</td><td style="padding: 5px 10px;"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">master</code>,<span>&nbsp;</span><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">replica__HTMLTAG_251 ___</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">PATRONI_SCOPE</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">クラスターname_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">postgres_</code></td></tr>__ _HTMLTAG_266___<td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">PATRONI_NAME</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Node name_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">node1</code></td></tr>___HTMLTA G_278___<td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">PATRONI_CLUSTER_NAME</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">クラスター名(エイリアス)</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">postgres</code></td></tr>___ HTMLTAG_290___<td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">PATRONI_VERSION</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Patroniバージョン_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">3.2.0</code></td></tr></tbody></table>
<!--kg-card-end: html-->
<p><code>on_role_change</code>:</p>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">_変数</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">_値</th></tr>___ HTMLTAG_318___<tbody><tr><td style="padding: 5px 10px;"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">PATRONI_NEW_ROLE</code></td><td style="padding: 5px 10px;">新規役割:<span>&nbsp;</span><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">マスター</code><span>&nbsp;</span>または<span>&nbsp;</span><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">レプリカ_</code></td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">PATRONI_OLD_ROLE</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">前の役割</td></tr></tbody></table>
<!--kg-card-end: html-->
<h2 id="2-configure-callbacks-in-patroni">2. Patroni</h2><h3 id="21-basic-configuration">2.1 でコールバックを構成します。基本構成</h3><p><strong>patroni.yml 内</strong>:</p><pre><code class="language-yaml">scope: postgres
name: node1

postgresql:
  callbacks:
    on_start: /var/lib/postgresql/callbacks/on_start.sh
    on_stop: /var/lib/postgresql/callbacks/on_stop.sh
    on_restart: /var/lib/postgresql/callbacks/on_restart.sh
    on_reload: /var/lib/postgresql/callbacks/on_reload.sh
    on_role_change: /var/lib/postgresql/callbacks/on_role_change.sh
</code></pre><p><strong>キーポイント</strong>:</p><ul><li>パスは必須です<strong>絶対_</strong></li>___HTM であることLTAG_366___スクリプトは<strong>実行可能</strong>&nbsp;(<code>chmod +x</code>)</li><li>所有である必要がありますby&nbsp;<strong>postgres</strong>&nbsp;user</li><li>完了する必要があります&nbsp;<strong>すぐに</strong>&nbsp;(<30 秒)</li><li>ゼロ以外の終了コード= コールバックが失敗しました (ログに記録されますが、操作はブロックされません)</li></ul><h3 id="22-create-callback-directory">2.2。コールバック ディレクトリ_</h3><pre><code class="language-bash"># On all 3 nodes
sudo mkdir -p /var/lib/postgresql/callbacks
sudo chown postgres:postgres /var/lib/postgresql/callbacks
sudo chmod 750 /var/lib/postgresql/callbacks
</code></pre><h2 id="3-implement-callback-scripts">3 を作成します。コールバック スクリプト</h2><h3 id="31-onstart-callback">3.1 を実装します。 on_start コールバック</h3><p><strong>ユースケース</strong>: 開始前検証、マウントチェック</p><p><strong>Script</strong>:&nbsp;<code>/var/lib/post gresql/callbacks/on_start.sh</code></p><pre><code class="language-bash">#!/bin/bash
# on_start.sh - Runs before PostgreSQL starts

set -e

LOG_FILE="/var/log/patroni/callbacks.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# Logging function
log() {
    echo "[$TIMESTAMP] [ON_START] $1" | tee -a "$LOG_FILE"
}

log "Starting PostgreSQL on $PATRONI_NAME"
log "Role: $PATRONI_ROLE"
log "Cluster: $PATRONI_SCOPE"

# Check disk space
DISK_USAGE=$(df -h /var/lib/postgresql | awk 'NR==2 {print $5}' | sed 's/%//')
if [ "$DISK_USAGE" -gt 90 ]; then
    log "ERROR: Disk usage is ${DISK_USAGE}% - critically high!"
    exit 1
fi
log "Disk usage: ${DISK_USAGE}%"

# Check if data directory is mounted
if ! mountpoint -q /var/lib/postgresql/18/data; then
    log "WARNING: Data directory is not a mount point"
fi

# Check network connectivity to etcd
for ETCD_HOST in 10.0.1.11 10.0.1.12 10.0.1.13; do
    if ! nc -zw3 "$ETCD_HOST" 2379 2&gt;/dev/null; then
        log "ERROR: Cannot reach etcd at $ETCD_HOST:2379"
        exit 1
    fi
done
log "etcd connectivity verified"

log "Pre-start checks passed"
exit 0
</code></pre><p><strong>スクリプトの作成_</strong>:</p><pre><code class="language-bash"># On all nodes
sudo tee /var/lib/postgresql/callbacks/on_start.sh &gt; /dev/null &lt;&lt; 'EOF'
#!/bin/bash
set -e
LOG_FILE="/var/log/patroni/callbacks.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
log() { echo "[$TIMESTAMP] [ON_START] $1" | tee -a "$LOG_FILE"; }

log "Starting PostgreSQL on $PATRONI_NAME (Role: $PATRONI_ROLE)"

# Disk space check
DISK_USAGE=$(df -h /var/lib/postgresql | awk 'NR==2 {print $5}' | sed 's/%//')
if [ "$DISK_USAGE" -gt 90 ]; then
    log "ERROR: Disk usage ${DISK_USAGE}% too high"
    exit 1
fi
log "Disk usage: ${DISK_USAGE}%"

log "Pre-start checks passed"
exit 0
EOF

sudo chmod +x /var/lib/postgresql/callbacks/on_start.sh
sudo chown postgres:postgres /var/lib/postgresql/callbacks/on_start.sh
</code></pre><h3 id="32-onstop-callback">3.2。 on_stop コールバック</h3><p><strong>ユースケース</strong>: 正常なシャットダウン通知</p><p><strong>Script</strong>:&nbsp;<code>/var/lib/ postgresql/callbacks/on_stop.sh</code></p><pre><code class="language-bash">#!/bin/bash
# on_stop.sh - Runs before PostgreSQL stops

set -e

LOG_FILE="/var/log/patroni/callbacks.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

log() {
    echo "[$TIMESTAMP] [ON_STOP] $1" | tee -a "$LOG_FILE"
}

log "Stopping PostgreSQL on $PATRONI_NAME"
log "Role: $PATRONI_ROLE"

# Notify monitoring system
if command -v curl &gt;/dev/null 2&gt;&amp;1; then
    curl -s -X POST http://monitoring.example.com/api/events \
        -H "Content-Type: application/json" \
        -d "{
            \"event\": \"postgresql_stop\",
            \"node\": \"$PATRONI_NAME\",
            \"role\": \"$PATRONI_ROLE\",
            \"timestamp\": \"$TIMESTAMP\"
        }" || log "WARNING: Failed to notify monitoring"
fi

log "PostgreSQL stop initiated"
exit 0
</code></pre><p><strong>スクリプトの作成</strong>:</p><pre><code class="language-bash">sudo tee /var/lib/postgresql/callbacks/on_stop.sh &gt; /dev/null &lt;&lt; 'EOF'
#!/bin/bash
set -e
LOG_FILE="/var/log/patroni/callbacks.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
log() { echo "[$TIMESTAMP] [ON_STOP] $1" | tee -a "$LOG_FILE"; }

log "Stopping PostgreSQL on $PATRONI_NAME (Role: $PATRONI_ROLE)"
exit 0
EOF

sudo chmod +x /var/lib/postgresql/callbacks/on_stop.sh
sudo chown postgres:postgres /var/lib/postgresql/callbacks/on_stop.sh
</code></pre><h3 id="33-onrolechange-callback-most-important">3.3。 on_role_change コールバック (最も重要!)</h3><p><strong>ユースケース</strong>: DNS、ロードバランサーの更新、送信通知。</p><p><strong>Script</strong>:&nbsp;<code>/var/lib/post gresql/callbacks/on_role_change.sh</code></p><pre><code class="language-bash">#!/bin/bash
# on_role_change.sh - Runs when role changes (master ↔ replica)

set -e

LOG_FILE="/var/log/patroni/callbacks.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

log() {
    echo "[$TIMESTAMP] [ROLE_CHANGE] $1" | tee -a "$LOG_FILE"
}

log "=========================================="
log "Role change detected on $PATRONI_NAME"
log "Cluster: $PATRONI_SCOPE"
log "Old role: ${PATRONI_OLD_ROLE:-unknown}"
log "New role: $PATRONI_ROLE"
log "=========================================="

# Function: Update DNS
update_dns() {
    local NEW_PRIMARY_IP="$1"
    
    log "Updating DNS record for primary.postgres.local -&gt; $NEW_PRIMARY_IP"
    
    # Example using nsupdate (BIND DNS)
    # nsupdate -k /etc/dns/Kpostgres.+157+12345.key &lt;&lt; EOF
    # server dns-server.local
    # zone postgres.local
    # update delete primary.postgres.local A
    # update add primary.postgres.local 60 A $NEW_PRIMARY_IP
    # send
    # EOF
    
    # Or using API (e.g., Route53, Cloudflare)
    # aws route53 change-resource-record-sets --hosted-zone-id Z1234 ...
    
    log "DNS update completed"
}

# Function: Update HAProxy
update_haproxy() {
    local NEW_PRIMARY_IP="$1"
    
    log "Notifying HAProxy about new primary: $NEW_PRIMARY_IP"
    
    # Use HAProxy stats socket
    # echo "set server postgres/primary addr $NEW_PRIMARY_IP" | \
    #     socat stdio /var/run/haproxy.sock
    
    log "HAProxy updated"
}

# Function: Send Slack notification
send_notification() {
    local MESSAGE="$1"
    local WEBHOOK_URL="https://hooks.slack.com/services/YOUR/WEBHOOK/URL"
    
    log "Sending notification: $MESSAGE"
    
    curl -s -X POST "$WEBHOOK_URL" \
        -H "Content-Type: application/json" \
        -d "{
            \"text\": \"🔄 PostgreSQL Role Change\",
            \"attachments\": [{
                \"color\": \"warning\",
                \"fields\": [
                    {\"title\": \"Node\", \"value\": \"$PATRONI_NAME\", \"short\": true},
                    {\"title\": \"Cluster\", \"value\": \"$PATRONI_SCOPE\", \"short\": true},
                    {\"title\": \"Old Role\", \"value\": \"${PATRONI_OLD_ROLE:-N/A}\", \"short\": true},
                    {\"title\": \"New Role\", \"value\": \"$PATRONI_ROLE\", \"short\": true},
                    {\"title\": \"Time\", \"value\": \"$TIMESTAMP\", \"short\": false}
                ]
            }]
        }" || log "WARNING: Notification failed"
}

# Main logic
case "$PATRONI_ROLE" in
    master)
        log "This node is now PRIMARY"
        
        # Get this node's IP
        NODE_IP=$(hostname -I | awk '{print $1}')
        log "Node IP: $NODE_IP"
        
        # Update DNS to point to new primary
        update_dns "$NODE_IP"
        
        # Update load balancer
        update_haproxy "$NODE_IP"
        
        # Send notification
        send_notification "Node $PATRONI_NAME promoted to PRIMARY"
        
        # Set marker file for applications
        touch /tmp/postgres_is_primary
        rm -f /tmp/postgres_is_replica
        
        log "Primary promotion tasks completed"
        ;;
        
    replica)
        log "This node is now REPLICA"
        
        # Remove primary marker
        rm -f /tmp/postgres_is_primary
        touch /tmp/postgres_is_replica
        
        # Send notification if demoted from primary
        if [ "${PATRONI_OLD_ROLE}" = "master" ]; then
            send_notification "Node $PATRONI_NAME demoted to REPLICA"
        fi
        
        log "Replica role tasks completed"
        ;;
        
    *)
        log "Unknown role: $PATRONI_ROLE"
        exit 1
        ;;
esac

log "Role change handling completed successfully"
exit 0
</code></pre><p><strong>作成本番環境対応スクリプト</strong>:</p><pre><code class="language-bash">sudo tee /var/lib/postgresql/callbacks/on_role_change.sh &gt; /dev/null &lt;&lt; 'EOF'
#!/bin/bash
set -e

LOG_FILE="/var/log/patroni/callbacks.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
log() { echo "[$TIMESTAMP] [ROLE_CHANGE] $1" | tee -a "$LOG_FILE"; }

log "=========================================="
log "Role change: $PATRONI_NAME"
log "Old role: ${PATRONI_OLD_ROLE:-unknown}"
log "New role: $PATRONI_ROLE"
log "=========================================="

case "$PATRONI_ROLE" in
    master)
        log "This node is now PRIMARY"
        NODE_IP=$(hostname -I | awk '{print $1}')
        log "Node IP: $NODE_IP"
        
        # TODO: Update DNS, load balancer, etc.
        # update_dns "$NODE_IP"
        
        touch /tmp/postgres_is_primary
        rm -f /tmp/postgres_is_replica
        ;;
        
    replica)
        log "This node is now REPLICA"
        rm -f /tmp/postgres_is_primary
        touch /tmp/postgres_is_replica
        ;;
        
    *)
        log "Unknown role: $PATRONI_ROLE"
        exit 1
        ;;
esac

log "Role change completed"
exit 0
EOF

sudo chmod +x /var/lib/postgresql/callbacks/on_role_change.sh
sudo chown postgres:postgres /var/lib/postgresql/callbacks/on_role_change.sh
</code></pre><h3 id="34-onrestart-callback">3.4。 on_restart コールバック</h3><p><strong>ユースケース</strong>: ログを再起動し、計画されたメンテナンスについて通知します。</p><pre><code class="language-bash">sudo tee /var/lib/postgresql/callbacks/on_restart.sh &gt; /dev/null &lt;&lt; 'EOF'
#!/bin/bash
set -e
LOG_FILE="/var/log/patroni/callbacks.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
log() { echo "[$TIMESTAMP] [ON_RESTART] $1" | tee -a "$LOG_FILE"; }

log "Restarting PostgreSQL on $PATRONI_NAME (Role: $PATRONI_ROLE)"
exit 0
EOF

sudo chmod +x /var/lib/postgresql/callbacks/on_restart.sh
sudo chown postgres:postgres /var/lib/postgresql/callbacks/on_restart.sh
</code></pre><h3 id="35-onreload-callback">3.5。 on_reload コールバック</h3><p><strong>使用例</strong>: 構成の変更が適用されたことを確認します。_</p><pre><code class="language-bash">sudo tee /var/lib/postgresql/callbacks/on_reload.sh &gt; /dev/null &lt;&lt; 'EOF'
#!/bin/bash
set -e
LOG_FILE="/var/log/patroni/callbacks.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
log() { echo "[$TIMESTAMP] [ON_RELOAD] $1" | tee -a "$LOG_FILE"; }

log "Configuration reloaded on $PATRONI_NAME"

# Verify critical settings
MAX_CONN=$(sudo -u postgres psql -t -c "SHOW max_connections;")
log "max_connections = $MAX_CONN"

exit 0
EOF

sudo chmod +x /var/lib/postgresql/callbacks/on_reload.sh
sudo chown postgres:postgres /var/lib/postgresql/callbacks/on_reload.sh
</code></pre><h3 id="36-create-log-directory">3.6。ログ ディレクトリ</h3><pre><code class="language-bash"># On all nodes
sudo mkdir -p /var/log/patroni
sudo chown postgres:postgres /var/log/patroni
sudo chmod 750 /var/log/patroni
</code></pre><h2 id="4-update-patroni-configuration">4 を作成します。 Patroni 構成</h2><h3 id="41-add-callbacks-to-patroniyml">4.1 を更新します。 patroni.yml にコールバックを追加</h3><p><strong>3 つのノードすべてで</strong>、 <code>/etc/patroni/patroni.yml</code>:</p><pre><code class="language-yaml">scope: postgres
namespace: /service/
name: node1  # node2, node3 for other nodes

restapi:
  listen: 0.0.0.0:8008
  connect_address: 10.0.1.11:8008  # Change per node

etcd3:
  hosts: 10.0.1.11:2379,10.0.1.12:2379,10.0.1.13:2379

bootstrap:
  dcs:
    ttl: 30
    loop_wait: 10
    retry_timeout: 10
    maximum_lag_on_failover: 1048576
    synchronous_mode: true
    synchronous_mode_strict: false
    
    postgresql:
      parameters:
        max_connections: 100
        shared_buffers: 256MB
        wal_level: replica
        max_wal_senders: 10
        max_replication_slots: 10

postgresql:
  listen: 0.0.0.0:5432
  connect_address: 10.0.1.11:5432  # Change per node
  data_dir: /var/lib/postgresql/18/data
  bin_dir: /usr/lib/postgresql/18/bin
  
  authentication:
    replication:
      username: replicator
      password: replicator_password
    superuser:
      username: postgres
      password: postgres_password
  
  parameters:
    unix_socket_directories: '/var/run/postgresql'
  
  # ✅ Add callbacks section
  callbacks:
    on_start: /var/lib/postgresql/callbacks/on_start.sh
    on_stop: /var/lib/postgresql/callbacks/on_stop.sh
    on_restart: /var/lib/postgresql/callbacks/on_restart.sh
    on_reload: /var/lib/postgresql/callbacks/on_reload.sh
    on_role_change: /var/lib/postgresql/callbacks/on_role_change.sh

tags:
  nofailover: false
  noloadbalance: false
  clonefrom: false
  nosync: false
</code></pre><h3 id="42-reload-patroni-configuration">4.2 を編集します。 Patroni 設定</h3><pre><code class="language-bash"># On all 3 nodes
sudo systemctl reload patroni

# Verify callbacks configured
patronictl show-config postgres
</code></pre><h2 id="5-test-callbacks">5 をリロードします。コールバックをテスト</h2><h3 id="51-test-onrestart">5.1。 _restart</h3><pre><code class="language-bash"># Restart a node
patronictl restart postgres node2

# Check logs
sudo tail -f /var/log/patroni/callbacks.log

# Expected output:
# [2024-11-25 10:30:15] [ON_RESTART] Restarting PostgreSQL on node2
</code></pre><h3 id="52-test-onreload">5.2 でテストします。 on_reload</h3><pre><code class="language-bash"># Reload configuration
patronictl reload postgres node2

# Check logs
sudo tail /var/log/patroni/callbacks.log

# Expected:
# [2024-11-25 10:32:45] [ON_RELOAD] Configuration reloaded on node2
</code></pre><h3 id="53-test-onrolechange-failover">5.3 でテストします。 on_role_change のテスト (フェイルオーバー)</h3><p><strong>⚠️ 重要</strong>: 非運用環境でテストしてください!</p><pre><code class="language-bash"># 1. Check current primary
patronictl list postgres
# node1 is Leader

# 2. Stop primary
sudo systemctl stop patroni  # On node1

# 3. Watch logs on node2 (will become new primary)
sudo tail -f /var/log/patroni/callbacks.log

# Expected output:
# [2024-11-25 10:35:10] [ROLE_CHANGE] ==========================================
# [2024-11-25 10:35:10] [ROLE_CHANGE] Role change: node2
# [2024-11-25 10:35:10] [ROLE_CHANGE] Old role: replica
# [2024-11-25 10:35:10] [ROLE_CHANGE] New role: master
# [2024-11-25 10:35:10] [ROLE_CHANGE] This node is now PRIMARY
# [2024-11-25 10:35:10] [ROLE_CHANGE] Node IP: 10.0.1.12
# [2024-11-25 10:35:10] [ROLE_CHANGE] Role change completed

# 4. Verify marker file
ls -la /tmp/postgres_is_*
# -rw-r--r-- 1 postgres postgres 0 Nov 25 10:35 /tmp/postgres_is_primary

# 5. Restart node1 (will rejoin as replica)
sudo systemctl start patroni  # On node1

# 6. Check node1 logs
sudo tail /var/log/patroni/callbacks.log
# [2024-11-25 10:36:30] [ROLE_CHANGE] Old role: master
# [2024-11-25 10:36:30] [ROLE_CHANGE] New role: replica
# [2024-11-25 10:36:30] [ROLE_CHANGE] This node is now REPLICA
</code></pre><h2 id="6-advanced-callback-examples">6。高度なコールバックの例_</h2><h3 id="61-dns-update-using-nsupdate">6.1。 nsupdate を使用した DNS 更新</h3><p><strong>前提条件</strong>: DDNS が有効になっている BIND DNS サーバー。</p><pre><code class="language-bash">#!/bin/bash
# Update DNS via nsupdate

update_dns() {
    local NEW_PRIMARY_IP="$1"
    local DNS_KEY="/etc/dns/Kpostgres.+157+12345.key"
    local DNS_SERVER="dns.example.com"
    local ZONE="postgres.local"
    local RECORD="primary.postgres.local"
    
    log "Updating DNS: $RECORD -&gt; $NEW_PRIMARY_IP"
    
    nsupdate -k "$DNS_KEY" &lt;&lt; EOF
server $DNS_SERVER
zone $ZONE
update delete $RECORD A
update add $RECORD 60 A $NEW_PRIMARY_IP
send
EOF
    
    if [ $? -eq 0 ]; then
        log "DNS updated successfully"
    else
        log "ERROR: DNS update failed"
        return 1
    fi
}

# In on_role_change.sh
if [ "$PATRONI_ROLE" = "master" ]; then
    NODE_IP=$(hostname -I | awk '{print $1}')
    update_dns "$NODE_IP"
fi
</code></pre><h3 id="62-haproxy-backend-update">6.2。 HAProxy バックエンドの更新</h3><p><strong>統計ソケット経由</strong>:</p><pre><code class="language-bash">update_haproxy() {
    local NEW_PRIMARY_IP="$1"
    local HAPROXY_SOCKET="/var/run/haproxy.sock"
    
    log "Updating HAProxy: primary backend -&gt; $NEW_PRIMARY_IP"
    
    echo "set server postgres-primary/node addr $NEW_PRIMARY_IP port 5432" | \
        socat stdio "$HAPROXY_SOCKET"
    
    echo "set server postgres-primary/node state ready" | \
        socat stdio "$HAPROXY_SOCKET"
    
    log "HAProxy backend updated"
}
</code></pre><h3 id="63-consul-service-registration">6.3。領事サービス登録</h3><pre><code class="language-bash">register_in_consul() {
    local ROLE="$1"
    local NODE_IP="$2"
    
    log "Registering in Consul: $PATRONI_NAME as $ROLE"
    
    curl -s -X PUT "http://consul.local:8500/v1/agent/service/register" \
        -H "Content-Type: application/json" \
        -d "{
            \"Name\": \"postgres-$ROLE\",
            \"ID\": \"postgres-$PATRONI_NAME\",
            \"Address\": \"$NODE_IP\",
            \"Port\": 5432,
            \"Tags\": [\"$ROLE\", \"patroni\"],
            \"Check\": {
                \"TCP\": \"$NODE_IP:5432\",
                \"Interval\": \"10s\",
                \"Timeout\": \"2s\"
            }
        }"
    
    log "Consul registration completed"
}

# Usage
NODE_IP=$(hostname -I | awk '{print $1}')
register_in_consul "$PATRONI_ROLE" "$NODE_IP"
</code></pre><h3 id="64-email-notification">6.4。電子メール通知_</h3><pre><code class="language-bash">send_email_alert() {
    local SUBJECT="$1"
    local BODY="$2"
    local RECIPIENT="ops-team@example.com"
    
    log "Sending email alert: $SUBJECT"
    
    echo "$BODY" | mail -s "$SUBJECT" "$RECIPIENT"
    
    log "Email sent to $RECIPIENT"
}

# In on_role_change.sh
if [ "$PATRONI_ROLE" = "master" ]; then
    send_email_alert \
        "[ALERT] PostgreSQL Failover: $PATRONI_NAME promoted to PRIMARY" \
        "Cluster: $PATRONI_SCOPE
Node: $PATRONI_NAME
Old Role: ${PATRONI_OLD_ROLE}
New Role: $PATRONI_ROLE
Time: $TIMESTAMP

Action required: Verify cluster health"
fi
</code></pre><h3 id="65-slackteams-webhook">6.5。 Slack/Teams Webhook</h3><p><strong>詳細な Slack 通知</strong>:</p><pre><code class="language-bash">send_slack_alert() {
    local WEBHOOK_URL="https://hooks.slack.com/services/YOUR/WEBHOOK/URL"
    local COLOR="$1"  # good, warning, danger
    local TITLE="$2"
    local MESSAGE="$3"
    
    curl -s -X POST "$WEBHOOK_URL" \
        -H "Content-Type: application/json" \
        -d "{
            \"username\": \"Patroni Monitor\",
            \"icon_emoji\": \": database:\",
            \"attachments\": [{
                \"color\": \"$COLOR\",
                \"title\": \"$TITLE\",
                \"text\": \"$MESSAGE\",
                \"fields\": [
                    {\"title\": \"Cluster\", \"value\": \"$PATRONI_SCOPE\", \"short\": true},
                    {\"title\": \"Node\", \"value\": \"$PATRONI_NAME\", \"short\": true},
                    {\"title\": \"Old Role\", \"value\": \"${PATRONI_OLD_ROLE:-N/A}\", \"short\": true},
                    {\"title\": \"New Role\", \"value\": \"$PATRONI_ROLE\", \"short\": true},
                    {\"title\": \"Timestamp\", \"value\": \"$TIMESTAMP\", \"short\": false}
                ],
                \"footer\": \"PostgreSQL HA\",
                \"footer_icon\": \"https://www.postgresql.org/media/img/about/press/elephant.png\"
            }]
        }"
}

# Usage
if [ "$PATRONI_ROLE" = "master" ]; then
    send_slack_alert "warning" \
        "🚨 Failover Event" \
        "Node $PATRONI_NAME has been promoted to PRIMARY"
fi
</code></pre><h3 id="66-metrics-push-to-monitoring">6.6。メトリクスはモニタリングにプッシュ_</h3><p><strong>Prometheus Pushgateway にプッシュ</strong>:_</p><pre><code class="language-bash">push_metrics() {
    local PUSHGATEWAY="http://pushgateway.local:9091"
    local JOB="patroni_callbacks"
    
    log "Pushing metrics to Prometheus"
    
    cat &lt;&lt; EOF | curl -s --data-binary @- "$PUSHGATEWAY/metrics/job/$JOB/instance/$PATRONI_NAME"
# TYPE patroni_role_change counter
# HELP patroni_role_change Number of role changes
patroni_role_change{cluster="$PATRONI_SCOPE",node="$PATRONI_NAME",new_role="$PATRONI_ROLE"} 1

# TYPE patroni_role_change_timestamp gauge
# HELP patroni_role_change_timestamp Timestamp of last role change
patroni_role_change_timestamp{cluster="$PATRONI_SCOPE",node="$PATRONI_NAME"} $(date +%s)
EOF
    
    log "Metrics pushed"
}
</code></pre><h2 id="7-callback-best-practices">7。コールバックのベスト プラクティス_</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>_コールバックを高速に保つ</strong><ul><li>10 ～ 30 秒以内に完了</li><li>Longタスク → バックグラウンド ジョブ</li></ul></li><li><strong>適切なログを使用_</strong><ul><li>すべてのアクションをログに記録</li><li>タイムスタンプを含める_</li><li>_回転ログ_</li></ul></li><li><strong>_エラーを適切に処理</strong><ul><li>使用<code>set -e</code>&nbsp;慎重に</li><li>エラーをキャッチ、ログに記録、続行</li><li>ゼロ以外の終了 = 警告、失敗ではない</li></ul></li><li><strong>テスト徹底的に_</strong><ul><li>ステージングでテスト</li><li>すべてのシナリオをシミュレーション_</li><li>べき等性を検証_</li></ul></li><li><strong>_Makeスクリプト冪等_</strong><ul><li>安全に複数回実行可能</li><li>変更前に確認</li></ul></li><li><strong>_絶対値を使用パス_</strong><ul><li>PATH に依存しない</li><li>フルパスを指定</li></ul></li><li><strong>安全資格情報_</strong><ul><li>パスワードをハードコードしない_</li><li>環境変数またはシークレットマネージャーを使用_</li></ul></li><li><strong>_コールバックを監視する実行_</strong><ul><li>失敗時のアラート</li><li>実行時間の追跡_</li></ul></li></ol><h3 id="%E2%9D%8C-dont">❌しないでください_</h3><ol><li><strong>長時間ブロックしないでください</strong><ul><li>Patroni はコールバックを待ちます_</li><li>遅延が長い → 遅くなるフェイルオーバー_</li></ul></li><li><strong>フェイルオーバー中にネットワークに依存しない_</strong><ul><li>ネットワークが分割される可能性があります</li><li>フォールバックありメカニズム_</li></ul></li><li><strong>コールバックを不必要に失敗させない</strong><ul><li>通知が失敗しても0を終了</li><li>エラーをログに記録するが続行</li></ul></li><li><strong>実行しないコールバック内のデータベース クエリ_</strong><ul><li>_PostgreSQL の準備ができていない可能性があります</li><li>デッドロックが発生する可能性があります</li></ul></li><li><strong>PostgreSQL を変更しないでください設定_</strong><ul><li>Patroni に設定を管理させる_</li><li>Patroni のパラメータを使用</li></ul></li><li><strong>インタラクティブを使用しないコマンド_</strong><ul><li>ユーザー入力なし</li><li>無人で実行する必要があります_</li></ul></li></ol><h2 id="8-troubleshoot-callback-issues">8。コールバックの問題のトラブルシューティング</h2><h3 id="81-callback-not-executing">8.1。コールバックが実行されていません_</h3><p><strong>Check</strong>:</p><pre><code class="language-bash"># 1. Verify script exists
ls -la /var/lib/postgresql/callbacks/on_role_change.sh

# 2. Check executable permissions
# Should be: -rwxr-xr-x postgres postgres
sudo chmod +x /var/lib/postgresql/callbacks/on_role_change.sh

# 3. Check ownership
sudo chown postgres:postgres /var/lib/postgresql/callbacks/on_role_change.sh

# 4. Verify path in patroni.yml
grep -A5 "callbacks:" /etc/patroni/patroni.yml

# 5. Check Patroni logs
sudo journalctl -u patroni -n 100 | grep -i callback
</code></pre><h3 id="82-callback-failing">8.2。コールバック失敗_</h3><p><strong>ログの確認</strong>:</p><pre><code class="language-bash"># Patroni logs
sudo journalctl -u patroni | grep "callback.*failed"

# Callback logs
sudo tail -f /var/log/patroni/callbacks.log

# Test script manually
sudo -u postgres /var/lib/postgresql/callbacks/on_role_change.sh
</code></pre><p><strong>共通問題</strong>:</p><ul><li><strong>構文エラー</strong>_:<code>bash -n script.sh</code>を実行します。 check_</li><li><strong>依存関係がありません</strong>: 必要なツール (curl、nc など) をインストールします</li><li><strong>許可が拒否されました</strong>: ファイル/ディレクトリを確認してください権限_</li><li><strong>タイムアウト</strong>: スクリプトに時間がかかりすぎます</li></ul><h3 id="83-callback-causing-slow-failover">8.3。フェールオーバーの遅延を引き起こすコールバック</h3><p><strong>コールバックの実行時間を測定</strong>:</p><pre><code class="language-bash"># Add timing to script
START_TIME=$(date +%s)

# ... your callback logic ...

END_TIME=$(date +%s)
DURATION=$((END_TIME - START_TIME))
log "Callback completed in ${DURATION} seconds"

# If DURATION &gt; 30, investigate and optimize
</code></pre><h2 id="9-production-callback-template">9。本番環境コールバック テンプレート</h2><p><strong>本番環境に対応した完全なテンプレート</strong>:</p><pre><code class="language-bash">#!/bin/bash
# Patroni callback template
# File: /var/lib/postgresql/callbacks/on_role_change.sh

set -euo pipefail  # Exit on error, undefined vars, pipe failures

# Configuration
readonly LOG_FILE="/var/log/patroni/callbacks.log"
readonly LOCK_FILE="/tmp/callback_role_change.lock"
readonly TIMEOUT=30
readonly SLACK_WEBHOOK="${SLACK_WEBHOOK_URL:-}"

# Logging function
log() {
    local LEVEL="$1"
    shift
    local MESSAGE="$*"
    local TIMESTAMP
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$TIMESTAMP] [$LEVEL] [ROLE_CHANGE] $MESSAGE" | tee -a "$LOG_FILE"
}

# Error handler
error_exit() {
    log "ERROR" "$1"
    cleanup
    exit 1
}

# Cleanup function
cleanup() {
    rm -f "$LOCK_FILE"
}

# Ensure only one instance runs
if ! mkdir "$LOCK_FILE" 2&gt;/dev/null; then
    log "WARN" "Another callback instance is running, exiting"
    exit 0
fi

trap cleanup EXIT

# Set timeout
timeout "$TIMEOUT" bash &lt;&lt; 'SCRIPT' || error_exit "Callback timed out after ${TIMEOUT}s"

log "INFO" "=========================================="
log "INFO" "Role change detected"
log "INFO" "Cluster: ${PATRONI_SCOPE:-unknown}"
log "INFO" "Node: ${PATRONI_NAME:-unknown}"
log "INFO" "Old role: ${PATRONI_OLD_ROLE:-unknown}"
log "INFO" "New role: ${PATRONI_ROLE:-unknown}"
log "INFO" "=========================================="

# Main logic
case "${PATRONI_ROLE:-}" in
    master)
        log "INFO" "Handling promotion to PRIMARY"
        
        # Get node IP
        NODE_IP=$(hostname -I | awk '{print $1}')
        log "INFO" "Node IP: $NODE_IP"
        
        # Update DNS (implement your logic)
        # update_dns "$NODE_IP" || log "WARN" "DNS update failed"
        
        # Update load balancer (implement your logic)
        # update_load_balancer "$NODE_IP" || log "WARN" "LB update failed"
        
        # Send notification
        if [ -n "$SLACK_WEBHOOK" ]; then
            curl -s -X POST "$SLACK_WEBHOOK" \
                -H "Content-Type: application/json" \
                -d "{\"text\": \"🚨 Failover: $PATRONI_NAME promoted to PRIMARY\"}" \
                || log "WARN" "Slack notification failed"
        fi
        
        # Set marker files
        touch /tmp/postgres_is_primary
        rm -f /tmp/postgres_is_replica
        
        log "INFO" "PRIMARY promotion tasks completed"
        ;;
        
    replica)
        log "INFO" "Handling demotion to REPLICA"
        
        # Remove primary marker
        rm -f /tmp/postgres_is_primary
        touch /tmp/postgres_is_replica
        
        # Notify if demoted from primary
        if [ "${PATRONI_OLD_ROLE:-}" = "master" ]; then
            log "WARN" "Node demoted from PRIMARY to REPLICA"
            # Send alert
        fi
        
        log "INFO" "REPLICA tasks completed"
        ;;
        
    *)
        error_exit "Unknown role: ${PATRONI_ROLE:-unknown}"
        ;;
esac

log "INFO" "Callback completed successfully"
exit 0

SCRIPT
</code></pre><h2 id="10-lab-exercises">10。ラボ演習</h2><h3 id="lab-1-setup-basic-callbacks">ラボ 1: 基本的なコールバックのセットアップ</h3><p><strong>タスク</strong>:</p><ol><li>コールバック ディレクトリとスクリプト_</li><li>patroni.yml にコールバックを追加</li><li>Patroni をリロード_</li><li><code>patronictl でテストするrestart</code></li></ol><h3 id="lab-2-test-failover-callbacks">ラボ 2: フェールオーバー コールバックのテスト</h3><p><strong>タスク</strong>:</p><ol><li>コールバックの監視ログ:&nbsp;<code>tail -f /var/log/patroni/callbacks.log</code></li><li>プライマリの停止:&nbsp;<code>sudo systemctl stop patroni_</code></li><li>_Verify on_role_change新しいプライマリで実行</li><li>マーカー ファイルを確認します:&nbsp;<code>/tmp/postgres_is__*</code></li><li>古いプライマリを再起動します。レプリカとして再参加することを確認</li></ol><h3 id="lab-3-implement-slack-notifications">ラボ 3: Slack 通知の実装</h3><p><strong>タスク</strong>:</p><ol><li>Slack Webhook を取得するURL_</li><li>on_role_change.sh に通知を追加</li><li>フェイルオーバーをトリガーしてテスト</li><li>Slack で受信したメッセージを確認_</li></ol><h3 id="lab-4-measure-callback-performance">ラボ 4: コールバックを測定するパフォーマンス_</h3><p><strong>タスク</strong>:</p><ol><li>すべてのコールバックにタイミングを追加_</li><li>さまざまなイベント（再起動、再読み込み、フェイルオーバー)_</li><li>コールバック実行時間の分析</li><li>遅いコールバックの最適化_</li></ol><h2 id="11-t%E1%BB%95ng-k%E1%BA%BFt">11。概要</h2><h3 id="key-takeaways">重要なポイント</h3><p>✅&nbsp;<strong>コールバック</strong>&nbsp;= ライフサイクル時のカスタム自動化events</p><p>✅&nbsp;<strong>on_role_change</strong>&nbsp;= フェイルオーバー自動化のための最も重要なコールバック</p><p>✅&nbsp;<strong>コールバックを維持するfast</strong>(<30 秒) クイック フェイルオーバー用</p><p>✅&nbsp;<strong>すべてをログに記録</strong>&nbsp;デバッグ</p><p>✅&nbsp;<strong>本番前に徹底的にテスト</strong>&nbsp;本番前</p><p>✅&nbsp;<strong>エラーを適切に処理_</strong>&nbsp;- しないブロック操作__HTMLTAG_814__HTMLTAG_815___一般的な使用例</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">コールバック</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">共通アクション_</th></tr></thead><tbody><tr><td style="padding: 5px 10px;"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">on_start_</code></td><td style="padding: 5px 10px;">プリフライトチェック、マウント確認_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">on_stop</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">クリーンアップ、通知_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">on_role_change</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">DNS、LB を更新、送信アラート_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">再起動時</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">ログのメンテナンスイベント_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">_on_reload</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">構成変更の確認</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="architecture-hi%E1%BB%87n-t%E1%BA%A1i">現在のアーキテクチャ___HTMLTAG_872__CODEBLOCK_27___<h3 id="chu%E1%BA%A9n-b%E1%BB%8B-cho-b%C3%A0i-12">レッスン 12 の準備____HTMLTAG_874__HTMLTAG_875___レッスン 12 では<strong>Patroni REST について説明しますAPI</strong>:</p><ul><li>ヘルスチェックエンドポイント</li><li>クラスターステータスクエリ_</li><li>API経由の構成管理</li><li>負荷との統合バランサー</li><li>モニタリングとメトリクス</li></ul>