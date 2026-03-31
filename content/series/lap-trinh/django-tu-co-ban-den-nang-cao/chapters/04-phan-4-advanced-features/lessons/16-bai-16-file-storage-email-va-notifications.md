---
id: 019d8b40-c404-7001-b004-django00000404
title: 'Bài 16: File Storage, Email & Notifications'
slug: bai-16-file-storage-email-va-notifications
description: >-
  Django file storage (local, S3 với django-storages).
  Email backend (SMTP, SES). Push notifications,
  in-app notifications, notification preferences.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 4: Advanced Features"
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: Từ Cơ bản đến Nâng cao'
  slug: django-tu-co-ban-den-nang-cao
---

<h2 id="1-file-storage"><strong>1. File Storage</strong></h2>

<pre><code class="language-python"># settings.py — Local storage
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# S3 Storage với django-storages
# pip install django-storages boto3
STORAGES = {
    'default': {
        'BACKEND': 'storages.backends.s3boto3.S3Boto3Storage',
    },
    'staticfiles': {
        'BACKEND': 'storages.backends.s3boto3.S3StaticStorage',
    },
}

AWS_ACCESS_KEY_ID = os.environ['AWS_ACCESS_KEY_ID']
AWS_SECRET_ACCESS_KEY = os.environ['AWS_SECRET_ACCESS_KEY']
AWS_STORAGE_BUCKET_NAME = 'my-bucket'
AWS_S3_REGION_NAME = 'ap-southeast-1'
AWS_S3_CUSTOM_DOMAIN = f'{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com'
AWS_QUERYSTRING_AUTH = False
</code></pre>

<h2 id="2-custom-storage"><strong>2. Custom Storage Backend</strong></h2>

<pre><code class="language-python">from storages.backends.s3boto3 import S3Boto3Storage

class PublicMediaStorage(S3Boto3Storage):
    location = 'media'
    default_acl = 'public-read'
    file_overwrite = False

class PrivateMediaStorage(S3Boto3Storage):
    location = 'private'
    default_acl = 'private'

class Document(models.Model):
    public_file = models.FileField(storage=PublicMediaStorage())
    private_file = models.FileField(storage=PrivateMediaStorage())
</code></pre>

<h2 id="3-email"><strong>3. Email Backend</strong></h2>

<pre><code class="language-python"># settings.py — SMTP
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = os.environ['EMAIL_USER']
EMAIL_HOST_PASSWORD = os.environ['EMAIL_PASSWORD']
DEFAULT_FROM_EMAIL = 'noreply@example.com'

# Gửi email
from django.core.mail import send_mail, EmailMultiAlternatives
from django.template.loader import render_to_string

def send_welcome_email(user):
    html_content = render_to_string('emails/welcome.html', {'user': user})
    msg = EmailMultiAlternatives(
        subject='Chào mừng bạn!',
        body='Chào mừng bạn đến với hệ thống.',
        from_email=DEFAULT_FROM_EMAIL,
        to=[user.email],
    )
    msg.attach_alternative(html_content, 'text/html')
    msg.send()
</code></pre>

<h2 id="4-notifications"><strong>4. In-App Notifications</strong></h2>

<pre><code class="language-python">class Notification(models.Model):
    recipient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notifications')
    title = models.CharField(max_length=255)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

class NotificationViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = NotificationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.request.user.notifications.all()

    @action(detail=False, methods=['post'])
    def mark_all_read(self, request):
        request.user.notifications.filter(is_read=False).update(is_read=True)
        return Response({'status': 'ok'})
</code></pre>

<p>Bài tiếp theo: <strong>Testing trong Django</strong>.</p>
