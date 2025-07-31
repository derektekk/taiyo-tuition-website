import React from "react";
import ScrollAnimateText from "./ScrollAnimateText";
import aboutImage from "../assets/teaching-team.jpg";

const aimCards = [
    {
        id: 1,
        emoji: "🎯",
        title: "Our Aim",
        content:
            "Our team's purpose is simple yet powerful: to help every student reach their full potential and go beyond their own expectations. With the right guidance and personalised approach, every student can develop the confidence to excel academically.",
        cardClasses: "pt-6 pr-28 pl-6 pb-16 flex items-start justify-start",
        responsiveClasses: "",
    },
    {
        id: 2,
        emoji: "🏃‍♂️",
        title: "A Transformative Learning Experience:",
        content:
            "We believe education should be enriching and transformative. From Years 5 to 12, we provide the tools and guidance students need to master their studies, develop a love for learning, and navigate their academic paths with confidence.",
        cardClasses:
            "pt-6 pr-6 pl-28 pb-16 flex items-end justify-start text-right",
        responsiveClasses: "max-md:pl-16",
    },
    {
        id: 3,
        emoji: "📝",
        title: "Personalised Support for Every Student:",
        content:
            "Through one-on-one tutoring and carefully designed online courses, we focus on unlocking each student's unique strengths. Our goal is to create an environment where academic challenges are met with enthusiasm and resilience.",
        cardClasses: "pt-16 pr-28 pl-6 pb-6 flex items-start justify-center",
        responsiveClasses: "max-md:pl-16",
    },
    {
        id: 4,
        emoji: "🏆",
        title: "Building Skills for a Lifetime of Achievement",
        content:
            "We are committed to instilling confidence, determination, and essential skills in every student. At Taiyo Tuition, we don't just aim for academic excellence—we empower students to succeed in all aspects of their educational journey.",
        cardClasses:
            "pt-16 pr-6 pl-28 pb-6 flex items-end justify-center text-right",
        responsiveClasses: "max-md:pr-16",
    },
];

const Aim = () => {
    return (
        <>
            <section className="h-auto w-full bg-biege-primary py-12 max-md:py-6">
                <div className="mx-auto flex flex-col flex-wrap items-center justify-center container-responsive">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch relative">
                        {aimCards.map((card) => (
                            <div
                                key={card.id}
                                className={`bg-white rounded-lg w-full min-h-[300px] section-card-content shadow-md flex-col ${card.cardClasses} ${card.responsiveClasses}`}
                            >
                                <ScrollAnimateText
                                    as="h1"
                                    className="text-4xl font-bold mb-2"
                                >
                                    {card.emoji}
                                </ScrollAnimateText>
                                <ScrollAnimateText
                                    as="p"
                                    className="text-pretty"
                                >
                                    <span className="font-bold text-3xl/10 max-md:text-2xl">
                                        {card.title}
                                    </span>{" "}
                                    <br />
                                    {card.content}
                                </ScrollAnimateText>
                            </div>
                        ))}
                        <div className="absolute w-64 h-64 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10 max-md:relative max-md:top-auto max-md:left-auto max-md:translate-x-0 max-md:translate-y-0 max-md:mx-auto max-md:w-[70%]">
                            <img
                                src={aboutImage}
                                alt="About"
                                className="w-full h-full object-cover rounded-4xl shadow-md "
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Aim;
