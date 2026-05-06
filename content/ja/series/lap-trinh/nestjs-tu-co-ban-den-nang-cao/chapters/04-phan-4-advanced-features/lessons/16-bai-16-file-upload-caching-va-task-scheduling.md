---
id: 019d8b40-a404-7001-b001-nestjs000404
title: 'レッスン 16: ファイルのアップロード、キャッシュ、タスクのスケジュール設定'
slug: bai-16-file-upload-caching-va-task-scheduling
description: >-
  Multer、S3 ストレージを使用したファイルのアップロード。 Redis でキャッシュします。 @nestjs/schedule
  によるタスクのスケジュール設定。ブルと一緒に列に並びます。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 16
section_title: 'パート 4: 高度な機能'
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: 基本から高度まで'
  slug: nestjs-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-720" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-720)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1044" cy="122" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="988" cy="66" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="932" cy="270" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="876" cy="214" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="820" cy="158" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="162" x2="1100" y2="242" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="192" x2="1050" y2="262" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="944.0429399400242,93.5 944.0429399400242,130.5 912,149 879.9570600599758,130.5 879.9570600599758,93.50000000000001 912,75" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 プログラミング — レッスン 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 16: ファイルのアップロード、キャッシュ、およびタスク</tspan>
      <tspan x="60" dy="42">スケジュール設定</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 高度な機能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-file-upload"><strong>1. Multerでファイルをアップロードする</strong></h2>

<pre><code class="language-bash">npm install @nestjs/platform-express multer
npm install -D @types/multer
</code></pre>

<pre><code class="language-typescript">// files/files.controller.ts
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('files')
export class FilesController {
  // Upload 1 file
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) =&gt; {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        cb(null, `${uniqueName}${extname(file.originalname)}`);
      },
    }),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    fileFilter: (req, file, cb) =&gt; {
      const allowed = /\.(jpg|jpeg|png|gif|webp)$/i;
      if (!allowed.test(extname(file.originalname))) {
        return cb(new BadRequestException('Only image files allowed'), false);
      }
      cb(null, true);
    },
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      filename: file.filename,
      size: file.size,
      url: `/uploads/${file.filename}`,
    };
  }

  // Upload nhiều files
  @Post('upload-multiple')
  @UseInterceptors(FilesInterceptor('files', 10))
  uploadMultiple(@UploadedFiles() files: Express.Multer.File[]) {
    return files.map((f) =&gt; ({
      filename: f.filename,
      size: f.size,
    }));
  }
}
</code></pre>

<h3>S3にアップロードする</h3>

<pre><code class="language-typescript">import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

@Injectable()
export class S3Service {
  private s3: S3Client;

  constructor(private config: ConfigService) {
    this.s3 = new S3Client({
      region: config.get('AWS_REGION'),
      credentials: {
        accessKeyId: config.get('AWS_ACCESS_KEY_ID'),
        secretAccessKey: config.get('AWS_SECRET_ACCESS_KEY'),
      },
    });
  }

  async upload(file: Express.Multer.File, folder: string): Promise&lt;string&gt; {
    const key = `${folder}/${Date.now()}-${file.originalname}`;
    
    await this.s3.send(new PutObjectCommand({
      Bucket: this.config.get('AWS_S3_BUCKET'),
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    }));

    return `https://${this.config.get('AWS_S3_BUCKET')}.s3.amazonaws.com/${key}`;
  }
}
</code></pre>

<h2 id="2-caching"><strong>2. Redis を使用したキャッシュ</strong></h2>

<pre><code class="language-bash">npm install @nestjs/cache-manager cache-manager cache-manager-redis-yet
</code></pre>

<pre><code class="language-typescript">// app.module.ts
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () =&gt; ({
        store: await redisStore({
          socket: { host: 'localhost', port: 6379 },
          ttl: 60_000, // 60 giây default
        }),
      }),
    }),
  ],
})
export class AppModule {}
</code></pre>

<pre><code class="language-typescript">// Sử dụng trong service
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class ProductsService {
  constructor(@Inject(CACHE_MANAGER) private cache: Cache) {}

  async findAll(): Promise&lt;Product[]&gt; {
    const cacheKey = 'products:all';
    const cached = await this.cache.get&lt;Product[]&gt;(cacheKey);
    if (cached) return cached;

    const products = await this.productRepo.find();
    await this.cache.set(cacheKey, products, 300_000); // 5 phút
    return products;
  }

  async update(id: string, dto: UpdateProductDto) {
    const product = await this.productRepo.save({ id, ...dto });
    // Invalidate cache
    await this.cache.del('products:all');
    await this.cache.del(`products:${id}`);
    return product;
  }
}
</code></pre>

