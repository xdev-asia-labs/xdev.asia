"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useAuth } from "@/components/AuthProvider";
import { gemini } from "@/lib/firebase";

interface Message {
    role: "user" | "ai";
    content: string;
}

interface GlobalChatbotProps {
    /** JSON string of all site content for AI context */
    siteContext: string;
}

const SUGGESTED_QUESTIONS = [
    "Có bài nào về Docker không?",
    "Hướng dẫn học Go từ đầu",
    "So sánh PostgreSQL vs MySQL",
    "Cách deploy lên server",
];

export default function GlobalChatbot({ siteContext }: GlobalChatbotProps) {
    const { user, openLoginModal } = useAuth();
    const [open, setOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (open) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [open]);

    const handleSend = useCallback(async () => {
        if (!input.trim()) return;
        if (!user) {
            openLoginModal();
            return;
        }

        const userMsg = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
        setLoading(true);

        try {
            const conversationHistory = messages
                .slice(-8)
                .map((m) => `${m.role === "user" ? "Người dùng" : "AI"}: ${m.content}`)
                .join("\n");

            const prompt = `Bạn là xDev AI — trợ lý thông minh cho blog kỹ thuật xDev Asia (https://xdev.asia).

Chức năng:
- Trả lời câu hỏi về lập trình, DevOps, AI, Cloud, Security, Database, Linux
- Gợi ý bài viết phù hợp từ danh sách bài trên site
- Giải thích khái niệm kỹ thuật
- Hỗ trợ debug code đơn giản

Quy tắc:
- Trả lời bằng tiếng Việt, ngắn gọn, rõ ràng
- Khi gợi ý bài viết, luôn kèm link dạng https://xdev.asia/blog/slug/ hoặc https://xdev.asia/series/category/slug/
- Nếu không tìm thấy bài viết liên quan, vẫn trả lời câu hỏi kỹ thuật
- Giữ giọng văn thân thiện, chuyên nghiệp
- Sử dụng markdown để format câu trả lời: **bold**, *italic*, \`code\`, code block, danh sách, link

Danh sách nội dung trên site:
${siteContext}

${conversationHistory ? `Lịch sử hội thoại:\n${conversationHistory}\n\n` : ""}Người dùng: ${userMsg}`;

            const result = await gemini.generateContent(prompt);
            const text = result.response.text();

            setMessages((prev) => [
                ...prev,
                { role: "ai", content: text || "Xin lỗi, tôi không thể trả lời lúc này." },
            ]);
        } catch (err) {
            console.error("Global chat error:", err);
            setMessages((prev) => [
                ...prev,
                { role: "ai", content: "Có lỗi xảy ra. Vui lòng thử lại sau." },
            ]);
        } finally {
            setLoading(false);
        }
    }, [input, messages, user, openLoginModal, siteContext]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleSuggest = (q: string) => {
        setInput(q);
        inputRef.current?.focus();
    };

    const handleClear = () => {
        setMessages([]);
    };

    return (
        <>
            {/* Floating chat button */}
            <button
                onClick={() => {
                    if (!user) {
                        openLoginModal();
                        return;
                    }
                    setOpen((v) => !v);
                }}
                className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${open
                    ? "bg-zinc-700 hover:bg-zinc-800 scale-90"
                    : "bg-linear-to-br from-brand-500 to-brand-700 hover:from-brand-600 hover:to-brand-800 hover:shadow-2xl hover:scale-105"
                    }`}
                title="xDev AI — Trợ lý thông minh"
                aria-label="Mở chatbot AI"
            >
                {open ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                        <path d="M12 7l1 3.5a1.5 1.5 0 00.95.95L17.5 12l-3.55 1.05a1.5 1.5 0 00-.95.95L12 17.5l-1-3.5a1.5 1.5 0 00-.95-.95L6.5 12l3.55-1.05A1.5 1.5 0 0011 10z" />
                    </svg>
                )}
            </button>

            {/* Chat panel */}
            {open && (
                <div className={`fixed z-50 shadow-2xl border border-zinc-200 bg-white dark:bg-zinc-900 dark:border-zinc-700 flex flex-col overflow-hidden transition-all duration-300 ${expanded
                        ? "inset-4 rounded-3xl"
                        : "bottom-22 right-6 w-96 max-w-[calc(100vw-2rem)] rounded-2xl"
                    }`} style={expanded ? undefined : { height: "520px" }}>
                    {/* Header */}
                    <div className="px-4 py-3 bg-linear-to-r from-brand-600 to-brand-700 text-white flex items-center gap-3 shrink-0">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-bold">xDev AI</div>
                            <div className="text-[10px] opacity-80">Trợ lý lập trình thông minh</div>
                        </div>
                        <div className="flex items-center gap-1">
                            {messages.length > 0 && (
                                <button
                                    onClick={handleClear}
                                    className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
                                    title="Xóa lịch sử chat"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M19 6l-2 14a2 2 0 01-2 2H9a2 2 0 01-2-2L5 6" />
                                    </svg>
                                </button>
                            )}
                            <button
                                onClick={() => setExpanded((v) => !v)}
                                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
                                title={expanded ? "Thu nhỏ" : "Phóng to"}
                            >
                                {expanded ? (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="4 14 10 14 10 20" />
                                        <polyline points="20 10 14 10 14 4" />
                                        <line x1="14" y1="10" x2="21" y2="3" />
                                        <line x1="3" y1="21" x2="10" y2="14" />
                                    </svg>
                                ) : (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="15 3 21 3 21 9" />
                                        <polyline points="9 21 3 21 3 15" />
                                        <line x1="21" y1="3" x2="14" y2="10" />
                                        <line x1="3" y1="21" x2="10" y2="14" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {messages.length === 0 && (
                            <div className="text-center py-6">
                                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-4">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-500">
                                        <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-base font-bold text-zinc-800 dark:text-zinc-200 mb-1">Xin chào! Tôi là xDev AI</h3>
                                <p className="text-xs text-zinc-400 mb-5 leading-relaxed px-4">
                                    Hỏi tôi bất kỳ điều gì về lập trình, DevOps, AI, hoặc tìm bài viết trên xDev Asia.
                                </p>
                                <div className="flex flex-wrap gap-1.5 justify-center px-2">
                                    {SUGGESTED_QUESTIONS.map((q) => (
                                        <button
                                            key={q}
                                            onClick={() => handleSuggest(q)}
                                            className="text-xs px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 hover:bg-brand-100 transition-colors dark:bg-brand-950 dark:text-brand-400 dark:hover:bg-brand-900"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                {msg.role === "ai" && (
                                    <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center shrink-0 mr-2 mt-1">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-600">
                                            <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
                                        </svg>
                                    </div>
                                )}
                                <div
                                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === "user"
                                        ? "bg-brand-600 text-white rounded-br-md whitespace-pre-wrap"
                                        : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 rounded-bl-md chat-markdown"
                                        }`}
                                >
                                    {msg.role === "ai" ? (
                                        <ReactMarkdown
                                            components={{
                                                a: ({ ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-brand-600 dark:text-brand-400 underline hover:no-underline" />,
                                                code: ({ className, children, ...props }) => {
                                                    const isBlock = className?.includes("language-");
                                                    return isBlock ? (
                                                        <pre className="bg-zinc-900 text-zinc-100 rounded-lg p-3 my-2 overflow-x-auto text-xs"><code {...props}>{children}</code></pre>
                                                    ) : (
                                                        <code className="bg-zinc-200 dark:bg-zinc-700 px-1 py-0.5 rounded text-xs" {...props}>{children}</code>
                                                    );
                                                },
                                                pre: ({ children }) => <>{children}</>,
                                            }}
                                        >{msg.content}</ReactMarkdown>
                                    ) : (
                                        msg.content
                                    )}
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div className="flex justify-start">
                                <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center shrink-0 mr-2 mt-1">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-600">
                                        <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
                                    </svg>
                                </div>
                                <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-3 rounded-2xl rounded-bl-md">
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                        <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                        <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-3 border-t border-zinc-100 dark:border-zinc-700 shrink-0">
                        <div className="flex gap-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Hỏi xDev AI..."
                                disabled={loading}
                                className="flex-1 px-3 py-2.5 text-sm rounded-xl border border-zinc-200 bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-zinc-800 dark:border-zinc-600 disabled:opacity-50"
                            />
                            <button
                                onClick={handleSend}
                                disabled={loading || !input.trim()}
                                className="px-3 py-2.5 rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-2 text-center">
                            <span className="text-[10px] text-zinc-300 dark:text-zinc-600">Powered by Gemini 2.5 Flash</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
