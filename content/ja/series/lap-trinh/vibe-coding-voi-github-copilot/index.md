---
id: 019f1c30-a100-7001-c001-v1b3c0d10001
title: 'GitHub Copilot を使用した Vibe コーディング: 基本から高度まで'
slug: vibe-coding-voi-github-copilot
description: >-
  GitHub Copilot を使用した Vibe コーディングに関する包括的なコース - 基本概念から高度なテクニックまで。 AI
  エージェント、インライン提案、カスタム命令、MCP サーバー、Copilot CLI、および Copilot コーディング
  エージェントを活用してソフトウェア開発を加速する方法を学びます。コードのプロンプト エンジニアリング、セキュリティのベスト
  プラクティス、技術的負債の処理、フルスタック アプリの構築、本番環境向けのプロフェッショナルな Vibe コーディング プロセスが含まれます。 GitHub
  Copilot 2026 に従って更新され、エージェント モード、プラン エージェント、クラウド エージェント、および最新機能が追加されました。
featured_image: uploads/2026/03/vibe-coding-github-copilot-banner.png
level: beginner
duration_hours: 65
lesson_count: 20
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-31T12:00:00.000000Z'
created_at: '2026-03-31T12:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9617-facb-72da-8191-e6d44b88fb3e
  name: プログラミング
  slug: lap-trinh
tags:
  - name: AI
    slug: ai
  - name: GitHub Copilot
    slug: github-copilot
  - name: Vibe Coding
    slug: vibe-coding
  - name: VS Code
    slug: vs-code
  - name: Prompt Engineering
    slug: prompt-engineering
  - name: AI Agent
    slug: ai-agent
  - name: MCP
    slug: mcp
  - name: LLM
    slug: llm
  - name: Web Development
    slug: web-development
  - name: Productivity
    slug: productivity
  - name: TypeScript
    slug: typescript
  - name: Python
    slug: python
