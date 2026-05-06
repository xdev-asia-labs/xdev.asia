---
id: 019c9617-fc87-70fa-ad88-7f121c141ef0
title: 'Lesson 7: SSL/TLS and HTTPS in Nginx'
slug: bai-7-ssl-tls-va-https-trong-nginx
description: >-
  A lesson on SSL/TLS and HTTPS in Nginx — configuring SSL certificates with
  Let's Encrypt, HTTP to HTTPS redirect, SSL protocols and cipher optimization,
  HSTS, OCSP Stapling, and HTTP/2. Guide to securing connections, optimizing
  performance, and achieving an A+ rating on SSL Labs.
duration_minutes: 215
is_free: true
video_url: null
sort_order: 7
section_title: "Part 3: Security & Performance"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx from Basics to Advanced
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7761" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7761)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1075" cy="275" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="1050" cy="270" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1025" cy="265" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="1000" cy="260" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="975" cy="255" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="225" x2="1100" y2="305" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="255" x2="1050" y2="325" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1009.6410161513776,155 1009.6410161513776,195 975,215 940.3589838486224,195 940.3589838486224,155 975,135" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — Lesson 7</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 7: SSL/TLS and HTTPS in Nginx</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginx from Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Security &amp; Performance</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-configuring-ssl-certificate-lets-encrypt"><strong>1. Configuring SSL Certificate (Let's Encrypt)</strong></h2><h3 id="11-introduction-to-ssltls"><strong>1.1. Introduction to SSL/TLS</strong></h3><p><strong>SSL (Secure Sockets Layer) / TLS (Transport Layer Security)</strong> are protocols for encrypting communication between client and server.</p><p><strong>Why HTTPS is needed:</strong></p><ul><li>Data security (encryption)</li><li>Server authentication</li><li>Data integrity</li><li>SEO benefits (Google ranking)</li><li>Browser trust (no warning)</li><li>Required for HTTP/2</li><li>Required for PWA (Progressive Web Apps)</li></ul><p><strong>Certificate Authority (CA):</strong></p><ul><li>Let's Encrypt - Free, automated</li><li>DigiCert, Comodo, GlobalSign - Commercial</li><li>Self-signed - Development only</li></ul><h3 id="12-install-certbot-lets-encrypt-client"><strong>1.2. Install Certbot (Let's Encrypt Client)</strong></h3><p><strong>Ubuntu/Debian:</strong></p><pre><code class="language-bash"># Update package list
sudo apt update

# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Verify installation
certbot --version
</code></pre><p><strong>CentOS/RHEL:</strong></p><pre><code class="language-bash"># Install EPEL repository
sudo yum install epel-release -y

# Install Certbot
sudo yum install certbot python3-certbot-nginx -y

# Or for CentOS 8+
sudo dnf install certbot python3-certbot-nginx -y
</code></pre><p><strong>macOS:</strong></p><pre><code class="language-bash"># Using Homebrew
brew install certbot

# Nginx plugin
brew install certbot-nginx
</code></pre><h3 id="13-obtain-ssl-certificate-automatic-method"><strong>1.3. Obtain SSL Certificate — Automatic Method</strong></h3><p><strong>Method 1: Certbot automatic configuration</strong></p><pre><code class="language-bash"># Certbot will automatically configure Nginx
sudo certbot --nginx -d example.com -d www.example.com

# Follow prompts:
# - Enter email address
# - Agree to terms
# - Choose: redirect HTTP to HTTPS (recommended)
</code></pre><p><strong>Certbot will:</strong></p><ol><li>Verify domain ownership</li><li>Obtain certificate</li><li>Automatically configure Nginx</li><li>Setup auto-renewal</li></ol><p><strong>Check certificate:</strong></p><pre><code class="language-bash"># List certificates
sudo certbot certificates

# Output:
# Certificate Name: example.com
#   Domains: example.com www.example.com
#   Expiry Date: 2024-03-01 10:30:00+00:00 (VALID: 89 days)
#   Certificate Path: /etc/letsencrypt/live/example.com/fullchain.pem
#   Private Key Path: /etc/letsencrypt/live/example.com/privkey.pem
</code></pre><h3 id="14-obtain-ssl-certificate-manual-method"><strong>1.4. Obtain SSL Certificate — Manual Method</strong></h3><p><strong>Method 2: Certbot certonly (manual configuration)</strong></p><pre><code class="language-bash"># Obtain certificate without auto-config
sudo certbot certonly --nginx -d example.com -d www.example.com

