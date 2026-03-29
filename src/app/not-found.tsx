import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
            <div className="text-center max-w-lg">
                {/* Animated 404 */}
                <div className="relative mb-8">
                    <span className="text-[10rem] md:text-[14rem] font-extrabold leading-none gradient-text select-none opacity-20">
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-3xl bg-brand-50 border border-brand-200 flex items-center justify-center shadow-lg animate-pulse">
                            <svg className="w-12 h-12 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-900 mb-3">
                    Không tìm thấy trang
                </h1>
                <p className="text-zinc-500 mb-8 max-w-sm mx-auto leading-relaxed">
                    Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển sang địa chỉ khác.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/"
                        className="btn-glow inline-flex justify-center items-center gap-2 px-6 py-3 text-white font-semibold text-sm"
                    >
                        Về trang chủ
                        <IconArrowRight size={16} />
                    </Link>
                    <Link
                        href="/blog/"
                        className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-zinc-600 transition-all duration-200 hover:text-brand-600 border border-zinc-200 hover:border-brand-300 hover:bg-brand-50"
                    >
                        Đọc bài viết
                    </Link>
                </div>
            </div>
        </div>
    );
}
