---
id: 019d8a21-a109-7001-b001-d0c4e7000109
title: 'Bài 9: Docker Networking Deep Dive'
slug: bai-9-docker-networking-deep-dive
description: >-
  Tìm hiểu Docker networking drivers (bridge, host, overlay, macvlan, none),
  DNS resolution, container communication, port mapping, network isolation,
  custom networks, multi-host networking và troubleshooting network issues.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: Networking, Storage và Compose Nâng cao"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker từ Cơ bản đến Nâng cao
  slug: docker-tu-co-ban-den-nang-cao
---
<h2 id="1-docker-networking-overview"><strong>1. Docker Networking - Tổng quan</strong></h2>
<p>Docker networking cho phép containers giao tiếp với nhau, với host machine và với mạng bên ngoài. Hiểu rõ networking là chìa khóa để triển khai ứng dụng multi-container an toàn và hiệu quả.</p>

<h2 id="2-network-drivers"><strong>2. Network Drivers</strong></h2>

<h3><strong>2.1. Bridge Network (Default)</strong></h3>
<p>Bridge là driver mặc định khi tạo container. Containers trên cùng bridge network có thể giao tiếp với nhau.</p>
<pre><code class="language-bash"># Tạo custom bridge network
docker network create my-network

# Chạy containers trên cùng network
docker run -d --name web --network my-network nginx
docker run -d --name api --network my-network node:20-alpine

# Containers có thể ping nhau bằng tên
docker exec web ping api  # ✅ Works

# Liệt kê networks
docker network ls

# Xem chi tiết network
docker network inspect my-network
</code></pre>

<p><strong>Default bridge vs Custom bridge:</strong></p>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Feature</th>
<th>Default bridge</th>
<th>Custom bridge</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>DNS resolution</strong></td>
<td>Không (chỉ IP)</td>
<td>Có (container name)</td>
</tr>
<tr>
<td><strong>Isolation</strong></td>
<td>Tất cả containers chung</td>
<td>Chỉ containers cùng network</td>
</tr>
<tr>
<td><strong>Hot connect</strong></td>
<td>Không</td>
<td>Có (connect/disconnect runtime)</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3><strong>2.2. Host Network</strong></h3>
<p>Container sử dụng trực tiếp network stack của host, không có network isolation:</p>
<pre><code class="language-bash"># Container dùng host network
docker run -d --network host --name web nginx
# Nginx sẽ listen trực tiếp trên port 80 của host
# Không cần -p flag

# Use case: Khi cần maximum network performance
# Chỉ hoạt động trên Linux
</code></pre>

<h3><strong>2.3. None Network</strong></h3>
<pre><code class="language-bash"># Container không có network access
docker run -d --network none --name isolated alpine
# Container hoàn toàn cô lập, không có network interface
# Use case: Security-sensitive workloads, batch processing
</code></pre>

<h3><strong>2.4. Overlay Network</strong></h3>
<p>Cho phép containers trên nhiều Docker hosts khác nhau giao tiếp (Docker Swarm):</p>
<pre><code class="language-bash"># Tạo overlay network (requires Swarm mode)
docker network create -d overlay my-overlay

# Overlay network spans across multiple hosts
# Sử dụng VXLAN tunneling
</code></pre>

<h3><strong>2.5. Macvlan Network</strong></h3>
<pre><code class="language-bash"># Container có MAC address và IP riêng trên physical network
docker network create -d macvlan \
    --subnet=192.168.1.0/24 \
    --gateway=192.168.1.1 \
    -o parent=eth0 \
    my-macvlan

docker run -d --network my-macvlan --ip 192.168.1.100 \
    --name web nginx
# Container xuất hiện như một device trên physical network
</code></pre>

<h2 id="3-dns-resolution"><strong>3. Docker DNS Resolution</strong></h2>
<p>Docker embedded DNS server cho phép containers resolve tên của nhau:</p>
<pre><code class="language-bash"># Containers trên custom network tự động resolve names
docker network create app-net
docker run -d --name db --network app-net postgres:16
docker run -d --name api --network app-net node:20

# Trong api container, có thể kết nối db bằng hostname "db"
# postgresql://user:pass@db:5432/myapp

# Network aliases
docker run -d --name db-primary --network app-net \
    --network-alias database \
    postgres:16
# Có thể truy cập bằng "db-primary" hoặc "database"
</code></pre>

<h2 id="4-port-mapping"><strong>4. Port Mapping chi tiết</strong></h2>
<pre><code class="language-bash"># Publish port
docker run -p 8080:80 nginx           # host:container
docker run -p 127.0.0.1:8080:80 nginx # Chỉ localhost
docker run -p 8080:80/tcp nginx       # Chỉ TCP
docker run -p 8080:80/udp nginx       # Chỉ UDP
docker run -P nginx                    # Publish tất cả EXPOSE ports (random)

# Xem port mappings
docker port my-container
</code></pre>

<h2 id="5-network-management"><strong>5. Network Management</strong></h2>
<pre><code class="language-bash"># Tạo network với options
docker network create \
    --driver bridge \
    --subnet 172.28.0.0/16 \
    --ip-range 172.28.5.0/24 \
    --gateway 172.28.0.1 \
    my-network

# Connect/disconnect container từ network
docker network connect my-network my-container
docker network disconnect my-network my-container

# Connect với IP cụ thể
docker network connect --ip 172.28.5.100 my-network my-container

# Xóa network
docker network rm my-network

# Cleanup unused networks
docker network prune
</code></pre>

<h2 id="6-network-troubleshooting"><strong>6. Network Troubleshooting</strong></h2>
<pre><code class="language-bash"># Debug container với network tools
docker run -it --network my-network nicolaka/netshoot

# Các lệnh debug
ping api                    # Test connectivity
nslookup db                 # DNS resolution
traceroute api              # Trace route
curl http://api:3000/health # HTTP test
tcpdump -i eth0             # Capture packets
ss -tlnp                    # Listening ports
ip addr                     # Network interfaces
iptables -L                 # Firewall rules

# Xem network config của container
docker inspect -f '{{json .NetworkSettings.Networks}}' my-container | jq .
</code></pre>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>
<p>Trong bài này, bạn đã nắm được:</p>
<ul>
<li><p>Docker networking drivers: bridge, host, overlay, macvlan, none</p></li>
<li><p>Custom bridge networks và DNS resolution</p></li>
<li><p>Port mapping và network aliases</p></li>
<li><p>Network management và isolation</p></li>
<li><p>Troubleshooting tools và techniques</p></li>
</ul>
<p>Bài tiếp theo sẽ hướng dẫn Docker Volumes và Persistent Storage.</p>
