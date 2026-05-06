---
id: 019d8b40-a101-7001-b002-fastapi000101
title: 第 1 課：介紹 FastAPI - 最現代的 Python 框架
slug: bai-1-gioi-thieu-fastapi-framework-python-hien-dai-nhat
description: >-
  了解 FastAPI 是什麼，與 Django、Flask、Litestar 進行比較。 ASGI
  架構、非同步優先、類型提示、自動文件。生態系統和實際用例。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：Python 基礎和 FastAPI
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: Python FastAPI：從基礎到進階
  slug: python-fastapi-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 程式設計 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 1 課：FastAPI 簡介 - 框架</tspan>
      <tspan x="60" dy="42">最先進的Python</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Python FastAPI：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Python 基礎和 FastAPI</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-fastapi-la-gi"><strong>1.FastAPI是什麼？</strong></h2>

<p>FastAPI 是一個現代的、高效能的 Python Web 框架，旨在讓 API 的建置變得快速、簡單。創建者： <strong>塞巴斯蒂安·拉米雷斯</strong> 2018年，FastAPI憑藉著出色的效能、出色的開發者體驗和強大的類型提示系統，迅速成為後端API最受歡迎的Python框架。</p>

<p>FastAPI 在背景運行 <strong>史塔萊特</strong> （ASGI框架）及使用 <strong>派丹提克</strong> 用於資料驗證，在許多基準測試中提供與 Node.js 和 Go 相當的速度。</p>

<h3 id="tai-sao-fastapi"><strong>為什麼選擇 FastAPI？</strong></h3>

<ul>
<li><p><strong>高效能</strong>：最快的 Python 框架之一，得益於 Starlette 和 async/await</p></li>
<li><p><strong>原生類型提示</strong>：使用 Python 類型提示進行自動驗證、序列化和文件記錄</p></li>
<li><p><strong>自動記錄</strong>：從程式碼自動建立Swagger UI和ReDoc，無需編寫單獨的文檔</p></li>
<li><p><strong>開發者經驗</strong>：強大的編輯器支援、自動完成、類型檢查有助於減少錯誤</p></li>
<li><p><strong>非同步優先</strong>：支援原生async/await，適合I/O密集型應用</p></li>
<li><p><strong>基於標準</strong>：基於OpenAPI（Swagger）、JSON Schema、OAuth2標準</p></li>
</ul>

<h2 id="2-so-sanh-framework"><strong>2. FastAPI與其他框架的比較</strong></h2>

<table>
<thead>
<tr><th>標準</th><th>快速API</th><th>薑戈</th><th>燒瓶</th><th>萊特星</th></tr>
</thead>
<tbody>
<tr><td>類型系統</td><td>本土（Pydantic）</td><td>可選</td><td>可選</td><td>本機（屬性/訊息規格）</td></tr>
<tr><td>效能</td><td>非常高</td><td>平均</td><td>平均</td><td>非常高</td></tr>
<tr><td>非同步支援</td><td>本地人</td><td>部分（Django 5+）</td><td>燒瓶 2+（限量）</td><td>本地人</td></tr>
<tr><td>自動文件</td><td>招搖+ReDoc</td><td>DRF 壯觀</td><td>燒瓶-RESTX</td><td>招搖+ReDoc</td></tr>
<tr><td>ORM</td><td>SQLAlchemy/烏龜</td><td>Django ORM</td><td>SQL煉金術</td><td>SQL煉金術</td></tr>
<tr><td>管理面板</td><td>SQLAdmin/FastAPI-管理</td><td>內建</td><td>Flask 管理</td><td>社群</td></tr>
<tr><td>學習曲線</td><td>低-中</td><td>中高</td><td>低</td><td>平均</td></tr>
<tr><td>社群</td><td>非常大（70k+ ⭐）</td><td>很大</td><td>很大</td><td>發展中</td></tr>
<tr><td>適合</td><td>API、微服務</td><td>全端、CMS</td><td>MVP、小 API</td><td>API、企業</td></tr>
</tbody>
</table>

<h2 id="3-kien-truc-fastapi"><strong>3.FastAPI架構</strong></h2>

<p>FastAPI 建立在三個堅實的基礎上：</p>

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

<h3 id="thanh-phan-chinh"><strong>主要成分：</strong></h3>

<ul>
<li><p><strong>獨角獸</strong>：ASGI伺服器，運行FastAPI應用程序，支援HTTP/1.1和WebSocket</p></li>
<li><p><strong>史塔萊特</strong>：輕量級ASGI框架，提供路由、中間件、WebSocket、後台任務</p></li>
<li><p><strong>派丹提克</strong>：基於類型提示的資料驗證和序列化</p></li>
<li><p><strong>開放API</strong>：依照OpenAPI 3.1標準自動產生API文檔</p></li>
</ul>

<h2 id="4-fastapi-ecosystem"><strong>4.FastAPI生態系統</strong></h2>

<p>FastAPI 擁有豐富的生態系統，擁有許多支援庫：</p>

