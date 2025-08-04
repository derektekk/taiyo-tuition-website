import React, { useState } from "react";
import ScrollAnimateText from "./ScrollAnimateText";
import VideoModal from "./VideoModal";

const aboutCards = [
    {
        id: 1,
        emoji: "👨‍🏫",
        title: "Our Team",
        content:
            "At Taiyo Tuition, we bring together some of Australia's finest private tutors, ranked among the Top 2% in the country. Our team is passionate about guiding students through their academic journey, from Years 5 to 12.",
        cardClasses: "pt-6 pr-24 pl-6 pb-16 flex items-start justify-start",
        responsiveClasses: "",
    },
    {
        id: 2,
        emoji: "👩‍🎓",
        title: "Personalised Learning for Every Student!",
        content:
            "Our tutors go beyond simply teaching—they tailor learning experiences to suit each student's unique needs. With a combination of expertise and empathy, they help unlock potential and build confidence in every learner.",
        cardClasses:
            "pt-6 pr-6 pl-28 pb-16 flex items-end justify-start text-right",
        responsiveClasses: "max-md:pl-16",
    },
    {
        id: 3,
        emoji: "💯",
        title: "More Than Just Tutors—Mentors for Success!",
        content:
            "At Taiyo Tuition, we believe in fostering long-term academic growth. Our tutors don't just focus on grades—they inspire, mentor, and empower students to excel.",
        cardClasses: "pt-16 pr-24 pl-6 pb-6 flex items-start justify-center",
        responsiveClasses: "max-md:pl-16",
    },
    {
        id: 4,
        emoji: "📚",
        title: "With Dedicated Support and Personalised Guidance",
        content:
            "we create an environment where students can achieve their best! Our tutors provide structured learning plans tailored to each student's goals and learning style.",
        cardClasses:
            "pt-16 pr-6 pl-24 pb-6 flex items-end justify-center text-right",
        responsiveClasses: "max-md:pr-16",
    },
];

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <section className="h-auto w-full bg-biege-primary py-12 max-md:py-6">
            <div className="mx-auto flex flex-col flex-wrap items-center justify-center container-responsive">
                <ScrollAnimateText
                    as="h1"
                    className="text-4xl uppercase font-bold mb-12 max-md:text-3xl max-md:mb-6"
                >
                    Who Are We
                </ScrollAnimateText>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch relative">
                    {aboutCards.map((card) => (
                        <div
                            key={card.id}
                            className={`bg-white rounded-lg w-full min-h-[300px]  shadow-md section-card-content flex-col ${card.cardClasses} ${card.responsiveClasses}`}
                        >
                            <ScrollAnimateText
                                as="h1"
                                className="text-4xl font-bold mb-2"
                            >
                                {card.emoji}
                            </ScrollAnimateText>
                            <ScrollAnimateText
                                as="article"
                                className="text-pretty"
                            >
                                <span className="font-bold text-3xl/10 max-md:text-2xl">
                                    {card.title}
                                </span>
                                <p className="mt-2">{card.content}</p>
                            </ScrollAnimateText>
                        </div>
                    ))}
                    <div
                        className="w-72 h-72 bg-primary shadow-md rounded-full cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center max-md:rounded-2xl absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10 max-md:relative max-md:top-auto max-md:left-auto max-md:translate-x-0 max-md:translate-y-0 max-md:mx-auto"
                        onClick={handleOpenModal}
                    >
                        <div className="flex flex-col items-center justify-center gap-4">
                            <div className="bg-gradient-secondary rounded-4xl w-32 h-32 flex items-center justify-center shadow-md">
                                <div>
                                    <svg
                                        width="43"
                                        height="50"
                                        viewBox="0 0 43 50"
                                        fill="white"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M40.5 20.6699C43.8333 22.5944 43.8333 27.4056 40.5 29.3301L7.5 48.3827C4.16666 50.3072 1.41487e-06 47.9016 1.58312e-06 44.0526L3.24875e-06 5.94744C3.41699e-06 2.09843 4.16667 -0.307188 7.5 1.61731L40.5 20.6699Z"
                                            fill="#ffffff"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h1 className="text-3xl font-medium text-white">
                                Why Taiyo?
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <VideoModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </section>
    );
};

export default About;
