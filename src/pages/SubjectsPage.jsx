import { useState } from "react";
import HomeClose from "../components/home/HomeClose";
import HomeSection from "../components/home/HomeSection";
import PageDoc from "../components/PageDoc";
import ScrollAnimateText from "../components/ScrollAnimateText";
import SubjectCard from "../components/SubjectCard";
import { subjectGroupOrder, subjects } from "../data/subjects";

const FILTERS = [{ id: "all", label: "All" }, ...subjectGroupOrder];

const GRID_CLASS =
    "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4";

/** Year 5–10 classes split by band, in the order the data lists them. */
const yearBands = (() => {
    const seen = [];
    for (const subject of subjects) {
        if (subject.group !== "years" || !subject.yearBand) continue;
        if (!seen.includes(subject.yearBand)) seen.push(subject.yearBand);
    }
    return seen.map((band) => ({
        id: band,
        label: `Years ${band}`,
        subjects: subjects.filter(
            (subject) => subject.group === "years" && subject.yearBand === band,
        ),
    }));
})();

const groupSubjects = (groupId) =>
    subjects.filter((subject) => subject.group === groupId);

/**
 * Sections shown for a filter. "years" always splits into bands. "all" lists
 * VCE, then the three bands, then Selective, so the page keeps its rhythm.
 */
const sectionsFor = (filterId) => {
    if (filterId === "years") return yearBands;
    if (filterId !== "all") {
        const group = subjectGroupOrder.find((item) => item.id === filterId);
        return [{ ...group, subjects: groupSubjects(filterId) }];
    }
    return subjectGroupOrder.flatMap((group) =>
        group.id === "years"
            ? yearBands
            : [{ ...group, subjects: groupSubjects(group.id) }],
    );
};

const FilterChip = ({ filter, active, onSelect }) => (
    <button
        type="button"
        role="tab"
        aria-selected={active}
        onClick={() => onSelect(filter.id)}
        className={`body-sm rounded-full px-4 py-2 font-heading font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
            active
                ? "bg-primary text-tertiary"
                : "bg-tertiary text-black ring-1 ring-black/10 hover:ring-primary hover:text-primary"
        }`}
    >
        {filter.label}
    </button>
);

const SubjectsPage = () => {
    const [filter, setFilter] = useState("all");
    const sections = sectionsFor(filter);
    const showHeadings = sections.length > 1;

    return (
        <main role="main">
            <PageDoc path="/subjects" />

            <HomeSection
                label="Our subjects"
                className="bg-tertiary mt-[80px]"
                innerClassName="flex flex-col gap-10 md:gap-12"
            >
                <header className="text-center">
                    <ScrollAnimateText
                        as="h1"
                        className="display text-gray-900 mb-6"
                    >
                        Our Subjects
                    </ScrollAnimateText>
                    <ScrollAnimateText
                        as="p"
                        className="body-lg text-black-primary max-w-3xl mx-auto"
                    >
                        Discover our comprehensive range of subjects designed to
                        help you achieve your ATAR goals
                    </ScrollAnimateText>
                </header>

                <div
                    role="tablist"
                    aria-label="Filter subjects"
                    className="flex flex-wrap items-center justify-center gap-2"
                >
                    {FILTERS.map((item) => (
                        <FilterChip
                            key={item.id}
                            filter={item}
                            active={filter === item.id}
                            onSelect={setFilter}
                        />
                    ))}
                </div>

                <div
                    role="tabpanel"
                    aria-label={`${
                        FILTERS.find((item) => item.id === filter)?.label
                    } subjects`}
                    className="flex flex-col gap-10 md:gap-12"
                >
                    {sections.map((section) => {
                        const isYearBand = yearBands.some(
                            (band) => band.id === section.id,
                        );

                        return (
                            <section
                                key={section.id}
                                aria-label={section.label}
                                className="flex flex-col gap-4"
                            >
                                {showHeadings && (
                                    <h2
                                        className={
                                            isYearBand
                                                ? "h2 font-heading font-bold text-primary-deep"
                                                : "h4 font-heading font-semibold text-primary-deep"
                                        }
                                    >
                                        {section.label}
                                    </h2>
                                )}
                                <div className={GRID_CLASS}>
                                    {section.subjects.map((subject) => (
                                        <SubjectCard
                                            key={subject.slug}
                                            subject={subject}
                                        />
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </HomeSection>

            <HomeClose />
        </main>
    );
};

export default SubjectsPage;
