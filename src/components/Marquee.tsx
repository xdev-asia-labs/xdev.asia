interface MarqueeProps {
    items: string[];
    speed?: number;
    className?: string;
    reverse?: boolean;
}

export default function Marquee({ items, speed = 35, className = "", reverse = false }: MarqueeProps) {
    return (
        <div className={`marquee-wrap ${className}`} aria-hidden="true">
            <div
                className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {[...items, ...items].map((item, i) => (
                    <span key={i} className="marquee-item">
                        {item}
                        <span className="marquee-sep">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
