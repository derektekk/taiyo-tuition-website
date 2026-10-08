import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const VideoModal = ({ isOpen, onClose }) => {
    const videoRef = useRef(null);

    // Set video volume when modal opens or video loads
    useEffect(() => {
        if (isOpen && videoRef.current) {
            const video = videoRef.current;

            // Set volume to 15%
            video.volume = 0.1;

            // Unmute the video so the volume can be heard
            video.muted = false;

            // Also set volume when video metadata loads (in case it's not ready yet)
            const handleLoadedMetadata = () => {
                video.volume = 0.1;
                video.muted = false;
            };

            video.addEventListener("loadedmetadata", handleLoadedMetadata);

            // Cleanup event listener
            return () => {
                video.removeEventListener(
                    "loadedmetadata",
                    handleLoadedMetadata
                );
            };
        }
    }, [isOpen]);

    // Close modal on escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden"; // Prevent background scrolling
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    // Close modal when clicking outside
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4"
            onClick={handleBackdropClick}
        >
            <div className="relative w-[50vh] h-[80vh] bg-gradient-secondary rounded-2xl">
                {/* Close Button */}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close video"
                    className="absolute -top-8 -right-8 z-10 bg-gradient-secondary bg-opacity-50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-75 transition-all duration-200 max-sm:-top-2 max-sm:-right-2"
                >
                    <X className="size-4" strokeWidth={2} aria-hidden="true" />
                </button>

                {/* Video Content */}
                <div className="w-full h-full flex items-center justify-center p-6">
                    <video
                        ref={videoRef}
                        className="w-full h-full rounded-lg object-cover shadow-md"
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/taiyoIntro.webm" type="video/webm" />
                        <source src="/taiyoIntro.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default VideoModal;
