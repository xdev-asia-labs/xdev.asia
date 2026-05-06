---
id: 019e0a10-a101-7001-d001-f1a7f8000101
title: 'レッスン 1: HL7 の概要と医療データ標準の歴史'
slug: bai-1-gioi-thieu-hl7-va-lich-su-chuan-du-lieu-y-te
description: >-
  HL7 International とは何か、医療データ標準の開発の歴史 (HL7 v2、HL7
  v3/RIM、CDA)、医療データの標準化が必要な理由、医療における相互運用性の課題、以前の標準の制限に対処するために FHIR
  がどのように誕生したかについて学びます。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 1: HL7 と FHIR プラットフォーム'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基本から高度な医療データ標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6120" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6120)"/>

  <!-- Decorations -->
  <g>
    <circle cx="927" cy="231" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="754" cy="38" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="1081" cy="105" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="908" cy="172" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="735" cy="239" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="121" x2="1100" y2="201" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="151" x2="1050" y2="221" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="952.1769145362398,103 952.1769145362398,139 921,157 889.8230854637602,139 889.8230854637602,103.00000000000001 921,85" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🏗️ アーキテクチャ — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 1: HL7 の概要とデータ標準の歴史</tspan>
      <tspan x="60" dy="42">医療材料</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基本から高度な医療データ標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: HL7 と FHIR プラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tai-sao-can-chuan-du-lieu-y-te"><strong>1. なぜ医療データを標準化する必要があるのですか?</strong></h2>

<p>あなたが病院 A に行って検査を受け、2 型糖尿病と診断され、薬を処方されたと想像してください。来週、あなたは別の理由で病院 B に行きます。病院 B の医師は、病院 A のあなたの医療記録を見ることができません。これは、2 つのシステムが互いに「会話」することがまったくできないためです。</p>

<p>これは珍しい話ではありません。実は、これは、 <strong>最も一般的な問題</strong> 世界中のデジタルヘルス業界で。各病院と各クリニックは異なるソフトウェアを使用し、異なる方法でデータを保存し、情報を交換するための「共通言語」を持っていません。</p>

<h3 id="interoperability-la-gi"><strong>相互運用性とは何ですか?</strong></h3>

<p><strong>相互運用性</strong> 医療における (相互運用性) とは、さまざまな医療情報システムが次のことを行う能力です。</p>

<ul>
<li><strong>データ交換</strong> (交換) — システム間でデータを送受信します。</li>
<li><strong>データを理解する</strong> (解釈) — 受信システムはデータの正しい意味を理解できます。</li>
<li><strong>データ使用量</strong> (使用) — 受信したデータは臨床上の意思決定をサポートするために使用できます。</li>
</ul>

<p>相互運用性には 4 つのレベルがあります。</p>

<table>
<thead>
<tr><th>レベル</th><th>名前</th><th>説明</th><th>たとえば</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>基礎的な</td><td>2つのシステム間でデータを送受信する</td><td>検査結果のPDFファイルを送信</td></tr>
<tr><td>2</td><td>構造的</td><td>データは均一な構造を持っています</td><td>テスト結果をHL7 v2メッセージとして送信</td></tr>
<tr><td>3</td><td>セマンティクス</td><td>双方とも同じ意味を理解している</td><td>ICD-10 コード「E11.9」は「2 型糖尿病」として理解されます。</td></tr>
<tr><td>4</td><td>組織的</td><td>プロセス、ポリシー、法的サポートがある</td><td>この回覧により、病院間のデータ共有が可能になります</td></tr>
</tbody>
</table>

<h3 id="hau-qua-thieu-interoperability"><strong>相互運用性の欠如による影響</strong></h3>

<ul>
<li><p><strong>テストを繰り返す</strong> — 新しい病院では古い結果が得られなかったため、患者は再度検査を受けなければならなかった</p></li>
<li><p><strong>医療過誤</strong> — 医師は、患者がどのような薬にアレルギーがあるのか、どのような薬を服用しているのかを知りません。</p></li>
<li><p><strong>コストが増加する</strong> — 相互運用性の欠如により、米国は年間 300 億ドルを無駄にしていると推定されています</p></li>
<li><p><strong>遅延治療</strong> — 紙の転送書類を待たなければなりません</p></li>
<li><p><strong>医学研究には限界がある</strong> — 多施設データは集約できません</p></li>
</ul>

