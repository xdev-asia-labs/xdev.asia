---
id: 019c9619-dd02-7002-e002-dd0200000002
title: 'レッスン 2: 微調整 vs RAG — 2025 年最大の AI 論争'
slug: bai-2-fine-tuning-vs-rag
description: >-
  Fine-tuning と RAG の詳細な比較:
  知識のギャップと行動のギャップ。実践的な意思決定のチェックリスト。ハイブリッドアプローチ。実際のケーススタディ: RAG が勝つ場合、Fine-tuning
  が勝つ場合。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 1: 概要と戦略 — いつ微調整するか?'
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 'LLM の微調整: AI チューニングの技術'
  slug: fine-tuning-llm
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9312" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9312)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1051" cy="103" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="1002" cy="214" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="953" cy="65" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="904" cy="176" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="855" cy="287" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="173" x2="1100" y2="253" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="203" x2="1050" y2="273" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.2487113059642,209 1047.2487113059642,237 1023,251 998.7512886940357,237 998.7512886940357,209 1023,195" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI と ML — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 2: 微調整 vs RAG — 競争</tspan>
      <tspan x="60" dy="42">最大の議論 AI 2025</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">LLM の微調整: AI チューニングの技術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: 概要と戦略 — いつ微調整するか?</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

「Fine-tuning と RAG を使用するべきですか?」 — これは、2025 年から 2026 年のあらゆる AI ミートアップ、フォーラム、インタビューで最もよく聞かれる質問です。正解: **解決している問題によって異なります**。この記事では、正しく答えるためのフレームワークを提供します。

---

## 1. 診断: 知識のギャップと行動のギャップ

### 基本原則

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Model KHÔNG BIẾT thông tin bạn cần?               │
│   → Knowledge Gap → RAG 📚                          │
│                                                     │
│   Model BIẾT nhưng KHÔNG LÀM ĐÚNG cách bạn muốn?   │
│   → Behavior Gap → Fine-tuning 🎯                   │
│                                                     │
│   Cả hai?                                           │
│   → Fine-tuning + RAG (Hybrid) 🔀                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 2. 詳細を比較する

### 2.1 総合比較表

|基準 |ラグ |微調整 |
|----------|-----|---------------|
| **解決済み** |知識ギャップ（情報不足） |行動ギャップ（行動） |
| **データは変更される可能性があります** |通常→強 RAG |少し変化→FT適 |
| **更新** |インスタント（DB更新） |遅い (モデルを再トレーニング) |
| **説明可能** |曹操 (出典引用) |低 (ブラック ボックス) |
| **セットアップ費用** | $50–$500 | $50–$10,000+ |
| **メンテナンス費用** |低 (更新データのみ) |高 (必要に応じて再トレーニング) |
| **レイテンシ** |遅い (取得ステップが増える) |より高速 (取得不要) |
| **精度** |検索の品質に依存 |トレーニングデータに依存 |
| **幻覚** |リデュース（ソースあり） | (データが悪い場合は) それでも可能です。
| **大規模** |回収コスト/時間 | 1 回のトレーニング セッションの費用 |

### 2.2 実践例

```
Case 1: Chatbot hỗ trợ khách hàng cần biết chính sách công ty
→ Chính sách thay đổi thường xuyên
→ Cần cite nguồn cho customer
→ RAG THẮNG ✅

Case 2: Model phải trả lời bằng tiếng Việt, formal, format markdown cụ thể
→ Đây là "hành vi" không phải "kiến thức"
→ Prompt engineering không ổn định
→ FINE-TUNING THẮNG ✅

Case 3: Model y khoa cần biết thuật ngữ chuyên ngành VÀ access medical records
→ Thuật ngữ = behavior (fine-tune)
→ Medical records = knowledge (RAG)
→ HYBRID THẮNG ✅

Case 4: Model cần trả lời giá sản phẩm real-time
→ Giá thay đổi liên tục
→ Fine-tune sẽ bị outdated ngay lập tức
→ RAG (hoặc Tool Use) THẮNG ✅

Case 5: Model nhỏ (Flash/Mini) cần perform như model lớn (Pro/4o)
→ "Chắt lọc" kiến thức từ model lớn xuống nhỏ
→ Distillation = một dạng fine-tuning
→ FINE-TUNING THẮNG ✅
```

---

## 3. 意思決定のフローチャート