# Or using webroot
sudo certbot certonly --webroot -w /var/www/html -d example.com -d www.example.com

# Or using standalone (stops Nginx temporarily)
sudo systemctl stop nginx
sudo certbot certonly --standalone -d example.com -d www.example.com
sudo systemctl start nginx
</code></pre><p><strong>Manual Nginx configuration:</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com www.example.com;
    
    # ACME challenge location
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }
    
    # Redirect to HTTPS
    location / {
        return 301 https://$server_name$request_uri;
    }
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com www.example.com;
    
    # SSL certificate files
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # SSL configuration (more to be added)
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
}
</code></pre><h3 id="15-certificate-renewal"><strong>1.5. Certificate Renewal</strong></h3><p>Let's Encrypt certificates expire after 90 days. Certbot sets up automatic renewal.</p><p><strong>Test renewal:</strong></p><pre><code class="language-bash"># Dry run (test without actually renewing)
sudo certbot renew --dry-run
</code></pre><p><strong>Manual renewal:</strong></p><pre><code class="language-bash"># Renew all certificates
sudo certbot renew

# Renew specific certificate
sudo certbot renew --cert-name example.com

# Renew and reload Nginx
sudo certbot renew --deploy-hook "systemctl reload nginx"
</code></pre><p><strong>Automatic renewal (systemd timer):</strong></p><pre><code class="language-bash"># Check if timer is active
sudo systemctl status certbot.timer

# Enable timer
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer

# List timers
sudo systemctl list-timers | grep certbot
</code></pre><p><strong>Renewal hook script:</strong></p><pre><code class="language-bash"># Create renewal hook
sudo nano /etc/letsencrypt/renewal-hooks/deploy/reload-nginx.sh

#!/bin/bash
# Reload Nginx after certificate renewal
systemctl reload nginx

# Make executable
sudo chmod +x /etc/letsencrypt/renewal-hooks/deploy/reload-nginx.sh
</code></pre><h3 id="16-wildcard-certificates"><strong>1.6. Wildcard Certificates</strong></h3><pre><code class="language-bash">sudo certbot certonly --manual --preferred-challenges dns \
  -d example.com -d *.example.com

# Follow instructions to add DNS TXT record
# _acme-challenge.example.com TXT "generated-token"

# Verify DNS propagation
dig _acme-challenge.example.com TXT

# Continue with certbot
</code></pre><h3 id="17-multiple-domains"><strong>1.7. Multiple Domains</strong></h3><pre><code class="language-bash"># Multiple domains on one certificate
sudo certbot --nginx \
  -d example.com -d www.example.com \
  -d blog.example.com -d shop.example.com

# Or separate certificates
sudo certbot --nginx -d example.com -d www.example.com
sudo certbot --nginx -d blog.example.com
sudo certbot --nginx -d shop.example.com
</code></pre><hr><h2 id="2-http-to-https-redirect"><strong>2. HTTP to HTTPS Redirect</strong></h2><h3 id="21-simple-redirect"><strong>2.1. Simple Redirect</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;
    
    # Redirect all HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com www.example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # Your site configuration
    root /var/www/html;
    index index.html;
}
</code></pre><h3 id="22-redirect-with-acme-challenge"><strong>2.2. Redirect with ACME Challenge</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;
    
    # Allow ACME challenge
    location /.well-known/acme-challenge/ {
        root /var/www/html;
        allow all;
    }
    
    # Redirect everything else to HTTPS
    location / {
        return 301 https://$server_name$request_uri;
    }
}
</code></pre><h3 id="23-redirect-www-to-non-www-https"><strong>2.3. Redirect www to non-www (HTTPS)</strong></h3><pre><code class="language-nginx"># Redirect www to non-www
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    return 301 https://example.com$request_uri;
}

# Main site
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # Site config...
}
</code></pre><h3 id="24-complete-redirect-configuration"><strong>2.4. Complete Redirect Configuration</strong></h3><pre><code class="language-nginx"># HTTP - redirect to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;
    
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }
    
    location / {
        return 301 https://example.com$request_uri;
    }
}

# HTTPS www - redirect to non-www
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    return 301 https://example.com$request_uri;
}

