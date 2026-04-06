"use client";

import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { IconAward, IconClock, IconArrowRight, IconCheckCircle, IconXCircle, IconBrain, IconBook } from "@/components/Icons";
import { useAuth } from "@/components/AuthProvider";
import type { Quiz } from "@/lib/types";

type QuizState = "intro" | "quiz" | "result";

export default function QuizClient({ quiz }: { quiz: Quiz }) {
    const { user, openLoginModal } = useAuth();
    const [state, setState] = useState<QuizState>("intro");
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<(number | null)[]>(Array(quiz.questions.length).fill(null));
    const [startTime, setStartTime] = useState<number>(0);
    const [endTime, setEndTime] = useState<number>(0);
    const [flagged, setFlagged] = useState<Set<number>>(new Set());
    const [remainingSeconds, setRemainingSeconds] = useState(quiz.duration_minutes * 60);
    const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const question = quiz.questions[currentQuestion];
    const selectedAnswer = answers[currentQuestion];
    const totalQuestions = quiz.questions.length;
    const answeredCount = answers.filter((a) => a !== null).length;
    const unansweredCount = totalQuestions - answeredCount;

    const correctCount = answers.reduce<number>((acc, ans, idx) => {
        return acc + (ans === quiz.questions[idx].correct ? 1 : 0);
    }, 0);

    const score = Math.round((correctCount / totalQuestions) * 100);
    const passed = score >= quiz.passing_score;

    // Domain-based analysis
    const domainStats = useMemo(() => {
        if (!quiz.domains || quiz.questions.every((q) => !q.domain)) return null;

        const stats = new Map<string, { total: number; correct: number }>();
        quiz.questions.forEach((q, idx) => {
            const domain = q.domain || "Khác";
            const entry = stats.get(domain) || { total: 0, correct: 0 };
            entry.total++;
            if (answers[idx] === q.correct) entry.correct++;
            stats.set(domain, entry);
        });

        return Array.from(stats.entries())
            .map(([name, { total, correct }]) => {
                const pct = Math.round((correct / total) * 100);
                const domainInfo = quiz.domains?.find((d) => d.name === name);
                return { name, total, correct, pct, lessons: domainInfo?.lessons || [], weight: domainInfo?.weight };
            })
            .sort((a, b) => a.pct - b.pct);
    }, [quiz.domains, quiz.questions, answers]);

    // Countdown timer
    useEffect(() => {
        if (state !== "quiz") return;
        timerRef.current = setInterval(() => {
            setRemainingSeconds((prev) => {
                if (prev <= 1) {
                    // Time's up — auto submit
                    clearInterval(timerRef.current!);
                    setEndTime(Date.now());
                    setState("result");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [state]);

    const startQuiz = useCallback(() => {
        if (!user) { openLoginModal(); return; }
        setState("quiz");
        setStartTime(Date.now());
        setCurrentQuestion(0);
        setAnswers(Array(quiz.questions.length).fill(null));
        setFlagged(new Set());
        setRemainingSeconds(quiz.duration_minutes * 60);
        setShowConfirmSubmit(false);
    }, [quiz.questions.length, quiz.duration_minutes, user, openLoginModal]);

    const selectAnswer = useCallback((optionIndex: number) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = optionIndex;
        setAnswers(newAnswers);
    }, [answers, currentQuestion]);

    const toggleFlag = useCallback(() => {
        setFlagged((prev) => {
            const next = new Set(prev);
            if (next.has(currentQuestion)) next.delete(currentQuestion);
            else next.add(currentQuestion);
            return next;
        });
    }, [currentQuestion]);

    const submitExam = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        setEndTime(Date.now());
        setState("result");
        setShowConfirmSubmit(false);
    }, []);

    const goToQuestion = useCallback((idx: number) => {
        setCurrentQuestion(idx);
    }, []);

    const formatCountdown = (secs: number) => {
        const h = Math.floor(secs / 3600);
        const m = Math.floor((secs % 3600) / 60);
        const s = secs % 60;
        if (h > 0) return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
        return `${m}:${s.toString().padStart(2, "0")}`;
    };

    const formatTime = (ms: number) => {
        const seconds = Math.floor(ms / 1000);
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs.toString().padStart(2, "0")}`;
    };

    const timerWarning = remainingSeconds <= 300; // 5 min warning
    const timerCritical = remainingSeconds <= 60;  // 1 min critical

    // Intro screen
    if (state === "intro") {
        return (
            <div className="min-h-[70vh] flex items-center justify-center">
                <div className="max-w-lg mx-auto px-4 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mx-auto mb-6">
                        <IconAward size={32} className="text-brand-600" />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-3">
                        {quiz.title}
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 mb-6">
                        {quiz.description}
                    </p>

                    {/* Exam rules */}
                    <div className="text-left bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 mb-8">
                        <h3 className="text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-3">Quy tắc thi</h3>
                        <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                            <li className="flex items-start gap-2">
                                <IconClock size={14} className="shrink-0 mt-0.5 text-brand-500" />
                                Thời gian: <strong className="text-zinc-700 dark:text-zinc-300">{quiz.duration_minutes} phút</strong> — hết giờ sẽ tự động nộp bài
                            </li>
                            <li className="flex items-start gap-2">
                                <IconAward size={14} className="shrink-0 mt-0.5 text-brand-500" />
                                Tổng: <strong className="text-zinc-700 dark:text-zinc-300">{totalQuestions} câu hỏi</strong> — cần đạt <strong className="text-zinc-700 dark:text-zinc-300">{quiz.passing_score}%</strong> để Pass
                            </li>
                            <li className="flex items-start gap-2">
                                <IconCheckCircle size={14} className="shrink-0 mt-0.5 text-brand-500" />
                                Có thể đổi đáp án, đánh dấu câu cần xem lại
                            </li>
                            <li className="flex items-start gap-2">
                                <IconBrain size={14} className="shrink-0 mt-0.5 text-brand-500" />
                                Kết quả chỉ hiện sau khi nộp bài
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-3 items-center">
                        <button
                            onClick={startQuiz}
                            className="px-8 py-3 rounded-xl font-semibold text-white bg-linear-to-r from-brand-500 to-indigo-500 shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/40 hover:scale-105 transition-all"
                        >
                            {user ? "Bắt đầu thi" : "Đăng nhập để thi"}
                        </button>
                        <Link href="/luyen-thi/" className="text-sm text-zinc-400 hover:text-brand-600 transition-colors">
                            ← Quay lại danh sách
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Result screen
    if (state === "result") {
        const elapsed = endTime - startTime;
        return (
            <div className="max-w-2xl mx-auto px-4 py-12">
                <div className="text-center mb-10">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${passed ? "bg-emerald-100 dark:bg-emerald-900/30" : "bg-rose-100 dark:bg-rose-900/30"}`}>
                        {passed
                            ? <IconCheckCircle size={40} className="text-emerald-600" />
                            : <IconXCircle size={40} className="text-rose-500" />
                        }
                    </div>
                    <h1 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-2">
                        {passed ? "Chúc mừng! Bạn đã đạt!" : "Chưa đạt — Cố gắng thêm!"}
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400">
                        {quiz.title}
                    </p>
                </div>

                {/* Score card */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 p-4 text-center">
                        <div className={`text-3xl font-extrabold ${passed ? "text-emerald-600" : "text-rose-500"}`}>
                            {score}%
                        </div>
                        <div className="text-xs text-zinc-400 mt-1">Điểm số</div>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 p-4 text-center">
                        <div className="text-3xl font-extrabold text-brand-600">
                            {correctCount}/{totalQuestions}
                        </div>
                        <div className="text-xs text-zinc-400 mt-1">Câu đúng</div>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 p-4 text-center">
                        <div className="text-3xl font-extrabold text-zinc-700 dark:text-zinc-300">
                            {formatTime(elapsed)}
                        </div>
                        <div className="text-xs text-zinc-400 mt-1">Thời gian</div>
                    </div>
                </div>

                {/* AI Domain Evaluation */}
                {domainStats && domainStats.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                            <IconBrain size={20} className="text-brand-500" />
                            Phân tích theo lĩnh vực
                        </h2>

                        {/* Domain bars */}
                        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 p-5 mb-4 space-y-4">
                            {domainStats.map((d) => {
                                const isWeak = d.pct < quiz.passing_score;
                                return (
                                    <div key={d.name}>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 truncate mr-3">
                                                {d.name}
                                                {d.weight && <span className="text-xs text-zinc-400 ml-1">({d.weight}%)</span>}
                                            </span>
                                            <span className={`text-sm font-bold tabular-nums ${isWeak ? "text-rose-500" : "text-emerald-600"}`}>
                                                {d.correct}/{d.total} ({d.pct}%)
                                            </span>
                                        </div>
                                        <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full transition-all duration-700 ${isWeak
                                                    ? "bg-linear-to-r from-rose-400 to-rose-500"
                                                    : "bg-linear-to-r from-emerald-400 to-emerald-500"
                                                    }`}
                                                style={{ width: `${d.pct}%` }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* AI recommendation */}
                        {(() => {
                            const weakDomains = domainStats.filter((d) => d.pct < quiz.passing_score);
                            if (weakDomains.length === 0) {
                                return (
                                    <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/70 dark:bg-emerald-900/10 p-5">
                                        <div className="flex items-start gap-3">
                                            <IconCheckCircle size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
                                                    Xuất sắc! Bạn nắm vững tất cả lĩnh vực.
                                                </p>
                                                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                                    Bạn đã đạt điểm tốt ở mọi domain. Hãy thử thi lại để củng cố kiến thức hoặc chuyển sang đề tiếp theo.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50/70 dark:bg-amber-900/10 p-5">
                                    <div className="flex items-start gap-3 mb-4">
                                        <IconBrain size={20} className="text-amber-600 shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-amber-700 dark:text-amber-400 mb-1">
                                                Bạn cần ôn thêm {weakDomains.length} lĩnh vực
                                            </p>
                                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                                {weakDomains.length === 1
                                                    ? `Lĩnh vực "${weakDomains[0].name}" chưa đạt yêu cầu. Hãy ôn lại các bài học bên dưới rồi thi lại.`
                                                    : `Các lĩnh vực ${weakDomains.map((d) => `"${d.name}"`).join(", ")} chưa đạt yêu cầu. Hãy ôn tập theo gợi ý bên dưới.`
                                                }
                                            </p>
                                        </div>
                                    </div>

                                    {/* Recommended lessons */}
                                    {quiz.series_slug && weakDomains.some((d) => d.lessons.length > 0) && (
                                        <div className="space-y-2 mt-3">
                                            <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-500 flex items-center gap-1.5">
                                                <IconBook size={13} />
                                                Bài học nên ôn lại
                                            </p>
                                            {weakDomains.flatMap((d) =>
                                                d.lessons.map((lesson) => (
                                                    <Link
                                                        key={lesson.slug}
                                                        href={`/lessons/${quiz.series_slug}/${lesson.slug}/`}
                                                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/70 dark:bg-zinc-800/50 border border-amber-100 dark:border-amber-900/30 hover:border-brand-300 hover:bg-brand-50 dark:hover:bg-brand-900/10 transition-all group"
                                                    >
                                                        <IconArrowRight size={12} className="text-amber-400 group-hover:text-brand-500 transition-colors" />
                                                        <span className="text-sm text-zinc-700 dark:text-zinc-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                                            {lesson.title}
                                                        </span>
                                                    </Link>
                                                ))
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })()}
                    </div>
                )}

                {/* Review answers */}
                <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 rounded-full bg-brand-500" />
                    Xem lại đáp án
                </h2>
                <div className="space-y-4 mb-8">
                    {quiz.questions.map((q, idx) => {
                        const userAnswer = answers[idx];
                        const isRight = userAnswer === q.correct;
                        return (
                            <div
                                key={q.id}
                                className={`rounded-xl border p-4 ${isRight
                                    ? "border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-900/10"
                                    : "border-rose-200 dark:border-rose-800 bg-rose-50/50 dark:bg-rose-900/10"
                                    }`}
                            >
                                <div className="flex items-start gap-3 mb-2">
                                    {isRight
                                        ? <IconCheckCircle size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                                        : <IconXCircle size={18} className="text-rose-500 shrink-0 mt-0.5" />
                                    }
                                    <div>
                                        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                            Câu {idx + 1}: {q.question}
                                        </p>
                                        {!isRight && (
                                            <p className="text-xs text-rose-500 mt-1">
                                                Bạn chọn: {userAnswer !== null ? q.options[userAnswer] : "Chưa trả lời"}
                                            </p>
                                        )}
                                        <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                                            Đáp án đúng: {q.options[q.correct]}
                                        </p>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                                            {q.explanation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={startQuiz}
                        className="px-6 py-2.5 rounded-xl font-semibold text-white bg-linear-to-r from-brand-500 to-indigo-500 shadow-md hover:shadow-lg transition-all"
                    >
                        Thi lại
                    </button>
                    {!passed && quiz.series_slug && (
                        <Link
                            href={`/series/luyen-thi/${quiz.series_slug}/`}
                            className="px-6 py-2.5 rounded-xl font-semibold text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
                        >
                            Ôn lại lộ trình
                        </Link>
                    )}
                    <Link
                        href="/luyen-thi/"
                        className="px-6 py-2.5 rounded-xl font-semibold text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 hover:border-brand-300 hover:text-brand-600 transition-all"
                    >
                        Chọn đề khác
                    </Link>
                </div>
            </div>
        );
    }

    // Quiz screen — real exam layout
    return (
        <div className="fixed inset-0 z-50 bg-zinc-50 dark:bg-zinc-950 flex flex-col">
            {/* Exam top bar */}
            <div className="shrink-0 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-4 py-2.5">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3 min-w-0">
                        <IconAward size={18} className="text-brand-500 shrink-0" />
                        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 truncate">{quiz.title}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-mono font-bold tabular-nums ${
                            timerCritical ? "bg-rose-100 dark:bg-rose-900/30 text-rose-600 animate-pulse"
                            : timerWarning ? "bg-amber-100 dark:bg-amber-900/30 text-amber-600"
                            : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                        }`}>
                            <IconClock size={14} />
                            {formatCountdown(remainingSeconds)}
                        </div>
                        <span className="text-xs text-zinc-400 hidden sm:block">
                            {answeredCount}/{totalQuestions} đã trả lời
                        </span>
                        <button
                            onClick={() => setShowSidebar(!showSidebar)}
                            className="p-1.5 rounded-lg text-zinc-400 hover:text-brand-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors sm:hidden"
                            title="Toggle sidebar"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="15" y1="3" x2="15" y2="21" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main content area */}
            <div className="flex-1 flex overflow-hidden">
                {/* Question panel */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="max-w-2xl mx-auto">
                        {/* Question header */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                                Câu {currentQuestion + 1} / {totalQuestions}
                            </h2>
                            <button
                                onClick={toggleFlag}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                    flagged.has(currentQuestion)
                                    ? "bg-amber-100 dark:bg-amber-900/30 text-amber-600 border border-amber-300 dark:border-amber-700"
                                    : "text-zinc-400 hover:text-amber-500 border border-zinc-200 dark:border-zinc-700 hover:border-amber-300"
                                }`}
                            >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill={flagged.has(currentQuestion) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></svg>
                                {flagged.has(currentQuestion) ? "Đã đánh dấu" : "Đánh dấu"}
                            </button>
                        </div>

                        {/* Question card */}
                        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 shadow-sm">
                            <p className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-8 leading-relaxed">
                                {question.question}
                            </p>

                            <div className="space-y-3">
                                {question.options.map((option, idx) => {
                                    const isSelected = selectedAnswer === idx;
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => selectAnswer(idx)}
                                            className={`w-full text-left flex items-start gap-3 p-4 rounded-xl border-2 transition-all duration-150 ${
                                                isSelected
                                                ? "border-brand-500 bg-brand-50 dark:bg-brand-900/20 dark:border-brand-400 shadow-sm shadow-brand-500/10"
                                                : "border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                                            }`}
                                        >
                                            <span className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                                                isSelected
                                                ? "bg-brand-500 text-white"
                                                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                                            }`}>
                                                {String.fromCharCode(65 + idx)}
                                            </span>
                                            <span className={`text-sm pt-1 ${isSelected ? "text-brand-700 dark:text-brand-300 font-medium" : "text-zinc-700 dark:text-zinc-300"}`}>
                                                {option}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Question navigation */}
                        <div className="flex items-center justify-between mt-6">
                            <button
                                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                                disabled={currentQuestion === 0}
                                className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-500 hover:text-brand-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                                ← Câu trước
                            </button>
                            <button
                                onClick={() => {
                                    if (currentQuestion < totalQuestions - 1) setCurrentQuestion(currentQuestion + 1);
                                }}
                                disabled={currentQuestion >= totalQuestions - 1}
                                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-zinc-500 hover:text-brand-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                                Câu tiếp <IconArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sidebar - Question grid */}
                <div className={`${showSidebar ? "block" : "hidden"} sm:block w-72 shrink-0 border-l border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-y-auto`}>
                    <div className="p-4">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">Bảng câu hỏi</h3>
                        
                        {/* Legend */}
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-zinc-400 mb-4">
                            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-brand-500 inline-block" /> Đã chọn</span>
                            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-zinc-200 dark:bg-zinc-700 inline-block" /> Chưa trả lời</span>
                            <span className="flex items-center gap-1"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" className="text-amber-500"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /></svg> Đánh dấu</span>
                        </div>

                        {/* Question grid */}
                        <div className="grid grid-cols-5 gap-1.5 mb-6">
                            {quiz.questions.map((_, idx) => {
                                const answered = answers[idx] !== null;
                                const isCurrent = idx === currentQuestion;
                                const isFlagged = flagged.has(idx);
                                let bgClass = "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400";
                                if (answered) bgClass = "bg-brand-500 text-white";
                                if (isCurrent) bgClass += " ring-2 ring-brand-400 ring-offset-1 dark:ring-offset-zinc-900";
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => goToQuestion(idx)}
                                        className={`relative w-full aspect-square rounded-lg text-xs font-bold transition-all ${bgClass}`}
                                    >
                                        {idx + 1}
                                        {isFlagged && (
                                            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-500 rounded-full border border-white dark:border-zinc-900" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Summary */}
                        <div className="space-y-2 text-sm mb-6">
                            <div className="flex justify-between text-zinc-500 dark:text-zinc-400">
                                <span>Đã trả lời</span>
                                <span className="font-semibold text-brand-600">{answeredCount}</span>
                            </div>
                            <div className="flex justify-between text-zinc-500 dark:text-zinc-400">
                                <span>Chưa trả lời</span>
                                <span className="font-semibold text-zinc-600 dark:text-zinc-300">{unansweredCount}</span>
                            </div>
                            <div className="flex justify-between text-zinc-500 dark:text-zinc-400">
                                <span>Đánh dấu</span>
                                <span className="font-semibold text-amber-500">{flagged.size}</span>
                            </div>
                        </div>

                        {/* Submit button */}
                        <button
                            onClick={() => setShowConfirmSubmit(true)}
                            className="w-full px-4 py-3 rounded-xl font-semibold text-white bg-linear-to-r from-brand-500 to-indigo-500 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                        >
                            Nộp bài
                        </button>
                    </div>
                </div>
            </div>

            {/* Submit confirmation modal */}
            {showConfirmSubmit && (
                <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 max-w-sm mx-4 shadow-2xl">
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">Xác nhận nộp bài?</h3>
                        {unansweredCount > 0 && (
                            <p className="text-sm text-amber-600 mb-2">
                                Bạn còn <strong>{unansweredCount}</strong> câu chưa trả lời.
                            </p>
                        )}
                        {flagged.size > 0 && (
                            <p className="text-sm text-amber-600 mb-2">
                                Bạn có <strong>{flagged.size}</strong> câu đánh dấu chưa xem lại.
                            </p>
                        )}
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                            Sau khi nộp bài, bạn không thể thay đổi đáp án.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowConfirmSubmit(false)}
                                className="flex-1 px-4 py-2.5 rounded-xl font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                            >
                                Quay lại
                            </button>
                            <button
                                onClick={submitExam}
                                className="flex-1 px-4 py-2.5 rounded-xl font-semibold text-white bg-linear-to-r from-brand-500 to-indigo-500 shadow-md hover:shadow-lg transition-all"
                            >
                                Nộp bài
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
