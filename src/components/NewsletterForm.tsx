"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterForm({ variant = "default" }: { variant?: "default" | "footer" }) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setStatus("loading");

        // TODO: Connect to email service (Buttondown, Mailchimp, ConvertKit, etc.)
        // For now, simulate success. Replace with actual API call:
        // await fetch("https://api.buttondown.email/v1/subscribers", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({ email }),
        // });

        await new Promise((resolve) => setTimeout(resolve, 800));
        setStatus("success");
        setEmail("");
    };

    if (status === "success") {
        return (
            <div className={`flex items-center gap-2 text-sm font-medium ${variant === "footer" ? "text-emerald-400" : "text-emerald-600"}`}>
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                Đăng ký thành công! Cảm ơn bạn.
            </div>
        );
    }

    const isFooter = variant === "footer";

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email của bạn"
                required
                className={`flex-1 min-w-0 px-4 py-2.5 rounded-xl text-sm border outline-none transition-colors ${
                    isFooter
                        ? "bg-white/5 border-white/10 text-white placeholder-blue-300/50 focus:border-blue-400/50"
                        : "bg-white border-zinc-200 text-zinc-800 placeholder-zinc-400 focus:border-brand-400 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:placeholder-zinc-500 dark:focus:border-brand-500"
                }`}
            />
            <button
                type="submit"
                disabled={status === "loading"}
                className={`shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 disabled:opacity-60 ${
                    isFooter
                        ? "bg-white text-blue-700 hover:bg-blue-50 shadow-lg shadow-blue-900/20"
                        : "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/20"
                }`}
            >
                {status === "loading" ? "..." : "Đăng ký"}
            </button>
        </form>
    );
}
