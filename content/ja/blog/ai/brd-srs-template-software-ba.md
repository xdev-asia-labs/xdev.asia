---
id: 02760001-ba02-4001-a003-000000000001
title: 'ソフトウェア BA の BRD および SRS: テンプレート、例、およびわかりやすい書き方'
slug: brd-srs-template-software-ba
excerpt: >-
  BRD と SRS は 2 つの重要な成果物ですが、よく混同されます。この記事では、違い、テンプレートの構造、スケジュール機能の完全な例、および開発/QA
  に引き渡す前のレビュー チェックリストについて説明します。
featured_image: /images/blog/business-requirements-checklist.png
type: blog
reading_time: 14
view_count: 0
meta: null
published_at: '2026-05-06T09:20:00.000000Z'
created_at: '2026-05-06T09:20:00.000000Z'
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
  - name: BRD
    slug: brd
  - name: SRS
    slug: srs
  - name: Requirements
    slug: requirements
  - name: Software BA
    slug: software-ba
comments: []
locale: ja
---
BRD と SRS は、よく混同される 2 つの文書です。多くの BA は BRD という名前の長いファイルを作成しますが、その中にはビジネス目標、画面、データベース フィールド、API、テスト ケース、ポリシー、ソリューション設計が混在しています。その結果、ビジネス関係者はそれを読むことができず、開発/QA には構築するための十分な情報がありません。

シンプルな考え方:

- **BRD** の答え: ビジネスには何が必要で、その理由は何ですか?
- **SRS** の答え: そのニーズを満たすためにソフトウェア システムは何をしなければなりませんか?

## 1. BRD が必要になるのはどんなとき、SRS が必要になるのはどんなときですか?

すべてのプロジェクトに分厚い文書が必要なわけではありません。ただし、次のことを考慮する必要があります。

|背景 | | を使用する必要があります。
|---|---|
|新しい取り組み、ビジネスを調整する必要がある | BRD |
|スプリントの小さな機能 |ユーザーストーリー + AC で十分かもしれません |
|この機能は多くのシステムに影響を与えます | SRS |
|ベンダー/アウトソーシング/契約 | BRD + SRS + RTM |
|高いコンプライアンス | BRD + SRS + サインオフ |
|アジャイルなチームだがドメインは複雑 |軽量 SRS + バックログ |

原則: 文書は誤解のリスクを軽減するのに十分なものであるべきであり、プロフェッショナルに見えるほど長すぎてはなりません。

## 2. BRDはどのような部分で構成されていますか？

実用的な BRD テンプレート:

```markdown
# Business Requirements Document

## 1. Executive Summary
- Vấn đề cần giải quyết
- Mục tiêu kinh doanh
- Kết quả kỳ vọng

## 2. Background / Current State
- Quy trình hiện tại
- Pain points
- Dữ liệu hoặc bằng chứng

## 3. Business Objectives
- Objective 1
- Objective 2
- Success metrics

## 4. Scope
- In scope
- Out of scope
- Assumptions
- Constraints

## 5. Stakeholders
- Business owner
- End users
- Approvers
- Consulted teams

## 6. Business Requirements
- BR-001: ...
- BR-002: ...

## 7. Business Rules
- Rule ID
- Rule description
- Source / policy

## 8. Risks and Dependencies

## 9. Approval
```

## 3. SRS にはどのような部品が含まれていますか?

ソフトウェア BA 用の SRS テンプレート:

```markdown
# Software Requirements Specification

## 1. Purpose and Scope

## 2. System Context
- Actors
- External systems
- High-level flow

## 3. Functional Requirements
- FR-001
- FR-002

## 4. User Stories and Acceptance Criteria

## 5. Business Rules

## 6. Data Requirements
- Input fields
- Output fields
- Validation rules
- Retention

## 7. Interface / API Requirements
- Endpoint
- Request/response
- Error handling

## 8. Non-Functional Requirements
- Performance
- Security
- Availability
- Accessibility
- Observability

## 9. Error and Edge Cases

## 10. Reporting / Audit

## 11. UAT Scenarios

## 12. Traceability
```

## 4. 例: オンライン相談をスケジュールする機能

### BRD の抜粋

