"use client";

import { useEffect, useRef } from "react";

interface GiscusCommentsProps {
    /** Maps to data-mapping value — typically the page slug or pathname */
    term?: string;
}

export default function GiscusComments({ term }: GiscusCommentsProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current || ref.current.querySelector("iframe")) return;

        const script = document.createElement("script");
        script.src = "https://giscus.app/client.js";
        // TODO: Replace these with your actual Giscus config from https://giscus.app/
        script.setAttribute("data-repo", "xdev-asia-labs/xdev.asia");
        script.setAttribute("data-repo-id", "R_kgDORyIyhw");
        script.setAttribute("data-category", "Comments");
        script.setAttribute("data-category-id", "DIC_kwDORyIyh84C50SN");
        script.setAttribute("data-mapping", "pathname");
        script.setAttribute("data-strict", "0");
        script.setAttribute("data-reactions-enabled", "1");
        script.setAttribute("data-emit-metadata", "1");
        script.setAttribute("data-input-position", "top");
        script.setAttribute("data-lang", "vi");
        script.setAttribute("data-loading", "lazy");
        script.crossOrigin = "anonymous";
        script.async = true;

        // Check dark mode
        const isDark = document.documentElement.classList.contains("dark");
        script.setAttribute("data-theme", isDark ? "dark_dimmed" : "light");

        ref.current.appendChild(script);
    }, [term]);

    // Re-set theme when dark mode changes
    useEffect(() => {
        const observer = new MutationObserver(() => {
            const iframe = document.querySelector<HTMLIFrameElement>("iframe.giscus-frame");
            if (!iframe) return;
            const isDark = document.documentElement.classList.contains("dark");
            iframe.contentWindow?.postMessage(
                { giscus: { setConfig: { theme: isDark ? "dark_dimmed" : "light" } } },
                "https://giscus.app"
            );
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    return (
        <section className="mt-12 pt-10 border-t border-zinc-100 dark:border-zinc-800">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 flex items-center gap-3">
                <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Bình luận
            </h2>
            <div ref={ref} />
        </section>
    );
}
