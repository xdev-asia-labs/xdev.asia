---
id: 019d8b40-g204-7001-b008-nodejs0000204
title: 第 8 課：加密、作業系統和流程
slug: bai-8-crypto-os-va-process
description: >-
  加密模組：雜湊、HMAC、加密 (AES)、金鑰派生（scrypt、argon2）。數位簽名。作業系統模組、進程訊號、環境變數。
  child_process，執行/產生。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: 第 2 部分：核心模組深入探討
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: Node.js 核心：從基礎到高級
  slug: nodejs-core-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7402" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7402)"/>

  <!-- Decorations -->
  <g>
    <circle cx="602" cy="96" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="604" cy="118" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="606" cy="140" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="608" cy="162" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="610" cy="184" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="196" x2="1100" y2="276" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="226" x2="1050" y2="296" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="972.8467875173176,130.5 972.8467875173176,161.5 946,177 919.1532124826824,161.5 919.1532124826824,130.5 946,115" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 程式設計 — 第 8 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 8 課：加密、作業系統和流程</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js 核心：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：核心模組深入探討</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-hashing"><strong>1. 哈希</strong></h2>

<pre><code class="language-ts">import { createHash, randomBytes, randomUUID, scrypt } from 'node:crypto'
import { promisify } from 'node:util'

// SHA-256 hash
const hash = createHash('sha256').update('password').digest('hex')

// Random bytes
const token = randomBytes(32).toString('hex')
const uuid = randomUUID()

// Password hashing với scrypt
const scryptAsync = promisify(scrypt)

async function hashPassword(password: string): Promise&lt;string&gt; {
  const salt = randomBytes(16).toString('hex')
  const derived = (await scryptAsync(password, salt, 64)) as Buffer
  return `${salt}:${derived.toString('hex')}`
}

async function verifyPassword(password: string, stored: string): Promise&lt;boolean&gt; {
  const [salt, hash] = stored.split(':')
  const derived = (await scryptAsync(password, salt, 64)) as Buffer
  return derived.toString('hex') === hash
}
</code></pre>

<h2 id="2-encryption"><strong>2. 加密（AES-256-GCM）</strong></h2>

<pre><code class="language-ts">import { createCipheriv, createDecipheriv, randomBytes } from 'node:crypto'

function encrypt(text: string, key: Buffer): { encrypted: string; iv: string; tag: string } {
  const iv = randomBytes(16)
  const cipher = createCipheriv('aes-256-gcm', key, iv)

  let encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  const tag = cipher.getAuthTag().toString('hex')

  return { encrypted, iv: iv.toString('hex'), tag }
}

function decrypt(data: { encrypted: string; iv: string; tag: string }, key: Buffer): string {
  const decipher = createDecipheriv('aes-256-gcm', key, Buffer.from(data.iv, 'hex'))
  decipher.setAuthTag(Buffer.from(data.tag, 'hex'))

  let decrypted = decipher.update(data.encrypted, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}

const key = randomBytes(32)
const result = encrypt('Sensitive data', key)
console.log(decrypt(result, key))
</code></pre>

<h2 id="3-os"><strong>3. 作業系統模組</strong></h2>

<pre><code class="language-ts">import os from 'node:os'

console.log(`Platform: ${os.platform()}`)     // linux, darwin, win32
console.log(`Architecture: ${os.arch()}`)      // x64, arm64
console.log(`CPUs: ${os.cpus().length}`)
console.log(`Total Memory: ${(os.totalmem() / 1e9).toFixed(1)}GB`)
console.log(`Free Memory: ${(os.freemem() / 1e9).toFixed(1)}GB`)
console.log(`Hostname: ${os.hostname()}`)
console.log(`Home Dir: ${os.homedir()}`)
console.log(`Temp Dir: ${os.tmpdir()}`)
console.log(`Uptime: ${(os.uptime() / 3600).toFixed(1)}h`)
</code></pre>

<h2 id="4-process"><strong>4. 進程和訊號</strong></h2>

<pre><code class="language-ts">// Environment variables
const dbUrl = process.env.DATABASE_URL ?? 'postgres://localhost:5432/dev'

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Received SIGINT. Shutting down gracefully...')
  await server.close()
  await db.end()
  process.exit(0)
})

process.on('SIGTERM', async () => {
  console.log('Received SIGTERM. Shutting down...')
  process.exit(0)
})

// Uncaught errors
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err)
  process.exit(1)
})

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason)
  process.exit(1)
})
</code></pre>

<h2 id="5-child-process"><strong>5. 子進程</strong></h2>

<pre><code class="language-ts">import { exec, execFile, spawn } from 'node:child_process'
import { promisify } from 'node:util'

const execAsync = promisify(exec)

// exec — shell command
const { stdout } = await execAsync('ls -la')

// spawn — streaming output (cho processes lớn)
const child = spawn('ffmpeg', ['-i', 'input.mp4', '-c:v', 'libx264', 'output.mp4'])

child.stdout.on('data', (data) => console.log(`stdout: ${data}`))
child.stderr.on('data', (data) => console.error(`stderr: ${data}`))
child.on('close', (code) => console.log(`Exit code: ${code}`))

// execFile — an toàn hơn exec (không qua shell)
const { stdout: result } = await promisify(execFile)('node', ['--version'])
</code></pre>

<p>下一篇： <strong>工作執行緒和 CPU 密集型任務</strong> — 線程池、SharedArrayBuffer。</p>
