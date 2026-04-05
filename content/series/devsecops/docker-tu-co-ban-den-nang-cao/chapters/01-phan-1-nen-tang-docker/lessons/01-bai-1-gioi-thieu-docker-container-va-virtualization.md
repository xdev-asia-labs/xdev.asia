---
id: 019d8a21-a101-7001-b001-d0c4e7000101
title: 'Bài 1: Giới thiệu Docker - Container và Virtualization'
slug: bai-1-gioi-thieu-docker-container-va-virtualization
description: >-
  Tìm hiểu Docker là gì, so sánh container vs virtual machine, kiến trúc
  Docker Engine (daemon, CLI, containerd, runc), lịch sử phát triển container
  technology và tại sao Docker thay đổi cách chúng ta phát triển phần mềm.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Nền tảng Docker"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker từ Cơ bản đến Nâng cao
  slug: docker-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4929" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4929)"/>

  <!-- Decorations -->
  <g>
    <circle cx="912" cy="186" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="724" cy="238" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="1036" cy="30" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="848" cy="82" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="660" cy="134" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="126" x2="1100" y2="206" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="156" x2="1050" y2="226" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1061.507041555162,205.5 1061.507041555162,246.5 1026,267 990.492958444838,246.5 990.492958444838,205.5 1026,185" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — Bài 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 1: Giới thiệu Docker - Container và</tspan>
      <tspan x="60" dy="42">Virtualization</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Docker từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng Docker</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-docker-la-gi"><strong>1. Docker là gì?</strong></h2>
<p>Docker là một nền tảng mã nguồn mở cho phép bạn đóng gói, phân phối và chạy ứng dụng trong các <strong>containers</strong> - môi trường cô lập, nhẹ và di động. Được phát triển bởi Solomon Hykes và ra mắt năm 2013, Docker đã cách mạng hóa cách chúng ta phát triển, kiểm thử và triển khai phần mềm.</p>

<p>Docker giải quyết vấn đề kinh điển <strong>"Works on my machine"</strong> bằng cách đảm bảo ứng dụng chạy nhất quán trên mọi môi trường - từ laptop developer đến production server.</p>

<h3 id="lich-su-container"><strong>Lịch sử phát triển Container Technology</strong></h3>
<ul>
<li><p><strong>1979 - chroot</strong>: Unix chroot system call - cô lập filesystem đầu tiên</p></li>
<li><p><strong>2000 - FreeBSD Jails</strong>: Cô lập tiến trình và network</p></li>
<li><p><strong>2006 - cgroups</strong>: Google phát triển control groups cho Linux kernel</p></li>
<li><p><strong>2008 - LXC</strong>: Linux Containers - container technology đầu tiên trên Linux</p></li>
<li><p><strong>2013 - Docker</strong>: Ra mắt, làm container trở nên dễ sử dụng</p></li>
<li><p><strong>2015 - OCI</strong>: Open Container Initiative chuẩn hóa container format</p></li>
<li><p><strong>2017 - containerd</strong>: Docker tách runtime thành dự án riêng dưới CNCF</p></li>
</ul>

