import { useEffect, useId, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import bibliophile from "../../assets/illustrations/bibliophile.svg";
import certificate from "../../assets/illustrations/certificate.svg";
import grading from "../../assets/illustrations/grading.svg";
import groupProject from "../../assets/illustrations/group-project.svg";
import timeManagement from "../../assets/illustrations/time-management.svg";
import workingTogether from "../../assets/illustrations/working-together.svg";
import portalStill from "../../assets/taiyoImages/portal-login.webp";
import HomeSection from "../home/HomeSection";
import MediaImage from "../MediaImage";
import SubjectSectionHeader from "./SubjectSectionHeader";

/** Same unDraw set as the week block. Keys come from subjectProgram.js. */
const ART = {
    notes: grading,
    homework: groupProject,
    exams: certificate,
    bound: bibliophile,
    portal: workingTogether,
    tests: certificate,
    timed: timeManagement,
    mocks: certificate,
};

const EASE = [0.25, 1, 0.5, 1];

const parasOf = (body) => (Array.isArray(body) ? body : [body]);

/** The portal tab shows the real sign-in page; every other tab keeps its unDraw art. */
const ResourceArt = ({ item }) => {
    if (item.art === "portal") {
        return (
            <div className="w-full overflow-hidden rounded-xl bg-mist-100 p-1.5 shadow-[0_18px_40px_-24px_rgba(20,40,90,0.45)] ring-1 ring-black/8">
                <MediaImage
                    src={portalStill}
                    alt="The Taiyo Tuition student portal sign-in page"
                    className="aspect-[16/10] w-full rounded-lg"
                    imgClassName="object-cover object-top"
                />
            </div>
        );
    }

    return (
        <img
            src={ART[item.art] ?? grading}
            alt=""
            aria-hidden="true"
            className="h-44 w-auto max-w-full object-contain md:h-56"
        />
    );
};

/** Folder tabs. Illustration left, title and line right — Contour layout, Taiyo length. */
const SubjectResources = ({ subject }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const reduceMotion = useReducedMotion();
    const tabId = useId();
    const items = subject.resources;
    const active = items[activeIndex] ?? items[0];

    useEffect(() => {
        setActiveIndex(0);
    }, [subject.slug]);

    const onTabListKeyDown = (event) => {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

        event.preventDefault();
        const step = event.key === "ArrowRight" ? 1 : -1;
        const next = (activeIndex + step + items.length) % items.length;
        setActiveIndex(next);
        document.getElementById(`${tabId}-tab-${next}`)?.focus();
    };

    return (
        <HomeSection
            id="pack"
            label="Learning resources"
            className="bg-biege-primary"
            innerClassName="flex flex-col gap-8 md:gap-10"
        >
            <SubjectSectionHeader
                title="Learning resources"
                body="Notes, homework, and papers written for this class. Copies stay on the portal after each lesson."
            />

            <div className="flex flex-col">
                <div
                    role="tablist"
                    aria-label="Learning resources"
                    onKeyDown={onTabListKeyDown}
                    className="-mb-px flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {items.map((item, index) => {
                        const selected = index === activeIndex;

                        return (
                            <button
                                key={item.title}
                                id={`${tabId}-tab-${index}`}
                                type="button"
                                role="tab"
                                aria-selected={selected}
                                aria-controls={`${tabId}-panel`}
                                tabIndex={selected ? 0 : -1}
                                onClick={() => setActiveIndex(index)}
                                className={`body-sm relative min-w-0 flex-1 rounded-t-xl px-2 py-2.5 max-sm:flex-auto max-sm:shrink-0 max-sm:whitespace-nowrap max-sm:px-2.5 max-sm:[font-size:0.8125rem] text-center font-heading font-semibold text-balance transition-colors duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:px-3 md:py-3 ${
                                    selected
                                        ? "z-10 bg-tertiary text-black"
                                        : "bg-blue-primary/40 text-black-primary hover:bg-blue-primary/55"
                                }`}
                            >
                                {item.tab ?? item.title}
                            </button>
                        );
                    })}
                </div>

                <div
                    id={`${tabId}-panel`}
                    role="tabpanel"
                    aria-labelledby={`${tabId}-tab-${activeIndex}`}
                    className={`rounded-b-2xl bg-tertiary px-6 py-8 ring-1 ring-black/6 md:px-12 md:py-12 ${
                        activeIndex === 0
                            ? "rounded-tl-none rounded-tr-2xl"
                            : "rounded-t-2xl"
                    }`}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={active.title}
                            initial={
                                reduceMotion
                                    ? { opacity: 0 }
                                    : { opacity: 0, y: 8 }
                            }
                            animate={{ opacity: 1, y: 0 }}
                            exit={
                                reduceMotion
                                    ? { opacity: 0 }
                                    : { opacity: 0, y: -6 }
                            }
                            transition={{
                                duration: reduceMotion ? 0 : 0.22,
                                ease: EASE,
                            }}
                            className="grid items-center gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] md:gap-14"
                        >
                            <div className="flex justify-center">
                                <ResourceArt item={active} />
                            </div>
                            <div className="flex min-w-0 flex-col gap-3">
                                <h3 className="h3 font-heading font-bold text-black text-balance">
                                    {active.title}
                                </h3>
                                <div className="flex flex-col gap-3">
                                    {parasOf(active.body).map((para) => (
                                        <p
                                            key={para}
                                            className="body text-black-primary"
                                        >
                                            {para}
                                        </p>
                                    ))}
                                </div>
                                {active.href && (
                                    <a
                                        href={active.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group body-sm mt-1 inline-flex w-fit items-center gap-1.5 font-heading font-semibold text-primary transition-colors hover:text-primary/80"
                                    >
                                        {active.hrefLabel ?? "Open"}
                                        <ArrowUpRight
                                            className="size-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                            strokeWidth={2}
                                            aria-hidden="true"
                                        />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </HomeSection>
    );
};

export default SubjectResources;
