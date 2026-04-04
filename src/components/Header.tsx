"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconMenu, IconClose, IconSearch, IconChevronDown, IconBrain, IconCode, IconShield, IconServer, IconDatabase, IconTerminal, IconBook, IconRocket, IconPlug, IconAward } from "./Icons";
import DarkModeToggle from "./DarkModeToggle";
import UserMenu from "./UserMenu";

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
    layers: IconServer,
    cloud: IconServer,
    award: IconAward,
};

function TopicIcon({ icon, size = 16, className }: { icon: string; size?: number; className?: string }) {
    const Component = ICON_MAP[icon] || IconCode;
    return <Component size={size} className={className} />;
}

/* ────────────────────────────────────────
   Types
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
    { href: "/blog/", label: "Bài viết" },
    { href: "/series/", label: "Khoá học" },
    { href: "/showcase/", label: "Sản phẩm" },
    { href: "/luyen-thi/", label: "Luyện thi" },
];

export default function Header({ topics = [] }: { topics?: NavTopic[] }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [topicDropdownOpen, setTopicDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const closeAll = useCallback(() => {
        setMobileMenuOpen(false);
        setTopicDropdownOpen(false);
    }, []);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setTopicDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        closeAll();
    }, [pathname, closeAll]);

    const isActive = (href: string) => pathname.startsWith(href.replace(/\/$/, ""));

    return (
        <header className="sticky top-0 z-50 glass">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-1 group relative shrink-0">
                        <Image
                            src="/images/logo/logo-vertical-light.svg"
                            alt="xDev"
                            width={160}
                            height={40}
                            className="h-10 w-auto object-contain transition-all duration-300 group-hover:brightness-110 dark:hidden"
                            priority
                        />
                        <Image
                            src="/images/logo/logo-vertical-dark.svg"
                            alt="xDev"
                            width={160}
                            height={40}
                            className="h-10 w-auto object-contain transition-all duration-300 group-hover:brightness-110 hidden dark:block"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-0.5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(link.href)
                                    ? "text-brand-600 bg-brand-50"
                                    : "text-zinc-600 hover:text-brand-600 hover:bg-zinc-50"
                                    }`}
                            >
                                {link.label}
                                {isActive(link.href) && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-brand-500" />
                                )}
                            </Link>
                        ))}

                        {/* Topics Dropdown */}
                        {topics.length > 0 && (
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setTopicDropdownOpen(!topicDropdownOpen)}
                                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${topicDropdownOpen
                                        ? "text-brand-600 bg-brand-50"
                                        : "text-zinc-600 hover:text-brand-600 hover:bg-zinc-50"
                                        }`}
                                >
                                    Chủ đề
                                    <IconChevronDown
                                        size={13}
                                        className={`transition-transform duration-300 ${topicDropdownOpen ? "rotate-180" : ""}`}
                                    />
                                </button>
                                <div
                                    className={`absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl shadow-zinc-200/50 border border-zinc-100 py-1.5 z-50 transition-all duration-200 origin-top-right ${topicDropdownOpen
                                        ? "opacity-100 scale-100 translate-y-0"
                                        : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                                        }`}
                                >
                                    {topics.map((topic) => (
                                        <Link
                                            key={topic.slug}
                                            href={`/${topic.slug}/`}
                                            className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-600 hover:text-brand-600 hover:bg-brand-50/60 transition-colors"
                                            onClick={() => setTopicDropdownOpen(false)}
                                        >
                                            <TopicIcon icon={topic.icon} size={15} className="text-zinc-400 group-hover:text-brand-500" />
                                            {topic.name}
                                        </Link>
                                    ))}
                                    <div className="border-t border-zinc-100 mt-1 pt-1">
                                        <Link
                                            href="/blog/"
                                            className="flex items-center gap-3 px-4 py-2 text-sm text-brand-600 font-medium hover:bg-brand-50/60 transition-colors"
                                            onClick={() => setTopicDropdownOpen(false)}
                                        >
                                            <IconCode size={15} />
                                            Xem tất cả bài viết
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* MCP — highlighted */}
                        <Link
                            href="/mcp/"
                            className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${isActive("/mcp")
                                ? "bg-brand-600 text-white shadow-md shadow-brand-500/30"
                                : "bg-linear-to-r from-brand-500 to-indigo-500 text-white shadow-md shadow-brand-500/25 hover:shadow-lg hover:shadow-brand-500/40 hover:scale-105"
                                }`}
                        >
                            <IconPlug size={14} />
                            MCP
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        </Link>

                        {/* Search */}
                        <Link
                            href="/search/"
                            className="ml-1.5 p-2 rounded-lg text-zinc-400 hover:text-brand-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                            aria-label="Tìm kiếm"
                        >
                            <IconSearch size={18} />
                        </Link>
                        <DarkModeToggle />
                        <UserMenu />
                    </div>

                    {/* Mobile */}
                    <div className="flex md:hidden items-center gap-0.5">
                        <DarkModeToggle />
                        <Link
                            href="/search/"
                            className="p-2 rounded-lg text-zinc-500 hover:text-brand-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                            aria-label="Tìm kiếm"
                        >
                            <IconSearch size={20} />
                        </Link>
                        <UserMenu />
                        <button
                            id="mobile-menu-toggle"
                            className="p-2 rounded-lg text-zinc-500 hover:text-brand-600 hover:bg-zinc-50 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <IconClose size={22} /> : <IconMenu size={22} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu — slide down */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="border-t border-zinc-100 bg-white dark:bg-zinc-900 backdrop-blur-lg px-4 py-3 space-y-0.5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive(link.href)
                                ? "text-brand-600 bg-brand-50"
                                : "text-zinc-600 hover:text-brand-600 hover:bg-zinc-50"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/mcp/"
                        className="flex items-center gap-2 mx-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-linear-to-r from-brand-500 to-indigo-500 text-white shadow-md"
                    >
                        <IconPlug size={16} />
                        MCP Server
                        <span className="ml-auto text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full">NEW</span>
                    </Link>
                    {topics.length > 0 && (
                        <>
                            <div className="pt-3 pb-1 px-4">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Chủ đề</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                                {topics.map((topic) => (
                                    <Link
                                        key={topic.slug}
                                        href={`/${topic.slug}/`}
                                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-600 hover:text-brand-600 hover:bg-zinc-50 transition-colors"
                                    >
                                        <TopicIcon icon={topic.icon} size={14} className="text-zinc-400" />
                                        <span className="truncate">{topic.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
