---
id: 019d8b40-f402-7001-b007-rust000000402
title: 'Bài 14: gRPC với Tonic'
slug: bai-14-grpc-voi-tonic
description: >-
  Protocol Buffers, prost code generation. Tonic gRPC framework,
  unary/streaming RPCs. Interceptors, TLS, load balancing.
  gRPC-web cho browser clients.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 4: Advanced Backend"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1342" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1342)"/>

  <!-- Decorations -->
  <g>
    <circle cx="996" cy="278" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="892" cy="274" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="788" cy="270" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="684" cy="266" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1080" cy="262" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="58" x2="1100" y2="138" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="88" x2="1050" y2="158" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="986.5788383248864,141.5 986.5788383248864,174.5 958,191 929.4211616751136,174.5 929.4211616751135,141.5 958,125" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 Lập trình — Bài 14</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 14: gRPC với Tonic</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Advanced Backend</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-proto"><strong>1. Protocol Buffers</strong></h2>

<pre><code class="language-protobuf">// proto/product.proto
syntax = "proto3";
package product;

service ProductService {
    rpc GetProduct (GetProductRequest) returns (Product);
    rpc ListProducts (ListProductsRequest) returns (stream Product);
    rpc CreateProduct (CreateProductRequest) returns (Product);
}

message Product {
    string id = 1;
    string name = 2;
    double price = 3;
    optional string description = 4;
}

message GetProductRequest { string id = 1; }
message ListProductsRequest { int32 limit = 1; int32 offset = 2; }
message CreateProductRequest { string name = 1; double price = 2; }
</code></pre>

<pre><code class="language-rust">// build.rs
fn main() -> Result&lt;(), Box&lt;dyn std::error::Error&gt;&gt; {
    tonic_build::compile_protos("proto/product.proto")?;
    Ok(())
}
</code></pre>

<h2 id="2-server"><strong>2. gRPC Server</strong></h2>

<pre><code class="language-rust">use tonic::{transport::Server, Request, Response, Status};

pub mod product_proto {
    tonic::include_proto!("product");
}

use product_proto::product_service_server::{ProductService, ProductServiceServer};
use product_proto::{Product, GetProductRequest, CreateProductRequest};

#[derive(Default)]
pub struct MyProductService;

#[tonic::async_trait]
impl ProductService for MyProductService {
    async fn get_product(
        &self,
        request: Request&lt;GetProductRequest&gt;,
    ) -> Result&lt;Response&lt;Product&gt;, Status&gt; {
        let id = request.into_inner().id;
        // Lookup from DB
        let product = Product {
            id: id.clone(),
            name: "Sample".into(),
            price: 29.99,
            description: Some("A sample product".into()),
        };
        Ok(Response::new(product))
    }

    type ListProductsStream = tokio_stream::wrappers::ReceiverStream&lt;Result&lt;Product, Status&gt;&gt;;

    async fn list_products(
        &self,
        request: Request&lt;ListProductsRequest&gt;,
    ) -> Result&lt;Response&lt;Self::ListProductsStream&gt;, Status&gt; {
        let (tx, rx) = tokio::sync::mpsc::channel(128);
        tokio::spawn(async move {
            for i in 0..10 {
                tx.send(Ok(Product {
                    id: format!("prod-{}", i),
                    name: format!("Product {}", i),
                    price: i as f64 * 10.0,
                    description: None,
                })).await.unwrap();
            }
        });
        Ok(Response::new(tokio_stream::wrappers::ReceiverStream::new(rx)))
    }
}

#[tokio::main]
async fn main() -> Result&lt;(), Box&lt;dyn std::error::Error&gt;&gt; {
    Server::builder()
        .add_service(ProductServiceServer::new(MyProductService::default()))
        .serve("0.0.0.0:50051".parse()?)
        .await?;
    Ok(())
}
</code></pre>

<h2 id="3-client"><strong>3. gRPC Client</strong></h2>

<pre><code class="language-rust">use product_proto::product_service_client::ProductServiceClient;

#[tokio::main]
async fn main() -> Result&lt;(), Box&lt;dyn std::error::Error&gt;&gt; {
    let mut client = ProductServiceClient::connect("http://localhost:50051").await?;

    let response = client.get_product(GetProductRequest { id: "prod-1".into() }).await?;
    println!("Product: {:?}", response.into_inner());

    // Streaming
    let mut stream = client.list_products(ListProductsRequest { limit: 10, offset: 0 }).await?.into_inner();
    while let Some(product) = stream.message().await? {
        println!("Received: {:?}", product);
    }

    Ok(())
}
</code></pre>

<p>Bài tiếp theo: <strong>Message Queues & Background Jobs</strong>.</p>
