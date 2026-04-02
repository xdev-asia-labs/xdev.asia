"use client";

import { useEffect, useRef } from "react";
import type { Vector3 } from "three";

export default function Globe3D({ className = "" }: { className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let cleanup: (() => void) | undefined;
        let cancelled = false;

        (async () => {
            try {
                const THREE = await import("three");
                if (cancelled) return;

                const w = container.clientWidth;
                const h = container.clientHeight;
                if (w === 0 || h === 0) return;

                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
                camera.position.z = 4.2;

                const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
                renderer.setSize(w, h);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                container.appendChild(renderer.domElement);

                const accentColor = 0x818cf8;
                const cyanColor = 0x06b6d4;

                // Wireframe sphere
                const sphere = new THREE.Mesh(
                    new THREE.SphereGeometry(1.5, 36, 36),
                    new THREE.MeshBasicMaterial({
                        color: 0x3b82f6,
                        wireframe: true,
                        transparent: true,
                        opacity: 0.12,
                    }),
                );
                scene.add(sphere);

                // 200 surface points
                const pts: number[] = [];
                const pointVecs: Vector3[] = [];
                for (let i = 0; i < 200; i++) {
                    const phi = Math.acos(2 * Math.random() - 1);
                    const theta = Math.random() * Math.PI * 2;
                    const r = 1.52;
                    const x = r * Math.sin(phi) * Math.cos(theta);
                    const y = r * Math.sin(phi) * Math.sin(theta);
                    const z = r * Math.cos(phi);
                    pts.push(x, y, z);
                    pointVecs.push(new THREE.Vector3(x, y, z));
                }
                const pGeo = new THREE.BufferGeometry();
                pGeo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
                const points = new THREE.Points(
                    pGeo,
                    new THREE.PointsMaterial({ color: 0x60a5fa, size: 0.025, transparent: true, opacity: 0.7 }),
                );
                scene.add(points);

                // 2 orbital rings
                const makeRing = (inner: number, outer: number, color: number, opacity: number) =>
                    new THREE.Mesh(
                        new THREE.RingGeometry(inner, outer, 80),
                        new THREE.MeshBasicMaterial({ color, transparent: true, opacity, side: THREE.DoubleSide }),
                    );

                const ring1 = makeRing(1.85, 1.87, accentColor, 0.18);
                ring1.rotation.x = Math.PI / 3;
                scene.add(ring1);

                const ring2 = makeRing(2.15, 2.17, cyanColor, 0.12);
                ring2.rotation.x = -Math.PI / 4;
                ring2.rotation.z = Math.PI / 6;
                scene.add(ring2);

                // QuadraticBezierCurve3 arcs
                for (let i = 0; i < 10; i++) {
                    const a = pointVecs[Math.floor(Math.random() * pointVecs.length)];
                    const b = pointVecs[Math.floor(Math.random() * pointVecs.length)];
                    if (a.distanceTo(b) < 0.5) continue;

                    const mid = new THREE.Vector3()
                        .addVectors(a, b)
                        .multiplyScalar(0.5)
                        .normalize()
                        .multiplyScalar(1.52 * 1.4);

                    const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
                    const cGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(40));
                    scene.add(
                        new THREE.Line(
                            cGeo,
                            new THREE.LineBasicMaterial({ color: accentColor, transparent: true, opacity: 0.2 }),
                        ),
                    );
                }

                let rafId: number;
                let visible = true;

                const observer = new IntersectionObserver(
                    ([entry]) => { visible = entry.isIntersecting; },
                    { threshold: 0.05 },
                );
                observer.observe(container);

                function animate() {
                    if (visible) {
                        sphere.rotation.y += 0.002;
                        points.rotation.y += 0.002;
                        ring1.rotation.z += 0.0015;
                        ring2.rotation.z -= 0.001;
                        renderer.render(scene, camera);
                    }
                    rafId = requestAnimationFrame(animate);
                }

                rafId = requestAnimationFrame(animate);

                const onResize = () => {
                    const nw = container.clientWidth;
                    const nh = container.clientHeight;
                    if (nw === 0 || nh === 0) return;
                    camera.aspect = nw / nh;
                    camera.updateProjectionMatrix();
                    renderer.setSize(nw, nh);
                };
                window.addEventListener("resize", onResize);

                cleanup = () => {
                    cancelAnimationFrame(rafId);
                    observer.disconnect();
                    window.removeEventListener("resize", onResize);
                    renderer.dispose();
                    if (container.contains(renderer.domElement)) {
                        container.removeChild(renderer.domElement);
                    }
                };
            } catch {
                // Three.js load failed — fail silently
            }
        })();

        return () => {
            cancelled = true;
            cleanup?.();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`globe-container ${className}`}
            aria-hidden="true"
        />
    );
}
