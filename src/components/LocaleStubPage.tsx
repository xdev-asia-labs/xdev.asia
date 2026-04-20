import type { Metadata } from "next";
import Link from "next/link";
import {
  DEFAULT_LOCALE,
  LOCALE_FLAGS,
  LOCALE_LABELS,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

interface LocaleStubProps {
  locale: Locale;
}

export function buildLocaleStubMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  return {
    title: `${LOCALE_LABELS[locale]} – xDev.asia`,
    description: dict.language_notice.vietnamese_content,
    robots: { index: false, follow: true },
    alternates: {
      canonical: `/${locale}`,
    },
  };
}

export default function LocaleStubPage({ locale }: LocaleStubProps) {
  const dict = getDictionary(locale);
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
      <div className="text-center">
        <div className="text-6xl mb-4" aria-hidden="true">
          {LOCALE_FLAGS[locale]}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
          {LOCALE_LABELS[locale]}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8">
          {dict.language_notice.vietnamese_content}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-brand-600 text-white text-sm font-semibold shadow-sm hover:bg-brand-700 transition-colors"
          >
            {LOCALE_FLAGS[DEFAULT_LOCALE]} {LOCALE_LABELS[DEFAULT_LOCALE]}
          </Link>
          <Link
            href="/blog/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 text-sm font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            {dict.nav.blog}
          </Link>
          <Link
            href="/series/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 text-sm font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            {dict.nav.series}
          </Link>
        </div>
      </div>
    </div>
  );
}
