---
id: 019d8b30-b201-7001-c002-e0c5f8200101
title: 第 1 課：HashiCorp Vault 簡介 - 企業中的秘密管理
slug: bai-1-gioi-thieu-hashicorp-vault-secret-management-trong-enterprise
description: >-
  了解 HashiCorp Vault 是什麼、為什麼需要集中式機密管理、Vault 架構（存儲後端、屏障、機密引擎、身份驗證方法、審核設備、系統後端）、與
  AWS Secrets Manager/Azure Key Vault/Google Secret Manager 的比較以及實際使用案例。 Vault
  1.21.x 概述。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：HashiCorp Vault 平台
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-1997" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-1997）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="714" cy="32" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="828" cy="206" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="942" cy="120" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="1056" cy="34" r="18" fill="#f472b6" opacity="0.13"/>
    <圓cx =“670”cy =“208”r =“20”填滿=“#f472b6”不透明度=“0.05”/>
    <圓cx =“750”cy =“80”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“750”cy =“136”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“750”cy =“164”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“778”cy =“80”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“778”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <圓cx =“806”cy =“80”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“806”cy =“136”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“806”cy =“164”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“834”cy =“80”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“834”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“834”cy =“136”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“834”cy =“164”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <圓cx =“862”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“862”cy =“136”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <圓cx =“890”cy =“80”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“890”cy =“136”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“890”cy =“164”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <line x1 =“600”y1 =“172”x2 =“1100”y2 =“252”筆畫=“#f472b6”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“202”x2 =“1050”y2 =“272”筆畫=“#f472b6”筆畫寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=「1045.38268590218,208.5 1045.38268590218,235.5 1022,249 998.6173140978201,235.5 998.61738.61732095. 1022,195”填滿=“無”描邊=“#f472b6”描邊寬度=“1”不透明度=“0.12”/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#f472b6”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“#f472b6”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — 第 1 課</text>

  <!-- 標題 -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 1 課：HashiCorp Vault 簡介 - 秘密</tspan>
      <tspan x="60" dy="42">企業管理</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：HashiCorp Vault 平台</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-hashicorp-vault-la-gi"><strong>1.什麼是 HashiCorp Vault？ </strong></h2>
<p><strong>HashiCorp Vault</strong> 是一種開源機密管理解決方案，能夠儲存、存取和嚴格控制敏感資訊，例如密碼、API 金鑰、憑證、加密金鑰和其他機密。 Vault 由 HashiCorp 開發，目前是基礎設施安全的領先工具之一。 </p>

<p>Vault 為所有類型的機密提供統一的介面，同時嚴格控制存取並記錄每次互動的詳細審核日誌。 </p>

<h3 id="lich-su-phat-trien"><strong>發展史</strong></h3>
<ul>
<li><p><strong>2015</strong>：HashiCorp Vault 0.1 推出 - 基本機密管理</p></li>
<li><p><strong>2017 年</strong>：Vault 0.9 — 身分秘密引擎、Sentinel 策略（企業）</p></li>
<li><p><strong>2018</strong>：Vault 1.0 — 整合式儲存 (Raft)、自動解封、多項生產改善</p></li>
<li><p><strong>2020</strong>：Vault 1.5 — Transform Secrets Engine、UI 改進</p></li>
<li><p><strong>2022 年</strong>：Vault 1.12 — ACME 協定 cho PKI、Vault Agent 改良</p></li>
<li><p><strong>2024 年</strong>：Vault 1.17 — Vault Secrets Operator GA，事件系統</p></li>
<li><p><strong>2025-2026</strong>：Vault 1.21.x — 目前版本，具有 SPIFFE 驗證、MFA TOTP 自行註冊、Azure 靜態角色、機密復原</p></li>
</ul>

