---
id: 019e0a10-a101-7001-d001-f1a7f8000101
title: 第 1 課：HL7 簡介和醫療資料標準的歷史
slug: bai-1-gioi-thieu-hl7-va-lich-su-chuan-du-lieu-y-te
description: >-
  了解 HL7 International 是什麼、開發醫療保健資料標準（HL7 v2、HL7
  v3/RIM、CDA）的歷史、為什麼需要醫療資料標準化、醫療保健領域的互通性挑戰，以及 FHIR 如何誕生以解決先前標準的限制。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：HL7 和 FHIR 平台
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基礎到進階醫療資料標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🏗️ 建築 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 1 課：HL7 簡介與資料標準歷史</tspan>
      <tspan x="60" dy="42">醫療材料</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基礎到進階醫療資料標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：HL7 和 FHIR 平台</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-tai-sao-can-chuan-du-lieu-y-te"><strong>1. 為什麼需要標準化醫療數據？</strong></h2>

<p>想像一下，你去A醫院檢查，被診斷出患有第2型糖尿病，並開了藥。下週，你因為另一個原因去B醫院。 B 醫院的醫生無法看到 A 醫院的病歷——因為這兩個系統根本無法互相「對話」。</p>

<p>這並不是一個罕見的故事。其實，這是 <strong>最常見的問題</strong> 在全球數位健康產業。每個醫院、每個診所使用不同的軟體，以不同的方式儲存數據，並且沒有一種「通用語言」來交換資訊。</p>

<h3 id="interoperability-la-gi"><strong>什麼是互通性？</strong></h3>

<p><strong>互通性</strong> 醫療保健中的（互通性）是指不同醫療保健資訊系統能夠：</p>

<ul>
<li><strong>資料交換</strong> (Exchange) — 在系統之間發送和接收數據</li>
<li><strong>了解數據</strong> （解釋）－接收系統能夠理解資料的正確意義</li>
<li><strong>數據使用情況</strong> （使用）－收到的數據可用於支援臨床決策</li>
</ul>

<p>互通性有 4 個等級：</p>

<table>
<thead>
<tr><th>等級</th><th>名稱</th><th>描述</th><th>例如</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>基礎</td><td>在兩個系統之間發送/接收數據</td><td>發送測試結果的 PDF 文件</td></tr>
<tr><td>2</td><td>結構性</td><td>資料具有統一的結構</td><td>以 HL7 v2 訊息的形式傳送測試結果</td></tr>
<tr><td>3</td><td>語意學</td><td>雙方理解相同的意思</td><td>ICD-10代碼“E11.9”被理解為“第2型糖尿病”</td></tr>
<tr><td>4</td><td>組織性</td><td>有流程、有政策、有法律支持</td><td>該通知允許醫院之間共享數據</td></tr>
</tbody>
</table>

<h3 id="hau-qua-thieu-interoperability"><strong>缺乏互通性的後果</strong></h3>

<ul>
<li><p><strong>重複測試</strong> — 由於新醫院沒有舊結果，病人必須重新進行檢查</p></li>
<li><p><strong>醫療錯誤</strong> — 醫生不知道病人對哪些藥物過敏或正在服用哪些藥物</p></li>
<li><p><strong>成本增加</strong> — 據估計，由於缺乏互通性，美國每年浪費 300 億美元</p></li>
<li><p><strong>延遲治療</strong> — 必須等待紙本轉帳文件</p></li>
<li><p><strong>醫學研究有限</strong> — 多中心資料無法聚合</p></li>
</ul>

<h2 id="2-hl7-international"><strong>2. HL7 International－醫療資料標準背後的組織</strong></h2>

<p><strong>HL7（健康七級）</strong> 國際標準組織是一個非營利標準組織，成立於 <strong>1987年</strong>，總部位於美國密西根州安娜堡。 「七級」這個名稱指的是 OSI 模型中的第七層（應用程式層），也就是應用程式相互通訊的層。</p>

<p>HL7國際還有更多 <strong>1,600 名會員</strong> 更多的話 <strong>55 個國家</strong>，包括醫療軟體供應商、醫院、政府組織、保險公司和研究組織。</p>

<h3 id="cac-chuan-hl7-da-phat-trien"><strong>HL7標準已發展</strong></h3>

<p>在超過 35 年的時間裡，HL7 開發了許多數據標準，每個標準都滿足了時代的需求：</p>

<h2 id="3-hl7-v2"><strong>3. HL7 版本 2 (v2) — 世界上最受歡迎的標準</strong></h2>

<h3 id="lich-su-hl7-v2"><strong>歷史</strong></h3>

<p>HL7 v2 今年首次發布 <strong>1989年</strong> 並迅速成為世界上最受歡迎的醫療數據交換標準。迄今為止，預計 <strong>美國95%的醫院</strong> 和 <strong>35+ 個國家</strong> 使用 HL7 v2。</p>

