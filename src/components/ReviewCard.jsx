import { Star } from "lucide-react";

const StarRating = ({ rating }) => (
    <div
        className="flex shrink-0 items-center gap-0.5"
        aria-label={`${rating} out of 5 stars`}
    >
        {Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`size-3.5 ${
                    i < rating
                        ? "fill-primary text-primary"
                        : "fill-primary/20 text-primary/20"
                }`}
                strokeWidth={0}
            />
        ))}
    </div>
);

const ReviewCard = ({ review, className = "" }) => (
    <article
        className={`flex h-full flex-1 flex-col gap-5 rounded-2xl bg-tertiary p-6 sm:p-8 md:gap-6 md:p-10 ${className}`}
    >
        <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
                <p className="body-lg font-heading font-semibold text-primary">
                    {review.name}
                </p>
                <p className="caption text-black-primary">
                    {review.role || review.dateLabel}
                </p>
            </div>
            <StarRating rating={review.rating} />
        </div>
        <p className="body-lg text-black">"{review.quote}"</p>
    </article>
);

export default ReviewCard;