<h2 id="2-tai-sao-can-secret-management"><strong>2.為什麼需要集中式秘密管理？ </strong></h2>
<p>在現代企業系統中，秘密無所不在：</p>
<ul>
<li><p>每個微服務的資料庫憑證</p></li>
<li><p>用於與第三方服務整合的 API 金鑰</p></li>
<li><p>服務之間 mTLS 的 TLS 憑證</p></li>
<li><p>SSH 金鑰用於伺服器存取</p></li>
<li><p>雲端憑證（AWS IAM、Azure 服務主體、GCP 服務帳戶）</p></li>
<li><p>靜態資料的加密金鑰</p></li>
</ul><p>如果沒有集中式解決方案，秘密通常是：</p>
<ul>
<li><p><strong>秘密蔓延</strong> - 秘密分散在設定檔、環境變數、CI/CD 管道</p></li>
<li><p><strong>缺乏輪替</strong> - 切勿更改憑證，以免影響系統</p></li>
<li><p><strong>缺少審核</strong> - 不知道誰在何時訪問了哪個秘密</p></li>
<li><p><strong>硬編碼機密</strong> - 機密直接提交到原始碼</p></li>
<li><p><strong>權限過高</strong> - 開發人員擁有超出必要的存取權</p></li>
</ul>

<h2 id="3-kien-truc-vault"><strong>3. HashiCorp Vault 架構</strong></h2>
<p>Vault 採用模組化架構，包含以下主要元件：</p>

<h3 id="storage-backend"><strong>儲存後端</strong></h3>
<p>儲存後端負責儲存加密資料。 Vault 與儲存後端無關—所有資料在寫入之前都經過加密。選項包括：</p>
<ul>
<li><p><strong>整合式儲存 (Raft)</strong> — 建議、內建、HA 支援</p></li>
<li><p><strong>Consul</strong> — HashiCorp Consul 儲存後端</p></li>
<li><p><strong>File</strong> — 本機檔案系統，不支援HA</p></li>
<li><p><strong>記憶體中</strong> - 僅用於開發</p></li>
</ul>

<h3 id="barrier"><strong>屏障（加密層）</strong></h3>
<p>Barrier 是 Vault 周圍的加密層。任何進出 Vault 的資料均使用 AES-256-GCM 進行加密。只有當金庫處於未密封狀態時，屏障才會「打開」。 </p>

<h3 id="secrets-engines"><strong>秘密引擎</strong></h3>
<p>秘密引擎是儲存、產生或編碼資料的元件。每個引擎都安裝在單獨的路徑上：</p>
<ul>
<li><p><strong>KV</strong> — 儲存鍵值對（靜態秘密）</p></li>
<li><p><strong>資料庫</strong> — sinh 動態資料庫憑證</p></li>
<li><p><strong>PKI</strong> — 憑證授權單位、sinh TLS 憑證</p></li>
<li><p><strong>Transit</strong> — 加密即服務</p></li>
<li><p><strong>AWS/Azure/GCP</strong> — sinh 動態雲憑證</p></li>
<li><p><strong>SSH</strong> — 簽署的 SSH 證書或 OTP</p></li>
</ul>

<h3 id="auth-methods"><strong>驗證方法</strong></h3>
<p>身份驗證方法對客戶端進行身份驗證並指派身份+策略：</p>
<ul>
<li><p><strong>令牌</strong> — 使用 Vault 令牌進行驗證</p></li>
<li><p><strong>AppRole</strong> — cho 機器對機器驗證</p></li>
<li><p><strong>LDAP/OIDC</strong> — 人類使用者驗證</p></li>
<li><p><strong>Kubernetes</strong> — 基於 Pod 的身份驗證</p></li>
<li><p><strong>AWS/Azure/GCP</strong> — 雲端工作負載驗證</p></li>
<li><p><strong>SPIFFE</strong> — 基於 SVID 的驗證（1.21 中的新增功能）</p></li>
</ul>

<h3 id="audit-devices"><strong>審核設備</strong></h3>
<p>審核設備記錄 Vault 的每個請求和回應。無論身份驗證或授權成功或失敗，每個請求都會被記錄。 </p>