<h2 id="2-hl7-international"><strong>2. HL7 International — 医療データ標準を推進する組織</strong></h2>

<p><strong>HL7 (健康レベル 7)</strong> International は、年に設立された非営利の標準化団体です。 <strong>1987年</strong>, 本社は米国ミシガン州アナーバーにあります。 「レベル 7」という名前は、OSI モデルの 7 番目の層 (アプリケーション層)、つまりアプリケーションが相互に通信する層を指します。</p>

<p>HL7 インターナショナルにはさらに多くの機能があります <strong>会員数1,600名</strong> もっと言葉を <strong>55か国</strong>、医療ソフトウェア ベンダー、病院、政府機関、保険会社、研究機関が含まれます。</p>

<h3 id="cac-chuan-hl7-da-phat-trien"><strong>進化したHL7規格</strong></h3>

<p>HL7 は 35 年以上にわたり、時代のニーズに対応する多くのデータ標準を開発してきました。</p>

<h2 id="3-hl7-v2"><strong>3. HL7 バージョン 2 (v2) — 世界で最も人気のある標準</strong></h2>

<h3 id="lich-su-hl7-v2"><strong>歴史</strong></h3>

<p>HL7 v2 が今年最初にリリースされました <strong>1989年</strong> そしてすぐに世界で最も人気のある医療データ交換標準となりました。現在までのところ、推定 <strong>米国の病院の 95%</strong> そして <strong>35か国以上</strong> HL7 v2 を使用します。</p>

<h3 id="cau-truc-hl7-v2"><strong>HL7 v2 メッセージ構造</strong></h3>

<p>HL7 v2 は、パイプ区切り文字を含むテキスト形式を使用します。</p>

<pre><code>MSH|^~\&amp;|HIS|BVBACHMAI|LIS|LABXN|202603301000||ADT^A01|MSG00001|P|2.5
EVN|A01|202603301000
PID|1||MRN12345^^^BVBACHMAI||NGUYEN^VAN^A||19850315|M|||123 Le Loi^^HCM^^700000^VN
PV1|1|I|W4B^401^1|||||||||||||||VN001|||||||||||||||||||||||||202603300800
</code></pre>

<p>説明:</p>
<ul>
<li><p><strong>MSH</strong> — メッセージ ヘッダー: メッセージに関する情報 (送信元、宛先、タイプ、バージョン)</p></li>
<li><p><strong>EVN</strong> — イベント: メッセージをトリガーするイベント (A01 = 入院)</p></li>
<li><p><strong>PID</strong> — 患者識別: 患者情報</p></li>
<li><p><strong>PV1</strong> — 患者訪問: 訪問/入院に関する情報</p></li>
</ul>

<h3 id="uu-nhuoc-diem-hl7-v2"><strong>メリットとデメリット</strong></h3>

<table>
<thead>
<tr><th>利点</th><th>短所</th></tr>
</thead>
<tbody>
<tr><td>広く人気があり、支持されている</td><td>オプションが多すぎるため、それぞれの実装が異なります</td></tr>
<tr><td>シンプル、軽量</td><td>厳密なモデルはありません (各フィールドは異なる方法で使用できます)</td></tr>
<tr><td>数百万ものインターフェースが稼働中</td><td>下位互換性コンプレックス (v2.1 → v2.9)</td></tr>
<tr><td>豊富なサポートツール（Mirth、Rhapsody）</td><td>Web/REST をネイティブにサポートしない</td></tr>
</tbody>
</table>

<h2 id="4-hl7-v3-rim"><strong>4. HL7 バージョン 3 と参照情報モデル (RIM)</strong></h2>

<h3 id="tham-vong-v3"><strong>抜本的な標準化への野心</strong></h3>

<p>v2 の限界を認識し、HL7 の開発が開始されました <strong>v3</strong> 1990 年代後半以来、ヘルスケア分野全体のための統一された一貫したデータ モデルを作成するという野心を抱いてきました。</p>

<p>HL7 v3 の中心となるのは、 <strong>RIM（参照情報モデル）</strong> — 医療におけるすべての概念を記述する抽象オブジェクト モデル:</p>

