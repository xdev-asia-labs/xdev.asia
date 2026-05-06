"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { Settings } from "@/lib/types";
import { DEFAULT_LOCALE, detectLocaleFromPath, localePrefix as getLocalePrefix } from "@/lib/i18n/config";
import { getClientDictionary } from "@/lib/i18n/client-dictionaries";
import {
  IconFacebook,
  IconGitHub,
  IconLinkedIn,
  IconTelegram,
  IconTikTok,
  IconYouTube,
} from "./Icons";

export interface FooterStrings {
  tagline: string;
  explore: string;
  contact: string;
  blog: string;
  series: string;
  exam_prep: string;
  saved: string;
  search: string;
  rights: string;
  privacy: string;
  terms: string;
  data_deletion: string;
}

export default function FooterClient({
  settings,
  strings,
  localePrefix = "",
}: {
  settings: Settings;
  strings: FooterStrings;
  localePrefix?: string;
}) {
  const pathname = usePathname();
  const activeLocale = detectLocaleFromPath(pathname || "/");
  const activePrefix = getLocalePrefix(activeLocale) || localePrefix;
  const localizedHref = (path: string) => `${activePrefix}${path}`;
  const dict = getClientDictionary(activeLocale);
  const activeStrings: FooterStrings = {
    tagline: dict.footer.tagline,
    explore: dict.footer.explore,
    contact: dict.footer.contact,
    blog: dict.nav.blog,
    series: dict.nav.series,
    exam_prep: dict.nav.exam_prep,
    saved: dict.footer.saved,
    search: dict.nav.search,
    rights: dict.footer.rights,
    privacy: dict.footer.privacy,
    terms: dict.footer.terms,
    data_deletion: dict.footer.data_deletion,
  };

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
  const tagline =
    activeLocale === DEFAULT_LOCALE
      ? settings.site_tagline || settings.site_description || strings.tagline
      : activeStrings.tagline;

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
          <div className="md:col-span-2">
            <Link href={activePrefix || "/"} className="inline-block mb-3">
              <Image
                src="/images/logo/logo-vertical-dark.svg"
                alt={siteName}
                width={120}
                height={30}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p
              className="text-sm leading-relaxed max-w-sm mb-5"
              style={{ color: "rgba(147, 197, 253, 0.7)" }}
            >
              {tagline}
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

          <div>
            <h4 className="footer-heading">{activeStrings.explore}</h4>
            <ul className="space-y-2.5">
              {[
                { href: localizedHref("/blog/"), label: activeStrings.blog },
                { href: localizedHref("/series/"), label: activeStrings.series },
                { href: "/luyen-thi/", label: activeStrings.exam_prep },
                { href: "/bookmarks/", label: activeStrings.saved },
                { href: localizedHref("/search/"), label: activeStrings.search },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">{activeStrings.contact}</h4>
            {settings.site_email && (
              <a
                href={`mailto:${settings.site_email}`}
                className="text-sm block mb-2.5 transition-colors"
              >
                {settings.site_email}
              </a>
            )}
            {contactGithub && (
              <a
                href={contactGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm block mb-2.5 transition-colors"
              >
                GitHub / {contactGithub.split("/").pop()}
              </a>
            )}
            {contactLinkedin && (
              <a
                href={contactLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm block mb-2.5 transition-colors"
              >
                LinkedIn
              </a>
            )}
            {contactFacebook && (
              <a
                href={contactFacebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm block mb-2.5 transition-colors"
              >
                Facebook
              </a>
            )}
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(148, 163, 184, 0.6)" }}>
            &copy; {new Date().getFullYear()} {siteName}. {activeStrings.rights}
          </p>
          <div className="flex items-center gap-4">
            {[
              { href: localizedHref("/pages/chinh-sach-quyen-rieng-tu/"), label: activeStrings.privacy },
              { href: localizedHref("/pages/dieu-khoan-su-dung/"), label: activeStrings.terms },
              { href: localizedHref("/pages/xoa-du-lieu-nguoi-dung/"), label: activeStrings.data_deletion },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs transition-colors"
                style={{ color: "rgba(148, 163, 184, 0.6)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
