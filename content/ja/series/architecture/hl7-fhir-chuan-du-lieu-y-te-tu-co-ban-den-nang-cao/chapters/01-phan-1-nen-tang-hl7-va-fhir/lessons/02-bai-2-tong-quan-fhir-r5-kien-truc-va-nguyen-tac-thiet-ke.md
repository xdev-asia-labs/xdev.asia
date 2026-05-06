---
id: 019e0a10-a102-7001-d001-f1a7f8000102
title: 'レッスン 2: FHIR R5 の概要 - アーキテクチャと設計原則'
slug: bai-2-tong-quan-fhir-r5-kien-truc-va-nguyen-tac-thiet-ke
description: >-
  FHIR アーキテクチャ (リソース、データ型、拡張性、RESTful API、メッセージング、ドキュメント)、80/20 設計原則、FHIR 成熟度モデル
  (FMM)、FHIR R4 と R5 の比較、仕様内のモジュール。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 1: HL7 と FHIR プラットフォーム'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基本から高度な医療データ標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1779" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1779)"/>

  <!-- Decorations -->
  <g>
    <circle cx="973" cy="69" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="846" cy="82" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="719" cy="95" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1092" cy="108" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="965" cy="121" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="79" x2="1100" y2="159" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="109" x2="1050" y2="179" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1058.444863728671,212 1058.444863728671,246 1029,263 999.555136271329,246 999.555136271329,212 1029,195" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ アーキテクチャ — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 2: FHIR R5 の概要 - アーキテクチャと</tspan>
      <tspan x="60" dy="42">設計原則</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基本から高度な医療データ標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: HL7 と FHIR プラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-kien-truc-tong-the-fhir"><strong>1. FHIRの全体的なアーキテクチャ</strong></h2>

<p>FHIR は 1 つとして設計されています <strong>プラットフォーム。プラットフォーム</strong> — 単なるデータ標準ではなく、健康情報交換のための完全なエコシステムです。 FHIR アーキテクチャには次の層が含まれています。</p>

<h3 id="cac-tang-kien-truc"><strong>建築床</strong></h3>

<pre><code>┌─────────────────────────────────────────┐
│     Implementation Guides (IGs)         │  ← Tùy chỉnh cho ngữ cảnh
├─────────────────────────────────────────┤
│   Profiles / Extensions / Terminologies │  ← Ràng buộc &amp; mở rộng
├─────────────────────────────────────────┤
│   Exchange (REST / Messaging / Docs)    │  ← Cách trao đổi dữ liệu
├─────────────────────────────────────────┤
│          Resources (~157 loại)          │  ← Đơn vị dữ liệu
├─────────────────────────────────────────┤
│         Data Types (Primitive/Complex)  │  ← Kiểu dữ liệu
├─────────────────────────────────────────┤
│      Foundation (Infrastructure)        │  ← Nền tảng chung
└─────────────────────────────────────────┘
</code></pre>

<h2 id="2-resource-don-vi-co-ban"><strong>2. リソース — FHIR の基本単位</strong></h2>

<p>FHIR では、すべては次のように表現されます。 <strong>リソース</strong>。リソースは、リレーショナル データベースの「テーブル」のような基本的な構成要素ですが、はるかに柔軟です。</p>

<h3 id="dac-diem-resource"><strong>すべてのリソースの共通の特徴</strong></h3>

<p>すべてのリソースには次のものが含まれます。</p>

<ul>
<li><p><strong>ID</strong> — サーバー内で一意の論理識別子</p></li>
<li><p><strong>メタ。メタ</strong> — メタデータ (versionId、lastUpdated、プロファイル、セキュリティ、タグ)</p></li>
<li><p><strong>暗黙的なルール</strong> — 特別な処理ルールへの参照 (めったに使用されない)</p></li>
<li><p><strong>言語。言語</strong> — リソースの言語</p></li>
</ul>

<p>ほとんどのリソースは、 <strong>ドメインリソース</strong> (リソースから継承)、以下を追加します。</p>

<ul>
<li><p><strong>テキスト。テキスト</strong> — ナラティブ (人間が読める HTML 部分)</p></li>
<li><p><strong>含まれています。含まれている</strong> — 内部に埋め込まれたリソース</p></li>
<li><p><strong>拡張子</strong> — 拡張データ</p></li>
<li><p><strong>修飾子拡張子</strong> — 拡張機能はリソースのセマンティクスを変更します</p></li>
</ul>

