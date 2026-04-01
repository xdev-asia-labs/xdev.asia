import Link from "next/link";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    basePath: string;
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
    if (totalPages <= 1) return null;

    const pages: (number | "...")[] = [];
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            pages.push(i);
        } else if (pages[pages.length - 1] !== "...") {
            pages.push("...");
        }
    }

    const pageHref = (p: number) => p === 1 ? `${basePath}` : `${basePath}page/${p}/`;

    return (
        <nav className="flex items-center justify-center gap-2 mt-12" aria-label="Phân trang">
            {currentPage > 1 && (
                <Link
                    href={pageHref(currentPage - 1)}
                    className="pagination-btn"
                    aria-label="Trang trước"
                >
                    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M15 19l-7-7 7-7" /></svg>
                </Link>
            )}

            {pages.map((p, i) =>
                p === "..." ? (
                    <span key={`dots-${i}`} className="px-2 text-zinc-400 dark:text-zinc-600 text-sm">…</span>
                ) : (
                    <Link
                        key={p}
                        href={pageHref(p)}
                        className={`pagination-btn ${p === currentPage ? "pagination-btn-active" : ""}`}
                        aria-current={p === currentPage ? "page" : undefined}
                    >
                        {p}
                    </Link>
                )
            )}

            {currentPage < totalPages && (
                <Link
                    href={pageHref(currentPage + 1)}
                    className="pagination-btn"
                    aria-label="Trang sau"
                >
                    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
                </Link>
            )}
        </nav>
    );
}
