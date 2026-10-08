import { useState } from "react";
import stillClass from "../../assets/taiyoImages/classPhotos2026/2026-class-photo-1.webp";
import stillHelp from "../../assets/taiyoImages/offer-help.webp";
import stillLesson from "../../assets/taiyoImages/offer-lesson.webp";
import stillNotes from "../../assets/taiyoImages/offer-notes.webp";
import stillPortal from "../../assets/taiyoImages/offer-portal.webp";
import stillPractice from "../../assets/taiyoImages/classPhotos2026/2026-class-photo-4.webp";
import HomeSection from "../home/HomeSection";
import MediaImage from "../MediaImage";
import ProgressMarks from "../ProgressMarks";

const STILLS = [
    stillClass,
    stillLesson,
    stillNotes,
    stillPractice,
    stillHelp,
    stillPortal,
];

const pad = (n) => String(n).padStart(2, "0");

const OfferCard = ({ item }) => (
    <article className="flex flex-col gap-1 rounded-xl bg-biege-primary px-5 py-4">
        <p className="body-lg text-black">{item.title}</p>
        <p className="body-sm text-dust">{item.body}</p>
    </article>
);

/**
 * Eleken-style split, moved from named ATARs. Left column stays put; the
 * right panel swaps a classroom still and an offer card. Auto-advances on
 * the same 5s bar as the results marks. Shared stills, never tied to a student name.
 */
const SubjectOffer = ({ subject }) => {
    const items = subject.offer;
    const [index, setIndex] = useState(0);
    const go = (next) => setIndex((next + items.length) % items.length);

    return (
        <HomeSection
            id="offer"
            label="What you get"
            className="bg-tertiary"
            innerClassName="grid gap-10 md:grid-cols-[1fr_1.15fr] md:items-stretch md:gap-14"
        >
            <div className="flex flex-col justify-between gap-10">
                <div className="flex flex-col gap-5">
                    <p className="eyebrow inline-flex w-fit rounded-full bg-primary px-3 py-1 text-tertiary">
                        What you get
                    </p>
                    <h2 className="h2 font-heading font-bold text-black text-balance">
                        The same seat every week.
                    </h2>
                    <p className="body max-w-[32rem] text-black-primary">
                        Here is what comes with it for {subject.name}.
                    </p>
                </div>

                <div className="flex flex-col gap-5">
                    <ol className="flex flex-col">
                        {items.map((item, i) => {
                            const isActive = i === index;
                            return (
                                <li key={item.title}>
                                    <button
                                        type="button"
                                        onClick={() => go(i)}
                                        aria-current={
                                            isActive ? "true" : undefined
                                        }
                                        className="flex w-full items-baseline gap-4 border-t border-black/8 py-3 text-left transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        <span
                                            className={`caption font-heading tabular-nums tracking-[0.08em] ${
                                                isActive
                                                    ? "text-primary"
                                                    : "text-black"
                                            }`}
                                        >
                                            {pad(i + 1)}
                                        </span>
                                        <span
                                            className={`body-lg font-heading font-semibold ${
                                                isActive
                                                    ? "text-primary"
                                                    : "text-black"
                                            }`}
                                        >
                                            {item.title}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ol>

                    <div className="group/marks">
                        <ProgressMarks
                            items={items}
                            index={index}
                            onSelect={go}
                            onCycle={() => go(index + 1)}
                            labelFor={(item) => `Show ${item.title}`}
                        />
                    </div>
                </div>
            </div>

            <div
                className="relative grid min-h-[22rem] overflow-hidden rounded-2xl md:min-h-[28rem]"
                aria-live="polite"
            >
                {items.map((item, i) => {
                    const isActive = i === index;
                    return (
                        <div
                            key={item.title}
                            className={`col-start-1 row-start-1 flex flex-col justify-end motion-safe:transition-opacity motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.25,1,0.5,1)] ${
                                isActive
                                    ? "z-10 opacity-100"
                                    : "pointer-events-none z-0 opacity-0"
                            }`}
                            aria-hidden={!isActive}
                            inert={!isActive}
                        >
                            <MediaImage
                                src={STILLS[i]}
                                alt="A Taiyo Tuition class"
                                className="absolute inset-0"
                                imgClassName="object-cover"
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-primary-deep/10 to-transparent"
                            />
                            <div className="relative p-4 md:p-6">
                                <OfferCard item={item} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </HomeSection>
    );
};

export default SubjectOffer;
