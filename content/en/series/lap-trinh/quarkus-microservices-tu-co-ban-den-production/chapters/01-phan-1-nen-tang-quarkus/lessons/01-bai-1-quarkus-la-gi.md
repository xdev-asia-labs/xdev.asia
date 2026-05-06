---
id: 019e2a10-a101-7a01-b001-f1a2b3c4d501
title: 'Lesson 1: What is Quarkus? — Supersonic Subatomic Java for Microservices'
slug: bai-1-quarkus-la-gi-supersonic-subatomic-java-cho-microservices
description: >-
  Overview of Quarkus, build-time optimization architecture, comparison of
  Quarkus vs Spring Boot for microservices, Quarkus Extensions ecosystem, <1
  second startup demo.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 0
section_title: 'Part 1: Quarkus Platform & Project Setup'
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: 'Quarkus Microservices: From Basics to Production'
  slug: quarkus-microservices-tu-co-ban-den-production
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7638" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7638)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1007" cy="111" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="914" cy="138" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="821" cy="165" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="728" cy="192" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="635" cy="219" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="161" x2="1100" y2="241" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="191" x2="1050" y2="261" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1042.1769145362398,193 1042.1769145362398,229 1011,247 979.8230854637602,229 979.8230854637602,193 1011,175" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 Programming — Lesson 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 1: What is Quarkus? — Supersonic</tspan>
      <tspan x="60" dy="42">Subatomic Java for Microservices</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus Microservices: From Basics to Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Quarkus Platform & Project Setup</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

In the Cloud Native world, **boot speed** and **memory consumption** determine the cost of running a microservices system. Quarkus — "Supersonic Subatomic Java" — is a framework developed from the ground up by Red Hat specifically for Kubernetes and GraalVM, with the ability to start up in under 1 second and use only ~50MB of RAM in native mode.

This series will take you from the first "Hello World" article to an E-Commerce system consisting of 5 microservices running in production.

## What is Quarkus?

Quarkus is a **Kubernetes-native Java framework** designed for JVM (HotSpot) and GraalVM Native Image. The goal: help Java become the leading language for serverless, microservices, and container-based workloads.

### Outstanding features

| Features | Description |
|-----------|-------|
| **Build-time optimization** | Dependency analysis, configuration, annotation processing at build time — not runtime |
| **Dev Services** | Automatically start PostgreSQL, Kafka, Keycloak with Testcontainers when dev/test |
| **Live Coding** | Change code → save → refresh browser, no need to restart |
| **Unified Imperative + Reactive** | Supports both blocking (imperative) and non-blocking (reactive) in the same project |
| **GraalVM Native** | Compile into native executable — startup <50ms, RAM ~50MB |
| **Extensions Ecosystem** | 600+ extensions for every need: Hibernate, Kafka, gRPC, Keycloak... |

## Build-Time Optimization Architecture

Unlike Spring Boot, which handles everything at **runtime** (classpath scanning, reflection, proxy generation), Quarkus does most of the work at **build time**:

```
┌─────────────────────────────────────────────────┐
│              TRADITIONAL FRAMEWORK              │
│                                                 │
│  Start JVM → Load Classes → Scan Classpath →    │
│  Process Annotations → Build Dependency Graph → │
│  Create Proxies → Ready (~5-30 giây)           │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│              QUARKUS (Build-Time)                │
│                                                 │
│  BUILD: Scan → Analyze → Generate Bytecode →    │
│         Create Static Init Code                 │
│                                                 │
│  RUN:   Load Pre-computed Metadata → Ready      │
│         (~0.5-1 giây JVM, <0.05 giây Native)   │
└─────────────────────────────────────────────────┘
```

### Why is build-time important for Microservices?

1. **Fast Scale-out** — Kubernetes needs to spin-up new pods in seconds
2. **Serverless/FaaS** — Cold start determines user experience
3. **Resource efficiency** — 100 micro-instances x 50MB << 100 x 500MB
4. **Cost optimization** — Cloud billing calculated based on CPU/RAM usage

