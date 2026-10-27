import HomeSection from "../home/HomeSection";
import TextLink from "../TextLink";
import TutorHeadshot from "../TutorHeadshot";
import SubjectSectionHeader from "./SubjectSectionHeader";
import { subjects } from "../../data/subjects";
import { getSubjectTutors, studyScoreOf, tutors } from "../../data/tutors";

/** Below this many subject tutors, the rest of the team fills the row. */
const FULL_ROW = 3;
const RELATED_COUNT = 4;

const categoryOf = (shortName) =>
    subjects.find(
        (subject) => subject.group === "vce" && subject.shortName === shortName
    )?.category;

const sharesWord = (a, b) => {
    const words = new Set(a.split(" "));
    return b.split(" ").some((word) => words.has(word));
};

/** Same category first ("Maths" before other STEM), then the roster order. */
const relatedTutorsFor = (subject, shown) =>
    tutors
        .filter((tutor) => tutor.image && !shown.includes(tutor))
        .filter((tutor) => categoryOf(tutor.subjects[0]) === subject.category)
        .sort(
            (a, b) =>
                sharesWord(b.subjects[0], subject.shortName) -
                sharesWord(a.subjects[0], subject.shortName)
        )
        .slice(0, RELATED_COUNT);

const initials = (name) =>
    name
        .split(" ")
        .map((part) => part[0])
        .join("");

/** Subject score first and filled, ATAR second. */
const byScoreFirst = (a, b) =>
    a.startsWith("ATAR ") - b.startsWith("ATAR ");

const TutorCard = ({ tutor }) => (
    <li className="flex flex-col overflow-hidden rounded-3xl bg-tertiary shadow-[0_24px_48px_-32px_rgba(14,26,48,0.35)]">
        {tutor.image ? (
            <TutorHeadshot tutor={tutor} />
        ) : (
            <div className="flex aspect-square w-full items-center justify-center bg-mist-100">
                <span className="font-heading text-3xl font-semibold text-primary">
                    {initials(tutor.name)}
                </span>
            </div>
        )}
        <div className="flex flex-col gap-3 px-5 pb-5 pt-4">
            <div className="flex flex-col gap-0.5">
                <h3 className="h4 font-heading font-bold text-black">
                    {tutor.name}
                </h3>
                <p className="caption text-dust">{tutor.role}</p>
            </div>
            <ul className="flex flex-wrap gap-2">
                {[...tutor.qualifications].sort(byScoreFirst).map((item, index) => (
                    <li
                        key={item}
                        className={`caption whitespace-nowrap rounded-full px-3 py-1 font-heading font-semibold ${
                            index === 0
                                ? "bg-primary text-tertiary"
                                : "bg-mist-100 text-primary-deep"
                        }`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </li>
);

const RelatedTutors = ({ tutors: related }) => (
    <div className="flex flex-col lg:flex-1 lg:self-center">
        <p className="eyebrow pb-2 text-dust">Also on the team</p>
        <ul className="flex flex-col border-b border-black/8">
            {related.map((tutor) => (
                <li
                    key={tutor.slug}
                    className="flex items-center gap-3 border-t border-black/8 py-3"
                >
                    <TutorHeadshot
                        tutor={tutor}
                        className="size-11 shrink-0 rounded-full"
                    />
                    <div className="flex min-w-0 flex-col">
                        <p className="body-sm truncate font-heading font-semibold text-black">
                            {tutor.name}
                        </p>
                        <p className="caption truncate text-dust">
                            {tutor.subjects[0]} {studyScoreOf(tutor)}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

const SplitHeader = ({ title }) => (
    <div className="flex flex-col gap-4 lg:w-[30rem] lg:shrink-0">
        <p className="eyebrow text-primary">Tutors</p>
        <h2 className="h2 font-heading font-bold text-black">{title}</h2>
        <p className="body-lg text-black-primary">
            The scores they got, and the subject they teach.
        </p>
        <TextLink
            to="/tutors"
            className="body font-heading font-semibold text-primary transition-colors hover:text-primary/80"
        >
            Meet all tutors
        </TextLink>
    </div>
);

const SubjectTutors = ({ subject }) => {
    const subjectTutors = getSubjectTutors(subject);
    if (subjectTutors.length === 0) return null;

    const related =
        subjectTutors.length < FULL_ROW
            ? relatedTutorsFor(subject, subjectTutors)
            : [];
    const title = `Your ${subject.shortName} tutor${
        subjectTutors.length > 1 ? "s" : ""
    }`;
    const cards = (
        <ul
            className={`grid grid-cols-2 gap-5 ${
                related.length
                    ? "sm:flex sm:shrink-0 sm:[&>li]:w-72"
                    : "md:grid-cols-3 lg:grid-cols-5"
            }`}
        >
            {subjectTutors.map((tutor) => (
                <TutorCard key={tutor.slug} tutor={tutor} />
            ))}
        </ul>
    );

    return (
        <HomeSection
            id="tutors"
            label={`${subject.shortName} tutors`}
            className="bg-mist-100/50"
            innerClassName={
                related.length
                    ? "flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16"
                    : "flex flex-col gap-8"
            }
        >
            {related.length ? (
                <>
                    <SplitHeader title={title} />
                    <div className="flex flex-1 flex-col gap-6 sm:flex-row sm:items-center">
                        {cards}
                        <RelatedTutors tutors={related} />
                    </div>
                </>
            ) : (
                <>
                    <SubjectSectionHeader
                        title={title}
                        body="The scores they got, and the subject they teach."
                        linkTo="/tutors"
                        linkLabel="Meet all tutors"
                    />
                    {cards}
                </>
            )}
        </HomeSection>
    );
};

export default SubjectTutors;