<table>
<thead>
<tr><th>領域</th><th>圖書館</th><th>描述</th></tr>
</thead>
<tbody>
<tr><td>ORM</td><td>SQLAlchemy、Tortoise-ORM、SQLModel</td><td>Python 的資料庫 ORM</td></tr>
<tr><td>遷移</td><td>蒸餾器</td><td>資料庫結構定義遷移</td></tr>
<tr><td>授權</td><td>python-jose、Passlib、Authlib</td><td>JWT、OAuth2、密碼哈希</td></tr>
<tr><td>快取</td><td>fastapi-cache2、Redis</td><td>回應快取</td></tr>
<tr><td>任務佇列</td><td>芹菜、ARQ、SAQ</td><td>後台工作處理</td></tr>
<tr><td>測試</td><td>pytest、httpx</td><td>測試框架和非同步客戶端</td></tr>
<tr><td>管理員</td><td>SQLAdmin、FastAPI 管理</td><td>管理儀表板</td></tr>
<tr><td>監控</td><td>prometheus-fastapi-instrumentator</td><td>指標和監控</td></tr>
</tbody>
</table>

<h2 id="5-hello-world"><strong>5. 使用 FastAPI 實作 Hello World</strong></h2>

<p>讓我們來看看最簡單的 FastAPI 應用程式：</p>

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

<p>運行應用程式：</p>

<pre><code class="language-bash"># Cài đặt
pip install fastapi uvicorn

# Chạy development server
uvicorn main:app --reload

# Server sẽ chạy tại http://127.0.0.1:8000
# Swagger UI: http://127.0.0.1:8000/docs
# ReDoc: http://127.0.0.1:8000/redoc
</code></pre>

<p>只需幾行程式碼，您就可以：</p>

<ul>
<li>帶有路徑參數的 REST API 端點（<code>商品編號</code>) 自動驗證為 <code>整數</code></li>
<li>查詢參數可選（<code>q</code>) 帶有類型提示</li>
<li>互動式 API 文件 (Swagger UI)</li>
<li>替代文檔 (ReDoc)</li>
<li>請求/回應的 JSON 架構</li>
</ul>

<h2 id="6-wsgi-vs-asgi"><strong>6. WSGI 與 ASGI - 為什麼 ASGI 很重要？</strong></h2>

<p>了解 WSGI 和 ASGI 之間的差異是理解為什麼 FastAPI 速度快的關鍵：</p>

<h3 id="wsgi-truyen-thong"><strong>WSGI（Web 伺服器網關介面）- 傳統</strong></h3>

<pre><code class="language-python"># Flask (WSGI) - synchronous, blocking
@app.route("/data")
def get_data():
    result1 = db.query("SELECT ...")    # Block - đợi DB
    result2 = requests.get("https://api.example.com")  # Block - đợi HTTP
    return jsonify(result1, result2)
    # Tổng thời gian = time(query) + time(http_call)
</code></pre>

<h3 id="asgi-hien-dai"><strong>ASGI（非同步伺服器閘道介面）- 現代</strong></h3>

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

<p>借助 ASGI，FastAPI 可以處理數千個並發請求，而無需許多執行緒或進程。</p>

<h2 id="7-use-cases"><strong>7. 什麼時候該使用FastAPI？</strong></h2>

<h3 id="nen-dung"><strong>FastAPI 應在下列情況下使用：</strong></h3>

<ul>
<li>建構 REST API 或 GraphQL API</li>
<li>微服務架構</li>
<li>即時應用程式（WebSocket、SSE）</li>
<li>機器學習模型服務</li>
<li>物聯網後端服務</li>
<li>高並發 I/O 密集型應用程式</li>
</ul>

<h3 id="can-nhac"><strong>在以下情況下考慮另一個框架：</strong></h3>

<ul>
<li>具有伺服器渲染 HTML 的全端 Web 應用程式 → <strong>薑戈</strong></li>
<li>CMS、管理繁重的應用程式 → <strong>薑戈</strong></li>
<li>快速原型，簡單 API → <strong>燒瓶</strong></li>
<li>需要 msgspec 的最大速度 → <strong>萊特星</strong></li>
</ul>

<h2 id="8-lo-trinh-khoa-hoc"><strong>8. 課程路線圖</strong></h2>

<p>在本系列中，我們將學習 20 節課程，分為 5 個部分：</p>

<ol>
<li><strong>第 1 部分：基礎</strong> - Python 基礎、FastAPI 基礎、請求/回應</li>
<li><strong>第 2 部分：資料庫</strong> - Pydantic、SQLAlchemy、Alembic、CRUD 和儲存庫模式</li>
<li><strong>第 3 部分：安全</strong> - 身份驗證、授權、OAuth2、安全最佳實踐</li>
<li><strong>第 4 部分：高級</strong> - 中介軟體、WebSockets、後台任務、快取、非同步深入研究</li>
<li><strong>第五部分：生產</strong> - 乾淨的架構、測試、Docker、CI/CD、部署和監控</li>
</ol>

<p>每節課都有實用的程式碼範例，在本系列結束時，您將擁有足夠的知識來建立可用於生產的 FastAPI 應用程式。</p>

<h2 id="tong-ket"><strong>總結</strong></h2>

<p>FastAPI 是用於建立 API 的最現代的 Python 框架，將高效能與出色的開發人員體驗相結合。在下一篇文章中，我們將在深入研究 FastAPI 之前回顧必要的 Python 知識。</p>
