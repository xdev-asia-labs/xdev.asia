"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Mouse-following subtle light — inspired by Linear/Stripe.
 * A soft radial gradient follows the cursor within the container,
 * creating a natural, interactive lighting feel.
 */
export function MouseGlow({ className = "" }: { className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number>(0);
    const posRef = useRef({ x: 0.5, y: 0.5 });
    const targetRef = useRef({ x: 0.5, y: 0.5 });

    useEffect(() => {
        const container = containerRef.current;
        const glow = glowRef.current;
        if (!container || !glow) return;

        function onMove(e: MouseEvent) {
            const rect = container!.getBoundingClientRect();
            targetRef.current = {
                x: (e.clientX - rect.left) / rect.width,
                y: (e.clientY - rect.top) / rect.height,
            };
        }

        // Smooth interpolation loop (lerp) — feels physical, not jumpy
        function animate() {
            const lerp = 0.08;
            posRef.current.x += (targetRef.current.x - posRef.current.x) * lerp;
            posRef.current.y += (targetRef.current.y - posRef.current.y) * lerp;

            if (glow) {
                glow.style.setProperty("--glow-x", `${posRef.current.x * 100}%`);
                glow.style.setProperty("--glow-y", `${posRef.current.y * 100}%`);
            }
            rafRef.current = requestAnimationFrame(animate);
        }

        container.addEventListener("mousemove", onMove);
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            container.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
            <div
                ref={glowRef}
                className="mouse-glow-spot"
                style={{
                    "--glow-x": "50%",
                    "--glow-y": "50%",
                } as React.CSSProperties}
            />
        </div>
    );
}

/**
 * Animated counter — numbers count up when visible.
 * Uses requestAnimationFrame + easeOutExpo for natural deceleration.
 */
export function AnimatedCounter({
    value,
    duration = 1600,
    suffix = "+",
    className = "",
}: {
    value: number;
    duration?: number;
    suffix?: string;
    className?: string;
}) {
    const [display, setDisplay] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    const animate = useCallback(() => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const start = performance.now();

        function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo — fast start, smooth deceleration
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
    }, [value, duration]);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    animate();
                    observer.disconnect();
                }
            },
            { threshold: 0.3 },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [animate]);

    return (
        <span ref={ref} className={`tabular-nums ${className}`}>
            {display}{suffix}
        </span>
    );
}

/**
 * Animated gradient border wrapper (gradient conic border hover)
 */
export function GradientBorderCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`gradient-border-card ${className}`}>
            {children}
        </div>
    );
}