<h3 id="vi-du-patient-json"><strong>例: 患者リソース (JSON)</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Patient",
  "id": "example-vn",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2026-03-30T10:00:00Z"
  },
  "text": {
    "status": "generated",
    "div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;Nguyễn Văn A, Nam, 15/03/1985&lt;/div&gt;"
  },
  "identifier": [
    {
      "system": "urn:oid:2.16.840.1.113883.4.56.10",
      "value": "001085012345"
    }
  ],
  "active": true,
  "name": [
    {
      "use": "official",
      "family": "Nguyễn",
      "given": ["Văn", "A"]
    }
  ],
  "gender": "male",
  "birthDate": "1985-03-15",
  "address": [
    {
      "use": "home",
      "line": ["123 Lê Lợi"],
      "city": "Thành phố Hồ Chí Minh",
      "country": "VN"
    }
  ]
}
</code></pre>

<h3 id="157-resources"><strong>157 リソースはモジュールごとに分類されています</strong></h3>

<p>FHIR R5 には、 <strong>157 種類のリソース</strong>、モジュールに編成されています:</p>

<table>
<thead>
<tr><th>モジュール</th><th>説明</th><th>代表的なリソース</th></tr>
</thead>
<tbody>
<tr><td><strong>財団</strong></td><td>基本インフラ</td><td>バンドル、OperationOutcome、バイナリ、パラメータ</td></tr>
<tr><td><strong>適合性</strong></td><td>適合仕様</td><td>CapabilityStatement、StructureDefinition、SearchParameter</td></tr>
<tr><td><strong>用語</strong></td><td>用語</td><td>コードシステム、バリューセット、コンセプトマップ</td></tr>
<tr><td><strong>セキュリティ</strong></td><td>セキュリティ</td><td>来歴、監査イベント、同意、許可</td></tr>
<tr><td><strong>管理</strong></td><td>管理</td><td>患者、開業医、組織、場所、出会い</td></tr>
<tr><td><strong>臨床</strong></td><td>臨床</td><td>状態、観察、アレルギー不耐症、手順</td></tr>
<tr><td><strong>診断</strong></td><td>診断</td><td>診断レポート、標本、画像研究</td></tr>
<tr><td><strong>薬</strong></td><td>医学</td><td>投薬、投薬要請、予防接種</td></tr>
<tr><td><strong>ワークフロー</strong></td><td>プロセス</td><td>タスク、予定、スケジュール、サービスリクエスト</td></tr>
<tr><td><strong>財務</strong></td><td>金融</td><td>請求、補償範囲、特典の説明</td></tr>
</tbody>
</table>

<h2 id="3-nguyen-tac-80-20"><strong>3. 80/20 設計原則</strong></h2>

<p>FHIR は次の哲学を適用します。 <strong>基本標準で一般的なユースケースの 80% に対応し、拡張機能とプロファイルを通じて残りの 20% を許可します。</strong>。</p>

<p>これは次のことを意味します:</p>

<ul>
<li><p><strong>基本的なリソースは非常にシンプルです</strong> — あらゆる特殊なケースを詰め込もうとしないでください</p></li>
<li><p><strong>拡張機構</strong> — さらに多くのデータが必要な場合は、標準の変更ではなく拡張機能を使用します</p></li>
<li><p><strong>プロフィール</strong> — より厳しい制約が必要な場合は、StructureDefinition を使用します。</p></li>
</ul>

<p>たとえば、基本的なリソース患者には「CCCD 番号」フィールドがありません (ベトナムでのみ使用されます) が、内線番号を使用して追加するか、次のコマンドを使用します。 <code>識別子</code> 適切なシステムで。</p>

<h2 id="4-exchange-paradigms"><strong>4. 3 つのデータ交換パラダイム</strong></h2>

<p>FHIR は、さまざまな状況に適した 3 つのデータ交換方法をサポートしています。</p>

<h3 id="restful-api"><strong>4.1. RESTful API</strong></h3>

<p>HTTP メソッドに基づく最も一般的な方法は次のとおりです。</p>

<pre><code># Đọc thông tin bệnh nhân
GET /Patient/123

# Tạo bệnh nhân mới
POST /Patient
Content-Type: application/fhir+json
{...}

# Cập nhật
PUT /Patient/123
{...}

# Tìm kiếm
GET /Patient?family=Nguyen&amp;birthdate=1985-03-15

# Xóa
DELETE /Patient/123
</code></pre>

