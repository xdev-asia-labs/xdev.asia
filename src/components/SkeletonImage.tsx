"use client";

import Image, { type ImageProps } from "next/image";
import { useCallback, useState } from "react";

type SkeletonImageProps = ImageProps & {
    skeletonClassName?: string;
};

export default function SkeletonImage({ skeletonClassName, className, onLoad, onError, ...props }: SkeletonImageProps) {
    const [settled, setSettled] = useState(false);

    const handleLoad = useCallback(
        (e: React.SyntheticEvent<HTMLImageElement>) => {
            setSettled(true);
            if (typeof onLoad === "function") {
                onLoad(e as Parameters<NonNullable<ImageProps["onLoad"]>>[0]);
            }
        },
        [onLoad],
    );

    const handleError = useCallback(
        (e: React.SyntheticEvent<HTMLImageElement>) => {
            setSettled(true);
            if (typeof onError === "function") {
                onError(e);
            }
        },
        [onError],
    );

    return (
        <>
            {!settled && (
                <div
                    className={`skeleton-shimmer absolute inset-0 ${skeletonClassName ?? ""}`}
                    aria-hidden
                />
            )}
            <Image
                {...props}
                className={`${className ?? ""} transition-opacity duration-500 ${settled ? "opacity-100" : "opacity-0"}`}
                onLoad={handleLoad}
                onError={handleError}
            />
        </>
    );
}
