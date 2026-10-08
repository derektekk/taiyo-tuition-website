import AnimatedButton from "../AnimatedButton";
import HomeSection from "../home/HomeSection";
import MediaImage from "../MediaImage";
import ScrollAnimateText from "../ScrollAnimateText";
import { SubjectRuns } from "../SubjectCopy";
import SubjectIcon from "../SubjectIcon";
import TextLink from "../TextLink";
import { getSubjectCardLabel } from "../../data/subjects";
import { getSubjectImage } from "../../data/subjectImages";

/** Selective has no unit pair or year band; name the program type instead. */
const eyebrowFor = (subject) =>
    getSubjectCardLabel(subject) ??
    (subject.group === "selective" ? "Entrance preparation" : null);

const SubjectHero = ({ subject, enrollTo }) => {
    const eyebrow = eyebrowFor(subject);

    return (
        <HomeSection
            as="header"
            label={`${subject.name} overview`}
            pad="large"
            className="bg-primary-deep mt-[80px]"
            innerClassName="grid items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-14"
        >
            <div className="flex flex-col gap-6">
                <nav aria-label="Breadcrumb">
                    <TextLink
                        to="/subjects"
                        arrow="left"
                        className="body-sm font-heading font-semibold text-tertiary transition-colors hover:text-tertiary/80"
                    >
                        All subjects
                    </TextLink>
                </nav>

                <div className="flex flex-col gap-4">
                    {eyebrow && (
                        <p className="eyebrow inline-flex w-fit items-center gap-2 rounded-full bg-primary px-3 py-1 text-tertiary">
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
                        className="h1 font-heading font-bold text-tertiary text-balance"
                    >
                        {subject.name}
                    </ScrollAnimateText>
                    <p className="body-lg max-w-[34rem] text-gradient-primary">
                        <SubjectRuns runs={subject.shortDescription} />
                    </p>
                </div>

                <AnimatedButton to={enrollTo} className="self-start" />
            </div>

            <MediaImage
                src={getSubjectImage(subject)}
                alt={`Students learning ${subject.name} at Taiyo Tuition`}
                className="aspect-[4/3] w-full rounded-2xl md:aspect-[5/4]"
                imgClassName="object-cover"
                loading="eager"
                fetchPriority="high"
            />
        </HomeSection>
    );
};

export default SubjectHero;
