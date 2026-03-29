"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconMenu, IconClose } from "./Icons";

const navLinks = [
    { href: "/blog/", label: "Blog" },
    { href: "/ai/", label: "AI" },
    { href: "/series/", label: "Series" },
    { href: "/news/", label: "News" },
    { href: "/showcase/", label: "Showcase" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        id="mobile-menu-toggle"
                        className="md:hidden p-2 rounded-lg text-zinc-500 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <IconClose size={22} /> : <IconMenu size={22} />}
                    </button>
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
                    </div>
                </div>
            )}
        </header>
    );
}
