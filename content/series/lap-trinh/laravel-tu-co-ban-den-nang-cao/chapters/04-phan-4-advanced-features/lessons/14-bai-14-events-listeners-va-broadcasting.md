---
id: 019d8b40-i402-7001-b010-laravel000402
title: 'Bài 14: Events, Listeners & Broadcasting'
slug: bai-14-events-listeners-va-broadcasting
description: >-
  Event system, event subscribers. Broadcasting với Pusher/Laravel
  Reverb. Private/presence channels. Real-time notifications,
  WebSocket integration. Laravel Echo.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 4: Advanced Features"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

<h2 id="1-events"><strong>1. Events & Listeners</strong></h2>

<pre><code class="language-php">// Event
class OrderPlaced
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public readonly Order $order,
    ) {}
}

// Listener
class SendOrderConfirmation implements ShouldQueue
{
    public function handle(OrderPlaced $event): void
    {
        $event->order->user->notify(new OrderConfirmation($event->order));
    }
}

// EventServiceProvider hoặc Attribute
#[AsEventListener]
class SendOrderConfirmation { ... }

// Dispatch
OrderPlaced::dispatch($order);
event(new OrderPlaced($order));
</code></pre>

<h2 id="2-broadcasting"><strong>2. Broadcasting</strong></h2>

<pre><code class="language-bash">composer require laravel/reverb
php artisan reverb:install
</code></pre>

<pre><code class="language-php">class OrderStatusUpdated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public function __construct(
        public readonly Order $order,
    ) {}

    public function broadcastOn(): array
    {
        return [new PrivateChannel('orders.' . $this->order->user_id)];
    }

    public function broadcastWith(): array
    {
        return [
            'order_id' => $this->order->id,
            'status' => $this->order->status,
        ];
    }
}

// routes/channels.php
Broadcast::channel('orders.{userId}', function (User $user, int $userId) {
    return $user->id === $userId;
});
</code></pre>

<h2 id="3-laravel-echo"><strong>3. Laravel Echo (Frontend)</strong></h2>

<pre><code class="language-javascript">import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

const echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT,
    forceTLS: false,
});

echo.private(`orders.${userId}`)
    .listen('OrderStatusUpdated', (e) => {
        console.log('Order updated:', e.order_id, e.status);
    });

// Presence channel
echo.join(`chat.${roomId}`)
    .here((users) => console.log('Online:', users))
    .joining((user) => console.log('Joined:', user))
    .leaving((user) => console.log('Left:', user));
</code></pre>

<p>Bài tiếp theo: <strong>Notifications, Mail & Scheduler</strong>.</p>