<p><strong>次の場合に使用します。</strong> Web/モバイル アプリケーション、患者ポータル、データ クエリ、SMART アプリ。</p>

<h3 id="messaging"><strong>4.2.メッセージング</strong></h3>

<p>システム間でのメッセージの送信 (HL7 v2 に似ていますが、FHIR リソースを使用します):</p>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "message",
  "entry": [
    {
      "resource": {
        "resourceType": "MessageHeader",
        "eventCoding": {
          "system": "http://example.org/events",
          "code": "admit-notification"
        },
        "source": { "endpoint": "http://hospital-a.vn/fhir" }
      }
    },
    {
      "resource": {
        "resourceType": "Patient",
        "id": "123"
      }
    }
  ]
}
</code></pre>

<p><strong>次の場合に使用します。</strong> イベント駆動型の交換 (入院、退院、検査結果)、レガシー システムとの統合。</p>

<h3 id="documents"><strong>4.3.書類</strong></h3>

<p>構造化された医療文書を作成します (CDA に似ていますが、FHIR を使用します)。</p>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "document",
  "entry": [
    {
      "resource": {
        "resourceType": "Composition",
        "title": "Tóm tắt xuất viện",
        "type": {
          "coding": [{
            "system": "http://loinc.org",
            "code": "18842-5",
            "display": "Discharge summary"
          }]
        },
        "section": [...]
      }
    }
  ]
}
</code></pre>

<p><strong>次の場合に使用します。</strong> 退院書類、病歴概要、紹介状、国際患者概要。</p>

<h2 id="5-fhir-maturity-model"><strong>5. FHIR 成熟度モデル (FMM)</strong></h2>

<p>FHIR の各リソースには、0 から標準 (N) までの成熟度レベル (FMM) があります。</p>

<table>
<thead>
<tr><th>FMM</th><th>レベル</th><th>意味</th></tr>
</thead>
<tbody>
<tr><td>0</td><td>草案</td><td>提案されたばかりでまだ実装されていない</td></tr>
<tr><td>1</td><td>ドラフト (テスト済み)</td><td>少なくとも 1 つの実装があります</td></tr>
<tr><td>2</td><td>試用</td><td>コネクタソンでテスト済み</td></tr>
<tr><td>3</td><td>トライアル使用（検証済み）</td><td>実践的な事例も多数あります</td></tr>
<tr><td>4</td><td>試用（同意）</td><td>品質基準を満たし、標準の準備</td></tr>
<tr><td>5</td><td>トライアルユース（公開済み）</td><td>2 回以上の投票サイクルで公開</td></tr>
<tr><td><strong>N</strong></td><td><strong>規範的</strong></td><td><strong>安定した下位互換性 - 変更なし</strong></td></tr>
</tbody>
</table>

<p>いくつかのリソースに到達しました <strong>規範的</strong> R5:</p>
<ul>
<li><p><strong>患者</strong> (N)、 <strong>観察</strong> (N)、 <strong>バンドル</strong> (N)、 <strong>能力に関する声明</strong> (ん)</p></li>
<li><p><strong>構造定義</strong> (N)、 <strong>値セット</strong> (N)、 <strong>コードシステム</strong> (ん)</p></li>
<li><p><strong>作戦結果</strong> (N)、 <strong>バイナリ</strong> (N)、 <strong>パラメータ</strong> (ん)</p></li>
</ul>

<p>プロジェクトのリソースを選択する場合、安定性を確保するために、FMM ≥ 3 または Normal のリソースを優先する必要があります。</p>

<h2 id="6-fhir-r4-vs-r5"><strong>6. FHIR R4 と R5 — 重要な変更点</strong></h2>

<p>R4 は依然として最もよく使用されているバージョンです (米国の多くの義務が R4 に基づいているため)。 R5 には多くの改善が加えられています。</p>

<table>
<thead>
<tr><th>特長</th><th>R4</th><th>R5</th></tr>
</thead>
<tbody>
<tr><td>定期購入</td><td>条件ベースのサブスクリプション</td><td><strong>トピックベースの購読</strong> (サブスクリプショントピック)</td></tr>
<tr><td>ワークフロー</td><td>基本的なタスク</td><td>新しいトランスポート リソース、改善されたワークフロー パターン</td></tr>
<tr><td>科学的根拠に基づいた医学</td><td>制限事項</td><td>新しい証拠、証拠変数、アーティファクト評価</td></tr>
<tr><td>新しいリソース</td><td>—</td><td>許可、在庫項目、在庫レポート、栄養摂取量</td></tr>
<tr><td>観察</td><td>コンポーネントベースの</td><td>改善がトリガーされ、Canonical がインスタンス化されます</td></tr>
<tr><td>検索</td><td>標準</td><td>_filter、_sort の機能強化</td></tr>
<tr><td>種類</td><td>—</td><td>CodeableReference(新規)、整数64</td></tr>
</tbody>
</table>