<ul>
<li><p><strong>行為</strong> — 医療行為（診察、検査、処方など）</p></li>
<li><p><strong>エンティティ</strong> — エンティティ (患者、医師、薬剤、デバイスなど)</p></li>
<li><p><strong>役割</strong> — 役割 (患者、医療従事者、医療提供者...)</p></li>
<li><p><strong>参加</strong> — 参加する（誰がどの行動に参加するか）</p></li>
<li><p><strong>行為関係</strong> — アクション間の関係</p></li>
<li><p><strong>役割リンク</strong> — 役割間の関係</p></li>
</ul>

<h3 id="van-de-v3"><strong>HL7 v3 の問題</strong></h3>

<p>v3/RIM は理論上は非常にタイトですが、実際には次のようになります。</p>

<ul>
<li><p><strong>複雑すぎる</strong> — XML メッセージは扱いにくく、実装が困難です</p></li>
<li><p><strong>学習が困難</strong> — 導入するには RIM を深く理解する必要があります</p></li>
<li><p><strong>高コスト</strong> — 導入には膨大な時間とリソースがかかる</p></li>
<li><p><strong>導入率が低い</strong> — 純粋な HL7 v3 の導入に成功した組織はほとんどありません</p></li>
</ul>

<h2 id="5-cda"><strong>5. CDA (臨床文書アーキテクチャ)</strong></h2>

<p><strong>CDA</strong> 最も成功した HL7 v3 標準であり、臨床文書交換に広く使用されています。 CDA は XML を使用して、次のような医療文書を構造化します。</p>

<ul>
<li><p><strong>ヘッダー</strong> — メタデータ (患者、著者、施設、作成日)</p></li>
<li><p><strong>本体</strong> — 臨床内容、3 つのレベルで可能:
<ul>
<li><strong>レベル1</strong>：非構造化本文（PDF/テキスト）</li>
<li><strong>レベル2</strong>: 説明文のあるセクション</li>
<li><strong>レベル3</strong>: 完全に構造化されたコード化されたエントリ</li>
</ul></p></li>
</ul>

<p>CDA は以下の分野で広く使用されています。 <strong>C-CDA（統合CDA）</strong> 米国では有意義な使用/相互運用性の促進を目的として、ヨーロッパと日本の多くのプロジェクトで使用されています。</p>

<h3 id="han-che-cda"><strong>CDA の制限</strong></h3>

<ul>
<li><p>ジャストフィット <strong>文書ベースのやりとり</strong> （書類のやり取り）</p></li>
<li><p>サポートされていません <strong>データレベルの交換</strong> (各データフィールドをクエリ)</p></li>
<li><p>XML は複雑なので、RIM を理解する必要があります</p></li>
<li><p>最新のモバイル/Web アプリをサポートしていません</p></li>
</ul>

<h2 id="6-fhir-ra-doi"><strong>6. FHIR の誕生 — 相互運用性のための新しい「Fire」</strong></h2>

<h3 id="nguon-goc-fhir"><strong>起源</strong></h3>

<p>年 <strong>2011年</strong>、 <strong>グレアム・グリーブ</strong> HL7 の最もベテランの開発者の 1 人である彼は、まったく新しいアプローチを提案しています。 (v3 のように) すべてをモデル化しようとする代わりに、彼は次のように提案しました。</p>

<blockquote>
<p>「最新の Web テクノロジー (REST、JSON、OAuth) に基づいて、シンプルで動的に構成可能なリソースのセットを構築し、80/20 原則を適用して、20% の複雑さで 80% のユースケースを解決します。」</p>
</blockquote>

<p>名前 <strong>FHIR</strong> （「ファイア」と発音）はの略語です。 <strong>高速医療相互運用性リソース</strong>、目標を反映しています:</p>

<ul>
<li><p><strong>速い</strong> — すぐに実装でき、学びやすい</p></li>
<li><p><strong>ヘルスケア</strong> — 健康に重点を置く</p></li>
<li><p><strong>相互運用性</strong> — システム間の相互運用性</p></li>
<li><p><strong>リソース</strong> — 構成可能なデータの基本単位</p></li>
</ul>

<h3 id="cac-milestone-fhir"><strong>FHIR の開発マイルストーン</strong></h3>

