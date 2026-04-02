"use client";

import { useEffect, useRef } from "react";

export default function ParticleNetwork({
    count = 60,
    className = "",
}: {
    count?: number;
    className?: string;
}) {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w: number, h: number;
        let mx = -999, my = -999;
        let rafId: number;

        interface P {
            x: number; y: number;
            vx: number; vy: number;
            size: number;
            brightness: number; // 0–1, controls glow
            pulseSpeed: number;
            pulseOffset: number;
        }
        let particles: P[] = [];

        const connectDist = 160;
        const mouseAttract = 180;

        function resize() {
            const dpr = Math.min(window.devicePixelRatio, 2);
            const rect = canvas!.getBoundingClientRect();
            w = rect.width;
            h = rect.height;
            canvas!.width = w * dpr;
            canvas!.height = h * dpr;
            ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        function init() {
            particles = [];
            for (let i = 0; i < count; i++) {
                const isBright = Math.random() < 0.15; // 15% are "star" nodes
                particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    size: isBright ? 2 + Math.random() * 1.5 : 0.8 + Math.random() * 1.2,
                    brightness: isBright ? 0.85 + Math.random() * 0.15 : 0.3 + Math.random() * 0.35,
                    pulseSpeed: 0.5 + Math.random() * 1.5,
                    pulseOffset: Math.random() * Math.PI * 2,
                });
            }
        }

        function draw(time: number) {
            ctx!.clearRect(0, 0, w, h);
            const t = time * 0.001;

            // Draw connection lines first (behind dots)
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                for (let j = i + 1; j < particles.length; j++) {
                    const q = particles[j];
                    const dx = p.x - q.x, dy = p.y - q.y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < connectDist) {
                        const alpha = 0.12 * (1 - d / connectDist);
                        ctx!.beginPath();
                        ctx!.moveTo(p.x, p.y);
                        ctx!.lineTo(q.x, q.y);
                        ctx!.strokeStyle = `rgba(160,190,255,${alpha})`;
                        ctx!.lineWidth = 0.5;
                        ctx!.stroke();
                    }
                }
            }

            // Mouse-nearby connections — brighter lines near cursor
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                const dxm = p.x - mx, dym = p.y - my;
                const dm = Math.sqrt(dxm * dxm + dym * dym);
                if (dm < mouseAttract) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const q = particles[j];
                        const dxm2 = q.x - mx, dym2 = q.y - my;
                        const dm2 = Math.sqrt(dxm2 * dxm2 + dym2 * dym2);
                        if (dm2 < mouseAttract) {
                            const dx = p.x - q.x, dy = p.y - q.y;
                            const d = Math.sqrt(dx * dx + dy * dy);
                            if (d < connectDist * 1.3 && d > connectDist) {
                                const alpha = 0.08 * (1 - d / (connectDist * 1.3));
                                ctx!.beginPath();
                                ctx!.moveTo(p.x, p.y);
                                ctx!.lineTo(q.x, q.y);
                                ctx!.strokeStyle = `rgba(130,170,255,${alpha})`;
                                ctx!.lineWidth = 0.4;
                                ctx!.stroke();
                            }
                        }
                    }
                }
            }

            // Update & draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Gentle mouse attraction
                const dx = mx - p.x, dy = my - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouseAttract && dist > 0) {
                    const f = (mouseAttract - dist) / mouseAttract * 0.004;
                    p.vx += (dx / dist) * f;
                    p.vy += (dy / dist) * f;
                }

                p.vx *= 0.997;
                p.vy *= 0.997;
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < -20) p.x = w + 20;
                if (p.x > w + 20) p.x = -20;
                if (p.y < -20) p.y = h + 20;
                if (p.y > h + 20) p.y = -20;

                // Pulsing brightness
                const pulse = 0.7 + 0.3 * Math.sin(t * p.pulseSpeed + p.pulseOffset);
                const alpha = p.brightness * pulse;

                // Glow layer for bright particles
                if (p.brightness > 0.6) {
                    const glow = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
                    glow.addColorStop(0, `rgba(160,200,255,${alpha * 0.25})`);
                    glow.addColorStop(1, `rgba(160,200,255,0)`);
                    ctx!.beginPath();
                    ctx!.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
                    ctx!.fillStyle = glow;
                    ctx!.fill();
                }

                // Core dot
                ctx!.beginPath();
                ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx!.fillStyle = `rgba(180,210,255,${alpha})`;
                ctx!.fill();
            }

            rafId = requestAnimationFrame(draw);
        }

        const onMove = (e: MouseEvent) => {
            const rect = canvas!.getBoundingClientRect();
            mx = e.clientX - rect.left;
            my = e.clientY - rect.top;
        };

        resize();
        init();
        rafId = requestAnimationFrame(draw);
        window.addEventListener("resize", () => { resize(); init(); });
        document.addEventListener("mousemove", onMove, { passive: true });

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("resize", () => { resize(); init(); });
            document.removeEventListener("mousemove", onMove);
        };
    }, [count]);

    return (
        <canvas
            ref={ref}
            className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
            style={{ zIndex: 1 }}
        />
    );
}