<h2 id="2-container-vs-vm"><strong>2. Container vs Virtual Machine</strong></h2>
<p>Để hiểu Docker, cần phân biệt rõ container và virtual machine (VM):</p>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Tiêu chí</th>
<th>Container</th>
<th>Virtual Machine</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Kiến trúc</strong></td>
<td>Chia sẻ kernel của host OS</td>
<td>Mỗi VM có OS riêng (guest OS)</td>
</tr>
<tr>
<td><strong>Khởi động</strong></td>
<td>Mili-giây đến vài giây</td>
<td>Vài phút</td>
</tr>
<tr>
<td><strong>Kích thước</strong></td>
<td>MB (thường 5-500MB)</td>
<td>GB (thường 1-40GB)</td>
</tr>
<tr>
<td><strong>RAM sử dụng</strong></td>
<td>Chỉ cần RAM cho app</td>
<td>Cần RAM cho cả guest OS</td>
</tr>
<tr>
<td><strong>Isolation</strong></td>
<td>Process-level (nhẹ hơn)</td>
<td>Hardware-level (mạnh hơn)</td>
</tr>
<tr>
<td><strong>Density</strong></td>
<td>Hàng trăm containers/host</td>
<td>Thường 10-20 VMs/host</td>
</tr>
<tr>
<td><strong>Portability</strong></td>
<td>Rất cao - chạy mọi nơi có Docker</td>
<td>Phụ thuộc hypervisor</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<pre><code>┌─────────────────────────────────────┐  ┌─────────────────────────────────────┐
│         Virtual Machines            │  │           Containers                │
│                                     │  │                                     │
│  ┌───────┐ ┌───────┐ ┌───────┐     │  │  ┌───────┐ ┌───────┐ ┌───────┐     │
│  │ App A │ │ App B │ │ App C │     │  │  │ App A │ │ App B │ │ App C │     │
│  ├───────┤ ├───────┤ ├───────┤     │  │  ├───────┤ ├───────┤ ├───────┤     │
│  │ Bins/ │ │ Bins/ │ │ Bins/ │     │  │  │ Bins/ │ │ Bins/ │ │ Bins/ │     │
│  │ Libs  │ │ Libs  │ │ Libs  │     │  │  │ Libs  │ │ Libs  │ │ Libs  │     │
│  ├───────┤ ├───────┤ ├───────┤     │  │  └───────┘ └───────┘ └───────┘     │
│  │Guest  │ │Guest  │ │Guest  │     │  │  ┌─────────────────────────────┐     │
│  │  OS   │ │  OS   │ │  OS   │     │  │  │     Docker Engine           │     │
│  └───────┘ └───────┘ └───────┘     │  │  └─────────────────────────────┘     │
│  ┌─────────────────────────────┐   │  │  ┌─────────────────────────────┐     │
│  │        Hypervisor           │   │  │  │        Host OS              │     │
│  └─────────────────────────────┘   │  │  └─────────────────────────────┘     │
│  ┌─────────────────────────────┐   │  │  ┌─────────────────────────────┐     │
│  │        Host OS              │   │  │  │     Physical Hardware       │     │
│  └─────────────────────────────┘   │  │  └─────────────────────────────┘     │
│  ┌─────────────────────────────┐   │  └─────────────────────────────────────┘
│  │     Physical Hardware       │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
</code></pre>

<h2 id="3-kien-truc-docker-engine"><strong>3. Kiến trúc Docker Engine</strong></h2>
<p>Docker Engine bao gồm nhiều thành phần hoạt động cùng nhau:</p>

<h3><strong>Docker Daemon (dockerd)</strong></h3>
<p>Là background service chạy trên host machine, chịu trách nhiệm quản lý Docker objects (images, containers, networks, volumes). Daemon lắng nghe Docker API requests và xử lý chúng.</p>

<h3><strong>Docker CLI</strong></h3>
<p>Command-line interface cho phép người dùng tương tác với Docker Daemon thông qua REST API. Mỗi lệnh <code>docker</code> bạn gõ sẽ được gửi đến daemon để xử lý.</p>

<h3><strong>containerd</strong></h3>
<p>Container runtime cấp cao, quản lý vòng đời container (pull images, tạo containers, quản lý storage và networking). Là một dự án của CNCF, có thể sử dụng độc lập không cần Docker.</p>

<h3><strong>runc</strong></h3>
<p>Container runtime cấp thấp, tuân thủ OCI runtime specification. Chịu trách nhiệm tạo và chạy containers bằng cách sử dụng Linux kernel features (namespaces, cgroups, seccomp).</p>

<pre><code>Docker Architecture:

┌──────────────────────────────────────────┐
│              Docker CLI                  │
│         (docker build, run, ...)         │
└──────────────┬───────────────────────────┘
               │ REST API
