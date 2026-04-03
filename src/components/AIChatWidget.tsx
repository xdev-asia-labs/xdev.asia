"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useAuth } from "@/components/AuthProvider";
import { gemini } from "@/lib/firebase";

interface Message {
    role: "user" | "ai";
    content: string;
}

interface AIChatWidgetProps {
    html: string;
    title: string;
}

export default function AIChatWidget({ html, title }: AIChatWidgetProps) {
    const { user, openLoginModal } = useAuth();
    const [open, setOpen] = useState(false);
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
        if (open) inputRef.current?.focus();
    }, [open]);

    const getContext = useCallback(() => {
        const div = document.createElement("div");
        div.innerHTML = html;
        return (div.textContent || div.innerText || "").slice(0, 6000);
    }, [html]);

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
                .slice(-6)
                .map((m) => `${m.role === "user" ? "Người dùng" : "AI"}: ${m.content}`)
                .join("\n");

            const prompt = `Bạn là trợ lý AI cho blog kỹ thuật xDev Asia. Bạn đang trả lời câu hỏi về bài viết "${title}".

Nội dung bài viết (tóm tắt):
${getContext()}

${conversationHistory ? `Lịch sử hội thoại:\n${conversationHistory}\n\n` : ""}Người dùng hỏi: ${userMsg}

Trả lời ngắn gọn, chính xác bằng tiếng Việt. Nếu câu hỏi không liên quan đến bài viết, vẫn cố gắng trả lời hữu ích. Trả về plain text, không dùng markdown.`;

            const result = await gemini.generateContent(prompt);
            const text = result.response.text();

            setMessages((prev) => [
                ...prev,
                { role: "ai", content: text || "Xin lỗi, tôi không thể trả lời lúc này." },
            ]);
        } catch (err) {
            console.error("Chat error:", err);
            setMessages((prev) => [
                ...prev,
                { role: "ai", content: "Có lỗi xảy ra. Vui lòng thử lại." },
            ]);
        } finally {
            setLoading(false);
        }
    }, [input, messages, user, openLoginModal, title, getContext]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
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
                className={`fixed bottom-48 right-6 z-40 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${open
                    ? "bg-zinc-600 hover:bg-zinc-700 rotate-0"
                    : "bg-brand-600 hover:bg-brand-700 animate-bounce-slow"
                    }`}
                title="Hỏi AI về bài viết"
            >
                {open ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
                    </svg>
                )}
            </button>

            {/* Chat panel */}
            {open && (
                <div className="fixed bottom-62 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl border border-zinc-200 bg-white dark:bg-zinc-900 dark:border-zinc-700 flex flex-col overflow-hidden" style={{ height: "480px" }}>
                    {/* Header */}
                    <div className="px-4 py-3 bg-brand-600 text-white flex items-center gap-2 shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
                        </svg>
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold">Hỏi AI về bài viết</div>
                            <div className="text-[10px] opacity-80 truncate">{title}</div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {messages.length === 0 && (
                            <div className="text-center py-8">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-300 mx-auto mb-3">
                                    <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
                                </svg>
                                <p className="text-sm text-zinc-400">Hỏi bất kỳ điều gì về bài viết này!</p>
                                <div className="mt-3 flex flex-wrap gap-1.5 justify-center">
                                    {["Tóm tắt bài này", "Giải thích thêm về...", "Cho ví dụ cụ thể"].map((q) => (
                                        <button
                                            key={q}
                                            onClick={() => { setInput(q); inputRef.current?.focus(); }}
                                            className="text-xs px-2.5 py-1 rounded-full bg-brand-50 text-brand-600 hover:bg-brand-100 transition-colors"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div
                                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === "user"
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
                                placeholder="Nhập câu hỏi..."
                                disabled={loading}
                                className="flex-1 px-3 py-2 text-sm rounded-xl border border-zinc-200 bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-zinc-800 dark:border-zinc-600 disabled:opacity-50"
                            />
                            <button
                                onClick={handleSend}
                                disabled={loading || !input.trim()}
                                className="px-3 py-2 rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
