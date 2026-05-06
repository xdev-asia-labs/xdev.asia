---
id: 019e1a00-aa01-7001-c001-k8sha000103
title: 'レッスン 3: Linux OS の準備とシステムチューニング'
slug: bai-3-chuan-bi-linux-os-va-system-tuning
description: Ubuntu 24.04/RHEL 9 をインストールし、K8 のカーネル パラメータ (net.bridge、ip_forward、inotify) を構成し、スワップをオフにし、chrony/NTP、ファイアウォール ルール、SSH 強化を構成し、K8 をインストールする前にすべてのノードを準備します。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 'パート 1: オンプレミスのプラットフォームとインフラストラクチャの設計'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-77" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-77)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1048" cy="254" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="996" cy="242" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="944" cy="230" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="892" cy="218" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="840" cy="206" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="154" x2="1100" y2="234" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="184" x2="1050" y2="254" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1029.1147367097487,189.5 1029.1147367097487,218.5 1004,233 978.8852632902513,218.5 978.8852632902513,189.5 1004,175" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — レッスン 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 3: Linux OS とシステム チューニングの準備</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: プラットフォームとオンプレミスのインフラストラクチャ設計</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_66___
<p>このレッスンを完了すると、次のことができるようになります:</p>
<ul>
<li>✅ すべてのノードに Ubuntu 24.04 LTS をインストールして更新します</li>
<li>✅ Kubernetes に必要なカーネル パラメーターを構成する</li>
<li>✅ スワップを永久にオフにし、その理由を理解する</li>
<li>✅ クラスター全体の NTP 同期をセットアップ__HTMLTAG_77___
<li>✅ SSH の強化とファイアウォール ルールの構成</li>
<li>✅ ホスト名、ホスト ファイル、DNS 解決を標準化</li>
</ul>

<hr>

<h2 id="phan-1-cai-dat-ubuntu-2404">パート 1: UBUNTU 24.04 LTS のインストール</h2>

<h3 id="11-tai-sao-ubuntu-2404">1.1. Ubuntu 24.04 LTS を選ぶ理由</h3>
<ul>
<li><strong>LTS (長期サポート):</strong> 12 年間サポート (Ubuntu Pro では 2036 年まで)</li>
<li><strong>カーネル 6.8+:</strong> eBPF (Cilium)、cgroup v2、io_uring</li> の優れたサポート
<li><strong>systemd 255+:</strong> cgroup v2 管理の改善</li>
<li><strong>幅広い採用:</strong> K8s、Ceph、CNCF ツールで徹底的にテスト済み</li>
</ul>

<p>⚠️ <strong>注:</strong> RHEL 9 / Rocky Linux 9 は企業にも適しています。このガイドでは Ubuntu を使用しますが、異なる場合は RHEL コマンドに注意してください。</p>

<h3 id="12-cai-dat-co-ban">1.2.基本設定</h3>
___コードブロック_0___

<hr>

<h2 id="phan-2-hostname-va-dns">パート 2: ホスト名と DNS 解決__HTMLTAG_114___

<h3 id="21-dat-hostname">2.1.各ノードにホスト名を設定</h3>
___コードブロック_1___

<h3 id="22-cau-hinh-hosts-file">2.2.すべてのノードで /etc/hosts を構成</h3>
___コードブロック_2___<p>💡 <strong>ヒント:</strong> 運用環境では、/etc/hosts の代わりに内部 DNS サーバー (CoreDNS または BIND) を使用します。このレッスンでは、わかりやすくするために /etc/hosts を使用します。</p>

<hr>

<h2 id="phan-3-kernel-parameters">パート 3: KUBERNETES のカーネルパラメータ</h2>

<h3 id="31-tai-sao-can-tuy-chinh-kernel">3.1.カーネルをカスタマイズする必要があるのはなぜですか?</h3>
<p>_Kubernetes では、いくつかのカーネル機能を有効にする必要があります:</p>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>パラメータ</th>
<th>値</th>
<th>理由</th>
</tr>
</thead>
<tbody>
<tr>
<td>net.bridge.bridge-nf-call-iptables__HTMLTAG_145___
<td>1</td>
<td>iptables ルールによるトラフィックのブリッジ (サービスに必要)</td>
</tr>
<tr>
<td>net.bridge.bridge-nf-call-ip6tables</td>
<td>1</td>
<td>ip6tables 経由の IPv6 ブリッジ トラフィック__HTMLTAG_157___
</tr>
<tr>
<td>net.ipv4.ip_forward</td>
<td>1</td>
<td>インターフェイス間でパケットを転送する (ポッド ネットワーキング)</td>
</tr>
<tr>
<td>net.ipv6.conf.all.forwarding</td>
<td>1</td>
<td>IPv6 転送 (デュアルスタックを使用している場合)</td>
</tr>
<tr>
<td>fs.inotify.max_user_instances</td>
<td>8192</td>
<td>多くのコンテナでは inotify (ファイル監視) が必要</td>
</tr>
<tr>
<td>fs.inotify.max_user_watches</td>
<td>524288</td>
<td>ユーザーごとの Inotify ウォッチ</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="32-cau-hinh-kernel-parameters">3.2.カーネルパラメータの構成</h3>
___コードブロック_3___

___コードブロック_4___

<hr>

<h2 id="phan-4-tat-swap">パート 4: スワップをオフにする</h2>

