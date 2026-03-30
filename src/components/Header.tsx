"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconMenu, IconClose, IconSearch, IconChevronDown, IconBrain, IconCode, IconShield, IconServer, IconDatabase, IconTerminal, IconBook, IconRocket } from "./Icons";

/* ────────────────────────────────────────
   Icon map – maps category.icon string → component
   ──────────────────────────────────────── */
const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    brain: IconBrain,
    code: IconCode,
    shield: IconShield,
    server: IconServer,
    database: IconDatabase,
    terminal: IconTerminal,
    book: IconBook,
    rocket: IconRocket,
    layers: IconServer,  // reuse for architecture
    cloud: IconServer,   // reuse for cloud
};

function TopicIcon({ icon, size = 16, className }: { icon: string; size?: number; className?: string }) {
    const Component = ICON_MAP[icon] || IconCode;
    return <Component size={size} className={className} />;
}

/* ────────────────────────────────────────
   Types – passed in from server component
   ──────────────────────────────────────── */
export interface NavTopic {
    slug: string;
    name: string;
    icon: string;
}

/* ────────────────────────────────────────
   Main nav links
   ──────────────────────────────────────── */
const navLinks = [
    { href: "/blog/", label: "Blog" },
    { href: "/ai/", label: "AI" },
    { href: "/series/", label: "Series" },
    { href: "/showcase/", label: "Showcase" },
];

export default function Header({ topics = [] }: { topics?: NavTopic[] }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [topicDropdownOpen, setTopicDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setTopicDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="sticky top-0 z-50 glass">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-18">
                    <Link href="/" className="flex items-center gap-1 group relative">
                        <Image
                            src="/images/brand/logo.png"
                            alt="xDev"
                            width={120}
                            height={40}
                            className="h-8 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative px-4 py-2 rounded-lg text-sm font-medium text-zinc-600 hover:text-brand-600 transition-all duration-200 hover:bg-brand-50"
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Topics Dropdown – data-driven from categories.json */}
                        {topics.length > 0 && (
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setTopicDropdownOpen(!topicDropdownOpen)}
                                    className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-zinc-600 hover:text-brand-600 transition-all duration-200 hover:bg-brand-50"
                                >
                                    Chủ đề
                                    <IconChevronDown size={14} className={`transition-transform duration-200 ${topicDropdownOpen ? "rotate-180" : ""}`} />
                                </button>
                                {topicDropdownOpen && (
                                    <div className="absolute right-0 top-full mt-1 w-60 bg-white rounded-xl shadow-lg border border-zinc-100 py-2 z-50">
                                        {topics.map((topic) => (
                                            <Link
                                                key={topic.slug}
                                                href={`/blog/topic/${topic.slug}/`}
                                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-600 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                                                onClick={() => setTopicDropdownOpen(false)}
                                            >
                                                <TopicIcon icon={topic.icon} size={16} className="text-zinc-400" />
                                                {topic.name}
                                            </Link>
                                        ))}
                                        <div className="border-t border-zinc-100 mt-1 pt-1">
                                            <Link
                                                href="/blog/"
                                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-brand-600 font-medium hover:bg-brand-50 transition-colors"
                                                onClick={() => setTopicDropdownOpen(false)}
                                            >
                                                <IconCode size={16} />
                                                Xem tất cả bài viết
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Search Button */}
                        <Link
                            href="/search/"
                            className="ml-2 p-2 rounded-lg text-zinc-500 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                            aria-label="Tìm kiếm"
                        >
                            <IconSearch size={18} />
                        </Link>
                    </div>

                    {/* Mobile: Search + Menu */}
                    <div className="md:hidden flex items-center gap-1">
                        <Link
                            href="/search/"
                            className="p-2 rounded-lg text-zinc-500 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                            aria-label="Tìm kiếm"
                        >
                            <IconSearch size={20} />
                        </Link>
                        <button
                            id="mobile-menu-toggle"
                            className="p-2 rounded-lg text-zinc-500 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <IconClose size={22} /> : <IconMenu size={22} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-zinc-100">
                    <div className="px-4 py-4 space-y-1 bg-white">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-3 rounded-xl text-sm font-medium text-zinc-600 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        {topics.length > 0 && (
                            <>
                                <div className="pt-2 pb-1 px-4">
                                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Chủ đề</span>
                                </div>
                                {topics.map((topic) => (
                                    <Link
                                        key={topic.slug}
                                        href={`/blog/topic/${topic.slug}/`}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-zinc-600 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <TopicIcon icon={topic.icon} size={16} className="text-zinc-400" />
                                        {topic.name}
                                    </Link>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}
