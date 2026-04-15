import Link from "next/link";
import Image from "next/image";
import { getSettings } from "@/lib/data";
import { IconGitHub, IconFacebook, IconYouTube, IconTikTok, IconLinkedIn, IconTelegram } from "./Icons";

export default function Footer() {
    const settings = getSettings();
    const siteName = settings.site_name || "xDev";
    const socialGithub = settings.social_github_url || settings.github_url;
    const socialFacebook = settings.social_facebook_url || settings.facebook_url;
    const socialYoutube = settings.social_youtube_url || settings.youtube_url;
    const socialTiktok = settings.social_tiktok_url || settings.tiktok_url;
    const socialLinkedin = settings.social_linkedin_url || settings.linkedin_url;
    const socialTelegram = settings.telegram_url;
    const contactGithub = settings.contact_github_url || settings.github_url;
    const contactLinkedin = settings.contact_linkedin_url || settings.linkedin_url;
    const contactFacebook = settings.contact_facebook_url || settings.facebook_url;

    const socialLinks = [
        { url: socialGithub, icon: IconGitHub, label: "GitHub" },
        { url: socialFacebook, icon: IconFacebook, label: "Facebook" },
        { url: socialYoutube, icon: IconYouTube, label: "YouTube" },
        { url: socialTiktok, icon: IconTikTok, label: "TikTok" },
        { url: socialLinkedin, icon: IconLinkedIn, label: "LinkedIn" },
        { url: socialTelegram, icon: IconTelegram, label: "Telegram" },
    ].filter((s) => s.url);

    return (
        <footer className="footer-dark relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block mb-3">
                            <Image
                                src="/images/logo/logo-vertical-dark.svg"
                                alt={siteName}
                                width={120}
                                height={30}
                                className="h-8 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed max-w-sm mb-5" style={{ color: "rgba(147, 197, 253, 0.7)" }}>
                            {settings.site_tagline || settings.site_description || "Chia sẻ kiến thức lập trình, AI, DevOps và công nghệ."}
                        </p>

                        <div className="flex gap-2.5">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    aria-label={social.label}
                                >
                                    <social.icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="footer-heading">Khám phá</h4>
                        <ul className="space-y-2.5">
                            {[
                                { href: "/blog/", label: "Bài viết" },
                                { href: "/series/", label: "Khoá học" },
                                { href: "/luyen-thi/", label: "Luyện thi" },
                                { href: "/bookmarks/", label: "Đã lưu" },
                                { href: "/search/", label: "Tìm kiếm" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="footer-heading">Liên hệ</h4>
                        {settings.site_email && (
                            <a href={`mailto:${settings.site_email}`} className="text-sm block mb-2.5 transition-colors">
                                {settings.site_email}
                            </a>
                        )}
                        {contactGithub && (
                            <a href={contactGithub} target="_blank" rel="noopener noreferrer" className="text-sm block mb-2.5 transition-colors">
                                GitHub / {contactGithub.split("/").pop()}
                            </a>
                        )}
                        {contactLinkedin && (
                            <a href={contactLinkedin} target="_blank" rel="noopener noreferrer" className="text-sm block mb-2.5 transition-colors">
                                LinkedIn
                            </a>
                        )}
                        {contactFacebook && (
                            <a href={contactFacebook} target="_blank" rel="noopener noreferrer" className="text-sm block mb-2.5 transition-colors">
                                Facebook
                            </a>
                        )}
                    </div>
                </div>

                <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="text-xs" style={{ color: "rgba(148, 163, 184, 0.6)" }}>
                        &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        {[
                            { href: "/pages/chinh-sach-quyen-rieng-tu/", label: "Chính sách quyền riêng tư" },
                            { href: "/pages/dieu-khoan-su-dung/", label: "Điều khoản sử dụng" },
                            { href: "/pages/xoa-du-lieu-nguoi-dung/", label: "Xoá dữ liệu" },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="text-xs transition-colors" style={{ color: "rgba(148, 163, 184, 0.6)" }}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
