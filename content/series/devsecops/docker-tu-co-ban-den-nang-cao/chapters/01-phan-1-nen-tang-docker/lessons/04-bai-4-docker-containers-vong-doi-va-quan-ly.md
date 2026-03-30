---
id: 019d8a21-a104-7001-b001-d0c4e7000104
title: 'Bài 4: Docker Containers - Vòng đời và Quản lý'
slug: bai-4-docker-containers-vong-doi-va-quan-ly
description: >-
  Hiểu vòng đời container (created, running, paused, stopped, deleted),
  các lệnh quản lý nâng cao, resource limits (CPU, memory), restart policies,
  docker inspect, docker stats và container debugging techniques.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 1: Nền tảng Docker"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker từ Cơ bản đến Nâng cao
  slug: docker-tu-co-ban-den-nang-cao
---
<h2 id="1-vong-doi-container"><strong>1. Vòng đời của Container</strong></h2>
<p>Một Docker container trải qua các trạng thái sau:</p>

<pre><code>
  docker create       docker start        docker pause
  ──────────►  Created ──────────► Running ──────────► Paused
                                     │   ◄──────────
                                     │   docker unpause
                                     │
                                     │ docker stop / docker kill
                                     ▼
                                   Stopped ──────────► Removed
                                            docker rm
</code></pre>

<ul>
<li><p><strong>Created</strong>: Container được tạo nhưng chưa start (docker create)</p></li>
<li><p><strong>Running</strong>: Container đang chạy (docker start / docker run)</p></li>
<li><p><strong>Paused</strong>: Container bị tạm dừng, processes frozen (docker pause)</p></li>
<li><p><strong>Stopped</strong>: Container đã dừng, processes terminated (docker stop)</p></li>
<li><p><strong>Removed</strong>: Container bị xóa hoàn toàn (docker rm)</p></li>
</ul>

<h2 id="2-resource-limits"><strong>2. Resource Limits (CPU, Memory, I/O)</strong></h2>
<p>Giới hạn tài nguyên container là việc cực kỳ quan trọng trong production để tránh một container chiếm hết resources của host.</p>

<h3><strong>2.1. Memory Limits</strong></h3>
<pre><code class="language-bash"># Giới hạn memory
docker run -d --name app \
    --memory=512m \
    --memory-swap=1g \
    --memory-reservation=256m \
    nginx

# Kiểm tra memory usage
docker stats app --format "{{.MemUsage}}"
</code></pre>

<h3><strong>2.2. CPU Limits</strong></h3>
<pre><code class="language-bash"># Giới hạn CPU (1.5 cores)
docker run -d --name app \
    --cpus=1.5 \
    nginx

# CPU shares (relative weight, default 1024)
docker run -d --name app \
    --cpu-shares=512 \
    nginx

# Pin container vào CPU cụ thể
docker run -d --name app \
    --cpuset-cpus="0,1" \
    nginx
</code></pre>

<h3><strong>2.3. I/O Limits</strong></h3>
<pre><code class="language-bash"># Giới hạn Block I/O weight
docker run -d --name app \
    --blkio-weight=300 \
    nginx

# Giới hạn read/write rate
docker run -d --name app \
    --device-read-bps /dev/sda:1mb \
    --device-write-bps /dev/sda:1mb \
    nginx
</code></pre>

<h2 id="3-restart-policies"><strong>3. Restart Policies</strong></h2>
<p>Restart policies xác định hành vi khi container bị crash hoặc Docker daemon restart:</p>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Policy</th>
<th>Mô tả</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>no</strong></td>
<td>Không tự restart (default)</td>
</tr>
<tr>
<td><strong>always</strong></td>
<td>Luôn restart, kể cả khi Docker daemon restart</td>
</tr>
<tr>
<td><strong>unless-stopped</strong></td>
<td>Như always, nhưng không restart nếu đã manually stopped</td>
</tr>
<tr>
<td><strong>on-failure[:max]</strong></td>
<td>Chỉ restart khi exit code ≠ 0, tối đa max lần</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<pre><code class="language-bash"># Always restart
docker run -d --restart=always --name my-app nginx

# Restart khi fail, tối đa 5 lần
docker run -d --restart=on-failure:5 --name my-app nginx

# Thay đổi restart policy cho container đang chạy
docker update --restart=always my-app
</code></pre>

