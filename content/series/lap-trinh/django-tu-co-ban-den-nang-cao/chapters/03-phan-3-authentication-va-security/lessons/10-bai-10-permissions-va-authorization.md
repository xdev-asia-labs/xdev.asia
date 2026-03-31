---
id: 019d8b40-c302-7001-b004-django00000302
title: 'Bài 10: Permissions & Authorization'
slug: bai-10-permissions-va-authorization
description: >-
  DRF Permissions (IsAuthenticated, IsAdminUser, custom).
  Object-level permissions, django-guardian.
  Role-based access control (RBAC), Django Groups.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: Authentication & Security"
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: Từ Cơ bản đến Nâng cao'
  slug: django-tu-co-ban-den-nang-cao
---

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

<p>Bài tiếp theo: <strong>Social Auth & OAuth2</strong>.</p>
