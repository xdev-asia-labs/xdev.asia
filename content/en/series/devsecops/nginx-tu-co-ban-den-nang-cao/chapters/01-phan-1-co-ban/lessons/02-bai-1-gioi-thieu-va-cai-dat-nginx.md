---
id: 019c9617-fc73-72b9-a544-1f2848905ead
title: 'Lesson 1: Introduction to Nginx and Installation'
slug: bai-1-gioi-thieu-va-cai-dat-nginx
description: >-
  An introductory lesson on Nginx with its event-driven architecture, installation
  guide for Ubuntu/CentOS/macOS/Windows, directory structure, and basic management
  commands such as start, stop, and reload. You will understand the difference
  between Nginx and Apache and troubleshoot common issues.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: "Part 1: Basics"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx from Basics to Advanced
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9501" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9501)"/>

  <!-- Decorations -->
  <g>
    <circle cx="862" cy="176" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="624" cy="138" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="886" cy="100" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="648" cy="62" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="910" cy="284" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="176" x2="1100" y2="256" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="206" x2="1050" y2="276" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1052.8467875173176,210.5 1052.8467875173176,241.5 1026,257 999.1532124826824,241.5 999.1532124826824,210.5 1026,195" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="149" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — Lesson 1</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 1: Introduction to Nginx and Installation</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginx from Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Basics</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-what-is-nginx"><strong>1. What is Nginx?</strong></h2><p>Nginx (pronounced "engine-x") is a powerful, high-performance open-source web server developed by Igor Sysoev in 2004. Originally created to solve the C10K problem (handling 10,000 concurrent connections), Nginx has quickly become one of the most popular web servers in the world.</p><p>Nginx is not just a web server — it can also function as:</p><ul><li><strong>Reverse proxy server</strong></li><li><strong>Load balancer</strong></li><li><strong>HTTP cache</strong></li><li><strong>Mail proxy server</strong></li><li><strong>API Gateway</strong></li></ul><h3 id="event-driven-and-non-blocking-io-architecture"><strong>Event-driven and Non-blocking I/O Architecture</strong></h3><p>Nginx's greatest strength lies in its architecture. Unlike the traditional model, Nginx uses an <strong>event-driven</strong> and <strong>non-blocking I/O</strong> (asynchronous) architecture.</p><p><strong>How it works:</strong></p><ol><li><strong>Master Process</strong>: A single master process reads and evaluates the configuration, and manages worker processes</li><li><strong>Worker Processes</strong>: Multiple worker processes handle the actual connections</li><li><strong>Event Loop</strong>: Each worker process uses an event loop to handle thousands of connections simultaneously</li></ol><p><strong>Non-blocking I/O</strong> means:</p><ul><li>When a worker process is waiting for I/O (file reads, database queries, network requests), it is not "blocked" — it can handle other requests in the meantime</li><li>A single worker process can handle thousands of connections simultaneously</li><li>Significant savings in CPU and RAM resources</li></ul><p><strong>Illustrative example:</strong></p><pre><code>Apache (Blocking):
Request 1 → Thread 1 → Wait for file read (blocked) → Complete
Request 2 → Thread 2 → Wait for file read (blocked) → Complete
Request 3 → Thread 3 → Wait for file read (blocked) → Complete
→ 3 threads needed for 3 requests

