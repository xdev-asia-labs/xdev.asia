"use client";

import { useState, useCallback, useRef, useEffect } from "react";

interface TextToSpeechProps {
    html: string;
}

export default function TextToSpeech({ html }: TextToSpeechProps) {
    const [playing, setPlaying] = useState(false);
    const [paused, setPaused] = useState(false);
    const [supported, setSupported] = useState(true);
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

    useEffect(() => {
        setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    }, []);

    const getPlainText = useCallback(() => {
        const div = document.createElement("div");
        div.innerHTML = html;
        // Remove code blocks for cleaner reading
        div.querySelectorAll("pre, code, .mermaid-diagram").forEach((el) => el.remove());
        return div.textContent || div.innerText || "";
    }, [html]);

    const handlePlay = useCallback(() => {
        if (!supported) return;

        if (paused) {
            speechSynthesis.resume();
            setPaused(false);
            return;
        }

        if (playing) {
            speechSynthesis.pause();
            setPaused(true);
            return;
        }

        speechSynthesis.cancel();

        const text = getPlainText();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "vi-VN";
        utterance.rate = 1;
        utterance.pitch = 1;

        // Try to find a Vietnamese voice
        const voices = speechSynthesis.getVoices();
        const viVoice = voices.find((v) => v.lang.startsWith("vi"));
        if (viVoice) utterance.voice = viVoice;

        utterance.onend = () => {
            setPlaying(false);
            setPaused(false);
        };

        utterance.onerror = () => {
            setPlaying(false);
            setPaused(false);
        };

        utteranceRef.current = utterance;
        speechSynthesis.speak(utterance);
        setPlaying(true);
    }, [playing, paused, supported, getPlainText]);

    const handleStop = useCallback(() => {
        speechSynthesis.cancel();
        setPlaying(false);
        setPaused(false);
    }, []);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            speechSynthesis.cancel();
        };
    }, []);

    if (!supported) return null;

    return (
        <div className="inline-flex items-center gap-1">
            <button
                onClick={handlePlay}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${playing && !paused
                        ? "bg-brand-50 text-brand-600 border border-brand-200"
                        : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 border border-transparent"
                    }`}
                title={playing ? (paused ? "Tiếp tục đọc" : "Tạm dừng") : "Đọc bài viết"}
            >
                {playing && !paused ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="6" y="4" width="4" height="16" />
                        <rect x="14" y="4" width="4" height="16" />
                    </svg>
                ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M15.54 8.46a5 5 0 010 7.07" />
                        <path d="M19.07 4.93a10 10 0 010 14.14" />
                    </svg>
                )}
                {playing ? (paused ? "Tiếp tục" : "Đang đọc") : "Đọc bài"}
            </button>

            {playing && (
                <button
                    onClick={handleStop}
                    className="inline-flex items-center p-1.5 rounded-lg text-zinc-400 hover:text-red-500 hover:bg-red-50 transition-all"
                    title="Dừng đọc"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="6" width="12" height="12" rx="1" />
                    </svg>
                </button>
            )}
        </div>
    );
}
