import {
  IconAppStore,
  IconArrowRight,
  IconCheckCircle,
  IconShield,
  IconStar,
} from "@/components/Icons";
import {
  LOCALES,
  LOCALE_HREFLANG,
  LOCALE_HTML_LANG,
  localizedPath,
  type Locale,
} from "@/lib/i18n/config";
import { DISCOVER_ROBOTS, SITE_URL, jsonLdScriptContent } from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type GameCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  availabilityPill: string;
  languagePill: string;
  featuresTitle: string;
  featuresSubtitle: string;
  features: Array<{ title: string; body: string }>;
  modesTitle: string;
  modes: Array<{ label: string; title: string; body: string }>;
  privacyTitle: string;
  privacyBody: string;
  storeTitle: string;
  storeBody: string;
  iosStatus: string;
  androidStatus: string;
  contactLabel: string;
};

const SPRITES = [
  { src: "/images/games/tim-mau-vui/red-apple.png", alt: "Red apple" },
  { src: "/images/games/tim-mau-vui/blue-fish.png", alt: "Blue fish" },
  { src: "/images/games/tim-mau-vui/yellow-star.png", alt: "Yellow star" },
  { src: "/images/games/tim-mau-vui/green-tree.png", alt: "Green tree" },
  { src: "/images/games/tim-mau-vui/purple-kite.png", alt: "Purple kite" },
  { src: "/images/games/tim-mau-vui/orange-ball.png", alt: "Orange ball" },
];

