import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Mail, Phone } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classroom from "../../assets/taiyoImages/taiyoClassroom.webp";
import helpStill from "../../assets/taiyoImages/offer-help.webp";
import notesStill from "../../assets/taiyoImages/offer-notes.webp";
import portalStill from "../../assets/taiyoImages/offer-portal.webp";
import { location } from "../../data/location";
import HomeSection from "../home/HomeSection";
import MediaImage from "../MediaImage";
import SubjectSectionHeader from "./SubjectSectionHeader";

gsap.registerPlugin(ScrollTrigger);

/** `art` keys from .js map to Taiyo stills. */
const ART = {
    classroom,
    notes: notesStill,
    portal: portalStill,
    help: helpStill,
};

const ALT = {
    classroom: "Taiyo classroom during a weekly lesson",
    notes: "A student working through the week's homework booklet",
    portal: "Marked work and solutions open on the portal",
    help: "A tutor working with a student between lessons",
};

/**
 * Opaque fills so a later card can cover the one below without bleed. One
 * step deeper per card so the stack reads as a ramp, not four random tints.
 */
const FILLS = ["bg-mist-100", "bg-mist-200", "bg-mist-300", "bg-mist-400"];

/** How far a covered card recedes by the time the next one is fully over it. */
const COVERED_SCALE = 0.92;
const COVERED_OPACITY = 0.4;

const parasOf = (body) => (Array.isArray(body) ? body : [body]);

const CONTACTS = [
    { Icon: Phone, label: location.phone, href: location.phoneHref },
    { Icon: Mail, label: location.email, href: `mailto:${location.email}` },
];

const BeatContact = () => (
    <ul className="mt-2 flex flex-col gap-2">
        {CONTACTS.map(({ Icon, label, href }) => (
            <li key={href}>
                <a
                    href={href}
                    className="group inline-flex items-center gap-3 rounded-full bg-tertiary py-1.5 pl-1.5 pr-4 text-black ring-1 ring-black/8 transition-colors duration-300 hover:bg-primary hover:text-tertiary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-tertiary transition-colors duration-300 group-hover:bg-tertiary group-hover:text-primary">
                        <Icon
                            className="size-4"
                            strokeWidth={1.75}
                            aria-hidden="true"
                        />
                    </span>
                    <span className="body-sm font-heading font-semibold">
                        {label}
                    </span>
                </a>
            </li>
        ))}
    </ul>
);

const BeatArt = ({ artKey, title }) => {
    const src = ART[artKey] ?? ART.classroom;

    return (
        <MediaImage
            src={src}
            alt={ALT[artKey] ?? `Taiyo class: ${title}`}
            className="h-44 w-full rounded-xl sm:h-52 md:h-full md:min-h-[22rem]"
            imgClassName="object-cover"
        />
    );
};

/**
 * Card stack in the EdAtlas style: every card pins at the same top offset, so
 * each new card slides up and fully replaces the one before it. As it is
 * covered, the card underneath shrinks and dims (scrubbed to scroll) so it
 * reads as receding rather than being pasted over. No trailing spacer: once
 * the last card is pinned the section scrolls away with it.
 *
 * Grid rows are 1fr so every card is the height of the tallest one; equal
 * heights are what make the cover line up. HomeSection reveal is off: a
 * transform ancestor breaks sticky.
 *
 * Trigger positions are derived from the list's position plus a row stride,
 * not from the cards' own boxes: a pinned card's bounding box (and, in
 * Chrome, its offsetTop) reports the stuck position, which would throw off a
 * mid-section refresh.
 */
const SubjectWeek = ({ subject }) => {
    const beats = subject.weekBeats;
    const listRef = useRef(null);

    useLayoutEffect(() => {
        const list = listRef.current;
        if (!list) return undefined;

        const cards = Array.from(list.querySelectorAll("[data-week-card]"));

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                const listTop = () =>
                    list.getBoundingClientRect().top + window.scrollY;
                const rowGap = () =>
                    parseFloat(getComputedStyle(list).rowGap) || 0;

                cards.forEach((card, index) => {
                    if (index === cards.length - 1) return;

                    const stickTop = () =>
                        parseFloat(getComputedStyle(card).top) || 0;
                    // Layout top of the next card: rows are equal height, so
                    // it is a stride from the list top.
                    const nextLayoutTop = () =>
                        listTop() +
                        (index + 1) * (card.offsetHeight + rowGap());
                    // Scroll position at which the next card's top edge sits
                    // `fromViewportTop` px down the viewport.
                    const scrollWhenNextAt = (fromViewportTop) =>
                        nextLayoutTop() - fromViewportTop;

                    // Progress runs from "next card touches this card's bottom
                    // edge" to "next card is fully over it".
                    gsap.fromTo(
                        card,
                        { scale: 1, opacity: 1 },
                        {
                            scale: COVERED_SCALE,
                            opacity: COVERED_OPACITY,
                            ease: "none",
                            transformOrigin: "50% 50%",
                            scrollTrigger: {
                                start: () =>
                                    scrollWhenNextAt(
                                        stickTop() + card.offsetHeight,
                                    ),
                                end: () => scrollWhenNextAt(stickTop()),
                                scrub: true,
                                invalidateOnRefresh: true,
                            },
                        },
                    );
                });
            });
        }, list);

        return () => ctx.revert();
    }, [beats]);

    return (
        <HomeSection
            id="week"
            label="Your week at Taiyo"
            className="bg-biege-primary"
            innerClassName="flex flex-col gap-8 md:gap-10"
            reveal={false}
        >
            <SubjectSectionHeader
                title="Your week at Taiyo"
                body="Same four steps every week, from one class to the next."
            />

            <ol
                ref={listRef}
                className="relative isolate grid auto-rows-fr gap-6 md:gap-10"
            >
                {beats.map((beat, index) => (
                    <li
                        key={beat.title}
                        data-week-card
                        className={`sticky top-24 grid gap-6 rounded-2xl p-5 shadow-[0_12px_40px_-24px_rgba(20,16,12,0.35)] ring-1 ring-black/8 md:top-28 md:min-h-[26rem] md:grid-cols-[1fr_1fr] md:gap-12 md:p-6 ${
                            FILLS[index % FILLS.length]
                        }`}
                        style={{
                            zIndex: index + 1,
                            willChange: "transform, opacity",
                        }}
                    >
                        <div className="flex flex-col justify-between gap-5 px-1 py-2 md:gap-8 md:px-6 md:py-4">
                            <div className="flex items-baseline gap-3">
                                <span className="font-heading text-2xl font-bold leading-none tracking-tight text-primary md:text-3xl">
                                    Step {index + 1}
                                </span>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h3 className="h3 font-heading font-bold text-black">
                                    {beat.title}
                                </h3>
                                <div className="flex flex-col gap-2">
                                    {parasOf(beat.body).map((para) => (
                                        <p
                                            key={para}
                                            className="body max-w-[26rem] font-normal text-black"
                                        >
                                            {para}
                                        </p>
                                    ))}
                                </div>
                                {beat.contact && <BeatContact />}
                            </div>

                            {beat.when && (
                                <div className="hidden items-center gap-3 border-b border-black/10 pb-4 md:flex"></div>
                            )}
                        </div>
                        <BeatArt artKey={beat.art} title={beat.title} />
                    </li>
                ))}
            </ol>
        </HomeSection>
    );
};

export default SubjectWeek;
