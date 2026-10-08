import { useId, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import HomeSection from "../home/HomeSection";
import Reveal from "../Reveal";

const TopicGroup = ({ group, index }) => {
    const [open, setOpen] = useState(false);
    const reduceMotion = useReducedMotion();
    const reactId = useId();
    const panelId = `${reactId}-panel`;

    return (
        <li className="rounded-xl bg-tertiary">
            <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((current) => !current)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
            >
                <span className="flex min-w-0 items-center gap-3">
                    <span className="caption font-heading font-semibold tabular-nums tracking-[0.08em] text-primary">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="body-lg font-heading font-semibold text-black">
                        {group.title}
                    </span>
                    {group.placeholder && (
                        <span className="caption rounded-full bg-mist-100 px-2.5 py-0.5 font-heading font-semibold uppercase tracking-[0.08em] text-dust">
                            Draft
                        </span>
                    )}
                </span>
                <motion.span
                    aria-hidden="true"
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{
                        duration: reduceMotion ? 0 : 0.2,
                        ease: "easeInOut",
                    }}
                    className="flex size-8 shrink-0 items-center justify-center text-primary"
                >
                    <ChevronDown className="size-5" strokeWidth={2} />
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        id={panelId}
                        initial={
                            reduceMotion
                                ? { opacity: 0 }
                                : { height: 0, opacity: 0 }
                        }
                        animate={
                            reduceMotion
                                ? { opacity: 1 }
                                : { height: "auto", opacity: 1 }
                        }
                        exit={
                            reduceMotion
                                ? { opacity: 0 }
                                : { height: 0, opacity: 0 }
                        }
                        transition={{
                            duration: reduceMotion ? 0 : 0.3,
                            ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                    >
                        <ul className="flex flex-col gap-3 px-5 pb-5 md:px-6">
                            {group.topics.map((topic) => (
                                <li
                                    key={topic}
                                    className="flex items-start gap-3 text-black"
                                >
                                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-tertiary">
                                        <Check
                                            className="size-3"
                                            strokeWidth={3}
                                            aria-hidden="true"
                                        />
                                    </span>
                                    <span className="body-sm">{topic}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </li>
    );
};

const UnitCopy = ({ band }) => (
    <div className="flex flex-col gap-4 md:gap-5">
        {band.label && (
            <h3 className="h3 font-heading font-bold text-black">
                {band.label}
            </h3>
        )}
        <p className="h4 font-heading font-semibold text-black text-balance">
            {band.kicker}
        </p>
        {band.body.map((para) => (
            <p key={para} className="body text-black-primary">
                {para}
            </p>
        ))}
    </div>
);

const UnitPanel = ({ band, flip }) => (
    <Reveal className="grid gap-8 rounded-2xl bg-mist-100 p-6 md:grid-cols-2 md:items-start md:gap-12 md:p-10">
        <div className={flip ? "md:order-2" : undefined}>
            <UnitCopy band={band} />
        </div>
        <ol className="flex flex-col gap-3">
            {band.groups.map((item, index) => (
                <TopicGroup
                    key={`${band.label ?? "cover"}-${item.title}`}
                    group={item}
                    index={index}
                />
            ))}
        </ol>
    </Reveal>
);

/**
 * EdAtlas-style Units 1–4 timeline: unit heading and copy on one side,
 * collapsible topic groups on the other. The second pair flips.
 */
const SubjectCurriculum = ({ subject }) => {
    const bands = subject.curriculum?.bands ?? [];
    const vce = subject.group === "vce";

    return (
        <HomeSection
            id="cover"
            label="What we cover"
            className="bg-tertiary"
            innerClassName="flex flex-col gap-8 md:gap-10"
        >
            <div className="mx-auto flex max-w-[40rem] flex-col items-center gap-3 text-center">
                <h2 className="h2 font-heading font-bold text-black">
                    {vce ? "Units 1–4 study timeline" : "What we cover"}
                </h2>
                <p className="body text-black-primary">
                    {vce
                        ? "Units 1 & 2, then Units 3 & 4. Open a unit for the VCAA areas of study."
                        : `The topics for ${subject.name}, and what the class actually works.`}
                </p>
            </div>

            <div className="flex flex-col gap-4 md:gap-5">
                {bands.map((item, index) => (
                    <UnitPanel
                        key={item.label ?? subject.slug}
                        band={item}
                        flip={vce && index === 1}
                    />
                ))}
            </div>
        </HomeSection>
    );
};

export default SubjectCurriculum;
