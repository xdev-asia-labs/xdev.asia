---
id: 019e0a10-a302-7001-d001-f1a7f8000302
title: 'レッスン 9: バンドル、トランザクション、バッチ - 複数のリソースの処理'
slug: bai-9-bundle-transaction-va-batch-xu-ly-nhieu-resources
description: >-
  リソース バンドルとタイプ
  (サーチセット、トランザクション、バッチ、ドキュメント、メッセージ、コレクション、履歴)。トランザクション処理ルール、アトミック操作、条件付き参照、バッチ処理、トランザクション
  バンドルの作成の練習。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: 'パート 3: FHIR RESTful API とデータ交換'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基本から高度な医療データ標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6626" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6626)"/>

  <!-- Decorations -->
  <g>
    <circle cx="863" cy="219" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="626" cy="282" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="889" cy="85" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="652" cy="148" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="915" cy="211" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="149" x2="1100" y2="229" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="179" x2="1050" y2="249" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1087.1051177665154,227 1087.1051177665154,271 1049,293 1010.8948822334847,271 1010.8948822334847,227 1049,205" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ アーキテクチャ — レッスン 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: バンドル、トランザクション、バッチ - 処理</tspan>
      <tspan x="60" dy="42">多くのリソースを管理する</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基本から高度な医療データ標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: FHIR RESTful API とデータ交換</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-bundle-resource"><strong>1. バンドルリソース</strong></h2>

<p><strong>バンドル</strong> 多くのリソースを含むコンテナです。これは、FHIR が 1 つのリクエストで複数のリソースを処理し、ドキュメントをパッケージ化し、検索結果を返す方法です。</p>

<h3 id="bundle-types"><strong>バンドルの種類</strong></h3>

<table>
<thead>
<tr><th>種類</th><th>説明</th><th>ユースケース</th></tr>
</thead>
<tbody>
<tr><td>サーチセット</td><td>検索結果</td><td>GET検索の応答</td></tr>
<tr><td>取引。トランザクション</td><td>アトミックオペレーショングループ</td><td>多くの関連リソースを作成する</td></tr>
<tr><td>バッチ。バッチ</td><td>運営独立グループ</td><td>一括操作、各エントリは個別に処理されます</td></tr>
<tr><td>文書。文書</td><td>FHIR ドキュメント</td><td>臨床文書 (組成物 + リソース)</td></tr>
<tr><td>メッセージ。メッセージ</td><td>FHIRメッセージ</td><td>メッセージング パラダイム (メッセージ ヘッダー + ペイロード)</td></tr>
<tr><td>コレクション</td><td>コレクション</td><td>特定のインタラクションを行わずにリソースをプールする</td></tr>
<tr><td>歴史。歴史</td><td>歴史の変遷</td><td>_history の応答</td></tr>
<tr><td>購読通知</td><td>購読のお知らせ</td><td>リアルタイム通知</td></tr>
</tbody>
</table>

<h2 id="2-transaction-bundle"><strong>2. トランザクションバンドル</strong></h2>

<p>トランザクションバンドルの処理 <strong>原子</strong> — 成功したすべてのエントリまたはすべてのロールバック。</p>

<h3 id="transaction-example"><strong>例: 患者 + 遭遇 + 観察を同時に作成する</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "fullUrl": "urn:uuid:patient-temp-1",
      "resource": {
        "resourceType": "Patient",
        "name": [
          {
            "family": "Nguyễn",
            "given": ["Văn", "A"],
            "text": "Nguyễn Văn A"
          }
        ],
        "gender": "male",
        "birthDate": "1990-05-15",
        "identifier": [
          {
            "system": "http://hospital.vn/mrn",
            "value": "MRN-2025-001"
          }
        ]
      },
      "request": {
        "method": "POST",
        "url": "Patient",
        "ifNoneExist": "identifier=http://hospital.vn/mrn|MRN-2025-001"
      }
    },
    {
      "fullUrl": "urn:uuid:encounter-temp-1",
      "resource": {
        "resourceType": "Encounter",
        "status": "in-progress",
        "class": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                "code": "AMB"
              }
            ]
          }
        ],
        "subject": {
          "reference": "urn:uuid:patient-temp-1"
        },
        "period": {
          "start": "2025-01-15T08:00:00+07:00"
        }
      },
      "request": {
        "method": "POST",
        "url": "Encounter"
      }
    },
    {
      "fullUrl": "urn:uuid:obs-temp-1",
      "resource": {
        "resourceType": "Observation",
        "status": "final",
        "category": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                "code": "vital-signs"
              }
            ]
          }
        ],
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "8310-5",
              "display": "Body temperature"
            }
          ]
        },
        "subject": {
          "reference": "urn:uuid:patient-temp-1"
        },
        "encounter": {
          "reference": "urn:uuid:encounter-temp-1"
        },
        "valueQuantity": {
          "value": 37.2,
          "unit": "°C",
          "system": "http://unitsofmeasure.org",
          "code": "Cel"
        }
      },
      "request": {
        "method": "POST",
        "url": "Observation"
      }
    }
  ]
}
</code></pre>

<h3 id="transaction-references"><strong>トランザクション内の条件付き参照</strong></h3>