## Quarkus vs Spring Boot — Realistic Comparison

| Criteria | Quarkus 3.x | Spring Boot 3.x |
|-----------|-------------|-----------------|
| **Startup (JVM)** | ~0.5-1s | ~3-8s |
| **Startup (Native)** | ~0.02-0.05s | ~0.1-0.3s (Spring AOT) |
| **RSS Memory (JVM)** | ~80-120MB | ~200-400MB |
| **RSS Memory (Native)** | ~30-60MB | ~80-150MB |
| **Dev Experience** | Dev Services, Live Coding, Dev UI | Spring DevTools, Initializr |
| **Ecosystem** | 600+ extensions | 300+ starters |
| **Community** | Growing strong | Very large, mature |
| **Learning curve** | Average (CDI, MicroProfile) | Low (familiar) |
| **Native support** | First-class, few issues | Much improved but still limited |
| **Reactive** | Mutiny (native) + Vert.x | WebFlux (Project Reactor) |

### When to choose Quarkus?

- Build **new microservices** (greenfield) for Kubernetes
- Need **quick startup** for serverless/FaaS
- Want to optimize **cloud costs** (less RAM, less CPU)
- Team is familiar with **Jakarta EE / MicroProfile**
- Requires **native executable** with GraalVM

### When to choose Spring Boot?

- Migrate **existing monolith** to microservices
- The team has deep **Spring experience**
- Needs a large **ecosystem** and large community support
- Application startup time is not important

## CDI & MicroProfile — Standard platform

Quarkus is based on **two open standards**, not a proprietary API:

### CDI (Contexts and Dependency Injection)

CDI is the Jakarta EE standard for dependency injection. Quarkus uses **ArC** — CDI engine to process at build time:

```java
// Injection cơ bản
@ApplicationScoped  // Singleton trong app
public class ProductService {

    @Inject
    ProductRepository productRepo;

    @Inject
    @ConfigProperty(name = "app.max-products",
        defaultValue = "1000")
    int maxProducts;

    public List<Product> listActive() {
        return productRepo.findActive();
    }
}

// Popular CDI Scopes
@ApplicationScoped // 1 instance / app
@RequestScoped // 1 instance / HTTP request
@SessionScoped // 1 instance / session
@Dependent // New each injection
@Singleton // Like @ApplicationScoped but without proxy
```

**ArC vs Spring DI**: ArC analyzes the entire dependency graph at build time → removes unused beans → reduces memory + startup.

### MicroProfile

Set of specs for microservices, fully implemented by Quarkus:

| Spec | Quarkus Extension | Function |
|------|-------------------|-----------|
| **Config** | Built-in | Type-safe configuration, multiple sources |
| **REST Client** | quarkus-rest-client | Type-safe HTTP client |
| **Fault Tolerance** | quarkus-smallrye-fault-tolerance | @Retry, @CircuitBreaker, @Fallback |
| **Health** | quarkus-smallrye-health | Liveness, Readiness, Startup probes |
| **Metrics** | quarkus-micrometer | Application & JVM metrics |
| **OpenAPI** | quarkus-smallrye-openapi | Swagger documentation |
| **JWT Auth** | quarkus-smallrye-jwt | JWT token parsing & validation |
| **OpenTelemetry** | quarkus-opentelemetry | Distributed tracing |

Benefits: code written according to MicroProfile specs **portable** between Quarkus, Open Liberty, Payara, WildFly.

## Quarkus 3.34 — Latest Features (2026)

