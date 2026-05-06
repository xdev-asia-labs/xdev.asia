---
id: 019c9618-0301-7000-8000-c1147ba22e13
title: 'レッスン 18: ジョブと CRONJOBS'
slug: bai-18-jobs-va-cronjobs
description: ジョブによるバッチ処理 (単一、並列、インデックス付き、ワーク キュー)、タイムゾーンをサポートする CronJob (GA K8s 1.27)。依存ジョブのグループの JobSet (CNCF プロジェクト) — AI/ML トレーニング パイプラインに最適です。
duration_minutes: 75
is_free: false
video_url: null
sort_order: 18
section_title: 'モジュール 5: ワークロード管理'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9859" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9859)"/>

  <!-- Decorations -->
  <g>
    <circle cx="606" cy="88" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="612" cy="194" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="618" cy="40" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="624" cy="146" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="630" cy="252" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="88" x2="1100" y2="168" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="118" x2="1050" y2="188" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1025.2390923627308,166.5 1025.2390923627308,209.5 988,231 950.7609076372692,209.5 950.7609076372692,166.5 988,145" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — レッスン 18</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 18: ジョブと CRONJOBS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 5: ワークロード管理__HTMLTAG_60___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2>Kubernetes のジョブと Cron ジョブ__HTMLTAG_66___

<p>Kubernetes では、__HTMLTAG_68___Deployments</strong> および <strong>StatefulSets</strong> は継続的に実行されるワークロード向けに設計されており、常に一定数のポッドを維持しようとします。しかし、実際のタスクの多くは、データのバッチ処理、データベース移行の実行、ML モデルのトレーニング、大量の電子メールの送信など、永久に実行する必要はありません。ここで__HTMLTAG_72___ジョブ</strong>と__HTMLTAG_74___Cronジョブ</strong>が登場します。</p>

<h2>1.仕事とは何ですか?バッチ ワークロードと実行から完了まで</h2>

Kubernetes の <p>A <strong>Job</strong> は、特定のタスクを完了することを目的として 1 つ以上のポッドを作成します。デプロイメントとは異なり、ジョブは正常に完了した数を追跡します。十分なポッドが完了すると、ジョブは完了したとみなされます。</p>

<p>重要なジョブ機能:</p>
<ul>
  <li><strong>実行から完了まで</strong>: ポッドは実行を終了し、成功を意味するコード 0 で終了しました</li>
  <li><strong>自動再試行</strong>: ポッドが失敗した場合、ジョブは__HTMLTAG_93___backoffLimit</code></li>に従って新しいポッドを自動的に作成します。
  <li><strong>完了の追跡</strong>: ジョブは、必要な合計のうち何件が完了したかを把握します</li>
  <li><strong>並列性</strong>: 複数のポッドを並列実行してスループットを向上させる</li>
</ul>

<p>簡単なジョブの例 — 円周率の計算:</p>

___コードブロック_0___

<p>注 <code>restartPolicy: Never</code> — ジョブでは、__HTMLTAG_110___Never</code> または <code>OnFailure</code> のみを使用でき、使用されません<code>常に</code>.</p>

<h2>2.ジョブ完了モード</h2><p>Kubernetes は、さまざまなユースケースに適したジョブの 3 つの完了モードをサポートしています。</p>

<h3>2.1 インデックスなし (デフォルト)</h3>

<p>_ジョブは、十分な数の成功が完了すると完了します。ポッドには順序がありません。ポッドはすべて同じジョブを実行し、ジョブが成功するには十分な <code>completions</code> ポッドが必要です。</p>

___コードブロック_1___

<h3>2.2 インデックス付きジョブ</h3>

<p><strong>インデックス付きジョブ</strong> は非常に強力な機能です。各ポッドは、環境変数 <code>JOB_COMPLETION_INDEX</code> を介して、0 から <code>completions-1</code> までの一意のインデックスを受け取ります。これは__HTMLTAG_136___データ パーティショニング</strong> に最適です。各ポッドはデータの定義された部分を処理します。</p>

___コードブロック_2___

<p>Kubernetes は、変数 <code>JOB_COMPLETION_INDEX</code> を各ポッドに自動的に挿入します。ポッド 0 はパーティション 0 を処理し、ポッド 1 はパーティション 1 を処理します。 — ポッドが再起動しても重複することはありません。</p>

<h3>2.3 作業キュー</h3>

<p>ワーク キュー パターンでは、複数のポッドが 1 つのキュー (Redis、RabbitMQ、SQS) からタスクを取得します。キューが空になり、処理中のポッドがなくなると、ジョブは完了します。</p>

___コードブロック_3___

<h2>3.ジョブパラメータの詳細</h2>

<p>ジョブ パラメータを理解すると、各ユースケースに合わせて最適化するのに役立ちます:</p>

<ul>
  <li><strong>completions</strong>: 正常に完了する必要があるポッドの合計数。デフォルトは 1.</li>
  <li><strong>並列処理</strong>: 同時に実行されるポッドの最大数。デフォルトは 1.</li>
  <li><strong>backoffLimit</strong>: ジョブが失敗とマークされるまでの再試行回数。デフォルトは 6.</li>
  <li><strong>activeDeadlineSeconds</strong>: ジョブの実行が許可される最大時間 (秒)。超過 → ジョブは終了しました。</li>
  <li><strong>ttlSecondsAfterFinished</strong>: 完了から N 秒後にジョブ (およびポッド) を削除します。</li>
</ul>

___コードブロック_4___

<h2>4.ポッド障害ポリシー (K8s 1.31 以降)</h2>

