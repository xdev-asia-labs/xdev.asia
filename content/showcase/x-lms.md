---
featured_image: null
---

## Giới thiệu

**x-lms** là hệ thống quản lý học tập (LMS) xây dựng bằng Laravel, cung cấp đầy đủ tính năng để tạo và quản lý khoá học trực tuyến: bài giảng, bài tập, quiz, chứng chỉ.

## Tính năng chính

- 📚 **Course Management**: Tạo khoá học với sections, lessons, quizzes
- 👨‍🎓 **Student Dashboard**: Theo dõi tiến trình học tập
- 📝 **Quiz System**: Tạo bài kiểm tra với nhiều loại câu hỏi
- 🏆 **Certificates**: Cấp chứng chỉ tự động khi hoàn thành
- 💳 **Payment Integration**: Thanh toán qua Stripe, PayPal
- 📊 **Analytics**: Báo cáo chi tiết về học viên và khoá học
- 🌍 **Multi-language**: Hỗ trợ đa ngôn ngữ (i18n)
- 📱 **Responsive**: Giao diện tương thích mọi thiết bị

## Yêu cầu hệ thống

| Yêu cầu | Phiên bản |
|----------|-----------|
| PHP | 8.2+ |
| Laravel | 11.x |
| MySQL/PostgreSQL | 8.0+ / 15+ |
| Node.js | 18+ |
| Composer | 2.x |

## Cài đặt

### Clone repository

```bash
git clone https://github.com/tdduydev/x-lms.git
cd x-lms
```

### Cài đặt dependencies

```bash
composer install
npm install
```

### Cấu hình môi trường

```bash
cp .env.example .env
php artisan key:generate
```

Cập nhật database trong `.env`:

```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=x_lms
DB_USERNAME=postgres
DB_PASSWORD=your-password
```

### Migrate database

```bash
php artisan migrate --seed
```

### Chạy development server

```bash
php artisan serve
npm run dev
```

Mở [http://localhost:8000](http://localhost:8000)

## Cấu trúc dự án

```
x-lms/
├── app/
│   ├── Http/Controllers/
│   │   ├── CourseController.php
│   │   ├── LessonController.php
│   │   └── QuizController.php
│   ├── Models/
│   │   ├── Course.php
│   │   ├── Lesson.php
│   │   ├── Quiz.php
│   │   └── Certificate.php
│   └── Services/
├── database/
│   ├── migrations/
│   └── seeders/
├── resources/
│   ├── views/          # Blade templates
│   └── js/             # Vue.js components
├── routes/
│   ├── web.php
│   └── api.php
└── tests/
```

## API Endpoints

| Method | Endpoint | Mô tả |
|--------|----------|--------|
| `GET` | `/api/courses` | Danh sách khoá học |
| `GET` | `/api/courses/{id}` | Chi tiết khoá học |
| `POST` | `/api/courses/{id}/enroll` | Đăng ký khoá học |
| `GET` | `/api/lessons/{id}` | Chi tiết bài học |
| `POST` | `/api/quizzes/{id}/submit` | Nộp bài quiz |

## License

MIT License
