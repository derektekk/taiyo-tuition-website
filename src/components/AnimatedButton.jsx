import React from "react";
import { Link } from "react-router-dom";

const AnimatedButton = ({
    text = "Enrol Now",
    to = "/enroll",
    className = "",
}) => {
    return (
        <Link
            to={to}
            className={`
                inline-block px-4 py-2.5 rounded-xl cursor-pointer
                text-white font-medium
                bg-gradient-to-b from-[#7DADFF] to-[#4A7DE6]
                shadow-[0_4px_10px_rgba(74,125,230,0.35),inset_0_2px_1px_rgba(255,255,255,0.25),inset_0_-2px_1px_rgba(0,0,0,0.15)]
                transition-all duration-200 ease-out
                hover:from-[#91b8ff] hover:to-[#5f97ff]
                hover:shadow-[0_6px_14px_rgba(74,125,230,0.45),inset_0_2px_1px_rgba(255,255,255,0.3),inset_0_-2px_1px_rgba(0,0,0,0.15)]
                hover:-translate-y-0.5
                active:translate-y-0 active:shadow-[0_2px_6px_rgba(74,125,230,0.25),inset_0_2px_1px_rgba(255,255,255,0.15),inset_0_-2px_1px_rgba(0,0,0,0.2)]
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
                ${className}
            `}
            role="button"
            tabIndex={0}
            aria-label={text}
        >
            {text}
        </Link>
    );
};

export default AnimatedButton;