# Main HTTPS site
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com;
    
    # SSL certificates
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
    
    # Site content
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
}
</code></pre><hr><h2 id="3-ssl-protocols-and-ciphers"><strong>3. SSL Protocols and Ciphers</strong></h2><h3 id="31-ssltls-protocols"><strong>3.1. SSL/TLS Protocols</strong></h3><p><strong>Available protocols:</strong></p><ul><li>SSLv2 - Deprecated, insecure ❌</li><li>SSLv3 - Deprecated, insecure ❌</li><li>TLSv1.0 - Deprecated, should avoid ⚠️</li><li>TLSv1.1 - Deprecated, should avoid ⚠️</li><li>TLSv1.2 - Secure, widely supported ✅</li><li>TLSv1.3 - Most secure, modern ✅</li></ul><p><strong>Recommended configuration:</strong></p><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # Use only TLS 1.2 and 1.3
    ssl_protocols TLSv1.2 TLSv1.3;
    
    # Prefer server ciphers (for TLS 1.2)
    ssl_prefer_server_ciphers off;  # TLS 1.3 handles this automatically
}
</code></pre><p><strong>Backward compatibility (if needed):</strong></p><pre><code class="language-nginx"># Support older clients (not recommended for production)
ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
</code></pre><p><strong>Modern configuration (TLS 1.3 only):</strong></p><pre><code class="language-nginx"># Most secure, but may break older clients
ssl_protocols TLSv1.3;
</code></pre><h3 id="32-ssl-ciphers"><strong>3.2. SSL Ciphers</strong></h3><p>Ciphers determine the encryption algorithms used.</p><p><strong>Mozilla Modern Configuration (Recommended):</strong></p><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # Protocols
    ssl_protocols TLSv1.3;
    ssl_prefer_server_ciphers off;
    
    # Ciphers (TLS 1.3 handles automatically)
}
</code></pre><p><strong>Mozilla Intermediate Configuration (Balanced):</strong></p><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # Protocols
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    
    # Ciphers for TLS 1.2
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
}
</code></pre><p><strong>Complete SSL Configuration:</strong></p><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com;
    
    # Certificate files
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # Protocols
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    
    # Ciphers
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    
    # Session cache
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    ssl_session_tickets off;
    
    # DH parameters
    ssl_dhparam /etc/nginx/dhparam.pem;
    
    # OCSP Stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;
}
</code></pre><h3 id="33-generate-dh-parameters"><strong>3.3. Generate DH Parameters</strong></h3><p>Diffie-Hellman parameters strengthen security.</p><pre><code class="language-bash"># Generate 2048-bit DH parameters (takes a few minutes)
sudo openssl dhparam -out /etc/nginx/dhparam.pem 2048

# Or 4096-bit (takes longer, more secure)
sudo openssl dhparam -out /etc/nginx/dhparam.pem 4096

# Set permissions
sudo chmod 644 /etc/nginx/dhparam.pem
</code></pre><p><strong>Add to Nginx config:</strong></p><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    
    ssl_dhparam /etc/nginx/dhparam.pem;
    
    # Other SSL config...
}
</code></pre><h3 id="34-ssl-session-configuration"><strong>3.4. SSL Session Configuration</strong></h3><pre><code class="language-nginx">http {
    # SSL session cache (shared across workers)
    ssl_session_cache shared:SSL:10m;  # 10MB = ~40,000 sessions
    
    # Session timeout
    ssl_session_timeout 10m;           # 10 minutes
    
    # Disable session tickets (for perfect forward secrecy)
    ssl_session_tickets off;
    
    server {
        listen 443 ssl http2;
        # Inherit from http context
    }
}
</code></pre><p><strong>Session cache sizes:</strong></p><pre><code>1MB = ~4,000 sessions
10MB = ~40,000 sessions
100MB = ~400,000 sessions
</code></pre><hr><h2 id="4-hsts-http-strict-transport-security"><strong>4. HSTS (HTTP Strict Transport Security)</strong></h2><p>HSTS instructs browsers to always use HTTPS.</p><h3 id="41-basic-hsts"><strong>4.1. Basic HSTS</strong></h3><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    # HSTS header
    add_header Strict-Transport-Security "max-age=31536000" always;
    
    # Other config...
}
</code></pre><p><strong>max-age values:</strong></p><pre><code class="language-nginx"># Testing - 1 hour
add_header Strict-Transport-Security "max-age=3600" always;

