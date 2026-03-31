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
