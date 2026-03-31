"use client";

import { useState, useCallback } from "react";
import Image, { type ImageProps } from "next/image";

type SkeletonImageProps = ImageProps & {
    skeletonClassName?: string;
};

export default function SkeletonImage({ skeletonClassName, className, onLoad, ...props }: SkeletonImageProps) {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = useCallback(
        (e: React.SyntheticEvent<HTMLImageElement>) => {
            setLoaded(true);
            if (typeof onLoad === "function") {
                onLoad(e as Parameters<NonNullable<ImageProps["onLoad"]>>[0]);
            }
        },
        [onLoad],
    );

    return (
        <>
            {!loaded && (
                <div
                    className={`skeleton-shimmer absolute inset-0 ${skeletonClassName ?? ""}`}
                    aria-hidden
                />
            )}
            <Image
                {...props}
                className={`${className ?? ""} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
                onLoad={handleLoad}
            />
        </>
    );
}
