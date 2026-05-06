---
id: 019e0a10-a703-7001-d001-f1a7f8000703
title: 'レッスン 24: ケーススタディ — 米国コア、IPS、および実際の実装'
slug: bai-24-case-studies-us-core-ips-va-trien-khai-thuc-te
description: 米国コア導入ガイド、国際患者概要（IPS）、AUコア（オーストラリア）、英国コア、実際の導入から得た教訓を分析し、国を比較し、ベトナムに適用します。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 24
section_title: 'パート 7: 生産、規模、将来'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基本から高度な医療データ標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9907" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9907)"/>

  <!-- Decorations -->
  <g>
    <circle cx="888" cy="34" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="676" cy="122" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="964" cy="210" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="752" cy="38" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="1040" cy="126" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="174" x2="1100" y2="254" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="204" x2="1050" y2="274" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1049.1147367097487,209.5 1049.1147367097487,238.5 1024,253 998.8852632902513,238.5 998.8852632902513,209.5 1024,195" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🏗️ アーキテクチャ — レッスン 24</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 24: ケーススタディ — 米国コア、IPS、および</tspan>
      <tspan x="60" dy="42">現実的な実装</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基本から高度な医療データ標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 7: 生産、規模、将来</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-us-core"><strong>1. 米国コア実装ガイド</strong></h2>

<p><strong>米国コア</strong> は、ONC (21 世紀治療法) に基づいて認定されたすべての EHR システムに必要な米国の公式 IG です。これは世界で最も重要なリファレンスIGです。</p>

<h3 id="us-core-profiles"><strong>米国の主なコアプロファイル</strong></h3>

<table>
<thead>
<tr><th>プロフィール</th><th>基本リソース</th><th>注目のリクエスト</th></tr>
</thead>
<tbody>
<tr><td>米国の中核患者</td><td>患者</td><td>人種、民族性の拡張。 MRN識別子</td></tr>
<tr><td>米国の中核条件</td><td>状態</td><td>SNOMED CT + ICD-10-CM;臨床状態が必要です</td></tr>
<tr><td>米国コア観測</td><td>観察</td><td>バイタルサイン、検査結果、社会歴</td></tr>
<tr><td>米国の主な医薬品リクエスト</td><td>投薬依頼</td><td>RxNorm コーディングが必要です</td></tr>
<tr><td>USコアエンカウンター</td><td>出会い</td><td>クラス、タイプ、参加者が必要です</td></tr>
<tr><td>米国の主要な手順</td><td>手順</td><td>CPT/SNOMED CTコーディング</td></tr>
<tr><td>米国のコアアレルギー不耐症</td><td>アレルギー不耐症</td><td>臨床状態 + 反応</td></tr>
<tr><td>米国コアドキュメントリファレンス</td><td>ドキュメントリファレンス</td><td>臨床ノート (FHIR の C-CDA)</td></tr>
</tbody>
</table>

<h3 id="us-core-patient-example"><strong>米国の中核患者 — 例</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Patient",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
      "extension": [
        {
          "url": "ombCategory",
          "valueCoding": {
            "system": "urn:oid:2.16.840.1.113883.6.238",
            "code": "2106-3",
            "display": "White"
          }
        },
        {"url": "text", "valueString": "White"}
      ]
    },
    {
      "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
      "extension": [
        {
          "url": "ombCategory",
          "valueCoding": {
            "system": "urn:oid:2.16.840.1.113883.6.238",
            "code": "2186-5",
            "display": "Not Hispanic or Latino"
          }
        }
      ]
    }
  ],
  "identifier": [
    {
      "system": "http://hospital.example.org/mrn",
      "value": "MRN123456"
    }
  ],
  "name": [
    {"family": "Smith", "given": ["John", "A."]}
  ],
  "gender": "male",
  "birthDate": "1985-03-15"
}
</code></pre>

<h3 id="us-core-lessons"><strong>米国の中核からの教訓</strong></h3>

