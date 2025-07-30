import React, { useEffect, useState, useRef } from "react";
import ScrollAnimateText from "./ScrollAnimateText";

const Aim = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const videoRef = useRef(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    // Set video volume when modal opens or video loads
    useEffect(() => {
        if (isModalOpen && videoRef.current) {
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
    }, [isModalOpen]);
    const closeModal = () => setIsModalOpen(false);

    // Close modal on escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden"; // Prevent background scrolling
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isModalOpen]);

    // Close modal when clicking outside
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <>
            <section className="h-auto w-full bg-biege-primary section-card">
                <div className="mx-auto flex flex-col flex-wrap items-center justify-center container-responsive">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch relative">
                        <div className="bg-white rounded-lg pt-6 pr-28 pl-6 pb-16 w-full min-h-[300px] flex items-start justify-start section-card-content shadow-md flex-col">
                            <ScrollAnimateText
                                as="h1"
                                className="text-4xl font-bold mb-2"
                            >
                                🎯
                            </ScrollAnimateText>
                            <ScrollAnimateText as="p" className="text-pretty">
                                <span className="font-bold text-3xl/10 max-md:text-2xl">
                                    Our Aim
                                </span>{" "}
                                <br />
                                Our team's purpose is simple yet powerful: to
                                help every student reach their full potential
                                and go beyond their own expectations. With the
                                right guidance and personalised approach, every
                                student can develop the confidence to excel
                                academically.
                            </ScrollAnimateText>
                        </div>
                        <div className="bg-white rounded-lg pt-6 pr-6 pl-28 pb-16 w-full min-h-[300px] flex items-end justify-start text-right max-md:pl-16 section-card-content shadow-md flex-col">
                            <ScrollAnimateText
                                as="h1"
                                className="text-4xl font-bold mb-2"
                            >
                                🏃‍♂️
                            </ScrollAnimateText>
                            <ScrollAnimateText as="p" className="text-pretty">
                                <span className="font-bold text-3xl/10 max-md:text-2xl">
                                    A Transformative Learning Experience:
                                </span>{" "}
                                <br />
                                We believe education should be enriching and
                                transformative. From Years 5 to 12, we provide
                                the tools and guidance students need to master
                                their studies, develop a love for learning, and
                                navigate their academic paths with confidence.
                            </ScrollAnimateText>
                        </div>
                        <div className="bg-white rounded-lg pt-16 pr-28 pl-6 pb-6 w-full min-h-[300px] flex items-start justify-center max-md:pl-16 section-card-content shadow-md flex-col">
                            <ScrollAnimateText
                                as="h1"
                                className="text-4xl font-bold mb-2"
                            >
                                📝
                            </ScrollAnimateText>
                            <ScrollAnimateText as="p" className="text-pretty">
                                <span className="font-bold text-3xl/10 max-md:text-2xl">
                                    Personalised Support for Every Student:
                                </span>{" "}
                                <br />
                                Through one-on-one tutoring and carefully
                                designed online courses, we focus on unlocking
                                each student's unique strengths. Our goal is to
                                create an environment where academic challenges
                                are met with enthusiasm and resilience.
                            </ScrollAnimateText>
                        </div>
                        <div className="bg-white rounded-lg pt-16 pr-6 pl-28 pb-6 w-full min-h-[300px] flex items-end justify-center text-right max-md:pr-16 section-card-content shadow-md flex-col">
                            <ScrollAnimateText
                                as="h1"
                                className="text-4xl font-bold mb-2"
                            >
                                🏆
                            </ScrollAnimateText>
                            <ScrollAnimateText as="p" className="text-pretty">
                                <span className="font-bold text-3xl/10 max-md:text-2xl">
                                    Building Skills for a Lifetime of
                                    Achievement
                                </span>{" "}
                                <br />
                                We are committed to instilling confidence,
                                determination, and essential skills in every
                                student. At Taiyo Tuition, we don't just aim for
                                academic excellence—we empower students to
                                succeed in all aspects of their educational
                                journey.
                            </ScrollAnimateText>
                        </div>
                        <div className="absolute w-72 h-72 top-[50%] left-[50%] transform max-md:relative -translate-x-1/2 -translate-y-1/2 z-10 my-1">
                            <div
                                className="w-full h-full bg-primary shadow-md rounded-full cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center max-md:rounded-2xl max-md:w-full max-md:h-full"
                                onClick={openModal}
                            >
                                <div className="flex flex-col items-center justify-center gap-4">
                                    <div className="bg-gradient-secondary rounded-4xl w-32 h-32 flex items-center justify-center shadow-md">
                                        <div>
                                            <svg
                                                width="43"
                                                height="50"
                                                viewBox="0 0 43 50"
                                                fill="white"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M40.5 20.6699C43.8333 22.5944 43.8333 27.4056 40.5 29.3301L7.5 48.3827C4.16666 50.3072 1.41487e-06 47.9016 1.58312e-06 44.0526L3.24875e-06 5.94744C3.41699e-06 2.09843 4.16667 -0.307188 7.5 1.61731L40.5 20.6699Z"
                                                    fill="#ffffff"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h1 className="text-3xl font-medium text-white">
                                        Why Taiyo?
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                    onClick={handleBackdropClick}
                >
                    <div className="relative w-[50vh] h-[80vh] bg-gradient-secondary rounded-2xl">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute -top-8 -right-8 z-10 bg-black bg-opacity-50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-75 transition-all duration-200 max-sm:hidden"
                        >
                            ✕
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
                                <source
                                    src="/taiyoIntro.webm"
                                    type="video/webm"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Aim;
