---
id: 019d8b40-a101-7001-b002-fastapi000101
title: 'レッスン 1: FastAPI の紹介 - 最新の Python フレームワーク'
slug: bai-1-gioi-thieu-fastapi-framework-python-hien-dai-nhat
description: >-
  FastAPI とは何かを調べ、Django、Flask、Litestar と比較してください。 ASGI
  アーキテクチャ、非同期ファースト、タイプヒント、自動ドキュメント。エコシステムと実際の使用例。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 1: Python の基礎と FastAPI'
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: 基本から高度まで'
  slug: python-fastapi-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6281" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6281)"/>

  <!-- Decorations -->
  <g>
    <circle cx="848" cy="214" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1096" cy="102" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="844" cy="250" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="1092" cy="138" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="840" cy="286" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="154" x2="1100" y2="234" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="184" x2="1050" y2="254" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1029.1147367097487,189.5 1029.1147367097487,218.5 1004,233 978.8852632902513,218.5 978.8852632902513,189.5 1004,175" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 プログラミング — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 1: FastAPI の紹介 - フレームワーク</tspan>
      <tspan x="60" dy="42">最先端のPython</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Python FastAPI: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: Python の基礎と FastAPI</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-fastapi-la-gi"><strong>1. FastAPIとは何ですか?</strong></h2>

<p>FastAPI は、Python 用の最新の高性能 Web フレームワークであり、API を迅速かつ簡単に構築できるように設計されています。作成者 <strong>セバスティアン・ラミレス</strong> 2018 年、FastAPI は、その卓越したパフォーマンス、優れた開発者エクスペリエンス、強力な型ヒント システムのおかげで、すぐにバックエンド API で最も人気のある Python フレームワークになりました。</p>

<p>FastAPIはバックグラウンドで実行されます <strong>スターレット</strong> (ASGI フレームワーク) と使用 <strong>ピダンティック</strong> データ検証では、多くのベンチマークで Node.js や Go に匹敵する速度を実現します。</p>

<h3 id="tai-sao-fastapi"><strong>FastAPI を選択する理由</strong></h3>

<ul>
<li><p><strong>高性能</strong>: Starlette と async/await のおかげで、最速の Python フレームワークの 1 つ</p></li>
<li><p><strong>タイプヒントネイティブ</strong>: 自動検証、シリアル化、ドキュメント化に Python 型ヒントを使用する</p></li>
<li><p><strong>自動文書化</strong>: コードから Swagger UI と ReDoc を自動的に作成します。個別のドキュメントを作成する必要はありません。</p></li>
<li><p><strong>開発者の経験</strong>: 優れたエディターのサポート、オートコンプリート、型チェックによりバグが軽減されます。</p></li>
<li><p><strong>非同期ファースト</strong>: ネイティブの非同期/待機をサポートし、I/O バウンドのアプリケーションに適しています</p></li>
<li><p><strong>標準ベース</strong>: OpenAPI (Swagger)、JSON スキーマ、OAuth2 標準に基づく</p></li>
</ul>

<h2 id="2-so-sanh-framework"><strong>2. FastAPI と他のフレームワークを比較する</strong></h2>

<table>
<thead>
<tr><th>基準</th><th>ファストAPI</th><th>ジャンゴ</th><th>フラスコ</th><th>ライトスター</th></tr>
</thead>
<tbody>
<tr><td>型システム</td><td>ネイティブ (ピダンティック)</td><td>オプション</td><td>オプション</td><td>ネイティブ (attrs/msgspec)</td></tr>
<tr><td>パフォーマンス</td><td>非常に高い</td><td>平均</td><td>平均</td><td>非常に高い</td></tr>
<tr><td>非同期のサポート</td><td>ネイティブ</td><td>部分的 (Django 5+)</td><td>フラスコ 2+ (限定)</td><td>ネイティブ</td></tr>
<tr><td>自動ドキュメント</td><td>Swagger + ReDoc</td><td>DRF スペクタキュラー</td><td>フラスコ-RESTX</td><td>Swagger + ReDoc</td></tr>
<tr><td>ORM</td><td>SQLAlchemy/カメ</td><td>ジャンゴ ORM</td><td>SQLアルケミー</td><td>SQLアルケミー</td></tr>
<tr><td>管理者パネル</td><td>SQL管理者/FastAPI管理者</td><td>内蔵</td><td>Flask管理者</td><td>コミュニティ</td></tr>
<tr><td>学習曲線</td><td>低～中</td><td>中～高</td><td>低い</td><td>平均</td></tr>
<tr><td>コミュニティ</td><td>非常に大きい (70k+ ⭐)</td><td>とても大きい</td><td>とても大きい</td><td>開発中</td></tr>
<tr><td>適切な</td><td>API、マイクロサービス</td><td>フルスタック、CMS</td><td>MVP、小規模 API</td><td>API、エンタープライズ</td></tr>
</tbody>
</table>

