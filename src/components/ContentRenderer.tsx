"use client";

import { useEffect, useRef } from "react";

interface ContentRendererProps {
    html: string;
    className?: string;
}

export default function ContentRenderer({ html, className = "" }: ContentRendererProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const productionAssetHost = "https://xdev.asia";

        const repairContentImages = () => {
            const images = ref.current?.querySelectorAll("img");
            if (!images?.length) return;

            images.forEach((image) => {
                if (image.dataset.repairBound === "true") return;

                const originalSrc = image.getAttribute("src");
                if (!originalSrc) return;

                const normalizedSrc = originalSrc
                    .replace(/^https?:\/\/x-lms\.test\/storage\//, "/storage/")
                    .replace(/^https?:\/\/xdev\.asia\/storage\//, "/storage/");

                if (normalizedSrc !== originalSrc) {
                    image.setAttribute("src", normalizedSrc);
                }

                image.dataset.repairBound = "true";

                image.addEventListener(
                    "error",
                    () => {
                        const currentSrc = image.getAttribute("src") ?? "";

                        if (
                            currentSrc.startsWith("/storage/") &&
                            image.dataset.remoteRetried !== "true"
                        ) {
                            image.dataset.remoteRetried = "true";
                            image.setAttribute("src", `${productionAssetHost}${currentSrc}`);
                            return;
                        }

                        if (image.dataset.missingNoticeShown === "true") return;

                        image.dataset.missingNoticeShown = "true";
                        image.classList.add("content-image-hidden");

                        const notice = document.createElement("div");
                        notice.className = "content-image-missing";
                        notice.textContent = "Khong tai duoc anh noi dung. Asset nay chua duoc mirror vao static site.";

                        image.insertAdjacentElement("afterend", notice);
                    },
                    { once: false }
                );
            });
        };

        // Syntax highlighting with highlight.js
        const highlightCode = async () => {
            const hljs = (await import("highlight.js")).default;
            const codeBlocks = ref.current?.querySelectorAll("pre code");
            if (!codeBlocks) return;
            codeBlocks.forEach((block) => {
                if (!block.classList.contains("hljs")) {
                    hljs.highlightElement(block as HTMLElement);
                }
            });
        };

        // Initialize Mermaid diagrams
        const initMermaid = async () => {
            const mermaid = (await import("mermaid")).default;
            mermaid.initialize({
                startOnLoad: false,
                theme: document.documentElement.classList.contains("dark") ? "dark" : "default",
                fontFamily: "inherit",
                securityLevel: "loose",
            });

            const codeBlocks = ref.current?.querySelectorAll("pre code.language-mermaid, pre code.language-mmd");
            if (!codeBlocks?.length) return;

            for (let i = 0; i < codeBlocks.length; i++) {
                const codeEl = codeBlocks[i];
                const preEl = codeEl.parentElement;
                if (!preEl) continue;

                const graphDefinition = codeEl.textContent?.trim() ?? "";
                if (!graphDefinition) continue;

                try {
                    const id = `mermaid-${Date.now()}-${i}`;
                    const { svg } = await mermaid.render(id, graphDefinition);
                    const wrapper = document.createElement("div");
                    wrapper.className = "mermaid-diagram my-8 flex justify-center overflow-x-auto rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6";
                    wrapper.innerHTML = svg;
                    preEl.replaceWith(wrapper);
                } catch {
                    // Leave original code block if mermaid fails
                }
            }
        };

        // Add a header bar to each code block with lang label + copy button
        const addCodeHeaders = () => {
            const pres = ref.current?.querySelectorAll("pre");
            if (!pres) return;

            pres.forEach((pre) => {
                if (pre.querySelector(".code-header")) return;

                const code = pre.querySelector("code");
                const langMatch = code?.className.match(/language-(\w+)/);
                const lang = langMatch ? langMatch[1] : "";

                // Build header row
                const header = document.createElement("div");
                header.className = "code-header";

                const langLabel = document.createElement("span");
                langLabel.className = "code-lang";
                langLabel.textContent = lang || "code";

                const copyBtn = document.createElement("button");
                copyBtn.className = "copy-btn";
                copyBtn.title = "Copy code";
                const iconCopy = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`;
                const iconCheck = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
                copyBtn.innerHTML = iconCopy;

                copyBtn.addEventListener("click", async () => {
                    const text = pre.querySelector("code")?.textContent ?? "";
                    await navigator.clipboard.writeText(text);
                    copyBtn.innerHTML = iconCheck;
                    setTimeout(() => { copyBtn.innerHTML = iconCopy; }, 2000);
                });

                header.appendChild(langLabel);
                header.appendChild(copyBtn);
                pre.insertBefore(header, pre.firstChild);
            });
        };

        highlightCode();
        initMermaid();
        addCodeHeaders();
        repairContentImages();
    }, [html]);

    return (
        <div
            ref={ref}
            className={`article-content ${className}`}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
