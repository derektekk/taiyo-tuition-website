import { Link } from "react-router-dom";
import MediaImage from "./MediaImage";
import SubjectIcon from "./SubjectIcon";
import { getSubjectCardLabel } from "../data/subjects";
import { getSubjectImage } from "../data/subjectImages";

/**
 * Chooser card for /subjects. Photo on top, primary caption. No shadow, no lift.
 * Name plus unit pair or year band.
 */
const SubjectCard = ({ subject }) => {
    const label = getSubjectCardLabel(subject);

    return (
        <article className="h-full">
            <Link
                to={`/subjects/${subject.slug}`}
                aria-label={`${subject.name} tutoring`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-primary text-tertiary transition-colors duration-300 hover:bg-primary-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
                <MediaImage
                    src={getSubjectImage(subject)}
                    alt={`Students learning ${subject.name} at Taiyo Tuition`}
                    className="aspect-[4/3] w-full shrink-0"
                    imgClassName="object-cover"
                />
                <div className="flex flex-1 items-start justify-between gap-3 p-4 md:p-5">
                    <div className="flex min-w-0 flex-col gap-0.5">
                        <h3 className="h5 font-heading font-semibold text-tertiary">
                            {subject.shortName ?? subject.name}
                        </h3>
                        {label && (
                            <p className="body-sm text-tertiary/80">{label}</p>
                        )}
                    </div>
                    <SubjectIcon
                        subject={subject}
                        strokeWidth={1.75}
                        className="mt-0.5 size-5 shrink-0 text-tertiary"
                    />
                </div>
            </Link>
        </article>
    );
};

export default SubjectCard;