# Short term - 1 week
add_header Strict-Transport-Security "max-age=604800" always;

# Recommended - 1 year
add_header Strict-Transport-Security "max-age=31536000" always;

# Maximum - 2 years
add_header Strict-Transport-Security "max-age=63072000" always;
</code></pre><h3 id="42-hsts-with-includesubdomains"><strong>4.2. HSTS with includeSubDomains</strong></h3><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    # Apply HSTS to all subdomains
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
}
</code></pre><p><strong>WARNING:</strong> <code>includeSubDomains</code> affects ALL subdomains. Make sure all subdomains support HTTPS.</p><h3 id="43-hsts-preload"><strong>4.3. HSTS Preload</strong></h3><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    # HSTS with preload directive
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
}
</code></pre><p><strong>Submit to HSTS Preload List:</strong></p><ol><li>Visit https://hstspreload.org/</li><li>Enter your domain</li><li>Check requirements:<ul><li>Serve valid certificate</li><li>Redirect HTTP to HTTPS</li><li>Serve HSTS header on base domain</li><li>max-age &gt;= 31536000 (1 year)</li><li>includeSubDomains directive</li><li>preload directive</li></ul></li></ol><h3 id="44-complete-hsts-configuration"><strong>4.4. Complete HSTS Configuration</strong></h3><pre><code class="language-nginx"># HTTP server - redirect to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;
    
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }
    
    location / {
        return 301 https://example.com$request_uri;
    }
}

# HTTPS server
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com www.example.com;
    
    # SSL config
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    
    # HSTS header
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    
    # Content
    root /var/www/html;
    index index.html;
}
</code></pre><hr><h2 id="5-ocsp-stapling"><strong>5. OCSP Stapling</strong></h2><p>OCSP Stapling improves SSL/TLS handshake performance and privacy.</p><h3 id="51-what-is-ocsp-stapling"><strong>5.1. What is OCSP Stapling?</strong></h3><p><strong>Without OCSP Stapling:</strong></p><pre><code>Client → Server: SSL handshake
Client → CA: Is certificate valid?
CA → Client: Yes, valid
Client → Server: Continue
</code></pre><p><strong>With OCSP Stapling:</strong></p><pre><code>Server → CA: Is my certificate valid? (cached)
Client → Server: SSL handshake
Server → Client: Here's my certificate + OCSP response
Client: Certificate valid! (no extra request to CA)
</code></pre><h3 id="52-enable-ocsp-stapling"><strong>5.2. Enable OCSP Stapling</strong></h3><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # Enable OCSP Stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    
    # Trusted certificate for verification
    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
    
    # DNS resolvers for OCSP
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;
}
</code></pre><h3 id="53-verify-ocsp-stapling"><strong>5.3. Verify OCSP Stapling</strong></h3><pre><code class="language-bash"># Test OCSP stapling
echo QUIT | openssl s_client -connect example.com:443 -status 2> /dev/null | grep -A 17 'OCSP response:'

# Expected output:
# OCSP response:
# ======================================
# OCSP Response Status: successful (0x0)
# Response Type: Basic OCSP Response
# ...
# Cert Status: good
</code></pre><p><strong>Online test:</strong></p><pre><code class="language-bash"># Using SSL Labs
# Visit: https://www.ssllabs.com/ssltest/analyze.html?d=example.com
</code></pre><h3 id="54-complete-ocsp-configuration"><strong>5.4. Complete OCSP Configuration</strong></h3><pre><code class="language-nginx">http {
    # Global resolver (can be overridden per server)
    resolver 8.8.8.8 8.8.4.4 1.1.1.1 valid=300s;
    resolver_timeout 5s;
    
    server {
        listen 443 ssl http2;
        listen [::]:443 ssl http2;
        server_name example.com;
        
        # SSL certificates
        ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
        ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
        
        # SSL protocols
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_prefer_server_ciphers off;
        ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
        
        # Session settings
        ssl_session_cache shared:SSL:10m;
        ssl_session_timeout 10m;
        ssl_session_tickets off;
        
        # OCSP Stapling
        ssl_stapling on;
        ssl_stapling_verify on;
        
        # HSTS
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
        
        # Other security headers
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header X-XSS-Protection "1; mode=block" always;
        
        root /var/www/html;
        index index.html;
    }
}
</code></pre><hr><h2 id="6-http2-configuration"><strong>6. HTTP/2 Configuration</strong></h2><p>HTTP/2 significantly improves performance through multiplexing, server push, and header compression.</p><h3 id="61-enable-http2"><strong>6.1. Enable HTTP/2</strong></h3><pre><code class="language-nginx">server {
    # Enable HTTP/2 with http2 parameter
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # HTTP/2 requires TLS 1.2+
    ssl_protocols TLSv1.2 TLSv1.3;
    
    root /var/www/html;
}
</code></pre><p><strong>Check if HTTP/2 is enabled:</strong></p><pre><code class="language-bash"># Test with curl
curl -I --http2 https://example.com