<h2 id="3-kien-truc-fastapi"><strong>3. FastAPI アーキテクチャ</strong></h2>

<p>FastAPI は、次の 3 つの強固な基盤に基づいて構築されています。</p>

<pre><code>┌──────────────────────────────────────────────┐
│              FastAPI Application              │
├──────────────────────────────────────────────┤
│                                              │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐  │
│  │  Routes   │  │  Deps    │  │  Models   │  │
│  │  (Path    │  │  (DI     │  │  (Pydantic│  │
│  │   Ops)    │  │   System)│  │   V2)     │  │
│  └──────────┘  └──────────┘  └───────────┘  │
│                                              │
├──────────────────────────────────────────────┤
│              Starlette (ASGI)                │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐  │
│  │Middleware │  │  Routing │  │ WebSocket │  │
│  └──────────┘  └──────────┘  └───────────┘  │
├──────────────────────────────────────────────┤
│          Uvicorn / Hypercorn (Server)        │
└──────────────────────────────────────────────┘
</code></pre>

<h3 id="thanh-phan-chinh"><strong>主な成分:</strong></h3>

<ul>
<li><p><strong>ユビコーン</strong>: ASGI サーバー、FastAPI アプリケーションを実行、HTTP/1.1 および WebSocket をサポート</p></li>
<li><p><strong>スターレット</strong>: ルーティング、ミドルウェア、WebSocket、バックグラウンド タスクを提供する軽量の ASGI フレームワーク</p></li>
<li><p><strong>ピダンティック</strong>: 型ヒントに基づいたデータ検証とシリアル化</p></li>
<li><p><strong>オープンAPI</strong>: OpenAPI 3.1 標準に従って API ドキュメントを自動的に生成します</p></li>
</ul>

<h2 id="4-fastapi-ecosystem"><strong>4. FastAPI エコシステム</strong></h2>

<p>FastAPI には、多くのサポート ライブラリを備えた充実したエコシステムがあります。</p>

<table>
<thead>
<tr><th>フィールド</th><th>図書館</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>ORM</td><td>SQLAlchemy、Tortoise-ORM、SQLModel</td><td>Python 用データベース ORM</td></tr>
<tr><td>移住</td><td>アレンビック</td><td>データベーススキーマの移行</td></tr>
<tr><td>認証</td><td>python-jose、Passlib、Authlib</td><td>JWT、OAuth2、パスワードハッシュ</td></tr>
<tr><td>キャッシング</td><td>fastapi-cache2、Redis</td><td>応答のキャッシュ</td></tr>
<tr><td>タスクキュー</td><td>セロリ、ARQ、SAQ</td><td>バックグラウンドタスクの処理</td></tr>
<tr><td>テスト</td><td>pytest、httpx</td><td>テストフレームワークと非同期クライアント</td></tr>
<tr><td>管理者</td><td>SQL管理者、FastAPI管理者</td><td>管理者ダッシュボード</td></tr>
<tr><td>モニタリング</td><td>プロメテウス-fastapi-instrumentator</td><td>メトリクスとモニタリング</td></tr>
</tbody>
</table>

<h2 id="5-hello-world"><strong>5. FastAPI を使用した Hello World</strong></h2>

<p>最も単純な FastAPI アプリケーションを見てみましょう。</p>

<pre><code class="language-python"># main.py
from fastapi import FastAPI

app = FastAPI(
    title="My First API",
    description="Learning FastAPI from scratch",
    version="1.0.0"
)

@app.get("/")
async def root():
    return {"message": "Hello, FastAPI!"}

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}
</code></pre>

<p>アプリケーションを実行します。</p>

<pre><code class="language-bash"># Cài đặt
pip install fastapi uvicorn

# Chạy development server
uvicorn main:app --reload

# Server sẽ chạy tại http://127.0.0.1:8000
# Swagger UI: http://127.0.0.1:8000/docs
# ReDoc: http://127.0.0.1:8000/redoc
</code></pre>

<p>わずか数行のコードで次のことが実現します。</p>