<h3 id="41-tai-sao-phai-tat-swap">4.1.スワップをオフにする必要があるのはなぜですか?</h3>
<p>Kubelet <strong>スワップを無効にする必要があります__HTMLTAG_203___ (ただし、K8s 1.28 以降はベータ版スワップ サポートを備えています)。理由:</p>
<ul>
<li>スワップによりコンテナに__HTMLTAG_207___予測不能な遅延</strong>が発生</li>
<li>K8s スケジューラは <strong>物理メモリ___HTMLTAG_212__HTMLTAG_213___ に基づいてリソースを計算します
<li>非表示のスワップ__HTMLTAG_215___OOMの問題</strong>、デバッグが困難</li>
<li>etcd とデータベースのスワップ時のパフォーマンスが非常に低下する__HTMLTAG_219___
</ul>

<h3 id="42-tat-swap-vinh-vien">4.2.スワップを完全にオフにする</h3>
___コードブロック_5___

<hr>

<h2 id="phan-5-ntp-time-sync">パート 5: NTP 時刻同期</h2><h3 id="51-tai-sao-ntp-quan-trong">5.1. NTP が非常に重要なのはなぜですか?</h3>
<ul>
<li><strong>etcd:</strong> リーダーの選出にはタイムスタンプを使用します。クロック スキューが必要です < 500ms</li>
<li><strong>TLS 証明書:</strong> 時間に基づいて検証し、時計が間違っています → 証明書が無効です</li>
<li><strong>ログの相関:</strong> ログのタイムスタンプはノード間で一致する必要があります</li>
<li><strong>_Ceph:</strong> MON クォーラム要求クロック スキュー < 50ms</li>
</ul>

<h3 id="52-cau-hinh-chrony">5.2. Chrony 構成 (NTP)</h3>
___コードブロック_6___

<hr>

<h2 id="phan-6-ssh-hardening">パート 6: SSH 強化</h2>

<h3 id="61-cau-hinh-ssh-an-toan">6.1.安全な SSH 構成</h3>
___コードブロック_7___

<h3 id="62-setup-ssh-key-auth">6.2. SSH キー認証のセットアップ</h3>
___コードブロック_8___

<hr>

<h2 id="phan-7-firewall-configuration">パート 7: ファイアウォール設定</h2>

<h3 id="71-ufw-cho-control-plane">7.1。コントロール プレーン ノードの UFW</h3>
___コードブロック_9___

<h3 id="72-ufw-cho-worker-nodes">7.2.ワーカー ノードの UFW</h3>
___コードブロック_10___

<p>💡 <strong>代替:</strong> 多くの実稼働環境では、UFW の代わりに nftables または iptables を直接使用します。 Cilium は、ノードレベルのファイアウォールをホスト ポリシーで置き換えることもできます。</p>

<hr>

<h2 id="phan-8-cac-tuy-chinh-khac">パート 8: その他のカスタマイズ</h2>

<h3 id="81-disable-unattended-upgrades">8.1。無人アップグレードを無効にする (本番環境)</h3>
___コードブロック_11___

<h3 id="82-cau-hinh-ulimits">8.2。 ulimits</h3> を構成する
___コードブロック_12___

<h3 id="83-disable-transparent-hugepages">8.3.透明な巨大ページを無効にする</h3>
___コードブロック_13___

<h3 id="84-cgroup-v2-verification">8.4。 cgroup v2 の検証</h3>
___コードブロック_14___

<hr>

<h2 id="phan-9-automation-script">パート 9: 自動化 — すべてのノードを準備するスクリプト</h2>

<h3 id="91-script-chuan-bi">9.1。ノード準備スクリプト (すべての K8s ノードで実行)</h3>
___コードブロック_15___

<h3 id="92-chay-script-tren-tat-ca-nodes">9.2.すべてのノードでスクリプトを実行</h3>
___コードブロック_16___

<hr>

<h2 id="phan-10-verification-checklist">パート 10: 検証チェックリスト</h2>

<h3 id="101-checklist-cho-moi-node">10.1。各ノードのチェックリスト</h3>
___コードブロック_17___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>カーネル モジュール</strong> K8 ポッド ネットワーキングにはオーバーレイと br_netfilter が必要</li>
<li><strong>ip_forward = 1</strong> により、ポッド間のトラフィックがノード</li> を通過できるようになります。
<li><strong>スワップは永久にオフにする必要があります</strong> — スワップがオンの場合、kubelet は起動を拒否します</li>
<li><strong>NTP 同期</strong> は etcd、TLS 証明書、および Ceph にとって重要です</li>
<li><strong>_SSH 強化:</strong> キーベースの認証のみ、パスワード ログインを無効にする</li>
<li><strong>自動化スクリプト</strong> は、すべてのノードを一貫して準備するのに役立ちます</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2><h3 id="bt1">演習 1: すべてのノードを準備する</h3>
<ul>
<li>7 つの VM (またはサーバー) すべてで prepare-k8s-node.sh を実行</li>
<li>各ノードで verify-node.sh を実行し、すべてのチェックが PASS</li> であることを確認します。
<li>1 つのマスターと 1 つのワーカーの verify-node.sh の結果のスクリーンショット</li>
</ul>

<h3 id="bt2">演習 2: NTP のベンチマーク</h3>
<ul>
<li>すべてのノード間のクロック オフセットを確認します: <code>chronycsources -v</code></li>
<li>オフセットを確保 < 1ms giữa tất cả nodes</li>
<li>NTP を中断し、時間を変更して、chrony の再同期にかかる時間を確認してください</li>
</ul>

<h3 id="bt3">_演習 3: RHEL 9 バリアント__HTMLTAG_344___
<ul>
<li>prepare-k8s-node.sh を RHEL 9 / Rocky Linux 9 用に書き直す</li>
<li>apt → dnf、ufw → firewalld を置換</li>
<li>1 台の VM でテストして確認</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_357___レッスン 4: Kubernetes API サーバーのロード バランサー</strong> では、keepalived + HAProxy をインストールして K8s API サーバーの仮想 IP を作成し、コントロール プレーン アクセスの HA を確保します。</p>