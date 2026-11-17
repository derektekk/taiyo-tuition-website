import { useCallback, useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { atarResults } from "../../data/atarResults";
import HomeSection from "../home/HomeSection";
import SubjectSectionHeader from "./SubjectSectionHeader";

// Same ease as Reveal and ScrollAnimateText so all motion reads as one system.
const EASE = [0.25, 1, 0.5, 1];
const TILE_DURATION = 0.6;
const COUNT_DURATION = 1.1;
const STAGGER = 0.06;
const LIFT = 16;
// Counting from 90 keeps every score two digits wide, so nothing jitters.
const COUNT_FROM = 90;

const cardKey = (result) => `${result.name}-${result.school}-${result.score}`;

/** Tier by distinct score, so tied ATARs always share a colour. */
const distinctScores = [...new Set(atarResults.map((result) => result.score))]
    .sort((a, b) => Number(b) - Number(a));

const TIERS = [
    { tile: "bg-primary", score: "text-tertiary", meta: "text-tertiary/85" },
    { tile: "bg-blue-primary", score: "text-primary-deep", meta: "text-primary-deep/80" },
    { tile: "bg-mist-100", score: "text-black", meta: "text-black-primary" },
    { tile: "bg-biege-primary", score: "text-black", meta: "text-black-primary" },
];

const tierFor = (score) =>
    TIERS[Math.min(distinctScores.indexOf(score), TIERS.length - 1)];

const decimalsOf = (score) => score.split(".")[1]?.length ?? 0;

/**
 * Hands out delays so tiles that enter view together still play one after
 * another, in DOM order (highest score first). Tiles that enter later, as the
 * reader scrolls, start straight away instead of queueing behind old ones.
 */
const useStaggerQueue = (step) => {
    const nextFreeAt = useRef(0);

    return useCallback(() => {
        const now = performance.now();
        const startAt = Math.max(now, nextFreeAt.current);
        nextFreeAt.current = startAt + step * 1000;
        return (startAt - now) / 1000;
    }, [step]);
};

const ScoreTile = ({ result, nextDelay, reduceMotion }) => {
    const tileRef = useRef(null);
    const scoreRef = useRef(null);
    // Matches Reveal: anything already scrolled past counts as in view, so a
    // jump to the bottom (dock link, End key) never leaves tiles hidden.
    const isInView = useInView(tileRef, {
        once: true,
        amount: "some",
        margin: "100000px 0px -10% 0px",
    });
    const tier = tierFor(result.score);
    const decimals = decimalsOf(result.score);
    const animated = !reduceMotion;

    useEffect(() => {
        if (!animated || !isInView) return undefined;

        const delay = nextDelay();
        const tile = animate(
            tileRef.current,
            { opacity: [0, 1], y: [LIFT, 0] },
            { duration: TILE_DURATION, delay, ease: EASE }
        );
        const count = animate(COUNT_FROM, Number(result.score), {
            duration: COUNT_DURATION,
            delay,
            ease: EASE,
            onUpdate: (value) => {
                if (scoreRef.current) {
                    scoreRef.current.textContent = value.toFixed(decimals);
                }
            },
        });

        return () => {
            tile.stop();
            count.stop();
        };
    }, [animated, isInView, nextDelay, result.score, decimals]);

    return (
        <li
            ref={tileRef}
            style={animated ? { opacity: 0, transform: `translateY(${LIFT}px)` } : undefined}
            className={`flex flex-col justify-between gap-7 rounded-2xl p-5 ${tier.tile}`}
        >
            <p
                className={`h3 font-heading font-extrabold tabular-nums tracking-[-0.03em] ${tier.score}`}
            >
                {/* Screen readers get the real score once; the ticking copy is visual only. */}
                <span className="sr-only">{result.score}</span>
                <span ref={scoreRef} aria-hidden="true">
                    {animated ? COUNT_FROM.toFixed(decimals) : result.score}
                </span>
            </p>
            <div className="flex min-w-0 flex-col">
                <p
                    className={`body-sm truncate font-heading font-semibold ${tier.score}`}
                >
                    {result.name}
                </p>
                <p className={`caption truncate ${tier.meta}`}>{result.school}</p>
            </div>
        </li>
    );
};

/**
 * Every named ATAR at once, strongest tile for the highest score. Tiles rise in
 * one after another as they scroll into view, and each score counts up to its
 * value. Reduced motion shows the final grid with no movement.
 */
const SubjectProof = () => {
    const reduceMotion = useReducedMotion();
    const nextDelay = useStaggerQueue(STAGGER);

    return (
        <HomeSection
            id="results"
            label="Named ATAR results"
            className="bg-tertiary"
            innerClassName="flex flex-col gap-8"
        >
            <div className="flex flex-col gap-3">
                <p className="eyebrow text-primary">Named ATARs</p>
                <SubjectSectionHeader
                    title="Students who sat Taiyo classes, by name and school."
                    body="Published results from our students. The full list is on the results page."
                    linkTo="/results"
                    linkLabel="See all results"
                />
            </div>

            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {atarResults.map((result) => (
                    <ScoreTile
                        key={cardKey(result)}
                        result={result}
                        nextDelay={nextDelay}
                        reduceMotion={reduceMotion}
                    />
                ))}
            </ul>
        </HomeSection>
    );
};

export default SubjectProof;
