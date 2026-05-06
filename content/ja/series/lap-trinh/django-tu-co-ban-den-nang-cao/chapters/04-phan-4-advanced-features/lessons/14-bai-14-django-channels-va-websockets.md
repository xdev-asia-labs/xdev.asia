---
id: 019d8b40-c402-7001-b004-django00000402
title: 'レッスン 14: Django チャネルと WebSocket'
slug: bai-14-django-channels-va-websockets
description: >-
  Django チャネルのセットアップ、ASGI 構成。 WebSocket コンシューマー、Redis によるチャネル層。リアルタイム通知、チャット
  アプリケーション、ブロードキャスト パターン。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 14
section_title: 'パート 4: 高度な機能'
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: 基本から上級まで'
  slug: django-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9274" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9274)"/>

  <!-- Decorations -->
  <g>
    <circle cx="904" cy="282" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="708" cy="106" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="1012" cy="190" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="816" cy="274" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="620" cy="98" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="142" x2="1100" y2="222" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="172" x2="1050" y2="242" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1074.0429399400243,223.5 1074.0429399400243,260.5 1042,279 1009.9570600599758,260.5 1009.9570600599758,223.5 1042,205" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 プログラミング — レッスン 14</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 14: Django チャネルと WebSocket</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Django: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 高度な機能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-setup"><strong>1. チャンネルの設定</strong></h2>

<pre><code class="language-bash">pip install channels channels-redis
</code></pre>

<pre><code class="language-python"># settings.py
INSTALLED_APPS = [..., 'channels']
ASGI_APPLICATION = 'config.asgi.application'

CHANNEL_LAYERS = {
    'default': {
        'BACKEND': 'channels_redis.core.RedisChannelLayer',
        'CONFIG': {'hosts': [('127.0.0.1', 6379)]},
    },
}

# asgi.py
import os
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

application = ProtocolTypeRouter({
    'http': get_asgi_application(),
    'websocket': AuthMiddlewareStack(
        URLRouter([
            path('ws/chat/&lt;str:room_name&gt;/', ChatConsumer.as_asgi()),
            path('ws/notifications/', NotificationConsumer.as_asgi()),
        ])
    ),
})
</code></pre>

<h2 id="2-consumer"><strong>2. WebSocket コンシューマ</strong></h2>

<pre><code class="language-python">import json
from channels.generic.websocket import AsyncJsonWebsocketConsumer

class ChatConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group = f'chat_{self.room_name}'

        await self.channel_layer.group_add(self.room_group, self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(self.room_group, self.channel_name)

    async def receive_json(self, content):
        message = content['message']
        user = self.scope['user']

        await self.channel_layer.group_send(
            self.room_group,
            {
                'type': 'chat_message',
                'message': message,
                'username': user.username,
            },
        )

    async def chat_message(self, event):
        await self.send_json({
            'message': event['message'],
            'username': event['username'],
        })
</code></pre>

<h2 id="3-notifications"><strong>3. リアルタイム通知</strong></h2>

<pre><code class="language-python">class NotificationConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        user = self.scope['user']
        if user.is_anonymous:
            await self.close()
            return
        self.group_name = f'notifications_{user.id}'
        await self.channel_layer.group_add(self.group_name, self.channel_name)
        await self.accept()

    async def send_notification(self, event):
        await self.send_json(event['data'])

# Gửi notification từ anywhere
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

def notify_user(user_id, message):
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
        f'notifications_{user_id}',
        {'type': 'send_notification', 'data': {'message': message}},
    )
</code></pre>

<h2 id="4-frontend"><strong>4. フロントエンド WebSocket</strong></h2>

<pre><code class="language-javascript">const ws = new WebSocket(`wss://${location.host}/ws/chat/${roomName}/`);

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  appendMessage(data.username, data.message);
};

ws.onclose = () => {
  setTimeout(() => connectWebSocket(), 3000); // Reconnect
};

function sendMessage(message) {
  ws.send(JSON.stringify({ message }));
}
</code></pre>

<p>次の記事: <strong>セロリ、シグナル、キャッシング</strong>。</p>
