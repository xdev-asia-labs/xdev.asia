---
id: 02760001-ba02-4001-a004-000000000001
title: NFR、品質屬性與邊緣案例：BA 如何寫開發/QA 進行測試？
slug: nfr-quality-attributes-edge-cases-ba
excerpt: 功能需求說明系統做什麼，而 NFR 說明系統做得如何。本文指導 BA 在衝刺之前編寫可衡量的 NFR、品質屬性場景、邊緣案例和審查清單。
featured_image: /images/blog/business-requirements-checklist.png
type: blog
reading_time: 12
view_count: 0
meta: null
published_at: '2026-05-06T09:30:00.000000Z'
created_at: '2026-05-06T09:30:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9616-cat1-7001-a001-000000000001
  name: AI
  slug: ai
tags:
  - name: BA
    slug: ba
  - name: NFR
    slug: nfr
  - name: Requirements
    slug: requirements
  - name: QA
    slug: qa
  - name: Software BA
    slug: software-ba
comments: []
locale: zh-tw
---
功能需求答案：**系統做什麼？ **

非功能性需求 (NFR) 答案：**系統在什麼條件下表現如何？ **

許多專案失敗不是因為缺乏功能，而是因為缺乏 NFR：

- 功能有足夠的按鈕，但速度太慢。
- 登入有效，但審核日誌遺失。
- API傳回正確的數據，但不處理速率限制。
- 可以提交表單，但螢幕閱讀器使用者無法使用它。

BA 不需要成為架構師，但 BA 必須知道如何足夠清楚地提出和編寫 NFR。

## 1. NFR 包含哪些族群？

常見的BA組：

|集團|文學士要問的問題 |
|---|---|
|性能|多快？有多少用戶？ |
|可用性 |系統需要多少正常運作時間？ |
|可靠性|如何恢復錯誤？ |
|安全|誰有權做什麼？ |
|隱私權 |哪些資料是敏感的？保存多久？ |
|可用性 |使用者完成任務是否容易？ |
|無障礙 |殘障人士可使用嗎？ |
|可擴展性|當流量增加時會發生什麼？ |
|可觀察性|是否有足夠的日誌/指標/警報可供調查？ |
|可維護性|易於配置、更改規則、支援嗎？ |

## 2. 如何寫入測得的 NFR

不要寫：

> 系統必須速度快。

請寫：

> 訂單清單頁面必須在 500 個同時使用者和 100,000 個訂單資料的 p95 上在 2 秒內載入。

不要寫：

> 系統必須安全。

請寫：

> 只有財務經理角色可以匯出交易報告。每次匯出都必須記錄審核日誌，包括 user_id、時間戳記、過濾器、匯出行號和 IP。

模板：

```text
[Đối tượng] phải [hành vi/chất lượng] trong [điều kiện] với [ngưỡng đo] và [cách kiểm chứng].
```

## 3.品質屬性場景

一種非常清晰的寫法：

|成分|範例|
|---|---|
|刺激| 1,000 個使用者同時造訪 |
|環境 |高峰時段，6 個月數據 |
|回應 |搜尋返回系統 |
|因應措施 | p95 延遲 < 2.5 秒，錯誤率 < 1% |

按要求寫：

```text
Khi có 1.000 user search đơn hàng đồng thời trong giờ cao điểm, hệ thống phải trả kết quả trong p95 < 2.5 giây và error rate < 1%.
```

## 4. 邊緣情況三不應被忽視

### 資料邊緣情況

- 欄位為空或缺失。
- 重複記錄。
- 另一個時區的日期。
- 欄位中的負值不能為負數。
- 名字很長。
- 特殊字元。

### 權限邊緣狀況

- 使用者未登入。
- 使用者會話過期。
- 使用者俱有角色 A 但存取角色 B 功能。
- 管理員權限在操作過程中被撤銷。

### 整合邊緣情況

- 超時API。
- API 支付 500。
- API 傳回與預期不同的架構。
- 供應商速率限制。
- 重試會導致重複請求。

### 使用者體驗邊緣狀況

- 空狀態。
- 加載需要很長時間。
- 使用者點擊提交兩次。
- 上傳格式錯誤的檔案。
- 使用者返回瀏覽器。

## 5. 完整範例

功能：上傳發票。

功能要求：

```text
FR-001: User có thể upload hóa đơn dạng PDF hoặc ảnh để hệ thống lưu vào hồ sơ thanh toán.
```

NFR 與邊緣情況：

```text
NFR-001 Performance:
File dưới 10MB phải upload xong trong p95 < 5 giây trên mạng 4G ổn định.

NFR-002 Security:
File upload phải được virus scan trước khi user khác có thể tải xuống.

NFR-003 Privacy:
File hóa đơn có thể chứa PII, chỉ role Finance và Owner của hồ sơ được xem.

EC-001:
Nếu user upload file > 10MB, hệ thống hiển thị lỗi "File vượt quá dung lượng 10MB" và không lưu file.

EC-002:
Nếu user bấm Submit hai lần, hệ thống chỉ tạo một record hóa đơn.

EC-003:
Nếu virus scan fail, file bị quarantine, user thấy trạng thái "Đang chờ kiểm tra bảo mật".
```

## 6. BA 的 NFR 檢查表

在故事進入衝刺之前：

- [ ] 性能有衡量標準嗎？
- [ ] 安全部門是否有明確的角色/權限？
- [ ] 隱私有資料分類嗎？
- [ ] 審計日誌需要什麼？
- [ ] 重要錯誤案例 AC 是否存在？
- [ ] 重試是否會導致重複？
- [ ] 空狀態已經存在了嗎？
- [ ] 可訪問性需要什麼標準？
- [ ] 監控/警報需要哪些指標？
- [ ] QA 知道如何測試 NFR 嗎？

## 7. AI輔助提示發現邊緣狀況

你可以使用人工智慧來建議，但你必須審查：

```text
Bạn là Senior Software BA và QA Lead.
Đây là user story và acceptance criteria:
[paste]

Hãy liệt kê:
1. Data edge cases
2. Permission edge cases
3. Integration failure cases
4. UX empty/loading/error states
5. NFR còn thiếu
6. Test scenarios đề xuất

Trả về bảng: Case, Why it matters, Suggested AC, Test approach.
```

## 8. 常見錯誤

**錯誤1：NFR寫得像口號**

「高度安全」、「易用」、「快速」是無法測試的。讓我們加入閾值、條件、指標。

**錯誤 2：將所有 NFR 推送給架構師**

架構師協助設計解決方案，但 BA 必須確保明確說明業務需求、合規性和使用者期望。

**錯誤3：只寫快樂路徑**

幸福之路通常很容易。造成生產事故的部分在於邊緣情況。

## 參考來源

- IEEE/ISO/IEC 29148-2018： https://standards.ieee.org/ieee/29148/6937/
- IIBA BABOK 指引： https://www.iiba.org/standards-and-resources/babok/

## 結論

NFR 和邊緣情況是軟體 BA 發揮作用的地方。一個故事可能看起來很小，但如果它缺乏性能、安全性、隱私、錯誤處理和可觀察性，它可能會在發布後造成巨大的返工。好的 BA 可以幫助團隊在編碼開始之前了解風險。