const COPY: Record<Locale, GameCopy> = {
  vi: {
    metaTitle: "Tìm Màu Vui - game học màu cho trẻ em",
    metaDescription:
      "Tìm Màu Vui là game nhận biết màu sắc cho trẻ em với thử thách mỗi ngày, hình ảnh dễ thương, đa ngôn ngữ và thiết kế an toàn cho gia đình.",
    eyebrow: "Game giáo dục cho trẻ em",
    title: "Tìm Màu Vui",
    subtitle:
      "Một trò chơi nhỏ để bé nhận biết màu sắc qua hình ảnh quen thuộc, mỗi lượt chỉ vài phút nhưng đủ vui để quay lại mỗi ngày.",
    primaryCta: "Xem trạng thái phát hành",
    secondaryCta: "Chính sách riêng tư",
    availabilityPill: "iOS & Android",
    languagePill: "VI · EN · 日本語 · 繁中",
    featuresTitle: "Học màu bằng nhịp chơi nhẹ nhàng",
    featuresSubtitle:
      "Tìm Màu Vui được làm cho các phiên chơi ngắn, rõ ràng và thân thiện với trẻ nhỏ.",
    features: [
      {
        title: "Nhìn hình, chọn màu",
        body: "Mỗi câu hỏi đưa ra một màu cần tìm và nhiều đồ vật minh họa để bé luyện phản xạ nhận biết.",
      },
      {
        title: "Thử thách hằng ngày",
        body: "Chế độ mỗi ngày có số vòng cố định, lưu chuỗi ngày và số sao ngay trên thiết bị.",
      },
      {
        title: "Đa ngôn ngữ",
        body: "Giao diện game hỗ trợ tiếng Việt, English, 日本語 và 繁體中文, có nút đổi nhanh trong màn hình chơi.",
      },
    ],
    modesTitle: "Các chế độ trong game",
    modes: [
      {
        label: "Daily",
        title: "Hôm nay",
        body: "10 vòng chơi theo ngày, phù hợp để bé tạo thói quen học màu đều đặn.",
      },
      {
        label: "Quick",
        title: "Chơi nhanh",
        body: "6 vòng ngắn cho những lúc muốn chơi lại ngay mà không ảnh hưởng tiến độ ngày.",
      },
      {
        label: "Parents",
        title: "Góc phụ huynh",
        body: "Xem cách game lưu điểm, trạng thái quảng cáo và xóa điểm khi cần.",
      },
    ],
    privacyTitle: "Thiết kế cho gia đình",
    privacyBody:
      "Game lưu điểm cục bộ trên thiết bị. Quảng cáo Android/iOS dùng AdMob với mức nội dung G, tắt cá nhân hóa và bật cờ child-directed/under-age.",
    storeTitle: "Trạng thái phát hành",
    storeBody:
      "Bản Android và iOS đang được đóng gói để phát hành. Trang này sẽ cập nhật nút tải khi app có mặt trên store.",
    iosStatus: "iOS: đang chuẩn bị App Store",
    androidStatus: "Android: đang chuẩn bị Google Play",
    contactLabel: "Liên hệ xDev",
  },
  en: {
    metaTitle: "Color Fun Hunt - a color learning game for kids",
    metaDescription:
      "Color Fun Hunt is a kid-friendly color recognition game with daily challenges, playful objects, multilingual UI, and family-safe settings.",
    eyebrow: "Educational game for kids",
    title: "Color Fun Hunt",
    subtitle:
      "A tiny game where children find colors through familiar objects. Each session takes only a few minutes and stays cheerful enough for daily play.",
    primaryCta: "View release status",
    secondaryCta: "Privacy policy",
    availabilityPill: "iOS & Android",
    languagePill: "VI · EN · 日本語 · 繁中",
    featuresTitle: "Color practice at a gentle pace",
    featuresSubtitle:
      "Color Fun Hunt is built around short, clear, child-friendly play sessions.",
    features: [
      {
        title: "See objects, find colors",
        body: "Each round asks for one color and shows several illustrated objects for quick recognition practice.",
      },
      {
        title: "Daily challenge",
        body: "Daily mode has a fixed round count and saves streaks, stars, and best score on the device.",
      },
      {
        title: "Multilingual play",
        body: "The game supports Vietnamese, English, Japanese, and Traditional Chinese with a quick in-game switcher.",
      },
    ],
    modesTitle: "Game modes",
    modes: [
      {
        label: "Daily",
        title: "Today",
        body: "10 rounds per day for a small, repeatable color-learning habit.",
      },
      {
        label: "Quick",
        title: "Quick Play",
        body: "6 short rounds for replaying without changing daily progress.",
      },
      {
        label: "Parents",
        title: "Parent corner",
        body: "Review local progress storage, ad status, and reset scores when needed.",
      },
    ],
    privacyTitle: "Family-minded by design",
    privacyBody:
      "Progress is stored locally on the device. Android/iOS ads use AdMob with G-rated content, personalization disabled, and child-directed/under-age flags enabled.",
    storeTitle: "Release status",
    storeBody:
      "Android and iOS builds are being prepared for release. Store download buttons will appear here once the app is live.",
    iosStatus: "iOS: preparing for App Store",
    androidStatus: "Android: preparing for Google Play",
    contactLabel: "Contact xDev",
  },
  ja: {
    metaTitle: "いろさがし - 子ども向け色あそびゲーム",
    metaDescription:
      "いろさがしは、毎日のチャレンジ、やさしいイラスト、多言語UI、家族向けの安全設定を備えた色認識ゲームです。",
    eyebrow: "子ども向け学習ゲーム",
    title: "いろさがし",
    subtitle:
      "身近なものを見ながら色を探す小さなゲームです。1回数分で遊べて、毎日の練習にも向いています。",
    primaryCta: "公開状況を見る",
    secondaryCta: "プライバシーポリシー",
    availabilityPill: "iOS & Android",
    languagePill: "VI · EN · 日本語 · 繁中",
    featuresTitle: "やさしいテンポで色を練習",
    featuresSubtitle:
      "いろさがしは、短くわかりやすい子ども向けセッションとして作っています。",
    features: [
      {
        title: "絵を見て色を探す",
        body: "各ラウンドで探す色が出て、複数のイラストから選びます。",
      },
      {
        title: "毎日のチャレンジ",
        body: "毎日モードは固定ラウンド数で、連続日数、スター、ベストスコアを端末に保存します。",
      },
      {
        title: "多言語対応",
        body: "ベトナム語、英語、日本語、繁體中文に対応し、ゲーム画面で素早く切り替えできます。",
      },
    ],
    modesTitle: "ゲームモード",
    modes: [
      {
        label: "Daily",
        title: "今日",
        body: "1日10ラウンドで、色を少しずつ練習できます。",
      },
      {
        label: "Quick",
        title: "すぐ遊ぶ",
        body: "毎日の進捗を変えずに遊べる6ラウンドの短いモードです。",
      },
      {
        label: "Parents",
        title: "保護者向け",
        body: "進捗の保存、広告状態、スコア削除を確認できます。",
      },
    ],
    privacyTitle: "家族向けの設計",
    privacyBody:
      "進捗は端末内に保存されます。Android/iOS の広告は AdMob を使用し、G レーティング、パーソナライズ無効、子ども向け/同意年齢未満の設定を有効にしています。",
    storeTitle: "公開状況",
    storeBody:
      "Android と iOS のビルドは公開準備中です。ストアで公開後、このページにダウンロードボタンを追加します。",
    iosStatus: "iOS: App Store 準備中",
    androidStatus: "Android: Google Play 準備中",
    contactLabel: "xDev に連絡",
  },
  "zh-tw": {
    metaTitle: "找顏色 - 兒童顏色學習遊戲",
    metaDescription:
      "找顏色是一款適合兒童的顏色辨識遊戲，包含每日挑戰、可愛圖像、多語言介面與家庭友善設定。",
    eyebrow: "兒童教育遊戲",
    title: "找顏色",
    subtitle:
      "透過熟悉的物品練習找顏色。每次遊玩只要幾分鐘，適合每天輕鬆練習。",
    primaryCta: "查看發布狀態",
    secondaryCta: "隱私權政策",
    availabilityPill: "iOS & Android",
    languagePill: "VI · EN · 日本語 · 繁中",
    featuresTitle: "用輕鬆節奏練習顏色",
    featuresSubtitle:
      "找顏色以短時間、清楚、適合孩子的遊戲回合為核心。",
    features: [
      {
        title: "看物品，找顏色",
        body: "每回合會出現要找的顏色，孩子從多個插圖物品中選出答案。",
      },
      {
        title: "每日挑戰",
        body: "每日模式有固定回合數，並在裝置上保存連續天數、星星與最高分。",
      },
      {
        title: "多語言遊玩",
        body: "遊戲支援越南文、英文、日文與繁體中文，可在遊戲中快速切換。",
      },
    ],
    modesTitle: "遊戲模式",
    modes: [
      {
        label: "Daily",
        title: "今天",
        body: "每天10回合，建立穩定的顏色學習習慣。",
      },
      {
        label: "Quick",
        title: "快速玩",
        body: "6個短回合，適合想立即再玩一次且不影響每日進度時使用。",
      },
      {
        label: "Parents",
        title: "家長專區",
        body: "查看本機進度保存、廣告狀態，並可在需要時清除分數。",
      },
    ],
    privacyTitle: "以家庭為中心的設計",
    privacyBody:
      "遊戲進度會保存在本裝置。Android/iOS 廣告使用 AdMob，內容分級為 G，關閉個人化，並啟用兒童導向/未達同意年齡設定。",
    storeTitle: "發布狀態",
    storeBody:
      "Android 與 iOS 版本正在準備發布。App 上架後，此頁會更新下載按鈕。",
    iosStatus: "iOS: App Store 準備中",
    androidStatus: "Android: Google Play 準備中",
    contactLabel: "聯絡 xDev",
  },
};

