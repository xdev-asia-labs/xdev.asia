import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getAllSeries, getSettings } from "@/lib/data";
import { showcaseRepos } from "@/lib/showcase-server";
import { IconGitHub, IconArrowRight, IconBook, IconCode, IconRocket } from "@/components/Icons";

const SITE_URL = "https://xdev.asia";

export const metadata: Metadata = {
    title: "Giới thiệu — Duy Tran",
    description:
        "Xin chào, mình là Duy Tran — Software Engineer & AI enthusiast. Tác giả blog xDev Asia, nơi chia sẻ kiến thức lập trình, AI, DevOps và công nghệ từ kinh nghiệm thực tế.",
    alternates: { canonical: `${SITE_URL}/gioi-thieu/` },
    openGraph: {
        title: "Giới thiệu — Duy Tran | xDev Asia",
        description:
            "Software Engineer & AI enthusiast. Chia sẻ kiến thức lập trình, AI, DevOps và công nghệ từ kinh nghiệm thực tế.",
        url: `${SITE_URL}/gioi-thieu/`,
        siteName: "xDev Asia",
        locale: "vi_VN",
        type: "profile",
    },
    twitter: {
        card: "summary",
        title: "Giới thiệu — Duy Tran | xDev Asia",
        description:
            "Software Engineer & AI enthusiast. Chia sẻ kiến thức lập trình, AI, DevOps và công nghệ.",
    },
};

export default function AboutPage() {
    const settings = getSettings();
    const allPosts = getAllPosts();
    const allSeries = getAllSeries();
    const projectCount = showcaseRepos.length;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        mainEntity: {
            "@type": "Person",
            name: "Duy Tran",
            url: `${SITE_URL}/gioi-thieu/`,
            image: `${SITE_URL}/avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg`,
            jobTitle: "Software Engineer",
            description:
                "Pursuing an AI-first mindset and intelligent system architecture. I build solutions by combining technology, creativity, and the ability to see structure in chaos.",
            sameAs: [settings.github_url].filter(Boolean),
        },
    };

    const stats = [
        { label: "Bài viết", value: allPosts.length, icon: IconCode },
        { label: "Series", value: allSeries.length, icon: IconBook },
        { label: "Dự án OSS", value: projectCount, icon: IconRocket },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* ─── Hero ─── */}
            <section className="hero-gradient py-14 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center gap-6">
                        <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                            <Image
                                src="/avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg"
                                alt="Duy Tran"
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-2">
                                Duy Tran
                            </h1>
                            <p className="text-brand-600 font-semibold text-sm md:text-base mb-3">
                                Software Engineer &amp; AI Enthusiast
                            </p>
                            <p className="text-zinc-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                                Pursuing an AI-first mindset and intelligent system architecture. I build solutions by combining technology, creativity, and the ability to see structure in chaos — the foundation for becoming a Solution Architect.
                            </p>
                        </div>
                        {settings.github_url && (
                            <a
                                href={settings.github_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
                            >
                                <IconGitHub size={16} />
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* ─── Stats ─── */}
            <section className="py-10 lg:py-14">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-3 gap-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="post-card rounded-2xl p-5 md:p-6 text-center"
                            >
                                <stat.icon size={20} className="mx-auto text-brand-500 mb-2" />
                                <div className="text-2xl md:text-3xl font-extrabold text-zinc-900">
                                    {stat.value}
                                </div>
                                <div className="text-xs md:text-sm text-zinc-500 mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── About ─── */}
            <section className="section-alt py-14 lg:py-18">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title mb-6">Về xDev Asia</h2>
                    <div className="prose prose-zinc max-w-none text-sm md:text-base leading-relaxed space-y-4">
                        <p>
                            <strong>xDev Asia</strong> là blog cá nhân nơi mình chia sẻ kiến thức về lập trình, AI, DevOps
                            và công nghệ từ kinh nghiệm thực tế hàng ngày. Tất cả nội dung đều miễn phí.
                        </p>
                        <p>
                            Mình tin rằng cách tốt nhất để học là <em>chia sẻ lại</em> — viết blog, xây series,
                            làm dự án open source. Mỗi bài viết trên xDev đều được đúc kết từ những bài học thực tế,
                            không chỉ lý thuyết suông.
                        </p>
                        <h3 className="text-lg font-bold text-zinc-800 mt-6">Chủ đề mình hay viết</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>AI & Machine Learning</strong> — LLM, Fine-tuning, RAG, MLOps</li>
                            <li><strong>Backend & System Design</strong> — Golang, Spring Boot, PostgreSQL</li>
                            <li><strong>DevOps & Infrastructure</strong> — Kubernetes, Docker, CI/CD, Linux</li>
                            <li><strong>Security & Architecture</strong> — Thiết kế hệ thống phân quyền, bảo mật</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-10 lg:py-14">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="cta-blue p-8 md:p-12 text-center">
                        <div className="cta-blue-orb cta-blue-orb-1" />
                        <div className="cta-blue-orb cta-blue-orb-2" />
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                                Khám phá nội dung tại xDev
                            </h2>
                            <p className="text-blue-200/80 mb-6 max-w-xl mx-auto text-sm md:text-base">
                                Blog, series, và dự án open source — tất cả đều miễn phí.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link
                                    href="/blog/"
                                    className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-white text-blue-700 shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <IconCode size={16} />
                                    Đọc Blog
                                </Link>
                                <Link
                                    href="/series/"
                                    className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white/90 border border-white/25 hover:bg-white/10 transition-all duration-200"
                                >
                                    Xem Series
                                    <IconArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