<p><strong>推奨事項:</strong></p>
<ul>
<li><p>米国の新しいプロジェクト: を使用する <strong>R4</strong> (米国の中核的義務のため)</p></li>
<li><p>新しい拘束力のないプロジェクト: 考慮事項 <strong>R5</strong> (より新しく、より多くの機能)</p></li>
<li><p>ベトナムでのプロジェクト: <strong>R4</strong> または <strong>R5</strong> すべて適切です（具体的な義務はまだありません）</p></li>
</ul>

<h2 id="7-specification-modules"><strong>7. FHIR仕様のモジュール</strong></h2>

<p>FHIR 仕様は主要モジュールで構成されています。</p>

<h3 id="foundation-module"><strong>基礎モジュール</strong></h3>
<p>技術的基盤: リソース定義、データ型、拡張機能、REST API、メッセージング、ドキュメント、ナラティブ、コンパートメント。</p>

<h3 id="implementer-support"><strong>実装者サポートモジュール</strong></h3>
<p>導入サポート: ダウンロード、テストツール、導入ガイドレジストリ、検証。</p>

<h3 id="security-privacy"><strong>セキュリティ&プライバシーモジュール</strong></h3>
<p>セキュリティ: 認可、認証、セキュリティラベル、監査、同意、来歴。</p>

<h3 id="conformance-module"><strong>適合モジュール</strong></h3>
<p>準拠仕様: CapabilityStatement、StructureDefinition、OperationDefinition、SearchParameter、実装ガイド。</p>

<h3 id="terminology-module"><strong>用語モジュール</strong></h3>
<p>用語: CodeSystem、ValueSet、ConceptMap、NamingSystem、用語操作 ($validate-code、$expand、$lookup、$translate)。</p>

<h3 id="administration-module"><strong>管理モジュール</strong></h3>
<p>管理管理: 患者、医師、組織、場所、HealthcareService、エンドポイント、デバイス。</p>

<h3 id="clinical-modules"><strong>臨床モジュール</strong></h3>
<p>臨床モジュールには、臨床概要 (状態、アレルギー不耐症、手順)、診断 (観察、診断レポート)、投薬、ケア提供 (ケアプラン、目標)、ワークフロー (タスク、予約) が含まれます。</p>

<h3 id="financial-module"><strong>財務モジュール</strong></h3>
<p>医療金融: 補償範囲、請求、給付金の説明、アカウント、請求書。</p>

<h2 id="8-resource-references"><strong>8. リソース参照 — リソース間のリンク</strong></h2>

<p>FHIR 内のリソースは相互にリンクされています <strong>参考文献</strong>。これは医療データ ネットワークを構築するための最も重要なメカニズムです。</p>

<pre><code class="language-json">{
  "resourceType": "Observation",
  "id": "blood-pressure",
  "status": "final",
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "85354-9",
      "display": "Blood pressure panel"
    }]
  },
  "subject": {
    "reference": "Patient/example-vn",
    "display": "Nguyễn Văn A"
  },
  "encounter": {
    "reference": "Encounter/visit-2026-03-30"
  },
  "performer": [{
    "reference": "Practitioner/dr-tran"
  }],
  "effectiveDateTime": "2026-03-30T09:00:00+07:00",
  "component": [
    {
      "code": {
        "coding": [{
          "system": "http://loinc.org",
          "code": "8480-6",
          "display": "Systolic blood pressure"
        }]
      },
      "valueQuantity": {
        "value": 120,
        "unit": "mmHg",
        "system": "http://unitsofmeasure.org",
        "code": "mm[Hg]"
      }
    },
    {
      "code": {
        "coding": [{
          "system": "http://loinc.org",
          "code": "8462-4",
          "display": "Diastolic blood pressure"
        }]
      },
      "valueQuantity": {
        "value": 80,
        "unit": "mmHg",
        "system": "http://unitsofmeasure.org",
        "code": "mm[Hg]"
      }
    }
  ]
}
</code></pre>