<ol>
<li><strong>標準義務</strong> — ONC 規則 (2020 年) は、EHR ベンダーに US Core の実装を義務付けています</li>
<li><strong>USCDI</strong> — US Core Data for Interoperability は最小限のデータ要素を定義します</li>
<li><strong>用語のバインディング</strong> — 必須 SNOMED CT、LOINC、RxNorm</li>
<li><strong>$everything オペレーション</strong> — 患者ポータル用の患者アクセス API</li>
<li><strong>バルクデータ</strong> — 支払者間のデータ交換</li>
</ol>

<h2 id="2-ips"><strong>2. 国際患者概要 (IPS)</strong></h2>

<p><strong>IPS</strong> 管轄区域に関係なく、国境を越えた健康記録の概要です。 ISO 27269:2021。</p>

<h3 id="ips-sections"><strong>IPS セクションが必要です</strong></h3>

<table>
<thead>
<tr><th>セクション</th><th>FHIR リソース</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>薬の概要</td><td>薬に関する声明</td><td>使用中の薬</td></tr>
<tr><td>アレルギーと不耐症</td><td>アレルギー不耐症</td><td>アレルギー、BDR 薬</td></tr>
<tr><td>問題リスト</td><td>状態</td><td>治療中の病気</td></tr>
<tr><td>予防接種</td><td>予防接種</td><td>予防接種</td></tr>
<tr><td>手続き履歴</td><td>手順</td><td>行われた手術と処置</td></tr>
</tbody>
</table>

<h3 id="ips-document"><strong>IPS ドキュメント バンドル</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "document",
  "entry": [
    {
      "resource": {
        "resourceType": "Composition",
        "meta": {
          "profile": [
            "http://hl7.org/fhir/uv/ips/StructureDefinition/Composition-uv-ips"
          ]
        },
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "60591-5",
              "display": "Patient summary Document"
            }
          ]
        },
        "subject": {"reference": "Patient/patient-001"},
        "date": "2025-01-15",
        "author": [{"reference": "Practitioner/practitioner-001"}],
        "title": "International Patient Summary",
        "section": [
          {
            "title": "Active Problems",
            "code": {"coding": [{"system": "http://loinc.org", "code": "11450-4"}]},
            "entry": [{"reference": "Condition/cond-001"}]
          },
          {
            "title": "Medication Summary",
            "code": {"coding": [{"system": "http://loinc.org", "code": "10160-0"}]},
            "entry": [{"reference": "MedicationStatement/med-001"}]
          },
          {
            "title": "Allergies and Intolerances",
            "code": {"coding": [{"system": "http://loinc.org", "code": "48765-2"}]},
            "entry": [{"reference": "AllergyIntolerance/allergy-001"}]
          }
        ]
      }
    }
  ]
}
</code></pre>

<h3 id="ips-use-case"><strong>ベトナム向けIPSの使用例</strong></h3>

<ul>
<li><strong>医療ツーリズム</strong> — ベトナムに来る日本人/韓国人患者がIPSを持参</li>
<li><strong>外国人労働者</strong> — 日本/韓国のベトナム人労働者にはIPSが必要</li>
<li><strong>国際病院への転院</strong> — FV 病院、ビンメック インターナショナル</li>
</ul>

<h2 id="3-au-core"><strong>3.AUコア（オーストラリア）</strong></h2>

<table>
<thead>
<tr><th>特徴</th><th>AUコア</th><th>ベトナムへの教訓</th></tr>
</thead>
<tbody>
<tr><td>識別子</td><td>IHI (個人医療識別子)</td><td>CCCD/健康保険と同様</td></tr>
<tr><td>先住民族の地位</td><td>アボリジニ/トレス海峡諸島住民の拡張</td><td>エスニックベトナム拡張に似ている</td></tr>
<tr><td>医療提供者</td><td>HPI-I（BSの識別子）</td><td>証明書コードの練習</td></tr>
<tr><td>組織</td><td>HPI-O (組織の識別子)</td><td>医療機関コード</td></tr>
<tr><td>用語</td><td>SNOMED CT-AU、PBS、AMT</td><td>ICD-10 VN、健康保険医薬品</td></tr>
</tbody>
</table>