sections:
  - id: section-01
    title: 'パート 1: Vibe コーディング プラットフォームと GitHub Copilot'
    description: Vibe コーディングのコンセプト、GitHub Copilot をインストールし、基本機能を理解する
    sort_order: 1
    lessons:
      - id: 019f1c30-a101-7001-c001-v1b3c0d10101
        title: 'レッスン 1: Vibe コーディングとは何ですか? — AI によるプログラミングの新時代'
        slug: bai-1-vibe-coding-la-gi-ky-nguyen-moi-cua-lap-trinh-voi-ai
        description: >-
          Vibe コーディングの定義 (Andrej Karpathy)、AI 支援コーディング開発の歴史、Vibe
          コーディングと従来のコーディングの比較、人気のあるツール (GitHub Copilot、Cursor、Replit Agent)、Vibe
          Code を使用すべき場合とすべきでない場合。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019f1c30-a102-7001-c001-v1b3c0d10102
        title: 'レッスン 2: VS Code で GitHub Copilot をインストールして構成する'
        slug: bai-2-cai-dat-va-cau-hinh-github-copilot-trong-vs-code
        description: >-
          GitHub Copilot (Free/Pro/Pro+/Enterprise)
          にサインアップし、拡張機能をインストールし、設定を構成し、モデル (GPT-5.4、Claude、Gemini)
          を選択し、自動モデル選択、キーボード ショートカット、および基本的なワークフローを行います。
        duration_minutes: 45
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019f1c30-a103-7001-c001-v1b3c0d10103
        title: 'レッスン 3: インラインの提案と次の編集の提案 — スマート コードの提案'
        slug: bai-3-inline-suggestions-va-next-edit-suggestions
        description: >-
          ゴーストテキスト補完、タブで受け入れる、サイクル提案、複数行補完。次の編集の提案 (NES) —
          次の編集を予測します。提案のナビゲーション、部分的な承認、キーボード ショートカット。提案の品質を最適化するためのヒント。
        duration_minutes: 60
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019f1c30-a104-7001-c001-v1b3c0d10104
        title: 'レッスン 4: インライン チャットとスマート アクション — コードをその場で編集する'
        slug: bai-4-inline-chat-va-smart-actions
        description: >-
          対象を絞った編集、リファクタリング、バグ修正のためのインライン チャット (Cmd+I)。スマート アクション: コミット
          メッセージの生成、シンボルの名前変更、エラーの修正、セマンティック検索。コパイロットによるクイックフィックス。日常のワークフローに統合します。
        duration_minutes: 60
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'パート 2: エージェント モード — AI が自動的にコードを作成します'
    description: VS Code のマスター エージェント モード、チャット ビュー、およびエージェント タイプ
    sort_order: 2
    lessons:
      - id: 019f1c30-a201-7001-c001-v1b3c0d10201
        title: 'レッスン 5: エージェント モード — AI にコードを作成させます'
        slug: bai-5-agent-mode-de-ai-tu-viet-code-cho-ban
        description: >-
          エージェントとは何か、エージェントの動作方法 (計画 → 実行 → 検証)、エージェント ループ、チャット ビュー
          (Ctrl+Cmd+I)、エージェントと質問モードと計画モードの比較。権限レベル: デフォルト、承認のバイパス、自動操縦。実践: Agent
          を使用して最初の Web アプリを構築します。
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019f1c30-a202-7001-c001-v1b3c0d10202
        title: 'レッスン 6: プラン エージェント — コーディングの前に計画する'
        slug: bai-6-plan-agent-lap-ke-hoach-truoc-khi-code
        description: >-
          エージェントのワークフローを計画する: 分析 → 計画 →
          引き継ぎ。構造化された実装計画を作成し、計画を確認して調整し、実行のためにエージェント
          モードに引き渡します。複雑な機能を計画するためのベスト プラクティス。プランファーストとコードファーストを比較します。
        duration_minutes: 75
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019f1c30-a203-7001-c001-v1b3c0d10203
        title: 'レッスン 7: クラウド エージェントと Copilot CLI — エージェントはどこでも実行されます'
        slug: bai-7-cloud-agent-va-copilot-cli
        description: >-
          ローカル エージェント、クラウド エージェント、Copilot CLI、サードパーティ エージェント。 Cloud Agent:
          ブランチの作成、実装、PR のオープンを自動的に行います。 Copilot CLI: ターミナルからエージェントを実行し、Git
          ワークツリーを分離します。エージェント タイプ間のハンドオフ。セッション管理。
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'パート 3: コードの迅速なエンジニアリング'
    description: AI が高品質のコードを生成するための効果的なプロンプト記述テクニック
    sort_order: 3
    lessons:
      - id: 019f1c30-a301-7001-c001-v1b3c0d10301
        title: 'レッスン 8: コードのプロンプトを書く技術 — 漠然としたものから正確なものまで'
        slug: bai-8-nghe-thuat-viet-prompt-cho-code
        description: >-
          優れたコード プロンプトの構造: コンテキスト、制約、例。プロンプトパターン:
          コードのゼロショット、少数ショット、思考の連鎖。要件を明確に説明する方法。反復的なプロンプト。よくある間違いとその修正方法。
        duration_minutes: 90
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019f1c30-a302-7001-c001-v1b3c0d10302
        title: 'レッスン 9: コンテキスト管理 — AI にコンテキストを提供する'
        slug: bai-9-context-management-cung-cap-ngu-canh-cho-ai
        description: >-
          コンテキストウィンドウの役割。ファイル、フォルダー、選択内容を添付する方法。 #file、#selection、#editor
          参照。ワークスペースのインデックス作成。コードベースを認識したプロンプト。コンテキストを簡潔かつ効果的に保つためのヒント。新しいセッションが必要になるのはいつか、セッションを継続する必要があるのはいつか。
        duration_minutes: 75
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019f1c30-a303-7001-c001-v1b3c0d10303
        title: 'レッスン 10: 高度なプロンプト パターン — スラッシュ コマンド、参加者、変数'
        slug: bai-10-prompt-patterns-nang-cao
        description: >-
          スラッシュ コマンド (/init、/fix、/tests、/doc、/explain)。チャット参加者
          (@workspace、@terminal、@vscode)。コンテキスト変数
          (#file、#selection、#codebase)。パターンを組み合わせる。一般的な使用例のプロンプト
          テンプレート。個人用プロンプトライブラリ。
        duration_minutes: 75
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 'パート 4: コパイロットのカスタマイズと拡張'
    description: カスタム命令、カスタム エージェント、MCP サーバー、フック — AI 機能を拡張
    sort_order: 4
    lessons:
      - id: 019f1c30-a401-7001-c001-v1b3c0d10401
        title: 'レッスン 11: カスタム命令 — コーディング スタイルに従って AI を教える'
        slug: bai-11-custom-instructions-day-ai-theo-coding-style-cua-ban
        description: >-
          ファイル
          .github/copilot-instructions.md、効率的な命令構造。プロジェクトレベルの指示とユーザーレベルの指示。ファイルタイプ固有の指示
          (.instructions.md)。 /init コマンドを使用して命令を自動的に生成します。チームのためのベストプラクティス。
        duration_minutes: 75
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019f1c30-a402-7001-c001-v1b3c0d10402
        title: 'レッスン 12: カスタム エージェントとエージェント スキル — 特化した AI の作成'
        slug: bai-12-custom-agents-va-agent-skills
        description: >-
          カスタム エージェント (.agent.md) を作成します: ロール、ツール、手順。 YAML のフロントマター。エージェント スキル
          (SKILL.md): 再利用可能なドメインの知識。例: コード レビューアー エージェント、ドキュメント ライター エージェント、テスト
          ジェネレーター エージェント。 .github/agents/ を介してチーム内でエージェントを共有します。
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019f1c30-a403-7001-c001-v1b3c0d10403
        title: 'レッスン 13: MCP サーバー — AI を外部世界に接続する'
        slug: bai-13-mcp-servers-ket-noi-ai-voi-the-gioi-ben-ngoai
        description: >-
          モデル コンテキスト プロトコル (MCP) とは何ですか。 VS Code に MCP サーバーをインストールします。 Figma
          MCP、GitHub MCP、データベース MCP。カスタム MCP サーバーを作成します。セキュリティに関する考慮事項。実際の使用例:
          デザインからコードまで、DB クエリ、API 統合。自動化のための Copilot フック。
        duration_minutes: 90
        is_free: true
        sort_order: 13
        video_url: null
  - id: section-05
    title: 'パート 5: Vibe コーディングの実際 — 実際のプロジェクトの構築'
    description: Vibe コーディングを適用して最初から最後までフルスタック アプリケーションを構築する
    sort_order: 5
    lessons:
      - id: 019f1c30-a501-7001-c001-v1b3c0d10501
        title: 'レッスン 14: Vibe コーディングのフルスタック アプリ (パート 1) — 初期化とバックエンド'
        slug: bai-14-vibe-coding-full-stack-app-phan-1-backend
        description: >-
          実践プロジェクト: 完全なタスク管理アプリを構築します。エージェント モードでプロジェクトを初期化し、バックエンド
          (Node.js/Express または Python/FastAPI) をセットアップし、データベース スキーマ、REST
          API、認証を設定します。 Vibe コーディング ワークフローの実行中。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019f1c30-a502-7001-c001-v1b3c0d10502
        title: 'レッスン 15: Vibe コーディングのフルスタック アプリ (パート 2) — フロントエンドと統合'
        slug: bai-15-vibe-coding-full-stack-app-phan-2-frontend
        description: >-
          プロジェクトを続行: フロントエンド (React/Next.js)、レスポンシブ UI、API 統合、状態管理を構築します。
          Copilot が生成したテストを使用したテスト。 AIを使ってデバッグします。ブラウザ エージェントのテスト
          (実験的)。プレビューを展開します。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019f1c30-a503-7001-c001-v1b3c0d10503
        title: 'レッスン 16: モバイルおよびクロスプラットフォーム向けの Vibe コーディング'
        slug: bai-16-vibe-coding-cho-mobile-va-cross-platform
        description: >-
          Flutter/React Native を使用した Vibe コーディング。アイデアからモバイルアプリのプロトタイプまで。
          Dart、Swift、Kotlin
          の副操縦士。クロスプラットフォームの考慮事項。ラピッドプロトタイピングワークフロー。設計からコードまでを行うために Figma MCP
          を組み込みます。
        duration_minutes: 90
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-06
    title: 'パート 6: プロフェッショナルな Vibe コーディング — 品質、セキュリティ、プロダクション'
    description: ベスト プラクティス、セキュリティ、コード レビュー、技術的負債、製品プロセス
    sort_order: 6
    lessons:
      - id: 019f1c30-a601-7001-c001-v1b3c0d10601
        title: 'レッスン 17: コードの品質とレビュー — Vibe 責任あるコーディング'
        slug: bai-17-code-quality-va-review-vibe-coding-co-trach-nhiem
        description: >-
          AI が生成したコードをレビューする理由は何ですか? Copilot コード レビュー (エージェント アーキテクチャ)。テスト戦略: AI
          によって生成される単体テスト、統合テスト、E2E テスト。コード品質のメトリクス。 「バイブコーディングの二日酔い」を避けてください。 AI
          が生成したコードをチェックリストでレビューします。 Simon Willison のルール: コードを理解する。
        duration_minutes: 90
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019f1c30-a602-7001-c001-v1b3c0d10602
        title: 'レッスン 18: Vibe コーディングのセキュリティ — AI によるセキュリティ トラップを回避する'
        slug: bai-18-security-trong-vibe-coding
        description: >-
          AI 生成コード セキュリティの現在の状況 (VeraCode 2025、CodeRabbit 2025)。 OWASP トップ 10 と
          AI コード。インジェクション、認証の欠陥、秘密の暴露。セキュリティスキャンツール。安全なコードのプロンプト パターン。ケーススタディ:
          愛すべき脆弱性、蘭の欠陥。セキュリティチェックリスト。
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019f1c30-a603-7001-c001-v1b3c0d10603
        title: 'レッスン 19: 技術的負債と保守性 — AI による技術的負債の管理'
        slug: bai-19-technical-debt-va-maintainability
        description: >-
          AI 生成コードにおけるコードの重複、コード チャーン (GitClear 2025)。 AI
          コードのリファクタリング。アーキテクチャの一貫性。ドキュメント。長期的なメンテナンス戦略。いつ書き換えるか、それとも反復するか。オープンソースの影響
          (Vibecoding Kills Open Source の論文、2026 年 1 月)。
        duration_minutes: 75
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019f1c30-a604-7001-c001-v1b3c0d10604
        title: 'レッスン 20: チームおよびプロダクションにおける Vibe コーディング — プロフェッショナルなプロセス'
        slug: bai-20-vibe-coding-trong-team-va-production
        description: >-
          Copilot for Enterprise/Business: ポリシー、コンテンツ除外、監査ログ。チームワークフロー:
          共有カスタム指示、エージェント、MCP サーバー。 Copilot との CI/CD の統合。
          PR自動化のためのコーディングエージェント。メトリクスとモニタリング。未来のバイブ コーディング: Andrew Ng の視点、METR
          調査 (開発者の生産性)。責任ある AI コーディングのマニフェスト。
        duration_minutes: 90
        is_free: true
        sort_order: 20
        video_url: null
locale: ja
---

