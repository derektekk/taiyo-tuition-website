import React, { useState } from "react";
import ScrollAnimateText from "./ScrollAnimateText";
import VideoModal from "./VideoModal";
import taiyoThumbnail from "../assets/taiyo-thumbnail.jpg";

const aboutCards = [
    {
        id: 1,
        emoji: "👨‍🏫",
        title: "Our Team",
        content: (
            <>
                <p className="mt-2">
                    At Taiyo Tuition, we bring together some of Australia's
                    finest private tutors, ranked among the{" "}
                    <span className="underline decoration-primary decoration-2 font-medium">
                        Top 2% in the country
                    </span>{" "}
                    . Our team is passionate about guiding students through
                    their academic journey, from Years 5 to 12.
                </p>
            </>
        ),
        cardClasses: "pt-6 pr-24 pl-6 pb-16 flex items-start justify-start",
        responsiveClasses: "",
    },
    {
        id: 2,
        emoji: "👩‍🎓",
        title: "Personalised Learning for Every Student!",
        content: (
            <>
                <p className="mt-2">
                    <span className="font-medium underline decoration-primary decoration-2">
                        Our tutors go beyond simply teaching
                    </span>
                    —they tailor learning experiences to suit each student's
                    unique needs. With a combination of expertise and empathy,
                    they help unlock potential and build confidence in every
                    learner.
                </p>
            </>
        ),
        cardClasses:
            "pt-6 pr-6 pl-28 pb-16 flex items-end justify-start text-right",
        responsiveClasses: "max-md:pl-16",
    },
    {
        id: 3,
        emoji: "💯",
        title: "More Than Just Tutors—Mentors for Success!",
        content: (
            <>
                <p className="mt-2">
                    At Taiyo Tuition,{" "}
                    <span className="font-medium underline decoration-primary decoration-2">
                        we believe in fostering long-term academic growth
                    </span>
                    . Our tutors don't just focus on grades—they inspire,
                    mentor, and empower students to excel.
                </p>
            </>
        ),
        cardClasses: "pt-16 pr-24 pl-6 pb-6 flex items-start justify-center",
        responsiveClasses: "max-md:pl-16",
    },
    {
        id: 4,
        emoji: "📚",
        title: "With Dedicated Support and Personalised Guidance",
        content: (
            <>
                <p className="mt-2">
                    We create an{" "}
                    <span className="font-medium underline decoration-primary decoration-2">
                        environment where students can achieve their best!
                    </span>{" "}
                    Our tutors provide structured learning plans tailored to
                    each student's goals and learning style.
                </p>
            </>
        ),
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
                                <a className="mt-4">{card.content}</a>
                            </ScrollAnimateText>
                        </div>
                    ))}
                    <div
                        className="w-full min-h-[300px] bg-gradient-secondary shadow-md md:rounded-full cursor-pointer hover:shadow-lg transition-all duration-300 md:hover:scale-105 flex items-center justify-center rounded-2xl md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:z-10 relative md:w-78 md:h-78 row-start-3 md:row-start-1"
                        onClick={handleOpenModal}
                    >
                        <div className="flex items-center justify-center gap-4 relative w-full h-full md:border-[16px] md:rounded-full md:border-gradient-secondary">
                            <img
                                src={taiyoThumbnail}
                                alt="About"
                                className="w-full h-full aspect-[1/1] md:rounded-full object-cover absolute top-0 left-0 p-6 md:p-0 p"
                            />
                            <div className=" w-32 h-32 flex flex-col items-center justify-center  z-10">
                                <div className="">
                                    <svg
                                        width="43"
                                        height="50"
                                        viewBox="0 0 43 50"
                                        fill="white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="drop-shadow-md shadow-black"
                                    >
                                        <path
                                            d="M40.5 20.6699C43.8333 22.5944 43.8333 27.4056 40.5 29.3301L7.5 48.3827C4.16666 50.3072 1.41487e-06 47.9016 1.58312e-06 44.0526L3.24875e-06 5.94744C3.41699e-06 2.09843 4.16667 -0.307188 7.5 1.61731L40.5 20.6699Z"
                                            fill="#ffffff"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <VideoModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </section>
    );
};

export default About;
