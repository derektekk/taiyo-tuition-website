import React from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

// Same ease as page-fade-in and ScrollAnimateText so all motion reads as one system.
const PAGE_EASE = [0.25, 1, 0.5, 1];

// Block-level scroll reveal. Fades and lifts a section's content in once as it
// enters the viewport. Pass lift={false} when the element also uses a CSS
// translate (a hover lift, for example) so the reveal only changes opacity.
// For inline text use ScrollAnimateText instead.
const Reveal = ({
    children,
    as = "div",
    className = "",
    delay = 0,
    duration = 0.6,
    distance = 12,
    lift = true,
    ...props
}) => {
    const ref = React.useRef(null);
    // Fires once any part of the block clears the bottom 10% of the viewport.
    // A percentage threshold never trips on blocks several screens tall (stacked
    // grids on phones), which left whole sections blank until scrolled deep.
    // The huge top margin counts anything already scrolled past as in view, so a jump
    // to the bottom (End key, anchor link, fast flick) never leaves a section hidden.
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

export default Reveal;
