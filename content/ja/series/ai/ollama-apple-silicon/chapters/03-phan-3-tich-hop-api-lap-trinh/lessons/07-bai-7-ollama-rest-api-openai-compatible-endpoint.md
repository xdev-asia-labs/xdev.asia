---
id: 019c9619-bb07-7007-d007-bb0700000007
title: 'レッスン 7: Ollama REST API - OpenAI 互換エンドポイント'
slug: bai-7-ollama-rest-api-openai-compatible-endpoint
description: >-
  Ollama は、OpenAI 互換の REST API (/api/chat、/api/generate、/api/embeddings) を公開します。
  curl リクエストと Python リクエストを使用します。ストリーミング応答。 OpenAI SDKとの統合。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 0
section_title: 'パート 3: API 統合とアプリケーション プログラミング'
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Apple Silicon で Ollama を使用して AI Local を実行する
  slug: ollama-apple-silicon
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2149" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2149)"/>

  <!-- Decorations -->
  <g>
    <circle cx="823" cy="279" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="1046" cy="102" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="769" cy="185" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="992" cy="268" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="91" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="129" x2="1100" y2="209" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="159" x2="1050" y2="229" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1017.1051177665153,157 1017.1051177665153,201 979,223 940.8948822334847,201 940.8948822334847,157 979,135" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI と ML — レッスン 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 7: Ollama REST API - OpenAI 互換</tspan>
      <tspan x="60" dy="42">エンドポイント。エンドポイント</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Apple Silicon で Ollama を使用して AI Local を実行する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: API 統合とアプリケーション プログラミング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

Ollama は単なる CLI ツールではありません。上で実行される **REST API** を公開します `http://localhost:11434`これにより、あらゆるアプリケーションが LLM を呼び出すことができるようになります。特に、Ollama は **OpenAI 互換エンドポイント** をサポートしています。つまり、OpenAI API 用に作成されたコードは、Ollama モデルをほとんど変更せずに使用できます。

---

## 1. 基本 API

### サーバーを確認してください

```bash
curl http://localhost:11434
# Output: Ollama is running
```

### /api/generate — テキストを生成する

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Viết hàm fibonacci bằng Python",
  "stream": false
}'
```

応答:

```json
{
  "model": "llama3.2",
  "response": "```Python\ndef fibonacci(n):\n ...",
  「完了」: true、
  "合計期間": 3241920000、
  "prompt_eval_count": 12、
  "prompt_eval_duration": 180000000、
  "eval_count": 156、
  "eval_duration": 2890000000
}
```

### /api/chat — Chat với history

```バッシュ
カールする http://localhost:11434/api/chat -d '{
  "モデル": "ラマ3.2",
  「メッセージ」: [
    {"role": "system", "content": "あなたは Python の専門家です。ベトナム語で答えてください。"},
    {"role": "user", "content": "辞書理解とは何ですか?"}
  ]、
  「ストリーム」: false
}'
```

### /api/embeddings — Vector embeddings

```バッシュ
カールする http://localhost:11434/api/embeddings -d '{
  "モデル": "ノミック埋め込みテキスト",
  "prompt": "Docker はコンテナ化テクノロジーです"
}'
```

Response chứa vector embedding (mảng số thực), dùng cho RAG, semantic search.

---

## 2. Streaming responses

Mặc định `stream: true` — Ollama trả về từng chunk:

```バッシュ
カールする http://localhost:11434/api/generate -d '{
  "モデル": "ラマ3.2",
  "prompt": "マイクロサービスについて説明します"
}'
```

Mỗi dòng là một JSON object:

```json
{"モデル":"llama3.2","応答":"マイクロ","完了":false}
{"モデル":"llama3.2","応答":"サービス","完了":false}
{"モデル":"llama3.2","応答":" は","完了":false}
...
{"モデル":"llama3.2","応答":"","完了":true,"合計期間":...}
```

---

## 3. OpenAI-compatible endpoint

Ollama expose endpoint tương thích OpenAI tại `/v1/`:

```バッシュ
# チャット完了 (OpenAI など)
カールする http://localhost:11434/v1/chat/completions -d '{
  "モデル": "ラマ3.2",
  「メッセージ」: [
    {"役割": "ユーザー", "コンテンツ": "こんにちは、あなたは誰ですか?"}
  】
}'
```

### Dùng OpenAI Python SDK

```バッシュ
pip3 インストール openai
```

```パイソン
openaiインポートからOpenAI

