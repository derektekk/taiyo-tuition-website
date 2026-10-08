import { reviews } from "../data/reviews";
import { location } from "../data/location";
import HomeClose from "../components/home/HomeClose";
import HomeSection from "../components/home/HomeSection";
import PageDoc from "../components/PageDoc";
import ReviewCard from "../components/ReviewCard";

const ReviewsPage = () => {
    return (
        <main role="main">
            <PageDoc path="/reviews" />

            <HomeSection
                as="header"
                label="Student and parent reviews"
                className="bg-biege-primary mt-[80px]"
                innerClassName="flex flex-col gap-8"
            >
                <div className="flex max-w-[40rem] flex-col gap-2">
                    <h1 className="h2 font-heading font-bold text-black">
                        What parents and students have said.
                    </h1>
                    <p className="body text-black-primary">
                        Written reviews from Google. Stars as published.{" "}
                        <a
                            href={location.mapsUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="font-heading font-semibold text-primary transition-colors hover:text-primary/80"
                        >
                            Read them on Google.
                        </a>
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {reviews.map((review) => (
                        <ReviewCard
                            key={review.id}
                            review={review}
                            className="bg-tertiary shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]"
                        />
                    ))}
                </div>
            </HomeSection>

            <HomeClose />
        </main>
    );
};

export default ReviewsPage;
