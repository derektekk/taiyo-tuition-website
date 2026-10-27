import React from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const PAGE_EASE = [0.25, 1, 0.5, 1];

const ScrollAnimateText = ({
    children,
    delay = 0,
    duration = 0.6,
    distance = 12,
    lift = true,
    className = "",
    as = "div",
    ...props
}) => {
    const ref = React.useRef(null);
    // Huge top margin counts anything already scrolled past as seen, so a jump
    // to the bottom of the page never leaves text stuck hidden. Matches Reveal.
    const isInView = useInView(ref, {
        once: true,
        amount: "some",
        margin: "100000px 0px -10% 0px",
    });
    const reduceMotion = useReducedMotion();
    const MotionComponent = motion[as];

    const moves = !reduceMotion && lift;
    const hidden = moves ? { opacity: 0, y: distance } : { opacity: 0 };
    const visible = moves ? { opacity: 1, y: 0 } : { opacity: 1 };

    return (
        <MotionComponent
            ref={ref}
            className={className}
            initial={hidden}
            animate={isInView ? visible : hidden}
            transition={{
                duration: reduceMotion ? 0 : duration,
                delay: reduceMotion ? 0 : delay,
                ease: PAGE_EASE,
            }}
            {...props}
        >
            {children}
        </MotionComponent>
    );
};

export default ScrollAnimateText;