Nginx (Non-blocking):
Request 1 → Worker → Wait for I/O → Handle Request 2 → Handle Request 3 → Request 1 done
Request 2 → Same Worker
Request 3 → Same Worker
→ Only 1 worker needed for 3 requests</code></pre><hr/><h2 id="2-nginx-vs-apache"><strong>2. Nginx vs Apache Comparison</strong></h2>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Criterion</th>
<th>Nginx</th>
<th>Apache</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Architecture</strong></td>
<td>Event-driven, asynchronous</td>
<td>Process/Thread-based</td>
</tr>
<tr>
<td><strong>Connection handling</strong></td>
<td>One worker handles many connections</td>
<td>One thread/process per connection</td>
</tr>
<tr>
<td><strong>Memory</strong></td>
<td>Very low, stable</td>
<td>Grows with connection count</td>
</tr>
<tr>
<td><strong>Static content</strong></td>
<td>Extremely fast</td>
<td>Fast but slower than Nginx</td>
</tr>
<tr>
<td><strong>Dynamic content</strong></td>
<td>Requires backend integration (PHP-FPM)</td>
<td>Can handle directly (mod_php)</td>
</tr>
<tr>
<td><strong>Configuration</strong></td>
<td>Centralized, file-based</td>
<td>Distributed (.htaccess)</td>
</tr>
<tr>
<td><strong>Modules</strong></td>
<td>Must be compiled in advance</td>
<td>Dynamic module loading</td>
</tr>
<tr>
<td><strong>Rewrite rules</strong></td>
<td>Different, simpler</td>
<td>Powerful via .htaccess</td>
</tr>
<tr>
<td><strong>Best suited for</strong></td>
<td>High traffic, static content, reverse proxy</td>
<td>Shared hosting, dynamic content processing</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->
<p><strong>When to use Nginx:</strong></p><ul><li>Serving static files (HTML, CSS, JS, images)</li><li>Reverse proxy for application servers</li><li>Load balancing</li><li>High concurrency (many simultaneous connections)</li><li>High performance with limited resources</li></ul><p><strong>When to use Apache:</strong></p><ul><li>Shared hosting environments</li><li>Need .htaccess flexibility</li><li>Many dynamic modules</li><li>Legacy applications dependent on Apache-specific features</li></ul><p><strong>Current trend:</strong> Many systems use a combination: Nginx as the front-facing reverse proxy, Apache handling dynamic content behind it.</p><hr/><h2 id="3-installing-nginx"><strong>3. Installing Nginx</strong></h2><h3 id="31-install-on-ubuntu-debian"><strong>3.1. Install on Ubuntu/Debian</strong></h3><p><strong>Method 1: Install from default repository (simplest)</strong></p><pre><code class="language-bash"># Update package list
sudo apt update

# Install Nginx
sudo apt install nginx -y

# Check version
nginx -v

# Check status
sudo systemctl status nginx
</code></pre><p><strong>Method 2: Install from official Nginx repository (latest version)</strong></p><pre><code class="language-bash"># Install prerequisites
sudo apt install curl gnupg2 ca-certificates lsb-release ubuntu-keyring

# Import official nginx signing key
curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg &gt;/dev/null

# Setup repository
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list

# Update and install
sudo apt update
sudo apt install nginx -y
</code></pre><h3 id="32-install-on-centos-rhel"><strong>3.2. Install on CentOS/RHEL</strong></h3><p><strong>Method 1: From EPEL repository</strong></p><pre><code class="language-bash"># CentOS 7
sudo yum install epel-release -y
sudo yum install nginx -y

# CentOS 8 / Rocky Linux / AlmaLinux
sudo dnf install nginx -y

# Start and enable
sudo systemctl start nginx
sudo systemctl enable nginx

# Open firewall
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
</code></pre><p><strong>Method 2: From official Nginx repository</strong></p><pre><code class="language-bash"># Create repo file
sudo tee /etc/yum.repos.d/nginx.repo &lt;&lt;EOF
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/\$releasever/\$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
EOF

# Install
sudo yum install nginx -y
</code></pre><h3 id="33-install-on-macos"><strong>3.3. Install on macOS</strong></h3><p><strong>Using Homebrew:</strong></p><pre><code class="language-bash"># Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Nginx
brew install nginx

# Start Nginx
brew services start nginx

# Or run in foreground
nginx

# Check
nginx -v
</code></pre><p><strong>Paths on macOS:</strong></p><ul><li>Config: <code>/usr/local/etc/nginx/nginx.conf</code></li><li>Document root: <code>/usr/local/var/www</code></li><li>Logs: <code>/usr/local/var/log/nginx</code></li></ul><h3 id="34-install-on-windows"><strong>3.4. Install on Windows</strong></h3><p><strong>Step 1: Download</strong></p><ul><li>Visit: http://nginx.org/en/download.html</li><li>Download the Windows version (nginx-x.x.x.zip)</li></ul><p><strong>Step 2: Extract and run</strong></p><pre><code class="language-cmd"># Extract to C:\nginx

# Open Command Prompt as Administrator
cd C:\nginx

# Start Nginx
start nginx

# Or
nginx.exe
</code></pre><p><strong>Managing Nginx on Windows:</strong></p><pre><code class="language-cmd"># Check version
nginx -v

# Test configuration
nginx -t

# Stop
nginx -s stop

# Reload
nginx -s reload

