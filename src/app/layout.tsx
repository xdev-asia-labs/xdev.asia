import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import type { NavTopic } from "@/components/Header";
import Footer from "@/components/Footer";
import { getSettings, getAvailableTopics } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const settings = getSettings();
const navTopics: NavTopic[] = getAvailableTopics().map(({ slug, name, icon }) => ({ slug, name, icon }));

export const metadata: Metadata = {
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
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-zinc-800">
        <Header topics={navTopics} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