<h3 id="cau-truc-hl7-v2"><strong>HL7 v2 訊息結構</strong></h3>

<p>HL7 v2 使用帶有管道分隔字元的文字格式：</p>

<pre><code>MSH|^~\&amp;|HIS|BVBACHMAI|LIS|LABXN|202603301000||ADT^A01|MSG00001|P|2.5
EVN|A01|202603301000
PID|1||MRN12345^^^BVBACHMAI||NGUYEN^VAN^A||19850315|M|||123 Le Loi^^HCM^^700000^VN
PV1|1|I|W4B^401^1|||||||||||||||VN001|||||||||||||||||||||||||202603300800
</code></pre>

<p>說明：</p>
<ul>
<li><p><strong>MSH</strong> — 訊息頭：有關訊息的資訊（來源、目的地、類型、版本）</p></li>
<li><p><strong>埃文網絡</strong> — 事件：觸發訊息的事件（A01 = 住院）</p></li>
<li><p><strong>PID</strong> — 病患識別：病患訊息</p></li>
<li><p><strong>PV1</strong> — 病人就診：有關就診/住院的信息</p></li>
</ul>

<h3 id="uu-nhuoc-diem-hl7-v2"><strong>優點和缺點</strong></h3>

<table>
<thead>
<tr><th>優點</th><th>缺點</th></tr>
</thead>
<tbody>
<tr><td>廣泛流行，大力支持</td><td>選項太多，每個實作都不同</td></tr>
<tr><td>簡單、輕量</td><td>沒有嚴格的模型（每個欄位可以有不同的使用方式）</td></tr>
<tr><td>數百萬個介面正在運行</td><td>向後相容複合體 (v2.1 → v2.9)</td></tr>
<tr><td>許多支援工具（Mirth、Rhapsody）</td><td>本身不支援 Web/REST</td></tr>
</tbody>
</table>

<h2 id="4-hl7-v3-rim"><strong>4. HL7版本3與參考資訊模型（RIM）</strong></h2>

<h3 id="tham-vong-v3"><strong>激進標準化的野心</strong></h3>

<p>意識到v2的局限性，HL7開始開發 <strong>v3</strong> 自 20 世紀 90 年代末以來，我們的目標是為整個醫療保健產業創建一個統一、連貫的資料模型。</p>

<p>HL7 v3 的核心是 <strong>RIM（參考資訊模型）</strong> — 描述醫療保健中所有概念的抽象物件模型：</p>

<ul>
<li><p><strong>法案</strong> — 醫療行為（檢查、測試、處方......）</p></li>
<li><p><strong>實體</strong> — 實體（病人、醫生、藥物、設備...）</p></li>
<li><p><strong>角色</strong> — 角色（病人、醫護人員、提供者…）</p></li>
<li><p><strong>參與</strong> — 參與（誰參與哪個行動）</p></li>
<li><p><strong>行為關係</strong> ——動作之間的關係</p></li>
<li><p><strong>角色連結</strong> ——角色之間的關係</p></li>
</ul>

<h3 id="van-de-v3"><strong>HL7 v3 的問題</strong></h3>

<p>儘管v3/RIM在理論上非常嚴格，但在實踐中：</p>

<ul>
<li><p><strong>太複雜了</strong> — XML訊息繁瑣且難以實現</p></li>
<li><p><strong>困難的學習曲線</strong> — 需要深入了解 RIM 才能進行部署</p></li>
<li><p><strong>成本高</strong> — 實施的時間和資源龐大</p></li>
<li><p><strong>採用率低</strong> — 很少有組織成功部署純 HL7 v3</p></li>
</ul>

<h2 id="5-cda"><strong>5.CDA（臨床文件架構）</strong></h2>

<p><strong>CDA</strong> 是最成功的 HL7 v3 標準，廣泛用於臨床文件交換。 CDA 使用 XML 建立醫療文檔，包括：</p>

<ul>
<li><p><strong>標頭</strong> — 元資料（病患、作者、機構、創建日期）</p></li>
<li><p><strong>身體</strong> — 臨床內容，可能分為 3 個等級：
<ul>
<li><strong>1級</strong>：非結構化主體（PDF/文字）</li>
<li><strong>2級</strong>：帶有敘述性文本的部分</li>
<li><strong>3級</strong>：完全結構化、編碼的條目</li>
</ul></p></li>
</ul>

<p>CDA廣泛應用於 <strong>C-CDA（綜合 CDA）</strong> 在美國，用於有意義的使用/促進互通性，以及在歐洲和日本的許多項目。</p>

<h3 id="han-che-cda"><strong>CDA 的局限性</strong></h3>

