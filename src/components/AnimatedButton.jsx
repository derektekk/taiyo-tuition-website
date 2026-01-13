import React from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const AnimatedButton = ({
    text = "Enrol Now",
    to = "/contact",
    className = "",
}) => {
    const handleButtonHover = (e, isEntering) => {
        const button = e.currentTarget;
        const span = button.querySelector("span");

        if (isEntering) {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.2,
                ease: "power2.out",
            });

            if (span) {
                gsap.to(span, {
                    scale: 14,
                    opacity: 1,
                    duration: 0.2,
                    ease: "power2.out",
                });
            }
        } else {
            gsap.to(button, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out",
            });

            if (span) {
                gsap.to(span, {
                    scale: 1,
                    opacity: 0,
                    duration: 0.2,
                    ease: "power2.out",
                });
            }
        }
    };

    return (
        <button
            className={`bg-primary text-white px-4 py-2 rounded-full cursor-pointer overflow-hidden relative  ${className}`}
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
        >
            <Link className="z-20 relative" to={to}>
                {text}
            </Link>
            <span className="inline-block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-[#3482FF] opacity-0 z-0" />
        </button>
    );
};

export default AnimatedButton;
