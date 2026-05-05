import { AuthProvider } from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import CommunityBanner from "@/components/CommunityBanner";
import GlobalChatbot from "@/components/GlobalChatbot";
import type { NavTopic } from "@/components/Header";
import Header from "@/components/Header";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import LoginModal from "@/components/LoginModal";
import { buildSearchIndex, getAvailableTopics, getSettings } from "@/lib/data";
import { getDictionary } from "@/lib/i18n/dictionaries";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_HREFLANG,
  LOCALE_HTML_LANG,
  localePrefix as getLocalePrefix,
  type Locale,
} from "@/lib/i18n/config";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const settings = getSettings();
const navTopics: NavTopic[] = getAvailableTopics().map(({ slug, name, icon }) => ({ slug, name, icon }));
const siteContextJson = JSON.stringify(buildSearchIndex());
const SITE_URL = "https://xdev.asia";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: settings.site_name || "xDev",
    template: `%s | ${settings.site_name || "xDev"}`,
  },
  description: settings.site_description || "Nền tảng chia sẻ kiến thức lập trình",
  keywords: settings.meta_keywords || "lms, học trực tuyến, khóa học, lập trình",
  alternates: {
    canonical: "/",
    languages: Object.fromEntries(
      LOCALES.map((loc) => [
        LOCALE_HREFLANG[loc],
        `${SITE_URL}${getLocalePrefix(loc) || "/"}`,
      ])
    ),
  },
};

/**
 * Root layout — always renders with the default locale (vi). Static
 * generation friendly. Non-default locales are served by the dedicated stub
 * pages under app/en, app/ja, app/zh-tw which use the same shell but pass a
 * different `locale` prop down via their own page metadata. The language
 * switcher remembers the user's preference in a cookie for future visits.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale: Locale = DEFAULT_LOCALE;
  const dict = getDictionary(locale);
  const prefix = getLocalePrefix(locale);
  const headerStrings = {
    blog: dict.nav.blog,
    series: dict.nav.series,
    exam_prep: dict.nav.exam_prep,
    roadmap: dict.nav.roadmap,
    about: dict.nav.about,
    topics: dict.nav.topics,
    view_all_posts: dict.nav.view_all_posts,
    search: dict.nav.search,
    mcp: dict.nav.mcp,
    skip_to_content: dict.nav.skip_to_content,
    toggle_menu: dict.nav.toggle_menu,
  };
  const footerStrings = {
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

  return (
    <html
      lang={LOCALE_HTML_LANG[locale]}
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="alternate" type="application/rss+xml" title={settings.site_name || "xDev"} href="/feed.xml/" />
        {LOCALES.map((loc) => (
          <link
            key={loc}
            rel="alternate"
            hrefLang={LOCALE_HREFLANG[loc]}
            href={`${SITE_URL}${getLocalePrefix(loc) || "/"}`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()` }} />
        <meta name="news_keywords" content="lập trình, AI, DevOps, công nghệ, machine learning, web development" />
        <meta name="article:publisher" content="xDev Asia" />
        <meta name="google-adsense-account" content="ca-pub-4477428104110157" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4477428104110157" crossOrigin="anonymous" />
        {/* AMP Auto Ads */}
        <script async custom-element="amp-auto-ads" src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 transition-colors duration-200">
        {/* AMP Auto Ads */}
        <amp-auto-ads type="adsense" data-ad-client="ca-pub-4477428104110157" />
        <AuthProvider>
          <ReadingProgressBar />
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold">
            {dict.nav.skip_to_content}
          </a>
          <Header
            topics={navTopics}
            strings={headerStrings}
            localePrefix={prefix}
            locale={locale}
          />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer strings={footerStrings} localePrefix={prefix} />
          <LoginModal />
          <CommunityBanner />
          <GlobalChatbot siteContext={siteContextJson} />
        </AuthProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CXVDY07EE0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CXVDY07EE0');
          `}
        </Script>


      </body>
    </html>
  );
}