# OpenAI の代わりに Ollama を指す
クライアント = OpenAI(
    Base_url=http://localhost:11434/v1"、
    api_key="ollama", # Ollama にはキーは必要ありませんが、SDK ではキーが必要です
）

応答 = client.chat.completions.create(
    モデル="ラマ3.2"、
    メッセージ=[
        {"role": "システム", "content": "ベトナム語で返信します。"},
        {"role": "ユーザー", "content": "Kubernetes とは何ですか?"},
    ]、
    温度=0.7、
    max_tokens=500、
）

print(response.choices[0].message.content)
```

### Streaming với OpenAI SDK

```パイソン
openaiインポートからOpenAI

client = OpenAI(base_url=http://localhost:11434/v1"、api_key="オラマ")

stream = client.chat.completions.create(
    モデル="ラマ3.2"、
    messages=[{"role": "user", "content": "Python でクイックソート関数を書く"}],
    ストリーム=真、
）

ストリーム内のチャンクの場合:
    chunk.choices[0].delta.contentの場合:
        print(chunk.choices[0].delta.content, end="", flash=True)
プリント()
```

> 💡 **Tại sao điều này quan trọng?** Bất kỳ thư viện/framework nào hỗ trợ OpenAI API (LangChain, LlamaIndex, Vercel AI SDK, Cursor, Continue.dev...) đều có thể dùng Ollama chỉ bằng cách đổi `base_url`.

---

## 4. Python requests (không cần SDK)

```パイソン
インポートリクエスト
jsonをインポートする

def チャット(メッセージ、モデル = "llama3.2"、ストリーム = False):
    応答 = リクエスト.post(
        」http://localhost:11434/api/chat"、
        json={"モデル": モデル、"メッセージ": メッセージ、"ストリーム": ストリーム}
    ）
    ストリームの場合:
        response.iter_lines() の行:
            行の場合:
                データ = json.loads(行)
                データ["完了"]でない場合:
                    生成データ["メッセージ"]["コンテンツ"]
    それ以外の場合:
        return response.json()["メッセージ"]["コンテンツ"]

# 非ストリーミング
結果 = チャット([
    {"role": "user", "content": "Docker とは何ですか?"}
])
印刷(結果)

#ストリーミング
print("\n--- ストリーミング ---")
チャット内のトークン用(
    [{"ロール": "ユーザー", "コンテンツ": "二分検索関数を作成する"}],
    ストリーム=真
):
    print(トークン、end=""、flush=True)
```

---

## 5. JavaScript/TypeScript (Node.js)

### Fetch API

```JavaScript
非同期関数 chat(メッセージ) {
  const 応答 = fetch を待ちます('http://localhost:11434/api/chat'、{
    メソッド: 'POST'、
    ヘッダー: { 'Content-Type': 'application/json' },
    本文: JSON.stringify({
      モデル: 'ラマ3.2'、
      メッセージ、
      ストリーム: false、
    })、
  });
  const data = 応答を待ちます.json();
  データ.メッセージ.コンテンツを返します。
}

// 使用する
const result = チャットを待ちます([
  { 役割: 'ユーザー'、コンテンツ: 'JavaScript で Promise を説明する' },
]);
console.log(結果);
```

### Streaming với ReadableStream

```JavaScript
非同期関数 streamChat(messages) {
  const 応答 = fetch を待ちます('http://localhost:11434/api/chat'、{
    メソッド: 'POST'、
    ヘッダー: { 'Content-Type': 'application/json' },
    本文: JSON.stringify({
      モデル: 'ラマ3.2'、
      メッセージ、
      ストリーム: true、
    })、
  });

  const リーダー = 応答.body.getReader();
  const デコーダ = 新しい TextDecoder();

  while (true) {
    const {完了、値} = Reader.read(); を待ちます。
    （終わったら）休憩する。

    const Lines = decoder.decode(value).split('\n').filter(Boolean);
    for (const 行) {
      const データ = JSON.parse(line);
      if (!data.done) {
        process.stdout.write(data.message.content);
      }
    }
  }
  コンソール.log();
}

ストリームチャットを待ちます([
  { 役割: 'ユーザー', コンテンツ: 'TypeScript でデータを取得する非同期関数を作成する' },
]);
```

### Dùng OpenAI SDK cho JavaScript

```バッシュ
npm インストール openai
```

```JavaScript
「openai」から OpenAI をインポートします。

const client = new OpenAI({
  ベースURL: 'http://localhost:11434/v1'、
  apiKey: 'オラマ',
});

const completed = await client.chat.completions.create({
  モデル: 'ラマ3.2'、
  メッセージ: [{ 役割: 'ユーザー'、コンテンツ: 'こんにちは!' }]、
});

console.log(completion.choices[0].message.content);
```

---

## 6. API Parameters quan trọng

| Parameter | Mô tả | Mặc định |
|-----------|--------|---------|
| `temperature` | Độ sáng tạo (0.0-2.0) | 0.8 |
| `top_p` | Nucleus sampling | 0.9 |
| `top_k` | Top-k sampling | 40 |
| `num_predict` | Max tokens generate | 128 |
| `num_ctx` | Context window size | 2048 |
| `stop` | Stop sequences | `[]` |
| `seed` | Random seed (cho reproducible) | random |
| `keep_alive` | Thời gian giữ model loaded | "5m" |

```バッシュ
カールする http://localhost:11434/api/generate -d '{
  "モデル": "ラマ3.2",
  "prompt": "プログラミングについての詩を書いてください",
  "オプション": {
    「温度」: 1.2、
    "top_p": 0.95、
    "num_predict": 300、
    「種」：42
  }、
  「ストリーム」: false
}'
```

---

## 7. Model management API

```バッシュ
# モデルをリストする
カールする http://localhost:11434/api/tags

# モデル情報を表示
カールする http://localhost:11434/api/show -d '{"名前": "llama3.2"}'

# プルモデル
カールする http://localhost:11434/api/pull -d '{"名前": "gemma3:4b"}'

# モデルの削除
カールする http://localhost:11434/api/delete -d '{"名前": "ミストラル"}'

# 実行中のモデル
カールする http://localhost:11434/api/ps
```

---

## 8. Expose API ra mạng local

Mặc định Ollama chỉ listen trên `localhost`. Để expose cho các máy khác trong mạng:

```バッシュ
# すべてのインターフェイスでリッスンする
エクスポート OLLAMA_HOST=0.0.0.0:11434
オラマサーブ
```

Giờ các máy khác trong mạng có thể truy cập:

```バッシュ
# 別のデバイスから
カールする http://192.168.1.100:11434/api/generate -d '{
  "モデル": "ラマ3.2",
  "プロンプト": "こんにちは!",
  「ストリーム」: false
}'
```

> ⚠️ **Bảo mật**: Chỉ expose trong mạng nội bộ (LAN). Không expose ra internet public nếu không có authentication.

---

## Tóm tắt

| Endpoint | Method | Mô tả |
|----------|--------|-------|
| `/api/生成` | POST | Generate text |
| `/api/チャット` | POST | Chat với message history |
| `/api/embeddings` | POST | Vector embeddings |
| `/v1/チャット/コンプリート` | POST | OpenAI-compatible |
| `/api/タグ` | GET | List models |
| `/api/show` | POST | Model info |
| `/api/プル` | POST | Pull model |
| `/api/ps` | GET | Running models |

---

## Bài tập

1. Dùng curl gọi `/api/チャット` với system prompt tiếng Việt
2. Viết Python script tạo chatbot terminal dùng requests + streaming
3. Dùng OpenAI SDK Python/JS trỏ tới Ollama, chạy chat
4. Đo thời gian response với các `温度が異なる (0.1、0.7、1.5)
5. Ollama を LAN に公開し、携帯電話から (ブラウザ経由で) 通話してみます。

**次の記事**: Python でローカル チャットボットを構築する →
