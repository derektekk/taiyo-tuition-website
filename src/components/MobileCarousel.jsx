import React, { useState, useEffect, useRef } from "react";
import classPhoto1 from "../assets/taiyoImages/classPhotos/classPhoto1.jpg";
import classPhoto2 from "../assets/taiyoImages/classPhotos/classPhoto2.jpg";
import entrance from "../assets/taiyoImages/entrance.jpg";
import taiyoClassroom from "../assets/taiyoImages/taiyoClassroom.jpg";
import classPhoto5 from "../assets/taiyoImages/classPhotos/classPhoto5.jpg";
import classPhoto6 from "../assets/taiyoImages/classPhotos/classPhoto6.jpg";

const MobileCarousel = () => {
    const slides = [
        {
            id: 1,
            type: "image",
            src: classPhoto1,
            alt: "hero",
            className: "object-cover rounded-lg",
        },
        {
            id: 2,
            type: "text",
            emoji: "📖",
            content: "Learn at Your Pace",
        },
        {
            id: 3,
            type: "image",
            src: classPhoto2,
            alt: "hero",
            className: "object-cover rounded-lg",
        },
        {
            id: 4,
            type: "text",
            emoji: "👩‍🏫",
            content: "Expert Tutors Available",
        },
        {
            id: 5,
            type: "image",
            src: entrance,
            alt: "hero",
            className: "object-cover rounded-lg",
        },
        {
            id: 6,
            type: "text",
            emoji: "✅",
            content: "Exceptional Results",
        },
        {
            id: 7,
            type: "image",
            src: taiyoClassroom,
            alt: "hero",
            className: "object-cover rounded-lg",
        },
        {
            id: 8,
            type: "text",
            emoji: "💻",
            content: "Online & In-Person",
        },
        {
            id: 9,
            type: "image",
            src: classPhoto5,
            alt: "hero",
            className: "object-cover rounded-lg",
        },
        {
            id: 10,
            type: "text",
            emoji: "🎯",
            content: "Personalized Learning",
        },
        {
            id: 11,
            type: "image",
            src: classPhoto6,
            alt: "hero",
            className: "object-cover rounded-lg",
        },
        {
            id: 12,
            type: "text",
            emoji: "📈",
            content: "ATAR Excellence Focus",
        },
    ];

    const [isPaused, setIsPaused] = useState(false);
    const scrollRef = useRef(null);
    const scrollPositionRef = useRef(0);
    const pausedPositionRef = useRef(0);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationId;
        const scrollSpeed = 0.5; // pixels per frame
        const containerWidth = scrollContainer.scrollWidth / 2; // Half because we duplicate content

        const animate = () => {
            if (!isPaused) {
                scrollPositionRef.current += scrollSpeed;

                // Reset position when we've scrolled through one complete set
                if (scrollPositionRef.current >= containerWidth) {
                    scrollPositionRef.current =
                        scrollPositionRef.current - containerWidth;
                }

                scrollContainer.style.transform = `translateX(-${scrollPositionRef.current}px)`;
            } else {
                // When paused, maintain the current position
                pausedPositionRef.current = scrollPositionRef.current;
            }
            animationId = requestAnimationFrame(animate);
        };

        // If resuming from pause, start from the paused position
        if (!isPaused && pausedPositionRef.current > 0) {
            scrollPositionRef.current = pausedPositionRef.current;
        }

        animationId = requestAnimationFrame(animate);

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, [isPaused]);

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    const renderSlide = (slide) => {
        if (slide.type === "image") {
            return (
                <div className="w-full h-48">
                    <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            );
        } else if (slide.type === "text") {
            return (
                <div className="w-full h-48 bg-primary rounded-lg p-6 flex items-center-safe justify-center">
                    <div className="text-start">
                        <div className="text-xl mb-1">{slide.emoji}</div>
                        <p className="text-white text-lg/6 text-pretty">
                            {slide.content}
                        </p>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div
            className="md:hidden w-full mx-auto cursor-pointer mb-10"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="w-full overflow-hidden touch-pan-y"
                style={{ WebkitOverflowScrolling: "touch" }}
            >
                <div ref={scrollRef} className="flex w-fit">
                    {/* First set of slides */}
                    {slides.map((slide) => (
                        <div
                            key={`first-${slide.id}`}
                            className="flex-none w-48 mx-2 flex items-stretch"
                        >
                            <div className="w-full">{renderSlide(slide)}</div>
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {slides.map((slide) => (
                        <div
                            key={`second-${slide.id}`}
                            className="flex-none w-48 mx-2 flex items-stretch"
                        >
                            <div className="w-full">{renderSlide(slide)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileCarousel;
