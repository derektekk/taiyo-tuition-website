import { location } from "../../data/location";
import { googleRating as rating } from "./googleRating";

const GoogleMark = () => (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="size-8 shrink-0">
        <path
            fill="#FFC107"
            d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5z"
        />
        <path
            fill="#FF3D00"
            d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
        />
        <path
            fill="#4CAF50"
            d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"
        />
        <path
            fill="#1976D2"
            d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"
        />
    </svg>
);

export const Stars = ({ className = "size-4" }) => (
    <span className="flex gap-0.5 text-[#fbbc04]" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
            <svg key={index} viewBox="0 0 20 20" className={`fill-current ${className}`}>
                <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
            </svg>
        ))}
    </span>
);

const GoogleRatingCard = ({ className = "" }) => (
    <a
        href={location.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Rated ${rating} out of 5 on Google`}
        className={`flex items-center gap-3 rounded-2xl bg-tertiary px-4 py-3 shadow-[0_18px_40px_-12px_rgba(10,20,40,0.45)] transition-transform duration-200 hover:-translate-y-0.5 ${className}`}
    >
        <GoogleMark />
        <span className="flex flex-col gap-1">
            <span className="flex items-center gap-2">
                <span className="h4 font-heading font-bold text-black leading-none">
                    {rating}
                </span>
                <Stars />
            </span>
            <span className="caption text-black-primary">Google reviews</span>
        </span>
    </a>
);

export default GoogleRatingCard;
