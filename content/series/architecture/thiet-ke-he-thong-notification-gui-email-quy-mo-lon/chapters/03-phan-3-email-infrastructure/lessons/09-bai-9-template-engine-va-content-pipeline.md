---
id: 019e7a10-a109-7001-d001-f1e2d3c4b509
title: "Bài 9: Template Engine & Content Pipeline"
slug: bai-9-template-engine-va-content-pipeline
description: >-
  Email template system: MJML, Handlebars, React Email. Template versioning, A/B testing, dynamic content personalization, content pipeline, pre-rendering, caching.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: Email Infrastructure & Delivery Engine"
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: "Thiết kế Hệ thống Notification gửi hàng triệu Email"
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
---

## Giới thiệu

Khi gửi 10 triệu email, mỗi email có thể cần nội dung **khác nhau** — tên, sản phẩm gợi ý, mã giảm giá riêng. Template Engine là component chịu trách nhiệm render hàng triệu email **nhanh** và **personalized**.

---

## 1. Email Template Technologies

### So sánh

| Technology | Syntax | Output | Responsive | Learning Curve |
|-----------|--------|--------|-----------|---------------|
| MJML | XML-like | HTML email | ✅ Built-in | Easy |
| Handlebars | `{{var}}` | HTML/Text | Manual | Easy |
| React Email | JSX | HTML email | ✅ Components | Medium |
| Liquid | `{{var}}` | HTML/Text | Manual | Easy |
| EJS | `<%= var %>` | HTML/Text | Manual | Easy |

### MJML Example

