---
id: 019c9618-0606-7000-8000-c1147ba22e16
title: 'レッスン 38: 実稼働クラスターのセットアップ'
slug: bai-38-production-cluster-setup
description: 実稼働 Kubernetes クラスター 2026 をセットアップします。containerd 2.0 を使用した kubeadm HA、cgroup v2、kube-proxy nftables モード、etcd バックアップ、Velero ディザスター リカバリー、マルチゾーン ノード プール、リソース クォータ。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 38
section_title: 'モジュール 9: クラスター管理'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-693" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-693)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1093" cy="269" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="1086" cy="262" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1079" cy="255" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1072" cy="248" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="1065" cy="241" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="239" x2="1100" y2="319" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="269" x2="1050" y2="339" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="968.444863728671,122 968.444863728671,156 939,173 909.555136271329,156 909.555136271329,122.00000000000001 939,105" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — レッスン 38</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 38: 本番クラスタのセットアップ__HTMLTAG_53___
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 9: クラスター管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2>🎯 レッスンの目的</h2><p>2026 年に実稼働グレードの Kubernetes クラスターをセットアップする方法を理解します。高可用性コントロール プレーン、containerd 2.0、cgroup v2、nftables、etcd バックアップ戦略、Velero を使用した災害復旧です。</p>

<h2>1.チェックリスト プロダクション クラスター 2026</h2>
<ul>
  <li><strong>コントロール プレーン HA</strong>: 3 または 5 のコントロール プレーン ノード (etcd クォーラムの奇数)</li>
  <li><strong>コンテナ ランタイム</strong>:containerd 2.0 + cgroup v2 (systemd ドライバー)</li>
  <li><strong>CNI</strong>: Cilium 1.17+ (eBPF、kube-proxy モードなし)</li>
  <li><strong>kube-proxy モード</strong>: nftables (IPVS は非推奨 1.35、iptables レガシー)</li>
  <li><strong>etcd</strong>: 外部 etcd クラスターまたはスタック、自動バックアップ付き</li>
  <li><strong>OS ノード</strong>: Ubuntu 24.04 LTS または Flatcar Linux (不変)</li>
  <li><strong>どこでもTLS</strong>: kubeadmによる自動証明書ローテーション</li>
</ul>

<h2>2.ノードの準備</h2>
___コードブロック_0___

<h2>3.コンテナー 2.0</h2> をインストールする
___コードブロック_1___

<h2>4. kubeadm、kubelet、kubectl</h2> をインストールする
___コードブロック_2___

<h2>5. kubeadm</h2> を使用してコントロール プレーンを初期化する
___コードブロック_3___
___コードブロック_4___

<h2>6.コントロール プレーン ノードへの参加 (HA)</h2>
___コードブロック_5___

<h2>7. etcd 自動バックアップ</h2>
___コードブロック_6___

<h2>8. Velero — 災害復旧</h2>
___コードブロック_7___

<h2>9。証明書管理</h2>
___コードブロック_8___

<h2>10.ノード プールとテイント</h2>
___コードブロック_9___<h2>概要</h2>
<ul>
  <li>コントロール プレーン HA: 3 ノード以上 + 外部ロード バランサー</li>
  <li>containerd 2.0 + cgroup v2 + systemd ドライバー: 運用標準 2026</li>
  <li>kube-proxy nftables モード: IPVS/iptables を置き換える</li>
  <li>Cilium CNI と kubeProxyReplacement: 完全なネットワーキング スタック</li>
  <li>etcd 自動バックアップ + Velero: 災害復旧戦略__HTMLTAG_131___
  <li>証明書のローテーション: kubeadm 証明書は期限切れになる前にすべて更新されます</li>
</ul>