<h2 id="4-so-sanh-vault-vs"><strong>4。將 Vault 與其他解決方案進行比較</strong></h2><表>
<標題>
<tr>
<th>功能</th>
<th>HashiCorp 金庫</th>
<th>AWS Secrets Manager</th>
<th>Azure 金鑰保管庫</th>
<th>GCP 秘密經理</th>
</tr>
</標題>
<正文>
<tr>
<td>開源</td>
<td>✅（社群版）</td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>多雲</td>
<td>✅</td>
<td>❌（僅限 AWS）</td>
<td>❌（僅限 Azure）</td>
<td>❌（僅限 GCP）</td>
</tr>
<tr>
<td>動態秘密</td>
<td>✅</td>
<td>⚠️（有限）</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>PKI/CA</td>
<td>✅</td>
<td>❌</td>
<td>✅（有限）</td>
<td>❌</td>
</tr>
<tr>
<td>加密即服務</td>
<td>✅（公車）</td>
<td>❌</td>
<td>✅（有限）</td>
<td>❌</td>
</tr>
<tr>
<td>SSH 證書</td>
<td>✅</td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>本地</td>
<td>✅</td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>插件生態系</td>
<td>✅（可擴展）</td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
</tr>
</tbody>
</表>

<h2 id="5-cac-use-cases"><strong>5。 Vault 的關鍵用例</strong></h2>

<h3 id="static-secrets"><strong>靜態機密管理</strong></h3>
<p>使用 KV 秘密引擎將任意字串儲存、旋轉和加密為鍵值對。適用於 API 金鑰、設定值、資料庫密碼。 </p>

<h3 id="dynamic-credentials"><strong>動態憑證</strong></h3>
<p>為資料庫（PostgreSQL、MySQL、MongoDB）、雲端提供者（AWS IAM、Azure SP、GCP SA）和訊息傳遞系統產生具有有限 TTL 的按需憑證。憑證過期後會自動撤銷。 </p>

<h3 id="encryption-as-a-service"><strong>加密即服務</strong></h3>
<p>使用 Transit Secrets Engine 加密/解密數據，而無需在應用程式中儲存加密金鑰。應用程式將明文發送到 Vault 並接收傳回的密文。 </p>

<h3 id="pki-certificate-management"><strong>PKI/憑證管理</strong></h3>
<p>Vault PKI Secrets Engine 充當完整的憑證授權機構，產生/簽署 TLS 憑證、管理憑證生命週期、CRL、OCSP 並支援 ACME 協定。 </p>

<h3 id="identity-based-access"><strong>基於身分的存取</strong></h3>
<p>Vault 將多個身分來源（LDAP、OIDC、Kubernetes、Cloud IAM）組合成一個統一的實體，從而實現所有平台的一致策略管理。 </p><h2 id="6-vault-121x"><strong>6。 Vault 1.21.x — 新功能</strong></h2>
<ul>
<li><p><strong>SPIFFE 驗證</strong> - 在 SPIFFE 環境中使用 SVID 對工作負載進行驗證</p></li>
<li><p><strong>MFA TOTP 自行註冊</strong> — 使用者登入時使用二維碼自行註冊 MFA</p></li>
<li><p><strong>KV v2 版本歸屬</strong> — 查看每個版本的金鑰的建立者</p></li>
<li><p><strong>Azure 靜態角色</strong> - 管理長期 Azure 憑證</p></li>
<li><p><strong>秘密恢復</strong> - 從快照恢復秘密而不覆蓋現有資料</p></li>
<li><p><strong>Snowflake Root Rotation</strong> - 自動輪替 Snowflake 的金鑰對根憑證</p></li>
<li><p><strong>RACF 密碼短語支援</strong> — 支援 LDAP Secrets Engine 中的較長密碼短語</p></li>
<li><p><strong>PKI 憑證計數器</strong> — 追蹤每月核發的憑證數量</p></li>
</ul>

<h2 id="7-tong-ket"><strong>7.摘要</strong></h2>
<p>HashiCorp Vault 是當今最全面的秘密管理解決方案，適用於本地和雲端環境。憑藉豐富的插件生態系統、動態憑證生成、加密即服務、PKI 管理和基於身分的訪問，Vault 是現代零信任架構中不可或缺的元件。 </p>

<p>在下一篇文章中，我們將在許多不同的平台上安裝 Vault，並學習初始化和密封/解封過程。 </p>
