"use client";

import { useEffect, useState } from "react";

export default function ReadingProgressBar() {
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let rafId: number;
        let ticking = false;

        function update() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(Math.min(pct, 100));
            setVisible(scrollTop > 100);
            ticking = false;
        }

        function onScroll() {
            if (!ticking) {
                rafId = requestAnimationFrame(update);
                ticking = true;
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div
            className="reading-progress-bar"
            style={{
                opacity: visible ? 1 : 0,
                transform: `scaleX(${progress / 100})`,
            }}
        />
    );
}
