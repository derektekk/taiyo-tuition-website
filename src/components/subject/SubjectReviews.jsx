import { location } from "../../data/location";
import { reviews } from "../../data/reviews";
import HomeSection from "../home/HomeSection";
import SubjectSectionHeader from "./SubjectSectionHeader";
import { Stars } from "./GoogleRatingCard";
import { googleRating as rating } from "./googleRating";

const GoogleSummary = () => (
    <a
        href={location.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Rated ${rating} out of 5 on Google. Read on Google`}
        className="group flex flex-col justify-between gap-6 rounded-2xl bg-tertiary p-7 md:w-64 md:shrink-0"
    >
        <p className="eyebrow text-black-primary">Google reviews</p>
        <div className="flex flex-col gap-2">
            <p className="font-heading text-6xl font-extrabold leading-none tracking-[-0.04em] text-primary-deep">
                {rating}
            </p>
            <Stars className="size-5" />
        </div>
        <p className="body-sm font-heading font-semibold text-primary transition-colors group-hover:text-primary/80">
            Read on Google →
        </p>
    </a>
);

const QuoteCard = ({ review }) => (
    <article className="flex flex-1 flex-col gap-5 rounded-2xl bg-tertiary p-7">
        <span
            role="img"
            aria-label={`${review.rating} out of 5 stars`}
            className="w-fit"
        >
            <Stars />
        </span>
        <p className="body flex-1 text-primary-deep">"{review.quote}"</p>
        <div className="flex flex-col">
            <p className="body-sm font-heading font-bold text-primary-deep">
                {review.name}
            </p>
            <p className="caption text-dust">
                {review.role || review.dateLabel}
            </p>
        </div>
    </article>
);

/** Real quotes mapped by family in subjectProgram.js, beside the Google rating. */
const SubjectReviews = ({ subject }) => {
    const items = subject.reviewIds
        .map((id) => reviews.find((review) => review.id === id))
        .filter(Boolean);

    if (!items.length) return null;

    return (
        <HomeSection
            id="reviews"
            label="Student and parent reviews"
            className="bg-mist-100/50"
            innerClassName="flex flex-col gap-10"
        >
            <SubjectSectionHeader
                title="What do our parents & students think?"
                linkTo="/reviews"
                linkLabel="See all reviews"
            />

            <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                <GoogleSummary />
                <div className="grid flex-1 grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
                    {items.map((review) => (
                        <QuoteCard key={review.id} review={review} />
                    ))}
                </div>
            </div>
        </HomeSection>
    );
};

export default SubjectReviews;
