---
id: 019e0a10-a102-7001-d001-f1a7f8000102
title: 第 2 課：FHIR R5 概述 - 架構與設計原則
slug: bai-2-tong-quan-fhir-r5-kien-truc-va-nguyen-tac-thiet-ke
description: >-
  FHIR 架構（資源、資料類型、可擴展性、RESTful API、訊息傳遞、文件）、80/20 設計原則、FHIR 成熟度模型 (FMM)、FHIR R4
  與 R5 的比較、規格中的模組。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 第 1 部分：HL7 和 FHIR 平台
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基礎到進階醫療資料標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ 建築 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 課：FHIR R5 概述 - 架構和</tspan>
      <tspan x="60" dy="42">設計原則</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基礎到進階醫療資料標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：HL7 和 FHIR 平台</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-kien-truc-tong-the-fhir"><strong>1.FHIR總體架構</strong></h2>

<p>FHIR 被設計為一個 <strong>平台。平台</strong> — 不只是一個資料標準，而是一個完整的健康資訊交換生態系統。 FHIR架構包含以下層：</p>

<h3 id="cac-tang-kien-truc"><strong>大樓地板</strong></h3>

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

<h2 id="2-resource-don-vi-co-ban"><strong>2.資源－FHIR的基本單位</strong></h2>

<p>在 FHIR 中，一切都表示為 <strong>資源</strong>。資源是基本構建塊——就像關係資料庫中的“表”，但更加靈活。</p>

<h3 id="dac-diem-resource"><strong>所有資源的共同特徵</strong></h3>

<p>所有資源都有：</p>

<ul>
<li><p><strong>編號</strong> — 邏輯標識符，伺服器內唯一</p></li>
<li><p><strong>元。元</strong> — 元資料（versionId、lastUpdated、設定檔、安全性、標籤）</p></li>
<li><p><strong>隱含規則</strong> — 參考特殊處理規則（很少使用）</p></li>
<li><p><strong>語言。語言</strong> — 資源的語言</p></li>
</ul>

<p>大多數資源是 <strong>域資源</strong> （繼承自Resource），新增：</p>

<ul>
<li><p><strong>文本。文字</strong> — 敘述（人類可讀的 HTML 部分）</p></li>
<li><p><strong>包含。包含</strong> — 嵌入的資源</p></li>
<li><p><strong>延伸</strong> — 擴充數據</p></li>
<li><p><strong>修飾符副檔名</strong> — 擴充改變了 Resource 的語意</p></li>
</ul>

<h3 id="vi-du-patient-json"><strong>範例：患者資源 (JSON)</strong></h3>

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

<h3 id="157-resources"><strong>157 資源依模組分類</strong></h3>

<p>FHIR R5 有 <strong>157 種資源類型</strong>，組織成模組：</p>

<table>
<thead>
<tr><th>模組</th><th>描述</th><th>典型資源</th></tr>
</thead>
<tbody>
<tr><td><strong>基金會</strong></td><td>基礎設施</td><td>捆綁包、操作結果、二進位、參數</td></tr>
<tr><td><strong>一致性</strong></td><td>一致性規範</td><td>能力聲明、結構定義、搜尋參數</td></tr>
<tr><td><strong>術語</strong></td><td>術語</td><td>程式碼系統、值集、概念圖</td></tr>
<tr><td><strong>安全性</strong></td><td>安全性</td><td>出處、審核事件、同意、許可</td></tr>
<tr><td><strong>行政管理</strong></td><td>行政管理</td><td>患者、從業人員、組織、地點、遭遇</td></tr>
<tr><td><strong>臨床</strong></td><td>臨床</td><td>病情、觀察、過敏不耐症、程序</td></tr>
<tr><td><strong>診斷</strong></td><td>診斷</td><td>診斷報告、標本、影像研究</td></tr>
<tr><td><strong>藥物</strong></td><td>醫學</td><td>藥物、藥物請求、免疫接種</td></tr>
<tr><td><strong>工作流程</strong></td><td>流程</td><td>任務、預約、時間表、服務請求</td></tr>
<tr><td><strong>金融</strong></td><td>金融</td><td>索賠、承保範圍、利益解釋</td></tr>
</tbody>
</table>

<h2 id="3-nguyen-tac-80-20"><strong>3. 80/20設計原則</strong></h2>

<p>FHIR 應用以下理念： <strong>解決基本標準中 80% 的常見用例，透過擴充和設定檔允許剩餘 20%</strong>。</p>

<p>這意味著：</p>

<ul>
<li><p><strong>基本資源夠簡單</strong> ——不要試圖在每一個特殊情況下都死記硬背</p></li>
<li><p><strong>擴充機制</strong> - 當您需要更多數據時，使用擴充功能而不是標準更改</p></li>
<li><p><strong>公司簡介</strong> — 當需要更嚴格的限制時，使用 StructureDefinition</p></li>
</ul>

<p>例如，基本資源患者沒有「CCCD號碼」欄位（僅在越南使用），但您可以透過擴充功能添加它或使用 <code>識別符</code> 與適當的系統。</p>

