import Link from "next/link";
import type { ContentLanguageLink } from "@/lib/data";
import {
  LOCALE_FLAGS,
  LOCALE_LABELS,
  type Locale,
} from "@/lib/i18n/config";

const COPY: Record<Locale, { label: string; unavailable: string }> = {
  vi: {
    label: "Đổi ngôn ngữ nhanh",
    unavailable: "Sắp có",
  },
  en: {
    label: "Quick language switch",
    unavailable: "Soon",
  },
  ja: {
    label: "言語を切り替え",
    unavailable: "準備中",
  },
  "zh-tw": {
    label: "快速切換語言",
    unavailable: "即將推出",
  },
};

export default function ContentLanguageSwitcher({
  links,
  currentLocale,
  className = "",
}: {
  links: ContentLanguageLink[];
  currentLocale: Locale;
  className?: string;
}) {
  const availableCount = links.filter((link) => link.available).length;
  if (availableCount <= 1) return null;

  const copy = COPY[currentLocale];

  return (
    <nav
      aria-label={copy.label}
      className={`flex flex-wrap items-center gap-2 rounded-2xl border border-zinc-200 bg-white/80 p-2.5 shadow-sm shadow-zinc-200/40 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/75 dark:shadow-black/20 ${className}`}
    >
      <span className="px-2 text-[11px] font-bold uppercase tracking-widest text-zinc-400">
        {copy.label}
      </span>
      {links.map((link) => {
        const active = link.locale === currentLocale;
        const label = LOCALE_LABELS[link.locale];
        const content = (
          <>
            <span className="text-base leading-none" aria-hidden="true">
              {LOCALE_FLAGS[link.locale]}
            </span>
            <span>{label}</span>
          </>
        );

        if (!link.available) {
          return (
            <span
              key={link.locale}
              className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-300 dark:border-zinc-800 dark:text-zinc-600"
              title={copy.unavailable}
            >
              {content}
            </span>
          );
        }

        return (
          <Link
            key={link.locale}
            href={link.href}
            aria-current={active ? "page" : undefined}
            title={link.title ? `${label}: ${link.title}` : label}
            className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-colors ${
              active
                ? "border-brand-200 bg-brand-50 text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300"
                : "border-zinc-200 text-zinc-600 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-brand-500/30 dark:hover:bg-brand-500/10 dark:hover:text-brand-300"
            }`}
          >
            {content}
          </Link>
        );
      })}
    </nav>
  );
}
