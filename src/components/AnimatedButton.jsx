import React from "react";
import { Link } from "react-router-dom";

/**
 * Pass `href` for an external URL (opens in a new tab); `to` stays in-app.
 * `children` replaces the visible label (e.g. a shorter one on phones);
 * `text` stays the accessible name.
 */
const AnimatedButton = ({
    text = "Book a free trial",
    to = "/enroll",
    href,
    className = "",
    children,
}) => {
    const Tag = href ? "a" : Link;
    const linkProps = href
        ? { href, target: "_blank", rel: "noopener noreferrer" }
        : { to };

    return (
        <Tag
            {...linkProps}
            className={`
                h5 inline-block px-4 py-2.5 rounded-xl cursor-pointer
                text-white
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
            {children ?? text}
        </Tag>
    );
};

export default AnimatedButton;
