import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const HOLD = 2.4;

const playTypewriter = (timeline, lineEl, text) => {
    const typed = { count: 0 };
    const write = () => {
        lineEl.textContent = text.slice(0, Math.round(typed.count));
    };

    lineEl.textContent = "";
    timeline.to(typed, {
        count: text.length,
        duration: Math.max(text.length * 0.03, 0.35),
        ease: "none",
        onUpdate: write,
    });
    timeline.to({}, { duration: HOLD });
    timeline.to(typed, {
        count: 0,
        duration: Math.max(text.length * 0.016, 0.2),
        ease: "none",
        onUpdate: write,
    });
};

const HeroRotatingLine = ({ lines }) => {
    const lineRef = useRef(null);
    const caretRef = useRef(null);

    useLayoutEffect(() => {
        const lineEl = lineRef.current;
        const caretEl = caretRef.current;
        if (!lineEl) return undefined;

        let cancelled = false;
        let index = 0;
        let cycleTl;
        let caretTween;

        const playCycle = () => {
            if (cancelled) return;

            lineEl.textContent = "";
            cycleTl = gsap.timeline({
                onComplete: () => {
                    if (cancelled) return;
                    index = (index + 1) % lines.length;
                    playCycle();
                },
            });
            playTypewriter(cycleTl, lineEl, lines[index]);
        };

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: reduce)", () => {
                lineEl.textContent = lines[0];
                if (caretEl) gsap.set(caretEl, { autoAlpha: 0 });
            });

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                if (caretEl) {
                    gsap.set(caretEl, { autoAlpha: 1 });
                    caretTween = gsap.to(caretEl, {
                        autoAlpha: 0.18,
                        duration: 0.5,
                        repeat: -1,
                        yoyo: true,
                        ease: "none",
                    });
                }

                const start = () => {
                    if (!cancelled) playCycle();
                };

                if (document.fonts?.ready) {
                    document.fonts.ready.then(start);
                } else {
                    start();
                }
            });
        });

        return () => {
            cancelled = true;
            caretTween?.kill();
            cycleTl?.kill();
            ctx.revert();
        };
    }, [lines]);

    return (
        <span className="grid w-full [grid-template-areas:'line'] leading-[1.2]">
            {lines.map((line) => (
                <span
                    key={line}
                    aria-hidden="true"
                    className="invisible [grid-area:line]"
                >
                    {line}
                </span>
            ))}
            <span className="[grid-area:line]">
                <span ref={lineRef} />
                <span
                    ref={caretRef}
                    aria-hidden="true"
                    className="ml-[0.08em] inline-block h-[0.72em] w-[0.07em] bg-current align-baseline opacity-0"
                />
            </span>
        </span>
    );
};

export default HeroRotatingLine;
