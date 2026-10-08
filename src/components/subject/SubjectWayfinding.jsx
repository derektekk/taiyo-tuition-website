import { Link } from "react-router-dom";
import {
    getRelatedSubjects,
    getSameUnitSubjects,
    getSiblingSubject,
    subjects,
} from "../../data/subjects";
import HomeSection from "../home/HomeSection";
import SubjectIcon from "../SubjectIcon";
import TextLink from "../TextLink";

const linkClass =
    "font-heading font-semibold text-primary transition-colors duration-300 hover:text-primary/80";

/** Same unit pair or year-band family, then every other class. */
const SubjectWayfinding = ({ subject }) => {
    const sibling = getSiblingSubject(subject);
    const sameUnits = getSameUnitSubjects(subject);
    const related = sameUnits.length > 0 ? [] : getRelatedSubjects(subject);
    const hideSlugs = new Set([
        subject.slug,
        sibling?.slug,
        ...sameUnits.map((item) => item.slug),
        ...related.map((item) => item.slug),
    ]);
    const otherSubjects = subjects.filter((item) => !hideSlugs.has(item.slug));

    return (
        <HomeSection
            label="More classes"
            pad="medium"
            className="bg-biege-primary"
            innerClassName="flex flex-col gap-8"
        >
            {sameUnits.length > 0 && (
                <aside className="flex flex-col gap-4 rounded-2xl bg-tertiary p-6 ring-1 ring-black/6">
                    <p className="body text-black-primary">
                        Other Units {subject.units} classes.
                    </p>
                    <ul className="flex flex-wrap gap-x-6 gap-y-3">
                        {sameUnits.map((item) => (
                            <li key={item.slug}>
                                <TextLink
                                    to={`/subjects/${item.slug}`}
                                    className={linkClass}
                                >
                                    {item.shortName}
                                </TextLink>
                            </li>
                        ))}
                    </ul>
                </aside>
            )}

            {related.length > 0 && (
                <aside className="flex flex-col gap-4 rounded-2xl bg-tertiary p-6 ring-1 ring-black/6">
                    <p className="body text-black-primary">
                        Same subject, other year bands.
                    </p>
                    <ul className="flex flex-wrap gap-x-6 gap-y-3">
                        {related.map((item) => (
                            <li key={item.slug}>
                                <TextLink
                                    to={`/subjects/${item.slug}`}
                                    className={linkClass}
                                >
                                    {item.name}
                                </TextLink>
                            </li>
                        ))}
                    </ul>
                </aside>
            )}

            <section
                aria-labelledby="other-subjects"
                className="flex flex-col gap-4"
            >
                <h2
                    id="other-subjects"
                    className="h4 font-heading font-semibold text-black"
                >
                    Other subjects we teach
                </h2>
                <ul className="flex flex-wrap gap-2">
                    {otherSubjects.map((item) => (
                        <li key={item.slug}>
                            <Link
                                to={`/subjects/${item.slug}`}
                                className="body-sm inline-flex items-center gap-2 rounded-full bg-tertiary px-4 py-2 font-medium text-black-primary ring-1 ring-black/8 transition-colors duration-300 hover:text-primary hover:ring-primary"
                            >
                                <SubjectIcon
                                    subject={item}
                                    className="size-3.5 shrink-0"
                                />
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </HomeSection>
    );
};

export default SubjectWayfinding;
