---
id: 019d8b40-g204-7001-b008-nodejs0000204
title: 'Bài 8: Crypto, OS & Process'
slug: bai-8-crypto-os-va-process
description: >-
  crypto module: hashing, HMAC, encryption (AES), key derivation
  (scrypt, argon2). Digital signatures. os module, process signals,
  environment variables. child_process, exec/spawn.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 2: Core Modules Deep Dive"
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
  slug: nodejs-core-tu-co-ban-den-nang-cao
---

<h2 id="1-hashing"><strong>1. Hashing</strong></h2>

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

<h2 id="2-encryption"><strong>2. Encryption (AES-256-GCM)</strong></h2>

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

<h2 id="3-os"><strong>3. OS Module</strong></h2>

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

<h2 id="4-process"><strong>4. Process & Signals</strong></h2>

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

<h2 id="5-child-process"><strong>5. Child Process</strong></h2>

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

<p>Bài tiếp theo: <strong>Worker Threads & CPU-intensive Tasks</strong> — thread pool, SharedArrayBuffer.</p>
