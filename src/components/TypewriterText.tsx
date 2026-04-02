"use client";

import { useEffect, useState } from "react";

export default function TypewriterText({
    texts,
    speed = 70,
    deleteSpeed = 40,
    pause = 2200,
    className = "",
}: {
    texts: string[];
    speed?: number;
    deleteSpeed?: number;
    pause?: number;
    className?: string;
}) {
    const [display, setDisplay] = useState("");
    const [cursorOn, setCursorOn] = useState(true);

    useEffect(() => {
        let idx = 0;
        let charIdx = 0;
        let isDeleting = false;
        let timer: ReturnType<typeof setTimeout>;

        function tick() {
            const current = texts[idx];

            if (!isDeleting) {
                charIdx++;
                setDisplay(current.slice(0, charIdx));
                if (charIdx >= current.length) {
                    isDeleting = true;
                    timer = setTimeout(tick, pause);
                    return;
                }
            } else {
                charIdx--;
                setDisplay(current.slice(0, charIdx));
                if (charIdx <= 0) {
                    isDeleting = false;
                    idx = (idx + 1) % texts.length;
                }
            }

            timer = setTimeout(tick, isDeleting ? deleteSpeed : speed);
        }

        timer = setTimeout(tick, 800);
        const cursorBlink = setInterval(() => setCursorOn((v) => !v), 530);

        return () => {
            clearTimeout(timer);
            clearInterval(cursorBlink);
        };
    }, [texts, speed, deleteSpeed, pause]);

    return (
        <span className={`typewriter ${className}`}>
            {display}
            <span className={`typewriter-caret ${cursorOn ? "" : "invisible"}`}>|</span>
        </span>
    );
}
