"use client";

import { useRef, type ReactNode } from "react";

export default function CardTilt({
    children,
    className = "",
    intensity = 8,
}: {
    children: ReactNode;
    className?: string;
    intensity?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const onMove = (e: React.MouseEvent) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        el.style.transform = `perspective(800px) rotateX(${(0.5 - y) * intensity}deg) rotateY(${(x - 0.5) * intensity}deg)`;
        el.style.setProperty("--spot-x", `${x * 100}%`);
        el.style.setProperty("--spot-y", `${y * 100}%`);
    };

    const onLeave = () => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
    };

    return (
        <div
            ref={ref}
            className={`card-tilt ${className}`}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
        >
            <div className="card-tilt-spotlight" />
            {children}
        </div>
    );
}