```
                    ┌─────────────────────┐
                    │  Bạn cần gì từ LLM? │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              ▼                ▼                ▼
    ┌─────────────┐  ┌──────────────┐  ┌──────────────┐
    │ Kiến thức   │  │ Hành vi      │  │ Cả hai       │
    │ mới/riêng   │  │ /Style/Format│  │              │
    └──────┬──────┘  └──────┬───────┘  └──────┬───────┘
           │                │                  │
           ▼                ▼                  ▼
    ┌──────────┐    ┌─────────────┐    ┌──────────────┐
    │ Data thay│    │Prompt eng.  │    │ FT cho style │
    │ đổi nhiều│    │ đã thử?     │    │ + RAG cho    │
    │ không?   │    │             │    │   knowledge  │
    └─────┬────┘    └──────┬──────┘    └──────────────┘
     Yes  │  No        No  │  Yes
      │   │             │  │
      ▼   ▼             ▼  ▼
    ┌───┐┌────┐    ┌───┐┌─────────┐
    │RAG││Cả 2│    │Thử││Fine-tune│
    │   ││    │    │PE ││         │
    └───┘└────┘    └───┘└─────────┘
```

---

## 4. ハイブリッド アプローチ — 両方の長所を活かす

### 4.1 ハイブリッド アーキテクチャ

```python
# Fine-tune model cho: style, format, domain terminology
# RAG cho: factual data, recent information

class HybridAI:
    def __init__(self):
        self.model = "ft:gpt-4o-mini:xdev:customer-support:abc123"  # Fine-tuned
        self.rag = RAGPipeline(collection="company_docs")           # RAG
    
    def answer(self, question):
        # Step 1: Retrieve relevant context
        context = self.rag.search(question, top_k=3)
        
        # Step 2: Use fine-tuned model with context
        response = openai.chat.completions.create(
            model=self.model,  # Fine-tuned model → đúng style/format
            messages=[
                {"role": "system", "content": f"Context:\n{context}"},
                {"role": "user", "content": question}
            ]
        )
        return response.choices[0].message.content
```

### 4.2 ハイブリッドをいつ使用するか?

- **個別のスタイルと個別のデータの両方が必要**
- 大規模エンタープライズシステム
- 専門領域（医療、法律、金融）
- 予算は両方とも十分です

---

## 5. 実践的なケーススタディ

### ケーススタディ 1: カスタマー サポート ボット — RAG が勝利

**問題**: チャットボットは 500 以上の製品に関する質問に答える必要があり、ポリシーは毎週変わります。

**微調整を試す**: モデルは古いポリシーに基づいており、更新ごとにトレーニングが必要です。コストは $200/回 × 4 回/月 = $800/月です。

**RAG を試す**: データベースを 5 分で更新します。取得コストはクエリあたり ~0.001 ドルです。月額料金: ~$50。

**結論**: RAG は 16 倍安く、常に最新の状態です。

### ケーススタディ 2: コード レビュー ボット — 微調整が成功

**問題**: モデルは、チーム独自のコーディング標準 (命名規則、アーキテクチャ パターン、非常に特殊なエラー処理スタイル) に従ってコードをレビューする必要があります。

**プロンプトを試行**: システム プロンプトが長すぎます (3000 トークン)。まだ一貫性がありません。

**RAG を試してください**: コーディング標準ドキュメントに十分なコンテキストがありません。出力が汎用的すぎます。

**微調整を試す**: 200 例 (コード + レビュー コメント) → モデルの一貫性 95% 以上、システム プロンプトが 3000 → 200 トークンに減少しました。

**結論**: 微調整により、トークン コストが 93% 削減され、一貫性が向上します。

### ケーススタディ 3: 医療 Q&A — ハイブリッドの勝利

**問題**: 医療チャットボットは専門用語を理解し、患者記録に基づいて応答する必要があります。

**解決策**: ベトナム語の医療用語と患者記録の RAG を微調整します。

---

## 6. コストの比較: 具体的な数値

### シナリオ: 10,000 クエリ/日、30 日間

|アプローチ |セットアップ費用 |月次推論 |合計/月 |
|----------|-----------|----------|-------------|
| **ベースモデル + プロンプト** | $0 | ~$300 | **$300** |
| **ラグ** | $200 (1回) | ~$400 (取得オーバーヘッド) | **$400** |
| **微調整** | $100–$500 (1 回) | ~$250 (短いプロンプト) | **$250** |
| **ハイブリッド** | 500ドル | ~$350 | **$350** |

> 💡 システムプロンプトを短縮できれば、微調整は基本モデルより **安価** になります (トークンが少なくなる = お金が減ります)。ただし維持費込み！

---

## レッスンの概要

- **知識ギャップ** → RAG | **動作のギャップ** → 微調整 | **両方** → ハイブリッド
- データが頻繁に変更される → RAG (即時更新)
- スタイル/フォーマットに高い一貫性が必要 → 微調整
- 80% のケース → プロンプト エンジニアリングまたは RAG で十分
- ハイブリッド アプローチは企業の業界標準です
- **総コスト** (トレーニング + 推論 + メンテナンス) を常に計算します

## 演習

1. 社内の 5 つのユースケースを分析 → 知識と行動のギャップを分類する
2. 特定のユースケースの意思決定フローチャートを作成する
3. 推定コストを計算します: RAG とそのユースケースの微調整
4. 実用的なシステムを実現するためのハイブリッドアーキテクチャ設計
