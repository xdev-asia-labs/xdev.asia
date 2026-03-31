---
id: 019d8b40-i403-7001-b010-laravel000403
title: 'Bài 15: Notifications, Mail & Scheduler'
slug: bai-15-notifications-mail-va-scheduler
description: >-
  Notification channels (mail, database, Slack, SMS). Markdown mail,
  Mailables. Task scheduling, custom Artisan commands.
  laravel-data cho DTOs. Service container deep dive.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 4: Advanced Features"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

<h2 id="1-notifications"><strong>1. Notifications</strong></h2>

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

<h2 id="2-mailables"><strong>2. Mailables</strong></h2>

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

<h2 id="3-scheduler"><strong>3. Task Scheduling</strong></h2>

<pre><code class="language-php">// routes/console.php (Laravel 11)
Schedule::command('telescope:prune')->daily();
Schedule::command('reports:generate')->weeklyOn(1, '08:00');

Schedule::call(function () {
    DB::table('sessions')->where('last_activity', '<', now()->subHours(24))->delete();
})->hourly();

Schedule::job(new CleanupExpiredTokens)->everyFifteenMinutes();
</code></pre>

<h2 id="4-artisan"><strong>4. Custom Artisan Commands</strong></h2>

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

<p>Bài tiếp theo: <strong>Caching, Sessions & Performance</strong>.</p>
