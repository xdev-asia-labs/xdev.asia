export default function WaveDivider({
    flip = false,
    className = "",
    color = "currentColor",
}: {
    flip?: boolean;
    className?: string;
    color?: string;
}) {
    return (
        <div
            className={`wave-divider ${flip ? "wave-flip" : ""} ${className}`}
            aria-hidden="true"
        >
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="wave-layer wave-1">
                <path
                    d="M0,30 C240,65 480,5 720,40 C960,75 1200,15 1440,45 L1440,80 L0,80Z"
                    fill={color}
                />
            </svg>
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="wave-layer wave-2">
                <path
                    d="M0,55 C360,15 720,70 1080,25 C1260,10 1380,50 1440,35 L1440,80 L0,80Z"
                    fill={color}
                    opacity="0.4"
                />
            </svg>
        </div>
    );
}
