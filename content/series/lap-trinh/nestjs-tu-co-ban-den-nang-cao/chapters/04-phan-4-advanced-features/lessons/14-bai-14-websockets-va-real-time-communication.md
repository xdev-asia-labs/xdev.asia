---
id: 019d8b40-a402-7001-b001-nestjs000402
title: 'Bài 14: WebSockets và Real-time Communication'
slug: bai-14-websockets-va-real-time-communication
description: >-
  WebSocket Gateway, Socket.IO integration, Real-time events.
  Chat application, Notifications, Room management, Authentication.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 4: Advanced Features"
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: Từ Cơ bản đến Nâng cao'
  slug: nestjs-tu-co-ban-den-nang-cao
---

<h2 id="1-setup"><strong>1. Cài đặt WebSocket</strong></h2>

<pre><code class="language-bash">npm install @nestjs/websockets @nestjs/platform-socket.io
npm install -D @types/socket.io
</code></pre>

<h2 id="2-gateway"><strong>2. WebSocket Gateway</strong></h2>

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

<h2 id="3-room-management"><strong>3. Room Management</strong></h2>

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

<h2 id="4-ws-auth"><strong>4. WebSocket Authentication</strong></h2>

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

<h2 id="5-notification"><strong>5. Notification System</strong></h2>

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

<h2 id="6-client"><strong>6. Frontend Client</strong></h2>

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

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<ul>
<li><strong>@WebSocketGateway</strong>: Decorator tạo WebSocket endpoint</li>
<li><strong>@SubscribeMessage</strong>: Lắng nghe event từ client</li>
<li><strong>Rooms</strong>: Group clients, broadcast theo nhóm</li>
<li><strong>WsAuthGuard</strong>: Xác thực WebSocket connections</li>
<li><strong>Namespaces</strong>: Tách biệt logic (chat, notifications)</li>
</ul>

<p>Bài tiếp theo sẽ tìm hiểu <strong>GraphQL với NestJS</strong>.</p>