<table>
<thead>
<tr><th>年</th><th>バージョン</th><th>優れた機能</th></tr>
</thead>
<tbody>
<tr><td>2012年</td><td>DSTU 0 (ドラフト)</td><td>最初のテストバージョン</td></tr>
<tr><td>2014年</td><td>DSTU1 (R1)</td><td>試用のための標準草案第 1 版</td></tr>
<tr><td>2015年</td><td>DSTU2(R2)</td><td>採用数が急増し始めた</td></tr>
<tr><td>2017年</td><td>STU3(R3)</td><td>試用用の標準、多数の新しいリソース</td></tr>
<tr><td>2019年</td><td>R4</td><td><strong>規範第一</strong> — 患者、観察、バンドル安定</td></tr>
<tr><td>2020年</td><td>R4B</td><td>R4の小規模アップデート</td></tr>
<tr><td>2023年</td><td><strong>R5</strong></td><td>現在のバージョン — トピックベースのサブスクリプション、多くの改善</td></tr>
<tr><td>～2026年以降</td><td>R6</td><td>開発中 — AI/ML 統合、ワークフローの改善</td></tr>
</tbody>
</table>

<h3 id="tai-sao-fhir-thanh-cong"><strong>なぜ FHIR は成功するのでしょうか?</strong></h3>

<ol>
<li><p><strong>Web標準に基づく</strong> — REST、JSON、XML、OAuth 2.0、HTTP</p></li>
<li><p><strong>実装が簡単</strong> — 多くの開発者は 1 日でインターフェイスを実行できるようになります</p></li>
<li><p><strong>仕様は自由です</strong> — ライセンス料なし</p></li>
<li><p><strong>多くのライブラリがサポートしています</strong> — HAPI FHIR (Java)、fhir.js、fhirclient.py、Firely (.NET)</p></li>
<li><p><strong>優れた拡張性</strong> — 拡張メカニズムにより、標準を破ることなく拡張が可能</p></li>
<li><p><strong>人間が判読できる</strong> — 各リソースには HTML の説明セクションがあります</p></li>
<li><p><strong>複数のパラダイムをサポート</strong> — REST、メッセージング、ドキュメント、サービス</p></li>
<li><p><strong>政府が必要とする</strong> — 米国 (ONC/CMS)、オーストラリア、英国、EU はすべて委任されています</p></li>
</ol>

<h2 id="7-so-sanh-cac-chuan-hl7"><strong>7. HL7 標準の比較</strong></h2>

<table>
<thead>
<tr><th>基準</th><th>HL7 v2</th><th>HL7 v3</th><th>CDA</th><th>FHIR</th></tr>
</thead>
<tbody>
<tr><td>誕生年</td><td>1989年</td><td>～2000年</td><td>2005年</td><td>2014年</td></tr>
<tr><td>フォーマット</td><td>パイプ区切りのテキスト</td><td>XML</td><td>XML</td><td>JSON、XML、RDF</td></tr>
<tr><td>データモデル</td><td>暗黙的 (緩い)</td><td>RIM (厳密)</td><td>RIM（文書）</td><td>リソース (コンポーザブル)</td></tr>
<tr><td>パラダイム</td><td>メッセージング</td><td>メッセージング</td><td>文書</td><td>REST + メッセージング + ドキュメント</td></tr>
<tr><td>実装の複雑さ</td><td>平均</td><td>非常に高い</td><td>高</td><td>低い</td></tr>
<tr><td>ウェブ/モバイルのサポート</td><td>いいえ</td><td>いいえ</td><td>制限事項</td><td>ネイティブ</td></tr>
<tr><td>養子縁組</td><td>非常に高い (レガシー)</td><td>低い</td><td>平均</td><td>早く増やす</td></tr>
<tr><td>人間が判読できる</td><td>いいえ</td><td>いいえ</td><td>はい（ナレーションセクション）</td><td>はい (リソースの説明)</td></tr>
</tbody>
</table>

<h2 id="8-fhir-tren-toan-cau"><strong>8. 世界中で FHIR — 誰が使用していますか?</strong></h2>

<h3 id="hoa-ky"><strong>米国</strong></h3>
<ul>
<li><p><strong>21世紀の治療法</strong> (2020): EHR ベンダーに FHIR API (US Core) のサポートを義務付ける</p></li>
<li><p><strong>CMS 相互運用性ルール</strong>: 支払者 (保険) に FHIR に基づく患者アクセス API の提供を義務付ける</p></li>
<li><p><strong>ONC テフカ</strong>: National Data Exchange Framework、FHIR が基盤です</p></li>
<li><p>Epic、Cerner (Oracle Health)、Allscripts はすべて FHIR API を備えています</p></li>
</ul>

