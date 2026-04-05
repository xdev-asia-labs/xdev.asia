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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5942" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5942)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1019" cy="67" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="938" cy="166" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="857" cy="265" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="776" cy="104" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="695" cy="203" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="237" x2="1100" y2="317" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="267" x2="1050" y2="337" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1064.712812921102,221 1064.712812921102,253 1037,269 1009.287187078898,253 1009.287187078898,221 1037,205" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 Lập trình — Bài 13</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 13: Queues &amp; Jobs</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Advanced Features</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

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
