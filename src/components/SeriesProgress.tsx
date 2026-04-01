"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "xdev-series-progress";

interface ProgressData {
    [seriesSlug: string]: string[]; // array of completed lesson slugs
}

function getProgress(): ProgressData {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch {
        return {};
    }
}

function saveProgress(data: ProgressData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useSeriesProgress(seriesSlug: string) {
    const [completed, setCompleted] = useState<string[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const data = getProgress();
        setCompleted(data[seriesSlug] || []);
    }, [seriesSlug]);

    const toggleLesson = (lessonSlug: string) => {
        const data = getProgress();
        const current = data[seriesSlug] || [];
        const updated = current.includes(lessonSlug)
            ? current.filter((s) => s !== lessonSlug)
            : [...current, lessonSlug];
        data[seriesSlug] = updated;
        saveProgress(data);
        setCompleted(updated);
    };

    const isCompleted = (lessonSlug: string) => completed.includes(lessonSlug);

    return { completed, toggleLesson, isCompleted, mounted };
}

export function SeriesProgressBar({ seriesSlug, totalLessons }: { seriesSlug: string; totalLessons: number }) {
    const { completed, mounted } = useSeriesProgress(seriesSlug);

    if (!mounted || totalLessons === 0) return null;

    const percent = Math.round((completed.length / totalLessons) * 100);

    if (completed.length === 0) return null;

    return (
        <div className="flex items-center gap-3">
            <div className="flex-1 h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600 transition-all duration-500"
                    style={{ width: `${percent}%` }}
                />
            </div>
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 shrink-0">
                {completed.length}/{totalLessons} ({percent}%)
            </span>
        </div>
    );
}

export function LessonCheckbox({ seriesSlug, lessonSlug }: { seriesSlug: string; lessonSlug: string }) {
    const { isCompleted, toggleLesson, mounted } = useSeriesProgress(seriesSlug);

    if (!mounted) return null;

    const done = isCompleted(lessonSlug);

    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleLesson(lessonSlug);
            }}
            className={`w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold transition-all duration-200 ${
                done
                    ? "bg-emerald-500 text-white shadow-sm"
                    : "border border-zinc-200 dark:border-zinc-700 text-zinc-400 hover:border-emerald-400 hover:text-emerald-500"
            }`}
            title={done ? "Đánh dấu chưa hoàn thành" : "Đánh dấu đã hoàn thành"}
            aria-label={done ? "Đánh dấu chưa hoàn thành" : "Đánh dấu đã hoàn thành"}
        >
            {done && (
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            )}
        </button>
    );
}
