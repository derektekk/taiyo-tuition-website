import React from "react";
import classPhoto1 from "../assets/taiyoImages/classPhotos/classPhoto1.jpg";
import classPhoto2 from "../assets/taiyoImages/classPhotos/classPhoto2.jpg";
import entrance from "../assets/taiyoImages/entrance.jpg";
import taiyoClassroom from "../assets/taiyoImages/taiyoClassroom.jpg";
import classPhoto5 from "../assets/taiyoImages/classPhotos/classPhoto5.jpg";
import classPhoto6 from "../assets/taiyoImages/classPhotos/classPhoto6.jpg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import ScrollAnimateText from "./ScrollAnimateText";
import AnimatedButton from "./AnimatedButton";

const Hero = () => {
    const splideOptions = {
        type: "loop",
        direction: "ttb",
        height: "600px",
        autoScroll: {
            speed: 0.5,
        },
        arrows: false,
        pagination: false,
        drag: false,
        wheel: false,
        releaseWheel: false,
    };

    return (
        <main className="overflow-hidden">
            <section className="flex items-center justify-center h-[60vh] bg-linear-180 to-gradient-secondary from-gradient-primary mt-[80px] max-md:h-full">
                <div className="flex flex-row items-center justify-center z-10 gap-6 max-md:flex-col max-w-[1280px] mx-auto px-6">
                    <div className="flex flex-col">
                        <ScrollAnimateText
                            as="h1"
                            className="text-4xl mb-4 z-50 max-md:hidden"
                        >
                            <span className="font-bold bg-linear-180 from-primary to-blue-600 bg-clip-text text-transparent">
                                PRIVATE
                            </span>{" "}
                            GROUP AND{" "}
                            <span className="font-bold bg-linear-180 from-primary to-blue-600 bg-clip-text text-transparent">
                                ONLINE
                            </span>{" "}
                            TUTORING
                        </ScrollAnimateText>
                        <div className="bg-white p-6 rounded-lg z-50 shadow-md max-md:my-6 ">
                            <ScrollAnimateText
                                as="h1"
                                className="text-4xl mb-4 z-50 md:hidden max-sm:text-2xl"
                            >
                                <span className="font-bold bg-linear-180 from-primary to-blue-600 bg-clip-text text-transparent">
                                    PRIVATE
                                </span>{" "}
                                GROUP AND{" "}
                                <span className="font-bold bg-linear-180 from-primary to-blue-600 bg-clip-text text-transparent">
                                    ONLINE
                                </span>{" "}
                                TUTORING
                            </ScrollAnimateText>
                            <div className="flex flex-row">
                                <ScrollAnimateText
                                    as="p"
                                    className="text-md mb-4"
                                >
                                    Inspiring a love for learning. While
                                    delivering excellence in every subject. With
                                    a capacity of 10 students per tutorial, this
                                    is the most impactful private tuition in
                                    Melbourne.
                                </ScrollAnimateText>
                            </div>
                            <div className="flex flex-row">
                                <ScrollAnimateText
                                    as="div"
                                    className="text-md mb-4"
                                >
                                    <ul className="space-y-1">
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                            Helped over 1500+ Students
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                            98+ Average ATAR of our Tutors
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                            91% of 2024 Students scored 45+
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                            In-person and Online classes.
                                        </li>
                                    </ul>
                                </ScrollAnimateText>
                            </div>
                            <ScrollAnimateText>
                                <AnimatedButton text="Free Trial" />
                            </ScrollAnimateText>
                        </div>
                    </div>
                    <div className="container cursor-pointer max-md:hidden">
                        <Splide
                            key="desktop-carousel"
                            options={splideOptions}
                            extensions={{ AutoScroll }}
                            className="w-full"
                        >
                            <SplideSlide>
                                <div className="grid grid-cols-2 gap-4 my-4">
                                    <div className="row-span-2">
                                        <img
                                            src={classPhoto1}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                                        <p className="text-white text-sm text-center">
                                            📖 Learn at Your Pace
                                        </p>
                                    </div>
                                    <div className="row-span-2">
                                        <img
                                            src={classPhoto2}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                                        <p className="text-white text-sm text-center">
                                            👩‍🏫 Expert Tutors Available
                                        </p>
                                    </div>
                                    <div className="row-span-2">
                                        <img
                                            src={entrance}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                                        <p className="text-white text-sm text-center">
                                            ✅ Exceptional Results
                                        </p>
                                    </div>
                                    <div className="row-span-2">
                                        <img
                                            src={taiyoClassroom}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                                        <p className="text-white text-sm text-center">
                                            💻 Online & In-Person
                                        </p>
                                    </div>
                                    <div className="row-span-2">
                                        <img
                                            src={classPhoto5}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                                        <p className="text-white text-sm text-center">
                                            🎯 Personalized Learning
                                        </p>
                                    </div>
                                    <div className="row-span-2">
                                        <img
                                            src={classPhoto6}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                                        <p className="text-white text-sm text-center">
                                            📈 ATAR Excellence Focus
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="grid grid-cols-2 gap-4 my-4">
                                    <div className="row-span-2">
                                        <img
                                            src={classPhoto1}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                                        <p className="text-white text-sm text-center">
                                            📖 Learn at Your Pace
                                        </p>
                                    </div>
                                    <div className="row-span-2">
                                        <img
                                            src={classPhoto2}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                                        <p className="text-white text-sm text-center">
                                            👩‍🏫 Expert Tutors Available
                                        </p>
                                    </div>
                                    <div className="row-span-2">
                                        <img
                                            src={entrance}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                                        <p className="text-white text-sm text-center">
                                            ✅ Exceptional Results
                                        </p>
                                    </div>
                                    <div className="row-span-2">
                                        <img
                                            src={taiyoClassroom}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                                        <p className="text-white text-sm text-center">
                                            💻 Online & In-Person
                                        </p>
                                    </div>
                                    <div className="row-span-2">
                                        <img
                                            src={classPhoto5}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                                        <p className="text-white text-sm text-center">
                                            🎯 Personalized Learning
                                        </p>
                                    </div>
                                    <div className="row-span-2">
                                        <img
                                            src={classPhoto6}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                                        <p className="text-white text-sm text-center">
                                            📈 ATAR Excellence Focus
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Hero;