<p>Kubernetes 1.31 以降、__HTMLTAG_176___ポッド障害ポリシー</strong> を使用すると、ポッドが失敗したときの詳細な動作を定義できます。再試行は常に推奨されるわけではありません。</p>

___コードブロック_5___

<p>__HTMLTAG_180___アクション</code>は使用できます:</p>
<ul>
  <li><strong>FailJob</strong>: ジョブ全体を直ちに停止し、失敗としてマーク</li>
  <li><strong>無視</strong>: backoffLimit にはカウントされません。新しいポッドを作成</li>
  <li><strong>Count</strong>: 通常どおり backoffLimit にカウントされます (デフォルトの動作)</li>
</ul>

<h2>5.ジョブ TTL — 自動クリーンアップ</h2>

<p>ジョブとそのポッドは、クリーンアップ メカニズムなしで完了後も永久に存続します。 <code>ttlSecondsAfterFinished</code> を使用して、</p> を自動的に削除します

___コードブロック_6___<p>既存のジョブにパッチを適用することもできます: <code>kubectl patch job old-job -p '{"spec":{"ttlSecondsAfterFinished":0}}'</code> — これにより、ジョブがすぐに削除されます。</p>

<h2>6. CronJob — タスクのスケジュール</h2>

<p><strong>CronJob</strong> は、使い慣れた cron 構文を使用して、定期的なスケジュールでジョブを自動的に作成します。</p>

___コードブロック_7___

<h3>6.1 CronJob タイムゾーンのサポート (GA K8s 1.27)</h3>

<p>K8s 1.27 より前は、すべての CronJob はコントローラーの UTC を使用していました。 K8s 1.27 以降、__HTMLTAG_216___timeZone</code> フィールドが GA になりました。IANA タイムゾーン データベースに従って任意のタイムゾーンを指定できます:</p>

___コードブロック_8___

<p>人気のタイムゾーン:</p>
<ul>
  <li><code>アジア/ホーチミン</code> — ベトナム (UTC+7)</li>
  <li><code>アジア/シンガポール</code> — シンガポール (UTC+8)</li>
  <li><code>アメリカ/ニューヨーク</code> — 米国東部</li>
  <li><code>ヨーロッパ/ロンドン</code> — 英国</li>
  <li><code>UTC</code> — 協定世界時</li>
</ul>

<h3>6.2 同時実行ポリシー</h3>

<p>重要な決定事項: 新しいジョブの実行がスケジュールされているときに古いジョブが完了していない場合はどうすればよいですか?</p>
<ul>
  <li><strong>許可</strong> (デフォルト): 古いジョブが実行中であっても新しいジョブを作成します。競合状態に注意してください</li>
  <li><strong>禁止</strong>: 新しいジョブをスキップします。古いジョブは引き続き続行されます</li>
  <li><strong>置換</strong>: 古いジョブを削除し、置き換える新しいジョブを作成</li>
</ul>

<h2>7. JobSet — 分散ジョブ用の CNCF プロジェクト</h2>

<p><strong>JobSet</strong> は、複数の依存ジョブを調整するために設計された CNCF プロジェクト (現在サンドボックス段階にあります) です。これは、__HTMLTAG_266___分散 ML トレーニング パイプライン__HTMLTAG_267___.</p> に最適なツールです。

<p>ジョブセット設定:</p>
___コードブロック_9___

<h3>7.1 分散 ML トレーニング用のジョブセット</h3>

<p>_シナリオ: パラメーター サーバー アーキテクチャを使用してモデルをトレーニングします。ポッドの 1 つのグループをパラメーター サーバー (勾配を保存) として、別のグループをワーカー (計算) として使用します。</p>

___コードブロック_10___

<h3>7.2 JobSet の優れた機能__HTMLTAG_276___<ul>
  <li><strong>_障害ポリシーの伝播</strong>: セット内のジョブが失敗した場合、ジョブセット全体が再起動または一緒に失敗する可能性があります。「孤立した」ジョブはありません__HTMLTAG_281___
  <li><strong>DNS ベースの通信</strong>: JobSet 内のジョブには、相互に通信するための DNS レコードが自動的に設定されます (<code>{jobset-name}-{job-name}-{job-index}-{pod-index}.{jobset-name}</code>)</li>
  <li><strong>_排他的トポロジ</strong>: 同じジョブのポッドが同じラック/ノード上でスケジュールされていることを確認します (ネットワーク遅延を削減します)</li>
  <li><strong>起動シーケンス__HTMLTAG_294___: PS の準備ができた後にのみワーカーを起動</li>
</ul>

<h3>7.3 ジョブセットの追跡</h3>

___コードブロック_11___

<h2>8。概要: いつ何を使用するか?</h2>

<ul>
  <li><strong>SimpleJob</strong>: 1 つのタスクを 1 回実行 — 基本的なジョブを使用</li>
  <li><strong>順序なしの並列処理</strong>: 完了 + 並列処理のあるインデックスなしジョブ</li>
  <li><strong>データのパーティショニング</strong>: インデックス付きジョブ — 各ポッドは指定されたパーティションを処理します</li>
  <li><strong>キューベースの処理</strong>: ワークキュー ジョブ + Redis/RabbitMQ</li>
  <li><strong>スケジュールされたタスク</strong>: タイムゾーンをサポートする CronJob</li>
  <li><strong>分散トレーニング/HPC</strong>: 複数ジョブ調整用のジョブセット</li>
</ul>

<p>Jobs と CronJob は、Kubernetes 上のすべてのバッチ処理システムの基盤です。完了モードと失敗ポリシーを理解すると、特に AI/ML ワークロードの人気が高まっている中で、信頼性の高いパイプラインを構築するのに役立ちます。</p>