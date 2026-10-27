import { Link } from "react-router-dom";
import AnimatedButton from "../AnimatedButton";
import HomeSection from "../home/HomeSection";
import MediaImage from "../MediaImage";
import ScrollAnimateText from "../ScrollAnimateText";
import { SubjectRuns } from "../SubjectCopy";
import SubjectIcon from "../SubjectIcon";
import TextLink from "../TextLink";
import GoogleRatingCard from "./GoogleRatingCard";
import { atarResults } from "../../data/atarResults";
import { getSubjectCardLabel } from "../../data/subjects";
import tutorWithStudent from "../../assets/taiyoImages/classPhotos2026/2026-class-photo-7.webp";
import studentsAtDesks from "../../assets/taiyoImages/classPhotos2026/2026-class-photo-5.webp";
import tutorAtBoard from "../../assets/taiyoImages/classPhotos2026/2026-class-photo-2.webp";

/** Selective has no unit pair or year band; name the program type instead. */
const eyebrowFor = (subject) =>
    getSubjectCardLabel(subject) ??
    (subject.group === "selective" ? "Entrance preparation" : null);

const COUNT_WORDS = ["", "One", "Two", "Three", "Four", "Five", "Six"];

const topScore = atarResults
    .map((result) => result.score)
    .reduce((best, score) => (Number(score) > Number(best) ? score : best));
const topResults = atarResults.filter((result) => result.score === topScore);
const namedTopResults = topResults
    .filter((result) => result.name !== "Undisclosed")
    .slice(0, 3);
const topCount = COUNT_WORDS[topResults.length] ?? topResults.length;

const HeroResults = () => (
    <div className="flex flex-col gap-6 border-t border-mist-100 pt-7 sm:flex-row sm:items-end sm:gap-10">
        <div className="flex shrink-0 flex-col gap-1.5 sm:w-56">
            <p className="font-heading text-6xl font-extrabold leading-none tracking-[-0.04em] text-primary sm:text-[4.75rem]">
                {topScore}
            </p>
            <p className="body-sm text-black-primary">
                Top Taiyo ATAR. {topCount} students scored it.
            </p>
        </div>
        <ul className="flex flex-1 flex-col">
            {namedTopResults.map((result) => (
                <li
                    key={`${result.name}-${result.school}`}
                    className="flex items-center gap-3 border-b border-mist-100 py-2 last:border-b-0"
                >
                    <span className="body-sm flex-1 font-medium text-primary-deep">
                        {result.name}
                    </span>
                    <span className="caption w-28 shrink-0 text-dust">
                        {result.school}
                    </span>
                    <span className="body font-heading w-14 shrink-0 text-right font-bold text-primary-deep">
                        {result.score}
                    </span>
                </li>
            ))}
        </ul>
    </div>
);

const HeroCollage = ({ subject }) => (
    <div className="relative pb-6 sm:pb-0">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-[1.5fr_1fr]">
            <MediaImage
                src={tutorWithStudent}
                alt={`A Taiyo tutor working through ${subject.shortName} with a student`}
                className="col-span-2 aspect-[4/3] rounded-2xl sm:col-span-1 sm:row-span-2 sm:aspect-auto sm:h-full"
                imgClassName="object-cover"
                loading="eager"
                fetchPriority="high"
            />
            <MediaImage
                src={studentsAtDesks}
                alt="Students working in a Taiyo class"
                className="aspect-[5/4] rounded-2xl"
                imgClassName="object-cover"
                loading="eager"
            />
            <MediaImage
                src={tutorAtBoard}
                alt="A Taiyo tutor teaching at the whiteboard"
                className="aspect-[5/4] rounded-2xl"
                imgClassName="object-cover"
                loading="eager"
            />
        </div>
        <GoogleRatingCard className="absolute bottom-0 left-4 sm:-bottom-6 sm:-left-6" />
    </div>
);

const SubjectHero = ({ subject, enrollTo }) => {
    const eyebrow = eyebrowFor(subject);

    return (
        <HomeSection
            as="header"
            label={`${subject.name} overview`}
            pad="large"
            className="bg-tertiary mt-[80px]"
            innerClassName="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16"
        >
            <div className="flex flex-col gap-7">
                <nav aria-label="Breadcrumb">
                    <TextLink
                        to="/subjects"
                        arrow="left"
                        className="body-sm text-black-primary transition-colors hover:text-primary"
                    >
                        All subjects
                    </TextLink>
                </nav>

                <div className="flex flex-col gap-4">
                    {eyebrow && (
                        <p className="eyebrow inline-flex w-fit items-center gap-2 rounded-full bg-mist-100 px-3 py-1 text-primary-deep">
                            <SubjectIcon
                                subject={subject}
                                className="size-3.5 shrink-0"
                                strokeWidth={2.25}
                            />
                            {eyebrow}
                        </p>
                    )}
                    <ScrollAnimateText
                        as="h1"
                        className="h1 font-heading font-bold text-primary-deep text-balance"
                    >
                        {subject.name}
                    </ScrollAnimateText>
                    <p className="body-lg max-w-[34rem] text-black-primary">
                        <SubjectRuns runs={subject.shortDescription} />
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <AnimatedButton to={enrollTo} />
                    <Link
                        to="/results"
                        className="h5 rounded-xl border border-mist-200 px-4 py-2.5 text-primary-deep transition-colors hover:border-primary hover:text-primary"
                    >
                        See all results
                    </Link>
                </div>

                <HeroResults />
            </div>

            <HeroCollage subject={subject} />
        </HomeSection>
    );
};

export default SubjectHero;
