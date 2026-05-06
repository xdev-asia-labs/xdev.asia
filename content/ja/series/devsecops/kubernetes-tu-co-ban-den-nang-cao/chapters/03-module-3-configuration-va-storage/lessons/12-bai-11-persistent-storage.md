---
id: 019c9618-0102-7000-8000-c1147ba22e11
title: 'レッスン 11: 永続ストレージと CSI'
slug: bai-11-persistent-storage-va-csi
description: PersistentVolume、PersistentVolumeClaim、StorageClasses を使用してストレージを管理します。 CSI ドライバーはツリー内プラグインを置き換える必要があります (K8s 1.31 は削除されました)。動的プロビジョニング、ボリューム スナップショット、新しい VolumeAttributesClass (K8s 1.29+)。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 11
section_title: 'モジュール 3: 構成とストレージ'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1172" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1172)"/>

  <!-- Decorations -->
  <g>
    <circle cx="721" cy="73" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="842" cy="174" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="963" cy="275" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1084" cy="116" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="705" cy="217" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="183" x2="1100" y2="263" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="213" x2="1050" y2="283" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1015.9089653438086,164 1015.9089653438086,202 983,221 950.0910346561914,202 950.0910346561914,164 983,145" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — レッスン 11</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11: 永続ストレージと CSI</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 3: 構成とストレージ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2>Kubernetes の永続ストレージと CSI__HTMLTAG_66___

<p>コンテナは一時的です。コンテナが再起動されるか、ポッドが別のノードで再スケジュールされると、内部のデータはすべて失われます。これは、データベース、メッセージ キュー、ファイル ストレージなどのステートフル ワークロードに関する深刻な問題です。 Kubernetes は、豊富なストレージ システムを使用してこの問題を解決します。Kubernetes 1.30 ～ 1.31 からは、ツリー内ストレージ プラグインが完全に削除され、__HTMLTAG_68___Container Storage Interface (CSI)</strong> 標準ドライバーに置き換えられました。</p>

<h2>ストレージのライフサイクル: 一時的なものから永続的なものへ__HTMLTAG_72___

<h3>emptyDir: 一時ストレージ</h3>

<p><code>emptyDir</code> は、ポッドの作成時に空のディレクトリを作成し、ポッドの存続期間中保持されます。ポッドを削除すると、データは完全に失われます。キャッシュ、一時ファイル、同じポッド内のコンテナ間でのデータ共有に適しています。</p>

___コードブロック_0___

<h3>hostPath: ノードローカルストレージ</h3>

<p><code>hostPath</code> は、ホスト ノード上のパスをコンテナにマウントします。データはコンテナの再起動時には存在しますが、Pod が別のノードにスケジュールされると失われます。 <strong>特別な理由 (システム デーモン、監視エージェント) がない限り、運用環境では使用しないでください</strong>。</p>

___コードブロック_1___

<h2>Persistent Volume と Persistent VolumeClaim</h2>

<h3>コアコンセプト</h3>

<p>Kubernetes は、</p> という 2 つの抽象化を通じて、__HTMLTAG_92___ストレージの提供</em> (管理者) と__HTMLTAG_94___ストレージの使用</em> (開発者) を分離します。<ul>
  <li><strong>Persistent Volume (PV)</strong>: 管理者によって作成された、または動的にプロビジョニングされたクラスターレベルのストレージ リソース。実際のストレージ (NFS 共有、クラウド ディスクなど) を表します</li>
  <li><strong>Persistent VolumeClaim (PVC)</strong>: ストレージに対するユーザーのリクエスト。開発者は、ストレージの場所を知らなくても、「ReadWriteOnce で 10Gi のストレージが必要です」と宣言するだけで済みます。</li>
</ul>

<h3>永続ボリューム定義</h3>

___コードブロック_2___

<h3>PersistentVolumeClaim</h3>

___コードブロック_3___

___コードブロック_4___

<h3>ポッドでの PVC の使用</h3>

___コードブロック_5___

<h2>アクセス モード_</h2>

<p>Kubernetes は 4 つのアクセス モードを定義し、ボリュームをマウントする方法を示します:</p>

<ul>
  <li><strong>_ReadWriteOnce (RWO)</strong>: 読み取り/書き込みをマウントできるノード。ブロック ストレージ (EBS、GCE PD) で最も一般的です。 K8s 1.22 以降、RWO は同じ読み取り/書き込みノード上で複数の Pod を許可します。</li>
  <li><strong>ReadOnlyMany (ROX)</strong>: 複数のノードが同時に読み取り専用でマウントできます。共有設定/データと一致します。</li>
  <li><strong>_ReadWriteMany (RWX)</strong>: 多くのノードが読み取り/書き込みをマウントします。 NFS、CephFS、Azure Files などのネットワーク ファイル システムが必要です。重要: ブロック ストレージ (EBS、GCE PD) は RWX をサポートしません。</li>
  <li><strong>ReadWriteOncePod (RWOP)</strong>: クラスター全体で 1 つのポッドのみをマウントできます。 RWO よりも強力 — ノード レベルだけでなく、ポッド レベルでの排他的アクセスを保証します。 CSI ドライバーのサポートが必要です。</li>
</ul>

<h2>ストレージクラス: 動的プロビジョニング</h2>

<h3>_StorageClass を使用する理由_</h3>

<p>管理者が手動で PV を作成する代わりに、StorageClass を使用すると <strong>動的プロビジョニング</strong> — PVC リクエストがあると Kubernetes が自動的に PV を作成します。管理者は、ストレージの「クラス」を定義するだけで済みます (例: ssd-fast、hdd-cheap、nfs-shared)。</p>