<p>使用する <code>骨壷:uuid:</code> 同じトランザクション内のエントリが相互に参照できるように、一時的な ID を作成します。サーバーは作成後にこれを実際の ID に置き換えます。</p>

<h3 id="transaction-response"><strong>トランザクション応答</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "transaction-response",
  "entry": [
    {
      "response": {
        "status": "201 Created",
        "location": "Patient/patient-001/_history/1",
        "etag": "W/\"1\"",
        "lastModified": "2025-01-15T08:00:00Z"
      }
    },
    {
      "response": {
        "status": "201 Created",
        "location": "Encounter/encounter-001/_history/1",
        "etag": "W/\"1\""
      }
    },
    {
      "response": {
        "status": "201 Created",
        "location": "Observation/obs-001/_history/1",
        "etag": "W/\"1\""
      }
    }
  ]
}
</code></pre>

<h3 id="transaction-processing"><strong>トランザクション処理ルール</strong></h3>

<ol>
<li>サーバーは次の順序で処理します: DELETE → POST → PUT/PATCH → GET (条件付き)</li>
<li>すべてのエントリは成功する必要があります → アトミック</li>
<li>入力に失敗した場合 → <strong>すべてのトランザクションのロールバック</strong></li>
<li><code>骨壷:uuid:</code> 参照は処理前に解決されます</li>
</ol>

<h2 id="3-batch-bundle"><strong>3. バッチバンドル</strong></h2>

<p>バッチ処理 <strong>独立した</strong> — 各エントリは個別に処理され、失敗したエントリは他のエントリに影響を与えません。</p>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "batch",
  "entry": [
    {
      "request": {
        "method": "GET",
        "url": "Patient/patient-001"
      }
    },
    {
      "request": {
        "method": "GET",
        "url": "Observation?subject=Patient/patient-001&category=vital-signs&_sort=-date&_count=5"
      }
    },
    {
      "request": {
        "method": "GET",
        "url": "Condition?subject=Patient/patient-001&clinical-status=active"
      }
    },
    {
      "request": {
        "method": "GET",
        "url": "MedicationRequest?subject=Patient/patient-001&status=active"
      }
    }
  ]
}
</code></pre>

<p>使用例: 4 回の個別の呼び出しではなく、1 回の API 呼び出しですべての患者情報を取得します。</p>

<h3 id="batch-response"><strong>バッチ応答</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "batch-response",
  "entry": [
    {
      "resource": {"resourceType": "Patient", "id": "patient-001", "...": "..."},
      "response": {"status": "200 OK"}
    },
    {
      "resource": {"resourceType": "Bundle", "type": "searchset", "...": "..."},
      "response": {"status": "200 OK"}
    },
    {
      "resource": {"resourceType": "Bundle", "type": "searchset", "...": "..."},
      "response": {"status": "200 OK"}
    },
    {
      "resource": {"resourceType": "OperationOutcome", "...": "..."},
      "response": {"status": "404 Not Found"}
    }
  ]
}
</code></pre>

<h2 id="4-so-sanh-transaction-batch"><strong>4. トランザクションとバッチの比較</strong></h2>

<table>
<thead>
<tr><th>特徴</th><th>トランザクション</th><th>バッチ</th></tr>
</thead>
<tbody>
<tr><td>原子性</td><td>✅ 全か無か</td><td>❌ 独立した</td></tr>
<tr><td>内部参照</td><td>✅ urn:uuid: 解決されました</td><td>❌ サポートされていません</td></tr>
<tr><td>障害対応</td><td>完全なロールバック</td><td>各エントリは独自のステータスを返します</td></tr>
<tr><td>パフォーマンス</td><td>遅い (トランザクション境界)</td><td>より高速（並列可能）</td></tr>
<tr><td>ユースケース</td><td>関連データ、一貫性が必要</td><td>バッチ読み取り、独立した書き込み</td></tr>
</tbody>
</table>

<h2 id="5-mixed-operations"><strong>5. トランザクション内の混合操作</strong></h2>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "request": {
        "method": "PUT",
        "url": "Patient/patient-001"
      },
      "resource": {"resourceType": "Patient", "id": "patient-001", "active": true}
    },
    {
      "request": {
        "method": "DELETE",
        "url": "Observation/obs-old-001"
      }
    },
    {
      "request": {
        "method": "POST",
        "url": "Observation"
      },
      "resource": {"resourceType": "Observation", "status": "final"}
    },
    {
      "request": {
        "method": "GET",
        "url": "Condition?subject=Patient/patient-001",
        "ifNoneMatch": "W/\"5\""
      }
    }
  ]
}
</code></pre>

<h2 id="6-tong-ket"><strong>6. まとめ</strong></h2>

<ul>
<li><p><strong>バンドル</strong> — 多くのリソースを収納できるコンテナ、8 種類</p></li>
<li><p><strong>トランザクション</strong> — アトミック、全か無か、内部参照には urn:uuid: を使用</p></li>
<li><p><strong>バッチ</strong> — 独立した処理、並列、各エントリは独自のステータスを返します</p></li>
<li><p>取引に適しているのは、 <strong>データの整合性</strong>、バッチは次のような場合に適しています。 <strong>パフォーマンス。パフォーマンス</strong></p></li>
</ul>