<p>上の例では:</p>
<ul>
<li><p><code>主題。件名</code> → へのリンク <strong>患者</strong></p></li>
<li><p><code>出会い。出会い</code> → へのリンク <strong>出会い</strong> (訪問)</p></li>
<li><p><code>出演者</code> → へのリンク <strong>開業医</strong> （医師の措置）</p></li>
</ul>

<h2 id="9-narrative"><strong>9. 物語 — 人間が読める部分</strong></h2>

<p>各 DomainResource にはセクションを含めることができます <strong>物語</strong> — HTML は、人間が読むことができるリソース コンテンツを表します。これは重要な機能です <strong>臨床安全性</strong>:</p>

<pre><code class="language-json">{
  "text": {
    "status": "generated",
    "div": "&lt;div xmlns='http://www.w3.org/1999/xhtml'&gt;&lt;p&gt;Huyết áp: 120/80 mmHg&lt;/p&gt;&lt;p&gt;Bệnh nhân: Nguyễn Văn A&lt;/p&gt;&lt;p&gt;Ngày đo: 30/03/2026&lt;/p&gt;&lt;/div&gt;"
  }
}
</code></pre>

<p>ナラティブステータスは次のとおりです。</p>
<ul>
<li><p><code>生成された</code> — 構造化データから作成</p></li>
<li><p><code>拡張子</code> — 拡張機能からの情報が含まれています</p></li>
<li><p><code>追加。追加の</code> — 構造化データには含まれていない追加情報が含まれています</p></li>
<li><p><code>空の</code> — コンテンツなし (含まれるリソース内)</p></li>
</ul>

<h2 id="10-extensibility"><strong>10. 拡張性 — FHIR の拡張性メカニズム</strong></h2>

<p>これは FHIR の最も強力な機能の 1 つです。標準にない追加データが必要な場合は、それを使用します <strong>拡張機能</strong>:</p>

<pre><code class="language-json">{
  "resourceType": "Patient",
  "id": "vn-patient",
  "extension": [
    {
      "url": "http://fhir.vn/StructureDefinition/patient-ethnicity",
      "valueCodeableConcept": {
        "coding": [{
          "system": "http://fhir.vn/CodeSystem/vn-ethnicity",
          "code": "01",
          "display": "Kinh"
        }]
      }
    },
    {
      "url": "http://fhir.vn/StructureDefinition/patient-cccd",
      "valueString": "001085012345"
    }
  ],
  "name": [{"family": "Nguyễn", "given": ["Văn", "A"]}]
}
</code></pre>

<p>2 つの重要なルール:</p>
<ol>
<li><p><strong>受信側システムはリソースを読み取ることができなければなりません</strong> 拡張機能がわからなくても（丁寧な対応）</p></li>
<li><p><strong>拡張機能はセマンティクスを変更してはなりません</strong> 基本要素 (modifierExtension を除く)</p></li>
</ol>

<h2 id="11-tom-tat"><strong>11. まとめ</strong></h2>

<p>この記事では、次のことを学びました。</p>

<ul>
<li><p><strong>FHIR アーキテクチャ</strong> 多くのレイヤーが含まれています: Foundation → Data Type → Resources → Exchange → Profile → IG</p></li>
<li><p><strong>リソース</strong> 基本ユニットとして、FHIR R5 には 157 のリソース タイプがあります。</p></li>
<li><p><strong>80/20 ルール</strong>: 基本標準で 80% 解決、拡張機能で 20%</p></li>
<li><p><strong>3つのパラダイム</strong>: REST (最も人気のある)、メッセージング、ドキュメント</p></li>
<li><p><strong>FMM</strong>: 成熟度レベルを評価し、リソースの優先順位を付けます。</p></li>
<li><p><strong>R4 対 R5</strong>: R4 はより安定しており、R5 には多くの新機能があります</p></li>
<li><p><strong>参考文献</strong>: リソースをデータ ネットワークにリンクする方法</p></li>
<li><p><strong>物語</strong>: 臨床安全のための人が読める HTML セクション</p></li>
<li><p><strong>拡張性</strong>: 標準を壊すことなく柔軟な拡張メカニズム</p></li>
</ul>

<p>次回のレッスンでは、 <strong>環境構築の練習をする</strong>: HAPI FHIR サーバー、Postman、FHIR ツール - 最初の CRUD 操作をテストします。</p>
