import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import ScrollAnimateText from "./ScrollAnimateText";
import SubjectIcon from "./SubjectIcon";
import AnimatedButton from "./AnimatedButton";
import {
    getOfferingLabel,
    offeringGroups,
    subjectOfferings,
} from "../data/subjects";

const MotionLink = motion.create(Link);

const TILE_WIDTH =
    "w-[calc((100%-0.75rem)/2)] md:w-[calc((100%-1.5rem)/3)] lg:w-[calc((100%-2.25rem)/4)]";

const TILE_EASE = [0.25, 1, 0.5, 1];

const SubjectTile = ({ subject }) => {
    const reduceMotion = useReducedMotion();
    const [focused, setFocused] = useState(false);
    const label = getOfferingLabel(subject);
    const title = subject.shortName ?? subject.name;
    const ariaName = label ? `${title} ${label}` : title;
    const transition = {
        duration: reduceMotion ? 0 : 0.4,
        ease: TILE_EASE,
    };

    return (
        <article className="h-full">
            <MotionLink
                to={`/subjects/${subject.slug}`}
                aria-label={`${ariaName} tutoring`}
                data-hot={focused ? "true" : undefined}
                className="group flex h-full min-h-[9.5rem] flex-col justify-between gap-4 rounded-2xl bg-tertiary p-5 text-black ring-1 ring-black/8 transition-colors duration-300 hover:bg-primary hover:text-tertiary hover:ring-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary data-[hot=true]:bg-primary data-[hot=true]:text-tertiary data-[hot=true]:ring-primary sm:min-h-[10.5rem] sm:p-5"
                initial="rest"
                animate={focused ? "hover" : "rest"}
                whileHover="hover"
                onFocus={(event) => {
                    if (event.currentTarget.matches(":focus-visible")) {
                        setFocused(true);
                    }
                }}
                onBlur={() => setFocused(false)}
                transition={transition}
                variants={{
                    rest: { y: 0 },
                    hover: { y: reduceMotion ? 0 : -1 },
                }}
            >
                <div>
                    <h3 className="h4 font-heading font-semibold">{title}</h3>
                    {label && (
                        <p className="body-sm mt-1 text-black-primary group-hover:text-tertiary/80 group-data-[hot=true]:text-tertiary/80">
                            {label}
                        </p>
                    )}
                </div>
                <div className="flex items-end justify-between gap-3">
                    <SubjectIcon
                        subject={subject}
                        strokeWidth={1.5}
                        className="size-8 shrink-0 text-primary group-hover:text-tertiary group-data-[hot=true]:text-tertiary sm:size-9"
                    />
                    <motion.span
                        aria-hidden="true"
                        className="inline-flex shrink-0"
                        variants={{
                            rest: {
                                opacity: 0,
                                x: reduceMotion ? 0 : 2,
                                y: reduceMotion ? 0 : 2,
                            },
                            hover: { opacity: 1, x: 0, y: 0 },
                        }}
                        transition={transition}
                    >
                        <ArrowUpRight
                            strokeWidth={1.75}
                            className="size-5 text-current"
                        />
                    </motion.span>
                </div>
            </MotionLink>
        </article>
    );
};

const TileGrid = ({ items }) => (
    <div className="flex w-full flex-wrap justify-center gap-3">
        {items.map((subject) => (
            <div key={subject.family} className={TILE_WIDTH}>
                <SubjectTile subject={subject} />
            </div>
        ))}
    </div>
);

const SubjectsGrid = ({
    headingAs = "h2",
    heading = "Our subjects",
    subcopy = "VCE, Years 5 to 10, and Selective. Open a tile for that class.",
    grouped = false,
}) => {
    return (
        <>
            <header className="mx-auto max-w-3xl text-center">
                <ScrollAnimateText
                    as={headingAs}
                    className="h1 font-heading font-bold text-tertiary"
                >
                    {heading}
                </ScrollAnimateText>
                <ScrollAnimateText
                    as="p"
                    className="body-lg mx-auto mt-4 max-w-2xl text-tertiary/80"
                    delay={0.12}
                >
                    {subcopy}
                </ScrollAnimateText>
            </header>

            {grouped ? (
                <div className="flex flex-col gap-8 md:gap-10">
                    {offeringGroups.map((group) => (
                        <div key={group.id} className="flex flex-col gap-3">
                            <p className="eyebrow text-black-primary/60">
                                {group.label}
                            </p>
                            <TileGrid items={group.subjects} />
                        </div>
                    ))}
                </div>
            ) : (
                <TileGrid items={subjectOfferings} />
            )}

            <div className="flex justify-center">
                <AnimatedButton />
            </div>
        </>
    );
};

export default SubjectsGrid;