| Features | Description |
|---------|-------|
| **Virtual Threads (Loom)** | `@RunOnVirtualThread` — non-blocking performance with imperative code |
| **Dev Services 2.0** | Automatically provision any container, not just built-in |
| **Unified CLI** | `quarkus dev`, `quarkus build`, `quarkus deploy` |
| **Improved Native** | Build time reduced by ~40%, supports more libraries |
| **WebSocket Next** | New, annotation-driven WebSocket server/client API |
| **Langchain4j** | AI/LLM integration native |
| **Hibernate ORM 7** | Jakarta Persistence 3.2, improved performance |
| **Security improvements** | OIDC multi-tenancy, fine-grained RBAC |

```java
// Virtual Threads — new in Quarkus 3.x
@Path("/api/v1/products")
public class ProductResource {

    @GET
    @RunOnVirtualThread // Run on virtual thread
    publicList<Product> listProducts() {
        // Blocking code but not blocking OS thread
        return Product.listAll();
    }
}
```

## Quarkus Extensions Ecosystem

Extensions are how Quarkus integrates libraries. Each extension is optimized for build-time processing:

```bash
# Find extensions
quarkus extension list
quarkus extension list --search=postgres

# Add extension to project
quarkus extension add quarkus-rest-jackson
quarkus extension add quarkus-hibernate-orm-panache
quarkus extension add quarkus-jdbc-postgresql
quarkus extension add quarkus-oidc
quarkus extension add quarkus-smallrye-reactive-messaging-kafka
```

### Main Extensions in this series

| Extension | Function |
|-----------|-----------|
| `quarkus-rest-jackson` | REST API with JSON serialization |
| `quarkus-hibernate-orm-panache` | Simplified ORM (Active Record / Repository) |
| `quarkus-jdbc-postgresql` | JDBC driver cho PostgreSQL |
| `quarkus-flyway` | Database schema migration |
| `quarkus-oidc` | OpenID Connect / Keycloak integration |
| `quarkus-smallrye-reactive-messaging-kafka` | Apache Kafka messaging |
| `quarkus-grpc` | gRPC server/client |
| `quarkus-smallrye-fault-tolerance` | Circuit Breaker, Retry, Fallback |
| `quarkus-opentelemetry` | Distributed tracing |
| `quarkus-micrometer-registry-prometheus` | Metrics with Prometheus |
| `quarkus-smallrye-health` | Health checks |
| `quarkus-redis-client` | Redis caching |
| `quarkus-kubernetes` | Auto-generate K8s manifests |
| `quarkus-container-image-jib` | Build container image |

## Demo: Hello Quarkus — First start

```bash
# Install Quarkus CLI (needs Java 17+)
# macOS
brew install quarkusio/tap/quarkus

# Linux (SDKMAN)
sdk install quarkus

# Create project
quarkus create app com.xdev:hello-quarkus \
  --extension='rest-jackson' \
  --java=21

cd hello-quarkus

# Run Dev Mode
quarkus dev
```

Result:

```
__ ____ __ _____ ___ __ ____ ______
 --/ __ \/ / / / _ | / _ \/ //_/ / / / __/
 -/ /_/ / /_/ / __ |/ , _/ ,< / /_/ /\ \
--\___\_\____/_/ |_/_/|_/_/|_|\____/___/
2026-04-03 10:00:00,123 INFO  [io.quarkus] (Quarkus Main Thread)
  hello-quarkus 1.0.0-SNAPSHOT on JVM (powered by Quarkus 3.34.x)
  started in 0.876s. Listening on: http://localhost:8080

Tests paused
Press [h] for more options>
```

**0.876 seconds** — compared to 5-10 seconds for equivalent Spring Boot.

### Hello REST Endpoint

```java
package com.xdev;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/hello")
public class GreetingResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello from Quarkus!";
    }
}
```

```bash
curl http://localhost:8080/hello
# Hello from Quarkus!
```

## E-Commerce system architecture (Preview)

In this series, we will build:

