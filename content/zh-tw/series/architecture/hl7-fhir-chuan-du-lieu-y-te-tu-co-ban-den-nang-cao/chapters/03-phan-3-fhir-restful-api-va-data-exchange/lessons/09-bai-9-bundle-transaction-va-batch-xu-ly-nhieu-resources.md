---
id: 019e0a10-a302-7001-d001-f1a7f8000302
title: 第 9 課：捆綁、事務和批次 - 處理多個資源
slug: bai-9-bundle-transaction-va-batch-xu-ly-nhieu-resources
description: 資源包和類型（搜尋集、事務、批次、文件、訊息、集合、歷史記錄）。事務處理規則、原子操作、條件引用、批次、練習建立事務包。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: 第 3 部分：FHIR RESTful API 和資料交換
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基礎到進階醫療資料標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ 建築 — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 9 課：捆綁、事務和批次 - 處理</tspan>
      <tspan x="60" dy="42">管理許多資源</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基礎到進階醫療資料標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：FHIR RESTful API 和資料交換</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-bundle-resource"><strong>1. 捆綁資源</strong></h2>

<p><strong>捆綁包</strong> 是一個包含許多資源的容器。這就是 FHIR 在一次請求中處理多個資源、打包文件並傳回搜尋結果的方式。</p>

<h3 id="bundle-types"><strong>捆綁類型</strong></h3>

<table>
<thead>
<tr><th>類型</th><th>描述</th><th>使用案例</th></tr>
</thead>
<tbody>
<tr><td>搜尋集</td><td>搜尋結果</td><td>GET 搜尋的回應</td></tr>
<tr><td>交易。交易</td><td>原子操作組</td><td>創建許多相關資源</td></tr>
<tr><td>批次。批次</td><td>獨立營運組</td><td>批次操作，每個條目獨立處理</td></tr>
<tr><td>文檔。文件</td><td>FHIR 文件</td><td>臨床文件（組成+資源）</td></tr>
<tr><td>消息。留言</td><td>FHIR訊息</td><td>訊息傳遞範例（MessageHeader + 有效負載）</td></tr>
<tr><td>收藏</td><td>收藏</td><td>無需特定互動即可池化資源</td></tr>
<tr><td>歷史。歷史</td><td>歷史變遷</td><td>_history的回應</td></tr>
<tr><td>訂閱通知</td><td>認購須知</td><td>即時通知</td></tr>
</tbody>
</table>

<h2 id="2-transaction-bundle"><strong>2. 交易捆綁</strong></h2>

<p>事務包處理 <strong>原子的</strong> — 所有成功的條目或所有回滾。</p>

<h3 id="transaction-example"><strong>例如：同時建立患者+遭遇+觀察</strong></h3>

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

<h3 id="transaction-references"><strong>事務中的條件引用</strong></h3>

<p>使用 <code>甕：uuid：</code> 建立一個臨時 ID，以便同一交易中的條目相互引用。伺服器建立後會將其替換為實際的ID。</p>

<h3 id="transaction-response"><strong>交易回應</strong></h3>

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

<h3 id="transaction-processing"><strong>交易處理規則</strong></h3>

<ol>
<li>伺服器依序處理：DELETE → POST → PUT/PATCH → GET（有條件）</li>
<li>所有條目必須成功 → 原子</li>
<li>如果任何輸入失敗 → <strong>所有事務回滾</strong></li>
<li><code>甕：uuid：</code> 在處理之前解析引用</li>
</ol>

<h2 id="3-batch-bundle"><strong>3. 批量捆綁</strong></h2>

<p>批量處理 <strong>獨立的</strong> — 每個條目單獨處理，失敗的條目不會影響其他條目。</p>

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

<p>使用案例：透過一次 API 呼叫（而不是 4 次單獨的呼叫）來獲取所有患者資訊。</p>

<h3 id="batch-response"><strong>大量響應</strong></h3>

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

<h2 id="4-so-sanh-transaction-batch"><strong>4. 比較事務與批量</strong></h2>

<table>
<thead>
<tr><th>特點</th><th>交易</th><th>批次</th></tr>
</thead>
<tbody>
<tr><td>原子性</td><td>✅ 全有或全無</td><td>❌ 獨立</td></tr>
<tr><td>內部參考文獻</td><td>✅ urn:uuid: 已解決</td><td>❌ 不支持</td></tr>
<tr><td>故障處理</td><td>完全回滾</td><td>每個條目返回其自己的狀態</td></tr>
<tr><td>效能</td><td>較慢（事務邊界）</td><td>更快（可以並行）</td></tr>
<tr><td>使用案例</td><td>相關數據，需要一致性</td><td>批量讀取，獨立寫入</td></tr>
</tbody>
</table>

<h2 id="5-mixed-operations"><strong>5、事務中的混合操作</strong></h2>

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

<h2 id="6-tong-ket"><strong>六、總結</strong></h2>

<ul>
<li><p><strong>捆綁包</strong> — 多種資源的容器，8 種不同類型</p></li>
<li><p><strong>交易</strong> — 原子性，全有或全無，使用 urn:uuid: 進行內部引用</p></li>
<li><p><strong>批次</strong> — 獨立處理，並行，每個條目返回自己的狀態</p></li>
<li><p>交易適合 <strong>資料完整性</strong>,批量適用於 <strong>性能。表現</strong></p></li>
</ul>