<h2 id="4-exchange-paradigms"><strong>4. 三種資料交換範式</strong></h2>

<p>FHIR支援3種資料交換方式，適合不同的情況：</p>

<h3 id="restful-api"><strong>4.1. RESTful API</strong></h3>

<p>最常見的方式，基於 HTTP 方法：</p>

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

<p><strong>使用時：</strong> Web/行動應用程式、患者入口網站、資料查詢、SMART 應用程式。</p>

<h3 id="messaging"><strong>4.2.訊息傳遞</strong></h3>

<p>在系統之間傳送訊息（類似 HL7 v2 但使用 FHIR 資源）：</p>

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

<p><strong>使用時：</strong> 事件驅動的交換（入院、出院、檢查結果），與遺留系統整合。</p>

<h3 id="documents"><strong>4.3.文件</strong></h3>

<p>建立結構化醫療文件（類似 CDA 但使用 FHIR）：</p>

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

<p><strong>使用時：</strong> 出院文件、病史摘要、轉診文件、國際病患摘要。</p>

<h2 id="5-fhir-maturity-model"><strong>5.FHIR成熟度模型（FMM）</strong></h2>

<p>FHIR 中的每個資源都有一個從 0 到正常 (N) 的成熟度等級 (FMM)：</p>

<table>
<thead>
<tr><th>FMM</th><th>等級</th><th>意義</th></tr>
</thead>
<tbody>
<tr><td>0</td><td>吃水</td><td>剛剛提出，尚未實施</td></tr>
<tr><td>1</td><td>草稿（已測試）</td><td>至少有 1 個實現</td></tr>
<tr><td>2</td><td>試用</td><td>在 Connectathon 上測試</td></tr>
<tr><td>3</td><td>試用（已驗證）</td><td>已經有很多實際的實現</td></tr>
<tr><td>4</td><td>試試（同意）</td><td>符合品質標準，標準準備</td></tr>
<tr><td>5</td><td>試用（已發布）</td><td>在 2 個以上投票週期中發布</td></tr>
<tr><td><strong>氮</strong></td><td><strong>規範性</strong></td><td><strong>穩定、向後相容 — 無需更改</strong></td></tr>
</tbody>
</table>

<p>部分資源已到達 <strong>規範性</strong> 在 R5 中：</p>
<ul>
<li><p><strong>病人</strong> (N), <strong>觀察</strong> (N), <strong>捆綁包</strong> (N), <strong>能力聲明</strong> (N)</p></li>
<li><p><strong>結構定義</strong> (N), <strong>值集</strong> (N), <strong>編碼系統</strong> (N)</p></li>
<li><p><strong>經營成果</strong> (N), <strong>二進位</strong> (N), <strong>參數</strong> (N)</p></li>
</ul>

<p>為專案選擇資源時，應優先選擇FMM≥3或Normal的資源，以確保穩定性。</p>

<h2 id="6-fhir-r4-vs-r5"><strong>6. FHIR R4 與 R5 — 重要變化</strong></h2>

<p>R4 仍然是最常用的版本（因為美國的許多法規都是基於 R4）。 R5帶來了很多改進：</p>

<table>
<thead>
<tr><th>特點</th><th>R4</th><th>R5</th></tr>
</thead>
<tbody>
<tr><td>訂閱</td><td>基於標準的訂閱</td><td><strong>基於主題的訂閱</strong> （訂閱主題）</td></tr>
<tr><td>工作流程</td><td>任務基本</td><td>新的運輸資源，改進的工作流程模式</td></tr>
<tr><td>實證醫學</td><td>限制</td><td>新證據、證據變數、ArtifactAssessment</td></tr>
<tr><td>新資源</td><td>—</td><td>權限、庫存項目、庫存報告、營養攝取量</td></tr>
<tr><td>觀察</td><td>基於組件的</td><td>改進觸發方式、實例化Canonical</td></tr>
<tr><td>搜尋</td><td>標準型</td><td>_filter、_sort 增強功能</td></tr>
<tr><td>類型</td><td>—</td><td>CodeableReference（新），integer64</td></tr>
</tbody>
</table>

<p><strong>推薦：</strong></p>
<ul>
<li><p>美國新項目：使用 <strong>R4</strong> （因為美國核心授權）</p></li>
<li><p>新的非約束性項目：注意事項 <strong>R5</strong> （更新，更多功能）</p></li>
<li><p>越南項目： <strong>R4</strong> 或 <strong>R5</strong> 都適合（尚無具體要求）</p></li>
</ul>

<h2 id="7-specification-modules"><strong>7. FHIR 規格中的模組</strong></h2>

<p>FHIR 規格分為主要模組：</p>

<h3 id="foundation-module"><strong>基礎模組</strong></h3>
<p>技術基礎：資源定義、資料類型、擴充功能、REST API、訊息傳遞、文件、敘述、分隔。</p>

