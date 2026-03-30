---
id: 019d8a21-a115-7001-b001-d0c4e7000115
title: 'Bài 15: Docker trong CI/CD Pipeline'
slug: bai-15-docker-trong-ci-cd-pipeline
description: >-
  Docker trong Jenkins, GitLab CI, GitHub Actions, tự động build và push
  images, Docker-in-Docker (DinD) vs Docker Socket, CI/CD best practices,
  automated testing với Docker, blue-green và canary deployments.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 4: Security, Monitoring và CI/CD"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker từ Cơ bản đến Nâng cao
  slug: docker-tu-co-ban-den-nang-cao
---
<h2 id="1-docker-trong-cicd"><strong>1. Docker trong CI/CD - Tổng quan</strong></h2>
<p>Docker đóng vai trò quan trọng trong CI/CD pipeline:</p>
<ul>
<li><p><strong>Consistent build environment</strong>: Build trong container đảm bảo reproducible</p></li>
<li><p><strong>Isolated testing</strong>: Chạy tests trong containers cô lập</p></li>
<li><p><strong>Artifact packaging</strong>: Đóng gói ứng dụng thành Docker image</p></li>
<li><p><strong>Deployment</strong>: Deploy containers lên production</p></li>
</ul>

<h2 id="2-github-actions"><strong>2. GitHub Actions với Docker</strong></h2>
<pre><code class="language-yaml"># .github/workflows/docker.yml
name: Build and Push Docker Image

on:
  push:
    branches: [main]
    tags: ['v*']
  pull_request:
    branches: [main]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write

    steps:
      - uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Login to Container Registry
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
          tags: |
            type=semver,pattern={{version}}
            type=semver,pattern={{major}}.{{minor}}
            type=sha

      - name: Build and Push
        uses: docker/build-push-action@v6
        with:
          context: .
          push: ${{ github.event_name != 'pull_request' }}
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

      - name: Scan for vulnerabilities
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:sha-${{ github.sha }}
          format: 'table'
          exit-code: '1'
          severity: 'CRITICAL,HIGH'
</code></pre>

<h2 id="3-gitlab-ci"><strong>3. GitLab CI với Docker</strong></h2>
<pre><code class="language-yaml"># .gitlab-ci.yml
stages:
  - test
  - build
  - scan
  - deploy

variables:
  DOCKER_IMAGE: $CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA

test:
  stage: test
  image: node:20-alpine
  script:
    - npm ci
    - npm test
  cache:
    paths:
      - node_modules/

build:
  stage: build
  image: docker:27
  services:
    - docker:27-dind
  variables:
    DOCKER_TLS_CERTDIR: "/certs"
  before_script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
  script:
    - docker build -t $DOCKER_IMAGE .
    - docker push $DOCKER_IMAGE
    - |
      if [ "$CI_COMMIT_TAG" ]; then
        docker tag $DOCKER_IMAGE $CI_REGISTRY_IMAGE:$CI_COMMIT_TAG
        docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_TAG
      fi

scan:
  stage: scan
  image:
    name: aquasec/trivy:latest
    entrypoint: [""]
  script:
    - trivy image --exit-code 1 --severity CRITICAL $DOCKER_IMAGE
  allow_failure: true

deploy:
  stage: deploy
  image: docker:27
  only:
    - main
  script:
    - docker pull $DOCKER_IMAGE
    - docker compose -f docker-compose.prod.yml up -d
</code></pre>