<ul>
<li><p>剛好適合 <strong>基於文檔的交換</strong> （交換文件）</p></li>
<li><p>不支援 <strong>資料級交換</strong> （查詢各個資料欄位）</p></li>
<li><p>XML比較複雜，需要了解RIM</p></li>
<li><p>不支援現代行動/網路應用程式</p></li>
</ul>

<h2 id="6-fhir-ra-doi"><strong>6. FHIR 誕生——互通性的新“火”</strong></h2>

<h3 id="nguon-goc-fhir"><strong>產地</strong></h3>

<p>年份 <strong>2011年</strong>, <strong>格雷厄姆·格里夫</strong> — HL7 最資深的開發人員之一 — 提出了一種全新的方法。他建議不要嘗試對所有內容進行建模（如 v3）：</p>

<blockquote>
<p>“基於現代 Web 技術（REST、JSON、OAuth）構建一組簡單、動態可組合的資源，並應用 80/20 原則 — 以 20% 的複雜性解決 80% 的用例。”</p>
</blockquote>

<p>名稱 <strong>FHIR</strong> （發音為“fire”）是縮寫 <strong>快速醫療保健互通性資源</strong>，反映目標：</p>

<ul>
<li><p><strong>快</strong> — 快速實施，易於學習</p></li>
<li><p><strong>醫療保健</strong> ——注重健康</p></li>
<li><p><strong>互通性</strong> — 系統之間的互通性</p></li>
<li><p><strong>資源</strong> — 資料的基本可組合單位</p></li>
</ul>

<h3 id="cac-milestone-fhir"><strong>FHIR的發展里程碑</strong></h3>

<table>
<thead>
<tr><th>年份</th><th>版本</th><th>突出特點</th></tr>
</thead>
<tbody>
<tr><td>2012年</td><td>DSTU 0（草案）</td><td>第一個測試版本</td></tr>
<tr><td>2014年</td><td>DSTU 1 (R1)</td><td>標準試行初稿</td></tr>
<tr><td>2015年</td><td>DSTU 2 (R2)</td><td>採用率開始急劇增加</td></tr>
<tr><td>2017年</td><td>STU 3 (R3)</td><td>標準試用，眾多新資源</td></tr>
<tr><td>2019年</td><td>R4</td><td><strong>規範第一</strong> — 患者，觀察，捆綁穩定</td></tr>
<tr><td>2020年</td><td>R4B</td><td>R4的小更新</td></tr>
<tr><td>2023年</td><td><strong>R5</strong></td><td>目前版本 - 基於主題的訂閱，許多改進</td></tr>
<tr><td>~2026+</td><td>R6</td><td>開發中 — AI/ML 集成，改進的工作流程</td></tr>
</tbody>
</table>

<h3 id="tai-sao-fhir-thanh-cong"><strong>FHIR 為何成功？</strong></h3>

<ol>
<li><p><strong>基於網路標準</strong> — REST、JSON、XML、OAuth 2.0、HTTP</p></li>
<li><p><strong>易於實施</strong> — 許多開發人員在 1 天內就可以運行介面</p></li>
<li><p><strong>規格免費</strong> — 無許可費</p></li>
<li><p><strong>許多圖書館都支持</strong> — HAPI FHIR (Java)、fhir.js、fhirclient.py、Firely (.NET)</p></li>
<li><p><strong>良好的擴展性</strong> — 擴展機制允許在不破壞標準的情況下進行擴展</p></li>
<li><p><strong>人類可讀</strong> — 每個資源都有 HTML 敘述部分</p></li>
<li><p><strong>支援多種範式</strong> — REST、訊息傳遞、文件、服務</p></li>
<li><p><strong>政府要求</strong> — 美國 (ONC/CMS)、澳洲、英國、歐盟都有授權</p></li>
</ol>

<h2 id="7-so-sanh-cac-chuan-hl7"><strong>7. 對比HL7標準</strong></h2>

<table>
<thead>
<tr><th>標準</th><th>HL7 v2</th><th>HL7 v3</th><th>CDA</th><th>FHIR</th></tr>
</thead>
<tbody>
<tr><td>出生年份</td><td>1989年</td><td>~2000</td><td>2005年</td><td>2014年</td></tr>
<tr><td>格式</td><td>豎線分隔的文字</td><td>XML</td><td>XML</td><td>JSON、XML、RDF</td></tr>
<tr><td>資料模型</td><td>隱式（鬆散）</td><td>RIM（嚴格）</td><td>RIM（文件）</td><td>資源（可組合）</td></tr>
<tr><td>範式</td><td>訊息傳遞</td><td>訊息傳遞</td><td>文件</td><td>REST + 訊息傳遞 + 文檔</td></tr>
<tr><td>實施複雜度</td><td>平均</td><td>非常高</td><td>高</td><td>低</td></tr>
<tr><td>網路/行動支援</td><td>否</td><td>否</td><td>限制</td><td>本地人</td></tr>
<tr><td>領養</td><td>非常高（傳統）</td><td>低</td><td>平均</td><td>快速增加</td></tr>
<tr><td>人類可讀</td><td>否</td><td>否</td><td>是（敘述部分）</td><td>是（資源敘述）</td></tr>
</tbody>
</table>

