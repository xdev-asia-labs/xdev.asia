---
featured_image: null
---

## Giới thiệu

**x-postgres-backup** là giải pháp sao lưu PostgreSQL tự động, chạy trong Docker container. Hỗ trợ nhiều phiên bản PostgreSQL, upload lên S3/MinIO, và lên lịch backup tự động với cron.

## Tính năng chính

- 🐘 **Multi-version**: Hỗ trợ PostgreSQL 13, 14, 15, 16, 17, 18
- ☁️ **S3 Upload**: Tự động upload backup lên AWS S3, MinIO, hoặc bất kỳ S3-compatible storage
- ⏰ **Cron Scheduling**: Lên lịch backup tự động (hàng ngày, hàng tuần, tuỳ chỉnh)
- 🔄 **Auto Cleanup**: Tự động xoá backup cũ theo retention policy
- 📧 **Notifications**: Gửi thông báo qua email/webhook khi backup thành công/thất bại
- 🐳 **Docker-ready**: Chạy ngay với Docker Compose
- 🖥️ **Web UI**: Giao diện quản lý backup trực quan

## Cài đặt nhanh

### Sử dụng Docker Compose

```yaml
# docker-compose.yml
services:
  backup:
    image: ghcr.io/tdduydev/x-postgres-backup:latest
    environment:
      - PG_HOST=your-db-host
      - PG_PORT=5432
      - PG_USER=postgres
      - PG_PASSWORD=your-password
      - PG_DATABASE=your-database
      - PG_VERSION=16
      - BACKUP_SCHEDULE=0 2 * * *
      - S3_BUCKET=your-bucket
      - S3_ACCESS_KEY=your-key
      - S3_SECRET_KEY=your-secret
      - S3_ENDPOINT=https://s3.amazonaws.com
    volumes:
      - ./backups:/backups
```

### Chạy

```bash
docker-compose up -d
```

## Cấu hình

### Biến môi trường

| Biến | Mô tả | Mặc định |
|------|--------|----------|
| `PG_HOST` | PostgreSQL host | `localhost` |
| `PG_PORT` | PostgreSQL port | `5432` |
| `PG_USER` | Database user | `postgres` |
| `PG_PASSWORD` | Database password | — |
| `PG_DATABASE` | Database name | — |
| `PG_VERSION` | PostgreSQL version (13-18) | `16` |
| `BACKUP_SCHEDULE` | Cron expression | `0 2 * * *` |
| `BACKUP_RETENTION_DAYS` | Số ngày giữ backup | `30` |
| `S3_BUCKET` | S3 bucket name | — |
| `S3_ENDPOINT` | S3 endpoint URL | — |

### Backup thủ công

```bash
docker exec -it backup python backup.py
```

### Restore từ backup

```bash
docker exec -it backup python restore.py --file backup_2024-01-01.sql.gz
```

## Kiến trúc

```
x-postgres-backup/
├── backup.py          # Core backup logic
├── restore.py         # Restore logic
├── config.py          # Configuration management
├── s3_upload.py       # S3 upload handler
├── scheduler.py       # Cron scheduler
├── notifications.py   # Email/webhook notifications
├── web/               # Web UI (Flask)
├── Dockerfile
└── docker-compose.yml
```

## License

MIT License
