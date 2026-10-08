import { reviews } from "../../data/reviews";
import HomeSection from "../home/HomeSection";
import ReviewCard from "../ReviewCard";
import SubjectSectionHeader from "./SubjectSectionHeader";

/** Real quotes mapped by family in subjectProgram.js. Three across, same as home. */
const SubjectReviews = ({ subject }) => {
    const items = subject.reviewIds
        .map((id) => reviews.find((review) => review.id === id))
        .filter(Boolean);

    if (!items.length) return null;

    return (
        <HomeSection
            id="reviews"
            label="Student and parent reviews"
            className="bg-biege-primary"
            innerClassName="flex flex-col gap-8"
        >
            <SubjectSectionHeader
                title="What do our parents & students think?"
                linkTo="/reviews"
                linkLabel="See all reviews"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                {items.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>
        </HomeSection>
    );
};

export default SubjectReviews;
