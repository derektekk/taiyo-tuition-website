import { useEffect, useState } from "react";
import { featuredReviews } from "../../data/reviews";
import ReviewCard from "../ReviewCard";
import TextLink from "../TextLink";
import HomeSection from "./HomeSection";

const PAGE_SIZE = 3;
const pages = Array.from(
    { length: Math.ceil(featuredReviews.length / PAGE_SIZE) },
    (_, i) =>
        featuredReviews.slice(i * PAGE_SIZE, i * PAGE_SIZE + PAGE_SIZE)
);
const pageCount = pages.length;

const pad = (n) => String(n).padStart(2, "0");

const ArrowIcon = ({ dir }) => (
    <svg
        width="28"
        height="14"
        viewBox="0 0 28 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        {dir === "prev" ? (
            <path
                d="M7.5 1 1 7l6.5 6M1 7h26"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        ) : (
            <path
                d="M20.5 1 27 7l-6.5 6M27 7H1"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        )}
    </svg>
);

const CarouselBar = ({ page, onPrev, onNext, onCycle }) => {
    const [tabHidden, setTabHidden] = useState(false);

    useEffect(() => {
        const sync = () => setTabHidden(document.hidden);
        sync();
        document.addEventListener("visibilitychange", sync);
        return () => document.removeEventListener("visibilitychange", sync);
    }, []);

    return (
        <div className="flex flex-col gap-4">
            <div className="h-px w-full overflow-hidden bg-primary/20">
                <div
                    key={page}
                    className={`h-full origin-left bg-primary motion-safe:animate-social-progress group-hover:motion-safe:paused ${
                        tabHidden ? "paused" : ""
                    }`}
                    onAnimationEnd={(event) => {
                        if (event.animationName === "social-progress") {
                            onCycle();
                        }
                    }}
                />
            </div>
            <div className="flex items-center justify-between">
                <p className="caption font-heading tabular-nums tracking-[0.08em] text-black">
                    {pad(page + 1)} / {pad(pageCount)}
                </p>
                <div className="flex items-center gap-5">
                    <button
                        type="button"
                        onClick={onPrev}
                        aria-label="Previous reviews"
                        className="text-black transition-opacity duration-200 hover:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                        <ArrowIcon dir="prev" />
                    </button>
                    <button
                        type="button"
                        onClick={onNext}
                        aria-label="Next reviews"
                        className="text-black transition-opacity duration-200 hover:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                        <ArrowIcon dir="next" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const ReviewPage = ({ items }) => (
    <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {items.map((review) => (
            <ReviewCard key={review.id} review={review} />
        ))}
    </div>
);

const HomeSocial = () => {
    const [page, setPage] = useState(0);

    const go = (dir) => {
        setPage((current) => (current + dir + pageCount) % pageCount);
    };

    return (
        <HomeSection
            label="Student and parent reviews"
            className="bg-biege-primary"
            innerClassName="group grid gap-8"
        >
            <div className="col-span-full flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
                <h2 className="h1 font-heading font-bold text-black text-balance">
                    What do our parents & students think?
                </h2>
                <TextLink
                    to="/reviews"
                    className="body-sm shrink-0 font-heading font-semibold text-primary transition-colors hover:text-primary/80"
                >
                    See all reviews
                </TextLink>
            </div>

            <div className="col-span-full grid" aria-live="polite">
                {pages.map((items, i) => {
                    const isActive = i === page;

                    return (
                        <div
                            key={items[0].id}
                            className={`col-start-1 row-start-1 h-full motion-safe:transition-opacity motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.25,1,0.5,1)] ${
                                isActive
                                    ? "z-10 opacity-100"
                                    : "pointer-events-none z-0 opacity-0"
                            }`}
                            aria-hidden={!isActive}
                            inert={!isActive}
                        >
                            <ReviewPage items={items} />
                        </div>
                    );
                })}
            </div>

            <div className="col-span-full">
                <CarouselBar
                    page={page}
                    onPrev={() => go(-1)}
                    onNext={() => go(1)}
                    onCycle={() => go(1)}
                />
            </div>
        </HomeSection>
    );
};

export default HomeSocial;