# Look for:
# HTTP/2 200

# Or check browser DevTools
# Network tab → Protocol column should show "h2"
</code></pre><h3 id="62-http2-push"><strong>6.2. HTTP/2 Push</strong></h3><p>Server Push allows the server to send resources before the client requests them.</p><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    root /var/www/html;
    
    location / {
        # Push CSS and JS when HTML is requested
        http2_push /css/style.css;
        http2_push /js/app.js;
        
        try_files $uri $uri/ =404;
    }
    
    location = /index.html {
        # Push specific resources for homepage
        http2_push /css/style.css;
        http2_push /css/bootstrap.css;
        http2_push /js/app.js;
        http2_push /js/jquery.js;
        http2_push /images/logo.png;
    }
}
</code></pre><p><strong>Conditional push:</strong></p><pre><code class="language-nginx">map $http_cookie $css_push {
    default "/css/style.css";
    ~*visited "";  # Don't push if user visited before
}

server {
    listen 443 ssl http2;
    
    location / {
        http2_push $css_push;
    }
}
</code></pre><p><strong>WARNING:</strong> HTTP/2 Push can reduce performance if used incorrectly. Only push critical resources.</p><h3 id="63-http2-parameters"><strong>6.3. HTTP/2 Parameters</strong></h3><pre><code class="language-nginx">http {
    # HTTP/2 settings
    http2_max_field_size 16k;        # Max header field size
    http2_max_header_size 32k;       # Max header size
    http2_max_requests 1000;          # Max requests per connection
    http2_recv_timeout 30s;           # Timeout for client
    
    server {
        listen 443 ssl http2;
        server_name example.com;
        
        # Server inherits http2 settings
    }
}
</code></pre><h3 id="64-complete-http2-configuration"><strong>6.4. Complete HTTP/2 Configuration</strong></h3><pre><code class="language-nginx">http {
    # HTTP/2 parameters
    http2_max_field_size 16k;
    http2_max_header_size 32k;
    http2_max_requests 1000;
    
    server {
        listen 443 ssl http2;
        listen [::]:443 ssl http2;
        server_name example.com;
        
        # SSL configuration
        ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_prefer_server_ciphers off;
        ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
        
        # Session cache
        ssl_session_cache shared:SSL:10m;
        ssl_session_timeout 10m;
        ssl_session_tickets off;
        
        # OCSP Stapling
        ssl_stapling on;
        ssl_stapling_verify on;
        ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
        resolver 8.8.8.8 8.8.4.4 valid=300s;
        resolver_timeout 5s;
        
        # Security headers
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header X-XSS-Protection "1; mode=block" always;
        
        root /var/www/html;
        index index.html;
        
        location / {
            # HTTP/2 Server Push for critical resources
            http2_push /css/style.css;
            http2_push /js/app.js;
            
            try_files $uri $uri/ =404;
        }
        
        # Cache static assets
        location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
            access_log off;
        }
    }
}
</code></pre><hr><h2 id="7-complete-production-ready-ssl-configuration"><strong>7. Complete Production-Ready SSL Configuration</strong></h2><h3 id="71-optimal-ssltls-setup"><strong>7.1. Optimal SSL/TLS Setup</strong></h3><pre><code class="language-nginx"># /etc/nginx/nginx.conf