const OG_IMAGE = `${SITE_URL}/images/games/tim-mau-vui/app-icon.png`;

export function getTimMauVuiMetadata(locale: Locale): Metadata {
  const copy = COPY[locale];
  const path = localizedPath(locale, "/games/tim-mau-vui/");
  const canonical = `${SITE_URL}${path}`;
  const languageAlternates = Object.fromEntries(
    LOCALES.map((loc) => [
      LOCALE_HREFLANG[loc],
      `${SITE_URL}${localizedPath(loc, "/games/tim-mau-vui/")}`,
    ])
  );

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical,
      languages: {
        ...languageAlternates,
        "x-default": `${SITE_URL}/games/tim-mau-vui/`,
      },
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: canonical,
      siteName: "xDev Asia",
      type: "website",
      images: [
        {
          url: OG_IMAGE,
          width: 1024,
          height: 1024,
          alt: "Tìm Màu Vui",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: copy.metaTitle,
      description: copy.metaDescription,
      images: [OG_IMAGE],
    },
    robots: DISCOVER_ROBOTS,
  };
}

export default function TimMauVuiPage({ locale }: { locale: Locale }) {
  const copy = COPY[locale];
  const href = (path: string) => localizedPath(locale, path);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: copy.title,
    alternateName: "Tìm Màu Vui",
    applicationCategory: "GameApplication",
    operatingSystem: "Android, iOS",
    description: copy.metaDescription,
    image: OG_IMAGE,
    url: `${SITE_URL}${href("/games/tim-mau-vui/")}`,
    inLanguage: LOCALE_HTML_LANG[locale],
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
    },
    publisher: {
      "@type": "Organization",
      name: "xDev Asia",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScriptContent(jsonLd) }}
      />
      <section className="relative overflow-hidden bg-[#fff7df]">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/games/tim-mau-vui/app-icon.png"
            alt=""
            width={430}
            height={430}
            priority
            className="absolute -right-14 top-10 hidden h-72 w-72 rotate-6 object-contain opacity-95 sm:block lg:right-16 lg:h-[27rem] lg:w-[27rem]"
          />
          {SPRITES.map((sprite, index) => (
            <Image
              key={sprite.src}
              src={sprite.src}
              alt=""
              width={120}
              height={120}
              className={[
                "absolute hidden object-contain drop-shadow-sm md:block",
                index === 0 ? "left-[54%] top-16 h-20 w-20 -rotate-12" : "",
                index === 1 ? "right-[32%] bottom-24 h-24 w-24 rotate-6" : "",
                index === 2 ? "right-[8%] bottom-16 h-24 w-24 -rotate-6" : "",
                index === 3 ? "left-[62%] bottom-8 h-28 w-28 rotate-3" : "",
                index === 4 ? "right-[24%] top-24 h-24 w-24 rotate-12" : "",
                index === 5 ? "right-[5%] top-[52%] h-20 w-20 -rotate-3" : "",
              ].join(" ")}
            />
          ))}
        </div>

        <div className="relative mx-auto flex min-h-[calc(100svh-9rem)] max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-4">
              <Image
                src="/images/games/tim-mau-vui/app-icon.png"
                alt="Tìm Màu Vui app icon"
                width={96}
                height={96}
                priority
                className="h-20 w-20 rounded-2xl border border-white/80 bg-white object-contain p-1 shadow-sm sm:h-24 sm:w-24"
              />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
                  {copy.eyebrow}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-700 shadow-sm">
                    {copy.availabilityPill}
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-700 shadow-sm">
                    {copy.languagePill}
                  </span>
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-black tracking-normal text-[#253047] sm:text-6xl lg:text-7xl">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-700 sm:text-xl">
              {copy.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#availability"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#253047] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#172033]"
              >
                <IconAppStore size={18} />
                {copy.primaryCta}
              </Link>
              <Link
                href={href("/pages/privacy-policy/")}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-amber-300 bg-white px-5 py-3 text-sm font-bold text-zinc-800 transition hover:border-amber-400 hover:bg-amber-50"
              >
                <IconShield size={18} />
                {copy.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="section-label">
              <IconStar size={14} />
              Tìm Màu Vui
            </div>
            <h2 className="section-title">{copy.featuresTitle}</h2>
            <p className="section-subtitle">{copy.featuresSubtitle}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {copy.features.map((feature, index) => (
              <article
                key={feature.title}
                className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <Image
                    src={SPRITES[index * 2]?.src ?? SPRITES[0].src}
                    alt={SPRITES[index * 2]?.alt ?? "Game object"}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-14 lg:py-18">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <div className="section-label">
              <IconCheckCircle size={14} />
              Modes
            </div>
            <h2 className="section-title">{copy.modesTitle}</h2>
            <p className="section-subtitle">{copy.privacyBody}</p>
          </div>
          <div className="grid gap-3">
            {copy.modes.map((mode) => (
              <article
                key={mode.title}
                className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
                  {mode.label}
                </div>
                <h3 className="text-lg font-bold text-zinc-900">{mode.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{mode.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-lg border border-zinc-200 bg-[#fff7df] p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white text-amber-700 shadow-sm">
                <IconShield size={22} />
              </div>
              <h2 className="text-2xl font-extrabold text-[#253047]">
                {copy.privacyTitle}
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-700">{copy.privacyBody}</p>
            </article>
            <article id="availability" className="rounded-lg border border-[#253047]/15 bg-[#253047] p-6 text-white">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white">
                <IconAppStore size={22} />
              </div>
              <h2 className="text-2xl font-extrabold">{copy.storeTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-200">{copy.storeBody}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-white/15 bg-white/10 p-4 text-sm font-semibold">
                  {copy.iosStatus}
                </div>
                <div className="rounded-lg border border-white/15 bg-white/10 p-4 text-sm font-semibold">
                  {copy.androidStatus}
                </div>
              </div>
              <Link
                href={href("/pages/ve-toi/")}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-200 transition hover:text-white"
              >
                {copy.contactLabel}
                <IconArrowRight size={16} />
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