<h3 id="implementer-support"><strong>實施者支援模組</strong></h3>
<p>部署支援：下載、測試工具、實施指南註冊、驗證。</p>

<h3 id="security-privacy"><strong>安全和隱私模組</strong></h3>
<p>安全性：授權、身分驗證、安全標籤、審核、同意、出處。</p>

<h3 id="conformance-module"><strong>一致性模組</strong></h3>
<p>一致性規格：CapabilityStatement、StructureDefinition、OperationDefinition、SearchParameter、實作指南。</p>

<h3 id="terminology-module"><strong>術語模組</strong></h3>
<p>術語：CodeSystem、ValueSet、ConceptMap、NamingSystem、術語操作（$validate-code、$expand、$lookup、$translate）。</p>

<h3 id="administration-module"><strong>管理模組</strong></h3>
<p>行政管理：病患、從業人員、組織、地點、醫療保健服務、端點、設備。</p>

<h3 id="clinical-modules"><strong>臨床模組</strong></h3>
<p>臨床模組包括：臨床摘要（病情、過敏不耐症、手術）、診斷（觀察、診斷報告）、藥物、護理提供（護理計劃、目標）、工作流程（任務、預約）。</p>

<h3 id="financial-module"><strong>金融模組</strong></h3>
<p>醫療財務：承保範圍、索賠、福利說明、帳戶、發票。</p>

<h2 id="8-resource-references"><strong>8. 資源引用－資源之間的連結</strong></h2>

<p>FHIR 中的資源連結在一起 <strong>參考文獻</strong>。這是創建醫療數據網路最重要的機制。</p>

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

<p>在上面的例子中：</p>
<ul>
<li><p><code>主題。主題</code> → 連結到 <strong>病人</strong></p></li>
<li><p><code>相遇。遭遇</code> → 連結到 <strong>相遇</strong> （參觀）</p></li>
<li><p><code>表演者</code> → 連結到 <strong>從業者</strong> （醫生措施）</p></li>
</ul>

<h2 id="9-narrative"><strong>9. 敘述－人類可讀的部分</strong></h2>

<p>每個 DomainResource 可以包含部分 <strong>敘事</strong> — HTML 代表人類可以閱讀的資源內容。這是一個重要的功能 <strong>臨床安全性</strong>：</p>

<pre><code class="language-json">{
  "text": {
    "status": "generated",
    "div": "&lt;div xmlns='http://www.w3.org/1999/xhtml'&gt;&lt;p&gt;Huyết áp: 120/80 mmHg&lt;/p&gt;&lt;p&gt;Bệnh nhân: Nguyễn Văn A&lt;/p&gt;&lt;p&gt;Ngày đo: 30/03/2026&lt;/p&gt;&lt;/div&gt;"
  }
}
</code></pre>

<p>敘述狀態可以是：</p>
<ul>
<li><p><code>產生的</code> — 根據結構化資料創建</p></li>
<li><p><code>擴充</code> — 包含來自擴充功能的訊息</p></li>
<li><p><code>額外的。額外的</code> — 具有未包含在結構化資料中的附加信息</p></li>
<li><p><code>空的</code> — 沒有內容（包含的資源中）</p></li>
</ul>

<h2 id="10-extensibility"><strong>10. 擴展性－FHIR的擴展機制</strong></h2>

<p>這是 FHIR 最強大的功能之一。當您需要標準中未包含的其他數據時，可以使用它 <strong>擴充</strong>：</p>

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

<p>兩條重要規則：</p>
<ol>
<li><p><strong>接收系統必須能夠讀取資源</strong> 即使你不理解擴展（優雅的處理）</p></li>
<li><p><strong>擴展不得改變語義</strong> 基本元素的數量（modifierExtension 除外）</p></li>
</ol>

<h2 id="11-tom-tat"><strong>11. 總結</strong></h2>

<p>在這篇文章中，我們了解到：</p>

<ul>
<li><p><strong>FHIR架構</strong> 包括許多層：基礎→資料類型→資源→交換→設定檔→IG</p></li>
<li><p><strong>資源</strong> FHIR R5作為基本單元，擁有157種資源類型</p></li>
<li><p><strong>80/20 規則</strong>：基本標準解決 80%，擴充解決 20%</p></li>
<li><p><strong>3個範式</strong>：REST（最受歡迎）、訊息傳遞、文檔</p></li>
<li><p><strong>FMM</strong>：評估成熟度水平，優先考慮資源規範</p></li>
<li><p><strong>R4 與 R5</strong>：R4比較穩定，R5有許多新功能</p></li>
<li><p><strong>參考文獻</strong>：如何將資源連結到數據網路中</p></li>
<li><p><strong>敘事</strong>：人類可讀的 HTML 部分，用於臨床安全</p></li>
<li><p><strong>可擴展性</strong>：不違反標準的靈活擴展機制</p></li>
</ul>

<p>下節課我們將 <strong>練習設定環境</strong>：HAPI FHIR 伺服器、Postman、FHIR 工具 — 並測試您的第一個 CRUD 操作。</p>