user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    
    # Logging
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';
    
    access_log /var/log/nginx/access.log main;
    
    # Basic settings
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    client_max_body_size 20M;
    
    # Hide Nginx version
    server_tokens off;
    
    # SSL session cache
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    ssl_session_tickets off;
    
    # OCSP settings
    resolver 8.8.8.8 8.8.4.4 1.1.1.1 valid=300s;
    resolver_timeout 5s;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript 
               application/json application/javascript application/xml+rss 
               application/rss+xml font/truetype font/opentype 
               application/vnd.ms-fontobject image/svg+xml;
    
    # HTTP/2 settings
    http2_max_field_size 16k;
    http2_max_header_size 32k;
    
    # Include server configs
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
</code></pre><h3 id="72-site-configuration"><strong>7.2. Site Configuration</strong></h3><pre><code class="language-nginx"># /etc/nginx/sites-available/example.com

# HTTP - redirect to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;
    
    # ACME challenge
    location /.well-known/acme-challenge/ {
        root /var/www/html;
        allow all;
    }
    
    # Redirect to HTTPS
    location / {
        return 301 https://example.com$request_uri;
    }
}

# HTTPS www - redirect to non-www
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.example.com;
    
    # SSL certificates
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
    
    # Redirect to non-www
    return 301 https://example.com$request_uri;
}

# Main HTTPS server
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com;
    
    # Document root
    root /var/www/example.com/public;
    index index.html index.htm;
    
    # Logging
    access_log /var/log/nginx/example.com.access.log;
    error_log /var/log/nginx/example.com.error.log;
    
    # SSL certificates
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
    
    # SSL protocols and ciphers
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    
    # DH parameters
    ssl_dhparam /etc/nginx/dhparam.pem;
    
    # OCSP Stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:;" always;
    
    # Main location
    location / {
        try_files $uri $uri/ =404;
        
        # HTTP/2 Push
        http2_push /css/style.css;
        http2_push /js/app.js;
    }
    
    # Static assets
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
    
    location ~* \.(css|js)$ {
        expires 1M;
        add_header Cache-Control "public";
        access_log off;
    }
    
    location ~* \.(woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public";
        add_header Access-Control-Allow-Origin "*";
        access_log off;
    }
    
    # Deny access to hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
    
    # Error pages
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
}
</code></pre><h3 id="73-enable-site"><strong>7.3. Enable Site</strong></h3><pre><code class="language-bash"># Create symlink
sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
</code></pre><hr><h2 id="8-testing-and-optimization"><strong>8. Testing and Optimization</strong></h2><h3 id="81-ssl-labs-test"><strong>8.1. SSL Labs Test</strong></h3><pre><code class="language-bash"># Visit SSL Labs
# https://www.ssllabs.com/ssltest/analyze.html?d=example.com

# Target: A+ rating
</code></pre><p><strong>Checklist for A+ rating:</strong></p><ul><li>✅ TLS 1.2 and 1.3 enabled</li><li>✅ Strong ciphers</li><li>✅ Certificate valid and trusted</li><li>✅ HSTS enabled (with preload)</li><li>✅ OCSP Stapling working</li><li>✅ No SSL/TLS vulnerabilities</li></ul><h3 id="82-test-commands"><strong>8.2. Test Commands</strong></h3><pre><code class="language-bash"># Test SSL connection
openssl s_client -connect example.com:443 -tls1_2

# Test TLS 1.3
openssl s_client -connect example.com:443 -tls1_3

# Test certificate
echo | openssl s_client -connect example.com:443 2>/dev/null | openssl x509 -noout -dates

# Test OCSP stapling
echo QUIT | openssl s_client -connect example.com:443 -status 2> /dev/null | grep -A 17 'OCSP response:'

# Test HTTP/2
curl -I --http2 https://example.com

# Test with specific cipher
openssl s_client -connect example.com:443 -cipher ECDHE-RSA-AES128-GCM-SHA256
</code></pre><h3 id="83-performance-testing"><strong>8.3. Performance Testing</strong></h3><pre><code class="language-bash"># Test SSL handshake time
time openssl s_client -connect example.com:443 </dev/null

# Benchmark with ab
ab -n 1000 -c 10 https://example.com/

# Test with h2load (HTTP/2)
h2load -n 1000 -c 10 https://example.com/
</code></pre><h3 id="84-security-headers-check"><strong>8.4. Security Headers Check</strong></h3><pre><code class="language-bash"># Check all security headers
curl -I https://example.com