<h2 id="4-uk-core"><strong>4. 英国コア</strong></h2>

<table>
<thead>
<tr><th>特徴</th><th>英国コア</th><th>ベトナムへの教訓</th></tr>
</thead>
<tbody>
<tr><td>NHS番号</td><td>各国民に固有の 10 桁の ID</td><td>CCCD 12 番号</td></tr>
<tr><td>民族</td><td>ONS 2011 年国勢調査のカテゴリ</td><td>54 ベトナムの民族グループ</td></tr>
<tr><td>GP プラクティス</td><td>GPごとのODSコード</td><td>初期医療機関コード</td></tr>
<tr><td>DM+D</td><td>NHS 医薬品辞典</td><td>保険適用医薬品一覧</td></tr>
<tr><td>SNOMED コネチカット州英国</td><td>英国の臨床用語</td><td>ICD-10 VN</td></tr>
</tbody>
</table>

<h2 id="5-so-sanh"><strong>5. 実装ガイドの比較</strong></h2>

<table>
<thead>
<tr><th>基準</th><th>米国コア</th><th>AUコア</th><th>英国コア</th><th>VN コア (推奨)</th></tr>
</thead>
<tbody>
<tr><td>FHIR バージョン</td><td>R4</td><td>R4</td><td>R4</td><td>R5</td></tr>
<tr><td>患者ID</td><td>MRN/SSN</td><td>IHI</td><td>NHS番号</td><td>CCCD</td></tr>
<tr><td>保険</td><td>適用範囲</td><td>メディケア</td><td>NHS</td><td>健康保険</td></tr>
<tr><td>診断コード</td><td>ICD-10-CM</td><td>ICD-10-AM</td><td>SNOMED CT</td><td>ICD-10 VN</td></tr>
<tr><td>医薬品コード</td><td>RxNorm</td><td>AMT</td><td>DM+D</td><td>保険診療</td></tr>
<tr><td>ラボコード</td><td>ロインク</td><td>ロインク</td><td>ロインク</td><td>ロインク</td></tr>
<tr><td>委任</td><td>ONC ルール</td><td>アドハ</td><td>NHSデジタル</td><td>保健省（将来）</td></tr>
</tbody>
</table>

<h2 id="6-bai-hoc"><strong>6. 実際の実装から得た教訓</strong></h2>

<ol>
<li><strong>小さく始めてください</strong> — US Core は 15 のプロファイルから始まり、徐々に拡大します</li>
<li><strong>政府の命令</strong> — 導入を促進するには法的規制（ONCルール、ADHA）が必要</li>
<li><strong>まずは用語説明</strong> — プロファイルの前に CodeSystems/ValueSets (ICD-10 VN、健康保険医薬品) を構築する</li>
<li><strong>テストインフラストラクチャ</strong> — 米国には適合性テスト用の Touchstone と Inferno があります</li>
<li><strong>コミュニティ</strong> — コネクタソン、IG 投票、コミュニティからのフィードバック</li>
<li><strong>下位互換性</strong> — US Core は、その大規模なエコシステムのために R4 を維持します。 VN は R5 を開始できます</li>
<li><strong>サポートしなければなりません</strong> — ベンダーに対して必須サポートのセマンティクスを明確に定義する</li>
</ol>

<h2 id="7-tong-ket"><strong>7. まとめ</strong></h2>

<ul>
<li><p><strong>米国コア</strong> — SNOMED CT + LOINC + RxNorm を使用した、ONC で必要な最大のリファレンス IG</p></li>
<li><p><strong>IPS</strong> — 国境を越えた記録の概要、ISO 27269、5 つのセクションが必要</p></li>
<li><p><strong>オーストラリア/英国コア</strong> — 各国は独自の識別子、用語、法律をカスタマイズしています</p></li>
<li><p><strong>VNコア</strong> — 用語集と患者プロフィールから始めて、国際的な教訓を積み上げる必要がある</p></li>
</ul>
