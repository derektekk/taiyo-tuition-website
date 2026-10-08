import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import certificate from "../../assets/illustrations/certificate.svg";
import grading from "../../assets/illustrations/grading.svg";
import team from "../../assets/illustrations/team.svg";
import workingTogether from "../../assets/illustrations/working-together.svg";
import HomeSection from "./HomeSection";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    {
        value: "1500+",
        label: "Students taught",
        illustration: workingTogether,
    },
    {
        value: "98+",
        label: "Average tutor ATAR",
        illustration: certificate,
    },
    {
        value: "91%",
        label: "of 2024 students scored 45+",
        illustration: grading,
    },
    {
        value: "10",
        label: "Students per class",
        illustration: team,
    },
];

const parseStatValue = (value) => {
    const match = value.match(/^(\d+)(.*)$/);
    return {
        target: Number(match[1]),
        suffix: match[2] ?? "",
    };
};

const formatCount = (n, suffix) => `${Math.round(n)}${suffix}`;

const HomeProof = () => {
    const rootRef = useRef(null);

    useLayoutEffect(() => {
        const root = rootRef.current;
        if (!root) return undefined;

        const numberEls = root.querySelectorAll("[data-count-target]");
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: reduce)", () => {
                numberEls.forEach((el) => {
                    el.textContent = el.dataset.countDisplay;
                });
            });

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: root,
                        start: "top 85%",
                        once: true,
                    },
                });

                numberEls.forEach((el, index) => {
                    const target = Number(el.dataset.countTarget);
                    const suffix = el.dataset.countSuffix ?? "";
                    const proxy = { val: 0 };

                    el.textContent = formatCount(0, suffix);

                    timeline.to(
                        proxy,
                        {
                            val: target,
                            duration: 1.15,
                            ease: "power2.out",
                            onUpdate: () => {
                                el.textContent = formatCount(proxy.val, suffix);
                            },
                        },
                        index * 0.1,
                    );
                });
            });
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <HomeSection
            label="Results at a glance"
            pad="small"
            className="border-t border-black/8 bg-tertiary"
        >
            <div
                ref={rootRef}
                className="grid grid-cols-2 gap-x-6 gap-y-8 md:flex"
            >
                {stats.map((stat) => {
                    const { target, suffix } = parseStatValue(stat.value);

                    return (
                        <div
                            key={stat.label}
                            className="flex flex-1 flex-col items-center gap-1.5 text-center"
                        >
                            <div className="flex h-20 items-end justify-center">
                                <img
                                    src={stat.illustration}
                                    alt=""
                                    aria-hidden="true"
                                    className="h-[72px] w-auto max-w-full object-contain"
                                />
                            </div>
                            <p
                                className="h2 font-heading font-bold text-primary"
                                aria-label={stat.value}
                            >
                                <span
                                    aria-hidden="true"
                                    data-count-target={target}
                                    data-count-suffix={suffix}
                                    data-count-display={stat.value}
                                >
                                    {stat.value}
                                </span>
                            </p>
                            <p className="body-sm text-black-primary">
                                {stat.label}
                            </p>
                        </div>
                    );
                })}
            </div>
        </HomeSection>
    );
};

export default HomeProof;