<h2 id="4-jenkins"><strong>4. Jenkins Pipeline với Docker</strong></h2>
<pre><code class="language-groovy">// Jenkinsfile
pipeline {
    agent any

    environment {
        REGISTRY = 'harbor.example.com'
        IMAGE = "${REGISTRY}/myproject/myapp"
        TAG = "${env.BUILD_NUMBER}-${env.GIT_COMMIT.take(7)}"
    }

    stages {
        stage('Test') {
            agent {
                docker {
                    image 'node:20-alpine'
                    args '-v /tmp:/tmp'
                }
            }
            steps {
                sh 'npm ci'
                sh 'npm test'
            }
        }

        stage('Build Image') {
            steps {
                script {
                    docker.build("${IMAGE}:${TAG}")
                }
            }
        }

        stage('Push Image') {
            steps {
                script {
                    docker.withRegistry("https://${REGISTRY}", 'harbor-creds') {
                        docker.image("${IMAGE}:${TAG}").push()
                        docker.image("${IMAGE}:${TAG}").push('latest')
                    }
                }
            }
        }

        stage('Deploy') {
            when { branch 'main' }
            steps {
                sh "TAG=${TAG} docker compose -f docker-compose.prod.yml up -d"
            }
        }
    }
}
</code></pre>

<h2 id="5-dind-vs-socket"><strong>5. Docker-in-Docker vs Socket Mounting</strong></h2>

<h3><strong>Docker-in-Docker (DinD)</strong></h3>
<pre><code class="language-yaml"># CI runner chạy Docker daemon riêng bên trong container
services:
  docker:
    image: docker:27-dind
    privileged: true
    volumes:
      - docker-certs:/certs
</code></pre>
<ul>
<li><p><strong>Ưu điểm</strong>: Cô lập hoàn toàn, không ảnh hưởng host</p></li>
<li><p><strong>Nhược điểm</strong>: Cần privileged mode, chậm hơn, cache riêng biệt</p></li>
</ul>

<h3><strong>Docker Socket Mounting</strong></h3>
<pre><code class="language-bash"># Mount Docker socket từ host
docker run -v /var/run/docker.sock:/var/run/docker.sock docker:27
</code></pre>
<ul>
<li><p><strong>Ưu điểm</strong>: Nhanh, chia sẻ cache với host</p></li>
<li><p><strong>Nhược điểm</strong>: Security risk - container có full access tới Docker daemon</p></li>
</ul>

<h2 id="6-automated-testing"><strong>6. Automated Testing với Docker</strong></h2>
<pre><code class="language-yaml"># docker-compose.test.yml
services:
  test-db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: test_db
      POSTGRES_PASSWORD: test
    healthcheck:
      test: ["CMD-SHELL", "pg_isready"]
      interval: 5s
      timeout: 3s
      retries: 5

  test:
    build:
      context: .
      target: test
    environment:
      DB_HOST: test-db
      DB_NAME: test_db
      DB_PASSWORD: test
      NODE_ENV: test
    depends_on:
      test-db:
        condition: service_healthy
    command: npm test
</code></pre>

<pre><code class="language-bash"># Chạy tests
docker compose -f docker-compose.test.yml run --rm test
echo $?  # Exit code = test result

# Cleanup
docker compose -f docker-compose.test.yml down -v
</code></pre>

<h2 id="7-deployment-strategies"><strong>7. Deployment Strategies</strong></h2>

<h3><strong>Blue-Green Deployment</strong></h3>
<pre><code class="language-bash">#!/bin/bash
# blue-green-deploy.sh

CURRENT=$(docker inspect --format='{{.Config.Labels.version}}' app-blue 2>/dev/null)
NEW_VERSION=$1

if [ "$CURRENT" ]; then
    # Deploy to green
    TAG=$NEW_VERSION docker compose -f docker-compose.green.yml up -d
    # Wait for healthy
    sleep 30
    # Switch traffic (update nginx upstream)
    # Remove blue
    docker compose -f docker-compose.blue.yml down
else
    # Deploy to blue
    TAG=$NEW_VERSION docker compose -f docker-compose.blue.yml up -d
fi
</code></pre>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>
<p>Trong bài này, bạn đã nắm được:</p>
<ul>
<li><p>Docker trong CI/CD pipeline overview</p></li>
<li><p>GitHub Actions, GitLab CI, Jenkins với Docker</p></li>
<li><p>DinD vs Docker Socket mounting</p></li>
<li><p>Automated testing với Docker Compose</p></li>
<li><p>Blue-green và canary deployment strategies</p></li>
</ul>
<p>Bài tiếp theo sẽ hướng dẫn Docker Performance Tuning.</p>
