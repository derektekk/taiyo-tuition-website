import { useState } from "react";
import taiyoThumbnail from "../assets/taiyo-thumbnail.webp";
import MediaImage from "./MediaImage";
import VideoModal from "./VideoModal";

const PLAY = {
    default: "h-16 w-16 md:h-20 md:w-20",
    compact: "h-11 w-11 md:h-12 md:w-12",
};

const ASPECT = {
    "9/16": "aspect-[9/16]",
    "4/5": "aspect-[4/5]",
    auto: "",
};

const StoryVideo = ({ className = "", size = "default", aspect = "9/16" }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const compact = size === "compact";
    const frame = ASPECT[aspect] ?? ASPECT["9/16"];

    return (
        <>
            <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                aria-label="Play Taiyo video"
                className={`group relative flex ${frame} w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${className}`}
            >
                <MediaImage
                    src={taiyoThumbnail}
                    alt=""
                    className="absolute inset-0 motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:scale-[1.03]"
                    imgClassName="object-cover"
                    loading="eager"
                />
                <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-black/15 transition-colors duration-200 group-hover:bg-black/30"
                />
                <span
                    className={`relative z-10 flex items-center justify-center rounded-full bg-primary/90 shadow-md transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 ${PLAY[size] ?? PLAY.default}`}
                >
                    <svg
                        width={compact ? 16 : 22}
                        height={compact ? 19 : 26}
                        viewBox="0 0 43 50"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-0.5"
                        aria-hidden="true"
                    >
                        <path d="M40.5 20.6699C43.8333 22.5944 43.8333 27.4056 40.5 29.3301L7.5 48.3827C4.16666 50.3072 1.41487e-06 47.9016 1.58312e-06 44.0526L3.24875e-06 5.94744C3.41699e-06 2.09843 4.16667 -0.307188 7.5 1.61731L40.5 20.6699Z" />
                    </svg>
                </span>
            </button>
            <VideoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default StoryVideo;