<h2 id="4-docker-inspect"><strong>4. Docker Inspect - Xem chi tiết Container</strong></h2>
<pre><code class="language-bash"># Xem toàn bộ thông tin
docker inspect my-app

# Lấy IP address
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' my-app

# Xem mounts
docker inspect -f '{{json .Mounts}}' my-app | jq .

# Xem environment variables
docker inspect -f '{{json .Config.Env}}' my-app | jq .

# Xem port bindings
docker inspect -f '{{json .NetworkSettings.Ports}}' my-app | jq .

# Xem trạng thái container
docker inspect -f '{{.State.Status}}' my-app
docker inspect -f '{{.State.StartedAt}}' my-app

# Xem restart count
docker inspect -f '{{.RestartCount}}' my-app
</code></pre>

<h2 id="5-docker-stats"><strong>5. Docker Stats - Monitoring Container</strong></h2>
<pre><code class="language-bash"># Real-time stats cho tất cả containers
docker stats

# Stats cho container cụ thể
docker stats my-app

# Snapshot (không stream)
docker stats --no-stream

# Custom format
docker stats --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.NetIO}}\t{{.BlockIO}}"
</code></pre>

<h2 id="6-container-debugging"><strong>6. Container Debugging Techniques</strong></h2>

<h3><strong>6.1. Exec vào container</strong></h3>
<pre><code class="language-bash"># Mở shell bash
docker exec -it my-app bash

# Mở shell sh (nếu container dùng Alpine)
docker exec -it my-app sh

# Chạy lệnh không interactive
docker exec my-app cat /etc/hosts
docker exec my-app env
docker exec my-app ps aux
</code></pre>

<h3><strong>6.2. Attach vào container</strong></h3>
<pre><code class="language-bash"># Attach vào stdout/stderr của container
docker attach my-app
# Ctrl+P, Ctrl+Q để detach mà không stop container
</code></pre>

<h3><strong>6.3. Copy files</strong></h3>
<pre><code class="language-bash"># Copy từ host vào container
docker cp config.yaml my-app:/etc/app/config.yaml

# Copy từ container ra host
docker cp my-app:/var/log/app.log ./app.log

# Copy cả thư mục
docker cp my-app:/etc/nginx/ ./nginx-config/
</code></pre>

<h3><strong>6.4. Diff - Xem thay đổi filesystem</strong></h3>
<pre><code class="language-bash"># Xem các files đã thay đổi trong container
docker diff my-app
# A = Added, C = Changed, D = Deleted
</code></pre>

<h3><strong>6.5. Logs debugging</strong></h3>
<pre><code class="language-bash"># Xem logs với timestamps
docker logs -t my-app

# Follow logs real-time
docker logs -f my-app

# Logs từ thời điểm cụ thể
docker logs --since "2026-03-30T10:00:00" my-app
docker logs --until "2026-03-30T12:00:00" my-app
</code></pre>

<h2 id="7-container-naming-labels"><strong>7. Container Naming và Labels</strong></h2>
<pre><code class="language-bash"># Đặt tên container
docker run -d --name production-web nginx

# Thêm labels
docker run -d \
    --name my-app \
    --label environment=production \
    --label team=backend \
    --label version=1.0.0 \
    nginx

# Filter containers theo labels
docker ps --filter "label=environment=production"
docker ps --filter "label=team=backend"
</code></pre>

<h2 id="8-wait-va-events"><strong>8. Docker Wait và Events</strong></h2>
<pre><code class="language-bash"># Đợi container kết thúc và lấy exit code
docker wait my-app

# Xem Docker events real-time
docker events
docker events --filter "container=my-app"
docker events --filter "event=start"
docker events --since "2026-03-30T10:00:00"
</code></pre>

<h2 id="9-tong-ket"><strong>9. Tổng kết</strong></h2>
<p>Trong bài này, bạn đã nắm được:</p>
<ul>
<li><p>Vòng đời container và các trạng thái</p></li>
<li><p>Resource limits cho CPU, memory, I/O</p></li>
<li><p>Restart policies và khi nào sử dụng</p></li>
<li><p>Docker inspect để xem chi tiết container</p></li>
<li><p>Docker stats để monitoring real-time</p></li>
<li><p>Các kỹ thuật debugging: exec, attach, cp, diff, logs</p></li>
<li><p>Container naming conventions và labels</p></li>
</ul>
<p>Bài tiếp theo sẽ đi sâu vào Dockerfile - cách viết Dockerfile chuyên nghiệp từ A đến Z.</p>