# Should include:
# Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
# X-Frame-Options: SAMEORIGIN
# X-Content-Type-Options: nosniff
# X-XSS-Protection: 1; mode=block
# Referrer-Policy: no-referrer-when-downgrade
</code></pre><p><strong>Online tools:</strong></p><ul><li>https://securityheaders.com</li><li>https://observatory.mozilla.org</li></ul><hr><h2 id="9-troubleshooting"><strong>9. Troubleshooting</strong></h2><h3 id="91-certificate-errors"><strong>9.1. Certificate Errors</strong></h3><p><strong>Problem: Certificate not trusted</strong></p><pre><code class="language-bash"># Check certificate chain
openssl s_client -connect example.com:443 -showcerts

# Verify certificate files
sudo ls -la /etc/letsencrypt/live/example.com/

# Should have:
# cert.pem (certificate)
# chain.pem (intermediate certificates)
# fullchain.pem (cert + chain)
# privkey.pem (private key)
</code></pre><p><strong>Fix:</strong></p><pre><code class="language-nginx"># Use fullchain.pem, not cert.pem
ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
</code></pre><h3 id="92-mixed-content-warnings"><strong>9.2. Mixed Content Warnings</strong></h3><p><strong>Problem: Site loads but shows "Not Secure"</strong></p><p><strong>Cause:</strong> Page served over HTTPS but loads HTTP resources</p><p><strong>Check:</strong></p><pre><code class="language-bash"># View source and look for http:// (not https://)
curl https://example.com | grep 'http://'
</code></pre><p><strong>Fix:</strong></p><pre><code class="language-html">&lt;!-- Bad --&gt;
&lt;script src="http://example.com/js/app.js"&gt;&lt;/script&gt;
&lt;img src="http://example.com/image.jpg"&gt;

&lt;!-- Good - protocol-relative --&gt;
&lt;script src="//example.com/js/app.js"&gt;&lt;/script&gt;
&lt;img src="//example.com/image.jpg"&gt;

&lt;!-- Better - HTTPS --&gt;
&lt;script src="https://example.com/js/app.js"&gt;&lt;/script&gt;
&lt;img src="https://example.com/image.jpg"&gt;
</code></pre><h3 id="93-ocsp-stapling-not-working"><strong>9.3. OCSP Stapling Not Working</strong></h3><p><strong>Problem:</strong> OCSP response not included</p><pre><code class="language-bash"># Test OCSP
echo QUIT | openssl s_client -connect example.com:443 -status 2> /dev/null | grep 'OCSP response:'

# If no output, check:
</code></pre><p><strong>Fix:</strong></p><pre><code class="language-nginx">server {
    # Ensure these are set
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
    
    # Add resolvers
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;
}
</code></pre><pre><code class="language-bash"># Test manually
sudo nginx -t
sudo systemctl reload nginx

# Wait a few seconds then test again
</code></pre><h3 id="94-http2-not-working"><strong>9.4. HTTP/2 Not Working</strong></h3><p><strong>Problem:</strong> Connection uses HTTP/1.1 instead of HTTP/2</p><p><strong>Check:</strong></p><pre><code class="language-bash"># Test HTTP/2
curl -I --http2 https://example.com

# Should show: HTTP/2 200
# If shows: HTTP/1.1 200
</code></pre><p><strong>Fix:</strong></p><pre><code class="language-nginx"># Ensure http2 parameter present
listen 443 ssl http2;  # Not just: listen 443 ssl;

# Restart Nginx
sudo systemctl restart nginx
</code></pre><h3 id="95-certificate-renewal-fails"><strong>9.5. Certificate Renewal Fails</strong></h3><p><strong>Problem:</strong> Certbot renewal fails</p><pre><code class="language-bash"># Check renewal
sudo certbot renew --dry-run
</code></pre><p><strong>Fix 1: Port 80 not accessible</strong></p><pre><code class="language-bash"># Ensure port 80 open
sudo ufw allow 80
sudo firewall-cmd --permanent --add-service=http
</code></pre><p><strong>Fix 2: Webroot not accessible</strong></p><pre><code class="language-nginx">server {
    listen 80;
    
    # Ensure this location exists
    location /.well-known/acme-challenge/ {
        root /var/www/html;  # Verify path is correct
        allow all;
    }
}
</code></pre><p><strong>Fix 3: Manual renewal</strong></p><pre><code class="language-bash"># Stop Nginx
sudo systemctl stop nginx

# Use standalone
sudo certbot certonly --standalone -d example.com