```
┌─────────────┐ ┌──────────────┐ ┌──────────────┐
│ Browser / │────▶│ API Gateway │────▶│ Keycloak │
│ Mobile App │ │ (Nginx) │ │ (Auth) │
└─────────────┘ └──────┬───────┘ └──────────────┘
                           │
          ┌────────────────┼────────────────┐
          │ │ │
          ▼ ▼ ▼
   ┌──────────┐ ┌──────────┐ ┌──────────┐
   │ Product │ │ Order │ │ Payment │
   │ Service │ │ Service │ │ Service │
   │ │ │ │ │ │
   │ Quarkus │ │ Quarkus │ │ Quarkus │
   │ REST+gRPC│ │ REST │ │ REST │
   └────┬─────┘ └────┬─────┘ └────┬─────┘
        │ │ │
        ▼ ▼ ▼
   ┌──────────┐ ┌──────────┐ ┌──────────┐
   │PostgreSQL│ │PostgreSQL│ │PostgreSQL│
   │(Products)│ │(Orders) │ │(Payments)│
   └──────────┘ └──────────┘ └──────────┘
                        │
                   ┌────┴────┐
                   │ Kafka │
                   │ (Events)│
                   └────┬────┘
                        │
                        ▼
                ┌──────────────┐
                │ Notifications │
                │ Service │
                │ (Quarkus) │
                └──────────────┘
```

**5 Services:**
1. **Product Service** — Manage products, categories, inventory
2. **Order Service** — Order processing, state machine
3. **Payment Service** — Payment, transaction log
4. **Notification Service** — Email/SMS notifications
5. **User Service (Keycloak)** — Identity & Access Management

## Exercise

1. Install JDK 21+ and Quarkus CLI on local machine
2. Create a Quarkus project with the extension `rest-jackson`
3. Write endpoints `GET /api/info` returns JSON `{"framework": "Quarkus", "version": "3.34"}` 
4. Compare startup time between Quarkus and an equivalent Spring Boot project
5. Try inject `@ConfigProperty` and change the value in `application.properties` — observe live reload
6. List all available extensions: `quarkus extension list --search=rest` — choose 3 extensions you want to learn about

## Key Concepts to remember

```
┌──────────────────────────── ─────────────────────────────┐
│ Quarkus Mental Model │
│ │
│ ┌──────────────┐ ┌──────────────┐ │
│ │ Build Time │───▶│ Runtime │ │
│ │ │ │ │ │
│ │ • Classpath │ │ • Load pre- │ │
│ │ scanning │ │ computed │ │
│ │ • Annotation │ │ metadata │ │
│ │ processing │ │ • Execute │ │
│ │ • Bytecode │ │ static │ │
│ │ generation │ │ init │ │
│ │ • Dead code │ │ • Start HTTP │ │
│ │ removal │ │ server │ │
│ │ │ │ │ │
│ │ (slow, once)│ │ (fast!) │ │
│ └──────────────┘ └──────────────┘ │
│ │
│ Jakarta EE Standards MicroProfile Standards │
│ ┌─────────────────┐ ┌─────────────────────┐ │
│ │ • CDI (ArC) │ │ • Config │ │
│ │ • Jakarta REST │ │ • REST Client │ │
│ │ • Persistence │ │ • Fault Tolerance │ │
│ │ • Bean Validation│ │ • Health / Metrics │ │
│ │ • Security │ │ • OpenAPI / JWT │ │
│ └─────────────────┘ └─────────────────────┘ │
└──────────────────────────── ─────────────────────────────┘
```

## Summary

- Quarkus is a Java framework designed specifically for **Cloud Native & Kubernetes**
- **Build-time optimization** helps startup <1 second, low RAM
- **Dev Services** automatically provision infrastructure during development
- Compared to Spring Boot: Quarkus is **faster**, **lighter**, but Spring Boot has a larger **ecosystem**
- This series builds a practical **E-Commerce Platform** system with 5 microservices

Next article: Creating Quarkus Project — CLI, Dev Mode, Dev UI & Live Coding.