```markdown
BR-001: Khách hàng có thể tự đặt lịch tư vấn online để giảm tải hotline.

Business objective:
- Giảm 30% cuộc gọi hotline liên quan đến đặt lịch trong 3 tháng.
- Tăng tỷ lệ khách hoàn tất đặt lịch từ 45% lên 65%.

In scope:
- Khách chọn dịch vụ, ngày, giờ, thông tin liên hệ.
- Hệ thống gửi email/SMS xác nhận.
- Admin xem danh sách lịch đã đặt.

Out of scope:
- Thanh toán online.
- Tự động phân bổ consultant theo kỹ năng.
```

### SRS の抜粋

```markdown
FR-001: Hiển thị slot trống
System shall display available appointment slots by selected service and date.

Acceptance criteria:
Given khách chọn dịch vụ "Tư vấn tài chính"
When khách chọn ngày 2026-06-10
Then hệ thống hiển thị các slot còn trống trong ngày đó
And không hiển thị slot đã được đặt

Validation:
- service_id: required, must exist
- appointment_date: required, must be today or future date

Error:
- Nếu không còn slot, hiển thị empty state "Ngày này đã hết lịch. Vui lòng chọn ngày khác."
```

＃＃５．ビジネスルールを明確に書くにはどうすればよいでしょうか？

優れたビジネス ルールには次のものが必要です。

- 身分証明書を持っていること。
- わかりやすい説明があります。
- ソースがあります。
- 例があります。
- 変更が必要な場合は所有者が必要です。

例えば：

```markdown
BRULE-003: Khách hàng chỉ được hủy lịch trước giờ hẹn tối thiểu 4 tiếng.

Source: Policy vận hành CSKH v2.1
Owner: Head of Customer Service
Example:
- Lịch lúc 15:00, khách được hủy trước 11:00.
- Sau 11:00, nút hủy bị disable và hiển thị hướng dẫn gọi hotline.
```

## 6. 優れた要件にはどのような特徴が必要ですか?

要件エンジニアリングの精神に基づき、要件は次のことを行う必要があります。

- 当然です。
- 単純な意味。
- テスト可能。
- 起源。
- 1 つの文の中に複数のリクエストを混在させないでください。
- 必要がない場合は、実装をあまり早く説明しないでください。

悪い例:

> システムは高速で使いやすくなければなりません。

書き換えます:

> スロット リスト ページは、1 日あたり最大 500 スロット、同時ユーザー数が 200 の場合、p95 で 2 秒未満でレンダリングする必要があります。

## 7. BRD/SRS のチェックリストの確認

ハンドオフの前に、BA は次のように自問します。

- ビジネス目標には指標がありますか?
- 対象範囲外ですか？
- 要件に ID はありますか?
- 要件にはソースがありますか?
- ビジネスルールには例はありますか?
- AC には、ハッピー パス、代替パス、エラー パスがありますか?
- データ検証は明確に必須/オプション/範囲/形式ですか?
- NFRは測定できますか?
- 権限と監査ログについて言及されていますか?
- 未解決の質問には所有者と期限がありますか?
- 関係者は現在のバージョンを承認しましたか?

## 8. よくあるエラー

**エラー 1: BRD が SRS に変わる**

ビジネス関係者は、問題、価値、範囲、プロセスを理解するだけで済みます。必要がない場合は、API の詳細を読むことを強制しないでください。

**エラー 2: SRS は事務的すぎて、システムの動作が欠けています**

開発/QA は、単に「予約エクスペリエンスを向上させる」だけでなく、それぞれの状況でシステムが何を行うかを知る必要があります。

**エラー 3: バージョンと変更ログがありません**

バージョンがないと、チームは「前のバージョンは違うと思った」と主張することになります。各ベースラインにはバージョン、日付、承認者が必要です。

## 参照元

- IEEE/ISO/IEC 29148-2018: https://standards.ieee.org/ieee/29148/6937/
- IIBA BABOK ガイド: https://www.iiba.org/standards-and-resources/babok/
- 実務者向けの PMI ビジネス分析: https://www.pmi.org/shop/p-/book/business-analysis-for-practitioners-a-practice-guide/00101570601

## 結論

BRD は、企業が **必要なものとその理由** について合意するのに役立ちます。 SRS は、ソフトウェア チームが **システムが実行する必要がある内容とテスト方法** について合意するのに役立ちます。優れたソフトウェア BA は長いドキュメントを作成しませんが、適切な読者、下すべき正しい決定のために、手戻りを減らすために適切な詳細レベルでドキュメントを作成します。
