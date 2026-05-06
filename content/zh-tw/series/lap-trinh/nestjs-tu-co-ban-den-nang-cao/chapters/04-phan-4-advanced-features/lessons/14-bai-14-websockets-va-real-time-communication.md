---
id: 019d8b40-a402-7001-b001-nestjs000402
title: 第 14 課：WebSocket 和即時通信
slug: bai-14-websockets-va-real-time-communication
description: WebSocket 網關、Socket.IO 整合、即時事件。聊天應用程式、通知、房間管理、身份驗證。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: 第 4 部分：進階功能
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: NestJS：從基礎到高級
  slug: nestjs-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9441" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9441)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1037" cy="281" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="974" cy="278" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="911" cy="275" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="848" cy="272" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="785" cy="269" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="151" x2="1100" y2="231" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="181" x2="1050" y2="251" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="973.5166604983954,138 973.5166604983954,164 951,177 928.4833395016046,164 928.4833395016046,138 951,125" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 程式設計 — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 14 課：WebSocket 和即時</tspan>
      <tspan x="60" dy="42">通訊</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：進階功能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-setup"><strong>1.安裝WebSocket</strong></h2>

<pre><code class="language-bash">npm install @nestjs/websockets @nestjs/platform-socket.io
npm install -D @types/socket.io
</code></pre>

<h2 id="2-gateway"><strong>2.WebSocket網關</strong></h2>

<pre><code class="language-typescript">// chat/chat.gateway.ts
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: { origin: process.env.FRONTEND_URL },
  namespace: '/chat',
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private logger = new Logger('ChatGateway');

  afterInit(server: Server) {
    this.logger.log('WebSocket Gateway initialized');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('sendMessage')
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: { room: string; message: string },
  ) {
    this.server.to(payload.room).emit('newMessage', {
      userId: client.data.userId,
      message: payload.message,
      timestamp: new Date(),
    });
  }
}
</code></pre>

<h2 id="3-room-management"><strong>3. 房間管理</strong></h2>

<pre><code class="language-typescript">@SubscribeMessage('joinRoom')
async handleJoinRoom(
  @ConnectedSocket() client: Socket,
  @MessageBody() roomId: string,
) {
  await client.join(roomId);
  
  // Thông báo cho room
  client.to(roomId).emit('userJoined', {
    userId: client.data.userId,
    roomId,
  });

  return { event: 'joinedRoom', data: roomId };
}

@SubscribeMessage('leaveRoom')
async handleLeaveRoom(
  @ConnectedSocket() client: Socket,
  @MessageBody() roomId: string,
) {
  await client.leave(roomId);
  client.to(roomId).emit('userLeft', {
    userId: client.data.userId,
    roomId,
  });
}

// Typing indicator
@SubscribeMessage('typing')
handleTyping(
  @ConnectedSocket() client: Socket,
  @MessageBody() data: { room: string; isTyping: boolean },
) {
  client.to(data.room).emit('userTyping', {
    userId: client.data.userId,
    isTyping: data.isTyping,
  });
}
</code></pre>

<h2 id="4-ws-auth"><strong>4.WebSocket認證</strong></h2>

<pre><code class="language-typescript">// chat/ws-auth.guard.ts
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { WsException } from '@nestjs/websockets';

@Injectable()
export class WsAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const client = context.switchToWs().getClient();
    const token =
      client.handshake.auth?.token ||
      client.handshake.headers?.authorization?.split(' ')[1];

    if (!token) throw new WsException('Unauthorized');

    try {
      const payload = this.jwtService.verify(token);
      client.data.userId = payload.sub;
      client.data.email = payload.email;
      return true;
    } catch {
      throw new WsException('Invalid token');
    }
  }
}
</code></pre>

<pre><code class="language-typescript">// Middleware cấp Gateway — verify trước khi connect
@WebSocketGateway()
export class ChatGateway implements OnGatewayInit {
  afterInit(server: Server) {
    server.use((socket, next) =&gt; {
      const token = socket.handshake.auth?.token;
      if (!token) return next(new Error('Authentication required'));

      try {
        const payload = this.jwtService.verify(token);
        socket.data.userId = payload.sub;
        next();
      } catch {
        next(new Error('Invalid token'));
      }
    });
  }
}
</code></pre>

<h2 id="5-notification"><strong>5. 通知系統</strong></h2>

<pre><code class="language-typescript">// notifications/notification.gateway.ts
@WebSocketGateway({ namespace: '/notifications' })
export class NotificationGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  private userSockets = new Map&lt;string, Set&lt;string&gt;&gt;();

  handleConnection(client: Socket) {
    const userId = client.data.userId;
    if (!this.userSockets.has(userId)) {
      this.userSockets.set(userId, new Set());
    }
    this.userSockets.get(userId).add(client.id);
  }

  handleDisconnect(client: Socket) {
    const userId = client.data.userId;
    this.userSockets.get(userId)?.delete(client.id);
  }

  // Gửi notification tới user cụ thể
  sendToUser(userId: string, notification: any) {
    const sockets = this.userSockets.get(userId);
    if (sockets) {
      sockets.forEach((socketId) =&gt; {
        this.server.to(socketId).emit('notification', notification);
      });
    }
  }

  // Broadcast cho tất cả
  broadcast(event: string, data: any) {
    this.server.emit(event, data);
  }
}
</code></pre>

<pre><code class="language-typescript">// Sử dụng từ service khác
@Injectable()
export class OrderService {
  constructor(private notificationGateway: NotificationGateway) {}

  async createOrder(dto: CreateOrderDto) {
    const order = await this.orderRepo.save(dto);
    
    // Gửi real-time notification
    this.notificationGateway.sendToUser(order.userId, {
      type: 'ORDER_CREATED',
      message: `Đơn hàng #${order.id} đã được tạo`,
      data: order,
    });
    
    return order;
  }
}
</code></pre>

<h2 id="6-client"><strong>6. 前端客戶端</strong></h2>

<pre><code class="language-typescript">// React/Next.js client
import { io, Socket } from 'socket.io-client';

const socket = io('http://localhost:3000/chat', {
  auth: { token: localStorage.getItem('accessToken') },
  autoConnect: false,
});

socket.connect();

socket.on('connect', () =&gt; console.log('Connected'));
socket.on('newMessage', (msg) =&gt; console.log('New message:', msg));
socket.on('notification', (n) =&gt; console.log('Notification:', n));

// Gửi message
socket.emit('sendMessage', { room: 'general', message: 'Hello!' });
</code></pre>

<h2 id="7-tong-ket"><strong>七、總結</strong></h2>

<ul>
<li><strong>@WebSocketGateway</strong>：裝飾器建立WebSocket端點</li>
<li><strong>@訂閱訊息</strong>：監聽客戶端的事件</li>
<li><strong>客房</strong>：分組客戶端，分組廣播</li>
<li><strong>WsAuthGuard</strong>：驗證WebSocket連接</li>
<li><strong>命名空間</strong>：單獨的邏輯（聊天、通知）</li>
</ul>

<p>下一篇文章將探討 <strong>GraphQL 與 NestJS</strong>。</p>