# Quit gracefully
nginx -s quit
</code></pre><p><strong>Note:</strong> On Windows, Nginx is less stable than on Linux and should not be used in production.</p><hr/><h2 id="4-directory-structure-and-basic-config"><strong>4. Directory Structure and Basic Configuration Files</strong></h2><h3 id="41-directory-structure-ubuntu-debian"><strong>4.1. Directory structure on Ubuntu/Debian</strong></h3><pre><code>/etc/nginx/
├── nginx.conf                 # Main configuration file
├── mime.types                 # MIME type definitions
├── fastcgi_params            # FastCGI parameters
├── proxy_params              # Proxy parameters
├── sites-available/          # Available site configurations
│   └── default              # Default virtual host
├── sites-enabled/            # Symlinks to active sites
│   └── default -&gt; ../sites-available/default
├── conf.d/                   # Additional configurations
├── modules-available/        # Available modules
└── modules-enabled/          # Enabled modules

/var/log/nginx/
├── access.log                # Access logs
└── error.log                 # Error logs

/var/www/html/                # Default document root
└── index.nginx-debian.html

/usr/share/nginx/html/        # Alternative document root
</code></pre><h3 id="42-directory-structure-centos-rhel"><strong>4.2. Directory structure on CentOS/RHEL</strong></h3><pre><code>/etc/nginx/
├── nginx.conf                # Main configuration file
├── mime.types
├── fastcgi_params
├── conf.d/                   # Virtual host configs
│   └── default.conf
└── default.d/

/var/log/nginx/
├── access.log
└── error.log

/usr/share/nginx/html/        # Document root
└── index.html
</code></pre><h3 id="43-basic-nginx-conf"><strong>4.3. Basic nginx.conf configuration file</strong></h3><pre><code class="language-nginx"># User running Nginx
user www-data;

# Number of worker processes (usually = number of CPU cores)
worker_processes auto;

# PID file
pid /run/nginx.pid;

