import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CLOSE_ID } from "./sections";

const EASE = [0.25, 1, 0.5, 1];

// A thin band around 40% down the viewport. The section crossing it is "in view".
const ACTIVE_BAND = "-40% 0px -55% 0px";

/**
 * Bottom section dock for the class page. Jumps to a block and highlights the
 * one in view. Hides while HomeClose or the footer is on screen. Site nav stays
 * at the top; this is the only extra chrome. Scrolls sideways when labels do
 * not fit. Instant jumps under prefers-reduced-motion. No URL hash, so the
 * back button never walks through sections.
 */
const SubjectDock = ({ sections }) => {
    const reduceMotion = useReducedMotion();
    const [active, setActive] = useState(sections[0]?.id);
    const [hidden, setHidden] = useState(false);
    const trackRef = useRef(null);
    const buttonRefs = useRef({});

    // Active block: track which sections cross the band, prefer the later one.
    useEffect(() => {
        const targets = sections
            .map((section) => document.getElementById(section.id))
            .filter(Boolean);
        if (!targets.length) return undefined;

        const inBand = new Set();
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) inBand.add(entry.target.id);
                    else inBand.delete(entry.target.id);
                }
                const current = [...sections]
                    .reverse()
                    .find((section) => inBand.has(section.id));
                if (current) {
                    setActive(current.id);
                    return;
                }
                // Above the first block (hero): fall back to the first label so
                // the dock does not keep the last section lit after scrolling up.
                const firstTop = targets[0].getBoundingClientRect().top;
                if (firstTop > window.innerHeight * 0.4) setActive(sections[0].id);
            },
            { rootMargin: ACTIVE_BAND, threshold: 0 }
        );
        targets.forEach((target) => observer.observe(target));
        return () => observer.disconnect();
    }, [sections]);

    // Hide when the close band or the footer's in-flow spacer is on screen.
    // The footer itself is position: fixed when pinned, so observe its wrapper.
    useEffect(() => {
        const close = document.getElementById(CLOSE_ID);
        const footerWrap = document.querySelector("footer")?.parentElement;
        const targets = [close, footerWrap].filter(Boolean);
        if (!targets.length) return undefined;

        const visible = new Set();
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) visible.add(entry.target);
                    else visible.delete(entry.target);
                }
                setHidden(visible.size > 0);
            },
            { threshold: 0 }
        );
        targets.forEach((target) => observer.observe(target));
        return () => observer.disconnect();
    }, []);

    // Keep the active label in view inside the dock on narrow screens.
    useEffect(() => {
        const track = trackRef.current;
        const button = buttonRefs.current[active];
        if (!track || !button || track.scrollWidth <= track.clientWidth) return;
        // Measure via rects: the <li> is positioned, so offsetLeft would be 0.
        const buttonRect = button.getBoundingClientRect();
        const trackRect = track.getBoundingClientRect();
        const buttonStart = buttonRect.left - trackRect.left + track.scrollLeft;
        const left = buttonStart - (track.clientWidth - buttonRect.width) / 2;
        track.scrollTo({ left, behavior: reduceMotion ? "auto" : "smooth" });
    }, [active, reduceMotion]);

    const jumpTo = (id) => {
        const target = document.getElementById(id);
        if (!target) return;
        setActive(id);
        target.scrollIntoView({
            behavior: reduceMotion ? "auto" : "smooth",
            block: "start",
        });
    };

    if (!sections.length) return null;

    return (
        <motion.nav
            aria-label="On this page"
            aria-hidden={hidden || undefined}
            inert={hidden || undefined}
            initial={false}
            animate={hidden ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: EASE }}
            className="pointer-events-none fixed inset-x-0 bottom-3 z-40 flex justify-center px-3 md:bottom-5"
        >
            <div
                ref={trackRef}
                className={`max-w-full overflow-x-auto rounded-full bg-tertiary/92 ring-1 ring-black/10 shadow-[0_8px_24px_rgba(36,53,86,0.14)] backdrop-blur-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
                    hidden ? "pointer-events-none" : "pointer-events-auto"
                }`}
            >
                <ul className="flex items-center gap-0.5 whitespace-nowrap p-1.5">
                    {sections.map((section) => {
                        const isActive = section.id === active;
                        return (
                            <li key={section.id} className="relative">
                                {isActive && (
                                    <motion.span
                                        layoutId="subject-dock-active"
                                        aria-hidden="true"
                                        className="absolute inset-0 rounded-full bg-primary"
                                        transition={{
                                            duration: reduceMotion ? 0 : 0.3,
                                            ease: EASE,
                                        }}
                                    />
                                )}
                                <button
                                    ref={(node) => {
                                        buttonRefs.current[section.id] = node;
                                    }}
                                    type="button"
                                    onClick={() => jumpTo(section.id)}
                                    aria-current={isActive ? "location" : undefined}
                                    className={`body-sm relative z-10 rounded-full px-3.5 py-1.5 font-heading font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                                        isActive
                                            ? "text-tertiary"
                                            : "text-black-primary hover:text-primary"
                                    }`}
                                >
                                    {section.label}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </motion.nav>
    );
};

export default SubjectDock;
