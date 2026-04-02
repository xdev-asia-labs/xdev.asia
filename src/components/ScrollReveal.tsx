"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    duration?: number;
    once?: boolean;
}

/**
 * Spring-like easing: cubic-bezier(0.16, 1, 0.3, 1)
 * Feels like natural deceleration — fast start, gentle settle.
 * Distance kept small (16px) for subtlety.
 */
export default function ScrollReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
    distance = 16,
    duration = 700,
    once = true,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Set initial hidden state
        el.style.opacity = "0";
        el.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

        const translateMap = {
            up: `translateY(${distance}px)`,
            down: `translateY(-${distance}px)`,
            left: `translateX(${distance}px)`,
            right: `translateX(-${distance}px)`,
            none: "none",
        };
        el.style.transform = translateMap[direction];

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = "1";
                    el.style.transform = "none";
                    if (once) observer.unobserve(el);
                } else if (!once) {
                    el.style.opacity = "0";
                    el.style.transform = translateMap[direction];
                }
            },
            { threshold: 0.08, rootMargin: "0px 0px -60px 0px" },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay, direction, distance, duration, once]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}

export function ScrollRevealGroup({
    children,
    className = "",
    stagger = 80,
    direction = "up" as ScrollRevealProps["direction"],
    distance = 16,
}: {
    children: ReactNode[];
    className?: string;
    stagger?: number;
    direction?: ScrollRevealProps["direction"];
    distance?: number;
}) {
    return (
        <div className={className}>
            {children.map((child, i) => (
                <ScrollReveal key={i} delay={i * stagger} direction={direction} distance={distance}>
                    {child}
                </ScrollReveal>
            ))}
        </div>
    );
}