# Load dynamic modules
include /etc/nginx/modules-enabled/*.conf;

events {
    # Maximum connections per worker
    worker_connections 768;
    
    # Event method (epoll for Linux)
    use epoll;
}

http {
    ##
    # Basic Settings
    ##
    sendfile on;
    tcp_nopush on;
    types_hash_max_size 2048;
    
    # MIME types
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    ##
    # Logging Settings
    ##
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    ##
    # Gzip Settings
    ##
    gzip on;
    gzip_disable "msie6";

    ##
    # Virtual Host Configs
    ##
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
</code></pre><h3 id="44-sample-virtual-host-file"><strong>4.4. Sample Virtual Host file</strong></h3><pre><code class="language-nginx">server {
    # Listening port
    listen 80;
    listen [::]:80;

    # Domain name
    server_name example.com www.example.com;

    # Document root
    root /var/www/example.com;
    index index.html index.htm;

    # Access and error logs
    access_log /var/log/nginx/example.com.access.log;
    error_log /var/log/nginx/example.com.error.log;

    # Location block
    location / {
        try_files $uri $uri/ =404;
    }

    # Deny access to .htaccess
    location ~ /\.ht {
        deny all;
    }
}
</code></pre><hr/><h2 id="5-start-stop-reload-nginx"><strong>5. Starting, Stopping, and Reloading Nginx</strong></h2><h3 id="51-manage-with-systemctl"><strong>5.1. Manage with systemctl (Linux)</strong></h3><pre><code class="language-bash"># Start Nginx
sudo systemctl start nginx

# Stop Nginx
sudo systemctl stop nginx

# Restart Nginx
sudo systemctl restart nginx

# Reload configuration (no downtime)
sudo systemctl reload nginx

# Check status
sudo systemctl status nginx

# Enable auto-start on boot
sudo systemctl enable nginx

# Disable auto-start
sudo systemctl disable nginx
</code></pre><h3 id="52-manage-with-nginx-command"><strong>5.2. Manage with nginx command</strong></h3><pre><code class="language-bash"># Test configuration (very important before reloading)
sudo nginx -t

# Test and show config
sudo nginx -T

# Reload configuration
sudo nginx -s reload

# Stop gracefully (wait for current requests to finish)
sudo nginx -s quit

# Stop immediately
sudo nginx -s stop

# Reopen log files (after log rotation)
sudo nginx -s reopen

# View version and compile options
nginx -V
</code></pre><h3 id="53-difference-between-reload-restart-stop"><strong>5.3. Difference between reload, restart, and stop</strong></h3><p><strong>reload:</strong></p><ul><li>No downtime</li><li>Nginx re-reads the configuration</li><li>Old worker processes finish their current requests then shut down</li><li>New worker processes are created with the new configuration</li><li><strong>Use when:</strong> Changing configuration, adding/modifying virtual hosts</li></ul><pre><code class="language-bash">sudo nginx -s reload
# or
sudo systemctl reload nginx
</code></pre><p><strong>restart:</strong></p><ul><li>Has downtime (brief)</li><li>Fully stops then starts again</li><li>All connections are dropped</li><li><strong>Use when:</strong> Installing new modules, major changes</li></ul><pre><code class="language-bash">sudo systemctl restart nginx
</code></pre><p><strong>stop vs quit:</strong></p><pre><code class="language-bash"># Stop immediately (kill connections)
sudo nginx -s stop

# Quit gracefully (wait for requests to finish)
sudo nginx -s quit
</code></pre><h3 id="54-check-nginx-is-running"><strong>5.4. Checking that Nginx is running</strong></h3><pre><code class="language-bash"># Check process
ps aux | grep nginx

# Check listening ports
sudo netstat -tulpn | grep nginx
# or
sudo ss -tulpn | grep nginx

# Check version
nginx -v

# Test access
curl http://localhost
# or
curl -I http://localhost
</code></pre><h3 id="55-basic-troubleshooting"><strong>5.5. Basic Troubleshooting</strong></h3><p><strong>Error: nginx.conf test failed</strong></p><pre><code class="language-bash"># Check detailed error
sudo nginx -t

# View error log
sudo tail -f /var/log/nginx/error.log
</code></pre><p><strong>Error: Port 80 already in use</strong></p><pre><code class="language-bash"># See which process is using port 80
sudo lsof -i :80
# or
sudo netstat -tulpn | grep :80

# Kill the process if needed
sudo kill -9 &lt;PID&gt;
</code></pre><p><strong>Error: Permission denied</strong></p><pre><code class="language-bash"># Check user in nginx.conf
grep user /etc/nginx/nginx.conf

# Check directory permissions
ls -la /var/www/html

# Fix ownership
sudo chown -R www-data:www-data /var/www/html
</code></pre><p><strong>Cannot access via browser:</strong></p><pre><code class="language-bash"># Check firewall (Ubuntu/Debian)
sudo ufw status
sudo ufw allow 'Nginx Full'

# Check firewall (CentOS)
sudo firewall-cmd --list-all
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --reload

# Check SELinux (CentOS)
sudo getenforce
sudo setenforce 0  # Temporarily disable to test
</code></pre><hr/><h2 id="6-practice-exercises"><strong>6. Practice Exercises</strong></h2><h3 id="exercise-1-install-and-verify"><strong>Exercise 1: Install and verify</strong></h3><ol><li>Install Nginx on your operating system</li><li>Check the version and status</li><li>Visit http://localhost and view the default welcome page</li><li>Find and view the access.log file</li></ol><h3 id="exercise-2-get-familiar-with-commands"><strong>Exercise 2: Get familiar with commands</strong></h3><ol><li>Test configuration: <code>nginx -t</code></li><li>Reload Nginx</li><li>Stop and restart Nginx</li><li>Check running processes</li></ol><h3 id="exercise-3-explore-the-directory-structure"><strong>Exercise 3: Explore the directory structure</strong></h3><ol><li>Open nginx.conf and read the directives</li><li>Find the document root in the default virtual host</li><li>Create a simple HTML file in the document root</li><li>Access the file via browser</li></ol><h3 id="exercise-4-intentional-error-fixing"><strong>Exercise 4: Intentional error fixing</strong></h3><ol><li>Add an invalid syntax line to nginx.conf</li><li>Run <code>nginx -t</code> to see the error</li><li>Fix the error and test again</li></ol><hr/><h2 id="summary"><strong>Summary</strong></h2><p>In this lesson, you learned:</p><ul><li>✅ What Nginx is and its event-driven architecture</li><li>✅ Nginx vs Apache comparison</li><li>✅ Installing Nginx on multiple operating systems</li><li>✅ Directory structure and configuration files</li><li>✅ Basic Nginx management commands</li></ul><p><strong>Next lesson:</strong> We will dive deeper into Nginx configuration, exploring contexts, directives, virtual hosts, and serving static files.</p>
