---
id: 019d8b40-i401-7001-b010-laravel000401
title: 'Bài 13: Queues & Jobs'
slug: bai-13-queues-va-jobs
description: >-
  Queue drivers (Redis, SQS, Database). Job classes, dispatching,
  chaining. Job batching, rate limiting. Failed jobs, retry.
  Laravel Horizon monitoring. Queue priorities.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: Advanced Features"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

<h2 id="1-setup"><strong>1. Queue Setup</strong></h2>

<pre><code class="language-env">QUEUE_CONNECTION=redis
</code></pre>

<pre><code class="language-bash">php artisan make:job ProcessOrder
</code></pre>

<h2 id="2-jobs"><strong>2. Job Classes</strong></h2>

<pre><code class="language-php">namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessOrder implements ShouldQueue
{
    use InteractsWithQueue, Queueable, SerializesModels;

    public int $tries = 3;
    public int $backoff = 60;
    public int $timeout = 120;

    public function __construct(
        public readonly Order $order,
    ) {}

    public function handle(): void
    {
        // Process payment
        PaymentService::charge($this->order);
        // Send confirmation
        $this->order->user->notify(new OrderConfirmation($this->order));
    }

    public function failed(\Throwable $exception): void
    {
        Log::error('Order processing failed', [
            'order_id' => $this->order->id,
            'error' => $exception->getMessage(),
        ]);
    }
}

// Dispatch
ProcessOrder::dispatch($order);
ProcessOrder::dispatch($order)->onQueue('high');
ProcessOrder::dispatch($order)->delay(now()->addMinutes(5));
</code></pre>

<h2 id="3-chaining-batching"><strong>3. Job Chaining & Batching</strong></h2>

<pre><code class="language-php">// Chaining — thực hiện tuần tự
Bus::chain([
    new ProcessPayment($order),
    new SendInvoice($order),
    new UpdateInventory($order),
])->dispatch();

// Batching — thực hiện song song
$batch = Bus::batch([
    new ProcessImage($image1),
    new ProcessImage($image2),
    new ProcessImage($image3),
])->then(function (Batch $batch) {
    Log::info('All images processed!');
})->catch(function (Batch $batch, \Throwable $e) {
    Log::error('Batch failed: ' . $e->getMessage());
})->dispatch();
</code></pre>

<h2 id="4-horizon"><strong>4. Laravel Horizon</strong></h2>

<pre><code class="language-bash">composer require laravel/horizon
php artisan horizon:install
php artisan horizon
</code></pre>

<pre><code class="language-php">// config/horizon.php
'environments' => [
    'production' => [
        'supervisor-1' => [
            'connection' => 'redis',
            'queue' => ['high', 'default', 'low'],
            'balance' => 'auto',
            'maxProcesses' => 10,
            'tries' => 3,
        ],
    ],
],
</code></pre>

<pre><code class="language-bash"># Failed jobs
php artisan queue:failed
php artisan queue:retry all
php artisan queue:flush
</code></pre>

<p>Bài tiếp theo: <strong>Events, Listeners & Broadcasting</strong>.</p>
