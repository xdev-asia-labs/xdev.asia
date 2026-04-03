import { AuthProvider } from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import GlobalChatbot from "@/components/GlobalChatbot";
import type { NavTopic } from "@/components/Header";
import Header from "@/components/Header";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import LoginModal from "@/components/LoginModal";
import { buildSearchIndex, getAvailableTopics, getSettings } from "@/lib/data";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://xdev.asia"),
  title: {
    default: settings.site_name || "xDev",
    template: `%s | ${settings.site_name || "xDev"}`,
  },
  description: settings.site_description || "Nền tảng chia sẻ kiến thức lập trình",
  keywords: settings.meta_keywords || "lms, học trực tuyến, khóa học, lập trình",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <link rel="alternate" type="application/rss+xml" title={settings.site_name || "xDev"} href="/feed.xml/" />
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()` }} />
        <meta name="news_keywords" content="lập trình, AI, DevOps, công nghệ, machine learning, web development" />
        <meta name="article:publisher" content="xDev Asia" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6342139522924885" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 transition-colors duration-200">
        <AuthProvider>
          <ReadingProgressBar />
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold">
            Chuyển đến nội dung chính
          </a>
          <Header topics={navTopics} />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
          <LoginModal />
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
