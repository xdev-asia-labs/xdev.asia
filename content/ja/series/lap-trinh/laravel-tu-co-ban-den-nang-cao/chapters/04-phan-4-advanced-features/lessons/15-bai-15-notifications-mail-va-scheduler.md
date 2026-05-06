---
id: 019d8b40-i403-7001-b010-laravel000403
title: 'レッスン 15: 通知、メール、スケジューラ'
slug: bai-15-notifications-mail-va-scheduler
description: >-
  通知チャネル (メール、データベース、Slack、SMS)。マークダウンメール、Mailables。タスクのスケジュール設定、カスタム アーティザン
  コマンド。 DTO の laravel-data。サービスコンテナの詳細。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 4: 高度な機能'
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: 基本から上級まで'
  slug: laravel-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2051" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2051)"/>

  <!-- Decorations -->
  <g>
    <circle cx="784" cy="162" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="968" cy="206" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="652" cy="250" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="836" cy="34" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="1020" cy="78" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="182" x2="1100" y2="262" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="212" x2="1050" y2="282" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="964.0429399400242,113.5 964.0429399400242,150.5 932,169 899.9570600599758,150.5 899.9570600599758,113.50000000000001 932,95" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 プログラミング — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 15: 通知、メール、スケジューラ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 高度な機能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-notifications"><strong>1. お知らせ</strong></h2>

<pre><code class="language-bash">php artisan make:notification OrderShipped
</code></pre>

<pre><code class="language-php">class OrderShipped extends Notification implements ShouldQueue
{
    use Queueable;

    public function __construct(
        public readonly Order $order,
    ) {}

    public function via(object $notifiable): array
    {
        return ['mail', 'database'];
    }

    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Đơn hàng đã gửi')
            ->greeting('Xin chào ' . $notifiable->name)
            ->line('Đơn hàng #' . $this->order->id . ' đã được gửi.')
            ->action('Xem đơn hàng', url('/orders/' . $this->order->id))
            ->line('Cảm ơn bạn đã mua hàng!');
    }

    public function toArray(object $notifiable): array
    {
        return [
            'order_id' => $this->order->id,
            'message' => 'Đơn hàng #' . $this->order->id . ' đã gửi',
        ];
    }
}

// Gửi
$user->notify(new OrderShipped($order));
Notification::send($users, new OrderShipped($order));
</code></pre>

<h2 id="2-mailables"><strong>2. 郵送物</strong></h2>

<pre><code class="language-php">class WelcomeMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public readonly User $user,
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(subject: 'Chào mừng bạn!');
    }

    public function content(): Content
    {
        return new Content(markdown: 'emails.welcome');
    }

    public function attachments(): array
    {
        return [Attachment::fromPath('/path/guide.pdf')];
    }
}

Mail::to($user)->queue(new WelcomeMail($user));
</code></pre>

<h2 id="3-scheduler"><strong>3. タスクのスケジュール設定</strong></h2>

<pre><code class="language-php">// routes/console.php (Laravel 11)
Schedule::command('telescope:prune')->daily();
Schedule::command('reports:generate')->weeklyOn(1, '08:00');

Schedule::call(function () {
    DB::table('sessions')->where('last_activity', '<', now()->subHours(24))->delete();
})->hourly();

Schedule::job(new CleanupExpiredTokens)->everyFifteenMinutes();
</code></pre>

<h2 id="4-artisan"><strong>4. カスタム アーティザン コマンド</strong></h2>

<pre><code class="language-php">class GenerateReport extends Command
{
    protected $signature = 'report:generate {type} {--from= : Start date} {--to= : End date}';
    protected $description = 'Generate business reports';

    public function handle(): int
    {
        $type = $this->argument('type');
        $from = $this->option('from') ?? now()->startOfMonth()->toDateString();

        $this->info("Generating {$type} report from {$from}...");

        $bar = $this->output->createProgressBar(100);
        // ... process
        $bar->finish();

        $this->newLine();
        $this->info('Report generated successfully!');
        return Command::SUCCESS;
    }
}
</code></pre>

<p>次の記事: <strong>キャッシュ、セッション、パフォーマンス</strong>。</p>