```xml
<mjml>
  <mj-head>
    <mj-attributes>
      <mj-all font-family="Helvetica, Arial, sans-serif" />
    </mj-attributes>
  </mj-head>
  <mj-body background-color="#f4f4f4">
    <mj-section background-color="#ffffff" padding="20px">
      <mj-column>
        <mj-image src="https://cdn.shop.com/logo.png" width="150px" />
        <mj-text font-size="24px" color="#333">
          Xin chào {{first_name}}! 🎉
        </mj-text>
        <mj-text>
          Flash Sale đang diễn ra! Sử dụng mã
          <strong>{{discount_code}}</strong> để được giảm
          <strong>{{discount_percent}}%</strong>.
        </mj-text>
        <mj-button background-color="#e74c3c" href="{{cta_url}}">
          Mua ngay
        </mj-button>
      </mj-column>
    </mj-section>

    <!-- Personalized product recommendations -->
    {{#each recommended_products}}
    <mj-section>
      <mj-column>
        <mj-image src="{{this.image_url}}" />
        <mj-text>{{this.name}} - {{this.price}}</mj-text>
        <mj-button href="{{this.url}}">Xem chi tiết</mj-button>
      </mj-column>
    </mj-section>
    {{/each}}

    <mj-section>
      <mj-column>
        <mj-text font-size="12px" color="#999">
          <a href="{{unsubscribe_url}}">Hủy đăng ký</a>
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

---

## 2. Content Pipeline Architecture

```
┌────────────┐    ┌────────────┐    ┌────────────┐    ┌────────────┐
│  Template   │───▶│   Render   │───▶│  Validate  │───▶│   Send     │
│  Storage    │    │   Engine   │    │  & Inline  │    │  to ESP    │
│            │    │            │    │            │    │            │
│ MJML/HTML  │    │ + Context  │    │ CSS inline │    │ Final HTML │
│ Templates  │    │ = HTML     │    │ Image URLs │    │            │
└────────────┘    └────────────┘    └────────────┘    └────────────┘
```

### Implementation

```python
class ContentPipeline:
    def __init__(self):
        self.template_store = TemplateStore()    # Redis + DB
        self.mjml_compiler = MJMLCompiler()       # MJML → HTML
        self.handlebars = HandlebarsEngine()       # Variable substitution
        self.css_inliner = CSSInliner()           # Inline CSS
        self.link_tracker = LinkTracker()          # Tracking links

    async def render(
        self, template_id: str, context: dict
    ) -> RenderedEmail:
        # 1. Get compiled template (cached)
        template = await self.get_compiled_template(template_id)

        # 2. Render variables
        html = self.handlebars.render(template.html, context)
        subject = self.handlebars.render(template.subject, context)

        # 3. Inline CSS (email clients strip <style> tags)
        html = self.css_inliner.inline(html)

        # 4. Add tracking
        html = self.link_tracker.wrap_links(
            html,
            campaign_id=context.get('campaign_id'),
            recipient_id=context.get('recipient_id'),
        )

        # 5. Add tracking pixel
        html = self.add_open_tracking_pixel(
            html,
            message_id=context.get('message_id'),
        )

        # 6. Generate text version
        text = self.html_to_text(html)

        return RenderedEmail(
            subject=subject,
            html=html,
            text=text,
        )

    async def get_compiled_template(self, template_id: str):
        # Check cache first
        cached = await self.redis.get(f"template:{template_id}")
        if cached:
            return CompiledTemplate.from_cache(cached)

        # Compile MJML → HTML
        template = await self.template_store.get(template_id)
        compiled_html = self.mjml_compiler.compile(template.mjml_source)

        # Cache for 1 hour
        compiled = CompiledTemplate(
            html=compiled_html,
            subject=template.subject,
        .(version=template.version,
        )
        await self.redis.set(//
            f"template:{template_id}",
            compiled.to_cache(),
            ex=3600
        )
        return compiled
```

---

## 3. Template Versioning & A/B Testing

### Version Management

```python
class TemplateVersionManager:
    async def create_version(
        self, template_id: str, mjml_source: str, subject: str
    ):
        current = await self.db.get_active_version(template_id)
        new_version = (current.version if current else 0) + 1

        await self.db.insert('template_versions', {
            'template_id': template_id,
            'version': new_version,
            'mjml_source	': mjml_source,
            'subject': subject,
            'is_active': False,  ishi# Not active until published
            'created_at': datetime.utcnow(),
        })

        # Invalidate cache
        await self.redis.delete(f"template:{template_id	}")

    async def publish_version(self, template_id: str, version: int):
        await self.db.execute(
            "UPDATE template_versions SET is_active = false "
            "WHERE template_id = %s", [template_id]
        )
        await self.db.execute(
            "UPDATE template_versions SET is_active = true "
            "WHERE template_id = %s AND version = %s",
            [template_id, version]
        )
```

### A/B Testing

```python
class ABTestingEngine:
    async def create_ab_test(
        self,
        campaign_id: str,
        variants: list[dict],
        split_ratio: list[float],
    ):
        """
        variants = [
            {'template_id': 'tmpl_v1', 'subject': 'Flash Sale!'},
            {'template_id': 'tmpl_v2', 'subject': '30% OFF Today Only'},
        ]
        split_ratio = [0.5, 0.5]  # 50/50 split
        """
        await self.db.insert('ab_tests', {
            'campaign_id': campaign_id,
            'variants': variants,
            'split_ratio': split_ratio,
            'winner': None,
            'status': 'running',
        })

    def assign_variant(self, recipient_id: str, ab_test: dict) -> dict:
        """Deterministic variant assignment based on recipient ID"""
        hash_value = hash(recipient_id) % 100
        cumulative = 0
        for i, ratio in enumerate(ab_test['split_ratio']):
            cumulative += ratio * 100
            if hash_value < cumulative:
                return ab_test['variants'][i]
        return ab_test['variants'][-1]

    async def determine_winner(self, campaign_id: str):
        """After campaign completes, determine winning variant"""
        results = await self.db.query(
            "SELECT variant_id, "
            "  COUNT(*) as sent, "
            "  SUM(CASE WHEN opened_at IS NOT NULL THEN 1 END) as opens, "
            "  SUM(CASE WHEN clicked_at IS NOT NULL THEN 1 END) as clicks "
            "FROM email_messages "
            "WHERE campaign_id = %s "
            "GROUP BY variant_id",
            [campaign_id]
        )
        # Winner = highest click rate
        winner = max(results, key=lambda r: r['clicks'] / r['sent'])
        return winner
```

---

## 4. Pre-rendering & Caching Strategy

### Vấn đề

10 triệu emails × 50ms render = **139 giờ** render time 😱

### Solution 1: Pre-render in Background

```python
class PreRenderService:
    async def pre_render_campaign(self, campaign_id: str):
        """Pre-render all emails before campaign starts"""
        campaign = await self.get_campaign(campaign_id)
        template = await self.get_template(campaign.template_id)

        async for batch in self.stream_recipients(campaign, batch_size=500):
            rendered_batch = []
            for recipient in batch:
                context = self.build_context(campaign, recipient)
                rendered = await self.pipeline.render(
                    campaign.template_id, context
                )
                rendered_batch.append({
                    'message_id': generate_id(),
                    'recipient': recipient.email,
                    'subject': rendered.subject,
                    'html': rendered.html,
                })

            # Store pre-rendered emails
            await self.store_rendered_batch(campaign_id, rendered_batch)

        await self.update_campaign_status(campaign_id, 'PRE_RENDERED')
```

### Solution 2: Template Fragment Caching

```python
class FragmentCachingPipeline:
    """Cache static parts, only render dynamic parts"""

    async def render_with_cache(self, template_id: str, context: dict):
        # Static parts (header, footer, layout) → cached
        static_html = await self.get_static_parts(template_id)

        # Dynamic parts only → render per recipient
        dynamic_html = self.render_dynamic_slots(static_html, context)

        return dynamic_html

    async def get_static_parts(self, template_id: str):
        cache_key = f"template_static:{template_id}"
        cached = await self.redis.get(cache_key)
        if cached:
            return cached

        template = await self.template_store.get(template_id)
        # Compile MJML, inline CSS (these are expensive)
        static = self.compile_and_inline(template)
        await self.redis.set(cache_key, static, ex=3600)
        return static
```

### Performance Comparison

```
Full render:      50ms per email → 139 hours for 10M
Fragment cache:   5ms per email  → 13.9 hours for 10M
Pre-render:       0ms at send time → instant (pre-computed)

With 20 workers:
Fragment cache:   13.9 / 20 = ~42 minutes
Pre-render:       13.9 / 20 = ~42 min prep, 0 at send time
```

---

## 5. Dynamic Content Personalization

### Personalization Variables

```python
class PersonalizationEngine:
    async def build_context(
        self, campaign: Campaign, recipient: Recipient
    ) -> dict:
        return {
            # Basic info
            'first_name': recipient.first_name or 'bạn',
            'email': recipient.email,

            # Campaign specific
            'discount_code': await self.generate_unique_code(recipient.id),
            'discount_percent': campaign.metadata['discount'],

            # Personalized recommendations
            'recommended_products': await self.get_recommendations(
                recipient.id, limit=3
            ),

            # Dynamic URLs
            'cta_url': self.build_tracked_url(
                campaign.cta_url,
                campaign_id=campaign.id,
                recipient_id=recipient.id,
            ),
            'unsubscribe_url': self.build_unsubscribe_url(
                recipient.email,
                campaign.id,
            ),

            # Conditional content
            'is_vip': recipient.tier == 'vip',
            'locale': recipient.locale or 'vi',
        }
```

### Conditional Content in Templates

```handlebars
{{#if is_vip}}
  <mj-section background-color="#ffd700">
    <mj-text>⭐ Ưu đãi VIP: Giảm thêm 10%!</mj-text>
  </mj-section>
{{/if}}

{{#if (eq locale 'en')}}
  <mj-text>Hello {{first_name}}!</mj-text>
{{else}}
  <mj-text>Xin chào {{first_name}}!</mj-text>
{{/if}}
```

---

## 6. Compliance — Unsubscribe & CAN-SPAM

### One-Click Unsubscribe (RFC 8058)

```python
class UnsubscribeManager:
    def build_headers(self, email: str, campaign_id: str) -> dict:
        token = self.generate_unsubscribe_token(email, campaign_id)
        return {
            'List-Unsubscribe': (
                f'<https://mail.yourdomain.com/unsubscribe?token={token}>, '
                f'<mailto:unsubscribe@yourdomain.com?subject={token}>'
            ),
            'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
        }

    async def handle_unsubscribe(self, token: str):
        data = self.verify_token(token)
        await self.suppression_service.add(
            email=data['email'],
            reason='unsubscribe',
            campaign_id=data['campaign_id'],
        )
```

---

## Tổng kết

- **MJML** là lựa chọn tốt nhất cho responsive email templates
- **Content pipeline**: Template → Render → CSS Inline → Track → Send
- **Pre-rendering** hoặc **fragment caching** giảm render time 10x
- **A/B testing** giúp optimize open rate và click rate
- Luôn tuân thủ **CAN-SPAM** với one-click unsubscribe

**Bài tiếp theo:** Rate Limiting & Throttling — kiểm soát tốc độ gửi email.
