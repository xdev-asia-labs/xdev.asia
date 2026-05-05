"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrowRight, IconBook } from "@/components/Icons";
import { useAuth } from "@/components/AuthProvider";
import {
    ITEM_TYPE_BADGE,
    ITEM_TYPE_LABEL,
    THEME,
    type Roadmap,
    type RoadmapItem,
    type RoadmapItemType,
    type RoadmapQuizQuestion,
} from "@/lib/roadmap-shared";
import { useRoadmapProgress } from "@/lib/useRoadmapProgress";

const LEVEL_LABEL: Record<string, string> = {
    basic: "Cơ bản",
    intermediate: "Trung cấp",
    advanced: "Nâng cao",
};

const LEVEL_BADGE: Record<string, string> = {
    basic: "bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800",
    intermediate: "bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800",
    advanced: "bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800",
};

const TRACK_LABEL: Record<string, string> = {
    beginner: "Beginner",
    transitioner: "Transitioner",
};

// ---- Item Detail Drawer ----

interface DrawerProps {
    item: RoadmapItem;
    nodeKey: string;
    done: boolean;
    onClose: () => void;
    onMarkComplete: (key: string) => void;
}

function ItemDrawer({ item, nodeKey, done, onClose, onMarkComplete }: DrawerProps) {
    const [quizMode, setQuizMode] = useState(false);
    const [selected, setSelected] = useState<Record<number, number>>({});
    const [submitted, setSubmitted] = useState(false);

    const hasQuiz = !!item.quiz?.length;
    const questions: RoadmapQuizQuestion[] = item.quiz ?? [];

    const score = submitted
        ? questions.filter((q, i) => selected[i] === q.answer).length
        : 0;
    const passed = submitted && questions.length > 0 && score >= Math.ceil(questions.length * 0.6);
    const canComplete = !hasQuiz || passed || done;

    function handleSubmit() {
        if (Object.keys(selected).length < questions.length) return;
        setSubmitted(true);
    }

    function resetQuiz() {
        setSelected({});
        setSubmitted(false);
    }

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden
            />
            {/* Drawer */}
            <aside className="fixed right-0 top-0 z-50 h-full w-full max-w-xl bg-white dark:bg-zinc-900 shadow-2xl flex flex-col overflow-hidden">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 p-5 border-b border-zinc-200 dark:border-zinc-800 shrink-0">
                    <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${ITEM_TYPE_BADGE[item.type as RoadmapItemType]}`}>
                                {ITEM_TYPE_LABEL[item.type as RoadmapItemType]}
                            </span>
                            {item.level && (
                                <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded border ${
                                    item.level === "basic" ? "bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800" :
                                    item.level === "intermediate" ? "bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800" :
                                    "bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800"
                                }`}>
                                    {item.level === "basic" ? "Cơ bản" : item.level === "intermediate" ? "Trung cấp" : "Nâng cao"}
                                </span>
                            )}
                            {item.estimatedTime && (
                                <span className="text-[10px] text-zinc-500 dark:text-zinc-400">⏱ {item.estimatedTime}</span>
                            )}
                        </div>
                        <h2 className="mt-1.5 text-lg font-black tracking-tight text-zinc-900 dark:text-zinc-100">
                            {item.name}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="shrink-0 mt-0.5 p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        aria-label="Đóng"
                    >
                        <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-5 space-y-5">
                    {!quizMode ? (
                        <>
                            {/* Description */}
                            <section>
                                <h3 className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-2">Tổng quan</h3>
                                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{item.detail}</p>
                            </section>

                            {/* Learning steps */}
                            {!!item.learningSteps?.length && (
                                <section>
                                    <h3 className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-2">Các bước học</h3>
                                    <ol className="space-y-2">
                                        {item.learningSteps.map((step, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                                                <span className="shrink-0 w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-[11px] font-bold flex items-center justify-center">
                                                    {i + 1}
                                                </span>
                                                <span className="leading-relaxed pt-0.5">{step}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </section>
                            )}

                            {/* Resources */}
                            {(!!item.resourceLinks?.length || !!item.resources?.length) && (
                                <section>
                                    <h3 className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-2">Tài nguyên học</h3>
                                    {!!item.resourceLinks?.length ? (
                                        <ul className="space-y-2">
                                            {item.resourceLinks.map((r) => {
                                                const typeIcon = r.type === "video" ? "▶" : r.type === "course" ? "🎓" : r.type === "tool" ? "🔧" : r.type === "doc" ? "📄" : "📖";
                                                const typeBadge = r.type === "video"
                                                    ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800"
                                                    : r.type === "course"
                                                    ? "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-800"
                                                    : r.type === "tool"
                                                    ? "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800"
                                                    : r.type === "doc"
                                                    ? "bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800"
                                                    : "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800";
                                                return (
                                                    <li key={r.url}>
                                                        <a
                                                            href={r.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2.5 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-brand-400 dark:hover:border-brand-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group/link"
                                                        >
                                                            <span className={`shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded border ${typeBadge}`}>
                                                                {typeIcon} {r.type ?? "article"}
                                                            </span>
                                                            <span className="text-sm text-zinc-700 dark:text-zinc-300 group-hover/link:text-brand-600 dark:group-hover/link:text-brand-400 transition-colors leading-snug flex-1">
                                                                {r.label}
                                                            </span>
                                                            <svg className="shrink-0 text-zinc-400 group-hover/link:text-brand-500 transition-colors" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                                                        </a>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    ) : (
                                        <ul className="space-y-1">
                                            {item.resources!.map((r) => (
                                                <li key={r} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                                                    {r}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </section>
                            )}

                            {/* Recommended for */}
                            {!!item.recommendedFor?.length && (
                                <section>
                                    <h3 className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-2">Phù hợp với</h3>
                                    <div className="flex flex-wrap gap-1.5">
                                        {item.recommendedFor.map((a) => (
                                            <span key={a} className="text-[11px] font-semibold px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/20">
                                                {TRACK_LABEL[a] || a}
                                            </span>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {hasQuiz && !done && (
                                <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-4">
                                    <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">📝 Kiểm tra kiến thức</p>
                                    <p className="mt-1 text-xs text-amber-700 dark:text-amber-300">
                                        Bài này có {questions.length} câu hỏi. Cần trả lời đúng ≥ 60% để đánh dấu hoàn thành.
                                    </p>
                                </div>
                            )}
                        </>
                    ) : (
                        /* Quiz mode */
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Kiểm tra: {item.name}</h3>
                                {!submitted && (
                                    <span className="text-xs text-zinc-500">{Object.keys(selected).length}/{questions.length} đã trả lời</span>
                                )}
                            </div>

                            {submitted && (
                                <div className={`rounded-xl p-4 text-center ${passed ? "bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800" : "bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800"}`}>
                                    <p className={`text-2xl font-black ${passed ? "text-emerald-700 dark:text-emerald-300" : "text-rose-700 dark:text-rose-300"}`}>
                                        {score}/{questions.length}
                                    </p>
                                    <p className={`mt-1 text-sm font-semibold ${passed ? "text-emerald-700 dark:text-emerald-300" : "text-rose-700 dark:text-rose-300"}`}>
                                        {passed ? "✅ Đạt! Bạn có thể đánh dấu hoàn thành." : "❌ Chưa đạt. Ôn lại và thử lại nhé!"}
                                    </p>
                                </div>
                            )}

                            {questions.map((q, qi) => {
                                const userAnswer = selected[qi];
                                const isAnswered = userAnswer !== undefined;
                                const isCorrect = isAnswered && userAnswer === q.answer;
                                return (
                                    <div key={qi} className="space-y-2.5">
                                        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                            <span className="text-zinc-400 mr-1">Q{qi + 1}.</span> {q.q}
                                        </p>
                                        <div className="space-y-1.5">
                                            {q.options.map((opt, oi) => {
                                                let cls = "rounded-lg border p-2.5 text-sm cursor-pointer transition-colors ";
                                                if (!submitted) {
                                                    cls += selected[qi] === oi
                                                        ? "border-brand-500 bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300"
                                                        : "border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-brand-300 hover:bg-brand-50/50 dark:hover:bg-brand-900/10";
                                                } else {
                                                    if (oi === q.answer) cls += "border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-200 font-semibold";
                                                    else if (selected[qi] === oi && oi !== q.answer) cls += "border-rose-400 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300";
                                                    else cls += "border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-500 opacity-60";
                                                }
                                                return (
                                                    <button
                                                        key={oi}
                                                        className={`w-full text-left ${cls}`}
                                                        disabled={submitted}
                                                        onClick={() => !submitted && setSelected((s) => ({ ...s, [qi]: oi }))}
                                                    >
                                                        <span className="font-bold mr-2 text-[11px]">{String.fromCharCode(65 + oi)}.</span>
                                                        {opt}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                        {submitted && !isCorrect && q.explanation && (
                                            <div className="rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-2.5">
                                                <p className="text-xs text-amber-800 dark:text-amber-200"><span className="font-bold">💡 Giải thích:</span> {q.explanation}</p>
                                            </div>
                                        )}
                                        {submitted && isCorrect && q.explanation && (
                                            <div className="rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 p-2.5">
                                                <p className="text-xs text-emerald-800 dark:text-emerald-200"><span className="font-bold">✅ Đúng!</span> {q.explanation}</p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="shrink-0 border-t border-zinc-200 dark:border-zinc-800 p-4 flex flex-wrap gap-2 justify-between items-center bg-white dark:bg-zinc-900">
                    {!quizMode ? (
                        <>
                            {hasQuiz && !done ? (
                                <button
                                    onClick={() => setQuizMode(true)}
                                    className="btn-primary flex-1"
                                >
                                    📝 Bắt đầu kiểm tra
                                </button>
                            ) : (
                                <button
                                    onClick={() => { void onMarkComplete(nodeKey); onClose(); }}
                                    className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                                        done
                                            ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
                                            : "bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm"
                                    }`}
                                >
                                    {done ? "✓ Đã hoàn thành — Bỏ đánh dấu" : "✅ Đánh dấu hoàn thành"}
                                </button>
                            )}
                            <button onClick={onClose} className="btn-ghost px-3">Đóng</button>
                        </>
                    ) : !submitted ? (
                        <>
                            <button onClick={() => setQuizMode(false)} className="btn-ghost">← Quay lại</button>
                            <button
                                onClick={handleSubmit}
                                disabled={Object.keys(selected).length < questions.length}
                                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Nộp bài
                            </button>
                        </>
                    ) : (
                        <>
                            {!passed ? (
                                <>
                                    <button onClick={resetQuiz} className="btn-ghost flex-1">🔄 Thử lại</button>
                                    <button onClick={() => { setQuizMode(false); resetQuiz(); }} className="btn-ghost">Ôn lại</button>
                                </>
                            ) : (
                                <>
                                    <button onClick={resetQuiz} className="btn-ghost">Làm lại</button>
                                    <button
                                        onClick={() => { void onMarkComplete(nodeKey); onClose(); }}
                                        className="btn-primary flex-1"
                                    >
                                        ✅ Đánh dấu hoàn thành
                                    </button>
                                </>
                            )}
                        </>
                    )}
                </div>
            </aside>
        </>
    );
}

export default function RoadmapDetailClient({ roadmap }: { roadmap: Roadmap }) {
    const { user, loading: authLoading, openLoginModal } = useAuth();
    const {
        loading: progressLoading,
        completedCount,
        isCompleted,
        toggleNode,
    } = useRoadmapProgress(roadmap.slug);

    const [activeItem, setActiveItem] = useState<{ item: RoadmapItem; key: string } | null>(null);

    const totalNodes = roadmap.phases.reduce((acc, phase) => acc + phase.items.length, 0);
    const percent = totalNodes > 0 ? Math.round((completedCount / totalNodes) * 100) : 0;

    if (authLoading) {
        return (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 text-center">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Đang tải tài khoản...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="roadmap-detail-bg min-h-screen">
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 md:p-10 text-center">
                        <p className="text-5xl mb-4">{roadmap.icon}</p>
                        <h1 className="text-2xl md:text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
                            {roadmap.title}
                        </h1>
                        <p className="mt-3 text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                            Đăng nhập để xem chi tiết roadmap và lưu tiến độ học tập của bạn trên mọi thiết bị.
                        </p>

                        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                            <button
                                onClick={openLoginModal}
                                className="btn-primary"
                            >
                                Đăng nhập để tiếp tục
                            </button>
                            <Link href="/roadmap/" className="btn-ghost">
                                Quay lại danh sách roadmap
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="roadmap-detail-bg min-h-screen">
            {/* Item Detail Drawer */}
            {activeItem && (
                <ItemDrawer
                    item={activeItem.item}
                    nodeKey={activeItem.key}
                    done={isCompleted(activeItem.key)}
                    onClose={() => setActiveItem(null)}
                    onMarkComplete={(key) => toggleNode(key)}
                />
            )}
            <section className="border-b border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 backdrop-blur">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
                    <Link
                        href="/roadmap/"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                    >
                        <IconArrowRight size={12} className="rotate-180" /> Back to all roadmaps
                    </Link>

                    <div className="mt-4 flex items-start gap-4">
                        <span className="text-5xl leading-none">{roadmap.icon}</span>
                        <div className="min-w-0">
                            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
                                {roadmap.title}
                            </h1>
                            <p className="mt-2 text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
                                {roadmap.description}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {roadmap.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-medium px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <aside className="lg:col-span-4 xl:col-span-3">
                    <div className="lg:sticky lg:top-20 space-y-4">
                        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5">
                            <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Roadmap Summary</h2>
                            <div className="mt-3 space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                                <p>🗂 {roadmap.stats.phases} phases</p>
                                <p>⏱ {roadmap.stats.duration}</p>
                                <p>🎯 {roadmap.stats.level}</p>
                                <p>🏅 {roadmap.stats.certs}</p>
                            </div>
                        </div>

                        {!!roadmap.tracks?.length && (
                            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5">
                                <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Lộ trình theo nền tảng</h2>
                                <div className="mt-3 space-y-3">
                                    {roadmap.tracks.map((track) => (
                                        <article key={track.id} className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 bg-zinc-50 dark:bg-zinc-950">
                                            <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200">{track.label}</p>
                                            <p className="mt-1 text-[11px] text-zinc-600 dark:text-zinc-400">{track.target}</p>
                                            <p className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-500">{track.weeklyHours} • Phase trọng tâm: {track.focusPhases.join(", ")}</p>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5">
                            <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Tiến độ học</h2>
                            <div className="mt-3">
                                <div className="h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                                    <div
                                        className="h-full rounded-full bg-linear-to-r from-brand-400 to-brand-600 transition-all duration-500"
                                        style={{ width: `${percent}%` }}
                                    />
                                </div>
                                <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
                                    {progressLoading ? "Đang tải..." : `${completedCount}/${totalNodes} nodes (${percent}%)`}
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5">
                            <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">On this page</h2>
                            <ol className="mt-3 space-y-1.5">
                                {roadmap.phases.map((phase) => (
                                    <li key={phase.phase}>
                                        <a
                                            href={`#phase-${phase.phase}`}
                                            className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                                        >
                                            {phase.phase}. {phase.title}
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5">
                            <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Start Learning</h2>
                            <div className="mt-3 flex flex-col gap-2">
                                <Link href="/series/" className="btn-primary justify-center">
                                    <IconBook size={14} /> Series
                                </Link>
                                <Link href="/blog/" className="btn-ghost justify-center">
                                    Guides
                                </Link>
                            </div>
                        </div>
                    </div>
                </aside>

                <main className="lg:col-span-8 xl:col-span-9 space-y-6">
                    <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
                        <h2 className="text-xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                            What is {roadmap.title}?
                        </h2>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {roadmap.intro || roadmap.description}
                        </p>
                        {roadmap.why_now && (
                            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {roadmap.why_now}
                            </p>
                        )}
                    </section>

                    <section className="roadmap-canvas rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 md:p-6">
                        <div className="mb-5 flex items-center justify-between">
                            <h2 className="text-xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                                Step by step guide
                            </h2>
                            <span className="text-xs text-zinc-500 dark:text-zinc-400">
                                {roadmap.stats.phases} phases
                            </span>
                        </div>

                        <div className="space-y-5">
                            {roadmap.phases.map((phase, phaseIndex) => {
                                const t = THEME[phase.theme];
                                return (
                                    <div key={phase.phase} id={`phase-${phase.phase}`} className="roadmap-phase-block">
                                        {phaseIndex < roadmap.phases.length - 1 && <div className="roadmap-phase-connector" aria-hidden />}

                                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border ${t.borderColor} ${t.bgColor}`}>
                                            <span className={`text-xs font-black ${t.color}`}>PHASE {phase.phase}</span>
                                            <span className="text-xs text-zinc-500 dark:text-zinc-400">{phase.duration}</span>
                                        </div>

                                        <h3 className="mt-2 text-base md:text-lg font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
                                            {phase.title}
                                        </h3>
                                        <p className="mt-1 text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
                                            {phase.subtitle}
                                        </p>

                                        {!!phase.goals?.length && (
                                            <div className="mt-3">
                                                <p className="text-[11px] font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Mục tiêu phase</p>
                                                <div className="mt-1.5 flex flex-wrap gap-1.5">
                                                    {phase.goals.map((goal) => (
                                                        <span
                                                            key={goal}
                                                            className="text-[11px] px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                                                        >
                                                            {goal}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {!!phase.deliverables?.length && (
                                            <div className="mt-2">
                                                <p className="text-[11px] font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Deliverables</p>
                                                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                                    {phase.deliverables.join(" • ")}
                                                </p>
                                            </div>
                                        )}

                                        {!!phase.projects?.length && (
                                            <div className="mt-2">
                                                <p className="text-[11px] font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Practice project</p>
                                                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                                    {phase.projects.join(" • ")}
                                                </p>
                                            </div>
                                        )}

                                        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3">
                                            {phase.items.map((item, itemIndex) => {
                                                const nodeKey = `p${phase.phase}-i${itemIndex}`;
                                                const done = isCompleted(nodeKey);

                                                return (
                                                    <article
                                                        key={`${phase.phase}-${item.name}`}
                                                        className="roadmap-node group border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 rounded-xl p-3 md:p-3.5 cursor-pointer hover:border-brand-400 dark:hover:border-brand-600 hover:shadow-sm transition-all duration-150"
                                                        onClick={() => setActiveItem({ item, key: nodeKey })}
                                                    >
                                                        <div className="flex items-start justify-between gap-2">
                                                            <div className="flex items-start gap-2">
                                                                <button
                                                                    onClick={(e) => { e.stopPropagation(); void toggleNode(nodeKey); }}
                                                                    className={`mt-0.5 w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold transition-all duration-200 ${
                                                                        done
                                                                            ? "bg-emerald-500 text-white shadow-sm"
                                                                            : "border border-zinc-300 dark:border-zinc-700 text-zinc-400 hover:border-emerald-400 hover:text-emerald-500"
                                                                    }`}
                                                                    title={done ? "Đánh dấu chưa hoàn thành" : "Đánh dấu đã hoàn thành"}
                                                                    aria-label={done ? "Đánh dấu chưa hoàn thành" : "Đánh dấu đã hoàn thành"}
                                                                >
                                                                    {done && (
                                                                        <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                                                    )}
                                                                </button>
                                                                <h4 className={`text-sm font-bold leading-snug ${done ? "text-zinc-500 dark:text-zinc-400 line-through" : "text-zinc-900 dark:text-zinc-100"}`}>
                                                                    {item.name}
                                                                </h4>
                                                            </div>
                                                            <span className={`shrink-0 text-[11px] font-bold px-2 py-0.5 rounded-md ${ITEM_TYPE_BADGE[item.type as RoadmapItemType]}`}>
                                                                {ITEM_TYPE_LABEL[item.type as RoadmapItemType]}
                                                            </span>
                                                        </div>

                                                        {!!item.level && (
                                                            <div className="pl-7 mt-1">
                                                                <span className={`inline-flex text-[10px] font-semibold px-1.5 py-0.5 rounded border ${LEVEL_BADGE[item.level]}`}>
                                                                    {LEVEL_LABEL[item.level]}
                                                                </span>
                                                            </div>
                                                        )}

                                                        <p className="mt-1.5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pl-7">
                                                            {item.detail}
                                                        </p>

                                                        {(item.estimatedTime || item.recommendedFor?.length) && (
                                                            <div className="mt-1 pl-7 flex flex-wrap gap-1.5">
                                                                {!!item.estimatedTime && (
                                                                    <span className="inline-flex text-[10px] font-semibold px-1.5 py-0.5 rounded border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
                                                                        {item.estimatedTime}
                                                                    </span>
                                                                )}
                                                                {!!item.recommendedFor?.length && item.recommendedFor.map((audience) => (
                                                                    <span
                                                                        key={`${item.name}-${audience}`}
                                                                        className="inline-flex text-[10px] font-semibold px-1.5 py-0.5 rounded border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/20"
                                                                    >
                                                                        {TRACK_LABEL[audience] || audience}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {!!item.resources?.length && (
                                                            <p className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-500 leading-relaxed pl-7">
                                                                Tài nguyên: {item.resources.join(" • ")}
                                                            </p>
                                                        )}
                                                    </article>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {!!roadmap.faq?.length && (
                        <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
                            <h2 className="text-xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                                Frequently Asked Questions
                            </h2>
                            <div className="mt-4 space-y-3">
                                {roadmap.faq.map((faq) => (
                                    <details key={faq.question} className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50 dark:bg-zinc-950">
                                        <summary className="cursor-pointer text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                            {faq.question}
                                        </summary>
                                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </section>
                    )}
                </main>
            </div>
        </div>
    );
}