<ul>
<li>パス パラメーターを含む REST API エンドポイント (<code>アイテムID</code>) は次のように自動的に検証されます。 <code>整数</code></li>
<li>クエリパラメータはオプション (<code>q</code>) タイプヒント付き</li>
<li>インタラクティブ API ドキュメント (Swagger UI)</li>
<li>代替ドキュメント (ReDoc)</li>
<li>リクエスト/レスポンスのJSONスキーマ</li>
</ul>

<h2 id="6-wsgi-vs-asgi"><strong>6. WSGI と ASGI - ASGI が重要なのはなぜですか?</strong></h2>

<p>WSGI と ASGI の違いを理解することは、FastAPI が高速である理由を理解するための鍵となります。</p>

<h3 id="wsgi-truyen-thong"><strong>WSGI (Web サーバー ゲートウェイ インターフェイス) - 従来型</strong></h3>

<pre><code class="language-python"># Flask (WSGI) - synchronous, blocking
@app.route("/data")
def get_data():
    result1 = db.query("SELECT ...")    # Block - đợi DB
    result2 = requests.get("https://api.example.com")  # Block - đợi HTTP
    return jsonify(result1, result2)
    # Tổng thời gian = time(query) + time(http_call)
</code></pre>

<h3 id="asgi-hien-dai"><strong>ASGI (非同期サーバー ゲートウェイ インターフェイス) - 最新</strong></h3>

<pre><code class="language-python"># FastAPI (ASGI) - asynchronous, non-blocking
@app.get("/data")
async def get_data():
    result1, result2 = await asyncio.gather(
        db.query("SELECT ..."),         # Non-blocking
        httpx.get("https://api.example.com")  # Non-blocking
    )
    return {"db": result1, "api": result2}
    # Tổng thời gian = max(time(query), time(http_call))
</code></pre>

<p>ASGI を使用すると、FastAPI は多くのスレッドやプロセスを必要とせずに、数千の同時リクエストを処理できます。</p>

<h2 id="7-use-cases"><strong>7. FastAPI をいつ使用する必要がありますか?</strong></h2>

<h3 id="nen-dung"><strong>FastAPI は次の場合に使用する必要があります。</strong></h3>

<ul>
<li>REST API または GraphQL API を構築する</li>
<li>マイクロサービスアーキテクチャ</li>
<li>リアルタイム アプリケーション (WebSocket、SSE)</li>
<li>機械学習モデルの提供</li>
<li>IoTバックエンドサービス</li>
<li>同時実行性の高い I/O バウンドのアプリケーション</li>
</ul>

<h3 id="can-nhac"><strong>次の場合は、別のフレームワークを検討してください。</strong></h3>

<ul>
<li>サーバーレンダリングされた HTML を使用したフルスタック Web アプリ → <strong>ジャンゴ</strong></li>
<li>CMS、管理負荷の高いアプリケーション → <strong>ジャンゴ</strong></li>
<li>迅速なプロトタイプ、シンプルな API → <strong>フラスコ</strong></li>
<li>msgspec で最大速度が必要 → <strong>ライトスター</strong></li>
</ul>

<h2 id="8-lo-trinh-khoa-hoc"><strong>8. コースのロードマップ</strong></h2>

<p>このシリーズでは、5 つのパートに分かれた 20 のレッスンを学習します。</p>

<ol>
<li><strong>パート 1: 基礎</strong> - Python の基礎、FastAPI の基礎、リクエスト/レスポンス</li>
<li><strong>パート 2: データベース</strong> - Pydantic、SQLAlchemy、Alembic、CRUD、リポジトリ パターン</li>
<li><strong>パート 3: セキュリティ</strong> - 認証、認可、OAuth2、セキュリティのベスト プラクティス</li>
<li><strong>パート 4: 上級者向け</strong> - ミドルウェア、WebSocket、バックグラウンド タスク、キャッシュ、非同期ディープ ダイビング</li>
<li><strong>パート 5: 制作</strong> - クリーンなアーキテクチャ、テスト、Docker、CI/CD、デプロイメントとモニタリング</li>
</ol>

<p>各レッスンには実践的なコード例が含まれており、シリーズの終わりまでに、本番環境に対応した FastAPI アプリケーションを構築するための十分な知識が得られます。</p>

<h2 id="tong-ket"><strong>概要</strong></h2>

<p>FastAPI は、高いパフォーマンスと優れた開発者エクスペリエンスを組み合わせた、API を構築するための最新の Python フレームワークです。次の記事では、FastAPI に入る前に必要な Python の知識を確認します。</p>
