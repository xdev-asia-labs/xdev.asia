import Link from "next/link";
import Image from "next/image";
import { getSettings } from "@/lib/data";
import { IconGitHub, IconFacebook, IconYouTube, IconTikTok, IconLinkedIn } from "./Icons";

export default function Footer() {
    const settings = getSettings();
    const siteName = settings.site_name || "xDev";

    const socialLinks = [
        { url: settings.github_url, icon: IconGitHub, label: "GitHub" },
        { url: settings.facebook_url, icon: IconFacebook, label: "Facebook" },
        { url: settings.youtube_url, icon: IconYouTube, label: "YouTube" },
        { url: settings.tiktok_url, icon: IconTikTok, label: "TikTok" },
        { url: settings.linkedin_url, icon: IconLinkedIn, label: "LinkedIn" },
    ].filter((s) => s.url);

    return (
        <footer className="relative">
            <div className="section-divider" />

            <div className="bg-surface-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {/* Brand */}
                        <div className="md:col-span-2">
                            <Link href="/" className="inline-block mb-4">
                                <Image
                                    src="/images/brand/logo.png"
                                    alt={siteName}
                                    width={120}
                                    height={40}
                                    className="h-8 w-auto object-contain"
                                />
                            </Link>
                            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mb-6">
                                {settings.site_tagline || settings.site_description || "Nền tảng chia sẻ kiến thức lập trình, DevOps và công nghệ."}
                            </p>

                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-400 hover:text-brand-600 transition-all duration-200 hover:bg-brand-50 border border-zinc-200"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={16} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Navigation */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-5">Khám phá</h4>
                            <ul className="space-y-3">
                                {[
                                    { href: "/blog/", label: "Blog" },
                                    { href: "/ai/", label: "AI" },
                                    { href: "/series/", label: "Series" },
                                    { href: "/news/", label: "Tin tức" },
                                    { href: "/showcase/", label: "Showcase" },
                                ].map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-5">Liên hệ</h4>
                            {settings.site_email && (
                                <a href={`mailto:${settings.site_email}`} className="text-sm text-zinc-500 hover:text-brand-600 transition-colors block mb-3">
                                    {settings.site_email}
                                </a>
                            )}
                            {settings.github_url && (
                                <a href={settings.github_url} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 hover:text-brand-600 transition-colors block">
                                    GitHub / {settings.github_url.split("/").pop()}
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-zinc-400">
                            &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
                        </p>
                        <p className="text-xs text-zinc-400">
                            Built with <span className="text-brand-500">♥</span> and Next.js
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
