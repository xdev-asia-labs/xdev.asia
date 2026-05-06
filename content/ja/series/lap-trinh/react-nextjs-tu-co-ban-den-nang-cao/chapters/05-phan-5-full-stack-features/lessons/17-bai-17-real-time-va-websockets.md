---
id: 019d8b40-d502-7001-b005-reactnx000502
title: 'レッスン 17: リアルタイムと WebSocket'
slug: bai-17-real-time-va-websockets
description: >-
  サーバー送信イベント (SSE)。 Socket.io を使用した
  WebSocket。リアルタイム通知、チャット。プッシャー、アブリインテグレーション。楽観的な UI パターン。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 17
section_title: 'パート 5: フルスタック機能'
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React と Next.js: 基本から高度まで'
  slug: react-nextjs-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3978" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3978)"/>

  <!-- Decorations -->
  <g>
    <circle cx="969" cy="77" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="838" cy="266" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="707" cy="195" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="1076" cy="124" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="945" cy="53" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="187" x2="1100" y2="267" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="217" x2="1050" y2="287" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1023.3730669589464,166 1023.3730669589464,208 987,229 950.6269330410536,208 950.6269330410536,166 987,145" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 プログラミング — レッスン 17</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 17: リアルタイムと WebSocket</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React と Next.js: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: フルスタック機能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-sse"><strong>1. サーバー送信イベント (SSE)</strong></h2>

<pre><code class="language-ts">// app/api/events/route.ts
export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const interval = setInterval(() => {
        const data = JSON.stringify({
          time: new Date().toISOString(),
          message: 'Server update',
        });
        controller.enqueue(encoder.encode(`data: ${data}\n\n`));
      }, 3000);

      // Cleanup khi client disconnect
      return () => clearInterval(interval);
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}
</code></pre>

<pre><code class="language-tsx">// Client component
'use client';
import { useEffect, useState } from 'react';

export function LiveUpdates() {
  const [messages, setMessages] = useState&lt;string[]&gt;([]);

  useEffect(() => {
    const eventSource = new EventSource('/api/events');

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages(prev => [...prev, data.message]);
    };

    eventSource.onerror = () => {
      eventSource.close();
    };

    return () => eventSource.close();
  }, []);

  return (
    &lt;ul&gt;
      {messages.map((msg, i) => (
        &lt;li key={i}&gt;{msg}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}
</code></pre>

<h2 id="2-socket-io"><strong>2. Socket.io を使用した WebSocket</strong></h2>

<pre><code class="language-ts">// server.ts — Custom server cho WebSocket
import { createServer } from 'http';
import { Server } from 'socket.io';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer((req, res) => handle(req, res));
  const io = new Server(httpServer, {
    cors: { origin: '*' },
  });

  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    socket.on('join-room', (room: string) => {
      socket.join(room);
    });

    socket.on('send-message', (data: { room: string; message: string }) => {
      io.to(data.room).emit('new-message', {
        id: Date.now(),
        text: data.message,
        sender: socket.id,
        timestamp: new Date().toISOString(),
      });
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });

  httpServer.listen(3000);
});
</code></pre>

<h2 id="3-chat-client"><strong>3. チャットコンポーネント</strong></h2>

<pre><code class="language-tsx">'use client';
import { useEffect, useState, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

type Message = {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
};

export function Chat({ room }: { room: string }) {
  const [messages, setMessages] = useState&lt;Message[]&gt;([]);
  const [input, setInput] = useState('');
  const socketRef = useRef&lt;Socket | null&gt;(null);

  useEffect(() => {
    const socket = io();
    socketRef.current = socket;
    socket.emit('join-room', room);

    socket.on('new-message', (message: Message) => {
      setMessages(prev => [...prev, message]);
    });

    return () => { socket.disconnect(); };
  }, [room]);

  const sendMessage = () => {
    if (!input.trim()) return;
    socketRef.current?.emit('send-message', { room, message: input });
    setInput('');
  };

  return (
    &lt;div&gt;
      &lt;div className="h-96 overflow-y-auto"&gt;
        {messages.map(msg =&gt; (
          &lt;div key={msg.id}&gt;
            &lt;strong&gt;{msg.sender}:&lt;/strong&gt; {msg.text}
          &lt;/div&gt;
        ))}
      &lt;/div&gt;
      &lt;div className="flex gap-2"&gt;
        &lt;input
          value={input}
          onChange={e =&gt; setInput(e.target.value)}
          onKeyDown={e =&gt; e.key === 'Enter' && sendMessage()}
          placeholder="Nhập tin nhắn..."
        /&gt;
        &lt;button onClick={sendMessage}&gt;Gửi&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}
</code></pre>

<h2 id="4-pusher"><strong>4. プッシャーの統合</strong></h2>

<pre><code class="language-ts">// lib/pusher.ts
import PusherServer from 'pusher';
import PusherClient from 'pusher-js';

export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
  useTLS: true,
});

export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSHER_KEY!,
  { cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER! }
);
</code></pre>

<pre><code class="language-ts">// Server Action — trigger event
'use server';
import { pusherServer } from '@/lib/pusher';

export async function sendNotification(userId: string, message: string) {
  await pusherServer.trigger(`user-${userId}`, 'notification', {
    message, timestamp: new Date().toISOString(),
  });
}
</code></pre>

<pre><code class="language-tsx">// Client — listen for events
'use client';
import { useEffect } from 'react';
import { pusherClient } from '@/lib/pusher';

export function Notifications({ userId }: { userId: string }) {
  useEffect(() => {
    const channel = pusherClient.subscribe(`user-${userId}`);
    channel.bind('notification', (data: { message: string }) => {
      // Show toast notification
      alert(data.message);
    });
    return () => { pusherClient.unsubscribe(`user-${userId}`); };
  }, [userId]);

  return null;
}
</code></pre>

<p>次の記事: <strong>電子メール、支払い、サードパーティ</strong> — 再送信、ストライプ、OAuth。</p>
