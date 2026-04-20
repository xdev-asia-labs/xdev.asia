"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IconChevronDown } from "./Icons";
import {
  LOCALES,
  LOCALE_LABELS,
  LOCALE_FLAGS,
  DEFAULT_LOCALE,
  isLocale,
  type Locale,
} from "@/lib/i18n/config";

interface LanguageSwitcherProps {
  /** Current active locale (server-detected). Defaults to "vi". */
  currentLocale?: Locale;
  /** Visual variant. Compact = icon-only button (mobile-friendly). */
  variant?: "default" | "compact";
}

/**
 * Builds a path that swaps the locale prefix.
 * - vi (default) lives at "/", others at "/<locale>/...".
 */
function buildLocalizedPath(pathname: string, target: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0]?.toLowerCase();

  // Strip existing locale prefix (if any).
  const rest = first && isLocale(first) ? segments.slice(1) : segments;
  const base = rest.length > 0 ? `/${rest.join("/")}` : "/";

  if (target === DEFAULT_LOCALE) return base;
  return base === "/" ? `/${target}` : `/${target}${base}`;
}

export default function LanguageSwitcher({
  currentLocale = DEFAULT_LOCALE,
  variant = "default",
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const switchTo = useCallback(
    (target: Locale) => {
      close();
      if (target === currentLocale) return;
      const next = buildLocalizedPath(pathname || "/", target);
      // Persist user choice for future visits.
      try {
        document.cookie = `xdev_locale=${target}; path=/; max-age=31536000; samesite=lax`;
      } catch {
        /* ignore */
      }
      router.push(next);
    },
    [close, currentLocale, pathname, router]
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
          variant === "compact"
            ? "p-2 text-zinc-500 hover:text-brand-600 hover:bg-zinc-50 dark:hover:bg-zinc-800"
            : "px-2.5 py-1.5 text-zinc-600 hover:text-brand-600 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800"
        }`}
        aria-label="Change language"
        aria-expanded={open}
      >
        <span className="text-base leading-none" aria-hidden="true">
          {LOCALE_FLAGS[currentLocale]}
        </span>
        {variant !== "compact" && (
          <span className="hidden sm:inline">{LOCALE_LABELS[currentLocale]}</span>
        )}
        <IconChevronDown
          size={12}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`absolute right-0 top-full mt-2 w-44 bg-white dark:bg-zinc-900 rounded-xl shadow-xl shadow-zinc-200/50 dark:shadow-black/40 border border-zinc-100 dark:border-zinc-800 py-1.5 z-50 transition-all duration-200 origin-top-right ${
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
        }`}
        role="listbox"
      >
        {LOCALES.map((loc) => {
          const active = loc === currentLocale;
          return (
            <button
              key={loc}
              type="button"
              role="option"
              aria-selected={active}
              onClick={() => switchTo(loc)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm transition-colors ${
                active
                  ? "text-brand-600 bg-brand-50/60 dark:bg-brand-500/10 font-medium"
                  : "text-zinc-600 dark:text-zinc-300 hover:text-brand-600 hover:bg-brand-50/60 dark:hover:bg-zinc-800"
              }`}
            >
              <span className="text-base leading-none" aria-hidden="true">
                {LOCALE_FLAGS[loc]}
              </span>
              <span className="flex-1 text-left">{LOCALE_LABELS[loc]}</span>
              {active && (
                <span className="text-brand-500" aria-hidden="true">
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
