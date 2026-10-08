import { useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import ResultCard from "./ResultCard";

const PER_PAGE = 4;

const keyOf = (result) => `${result.name}-${result.school}-${result.score}`;

const chunk = (items, size) =>
    Array.from({ length: Math.ceil(items.length / size) }, (_, index) =>
        items.slice(index * size, index * size + size),
    );

/**
 * Named ATARs. Grid from `sm` up. On phones the list is paged four at a
 * time in a swipeable, snap-scrolling track so it does not run several
 * screens long. Slides are slightly narrower than the track so the next
 * page peeks in and reads as swipeable. `mobileResults` lets a preview show
 * whole pages on phones while the grid keeps its own count.
 */
const ResultList = ({ results, mobileResults = results }) => {
    const reduceMotion = useReducedMotion();
    const trackRef = useRef(null);
    const frame = useRef(0);
    const [page, setPage] = useState(0);
    const pages = chunk(mobileResults, PER_PAGE);

    const slideStride = () => {
        const track = trackRef.current;
        const first = track?.firstElementChild;
        if (!first) return 1;
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        return first.getBoundingClientRect().width + gap;
    };

    const onScroll = () => {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(() => {
            const track = trackRef.current;
            if (!track) return;
            setPage(Math.round(track.scrollLeft / slideStride()));
        });
    };

    const goTo = (index) => {
        trackRef.current?.scrollTo({
            left: index * slideStride(),
            behavior: reduceMotion ? "auto" : "smooth",
        });
    };

    return (
        <>
            <div className="sm:hidden">
                <div
                    ref={trackRef}
                    onScroll={onScroll}
                    aria-label="Named ATAR results"
                    className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {pages.map((items, index) => (
                        <ul
                            key={keyOf(items[0])}
                            aria-label={`Results ${index * PER_PAGE + 1} to ${
                                index * PER_PAGE + items.length
                            } of ${mobileResults.length}`}
                            className="flex w-[88%] shrink-0 snap-start flex-col gap-3"
                        >
                            {items.map((result) => (
                                <li key={keyOf(result)}>
                                    <ResultCard result={result} />
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>

                {pages.length > 1 && (
                    <div className="mt-5 flex items-center justify-center gap-2">
                        {pages.map((items, index) => (
                            <button
                                key={keyOf(items[0])}
                                type="button"
                                onClick={() => goTo(index)}
                                aria-label={`Show results ${
                                    index * PER_PAGE + 1
                                } to ${index * PER_PAGE + items.length}`}
                                aria-current={index === page || undefined}
                                className="flex h-6 items-center px-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
                            >
                                <span
                                    className={`block h-1.5 rounded-full transition-[width,background-color] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                                        index === page
                                            ? "w-6 bg-tertiary"
                                            : "w-1.5 bg-tertiary/35"
                                    }`}
                                />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="hidden gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                {results.map((result) => (
                    <ResultCard key={keyOf(result)} result={result} />
                ))}
            </div>
        </>
    );
};

export default ResultList;
