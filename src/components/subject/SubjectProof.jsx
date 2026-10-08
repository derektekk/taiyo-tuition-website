import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { atarResults } from "../../data/atarResults";
import HomeSection from "../home/HomeSection";
import ProgressMarks from "../ProgressMarks";
import ResultCard from "../ResultCard";
import SubjectSectionHeader from "./SubjectSectionHeader";

const PREVIEW_COUNT = 6;
const preview = atarResults.slice(0, PREVIEW_COUNT);

const cardKey = (result) => `${result.name}-${result.school}-${result.score}`;

const reducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Named ATAR preview as a snap strip. Line marks match the offer block:
 * only the current mark fills, and the fill is the time until the next snap.
 */
const SubjectProof = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        loop: true,
        dragFree: false,
        duration: reducedMotion() ? 0 : 25,
        dragThreshold: 10,
        skipSnaps: false,
        slidesToScroll: 1,
    });
    const [selected, setSelected] = useState(0);

    const sync = useCallback((api) => {
        if (!api) return;
        setSelected(api.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        sync(emblaApi);
        emblaApi.on("select", sync);
        emblaApi.on("reInit", sync);
        return () => {
            emblaApi.off("select", sync);
            emblaApi.off("reInit", sync);
        };
    }, [emblaApi, sync]);

    return (
        <HomeSection
            id="results"
            label="Named ATAR results"
            className="bg-primary-deep"
            innerClassName="flex flex-col gap-8"
        >
            <div className="flex flex-col gap-4">
                <p className="eyebrow inline-flex w-fit rounded-full bg-primary px-3 py-1 text-tertiary">
                    Named ATARs
                </p>
                <SubjectSectionHeader
                    tone="dark"
                    title="Students who sat Taiyo classes, by name and school."
                    body="Published results from our students. The full list is on the results page."
                    linkTo="/results"
                    linkLabel="See all results"
                />
            </div>

            <div className="group/marks relative flex w-full min-w-0 flex-col gap-5">
                <div
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Named ATAR results"
                    className="relative"
                >
                    <div
                        ref={emblaRef}
                        className="cursor-grab overflow-hidden overscroll-x-contain touch-pan-y active:cursor-grabbing"
                    >
                        <div className="-ml-2 flex">
                            {preview.map((result) => (
                                <div
                                    key={cardKey(result)}
                                    role="group"
                                    aria-roledescription="slide"
                                    className="min-w-0 flex-[0_0_85%] pl-2 lg:flex-[0_0_33.333333%]"
                                >
                                    <ResultCard
                                        result={result}
                                        layout="poster"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <ProgressMarks
                    items={preview}
                    index={selected}
                    onSelect={(i) => emblaApi?.scrollTo(i)}
                    onCycle={() => emblaApi?.scrollNext()}
                    labelFor={(result, i) =>
                        `Show ${result.name}, slide ${i + 1} of ${preview.length}`
                    }
                    tone="dark"
                    duration="5s"
                />
            </div>
        </HomeSection>
    );
};

export default SubjectProof;
