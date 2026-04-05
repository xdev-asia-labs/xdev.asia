---
id: 019d8b40-a501-7001-b001-nestjs000501
title: 'Bài 17: NestJS Microservices'
slug: bai-17-nestjs-microservices
description: >-
  Kiến trúc Microservices với NestJS. TCP, Redis, RabbitMQ, gRPC transports.
  Hybrid application, Message patterns, Event-based communication.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 5: Microservices, Testing & Production"
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: Từ Cơ bản đến Nâng cao'
  slug: nestjs-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1439" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1439)"/>

  <!-- Decorations -->
  <g>
    <circle cx="674" cy="92" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="748" cy="286" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="822" cy="220" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="896" cy="154" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="970" cy="88" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="152" x2="1100" y2="232" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="182" x2="1050" y2="252" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="925.3826859021799,88.5 925.3826859021799,115.5 902,129 878.6173140978201,115.5 878.6173140978201,88.5 902,75" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 Lập trình — Bài 17</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 17: NestJS Microservices</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Microservices, Testing &amp; Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-overview"><strong>1. Microservices trong NestJS</strong></h2>

<p>NestJS hỗ trợ nhiều transport layers cho microservices:</p>

<ul>
<li><strong>TCP</strong>: Built-in, đơn giản, dùng cho internal services</li>
<li><strong>Redis</strong>: Pub/Sub pattern</li>
<li><strong>RabbitMQ (AMQP)</strong>: Message queue mạnh mẽ</li>
<li><strong>gRPC</strong>: High-performance RPC framework</li>
<li><strong>Kafka</strong>: Event streaming platform</li>
</ul>

<pre><code class="language-bash">npm install @nestjs/microservices
</code></pre>

<h2 id="2-tcp"><strong>2. TCP Transport</strong></h2>

<pre><code class="language-typescript">// Microservice (User Service) — main.ts
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const app = await NestFactory.createMicroservice&lt;MicroserviceOptions&gt;(
  UserModule,
  {
    transport: Transport.TCP,
    options: { host: '0.0.0.0', port: 3001 },
  },
);
await app.listen();
</code></pre>

<pre><code class="language-typescript">// User Service — Controller
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class UserController {
  @MessagePattern({ cmd: 'get_user' })
  getUser(@Payload() data: { id: string }) {
    return this.usersService.findById(data.id);
  }

  @MessagePattern({ cmd: 'create_user' })
  createUser(@Payload() data: CreateUserDto) {
    return this.usersService.create(data);
  }
}
</code></pre>

<pre><code class="language-typescript">// API Gateway — gọi microservice
@Module({
  imports: [
    ClientsModule.register([{
      name: 'USER_SERVICE',
      transport: Transport.TCP,
      options: { host: 'user-service', port: 3001 },
    }]),
  ],
})
export class AppModule {}

// Gateway Controller
@Controller('users')
export class UsersController {
  constructor(@Inject('USER_SERVICE') private userClient: ClientProxy) {}

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userClient.send({ cmd: 'get_user' }, { id });
  }
}
</code></pre>

<h2 id="3-rabbitmq"><strong>3. RabbitMQ Transport</strong></h2>

<pre><code class="language-bash">npm install amqplib amqp-connection-manager
</code></pre>

<pre><code class="language-typescript">// Order Service — main.ts
const app = await NestFactory.createMicroservice&lt;MicroserviceOptions&gt;(
  OrderModule,
  {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL],
      queue: 'orders_queue',
      queueOptions: { durable: true },
    },
  },
);
</code></pre>

<pre><code class="language-typescript">// Event-based: Publish event
@Injectable()
export class OrderService {
  constructor(@Inject('NOTIFICATION_SERVICE') private client: ClientProxy) {}

  async createOrder(dto: CreateOrderDto) {
    const order = await this.orderRepo.save(dto);

    // Emit event (fire & forget)
    this.client.emit('order_created', {
      orderId: order.id,
      userId: order.userId,
      total: order.total,
    });

    return order;
  }
}

// Notification Service — lắng nghe event
@Controller()
export class NotificationController {
  @EventPattern('order_created')
  handleOrderCreated(@Payload() data: OrderCreatedEvent) {
    this.notificationService.sendOrderConfirmation(data);
  }
}
</code></pre>

<h2 id="4-grpc"><strong>4. gRPC Transport</strong></h2>

<pre><code class="language-bash">npm install @grpc/grpc-js @grpc/proto-loader
</code></pre>

<pre><code class="language-protobuf">// proto/user.proto
syntax = "proto3";

package user;

service UserService {
  rpc FindOne (UserById) returns (User) {}
  rpc FindAll (Empty) returns (Users) {}
}

message UserById {
  string id = 1;
}

message User {
  string id = 1;
  string name = 2;
  string email = 3;
}

message Users {
  repeated User users = 1;
}

message Empty {}
</code></pre>

<pre><code class="language-typescript">// gRPC Microservice
const app = await NestFactory.createMicroservice&lt;MicroserviceOptions&gt;(
  UserModule,
  {
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: join(__dirname, 'proto/user.proto'),
      url: '0.0.0.0:5000',
    },
  },
);
</code></pre>

<pre><code class="language-typescript">// gRPC Controller
@Controller()
export class UserController {
  @GrpcMethod('UserService', 'FindOne')
  findOne(data: { id: string }): User {
    return this.usersService.findById(data.id);
  }

  @GrpcMethod('UserService', 'FindAll')
  findAll(): { users: User[] } {
    return { users: this.usersService.findAll() };
  }
}
</code></pre>

<h2 id="5-hybrid"><strong>5. Hybrid Application (HTTP + Microservice)</strong></h2>

<pre><code class="language-typescript">// main.ts — vừa HTTP vừa microservice
const app = await NestFactory.create(AppModule);

// Kết nối thêm microservice transport
app.connectMicroservice&lt;MicroserviceOptions&gt;({
  transport: Transport.RMQ,
  options: {
    urls: [process.env.RABBITMQ_URL],
    queue: 'orders_queue',
  },
});

await app.startAllMicroservices();
await app.listen(3000);
</code></pre>

<h2 id="6-tong-ket"><strong>6. Tổng kết</strong></h2>

<ul>
<li><strong>MessagePattern</strong>: Request-response (send/receive)</li>
<li><strong>EventPattern</strong>: Fire-and-forget events (emit/listen)</li>
<li><strong>TCP</strong>: Đơn giản, internal services</li>
<li><strong>RabbitMQ</strong>: Reliable messaging, dead letter queues</li>
<li><strong>gRPC</strong>: High-performance, strongly typed</li>
<li><strong>Hybrid</strong>: HTTP + Microservice trong cùng 1 app</li>
</ul>

<p>Bài tiếp theo sẽ tìm hiểu <strong>Testing trong NestJS</strong>.</p>