<h3>キャッシュデコレーター</h3>

<pre><code class="language-typescript">// Custom cache decorator
export function Cacheable(key: string, ttl = 60_000) {
  return applyDecorators(
    UseInterceptors(CacheInterceptor),
    SetMetadata('cache_key', key),
    SetMetadata('cache_ttl', ttl),
  );
}

// Sử dụng
@Get()
@Cacheable('products:all', 300_000)
findAll() {
  return this.productsService.findAll();
}
</code></pre>

<h2 id="3-scheduling"><strong>3. タスクのスケジュール設定</strong></h2>

<pre><code class="language-bash">npm install @nestjs/schedule
</code></pre>

<pre><code class="language-typescript">// app.module.ts
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
})
export class AppModule {}
</code></pre>

<pre><code class="language-typescript">// tasks/tasks.service.ts
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  // Chạy mỗi ngày lúc 2:00 AM
  @Cron('0 2 * * *')
  async handleDailyCleanup() {
    this.logger.log('Running daily cleanup...');
    await this.cleanupExpiredSessions();
    await this.cleanupOldLogs();
  }

  // Chạy mỗi 30 giây
  @Cron(CronExpression.EVERY_30_SECONDS)
  handleHealthCheck() {
    this.logger.debug('Health check ping');
  }

  // Chạy mỗi 5 phút
  @Interval(5 * 60 * 1000)
  async syncExternalData() {
    this.logger.log('Syncing external data...');
  }

  // Chạy 1 lần sau 10 giây khi app start
  @Timeout(10_000)
  async onceAfterStartup() {
    this.logger.log('Warming up caches...');
    await this.warmupCache();
  }
}
</code></pre>

<h2 id="4-queue"><strong>4. 雄牛と並ぶ</strong></h2>

<pre><code class="language-bash">npm install @nestjs/bull bull
npm install -D @types/bull
</code></pre>

<pre><code class="language-typescript">// app.module.ts
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.forRoot({
      redis: { host: 'localhost', port: 6379 },
    }),
    BullModule.registerQueue({ name: 'email' }),
    BullModule.registerQueue({ name: 'image-processing' }),
  ],
})
export class AppModule {}
</code></pre>

<pre><code class="language-typescript">// email/email.processor.ts
import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('email')
export class EmailProcessor {
  @Process('send-welcome')
  async handleWelcomeEmail(job: Job&lt;{ email: string; name: string }&gt;) {
    const { email, name } = job.data;
    await this.mailerService.send({
      to: email,
      subject: `Chào mừng ${name}!`,
      template: 'welcome',
      context: { name },
    });
  }

  @Process('send-reset-password')
  async handleResetPassword(job: Job&lt;{ email: string; token: string }&gt;) {
    // Gửi email reset password
  }
}
</code></pre>

<pre><code class="language-typescript">// Thêm job vào queue
@Injectable()
export class UsersService {
  constructor(@InjectQueue('email') private emailQueue: Queue) {}

  async register(dto: CreateUserDto) {
    const user = await this.userRepo.save(dto);
    
    await this.emailQueue.add('send-welcome', {
      email: user.email,
      name: user.name,
    }, {
      delay: 5000,        // Delay 5 giây
      attempts: 3,        // Retry 3 lần nếu fail
      backoff: { type: 'exponential', delay: 2000 },
    });

    return user;
  }
}
</code></pre>

<h2 id="5-tong-ket"><strong>5. まとめ</strong></h2>

<ul>
<li><strong>ファイルのアップロード</strong>: ローカルの場合は Multer、本番環境の場合は S3、ファイルの種類とサイズを検証します</li>
<li><strong>キャッシング</strong>: Redis ベースのキャッシュ、キャッシュの無効化、カスタム デコレーター</li>
<li><strong>スケジュール設定</strong>: Cron ジョブ、間隔、バックグラウンド タスクのタイムアウト</li>
<li><strong>キュー</strong>: Bull + Redis の非同期ジョブ処理 (電子メール、画像、レポート)</li>
</ul>

<p>次の記事で詳しく説明します <strong>NestJS マイクロサービス</strong>。</p>
