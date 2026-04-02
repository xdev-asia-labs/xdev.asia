"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [progress, setProgress] = useState(0);
    const [done, setDone] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const start = performance.now();
        let rafId: number;

        function tick(now: number) {
            const elapsed = now - start;
            const raw = Math.min(elapsed / 900, 1);
            // easeOutQuart — fast start, gentle finish
            const eased = 1 - Math.pow(1 - raw, 4);
            setProgress(Math.round(eased * 100));

            if (raw < 1) {
                rafId = requestAnimationFrame(tick);
            } else {
                setDone(true);
                setTimeout(() => setHidden(true), 500);
            }
        }

        document.body.style.overflow = "hidden";
        rafId = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(rafId);
            document.body.style.overflow = "";
        };
    }, []);

    useEffect(() => {
        if (hidden) {
            document.body.style.overflow = "";
        }
    }, [hidden]);

    if (hidden) return null;

    return (
        <div className={`loading-screen ${done ? "loading-exit" : ""}`}>
            <div className="loading-inner">
                <div className="loading-logo">
                    x<span>Dev</span>
                </div>
                <div className="loading-bar-track">
                    <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
                </div>
                <div className="loading-pct">{progress}%</div>
            </div>
        </div>
    );
}
