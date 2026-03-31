---
id: 019d8b40-d502-7001-b005-reactnx000502
title: 'Bài 17: Real-time & WebSockets'
slug: bai-17-real-time-va-websockets
description: >-
  Server-Sent Events (SSE). WebSockets với Socket.io.
  Real-time notifications, chat. Pusher, Ably integration.
  Optimistic UI patterns.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 5: Full-Stack Features"
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: Từ Cơ bản đến Nâng cao'
  slug: react-nextjs-tu-co-ban-den-nang-cao
---

<h2 id="1-sse"><strong>1. Server-Sent Events (SSE)</strong></h2>

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

<h2 id="2-socket-io"><strong>2. WebSockets với Socket.io</strong></h2>

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

<h2 id="3-chat-client"><strong>3. Chat Component</strong></h2>

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

<h2 id="4-pusher"><strong>4. Pusher Integration</strong></h2>

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

<p>Bài tiếp theo: <strong>Email, Payment & Third-party</strong> — Resend, Stripe, OAuth.</p>