<h3 id="chau-au"><strong>ヨーロッパ</strong></h3>
<ul>
<li><p><strong>欧州医療データスペース (EHDS)</strong>: EU規制は国境を越えた健康データにFHIRを使用</p></li>
<li><p><strong>国際患者概要 (IPS)</strong>: FHIR に基づいて、臨床概要の国際共有が可能</p></li>
</ul>

<h3 id="uc"><strong>オーストラリア</strong></h3>
<ul>
<li><p><strong>AU ベース実装ガイド</strong>: 全国の標準FHIRプロファイル</p></li>
<li><p><strong>私の健康記録</strong>: FHIR を使用した国民健康記録システム</p></li>
</ul>

<h3 id="viet-nam"><strong>ベトナム</strong></h3>
<ul>
<li><p>FHIR に関する正式な義務はありませんが、医療をデジタル化するためのロードマップに含まれています</p></li>
<li><p>医療データの相互運用性標準を規制する回覧 54/2017/TT-BYT (FHIR はまだ使用されていません)</p></li>
<li><p>電子医療記録に関する回覧 46/2018/TT-BYT</p></li>
<li><p>いくつかの先駆的なプロジェクトが FHIR をテストしています</p></li>
<li><p>ベトナムFHIR導入ガイドを構築する絶好の機会</p></li>
</ul>

<h2 id="9-khai-niem-co-ban-fhir"><strong>9. 最初に知っておく必要がある基本的な FHIR 概念</strong></h2>

<p>次の記事に進む前に、いくつかの重要な用語について理解しておきましょう。</p>

<table>
<thead>
<tr><th>用語</th><th>説明</th><th>たとえば</th></tr>
</thead>
<tbody>
<tr><td><strong>リソース</strong></td><td>FHIR のデータの基本単位</td><td>患者、観察、出会い</td></tr>
<tr><td><strong>データ型</strong></td><td>リソースで使用されるデータ型</td><td>人間名、住所、コード可能なコンセプト</td></tr>
<tr><td><strong>延長</strong></td><td>カスタムデータをリソースに追加する方法</td><td>患者に「民族」フィールドを追加</td></tr>
<tr><td><strong>プロフィール</strong></td><td>リソースを特定のユースケースにバインドする</td><td>米国の主な患者プロフィール</td></tr>
<tr><td><strong>用語</strong></td><td>医療コード体系</td><td>ICD-10、SNOMED CT、LOINC</td></tr>
<tr><td><strong>バンドル</strong></td><td>多くのリソースを集める</td><td>検索結果、取引</td></tr>
<tr><td><strong>参考資料</strong></td><td>リソース間のリンク</td><td>観察対象者→患者/123</td></tr>
<tr><td><strong>実装ガイド</strong></td><td>コンテキスト固有の FHIR 実装ガイダンス</td><td>米国コアIG、IPS IG</td></tr>
</tbody>
</table>

<h2 id="10-tom-tat"><strong>10. まとめ</strong></h2>

<p>この記事では、次のことを学びました。</p>

<ul>
<li><p><strong>相互運用性</strong> デジタルヘルスにおける最大の課題であり、4つのレベルが含まれます</p></li>
<li><p><strong>HL7 インターナショナル</strong> 1987 年から運営されている大手の医療標準化団体です。</p></li>
<li><p><strong>HL7 v2</strong> 最も人気があるが一貫性に欠ける</p></li>
<li><p><strong>HL7 v3/RIM</strong> タイトだが複雑すぎる</p></li>
<li><p><strong>CDA</strong> 文書交換には成功しましたが、データレベルのアクセスには制限がありました</p></li>
<li><p><strong>FHIR</strong> Web 標準に基づいており、実装が簡単なすべての利点を組み合わせています</p></li>
<li><p><strong>FHIR R5</strong> は現在のバージョン、R4 標準は最もよく使用されている安定バージョンです</p></li>
<li><p>多くの国が持っています <strong>必須</strong> FHIR を使用して、ベトナムがロードマップに載っています</p></li>
</ul>

<p>次回の記事ではさらに深く掘り下げていきます <strong>FHIR R5 アーキテクチャ</strong> — リソース、データ型、拡張性、および核となる設計原則を理解します。</p>
