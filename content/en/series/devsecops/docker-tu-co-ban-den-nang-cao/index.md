---
id: 019d8a21-a100-7001-b001-d0c4e7000001
title: Docker from Basics to Advanced
slug: docker-from-basics-to-advanced
description: >-
  Comprehensive Docker course from fundamentals to advanced level, helping you
  master container technology from the first concepts to real-world production
  deployment. Covers Dockerfile, Docker Compose, Networking, Storage, Security,
  CI/CD, Docker Swarm, Microservices and best practices for enterprise
  environments. Updated with Docker Engine 27+ and modern container technologies
  as of 2026.
featured_image: uploads/2026/03/docker-series-banner-2026.png
level: beginner
duration_hours: 60
lesson_count: 20
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-30T08:00:00.000000Z'
created_at: '2026-03-30T08:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9617-faa6-70d6-8679-ee4de1f177b3
  name: DevSecOps
  slug: devsecops
tags:
  - name: devops
    slug: devops
  - name: Docker
    slug: docker
  - name: container
    slug: container
  - name: docker-compose
    slug: docker-compose
  - name: Microservices
    slug: microservices
  - name: cicd
    slug: cicd
  - name: linux
    slug: linux
  - name: security
    slug: security
  - name: monitoring
    slug: monitoring
  - name: production
    slug: production
  - name: docker-registry
    slug: docker-registry
  - name: docker-swarm
    slug: docker-swarm
  - name: networking
    slug: networking
  - name: infrastructure
    slug: infrastructure
  - name: cloud-native
    slug: cloud-native
  - name: kubernetes
    slug: kubernetes
  - name: Performance
    slug: performance
  - name: HandsOn
    slug: handson
  - name: RealWorld
    slug: realworld
