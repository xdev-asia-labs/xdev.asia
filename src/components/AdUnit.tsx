"use client";

import { useEffect, useRef } from "react";

const ADSENSE_PUB_ID = "ca-pub-4477428104110157";

type AdFormat = "auto" | "fluid" | "rectangle" | "horizontal" | "vertical";

interface AdUnitProps {
    /** Ad slot ID from AdSense (e.g. "1234567890") */
    slot: string;
    /** Ad format — "auto" recommended for responsive */
    format?: AdFormat;
    /** Extra className for the wrapper div */
    className?: string;
    /** For in-article ads, use "fluid" format with this layout */
    layout?: "in-article";
}

export default function AdUnit({
    slot,
    format = "auto",
    className = "",
    layout,
}: AdUnitProps) {
    const adRef = useRef<HTMLModElement>(null);
    const pushed = useRef(false);

    useEffect(() => {
        if (pushed.current) return;
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const adsbygoogle = (window as any).adsbygoogle || [];
            adsbygoogle.push({});
            pushed.current = true;
        } catch {
            // AdSense not loaded or blocked
        }
    }, []);

    return (
        <div className={`ad-container overflow-hidden text-center ${className}`}>
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client={ADSENSE_PUB_ID}
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive="true"
                {...(layout ? { "data-ad-layout": layout } : {})}
            />
        </div>
    );
}

/**
 * In-article ad — fluid format, blends into content flow.
 */
export function InArticleAd({ className = "" }: { className?: string }) {
    return (
        <AdUnit
            slot="2738496555"
            format="fluid"
            layout="in-article"
            className={`my-8 ${className}`}
        />
    );
}

/**
 * Sidebar ad — rectangle format for sidebars.
 */
export function SidebarAd({ className = "" }: { className?: string }) {
    return (
        <AdUnit
            slot="1209792468"
            format="auto"
            className={`mb-6 ${className}`}
        />
    );
}

/**
 * Banner ad — horizontal for header/footer areas.
 */
export function BannerAd({ className = "" }: { className?: string }) {
    return (
        <AdUnit
            slot="1209792468"
            format="auto"
            className={className}
        />
    );
}