# Start Nginx
sudo systemctl start nginx
</code></pre><hr><h2 id="10-practice-exercises"><strong>10. Practice Exercises</strong></h2><h3 id="exercise-1-setup-https-with-lets-encrypt"><strong>Exercise 1: Setup HTTPS with Let's Encrypt</strong></h3><ol><li>Install Certbot</li><li>Obtain certificate for domain</li><li>Configure Nginx with HTTPS</li><li>Test certificate</li></ol><h3 id="exercise-2-implement-http-to-https-redirect"><strong>Exercise 2: Implement HTTP to HTTPS Redirect</strong></h3><ol><li>Set up HTTP server (port 80)</li><li>Set up HTTPS server (port 443)</li><li>Configure redirect from HTTP → HTTPS</li><li>Test redirect</li></ol><h3 id="exercise-3-enable-hsts"><strong>Exercise 3: Enable HSTS</strong></h3><ol><li>Add HSTS header</li><li>Test with browser</li><li>Check HSTS preload requirements</li><li>(Optional) Submit to HSTS preload list</li></ol><h3 id="exercise-4-configure-ocsp-stapling"><strong>Exercise 4: Configure OCSP Stapling</strong></h3><ol><li>Enable OCSP stapling</li><li>Configure resolvers</li><li>Test OCSP response</li><li>Verify with SSL Labs</li></ol><h3 id="exercise-5-enable-http2"><strong>Exercise 5: Enable HTTP/2</strong></h3><ol><li>Add http2 parameter to listen directive</li><li>Test HTTP/2 connection</li><li>Implement HTTP/2 push</li><li>Benchmark HTTP/1.1 vs HTTP/2</li></ol><h3 id="exercise-6-achieve-a-plus-rating"><strong>Exercise 6: Achieve A+ Rating</strong></h3><ol><li>Configure optimal SSL/TLS settings</li><li>Enable all security features</li><li>Test with SSL Labs</li><li>Fix any issues to achieve A+ rating</li></ol><hr><h2 id="11-best-practices"><strong>11. Best Practices</strong></h2><h3 id="111-security"><strong>11.1. Security</strong></h3><pre><code class="language-nginx"># Use strong protocols
ssl_protocols TLSv1.2 TLSv1.3;

# Strong ciphers
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;

# Disable session tickets
ssl_session_tickets off;

# Enable OCSP Stapling
ssl_stapling on;
ssl_stapling_verify on;

# HSTS
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
</code></pre><h3 id="112-performance"><strong>11.2. Performance</strong></h3><pre><code class="language-nginx"># Session cache
ssl_session_cache shared:SSL:10m;
ssl_session_timeout 10m;

# HTTP/2
listen 443 ssl http2;

# Compression
gzip on;
gzip_types text/plain text/css application/json application/javascript;

# Cache static assets
location ~* \.(jpg|png|css|js)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
</code></pre><h3 id="113-maintenance"><strong>11.3. Maintenance</strong></h3><pre><code class="language-bash"># Regular certificate renewal
sudo certbot renew

# Check certificate expiry
sudo certbot certificates

# Monitor logs
sudo tail -f /var/log/letsencrypt/letsencrypt.log

# Backup certificates
sudo tar -czf letsencrypt-backup.tar.gz /etc/letsencrypt/
</code></pre><h3 id="114-monitoring"><strong>11.4. Monitoring</strong></h3><pre><code class="language-bash"># Monitor SSL Labs rating
# Set up automated checks

# Monitor certificate expiry
# Alert 30 days before expiry

# Monitor OCSP stapling
# Check periodically

# Check security headers
# Automated testing
</code></pre><hr><h2 id="summary"><strong>Summary</strong></h2><p>In this lesson, you learned:</p><ul><li>✅ Setting up SSL certificates with Let's Encrypt</li><li>✅ HTTP to HTTPS redirects</li><li>✅ SSL protocols and cipher optimization</li><li>✅ HSTS configuration and preload</li><li>✅ OCSP Stapling for better performance</li><li>✅ HTTP/2 configuration and optimization</li><li>✅ Security headers and best practices</li><li>✅ Testing and troubleshooting</li></ul><p><strong>Next lesson:</strong> We will explore Performance Tuning — worker processes, connections, buffers, timeouts, compression, and caching optimization to maximize Nginx performance.</p>