<h2 id="8-fhir-tren-toan-cau"><strong>8. 全球 FHIR — 誰在使用它？</strong></h2>

<h3 id="hoa-ky"><strong>美國</strong></h3>
<ul>
<li><p><strong>21世紀治癒法案</strong> (2020)：請 EHR 供應商支援 FHIR API（美國核心）</p></li>
<li><p><strong>CMS 互通性規則</strong>：請付款人（保險）提供基於FHIR的Patient Access API</p></li>
<li><p><strong>ONC 特氟卡</strong>：國家資料交換框架，FHIR是基礎</p></li>
<li><p>Epic、Cerner (Oracle Health)、Allscripts 都有 FHIR API</p></li>
</ul>

<h3 id="chau-au"><strong>歐洲</strong></h3>
<ul>
<li><p><strong>歐洲健康資料空間 (EHDS)</strong>：歐盟法規使用 FHIR 取得跨境健康數據</p></li>
<li><p><strong>國際病患摘要 (IPS)</strong>：基於 FHIR，允許國際共享臨床摘要</p></li>
</ul>

<h3 id="uc"><strong>澳洲</strong></h3>
<ul>
<li><p><strong>AU 基地實施指南</strong>：全國標準FHIR概況</p></li>
<li><p><strong>我的健康記錄</strong>：使用 FHIR 的國家健康記錄系統</p></li>
</ul>

<h3 id="viet-nam"><strong>越南</strong></h3>
<ul>
<li><p>FHIR 没有官方授权，但已列入医疗保健数字化路线图</p></li>
<li><p>通告 54/2017/TT-BYT 规范医疗数据互操作性标准（FHIR 尚未使用）</p></li>
<li><p>关于电子病历的第 46/2018/TT-BYT 号通知</p></li>
<li><p>多個開創性項目正在測試 FHIR</p></li>
<li><p>制定越南 FHIR 實施指南的絕佳機會</p></li>
</ul>

<h2 id="9-khai-niem-co-ban-fhir"><strong>9. 您首先需要了解的基本 FHIR 概念</strong></h2>

<p>在深入阅读下一篇文章之前，让我们先熟悉一些重要术语：</p>

<table>
<thead>
<tr><th>術語</th><th>說明</th><th>例如</th></tr>
</thead>
<tbody>
<tr><td><strong>資源</strong></td><td>FHIR中資料的基本單位</td><td>病人、觀察、遭遇</td></tr>
<tr><td><strong>資料類型</strong></td><td>資源中使用的資料類型</td><td>人名、地址、CodeableConcept</td></tr>
<tr><td><strong>擴充</strong></td><td>如何將自訂資料新增至資源</td><td>將“種族”欄位新增至患者</td></tr>
<tr><td><strong>公司簡介</strong></td><td>將資源綁定到特定用例</td><td>美國核心患者概況</td></tr>
<tr><td><strong>術語</strong></td><td>醫療編碼系統</td><td>ICD-10、SNOMED CT、LOINC</td></tr>
<tr><td><strong>捆綁包</strong></td><td>收集大量資源</td><td>搜尋結果、交易</td></tr>
<tr><td><strong>參考</strong></td><td>資源之間的連結</td><td>觀察.對象 → 患者/123</td></tr>
<tr><td><strong>實施指南</strong></td><td>針對具體情況的 FHIR 實施指南</td><td>美國核心IG、IPS IG</td></tr>
</tbody>
</table>

<h2 id="10-tom-tat"><strong>10. 總結</strong></h2>

<p>在這篇文章中，我們了解到：</p>

<ul>
<li><p><strong>互通性</strong> 是数字健康最大的挑战，包括4个层次</p></li>
<li><p><strong>HL7國際</strong> 是一家领先的医疗标准组织，自 1987 年开始运营</p></li>
<li><p><strong>HL7 v2</strong> 最受歡迎但缺乏一致性</p></li>
<li><p><strong>HL7 v3/RIM</strong> 嚴格但過於複雜</p></li>
<li><p><strong>CDA</strong> 文件交換成功，但資料級存取受限</p></li>
<li><p><strong>FHIR</strong> 综合了所有优点，基于web标准，易于实现</p></li>
<li><p><strong>FHIR R5</strong> 是当前版本，R4标准是使用最多的稳定版本</p></li>
<li><p>許多國家都有 <strong>必填</strong> 使用 FHIR，越南已列入路線圖</p></li>
</ul>

<p>下一篇文章我們將深入探討 <strong>FHIR R5架構</strong> — 了解资源、数据类型、可扩展性和核心设计原则。</p>