┌──────────────▼───────────────────────────┐
│           Docker Daemon (dockerd)        │
│  ┌─────────────────────────────────────┐ │
│  │  Images  │ Networks │ Volumes │ ... │ │
│  └─────────────────────────────────────┘ │
└──────────────┬───────────────────────────┘
               │ gRPC
┌──────────────▼───────────────────────────┐
│             containerd                    │
│  (Container lifecycle management)        │
└──────────────┬───────────────────────────┘
               │
┌──────────────▼───────────────────────────┐
│               runc                        │
│  (OCI runtime - creates containers)      │
└──────────────┬───────────────────────────┘
               │
┌──────────────▼───────────────────────────┐
│          Linux Kernel                     │
│  (namespaces, cgroups, seccomp)          │
└──────────────────────────────────────────┘
</code></pre>

<h2 id="4-oci-standards"><strong>4. OCI (Open Container Initiative)</strong></h2>
<p>OCI là tổ chức thiết lập các tiêu chuẩn mở cho container technology:</p>
<ul>
<li><p><strong>Runtime Specification</strong>: Định nghĩa cách chạy container (runc implement spec này)</p></li>
<li><p><strong>Image Specification</strong>: Định nghĩa format và cấu trúc container image</p></li>
<li><p><strong>Distribution Specification</strong>: Định nghĩa cách push/pull images từ registries</p></li>
</ul>
<p>Nhờ OCI, container images có thể chạy trên nhiều runtimes khác nhau (runc, crun, kata containers, gVisor) mà không cần thay đổi.</p>

<h2 id="5-docker-desktop-vs-engine"><strong>5. Docker Desktop vs Docker Engine</strong></h2>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Tiêu chí</th>
<th>Docker Desktop</th>
<th>Docker Engine</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Platform</strong></td>
<td>macOS, Windows, Linux</td>
<td>Linux only</td>
</tr>
<tr>
<td><strong>GUI</strong></td>
<td>Có (Dashboard)</td>
<td>Không (CLI only)</td>
</tr>
<tr>
<td><strong>VM</strong></td>
<td>Chạy Linux VM bên trong</td>
<td>Native trên Linux</td>
</tr>
<tr>
<td><strong>Kubernetes</strong></td>
<td>Tích hợp sẵn</td>
<td>Cần cài riêng</td>
</tr>
<tr>
<td><strong>License</strong></td>
<td>Miễn phí cho cá nhân/small business</td>
<td>Hoàn toàn miễn phí (Apache 2.0)</td>
</tr>
<tr>
<td><strong>Use case</strong></td>
<td>Development trên macOS/Windows</td>
<td>Production servers</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h2 id="6-use-cases"><strong>6. Use cases thực tế của Docker</strong></h2>
<ul>
<li><p><strong>Development Environment</strong>: Tạo môi trường phát triển nhất quán cho cả team</p></li>
<li><p><strong>Microservices</strong>: Đóng gói mỗi service thành container độc lập</p></li>
<li><p><strong>CI/CD</strong>: Build, test, deploy tự động trong container</p></li>
<li><p><strong>Cloud Migration</strong>: Di chuyển ứng dụng giữa các cloud providers dễ dàng</p></li>
<li><p><strong>Legacy App Modernization</strong>: Container hóa ứng dụng cũ để dễ quản lý</p></li>
<li><p><strong>Edge Computing</strong>: Deploy ứng dụng nhẹ trên IoT/Edge devices</p></li>
</ul>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>
<p>Trong bài này, bạn đã nắm được:</p>
<ul>
<li><p>Docker là gì và tại sao nó quan trọng</p></li>
<li><p>Sự khác biệt giữa container và virtual machine</p></li>
<li><p>Kiến trúc Docker Engine với các thành phần: daemon, CLI, containerd, runc</p></li>
<li><p>OCI standards và vai trò của chúng</p></li>
<li><p>Docker Desktop vs Docker Engine</p></li>
</ul>
<p>Ở bài tiếp theo, chúng ta sẽ cài đặt Docker và bắt đầu thực hành với các lệnh cơ bản.</p>
