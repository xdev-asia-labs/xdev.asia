---
id: 019d8b40-c302-7001-b004-django00000302
title: 'Lesson 10: Permissions & Authorization'
slug: bai-10-permissions-va-authorization
description: >-
  DRF Permissions (IsAuthenticated, IsAdminUser, custom). Object-level
  permissions, django-guardian. Role-based access control (RBAC), Django Groups.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 10
section_title: 'Part 3: Authentication & Security'
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: From Basics to Advanced'
  slug: django-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6707" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6707)"/>

  <!-- Decorations -->
  <g>
    <circle cx="741" cy="273" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="882" cy="94" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="1023" cy="175" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="664" cy="256" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="805" cy="77" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="143" x2="1100" y2="223" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="173" x2="1050" y2="243" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1075.9089653438086,224 1075.9089653438086,262 1043,281 1010.0910346561914,262 1010.0910346561914,224 1043,205" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 Programming — Lesson 10</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 10: Permissions & Authorization</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Django: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Authentication & Security</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-drf-permissions"><strong>1. DRF Built-in Permissions</strong></h2>

<pre><code class="language-python">from rest_framework.permissions import (
    IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly,
)

class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]

# Global default
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
}
</code></pre>

<h2 id="2-custom-permissions"><strong>2. Custom Permissions</strong></h2>

<pre><code class="language-python">from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsOwnerOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.owner == request.user

class IsStaffOrAdmin(BasePermission):
    def has_permission(self, request, view):
        return request.user.role in ('admin', 'staff')

class ProductViewSet(viewsets.ModelViewSet):
    def get_permissions(self):
        if self.action in ['create', 'update', 'destroy']:
            return [IsAuthenticated(), IsStaffOrAdmin()]
        return [IsAuthenticatedOrReadOnly()]
</code></pre>

<h2 id="3-django-groups"><strong>3. Django Groups & Permissions</strong></h2>

<pre><code class="language-python">from django.contrib.auth.models import Group, Permission

# Tạo group và gán permissions
editors = Group.objects.create(name='Editors')
perm = Permission.objects.get(codename='change_product')
editors.permissions.add(perm)

# Gán user vào group
user.groups.add(editors)

# Kiểm tra permission
user.has_perm('products.change_product')

# Custom model permission
class Product(models.Model):
    class Meta:
        permissions = [
            ('publish_product', 'Can publish product'),
            ('feature_product', 'Can feature product'),
        ]
</code></pre>

<h2 id="4-object-level"><strong>4. Object-Level Permissions</strong></h2>

<pre><code class="language-python"># pip install django-guardian
INSTALLED_APPS = [..., 'guardian']
AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',
    'guardian.backends.ObjectPermissionBackend',
]

from guardian.shortcuts import assign_perm, get_objects_for_user

# Gán quyền cho object cụ thể
assign_perm('change_product', user, product)
assign_perm('view_product', group, product)

# Query objects user có quyền
products = get_objects_for_user(user, 'products.view_product')
</code></pre>

<h2 id="5-rbac"><strong>5. Role-Based Access Control</strong></h2>

<pre><code class="language-python">class RoleBasedPermission(BasePermission):
    role_permissions = {
        'admin': ['*'],
        'manager': ['list', 'retrieve', 'create', 'update'],
        'staff': ['list', 'retrieve'],
        'customer': ['list', 'retrieve'],
    }

    def has_permission(self, request, view):
        if not request.user.is_authenticated:
            return False
        allowed = self.role_permissions.get(request.user.role, [])
        if '*' in allowed:
            return True
        return view.action in allowed
</code></pre>

<p>Next article: <strong>Social Auth & OAuth2</strong>.</p>
