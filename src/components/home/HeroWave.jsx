import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const WIDTH = 400;
const HEIGHT = 1000;
const SAMPLES = 32;
// Trapezoid: the left edge is a diagonal running from TOP_X (narrow top)
// down to BOTTOM_X (wide base). The wave rides on top of that diagonal.
const TOP_X = 180;
const BOTTOM_X = 24;
const AMPLITUDE = 40;
const LOBES = 1;
const FADE = 0.12;

const smoothstep = (t) => t * t * (3 - 2 * t);

// Pin the wave to the straight diagonal at both ends so the corners stay crisp.
const edgeFade = (yt) => {
    const head = Math.min(yt / FADE, 1);
    const tail = Math.min((1 - yt) / FADE, 1);
    return smoothstep(Math.min(head, tail));
};

const baselineX = (yt) => TOP_X + (BOTTOM_X - TOP_X) * yt;

const leftX = (yt, phase) => {
    const wave = Math.sin(yt * LOBES * Math.PI * 2 - phase) * AMPLITUDE;
    return baselineX(yt) + wave * edgeFade(yt);
};

const catmullRomPath = (points) => {
    const padded = [points[0], ...points, points[points.length - 1]];
    let d = `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`;

    for (let i = 1; i < padded.length - 2; i += 1) {
        const p0 = padded[i - 1];
        const p1 = padded[i];
        const p2 = padded[i + 1];
        const p3 = padded[i + 2];
        const c1x = p1[0] + (p2[0] - p0[0]) / 6;
        const c1y = p1[1] + (p2[1] - p0[1]) / 6;
        const c2x = p2[0] - (p3[0] - p1[0]) / 6;
        const c2y = p2[1] - (p3[1] - p1[1]) / 6;
        d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`;
    }

    return d;
};

const buildWavePath = (phase) => {
    const points = [];

    for (let i = 0; i <= SAMPLES; i += 1) {
        const yt = i / SAMPLES;
        points.push([leftX(yt, phase), yt * HEIGHT]);
    }

    return `M ${WIDTH} 0 ${catmullRomPath(points).replace(/^M/, "L")} L ${WIDTH} ${HEIGHT} Z`;
};

const HeroWave = () => {
    const pathRef = useRef(null);

    useLayoutEffect(() => {
        const path = pathRef.current;
        if (!path) return undefined;

        path.setAttribute("d", buildWavePath(0));

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();
            const state = { phase: 0 };

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                gsap.to(state, {
                    phase: Math.PI * 2,
                    duration: 8,
                    ease: "none",
                    repeat: -1,
                    onUpdate: () => {
                        path.setAttribute("d", buildWavePath(state.phase));
                    },
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[min(46vw,34rem)]"
        >
            <svg
                className="h-full w-full"
                viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
                preserveAspectRatio="none"
            >
                <path
                    ref={pathRef}
                    className="fill-gradient-primary"
                    d={buildWavePath(0)}
                />
            </svg>
        </div>
    );
};

export default HeroWave;