___コードブロック_6___

<h3>回収ポリシー</h3>

<ul>
  <li><strong>削除</strong>: PVC が削除されると、PV と基盤となるストレージも削除されます。デフォルトでは動的プロビジョニングが使用されます。一時的なワークロードに適しています。</li>
  <li><strong>_Retain</strong>: PVC が削除されると、PV は保持されます (解放状態)。管理者は手動で再利用する必要があります。データ保護が必要な運用データベースに適しています。</li>
  <li><strong>リサイクル</strong>: 非推奨のため、推奨されません。</li>
</ul>

<h2>CSI: コンテナ ストレージ インターフェイス</h2>

<h3>ツリー内プラグインはなぜ削除されたのですか?</h3>

<p>_以前、Kubernetes には、コア Kubernetes バイナリ (aws-ebs、gce-pd、azure-disk、cephfs、nfs など) に直接コンパイルされた多くのツリー内ストレージ プラグインがありました。これにより多くの問題が発生します:</p><ul>
  <li>ストレージ プラグインのバグにより、kube-apiserver/kubelet 全体がクラッシュする可能性があります</li>
  <li>Kubernetes リリースに関連するストレージ ドライバーのリリース サイクル</li>
  <li>プラグインの数が増えるとメンテナンスが困難</li>
  <li>ストレージ ベンダーは個別に修正を出荷できません</li>
</ul>

<p><strong>CSI (コンテナ ストレージ インターフェイス)</strong> は、Kubernetes とストレージ プロバイダー間のインターフェイスを標準化することで、これらの問題をすべて解決します。ドライバーは個別のポッドとして実行され、個別に更新できます。</p>

<h3>タイムラインのツリー内プラグインの削除__HTMLTAG_180___

<ul>
  <li><strong>K8s 1.26-1.28</strong>: 多くのツリー内プラグインが非推奨になりました</li>
  <li><strong>_K8s 1.29</strong>: ツリー内 NFS と多くのプラグインは非推奨に変換され、CSI が必要</li>
  <li><strong>_K8s 1.30</strong>: ツリー内 NFS プラグインが削除されました</li>
  <li><strong>K8s 1.31</strong>: ツリー内 CephFS、Ceph RBD プラグインが完全に削除__HTMLTAG_197___
  <li><strong>_K8s 1.32+</strong>: 残りのツリー内プラグインの削除を続行</li>
</ul>

<h3>人気の CSI ドライバー</h3>

<h4>クラウド プロバイダー</h4>

___コードブロック_7___

<h4>Longhorn: オープンソースの分散ストレージ__HTMLTAG_208___

___コードブロック_8___

___コードブロック_9___

<h4>Rook/Ceph: エンタープライズ ストレージ</h4>

___コードブロック_10___

<h2>ボリューム スナップショット</h2>

<h3>コンセプト__HTMLTAG_214___

<p>ボリューム スナップショットは、PVC のポイントインタイム スナップショットを作成できる K8s 1.20 の GA 機能です。スナップショット機能をサポートする CSI ドライバーとスナップショット コントローラーがインストールされている必要があります。</p>

<h3>スナップショット コントローラーをインストール</h3>

___コードブロック_11___

<h3>ボリュームスナップショットクラス</h3>

___コードブロック_12___

<h3>ボリュームスナップショットの作成</h3>

___コードブロック_13___

___コードブロック_14___

<h3>スナップショットから復元</h3>

___コードブロック_15___

___コードブロック_16___

<h2>VolumeAttributesClass (K8s 1.29+)</h2>

<h3>古いアプローチの問題</h3>

<p>以前は、ボリュームの IOPS またはスループットを変更する場合 (たとえば、gp3 3000 IOPS から 10000 IOPS に)、PVC を削除し、新しい StorageClass を作成し、新しい PVC を作成する必要がありました。これは複雑でダウンタイムを引き起こすプロセスです。</p>

<p><strong>VolumeAttributesClass (VAC)</strong> は、PVC を削除せずに IOPS やスループットなどの変更可能なボリューム属性を変更できる新しい API (Beta K8s 1.31) です。</p>

___コードブロック_17___

___コードブロック_18___

___コードブロック_19___

<h2>概要</h2>

<p>_Kubernetes のストレージは大幅に成熟し、K8s 1.30 ～ 1.31 以降、CSI が必須のプラットフォームになりました。注意すべき点:</p><ul>
  <li><strong>emptyDir</strong> (ポッド内の一時的な共有ストレージの場合)、__HTMLTAG_243___PVC/PV</strong> (永続データの場合)__HTMLTAG_245___
  <li><strong>CSI が必要</strong>: K8s 1.30 以降からはツリー内プラグインではなくなりました。CSI ドライバーに移行する必要があります</li>
  <li><strong>StorageClass</strong> と動的プロビジョニングが標準的な方法です。管理者がクラスを定義し、開発者は</li> を要求するだけです。
  <li><strong>Longhorn</strong> は、分散複製ストレージを備えたオンプレミス クラスターに適しています</li>
  <li><strong>_ボリューム スナップショット</strong> はポイントインタイムのバックアップ/復元を可能にし、CSI ドライバーとスナップショット コントローラーが必要</li>
  <li><strong>VolumeAttributesClass</strong> (K8s 1.29+ ベータ版) では、PVC</li> をクリアせずに IOPS/スループットを変更できます。
  <li>クロス AZ アタッチメントの問題を避けるために、クラウド ボリュームでは__HTMLTAG_267___WaitForFirstConsumer</code> バインディング モードを常に使用してください</li>
</ul>