sections:
  - id: section-01
    title: 'Part 1: Docker Fundamentals'
    description: 'Get started with Docker, installation, basic images and containers'
    sort_order: 1
    lessons:
      - id: 019d8a21-a101-7001-b001-d0c4e7000101
        title: 'Lesson 1: Introduction to Docker - Container and Virtualization'
        slug: bai-1-gioi-thieu-docker-container-va-virtualization
        description: >-
          Learn what Docker is, compare containers vs virtual machines, understand
          Docker Engine architecture (daemon, CLI, containerd, runc), the history
          of container technology development and why Docker revolutionized how we
          develop software.
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-a102-7001-b001-d0c4e7000102
        title: 'Lesson 2: Installing Docker and Basic Commands'
        slug: bai-2-cai-dat-docker-va-cac-lenh-co-ban
        description: >-
          Guide to installing Docker Engine on Ubuntu, CentOS, macOS and Windows.
          Learn Docker CLI, basic commands like docker run, ps, stop, rm, exec,
          logs. Configure Docker daemon and manage Docker service.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-a103-7001-b001-d0c4e7000103
        title: 'Lesson 3: Docker Images - Build, Pull and Management'
        slug: bai-3-docker-images-build-pull-va-quan-ly
        description: >-
          Understand Docker images, layer architecture, docker pull/push, image
          management with docker images, tag, rmi, prune. Learn about Docker Hub,
          official images and how to choose the right base image for your project.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8a21-a104-7001-b001-d0c4e7000104
        title: 'Lesson 4: Docker Containers - Lifecycle and Management'
        slug: bai-4-docker-containers-vong-doi-va-quan-ly
        description: >-
          Understand container lifecycle (created, running, paused, stopped,
          deleted), advanced management commands, resource limits (CPU, memory),
          restart policies, docker inspect, docker stats and container debugging
          techniques.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'Part 2: Dockerfile and Image Optimization'
    description: 'Build professional Docker images with Dockerfile and optimization'
    sort_order: 2
    lessons:
      - id: 019d8a21-a105-7001-b001-d0c4e7000105
        title: 'Lesson 5: Dockerfile A to Z'
        slug: bai-5-dockerfile-tu-a-den-z
        description: >-
          Comprehensive guide to all Dockerfile instructions: FROM, RUN, COPY,
          ADD, CMD, ENTRYPOINT, ENV, ARG, WORKDIR, EXPOSE, VOLUME, USER,
          HEALTHCHECK, LABEL, SHELL, STOPSIGNAL. Best practices and anti-patterns
          when writing Dockerfile.
        duration_minutes: 180
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-a106-7001-b001-d0c4e7000106
        title: 'Lesson 6: Multi-stage Builds and Docker Image Optimization'
        slug: bai-6-multi-stage-builds-va-toi-uu-docker-image
        description: >-
          Multi-stage builds technique to reduce image size, layer caching
          optimization, .dockerignore, Alpine vs Distroless base images, security
          scanning with Trivy/Snyk, and image optimization strategies for
          production.
        duration_minutes: 160
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-a107-7001-b001-d0c4e7000107
        title: 'Lesson 7: Docker Registry - Docker Hub and Private Registry'
        slug: bai-7-docker-registry-docker-hub-va-private-registry
        description: >-
          Work with Docker Hub, create repositories, automated builds. Deploy
          Private Registry with Docker Registry and Harbor. Image tagging
          strategies, versioning, vulnerability scanning and registry security
          best practices.
        duration_minutes: 140
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8a21-a108-7001-b001-d0c4e7000108
        title: 'Lesson 8: Docker Compose Basics'
        slug: bai-8-docker-compose-co-ban
        description: >-
          Introduction to Docker Compose, docker-compose.yml syntax, services,
          networks, volumes, depends_on, healthcheck. Deploy multi-container
          application with Compose: web app + database + cache (Nginx + Node.js +
          PostgreSQL + Redis).
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'Part 3: Networking, Storage, Advanced Compose'
    description: 'Master Docker networking, storage volumes, and advanced Compose'
    sort_order: 3
    lessons:
      - id: 019d8a21-a109-7001-b001-d0c4e7000109
        title: 'Lesson 9: Docker Networking Deep Dive'
        slug: bai-9-docker-networking-deep-dive
        description: >-
          Deep dive into Docker networking: bridge, host, overlay, macvlan modes.
          Container communication, DNS resolution, port mapping, custom networks,
          service discovery and network troubleshooting.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-a110-7001-b001-d0c4e7000110
        title: 'Lesson 10: Docker Volumes and Persistent Storage'
        slug: bai-10-docker-volumes-va-persistent-storage
        description: >-
          Docker storage options: bind mounts, volumes, tmpfs. Persistent data
          management, backup and recovery, volume drivers, NFS storage and
          data volume containers patterns.
        duration_minutes: 140
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8a21-a111-7001-b001-d0c4e7000111
        title: 'Lesson 11: Advanced Docker Compose'
        slug: bai-11-docker-compose-nang-cao
        description: >-
          Advanced Compose features: profiles, overrides, templating, build
          arguments, conditional services. Production-ready patterns with Compose,
          scaling services and multi-file configurations.
        duration_minutes: 160
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8a21-a112-7001-b001-d0c4e7000112
        title: 'Lesson 12: Environment Variables, Secrets and Configuration'
        slug: bai-12-environment-variables-secrets-va-configuration
        description: >-
          Managing configuration: environment variables, .env files, Docker
          secrets, config objects. 12-factor app principles, configuration best
          practices for development and production environments.
        duration_minutes: 130
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Part 4: Security, Monitoring, CI/CD'
    description: 'Docker security, monitoring, logging and CI/CD integration'
    sort_order: 4
    lessons:
      - id: 019d8a21-a113-7001-b001-d0c4e7000113
        title: 'Lesson 13: Docker Security Best Practices'
        slug: bai-13-docker-security-best-practices
        description: >-
          Container security: rootless Docker, user permissions, image scanning,
          signed images, content trust. Security hardening, vulnerability
          management and compliance best practices.
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-a114-7001-b001-d0c4e7000114
        title: 'Lesson 14: Docker Logging and Monitoring'
        slug: bai-14-docker-logging-va-monitoring
        description: >-
          Docker logging drivers and log collection. Container resource
          monitoring with docker stats, cAdvisor, Prometheus. Log aggregation,
          analysis and alerting strategies.
        duration_minutes: 140
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8a21-a115-7001-b001-d0c4e7000115
        title: 'Lesson 15: Docker in CI/CD Pipeline'
        slug: bai-15-docker-trong-ci-cd-pipeline
        description: >-
          Integration with CI/CD: GitHub Actions, GitLab CI, Jenkins. Building,
          testing and pushing images in pipelines. Container registry integration
          and automated deployments.
        duration_minutes: 160
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8a21-a116-7001-b001-d0c4e7000116
        title: 'Lesson 16: Docker Performance Tuning'
        slug: bai-16-docker-performance-tuning
        description: >-
          Performance optimization: CPU, memory and I/O tuning. Network
          performance, layer caching strategies. Profiling and benchmarking
          containers in production.
        duration_minutes: 150
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'Part 5: Production and Advanced Topics'
    description: 'Docker Swarm, Microservices, Kubernetes and production deployment'
    sort_order: 5
    lessons:
      - id: 019d8a21-a117-7001-b001-d0c4e7000117
        title: 'Lesson 17: Docker Swarm - Container Orchestration'
        slug: bai-17-docker-swarm-container-orchestration
        description: >-
          Docker Swarm cluster setup and management. Services, tasks, scheduling
          and load balancing. Swarm networking, persistent storage and high
          availability patterns.
        duration_minutes: 170
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-a118-7001-b001-d0c4e7000118
        title: 'Lesson 18: Docker for Microservices Architecture'
        slug: bai-18-docker-cho-microservices-architecture
        description: >-
          Microservices design principles and Docker best practices. Inter-service
          communication, API gateways, service discovery and resilience patterns.
          Example: building scalable microservices with Docker.
        duration_minutes: 180
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8a21-a119-7001-b001-d0c4e7000119
        title: 'Lesson 19: Docker with Kubernetes - Migration Path'
        slug: bai-19-docker-voi-kubernetes-migration-path
        description: >-
          Transition from Docker to Kubernetes. Understanding container runtimes,
          OCI standards. Kubernetes deployment of Docker containers, Helm charts
          and orchestration patterns.
        duration_minutes: 160
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a21-a120-7001-b001-d0c4e7000120
        title: 'Lesson 20: Production Deployment and Troubleshooting'
        slug: bai-20-production-deployment-va-troubleshooting
        description: >-
          Production-ready deployment strategies: blue-green, canary, rolling
          updates. Health checks, container restart policies, disaster recovery.
          Troubleshooting common issues and performance optimization in
          production.
        duration_minutes: 180
        is_free: true
        sort_order: 20
        video_url: null
---
