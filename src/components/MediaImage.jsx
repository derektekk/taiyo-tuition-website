import { useLayoutEffect, useRef, useState } from "react";

const join = (...parts) => parts.filter(Boolean).join(" ");

const MediaImage = ({
    src,
    alt,
    className = "",
    imgClassName = "",
    loading = "lazy",
    decoding = "async",
    fetchPriority,
    ...imgProps
}) => {
    const imgRef = useRef(null);
    const [ready, setReady] = useState(false);

    useLayoutEffect(() => {
        const img = imgRef.current;
        if (img?.complete && img.naturalWidth > 0) {
            setReady(true);
            return;
        }
        setReady(false);
    }, [src]);

    const markReady = () => setReady(true);
    const positioned = /\b(absolute|fixed|sticky)\b/.test(className);

    return (
        <span
            className={join(
                "block overflow-hidden",
                !positioned && "relative",
                className
            )}
        >
            {!ready && (
                <span
                    aria-hidden="true"
                    className="media-shimmer pointer-events-none absolute inset-0 motion-reduce:animate-none"
                />
            )}
            <img
                ref={imgRef}
                src={src}
                alt={alt}
                loading={loading}
                decoding={decoding}
                fetchPriority={fetchPriority}
                onLoad={markReady}
                onError={markReady}
                className={join(
                    "media-image block h-full w-full",
                    ready && "is-ready",
                    imgClassName
                )}
                {...imgProps}
            />
        </span>
    );
};

export default MediaImage;
