import React, { useEffect, useState, useRef } from "react";
import ScrollAnimateText from "./ScrollAnimateText";

const About = () => {
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
        <section className="h-auto w-full bg-biege-primary section-card">
            <div className="mx-auto flex flex-col flex-wrap items-center justify-center container-responsive">
                <ScrollAnimateText
                    as="h1"
                    className="text-4xl uppercase font-bold mb-12 max-md:text-3xl"
                >
                    Who Are We
                </ScrollAnimateText>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch relative">
                    <div className="bg-white rounded-lg pt-6 pr-24 pl-6 pb-16 w-full min-h-[300px] flex items-start justify-start section-card-content shadow-md flex-col">
                        <ScrollAnimateText
                            as="h1"
                            className="text-4xl font-bold mb-2"
                        >
                            👨‍🏫
                        </ScrollAnimateText>
                        <ScrollAnimateText as="p" className="text-pretty">
                            <span className="font-bold text-3xl/10 max-md:text-2xl">
                                Our Team
                            </span>{" "}
                            <br />
                            At Taiyo Tuition, we bring together some of
                            Australia's finest private tutors, ranked among the
                            Top 2% in the country. Our team is passionate about
                            guiding students through their academic journey,
                            from Years 5 to 12. <br />
                        </ScrollAnimateText>
                    </div>
                    <div className="bg-white rounded-lg pt-6 pr-6 pl-28 pb-16 w-full min-h-[300px] flex items-end justify-start text-right max-md:pl-16 section-card-content shadow-md flex-col">
                        <ScrollAnimateText
                            as="h1"
                            className="text-4xl font-bold mb-2"
                        >
                            👩‍🎓
                        </ScrollAnimateText>
                        <ScrollAnimateText as="p" className="text-pretty">
                            <span className="font-bold text-3xl/10 max-md:text-2xl">
                                Personalised Learning for Every Student!
                            </span>{" "}
                            <br />
                            Our tutors go beyond simply teaching—they tailor
                            learning experiences to suit each student's unique
                            needs. With a combination of expertise and empathy,
                            they help unlock potential and build confidence in
                            every learner.
                        </ScrollAnimateText>
                    </div>
                    <div className="bg-white rounded-lg pt-16 pr-24 pl-6 pb-6 w-full min-h-[300px] flex items-start justify-center max-md:pl-16 section-card-content shadow-md flex-col">
                        <ScrollAnimateText
                            as="h1"
                            className="text-4xl font-bold mb-2"
                        >
                            💯
                        </ScrollAnimateText>
                        <ScrollAnimateText as="p" className="text-pretty">
                            <span className="font-bold text-3xl/10 max-md:text-2xl">
                                More Than Just Tutors—Mentors for Success!
                            </span>{" "}
                            <br />
                            At Taiyo Tuition, we believe in fostering long-term
                            academic growth. Our tutors don't just focus on
                            grades—they inspire, mentor, and empower students to
                            excel. <br />
                        </ScrollAnimateText>
                    </div>
                    <div className="bg-white rounded-lg pt-16 pr-6 pl-24 pb-6 w-full min-h-[300px] flex items-end justify-center text-right max-md:pr-16 section-card-content shadow-md flex-col">
                        <ScrollAnimateText
                            as="h1"
                            className="text-4xl font-bold mb-2"
                        >
                            📚
                        </ScrollAnimateText>
                        <ScrollAnimateText as="p" className="text-pretty">
                            <span className="font-bold text-3xl/10 max-md:text-2xl">
                                With Dedicated Support and Personalised Guidance
                            </span>{" "}
                            <br /> we create an environment where students can
                            achieve their best! Our tutors provide structured
                            learning plans tailored to each student's goals and
                            learning style.
                        </ScrollAnimateText>
                    </div>
                    <div className="absolute top-[50%] left-[50%] transform  -translate-x-1/2 -translate-y-1/2 z-10 my-1 max-md:relative">
                        <div
                            className="w-72 h-72 bg-primary shadow-md mx-auto rounded-full cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center max-md:rounded-2xl  "
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
        </section>
    );
};

export default About;
